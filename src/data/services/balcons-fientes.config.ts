// src/data/services/balcons-fientes.config.ts
import type { ServiceConfig } from "~/types/geo";

const balconsFientes: ServiceConfig = {
  key: "balcons-fientes",
  name: "Nettoyage de balcons – fientes de pigeons",
  urls: {
    parent: "/nettoyage-balcons-fientes-pigeons",
  },
  defaultDescription:
    "Nettoyage et désinfection de balcons souillés par des fientes et pose de pics ou filets anti-pigeons.",

  benefits: [
    "Intervention avec EPI complets",
    "Désinfection avant et après",
    "Aspiration HEPA sécurisée",
    "Prévention possible après nettoyage",
  ],

  process: [
    {
      step: "Préparation & sécurité",
      description:
        "Port des EPI, balisage du périmètre, pré-humectation et désinfection avec respect du temps de contact.",
    },
    {
      step: "Retrait des fientes",
      description:
        "Élimination mécanique par raclage ou aspiration HEPA selon les surfaces et le niveau de dépôt.",
    },
    {
      step: "Nettoyage du balcon",
      description:
        "Application d’un détergent adapté au matériau, brossage si nécessaire, rinçage contrôlé sans coulure.",
    },
    {
      step: "Désinfection finale",
      description:
        "Pulvérisation d’un désinfectant certifié et évacuation des déchets biologiques dans des sacs dédiés.",
    },
  ],

  /**
   * PRICING TIERS (nouveau modèle)
   * - Sert au JSON-LD OfferCatalog via buildPricingOffers
   * - Et peut servir à un mini bloc “À partir de …”
   */
  pricingTiers: [
    {
      name: "Balcon souillé par fientes (désinfection + retrait sécurisé)",
      description:
        "À partir de 390€ TTC. Inclut EPI, pré-désinfection, retrait sécurisé et désinfection finale. Tarif indicatif selon surface, volume de dépôt et accès.",
      priceType: "from",
      from: 390,
      vatIncluded: true,
      currency: "EUR",
    },
    {
      name: "Cas lourds / dépôts importants / accès complexe",
      description:
        "Sur devis après diagnostic (dépôts très importants, recoins difficiles, contraintes d’évacuation, accès/hauteur).",
      priceType: "quote",
      currency: "EUR",
    },
    {
      name: "Prévention anti-pigeons (pics / filet)",
      description:
        "Sur devis selon configuration (linéaire, supports, fixations, accès).",
      priceType: "quote",
      currency: "EUR",
    },
  ],

  // (Optionnel) Legacy, si tu veux garder une compatibilité le temps de migrer tout le front
  // pricing: { from: "390 €", unit: "par intervention" },

  faq: [
    {
      question: "Quels produits utilisez-vous pour désinfecter ?",
      answer:
        "Nous utilisons un désinfectant professionnel prêt à l’emploi, sans parfum, conforme aux normes EN1276, EN13697, EN1650. Il agit en une seule étape (nettoyage + désinfection), sans rinçage obligatoire, et reste compatible avec la plupart des revêtements de balcon.",
    },
    {
      question: "Proposez-vous des solutions pour éviter le retour des pigeons ?",
      answer:
        "Oui. Nous proposons la pose de pics anti-pigeons sur les rebords, garde-corps ou appuis exposés. Dans les rares cas où cela ne suffit pas, nous pouvons également installer un filet de protection discret et résistant, si la configuration du balcon le permet.",
    },
    {
      question: "Dois-je vider complètement mon balcon avant l’intervention ?",
      answer:
        "Oui, il est préférable de retirer les éléments mobiles : petits meubles, plantes, textiles, jouets. Cela permet un nettoyage complet et sans gêne. Si besoin, nous pouvons aussi prendre en charge le retrait des déchets accumulés.",
    },
    {
      question: "Comment évitez-vous que les produits ou saletés coulent chez les voisins ?",
      answer:
        "Nous pré-humidifions les fientes pour éviter les poussières volatiles, puis utilisons peu d’eau pour le nettoyage. Quand c’est possible, nous guidons les eaux vers l’évacuation et utilisons des raclettes pour contenir les écoulements. Le travail est propre, sans nuisance pour les voisins.",
    },
    {
      question: "Quand pourrai-je réutiliser mon balcon ?",
      answer:
        "Le balcon est généralement réutilisable quelques heures après l’intervention, une fois les surfaces sèches. Cela dépend de l’aération et des conditions météo. Le produit désinfectant est sans odeur et ne laisse pas de résidu gênant.",
    },
  ],
};

export default balconsFientes;
