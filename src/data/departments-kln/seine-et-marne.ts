import type { DepartmentKln } from "~/types/department-klinova";

export const seineEtMarne: DepartmentKln = {
  slug: "seine-et-marne",
  department: {
    name: "Seine-et-Marne",
    code: "77",
  },

  // =========================
  // SEO & Hero (sobre, local, crédible)
  // =========================
  heroTitle: "Entreprise de nettoyage en Seine-et-Marne (77)",
  heroKicker: "Nord-77 & Sud-77 • Délais rapides selon secteur",
  heroDescription:
    "En Seine-et-Marne, Klinova intervient par secteurs (Nord-77 / Sud-77) pour tenir des délais réalistes, des résidences du Val d’Europe aux zones pavillonnaires plus éloignées. Moquettes de copropriété, canapés & tapis à domicile, balcons, parkings : protocole adapté au lieu, accès, contraintes et niveau d’encrassement.",

  // =========================
  // Images (tu peux remplacer les chemins plus tard)
  // =========================
images: {
  items: [
    {
      src: "/images/77-seine-et-marne-rue-pavillonnaire.webp",
      alt: "Rue pavillonnaire en Seine-et-Marne avec maisons individuelles et trottoirs résidentiels",
      width: 1200,
      height: 800,
      caption:
        "Quartiers pavillonnaires de Seine-et-Marne : interventions de nettoyage adaptées aux accès résidentiels et aux surfaces extérieures.",
    },
  ],
},


  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Spécificités d’intervention en Seine-et-Marne (77)",
    items: [
      "Département vaste : planification par secteurs (Nord-77 / Sud-77) pour limiter les trajets et tenir des créneaux cohérents.",
      "Habitat très mixte (pavillons, résidences récentes, copropriétés) : méthodes différentes selon accès, charges, surfaces et matériaux.",
      "Parkings et circulations en sous-sol fréquents : poussières fines, traces de pneus, zones humides, contraintes de ventilation et d’évacuation.",
      "Textiles d’ameublement très sollicités en zones familiales : taches alimentaires, auréoles, odeurs d’animaux, besoin de rinçage et séchage maîtrisés.",
      "Balcons exposés : pollution, mousses, coulures, fientes (selon secteurs) — intervention sécurisée, protection des écoulements et des abords.",
    ],
  },

  // =========================
  // Sections éditoriales (contexte + process)
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Nettoyage en Seine-et-Marne : résidences récentes, pavillons et parties communes",
     image: "/images/77-seine-et-marne-residence-copropriete.webp",
imageAlt: "Vue aérienne d’une résidence récente en Seine-et-Marne avec immeubles et espaces extérieurs",
imageCaption:
  "Résidences récentes et copropriétés : organisation des accès, des étages et des surfaces à entretenir.",

      html: `
        <p>
          La <strong>Seine-et-Marne (77)</strong> combine de grandes zones pavillonnaires, des pôles urbains récents
          et des secteurs très denses autour des gares et des zones d’activité. Cette diversité se retrouve dans
          les demandes de nettoyage : <strong>moquettes de copropriété</strong> (halls, paliers, couloirs),
          <strong>parkings</strong> (traces de pneus, poussières fines), <strong>balcons</strong> (pollution, mousses),
          et <strong>textiles d’ameublement</strong> à domicile (canapés, tapis, matelas).
        </p>
        <p class="mt-4">
          En résidence, l’enjeu est souvent la <strong>tenue dans le temps</strong> : une méthode stable, un bon
          séchage, une protection des abords et une organisation claire avec le syndic ou le gardien.
          En pavillon, l’enjeu est plutôt la <strong>qualité du résultat</strong> sur des surfaces très visibles
          (textiles, terrasses, abords), avec une attention particulière au rinçage, aux finitions et aux temps de séchage.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre méthode Klinova en Seine-et-Marne (77) : diagnostic, préparation, intervention, contrôle",
      html: `
        <p>
          Chaque prestation commence par un <strong>diagnostic</strong> : identification des zones à traiter,
          du type de support (moquette, textile, dalle, carrelage, béton), du niveau d’encrassement et des contraintes
          (accès, eau, évacuation, stationnement, voisinage, horaires). En copropriété, on raisonne aussi en
          <strong>flux de circulation</strong> (halls, ascenseurs, escaliers) et en <strong>risque de re-salissure</strong>.
        </p>
        <p class="mt-4">
          L’intervention vise un résultat net et durable : <strong>pré-aspiration</strong> et détachage ciblé sur textiles,
          <strong>injection-extraction</strong> lorsque c’est pertinent, rinçage contrôlé, et <strong>séchage maîtrisé</strong>.
          Sur parties communes et parkings, la priorité est la <strong>méthode</strong> (passes, bordures, angles, zones techniques)
          et la <strong>sécurité</strong> (signalisation, glissance, gestion de l’eau).
        </p>
        <p class="mt-4">
          En fin d’intervention, on valide la zone (contrôle visuel, finitions) et on te donne des recommandations simples
          pour éviter une re-salissure rapide (fréquences, points sensibles, protections éventuelles).
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (callout)
  // =========================
  logistics:
    "Pour couvrir efficacement la Seine-et-Marne, Klinova planifie les interventions en tournées <strong>Nord-77</strong> et <strong>Sud-77</strong>. Accès résidence, badge, ascenseur, stationnement, contraintes d’horaires : on anticipe la logistique avec vous pour une intervention fluide, propre et discrète. Selon le chantier (textiles / parkings / balcons), le temps de séchage et les conditions de ventilation sont pris en compte dès la préparation.",

  // =========================
  // FAQ (4–6)
  // =========================
  faq: [
    {
      question: "Intervenez-vous partout en Seine-et-Marne (77) ?",
      answer:
        "Oui. Même si toutes les communes n’ont pas encore une page dédiée, Klinova intervient sur l’ensemble du 77. Les créneaux sont proposés selon le secteur (Nord-77 / Sud-77) et la nature de la prestation.",
    },
    {
      question: "Combien de temps faut-il pour sécher une moquette après injection-extraction ?",
      answer:
        "Le temps de séchage dépend de l’épaisseur, de la ventilation, de la température et du niveau d’humidité. En conditions normales, on vise un séchage progressif sur plusieurs heures. On adapte la méthode (rinçage, extraction, passes) pour limiter l’eau résiduelle et on vous donne les consignes de ventilation.",
    },
    {
      question: "Pouvez-vous enlever les odeurs sur un canapé (animaux, tabac, humidité) ?",
      answer:
        "Souvent oui, surtout si l’odeur est liée à des salissures ou à des résidus organiques. Le résultat dépend de la profondeur de la contamination et de la nature du textile/mousse. On combine détachage ciblé, rinçage/extraction et désodorisation selon le cas.",
    },
    {
      question: "En copropriété, comment gérez-vous les parties communes (halls, paliers, couloirs) ?",
      answer:
        "On intervient avec une organisation pensée pour la circulation : signalisation, protection des zones sensibles, ordre de passage logique, finitions sur bordures/angles. L’objectif est un résultat propre et homogène, sans gêner inutilement les résidents.",
    },
    {
      question: "Nettoyez-vous aussi les parkings souterrains en Seine-et-Marne ?",
      answer:
        "Oui. Les parkings demandent une méthode spécifique : gestion de l’eau, sécurité (glissance), poussières fines, zones techniques, ventilation. Le protocole est adapté à la surface, au niveau d’encrassement et aux contraintes du site.",
    },
    {
      question: "Doit-on préparer quelque chose avant votre venue ?",
      answer:
        "Selon la prestation, oui : dégager l’accès aux zones, libérer les surfaces à traiter (textiles/sols), prévoir un accès à l’eau si nécessaire, et nous signaler les contraintes (badge, horaires, stationnement). On vous donne des consignes simples en amont.",
    },
  ],

  // =========================
  // Liens internes (villes)
  // =========================
  internalLinks: [
    { label: "Chelles", href: "/zones-d-intervention/seine-et-marne/chelles" },
    { label: "Champs-sur-Marne", href: "/zones-d-intervention/seine-et-marne/champs-sur-marne" },
    { label: "Torcy", href: "/zones-d-intervention/seine-et-marne/torcy" },
    { label: "Bussy-Saint-Georges", href: "/zones-d-intervention/seine-et-marne/bussy-saint-georges" },
 
  ],

  // =========================
  // SEO override
  // =========================
  seo: {
    title: "Entreprise de nettoyage Seine-et-Marne (77) | Klinova",
    description:
      "Entreprise de nettoyage en Seine-et-Marne (77) : moquettes de copropriété, canapés & tapis à domicile, balcons, parkings. Intervention par secteurs (Nord-77 / Sud-77), méthode adaptée, finitions soignées. Devis rapide.",
  },
};
