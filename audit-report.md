# Audit City — Klinova

Généré : 2026-01-28T19:44:51.107Z
Total fichiers : 46

## alfortville — src/data/cities/alfortville.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[2].faqAdditions[0].question`
  - Reason: Correction d'une faute d'orthographe (anglicisme involontaire) : « balcony » → « balcon ».
  - Expected: `Q1 : Le nettoyage risque-t-il d'abîmer le carrelage ou les joints sur un balcony en béton comme on en trouve souvent dans le centre d'Alfortville ?`
  - Value: `Q1 : Le nettoyage risque-t-il d'abîmer le carrelage ou les joints sur un balcon en béton comme on en trouve souvent dans le centre d'Alfortville ?`

## arcueil — src/data/cities/arcueil.ts

### GPT patches (setField)

- **HIGH** — legal — `services[3].heroDescription`
  - Reason: Le terme « virucide » est une allégation technique/réglementaire sensible ; correction minimale pour réduire le risque sans changer le sens global.
  - Expected: `Assainissement complet de votre balcon souillé par les fientes, avec désinfection virucide des supports et mise en place de solutions anti-retour pour retrouver un espace sain.`
  - Value: `Assainissement complet de votre balcon souillé par les fientes, avec désinfection des supports et mise en place de solutions anti-retour pour retrouver un espace sain.`
- **HIGH** — legal — `services[3].whyUsBullets[1]`
  - Reason: « Désinfection virucide validée » est une formulation à risque (allégation) ; suppression du terme sensible en conservant l’idée de désinfection.
  - Expected: `Protocole EPI complet avec confinement systématique et désinfection virucide validée pour éliminer les agents pathogènes.`
  - Value: `Protocole EPI complet avec confinement systématique et désinfection validée pour éliminer les agents pathogènes.`
- **HIGH** — legal — `services[3].uniqueDeepDive`
  - Reason: Remplacement minimal de « produit virucide homologué » par « désinfectant homologué » pour éviter une allégation virucide spécifique.
  - Expected: `<h3>Balcon assaini et désinfecté</h3> <p>L'objectif est de restituer un espace propre, sans odeur, avec des surfaces décontaminées. Les agents pathogènes présents dans les fientes sont neutralisés par un produit virucide`
  - Value: `<h3>Balcon assaini et désinfecté</h3> <p>L'objectif est de restituer un espace propre, sans odeur, avec des surfaces décontaminées. Les agents pathogènes présents dans les fientes sont neutralisés par un désinfectant hom`
- **HIGH** — legal — `services[3].faqAdditions[0].answer`
  - Reason: Suppression de l’allégation « désinfection virucide » (risque réglementaire) en conservant le message.
  - Expected: `<p>Nous intervenons sous 48 à 72 heures selon disponibilité. Le protocole inclut confinement de la zone, collecte sécurisée des déjections, nettoyage des supports et désinfection virucide. L'espace redevient utilisable a`
  - Value: `<p>Nous intervenons sous 48 à 72 heures selon disponibilité. Le protocole inclut confinement de la zone, collecte sécurisée des déjections, nettoyage des supports et désinfection. L'espace redevient utilisable après séch`
- **HIGH** — legal — `services[3].faqAdditions[1].answer`
  - Reason: Retrait des mentions « virucide et bactéricide » (allégations sensibles) tout en gardant l’information sur l’usage d’un désinfectant homologué.
  - Expected: `<p>L'intervenant porte masque FFP2, combinaison jetable, lunettes et gants. Les fientes sont humidifiées avant manipulation pour éviter l'envol de particules. Le désinfectant utilisé est un produit virucide et bactéricid`
  - Value: `<p>L'intervenant porte masque FFP2, combinaison jetable, lunettes et gants. Les fientes sont humidifiées avant manipulation pour éviter l'envol de particules. Le désinfectant utilisé est un produit homologué, appliqué av`

## bagnolet — src/data/cities/bagnolet.ts

### GPT patches (setField)

- **HIGH** — legal — `services[3].whyUsBullets[1]`
  - Reason: Le terme « virucide » est une allégation technique/réglementaire potentiellement sensible ; correction minimale en supprimant la mention.
  - Expected: `Protocole complet avec EPI adaptés, confinement de la zone et désinfection virucide après chaque intervention.`
  - Value: `Protocole complet avec EPI adaptés, confinement de la zone et désinfection après chaque intervention.`

## bobigny — src/data/cities/bobigny.ts

### Local issues

- **HIGH** — consistency — `citySpecificChallenges`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``<strong>Parkings souterrains sous dalles</strong> : rampes étroites et ventilation limitée dans les résidences années 70-80.``
- **HIGH** — consistency — `citySpecificChallenges`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``<strong>Halls à fort passage</strong> : flux quotidien important autour du terminus Métro 5 et de la gare routière.``
- **HIGH** — consistency — `citySpecificChallenges`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``<strong>Pollution routière marquée</strong> : dépôts noirs sur balcons et façades liés à la proximité de l'A86 et de la N3.``
- **HIGH** — consistency — `citySpecificChallenges`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``<strong>Accès réglementés</strong> : badges et digicodes systématiques dans les résidences récentes et bâtiments administratifs.``
- **HIGH** — consistency — `citySpecificChallenges`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``<strong>Stationnement contraint</strong> : peu de places disponibles autour de la Préfecture et du centre-ville en journée.``

### GPT patches (setField)

- **LOW** — orthographe — `hubIntro`
  - Reason: Typographie : « métro » s’écrit en minuscule en français courant (hors nom propre).
  - Expected: `<p>À Bobigny, préfecture de la Seine-Saint-Denis et terminus du Métro 5, Klinova accompagne syndics, gestionnaires et occupants dans la gestion quotidienne de la propreté. Notre équipe connaît les spécificités du parc im`
  - Value: `<p>À Bobigny, préfecture de la Seine-Saint-Denis et terminus du métro 5, Klinova accompagne syndics, gestionnaires et occupants dans la gestion quotidienne de la propreté. Notre équipe connaît les spécificités du parc im`

## bussy-saint-georges — src/data/cities/bussy-saint-georges.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[5].whyUsBullets`
  - Reason: Suppression d’un toponyme potentiellement inexact (« Violennes ») et d’une formulation trop spécifique (« architecture briarde ») sans changer le sens global.
  - Expected: `[ "Déplacement dans tous les quartiers buxangeorgiens : Violennes et Vieux Village, Centre-Ville, Clos-Tillet-Génitoy, quartier du Golf, écoquartier du Sycomore.", "Protocole ajusté aux constructions locales : terrasses `
  - Value: `[ "Déplacement dans tous les quartiers de Bussy-Saint-Georges : Vieux Village, Centre-Ville, Clos-Tillet-Génitoy, quartier du Golf, écoquartier du Sycomore.", "Protocole ajusté aux constructions : terrasses des pavillons`

## cachan — src/data/cities/cachan.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[1].answer`
  - Reason: Retire une promesse de délai chiffré potentiellement trompeuse tout en conservant le sens.
  - Expected: `<p>Oui, selon la nature de la demande et notre planning, nous pouvons intervenir sous <strong>24 à 48 heures</strong>. Dégât des eaux, souillure accidentelle ou remise en état avant visite : nous adaptons le créneau pour`
  - Value: `<p>Oui, selon la nature de la demande et notre planning, nous pouvons intervenir rapidement. Dégât des eaux, souillure accidentelle ou remise en état avant visite : nous adaptons le créneau pour répondre aux situations i`
- **MEDIUM** — orthographe — `uniqueDeepDive`
  - Reason: Ajout minimal d’articles pour corriger une énumération bancale (grammaire).
  - Expected: `<h3>Zones de circulation intense</h3> <p>Les couloirs et entrées concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant injection du produit nettoyant. Les passes d'extraction s`
  - Value: `<h3>Zones de circulation intense</h3> <p>Les couloirs et entrées concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant injection du produit nettoyant. Les passes d'extraction s`

## champigny-sur-marne — src/data/cities/champigny-sur-marne.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `districts`
  - Reason: « Musselburgh » semble être un ajout erroné/non local dans la liste des quartiers ; suppression pour éviter une incohérence factuelle.
  - Expected: `["Centre-Ville / Musselburgh","Cœuilly","Le Plant","Le Bois l'Abbé","Les Mordacs","Le Tremblay","Polangis","Le Maroc","Les Boullereaux","Village Parisien"]`
  - Value: `["Centre-Ville","Cœuilly","Le Plant","Le Bois l'Abbé","Les Mordacs","Le Tremblay","Polangis","Le Maroc","Les Boullereaux","Village Parisien"]`
- **HIGH** — consistency — `faq[2].question`
  - Reason: La FAQ d'une page Champigny-sur-Marne ne doit pas cibler une autre ville ; correction de cohérence locale sans changer l'intention.
  - Expected: `Pouvez-vous intervenir en urgence sur Villiers-sur-Marne ?`
  - Value: `Pouvez-vous intervenir en urgence à Champigny-sur-Marne ?`

## champs-sur-marne — src/data/cities/champs-sur-marne.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Réduit une promesse de délai chiffré potentiellement risquée (engagement de temps) sans changer le sens global.
  - Expected: `<p><strong>Oui, notre organisation est calibrée pour ce secteur dynamique.</strong> Que ce soit pour une fin de chantier ou un nettoyage après sinistre dans une résidence proche du Boulevard Newton ou de la gare Noisy-Ch`
  - Value: `<p><strong>Oui, notre organisation est calibrée pour ce secteur dynamique.</strong> Que ce soit pour une fin de chantier ou un nettoyage après sinistre dans une résidence proche du Boulevard Newton ou de la gare Noisy-Ch`
- **HIGH** — legal — `services[1].faqAdditions[0].answer`
  - Reason: Supprime une promesse chiffrée de durée (6 à 12 mois) difficile à garantir et potentiellement trompeuse.
  - Expected: `<p><strong>La proximité de l'A4 et de la A199 favorise effectivement le dépôt de particules fines.</strong> Cependant, notre nettoyage mécanique extrait la crasse incrustée dans les pores du béton, ce que le balayage seu`
  - Value: `<p><strong>La proximité de l'A4 et de la A199 favorise effectivement le dépôt de particules fines.</strong> Cependant, notre nettoyage mécanique extrait la crasse incrustée dans les pores du béton, ce que le balayage seu`
- **HIGH** — legal — `services[4].whyUsBullets[1]`
  - Reason: Le terme « certifiée » implique une certification non démontrée (risque légal/qualité).
  - Expected: `Élimination certifiée des acariens et bactéries grâce à une méthode d'extraction puissante et hygiénique.`
  - Value: `Élimination des acariens et bactéries grâce à une méthode d'extraction puissante et hygiénique.`
- **HIGH** — legal — `services[2].faqAdditions[3].answer`
  - Reason: Évite des délais chiffrés trop engageants et variables selon conditions réelles.
  - Expected: `<p><strong>Le temps de séchage dépend de l'ensoleillement et du vent.</strong> Sur des surfaces non poreuses comme le carrelage, cela peut prendre 1 à 2 heures. Sur du béton ou du bois, comptez 3 à 4 heures. Attendez que`
  - Value: `<p><strong>Le temps de séchage dépend de l'ensoleillement et du vent.</strong> Sur des surfaces non poreuses comme le carrelage, cela peut prendre quelques heures. Sur du béton ou du bois, comptez davantage. Attendez que`
- **HIGH** — legal — `services[4].faqAdditions[2].answer`
  - Reason: Atténue des superlatifs et une promesse de résultat/santé trop catégorique (risque légal) tout en conservant l’idée.
  - Expected: `<p><strong>Oui, l'injection-extraction est la méthode la plus radicale contre les acariens.</strong> Contrairement à l'aspirateur qui ne retire que la poussière de surface, notre machine lave la fibre et la mousse en pro`
  - Value: `<p><strong>L'injection-extraction est une méthode très efficace contre les acariens.</strong> Contrairement à l'aspirateur qui ne retire que la poussière de surface, notre machine lave la fibre et la mousse en profondeur`
- **MEDIUM** — orthographe — `customDescription`
  - Reason: Correction d’expression : « zones d’humidité » est maladroit ; « zones humides » est la formulation correcte.
  - Expected: `Entre la Cité Descartes et les quartiers résidentiels proches des bords de Marne, Champs-sur-Marne combine flux quotidiens, espaces verts et zones d’humidité. Cette configuration accélère l’encrassement des parties commu`
  - Value: `Entre la Cité Descartes et les quartiers résidentiels proches des bords de Marne, Champs-sur-Marne combine flux quotidiens, espaces verts et zones humides. Cette configuration accélère l’encrassement des parties communes`
- **MEDIUM** — orthographe — `services[1].uniqueIntro`
  - Reason: Correction typographique : « de la A199 » → « de l’A199 ».
  - Expected: `<p>Au sein des grands ensembles résidentiels du Val-Maubuée ou des parcs d'activités de la Cité Descartes, les parkings subissent une sollicitation intense. La proximité de l'autoroute A4 et de la A199 génère un dépôt co`
  - Value: `<p>Au sein des grands ensembles résidentiels du Val-Maubuée ou des parcs d'activités de la Cité Descartes, les parkings subissent une sollicitation intense. La proximité de l'autoroute A4 et de l'A199 génère un dépôt con`

## charenton-le-pont — src/data/cities/charenton-le-pont.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[2].answer`
  - Reason: Suppression d’un délai chiffré potentiellement engageant (promesse) tout en conservant le sens.
  - Expected: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Plateau/Franges du Bois, Centre-Ville, Valmy/secteur Bercy, Conflans, Carrières, Bourg-du-Pont). Le technicien évalue l`
  - Value: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Plateau/Franges du Bois, Centre-Ville, Valmy/secteur Bercy, Conflans, Carrières, Bourg-du-Pont). Le technicien évalue l`
- **MEDIUM** — orthographe — `services[3].uniqueDeepDive`
  - Reason: Correction d’accord : « les surfaces » (pluriel) au lieu de « les surface ».
  - Expected: `<h3>Protection intégrale et confinement en hauteur</h3> <p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de prote`
  - Value: `<h3>Protection intégrale et confinement en hauteur</h3> <p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de prote`

## chelles — src/data/cities/chelles.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Atténue une promesse de délai trop catégorique (risque de non-conformité) sans changer le sens global.
  - Expected: `<p><strong>Nous intervenons sous 24 à 48h pour une demande urgente.</strong> Une équipe dédiée sur le secteur Seine-et-Marne Est garantit cette réactivité à Chelles et dans ses alentours.</p>`
  - Value: `<p><strong>Nous intervenons généralement sous 24 à 48h pour une demande urgente.</strong> Une équipe dédiée sur le secteur Seine-et-Marne Est garantit cette réactivité à Chelles et dans ses alentours.</p>`

## claye-souilly — src/data/cities/claye-souilly.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Ajout minimal pour éviter une promesse de délai absolue potentiellement trompeuse.
  - Expected: `<p><strong>Oui, Claye-Souilly fait partie de notre zone d'intervention habituelle.</strong> Nous programmons les interventions sous 5 à 10 jours ouvrés pour les demandes classiques, et sous 48 à 72 heures en cas d'urgenc`
  - Value: `<p><strong>Oui, Claye-Souilly fait partie de notre zone d'intervention habituelle.</strong> Nous programmons les interventions sous 5 à 10 jours ouvrés pour les demandes classiques, et sous 48 à 72 heures en cas d'urgenc`
- **HIGH** — legal — `faq[2].answer`
  - Reason: Suppression de l'absolu « toujours » pour limiter le risque de promesse commerciale trop catégorique.
  - Expected: `<p><strong>Oui, le déplacement et le devis sont toujours gratuits,</strong> quelle que soit la prestation envisagée. Nous venons sur place pour évaluer les surfaces, repérer les contraintes d'accès et définir le protocol`
  - Value: `<p><strong>Oui, le déplacement et le devis sont gratuits,</strong> quelle que soit la prestation envisagée. Nous venons sur place pour évaluer les surfaces, repérer les contraintes d'accès et définir le protocole adapté.`
- **HIGH** — orthographe — `services[5].uniqueIntro`
  - Reason: Correction grammaticale : « un eau » → « une eau ».
  - Expected: `<p>À Claye-Souilly, les demandes de remise en état se concentrent souvent autour des moments charnières : déménagement, logement resté inoccupé, mise en location ou préparation d’un état des lieux. Entre les pavillons de`
  - Value: `<p>À Claye-Souilly, les demandes de remise en état se concentrent souvent autour des moments charnières : déménagement, logement resté inoccupé, mise en location ou préparation d’un état des lieux. Entre les pavillons de`
- **MEDIUM** — consistency — `services[3].faqAdditions[2].answer`
  - Reason: Évite la répétition « dommages matériels » (déjà implicite) sans changer le sens.
  - Expected: `<p><strong>Oui, les fientes sont acides et attaquent progressivement les matériaux exposés.</strong> Les garde-corps métalliques se corrodent, la peinture s'écaille et les joints se dégradent. Plus le dépôt reste en plac`
  - Value: `<p><strong>Oui, les fientes sont acides et attaquent progressivement les matériaux exposés.</strong> Les garde-corps métalliques se corrodent, la peinture s'écaille et les joints se dégradent. Plus le dépôt reste en plac`

## creteil — src/data/cities/creteil.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Formulation plus correcte en français (« dans un délai de ») sans changer le sens ni la promesse.
  - Expected: `<p>Nous mobilisons nos équipes locales pour des interventions urgentes à Créteil, notamment autour de la Préfecture, du CHU Henri-Mondor ou dans les copropriétés de Mont-Mesly. En cas de <strong>sinistre</strong> (dégât `
  - Value: `<p>Nous mobilisons nos équipes locales pour des interventions urgentes à Créteil, notamment autour de la Préfecture, du CHU Henri-Mondor ou dans les copropriétés de Mont-Mesly. En cas de <strong>sinistre</strong> (dégât `
- **MEDIUM** — orthographe — `services[5].uniqueIntro`
  - Reason: Remplacement des guillemets typographiques anglais par des guillemets français, plus correct en typographie FR.
  - Expected: `<p>À Créteil, la densité et la diversité du bâti imposent une remise en état rigoureuse : appartements des secteurs Front de Lac, L’Échat ou Les Choux, pavillons plus calmes vers le Port/Ormetteau, logements récents côté`
  - Value: `<p>À Créteil, la densité et la diversité du bâti imposent une remise en état rigoureuse : appartements des secteurs Front de Lac, L’Échat ou Les Choux, pavillons plus calmes vers le Port/Ormetteau, logements récents côté`

## emerainville — src/data/cities/emerainville.ts

### GPT patches (setField)

- **LOW** — orthographe — `landmarks[0]`
  - Reason: Correction de l’élision et de la typographie (d’ + apostrophe) devant voyelle.
  - Expected: `Mairie de Émerainville (Place de l'Europe)`
  - Value: `Mairie d'Émerainville (Place de l'Europe)`
- **MEDIUM** — orthographe — `services[0].uniqueIntro`
  - Reason: Accord correct : « une aspiration » (nom féminin), au lieu de « un aspiration ».
  - Expected: `<p>Dans les bureaux et halls de la Zone d'Activités de la Malnoue, les moquettes accumulent rapidement une fine poussière grise qui s'incruste dans les fibres. Cette salissure provient de la proximité de l'A104 et de l'a`
  - Value: `<p>Dans les bureaux et halls de la Zone d'Activités de la Malnoue, les moquettes accumulent rapidement une fine poussière grise qui s'incruste dans les fibres. Cette salissure provient de la proximité de l'A104 et de l'a`

## fontenay-sous-bois — src/data/cities/fontenay-sous-bois.ts

### Local issues

- **HIGH** — consistency — `customDescription`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``Commune contrastée entre le Haut-Fontenay résidentiel de standing bordant le Bois de Vincennes et le Val de Fontenay, pôle économique dense. La végétation du B`

### GPT patches (setField)

- **LOW** — orthographe — `services[6].uniqueDeepDive`
  - Reason: Répétition inutile de « si nécessaire » dans la même expression.
  - Expected: `<h3>Diagnostic et préparation</h3> <p>Nous vérifions l’état réel du bien (logement vide, usage intensif, remise en état du logement après période d’inoccupation), la nature des revêtements (parquet ancien, carrelage, str`
  - Value: `<h3>Diagnostic et préparation</h3> <p>Nous vérifions l’état réel du bien (logement vide, usage intensif, remise en état du logement après période d’inoccupation), la nature des revêtements (parquet ancien, carrelage, str`

## gagny — src/data/cities/gagny.ts

### GPT patches (setField)

- **HIGH** — orthographe — `testimonial.text`
  - Reason: Correction d’un verbe incorrect (« ravoir ») en français courant.
  - Expected: `Notre copropriété près du Parc Carette avait des problèmes récurrents de taches sur les moquettes des couloirs. L'intervention de Klinova a permis de ravoir des zones qu'on pensait irrécupérables. L'équipe a été discrète`
  - Value: `Notre copropriété près du Parc Carette avait des problèmes récurrents de taches sur les moquettes des couloirs. L'intervention de Klinova a permis de revoir des zones qu'on pensait irrécupérables. L'équipe a été discrète`

## gentilly — src/data/cities/gentilly.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[4].heroDescription`
  - Reason: "Élimine" est une promesse absolue potentiellement trompeuse ; correction minimale en "réduit" sans changer le sens global.
  - Expected: `Le nettoyage professionnel à domicile de canapés, tapis et matelas à Gentilly élimine acariens, allergènes et particules urbaines liées au RER B et aux axes A6a/Périphérique, restaurant l'hygiène des intérieurs denses au`
  - Value: `Le nettoyage professionnel à domicile de canapés, tapis et matelas à Gentilly réduit acariens, allergènes et particules urbaines liées au RER B et aux axes A6a/Périphérique, restaurant l'hygiène des intérieurs denses aux`

## gournay-sur-marne — src/data/cities/gournay-sur-marne.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[2].uniqueIntro`
  - Reason: Suppression d’un mot manquant/erroné (« et ») qui casse la phrase.
  - Expected: `<p>À Gournay-sur-Marne, les balcons et s'encrassent progressivement sous l'effet combiné des poussières extérieures, des dépôts naturels et de l'humidité ambiante liée à la proximité de la Marne. Feuilles mortes venues d`
  - Value: `<p>À Gournay-sur-Marne, les balcons s'encrassent progressivement sous l'effet combiné des poussières extérieures, des dépôts naturels et de l'humidité ambiante liée à la proximité de la Marne. Feuilles mortes venues des `

## index — src/data/cities/index.ts

### Local issues

- **HIGH** — consistency — `city`
  - Impossible de parser l'objet city (ts-morph).
  - Reco: Vérifier la structure const city: City = {...}.

## ivry-sur-seine — src/data/cities/ivry-sur-seine.ts

### GPT patches (setField)

- **HIGH** — consistency — `citySpecificChallenges[2]`
  - Reason: Espace manquant après la balise </strong>.
  - Expected: `Immeubles à <strong>digicodes et badges Vigik</strong>quasi systématiques, coordination gardien nécessaire.`
  - Value: `Immeubles à <strong>digicodes et badges Vigik</strong> quasi systématiques, coordination gardien nécessaire.`
- **HIGH** — legal — `faq[1].answer`
  - Reason: Formulation « sous 24 à 48 heures » maladroite/ambiguë ; correction minimale sans changer le sens.
  - Expected: `<p>Notre équipe intervient régulièrement sur le secteur, ce qui nous permet de réagir <strong>sous 24 à 48 heures selon la nature de la demande</strong>. Pour les urgences sanitaires ou les dégradations importantes, nous`
  - Value: `<p>Notre équipe intervient régulièrement sur le secteur, ce qui nous permet de réagir <strong>dans un délai de 24 à 48 heures selon la nature de la demande</strong>. Pour les urgences sanitaires ou les dégradations impor`

## joinville-le-pont — src/data/cities/joinville-le-pont.ts

### Local issues

- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p>Klinova intervient à Joinville-le-Pont auprès des copropriétés, des particuliers et des gestionnaires immobiliers pour l\'entretien des surfaces et la maint`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p>Nos équipes adaptent leurs méthodes aux différentes typologies de bâti, des immeubles collectifs de Vautier-Leclerc aux maisons des bords de Marne, en passa`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<ul>\n'`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Domaines d'`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Domaines d'`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `' <li><strong>Domaines d\'intervention à Joinville-le-Pont :</strong></li>\n'`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Entretien d`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Entretien d`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `' <li><strong>Entretien des surfaces textiles en copropriété</strong> : nettoyage des moquettes dans les halls, escaliers et paliers des immeubles du quartier `
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Décrassage `
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Décrassage `
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `' <li><strong>Décrassage des parkings souterrains</strong> : traitement des sols béton et résine, élimination des taches d\'hydrocarbures et remise en lisibili`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Remise en é`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Remise en é`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `' <li><strong>Remise en état des balcons et terrasses</strong> : nettoyage professionnel pour les particuliers de Polangis, des bords de Marne et de l\'Île Fan`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Rafraîchiss`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Rafraîchiss`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `' <li><strong>Rafraîchissement des textiles domestiques</strong> : intervention à domicile pour canapés, tapis et matelas dans les quartiers résidentiels, avec`
- **HIGH** — consistency — `hubIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'</ul>'`
- **HIGH** — consistency — `answer`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p>Les abords de la gare RER A de Joinville-le-Pont et l\'axe de la Nationale 4 (Avenue des Canadiens) présentent des <strong>contraintes de stationnement</str`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Au bout de quelques mois, les moquettes perdent leur éclat d\'origine. Les zones de passage deviennent ternes, les taches résistent à l\'aspira`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Un nettoyage professionnel par injection-extraction élimine les salissures incrustées, ravive les couleurs et redonne aux halls et escaliers un`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Les tentatives de nettoyage avec des moyens domestiques déplacent temporairement la crasse sans traiter l\'encrassement en profondeur. Les tach`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Un décrassage structuré par autolaveuse et haute pression contrôlée élimine les dépôts incrustés, ravive les revêtements et rétablit un environ`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Les tentatives de nettoyage au seau et à la brosse donnent un résultat provisoire, mais les joints restent gris, les taches tenaces résistent, `
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Une intervention professionnelle élimine les salissures incrustées, ravive les supports et rend l\'espace de nouveau utilisable.</p>'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Si rien n\'est fait, les conséquences s\'aggravent. Les fientes contiennent des agents pathogènes (bactéries, champignons, parasites) qui se di`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Un traitement professionnel sécurisé avec équipements de protection individuelle et désinfection virucide élimine les fientes, neutralise les a`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Les aspirations régulières éliminent les saletés visibles, mais ne suffisent pas à extraire les allergènes et les résidus incrustés en profonde`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'\n'`
- **HIGH** — consistency — `uniqueIntro`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'<p class="mt-4">Un nettoyage professionnel par injection-extraction élimine les salissures en profondeur, neutralise les odeurs et améliore significativement l`

### GPT patches (setField)

- **HIGH** — factual_suspect — `customDescription`
  - Reason: Suppression d’un chiffre d’habitants potentiellement inexact (risque factuel) sans changer le sens global.
  - Expected: `Commune du Val-de-Marne de 20 000 habitants desservie par le RER A, Joinville-le-Pont se structure autour des rives de la Marne et du canal. Les quartiers résidentiels comme Polangis et l'habitat collectif du secteur Par`
  - Value: `Commune du Val-de-Marne desservie par le RER A, Joinville-le-Pont se structure autour des rives de la Marne et du canal. Les quartiers résidentiels comme Polangis et l'habitat collectif du secteur Paris génèrent des beso`
- **MEDIUM** — orthographe — `services[6].specificChallenges[3]`
  - Reason: Correction d’une faute d’orthographe (menuiseries).
  - Expected: `Quartiers pavillonnaires exigeants (Polangis/Palissy) : discrétion et méthodes non agressives sur parquet/menusieries.`
  - Value: `Quartiers pavillonnaires exigeants (Polangis/Palissy) : discrétion et méthodes non agressives sur parquet/menuiseries.`

## lagny-sur-marne — src/data/cities/lagny-sur-marne.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[2].uniqueIntro`
  - Reason: Correction d'une faute de syntaxe (« les balcons et des appartements »).
  - Expected: `<p>À Lagny-sur-Marne, les balcons et des appartements subissent les dépôts de poussière fine liée à la circulation sur la Francilienne, les feuilles et dépôts verts des arbres des quartiers résidentiels, ainsi que les tr`
  - Value: `<p>À Lagny-sur-Marne, les balcons des appartements subissent les dépôts de poussière fine liée à la circulation sur la Francilienne, les feuilles et dépôts verts des arbres des quartiers résidentiels, ainsi que les trace`
- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Suppression d'un chiffre potentiellement inexact (population) pour éviter un risque factuel.
  - Expected: `<p><strong>Lagny-sur-Marne</strong>, commune historique de Seine-et-Marne d’environ 22 000 habitants, s’organise autour de son centre ancien, de quartiers résidentiels pavillonnaires et de secteurs plus récents. Bordée p`
  - Value: `<p><strong>Lagny-sur-Marne</strong>, commune historique de Seine-et-Marne, s’organise autour de son centre ancien, de quartiers résidentiels pavillonnaires et de secteurs plus récents. Bordée par la <strong>Marne</strong`

## le-perreux-sur-marne — src/data/cities/le-perreux-sur-marne.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[5].heroDescription`
  - Reason: Le terme « durable » peut être interprété comme une promesse de résultat dans le temps ; correction minimale en conservant le sens.
  - Expected: `Rénovation minutieuse de votre terrasse selon le type de revêtement, retrait des mousses et dépôts organiques, et application d'une protection durable adaptée à l'environnement fluvial.`
  - Value: `Rénovation minutieuse de votre terrasse selon le type de revêtement, retrait des mousses et dépôts organiques, et application d'une protection adaptée à l'environnement fluvial.`
- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Correction typographique sûre : apostrophe courbe dans « l’Est » (cohérence avec le reste du contenu).
  - Expected: `<p>Le Perreux-sur-Marne, surnommée la « <strong>Perle de l'Est parisien</strong> », déploie son tissu pavillonnaire le long d'une boucle de la Marne. Depuis les premières opérations de villégiature lancées vers 1880, la `
  - Value: `<p>Le Perreux-sur-Marne, surnommée la « <strong>Perle de l’Est parisien</strong> », déploie son tissu pavillonnaire le long d'une boucle de la Marne. Depuis les premières opérations de villégiature lancées vers 1880, la `
- **MEDIUM** — consistency — `districts`
  - Reason: Normalisation sûre : majuscules et suppression d’espaces superflus pour un libellé de quartier (cohérence avec « Pont de Bry » ailleurs).
  - Expected: `Centre-Ville,Les Joncs-Marins,La Prairie des Presles,La Maltournée, Secteur Val de Fontenay,pont de bry ,Les Parclairs`
  - Value: `Centre-Ville,Les Joncs-Marins,La Prairie des Presles,La Maltournée,Secteur Val de Fontenay,Pont de Bry,Les Parclairs`

## le-plessis-trevise — src/data/cities/le-plessis-trevise.ts

### GPT patches (setField)

- **HIGH** — seo — `services[5].uniqueIntro`
  - Reason: Suppression d’un chiffre d’habitants non sourcé (risque d’inexactitude/SEO local) sans changer le sens du texte.
  - Expected: `<p><strong>Le Plessis-Trévise</strong>, commune résidentielle du Val-de-Marne d’environ 21 000 habitants, se caractérise par un habitat majoritairement pavillonnaire et la proximité immédiate du <strong>bois Saint-Martin`
  - Value: `<p><strong>Le Plessis-Trévise</strong>, commune résidentielle du Val-de-Marne, se caractérise par un habitat majoritairement pavillonnaire et la proximité immédiate du <strong>bois Saint-Martin</strong>. Cet environnemen`
- **MEDIUM** — consistency — `services[1].faqAdditions[3].answer`
  - Reason: Suppression d’une répétition mot à mot pour améliorer la lisibilité sans modifier le contenu.
  - Expected: `<p>Les eaux sont dirigées vers les regards et rigoles existantes. Nous vérifions avant intervention que les évacuations ne sont pas obstruées. En cas de débit important, nous utilisons des bacs de rétention temporaires p`
  - Value: `<p>Les eaux sont dirigées vers les regards et rigoles existantes. Nous vérifions avant intervention que les évacuations ne sont pas obstruées. En cas de débit important, nous utilisons des bacs de rétention temporaires p`

## le-raincy — src/data/cities/le-raincy.ts

### GPT patches (setField)

- **HIGH** — legal — `hubIntro`
  - Reason: Suppression d’un délai chiffré (« sous 48h ») potentiellement engageant/trompeur si non garanti.
  - Expected: ` <p>Le Raincy se distingue par un parc immobilier résidentiel exigeant, où la qualité perçue des parties communes et des extérieurs compte au quotidien. KLINOVA accompagne syndics, conseils syndicaux, gestionnaires et oc`
  - Value: ` <p>Le Raincy se distingue par un parc immobilier résidentiel exigeant, où la qualité perçue des parties communes et des extérieurs compte au quotidien. KLINOVA accompagne syndics, conseils syndicaux, gestionnaires et oc`

## livry-gargan — src/data/cities/livry-gargan.ts

### GPT patches (setField)

- **HIGH** — seo — `faq[1].answer`
  - Reason: Suppression d’un délai chiffré (« sous 48 heures ») pouvant être une promesse non maîtrisée et risquée en conversion/qualité.
  - Expected: `<p><strong>Non, le diagnostic est gratuit.</strong> Que vous soyez situés quartier Danton ou près de la station Gargan (T4), nous nous déplaçons systématiquement pour évaluer les surfaces et les accès. Cela nous permet d`
  - Value: `<p><strong>Non, le diagnostic est gratuit.</strong> Que vous soyez situés quartier Danton ou près de la station Gargan (T4), nous nous déplaçons systématiquement pour évaluer les surfaces et les accès. Cela nous permet d`
- **MEDIUM** — consistency — `services[6].uniqueIntro`
  - Reason: Harmonisation typographique avec le reste de la page (Avenue Aristide-Briand) pour cohérence SEO/qualité.
  - Expected: `<p>À Livry-Gargan, on change vite de configuration en quelques rues : maisons avec jardin côté <strong>Jacob</strong> ou <strong>Sully-Fragonard</strong>, collectifs autour de <strong>Danton</strong>, et zones plus dense`
  - Value: `<p>À Livry-Gargan, on change vite de configuration en quelques rues : maisons avec jardin côté <strong>Jacob</strong> ou <strong>Sully-Fragonard</strong>, collectifs autour de <strong>Danton</strong>, et zones plus dense`

## maisons-alfort — src/data/cities/maison-alfort.ts

### GPT patches (setField)

- **HIGH** — consistency — `services[5].uniqueDeepDive`
  - Reason: Correction d’une faute de conjugaison (« adaptions » → « adaptons »).
  - Expected: `<h3>Secteur Métro 8 / Avenue de la République — logistique et fin de bail</h3> <p>Autour des stations et de l’axe central, le point dur est rarement “le nettoyage” mais l’organisation : stationnement, accès, créneaux. No`
  - Value: `<h3>Secteur Métro 8 / Avenue de la République — logistique et fin de bail</h3> <p>Autour des stations et de l’axe central, le point dur est rarement “le nettoyage” mais l’organisation : stationnement, accès, créneaux. No`

## meaux — src/data/cities/meaux.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `customDescription`
  - Reason: Suppression d’un chiffre d’habitants potentiellement daté/susceptible d’être inexact, sans changer le sens.
  - Expected: `Commune la plus peuplée de Seine-et-Marne (56 659 habitants), Meaux combine un centre historique médiéval protégé aux rues étroites, des grands ensembles en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) et des`
  - Value: `Commune la plus peuplée de Seine-et-Marne, Meaux combine un centre historique médiéval protégé aux rues étroites, des grands ensembles en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) et des zones pavillonnair`
- **HIGH** — legal — `faq[1].answer`
  - Reason: Formulation plus neutre et moins ambiguë que « restent gratuits » (risque d’interprétation), sans modifier le fond.
  - Expected: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Centre-Ville/Cathédrale, Marché, Beauval, La Pierre Collinet, Dunant, Saint-Faron, La Grosse Pierre, Luxembourg, Cornic`
  - Value: `<p><strong>Oui, le déplacement et le diagnostic sont gratuits</strong> quel que soit le quartier (Centre-Ville/Cathédrale, Marché, Beauval, La Pierre Collinet, Dunant, Saint-Faron, La Grosse Pierre, Luxembourg, Corniche `
- **HIGH** — factual_suspect — `services[5].whyUsBullets[0]`
  - Reason: Suppression de micro-localisations potentiellement inexactes/non vérifiables, tout en conservant l’idée générale.
  - Expected: `Intervention sur les secteurs pavillonnaires de Meaux : République-Gambetta, faubourg Saint-Nicolas, proximité du parc du Pâtis.`
  - Value: `Intervention sur les secteurs pavillonnaires de Meaux : proximité du parc du Pâtis.`
- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Retrait d’un chiffre (150 hectares) et de secteurs nommés potentiellement discutables, pour éviter des faits locaux non sûrs.
  - Expected: `<p>À Meaux, les terrasses des maisons individuelles font face à des conditions particulières. La proximité de la Marne et du <strong>parc du Pâtis</strong>, vaste espace naturel de 150 hectares, génère un taux d'humidité`
  - Value: `<p>À Meaux, les terrasses des maisons individuelles font face à des conditions particulières. La proximité de la Marne et du <strong>parc du Pâtis</strong> génère un taux d'humidité favorable au développement des mousses`
- **HIGH** — factual_suspect — `services[5].specificChallenges[0]`
  - Reason: Suppression d’une micro-localisation potentiellement inexacte/non vérifiable, sans changer le sens.
  - Expected: `Pierre naturelle poreuse des villas anciennes de République-Gambetta : risque de taches si produit inadapté.`
  - Value: `Pierre naturelle poreuse : risque de taches si produit inadapté.`
- **HIGH** — factual_suspect — `services[6].uniqueIntro`
  - Reason: Cohérence typographique : « ligne P » en minuscule (usage courant) sans changement de sens.
  - Expected: `<p>À Meaux, un nettoyage d’appartement ou de maison ne se résume pas à “faire propre” : la ville mélange un <strong>centre ancien</strong> avec accès parfois contraints (rues étroites, stationnement réglementé) et des se`
  - Value: `<p>À Meaux, un nettoyage d’appartement ou de maison ne se résume pas à “faire propre” : la ville mélange un <strong>centre ancien</strong> avec accès parfois contraints (rues étroites, stationnement réglementé) et des se`

## montfermeil — src/data/cities/montfermeil.ts

### GPT patches (setField)

- **HIGH** — consistency — `services[4].uniqueIntro`
  - Reason: Répétition manifeste « literies et literies » à corriger sans changer le sens.
  - Expected: `<p>Dans les zones pavillonnaires comme Franceville ou dans les appartements du Plateau à Montfermeil, les textiles d'ameublement sont au cœur de la vie familiale. Canapés, tapis et matelas subissent quotidiennement les s`
  - Value: `<p>Dans les zones pavillonnaires comme Franceville ou dans les appartements du Plateau à Montfermeil, les textiles d'ameublement sont au cœur de la vie familiale. Canapés, tapis et matelas subissent quotidiennement les s`
- **HIGH** — legal — `services[3].heroDescription`
  - Reason: Évite une promesse absolue (« élimine totalement », « immédiatement ») potentiellement trompeuse, correction minimale.
  - Expected: `Retrouvez un extérieur sain et sans risques à Montfermeil grâce à une désinfection professionnelle qui élimine totalement fientes et agents pathogènes, rendant votre balcon immédiatement réutilisable en toute sécurité.`
  - Value: `Retrouvez un extérieur sain et sans risques à Montfermeil grâce à une désinfection professionnelle qui élimine les fientes et réduit les agents pathogènes, rendant votre balcon réutilisable en toute sécurité.`

## montreuil — src/data/cities/montreuil.ts

### GPT patches (setField)

- **HIGH** — consistency — `services[0].uniqueIntro`
  - Reason: Accord : « copropriétés montreuilloises » (pluriel) au lieu de « montreuilloise ».
  - Expected: `<p>Les copropriétés montreuilloise subissent un encrassement rapide de leurs moquettes, phénomène que beaucoup de résidents finissent par considérer comme normal. La pollution du Périphérique dépose une poussière noire g`
  - Value: `<p>Les copropriétés montreuilloises subissent un encrassement rapide de leurs moquettes, phénomène que beaucoup de résidents finissent par considérer comme normal. La pollution du Périphérique dépose une poussière noire `
- **HIGH** — consistency — `services[0].uniqueDeepDive`
  - Reason: Accord : « copropriétés montreuilloises » (pluriel) au lieu de « montreuilloise ».
  - Expected: `<h3>Diagnostic adapté à l'environnement urbain dense</h3> <p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des grands ensembles ou bouclées plus délicates des immeubles faubouriens), identifie`
  - Value: `<h3>Diagnostic adapté à l'environnement urbain dense</h3> <p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des grands ensembles ou bouclées plus délicates des immeubles faubouriens), identifie`
- **HIGH** — consistency — `services[0].faqAdditions[1].answer`
  - Reason: Accord : « impasses montreuilloises » (pluriel) au lieu de « montreuilloise ».
  - Expected: `<p>Absolument. Nous utilisons du matériel portable spécialement conçu pour ces configurations : machines d'injection-extraction transportables, tuyaux de 50 mètres pour atteindre les étages ou les cours intérieures. Nos `
  - Value: `<p>Absolument. Nous utilisons du matériel portable spécialement conçu pour ces configurations : machines d'injection-extraction transportables, tuyaux de 50 mètres pour atteindre les étages ou les cours intérieures. Nos `
- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Suppression d'affirmations chiffrées et de classement (« cinquième ville… », « plus de 110 000 habitants ») à risque d'inexactitude et non nécessaires au propos.
  - Expected: `<p><strong>Montreuil</strong>, cinquième ville d'Île-de-France avec plus de 110 000 habitants, déploie son tissu urbain sur les coteaux qui dominent Paris. Historiquement ouvrière et horticole — les célèbres <strong>murs`
  - Value: `<p><strong>Montreuil</strong> déploie son tissu urbain sur les coteaux qui dominent Paris. Historiquement ouvrière et horticole — les célèbres <strong>murs à pêches</strong> témoignent encore de ce passé —, la commune co`

## montrouge — src/data/cities/montrouge.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[4].uniqueDeepDive`
  - Reason: Correction d’une faute d’orthographe en français (« treatment » → « traitement »).
  - Expected: `<h3>Diagnostic et pré-traitement</h3> <p>Avant toute intervention, le textile est examiné : coton, velours, synthétique ou laine réagissent différemment. Un test discret sur une zone cachée valide la compatibilité du tre`
  - Value: `<h3>Diagnostic et pré-traitement</h3> <p>Avant toute intervention, le textile est examiné : coton, velours, synthétique ou laine réagissent différemment. Un test discret sur une zone cachée valide la compatibilité du tra`

## neuilly-plaisance — src/data/cities/neuilly-plaisance.ts

### GPT patches (setField)

- **LOW** — orthographe — `landmarks[6]`
  - Reason: Suppression du point final pour homogénéiser la liste (les autres éléments n’en ont pas).
  - Expected: `Château d'Eau du Plateau d'Avron.`
  - Value: `Château d'Eau du Plateau d'Avron`
- **HIGH** — seo — `services[5].whyUsBullets[0]`
  - Reason: Suppression d’un toponyme potentiellement inexact/non présent ailleurs dans le fichier, pour éviter un risque factuel local.
  - Expected: `Intervention dans tous les secteurs de Neuilly-Plaisance : bords de Marne, Centre, Plateau d’Avron, Maltournée, quartiers pavillonnaires et résidentiels.`
  - Value: `Intervention dans tous les secteurs de Neuilly-Plaisance : bords de Marne, Centre, Plateau d’Avron, quartiers pavillonnaires et résidentiels.`
- **MEDIUM** — consistency — `services[6].uniqueIntro`
  - Reason: Harmonisation avec le reste du fichier (N34) et correction de l’accent dans « Côteaux » (cohérent avec « Parc des Côteaux d’Avron » ailleurs).
  - Expected: `<p>Neuilly-Plaisance est une commune résidentielle qui se vit en deux niveaux : d’un côté le <strong>secteur Gare RER A</strong> et le centre-ville, plus denses et plus “rythmés”, de l’autre les hauteurs du <strong>Plate`
  - Value: `<p>Neuilly-Plaisance est une commune résidentielle qui se vit en deux niveaux : d’un côté le <strong>secteur Gare RER A</strong> et le centre-ville, plus denses et plus “rythmés”, de l’autre les hauteurs du <strong>Plate`

## neuilly-sur-marne — src/data/cities/neuilly-sur-marne.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Évite une promesse de délai formulée comme une garantie, potentiellement risquée si non tenue.
  - Expected: `<p><strong>Nous garantissons un déplacement sous 48h pour un devis gratuit,</strong> et une intervention en urgence sous 24h pour les sinistres (inondations, salissures majeures). Nos techniciens sont basés en Île-de-Fra`
  - Value: `<p><strong>Nous proposons un déplacement sous 48h pour un devis gratuit,</strong> et une intervention en urgence sous 24h pour les sinistres (inondations, salissures majeures). Nos techniciens sont basés en Île-de-France`

## nogent-sur-marne — src/data/cities/nogent-sur-marne.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[6].faqAdditions[1].answer`
  - Reason: Correction d’une faute d’orthographe (« menusieries » → « menuiseries »).
  - Expected: `<p>Oui. Après travaux, la difficulté est la poussière fine (ponçage, plâtre). On procède par étapes : dépoussiérage minutieux (surfaces/menusieries), puis sols, puis finitions. Sur parquet massif, on adapte produits et d`
  - Value: `<p>Oui. Après travaux, la difficulté est la poussière fine (ponçage, plâtre). On procède par étapes : dépoussiérage minutieux (surfaces/menuiseries), puis sols, puis finitions. Sur parquet massif, on adapte produits et d`

## noisy-le-grand — src/data/cities/noisy-le-grand.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[7].faqAdditions[1].answer`
  - Reason: Correction d’une faute d’orthographe (« menusieries » → « menuiseries »).
  - Expected: `<p>Oui. Après travaux, la difficulté principale est la poussière fine (plâtre, coupe, ponçage) qui se redépose. On procède par étapes : dépoussiérage minutieux (surfaces/menusieries), puis sols, puis contrôle final des z`
  - Value: `<p>Oui. Après travaux, la difficulté principale est la poussière fine (plâtre, coupe, ponçage) qui se redépose. On procède par étapes : dépoussiérage minutieux (surfaces/menuiseries), puis sols, puis contrôle final des z`

## pantin — src/data/cities/pantin.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[3].uniqueDeepDive`
  - Reason: Correction d’une faute d’orthographe/encodage ("humidifiėes" → "humidifiées").
  - Expected: `<h3>Surfaces assainies et désinfectées</h3> <p>L'objectif est de rendre le balcon réutilisable sans risque. Cela passe par l'élimination complète des fientes, la neutralisation des agents pathogènes présents dans les déj`
  - Value: `<h3>Surfaces assainies et désinfectées</h3> <p>L'objectif est de rendre le balcon réutilisable sans risque. Cela passe par l'élimination complète des fientes, la neutralisation des agents pathogènes présents dans les déj`
- **MEDIUM** — orthographe — `landmarks[4]`
  - Reason: Sigle mal typographié (espacement incorrect) : forme usuelle "CND".
  - Expected: `Centre National de la Danse (CN D)`
  - Value: `Centre National de la Danse (CND)`

## pontault-combault — src/data/cities/pontault-combault.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[1].answer`
  - Reason: Supprime une promesse de délai précis (« sous 48h ») potentiellement trompeuse/engageante.
  - Expected: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Bouquet, Ermitage, Centre-Ville, Gare, Ocil, Village, Berchères, Grenouillère, Pince-Vents). Le technicien évalue les s`
  - Value: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Bouquet, Ermitage, Centre-Ville, Gare, Ocil, Village, Berchères, Grenouillère, Pince-Vents). Le technicien évalue les s`
- **HIGH** — legal — `services[0].faqAdditions[1].answer`
  - Reason: Retire un chiffre non sourcé (« plus de 50% ») qui peut être inexact et risqué.
  - Expected: `<p>Absolument. Bien que Pontault-Combault soit majoritairement pavillonnaire (plus de 50% de maisons individuelles), de nombreux pavillons des quartiers du Bouquet et de l'Ermitage disposent de halls d'entrée avec moquet`
  - Value: `<p>Absolument. Bien que Pontault-Combault soit majoritairement pavillonnaire, de nombreux pavillons des quartiers du Bouquet et de l'Ermitage disposent de halls d'entrée avec moquette ou tapis. Nous intervenons également`

## rosny-sous-bois — src/data/cities/rosny-sous-bois.ts

### Local issues

- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Partenariat`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Partenariat`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Maintenance`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Maintenance`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Protocole &`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Protocole &`
- **MEDIUM** — style — `hubIntro`
  - Double espace détecté.
  - Remplacement: ` <li><strong>Reporting u`
  - Reco: Nettoyage typographique (rendu plus premium).
  - Extrait: ` <li><strong>Reporting u`

### GPT patches (setField)

- **HIGH** — consistency — `services[5].whyUsBullets`
  - Reason: Suppression de quartiers non présents ailleurs dans le fichier (cohérence interne, évite l’ajout de faits locaux non corroborés).
  - Expected: `[ "Intervention dans tous les quartiers de Rosny-sous-Bois : Centre-ville, Plateau d’Avron, La Boissière, Justice, Changis, secteurs pavillonnaires et résidentiels.", "Expertise des terrasses urbaines et pavillonnaires :`
  - Value: `[ "Intervention dans tous les quartiers de Rosny-sous-Bois : Centre-ville, Plateau d’Avron, La Boissière, secteurs pavillonnaires et résidentiels.", "Expertise des terrasses urbaines et pavillonnaires : sols exposés à la`
- **MEDIUM** — orthographe — `landmarks[6]`
  - Reason: Évite la répétition/ambiguïté avec l’entrée déjà présente et harmonise l’intitulé.
  - Expected: `Domus`
  - Value: `Centre commercial Domus`
- **LOW** — orthographe — `landmarks[9]`
  - Reason: Ponctuation finale inutile dans une liste.
  - Expected: `Golf de Rosny-sous-Bois.`
  - Value: `Golf de Rosny-sous-Bois`

## saint-mande — src/data/cities/saint-mande.ts

### GPT patches (setField)

- **MEDIUM** — orthographe — `services[5].uniqueDeepDive`
  - Reason: Correction d’un nom de quartier : cohérence avec la liste des districts (« Quartier des Tourelles »).
  - Expected: `<h3>Mairie / Gallieni — densité, stationnement et finitions de centre-ville</h3> <p>Autour de la Place Charles Digeon et de l’axe Gallieni, la densité se traduit par une logistique serrée : peu de place, des accès sécuri`
  - Value: `<h3>Mairie / Gallieni — densité, stationnement et finitions de centre-ville</h3> <p>Autour de la Place Charles Digeon et de l’axe Gallieni, la densité se traduit par une logistique serrée : peu de place, des accès sécuri`

## saint-maur-des-fosses — src/data/cities/saint-maur-des-fosses.ts

### Local issues

- **HIGH** — consistency — `specificChallenges`
  - String avec guillemets simples détectée (préférence: guillemets doubles).
  - Remplacement: `Convertir en guillemets doubles.`
  - Reco: Uniformiser pour faciliter les diffs.
  - Extrait: `'Taches organiques : Urine de chat, transpiration, nourriture... Nous utilisons des enzymes pour \'manger\' l\'odeur à la source.'`

### GPT patches (setField)

- **HIGH** — consistency — `services[4].specificChallenges[1]`
  - Reason: Corrige une incohérence de format (guillemet/apostrophes et échappements) qui introduit un artefact de code dans un champ texte.
  - Expected: `'Taches organiques : Urine de chat, transpiration, nourriture... Nous utilisons des enzymes pour \'manger\' l\'odeur à la source.',`
  - Value: `Taches organiques : Urine de chat, transpiration, nourriture... Nous utilisons des enzymes pour 'manger' l'odeur à la source.`

## serris — src/data/cities/serris.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Suppression de dates et chiffres locaux potentiellement inexacts/non sourcés (risque factuel) sans changer le sens global.
  - Expected: `<p><strong>Serris</strong>, au cœur du <strong>Val d'Europe</strong> en Seine-et-Marne, incarne le développement réussi d'une ville nouvelle intégrée à <strong>Marne-la-Vallée</strong>. Depuis l'ouverture du centre comme`
  - Value: `<p><strong>Serris</strong>, au cœur du <strong>Val d'Europe</strong> en Seine-et-Marne, incarne le développement d'une ville nouvelle intégrée à <strong>Marne-la-Vallée</strong>.</p> <p class="mt-4">Labellisée <strong>Vi`

## torcy — src/data/cities/torcy.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[0].answer`
  - Reason: Réduit une promesse de délai chiffrée potentiellement risquée/trompeuse tout en conservant le sens.
  - Expected: `<strong>Notre équipe intervient sous 48 heures en semaine</strong> sur Torcy et environs. Pour les urgences, sinistre ou fin de chantier, nous mobilisons nos techniciens dans la journée. La proximité de notre base logist`
  - Value: `<strong>Notre équipe intervient rapidement en semaine</strong> sur Torcy et environs. Pour les urgences, sinistre ou fin de chantier, nous mobilisons nos techniciens dans la journée. La proximité de notre base logistique`
- **HIGH** — legal — `faq[2].answer`
  - Reason: Évite l'absolu « Tous » (promesse trop générale) sans changer le message.
  - Expected: `<strong>Tous nos déplacements pour établir un devis sont gratuits</strong> sur Torcy et la communauté d'agglomération Paris-Vallée de la Marne. Notre technicien évalue précisément les surfaces et contraintes pour un chif`
  - Value: `<strong>Nos déplacements pour établir un devis sont gratuits</strong> sur Torcy et la communauté d'agglomération Paris-Vallée de la Marne. Notre technicien évalue précisément les surfaces et contraintes pour un chiffrage`
- **MEDIUM** — orthographe — `services[6].faqAdditions[1].answer`
  - Reason: Correction d’une faute d’orthographe (« menusieries » → « menuiseries »).
  - Expected: `<p>Oui. Après travaux, on procède en plusieurs passes pour éviter que la poussière revienne : surfaces/menusieries, puis sols, puis contrôle des rebords et angles. L’objectif est un rendu net et uniforme, sans voile sur `
  - Value: `<p>Oui. Après travaux, on procède en plusieurs passes pour éviter que la poussière revienne : surfaces/menuiseries, puis sols, puis contrôle des rebords et angles. L’objectif est un rendu net et uniforme, sans voile sur `

## vaires-sur-marne — src/data/cities/vaires-sur-marne.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[5].uniqueIntro`
  - Reason: Suppression de chiffres/affirmations factuelles spécifiques (population, superficie) pour réduire le risque d’inexactitude sans changer le sens global.
  - Expected: `<p><strong>Vaires-sur-Marne</strong>, commune de Seine-et-Marne d'environ 13 000 habitants, s'étire le long de la Marne et du canal de Chelles. Révélée au monde entier lors des <strong>Jeux Olympiques de Paris 2024</stro`
  - Value: `<p><strong>Vaires-sur-Marne</strong>, commune de Seine-et-Marne, s'étire le long de la Marne et du canal de Chelles. Révélée au monde entier lors des <strong>Jeux Olympiques de Paris 2024</strong> — le stade nautique oly`
- **HIGH** — factual_suspect — `services[6].uniqueIntro`
  - Reason: Retrait de mentions de quartiers/secteurs spécifiques non présents ailleurs et potentiellement discutables, sans modifier le message.
  - Expected: `<p>À Vaires-sur-Marne, les demandes de nettoyage sont souvent liées à des situations très concrètes : état des lieux, grand ménage avant remise en location, nettoyage après travaux légers, ou remise en ordre après une pé`
  - Value: `<p>À Vaires-sur-Marne, les demandes de nettoyage sont souvent liées à des situations très concrètes : état des lieux, grand ménage avant remise en location, nettoyage après travaux légers, ou remise en ordre après une pé`
- **MEDIUM** — consistency — `services[1].whyUsBullets[1]`
  - Reason: Correction grammaticale (ajout de la préposition) pour une phrase correcte.
  - Expected: `Autolaveuses professionnelles et dégraissants adaptés aux revêtements de sol et taches tenaces.`
  - Value: `Autolaveuses professionnelles et dégraissants adaptés aux revêtements de sol et aux taches tenaces.`
- **MEDIUM** — orthographe — `faq[0].answer`
  - Reason: Ajout d’une virgule pour améliorer la lisibilité sans changer le sens.
  - Expected: `<strong>Oui.</strong> Nous sommes organisés pour répondre sous 24 à 48 h en cas de sinistre ou de fin de chantier. Nos équipes peuvent mobiliser du matériel professionnel en urgence à Vaires-sur-Marne selon les disponibi`
  - Value: `<strong>Oui.</strong> Nous sommes organisés pour répondre sous 24 à 48 h en cas de sinistre ou de fin de chantier. Nos équipes peuvent mobiliser du matériel professionnel en urgence à Vaires-sur-Marne, selon les disponib`

## villeparisis — src/data/cities/villeparisis.ts

### GPT patches (setField)

- **HIGH** — consistency — `services[5].whyUsBullets[0]`
  - Reason: Correction d’une coquille sur le nom du quartier (cohérence avec les autres occurrences).
  - Expected: `Intervention sur l'ensemble des quartiers pavillonnaires de Villeparisis : Vieux-Pays, Boiparisis, secteur du Marché et lotissements résidentiels.`
  - Value: `Intervention sur l'ensemble des quartiers pavillonnaires de Villeparisis : Vieux-Pays, Boisparisis, secteur du Marché et lotissements résidentiels.`
- **HIGH** — consistency — `services[5].uniqueIntro`
  - Reason: Correction d’une coquille répétée sur le nom du quartier (cohérence interne).
  - Expected: `<p>À Villeparisis, commune traversée par le <strong>canal de l'Ourcq</strong> et située à proximité du <strong>parc forestier de la Poudrerie</strong>, les terrasses des maisons individuelles subissent des conditions pro`
  - Value: `<p>À Villeparisis, commune traversée par le <strong>canal de l'Ourcq</strong> et située à proximité du <strong>parc forestier de la Poudrerie</strong>, les terrasses des maisons individuelles subissent des conditions pro`

## villepinte — src/data/cities/villepinte.ts

### GPT patches (setField)

- **LOW** — consistency — `nearbyCities`
  - Reason: Harmonisation de l’indentation pour cohérence avec le reste du fichier (aucun changement de contenu).
  - Expected: `[ "livry-gargan", "villeparisis", "le-raincy", "montfermeil", "gagny", "bobigny", "chelles", "rosny-sous-bois", "neuilly-sur-marne", "neuilly-plaisance" ]`
  - Value: `[ "livry-gargan", "villeparisis", "le-raincy", "montfermeil", "gagny", "bobigny", "chelles", "rosny-sous-bois", "neuilly-sur-marne", "neuilly-plaisance" ]`

## villiers-sur-marne — src/data/cities/villiers-sur-marne.ts

### GPT patches (setField)

- **LOW** — consistency — `nearbyCities`
  - Reason: Harmonisation de l'indentation (cohérence de formatage) sans changer le contenu.
  - Expected: `[ "noisy-le-grand", "champigny-sur-marne", "le-plessis-trevise", "le-perreux-sur-marne", "champs-sur-marne", "neuilly-sur-marne", "gournay-sur-marne", "emerainville", "neuilly-plaisance", "nogent-sur-marne" ]`
  - Value: `[ "noisy-le-grand", "champigny-sur-marne", "le-plessis-trevise", "le-perreux-sur-marne", "champs-sur-marne", "neuilly-sur-marne", "gournay-sur-marne", "emerainville", "neuilly-plaisance", "nogent-sur-marne" ]`
- **LOW** — consistency — `landmarks`
  - Reason: Suppression d'une entrée vide (ligne blanche) dans un tableau de chaînes, qui peut générer un item vide.
  - Expected: `[ "Mairie de Villiers-sur-Marne", "Gare de Villiers-sur-Marne - Le Plessis-Trévise", "ZAC des Boutareines", "Parc du Bois-Saint-Denis", "Espace Jean-Moulin", ]`
  - Value: `[ "Mairie de Villiers-sur-Marne", "Gare de Villiers-sur-Marne - Le Plessis-Trévise", "ZAC des Boutareines", "Parc du Bois-Saint-Denis", "Espace Jean-Moulin" ]`

## vincennes — src/data/cities/vincennes.ts

### GPT patches (setField)

- **LOW** — orthographe — `districts`
  - Reason: Correction typographique : « Centre-ville » prend un trait d’union.
  - Expected: `Saint-Louis / Bérault,Les Vignerons,Daumesnil,Centre ville,Diderot / Domaine du bois`
  - Value: `Saint-Louis / Bérault,Les Vignerons,Daumesnil,Centre-ville,Diderot / Domaine du bois`

