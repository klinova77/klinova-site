import type { City } from '~/types/geo';

const chelles: City = {
  name: 'Chelles',
  slug: 'chelles',
  postalCodes: ['77500'],
  customDescription: 'Expert en nettoyage professionnel depuis 2020 • Intervention 7j/7 en Seine-et-Marne',
  department: { name: 'Seine-et-Marne', code: '77', slug: 'seine-et-marne' },
  districts: ['Centre-ville', 'Chantereine', 'Mont-Chauvet', 'Aulnoy', 'Coudreaux'],
  nearbyCities: ['montfermeil', 'gournay-sur-marne', 'noisy-le-grand'],
  ctaOverride: "Planifier une intervention à Chelles",
  landmarks: [
    'Gare RER E Chelles-Gournay',
    'Centre commercial BAY 2',
    'Parc du Souvenir Émile Fouchard',
    'École Centrale de Paris (campus)'
  ],
  specificChallenges: [
    'Copropriétés des années 70-90 nécessitant des protocoles adaptés',
    'Proximité RN34 : salissures de circulation importantes',
    'Problèmes d\'étanchéité récurrents dans les constructions anciennes'
  ],
  testimonial: {
    text: "Intervention rapide et professionnelle pour notre copropriété de 120 logements. L'équipe Klinova a su s'adapter aux contraintes de notre syndic et aux horaires des résidents. Résultat impeccable !",
    author: "Mme Dupont",
    role: "Présidente du conseil syndical",
    building: "Résidence Les Érables"
  },
  faq: [
    {
      question: "Quel est le délai d'intervention à Chelles ?",
      answer: "Nous intervenons sous 24-48h à Chelles grâce à notre proximité géographique. Pour les urgences (sinistres, événements exceptionnels), nous pouvons mobiliser une équipe dans les 2-4 heures."
    },
    {
      question: "Travaillez-vous avec les syndics de copropriété à Chelles ?",
      answer: "Absolument ! Nous avons l'habitude de collaborer avec les syndics chellois. Nous adaptons nos horaires d'intervention, fournissons tous les documents nécessaires (devis détaillé, attestation d'assurance, compte-rendu post-intervention) et respectons les procédures de chaque copropriété."
    },
    {
      question: "Comment gérez-vous l'accès et le stationnement dans le centre de Chelles ?",
      answer: "L'un de nos avantages à Chelles est la facilité de stationnement autour du centre-ville et du quartier Chantereine. Cela nous permet d'acheminer notre matériel professionnel sans contrainte logistique et de respecter les créneaux horaires convenus."
    }
  ],
  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `
        <div class="chelles-moquettes-intro">
          <div class="intro-badge">
            <span class="badge-icon">🏘️</span>
            <span class="badge-text">Expertise Chelles • 150+ interventions depuis 2020</span>
          </div>
          
          <h3 class="intro-title">Nettoyage de moquettes adapté aux copropriétés chelliennes</h3>
          
          <div class="context-box">
            <p class="lead-text">À Chelles, nos interventions de <strong>nettoyage de moquettes</strong> concernent principalement les <span class="highlight">450+ copropriétés de la commune</span>, dont 70% construites entre 1970 et 1990. Ces résidences, situées dans les quartiers du Centre-ville, de Chantereine et du Mont-Chauvet, présentent des défis spécifiques que nous maîtrisons parfaitement.</p>
          </div>

          <div class="challenges-section">
            <h4 class="section-subtitle">Problématiques locales identifiées</h4>
            <div class="challenges-grid">
              <div class="challenge-item">
                <span class="challenge-icon">🛣️</span>
                <div class="challenge-content">
                  <strong>Salissures de circulation</strong>
                  <p>Proximité RN34 et axes de desserte : taches grasses persistantes dans les halls, particulièrement marquées en hiver avec les résidus de sel de déneigement.</p>
                </div>
              </div>
              
              <div class="challenge-item">
                <span class="challenge-icon">💧</span>
                <div class="challenge-content">
                  <strong>Auréoles d'humidité</strong>
                  <p>Infiltrations typiques des constructions 70-90 créant des auréoles jaunâtres et favorisant les odeurs de moisi, notamment en rez-de-chaussée.</p>
                </div>
              </div>
              
              <div class="challenge-item">
                <span class="challenge-icon">🏢</span>
                <div class="challenge-content">
                  <strong>Contraintes résidentielles</strong>
                  <p>Ventilation souvent défaillante prolongeant les temps de séchage. Nos protocoles privilégient un séchage rapide pour minimiser la gêne.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="advantages-section">
            <h4 class="section-subtitle">Notre expertise locale</h4>
            <div class="advantages-list">
              <div class="advantage-item">
                <span class="check-mark">✓</span>
                <div class="advantage-text">
                  <strong>Accessibilité optimale :</strong> Stationnement facilité dans le centre et à Chantereine pour l'acheminement de notre matériel professionnel
                </div>
              </div>
              <div class="advantage-item">
                <span class="check-mark">✓</span>
                <div class="advantage-text">
                  <strong>Connaissance terrain :</strong> <span class="stat-number">150+ interventions</span> réalisées depuis 2020 dans les copropriétés chelliennes
                </div>
              </div>
              <div class="advantage-item">
                <span class="check-mark">✓</span>
                <div class="advantage-text">
                  <strong>Réactivité renforcée :</strong> Délai d'intervention 24-48h, urgences traitées en 2-4h grâce à notre proximité
                </div>
              </div>
            </div>
          </div>

          <div class="schedule-section">
            <h4 class="section-subtitle">Planification adaptée</h4>
            <p class="schedule-intro">Nos équipes ont développé une expertise dans la <strong>gestion des créneaux horaires</strong> pour minimiser l'impact sur la vie des copropriétés :</p>
            
            <div class="time-options">
              <div class="time-option">
                <span class="time-icon">🌅</span>
                <div class="time-details">
                  <strong>Créneaux matinaux 7h-9h</strong>
                  <span>Idéal pour les halls d'accueil • Séchage complet avant 14h</span>
                </div>
              </div>
              <div class="time-option">
                <span class="time-icon">🌆</span>
                <div class="time-details">
                  <strong>Interventions soirées 19h-21h</strong>
                  <span>Zones de circulation • Remise en service le lendemain</span>
                </div>
              </div>
            </div>
            
            <div class="performance-highlight">
              <p>Sur les circulations très fréquentées, nos protocoles garantissent un <strong>séchage accéléré (3-4 heures)</strong> grâce à des extracteurs haute performance et ventilateurs de séchage professionnels.</p>
            </div>
          </div>

          <div class="satisfaction-summary">
            <div class="satisfaction-stats">
              <div class="stat-item">
                <span class="stat-value">98%</span>
                <span class="stat-label">Satisfaction clients</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">4,2h</span>
                <span class="stat-label">Délai moyen remise en service</span>
              </div>
            </div>
            <p class="satisfaction-note">Basé sur 150+ interventions • Aucun incident de sur-mouillage recensé</p>
          </div>
        </div>

        <style>
          .chelles-moquettes-intro {
            font-family: system-ui, sans-serif;
            line-height: 1.6;
            color: #2d3748;
          }

          .intro-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #3F8D65, #48a674);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 8px rgba(63, 141, 101, 0.2);
          }

          .badge-icon {
            font-size: 1.1rem;
          }

          .intro-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }

          .context-box {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border-left: 4px solid #3F8D65;
            border-radius: 0 12px 12px 0;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .lead-text {
            margin: 0;
            font-size: 1.1rem;
            line-height: 1.7;
          }

          .highlight {
            background: linear-gradient(120deg, rgba(63, 141, 101, 0.15), rgba(63, 141, 101, 0.15));
            padding: 2px 4px;
            border-radius: 4px;
            font-weight: 600;
            color: #2d5016;
          }

          .section-subtitle {
            color: #2d3748;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e2e8f0;
          }

          .challenges-section, .advantages-section, .schedule-section {
            margin-bottom: 2.5rem;
          }

          .challenges-grid {
            display: grid;
            gap: 1.5rem;
            margin-top: 1rem;
          }

          @media (min-width: 768px) {
            .challenges-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .challenge-item {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            transition: all 0.2s ease;
          }

          .challenge-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(63, 141, 101, 0.1);
            border-color: #3F8D65;
          }

          .challenge-icon {
            font-size: 1.5rem;
            display: block;
            margin-bottom: 0.8rem;
          }

          .challenge-content strong {
            color: #3F8D65;
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }

          .challenge-content p {
            margin: 0;
            font-size: 0.95rem;
            color: #4a5568;
            line-height: 1.5;
          }

          .advantages-list {
            space-y: 1rem;
          }

          .advantage-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            padding: 1rem;
            background: #fafafa;
            border-radius: 8px;
            border-left: 3px solid #3F8D65;
            margin-bottom: 1rem;
          }

          .check-mark {
            color: #3F8D65;
            font-weight: bold;
            font-size: 1.1rem;
            flex-shrink: 0;
            margin-top: 0.1rem;
          }

          .advantage-text {
            flex: 1;
          }

          .stat-number {
            background: #3F8D65;
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 0.9rem;
          }

          .schedule-intro {
            margin-bottom: 1.5rem;
            font-size: 1.05rem;
          }

          .time-options {
            display: grid;
            gap: 1rem;
            margin: 1.5rem 0;
          }

          @media (min-width: 768px) {
            .time-options {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .time-option {
            background: white;
            border-radius: 10px;
            padding: 1.2rem;
            border: 2px solid #e2e8f0;
            display: flex;
            gap: 1rem;
            align-items: center;
            transition: all 0.2s ease;
          }

          .time-option:hover {
            border-color: #3F8D65;
            box-shadow: 0 2px 8px rgba(63, 141, 101, 0.1);
          }

          .time-icon {
            font-size: 1.3rem;
            flex-shrink: 0;
          }

          .time-details strong {
            color: #3F8D65;
            display: block;
            margin-bottom: 0.3rem;
            font-weight: 600;
          }

          .time-details span {
            font-size: 0.9rem;
            color: #6b7280;
          }

          .performance-highlight {
            background: linear-gradient(135deg, #dff1e8, #c0e2d0);
            padding: 1.2rem;
            border-radius: 8px;
            margin-top: 1.5rem;
            border-left: 3px solid #3F8D65;
          }

          .performance-highlight p {
            margin: 0;
            font-size: 1rem;
            color: #2d5016;
          }

          .satisfaction-summary {
            margin-top: 2.5rem;
            padding-top: 2rem;
            border-top: 1px solid #e2e8f0;
            text-align: center;
          }

          .satisfaction-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 1rem;
          }

          @media (max-width: 767px) {
            .satisfaction-stats {
              flex-direction: column;
              gap: 1.5rem;
            }
          }

          .stat-item {
            text-align: center;
          }

          .stat-value {
            display: block;
            font-size: 2rem;
            font-weight: bold;
            color: #3F8D65;
            line-height: 1;
          }

          .stat-label {
            display: block;
            font-size: 0.9rem;
            color: #6b7280;
            margin-top: 0.3rem;
          }

          .satisfaction-note {
            font-size: 0.85rem;
            color: #6b7280;
            margin: 0;
            font-style: italic;
          }
        </style>
      `,

      uniqueDeepDive: `<strong>Contexte opérationnel spécifique à Chelles :</strong>

Notre expérience de plus de 150 interventions dans les copropriétés chelliennes nous a permis d'identifier et de maîtriser les particularités locales. Le stationnement facilité autour du centre-ville et du quartier Chantereine constitue un avantage logistique majeur, permettant l'acheminement optimal de notre matériel professionnel sans contrainte particulière.

<strong>Protocole technique adapté aux spécificités locales :</strong>

<strong>Phase de préparation :</strong>
<br>• Aspiration méthodique avec équipement HEPA pour éliminer les particules fines
<br>• Signalement photographique systématique des taches pour traçabilité et suivi
<br>• Test préalable des fibres pour adapter la puissance d'extraction
<br>• Protection des zones sensibles (bois, métal, électronique)

<strong>Phase d'intervention sur moquettes aiguilletées :</strong>
<br>• Application de pré-spray enzymatique spécifique aux salissures grasses (fréquentes près de la RN34)
<br>• Brossage mécanique contrôlé pour décoller les résidus incrustés
<br>• Extraction à haute performance avec régulation d'humidité pour éviter le sur-mouillage
<br>• Traitement spécialisé des auréoles anciennes avec neutralisant pH adapté

<strong>Gestion post-sinistre (dégâts des eaux fréquents dans les constructions 70-90) :</strong>
<br>• Test humidimétrique systématique pour évaluer l'imprégnation
<br>• Reprise ciblée des auréoles avec solutions enzymatiques anti-moisissures
<br>• Séchage accéléré par ventilation forcée si nécessaire
<br>• Contrôle final et certification de la remise en état

<strong>Erreurs techniques à éviter absolument :</strong>

<br>❌ <strong>Shampouineuse grand public :</strong> Risque majeur de sur-mouillage et développement de moisissures dans les fibres
<br>❌ <strong>Poudre encapsulante non aspirée :</strong> Formation de résidus collants attirant rapidement la nouvelle saleté
<br>❌ <strong>Détachants agressifs sur fibres anciennes :</strong> Risque de jaunissement irréversible, particulièrement sur les installations d'époque
<br>❌ <strong>Séchage insuffisant :</strong> Odeurs de moisi et dégradation prématurée des fibres

<strong>Recommandation préventive personnalisée :</strong>

L'installation de tapis de propreté adaptés aux dimensions des sas d'entrée permet de réduire de 30 à 40% les salissures ramenées de l'extérieur. Cette mesure préventive est particulièrement recommandée dans le contexte chellien en raison de la proximité des axes de circulation (RN34, desserte locale) générant des salissures spécifiques.

<strong>Particularités climatiques et saisonnières :</strong>

Les interventions hivernales nécessitent une attention particulière aux résidus de sel de déneigement, particulièrement corrosifs pour certaines fibres. Nos protocoles incluent un pré-traitement spécifique et un rinçage prolongé pour éliminer ces résidus cristallins.

<strong>Certification qualité et suivi :</strong>

Chaque intervention fait l'objet d'un rapport détaillé incluant l'état initial (photos), les produits utilisés, les zones traitées et les recommandations d'entretien. Un suivi à 48h est systématiquement proposé pour s'assurer de la satisfaction du résultat et de l'absence de résurgence.

<em><strong>Expertise certifiée Klinova :</strong> Plus de 150 interventions réalisées à Chelles depuis 2020, avec un taux de satisfaction client de 98% et aucun incident de sur-mouillage recensé. Délai moyen de remise en service : 4,2 heures, garantissant une gêne minimale pour les résidents.</em>`
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `Les parkings souterrains de Chelles demandent un traitement méthodique adapté aux contraintes locales : dégraissage des accumulations d'hydrocarbures, reprise des marquages salis par les résidus hivernaux, et gestion rigoureuse des eaux de nettoyage. Nos interventions sont généralement programmées de nuit (22h–6h) pour libérer intégralement les emplacements et minimiser l'impact sur les résidents.`,
      
      uniqueDeepDive: `<strong>Phase de pré-visite technique :</strong> Évaluation systématique des pentes d'évacuation, localisation des siphons et avaloirs, identification des locaux techniques et poubelles, vérification des accès pompiers et issues de secours.

<strong>Protocole d'intervention adapté :</strong>
<br>• Balayage mécanisé préalable pour éliminer les déchets et gravats
<br>• Application de dégraissant alcalin professionnel sur les zones d'accumulation
<br>• Passage d'autolaveuse avec aspiration renforcée pour les surfaces étendues
<br>• Reprises manuelles sur les taches d'huiles anciennes avec temps de contact prolongé et brossage spécialisé
<br>• Rinçage contrôlé avec récupération intégrale des eaux souillées
<br>• Contrôle final et élimination des flaques résiduelles

<strong>Planification et organisation :</strong> Intervention par niveaux successifs avec signalétique temporaire et affichage préventif 72h en amont pour informer les copropriétaires.

<strong>Pratiques à proscrire :</strong>
<br>• Nettoyeur haute pression "plein régime" sur les murs et équipements techniques
<br>• Surdosage en produits chimiques pouvant endommager les revêtements
<br>• Évacuation des eaux de rinçage vers les réseaux pluviaux (interdiction réglementaire)

<strong>Option séchage accéléré :</strong> Mise en œuvre de turbines de séchage industrielles pour une réouverture immédiate si contraintes particulières de la copropriété.`
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `Les balcons chelliens nécessitent une approche spécialisée : exposition aux poussières de voirie (proximité RN34), développement de micro-végétations en saison humide, traces d'arrosage calcaires, et garde-corps sensibles (aluminium, verre trempé). Objectif : obtenir un résultat impeccable sans éclaboussures vers les voisins et en respectant scrupuleusement le règlement de copropriété (horaires, écoulements).`,
      
      uniqueDeepDive: `<strong>Préparation et sécurisation :</strong> Retrait préalable des textiles et plantes, marquage des zones fragiles (bois huilé, joints silicone récents), protection des évacuations et des façades adjacentes.

<strong>Méthodologie d'intervention :</strong>
<br>• Dépoussiérage minutieux des recoins et évacuations
<br>• Prélavage doux pour ramollir les dépôts adhérents
<br>• Application de produit pH adapté selon la nature du support (béton, carrelage, bois composite)
<br>• Brossage manuel ou monobrosse légère selon l'état et la fragilité
<br>• Rinçage maîtrisé avec récupération des eaux
<br>• Finitions spécialisées vitres et garde-corps avec produit anti-traces

<strong>Spécificités techniques :</strong>
<br>• Sur calcaires clairs : proscrire absolument les acides forts qui créent des gravures irréversibles
<br>• Traitements des verdissements avec biocide professionnel à faible odeur, respectueux de l'environnement

<strong>Conseils d'entretien personnalisés :</strong> Entretien préventif trimestriel à l'eau tiède et microfibre pour maintenir l'état optimal entre nos interventions professionnelles.`
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `Le traitement des fientes de pigeons sur balcons et terrasses suit un protocole sanitaire strict : port d'EPI complets par nos équipes, pré-désinfection systématique, retrait mécanique sécurisé, nettoyage approfondi du support, et désinfection finale. Intervention cadrée et discrète, adaptée aux contraintes de voisinage.`,
      
      uniqueDeepDive: `<strong>Protocole sanitaire complet :</strong>
<br>• Équipement de protection individuelle renforcé (combinaison, masque FFP3, gants nitrile)
<br>• Pulvérisation désinfectante préalable avec respect du temps de contact réglementaire
<br>• Raclage et aspiration avec équipement HEPA pour éviter la mise en suspension
<br>• Nettoyage du support avec produit pH adapté et action mécanique contrôlée
<br>• Désinfection finale avec virucide agréé contact alimentaire
<br>• Gestion des déchets biologiques en double ensachage selon protocole DASRI

<strong>Traitement exhaustif :</strong> Attention particulière aux recoins (coffres volets-roulants, seuils, dessous de lisses) souvent négligés et pourtant fortement contaminés.

<strong>Solutions préventives :</strong> Installation de pics inox ou systèmes d'effarouchement si validés par le règlement de copropriété.

<strong>Consignes post-intervention :</strong>
<br>• Délai de 72h minimum avant remise en place des textiles et mobilier extérieur
<br>• Ne jamais mouiller les fientes avant notre intervention (risque de propagation)
<br>• Éviter le balai sec qui génère des poussières biologiques potentiellement dangereuses`
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `Les demandes fréquentes à Chelles concernent le nettoyage de canapés en tissu (auréoles d'usage, taches alimentaires, odeurs) et de tapis synthétiques de grande taille. Notre objectif : garantir un retour à l'usage normal le jour même grâce à des techniques de faible humidité et l'emploi d'additifs neutralisants si nécessaire.`,
      
      uniqueDeepDive: `<strong>Protocole canapés tissus :</strong>
<br>• Test systématique de solidité des couleurs sur zone cachée
<br>• Pré-spray enzymatique ciblé sur les zones d'assise les plus sollicitées
<br>• Brossage doux pour décoller les résidus sans endommager les fibres
<br>• Extraction à faible humidité pour éviter les déformations et garantir un séchage rapide

<strong>Spécificités microfibres :</strong> Passes croisées avec équipement spécialisé pour éviter la formation d'auréoles et préserver l'aspect velours.

<strong>Traitement des tapis selon composition :</strong>
<br>• Distinction cruciale des fibres : laine et jute nécessitent une très basse humidité pour éviter déformations et jaunissements
<br>• Tapis synthétiques : protocole standard avec séchage accéléré possible

<strong>Conseils préventifs :</strong>
<br>• Aspiration hebdomadaire avec aspirateur HEPA pour préserver les fibres
<br>• Éviter absolument les sprays ménagers acides ou fortement alcalins
<br>• Aération systématique 2-4h après notre intervention pour optimiser le séchage`
    }
  ]
};

export default chelles;