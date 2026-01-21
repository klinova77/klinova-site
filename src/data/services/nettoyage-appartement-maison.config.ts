// D:\Klinova-site\src\data\services\nettoyage-appartement-maison.config.ts
import type { ServiceConfig } from "~/types/geo";

const nettoyageAppartementMaisonConfig: ServiceConfig = {
  key: "nettoyage-appartement-maison",
  name: "Nettoyage d'appartements et maisons",
  defaultDescription:
    "Nettoyage complet orienté remise en état : logement prêt pour état des lieux, mise en vente/location ou reprise après déménagement. Approche par check-list, finitions soignées et résultat homogène.",

  benefits: [
    "Remise en état orientée résultat (pas de ménage à l'heure)",
    "Check-list par pièces et points de contrôle",
    "Dégraissage cuisine et sanitaires (détartrage ciblé)",
    "Dépoussiérage minutieux des zones hautes et plinthes",
    "Finitions vitreries accessibles et surfaces de contact",
    "Organisation efficace pour limiter l'immobilisation du logement",
  ],

  process: [
    {
      step: "Cadrage et préparation",
      description:
        "Point d'entrée (objectif, niveau d'encrassement, accès), protection des zones sensibles, tri des priorités et plan d'intervention par pièces",
    },
    {
      step: "Dépoussiérage et décrassage",
      description:
        "Dépoussiérage du haut vers le bas, nettoyage des surfaces, plinthes et points de contact, traitement ciblé des zones grasses et marquées",
    },
    {
      step: "Cuisine et sanitaires",
      description:
        "Dégraissage et nettoyage approfondi (plans, façades, crédence), détartrage ciblé des sanitaires, désinfection raisonnée des zones à risque",
    },
    {
      step: "Sols, finitions et contrôle",
      description:
        "Aspiration et lavage des sols adaptés au support, reprise des détails, collecte des déchets légers et contrôle qualité final avant restitution",
    },
  ],

  equipment: [
    "Aspirateurs professionnels (filtration adaptée)",
    "Microfibres et kits de nettoyage par codes couleur",
    "Détergents et dégraissants professionnels",
    "Détartrants ciblés pour sanitaires",
    "Outils de grattage et accessoires de précision",
    "Protection des surfaces et consommables",
  ],

  averageDuration: "4-8 heures selon surface et état",

  pricingTiers: [
    {
      name: "Studio / T2 (forfait remise en état)",
      description:
        "Dès 290€ TTC. Idéal : état des lieux, déménagement, remise à niveau avant relocation.",
      priceType: "from",
      from: 290,
      vatIncluded: true,
      currency: "EUR",
    },
    {
      name: "Appartements / maisons (sur devis)",
      description:
        "Sur devis. Estimation selon m², niveau d'encrassement et objectifs (vente, location, état des lieux).",
      priceType: "quote",
      currency: "EUR",
    },
    {
      name: "Après travaux (nettoyage fin de chantier léger)",
      description:
        "Sur devis. Idéal : dépoussiérage fin, traces, résidus légers, finitions avant emménagement.",
      priceType: "quote",
      currency: "EUR",
    },
  ],

  faq: [
    {
      question: "Est-ce du ménage classique (récurrent) ?",
      answer:
        "Non. Ce service est une remise en état ponctuelle orientée résultat (état des lieux, vente/location, reprise après déménagement). Nous ne proposons pas d'abonnements de ménage hebdomadaire ni de prestations à l'heure avec repassage.",
    },
    {
      question: "Que comprend la remise en état ?",
      answer:
        "Le socle comprend dépoussiérage complet, cuisine et sanitaires (dégraissage/détartrage ciblé), surfaces de contact, sols adaptés au support et finitions. Le périmètre exact est cadré avant intervention selon l'état et l'objectif.",
    },
    {
      question: "Intervenez-vous sur les vitreries ?",
      answer:
        "Oui, sur les vitreries accessibles et les traces courantes, en particulier quand cela participe au rendu final. Pour les surfaces vitrées étendues ou difficiles d'accès, un complément peut être proposé.",
    },
    {
      question: "Faut-il que le logement soit vide ?",
      answer:
        "Idéalement oui, surtout pour un rendu 'état des lieux'. Si le logement est encore meublé, nous adaptons l'intervention en travaillant par zones et en priorisant les points visibles et les surfaces de contact.",
    },
    {
      question: "Combien de temps faut-il prévoir ?",
      answer:
        "En général 4 à 8 heures selon la surface et le niveau d'encrassement. Pour les grands logements ou les cas très chargés, une intervention sur une journée complète peut être nécessaire.",
    },
  ],

  urls: {
    parent: "/nettoyage-appartement-maison",
  },
};

export default nettoyageAppartementMaisonConfig;
