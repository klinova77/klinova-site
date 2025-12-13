# 🧭 FloatingBottomCTA — Barre d’action flottante Klinova/Stop-Punaises

Composant **mobile-first**, réactif et piloté par `data-attributes`, utilisé pour l’affichage
des appels à l’action persistants (CTA bas d’écran).

---

## ⚙️ Rôle général
La barre sert à maintenir **2 CTA principaux** toujours visibles :
- 📞 **Appel** (`tel:`)  
- 🧾 **Devis gratuit / popup**  

Elle se masque automatiquement au-dessus du hero (`data-hide-floating-cta`)
et devient active (bouton vert) lorsqu’une section d’activation entre dans le viewport
(`data-activate-floating-cta`).

---

## 🧩 Emplacement & inclusion

Importée via `LayoutWithCTA.astro` :

```astro
{stickyEnabled && !isContact && (
  <FloatingBottomCTA
    enabled
    showAfter={stickyShowAfter}           /* 'immediate' | 'scroll' */
    colorMode={computedColorMode}         /* 'instant' | 'progressive' */
    hideSelector="[data-hide-floating-cta]"
    activateSelector="[data-activate-floating-cta]"
    activateDelayMs={600}
    mobileOnly={stickyMobileOnly}
  />
)}



| Prop               | Type                          | Défaut                         | Description                                                         |
| ------------------ | ----------------------------- | ------------------------------ | ------------------------------------------------------------------- |
| `enabled`          | `boolean`                     | `true`                         | Active / désactive la barre                                         |
| `showAfter`        | `'immediate' \| 'scroll'`     | `'scroll'`                     | Mode d’apparition initial                                           |
| `colorMode`        | `'instant' \| 'progressive'`  | auto                           | Définit la couleur initiale des CTA                                 |
| `mobileOnly`       | `boolean`                     | `true`                         | Cache la barre sur desktop (`lg:hidden`)                            |
| `hideSelector`     | `string`                      | `[data-hide-floating-cta]`     | Sections masquant la barre (souvent le hero)                        |
| `activateSelector` | `string`                      | `[data-activate-floating-cta]` | Section qui déclenche le passage du bouton “Devis” en vert          |
| `activateDelayMs`  | `number`                      | `600`                          | Délai après activation avant de colorer le bouton                   |
| `colorMode`        | `'instant'` | `'progressive'` | auto                           | Instant = vert direct ; progressive = devient vert après activation |


🧱 Structure HTML
<div id="sticky-cta">
  <div class="container-responsive">
    <a href="tel:+33676738661">📞 06 76 73 86 61</a>
    <a data-role="quote-button" data-open-popup="floating-bar-mobile">Devis gratuit</a>
  </div>
</div>


Le bouton “Devis” devient vert lorsque data-active="true" est ajouté.

Button.astro propage les attributs via data={{ role: 'quote-button' }}.

🎨 Comportement couleur
État	Couleur	Détails
Initial	Blanc	visible ou masqué selon le scroll
Activation (progressive)	Vert var(--color-action-500)	déclenché par activateSelector
Hover	Vert foncé var(--color-action-600)	transition fluide

La logique d’activation s’appuie sur IntersectionObserver.
Une fois le bouton vert, il le reste (pas de re-blanchiment en scroll inverse).

🧩 Intégration des pages

Exemple sur une page :

<LayoutWithCTA
  popupContext={popupContext}
  stickyEnabled={true}
  stickyShowAfter="scroll"
  stickyMobileOnly={true}
  seo={{ title: 'Nettoyage de moquettes – Klinova', description: '...' }}
>
  <section data-hide-floating-cta>…</section>
  <section data-activate-floating-cta id="contact">…</section>
</LayoutWithCTA>

🧠 Règles UX

Un seul CTA vert visible à la fois sur écran (cohérence visuelle).

Barre masquée sur la page Contact.

Toujours responsive et compatible avec safe-area-inset-bottom (iPhone).

🧰 Debug et test

En console :

document.getElementById('sticky-cta')               // → div présente ?
getComputedStyle(sticky).display                    // → block
document.querySelector('[data-role="quote-button"]') // → bouton trouvé ?


Forcer la couleur :

document.querySelector('[data-role="quote-button"]').setAttribute('data-active','true')

🧼 Maintenance

En cas de refactor du header mobile : conserver les événements sp:menu_open / sp:menu_close.

Si Tailwind purge une classe (rare), vérifier la présence de .btn-secondary et .btn-primary dans la safelist.

Les variables couleurs viennent du thème actif (--color-action-500, --color-action-600).

Auteur : Julien Lamouchi
Dernière mise à jour : (ajouter la date du commit)


---

## 💾 4. Commit suggéré

Une fois le fichier ajouté :
```bash
mkdir src/components/UI/FloatingBottomCTA
mv src/components/UI/FloatingBottomCTA.astro src/components/UI/FloatingBottomCTA/
echo "# README created for FloatingBottomCTA" > src/components/UI/FloatingBottomCTA/README.md
git add src/components/UI/FloatingBottomCTA
git commit -m "docs(ui): add README for FloatingBottomCTA behavior and usage"
