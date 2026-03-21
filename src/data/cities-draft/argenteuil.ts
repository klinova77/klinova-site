import type { City } from "~/types/geo";

const city: City = {
  name: "Argenteuil",
  slug: "argenteuil",
  postalCodes: ["95100"],

  department: {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Argenteuil. Du Val d'Argenteuil aux Coteaux, une équipe locale intervient avec des méthodes adaptées à chaque configuration de bâti.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Sous-préfecture du Val-d'Oise desservie par la ligne J du Transilien, Argenteuil concentre des copropriétés aux profils variés. Klinova s'y positionne comme partenaire terrain pour la gestion de la propreté et de la maintenance, avec une présence régulière sur l'ensemble des quartiers.</p>\n<p class=\"mt-4\">Halls, parkings souterrains, balcons, mobilier : chaque intervention suit un protocole adapté aux contraintes d'accès et aux attentes des gestionnaires. Un reporting peut être mis en place pour assurer un suivi transparent des prestations réalisées.</p>\n<ul>\n  <li><strong>Coordination avec syndics et gestionnaires :</strong> Planification des interventions selon les contraintes d'occupation, gestion des accès par digicode ou badge, communication en amont avec les résidents.</li>\n  <li>Équipe locale et réactive : Techniciens basés en Île-de-France, connaissance du terrain argenteuillais, capacité d'intervention rapide selon les urgences signalées.</li>\n  <li><strong>Méthodes explicites et traçables :</strong> Protocoles détaillés par type de surface, matériel professionnel embarqué, compte-rendu disponible après chaque passage.</li>\n</ul>",

  citySpecificChallenges: [
    "<strong>Grands ensembles du Val d'Argenteuil</strong> : halls à fort passage, moquettes sollicitées quotidiennement.",
    "Parkings souterrains en copropriété : <strong>traces d'huile et poussières</strong> accumulées sur béton brut.",
    "Balcons exposés côté A15 : dépôts de pollution atmosphérique sur carrelage et garde-corps.",
    "Résidences récentes avec digicodes : <strong>coordination accès</strong> indispensable avant intervention.",
    "Secteur Centre-ville dense : stationnement contraint, intervention planifiée en créneau adapté.",
  ],

  districts: [
    "Centre-Ville",
    "Val d'Argenteuil",
    "Orgemont",
    "Val Notre-Dame",
    "Les Coteaux",
  ],
  nearbyCities: ["Bezons", "Sannois", "Cormeilles-en-Parisis", "Saint-Gratien"],

  landmarks: [
    "Mairie d'Argenteuil",
    "Gare d'Argenteuil (Transilien Ligne J)",
    "Gare du Val d'Argenteuil (Transilien Ligne J)",
    "Parc des Berges de Seine",
    "Basilique Saint-Denys",
    "Maison Impressionniste Claude Monet",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les copropriétés avec digicode ou badge ?",
      answer: "<p>Nous récupérons les <strong>codes d'accès ou badges</strong> en amont auprès du syndic ou du gestionnaire. Le jour de l'intervention, nos techniciens accèdent aux parties communes sans solliciter les résidents. En cas de changement de code, une mise à jour rapide est effectuée pour éviter tout retard.</p>",
    },
    {
      question:
        "Intervenez-vous en urgence sur Argenteuil si un incident survient dans un parking ou un hall ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe sous 24 à 48 heures selon la nature de l'incident. Pour les situations critiques — déversement, dégradation importante —, un <strong>créneau prioritaire</strong> est proposé. Contactez-nous par téléphone pour évaluer ensemble le délai réalisable.</p>",
    },
    {
      question: "Comment se passe la coordination avec un syndic pour plusieurs immeubles ?",
      answer: "<p>Nous établissons un <strong>planning mutualisé</strong> couvrant l'ensemble des résidences concernées. Chaque immeuble dispose d'une fiche d'intervention précisant les accès, les surfaces et les fréquences. Un interlocuteur unique côté Klinova facilite les échanges et les ajustements en cours de contrat.</p>",
    },
    {
      question:
        "Le stationnement est compliqué à Argenteuil : comment gérez-vous l'accès pour vos véhicules ?",
      answer: "<p>Nos techniciens repèrent les <strong>zones de dépose autorisées</strong> ou les emplacements de livraison à proximité. Pour les interventions longues, nous sollicitons si besoin une autorisation temporaire auprès du syndic. Le matériel est transporté en chariot pour limiter les allers-retours.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride:
    "Sous-préfecture du Val-d'Oise desservie par la ligne J du Transilien, abritant la Basilique Saint-Denys.",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de halls, bureaux ou domicile, avec séchage maîtrisé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des typologies de halls et circulations dans les immeubles du Val d'Argenteuil et du centre-ville.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes bouclées, velours ou dalles textiles.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des résidents et occupants.",
      ],
      uniqueIntro: "<p>Dans le quartier Val d'Argenteuil, les halls d'immeubles et circulations communes accumulent rapidement poussières, traces de pas et résidus divers. Les moquettes de ces espaces partagés subissent un <strong>piétinement quotidien</strong> qui ternit les fibres et fixe les taches en profondeur. Sans entretien régulier, le rendu visuel se dégrade et les odeurs peuvent s'installer durablement.</p>\n<p class=\"mt-4\">Un détachage adapté redonne de la tenue aux revêtements textiles et améliore l'image des parties communes. Dans les petits collectifs comme dans les grands ensembles, la propreté des sols contribue au confort des résidents et à la valorisation des espaces. Les bureaux locaux bénéficient également d'un environnement plus agréable pour les collaborateurs et visiteurs.</p>\n<p class=\"mt-4\">La densité urbaine d'Argenteuil et les accès fréquents par digicode imposent une organisation rigoureuse. Chaque intervention débute par un diagnostic des supports et des zones de passage, suivi d'un plan de traitement adapté aux contraintes d'accès et de stationnement.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les halls d'entrée et couloirs concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. Les protections sont posées sur les plinthes et bas de murs pour éviter les projections.</p>\n\n<h3>Surfaces secondaires et angles</h3>\n<p>Les paliers, recoins et zones sous mobilier reçoivent un traitement par injection-extraction. Les passes multiples sur les fibres permettent de déloger les résidus incrustés. Le détachage ciblé intervient sur les marques de café, tanin ou graisses identifiées au diagnostic.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage selon l'épaisseur du revêtement et la ventilation disponible. Des consignes de <strong>non-piétinement</strong> sont transmises pour préserver le résultat. La fréquence d'entretien recommandée dépend du trafic observé dans chaque espace.</p>",
      specificChallenges: [
        "Halls de grands ensembles : <strong>piétinement quotidien</strong> et accumulation rapide des salissures.",
        "Accès par digicode : coordination préalable indispensable pour l'acheminement du matériel.",
        "Stationnement contraint : anticipation des créneaux de livraison et dépose véhicule.",
        "Moquettes anciennes : fibres fragilisées nécessitant un réglage de pression adapté.",
        "Bureaux en centre-ville : intervention <strong>hors heures d'activité</strong> pour éviter toute perturbation.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les immeubles du Val d'Argenteuil, comment organisez-vous un nettoyage de moquette avec accès par digicode ?",
          answer: "<p>Nous convenons d'un créneau avec le gestionnaire ou le syndic pour obtenir les <strong>codes d'accès</strong>. Le matériel est acheminé en une seule rotation pour limiter les allers-retours. Un balisage temporaire sécurise les zones traitées pendant l'intervention et le séchage.</p>",
        },
        {
          question:
            "Dans les halls du centre-ville d'Argenteuil, comment traitez-vous les taches anciennes incrustées sur la moquette ?",
          answer: "<p>Le diagnostic identifie la nature des taches avant toute action. Un pré-détachant adapté est appliqué sur les zones marquées, puis l'injection-extraction décolle les résidus en profondeur. Les fibres retrouvent leur tenue sans risque de sur-mouillage.</p>",
        },
        {
          question:
            "À Argenteuil, quelles différences faites-vous entre une moquette de copropriété et une moquette de bureau en centre-ville ?",
          answer: "<p>En copropriété, le <strong>trafic est diffus mais constant</strong>, avec des salissures variées. En bureau, les passages sont concentrés sur certaines plages horaires. Le protocole et les horaires d'intervention s'adaptent à chaque contexte pour un résultat durable.</p>",
        },
        {
          question:
            "Près de la gare d'Argenteuil, comment gérez-vous le matériel et le stationnement pour un nettoyage de moquette ?",
          answer: "<p>Nous repérons les possibilités de stationnement en amont et privilégions les créneaux de faible affluence. Le matériel est transporté sur chariot pour réduire les trajets. Cette organisation limite la gêne et sécurise l'accès aux espaces à traiter.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et gestion stricte des eaux usées pour un sol assaini sans perturbation des usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux copropriétés du centre-ville et du secteur Côté Seine.",
        "Autolaveuse professionnelle et gestion conforme des eaux usées sur béton brut ou peint.",
        "Rotation véhicules coordonnée avec le syndic, balisage sécurisé et reporting après chaque passage.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les coulures d'huile marquent durablement les sols des parkings, en particulier dans les copropriétés du <strong>centre-ville</strong> et autour du secteur <strong>Côté Seine</strong>. Ces dépôts s'accumulent sur le béton, créent des zones glissantes près des rampes et ternissent l'ensemble des niveaux. Sans intervention régulière, l'encrassement gagne les rigoles et complique l'évacuation des eaux pluviales.</p>\n<p class=\"mt-4\">Un lavage mécanisé redonne aux résidences une image soignée et limite les réclamations des copropriétaires. Les sous-sols présents dans de nombreux immeubles d'Argenteuil, souvent en béton brut ou peint, nécessitent un traitement adapté pour éviter toute dégradation du revêtement. Le résultat se constate dès la fin du chantier : sol uniforme, odeurs réduites, circulation sécurisée.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic ou le gestionnaire. Le <strong>trafic lié aux zones commerciales</strong> impose un balisage rigoureux et une planification horaire pour limiter la gêne. Chaque étape fait l'objet d'un compte-rendu transmis après passage.</p>",
      uniqueDeepDive: "<h3>Encrassement et accès restreint</h3>\n<p>Les dépôts d'huile et de graisse rendent certaines zones impraticables et salissent les véhicules stationnés. Un diagnostic préalable identifie le type de revêtement, l'état des regards et le niveau d'encrassement.</p>\n<p class=\"mt-4\">Le balayage préalable dégage les poussières et débris avant le passage de l'autolaveuse. Un balisage sécurisé délimite les zones en cours de traitement.</p>\n\n<h3>Traitement mécanisé et zones critiques</h3>\n<p>L'autolaveuse associée à un dégraissant adapté effectue plusieurs passes sur l'ensemble du sol. Les rampes d'accès, angles morts et pieds de murs reçoivent un traitement ciblé à la haute pression.</p>\n<p class=\"mt-4\">Les rigoles et regards sont dégagés pour garantir une évacuation correcte. Les eaux de lavage sont récupérées conformément aux exigences réglementaires.</p>\n\n<h3>Finalisation et recommandations</h3>\n<p>Un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention si demandé. Le compte-rendu transmis au gestionnaire inclut des préconisations de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Sous-sols en béton brut sensibles aux projections et nécessitant un réglage de pression adapté.",
        "Taches d'huile anciennes incrustées dans les joints et fissures du revêtement.",
        "Coordination avec les flux de véhicules liés aux zones commerciales proches.",
        "Évacuation des eaux de lavage sans rejet vers les parties communes.",
        "Balisage obligatoire sur les rampes inclinées pour sécuriser les usagers.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings de copropriété près de Côté Seine, comment éliminez-vous les taches d'huile anciennes ?",
          answer: "<p>Un dégraissant professionnel est appliqué sur les zones marquées avant le passage de l'autolaveuse. Les taches incrustées reçoivent un traitement localisé à la haute pression. Le résultat dépend de l'ancienneté du dépôt, mais l'aspect général du sol s'améliore nettement dès la première intervention.</p>",
        },
        {
          question:
            "Dans un parking souterrain d'Argenteuil, comment gérez-vous les eaux de lavage sans perturber les usagers ?",
          answer: "<p>Les eaux sont aspirées par l'autolaveuse au fur et à mesure du passage. Les regards et rigoles sont vérifiés pour éviter tout refoulement. L'intervention se déroule par zones successives, ce qui permet de maintenir une circulation partielle pendant le chantier.</p>",
        },
        {
          question:
            "Autour des zones commerciales d'Argenteuil, comment organisez-vous le balisage sécurité pendant le nettoyage de parking ?",
          answer: "<p>Des cônes et barrières délimitent chaque zone en cours de traitement. Le balisage est déplacé au fil de l'avancement pour libérer progressivement les places. Les horaires d'intervention sont définis avec le gestionnaire afin de limiter la gêne aux heures de forte affluence.</p>",
        },
        {
          question:
            "À Argenteuil, adaptez-vous le nettoyage selon qu'il s'agit d'un parking souterrain ou aérien ?",
          answer: "<p>Le parking souterrain impose une gestion stricte des eaux et une ventilation suffisante pendant le séchage. En extérieur, la pression peut être augmentée et le rinçage s'évacue naturellement. Le diagnostic préalable détermine le protocole adapté à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support et gestion anti-coulures pour un espace propre sans gêne pour vos voisins.",
      whyUsBullets: [
        "Connaissance des expositions et environnements des quartiers résidentiels d'Argenteuil, des Coteaux à Val Notre-Dame.",
        "Pression ajustée selon le support — carrelage, béton, joints fragiles — pour un résultat visible sans dégradation.",
        "Organisation pensée pour limiter les nuisances : protection des étages inférieurs, gestion de l'eau maîtrisée, intervention discrète.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement de son extérieur quand le sol reste marqué par les traces de l'hiver, les dépôts de pollution ou les résidus de terre accumulés ? Dans le secteur des <strong>Coteaux</strong> comme à <strong>Val Notre-Dame</strong>, les balcons d'appartements subissent ces salissures qui ternissent le carrelage et s'incrustent dans les joints au fil des mois.</p>\n<p class=\"mt-4\">Un balcon encrassé, c'est un espace qu'on délaisse. Les chaises restent pliées, les plantes s'entassent dans un coin, et cette surface devient un simple débarras visuel. Sur les <strong>petits collectifs et résidences récentes</strong> d'Argenteuil, le carrelage grès ou le béton brut méritent un traitement qui redonne envie d'installer la table dehors dès les premiers rayons.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic du support et de son état. L'accès en étage et la configuration de l'immeuble orientent ensuite l'organisation du chantier, notamment pour limiter les coulures vers les niveaux inférieurs.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries — fenêtres, portes-fenêtres, seuils — reçoivent une protection pour éviter les projections. Un dispositif de rétention est mis en place pour canaliser l'eau et prévenir les coulures chez les voisins du dessous.</p>\n\n<h3>Traitement du sol et des surfaces</h3>\n<p>Les gros dépôts (feuilles, terre, débris) sont retirés manuellement. Un produit adapté au support — carrelage grès, béton, dalles — est appliqué puis brossé. Le garde-corps et les murs mitoyens accessibles sont également traités. Le rinçage s'effectue à pression contrôlée pour préserver les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau résiduelle est évacuée, le sol sèche naturellement. Avant de partir, nous remettons le mobilier en place et vous transmettons quelques recommandations pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts verts fréquents sur les balcons exposés nord ou proches de la végétation.",
        "Carrelage grès avec joints poreux nécessitant un brossage adapté.",
        "Gestion des coulures indispensable dans les immeubles à plusieurs étages.",
        "Accès parfois contraint par digicode ou badge dans les résidences récentes.",
        "Mobilier et plantes à protéger ou déplacer avant intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons carrelés des Coteaux, comment évitez-vous d'abîmer les joints pendant le nettoyage ?",
          answer: "<p>Nous adaptons la pression et le type de brosse au carrelage grès courant dans ce secteur. Les joints poreux sont traités avec un produit non agressif, et le rinçage reste contrôlé pour ne pas les déchausser. Le résultat est un sol propre sans fragiliser les finitions.</p>",
        },
        {
          question:
            "Dans les appartements de Val Notre-Dame, comment gérez-vous l'eau et les coulures lors du nettoyage de balcon ?",
          answer: "<p>Un système de rétention est installé en périphérie du balcon avant le début de l'intervention. L'eau est canalisée et évacuée progressivement pour éviter tout écoulement vers les étages inférieurs. Les voisins ne subissent aucune nuisance liée à notre passage.</p>",
        },
        {
          question:
            "À Argenteuil, comment retirez-vous les dépôts verts et mousses sur les balcons exposés ?",
          answer: "<p>Ces dépôts sont d'abord décollés mécaniquement par brossage, puis traités avec un produit adapté au support. Le rinçage élimine les résidus sans disperser les spores. Sur les surfaces régulièrement exposées à l'humidité, nous conseillons une fréquence d'entretien adaptée.</p>",
        },
        {
          question:
            "Sur les balcons d'immeubles à Argenteuil, intervenez-vous sans haute pression pour préserver les supports ?",
          answer: "<p>Oui, lorsque les joints sont fragiles ou le support ancien, nous privilégions un brossage manuel associé à une pression douce. Cette méthode préserve l'intégrité du carrelage ou du béton tout en obtenant un résultat visible. Le choix technique est fait après diagnostic sur place.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et pose optionnelle de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des secteurs exposés près du parc des Berges de Seine et des immeubles sur coteaux.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide homologuée.",
        "Coordination avec les occupants et gestion des accès par badges pour une intervention sans gêne.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les garde-corps et le sol du balcon. À proximité du <strong>parc des Berges de Seine</strong>, les pigeons trouvent des points de repos sur les corniches et rebords d'immeubles, laissant des traces qui s'incrustent rapidement. L'odeur persiste, le linge étendu absorbe ces effluves, et l'espace devient inutilisable.</p>\n<p class=\"mt-4\">Les petits collectifs et grands ensembles d'Argenteuil présentent souvent des balcons exposés, avec des surfaces en carrelage grès ou béton brut qui retiennent les salissures. Sans traitement adapté, l'acidité des fientes attaque les joints et dégrade les revêtements. Retrouver un balcon propre, c'est aussi pouvoir y installer une table, y faire sécher du linge sans crainte, ou simplement ouvrir la baie vitrée sans gêne.</p>\n<p class=\"mt-4\">Notre intervention débute par un diagnostic visuel pour évaluer l'étendue des dépôts et l'état des supports. Nous organisons ensuite le confinement et la désinfection en tenant compte des accès par badges et de la coordination avec les occupants voisins.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace utilisable, débarrassé des agents pathogènes et des odeurs. La surface retrouve son aspect d'origine, garde-corps et sol compris, avec une désinfection virucide qui élimine les risques sanitaires liés aux déjections.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, nous bâchons la zone et protégeons l'accès intérieur du logement. L'équipe porte combinaison jetable, masque FFP2, gants et lunettes. Les fientes sont humidifiées pour neutraliser les poussières, puis collectées dans des sacs étanches.</p>\n<p class=\"mt-4\">Chaque support est traité : sol, garde-corps, vitrages, murs mitoyens si concernés.</p>\n\n<h3>Désinfection et options anti-retour</h3>\n<p>Un produit bactéricide et virucide homologué est appliqué avec un temps de contact respecté. Après rinçage, nous laissons le balcon aérer avant remise en service.</p>\n<p class=\"mt-4\">Sur demande, nous installons des pics anti-pigeons sur les rebords ou un filet de protection pour limiter les récidives.</p>",
      specificChallenges: [
        "Proximité du parc des Berges de Seine : pigeons nombreux sur les corniches et balcons.",
        "Balcons en béton brut ou carrelage grès : fientes incrustées difficiles à déloger sans traitement adapté.",
        "Accès par digicodes et badges : coordination nécessaire pour l'évacuation des déchets.",
        "Immeubles denses du Val d'Argenteuil : gestion des nuisances olfactives vis-à-vis des voisins.",
        "Garde-corps métalliques exposés : risque de corrosion si les dépôts restent trop longtemps.",
      ],
      faqAdditions: [
        {
          question:
            "Près du parc des Berges de Seine, quel est le niveau de risque sanitaire après des fientes de pigeons sur un balcon ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Dans les secteurs proches d'espaces verts comme les Berges de Seine, les dépôts s'accumulent vite. Une désinfection virucide après nettoyage élimine ces risques et permet de réutiliser le balcon en toute sécurité.</p>",
        },
        {
          question:
            "Dans les immeubles d'Argenteuil, quels EPI utilisez-vous pour sécuriser un nettoyage de fientes de pigeons sur balcon ?",
          answer: "<p>Nos équipes portent systématiquement un masque FFP2, des gants résistants, des lunettes de protection et une combinaison jetable. Ce protocole évite tout contact direct et protège contre l'inhalation de particules contaminées lors du ramassage et du traitement des surfaces souillées.</p>",
        },
        {
          question:
            "Sur une loggia d'Argenteuil, quelle désinfection appliquez-vous après un nettoyage de fientes de pigeons ?",
          answer: "<p>Nous utilisons un produit bactéricide et virucide homologué, appliqué sur l'ensemble des surfaces après collecte des déjections. Le temps de contact est respecté avant rinçage. Cette étape neutralise les agents pathogènes et supprime les odeurs résiduelles sur sol, garde-corps et vitrages.</p>",
        },
        {
          question:
            "Dans un immeuble d'Argenteuil avec badges, comment organisez-vous l'évacuation des déchets après nettoyage de fientes ?",
          answer: "<p>Les déchets sont conditionnés dans des sacs étanches dès la collecte. Nous coordonnons l'accès avec le gardien ou l'occupant pour évacuer sans encombrer les parties communes. Le matériel souillé quitte l'immeuble le jour même, sans stockage intermédiaire dans les couloirs ou halls.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement complet de vos canapés, tapis et matelas à domicile, avec détachage ciblé et extraction en profondeur pour retrouver des textiles propres et agréables au quotidien.",
      whyUsBullets: [
        "Connaissance des logements familiaux d'Argenteuil, des pavillons des Coteaux aux appartements du Val d'Argenteuil.",
        "Détachage enzymatique ciblé et injection-extraction textile pour un résultat visible sans détremper les fibres.",
        "Créneaux adaptés à votre emploi du temps, stationnement anticipé, remise en service rapide du mobilier.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sur les textiles d'intérieur. Dans les logements familiaux du quartier Orgemont et des secteurs résidentiels d'Argenteuil, canapés et tapis encaissent le passage répété des enfants, les siestes du chien, les repas pris devant la télé. Les fibres retiennent poussières, allergènes et taches anciennes que l'aspirateur seul ne déloge pas.</p>\n<p class=\"mt-4\">Un entretien en profondeur change l'atmosphère d'une pièce. Les couleurs du tissu retrouvent leur éclat, l'odeur de propre remplace les relents tenaces, et le confort d'assise redevient agréable. Dans les appartements et maisons équipés de canapés en tissu ou microfibre, ce type d'intervention redonne vie aux espaces de vie sans nécessiter de remplacement.</p>\n<p class=\"mt-4\">L'intervention s'organise autour d'un diagnostic textile, d'un détachage adapté et d'une extraction contrôlée. La circulation dense en ville et les contraintes de stationnement sont intégrées dès la prise de rendez-vous pour limiter les imprévus.</p>",
      uniqueDeepDive: "<h3>Identification des taches et du textile</h3>\n<p>Chaque surface présente des salissures différentes. Tache de vin sur un canapé coton, auréole d'urine sur un matelas, graisse incrustée dans un tapis synthétique : le diagnostic permet de choisir le traitement adapté. Un test discret sur zone cachée vérifie la réaction du tissu avant toute application.</p>\n\n<h3>Détachage et traitement ciblé</h3>\n<p>Les taches organiques reçoivent un pré-traitement enzymatique qui décompose les résidus en profondeur. Les zones grasses sont traitées avec un dégraissant doux. L'injection-extraction textile projette ensuite une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de salissures.</p>\n\n<h3>Extraction et consignes de séchage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, comptez entre 4 et 8 heures avant réutilisation. Une aération régulière accélère le processus. Des conseils d'entretien courant prolongent la propreté obtenue.</p>",
      specificChallenges: [
        "Taches anciennes incrustées dans les fibres après des mois d'usage familial.",
        "Odeurs persistantes liées aux animaux de compagnie ou aux accidents domestiques.",
        "Acariens et allergènes accumulés dans les matelas et tapis épais.",
        "Stationnement compliqué en zone dense nécessitant une organisation préalable.",
        "Séchage à anticiper selon la ventilation et l'épaisseur du textile traité.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les logements familiaux d'Orgemont, comment traitez-vous les acariens et allergènes sur canapé ou tapis ?",
          answer: "<p>L'injection-extraction déloge les acariens, poussières et allergènes piégés dans les fibres. La solution nettoyante pénètre en profondeur puis l'aspiration immédiate évacue les résidus. Après séchage, l'air ambiant gagne en qualité, ce qui soulage les personnes sensibles vivant dans ces logements familiaux.</p>",
        },
        {
          question:
            "En appartement à Argenteuil, quel temps de séchage prévoir après le nettoyage d'un canapé ou d'un tapis ?",
          answer: "<p>Comptez généralement entre 4 et 8 heures selon l'épaisseur du textile et la ventilation du logement. Ouvrir les fenêtres ou utiliser un ventilateur accélère le processus. En été, le séchage est plus rapide qu'en période humide. Le mobilier reste utilisable dès que les fibres sont sèches au toucher.</p>",
        },
        {
          question:
            "Dans les secteurs résidentiels d'Argenteuil, comment préparez-vous le logement avant un nettoyage de canapé ou tapis ?",
          answer: "<p>Nous demandons simplement de dégager l'accès au mobilier concerné et de retirer les objets fragiles à proximité. Les coussins amovibles sont traités séparément. Si le tapis peut être décalé, cela facilite l'intervention. Le reste de l'organisation est géré par notre équipe sur place.</p>",
        },
        {
          question:
            "À Argenteuil, comment gérez-vous l'accès au logement et le stationnement pour un nettoyage de canapé ou de tapis ?",
          answer: "<p>La densité urbaine impose une anticipation du stationnement. Nous convenons d'un créneau horaire précis et repérons les possibilités de stationnement à proximité. Si un badge ou digicode est nécessaire, les informations sont transmises en amont pour éviter toute perte de temps le jour de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — carrelage, bois ou composite — pour éliminer mousses, dépôts verts et taches tenaces, et retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des configurations extérieures sur les Coteaux et Val Notre-Dame, avec leurs expositions variées et leurs environnements arborés.",
        "Adaptation du traitement selon le support — pression contrôlée sur bois, désincrustant sur pierre, anti-mousse préventif sur zones ombragées.",
        "Protection systématique du mobilier et des plantes, gestion de l'écoulement pour éviter toute nuisance vers le voisinage ou les parties communes.",
      ],
      uniqueIntro: "<p>Dans le quartier des <strong>Coteaux</strong>, les terrasses de pavillons subissent une exposition prolongée aux intempéries. Mousse, lichens et dépôts verts s'installent progressivement sur les dalles et le bois, rendant les surfaces glissantes et peu engageantes. Les résidus de feuilles mortes, la proximité d'arbres et l'humidité persistante accélèrent cette dégradation visible dès les premiers mois sans entretien.</p>\n<p class=\"mt-4\">Une terrasse encrassée modifie l'usage de l'espace extérieur : on hésite à y installer du mobilier, les repas dehors deviennent rares, et l'aspect général du logement en pâtit. Sur les <strong>terrasses en carrelage, bois ou composite</strong>, chaque matériau réagit différemment aux salissures et nécessite une approche adaptée pour éviter d'endommager le support tout en obtenant un résultat durable.</p>\n<p class=\"mt-4\">L'intervention prend en compte l'<strong>exposition aux intempéries</strong> et la configuration de votre extérieur — présence de mobilier, jardinières ou escaliers. Un diagnostic préalable permet de définir la méthode appropriée et d'organiser le chantier sans gêne pour les plantations ou le voisinage.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Le revêtement de terrasse est d'abord débarrassé des gros dépôts — feuilles, terre, débris végétaux. Un balayage préalable prépare le support avant application du produit adapté au matériau. Sur carrelage grès, pierre naturelle ou béton, un traitement désincrustant est appliqué puis brossé mécaniquement.</p>\n<p class=\"mt-4\">Pour le bois et le composite, la pression est contrôlée pour préserver les fibres et éviter l'éclatement des lames.</p>\n\n<h3>Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs sont traités dans la même intervention. Ces zones accumulent souvent des coulures et des traces de pollution qui contrastent avec la surface nettoyée. Le brossage manuel complète le passage mécanisé sur les angles et les joints.</p>\n<p class=\"mt-4\">Les margelles, si présentes, reçoivent un traitement anti-mousse préventif.</p>\n\n<h3>Gestion de l'eau et finition</h3>\n<p>L'évacuation des eaux de lavage est orientée vers les points d'écoulement existants. Les plantations et jardinières sont protégées pendant l'intervention. Un temps de séchage est respecté avant la remise en place du mobilier extérieur.</p>",
      specificChallenges: [
        "Mousses et lichens tenaces sur les terrasses exposées nord ou sous couvert végétal.",
        "Supports variés — bois, composite, pierre — nécessitant des réglages de pression différents.",
        "Présence fréquente de mobilier lourd et jardinières à déplacer ou protéger.",
        "Escaliers extérieurs et margelles souvent oubliés lors d'un entretien classique.",
        "Gestion de l'eau de lavage sur terrasses en hauteur ou mitoyennes.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les terrasses des Coteaux, comment adaptez-vous le nettoyage aux supports en bois, pierre ou composite ?",
          answer: "<p>Chaque matériau reçoit un traitement spécifique. Le bois et le composite sont traités à basse pression pour éviter l'éclatement des fibres. La pierre et le carrelage supportent un brossage mécanique plus appuyé avec un produit désincrustant adapté. Un test préalable sur une zone discrète confirme le réglage retenu.</p>",
        },
        {
          question:
            "À Argenteuil, comment traitez-vous les mousses et lichens sur une terrasse exposée aux intempéries ?",
          answer: "<p>Un produit anti-mousse est appliqué avant le nettoyage pour décoller les végétaux incrustés. Le brossage mécanique élimine ensuite les résidus. Sur les zones particulièrement ombragées ou humides, un traitement préventif peut être appliqué en fin d'intervention pour ralentir la repousse.</p>",
        },
        {
          question:
            "Dans les maisons avec terrasse à Argenteuil, comment gérez-vous escaliers et margelles pendant l'intervention ?",
          answer: "<p>Ces éléments sont intégrés au périmètre de nettoyage. Les escaliers extérieurs reçoivent le même traitement que la surface principale, avec attention particulière aux nez de marche. Les margelles sont brossées et traitées contre la mousse pour un résultat homogène sur l'ensemble de l'espace extérieur.</p>",
        },
        {
          question:
            "Pour une terrasse à Argenteuil, privilégiez-vous un nettoyage doux plutôt qu'une haute pression selon le support ?",
          answer: "<p>La haute pression n'est pas systématique. Sur bois, composite ou pierre poreuse, un nettoyage à pression modérée associé à un produit adapté préserve le matériau. La haute pression reste réservée aux surfaces béton ou carrelage résistant, et toujours avec un réglage contrôlé pour éviter d'endommager les joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, avec traitement de chaque pièce et coordination adaptée aux contraintes d'accès pour une restitution propre dans les délais convenus.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Argenteuil, des grands ensembles du Val d'Argenteuil aux pavillons des Coteaux.",
        "Polyvalence sur tous types de sols et finitions minutieuses adaptées aux exigences d'état des lieux.",
        "Organisation calée sur vos délais, coordination avec agences ou artisans, et respect des accès par badge ou gardien.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les logements du quartier Val Notre-Dame accumulent poussières de chantier, résidus d'enduit et traces sur les sols. Les délais se resserrent, le propriétaire ou l'agence attend une restitution impeccable, et chaque jour compte pour éviter les pénalités ou retards de remise de clés.</p>\n<p class=\"mt-4\">Un appartement ou une maison nettoyé en profondeur facilite la transition entre deux occupants. Dans les petits collectifs et résidences récentes d'Argenteuil, les sols en parquet, carrelage ou lino retrouvent leur aspect d'origine. Les pièces d'eau redeviennent présentables, les placards sont vidés de leurs poussières, et l'ensemble du logement peut être photographié ou visité sans réserve.</p>\n<p class=\"mt-4\">L'intervention se planifie en amont avec le gestionnaire ou le particulier. Accès par digicode, récupération des clés auprès du gardien, coordination avec les artisans encore présents : chaque étape logistique est anticipée pour respecter la date de remise convenue.</p>",
      uniqueDeepDive: "<h3>Logement prêt à habiter</h3>\n<p>Le résultat attendu : sols propres et secs, sanitaires désinfectés, vitres intérieures sans traces, placards dépoussiérés. Chaque surface est traitée selon son revêtement pour une restitution conforme aux exigences d'un état des lieux ou d'une entrée locataire.</p>\n\n<h3>Traitement par zones</h3>\n<p>Les pièces d'eau reçoivent un nettoyage approfondi : faïence, joints, robinetterie, électroménager encastré. Les pièces de vie sont dépoussiérées du plafond aux plinthes, puis les sols aspirés et lavés. Les traces de peinture ou d'enduit sont retirées manuellement sur les supports fragiles.</p>\n\n<h3>Coordination et accès</h3>\n<p>L'intervention s'organise autour des contraintes du logement. Récupération des clés, passage après les derniers artisans, respect des horaires imposés par le syndic ou le bailleur. Un contrôle final vérifie chaque pièce avant restitution des clés ou validation du chantier terminé.</p>",
      specificChallenges: [
        "Délais serrés entre fin de chantier et remise des clés dans les logements à forte rotation.",
        "Résidus d'enduit et poussières fines sur parquet ou carrelage après travaux de rénovation.",
        "Accès par digicode ou badge à anticiper dans les copropriétés du Val d'Argenteuil.",
        "Coordination nécessaire avec artisans, agences immobilières ou propriétaires bailleurs.",
        "Pièces d'eau encrassées nécessitant un traitement approfondi avant état des lieux sortant.",
      ],
      faqAdditions: [
        {
          question:
            "Près de la gare d'Argenteuil, sous quel délai intervenez-vous pour un nettoyage d'appartement en urgence ?",
          answer: "<p>Nous pouvons intervenir sous 24 à 48 heures selon la disponibilité et la surface du logement. Pour les situations urgentes liées à un état des lieux imminent, nous adaptons notre planning en priorité après échange téléphonique sur les contraintes d'accès et le périmètre à traiter.</p>",
        },
        {
          question:
            "À Argenteuil, quelle différence faites-vous entre un nettoyage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Le nettoyage fin de chantier inclut le retrait des résidus de travaux : poussières d'enduit, traces de peinture, colle sur les sols. Les vitres intérieures sont également traitées. Un nettoyage standard se concentre sur l'entretien courant sans cette phase de décrassage post-travaux.</p>",
        },
        {
          question:
            "Dans les logements du Val d'Argenteuil, comment traitez-vous un nettoyage après dégât des eaux ?",
          answer: "<p>Après séchage complet des surfaces, nous intervenons pour éliminer les traces d'humidité, les dépôts calcaires et les éventuelles moisissures superficielles. Les sols et plinthes sont nettoyés en profondeur. Si des odeurs persistent, une aération prolongée est recommandée avant notre passage.</p>",
        },
        {
          question:
            "À Argenteuil, comment anticipez-vous l'accès au logement avec les badges et digicodes fréquents ?",
          answer: "<p>Nous organisons la récupération des clés ou badges en amont avec le propriétaire, l'agence ou le gardien. Les codes d'accès sont transmis la veille de l'intervention. Cette coordination évite tout retard le jour J et garantit le respect du créneau prévu pour la remise en état.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;