# Audit — Synthèse (HIGH / MEDIUM)

Généré : 2026-02-02T21:58:09.743Z
Total items HIGH/MEDIUM : 20

- **HIGH** — bagneux — orthographe — `services[3].whyUsBullets[0]`
  - Faute d’orthographe : « proximity » → « proximité ».
- **HIGH** — bagneux — orthographe — `services[3].faqAdditions[2].question`
  - Mot en anglais : « balcony » → « balcon ».
- **HIGH** — bondy — legal — `services[6].faqAdditions[2].answer`
  - Retire une promesse commerciale potentiellement engageante (« sans frais supplémentaires ») tout en conservant le sens.
- **HIGH** — bondy — orthographe — `services[5].faqAdditions[0].answer`
  - Correction d'une faute (« mortite » → « mortier »).
- **HIGH** — chevilly-la-rue — factual_suspect — `customDescription`
  - Référence au métro ligne 14 potentiellement inexacte ; correction minimale en supprimant l’élément factuel incertain.
- **HIGH** — chevilly-la-rue — factual_suspect — `hubIntro`
  - Référence au métro 14 potentiellement inexacte ; suppression minimale pour éviter une erreur factuelle.
- **HIGH** — chevilly-la-rue — factual_suspect — `citySpecificChallenges[2]`
  - Référence au métro 14 potentiellement inexacte ; remplacement par un repère déjà présent dans la page (tram T7) sans changer l’idée.
- **HIGH** — chevilly-la-rue — factual_suspect — `faq[2].answer`
  - Aucun changement : patch non émis.
- **HIGH** — choisy-le-roi — factual_suspect — `services[3].uniqueIntro`
  - Incohérence interne : le texte cite « Parc de la Mairie » alors que les repères/landmarks et autres champs mentionnent « Parc des Gondoles ».
- **HIGH** — noisiel — legal — `faq[1].answer`
  - Retire une promesse de délai chiffré (24 à 48 heures) potentiellement risquée/trompeuse tout en conservant le sens.
- **HIGH** — noisy-le-sec — orthographe — `services[1].heroDescription`
  - Faute d’orthographe : « treatment » → « traitement ».
- **HIGH** — orly — consistency — `text`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
- **HIGH** — vitry-sur-seine — legal — `faq[2].answer`
  - Délai chiffré potentiellement engageant/commercialement risqué sur une page locale ; à neutraliser (patch à appliquer avec une reformulation non chiffrée).
- **HIGH** — vitry-sur-seine — legal — `services[4].heroDescription`
  - Promesse de délai chiffré (24 à 48 heures) potentiellement engageante ; à rendre non chiffrée sans changer le sens.
- **HIGH** — vitry-sur-seine — legal — `services[6].faqAdditions[1].answer`
  - Délai chiffré (48 à 72 heures) potentiellement engageant ; à neutraliser de façon conservatrice.
- **MEDIUM** — choisy-le-roi — orthographe — `services[0].uniqueIntro`
  - Accord : « sollicitées » doit s'accorder avec « zones d'attente ».
- **MEDIUM** — orly — legal — `services[3].uniqueIntro`
  - Évite l'affirmation potentiellement trompeuse « obligatoire » (risque légal) sans changer le sens opérationnel.
- **MEDIUM** — romainville — consistency — `services[1].uniqueIntro`
  - Évite la répétition proche « proches » et améliore la fluidité sans changer le sens.
- **MEDIUM** — thiais — orthographe — `services[2].faqAdditions[3].answer`
  - Faute d’orthographe : « treatment » → « traitement ».
- **MEDIUM** — vitry-sur-seine — orthographe — `services[2].whyUsBullets[0]`
  - Faute d’orthographe : « vitrots » → « vitriots ».

