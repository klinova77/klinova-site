import type { City } from "~/types/geo";

const city: City = {
  name: "Cachan",
  slug: "cachan",
  postalCodes: ["94230"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Cachan pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes du coteau comme aux résidences denses du centre-ville, avec une équipe réactive sur l'ensemble de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro:
    "<p>Au pied de l'Aqueduc de la Vanne et du Campus Cachan, Klinova accompagne syndics, gestionnaires et particuliers dans l'entretien régulier de leurs locaux. Notre implantation locale permet une réactivité adaptée aux rythmes de la commune.</p>\n<p class=\"mt-4\">Nous assurons la propreté des halls, le lavage des parkings, l'entretien des balcons et terrasses. Chaque intervention fait l'objet d'un <strong>suivi précis</strong>, avec reporting disponible pour les gestionnaires qui le souhaitent.</p>\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise en compte des contraintes d'accès sur le Coteau et des horaires sensibles près de la gare RER pour limiter la gêne.</li>\n  <li><strong>Matériel adapté :</strong> Équipements dimensionnés selon les surfaces, des studios étudiants aux parkings de résidences collectives.</li>\n  <li><strong>Interlocuteur dédié :</strong> Un référent unique pour centraliser les demandes et assurer le suivi des interventions programmées ou ponctuelles.</li>\n</ul>",

  citySpecificChallenges: [
    "<strong>Poussière de chantier</strong> liée aux travaux du Grand Paris Express autour de la gare.",
    "Dépôts noirs sur les balcons exposés à la <strong>D920 (ex-N20)</strong> et à l'A6.",
    "Accès contraints dans les <strong>rues en pente du Coteau</strong> avec stationnement limité.",
    "Halls à fort passage dans les <strong>résidences proches du RER</strong> Arcueil-Cachan.",
    "<strong>Rotation locative étudiante</strong> générant des besoins fréquents de remise en état.",
    "Parkings souterrains des années 70-80 avec <strong>sols béton encrassés</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Le Coteau",
    "La Plaine",
    "Ouest-Sud / Cité-Jardins",
    "Saint-Jean",
    "Grange-Ory",
  ],
  nearbyCities: [
        "arcueil",
        "bagneux",
        "villejuif",
        "gentilly",
        "chevilly-larue",
        "montrouge",
        "chatillon",
        "vitry-sur-seine",
        "vanves",
        "ivry-sur-seine"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Cachan",
    "Gare RER Arcueil-Cachan",
    "Aqueduc de la Vanne",
    "Campus Cachan (EPF / ESTP / Aivancity)",
    "Parc Raspail",
    "Marché Carnot",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les secteurs où le stationnement est difficile ?",
      answer:
        "<p>Nous repérons les créneaux les moins saturés et privilégions les horaires décalés. Pour le centre-ville et les abords de la gare, l'équipe arrive avec un matériel organisé pour limiter les allers-retours, avec un <strong>format utilitaire compact</strong> quand c'est nécessaire.</p>",
    },
    {
      question: "Proposez-vous des interventions en urgence sur Cachan ?",
      answer:
        "<p>Oui, selon la nature de la demande et notre planning, nous pouvons intervenir rapidement. Dégât des eaux, souillure accidentelle ou remise en état avant visite : nous adaptons le créneau pour répondre aux situations imprévues.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec un syndic pour des interventions régulières ?",
      answer:
        "<p>Nous établissons un calendrier d'intervention validé ensemble. Le gardien ou le gestionnaire reçoit un <strong>compte-rendu</strong> après chaque passage si souhaité. Les ajustements de fréquence ou de périmètre se font simplement, par échange direct.</p>",
    },
    {
      question:
        "Intervenez-vous dans les immeubles avec digicode ou badge Vigik ?",
      answer:
        "<p>Oui, c'est courant à Cachan. Nous récupérons les accès en amont ou convenons d'un créneau avec le gardien. Les résidences récentes du centre comme les ensembles de La Plaine sont accessibles avec une organisation standard.</p>",
    },
  ],

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec traitement adapté aux fibres et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des configurations locales : halls collectifs du centre, pavillons du Coteau, bâtiments universitaires du campus.",
        "Matériel injection-extraction professionnel avec réglage de pression selon densité et épaisseur des fibres textiles.",
        "Interventions planifiées en dehors des heures de cours ou d'activité pour limiter la gêne des occupants.",
      ],
      uniqueIntro:
        "<p>Dans les locaux du <strong>Campus Cachan</strong>, les salles de cours et bureaux administratifs accumulent rapidement poussières et traces de passage. Les dalles textiles supportent un trafic quotidien intense, et les fibres retiennent particules fines et résidus de semelles. Sans entretien régulier, le grisaillement s'installe et les taches de café ou d'encre deviennent difficiles à éliminer.</p>\n<p class=\"mt-4\">Un détachage ciblé redonne aux sols textiles leur aspect d'origine. Dans les <strong>immeubles anciens du centre-ville</strong> ou les petits collectifs avec halls ouverts, les moquettes retrouvent une tenue visuelle correcte. Les occupants constatent la différence dès le séchage terminé : couleurs ravivées, odeurs de renfermé dissipées, confort de marche restauré.</p>\n<p class=\"mt-4\">La pollution provenant de l'ex-N20 et le flux d'étudiants génèrent un encrassement récurrent. Une intervention structurée permet d'adapter le traitement selon l'épaisseur des fibres, la nature des taches et les contraintes d'accès propres à chaque site.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et entrées concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant injection du produit nettoyant. Les passes d'extraction se multiplient sur ces surfaces très sollicitées.</p>\n\n<h3>Surfaces de travail et espaces cloisonnés</h3>\n<p>Bureaux, salles de réunion et open spaces reçoivent un traitement adapté à leur usage. Les plinthes et bas de murs sont protégés. Le détachage cible les auréoles de café, traces de stylo ou résidus alimentaires selon leur ancienneté.</p>\n\n<h3>Finitions et gestion du séchage</h3>\n<p><strong>L'extraction maximale</strong> limite le temps d'humidité résiduelle. Selon l'épaisseur de la moquette et la ventilation du local, le séchage complet intervient sous 4 à 8 heures. Une consigne de non-piétinement est transmise pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des salles de cours</strong> : trafic étudiant quotidien et taches répétées.",
        "<strong>Moquettes velours des pavillons du Coteau</strong> : fibres délicates nécessitant une pression contrôlée.",
        "<strong>Halls ouverts des petits collectifs</strong> : encrassement rapide par les passages fréquents.",
        "<strong>Poussières fines liées à la circulation</strong> sur l'avenue Aristide Briand infiltrant les locaux.",
        "<strong>Escaliers étroits dans certains immeubles anciens</strong> : acheminement du matériel à adapter.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les immeubles du quartier Le Coteau avec escaliers étroits, comment acheminez-vous le matériel de nettoyage ?",
          answer:
            "<p>Le matériel se démonte en <strong>éléments transportables à la main</strong>. Les flexibles et la cuve passent séparément dans les cages d'escalier pentues. L'intervention reste possible même sans ascenseur, avec un temps de mise en place légèrement allongé.</p>",
        },
        {
          question:
            "Pour des taches anciennes sur les moquettes des salles du Campus Cachan, quel résultat peut-on attendre ?",
          answer:
            "<p>Les taches incrustées depuis plusieurs mois nécessitent un <strong>pré-traitement ciblé</strong> avant extraction. Le résultat dépend de la nature de la salissure et du type de fibre. Les traces de café ou de tanin s'atténuent nettement, les auréoles grasses demandent parfois une seconde passe.</p>",
        },
        {
          question:
            "Shampouinage vapeur ou injection-extraction : quelle méthode pour les bureaux administratifs avenue du Président Wilson ?",
          answer:
            "<p>L'injection-extraction convient aux moquettes épaisses ou très encrassées : elle retire l'eau sale en profondeur. La vapeur seule désinfecte mais extrait moins de résidus. Pour des dalles textiles de bureau, l'injection-extraction offre un meilleur rendu visuel.</p>",
        },
        {
          question:
            "Adaptez-vous le procédé selon le type de moquette entre bureaux du campus et salons pavillonnaires ?",
          answer:
            "<p>Les dalles textiles des bureaux supportent une pression d'injection plus élevée et sèchent vite. Les velours épais des pavillons demandent un réglage plus doux et un temps de séchage prolongé. Le diagnostic initial détermine les paramètres appliqués.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings cachanais : accès contraints sur le Coteau, sous-sols récents près de la gare, aériens à La Plaine.",
        "Autolaveuse professionnelle et récupération intégrale des eaux de lavage pour un chantier conforme aux exigences environnementales.",
        "Planification avec le syndic, balisage sécurisé et rotation véhicules par zone pour maintenir l'accès aux résidents.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les dalles béton, les coulures d'huile marquent les emplacements, et la poussière forme un <strong>voile grisâtre</strong> sur l'ensemble du niveau. Dans le quartier La Plaine, les parkings aériens comme les sous-sols de copropriété subissent un encrassement progressif lié au trafic quotidien et aux particules fines du chantier du Grand Paris Express.</p>\n<p class=\"mt-4\">Un sol de parking propre modifie la perception globale de la résidence. Les gestionnaires reçoivent moins de signalements, les usagers circulent dans un espace plus lisible, et la copropriété préserve la valeur de ses équipements. Les revêtements béton des constructions années 70-80 comme les résines des parkings souterrains récents près de la gare nécessitent un traitement adapté à leur porosité et leur état de surface.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic : balisage des zones, rotation des véhicules par secteur, et planification aux heures creuses pour réduire l'impact sur les déplacements pendulaires vers le RER B.</p>",
      uniqueDeepDive:
        "<h3>Sol décrassé, circulation fluide</h3>\n<p>Le résultat visé : un revêtement débarrassé des dépôts gras, des traces de pneus et de la poussière accumulée. Les marquages au sol redeviennent lisibles, les zones de circulation se distinguent nettement des emplacements.</p>\n\n<h3>Autolaveuse et traitement ciblé</h3>\n<p>Le passage mécanisé combine aspiration et injection de solution dégraissante. Sur béton brut, la pression s'adapte pour déloger les salissures incrustées sans dégrader la surface. Les rampes d'accès reçoivent un traitement antidérapant renforcé. Angles morts, pieds de murs et rigoles font l'objet de passes manuelles complémentaires.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage chargées en résidus sont récupérées et évacuées selon les normes en vigueur. Aucun rejet vers les évacuations pluviales. Le dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention sur demande. Un compte-rendu avec photos documente l'état avant/après pour le syndic.</p>",
      specificChallenges: [
        "<strong>Poussière de chantier du Grand Paris Express</strong> infiltrée dans les parkings souterrains du centre.",
        "<strong>Sols béton poreux des résidences années 70-80</strong> à La Plaine nécessitant un décapage adapté.",
        "Rampes d'accès pentues sur le Coteau demandant un traitement antidérapant renforcé.",
        "Coordination avec les heures de pointe RER B pour limiter la gêne aux usagers.",
        "<strong>Gestion stricte des eaux usées</strong> dans les parkings proches des zones piétonnes du Marché Carnot.",
      ],
      faqAdditions: [
        {
          question:
            "Intervenez-vous différemment sur un parking souterrain près de la gare RER par rapport à un parking aérien de La Plaine ?",
          answer:
            "<p>Les parkings souterrains récents disposent souvent de <strong>sols en résine moins poreux</strong>, ce qui permet un lavage plus rapide. Les parkings aériens de La Plaine, avec leur béton brut exposé aux intempéries, nécessitent un décrassage plus appuyé et un temps de séchage naturel. Le matériel et les produits s'adaptent à chaque configuration.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes sur le béton d'un parking copropriété à La Plaine ?",
          answer:
            "<p>Les coulures huileuses incrustées reçoivent un dégraissant alcalin appliqué en pré-traitement. Après temps de contact, l'autolaveuse effectue plusieurs passes sur la zone. Les taches très anciennes peuvent nécessiter une seconde intervention. Le résultat dépend de la porosité du support et de l'ancienneté des dépôts.</p>",
        },
        {
          question:
            "Quelle est votre procédure pour récupérer les eaux de lavage d'un parking proche du Marché Carnot ?",
          answer:
            "<p>L'autolaveuse aspire les eaux usées au fur et à mesure du passage. <strong>Aucun rejet n'est effectué</strong> vers les bouches d'évacuation pluviale. Les eaux chargées sont stockées dans la cuve de l'engin puis évacuées conformément à la réglementation. Cette méthode évite tout ruissellement vers les espaces piétons du marché.</p>",
        },
        {
          question:
            "Peut-on planifier le nettoyage d'un parking en dehors des heures de pointe du RER B ?",
          answer:
            "<p>Les interventions se programment généralement en milieu de matinée ou début d'après-midi, entre les flux pendulaires. Pour les parkings à fort taux d'occupation, un zonage par secteur permet de libérer progressivement les places. Le syndic reçoit un planning détaillé pour informer les résidents en amont.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Cachan, avec traitement adapté au support, protection des menuiseries et gestion rigoureuse des écoulements pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face à l'Avenue Aristide Briand ou abrités côté Marché Carnot, chaque configuration est évaluée.",
        "Pression ajustée selon le support : carrelage, béton ou dalles sur plots, le réglage préserve les joints et évite les éclats.",
        "Gestion stricte des écoulements : bâches et récupération d'eau pour ne pas impacter les voisins ni la façade de l'immeuble.",
      ],
      uniqueIntro:
        "<p>Le long de l'<strong>Avenue Aristide Briand</strong> et dans les secteurs centraux de Cachan, les balcons accumulent rapidement un voile grisâtre. La circulation dense sur cet axe dépose une pellicule de suie qui s'incruste dans les joints et ternit les surfaces. Les poussières liées aux travaux du futur Métro 15 accentuent encore ce phénomène, rendant l'espace extérieur peu engageant malgré son potentiel.</p>\n<p class=\"mt-4\">Sur les <strong>balcons filants des immeubles années 60-70</strong> comme sur les loggias carrelées des résidences récentes, cette couche noire finit par coller. Un simple coup de balai ne suffit plus. Le sol devient glissant par temps humide, le mobilier se salit dès qu'on le pose, et l'envie de profiter de cet espace s'estompe progressivement.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Diagnostic du support, protection des fenêtres et plantes, traitement ciblé puis rinçage contrôlé : chaque étape vise un résultat visible sans créer de désagrément pour les voisins du dessous.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Les menuiseries sont bâchées pour éviter les projections sur les fenêtres et portes. Le mobilier de jardin et les plantes sont déplacés ou protégés. Les gros dépôts — feuilles mortes, terre accumulée, débris divers — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement du sol et des éléments verticaux</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour carrelage, béton brut ou dalles sur plots. Le brossage manuel ou mécanique déloge les salissures incrustées. Le garde-corps et les vitrages sont traités dans la foulée. Les murs mitoyens accessibles reçoivent également un passage si nécessaire.</p>\n\n<h3>Rinçage et séchage</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles. Un système anti-coulures protège la façade et le balcon du voisin situé en dessous. Une fois l'eau évacuée, le séchage naturel s'achève en quelques heures. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts noirs liés à la circulation sur l'Avenue Aristide Briand, incrustés dans les joints.",
        "<strong>Poussières de chantier du futur Métro 15</strong> qui se déposent régulièrement sur les surfaces.",
        "Balcons filants des immeubles années 60-70 avec joints anciens nécessitant une pression maîtrisée.",
        "Loggias des résidences récentes du centre avec carrelage lisse sensible aux traces de calcaire.",
        "Accès parfois contraint par digicode et stationnement difficile en zone gare.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons carrelés des résidences récentes du centre-ville de Cachan, quels produits et précautions utilisez-vous pour préserver les joints ?",
          answer:
            "<p>Nous sélectionnons des <strong>détergents au pH neutre</strong> qui n'attaquent pas les joints ciment. Le brossage reste manuel sur les zones fragiles, et la pression de rinçage est réduite pour éviter tout déchaussement. Les carrelages lisses des constructions neuves retrouvent leur aspect sans trace de calcaire.</p>",
        },
        {
          question:
            "Comment traiter un balcon fortement noirci par la pollution de l'Avenue Aristide Briand sans abîmer le sol ?",
          answer:
            "<p>Les dépôts de suie nécessitent un produit dégraissant appliqué en phase de trempage. Le brossage mécanique déloge la couche incrustée sans frotter excessivement. Le rinçage contrôlé évacue les résidus sans projeter d'eau sale sur la façade ou chez le voisin du dessous.</p>",
        },
        {
          question:
            "Proposez-vous un nettoyage combiné garde-corps et vitrages pour les loggias des résidences du centre-ville ?",
          answer:
            "<p>Oui, l'intervention inclut le <strong>garde-corps métallique ou vitré</strong> ainsi que les parois vitrées de la loggia. Le traitement est adapté à chaque matériau : dégraissant pour l'aluminium, produit vitres sans trace pour les surfaces transparentes. L'ensemble est rincé et essuyé dans la foulée.</p>",
        },
        {
          question:
            "Comment intervenez-vous pour un balcon en étage élevé si l'accès est contraint par digicode et rue étroite ?",
          answer:
            "<p>Nous coordonnons l'accès en amont avec vous ou le gardien pour obtenir les codes nécessaires. Le matériel est acheminé à pied si le stationnement est impossible à proximité. L'intervention se déroule depuis l'intérieur du logement, sans échafaudage ni nacelle.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes, avec désinfection virucide et pose optionnelle de dispositifs anti-retour pour retrouver un espace utilisable en toute sérénité.",
      whyUsBullets: [
        "Connaissance des zones à risque autour du Parc Raspail et des façades anciennes du centre de Cachan.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide systématique après collecte.",
        "Organisation calibrée pour les accès difficiles du Coteau et évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro:
        "<p>Après plusieurs mois sans intervention, les dépôts de fientes s'accumulent sur les garde-corps et les sols. À proximité du <strong>Parc Raspail</strong> et des abords de l'Aqueduc, les pigeons trouvent des zones de nichage favorables. Les balcons exposés reçoivent des couches successives qui durcissent, dégagent une odeur persistante et rendent l'espace inutilisable au quotidien.</p>\n<p class=\"mt-4\">Les <strong>corniches et façades anciennes du centre-ville</strong> présentent des reliefs propices à l'accumulation. Le béton et les peintures subissent une dégradation progressive sous l'effet de l'acidité des déjections. Le linge étendu s'imprègne, les meubles d'extérieur se salissent, et la gêne vis-à-vis du voisinage s'installe durablement.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter le problème à la source. Le protocole inclut confinement de la zone, collecte sécurisée, désinfection des supports et évacuation des déchets en sacs étanches. Selon les contraintes d'accès dans les <strong>rues étroites du Coteau</strong>, l'organisation s'adapte pour limiter la gêne et respecter les horaires sensibles du quartier.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et supports préservés</h3>\n<p>L'objectif est de restituer un espace propre, désinfecté et prêt à être réutilisé. Les traces incrustées disparaissent, l'odeur est neutralisée et les matériaux retrouvent leur aspect d'origine sans dégradation supplémentaire.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement et éviter toute dispersion vers les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement des surfaces et désinfection</h3>\n<p>Le sol, le garde-corps et les vitrages sont nettoyés méthodiquement. Un produit virucide homologué est appliqué avec un temps de contact respecté pour éliminer les agents pathogènes. Un rinçage final précède l'aération du balcon. Si nécessaire, des pics ou filets anti-pigeons peuvent être posés sur les rebords pour limiter le retour des oiseaux.</p>",
      specificChallenges: [
        "Nichage fréquent aux abords du Parc Raspail et sur les corniches de l'Aqueduc.",
        "Fientes séchées sur béton ancien provoquant corrosion et taches persistantes.",
        "Rues en pente et sens uniques sur le Coteau compliquant l'accès et le stationnement.",
        "Odeurs tenaces imprégnant le linge et gênant le voisinage en période estivale.",
        "Nécessité de confinement rigoureux pour éviter dispersion des particules contaminées.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes accumulées sur les corniches autour de l'Aqueduc de la Vanne présentent-elles un danger sanitaire immédiat ?",
          answer:
            "<p>Les déjections sèches libèrent des particules pouvant véhiculer des agents pathogènes. Sans manipulation adaptée, le risque d'inhalation existe. Une intervention rapide avec confinement et équipement de protection permet de sécuriser la zone avant que la situation ne se dégrade davantage.</p>",
        },
        {
          question:
            "Quel équipement de protection utilisez-vous pour traiter des fientes sèches sur un balcon proche du Parc Raspail ?",
          answer:
            "<p>L'intervenant porte un masque FFP2, des gants résistants, des lunettes de protection et une combinaison jetable. Cette tenue évite tout contact direct et protège des poussières contaminées lors du ramassage. Elle est retirée et éliminée avec les déchets en fin d'intervention.</p>",
        },
        {
          question:
            "Après avoir retiré les fientes sur une loggia en centre-ville, quelle désinfection appliquez-vous pour garantir la sécurité ?",
          answer:
            "<p>Un produit virucide et bactéricide homologué est pulvérisé sur l'ensemble des surfaces nettoyées. Le temps de contact recommandé est respecté avant rinçage. Cette étape élimine les agents pathogènes résiduels et permet une réutilisation du balcon sans risque pour les occupants.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets contaminés quand la rue du Coteau est étroite et à sens unique ?",
          answer:
            "<p>Les fientes et équipements souillés sont conditionnés en sacs étanches directement sur place. Le véhicule stationne au plus proche selon les contraintes de voirie. L'évacuation s'effectue en fin d'intervention pour limiter les allers-retours et réduire la gêne pour le voisinage.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile frais et sain.",
      whyUsBullets: [
        "Connaissance des logements cachanais, des pavillons du Coteau aux studios proches du campus et de la gare.",
        "Matériel d'injection-extraction textile avec réglages adaptés aux velours fragiles comme aux synthétiques résistants.",
        "Organisation souple pour intervenir rapidement malgré les accès en pente et les contraintes de stationnement.",
      ],
      uniqueIntro:
        "<p>Comment préserver la fraîcheur d'un canapé quand les enfants y prennent leur goûter, que le chat s'y installe chaque soir, ou qu'un café renversé laisse une auréole tenace ? Dans les maisons du <strong>quartier Le Coteau</strong>, les textiles d'assise et les tapis de salon accumulent poussières, taches alimentaires et poils d'animaux au fil des semaines. Les odeurs s'imprègnent, les fibres ternissent, et le confort visuel s'efface progressivement.</p>\n<p class=\"mt-4\">Un rafraîchissement professionnel redonne aux tissus leur souplesse et leur éclat d'origine. Les acariens sont délogés, les taches anciennes atténuées, et l'atmosphère du salon redevient agréable. Sur les <strong>velours ras des pavillons</strong> comme sur les clic-clac des studios meublés, le résultat se voit et se sent dès le séchage terminé.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des <strong>accès parfois compliqués</strong> — rues en pente, escaliers extérieurs — et des contraintes horaires des foyers. Diagnostic textile, traitement adapté, extraction soignée : chaque étape vise un rendu durable sans mobiliser votre journée entière.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et taches atténuées</h3>\n<p>L'objectif est de retrouver un canapé ou un tapis débarrassé des salissures visibles et des résidus invisibles. Les fibres retrouvent leur souplesse, les couleurs leur vivacité, et les odeurs désagréables disparaissent.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Les taches identifiées reçoivent un pré-traitement adapté — enzymatique pour les résidus organiques, dégraissant pour les auréoles grasses. L'injection-extraction pénètre ensuite dans les fibres pour décoller et aspirer les salissures en profondeur.</p>\n\n<h3>Extraction maximale et conseils séchage</h3>\n<p>L'eau résiduelle est extraite au maximum pour limiter le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez quelques heures avant de vous réinstaller. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Taches enfants et animaux sur canapés familiaux du Coteau nécessitant détachage enzymatique.",
        "Studios meublés près du campus avec clic-clac encrassés par rotation locative fréquente.",
        "Tapis laine anciens dans les pavillons demandant pression et température contrôlées.",
        "Accès compliqués en rues pentues : matériel portatif indispensable pour certaines adresses.",
        "Séchage à optimiser dans les appartements centre-ville sans balcon ni terrasse.",
      ],
      faqAdditions: [
        {
          question:
            "Le nettoyage professionnel élimine-t-il efficacement les acariens sur les canapés des maisons du Coteau ?",
          answer:
            "<p>L'injection-extraction déloge les acariens et leurs déjections incrustés dans les fibres. Sur les canapés des pavillons cachanais, souvent sollicités par toute la famille, ce traitement réduit significativement les allergènes présents. Le résultat se ressent dès le séchage terminé, avec un textile plus sain au quotidien.</p>",
        },
        {
          question:
            "Comment procédez-vous pour un canapé tissu non déhoussable dans un studio étudiant proche du campus ?",
          answer:
            "<p>Le diagnostic identifie d'abord le type de tissu et les taches présentes. Un pré-traitement cible les zones souillées avant l'injection-extraction sur place. La méthode s'adapte aux contraintes des petits espaces meublés, fréquents autour du campus Cachan, sans nécessiter de déplacer le mobilier hors du logement.</p>",
        },
        {
          question:
            "Quel temps de séchage prévoir pour un canapé après intervention dans un appartement centre-ville sans balcon ?",
          answer:
            "<p>Comptez généralement trois à six heures selon l'épaisseur du textile et l'aération disponible. Dans les appartements cachanais sans extérieur, nous conseillons d'ouvrir les fenêtres et d'éviter de recouvrir l'assise pendant le séchage. L'extraction maximale réalisée sur place limite déjà l'humidité résiduelle.</p>",
        },
        {
          question:
            "Que faut-il préparer dans le logement près de la gare pour que l'intervention se déroule efficacement ?",
          answer:
            "<p>Dégagez l'accès au canapé ou au tapis en éloignant les objets fragiles et les petits meubles. Prévoyez une place de stationnement à proximité si possible, les abords de la gare étant souvent saturés. Ces préparatifs permettent de démarrer rapidement et de limiter la durée de l'intervention dans votre logement.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse à Cachan : traitement des mousses, nettoyage adapté au support et protection du mobilier pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires du Coteau et de leurs contraintes de pente et d'exposition ombragée.",
        "Adaptation du traitement selon le support : pression contrôlée sur bois, produit désincrustant sur carrelage, protection des joints sur dalles.",
        "Gestion de l'écoulement d'eau vers les points adaptés, protection des plantations et coordination avec les voisins si terrasse en hauteur.",
      ],
      uniqueIntro:
        "<p>Les dépôts verts s'installent progressivement sur les terrasses des pavillons du <strong>Coteau</strong> et de <strong>Saint-Jean</strong>. L'exposition Est ou Sud-Est, combinée à la végétation environnante, favorise l'apparition de mousses et de lichens qui rendent les surfaces glissantes et ternes. Ces traces vertes s'étendent chaque saison un peu plus, particulièrement dans les zones ombragées par les arbres ou les murets.</p>\n<p class=\"mt-4\">Sur les supports variés que l'on retrouve à Cachan — carrelage, dalles gravillonnées ou bois composite — ces salissures s'incrustent différemment. Le bois devient gris et poreux, les dalles perdent leur teinte d'origine, le carrelage se couvre d'un film verdâtre. L'espace extérieur perd son attrait et son usage devient moins agréable dès les premiers jours de beau temps.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter chaque type de surface avec la méthode appropriée. Le diagnostic préalable identifie les zones à risque, notamment sur les terrasses en pente où l'écoulement d'eau demande une attention particulière pour protéger les plantations et le voisinage.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché. Les jardinières et plantes sont écartées des zones de travail. Les menuiseries — baies vitrées, portes — reçoivent une protection pour éviter les projections.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois, désincrustant pour le carrelage, traitement spécifique pour les dalles gravillonnées. Le brossage — manuel ou mécanique selon la surface — décolle les mousses et lichens. La haute pression intervient uniquement sur les supports qui la tolèrent, avec une puissance contrôlée pour préserver les joints et les matériaux poreux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les garde-corps et murets adjacents sont nettoyés. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts selon l'exposition de votre terrasse.</p>",
      specificChallenges: [
        "Mousses et lichens persistants sur terrasses ombragées par la végétation du Coteau.",
        "Supports variés nécessitant des traitements différenciés : bois, carrelage, dalles gravillonnées.",
        "Terrasses en pente avec gestion d'écoulement vers les jardins ou espaces voisins.",
        "Noircissement lié à la pollution atmosphérique de l'axe D920 et de l'A6 proche.",
        "Protection des menuiseries et mobilier extérieur pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les mousses et lichens tenaces sur une terrasse ombragée d'un pavillon au Coteau ?",
          answer:
            "<p>Nous appliquons un produit anti-mousse adapté au support, suivi d'un brossage mécanique pour décoller les dépôts incrustés. Sur les zones très ombragées du Coteau, un traitement préventif prolonge l'efficacité du nettoyage en ralentissant la réapparition des végétaux.</p>",
        },
        {
          question:
            "Quelles précautions prenez-vous pour protéger une terrasse en bois ou en dalles gravillonnées lors du nettoyage ?",
          answer:
            "<p>Le bois reçoit un traitement basse pression avec un produit non agressif pour éviter l'éclatement des fibres. Les dalles gravillonnées sont nettoyées sans haute pression directe pour préserver les gravillons. Chaque support identifié lors du diagnostic reçoit une méthode spécifique.</p>",
        },
        {
          question:
            "Proposez-vous un traitement anti-mousse durable après le nettoyage d'une terrasse exposée à la pollution urbaine ?",
          answer:
            "<p>Oui, un traitement préventif peut être appliqué après le nettoyage. Il forme une barrière qui limite la reprise des mousses et lichens pendant plusieurs mois, particulièrement utile pour les terrasses proches de l'axe D920 où les dépôts se reforment plus vite.</p>",
        },
        {
          question:
            "Quelle est la meilleure saison pour nettoyer une terrasse pavillonnaire en pente au Coteau ?",
          answer:
            "<p>Le printemps et l'automne sont les périodes idéales : températures modérées pour le séchage, sol ni gelé ni brûlant. Sur les terrasses en pente du Coteau, nous évitons les périodes de fortes pluies pour maîtriser l'écoulement et protéger les plantations en contrebas.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Remise en propreté complète de votre logement à Cachan, que ce soit après travaux, avant un état des lieux ou pour un grand ménage ponctuel, avec un résultat conforme aux attentes des agences et propriétaires.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Cachan, du studio étudiant aux pavillons familiaux du Coteau.",
        "Polyvalence sur tous types de sols et de surfaces, avec traitement adapté aux résidus de chantier.",
        "Organisation calée sur vos contraintes : coordination agence, récupération de clés, intervention sous 48h si besoin.",
      ],
      uniqueIntro:
        "<p>Après plusieurs mois d'occupation ou quelques semaines de travaux, un logement accumule des traces que le ménage courant ne suffit pas à éliminer. À Cachan, les studios et T2 proches de la gare RER connaissent une rotation soutenue : chaque changement de locataire impose une remise en état rapide, souvent sous contrainte de délai imposé par l'agence ou le propriétaire.</p>\n<p class=\"mt-4\">Un nettoyage complet avant restitution des clés évite les litiges sur l'état des lieux et facilite la relocation. Dans les immeubles anciens du centre-ville comme dans les pavillons rénovés du Coteau, les sols, les pièces d'eau et les menuiseries présentent des salissures spécifiques : résidus de peinture après chantier, calcaire incrusté dans les sanitaires, poussière fine sur les plinthes et radiateurs.</p>\n<p class=\"mt-4\">L'intervention couvre l'ensemble du logement selon un plan adapté à la surface et au contexte. Coordination avec artisans en fin de chantier, remise des clés à l'agence, accès par digicode ou gardien : chaque contrainte est intégrée dès la prise de rendez-vous pour respecter vos délais.</p>",
      uniqueDeepDive:
        "<h3>Logement prêt à la remise des clés</h3>\n<p>Le résultat attendu : sols propres et secs, sanitaires détartrés, vitres intérieures sans traces, placards vidés et essuyés. Ce niveau de finition correspond aux exigences des agences immobilières pour valider un état des lieux sortie sans réserve.</p>\n\n<h3>Traitement différencié par zone</h3>\n<p>Les pièces d'eau reçoivent un détartrage complet des robinetteries, faïences et joints. La cuisine est dégraissée en profondeur, y compris les surfaces derrière l'électroménager. Les pièces de vie sont dépoussiérées du plafond aux plinthes, puis les sols sont aspirés et lavés selon leur nature : parquet, carrelage ou lino.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les interrupteurs, poignées et radiateurs sont nettoyés. En cas de fin de chantier, les traces de peinture ou d'enduit sur les menuiseries et vitrages sont retirées. Un contrôle visuel pièce par pièce précède la ventilation du logement avant votre passage ou celui de l'agence.</p>",
      specificChallenges: [
        "Rotation locative élevée près de la gare : délais serrés entre deux locataires.",
        "Résidus de chantier fréquents dans les pavillons rénovés du Coteau : peinture, enduit, poussière fine.",
        "Accès par digicode ou gardien dans les résidences récentes du centre-ville.",
        "Coordination avec agences immobilières locales pour remise des clés sans décalage.",
        "Sols variés selon l'époque du bâti : parquet ancien, carrelage, lino nécessitant des traitements distincts.",
      ],
      faqAdditions: [
        {
          question:
            "En urgence pour un état des lieux près de la gare RER, quel est votre délai d'intervention habituel à Cachan ?",
          answer:
            "<p>Pour les logements proches de la gare d'Arcueil-Cachan, nous pouvons intervenir sous 48 à 72 heures selon la surface et la disponibilité. En cas d'urgence avérée, un créneau prioritaire peut être proposé après échange téléphonique pour confirmer l'accès et le périmètre.</p>",
        },
        {
          question:
            "Pour un ménage de fin de chantier dans un pavillon rénové au Coteau, quelles tâches techniques sont incluses ?",
          answer:
            "<p>L'intervention comprend le retrait des traces de peinture et d'enduit sur les menuiseries et vitrages, le dépoussiérage complet des surfaces hautes et basses, le lavage des sols adaptés au revêtement, ainsi que le nettoyage approfondi des pièces d'eau et de la cuisine après travaux.</p>",
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour un nettoyage avant remise des clés demandé par une agence locale ?",
          answer:
            "<p>Le logement est rendu dans un état conforme aux attentes d'un état des lieux sortie : sols sans traces, sanitaires détartrés, vitres intérieures propres, placards essuyés. Si un point nécessite une repasse, nous intervenons avant le rendez-vous avec l'agence.</p>",
        },
        {
          question:
            "Comment organisez-vous la coordination avec artisans pour le nettoyage final sur un chantier proche du futur Métro 15 ?",
          answer:
            "<p>Nous calons l'intervention après la fin des travaux, en lien direct avec le maître d'œuvre ou l'artisan référent. L'accès au logement et la date de livraison sont confirmés en amont pour éviter tout décalage, même dans les zones impactées par les chantiers du Grand Paris.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
