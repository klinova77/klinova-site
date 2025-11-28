import type { City } from '~/types/geo';

const clayeSouilly: City = {
  name: 'Claye-Souilly',
  slug: 'claye-souilly',
  postalCodes: ['77410'],

  customDescription:
    "Ville en expansion de Seine-et-Marne, Claye-Souilly mêle zones résidentielles et pôles d'activité, avec des besoins variés d'entretien pour les parties communes.",

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
  },

  districts: [
    'Centre-Ville',
    'Les Gros Grès',
    'Le Bois des Châtaigniers',
    'Les Tilleuls',
    'Zone Commerciale des Deux Moulins',
  ],

  nearbyCities: [
    'mitry-mory',
    'messy',
    'chelles',
    'meaux',
    'chelles',
    'villeparisis',
  ],

  landmarks: [
    "Église Saint-Étienne",
    'Maison de la Culture et des Loisirs (MCL)',
    'Zone Commerciale des Deux Moulins',
    'Parc Buffon',
    "Espace André-Malraux",
  ],

  specificChallenges: [
    'La gestion des accès et de la logistique dans la vaste Zone Commerciale des Deux Moulins requiert une planification rigoureuse.',
    'Les résidences de standing autour des Tilleuls possèdent souvent des moquettes délicates dans les halls nécessitant des produits neutres et peu moussants.',
    'La poussière routière et les résidus de chantier dans les nouveaux quartiers comme Les Gros Grès salissent rapidement les sols de parking.',
    "L’étroitesse de certains parkings souterrains dans le centre-ville de Claye-Souilly impose l’utilisation de monobrosses compactes pour une bonne couverture.",
    'Intervenir sur les balcons des immeubles proches de la N3 demande une bonne organisation pour limiter la gêne liée au bruit de la circulation.',
    'Le séchage des sols dans les zones de bureaux de la Zone Commerciale doit être accéléré pour garantir une remise en service rapide sans glissance.',
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

  faq: [
    {
      question: 'Comment se déroule une intervention de nettoyage à Claye-Souilly ?',
      answer:
        "Notre intervention débute toujours par une phase d'évaluation sur site, afin de déterminer la nature des salissures, le type de revêtement et les contraintes d'accès propres à Claye-Souilly. Nous sécurisons ensuite la zone, puis procédons au nettoyage par une méthode adaptée (injection-extraction pour les moquettes, haute pression ou monobrosse pour les sols durs). La dernière étape est le rinçage et le séchage, essentiels pour une remise en état rapide. Nous nous assurons que le protocole choisi minimise l'impact sur les résidents ou les usagers de l'immeuble.",
    },
    {
      question: 'Faut-il préparer quelque chose avant votre venue à Claye-Souilly ?',
      answer:
        "Une légère préparation facilite grandement le travail et assure l'efficacité maximale du nettoyage. Pour les moquettes ou tapis, il est préférable de retirer les petits meubles amovibles. Pour un parking, il est souvent nécessaire d'informer les usagers pour qu'ils libèrent la zone à nettoyer. L'accès aux points d'eau et aux prises électriques est indispensable. Nous fournissons une liste de préparation détaillée lors de la confirmation de l'intervention, que ce soit en centre-ville ou dans les zones d'activité de Claye-Souilly.",
    },
    {
      question: 'Intervenez-vous plutôt en journée, le soir ou le week-end à Claye-Souilly ?',
      answer:
        "Nous intervenons en fonction des contraintes de nos clients à Claye-Souilly. Pour les copropriétés avec un trafic important, nous privilégions souvent les interventions en soirée ou le week-end afin de minimiser la gêne occasionnée, notamment pour les halls d'entrée et les couloirs. Dans la Zone Commerciale, les bureaux ou les magasins peuvent nécessiter un nettoyage de nuit. Nous nous adaptons aux contraintes d'horaires, d'accès et de voisinage pour assurer un service professionnel et discret, en journée, le soir ou le week-end.",
    },
  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<p>À Claye-Souilly, les moquettes se trouvent principalement dans les halls d’immeubles de standing, les bureaux de la Zone Commerciale des Deux Moulins et certaines résidences services. Ces moquettes subissent une usure rapide due aux allers-retours quotidiens, apportant terre, poussières routières et traces de pas. Les copropriétés gérées par des syndics sont des clients réguliers pour ce service, cherchant à maintenir une image soignée dès l'entrée.</p>
<ul>
  <li><strong>Résidences de centre-ville :</strong> salissures liées au trafic piétonnier intense et occasionnellement aux animaux domestiques.</li>
  <li><strong>Bureaux :</strong> taches de boissons ou d'encre spécifiques aux environnements de travail.</li>
  <li><strong>Couloirs :</strong> marques d'abrasion et tassement des fibres dans les zones de passage fréquent.</li>
</ul>
<p>Le défi local est souvent la rapidité de séchage pour remettre en circulation les espaces sans délai.</p>`,
      uniqueDeepDive: `<p>Le protocole de nettoyage des moquettes à Claye-Souilly commence par un dépoussiérage méticuleux avec un aspirateur à brosses. Cette étape est cruciale pour retirer les particules abrasives, surtout dans les secteurs proches des axes routiers. Nous appliquons ensuite un produit de pré-traitement adapté au type de fibre de la moquette (laine, synthétique) et à la nature des taches rencontrées, typiquement des graisses ou des sucres.</p>
<p>Nous utilisons ensuite une machine à <strong>injection-extraction professionnelle</strong>. Cet équipement pulvérise une solution nettoyante en profondeur et aspire immédiatement l'eau sale, réduisant considérablement le temps de séchage.</p>
<ul>
  <li><strong>Matériel :</strong> injection-extraction puissante et brosses rotatives douces (monobrosse à faible vitesse) pour les zones très sales.</li>
  <li><strong>Précautions :</strong> protection des plinthes et du mobilier fixe contre les éclaboussures, mise en place de ventilateurs professionnels pour accélérer le séchage, indispensable dans les halls peu aérés du Centre-Ville.</li>
</ul>
<p>L'ensemble du processus est conçu pour minimiser le bruit et la gêne, notamment lors des interventions en soirée.</p>`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<p>Le nettoyage des parkings à Claye-Souilly concerne principalement les vastes parkings de surface et souterrains de la Zone Commerciale des Deux Moulins, ainsi que les niveaux inférieurs des résidences collectives des Tilleuls et des Gros Grès. Ces surfaces sont confrontées à une accumulation typique de traces de pneus, de dépôts de poussière et de suies issues des gaz d'échappement, notamment dans les zones de rampe.</p>
<p>Les syndics de copropriété et les gestionnaires d'immobilier d'entreprise sollicitent ce service pour des raisons d’hygiène et de sécurité. Les <strong>taches d’huile ou de carburant</strong> sont courantes, exigeant des dégraissants puissants.</p>
<p>Un parking propre est un facteur d'image et de sécurité, réduisant les risques de glissade sur les liquides et améliorant la luminosité dans les zones sombres. L'enjeu local est de nettoyer efficacement sans saturer les systèmes d'évacuation des eaux, souvent dimensionnés juste au nécessaire.</p>`,
      uniqueDeepDive: `<p>Le nettoyage des parkings de Claye-Souilly suit un protocole strict. La première étape consiste à balayer mécaniquement la surface pour retirer les gros débris, les cailloux et la poussière accumulée, particulièrement dans les parkings proches des zones en construction.</p>
<p>Ensuite, les taches d'huile et de graisse sont pré-traitées localement avec des dégraissants enzymatiques à haut pouvoir de pénétration pour dissoudre les résidus sans endommager le béton. Pour le lavage général, nous utilisons une <strong>monobrosse professionnelle</strong> ou une auto-laveuse de grande capacité, selon la configuration de l’espace.</p>
<ul>
  <li><strong>Matériel :</strong> monobrosse basse vitesse avec brosses dures pour frotter en profondeur, aspirateur à eau puissant pour récupérer les effluents sans surcharger les siphons.</li>
  <li><strong>Technique :</strong> utilisation d’une solution détergente alcaline en faible quantité d'eau pour un nettoyage efficace avec une évacuation maîtrisée. Le nettoyage des rampes d’accès est réalisé à l'aide de nettoyeurs haute pression pour décrocher la saleté incrustée.</li>
</ul>
<p>Nous planifions les travaux en plusieurs phases pour maintenir une partie du parking accessible et minimiser la perturbation des usagers.</p>`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<p>À Claye-Souilly, les balcons et loggias nécessitant un nettoyage intensif se situent souvent dans les immeubles d'appartements collectifs le long des grands axes ou dans les résidences récentes. Ces espaces extérieurs accumulent rapidement la pollution atmosphérique, les poussières fines et les dépôts verts, surtout dans les zones ombragées des Tilleuls.</p>
<p>Les demandes émanent principalement de particuliers avant l'été ou de syndics lors des remises en état de façade. Le nettoyage ne se limite pas au sol : il inclut souvent les garde-corps, vitrages extérieurs et murets exposés aux intempéries et à la saleté.</p>
<ul>
  <li><strong>Problématique :</strong> salissures tenaces, mousses et lichens sur les dalles et le bois.</li>
  <li><strong>Configuration :</strong> balcons parfois étroits ou loggias fermées, nécessitant une intervention minutieuse.</li>
</ul>
<p>Nous agissons pour restaurer l'esthétique et l'hygiène des balcons sans créer d'écoulements gênants vers les balcons inférieurs.</p>`,
      uniqueDeepDive: `<p>Le nettoyage des balcons à Claye-Souilly est réalisé avec une attention particulière à la gestion de l'eau. Après un balayage pour retirer les feuilles et les débris, nous appliquons un produit nettoyant biodégradable adapté au revêtement (carrelage, bois, béton).</p>
<p>Le brossage s'effectue manuellement ou avec une <strong>monobrosse à faible projection</strong> pour les dalles plus résistantes. L’étape cruciale est le rinçage, réalisé avec des quantités d'eau strictement contrôlées pour éviter les débordements et l'inondation des étages inférieurs. Nous utilisons des chiffons microfibres et des systèmes d’aspiration pour récupérer l'excès d'eau.</p>
<ul>
  <li><strong>Équipement :</strong> brosses à poils doux, nettoyeur basse pression pour les zones difficiles d'accès, aspirateur à eau pour un contrôle total de l'écoulement.</li>
  <li><strong>Processus :</strong> nettoyage du sol, puis des garde-corps et vitrages avec des solutions non agressives pour les finitions métalliques. Un séchage rapide est favorisé par raclette et ventilation naturelle, notamment pour les loggias fermées du centre-ville.</li>
</ul>
<p>Le travail est réalisé avec le maximum de discrétion pour ne pas perturber les voisins, quitte à adapter l'horaire d'intervention.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<p>La présence de fientes de pigeons sur les balcons, loggias et rebords de fenêtre est un problème d'hygiène récurrent dans certaines zones de Claye-Souilly, notamment sur les immeubles proches des points de rassemblement d'oiseaux. Au-delà de l'aspect inesthétique, les fientes constituent un risque sanitaire et peuvent dégrader les revêtements, les rendant glissants et dangereux.</p>
<p>Ce service est essentiel pour les propriétaires et locataires confrontés à une infestation, ainsi que pour les gestionnaires d'immeubles souhaitant prévenir l'installation durable des volatiles.</p>
<ul>
  <li><strong>Contexte :</strong> nettoyage des balcons et coursives des immeubles anciens ou de ceux jouxtant des espaces verts comme le Parc Buffon.</li>
  <li><strong>Enjeu :</strong> éliminer la matière organique corrosive et désinfecter la zone.</li>
</ul>
<p>Nous intervenons avec des protocoles sanitaires stricts pour décontaminer la zone avant toute remise en état.</p>`,
      uniqueDeepDive: `<p>L'élimination des fientes de pigeons nécessite un protocole de sécurité et de décontamination rigoureux. Nos techniciens interviennent à Claye-Souilly équipés de combinaisons, masques et gants spécifiques pour se protéger des agents pathogènes contenus dans les déjections.</p>
<p>La première phase consiste à humidifier les fientes pour éviter la dispersion des poussières et des spores dans l'air, puis à les <strong>décoller manuellement ou à l'aide de raclettes</strong>. Les déjections sont ensuite conditionnées dans des sacs scellés pour une élimination conforme aux normes sanitaires.</p>
<ul>
  <li><strong>Désinfection :</strong> après le retrait de la matière, toute la surface est traitée avec un désinfectant puissant et virucide pour neutraliser les bactéries et micro-organismes.</li>
  <li><strong>Nettoyage :</strong> un nettoyage haute pression à température contrôlée est ensuite effectué sur le sol et les garde-corps, toujours en veillant à la maîtrise des écoulements.</li>
</ul>
<p>Enfin, une étape de rinçage et de séchage est réalisée. Ce service va au-delà du simple nettoyage : c'est une <strong>véritable décontamination</strong> pour rendre l'espace sûr et utilisable.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<p>Le nettoyage de canapés et tapis concerne majoritairement les particuliers résidant dans les pavillons des Tilleuls ou les appartements du centre-ville de Claye-Souilly, ainsi que les salons d'attente et moquettes décoratives des bureaux professionnels. Les tissus d'ameublement retiennent les allergènes, les acariens et absorbent les odeurs (tabac, cuisine, animaux domestiques).</p>
<p>La demande est souvent motivée par une tache spécifique (vin, café, nourriture) ou par le besoin de rafraîchir le mobilier après une longue période d'utilisation. Les tapis des halls d'immeubles et des salles de réunion sont aussi fréquemment traités.</p>
<ul>
  <li><strong>Problème :</strong> encrassement en profondeur des fibres, perte d'éclat des couleurs, odeurs incrustées.</li>
  <li><strong>Clientèle :</strong> particuliers et petites entreprises de services (cabinets, agences).</li>
</ul>
<p>Nous évaluons la nature du tissu (coton, velours, microfibre, laine) avant toute intervention pour garantir un résultat optimal sans dommage.</p>`,
      uniqueDeepDive: `<p>Notre intervention à Claye-Souilly pour les canapés et tapis commence par un diagnostic précis du revêtement textile afin de choisir la méthode et les produits appropriés. Pour la grande majorité des textiles, nous utilisons la technique de l’<strong>injection-extraction à faible humidité</strong>.</p>
<p>Après un dépoussiérage par aspiration à haute performance, nous appliquons un produit pré-conditionneur qui va désolidariser les salissures des fibres. Ce produit est frotté délicatement à l'aide de brosses adaptées (souples pour les tissus délicats).</p>
<ul>
  <li><strong>Processus :</strong> la solution de nettoyage est injectée sous pression, pénètre au cœur des fibres, puis immédiatement aspirée, emportant saleté, taches et résidus d'acariens.</li>
  <li><strong>Précautions :</strong> nous testons toujours le produit sur une zone peu visible pour vérifier la tenue des couleurs. Pour les canapés en microfibre, nous utilisons des quantités d'eau minimales et un séchage accéléré par ventilation pour éviter toute déformation.</li>
</ul>
<p>Le temps de séchage est optimisé par l'utilisation de ventilateurs professionnels, permettant de réutiliser le mobilier dans un délai de quelques heures. Nous nous déplaçons directement chez le client avec tout notre matériel.</p>`,
    },
  ],
};

export default clayeSouilly;
