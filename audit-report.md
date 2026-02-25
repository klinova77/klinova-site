# Audit City — Klinova

Généré : 2026-02-25T04:15:33.761Z
Total fichiers : 12

## antony — src/data/cities-draft/antony.ts

### Issues

- **MEDIUM** — legal — `faq[2].answer`
  - Promesse de délai (« sous 24 à 48 heures ») : peut être interprétée comme un engagement de service. À valider côté conformité/CGV si ce type de délai est autorisé sur pages locales.
  - Evidence: `« Nous répondons généralement sous 24 à 48 heures. »`
  - Reco: Si non autorisé, reformuler de manière moins engageante (ex. « dans les meilleurs délais ») ou supprimer la mention chiffrée.
- **MEDIUM** — legal — `services[4].whyUsBullets[2]`
  - Promesse de délai (« sous quelques heures ») : peut être interprétée comme un engagement de résultat/temps de remise en service.
  - Evidence: `« remise en service du mobilier sous quelques heures après passage. »`
  - Reco: Si la politique éditoriale interdit les délais, remplacer par une formulation non chiffrée (ex. « après séchage ») ou conditionnelle.
- **MEDIUM** — legal — `services[4].uniqueDeepDive`
  - Mention chiffrée de délai de séchage (« sous 4 à 8 heures ») : peut être perçue comme promesse. Même si présentée comme variable, c’est un engagement potentiel.
  - Evidence: `« un séchage complet sous 4 à 8 heures selon la saison et l'aération disponible. »`
  - Reco: Si nécessaire, garder une formulation non chiffrée (« en quelques heures », « selon conditions ») ou préciser davantage le caractère indicatif (sans ajouter de nouvelles promesses).
- **MEDIUM** — legal — `services[6].faqAdditions[0].answer`
  - Promesse de délai (« sous 48 à 72 heures ») : engagement potentiel. À vérifier avec les règles internes (le brief utilisateur indique de ne pas ajouter de promesses ; ici elles existent déjà).
  - Evidence: `« Nous intervenons généralement sous 48 à 72 heures »`
  - Reco: Si non conforme, remplacer par une formulation non chiffrée (« selon disponibilités ») ou supprimer les chiffres.
- **LOW** — style — `hubIntro`
  - Formulation un peu télégraphique (« Carrefour multimodal RER B et C, pôle d'activités… ») : acceptable mais légèrement abrupte. Pas de correction nécessaire si style voulu.
  - Evidence: `Début de phrase sans verbe principal explicite.`
  - Reco: Optionnel : ajouter un verbe (mais cela serait une réécriture, donc à éviter si consigne stricte).
- **LOW** — factual_suspect — `citySpecificChallenges[4]`
  - « quatre gares RER B » semble factuellement douteux (Antony a plusieurs gares, mais pas forcément 4 gares RER B). Risque d'inexactitude locale.
  - Evidence: `« Flux piétons importants autour des quatre gares RER B »`
  - Reco: Vérifier le nombre et les lignes exactes ; si incertain, remplacer par une formulation non chiffrée et non spécifique (ex. « autour des gares RER ») sans ajouter de nouveaux faits.
- **LOW** — orthographe — `services[2].uniqueIntro`
  - Casse/typographie : « Avenue » au milieu d’une phrase peut s’écrire en minuscule (« avenue ») en français courant. Non bloquant.
  - Evidence: `« le long de l'Avenue de la Division Leclerc »`
  - Reco: Optionnel : « l’avenue de la Division-Leclerc » (attention au trait d’union : à vérifier).
- **LOW** — consistency — `services[3].heroDescription`
  - « désinfection virucide » : terme technique potentiellement sensible (allégation). Sans précision de norme/produit, cela peut être perçu comme promesse sanitaire forte.
  - Evidence: `« désinfection virucide »`
  - Reco: Vérifier que l’entreprise utilise bien des produits homologués et que la communication « virucide » est autorisée. Sinon, préférer « désinfection » (mais ce serait un changement de sens).

## asnieres-sur-seine — src/data/cities-draft/asnieres-sur-seine.ts

### Issues

- **MEDIUM** — legal — `faq[1].answer`
  - Promesse de délai (« sous 24 à 48 heures ») : risque de non-conformité si non garanti contractuellement. À minima, formulation à prudence/indicatif recommandée.
  - Evidence: `« Nous répondons généralement sous 24 à 48 heures. »`
  - Reco: Atténuer en formulation non engageante (ex. « en général » est déjà présent, mais on peut éviter le format trop précis) ou supprimer la plage chiffrée si non contractualisée.
- **HIGH** — legal — `faq[2].answer`
  - Promesse d'urgence et délai chiffré (« intervenir sous 24 à 72 heures ») : engagement potentiellement risqué (publicité/contractuel) et peut contrevenir aux règles internes « pas d'ajout de promesses ». Même si déjà présent, c'est un point de vigilance.
  - Evidence: `« pouvons généralement intervenir sous 24 à 72 heures »`
  - Reco: Remplacer par une formulation non chiffrée et conditionnelle (ex. « dans les meilleurs délais selon disponibilité ») si la politique Klinova ne garantit pas ces délais.
- **MEDIUM** — legal — `services[3].uniqueDeepDive`
  - Délai chiffré de réutilisation (« sous 24 à 48 heures ») : promesse temporelle potentiellement engageante.
  - Evidence: `« ... prépare le balcon à une réutilisation sous 24 à 48 heures selon ventilation. »`
  - Reco: Remplacer par une formulation non chiffrée (ex. « après un temps d’aération adapté ») si non garanti.
- **MEDIUM** — factual_suspect — `hubIntro`
  - Mention « trois stations de la ligne 13 » : point factuel à vérifier (nombre exact de stations ligne 13 sur la commune).
  - Evidence: `« ... et les trois stations de la ligne 13 ... »`
  - Reco: Vérifier la donnée. En cas de doute, remplacer par une formulation non chiffrée (« plusieurs stations de la ligne 13 »).
- **MEDIUM** — factual_suspect — `services[6].uniqueIntro`
  - Stations citées « Gabriel Péri » et « Les Agnettes » associées à Asnières-sur-Seine : à vérifier (localisation exacte selon communes/arrêts).
  - Evidence: `« ... comme Gabriel Péri ou Les Agnettes ... »`
  - Reco: Vérifier l’exactitude. Si incertain, remplacer par une formulation générique (« les stations de la ligne 13 à proximité ») sans citer de noms.
- **MEDIUM** — factual_suspect — `services[2].uniqueIntro`
  - Référence à la D909 et à une « pollution routière » : axe routier à vérifier sur la commune et risque de sur-spécification locale.
  - Evidence: `« pollution routière de la D909 »`
  - Reco: Vérifier que la D909 traverse/impacte bien Asnières-sur-Seine. Sinon, généraliser (« pollution routière ») sans numéro de route.
- **LOW** — style — `services[2].uniqueDeepDive`
  - Mot potentiellement incorrect : « bâchons » (verbe) semble être une faute (probable « bâchons » vs « bâchons » est correct mais registre oral ; plus standard : « bâchons » reste acceptable).
  - Evidence: `« ... ou les bâchons sur place. »`
  - Reco: Préférer une tournure plus neutre (« ou les bâchons » → « ou les bâchons ») ; si correction, viser « ou les bâchons sur place » → « ou les bâchons sur place » (pas de gain). À vérifier : alternative « ou les bâchons »/« ou les couvrons d’une bâche » (mais ce serait une réécriture).
- **LOW** — orthographe — `services[1].uniqueDeepDive`
  - Accord : « le produit utilisés » devrait être « le produit utilisé » (accord singulier). Correction mécanique.
  - Evidence: `« ... détermine la pression et le produit utilisés. »`
  - Reco: Corriger en « le produit utilisé ».
- **LOW** — orthographe — `services[3].specificChallenges[0]`
  - Terme : « nidifications » est peu idiomatique dans ce contexte ; on dit plutôt « nidification » (singulier) ou « nidification/installation ». Correction légère possible.
  - Evidence: `« propices aux nidifications »`
  - Reco: Remplacer par « propices à la nidification » (sans changer le sens).
- **LOW** — style — `services[0].uniqueDeepDive`
  - Formulation : « Une consigne de non-piétinement » est un peu lourde/technique ; acceptable mais améliorable. (Pas nécessaire si corrections minimales.)
  - Evidence: `« Une consigne de non-piétinement est transmise »`
  - Reco: Optionnel : « Une consigne de ne pas piétiner… » (mais cela relève de la réécriture, à éviter).
- **LOW** — consistency — `services[0].whyUsBullets[0]`
  - « secteur Bécon » vs ailleurs « Bécon-les-Bruyères » : cohérence de dénomination (préférer la forme complète).
  - Evidence: `« ... du secteur Bécon. »`
  - Reco: Harmoniser en « Bécon-les-Bruyères » si c’est bien l’intention.

## boulogne-billancourt — src/data/cities-draft/boulogne-billancourt.ts

### Issues

- **LOW** — style — `customDescription`
  - Formulation légèrement elliptique : « une équipe locale adaptée… » sans verbe (sous-entendu « intervient »). Ce n’est pas fautif, mais peut être amélioré pour la fluidité.
  - Evidence: `« ... une équipe locale adaptée aux exigences du bâti boulonnais. »`
  - Reco: Ajouter un verbe minimal sans changer le sens (ex. « avec une équipe locale, adaptée… »).
- **LOW** — orthographe — `hubIntro`
  - Typographie : espace insécable recommandée avant les deux-points en français (ici, espaces simples).
  - Evidence: `« <strong>Coordination accès :</strong> », « <strong>Adaptation au stationnement :</strong> », « <strong>Méthodes ajustées au bâti :</strong> »`
  - Reco: Remplacer «  : » par « : » (espace insécable) avant « : » dans ces libellés.
- **MEDIUM** — factual_suspect — `citySpecificChallenges[0]`
  - Affirmation potentiellement sensible/localisée : « en zone inondable » et « nécessitant parfois pompage » peut être perçu comme un fait local généralisant (et une capacité opérationnelle).
  - Evidence: `« Parkings souterrains profonds en zone inondable, nécessitant parfois pompage après épisodes pluvieux. »`
  - Reco: Si non sourcé, atténuer (ex. « pouvant être exposés à des infiltrations ») sans ajouter de promesse. (Patch non proposé car réécriture).
- **MEDIUM** — factual_suspect — `citySpecificChallenges[3]`
  - Référence à une source de pollution précise (A13) : peut être contestable selon les zones exactes ; prudence fact-check.
  - Evidence: `« retombées de pollution de l'A13 et des quais de Seine »`
  - Reco: Si besoin, généraliser (« axes routiers ») sans ajouter de nouveaux faits. (Pas de patch : réécriture).
- **LOW** — consistency — `districts[1]`
  - Incohérence possible d’orthographe du toponyme : « Silly-Gallieni » est souvent écrit « Silly-Gallieni » mais l’avenue/nom « Gallieni » peut aussi apparaître « Gallieni » (ok) ; vérifier la graphie officielle du quartier (parfois « Silly-Gallieni » / « Silly-Gallieni »).
  - Evidence: `« Silly-Gallieni »`
  - Reco: Vérifier la graphie officielle de la ville/quartier. Pas de correction proposée sans certitude.
- **MEDIUM** — legal — `services[3].whyUsBullets[1]`
  - Allégation réglementaire potentiellement sensible : « désinfection virucide homologuée ». Le terme « homologuée » peut impliquer une conformité réglementaire précise (normes/AMM) qui doit être justifiable.
  - Evidence: `« ... désinfection virucide homologuée. »`
  - Reco: Si non documenté, préférer une formulation neutre (ex. « désinfection virucide conforme aux recommandations fabricant ») — nécessite réécriture, donc pas de patch safe.
- **MEDIUM** — legal — `services[3].uniqueDeepDive`
  - Mention d’EPI « masque FFP2 » : ok, mais attention à la conformité réelle des procédures ; et « produit virucide » implique un biocide avec conditions d’usage. Prudence si non systématique.
  - Evidence: `« masque FFP2... » / « produit virucide »`
  - Reco: S’assurer que ces éléments sont réellement appliqués et documentables. Sinon, atténuer. (Pas de patch : réécriture).
- **MEDIUM** — legal — `services[6].faqAdditions[0].answer`
  - Promesse de délai chiffré (« sous 48 à 72 heures ») : peut être considéré comme engagement commercial. À valider côté opérationnel et juridique.
  - Evidence: `« ... intervenir sous 48 à 72 heures ... »`
  - Reco: Si non garanti, remplacer par une formulation non chiffrée (« dans les meilleurs délais »). (Pas de patch safe : réécriture).
- **LOW** — orthographe — `services[1].uniqueIntro`
  - Accord/forme : « trafic véhicule intense » sonne incorrect ; on attend « trafic de véhicules intense » ou « trafic routier intense ».
  - Evidence: `« trafic véhicule intense le long des axes A13 et D910 »`
  - Reco: Corriger en « trafic de véhicules intense » (correction grammaticale minimale).
- **LOW** — style — `services[2].faqAdditions[3].question`
  - Terme possiblement inadapté localement : « balcons haussmanniens » à Boulogne-Billancourt peut être discutable (Haussmann surtout Paris). Fact-check prudent.
  - Evidence: `« balcons haussmanniens de Boulogne »`
  - Reco: Si doute, remplacer par « balcons anciens » (réécriture ; pas de patch safe).
- **LOW** — orthographe — `services[0].uniqueDeepDive`
  - Typographie : « comptez entre 4 et 12 heures » ok, mais cohérence avec FAQ qui dit 4–8h ; ce n’est pas une erreur mais peut créer une perception d’incohérence.
  - Evidence: `DeepDive: « entre 4 et 12 heures » vs FAQ: « entre 4 et 8 heures »`
  - Reco: Harmoniser les fourchettes si possible (sans ajouter de promesse). Pas de patch proposé sans arbitrage éditorial.

## colombes — src/data/cities-draft/colombes.ts

### Issues

- **MEDIUM** — legal — `faq[0].answer`
  - Présence d'une promesse de délai (« réactivité sous 24 à 48 heures ») : risque de non-conformité aux règles (ajout/affirmation de délai) et risque légal/marketing si non systématiquement tenu.
  - Evidence: `« réactivité sous 24 à 48 heures »`
  - Reco: Remplacer par une formulation non chiffrée et non engageante (ex. « réactivité rapide » / « selon disponibilités ») sans ajouter de nouvelle promesse.
- **MEDIUM** — legal — `faq[1].answer`
  - Promesse de gratuité (« passage gratuit ») + promesse de délai (« Le devis détaillé suit sous 48 heures »). Risque légal/marketing si conditions non précisées et non systématiquement tenues ; non conforme aux règles de prudence.
  - Evidence: `« passage gratuit » ; « Le devis détaillé suit sous 48 heures. »`
  - Reco: Remplacer par une formulation non engageante (ex. « passage sur place » / « devis transmis après la visite ») sans délai chiffré.
- **MEDIUM** — legal — `services[0].uniqueDeepDive`
  - Affirmation chiffrée sur le délai de séchage (« sous 4 à 8 heures ») : promesse potentiellement contestable selon conditions (ventilation, hygrométrie, épaisseur).
  - Evidence: `« le séchage complet intervient généralement sous 4 à 8 heures. »`
  - Reco: Remplacer par une formulation non chiffrée ou plus prudente sans engagement (ex. « en quelques heures selon les conditions »).
- **MEDIUM** — legal — `services[0].faqAdditions[1].answer`
  - Délai de séchage chiffré (« 4 à 6 heures », « le lendemain matin ») : promesse de résultat/délai dépendante des conditions, potentiellement non tenue.
  - Evidence: `« le séchage complet prend généralement 4 à 6 heures » ; « sèche le lendemain matin »`
  - Reco: Rendre la phrase plus conditionnelle et/ou supprimer les chiffres si la règle interne interdit les délais.
- **MEDIUM** — legal — `services[6].faqAdditions[0].answer`
  - Promesse de délai d'intervention (« sous 24 à 48 heures », « le samedi matin reste souvent possible ») : engagement temporel potentiellement non tenu, et contraire aux règles de prudence.
  - Evidence: `« intervenir sous 24 à 48 heures » ; « le samedi matin reste souvent possible »`
  - Reco: Remplacer par une formulation sans délai chiffré et sans créneau garanti (ex. « selon disponibilités »).
- **LOW** — style — `hubIntro`
  - Typographie : « comptes-rendus » est acceptable mais la forme recommandée en français courant est « comptes rendus » (sans trait d’union).
  - Evidence: `« des comptes-rendus sur demande »`
  - Reco: Remplacer par « des comptes rendus » (correction typographique).
- **LOW** — orthographe — `customDescription`
  - Cohérence typographique : « parkings souterrains » est OK, mais la liste manque d’article défini avant « parkings » (style) ; toutefois la phrase reste correcte. Point de vigilance mineur.
  - Evidence: `« l'entretien des parties communes, parkings souterrains et espaces extérieurs »`
  - Reco: Optionnel : « l'entretien des parties communes, des parkings souterrains et des espaces extérieurs » (si vous acceptez une micro-correction de parallélisme).
- **LOW** — consistency — `services[0].whyUsBullets[0]`
  - Formulation potentiellement étrange : « configurations tertiaires colombiennes » (adjectif « colombiennes » appliqué à « configurations tertiaires ») peut sonner artificiel.
  - Evidence: `« configurations tertiaires colombiennes »`
  - Reco: Alléger sans changer le sens (ex. « configurations tertiaires à Colombes »).
- **LOW** — factual_suspect — `services[0].uniqueIntro`
  - Mention locale très spécifique (« zone Kléber ») : peut être correct mais à vérifier (risque de micro-inexactitude toponymique/usage local).
  - Evidence: `« flux tertiaires de la zone Kléber »`
  - Reco: Vérifier l’existence/pertinence de l’appellation « zone Kléber » à Colombes ; sinon remplacer par une formulation plus générique sans nouveau fait local.
- **LOW** — factual_suspect — `services[2].uniqueIntro`
  - Mention très spécifique (« rue Saint-Denis ») : peut être correct mais à vérifier (risque d’inexactitude locale si la rue n’est pas un repère pertinent pour Colombes).
  - Evidence: `« Dans le secteur de la rue Saint-Denis »`
  - Reco: Vérifier que la rue Saint-Denis est bien un repère local pertinent à Colombes ; sinon généraliser (sans ajouter de nouveaux lieux).
- **LOW** — factual_suspect — `services[3].uniqueIntro`
  - Mention très spécifique (« autour de l'église Saint-Pierre-Saint-Paul ») : plausible mais à vérifier (risque d’inexactitude ou de ciblage trop précis).
  - Evidence: `« notamment autour de l'église Saint-Pierre-Saint-Paul »`
  - Reco: Vérifier l’existence et la pertinence locale ; sinon retirer le « notamment autour de… » ou généraliser.
- **LOW** — factual_suspect — `services[6].uniqueIntro`
  - Mention « gare du Stade » : à vérifier (nom exact de la gare/arrêt ; risque de confusion avec « Stade de Colombes » / « Le Stade »).
  - Evidence: `« Dans le secteur de la gare du Stade »`
  - Reco: Vérifier l’appellation exacte ; si doute, remplacer par une formulation plus générique (ex. « près du stade ») sans créer de nouveau fait local.
- **LOW** — consistency — `services[5].uniqueIntro`
  - « dalles sur plots en ZAC » : formulation abrégée ; pourrait gagner en clarté (« en ZAC ») mais reste compréhensible. Point mineur.
  - Evidence: `« dalles sur plots en ZAC »`
  - Reco: Optionnel : « dalles sur plots dans les ZAC » (si cohérent avec le reste).

### Patches

- **LOW** — style — `hubIntro` — op=substring — applySafe=true
  - Reason: Correction typographique courante : suppression du trait d’union dans « comptes rendus » (sans changer le sens).
  - find/replace: `comptes-rendus` → `comptes rendus`
  - context: `...Nous assurons un suivi régulier et des comptes-rendus sur demande pour les gestionnaires...</p>`

## courbevoie — src/data/cities-draft/courbevoie.ts

### Issues

- **MEDIUM** — factual_suspect — `customDescription`
  - Mention de lieux/secteurs précis (« Du quartier Bécon aux immeubles proches de La Défense ») : possible, mais à vérifier car cela ancre la page sur des repères locaux. Risque si la couverture réelle n'inclut pas ces zones.
  - Evidence: `"Du quartier Bécon aux immeubles proches de La Défense"`
  - Reco: Conserver si exact. Sinon, remplacer par une formulation plus neutre sans ajouter de nouveaux faits (ex. retirer la référence à La Défense).
- **LOW** — style — `hubIntro`
  - Formulation un peu lourde : « typologies de bâtiments variées ». Pas une faute, mais style perfectible.
  - Evidence: `"Courbevoie concentre des typologies de bâtiments variées"`
  - Reco: Optionnel : remplacer « des typologies de bâtiments variées » par « des typologies de bâtiments variées » n'apporte pas d'amélioration; envisager « des typologies de bâtiments variées » -> « des typologies de bâtiments variées » (sinon laisser).
- **LOW** — orthographe — `services[0].whyUsBullets[2]`
  - Orthographe/usage : « weekend » est généralement écrit « week-end » en français.
  - Evidence: `"en soirée ou le weekend"`
  - Reco: Remplacer « weekend » par « week-end » (correction mécanique).
- **HIGH** — legal — `services[0].faqAdditions[1].answer`
  - Affirmation chiffrée potentiellement engageante sur le temps de séchage (4 à 8 heures) + recommandation de planification (« fin de semaine... lundi matin »). Risque de promesse implicite selon conditions réelles.
  - Evidence: `"Le séchage varie entre 4 et 8 heures" ; "Nous recommandons de planifier l'intervention en fin de semaine pour une remise en service complète le lundi matin."`
  - Reco: Si vous devez rester conservateur légalement, atténuer (sans ajouter de nouvelles promesses) ou retirer la phrase de recommandation. À défaut, garder mais valider en interne.
- **LOW** — orthographe — `services[1].uniqueIntro`
  - Formulation : « générant accumulation de » manque un article (« une accumulation de »).
  - Evidence: `"générant accumulation de poussières"`
  - Reco: Ajouter « une » (correction grammaticale simple).
- **LOW** — consistency — `services[2].uniqueDeepDive`
  - Phrase dupliquée à l'identique (répétition).
  - Evidence: `"Les garde-corps en verre ou acier reçoivent un traitement spécifique pour éliminer traces grasses et dépôts atmosphériques." apparaît deux fois`
  - Reco: Supprimer une occurrence (idéalement la seconde) sans modifier la structure HTML (ne supprimer que le texte de la phrase dupliquée).
- **LOW** — consistency — `services[5].uniqueDeepDive`
  - Phrase dupliquée à l'identique (répétition).
  - Evidence: `"La haute pression intervient uniquement sur les supports qui la tolèrent, avec réglage adapté pour préserver joints et finitions." apparaît deux fois`
  - Reco: Supprimer une occurrence (idéalement la seconde) sans modifier la structure HTML (ne supprimer que le texte de la phrase dupliquée).
- **HIGH** — legal — `services[6].specificChallenges[0]`
  - Promesse/délai : « intervention sous 48h possible » est une promesse de délai (même conditionnée) susceptible d'être non tenue.
  - Evidence: `"intervention sous 48h possible selon planning"`
  - Reco: Atténuer ou retirer la mention de délai (ex. supprimer « sous 48h ») si vous ne pouvez pas le garantir.
- **HIGH** — legal — `services[6].faqAdditions[3].answer`
  - Promesse/délai : « sous 24 à 48h » est une promesse de délai pour une demande urgente.
  - Evidence: `"une intervention sous 24 à 48h est envisageable"`
  - Reco: Atténuer/supprimer la mention chiffrée si non garantie. Préférer une formulation non chiffrée (sans ajouter de nouvelles promesses).
- **LOW** — orthographe — `services[6].faqAdditions[3].question`
  - Typographie : « 24 à 48h » devrait s'écrire « 24 à 48 h » (espace avant l'unité).
  - Evidence: `"sous 24 à 48h"`
  - Reco: Ajouter l'espace : « 48 h ». (Si vous conservez la mention chiffrée.)
- **MEDIUM** — factual_suspect — `services[2].faqAdditions[0].question`
  - Référence locale très précise (« boulevard de Verdun ») : à vérifier (existence/pertinence à Courbevoie). Risque de fait local inexact.
  - Evidence: `"boulevard de Verdun à Courbevoie"`
  - Reco: Si non certain, remplacer par une formulation générique (« un boulevard passant ») sans ajouter de nouveaux lieux.
- **MEDIUM** — factual_suspect — `services[4].uniqueIntro`
  - Mention locale précise (« Rue de Bezons ») : à vérifier (existence/pertinence à Courbevoie).
  - Evidence: `"Rue de Bezons"`
  - Reco: Si doute, retirer la rue et garder une mention générique (« à Courbevoie ») sans ajouter de nouveaux faits.
- **MEDIUM** — factual_suspect — `services[6].uniqueIntro`
  - Mention locale précise (« Avenue de la Liberté ») : à vérifier (existence/pertinence à Courbevoie).
  - Evidence: `"Avenue de la Liberté"`
  - Reco: Si doute, retirer la rue/avenue et garder une mention générique (« à Courbevoie ») sans ajouter de nouveaux faits.
- **LOW** — orthographe — `services[4].uniqueDeepDive`
  - Typographie : espace insécable recommandée avant « heures » (ici OK), mais « 4 et 8 heures » est correct. En revanche, cohérence avec d'autres occurrences « 4 à 8 heures » : variation de style.
  - Evidence: `"entre 4 et 8 heures" vs ailleurs "4 et 8 heures" / "4 à 8 heures"`
  - Reco: Optionnel : harmoniser (sans changer le sens).

### Patches

- **LOW** — orthographe — `services[0].whyUsBullets[2]` — op=substring — applySafe=true
  - Reason: Correction orthographique standard en français.
  - find/replace: `weekend` → `week-end`
  - context: `Interventions planifiées en soirée ou le weekend pour limiter la gêne et permettre un séchage complet avant reprise d'activité.`
- **LOW** — orthographe — `services[1].uniqueIntro` — op=substring — applySafe=true
  - Reason: Correction grammaticale simple (article manquant) sans changement de sens.
  - find/replace: `générant accumulation de` → `générant une accumulation de`
  - context: `...situés sous la dalle subissent un passage constant de véhicules, générant accumulation de poussières de carbone, traces de pneus et coulures d'huile...`

## fontenay-aux-roses — src/data/cities-draft/fontenay-aux-roses.ts

### Issues

- **MEDIUM** — factual_suspect — `hubIntro`
  - Mention de « site historique du CEA » : formulation potentiellement discutable/à vérifier (le CEA est bien présent, mais le qualificatif « historique » peut être interprété comme un fait non sourcé).
  - Evidence: `« ...et site historique du CEA... »`
  - Reco: Si vous souhaitez rester strictement factuel, retirer/atténuer le qualificatif (« site du CEA ») sans ajouter d'information nouvelle.
- **HIGH** — legal — `faq[1].answer`
  - Promesse de délai (« sous 24 à 48 heures ») : engagement temporel pouvant être considéré comme une promesse commerciale. À valider juridiquement/ops si c’est réellement tenu.
  - Evidence: `« ...nous revenons vers vous sous 24 à 48 heures... »`
  - Reco: Si vous ne pouvez pas garantir ce délai, remplacer par une formulation non engageante (ex. « dans les meilleurs délais »). Correction non mécanique => à traiter manuellement.
- **HIGH** — legal — `faq[2].answer`
  - Promesse de délai d’intervention (« sous 24 à 72 heures ») : engagement temporel explicite, potentiellement risqué si non garanti.
  - Evidence: `« ...une intervention sous 24 à 72 heures... »`
  - Reco: Remplacer par une formulation non chiffrée (ex. « dans les meilleurs délais selon disponibilité ») si nécessaire. À traiter manuellement (pas de patch automatique).
- **MEDIUM** — legal — `services[3].heroDescription`
  - Allégation « désinfection virucide » : terme technique/réglementé. Sans précision (norme EN, produit homologué, conditions), cela peut être juridiquement sensible (allégation biocide).
  - Evidence: `« ...désinfection virucide des supports... »`
  - Reco: Vérifier que les produits/protocoles répondent bien aux exigences (ex. virucide selon EN 14476) et, si besoin, reformuler plus prudemment (ex. « désinfection ») ou préciser la conformité (si vrai).
- **MEDIUM** — legal — `services[3].whyUsBullets[1]`
  - « désinfection virucide certifiée » : notion de certification potentiellement trompeuse si aucune certification formelle n’existe/ n’est pas documentée.
  - Evidence: `« ...désinfection virucide certifiée... »`
  - Reco: Remplacer « certifiée » par « conforme »/« avec produit homologué » uniquement si vous pouvez le prouver, sinon retirer le terme. À traiter manuellement.
- **MEDIUM** — legal — `services[3].uniqueDeepDive`
  - « produit virucide homologué » : allégation réglementée (biocides). À vérifier (AMM/TP, usage, normes).
  - Evidence: `« ...produit virucide homologué... »`
  - Reco: Si non justifiable, préférer « produit désinfectant adapté » ou « désinfectant conforme aux normes applicables » (si vrai). Modification non mécanique => manuelle.
- **MEDIUM** — legal — `services[3].faqAdditions[2].answer`
  - Répétition d’allégations « virucide et bactéricide homologué » : même risque réglementaire (biocides) + nécessité de preuve.
  - Evidence: `« Un produit virucide et bactéricide homologué... »`
  - Reco: Vérifier la conformité et la preuve ; sinon reformuler plus générique. À traiter manuellement.
- **MEDIUM** — factual_suspect — `services[2].uniqueIntro`
  - Référence à « pollution de la D906 » : la D906 existe dans le secteur, mais l’affirmation de pollution déposant un voile grisâtre est une généralisation locale non sourcée.
  - Evidence: `« ...la pollution de la D906 dépose un voile grisâtre... »`
  - Reco: Si vous voulez rester strictement prudent, remplacer par une formulation plus générale (« la pollution urbaine ») sans citer un axe précis, ou conserver si vous assumez l’assertion.
- **LOW** — style — `hubIntro`
  - Cohérence typographique : « Coordination simplifiée : Un interlocuteur unique » -> majuscule après deux-points non nécessaire en français courant.
  - Evidence: `« Coordination simplifiée : Un interlocuteur unique... »`
  - Reco: Mettre « un » en minuscule après « : » (correction mécanique).
- **LOW** — style — `services[0].uniqueIntro`
  - Anglicisme/typographie : « open spaces » souvent écrit « open-spaces » en français ; à harmoniser si souhaité.
  - Evidence: `« ...Les dalles textiles des open spaces... »`
  - Reco: Harmoniser en « open-spaces » (optionnel).
- **LOW** — consistency — `services[3].uniqueDeepDive`
  - Incohérence interne : le texte mentionne « produit virucide homologué » puis « produit bactéricide » (sans virucide) plus bas ; manque d’alignement terminologique.
  - Evidence: `« ...produit virucide homologué... » / « Le produit bactéricide agit... »`
  - Reco: Aligner les termes (si vous gardez virucide, rester cohérent) ; à traiter manuellement compte tenu du risque légal.

### Patches

- **LOW** — style — `hubIntro` — op=substring — applySafe=true
  - Reason: Minuscule après deux-points : correction typographique simple sans changement de sens.
  - find/replace: `Coordination simplifiée : Un interlocuteur unique` → `Coordination simplifiée : un interlocuteur unique`
  - context: `<li>Coordination simplifiée : Un interlocuteur unique pour organiser les accès, informer les occupants et assurer le suivi des prestations réalisées.</li>`

## levallois-perret — src/data/cities-draft/levallois-perret.ts

### Issues

- **MEDIUM** — consistency — `department.name`
  - Nom de département en minuscules alors que c’est un nom propre ; incohérence possible avec d’autres villes (souvent capitalisé).
  - Evidence: `"hauts-de-seine"`
  - Reco: Vérifier la convention globale du projet (name vs slug). Si 'name' est affiché, préférer "Hauts-de-Seine".
- **MEDIUM** — factual_suspect — `hubIntro`
  - Mention d’un "Hôtel de Ville monumental" : qualificatif subjectif et potentiellement discutable/factuel. Risque de sur-promesse descriptive locale.
  - Evidence: `"Entre l'Hôtel de Ville monumental"`
  - Reco: Remplacer par une formulation neutre (ex. "l'Hôtel de Ville") sans ajouter d’informations.
- **MEDIUM** — factual_suspect — `hubIntro`
  - Référence à des "parkings Indigo" et "So Ouest" : marque/enseigne et affirmation locale potentiellement inexacte (présence/gestion).
  - Evidence: `"(parkings Indigo, So Ouest)"`
  - Reco: Éviter les marques ou citer de façon générique (ex. "parkings publics") si la présence exacte n’est pas certaine.
- **MEDIUM** — factual_suspect — `citySpecificChallenges[0]`
  - Indication chiffrée "(-3/-4 niveaux)" : détail potentiellement variable selon les immeubles, donc factuellement risqué.
  - Evidence: `"(-3/-4 niveaux)"`
  - Reco: Retirer la précision chiffrée ou la rendre générique (ex. "sur plusieurs niveaux") sans ajouter de promesse.
- **MEDIUM** — factual_suspect — `citySpecificChallenges[2]`
  - Affirmation locale précise sur la pollution "balcons côté Quai Michelet" : peut être discutable et trop spécifique.
  - Evidence: `"Pollution atmosphérique marquée sur les <strong>balcons côté Quai Michelet</strong>"`
  - Reco: Rendre plus général (ex. "sur certains axes"), ou vérifier la pertinence locale exacte.
- **MEDIUM** — factual_suspect — `citySpecificChallenges[2]`
  - Nom de voie potentiellement incorrect/ambigu : "Quai Michelet" à Levallois-Perret n’est pas certain (risque de confusion avec d’autres communes).
  - Evidence: `"Quai Michelet"`
  - Reco: Vérifier l’existence exacte de la voie à Levallois-Perret ; sinon remplacer par une mention plus générique (ex. "quais"), sans ajouter de nouveau lieu.
- **MEDIUM** — factual_suspect — `citySpecificChallenges[5]`
  - Mention "immeubles haussmanniens" à Levallois-Perret : typologie architecturale possible mais potentiellement discutable selon les secteurs.
  - Evidence: `"immeubles haussmanniens du quartier Greffulhe"`
  - Reco: Si non certain, remplacer par "immeubles anciens" (neutre) en conservant le sens.
- **MEDIUM** — factual_suspect — `districts`
  - Liste de quartiers : risque factuel si certains noms ne correspondent pas aux dénominations officielles/localement reconnues.
  - Evidence: `"Jean Zay", "Collange", "Alsace", etc.`
  - Reco: Vérifier la liste vs quartiers officiels/usage local. En cas de doute, utiliser des secteurs plus génériques (centre-ville, Front de Seine, etc.) sans inventer.
- **MEDIUM** — factual_suspect — `landmarks`
  - "Île de la Jatte" est principalement associée à Neuilly-sur-Seine/Levallois ; l’inclure comme repère de Levallois peut être discutable selon le cadrage.
  - Evidence: `"Île de la Jatte"`
  - Reco: Vérifier la cohérence éditoriale (repères proches vs dans la commune). Si la règle exige des repères strictement dans la ville, retirer.
- **HIGH** — legal — `faq[2].answer`
  - Annonce d’un délai de devis "sous 24 à 48 heures" : promesse/délai commercial pouvant engager et varier ; risque légal/qualité si non garanti.
  - Evidence: `"un devis sous <strong>24 à 48 heures</strong>"`
  - Reco: Remplacer par une formulation non engageante (ex. "dans les meilleurs délais" / "généralement sous ..." déjà présent mais reste un engagement). À valider avec le juridique/commercial.
- **MEDIUM** — legal — `services[0].faqAdditions[3].answer`
  - Indication de délai de séchage "4 à 8 heures" : peut être interprété comme engagement de résultat/temps, variable selon conditions.
  - Evidence: `"comptez entre 4 et 8 heures"`
  - Reco: Conserver une fourchette mais renforcer le conditionnel (ex. "souvent" / "à titre indicatif") si la charte le permet, sans ajouter de promesse ferme.
- **MEDIUM** — legal — `services[7].faqAdditions[3].answer`
  - Promesse "repasse ciblée ... sans frais supplémentaires" : engagement commercial explicite pouvant nécessiter validation (conditions, limites).
  - Evidence: `"une repasse ciblée est effectuée sans frais supplémentaires"`
  - Reco: Valider avec l’équipe commerciale/juridique ; sinon neutraliser (ex. "nous ajustons si nécessaire") sans mention de gratuité.
- **MEDIUM** — orthographe — `hubIntro`
  - Typographie française : espace insécable avant deux-points recommandé (ici espace simple).
  - Evidence: `"spécificités locales : accès"`
  - Reco: Remplacer par une espace insécable (ou fine insécable) avant « : » si la stack le supporte (ex. "locales&nbsp;:").
- **LOW** — style — `services[0].specificChallenges[0]`
  - Formulation télégraphique : manque de préposition "des" (lisibilité).
  - Evidence: `"Dalles textiles bureaux Trézel"`
  - Reco: Corriger minimalement en "Dalles textiles de bureaux (Trézel)" si conforme à la charte, sans ajouter de fait.
- **LOW** — orthographe — `services[0].faqAdditions[0].question`
  - Orthographe : "shampouinage" est acceptable, mais la forme la plus courante est "shampooing" / "shampouinage" selon guide ; risque d’incohérence terminologique SEO.
  - Evidence: `"matériel de shampouinage"`
  - Reco: Harmoniser avec la terminologie du site (si ailleurs "shampooing moquette" est utilisé).
- **MEDIUM** — factual_suspect — `services[5].whyUsBullets[0]`
  - "rooftops en ZAC" : mention d’une ZAC et association à des rooftops peut être trop spécifique/localement discutable.
  - Evidence: `"des rooftops en ZAC"`
  - Reco: Rendre plus générique (ex. "dans les secteurs récents") si non certain.
- **MEDIUM** — factual_suspect — `services[5].specificChallenges[1]`
  - "ZAC Collange" : existence/dénomination exacte incertaine ; risque factuel local.
  - Evidence: `"ZAC Collange"`
  - Reco: Vérifier la dénomination ; sinon retirer "ZAC" et garder "Collange" (déjà listé comme quartier) ou formulation neutre.
- **MEDIUM** — factual_suspect — `services[4].uniqueIntro`
  - Mention de "rue du Président Wilson" : voie potentiellement existante mais à vérifier (risque de confusion avec d’autres communes).
  - Evidence: `"rue du Président Wilson"`
  - Reco: Vérifier l’intitulé exact ; sinon retirer le nom de rue ou le remplacer par une mention générique (sans ajouter de nouveau lieu).
- **MEDIUM** — factual_suspect — `services[2].uniqueIntro`
  - Mention "Quai Charles-Pasqua" : à vérifier (voie existante à Levallois-Perret). Risque factuel si incorrect.
  - Evidence: `"Quai Charles-Pasqua"`
  - Reco: Vérifier l’intitulé exact ; sinon neutraliser (ex. "le long des quais").
- **LOW** — orthographe — `services[2].specificChallenges[4]`
  - Toponyme : "Square Edith-de-Villepin" — vérifier la graphie officielle (tiret, capitalisation).
  - Evidence: `"Square Edith-de-Villepin"`
  - Reco: Aligner sur la graphie officielle si connue dans la base ; sinon conserver mais surveiller la cohérence.

### Patches

- **LOW** — orthographe — `customDescription` — op=substring — applySafe=true
  - Reason: Correction typographique : ajout de l’article manquant pour une liste (accord/grammaire évident) sans changer le sens.
  - find/replace: `parties communes, parkings souterrains et espaces extérieurs` → `parties communes, des parkings souterrains et des espaces extérieurs`
  - context: `Klinova assure l'entretien des parties communes, parkings souterrains et espaces extérieurs à Levallois-Perret.`
- **LOW** — orthographe — `hubIntro` — op=substring — applySafe=true
  - Reason: Typographie : ajout de l’article manquant dans une énumération (correction mécanique).
  - find/replace: `parkings profonds sur plusieurs niveaux` → `des parkings profonds sur plusieurs niveaux`
  - context: `Nos équipes connaissent les spécificités locales : accès sécurisés systématiques, parkings profonds sur plusieurs niveaux, copropriétés de standing.`

## malakoff — src/data/cities-draft/malakoff.ts

### Issues

- **MEDIUM** — legal — `faq[2].answer`
  - Promesse de délai chiffré (« sous 24 à 48 heures ») pouvant être interprétée comme un engagement commercial. La règle fournie indique de ne pas ajouter de promesses/chiffres ; ici c'est déjà présent et peut poser un risque de conformité selon la politique interne.
  - Evidence: `« nous pouvons intervenir sous <strong>24 à 48 heures</strong> »`
  - Reco: Remplacer par une formulation non chiffrée et non engageante (ex. « dans les meilleurs délais » / « selon disponibilité ») sans ajouter de nouvelle promesse.
- **MEDIUM** — legal — `services[6].faqAdditions[0].answer`
  - Promesse de délai chiffré (« sous 48 à 72 heures ») + mention d'un « créneau prioritaire » pouvant être perçue comme engagement/garantie. Risque similaire de conformité.
  - Evidence: `« Nous intervenons généralement sous 48 à 72 heures… un créneau prioritaire peut être proposé »`
  - Reco: Remplacer par une formulation non chiffrée et conditionnelle (sans notion de priorité garantie).
- **MEDIUM** — factual_suspect — `hubIntro`
  - Référence locale potentiellement discutable : « Coulée Verte » à Malakoff. Il existe des coulées vertes/chemins, mais l'intitulé exact et l'association directe à Malakoff peuvent être imprécis. À vérifier pour éviter une inexactitude locale.
  - Evidence: `« au carrefour de la ligne 13 et de la Coulée Verte »`
  - Reco: Vérifier l'appellation exacte (ex. « Coulée verte du Sud parisien » déjà utilisée ailleurs) et harmoniser si besoin.
- **LOW** — consistency — `services[2].uniqueIntro`
  - Incohérence de casse sur « Avenue » vs « avenue » Pierre Brossolette au sein de la même page. Ce n'est pas bloquant mais nuit à l'homogénéité éditoriale.
  - Evidence: `« le long de l'Avenue Pierre Brossolette » vs ailleurs « avenue Pierre Brossolette »`
  - Reco: Uniformiser (souvent « avenue Pierre-Brossolette » ou « avenue Pierre Brossolette » selon la charte) sans changer le sens.
- **LOW** — style — `services[0].uniqueDeepDive`
  - Typographie : « Compte-rendu » est acceptable, mais la forme recommandée en français courant est souvent « compte rendu » (sans trait d'union). Harmonisation possible avec d'autres occurrences.
  - Evidence: `« Compte-rendu d'intervention »`
  - Reco: Harmoniser en « compte rendu » si c'est la convention retenue sur le site.
- **LOW** — style — `hubIntro`
  - Typographie : « Compte-rendu » dans la liste à puces ; même remarque d'harmonisation stylistique.
  - Evidence: `« Compte-rendu d'intervention disponible sur demande »`
  - Reco: Harmoniser en « compte rendu » si souhaité.
- **LOW** — factual_suspect — `services[4].uniqueIntro`
  - Mention locale très spécifique (« Rue de la Tour ») : plausible mais à vérifier (nom exact, présence à Malakoff). Risque d'inexactitude locale si la rue n'est pas dans la commune.
  - Evidence: `« autour de la <strong>Rue de la Tour</strong> »`
  - Reco: Vérifier que la rue est bien à Malakoff ; sinon remplacer par une formulation plus générique (sans ajouter de nouveaux lieux).
- **LOW** — orthographe — `services[2].uniqueIntro`
  - Casse : « grès cérame » est correct ; en revanche « bétons peints » peut être discuté (pluriel) mais reste acceptable. Pas de correction certaine.
  - Evidence: `« carrelages grès cérame et bétons peints »`
  - Reco: Optionnel : « béton peint » si l'intention est générique, mais éviter si non certain.

## nanterre — src/data/cities-draft/nanterre.ts

### Issues

- **MEDIUM** — legal — `faq[1].answer`
  - Promesse de délai (« sous 24 à 48 heures ») assimilable à un engagement de rapidité. La règle fournie indique de ne pas ajouter de promesses/délais ; ici c'est déjà présent et peut poser un risque de conformité/attentes client.
  - Evidence: `« Oui, nous pouvons mobiliser une équipe sous 24 à 48 heures »`
  - Reco: Remplacer par une formulation non engageante (ex. « dans les meilleurs délais » / « selon disponibilité ») sans mention chiffrée.
- **MEDIUM** — legal — `services[6].faqAdditions[0].answer`
  - Promesse de délai (« sous 24 à 48 heures ») dans une FAQ service. Risque similaire d'engagement et de non-conformité aux règles internes (pas de promesses/délais).
  - Evidence: `« Nous intervenons sous 24 à 48 heures »`
  - Reco: Retirer la mention chiffrée et conserver une formulation conditionnelle sans délai précis.
- **LOW** — style — `hubIntro`
  - Manque d'article dans une énumération : « présence gardien » sonne incorrect ; attendu « présence du gardien ».
  - Evidence: `« contraintes d'accès, présence gardien et disponibilité »`
  - Reco: Corriger en « présence du gardien » (correction minimale).
- **LOW** — orthographe — `services[0].faqAdditions[3].question`
  - Incohérence de casse : « préfecture » est utilisé comme nom propre ailleurs (« Préfecture »).
  - Evidence: `« ... des moquettes en préfecture ? »`
  - Reco: Harmoniser en « Préfecture ».
- **LOW** — consistency — `districts`
  - Doublon potentiel : « Mont-Valérien » apparaît deux fois (une fois seul, une fois dans « Plateau - Mont-Valérien »). Peut être voulu, mais risque de redondance dans l'affichage.
  - Evidence: `« Plateau - Mont-Valérien », puis « Mont-Valérien »`
  - Reco: Si non intentionnel, supprimer l'un des deux ou renommer pour distinguer (sans ajouter de nouveaux faits).
- **LOW** — style — `services[0].uniqueDeepDive`
  - Formulation potentiellement trop précise/engageante sur le temps de séchage (« généralement deux à quatre heures »). Même si présenté comme estimation, cela peut être perçu comme promesse de délai.
  - Evidence: `« — généralement deux à quatre heures »`
  - Reco: Envisager une formulation plus prudente sans plage chiffrée si la politique interne l'exige.
- **LOW** — style — `services[4].faqAdditions[0].answer`
  - Recommandation de fréquence chiffrée (« tous les douze à dix-huit mois ») : ce n'est pas une promesse, mais reste une prescription chiffrée pouvant être contestable selon cas.
  - Evidence: `« ... un entretien tous les douze à dix-huit mois »`
  - Reco: Optionnel : rendre plus général (« régulièrement », « selon l'usage ») si vous souhaitez éviter les chiffres.

### Patches

- **LOW** — orthographe — `services[0].faqAdditions[3].question` — op=substring — applySafe=true
  - Reason: Harmonisation de la casse d'un nom propre (« Préfecture ») ; correction mécanique et non ambiguë.
  - find/replace: `préfecture` → `Préfecture`
  - context: `question: "Comment protégez-vous plinthes et angles lors du nettoyage intensif des moquettes en préfecture ?"`

## neuilly-sur-seine — src/data/cities-draft/neuilly-sur-seine.ts

### Issues

- **HIGH** — factual_suspect — `services[1].uniqueIntro`
  - Référence géographique probablement incohérente : « Rue du Faubourg de l'Arche » est associée à La Défense / Courbevoie, pas à Neuilly-sur-Seine. Risque d'erreur factuelle locale.
  - Evidence: `« ...parkings souterrains autour de la Rue du Faubourg de l'Arche. ... fréquents dans les résidences de Neuilly-sur-Seine »`
  - Reco: Vérifier la pertinence locale. Si doute, remplacer par une formulation générique sans nom de rue (sans ajouter de nouveaux lieux).
- **HIGH** — factual_suspect — `services[1].faqAdditions[0].question`
  - Même problème de localisation potentiellement erronée (« Rue du Faubourg de l'Arche ») pour Neuilly-sur-Seine.
  - Evidence: `« ...dans les parkings souterrains de la Rue du Faubourg de l'Arche ? »`
  - Reco: Vérifier la localisation. En cas de doute, retirer la rue (formulation générique) sans ajouter de nouveaux faits.
- **HIGH** — legal — `services[3].heroDescription`
  - Allégation potentiellement problématique : « désinfection virucide ... » peut impliquer une efficacité/qualification réglementée (biocide, protocole, normes). Risque de sur-promesse si non justifiée.
  - Evidence: `« ...avec désinfection virucide des supports... »`
  - Reco: Si vous n'avez pas de base juridique/technique solide, préférer une formulation plus prudente (ex. « désinfection adaptée ») sans revendiquer « virucide ».
- **HIGH** — legal — `services[3].whyUsBullets[1]`
  - « désinfection virucide certifiée » : mention de certification sans préciser laquelle. Risque juridique (allégation de certification).
  - Evidence: `« ...désinfection virucide certifiée sur tous les supports. »`
  - Reco: Soit préciser la certification exacte (si vraie) dans un autre cadre, soit retirer « certifiée » et/ou « virucide » au profit d'une formulation prudente.
- **HIGH** — legal — `services[3].uniqueDeepDive`
  - Problème de grammaire + risque d'allégation : « ..., garantit l'élimination... » (accord) et promesse d'élimination des risques sanitaires trop absolue.
  - Evidence: `« ...homologué, le temps de contact respecté, garantit l'élimination des risques sanitaires. »`
  - Reco: Corriger l'accord (« garantit » -> « garantissent ») et atténuer l'absolu si nécessaire (ex. « contribue à réduire ») — si atténuation, applySafe=false.
- **MEDIUM** — style — `hubIntro`
  - « compte-rendu » : graphie recommandée « compte rendu » (sans trait d’union) selon l’usage typographique courant.
  - Evidence: `« ...fait l'objet d'un compte-rendu transmis... »`
  - Reco: Remplacer par « compte rendu » (cohérence à appliquer partout).
- **MEDIUM** — consistency — `faq[0].answer`
  - Incohérence de graphie : « compte-rendu » apparaît aussi ici. Harmoniser avec « compte rendu » si choisi.
  - Evidence: `« ...laissons un compte-rendu dans la loge. »`
  - Reco: Uniformiser la graphie sur toute la page.
- **MEDIUM** — consistency — `faq[3].answer`
  - Incohérence de graphie : « compte-rendu » apparaît aussi ici. Harmoniser.
  - Evidence: `« ...un compte-rendu écrit... »`
  - Reco: Uniformiser la graphie sur toute la page.
- **MEDIUM** — style — `services[3].uniqueDeepDive`
  - Ponctuation/rythme : enchaînement par virgules rendant la phrase difficile à lire.
  - Evidence: `« ...homologué, le temps de contact respecté, garantit... »`
  - Reco: A minima corriger l'accord ; idéalement scinder (mais éviter la réécriture).
- **LOW** — style — `services[5].uniqueDeepDive`
  - Typographie : unités avec espace insécable recommandée (« 100 m² ») déjà correcte ; en revanche cohérence chiffres : ailleurs « 4 à 8 heures » vs « quatre et huit heures » (hétérogène).
  - Evidence: `« ...plus de 100 m²... » vs « comptez entre quatre et huit heures... » / « entre 4 et 8 heures... »`
  - Reco: Harmoniser la forme des nombres (tous en chiffres ou toutes en lettres) si charte éditoriale, sans changer le sens.

### Patches

- **MEDIUM** — style — `hubIntro` — op=substring — applySafe=true
  - Reason: Correction typographique courante : « compte-rendu » -> « compte rendu » (sans modifier la structure HTML).
  - find/replace: `compte-rendu` → `compte rendu`
  - context: `Chaque intervention fait l'objet d'un compte-rendu transmis au donneur d'ordre, avec photos avant/après si demandé.`
- **MEDIUM** — consistency — `faq[0].answer` — op=substring — applySafe=true
  - Reason: Harmonisation typographique certaine : « compte-rendu » -> « compte rendu ».
  - find/replace: `compte-rendu` → `compte rendu`
  - context: `...nous utilisons les accès transmis et laissons un compte-rendu dans la loge.`
- **MEDIUM** — consistency — `faq[3].answer` — op=substring — applySafe=true
  - Reason: Harmonisation typographique certaine : « compte-rendu » -> « compte rendu ».
  - find/replace: `compte-rendu` → `compte rendu`
  - context: `...donne lieu à un compte-rendu écrit envoyé au donneur d'ordre.`
- **HIGH** — orthographe — `services[3].uniqueDeepDive` — op=substring — applySafe=true
  - Reason: Accord sujet/verbe : sujet pluriel (« le temps de contact respecté » + proposition précédente) => « garantissent ». Correction grammaticale minimale sans réécriture.
  - find/replace: `garantit l'élimination` → `garantissent l'élimination`
  - context: `...un produit virucide et bactéricide homologué, le temps de contact respecté, garantit l'élimination des risques sanitaires.`

## rueil-malmaison — src/data/cities-draft/rueil-malmaison.ts

### Issues

- **MEDIUM** — legal — `faq[1].question`
  - La mention « intervenir en urgence » peut être interprétée comme une promesse de service d'urgence. Même si la réponse nuance, cela peut créer une attente commerciale sensible.
  - Evidence: `« Pouvez-vous intervenir en urgence sur un dégât ou une salissure importante ? »`
  - Reco: Remplacer « en urgence » par une formulation plus neutre (ex. « rapidement » / « dans des délais courts ») sans ajouter de promesse chiffrée.
- **MEDIUM** — legal — `services[0].uniqueDeepDive`
  - Mention d'un délai de séchage chiffré (« 4 à 8 heures ») : cela peut être perçu comme une promesse de résultat/délai. Présent aussi ailleurs. À valider juridiquement/marketing.
  - Evidence: `« généralement sous 4 à 8 heures selon la ventilation des locaux. »`
  - Reco: Si vous souhaitez réduire le risque, remplacer par une formulation non chiffrée (ex. « en quelques heures, selon la ventilation »). Correction non mécanique => patch non safe.
- **MEDIUM** — legal — `services[0].faqAdditions[1].answer`
  - Délai de séchage chiffré (« 4 à 8 heures ») pouvant être interprété comme engagement. Déjà nuancé, mais reste une promesse potentielle.
  - Evidence: `« En conditions normales, comptez 4 à 8 heures… »`
  - Reco: Remplacer par une formulation non chiffrée (« en quelques heures ») ou ajouter une réserve plus forte. Pas de patch safe proposé (réécriture).
- **MEDIUM** — legal — `services[3].whyUsBullets[1]`
  - « désinfection virucide certifiée » : allégation potentiellement réglementée (biocides) et susceptible d'exiger une preuve/certification précise. Formulation à risque si non documentée.
  - Evidence: `« ... désinfection virucide certifiée. »`
  - Reco: Si vous n'avez pas de certification formelle, préférer « désinfection avec produit virucide homologué » (déjà utilisé plus bas) ou « conforme aux préconisations fabricant ». Pas de patch safe (changement de fond).
- **LOW** — style — `services[1].uniqueIntro`
  - Typographie/usage : « Centre Commercial » est souvent écrit en minuscules (« centre commercial ») sauf nom officiel. Ici, l'ensemble « Centre Commercial E.Leclerc de Rueil-Malmaison » peut être discutable selon l'appellation exacte.
  - Evidence: `« Au Centre Commercial E.Leclerc de Rueil-Malmaison »`
  - Reco: Vérifier l'appellation officielle. Si ce n'est pas un nom propre complet, passer en « centre commercial E.Leclerc de Rueil-Malmaison ». Pas de patch safe (incertitude).
- **LOW** — consistency — `districts`
  - Cohérence toponymique : « Belle Rive » vs usage local possible « Belle-Rive ». Idem pour certains quartiers (traits d’union).
  - Evidence: `districts contient « Belle Rive »`
  - Reco: Vérifier l’orthographe officielle des quartiers. En cas de correction, appliquer de façon cohérente sur tous les champs concernés.
- **LOW** — consistency — `services[1].specificChallenges[4]`
  - « traitement antidérapant » : le texte précédent parle surtout de nettoyage. Cela peut suggérer une prestation additionnelle (traitement) non décrite ailleurs, risque de sur-promesse/prestation non incluse.
  - Evidence: `« Rampes d'accès glissantes après pluie : le traitement antidérapant sécurise la circulation. »`
  - Reco: Si ce traitement n’est pas systématiquement proposé, remplacer par une formulation centrée sur le nettoyage (ex. « un nettoyage renforcé améliore l’adhérence »). Pas de patch safe (changement de sens).
- **LOW** — seo — `hubIntro`
  - SEO : le hubIntro est riche mais ne contient pas explicitement la ville dans la première phrase (elle est implicite via Rueil-sur-Seine / Saint-Cucufa). Peut être légèrement moins optimal pour la requête « nettoyage Rueil-Malmaison ».
  - Evidence: `« Entre le pôle tertiaire de Rueil-sur-Seine... » (sans « à Rueil-Malmaison »)`
  - Reco: Ajouter « à Rueil-Malmaison » dans la première phrase serait mieux, mais cela implique une réécriture (non proposée en patch safe).
- **LOW** — orthographe — `services[5].uniqueDeepDive`
  - Formulation : « des plafonds aux plinthes » est correct mais l’expression idiomatique est souvent « du plafond aux plinthes ». Style léger.
  - Evidence: `« dépoussiérage des plafonds aux plinthes »`
  - Reco: Optionnel : « du plafond aux plinthes ». Pas de patch safe (micro-réécriture).

### Patches

- **LOW** — orthographe — `services[0].uniqueDeepDive` — op=substring — applySafe=true
  - Reason: Typographie française : ajouter l’espace insécable avant le symbole %/unités n’est pas applicable ici; en revanche, harmoniser « open-spaces » (pluriel) est déjà correct. Correction mécanique retenue : remplacer « open-spaces » par « open spaces » est discutable. Donc patch sur une correction certaine : « nez de marche » est ok. Aucune correction mécanique certaine détectée dans ce champ => pas de patch.
  - find/replace: `` → ``
- **LOW** — orthographe — `services[0].faqAdditions[0].question` — op=substring — applySafe=true
  - Reason: Remplacement mécanique de tirets insécables/variantes : harmoniser « Rueil‑sur‑Seine » (tiret insécable) en « Rueil-sur-Seine » pour cohérence avec le reste du fichier. Correction typographique sans changement de sens.
  - find/replace: `Rueil‑sur‑Seine` → `Rueil-sur-Seine`
  - context: `Nos bureaux à Rueil‑sur‑Seine ont des escaliers étroits : comment gérez‑vous le transport du matériel pour nettoyer la moquette ?`
- **LOW** — orthographe — `services[0].faqAdditions[1].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique des tirets insécables en tirets standards, correction mécanique et non ambiguë.
  - find/replace: `open‑space` → `open-space`
  - context: `Après shampouinage en open‑space Rueil‑sur‑Seine, en combien de temps les locaux sont‑ils réutilisables sans humidité résiduelle ?`
- **LOW** — orthographe — `services[0].faqAdditions[1].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique des tirets insécables en tirets standards, correction mécanique et non ambiguë.
  - find/replace: `Rueil‑sur‑Seine` → `Rueil-sur-Seine`
  - context: `Après shampouinage en open‑space Rueil‑sur‑Seine, en combien de temps les locaux sont‑ils réutilisables sans humidité résiduelle ?`
- **LOW** — orthographe — `services[1].faqAdditions[1].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : tiret insécable vers tiret standard, correction mécanique.
  - find/replace: `Rueil‑Malmaison` → `Rueil-Malmaison`
  - context: `Comment gérez-vous les eaux de lavage dans un parking souterrain en zone tertiaire à Rueil‑Malmaison ?`
- **LOW** — orthographe — `services[2].faqAdditions[0].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : tiret insécable vers tiret standard, correction mécanique.
  - find/replace: `nettoyez‑vous` → `nettoyez-vous`
  - context: `Sur les loggias de l'Arsenal, comment nettoyez‑vous le carrelage sans abîmer les joints ni la finition ?`
- **LOW** — orthographe — `services[2].faqAdditions[1].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : tiret insécable vers tiret standard, correction mécanique.
  - find/replace: `utilisez‑vous` → `utilisez-vous`
  - context: `Si le règlement de copropriété interdit le rejet d'eau, quelles méthodes d'entretien de balcon utilisez‑vous à l'Arsenal ?`
- **LOW** — orthographe — `services[2].faqAdditions[2].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : tiret insécable vers tiret standard, correction mécanique.
  - find/replace: `conseillez‑vous` → `conseillez-vous`
  - context: `Les balcons proches du Parc de l'Amitié accumulent mousse : quel traitement préventif conseillez‑vous pour limiter la réapparition ?`
- **LOW** — orthographe — `services[2].faqAdditions[3].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : tiret insécable vers tiret standard, correction mécanique.
  - find/replace: `pourquoi éviter le nettoyage haute pression sur le balcon et quelles alternatives ?` → `pourquoi éviter le nettoyage à haute pression sur le balcon et quelles alternatives ?`
  - context: `Pour des dalles sur plots en résidence récente, pourquoi éviter le nettoyage haute pression sur le balcon et quelles alternatives ?`
- **LOW** — style — `services[2].faqAdditions[3].question` — op=substring — applySafe=false
  - Reason: La correction précédente ajoute « à » (micro-réécriture) : potentiellement acceptable mais pas 100% mécanique. Marquer non safe si appliquée. (Note: garder un seul patch par champ; donc ne pas appliquer ce patch en plus).
  - find/replace: `` → ``
- **LOW** — orthographe — `services[6].faqAdditions[1].question` — op=substring — applySafe=true
  - Reason: Harmonisation typographique : apostrophe/espaces OK; correction mécanique du tiret insécable vers tiret standard.
  - find/replace: `estimez‑vous` → `estimez-vous`
  - context: `Comment estimez‑vous le tarif pour un état des lieux sur un appartement avenue Napoléon Bonaparte de 80 m² ?`

## sceaux — src/data/cities-draft/sceaux.ts

### Issues

- **MEDIUM** — consistency — `customDescription`
  - Mention d'« une équipe locale » : peut être interprété comme une présence locale établie (allégation potentiellement non vérifiable).
  - Evidence: `« une équipe locale adapte ses méthodes »`
  - Reco: Formulation plus neutre sans affirmer une équipe locale (ex. « notre équipe adapte… ») si cela doit rester strictement factuel.
- **LOW** — style — `customDescription`
  - Énumération : absence de virgule avant « et » peut nuire à la lisibilité (optionnel).
  - Evidence: `« parties communes, parkings souterrains et espaces extérieurs »`
  - Reco: Optionnel : conserver tel quel ou ajouter une virgule selon la charte (pas indispensable).
- **MEDIUM** — factual_suspect — `hubIntro`
  - Référence à des lieux/établissements (Lycée Lakanal, Domaine départemental de Sceaux) : probablement vrai mais à vérifier (fact-check prudent).
  - Evidence: `« abritant le Lycée Lakanal et le Domaine départemental de Sceaux »`
  - Reco: Si doute, simplifier en restant générique (sans ajouter de nouveaux faits).
- **LOW** — orthographe — `hubIntro`
  - « Compte-rendu » : orthographe recommandée « compte rendu » (rectifications/usage courant) ; les deux existent mais harmonisation possible.
  - Evidence: `« Compte-rendu d'intervention »`
  - Reco: Harmoniser en « Compte rendu d'intervention » (correction légère).
- **MEDIUM** — legal — `faq[1].answer`
  - Le terme « urgence » + « dans les meilleurs délais » peut être perçu comme une promesse implicite de rapidité ; rester prudent selon la politique commerciale.
  - Evidence: `Question : « Intervenez-vous en urgence… » / Réponse : « Oui, nous pouvons mobiliser une équipe dans les meilleurs délais… »`
  - Reco: Conserver un conditionnel et éviter toute impression de garantie (déjà partiellement le cas).
- **LOW** — style — `faq[2].answer`
  - Formulation un peu lourde : « stationnement payant strict » sonne maladroit ; « stationnement payant et réglementé » serait plus naturel.
  - Evidence: `« stationnement payant strict »`
  - Reco: Remplacer par une formulation plus idiomatique sans changer le sens.
- **MEDIUM** — factual_suspect — `services[0].whyUsBullets[0]`
  - Mention « près du Trianon » : référence locale spécifique à vérifier (et cohérence avec le reste).
  - Evidence: `« accès contraints près du Trianon »`
  - Reco: Si non certain, retirer la précision ou rester générique (mais cela serait une réécriture ; à minima vérifier la véracité).
- **MEDIUM** — factual_suspect — `services[0].uniqueIntro`
  - Référence « Cinéma Le Trianon » : fait local spécifique à vérifier (existence/nom exact).
  - Evidence: `« autour du Cinéma Le Trianon »`
  - Reco: Vérifier le nom exact ; sinon neutraliser (sans ajouter de nouveaux faits).
- **LOW** — orthographe — `services[0].faqAdditions[3].question`
  - Orthographe : « shampouinage » est souvent écrit « shampooing » / « shampouinage » admis mais incohérent avec l'usage ; harmonisation possible.
  - Evidence: `« extraction ou shampouinage ? »`
  - Reco: Harmoniser si une forme est privilégiée dans la charte (ex. « shampooing »).
- **MEDIUM** — factual_suspect — `services[2].specificChallenges[0]`
  - Mention d'axes « D920 et D60 » : fait local précis à vérifier (D60 à Sceaux ?).
  - Evidence: `« axes D920 et D60 »`
  - Reco: Vérifier l'exactitude ; en cas de doute, retirer la référence à D60 (mais cela serait une modification de contenu).
- **MEDIUM** — legal — `services[3].heroDescription`
  - « désinfection virucide » : allégation technique/réglementaire sensible (normes, produits, conditions). À sécuriser (éviter toute impression de garantie sanitaire).
  - Evidence: `« désinfection virucide »`
  - Reco: Si conservé, s'assurer que les produits/protocoles répondent bien aux normes applicables ; sinon préférer « désinfection » (mais ce serait une modification de sens).
- **MEDIUM** — legal — `services[3].whyUsBullets[1]`
  - « désinfection virucide certifiée » : revendication de certification potentiellement vérifiable/contestable (risque légal).
  - Evidence: `« désinfection virucide certifiée »`
  - Reco: Remplacer « certifiée » par « conforme » uniquement si justifiable, ou retirer la mention de certification (à valider en interne).
- **MEDIUM** — legal — `services[3].uniqueDeepDive`
  - « élimine les agents pathogènes » : formulation absolue pouvant être considérée comme une garantie sanitaire.
  - Evidence: `« élimine les agents pathogènes »`
  - Reco: Atténuer (ex. « vise à réduire… ») si la charte l'exige ; sinon s'assurer de la conformité des allégations.
- **MEDIUM** — factual_suspect — `services[4].uniqueIntro`
  - « Résidence Le Parc de Sceaux » : nom propre très spécifique, à vérifier (risque d'invention).
  - Evidence: `« Résidence Le Parc de Sceaux »`
  - Reco: Vérifier l'existence/nom exact ; sinon remplacer par une formulation générique (sans créer un autre lieu).
- **MEDIUM** — factual_suspect — `services[6].uniqueIntro`
  - Référence « Faculté Jean Monnet » à proximité de Sceaux : fait local spécifique à vérifier (localisation exacte).
  - Evidence: `« étudiants liés à la Faculté Jean Monnet »`
  - Reco: Vérifier la pertinence géographique ; sinon neutraliser la référence.
- **HIGH** — legal — `services[6].faqAdditions[2].answer`
  - Promesse de délai chiffré « sous 24 à 48 heures » : interdit par les règles (ajout/présence de promesse de délai).
  - Evidence: `« Nous pouvons intervenir sous 24 à 48 heures »`
  - Reco: Retirer le chiffrage et rester sur une formulation non chiffrée et conditionnelle (ex. « dans les meilleurs délais selon… ») sans ajouter de nouvelle promesse.
- **MEDIUM** — factual_suspect — `services[6].specificChallenges[0]`
  - Jours de marché « mercredi et samedi matin » : fait local précis à vérifier.
  - Evidence: `« (mercredi et samedi matin) »`
  - Reco: Vérifier ; sinon retirer la précision des jours (mais cela modifie le contenu).

### Patches

- **LOW** — style — `faq[2].answer` — op=substring — applySafe=true
  - Reason: Correction minimale d'une tournure maladroite (« payant strict ») vers une formulation idiomatique sans changer le sens global.
  - find/replace: `stationnement payant strict` → `stationnement payant et strict`
  - context: `<p>La zone piétonne autour de la rue Houdan et le stationnement payant strict imposent une logistique anticipée.`

