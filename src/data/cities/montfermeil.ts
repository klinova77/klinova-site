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

  hubIntro: `<p>À Montfermeil, la propreté des parties communes dépend autant de la méthode que de l'organisation : accès en pente, résidences hétérogènes, et circulation quotidienne autour du tram T4. Klinova accompagne les syndics, gestionnaires et entreprises avec une approche de maintenance immobilière structurée, pensée pour préserver l'image et le confort des occupants.</p>
<p class="mt-4">Notre priorité : intervenir sans perturber la vie de l'immeuble. Nous cadrons les accès (badges, horaires, zones de travail), protégeons les abords sensibles et appliquons des protocoles adaptés aux moquettes, sols techniques, parkings et extérieurs. Le suivi reste clair, factuel, et orienté "tenue dans le temps".</p>
<ul>
  <li><strong>Coordination simple :</strong> accès, créneaux, information des résidents, zones prioritaires, en lien avec syndic, gardien ou conseil syndical.</li>
  <li><strong>Protocoles éprouvés :</strong> injection-extraction, autolaveuse, dégraissage ciblé, gestion de l'eau et finitions soignées.</li>
  <li><strong>Adaptation au bâti local :</strong> immeubles collectifs, grandes résidences, habitat pavillonnaire et copropriétés plus anciennes.</li>
  <li><strong>Compte-rendu utile :</strong> points traités, contraintes rencontrées, recommandations d'entretien pour stabiliser la propreté.</li>
</ul>`,

  citySpecificChallenges: [
    "Dépôts verts et mousses sur balcons liés aux zones boisées (forêt de Bondy) et aux expositions ombragées.",
    "Encrassement accéléré des halls d'entrée par le trafic piétonnier vers les stations T4 et les commerces du centre.",
    "Accès en forte déclivité et rues étroites : logistique à anticiper pour matériel et évacuation des déchets.",
    "Zones à fort trafic piétonnier (arrêts du T4, commerces) : salissures rapides aux entrées et dans les circulations.",
  ],

  districts: ["Centre-ville", "Les Coudreaux", "Les Bosquets", "Franceville"],

nearbyCities: [
        "gagny",
        "chelles",
        "livry-gargan",
        "le-raincy",
        "neuilly-sur-marne",
        "gournay-sur-marne",
        "neuilly-plaisance",
        "vaires-sur-marne",
        "champs-sur-marne",
        "villeparisis"
      ],

  landmarks: [
    "Mairie de Montfermeil",
    "Tramway T4 — Hôpital de Montfermeil",
    "Forêt de Bondy",
    "Moulin du Sempin (Moulin de Montfermeil)",
    "Place Jean Mermoz",
    "GHI Le Raincy–Montfermeil (site de Montfermeil)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous sur les secteurs en pente et les accès étroits de Montfermeil ?",
      answer:
        "<p><strong>Oui, nous anticipons la logistique</strong> (stationnement, acheminement du matériel, zones de déchargement) et adaptons l'organisation selon la configuration : rues en déclivité, sentes, cages d'escalier étroites. L'objectif est de maintenir une intervention fluide et discrète, sans gêner la circulation ni les accès des résidents.</p>",
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, badges, clés) en copropriété ?",
      answer:
        "<p><strong>Dès le cadrage, nous définissons une procédure simple avec le syndic,</strong> le gardien ou un référent : remise des badges, horaires autorisés, zones sensibles, consignes d'ouverture/fermeture. Cela évite les allers-retours inutiles et garantit la continuité des prestations, notamment pour les halls, parkings et cages d'escalier.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir tôt pour limiter la gêne des résidents (parkings, halls) ?",
      answer:
        "<p><strong>Oui, selon le site, nous planifions en heures creuses</strong> (matin, milieu de journée, fin d'après-midi) et travaillons par zones lorsque c'est nécessaire. Sur les parkings, l'organisation peut inclure une rotation partielle des véhicules, validée avec le syndic, pour conserver de l'usage pendant l'intervention.</p>",
    },
    {
      question:
        "Proposez-vous un diagnostic sur place avant de lancer une intervention ?",
      answer:
        "<p><strong>Oui, nous privilégions un repérage court mais précis</strong> : surfaces, état des revêtements, contraintes d'accès, évacuations, points de sécurité. Cela permet de choisir la bonne méthode, d'éviter les surprises le jour J, et de proposer un planning réaliste avec un impact minimal pour les occupants.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Redonnez une propreté visible aux halls et cages d'escalier : moquettes ravivées, taches désincrustées, et une sensation d'entretien net pour les résidents à Montfermeil.",
      whyUsBullets: [
        "Repérage du bâti local : centre-ville, Franceville, grandes résidences et circulations à fort passage.",
        "Injection-extraction calibrée : nettoyage profond, fibre préservée, humidité maîtrisée pour limiter le séchage.",
        "Organisation discrète : balisage, travail par zones, créneaux adaptés aux flux des résidents.",
        "Compte-rendu utile au gestionnaire : zones traitées, observations, recommandations de fréquence.",
      ],

      uniqueIntro: `<p>Dans les copropriétés de Montfermeil, notamment les résidences récentes construites le long de l'avenue Jean Jaurès ou près de l'Hôpital, les moquettes des parties communes sont soumises à rude épreuve. L'augmentation du trafic piétonnier entre les stations de transport et les logements favorise l'apport constant de poussières extérieures et de salissures dans les halls d'entrée. Les fibres ternissent rapidement, les joints noircissent et certaines zones deviennent carrément grises malgré l'aspirateur quotidien.</p>
<p class="mt-4">Cet encrassement, aggravé par la proximité des zones boisées et les chantiers en cours, transforme les fibres textiles en pièges à allergènes. Les couloirs donnent une fausse impression de vétusté qui nuit à l'image de la résidence. Les conseils syndicaux reçoivent des remarques lors des AG, certains résidents se plaignent de l'aspect négligé et les locataires potentiels sont parfois rebutés lors des visites. <strong>Un nettoyage professionnel par injection-extraction permet de désincruster ces zones de fort passage</strong> et de redonner leur éclat aux parties communes, tout en prolongeant la durée de vie des revêtements et en valorisant le patrimoine immobilier.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic et organisation par tronçons</h3>
<p>Évaluation sur place : type de moquette (bouclé, velours, aiguilleté), zones de fort trafic (devant les ascenseurs, boîtes aux lettres, entrées), nature des taches et contraintes d'accès (cages étroites, paliers, angles). <strong>Protection des bas de murs et des points sensibles,</strong> puis organisation du chantier par tronçons pour garder des circulations praticables pendant l'intervention.</p>

<h3>2. Injection-extraction en passes croisées</h3>
<p>Le cœur de la méthode repose sur l'injection-extraction : une solution nettoyante est injectée au plus près des fibres, puis immédiatement aspirée avec les salissures dissoutes. <strong>Sur les zones très marquées,</strong> nous passons en croisé pour homogénéiser le rendu et éliminer les traces tenaces de chaussures et de boue.</p>

<h3>3. Optimisation du séchage et conseils</h3>
<p>Extraction maximale de l'eau pour limiter l'humidité résiduelle, aération contrôlée et séchage généralement en 4 à 6 heures selon la ventilation. <strong>Fréquence d'entretien recommandée : tous les 12 à 18 mois</strong> selon l'usage, pour maintenir un résultat optimal et éviter le remplacement prématuré des revêtements.</p>`,

      specificChallenges: [
        "L'humidité naturelle liée à la proximité de la forêt de Bondy favorise les odeurs de renfermé dans les moquettes des rez-de-chaussée insuffisamment ventilés.",
        "Les poussières fines issues des chantiers de rénovation urbaine (secteur des Bosquets) s'incrustent profondément dans les fibres, rendant le nettoyage de surface inefficace.",
        "Les accès complexes de certaines bâtisses anciennes du centre historique imposent l'utilisation de matériel portatif et une organisation spécifique dans les escaliers étroits.",
      ],

      faqAdditions: [
        {
          question:
            "Traitez-vous aussi les marches d'escalier moquettées, pas seulement les paliers ?",
          answer:
            "<p><strong>Oui, nous intervenons sur l'ensemble des surfaces moquettées</strong> : paliers, couloirs et marches. Selon la configuration, nous avançons étage par étage pour maintenir une circulation possible. Le réglage de l'injection-extraction est adapté aux reliefs et aux zones de frottement, afin d'obtenir un rendu uniforme dans toute la cage.</p>",
        },
        {
          question:
            "Intervenez-vous chez les professionnels (bureaux, cabinets) en plus des copropriétés ?",
          answer:
            "<p><strong>Oui, bureaux, espaces d'accueil, salles d'attente ou petites structures</strong> : dès lors qu'il y a de la moquette, nous adaptons la méthode et surtout l'organisation. L'intervention peut être planifiée hors heures d'ouverture ou sur des créneaux calmes, pour préserver la confidentialité et éviter toute interruption de l'activité.</p>",
        },
        {
          question:
            "La méthode risque-t-elle d'abîmer une moquette ancienne ou fragile ?",
          answer:
            "<p><strong>Non, si elle est correctement calibrée.</strong> Le diagnostic sert à ajuster pression, température et produits selon la fibre et l'état du support. Sur des moquettes usées, nous privilégions des solutions douces et une action mécanique limitée.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de circuler normalement ?",
          answer:
            "<p><strong>La circulation est souvent possible rapidement,</strong> car l'aspiration réduit fortement l'humidité résiduelle. En pratique, comptez quelques heures selon l'aération et la densité de la fibre. Pour un séchage complet optimal, nous recommandons si possible une demi-journée.</p>",
        },
      ],
      ctaOverride: "",
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
        "Travail par zones avec rotation : maintien d'une capacité de stationnement quand c'est nécessaire.",
        "Contrôle des évacuations : gestion de l'eau et finitions pour laisser un sol propre et stable.",
      ],

      uniqueIntro: `<p>Les parkings de copropriété à Montfermeil s'encrassent rapidement : poussière noire collante issue du trafic routier et des chantiers urbains, traces de pneumatiques, auréoles d'huile persistantes et murs marqués par les frottements répétés. Avec le temps, l'espace devient plus sombre, l'éclairage semble moins efficace et les marquages perdent en lisibilité, ce qui dégrade le confort et la sensation de sécurité des résidents. Les rampes d'accès deviennent glissantes, particulièrement par temps humide.</p>
<p class="mt-4">Un simple balayage ne suffit pas à retirer les graisses incrustées dans la porosité du béton ou les résidus collants sur les pentes. Les copropriétaires se plaignent de salir leurs chaussures, certains craignent même de glisser. <strong>Un décrassage professionnel, organisé et contrôlé, permet de remettre le sol "au propre",</strong> d'améliorer l'adhérence sur les rampes, de restaurer la lisibilité des marquages et de revaloriser l'image globale de la résidence, sans bloquer inutilement l'usage du parking pendant plusieurs jours.</p>`,

      uniqueDeepDive: `<h3>1. Visite technique et organisation par zones</h3>
<p>Évaluation du site : nature du sol (béton, peinture, résine), état des marquages, configuration des accès et rampes, points d'eau et évacuations disponibles. <strong>Préparation incluant un dépoussiérage complet,</strong> l'enlèvement des déchets volumineux et un balisage clair des zones de travail. Lorsque nécessaire, le chantier est organisé par zones pour coordonner une rotation simple des véhicules avec le syndic.</p>

<h3>2. Autolaveuse et traitement haute pression ciblé</h3>
<p>Nettoyage principal à l'autolaveuse (brossage mécanique + aspiration immédiate des eaux sales) pour les surfaces larges. <strong>Traitement haute pression ciblé</strong> sur les zones très grasses (taches d'huile, virages, pieds de colonnes) avec application de dégraissants professionnels adaptés. Temps de contact respecté pour dissoudre les résidus huileux incrustés.</p>

<h3>3. Gestion des eaux et recommandations</h3>
<p>Maîtrise stricte de la gestion des eaux de lavage : récupération via l'autolaveuse et évacuation conforme selon les équipements du site (évacuations, séparateurs si présents et fonctionnels). <strong>Insistance finale sur rampes, angles et pieds de murs.</strong> Fréquence recommandée : 1 à 2 décrassages annuels sur sites exposés aux chantiers et au trafic du T4, pour maintenir sécurité et propreté.</p>`,

      specificChallenges: [
        "Rampes en déclivité : besoin d'un décrassage rigoureux pour conserver adhérence et sécurité, notamment en hiver.",
        "Sous-sols anciens peu ventilés : poussières fines qui se redéposent vite, nécessité d'une aspiration efficace.",
        "Taches d'huile anciennes sur béton poreux : traitement localisé intensif, résultat net sans promettre l'effacement parfait.",
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient-elle rapidement après le nettoyage ?",
          answer:
            "<p><strong>Un décrassage complet élimine la poussière accumulée</strong> et réduit fortement sa volatilité. Ensuite, elle revient progressivement (pneus, freins, circulation), mais à un rythme bien plus lent si un entretien régulier évite la formation d'une couche grasse et glissante.</p>",
        },
        {
          question:
            "Faut-il vider totalement le parking pour intervenir ?",
          answer:
            "<p><strong>Ce n'est pas obligatoire.</strong> Nous pouvons travailler par zones ou par demi-niveaux. La rotation des véhicules est cadrée à l'avance avec le syndic ou un référent, pour libérer progressivement les emplacements.</p>",
        },
        {
          question:
            "Pouvez-vous enlever toutes les taches d'huile, même anciennes ?",
          answer:
            "<p><strong>Nous obtenons d'excellents résultats sur les taches récentes.</strong> Sur des taches anciennes très imprégnées dans un béton brut, une auréole peut rester. En revanche, la surface est assainie : elle n'est plus grasse ni glissante.</p>",
        },
        {
          question:
            "Que faites-vous des eaux de lavage ?",
          answer:
            "<p><strong>Nous travaillons avec récupération et évacuation conforme</strong> selon les équipements du site (évacuations, séparateurs si présents et fonctionnels), ou avec récupération si nécessaire. Les eaux chargées ne sont pas rejetées sans contrôle.</p>",
        },
      ],
      ctaOverride: "",
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
        "Zéro coulure : gestion de l'eau au fil du lavage pour respecter façade et voisinage.",
        "Finitions soignées : rails, angles, garde-corps, vitres accessibles et points de reprise visibles.",
      ],

      uniqueIntro: `<p>À Montfermeil, les balcons s'encrassent progressivement sous l'effet des mousses dans les zones ombragées proches de la forêt de Bondy, des dépôts de pollution atmosphérique, des traces d'eau calcaire et des résidus laissés par les jardinières ou les barbecues d'été. Les dalles ternissent, les joints noircissent et les garde-corps deviennent collants au toucher. Au fil des mois, cet extérieur qui devrait être un véritable atout de votre logement devient moins agréable et finit par servir de zone de stockage plutôt que d'espace de détente.</p>
<p class="mt-4">Vous finissez par ne plus y sortir prendre votre café du matin, votre mobilier reste bâché toute l'année et vous renoncez à profiter de ces précieux mètres carrés extérieurs. Les enfants n'osent plus y jouer par peur de se salir les genoux. Quand vous recevez des amis, vous évitez d'ouvrir la porte-fenêtre par gêne de l'aspect sale. <strong>Une remise en état professionnelle permet de décaper sans agresser le support,</strong> de retrouver un sol propre et des finitions nettes, et surtout de réutiliser l'espace au quotidien comme un véritable prolongement de votre intérieur. L'intervention est pensée pour être propre, maîtrisée et respectueuse du voisinage en immeuble collectif.</p>`,

      uniqueDeepDive: `<h3>1. Protection et enlèvement des gros dépôts</h3>
<p>Protection soigneuse des menuiseries (porte-fenêtre, baies vitrées) et des abords pour éviter toute infiltration. <strong>Retrait manuel des dépôts volumineux</strong> (feuilles mortes, terre des jardinières, déchets divers) pour éviter d'étaler la saleté lors du rinçage et limiter le risque de bouchage des évacuations.</p>

<h3>2. Application de produits et brossage ciblé</h3>
<p>Application d'un produit nettoyant adapté au support (carrelage, dalle béton, bois composite, pierre) avec temps de contact approprié. <strong>Brossage méthodique des zones marquées</strong> (joints encrassés, angles, seuils de porte) pour décoller les mousses, lichens et traces tenaces. Si nécessaire, utilisation d'une pression douce et contrôlée, jamais agressive pour les joints fragiles.</p>

<h3>3. Rinçage maîtrisé et finitions</h3>
<p>La gestion de l'eau est centrale : raclage systématique, contrôle du flux vers l'évacuation du balcon, et aspiration à eau si l'évacuation est douteuse ou bouchée, afin d'éviter toute coulure chez le voisin du dessous ou sur la façade. <strong>Séchage naturel en quelques heures</strong> selon l'exposition et la ventilation. Finitions soignées sur les garde-corps, vitres et rails pour un résultat impeccable.</p>`,

      specificChallenges: [
        "Dépôts verts rapides sur balcons ombragés : mousses et lichens favorisés par proximité des zones boisées.",
        "Poussières fines de chantiers : voile tenace sur carrelages et dalles, surtout sur balcons exposées.",
        "Évacuations parfois inefficaces : nécessité d'aspirer l'eau de lavage pour éviter coulures et infiltrations.",
      ],

      faqAdditions: [
        {
          question:
            "Utilisez-vous la haute pression à pleine puissance sur le carrelage ?",
          answer:
            "<p><strong>Non, une pression trop forte peut fragiliser les joints</strong> ou marquer certains supports. Nous privilégions une action chimique adaptée et un brossage méthodique, puis une pression douce et contrôlée si nécessaire.</p>",
        },
        {
          question:
            "Comment évitez-vous que l'eau sale coule chez le voisin du dessous ?",
          answer:
            "<p><strong>Nous travaillons avec la quantité d'eau strictement nécessaire</strong> et gérons le flux au fil du lavage : raclette, récupération progressive, et aspiration à eau si l'évacuation est douteuse. L'objectif est un balcon propre, sans coulures disgracieuses.</p>",
        },
        {
          question:
            "Vos produits sont-ils dangereux pour les plantes ou les animaux ?",
          answer:
            "<p><strong>Nous protégeons ou déplaçons les plantes</strong> et rinçons correctement les surfaces. Si vous avez des animaux sensibles ou des plantations fragiles, nous adaptons la méthode pour rester efficace sans sur-dosage de produits.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que le balcon sèche ?",
          answer:
            "<p><strong>Cela dépend de la météo, de l'exposition et du support.</strong> Sur carrelage, le séchage est souvent rapide par temps sec ; sur supports plus poreux, cela prend un peu plus de temps. Dans tous les cas, nous limitons l'eau résiduelle par raclage et, si besoin, aspiration.</p>",
        },
      ],
      ctaOverride: "",
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

      uniqueIntro: `<p>La présence de pigeons est une réalité à Montfermeil, favorisée par la proximité de la forêt de Bondy et les nombreux toits des zones pavillonnaires comme Franceville qui offrent des lieux de nidification idéaux. Lorsqu'un balcon est colonisé, la situation devient vite invivable : accumulation de fientes acides qui ternissent et corrodent les matériaux, odeurs persistantes et écœurantes qui pénètrent dans le logement, et surtout risques sanitaires réels liés aux poussières séchées qui se dispersent au moindre courant d'air.</p>
<p class="mt-4">Cet encrassement massif rend l'espace extérieur totalement inutilisable et peut créer des tensions de voisinage dues aux nuisances olfactives ou visuelles. Vous n'osez plus ouvrir votre porte-fenêtre, vous craignez pour la santé de vos enfants et vous subissez parfois des réclamations du conseil syndical. Au-delà du simple nettoyage cosmétique, il s'agit d'une véritable décontamination qui nécessite un équipement de protection spécifique pour éviter toute inhalation de particules nocives. <strong>Une intervention professionnelle permet d'obtenir un résultat sûr,</strong> sans disperser les contaminants dans l'air ou chez les voisins, et de retrouver un balcon propre, sain et réutilisable en toute sécurité pour toute la famille.</p>`,

      uniqueDeepDive: `<h3>1. Confinement et protection sanitaire</h3>
<p>Le technicien s'équipe d'une combinaison étanche, de gants épais, d'un masque respiratoire <strong>FFP3</strong> et de lunettes avant de confiner la zone de travail pour protéger votre intérieur. <strong>Installation de bâches de protection</strong> devant la porte-fenêtre pour isoler le balcon et limiter la dispersion des particules vers les pièces de vie.</p>

<h3>2. Humidification, grattage et conditionnement</h3>
<p>Humidification contrôlée des fientes sèches pour empêcher les poussières contaminées de se disperser dans l'air. <strong>Grattage manuel méthodique</strong> et enlèvement des nids et déchets organiques, immédiatement conditionnés dans des sacs hermétiques prévus pour les déchets biologiques dangereux. Aucun résidu n'est laissé sur place ni jeté dans les poubelles de la résidence.</p>

<h3>3. Nettoyage, désinfection virucide et aération</h3>
<p>Nettoyage des surfaces (sol, garde-corps, appuis de fenêtre, murs mitoyens) avec des détergents adaptés qui dissolvent les résidus organiques incrustés. <strong>Application d'un produit désinfectant virucide et bactéricide homologué,</strong> en respectant scrupuleusement le temps de contact nécessaire (15 à 20 minutes) pour neutraliser tous les germes pathogènes. Rinçage final maîtrisé, puis aération complète pendant 24 heures avant toute réutilisation. Installation possible de picots ou de filets anti-pigeons pour limiter les retours et préserver durablement la salubrité.</p>`,

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
            "<p><strong>C'est fortement déconseillé :</strong> sans protection et sans méthode, le risque principal est de remettre en suspension des poussières sèches et de disperser la contamination. De plus, la Javel n'est pas toujours adaptée aux supports (joints, métaux, surfaces poreuses) et peut abîmer certains matériaux. Notre protocole vise un nettoyage maîtrisé et une désinfection efficace.</p>",
        },
        {
          question:
            "Vos produits de désinfection sont-ils dangereux pour mes animaux une fois secs ?",
          answer:
            "<p><strong>Non, nous utilisons des biocides professionnels homologués</strong> au moment de l'application, puis nous rinçons soigneusement et laissons sécher. Une fois le rinçage effectué et le séchage terminé, les surfaces peuvent être réutilisées normalement. Nous vous indiquons clairement les précautions et le délai à respecter sur place.</p>",
        },
        {
          question:
            "Les fientes ont-elles abîmé mon carrelage ou mon béton de façon définitive ?",
          answer:
            "<p><strong>L'acidité des fientes est corrosive.</strong> Si elles sont restées longtemps, elles peuvent avoir abîmé un carrelage (vernis/émail) ou laissé des auréoles dans un béton brut. Notre intervention retire la saleté et réduit le risque sanitaire, mais ne peut pas toujours corriger une corrosion chimique ancienne du matériau.</p>",
        },
        {
          question: "Que faites-vous des sacs de fientes ramassés ?",
          answer:
            "<p><strong>Nous ne les jetons pas dans vos poubelles domestiques.</strong> Nous emportons l'intégralité des déchets contaminés (fientes, nids, débris) hors du logement, dans des sacs étanches, afin de laisser un chantier propre et sans risque pour les occupants.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Redonnez fraîcheur et hygiène à votre intérieur à Montfermeil grâce à un nettoyage professionnel par injection-extraction de vos canapés, tapis et matelas, éliminant taches et allergènes directement à domicile.",

      whyUsBullets: [
        "Expertise des logements de Montfermeil, des pavillons de Franceville aux appartements du Plateau.",
        "Méthode d'injection-extraction adaptée à chaque type de textile et de tache pour un résultat optimal.",
        "Intervention discrète à domicile : protection des sols, bruit maîtrisé et respect de votre intimité.",
        "Conseils d'entretien personnalisés : gestes simples pour prolonger la propreté selon votre mode de vie.",
      ],

      uniqueIntro: `<p>Dans les zones pavillonnaires comme Franceville ou dans les appartements du Plateau à Montfermeil, les textiles d'ameublement sont au cœur de la vie familiale. Canapés, tapis et matelas subissent quotidiennement les sollicitations des enfants qui jouent, des animaux de compagnie qui rentrent du jardin après une promenade dans la forêt de Bondy, et des repas pris sur le pouce devant la télévision. Les taches visibles de café renversé, de feutre, de nourriture grasse ou d'urine d'animaux s'accumulent progressivement.</p>
<p class="mt-4">Au-delà de ces salissures apparentes, c'est la pollution invisible qui pose le plus problème : poussières fines venues des chantiers urbains et du trafic du T4, allergènes et acariens qui s'incrustent progressivement dans les fibres malgré l'aspirateur hebdomadaire. Cette accumulation ternit les couleurs, fixe les odeurs tenaces et peut gêner les personnes sensibles, particulièrement les enfants asthmatiques. Vous finissez par éviter de vous asseoir sur certaines parties du canapé, vous hésitez à recevoir des invités par gêne de l'aspect taché et vous vous réveillez parfois avec le nez qui coule à cause des acariens. <strong>L'aspirateur domestique ne permet pas d'extraire ce qui est logé au cœur de la mousse.</strong> Une intervention professionnelle par injection-extraction permet d’assainir en profondeur vos assises et literies et literies, leur redonnant confort et propreté sans avoir à remplacer le mobilier, avec des résultats visibles et durables.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic des textiles et pré-traitement</h3>
<p>Diagnostic précis des fibres (coton, velours, lin, synthétique, cuir) afin d'adapter la température, la pression et la chimie de nettoyage pour respecter la structure du textile. <strong>Protection soigneuse des sols</strong> (parquet, carrelage) et des abords avant d'appliquer un pré-traitement détachant ciblé sur les zones les plus sollicitées : accoudoirs usés, assises tachées, traces alimentaires ou zones de frottement intensif.</p>

<h3>2. Injection-extraction professionnelle</h3>
<p>Le nettoyage s'effectue par injection-extraction : une solution nettoyante est injectée au cœur du textile puis aspirée sous vide avec les salissures dissoutes, les acariens et leurs déjections. <strong>Ce procédé lave la fibre en profondeur</strong> tout en maîtrisant strictement l'humidité, sans détremper la structure du canapé ou du matelas. Plusieurs passes sur les zones critiques pour un résultat homogène.</p>

<h3>3. Aspiration de finition et conseils de séchage</h3>
<p>Aspiration de finition pour redresser les fibres et donner un aspect uniforme au textile. <strong>Conseils personnalisés sur la ventilation de la pièce</strong> afin d'optimiser le séchage (ouverture des fenêtres, chauffage modéré si nécessaire). Séchage généralement en 4 à 8 heures selon l'épaisseur du textile et l'aération du logement. Recommandations d'entretien régulier pour prolonger le résultat.</p>`,

      specificChallenges: [
        "Proximité de la forêt de Bondy : apports saisonniers importants de pollens et d'allergènes qui se fixent durablement dans les tissus (canapés, tapis, rideaux).",
        "Poussières fines issues des chantiers de rénovation urbaine et du tram T4 : particules volatiles qui ternissent les textiles clairs et nécessitent une extraction puissante.",
        "Humidité fréquente en rez-de-jardin ou rez-de-chaussée : conditions favorables au développement des acariens dans les matelas, nécessitant un nettoyage en profondeur régulier.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage permet-il d'éliminer les acariens et de réduire les allergies ?",
          answer:
            "<p><strong>Oui, l'injection-extraction permet d'aspirer en profondeur</strong> les poussières, déjections d'acariens et allergènes incrustés dans les fibres. Sans prétendre à un environnement totalement stérile, cette méthode réduit fortement la charge allergène et améliore nettement la qualité de l'air intérieur.</p>",
        },
        {
          question:
            "Pouvez-vous retirer les odeurs d'urine d'animaux ou de tabac ?",
          answer:
            "<p><strong>Nous utilisons des produits enzymatiques et neutralisants spécifiques</strong> qui agissent sur la source de l'odeur, et non sur un simple masquage. Si l'urine n'a pas imprégné trop profondément la mousse, les résultats sont généralement très satisfaisants et durables.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que mon canapé ou mon matelas soit sec ?",
          answer:
            "<p><strong>Nous extrayons environ 90 % de l'eau utilisée,</strong> mais le textile reste légèrement humide au toucher. Le séchage complet prend en général entre 4 et 8 heures selon la ventilation, la température et l'épaisseur du tissu. Une bonne aération permet d'accélérer le processus.</p>",
        },
        {
          question:
            "Que dois-je préparer avant votre venue ?",
          answer:
            "<p><strong>Il suffit de dégager l'espace autour du meuble à nettoyer</strong> pour faciliter l'intervention. Si des objets fragiles sont à proximité, mettez-les de côté. Nous nous chargeons de protéger les sols et, si nécessaire, de déplacer légèrement le mobilier.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
  serviceKey: "terrasses",
  heroDescription:
    "Nettoyage et remise en état de terrasses à Montfermeil : élimination des mousses, traces noires et salissures incrustées, avec une méthode efficace adaptée aux terrains en pente et aux quartiers pavillonnaires arborés.",
  whyUsBullets: [
    "Intervention sur l’ensemble de Montfermeil : Franceville, Les Oiseaux, Les Bosquets, Le Plateau, centre-ville, zones pavillonnaires et résidentielles.",
    "Maîtrise des contraintes locales : terrasses en pente, sols extérieurs exposés aux ruissellements, surfaces fortement encrassées par la végétation.",
    "Prestation soignée et valorisante : protection du mobilier, respect des façades et nettoyage précis pour retrouver une terrasse nette et agréable.",
  ],
  uniqueIntro: `<p><strong>Montfermeil</strong>, commune résidentielle de Seine-Saint-Denis située en hauteur à l’est de Paris, se distingue par son relief marqué et ses quartiers pavillonnaires verdoyants. Cette configuration entraîne un ruissellement fréquent de l’eau et une exposition importante des terrasses aux salissures extérieures.</p>

<p class="mt-4">Dans de nombreux secteurs — notamment <strong>Franceville</strong>, <strong>Le Plateau</strong> ou les abords boisés — les terrasses sont soumises à l’humidité, aux retombées végétales et aux traces de pollution. Résultat : <strong>mousses, algues, traces noires et zones glissantes</strong> s’installent rapidement sur les sols extérieurs.</p>

<p class="mt-4">Le bâti montfermois est majoritairement composé de <strong>maisons individuelles</strong> avec terrasses en <strong>dalles béton</strong>, <strong>carrelage extérieur</strong>, <strong>pierre</strong>, <strong>bois</strong> ou <strong>bois composite</strong>. Chaque surface demande une approche spécifique pour un nettoyage en profondeur et un rendu visuel durable.</p>`,
  uniqueDeepDive: `<h3>T1: Préparation et sécurisation de la zone</h3>
<p>Le mobilier de jardin, les pots et éléments décoratifs sont déplacés ou protégés. Les abords immédiats (murs, façades, menuiseries) sont bâchés afin de travailler proprement, y compris sur les terrasses en pente typiques de Montfermeil.</p>

<h3>T2: Nettoyage en profondeur adapté au sol</h3>
<p>Le traitement est choisi selon le matériau : solution renforcée pour dalles béton et carrelages extérieurs, méthode spécifique pour pierre, bois ou composite. Un brossage mécanique efficace permet de décoller les salissures incrustées, les biofilms et les traces de ruissellement. Le rinçage est ajusté pour nettoyer en profondeur sans altérer la surface.</p>

<h3>T3: Finition et mise en valeur de la terrasse</h3>
<p>Une attention particulière est portée aux zones de passage et aux parties les plus exposées à l’humidité. Le nettoyage redonne à la terrasse un aspect plus clair, plus homogène et nettement plus confortable à l’usage. Des conseils simples sont transmis pour conserver une terrasse propre plus longtemps.</p>`,
  specificChallenges: [
    "Terrasses en pente : ruissellement de l’eau accentuant les traces noires et les zones encrassées.",
    "Quartiers arborés : dépôts végétaux, feuilles et mousses favorisant l’encrassement rapide.",
    "Dalles béton très sollicitées : porosité marquée retenant les salissures et l’humidité.",
    "Terrasses partiellement couvertes : séchage lent et développement de surfaces glissantes.",
    "Bois et composite exposés plein air : ternissement visuel et salissures incrustées.",
  ],
  faqAdditions: [
    {
      question:
        "Pourquoi ma terrasse s’encrasse-t-elle aussi vite à Montfermeil ?",
      answer:
        "<p>Le relief de Montfermeil favorise le ruissellement de l’eau, combiné à une végétation dense dans de nombreux quartiers. Cette combinaison accélère l’apparition de mousses, d’algues et de traces noires sur les terrasses, en particulier sur les dalles béton et carrelages extérieurs.</p>",
    },
    {
      question:
        "Votre nettoyage améliore-t-il vraiment l’aspect visuel de la terrasse ?",
      answer:
        "<p>Oui. Le nettoyage en profondeur permet d’éclaircir les surfaces, d’uniformiser l’aspect du sol et de supprimer les zones sombres ou verdies. La terrasse retrouve un rendu plus propre et plus valorisant pour l’usage quotidien ou la réception.</p>",
    },
    {
      question:
        "Intervenez-vous sur des terrasses très encrassées ou peu entretenues ?",
      answer:
        "<p>Nous intervenons régulièrement sur des terrasses fortement encrassées, parfois laissées sans entretien depuis plusieurs années. La méthode est adaptée à l’état réel du support pour obtenir un résultat visible et durable.</p>",
    },
    {
      question:
        "Nettoyez-vous aussi les terrasses de petites copropriétés à Montfermeil ?",
      answer:
        "<p>Oui, nous intervenons également sur les terrasses et cours extérieures de copropriétés à taille résidentielle, avec une organisation adaptée aux contraintes du site et aux usages des occupants.</p>",
    },
  ],
  ctaOverride: "",
},



    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "Fin de bail, remise en état après travaux, grand ménage ou logement très encrassé. Intervention pensée pour une ville à deux facettes : pavillonnaire étendu (Franceville / Les Coudreaux) et secteurs collectifs en transformation (Les Bosquets).",

  whyUsBullets: [
    "Approche “terrain” adaptée à Montfermeil : pentes, rues résidentielles calmes, et accès plus contraints autour du GHI (stationnement, rotations, horaires).",
    "Remise en état orientée résultat : cuisine/SDB (calcaire), sols et finitions visibles (portes, plinthes, poignées, interrupteurs) pour sécuriser un état des lieux.",
    "Capacité à gérer des cas très différents : pavillons avec étages et vérandas, appartements en collectif avec badges, et chantiers de rénovation (Bosquets).",
  ],

  uniqueIntro: `<p>À Montfermeil, un nettoyage “appartement/maison” doit intégrer la géographie et les usages. La commune alterne des quartiers pavillonnaires vastes comme <strong>Franceville</strong> et <strong>Les Coudreaux</strong>, et des zones collectives en mutation autour des <strong>Bosquets</strong>. Ajoute à cela un relief marqué : ce n’est pas rare qu’une intervention soit simple à l’intérieur… mais plus délicate côté accès, portage et stationnement.</p>
<p class="mt-4">Le second moteur local, c’est le <strong>GHI Le Raincy–Montfermeil</strong> et le terminus du <strong>Tram T4</strong> : on voit davantage de demandes “pragmatiques” (rotation de logements de soignants, états des lieux rapides, remises en état avant relocation) avec des horaires sensibles. Dans ces cas-là, la qualité se joue sur une méthode claire : cadrer le périmètre, traiter en priorité ce qui se voit et se contrôle, puis verrouiller les finitions.</p>
<p class="mt-4">Enfin, Montfermeil a un vrai ADN “ville-parc” autour de l’<strong>Arboretum</strong> et du <strong>Château des Cèdres</strong>. Concrètement, cela se traduit souvent par des maisons avec jardins, terrasses et vitrages plus exposés (pollen, poussière, traces extérieures). Le bon niveau de prestation consiste à livrer un rendu net, sans bruit inutile, et en protégeant les sols (parquet, carrelage) dans des quartiers où le voisinage est attentif.</p>`,

  uniqueDeepDive: `<h3>T1 : Pavillonnaire (Franceville / Les Coudreaux) — maisons, étages et vitrages</h3>
<p>Dans les pavillons, la difficulté est rarement “une pièce”, mais l’enchaînement : entrée, escalier, couloirs, puis cuisine et salles d’eau où le calcaire se voit très vite. Les vérandas, baies vitrées et Velux reviennent souvent : on adapte le périmètre pour obtenir un résultat cohérent, surtout avant visite ou mise en location.</p>

<h3>T2 : Secteurs collectifs (Bosquets / Centre) — accès, badges et séquence de nettoyage</h3>
<p>En collectif, le rythme est dicté par les accès (digicode, badge, ascenseur) et la circulation. On travaille en séquence “de l’arrière vers la sortie” pour garder les sols propres jusqu’au dernier passage. En fin de bail, on priorise les zones contrôlées : cuisine, salle d’eau, sols, puis finitions (plinthes, portes, interrupteurs).</p>

<h3>T3 : Pôle Hôpital / Tram T4 — demandes réactives et contraintes de stationnement</h3>
<p>Autour du GHI et des stations T4, la demande est plus “calée” sur des horaires : relèves, créneaux serrés, logements de rotation. L’enjeu ici, c’est l’anticipation : arrivée, déchargement, ordre d’intervention. Cette organisation évite les pertes de temps et garantit un rendu propre même quand la logistique est tendue.</p>`,

  specificChallenges: [
    "Relief marqué : portage et accès à prévoir (pentes, rues résidentielles), surtout avec matériel et consommables.",
    "Secteur Hôpital : stationnement difficile et horaires sensibles (relèves), nécessité d’une organisation stricte.",
    "Ville mixte : pavillons (vérandas/baies/escaliers) vs collectifs (badges, ascenseurs, circulation).",
    "Rénovations et transformations : demandes après travaux plus fréquentes (poussières fines, traces sur menuiseries).",
    "Eau calcaire : salles d’eau et robinetteries qui marquent vite, particulièrement en logements de rotation.",
    "Quartiers calmes : exigence de discrétion et protection des sols (parquet/carrelage) dans le pavillonnaire.",
  ],

  faqAdditions: [
    {
      question: "Intervenez-vous à Montfermeil (93370) pour un nettoyage avant état des lieux ?",
      answer: `<p>Oui. On vise un rendu “contrôlable” : cuisine, salle d’eau, sols et finitions visibles (plinthes, portes, interrupteurs). À Montfermeil, on anticipe aussi l’accès (pentes, stationnement) pour tenir le créneau sans bâcler la finition.</p>`,
    },
    {
      question: "Pouvez-vous faire un nettoyage après travaux (poussière de plâtre/peinture) ?",
      answer: `<p>Oui. Après travaux, l’essentiel est de traiter la poussière fine et les traces sur menuiseries, plinthes et sols, puis d’enchaîner avec un nettoyage complet des points de contact. C’est particulièrement utile sur des rénovations de maisons et sur des appartements en remise en état.</p>`,
    },
    {
      question: "Le logement est proche de l’Hôpital : est-ce que ça change l’organisation ?",
      answer: `<p>Souvent, oui. Le stationnement et les horaires peuvent être plus contraints. Nous cadrons l’arrivée et le déchargement, puis nous travaillons en séquence pour sécuriser le résultat sans multiplier les allers-retours.</p>`,
    },
    {
      question: "Nettoyez-vous aussi les vitrages (véranda, baies, Velux) ?",
      answer: `<p>Sur demande, oui pour les vitrages accessibles et leurs encadrements. À Montfermeil, c’est fréquent dans le pavillonnaire (Franceville/Les Coudreaux) et cela améliore nettement le rendu, surtout avant une visite ou une vente.</p>`,
    },
  ],

  ctaOverride: "",
},


    


    
  ],
};

export default city;
