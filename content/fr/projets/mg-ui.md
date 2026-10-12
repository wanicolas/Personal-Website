## Contexte & Enjeux Métier

Au sein de Logitud Solutions (éditeur GovTech pour les collectivités territoriales), la multiplication des applications front-end entraînait une dette technique croissante : duplication de code CSS artisanal, hétérogénéité visuelle et difficultés d'adaptation aux exigences légales d'accessibilité numérique (**RGAA**).

Pour fédérer l'ensemble des développements et harmoniser l'expérience usager, j'ai initié et conçu **MG_UI**, une bibliothèque de composants Vue 3 / Nuxt packagée et distribuée en interne puis sur NPM ([`@numesia/mg_ui`](https://www.npmjs.com/package/@numesia/mg_ui)), s'appuyant sur les bases ergonomiques de **Flowbite**.

![Exemple du design system : composants de formulaires et champs accessibles](/works-and-projects/alternance-logitud/mg-ui/flowbite-forms.webp)

## Architecture & Thématisation Dynamique

Bâtie sur le socle de **Flowbite**, **Vue 3**, **TailwindCSS**, **Headless UI** et **VueUse**, la bibliothèque répond aux contraintes d'un écosystème multi-collectivités :

- **Design Tokens en temps réel :** Chaque commune cliente possède sa propre charte graphique (blason municipal, couleurs dominantes, typographies). Grâce à une architecture de variables CSS injectées dynamiquement, chaque application s'adapte instantanément à l'identité visuelle de la ville sans nécessiter la moindre recompilation du code source.
- **Socle Flowbite & Approche Headless :** Exploitation des motifs d'interface de Flowbite enrichis d'une gestion stricte de l'accessibilité (états ARIA, pièges de focus, navigation au clavier intégrale).
- **Composables d'accessibilité réutilisables :** Standardisation des formulaires administratifs complexes avec des composables dédiés (`useAccessibleField`), liant automatiquement `aria-invalid` et messages d'erreurs `aria-live`.

![Exemple du design system : variantes de boutons et états interactifs](/works-and-projects/alternance-logitud/mg-ui/flowbite-buttons.webp)

## Performance & Optimisation Web Vitals

La standardisation des interfaces via MG_UI a permis d'optimiser radicalement la vitesse perçue et réelle des portails citoyens :

- **LCP (Largest Contentful Paint) divisé par 3 :** Passage de 2.8s à **0.9s**, offrant un affichage quasi-instantané y compris sur smartphone en 4G.
- **Stabilité visuelle (CLS à 0.01) :** Éradication des décalages de disposition grâce au dimensionnement rigoureux des composants et au préchargement des ressources.
- **Modularité & Tree-shaking :** Import chirurgical des composants et dépendances légères pour un bundle applicatif minimal.

## Impact & Résultats

- **-40 % sur le temps d'intégration** de nouvelles interfaces pour les développeurs de l'équipe.
- **Conformité RGAA 4.1.2 et WCAG 2.1 AA :** Audit contrastes et compatibilité lecteurs d'écran validés sur l'ensemble du catalogue de composants.
- **Patrimoine logiciel unifié :** Package npm partagé servant de socle commun à l'ensemble des solutions de la gamme Mon-Guichet et PopQueue.

---

### Documentation & Ressources

- [Package officiel sur NPM (@numesia/mg_ui)](https://www.npmjs.com/package/@numesia/mg_ui)
- [Consulter le rapport d'expérience d'ingénierie logicielle (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
