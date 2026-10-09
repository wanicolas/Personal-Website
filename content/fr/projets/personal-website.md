## Contexte & Démarche d'Ingénierie

Un portfolio d'ingénieur web ne doit pas être une simple vitrine statique : c'est l'occasion idéale d'appliquer en toute autonomie ses **standards d'excellence technique**.

J'ai conçu ce site personnel comme un démonstrateur de bonnes pratiques logicielles modernes : architecture **Nuxt 4**, génération de contenu avec **Nuxt Content v3**, internationalisation fluide (**Nuxt I18n**), conformité légale d'accessibilité (**RGAA / Opquast Avancé**) et optimisation SEO de pointe.

![Aperçu du portfolio en thème sombre et clair](/img/personal-website.webp)

## Architecture & Choix Techniques

Le projet s'appuie sur les dernières avancées de l'écosystème Vue et Nuxt :

- **Nuxt 4 & Vue 3 :** Rendu hybride ultra-rapide avec génération statique optimisée (SSG), auto-import des composants et composables réactifs.
- **Typage TypeScript strict :** Sécurité statique totale sur l'ensemble de la base de code, incluant les clés de traduction d'I18n et les collections de contenus.
- **Nuxt Content v3 & Markdown :** Gestion modulaire et bilingue des études de cas techniques via des collections déclaratives (`projets_fr` et `projets_en`), couplées à des métadonnées typées.
- **Design minimaliste avec TailwindCSS :** Système de thème dynamique sombre / clair respectant les préférences du système d'exploitation sans scintillement (FOUC).

## Accessibilité, Qualité Web & SEO

Certifié **Opquast Avancé (808 points)**, j'ai apporté une attention méticuleuse à la qualité et à l'inclusion numérique :

- **Accessibilité native (RGAA / WCAG) :** Balisage HTML5 sémantique strict, liens d'évitement (« Aller au contenu »), contrastes de couleurs rigoureusement validés et navigation au clavier intégrale avec indicateurs de focus visibles.
- **Excellence SEO (Nuxt SEO) :** Génération automatisée des sitemaps XML, balises méta OpenGraph dynamiques, URLs canoniques et données structurées Schema.org.
- **Workflow de qualité automatisé :** Hooks Git pré-commit (**Husky**, **lint-staged**) couplés à des vérifications strictes sous **ESLint** et le compilateur TypeScript sur chaque push.

## Impact & Résultats

- **Score Lighthouse 100/100** en Performance, Accessibilité, Bonnes Pratiques et SEO.
- **100 % TypeScript strict** sans contournement de typage.
- **Code source ouvert :** Projet distribué sous licence libre MIT, consultable sur GitHub.

---

### Documentation & Liens

- [Visiter le site en production (nicolaswalter.fr)](https://nicolaswalter.fr)
- [Explorer le code source sur GitHub](https://github.com/wanicolas/Personal-Website)
