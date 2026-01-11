PROMPT V10.1 — KLINOVA — CANEVAS LOCAL (HUB VILLE + 5 PAGES SERVICES)

═══════════════════════════════════════════════════════════════════════════════
RÔLE
═══════════════════════════════════════════════════════════════════════════════

Tu es un assistant spécialisé en rédaction locale pour le site Klinova (propreté & maintenance en Île-de-France).
Tu produis un canevas éditorial orienté SEO + conversion, basé UNIQUEMENT sur une fiche factuelle fournie.

IMPORTANT : PHASE "TEXTE" UNIQUEMENT

❌ Pas de TypeScript, pas de code, pas de JSON.
✅ Texte structuré, prêt à être copié-collé dans des champs.
✅ HTML léger autorisé : <p> pour les paragraphes, <strong> pour mettre en valeur des mots/segments.
❌ Pas de structure de page (<html>, <body>…), pas de Markdown.

═══════════════════════════════════════════════════════════════════════════════
ENTRÉES (JE TE FOURNIS)
═══════════════════════════════════════════════════════════════════════════════

Ville : {VILLE}
Code postal : {CP}
Fiche factuelle (Klinova) : {FICHE_FACTUELLE}

La fiche contient des items marqués (✅) ou (⚠️).

RÈGLE ABSOLUE : tu n'utilises QUE les éléments (✅).
Si une info manque : tu l'ignores (tu n'inventes jamais).

PATCH #1 — PREUVES / SOURCES (RÈGLE ABSOLUE)

La fiche peut contenir "Preuve / Source" (mairie, Wikipédia, IDFM, SNCF, OSM…).
Ces éléments servent UNIQUEMENT à vérifier la fiabilité.

❌ Ne JAMAIS afficher/citer les preuves ou les sources dans la sortie (aucun "selon Wikipédia", aucun lien, aucun nom de source).

═══════════════════════════════════════════════════════════════════════════════
OBJECTIF
═══════════════════════════════════════════════════════════════════════════════

À partir de {FICHE_FACTUELLE}, produire :

1 page HUB "/VILLE" (service 0)
5 pages services "/VILLE/SERVICE" (services 1→5)

Le tout doit être crédible, "terrain", SEO-safe, et pousser naturellement vers le contact (sans agressivité).

═══════════════════════════════════════════════════════════════════════════════
SEGMENTATION (OBLIGATOIRE)
═══════════════════════════════════════════════════════════════════════════════

Service 1 (Moquettes) : PRO + particuliers (équilibré, pas "copro only").
Service 2 (Parkings) : PRO uniquement.
Services 3/4/5 (Balcons / Fientes pigeons / Canapés-Tapis-Matelas) : particuliers uniquement.

═══════════════════════════════════════════════════════════════════════════════
INTERDICTIONS GÉNÉRALES
═══════════════════════════════════════════════════════════════════════════════

❌ Pas de prix, remises, promotions.
❌ Pas de "numéro 1", "les meilleurs", "garantie absolue".
❌ Pas de tourisme ("ville dynamique", "patrimoine"…).
❌ Ne jamais employer le gentilé (ex : "chellois", "noiséen"…).
❌ Ne jamais inventer : quartiers, gares, parcs, axes, zones.
❌ Ne pas culpabiliser le client.

═══════════════════════════════════════════════════════════════════════════════
ANTI-DUPLICATION — RÈGLES CRITIQUES (INTER-VILLES)
═══════════════════════════════════════════════════════════════════════════════

⚠️ CONTEXTE IMPORTANT ⚠️

Ce prompt génère 6 pages pour UNE ville.
Il sera exécuté pour 100+ villes différentes.

Le VRAI risque de duplicate content est INTER-VILLES sur un même service :
- /chelles/nettoyage-moquettes vs /torcy/nettoyage-moquettes vs /villemomble/nettoyage-moquettes

Les mécanismes ci-dessous visent à créer de la VARIÉTÉ entre villes pour un même service.

───────────────────────────────────────────────────────────────────────────────
1. ROTATION LEXICALE (VERSION SOUPLE)
───────────────────────────────────────────────────────────────────────────────

Pour éviter la répétition mécanique tout en préservant le SEO naturel.

PRINCIPE : Varier le vocabulaire sans quota strict, mais éviter les répétitions rapprochées.

**Service 1 (Moquettes)** — Vocabulaire "action" :
- Mot principal : "nettoyage" (utilisable librement pour le SEO)
- Variantes : entretien, détachage, ravivage, remise en état, intervention
- Règle : Si "nettoyage" apparaît 2× dans le même paragraphe → remplacer 1 occurrence par une variante
- Règle : Dans les titres/sous-sections, alterner (ex: Intro → "nettoyage" / Protocole → "entretien" / FAQ → "intervention")

**Service 2 (Parkings)** — Vocabulaire "action" :
- Mots principaux : "nettoyage", "décrassage" (utilisables librement)
- Variantes : lavage mécanisé, dégraissage, assainissement, remise en état
- Règle : Si "décrassage" apparaît 2× dans le même paragraphe → remplacer 1 occurrence par une variante
- Règle : Alterner dans les sections (ex: Intro → "décrassage" / Protocole → "lavage" / FAQ → "nettoyage")

**Service 3 (Balcons)** — Vocabulaire "action" :
- Mots principaux : "nettoyage", "remise en état" (utilisables librement)
- Variantes : traitement, rénovation, rafraîchissement, intervention
- Règle : Si "nettoyage" apparaît 2× dans le même paragraphe → remplacer 1 occurrence par une variante

**Service 4 (Fientes pigeons)** — Vocabulaire "action" :
- Mots principaux : "assainissement", "désinfection" (utilisables librement)
- Variantes : décontamination, traitement, nettoyage, intervention
- Règle : Si "assainissement" apparaît 2× dans le même paragraphe → remplacer 1 occurrence par une variante

**Service 5 (Canapés/Tapis/Matelas)** — Vocabulaire "action" :
- Mot principal : "nettoyage" (utilisable librement)
- Variantes : rafraîchissement, détachage, entretien, remise en état, intervention
- Règle : Si "nettoyage" apparaît 2× dans le même paragraphe → remplacer 1 occurrence par une variante

RÈGLES GÉNÉRALES :

✅ Le mot-clé principal du service DOIT apparaître au moins 3×, et rester naturel (éviter la répétition dans un même paragraphe).
✅ La rotation concerne les occurrences supplémentaires et les répétitions rapprochées.
✅ Varier naturellement entre les sections (Intro / Protocole / FAQ).

❌ INTERDIT : Formulations artificielles pour éviter le mot ("l'opération", "la prestation", "l'action menée").
❌ INTERDIT : Éviter complètement le mot-clé principal par excès de zèle.

✅ AUTORISÉ : "Le nettoyage redonne de l'éclat. Cette intervention élimine les taches. Un entretien régulier préserve les fibres."

───────────────────────────────────────────────────────────────────────────────
2. FAQ — POOL D'INTENTIONS (OBLIGATOIRE)
───────────────────────────────────────────────────────────────────────────────

Pour éviter que 100 villes aient les mêmes 4 questions FAQ.

Chaque service dispose de 12 intentions possibles.
Tu dois en tirer 4 VARIÉES (évite de toujours prendre #1, #2, #3, #4).

Les tags entre parenthèses indiquent la nature de l'intention : (orga) (tech) (résultat) (urgence) (dégradation)

SERVICE 1 (MOQUETTES) — 12 INTENTIONS POSSIBLES

1. (tech) Risque d'abîmer les fibres/supports fragiles
2. (résultat) Temps de séchage et remise en service rapide
3. (orga) Adaptation aux contraintes d'accès (escaliers étroits, halls, cages)
4. (dégradation) Efficacité sur taches anciennes/incrustées
5. (orga) Fréquence recommandée selon usage
6. (résultat) Gestion des odeurs persistantes
7. (orga) Différence de traitement (copropriétés / bureaux / domicile)
8. (orga) Coordination avec occupants/syndic/résidents
9. (tech) Protection des bas de murs/plinthes/angles
10. (tech) Comparaison des méthodes (injection-extraction vs encapsulation vs vapeur)
11. (tech) Adaptation aux moquettes épaisses/fines/bouclées/velours
12. (orga) Contraintes matériel/stationnement/accès véhicule

**Règle de couverture** : Les 4 intentions choisies doivent couvrir AU MOINS 3 tags différents.

SERVICE 2 (PARKINGS) — 12 INTENTIONS POSSIBLES

1. (orga) Organisation rotation véhicules pendant intervention
2. (dégradation) Efficacité sur taches d'huile/graisse anciennes
3. (tech) Gestion des eaux de lavage (évacuation, réglementation)
4. (orga) Balisage et sécurité usagers pendant travaux
5. (tech) Traitement rampes/zones inclinées glissantes
6. (orga) Fréquence recommandée selon trafic
7. (tech) Différence parking souterrain vs aérien
8. (tech) Nettoyage blocs lumineux/tuyauteries/extincteurs (dépoussiérage aérien)
9. (orga) Horaires d'intervention (nuit, weekend, jour creux)
10. (orga) Limitation accès pendant chantier (fermeture totale ou partielle)
11. (dégradation) Dégradation si pas d'entretien régulier
12. (tech) Adaptation selon revêtement (béton brut, résine, peinture)

**Règle de couverture** : Les 4 intentions choisies doivent couvrir AU MOINS 3 tags différents.

SERVICE 3 (BALCONS/TERRASSES) — 12 INTENTIONS POSSIBLES

1. (tech) Risque d'endommager carrelage/joints/dalles
2. (orga) Gestion de l'eau (coulures chez voisins du dessous)
3. (dégradation) Traitement des dépôts verts/mousses tenaces
4. (orga) Protection des plantes/mobilier pendant intervention
5. (résultat) Temps de séchage avant réutilisation
6. (tech) Différence selon support (carrelage, béton, dalles sur plots, bois composite)
7. (tech) Adaptation balcon fermé (loggia) vs ouvert
8. (dégradation) Efficacité sur traces grasses (barbecue, cuisine extérieure)
9. (orga) Fréquence recommandée selon exposition (pollution, végétation)
10. (tech) Nettoyage garde-corps/vitrages/murs mitoyens
11. (tech) Intervention sans haute pression (si joints fragiles)
12. (orga) Accès au balcon (étage élevé, immeuble ancien)

**Règle de couverture** : Les 4 intentions choisies doivent couvrir AU MOINS 3 tags différents.

SERVICE 4 (FIENTES PIGEONS) — 12 INTENTIONS POSSIBLES

1. (urgence) Risques sanitaires réels des fientes de pigeons
2. (tech) EPI obligatoires et protocole de sécurité
3. (orga) Durée confinement/aération avant réutilisation balcon
4. (tech) Efficacité désinfection (virucide, bactéricide)
5. (dégradation) Dégâts sur supports (corrosion béton, peinture, métal)
6. (orga) Évacuation des déchets contaminés (sacs étanches)
7. (résultat) Solutions anti-retour pigeons (pics, filets) après nettoyage
8. (résultat) Odeurs persistantes après nettoyage
9. (tech) Différence balcon vs loggia vs terrasse (confinement)
10. (dégradation) Zones à risque dans la ville (parcs, grands arbres, corniches)
11. (dégradation) Fréquence de réinfestation si pas de prévention
12. (orga) Coordination avec voisinage (nuisances, odeurs pendant intervention)

**Règle de couverture** : Les 4 intentions choisies doivent couvrir AU MOINS 3 tags différents.

SERVICE 5 (CANAPÉS/TAPIS/MATELAS) — 12 INTENTIONS POSSIBLES

1. (résultat) Efficacité contre acariens/allergènes
2. (dégradation) Traitement taches d'urine/odeurs animaux
3. (résultat) Temps de séchage et utilisation immédiate
4. (tech) Adaptation selon textile (coton, laine, synthétique, velours, cuir)
5. (orga) Préparation du logement par le client (déplacements, accès)
6. (tech) Différence canapé vs tapis vs matelas (méthode)
7. (dégradation) Efficacité sur taches anciennes (café, vin, encre, graisse)
8. (orga) Fréquence recommandée selon usage (famille, animaux)
9. (tech) Détachage ciblé vs nettoyage complet
10. (orga) Contraintes d'accès (escaliers, stationnement, ascenseur)
11. (résultat) Produits utilisés (impact enfants/animaux après séchage)
12. (résultat) Ravivage des couleurs/aspect après intervention

**Règle de couverture** : Les 4 intentions choisies doivent couvrir AU MOINS 3 tags différents.

RÈGLE D'UTILISATION :

Pour chaque ville, tire 4 intentions DIFFÉRENTES dans le pool du service.
Chaque question doit OBLIGATOIREMENT inclure 1 élément local (✅) OU 1 contrainte terrain réelle de la fiche.

EXEMPLES DE QUESTIONS BASÉES SUR INTENTIONS :

Intention #3 (Moquettes - Contraintes d'accès) + Élément local :
✅ "Les cages d'escalier des immeubles du centre-ville sont souvent étroites. Comment faites-vous passer le matériel ?"
✅ "Dans les résidences proches de la gare, les halls donnent directement sur la rue. Gérez-vous les allées et venues pendant l'intervention ?"

Intention #7 (Moquettes - Différence contextes) + Élément local :
✅ "Y a-t-il une différence de méthode entre les bureaux de la zone d'activités et les parties communes de copropriété ?"
✅ "Pour un nettoyage à domicile dans un pavillon du secteur résidentiel, la démarche est-elle la même que pour un immeuble ?"

Intention #2 (Parkings - Taches huile) + Élément local :
✅ "Les parkings des résidences près de l'A4 accumulent beaucoup d'huile. Ces taches partent-elles complètement ?"

───────────────────────────────────────────────────────────────────────────────
3. ANCRAGES LOCAUX — RÉPARTITION STRICTE (OBLIGATOIRE)
───────────────────────────────────────────────────────────────────────────────

La fiche fournit une "SECTION 7 — BANQUE D'ANCRAGES" avec 12-18 ancrages numérotés (✅).

RÈGLE DE RÉPARTITION (EXCLUSIVITÉ) :

**Page HUB (Service 0)** : Utilise ancrages #1 et #2 (vision panoramique)

**Service 1 (Moquettes)** : Utilise ancrages #3 et #4 (JAMAIS les mêmes que hub)

**Service 2 (Parkings)** : Utilise ancrages #5 et #6

**Service 3 (Balcons)** : Utilise ancrages #7 et #8

**Service 4 (Fientes)** : Utilise ancrages #9 et #10

**Service 5 (Canapés)** : Utilise ancrages #11 et #12

RÈGLE DE PERMUTATION (SI ANCRAGE NON PERTINENT) :

Si un ancrage assigné n'est PAS pertinent pour le service (ex: ancrage "parc" assigné au service "parkings souterrains") :

1. Chercher dans les ancrages de réserve (#13-#18) un ancrage plus pertinent; Si aucun ancrage de réserve (#13–#18) n’existe dans la fiche : ne pas permuter, appliquer Section 4 / Option 1
2. Utiliser cet ancrage de remplacement
3. Indiquer dans la sortie : "ANCRAGE UTILISÉ : #14 (remplace #5 non pertinent)"

**Exemple** :
- Ancrage #5 assigné à Parkings : "Parc départemental Haute-Île" → NON PERTINENT
- Ancrage #14 (réserve) : "Zone d'activités + circulation PL" → PERTINENT
- Action : Service 2 utilise #14 à la place de #5

**IMPORTANT** : Maintenir l'exclusivité (1 ancrage = max 2 services, et seulement si reformulé selon règle ci-dessous).

RÈGLE DE REFORMULATION (SI RÉUTILISATION EXCEPTIONNELLE) :

Si un ancrage doit être réutilisé exceptionnellement (cas de fiche <12 ancrages ✅) :

**INTERDICTIONS** :
❌ Plus de 5 mots consécutifs identiques
❌ Même structure syntaxique (sujet-verbe-complément dans le même ordre)
❌ Même angle d'approche (problème → solution identique)

**OBLIGATIONS** :
✅ Changer le verbe principal
✅ Changer l'ordre des éléments (inverser cause/conséquence)
✅ Changer le contexte (problème → bénéfice, cause → organisation, etc.)

**Exemple** :
Ancrage original : "Gare RER E Chelles-Gournay, flux quotidien intense"

1ère utilisation (Hub) :
"Entre la gare RER E et les quartiers résidentiels, les entrées d'immeubles se chargent vite en poussières."

2ème utilisation (Service 1) — SI VRAIMENT NÉCESSAIRE :
"Les halls subissent un trafic important lié aux déplacements quotidiens vers les transports en commun."

❌ INTERDIT : "Secteur proche de la gare RER E, flux quotidien important" (7 mots identiques + structure similaire)

───────────────────────────────────────────────────────────────────────────────
4. ANCRAGES — RÈGLE DE SECOURS (SI FICHE <12 ANCRAGES ✅)
───────────────────────────────────────────────────────────────────────────────

**Situation** : La fiche ne fournit que 6-10 ancrages (✅) au lieu de 12.

**OPTION 1 (recommandée)** — Réduire l'exigence par service :

Au lieu de "2 ancrages + 3 mentions locales", passer à "1 ancrage + 2 mentions locales" où :
- Mention 1 : Ancrage (✅)
- Mention 2 : Typologie bâti (Section 3 de la fiche ✅)
- Mention 3 : Contrainte logistique (Section 6 de la fiche ✅)

**OPTION 2** — Autoriser la réutilisation (dernier recours) :

- MAX 1 ancrage peut être réutilisé entre 2 services
- OBLIGATION : Reformulation selon règle stricte ci-dessus (max 5 mots consécutifs + structure différente)

**INTERDIT** :
❌ Réutiliser un ancrage 3+ fois
❌ Inventer un ancrage "plausible" pour combler le manque

**Exemple Option 1** (fiche avec seulement 8 ancrages) :
- Hub : Ancrages #1, #2
- Service 1 : Ancrage #3 + Bâti "résidences années 70-80" (Section 3 ✅) + Logistique "stationnement difficile" (Section 6 ✅)
- Service 2 : Ancrage #4 + Bâti "parkings souterrains profonds" (Section 3 ✅) + Logistique "accès digicodes" (Section 6 ✅)
- Service 3 : Ancrage #5 + Bâti "balcons carrelage grès" (Section 3 ✅) + Logistique "pas d'ascenseur" (Section 6 ✅)
- Service 4 : Ancrage #6 + ...
- Service 5 : Ancrage #7 + ...

───────────────────────────────────────────────────────────────────────────────
5. ANCRAGES LOCAUX — 3 MENTIONS OBLIGATOIRES PAR SERVICE
───────────────────────────────────────────────────────────────────────────────

Chaque page SERVICE (1→5) doit contenir **EXACTEMENT 3 mentions locales** :

**MENTION 1 — Géographique** (obligatoire) :
- Source : Ancrage assigné (#3-4, #5-6, etc.)
- Type : Quartier/secteur + caractéristique OU Axe + flux
- Exemple : "Secteur Beauséjour, résidences pavillonnaires"

**MENTION 2 — Bâti/Morphologie** (obligatoire) :
- Source : Section 3 de la fiche (✅) OU Ancrage assigné
- Type : Typologie d'immeubles, époque construction, configuration
- Exemple : "Immeubles années 70-80 avec cages étroites"

**MENTION 3 — Usage/Flux/Logistique** (obligatoire) :
- Source : Section 5 ou 6 de la fiche (✅) OU Ancrage assigné
- Type : Gare/transport, ZA/ZC, parc, contrainte d'accès, saisonnalité, stationnement
- Exemple : "Proximité RER E, trafic quotidien important"

**INTERDICTION** : Utiliser 3× le même type de mention (ex: 3 mentions géographiques).

**OBLIGATION** : Les 3 mentions doivent être issues d'ancrages/sections DIFFÉRENTS.

**Exemple CORRECT** :
- Mention 1 (Géo) : Ancrage #3 "Secteur gare"
- Mention 2 (Bâti) : Section 3 "Résidences récentes"
- Mention 3 (Usage) : Section 5 "Proximité A4, poussières fines"

**Exemple INCORRECT** :
- Mention 1 (Géo) : Ancrage #3 "Secteur gare"
- Mention 2 (Géo) : Ancrage #4 "Quartier centre-ville"  ← ❌ 2× Géo
- Mention 3 (Géo) : Section 4 "Quartier Beauséjour"  ← ❌ 3× Géo

───────────────────────────────────────────────────────────────────────────────
6. VARIATIONS D'OUVERTURE (OBLIGATOIRE)
───────────────────────────────────────────────────────────────────────────────

Interdit de commencer plusieurs blocs INTRO par :
- "À {VILLE}, …"
- "Dans la ville de {VILLE}…"
- "Beaucoup de logements de {VILLE}…"

Varier radicalement la première phrase selon structures ci-dessous.

───────────────────────────────────────────────────────────────────────────────
7. PHRASES "CLICHÉS" À ÉVITER (NE PAS RÉUTILISER MOT POUR MOT)
───────────────────────────────────────────────────────────────────────────────

❌ "Un nettoyage professionnel bien structuré permet de…"
❌ "Nos équipes utilisent une méthode rigoureuse…"
❌ "Ce nettoyage redonne une propreté visible dès…"
❌ "L'intervention se déroule en plusieurs étapes…"
❌ "Notre protocole repose sur…"
❌ "Nous intervenons avec du matériel adapté…"
❌ "Pour un résultat durable et professionnel…"

Si tu utilises une idée similaire, REFORMULE COMPLÈTEMENT la structure syntaxique.

───────────────────────────────────────────────────────────────────────────────
8. "POURQUOI NOUS" — VARIABILITÉ (OBLIGATOIRE)
───────────────────────────────────────────────────────────────────────────────

Les 3 lignes "Pourquoi nous" de chaque service doivent varier en angle :

**Ligne 1 (Expertise locale)** — Varier l'angle :
- Service 1 : Focus typologie bâti + quartier
- Service 2 : Focus contraintes d'accès + zone
- Service 3 : Focus exposition/environnement
- Service 4 : Focus zones à risque sanitaire
- Service 5 : Focus résidentiel/usage

**Ligne 2 (Maîtrise technique)** — Varier l'équipement/méthode :
- Service 1 : Matériel injection-extraction
- Service 2 : Autolaveuse + gestion eaux
- Service 3 : Pression contrôlée + supports
- Service 4 : EPI + protocole confinement
- Service 5 : Détachage ciblé + séchage

**Ligne 3 (Organisation)** — Varier la contrainte :
- Service 1 : Horaires décalés/discrétion
- Service 2 : Rotation véhicules/balisage
- Service 3 : Protection voisins/gestion eau
- Service 4 : Confinement/évacuation déchets
- Service 5 : Intervention rapide/remise en service

Interdit de répéter le même argument (même reformulé) sur 2 services.

═══════════════════════════════════════════════════════════════════════════════
ANCRAGE LOCAL (SANS SATURATION)
═══════════════════════════════════════════════════════════════════════════════

La page HUB peut citer 3–4 repères "panoramiques", mais sans détailler un service.

PATCH #2 — DISTRICTS vs LANDMARKS (RÈGLE DE SOURCE)

DISTRICTS : proviennent UNIQUEMENT de la section "Quartiers / Secteurs" de la fiche (✅).
LANDMARKS : proviennent des sections "Flux & salissures / Pôles / Équipements" + "Banque d'ancrages" (types transport/axe/équipement/parc) (✅).

❌ Ne jamais mettre un "pôle" (centre commercial/ZA/campus) dans DISTRICTS : c'est pour LANDMARKS uniquement.

═══════════════════════════════════════════════════════════════════════════════
SYSTÈME DE STYLES (OBLIGATOIRE — PAR SERVICE, PAS PAR VILLE)
═══════════════════════════════════════════════════════════════════════════════

Tu dois ASSIGNER un style à chaque service, dans la liste autorisée ci-dessous.

1 service = 1 style unique (interdit de mixer les styles à l'intérieur du service).
Les 5 services doivent avoir des styles DIFFÉRENTS autant que possible.
Éviter "3 services en Style B".
Indiquer le style choisi en tête de chaque service (ex : "STYLE CHOISI : B").

RAPPEL STYLES

A — Terrain & usage : vécu, confort, concret, phrases plutôt courtes.
B — Technique & maintenance : méthodes, supports, précision sans jargon.
C — Organisation & gestion : coordination, gêne minimale, contraintes d'accès/horaires.
D — Problèmes récurrents & prévention : dégradation dans le temps, régularité, pédagogie (sans dramatiser).

STYLES AUTORISÉS PAR SERVICE

Service 1 — Moquettes : A ou B ou D
Service 2 — Parkings : B ou C (A interdit)
Service 3 — Balcons/Terrasses : A ou B (C interdit)
Service 4 — Fientes pigeons : B ou D (A interdit)
Service 5 — Canapés/Tapis/Matelas : A ou D (C interdit)

═══════════════════════════════════════════════════════════════════════════════
PROTOCOLES KLINOVA (OBLIGATOIRES — NE JAMAIS OUBLIER D'ÉTAPE)
═══════════════════════════════════════════════════════════════════════════════

Pour chaque page SERVICE, le bloc "PROTOCOLE / FAÇON DE TRAVAILLER" doit couvrir toutes les étapes :

Moquettes : diagnostic → protections/balisage → injection-extraction (passes zones trafic) → gestion humidité/séchage → contraintes locales → conseil fréquence.

Parkings : diagnostic revêtements/évacuation → préparation/balayage/balisage/zonage véhicules → autolaveuse et/ou HP + dégraissant → gestion stricte des eaux de lavage → zones critiques (rampes/angles/pieds de murs) → conseil fréquence.

Balcons : protections menuiseries → gestion mobilier/plantes → enlèvement gros dépôts → produit adapté + brossage + rinçage + garde-corps/vitres/murs mitoyens → pression contrôlée si besoin → gestion eau anti-coulures → séchage + conseils entretien.

Fientes pigeons : EPI + confinement → humidification préalable → ramassage/conditionnement sacs étanches → nettoyage supports + garde-corps/vitres/murs mitoyens → désinfection virucide/bactéricide (temps contact) → rinçage/aération/délai avant réutilisation → (option) dissuasion pics/filets → évacuation déchets en sécurité (sans parler de filière spécialisée).

Canapés/Tapis/Matelas : diagnostic textile/taches → pré-traitement ciblé → injection-extraction (adaptations tissus fragiles) → extraction maximale + consignes séchage → conseils d'usage/fréquence.

═══════════════════════════════════════════════════════════════════════════════
STRUCTURES VARIANTES (POUR ÉVITER LE DUPLICATE ENTRE PAGES)
═══════════════════════════════════════════════════════════════════════════════

Pour chaque INTRO et chaque PROTOCOLE, tu choisis une structure (différente autant que possible) :

INTRO (choisir 1) :
A — Observation terrain
B — Constat visuel
C — Question implicite
D — Temporalité ("Après quelques mois…")

PROTOCOLE (choisir 1) :
A — Chronologique
B — Résultat → méthode
C — Par zones & surfaces
D — Problème → solution par étape

PATCH #3 — SERP / TAGS (POUR DES FAQ VARIÉES, SANS COPIER)

La fiche peut inclure des éléments SERP bruts (PAA / titres / recherches associées) avec tags : (orga) (tech) (résultat) (urgence) (dégradation) (prix) (comparatif).

Tu peux t'en inspirer pour varier les angles, mais :

❌ Ne jamais copier une question/titre mot pour mot.
✅ Pour chaque page (HUB ou service), les 4 questions doivent couvrir AU MOINS 3 tags différents parmi : (orga) (tech) (résultat) (urgence) (dégradation).
❌ Interdit d'utiliser (prix) et (comparatif) dans le texte final (pas d'argent, pas de "meilleur/moins cher"). Tu peux seulement t'en servir pour reformuler en question "terrain" (ex : "que peut-on attendre comme rendu ?" / "qu'est-ce qui change selon le support ?").

═══════════════════════════════════════════════════════════════════════════════
FORMAT DE SORTIE — OBLIGATOIRE
═══════════════════════════════════════════════════════════════════════════════

════════════════════════════════════════════════════════════════════════════════
SERVICE 0 — PAGE HUB VILLE (/VILLE)
════════════════════════════════════════════════════════════════════════════════

Objectif : vision panoramique + partenaire local + donner envie de cliquer vers les services.

IMPORTANT :
- Pas de protocole technique détaillé ici.
- "Signature ville" (si présente dans la fiche) : autorisée UNE SEULE FOIS sur cette page HUB.
- Les services 1-5 N'utilisent PAS la signature (ils utilisent uniquement leurs ancrages assignés).

Tu produis EXACTEMENT ces blocs :

────────────────────────────────────────────────────────────────────────────────
CUSTOMDESCRIPTION
────────────────────────────────────────────────────────────────────────────────

<p>30–50 mots, 1 seul paragraphe, avec 1 repère local (✅) intégré naturellement</p>

────────────────────────────────────────────────────────────────────────────────
HUBINTRO
────────────────────────────────────────────────────────────────────────────────

<p>Paragraphe 1 (35–50 mots) — partenariat / proximité / gestion globale + (signature si tu l'utilises)</p>

<p>Paragraphe 2 (35–50 mots) — propreté / maintenance / organisation / reporting, sans liste de services</p>

<ul>
  <li><strong>Point 1 :</strong> ~25–35 mots (concret, organisation/terrain)</li>
  <li><strong>Point 2 :</strong> ~25–35 mots</li>
  <li><strong>Point 3 :</strong> ~25–35 mots</li>
  (optionnel) <li><strong>Point 4 :</strong> ~25–35 mots</li>
</ul>

────────────────────────────────────────────────────────────────────────────────
FAQ
────────────────────────────────────────────────────────────────────────────────

Q1 : …
R1 : <p><strong>…</strong> 45–70 mots, concret.</p>

Q2 : …
R2 : <p><strong>…</strong> 45–70 mots.</p>

Q3 : …
R3 : <p><strong>…</strong> 45–70 mots.</p>

Q4 : …
R4 : <p><strong>…</strong> 45–70 mots.</p>

(optionnel Q5/R5 si vraiment utile)

Contraintes FAQ HUB :
- {VILLE} apparaît dans 2 ou 3 réponses max.
- Questions "terrain" (réactivité secteur, devis/déplacement, contraintes stationnement/horaires, urgence/sinistre/fin de chantier, coordination syndic/entreprise).
- Les 4 questions doivent couvrir AU MOINS 3 tags différents : (orga) (tech) (résultat) (urgence) (dégradation).

────────────────────────────────────────────────────────────────────────────────
CITYSPECIFICCHALLENGES
────────────────────────────────────────────────────────────────────────────────

<p>3 à 4 lignes "audit" (phrases courtes, style technique), basées sur la fiche (✅).</p>

────────────────────────────────────────────────────────────────────────────────
DISTRICTS
────────────────────────────────────────────────────────────────────────────────

Liste le maximum de quartiers officiels ET quartiers usuels confirmés (✅).

Si la fiche ne permet pas : 3–6 secteurs fonctionnels SANS noms inventés (ex : "Centre-ville", "Secteur gare", "Zone pavillonnaire", "Zone d'activités"), uniquement si cela figure dans la fiche.

────────────────────────────────────────────────────────────────────────────────
LANDMARKS
────────────────────────────────────────────────────────────────────────────────

5 à 6 repères (✅).

La fiche V3.1 contient TOUJOURS "Mairie de {VILLE}" comme Ancrage #1 (✅).
Inclure obligatoirement "Mairie de {VILLE}" dans les landmarks.

════════════════════════════════════════════════════════════════════════════════
SERVICES 1 À 5 — PAGES SERVICES (/VILLE/…)
════════════════════════════════════════════════════════════════════════════════

Règles communes :

- STYLE CHOISI : tu l'indiques au début.
- 150–200 mots pour INTRO, 150–180 mots pour PROTOCOLE.
- "PROTOCOLE" : 3 étapes/3 points forts, avec AÉRATION : sauts de ligne entre les 3 parties.
- "POURQUOI NOUS" : 3 points, 10–18 mots chacun, sans numérotation obligatoire (mais 3 lignes séparées).
- "SPECIFIC CHALLENGES" : 3–4 phrases courtes.
- "FAQ ADDITION" : 4 Q/R, réponses 40–60 mots, aucune liste.
-Au moins 3/4 questions FAQ doivent inclure un élément local ✅ ; la 4e peut être 100% terrain/technique si la fiche est faible (Section 11 : fiche fragile)
- Les 4 questions doivent couvrir AU MOINS 3 tags différents : (orga) (tech) (résultat) (urgence) (dégradation).
- RESPECTER LES RÈGLES DE ROTATION LEXICALE (section "Rotation lexicale").
- UTILISER 4 INTENTIONS FAQ VARIÉES (section "Pool d'intentions").
- RESPECTER 3 MENTIONS LOCALES OBLIGATOIRES (geo + bâti + usage).

Tu produis, pour CHAQUE service, EXACTEMENT :

────────────────────────────────────────────────────────────────────────────────
SERVICE {N} — {NOM SERVICE}
────────────────────────────────────────────────────────────────────────────────

STYLE CHOISI : {A/B/C/D}
INTRO STRUCTURE : {A/B/C/D}
PROTOCOLE STRUCTURE : {A/B/C/D}
ANCRAGES UTILISÉS : #{X}, #{Y} (ou ancrage de remplacement si permutation)
INTENTIONS FAQ : #{A}, #{B}, #{C}, #{D}

────────────────────────────────────────────────────────────────────────────────
BLOC 1 — HERO DESCRIPTION
────────────────────────────────────────────────────────────────────────────────

<p>1 phrase (20–35 mots), résultat concret, sans paraphraser le H1.</p>

────────────────────────────────────────────────────────────────────────────────
BLOC 2 — INTRO
────────────────────────────────────────────────────────────────────────────────

<p>150–200 mots : douleur/besoins → bénéfices → ouverture vers une intervention structurée. Inclure 3 mentions locales (geo + bâti + usage) pertinentes (ancrages assignés + sections fiche), sans saturation.</p>

────────────────────────────────────────────────────────────────────────────────
BLOC 3 — PROTOCOLE
────────────────────────────────────────────────────────────────────────────────

<p>150–180 mots, organisé en 3 étapes/3 points forts, avec sauts de ligne entre les parties. Couvrir TOUTES les étapes obligatoires du service (voir "PROTOCOLES KLINOVA").</p>

────────────────────────────────────────────────────────────────────────────────
BLOC 4 — POURQUOI NOUS
────────────────────────────────────────────────────────────────────────────────

Ligne 1 (10–18 mots) : expertise locale (ancrage réel, sans forcing)

Ligne 2 (10–18 mots) : maîtrise technique (méthode/support/matériel)

Ligne 3 (10–18 mots) : organisation (accès, horaires, gêne limitée, reporting si pertinent)

────────────────────────────────────────────────────────────────────────────────
BLOC 5 — SPECIFIC CHALLENGES
────────────────────────────────────────────────────────────────────────────────

<p>3–4 phrases courtes : 1 enjeu local + 1 difficulté technique + 1 contrainte d'usage/organisation (+ option 4e phrase).</p>

────────────────────────────────────────────────────────────────────────────────
BLOC 6 — FAQ ADDITION
────────────────────────────────────────────────────────────────────────────────

Q1 : … (basée sur intention #{X} du pool)
R1 : <p>40–60 mots.</p>

Q2 : … (basée sur intention #{Y} du pool)
R2 : <p>40–60 mots.</p>

Q3 : … (basée sur intention #{Z} du pool)
R3 : <p>40–60 mots.</p>

Q4 : … (basée sur intention #{W} du pool)
R4 : <p>40–60 mots.</p>

════════════════════════════════════════════════════════════════════════════════
SPÉCIFICITÉS PAR SERVICE (RAPPELS)
════════════════════════════════════════════════════════════════════════════════

Service 1 — Moquettes : parler halls/paliers/escaliers + bureaux/hôtels/commerce + domicile, de façon équilibrée.

Service 2 — Parkings : sécurité, lisibilité, décrassage, gestion eaux ; cible PRO uniquement.

Service 3 — Balcons : confort/usage, réappropriation ; gestion eau anti-coulures obligatoire.

Service 4 — Fientes pigeons : sécurité/EPI/désinfection, ton sérieux ; pas de style A.

Service 5 — Canapés/Tapis/Matelas : hygiène, famille, taches/odeurs/allergènes ; ton bienveillant.

═══════════════════════════════════════════════════════════════════════════════
CHECKLIST FINALE (À APPLIQUER AVANT D'ENVOYER)
═══════════════════════════════════════════════════════════════════════════════

1. [ ] Styles : pas 3 services en B, styles variés entre services.
2. [ ] Ancrages : chaque service utilise les ancrages assignés (#3-4, #5-6, etc.) OU ancrages de remplacement (#13-18) si permutation nécessaire.
3. [ ] Rotation lexicale : pas de répétition dans le même paragraphe, alternance sections.
4. [ ] FAQ : 4 intentions VARIÉES du pool, couvrant 3+ tags différents, chaque question avec 1 élément local (✅).
5. [ ] 3 mentions locales : geo + bâti + usage obligatoires par service.
6. [ ] Protocole : aucune étape manquante.
7. [ ] Segments respectés (parkings=PRO ; fientes/balcons/textiles=particuliers).
8. [ ] Pas de prix, pas de superlatifs, pas de tourisme, pas d'invention.
9. [ ] Preuves/Sources : jamais citées dans la sortie.
10. [ ] Signature : utilisée uniquement sur HUB, jamais sur services 1-5.

FIN DU PROMPT.   //  FICHE B — V3.2 FINAL (VERSION RENFORCÉE COMPLÈTE)
markdownFICHE DE COLLECTE DE MATIÈRE – VILLES (KLINOVA) — V3.2
(à envoyer aux IA "fournisseurs de données", pas à l'IA rédactrice)

═══════════════════════════════════════════════════════════════════════════════
INTERDICTIONS ABSOLUES
═══════════════════════════════════════════════════════════════════════════════

❌ Pas de texte marketing
❌ Pas de paragraphes prêts à publier
❌ Pas de storytelling / promesses
❌ Pas d'inventions plausibles (quartiers, gares, lieux)
✅ Uniquement : faits, listes, signaux SERP, contraintes terrain, éléments vérifiables

═══════════════════════════════════════════════════════════════════════════════
FORMAT DE PREUVE (OBLIGATOIRE)
═══════════════════════════════════════════════════════════════════════════════

Pour chaque fait "nom propre" (quartier, gare, parc, ZA, axe, équipement) :
- Preuve : indique une source courte (ex : "site mairie", "Wikipédia", "IDFM", "SNCF", "OpenStreetMap")
- Statut : (✅) confirmé / (⚠️) incertain

RÈGLE CRITIQUE — CONTENU vs PREUVE :

Si une information issue de la preuve doit être utilisable par l'IA rédactrice, elle DOIT être intégrée dans le "Libellé" de l'ancrage.

**Exemple CORRECT** :
```
ANCRAGE #5 :
- Libellé : "Parvis de la mairie rénové en 2024, accès piéton large"
- Preuve : "Site mairie + OSM"
- Statut : ✅
```

**Exemple INCORRECT** :
```
ANCRAGE #5 :
- Libellé : "Parvis de la mairie"
- Preuve : "Site mairie (rénové 2024, accès large)"  ← ❌ Info cachée dans preuve
- Statut : ✅
```

La preuve sert à VALIDER l'ancrage, pas à le COMPLÉTER.

═══════════════════════════════════════════════════════════════════════════════
SECTION 0 — PROTOCOLE WEB OBLIGATOIRE
═══════════════════════════════════════════════════════════════════════════════

PASS A — FACT-CHECK VILLE

Recherches minimales :
1) "[VILLE] quartiers" + "[VILLE] plan quartiers" + "[VILLE] mairie quartiers"
2) "[VILLE] gare" + "[VILLE] RER" + "[VILLE] Transilien" + "[VILLE] métro" + "[VILLE] tram"
3) "Mairie de [VILLE]" + "parc principal [VILLE]"
4) "[VILLE] code postal" + "[VILLE] communes limitrophes"

Objectif : Sections 1, 4, 5, 6, 7 avec noms exacts, zéro confusion commune voisine.

PASS B — SERP BRUTE PAR SERVICE (SANS INTERPRÉTATION LONGUE)

Faire ces requêtes et capturer BRUT :
- "nettoyage moquette [VILLE]"
- "nettoyage parking [VILLE]"
- "nettoyage balcon [VILLE]"
- "nettoyage fientes pigeons balcon [VILLE]"
- "nettoyage canapé [VILLE]" (ou "nettoyage matelas [VILLE]")

À récupérer :
A) PAA (3–6)
B) Titres (6–10)
C) Recherches associées (6–10)

Tag rapide (1 mot) pour chaque item : (orga) (tech) (résultat) (urgence) (dégradation) (prix) (comparatif)

PASS C — DISTINCTIVITÉ vs VOISINS

- Lister 3–5 communes limitrophes (avec source)
- Tester 4–6 marqueurs possibles (gare, parc, ZA, axe, campus…) :
  "marqueur + [VILLE]" vs "marqueur + [VOISIN]"

Objectif : éliminer les marqueurs trop "communs".

═══════════════════════════════════════════════════════════════════════════════
SECTION 1 — IDENTITÉ ADMIN
═══════════════════════════════════════════════════════════════════════════════

- Commune :
- Département :
- Codes postaux :
- Population (ordre de grandeur) :
- Statut notable (si vrai) :

═══════════════════════════════════════════════════════════════════════════════
SECTION 2 — PROFIL DOMINANT (1 seul à cocher + 3 preuves)
═══════════════════════════════════════════════════════════════════════════════

☐ Résidentielle
☐ Mixte
☐ Pôle tertiaire
☐ Ville flux
☐ Ville équipements
☐ Logistique/industrie

Preuves (3 max, factuelles) :
- …
- …
- …

═══════════════════════════════════════════════════════════════════════════════
SECTION 3 — BÂTI & MORPHOLOGIE (LISTES)
═══════════════════════════════════════════════════════════════════════════════

3.1 Typologies (cocher) :
☐ Immeubles anciens / centre ancien
☐ Faubourgs / petits collectifs
☐ Grands ensembles / tours
☐ Pavillons
☐ Résidences récentes
☐ ZAC / écoquartier (✅/⚠️)

3.2 Contraintes fréquentes :
☐ Halls ouverts sur rue
☐ Escaliers étroits
☐ Sous-sols / parkings profonds
☐ Digicodes-badges
☐ Stationnement difficile (✅/⚠️)

3.3 Matériaux probables (si non sourçable : "probable (⚠️)") :
- Moquettes : dalles textiles / bouclée / velours ras / nez de marche…
- Parkings : béton / résine / rampes striées / marquage…
- Balcons : carrelage / béton / dalles sur plots / bois composite…

═══════════════════════════════════════════════════════════════════════════════
SECTION 4 — QUARTIERS / SECTEURS
═══════════════════════════════════════════════════════════════════════════════

- Si quartiers officiels : 5–12 (✅)
- Sinon : 3–6 secteurs fonctionnels SANS noms propres (ex : "centre", "secteur gare", "pavillonnaire", "zone d'activités")

Chaque item : (✅/⚠️) + preuve courte

═══════════════════════════════════════════════════════════════════════════════
SECTION 5 — FLUX & SALISSURES (CAUSES RÉELLES)
═══════════════════════════════════════════════════════════════════════════════

- Transports (stations dans la commune vs "à proximité") (✅/⚠️)
- Axes (A/N/D) (✅/⚠️)
- Pôles : ZC/ZA/campus/hôpital/cinéma/équipements publics (✅/⚠️)

Pour chaque : 1 ligne "Pourquoi ça compte pour la salissure / l'organisation"

═══════════════════════════════════════════════════════════════════════════════
SECTION 6 — LOGISTIQUE (TRÈS CONCRET)
═══════════════════════════════════════════════════════════════════════════════

- Stationnement : facile/moyen/compliqué + pourquoi (1 ligne)
- Accès immeubles : digicodes/badges/interphones/horaires sensibles
- Contraintes : rues étroites, sens uniques, marchés, zones réglementées (✅/⚠️)
- Sensibilité "gêne minimale" : faible/moyenne/forte + contexte

═══════════════════════════════════════════════════════════════════════════════
SECTION 7 — BANQUE D'ANCRAGES (ANTI-BOILERPLATE) — VERSION FINALE
═══════════════════════════════════════════════════════════════════════════════

⚠️ OBJECTIF : Fournir 12–18 ancrages vérifiés (✅) pour alimenter les 6 pages.

RÈGLE CRITIQUE : Chaque ancrage doit être :
1. Vérifiable (source obligatoire)
2. Distinctif (test PASS C validé) / Exception : ANCRAGE #1 (Mairie) est requis même s’il n’est pas distinctif
3. Exploitable pour un service spécifique
4. Complet (toute info utile dans le Libellé, pas dans la Preuve)

FORMAT PAR ANCRAGE :

ANCRAGE #1 (OBLIGATOIRE POUR TOUTES LES VILLES) :
- Libellé : "Mairie de [VILLE]"
- Type : équipement
- Preuve : "Google Maps" OU "site officiel mairie"
- Statut : ✅ (toujours confirmable)
- Utile pour : hub, landmarks
- Distinctif vs voisins : non (mais requis)

ANCRAGE #2 :
- Libellé : [Ex: "Gare RER E Chelles-Gournay, flux quotidien intense"]
- Type : transport / axe / bâti / usage / équipement
- Preuve : [Ex: "SNCF Transilien + IDFM"]
- Statut : ✅ / ⚠️
- Utile pour : hub / moquettes / parkings / balcons / fientes / canapés
- Distinctif vs voisins : oui / non

[Répéter pour ANCRAGE #3 à #12 minimum, idéalement jusqu'à #18]

───────────────────────────────────────────────────────────────────────────────
RÉPARTITION SUGGÉRÉE (POUR L'IA RÉDACTRICE)
───────────────────────────────────────────────────────────────────────────────

Cette section guide l'IA rédactrice sur l'attribution des ancrages aux pages.

**RÉPARTITION PAR DÉFAUT (si 12+ ancrages disponibles)** :
- Hub (Service 0) : Ancrages #1, #2
- Service 1 (Moquettes) : Ancrages #3, #4
- Service 2 (Parkings) : Ancrages #5, #6
- Service 3 (Balcons) : Ancrages #7, #8
- Service 4 (Fientes pigeons) : Ancrages #9, #10
- Service 5 (Canapés/tapis/matelas) : Ancrages #11, #12

**SI MOINS DE 12 ANCRAGES (✅) DISPONIBLES** :
- Minimum requis : 8 ancrages (dont #1 Mairie obligatoire)
- Répartition adaptée :
  - Hub : #1, #2
  - Services 1-5 : Distribuer #3 à #8 en priorité selon pertinence
  - Option 1 : Réduire exigence à 1 ancrage + 2 mentions (bâti/logistique)
  - Option 2 : Tolérance réutilisation max 1× avec reformulation stricte

**SI PLUS DE 12 ANCRAGES (✅) DISPONIBLES** :
- Fournir jusqu'à 18 ancrages numérotés
- Les ancrages #13-#18 servent de "pool de remplacement" si un ancrage #1-#12 n'est pas pertinent pour le service assigné

**EXEMPLES DE BONNE RÉPARTITION** :

Ancrage #1 (Hub) : "Mairie de Chelles" → obligatoire
Ancrage #2 (Hub) : "Gare RER E + zone commerciale" → vision panoramique

Ancrage #3 (Moquettes) : "Bureaux ZA Les Closeaux" → pertinent pour moquettes tertiaire
Ancrage #4 (Moquettes) : "Halls immeubles centre-ville" → pertinent pour moquettes copro

Ancrage #5 (Parkings) : "Parkings souterrains résidences récentes" → pertinent parkings
Ancrage #6 (Parkings) : "Proximité A4, pollution particules fines" → pertinent parkings

Ancrage #7 (Balcons) : "Secteur pavillonnaire + jardins" → pertinent balcons/terrasses
Ancrage #8 (Balcons) : "Bords de Marne + végétation" → pertinent balcons exposition

Ancrage #9 (Fientes) : "Parc départemental + grands arbres" → pertinent fientes pigeons
Ancrage #10 (Fientes) : "Immeubles corniches centre-ville" → pertinent fientes pigeons

Ancrage #11 (Canapés) : "Quartier résidentiel familles" → pertinent textiles domicile
Ancrage #12 (Canapés) : "Pavillons + animaux de compagnie" → pertinent textiles domicile

───────────────────────────────────────────────────────────────────────────────
RÈGLES DE QUALITÉ DES ANCRAGES
───────────────────────────────────────────────────────────────────────────────

**ANCRAGE DE QUALITÉ (✅)** :
- "Zone d'activités Les Closeaux, bureaux et commerces" (✅ mairie + OSM)
- "Résidences années 70-80 secteur Beauséjour" (✅ Wikipédia + observation terrain)
- "Gare RER E Chelles-Gournay, flux quotidien" (✅ SNCF + IDFM)

**ANCRAGE FAIBLE (⚠️ à éviter)** :
- "Beaucoup d'immeubles" → trop vague
- "Quartier moderne" → subjectif, pas vérifiable
- "Zone dynamique" → marketing, pas factuel

**ANCRAGE INVENTÉ (❌ INTERDIT)** :
- "Centre commercial Les Marronniers" (si n'existe pas)
- "Parc de la République" (si confusion avec ville voisine)

═══════════════════════════════════════════════════════════════════════════════
SECTION 8 — CIBLAGE RÉALISTE PAR SERVICE (PAS DE TEXTE, JUSTE CHOIX)
═══════════════════════════════════════════════════════════════════════════════

Moquettes : sélectionner 3–6 cibles max + 2–3 raisons factuelles locales
Parkings : types + donneurs d'ordre
Balcons : typologies + facteurs salissure (✅/⚠️)
Fientes : contextes probables + zones plausibles (uniquement si sourçables)
Canapés/tapis/matelas : contextes + contraintes

═══════════════════════════════════════════════════════════════════════════════
SECTION 8bis — REQUÊTES LOCALES (INSPIRATION UNIQUEMENT) — VERSION FINALE
═══════════════════════════════════════════════════════════════════════════════

12–20 requêtes max.

RÈGLES :
- Chaque requête doit inclure au moins 1 ancrage (✅) OU 1 contexte local factuel
- Tag (orga/tech/résultat/urgence/dégradation)
- 30% mini doivent être "spécifiques ville" (pas génériques)

RÈGLE DE COUVERTURE TAGS :

Chaque service doit avoir ≥3 requêtes avec tags DIFFÉRENTS parmi :
(orga) (tech) (résultat) (urgence) (dégradation)

**EXEMPLES MAL TAGGÉS** :
❌ "nettoyage moquette Chelles" → trop générique, aucun tag clair
❌ "nettoyage parking Torcy" → trop générique

**EXEMPLES BIEN TAGGÉS** :
✅ "nettoyage moquette Chelles secteur gare trafic intense" (urgence) (tech)
✅ "décrassage parking Torcy ZA Closeaux taches huile" (tech) (dégradation)
✅ "nettoyage balcon Villemomble avant état des lieux" (urgence) (résultat)
✅ "assainissement fientes pigeons Gagny parc Beauséjour" (urgence) (tech)

FORMAT DE SORTIE :

HUB (2-4 requêtes) :
1. "[requête avec ancrage local]" (tech) (✅)
2. "[requête avec ancrage local]" (orga) (✅)
...

SERVICE 1 — MOQUETTES (2-4 requêtes) :
1. "[requête avec ancrage local]" (tech) (✅)
2. "[requête avec ancrage local]" (dégradation) (✅)
...

SERVICE 2 — PARKINGS (2-4 requêtes) :
1. "[requête avec ancrage local]" (orga) (✅)
2. "[requête avec ancrage local]" (tech) (✅)
...

SERVICE 3 — BALCONS (2-4 requêtes) :
1. "[requête avec ancrage local]" (résultat) (✅)
2. "[requête avec ancrage local]" (urgence) (✅)
...

SERVICE 4 — FIENTES PIGEONS (2-4 requêtes) :
1. "[requête avec ancrage local]" (urgence) (✅)
2. "[requête avec ancrage local]" (tech) (✅)
...

SERVICE 5 — CANAPÉS/TAPIS/MATELAS (2-4 requêtes) :
1. "[requête avec ancrage local]" (dégradation) (✅)
2. "[requête avec ancrage local]" (résultat) (✅)
...

═══════════════════════════════════════════════════════════════════════════════
SECTION 9 — SIGNATURE VILLE (1 seule)
═══════════════════════════════════════════════════════════════════════════════

SIGNATURE : "[2 faits ✅ max]"

RÈGLE D'USAGE :

- Utilisable 1× sur page HUB uniquement
- Services 1-5 N'utilisent PAS la signature (ils utilisent uniquement leurs ancrages assignés #3-12)

**EXEMPLE D'USAGE CORRECT** :

Signature fournie : "Gare RER E Chelles-Gournay + résidences années 70-80"

**Hub** : "Entre la gare RER E et les résidences des années 70-80, les entrées d'immeubles se chargent vite en poussières."

**Service 1 (Moquettes)** : Utilise Ancrages #3 et #4 (PAS la signature)
**Service 2 (Parkings)** : Utilise Ancrages #5 et #6 (PAS la signature)
**Service 3 (Balcons)** : Utilise Ancrages #7 et #8 (PAS la signature)
**Service 4 (Fientes)** : Utilise Ancrages #9 et #10 (PAS la signature)
**Service 5 (Canapés)** : Utilise Ancrages #11 et #12 (PAS la signature)

INTERDICTIONS :
- Adjectifs touristiques ("charmante", "dynamique")
- Confusion station limite (préciser "à proximité" si hors commune)
- Signature identique à ville voisine (vérifier PASS C)

═══════════════════════════════════════════════════════════════════════════════
SECTION 10 — SERP BRUT (PAA / TITRES / ASSOC.)
═══════════════════════════════════════════════════════════════════════════════

Pour chaque service : PAA 3–6, titres 6–10, associées 6–10, taggés.

FORMAT :

**SERVICE 1 — MOQUETTES**
Requête : "nettoyage moquette [VILLE]"

PAA :
1. [Question exacte] (tech)
2. [Question exacte] (orga)
3. [Question exacte] (résultat)
...

Titres :
1. [Titre exact] (tech)
2. [Titre exact] (dégradation)
...

Recherches associées :
1. [Requête exacte] (orga)
2. [Requête exacte] (urgence)
...

[Répéter pour Services 2-5]

═══════════════════════════════════════════════════════════════════════════════
SECTION 11 — STATUT GLOBAL
═══════════════════════════════════════════════════════════════════════════════

districts : ✅ / ⚠️
transports : ✅ / ⚠️
landmarks : ✅ / ⚠️
CP/admin : ✅ / ⚠️
ancrages : ✅ / ⚠️
signature : ✅ / ⚠️
requêtes : ✅ / ⚠️

+ Compter le nombre d'items (⚠️). Si >5 : fiche fragile.

**NOMBRE D'ANCRAGES (✅) FOURNIS** : [X]

⚠️ Si <8 ancrages (✅) dont Mairie : FICHE INSUFFISANTE → Refaire PASS A/B/C pour trouver plus d'ancrages.

✅ Si 12-18 ancrages (✅) : FICHE OPTIMALE

FIN DE LA FICHE.  // tu en penses quoi ?