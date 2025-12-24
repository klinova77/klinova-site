// src/data/cities/montfermeil.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Montfermeil",
  slug: "montfermeil",
  postalCodes: ["93370"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },


  customDescription:
    "Située à la lisière de la forêt de Bondy, Montfermeil connaît une mutation profonde. La densification urbaine autour du tracé du Tram T4 et la rénovation du Plateau ont multiplié les résidences modernes. Ces nouveaux ensembles immobiliers nécessitent un entretien technique rigoureux pour conserver leur standing face à l'usure quotidienne.",

  hubIntro: `<p>À Montfermeil, la propreté des parties communes dépend autant de la méthode que de l’organisation : accès en pente, résidences hétérogènes, et circulation quotidienne autour du tram T4. Klinova accompagne les syndics, gestionnaires et entreprises avec une approche de maintenance immobilière structurée, pensée pour préserver l’image et le confort des occupants.</p>
<p class="mt-4">Notre priorité : intervenir sans perturber la vie de l’immeuble. Nous cadrons les accès (badges, horaires, zones de travail), protégeons les abords sensibles et appliquons des protocoles adaptés aux moquettes, sols techniques, parkings et extérieurs. Le suivi reste clair, factuel, et orienté “tenue dans le temps”.</p>
<ul>
  <li><strong>Coordination simple :</strong> accès, créneaux, information des résidents, zones prioritaires, en lien avec syndic, gardien ou conseil syndical.</li>
  <li><strong>Protocoles éprouvés :</strong> injection-extraction, autolaveuse, dégraissage ciblé, gestion de l’eau et finitions soignées.</li>
  <li><strong>Adaptation au bâti local :</strong> immeubles collectifs, grandes résidences, habitat pavillonnaire et copropriétés plus anciennes.</li>
  <li><strong>Compte-rendu utile :</strong> points traités, contraintes rencontrées, recommandations d’entretien pour stabiliser la propreté.</li>
</ul>`,

  citySpecificChallenges: [
    "Dépôts verts et mousses sur balcons liés aux zones boisées (forêt de Bondy) et aux expositions ombragées.",
    "Encrassement accéléré des halls d'entrée par le trafic piétonnier vers les stations T4 et les commerces du centre.",
    "Accès en forte déclivité et rues étroites : logistique à anticiper pour matériel et évacuation des déchets.",
    "Zones à fort trafic piétonnier (arrêts du T4, commerces) : salissures rapides aux entrées et dans les circulations."
  ],

 

  districts: ["Centre-ville", "Les Coudreaux", "Les Bosquets", "Franceville"],

nearbyCities: [
  "neuilly-sur-marne",
  "chelles",
  "gournay-sur-marne",
  "gagny",
  "villeparisis",
  "le-raincy",
  "livry-gargan",
],

  landmarks: [
    "Mairie de Montfermeil",
    "Tramway T4 — Hôpital de Montfermeil",
    "Forêt de Bondy",
    "Moulin du Sempin (Moulin de Montfermeil)",
    "Place Jean Mermoz",
    "GHI Le Raincy–Montfermeil (site de Montfermeil)"
  ],

  faq: [
    {
      question:
        "Intervenez-vous sur les secteurs en pente et les accès étroits de Montfermeil ?",
      answer:
        "Oui. Nous anticipons la logistique (stationnement, acheminement du matériel, zones de déchargement) et adaptons l’organisation selon la configuration : rues en déclivité, sentes, cages d’escalier étroites. L’objectif est de maintenir une intervention fluide et discrète, sans gêner la circulation ni les accès des résidents."
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, badges, clés) en copropriété ?",
      answer:
        "Dès le cadrage, nous définissons une procédure simple avec le syndic, le gardien ou un référent : remise des badges, horaires autorisés, zones sensibles, consignes d’ouverture/fermeture. Cela évite les allers-retours inutiles et garantit la continuité des prestations, notamment pour les halls, parkings et cages d’escalier."
    },
    {
      question:
        "Pouvez-vous intervenir tôt pour limiter la gêne des résidents (parkings, halls) ?",
      answer:
        "Oui. Selon le site, nous planifions en heures creuses (matin, milieu de journée, fin d’après-midi) et travaillons par zones lorsque c’est nécessaire. Sur les parkings, l’organisation peut inclure une rotation partielle des véhicules, validée avec le syndic, pour conserver de l’usage pendant l’intervention."
    },
    {
      question:
        "Proposez-vous un diagnostic sur place avant de lancer une intervention ?",
      answer:
        "Oui. Nous privilégions un repérage court mais précis : surfaces, état des revêtements, contraintes d’accès, évacuations, points de sécurité. Cela permet de choisir la bonne méthode, d’éviter les surprises le jour J, et de proposer un planning réaliste avec un impact minimal pour les occupants."
    }
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: ""
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Redonnez une propreté visible aux halls et cages d’escalier : moquettes ravivées, taches désincrustées, et une sensation d’entretien net pour les résidents à Montfermeil.",
      whyUsBullets: [
        "Repérage du bâti local : centre-ville, Franceville, grandes résidences et circulations à fort passage.",
        "Injection-extraction calibrée : nettoyage profond, fibre préservée, humidité maîtrisée pour limiter le séchage.",
        "Organisation discrète : balisage, travail par zones, créneaux adaptés aux flux des résidents.",
        "Compte-rendu utile au gestionnaire : zones traitées, observations, recommandations de fréquence."
      ],

   uniqueIntro: `<p>Dans les copropriétés de Montfermeil, notamment les résidences récentes construites le long de l’avenue Jean Jaurès ou près de l’Hôpital, les moquettes des parties communes sont soumises à rude épreuve. L’augmentation du trafic piétonnier entre les stations de transport et les logements favorise l’apport constant de poussières extérieures et de salissures dans les halls d’entrée.</p>
<p class="mt-4">Cet encrassement, aggravé par la proximité des zones boisées et les chantiers en cours, transforme les fibres textiles en pièges à allergènes. Les couloirs ternissent rapidement, donnant une fausse impression de vétusté qui nuit à l'image de la résidence.</p>
<p class="mt-4">Un nettoyage professionnel par injection-extraction permet de désincruster ces zones de fort passage et de redonner leur éclat aux parties communes.</p>`,

      uniqueDeepDive: `<p>Nous commençons par un diagnostic sur place : type de moquette, zones de fort trafic, nature des taches et contraintes d’accès (cages étroites, paliers, angles). Nous protégeons les bas de murs et les points sensibles, puis nous organisons le chantier par tronçons pour garder des circulations praticables.</p>
<p class="mt-4">Le cœur de la méthode repose sur l’injection–extraction : une solution nettoyante est injectée au plus près des fibres, puis immédiatement aspirée avec les salissures dissoutes. Sur les zones très marquées (devant ascenseurs, boîtes aux lettres, entrées), nous passons en croisé pour homogénéiser le rendu. En fin d’intervention, nous optimisons le séchage (aération, extraction maximale) et nous conseillons une fréquence d’entretien réaliste, souvent tous les 12 à 18 mois selon l’usage.</p>`,

     specificChallenges: [
  "L’humidité naturelle liée à la proximité de la forêt de Bondy favorise les odeurs de renfermé dans les moquettes des rez-de-chaussée insuffisamment ventilés.",
  "Les poussières fines issues des chantiers de rénovation urbaine (secteur des Bosquets) s’incrustent profondément dans les fibres, rendant le nettoyage de surface inefficace.",
  "Les accès complexes de certaines bâtisses anciennes du centre historique imposent l’utilisation de matériel portatif et une organisation spécifique dans les escaliers étroits."
],


      faqAdditions: [
        {
          question:
            "Traitez-vous aussi les marches d’escalier moquettées, pas seulement les paliers ?",
          answer:
            "Oui. Nous intervenons sur l’ensemble des surfaces moquettées : paliers, couloirs et marches. Selon la configuration, nous avançons étage par étage pour maintenir une circulation possible. Le réglage de l’injection–extraction est adapté aux reliefs et aux zones de frottement, afin d’obtenir un rendu uniforme dans toute la cage."
        },
        {
          question:
            "Intervenez-vous chez les professionnels (bureaux, cabinets) en plus des copropriétés ?",
          answer:
            "Oui. Bureaux, espaces d’accueil, salles d’attente ou petites structures : dès lors qu’il y a de la moquette, nous adaptons la méthode et surtout l’organisation. L’intervention peut être planifiée hors heures d’ouverture ou sur des créneaux calmes, pour préserver la confidentialité et éviter toute interruption de l’activité."
        },
        {
          question:
            "La méthode risque-t-elle d’abîmer une moquette ancienne ou fragile ?",
          answer:
            "Non, si elle est correctement calibrée. Le diagnostic sert à ajuster pression, température et produits selon la fibre et l’état du support. Sur des moquettes usées, nous privilégions des solutions douces et une action mécanique limitée."
        },
        {
          question:
            "Combien de temps faut-il attendre avant de circuler normalement ?",
          answer:
            "La circulation est souvent possible rapidement, car l’aspiration réduit fortement l’humidité résiduelle. En pratique, comptez quelques heures selon l’aération et la densité de la fibre. Pour un séchage “à cœur” optimal, nous recommandons si possible une demi-journée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking plus clair, plus sûr et plus lisible : décrassage mécanique, sols moins glissants, et marquages qui redeviennent visibles pour les résidents à Montfermeil.",
      whyUsBullets: [
        "Organisation adaptée aux accès en pente : rampes, niveaux, zones étroites et sécurité des circulations.",
        "Autolaveuse + dégraissage ciblé : poussière noire, traces de pneus, hydrocarbures sur béton ou résine.",
        "Travail par zones avec rotation : maintien d’une capacité de stationnement quand c’est nécessaire.",
        "Contrôle des évacuations : gestion de l’eau et finitions pour laisser un sol propre et stable."
      ],

      uniqueIntro: `<p>Les parkings de copropriété à Montfermeil s’encrassent vite : poussière noire, traces de pneumatiques, auréoles d’huile et murs marqués. Avec le temps, l’espace devient plus sombre, plus glissant, et les marquages perdent en lisibilité, ce qui dégrade le confort et la sensation de sécurité.</p>
<p class="mt-4">Un simple balayage ne suffit pas à retirer les graisses incrustées. Un décrassage professionnel, organisé et contrôlé, permet de remettre le sol “au propre”, d’améliorer l’adhérence, et de revaloriser l’image globale de la résidence, sans bloquer inutilement l’usage du parking.</p>`,

      uniqueDeepDive: `<p>Nous commençons par une visite technique : nature du sol (béton, peinture, résine), état des marquages, accès et rampes, points d’eau et évacuations. La préparation inclut un dépoussiérage complet, l’enlèvement des déchets et un balisage clair. Lorsque nécessaire, le chantier est organisé par zones pour coordonner une rotation simple des véhicules.</p>
<p class="mt-4">Le nettoyage repose sur l’autolaveuse (brossage + aspiration des eaux) et, selon le niveau d’encrassement, un traitement haute pression ciblé sur les zones très grasses. Nous utilisons des dégraissants professionnels adaptés et maîtrisons la gestion des eaux de lavage (récupération et évacuation conforme selon les équipements du site). En fin d’intervention, nous insistons sur rampes, angles et pieds de murs, puis recommandons une fréquence d’entretien (souvent 1 à 2 décrassages/an sur sites exposés).</p>`,

      specificChallenges: [
        "Rampes en déclivité : besoin d’un décrassage rigoureux pour conserver adhérence et sécurité, notamment en hiver.",
        "Sous-sols anciens peu ventilés : poussières fines qui se redéposent vite, nécessité d’une aspiration efficace.",
        "Taches d’huile anciennes sur béton poreux : traitement localisé intensif, résultat “net” sans promettre l’effacement parfait."
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient-elle rapidement après le nettoyage ?",
          answer:
            "Un décrassage complet élimine la poussière accumulée et réduit fortement sa volatilité. Ensuite, elle revient progressivement (pneus, freins, circulation), mais à un rythme bien plus lent si un entretien régulier évite la formation d’une couche grasse et glissante."
        },
        {
          question:
            "Faut-il vider totalement le parking pour intervenir ?",
          answer:
            "Ce n’est pas obligatoire. Nous pouvons travailler par zones ou par demi-niveaux. La rotation des véhicules est cadrée à l’avance avec le syndic ou un référent, pour libérer progressivement les emplacements."
        },
        {
          question:
            "Pouvez-vous enlever toutes les taches d’huile, même anciennes ?",
          answer:
            "Nous obtenons d’excellents résultats sur les taches récentes. Sur des taches anciennes très imprégnées dans un béton brut, une auréole peut rester. En revanche, la surface est assainie : elle n’est plus grasse ni glissante."
        },
        {
          question:
            "Que faites-vous des eaux de lavage ?",
          answer:
            "Nous travaillons avec récupération et évacuation conforme selon les équipements du site (évacuations, séparateurs si présents et fonctionnels), ou avec récupération si nécessaire. Les eaux chargées ne sont pas rejetées “au hasard”."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Un balcon propre et agréable à utiliser : dépôts verts, traces de pollution et salissures retirés avec une méthode contrôlée, sans abîmer les surfaces à Montfermeil.",
      whyUsBullets: [
        "Adaptation au contexte local : balcons ombragés, dépôts verts, poussières fines et sols très encrassés.",
        "Nettoyage maîtrisé : produits adaptés au support, brossage efficace, pression douce si nécessaire.",
        "Zéro coulure : gestion de l’eau au fil du lavage pour respecter façade et voisinage.",
        "Finitions soignées : rails, angles, garde-corps, vitres accessibles et points de reprise visibles."
      ],

      uniqueIntro: `<p>À Montfermeil, les balcons et terrasses s’encrassent vite : mousses dans les zones ombragées, dépôts de pollution, traces d’eau, résidus de jardinières ou de barbecue. Au fil des mois, l’extérieur devient moins agréable et finit par servir de zone de stockage plutôt que d’espace de vie.</p>
<p class="mt-4">Une remise en état professionnelle permet de décaper sans agresser le support, de retrouver un sol propre et des finitions nettes, et surtout de réutiliser l’espace au quotidien. L’intervention est pensée pour être propre, maîtrisée et respectueuse du voisinage en immeuble collectif.</p>`,

      uniqueDeepDive: `<p>Nous protégeons les menuiseries et les abords, puis retirons manuellement les dépôts (feuilles, terre, déchets) pour éviter d’étaler la saleté et limiter le risque de bouchage. Nous appliquons ensuite un produit adapté au support (carrelage, dalle béton, bois composite) et brossons les zones marquées (joints, angles, seuils).</p>
<p class="mt-4">Si nécessaire, nous utilisons une pression douce et contrôlée, jamais agressive pour les joints. La gestion de l’eau est centrale : raclage, contrôle du flux vers l’évacuation, et aspiration à eau si l’évacuation est douteuse, afin d’éviter toute coulure chez le voisin du dessous. En fin de prestation, nous laissons l’espace propre et réutilisable rapidement.</p>`,

      specificChallenges: [
        "Dépôts verts rapides sur balcons ombragés : mousses et lichens favorisés par proximité des zones boisées.",
        "Poussières fines de chantiers : voile tenace sur carrelages et dalles, surtout sur terrasses exposées.",
        "Évacuations parfois inefficaces : nécessité d’aspirer l’eau de lavage pour éviter coulures et infiltrations."
      ],

      faqAdditions: [
        {
          question:
            "Utilisez-vous la haute pression à pleine puissance sur le carrelage ?",
          answer:
            "Non. Une pression trop forte peut fragiliser les joints ou marquer certains supports. Nous privilégions une action chimique adaptée et un brossage, puis une pression douce et contrôlée si nécessaire."
        },
        {
          question:
            "Comment évitez-vous que l’eau sale coule chez le voisin du dessous ?",
          answer:
            "Nous travaillons avec la quantité d’eau strictement nécessaire et gérons le flux au fil du lavage : raclette, récupération, et aspiration à eau si l’évacuation est douteuse. L’objectif est un balcon propre, sans coulures."
        },
        {
          question:
            "Vos produits sont-ils dangereux pour les plantes ou les animaux ?",
          answer:
            "Nous protégeons ou déplaçons les plantes et rinçons correctement les surfaces. Si vous avez des animaux sensibles ou des plantations fragiles, nous adaptons la méthode pour rester efficace sans sur-dose."
        },
        {
          question:
            "Combien de temps faut-il pour que le balcon sèche ?",
          answer:
            "Cela dépend de la météo, de l’exposition et du support. Sur carrelage, le séchage est souvent rapide par temps sec ; sur supports plus poreux, cela prend un peu plus de temps. Dans tous les cas, nous limitons l’eau résiduelle par raclage et, si besoin, aspiration."
        }
      ],
      ctaOverride: ""
    },

  // =========================
// SERVICE 4 – BALCONS FIENTES
// =========================
{
  serviceKey: "balcons-fientes",
  heroDescription:
    "Retrouvez un extérieur sain et sans risques à Montfermeil grâce à une désinfection professionnelle qui élimine totalement fientes et agents pathogènes, rendant votre balcon immédiatement réutilisable en toute sécurité.",

  whyUsBullets: [
    "Expertise des pavillons de Franceville et des loggias exposées aux zones boisées.",
    "Protocole sanitaire strict : EPI complet, confinement et maîtrise des risques liés aux poussières.",
    "Gestion rigoureuse des déchets contaminés : enlèvement et évacuation hors poubelles domestiques.",
    "Maîtrise stricte des eaux de rinçage pour éviter contamination des balcons inférieurs et de la façade.",
  ],

  uniqueIntro: `<p>La présence de pigeons est une réalité à Montfermeil, favorisée par la proximité de la Forêt de Bondy et les nombreux toits des zones pavillonnaires comme Franceville qui offrent des lieux de nidification idéaux. Lorsqu’un balcon est colonisé, la situation devient vite invivable : accumulation de fientes acides, odeurs persistantes et risques sanitaires liés aux poussières séchées.</p>
<p class="mt-4">Cet encrassement rend l’espace extérieur inutilisable et peut créer des tensions de voisinage dues aux nuisances olfactives ou visuelles. Au-delà du simple nettoyage, il s’agit d’une décontamination qui nécessite un équipement de protection spécifique pour éviter toute inhalation de particules nocives.</p>
<p class="mt-4">Une intervention professionnelle permet d’obtenir un résultat sûr, sans disperser les contaminants dans l’air ou chez les voisins, et de retrouver un balcon propre, sain et réutilisable.</p>`,

  uniqueDeepDive: `<p>Notre intervention à Montfermeil suit un protocole de sécurité sanitaire strict. Le technicien s’équipe d’une combinaison étanche et d’un masque respiratoire (EPI) avant de confiner la zone de travail pour protéger votre intérieur. La première étape cruciale est l’humidification contrôlée des fientes sèches : cela empêche les poussières contaminées de se disperser. Nous procédons ensuite au grattage manuel et à l’enlèvement des nids et déchets, immédiatement conditionnés dans des sacs hermétiques.</p>
<p class="mt-4">Une fois le balcon débarrassé du plus gros, nous nettoyons les surfaces (sol, garde-corps, appuis de fenêtre) avec des détergents adaptés, en veillant à ne pas abîmer les matériaux. L’intervention se termine par l’application d’un produit désinfectant virucide et bactéricide homologué, en respectant le temps de pose nécessaire pour neutraliser les germes. Nous rinçons soigneusement en maîtrisant l’écoulement de l’eau et vous indiquons le délai de séchage avant de pouvoir réinvestir les lieux.</p>`,

  specificChallenges: [
    "Nidification sous toitures en zone pavillonnaire (Franceville, Les Coudreaux) : les fientes tombent directement sur les balcons des étages inférieurs.",
    "Fientes sèches volatiles : risque sanitaire accru, nécessitant une humidification minutieuse avant tout grattage.",
    "Surfaces poreuses (béton, pierre meulière) fréquentes dans le bâti ancien : nettoyage délicat pour désincruster sans faire pénétrer les salissures.",
  ],

  faqAdditions: [
    {
      question:
        "Pourquoi ne puis-je pas nettoyer les fientes moi-même avec de l'eau de Javel ?",
      answer:
        "C’est déconseillé : sans protection et sans méthode, le risque principal est de remettre en suspension des poussières sèches et de disperser la contamination. De plus, la Javel n’est pas toujours adaptée aux supports (joints, métaux, surfaces poreuses) et peut abîmer certains matériaux. Notre protocole vise un nettoyage maîtrisé et une désinfection efficace, sans risque inutile pour vous ni pour l’immeuble.",
    },
    {
      question:
        "Vos produits de désinfection sont-ils dangereux pour mes animaux une fois secs ?",
      answer:
        "Non. Nous utilisons des biocides professionnels au moment de l’application, puis nous rinçons soigneusement et laissons sécher. Une fois le rinçage effectué et le séchage terminé, les surfaces peuvent être réutilisées normalement. Nous vous indiquons clairement les précautions et le délai à respecter sur place.",
    },
    {
      question:
        "Les fientes ont-elles abîmé mon carrelage ou mon béton de façon définitive ?",
      answer:
        "L’acidité des fientes est corrosive. Si elles sont restées longtemps, elles peuvent avoir “maté” un carrelage (vernis/émail) ou laissé des auréoles dans un béton brut. Notre intervention retire la saleté et réduit le risque sanitaire, mais ne peut pas toujours corriger une corrosion chimique ancienne du matériau.",
    },
    {
      question: "Que faites-vous des sacs de fientes ramassés ?",
      answer:
        "Nous ne les jetons pas dans vos poubelles domestiques ni dans le vide-ordures. Nous emportons l’intégralité des déchets contaminés (fientes, nids, débris) hors du logement, dans des sacs étanches, afin de laisser un chantier propre et sans risque pour les occupants.",
    },
  ],

  ctaOverride: "",
},


   
// SERVICE 5 – CANAPÉS / TAPIS / MATELAS
// =========================
{
  serviceKey: "canapes-tapis",

  heroDescription:
    "Redonnez fraîcheur et hygiène à votre intérieur à Montfermeil grâce à un nettoyage professionnel par injection-extraction de vos canapés, tapis et matelas, éliminant taches et allergènes directement à domicile.",

  whyUsBullets: [
    "Apports saisonniers de pollens de la forêt de Bondy qui se fixent durablement dans les fibres textiles.",
    "Traitement anti-acariens et allergènes : méthode éprouvée pour désinfecter matelas, canapés et tapis en profondeur.",
    "Intervention discrète à domicile : protection des sols, bruit maîtrisé et respect de votre intérieur.",
    "Conseils d’entretien personnalisés : gestes simples pour prolonger la propreté selon votre mode de vie.",
  ],

  uniqueIntro: `<p>Dans les zones pavillonnaires comme Franceville ou dans les appartements du Plateau, les textiles d’ameublement sont au cœur de la vie familiale. Canapés, tapis et matelas subissent quotidiennement les sollicitations des enfants, des animaux de compagnie revenant du jardin et des repas pris sur le pouce.</p>
<p class="mt-4">Au-delà des taches visibles de café, de feutre ou de nourriture, c’est la pollution invisible qui pose problème : poussières fines, allergènes et acariens s’incrustent progressivement dans les fibres. Cette accumulation ternit les couleurs, fixe les odeurs et peut gêner les personnes sensibles.</p>
<p class="mt-4">L’aspirateur domestique ne permet pas d’extraire ce qui est logé au cœur de la mousse. Une intervention professionnelle par injection-extraction permet de désinfecter en profondeur vos assises et literies, leur redonnant confort et propreté sans avoir à remplacer le mobilier.</p>`,

  uniqueDeepDive: `<p>Notre technicien se déplace à votre domicile à Montfermeil avec un équipement professionnel complet. L’intervention débute par un diagnostic précis des fibres (coton, velours, lin, synthétique) afin d’adapter la température, la pression et la chimie de nettoyage. Nous protégeons soigneusement les sols (parquet, carrelage) et les abords avant d’appliquer un pré-traitement détachant ciblé sur les zones les plus sollicitées : accoudoirs, assises, traces alimentaires ou zones de frottement.</p>
<p class="mt-4">Le nettoyage s’effectue ensuite par injection-extraction : une solution nettoyante est injectée au cœur du textile puis aspirée sous vide avec les salissures dissoutes. Ce procédé lave la fibre en profondeur tout en maîtrisant l’humidité, sans détremper la structure du canapé ou du matelas. Nous terminons par une aspiration de finition pour redresser les fibres et vous conseillons sur la ventilation de la pièce afin d’optimiser le séchage.</p>`,

  specificChallenges: [
    "Proximité de la forêt de Bondy : apports saisonniers importants de pollens et d’allergènes qui se fixent durablement dans les tissus (canapés, tapis, rideaux).",
    "Poussières fines issues des chantiers de rénovation urbaine et du tram T4 : particules volatiles qui ternissent les textiles clairs et nécessitent une extraction puissante.",
    "Humidité fréquente en rez-de-jardin ou rez-de-chaussée : conditions favorables au développement des acariens dans les matelas, nécessitant un nettoyage en profondeur régulier.",
  ],

  faqAdditions: [
    {
      question:
        "Le nettoyage permet-il d’éliminer les acariens et de réduire les allergies ?",
      answer:
        "Oui. L’injection-extraction permet d’aspirer en profondeur les poussières, déjections d’acariens et allergènes incrustés dans les fibres. Sans prétendre à un environnement totalement stérile, cette méthode réduit fortement la charge allergène et améliore nettement la qualité de l’air intérieur.",
    },
    {
      question:
        "Pouvez-vous retirer les odeurs d’urine d’animaux ou de tabac ?",
      answer:
        "Nous utilisons des produits enzymatiques et neutralisants spécifiques qui agissent sur la source de l’odeur, et non sur un simple masquage. Si l’urine n’a pas imprégné trop profondément la mousse, les résultats sont généralement très satisfaisants et durables.",
    },
    {
      question:
        "Combien de temps faut-il pour que mon canapé ou mon matelas soit sec ?",
      answer:
        "Nous extrayons environ 90 % de l’eau utilisée, mais le textile reste légèrement humide au toucher. Le séchage complet prend en général entre 4 et 8 heures selon la ventilation, la température et l’épaisseur du tissu. Une bonne aération permet d’accélérer le processus.",
    },
    {
      question:
        "Que dois-je préparer avant votre venue ?",
      answer:
        "Il suffit de dégager l’espace autour du meuble à nettoyer pour faciliter l’intervention. Si des objets fragiles sont à proximité, mettez-les de côté. Nous nous chargeons de protéger les sols et, si nécessaire, de déplacer légèrement le mobilier.",
    },
  ],

  ctaOverride: "",
},
  ]
};

export default city;
