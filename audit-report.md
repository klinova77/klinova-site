# Audit City — Klinova

Généré : 2026-02-02T21:58:09.743Z
Total fichiers : 12

## bagneux — src/data/cities-draft/bagneux.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[3].whyUsBullets[0]`
  - Reason: Faute d’orthographe : « proximity » → « proximité ».
  - Expected: `Connaissance des zones à risque à Bagneux : proximity des parcs, cimetière, grands ensembles avec corniches exposées.`
  - Value: `Connaissance des zones à risque à Bagneux : proximité des parcs, cimetière, grands ensembles avec corniches exposées.`
- **HIGH** — orthographe — `services[3].faqAdditions[2].question`
  - Reason: Mot en anglais : « balcony » → « balcon ».
  - Expected: `Après retrait des fientes sur un balcony proche du cimetière parisien, quelle désinfection garantissez-vous pour éliminer germes et spores ?`
  - Value: `Après retrait des fientes sur un balcon proche du cimetière parisien, quelle désinfection garantissez-vous pour éliminer germes et spores ?`

## bondy — src/data/cities-draft/bondy.ts

### GPT patches (setField)

- **HIGH** — legal — `services[6].faqAdditions[2].answer`
  - Reason: Retire une promesse commerciale potentiellement engageante (« sans frais supplémentaires ») tout en conservant le sens.
  - Expected: `<p>L'objectif est un logement propre et fonctionnel, sans traces ni poussières visibles sur les surfaces courantes. Sanitaires, cuisine et sols sont traités pour permettre une installation immédiate. En cas de point non `
  - Value: `<p>L'objectif est un logement propre et fonctionnel, sans traces ni poussières visibles sur les surfaces courantes. Sanitaires, cuisine et sols sont traités pour permettre une installation immédiate. En cas de point non `
- **HIGH** — orthographe — `services[5].faqAdditions[0].answer`
  - Reason: Correction d'une faute (« mortite » → « mortier »).
  - Expected: `<p>Nous appliquons d'abord un produit désincrustant qui ramollit les dépôts sans attaquer le mortite des joints. Le brossage mécanique déloge ensuite les salissures, puis la haute pression à réglage modéré rince l'ensemb`
  - Value: `<p>Nous appliquons d'abord un produit désincrustant qui ramollit les dépôts sans attaquer le mortier des joints. Le brossage mécanique déloge ensuite les salissures, puis la haute pression à réglage modéré rince l'ensemb`

## chevilly-la-rue — src/data/cities-draft/chevilly-la-rue.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `customDescription`
  - Reason: Référence au métro ligne 14 potentiellement inexacte ; correction minimale en supprimant l’élément factuel incertain.
  - Expected: `Klinova intervient à Chevilly-la-Rue pour l'entretien des parties communes, parkings et espaces extérieurs. Proche du métro ligne 14 et du tram T7, notre équipe connaît les contraintes locales et adapte chaque interventi`
  - Value: `Klinova intervient à Chevilly-la-Rue pour l'entretien des parties communes, parkings et espaces extérieurs. Proche du tram T7, notre équipe connaît les contraintes locales et adapte chaque intervention au bâti de la comm`
- **HIGH** — factual_suspect — `hubIntro`
  - Reason: Référence au métro 14 potentiellement inexacte ; suppression minimale pour éviter une erreur factuelle.
  - Expected: `<p>Au cœur du pôle d'Orly-Rungis, desservie par le tram T7 et le métro 14, Chevilly-la-Rue combine zones d'activités et quartiers résidentiels. Klinova accompagne gestionnaires et occupants avec une organisation pensée p`
  - Value: `<p>Au cœur du pôle d'Orly-Rungis, desservie par le tram T7, Chevilly-la-Rue combine zones d'activités et quartiers résidentiels. Klinova accompagne gestionnaires et occupants avec une organisation pensée pour ce territoi`
- **HIGH** — factual_suspect — `citySpecificChallenges[2]`
  - Reason: Référence au métro 14 potentiellement inexacte ; remplacement par un repère déjà présent dans la page (tram T7) sans changer l’idée.
  - Expected: `Halls des résidences proches du métro 14 sollicités par un <strong>flux quotidien important</strong>.`
  - Value: `Halls des résidences proches du tram T7 sollicités par un <strong>flux quotidien important</strong>.`
- **HIGH** — factual_suspect — `faq[2].answer`
  - Reason: Aucun changement : patch non émis.
  - Expected: `<p>Nous disposons d'équipes mobilisables sous <strong>24 à 72 heures</strong> selon la nature de l'urgence. Déversement d'huile en parking, souillures dans un hall après sinistre : nous adaptons le planning pour répondre`
  - Value: `<p>Nous disposons d'équipes mobilisables sous <strong>24 à 72 heures</strong> selon la nature de l'urgence. Déversement d'huile en parking, souillures dans un hall après sinistre : nous adaptons le planning pour répondre`

## choisy-le-roi — src/data/cities-draft/choisy-le-roi.ts

### GPT patches (setField)

- **HIGH** — factual_suspect — `services[3].uniqueIntro`
  - Reason: Incohérence interne : le texte cite « Parc de la Mairie » alors que les repères/landmarks et autres champs mentionnent « Parc des Gondoles ».
  - Expected: `<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et les rebords de fenêtres. À proximité du <strong>Parc de la Mairie</strong> ou le long des <strong>bords de Seine</stron`
  - Value: `<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et les rebords de fenêtres. À proximité du <strong>Parc des Gondoles</strong> ou le long des <strong>bords de Seine</stron`
- **MEDIUM** — orthographe — `services[0].uniqueIntro`
  - Reason: Accord : « sollicitées » doit s'accorder avec « zones d'attente ».
  - Expected: `<p>Dans le <strong>Quartier du Port</strong>, les parties communes des résidences récentes accumulent rapidement poussières et traces de passage. Les bureaux proches des programmes neufs subissent le même phénomène : cou`
  - Value: `<p>Dans le <strong>Quartier du Port</strong>, les parties communes des résidences récentes accumulent rapidement poussières et traces de passage. Les bureaux proches des programmes neufs subissent le même phénomène : cou`

## noisiel — src/data/cities-draft/noisiel.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[1].answer`
  - Reason: Retire une promesse de délai chiffré (24 à 48 heures) potentiellement risquée/trompeuse tout en conservant le sens.
  - Expected: `<p>Selon la nature de la demande et notre planning, une intervention rapide peut être organisée sous 24 à 48 heures. Pour les situations nécessitant une <strong>réactivité immédiate</strong> (dégât des eaux, souillure im`
  - Value: `<p>Selon la nature de la demande et notre planning, une intervention rapide peut être organisée. Pour les situations nécessitant une <strong>réactivité immédiate</strong> (dégât des eaux, souillure importante), nous éval`

## noisy-le-sec — src/data/cities-draft/noisy-le-sec.ts

### GPT patches (setField)

- **HIGH** — orthographe — `services[1].heroDescription`
  - Reason: Faute d’orthographe : « treatment » → « traitement ».
  - Expected: `Décrassage complet des sols de parking avec autolaveuse et treatment dégraissant, gestion stricte des eaux usées et remise en circulation rapide des places.`
  - Value: `Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et remise en circulation rapide des places.`

## orly — src/data/cities-draft/orly.ts

### Local issues

- **HIGH** — consistency — `text`
  - Template literal/backticks détectés dans un champ non-HTML (risque conventions).
  - Remplacement: `Remplacer par une string en guillemets doubles.`
  - Reco: Réserver les backticks aux champs HTML multi-lignes.
  - Extrait: ``Ville aéroportuaire aux quartiers pavillonnaires historiques (Cité Jardins), desservie par le RER C et le Tram T9.``

### GPT patches (setField)

- **LOW** — orthographe — `landmarks[0]`
  - Reason: Correction de la préposition (usage : « d'Orly »).
  - Expected: `Mairie de Orly`
  - Value: `Mairie d'Orly`
- **MEDIUM** — legal — `services[3].uniqueIntro`
  - Reason: Évite l'affirmation potentiellement trompeuse « obligatoire » (risque légal) sans changer le sens opérationnel.
  - Expected: `<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et parfois les vitres. Près du <strong>Marché du Vieil Orly</strong>, les restes alimentaires attirent les pigeons qui col`
  - Value: `<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et parfois les vitres. Près du <strong>Marché du Vieil Orly</strong>, les restes alimentaires attirent les pigeons qui col`

## romainville — src/data/cities-draft/romainville.ts

### GPT patches (setField)

- **MEDIUM** — consistency — `services[1].uniqueIntro`
  - Reason: Évite la répétition proche « proches » et améliore la fluidité sans changer le sens.
  - Expected: `<p>Les traces d'huile, les coulures de graisse et les dépôts de poussière marquent progressivement les sols des parkings souterrains de la <strong>ZAC de l'Horloge</strong> et des résidences récentes de Romainville. Ces `
  - Value: `<p>Les traces d'huile, les coulures de graisse et les dépôts de poussière marquent progressivement les sols des parkings souterrains de la <strong>ZAC de l'Horloge</strong> et des résidences récentes de Romainville. Ces `

## thiais — src/data/cities-draft/thiais.ts

### GPT patches (setField)

- **MEDIUM** — orthographe — `services[2].faqAdditions[3].answer`
  - Reason: Faute d’orthographe : « treatment » → « traitement ».
  - Expected: `<p>Oui. Une loggia fermée retient davantage l'humidité et favorise les moisissures sur les murs latéraux. Nous ajustons le treatment en conséquence : produit anti-mousse renforcé, attention particulière aux angles. Sur b`
  - Value: `<p>Oui. Une loggia fermée retient davantage l'humidité et favorise les moisissures sur les murs latéraux. Nous ajustons le traitement en conséquence : produit anti-mousse renforcé, attention particulière aux angles. Sur `

## villejuif — src/data/cities-draft/villejuif.ts

### GPT patches (setField)

- **LOW** — orthographe — `hubIntro`
  - Reason: Typographie : « métro » s’écrit en minuscule et ajout de « du » ; suppression d’un espace superflu après <li>.
  - Expected: `<p>Au pied de l'Institut Gustave Roussy et du terminus Métro 7, Villejuif concentre des flux importants et des configurations variées. Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de l`
  - Value: `<p>Au pied de l'Institut Gustave Roussy et du terminus du métro 7, Villejuif concentre des flux importants et des configurations variées. Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier d`

## villemomble — src/data/cities-draft/villemomble.ts

### GPT patches (setField)

- **LOW** — orthographe — `customDescription`
  - Reason: Parallélisme et correction de l’énumération (ajout des articles).
  - Expected: `Klinova intervient à Villemomble pour l'entretien des parties communes, parkings et espaces extérieurs. Entre la gare RER E et les quartiers pavillonnaires des Coquetiers, une équipe locale adaptée aux contraintes du bât`
  - Value: `Klinova intervient à Villemomble pour l'entretien des parties communes, des parkings et des espaces extérieurs. Entre la gare RER E et les quartiers pavillonnaires des Coquetiers, une équipe locale adaptée aux contrainte`

## vitry-sur-seine — src/data/cities-draft/vitry-sur-seine.ts

### GPT patches (setField)

- **HIGH** — legal — `faq[2].answer`
  - Reason: Délai chiffré potentiellement engageant/commercialement risqué sur une page locale ; à neutraliser (patch à appliquer avec une reformulation non chiffrée).
  - Expected: `<p>Après validation du devis, nous pouvons généralement intervenir <strong>sous 5 à 10 jours ouvrés</strong> selon la nature de la prestation et la disponibilité des accès. En cas d'urgence signalée, nous étudions la pos`
  - Value: `<p>Après validation du devis, nous pouvons généralement intervenir <strong>sous 5 à 10 jours ouvrés</strong> selon la nature de la prestation et la disponibilité des accès. En cas d'urgence signalée, nous étudions la pos`
- **HIGH** — legal — `services[4].heroDescription`
  - Reason: Promesse de délai chiffré (24 à 48 heures) potentiellement engageante ; à rendre non chiffrée sans changer le sens.
  - Expected: `Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un intérieur sain sous 24 à 48 heures.`
  - Value: `Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un intérieur sain dans un délai compatible avec le séchage.`
- **HIGH** — legal — `services[6].faqAdditions[1].answer`
  - Reason: Délai chiffré (48 à 72 heures) potentiellement engageant ; à neutraliser de façon conservatrice.
  - Expected: `<p>Selon la surface et l'état du logement, l'intervention peut être planifiée sous 48 à 72 heures. Pour les situations urgentes liées à une date d'état des lieux imminente, une organisation en journée ou demi-journée per`
  - Value: `<p>Selon la surface et l'état du logement, l'intervention peut être planifiée dans des délais courts. Pour les situations urgentes liées à une date d'état des lieux imminente, une organisation en journée ou demi-journée `
- **MEDIUM** — orthographe — `services[2].whyUsBullets[0]`
  - Reason: Faute d’orthographe : « vitrots » → « vitriots ».
  - Expected: `Connaissance des balcons exposés à la pollution des axes vitrots et aux dépôts végétaux du Parc des Lilas.`
  - Value: `Connaissance des balcons exposés à la pollution des axes vitriots et aux dépôts végétaux du Parc des Lilas.`

