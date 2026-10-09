## Contexte & Enjeux Métier

Dans le cadre de la modernisation de ses services publics, la **Ville de Mulhouse** a confié à Logitud Solutions la refonte intégrale de la billetterie et des ventes en ligne de ses équipements aquatiques et sportifs (**Aqua Mulhouse**). L'enjeu principal était de remplacer un outil historique vieillissant par une plateforme SaaS transactionnelle moderne, interconnectée à l'écosystème territorial Mon-Guichet.

Le système devait absorber des pics d'affluence estivaux majeurs tout en gérant une grande diversité de produits : entrées unitaires, abonnements annuels nominatifs et cours collectifs à jauges limitées (aquagym, natation).

![Tunnel d'achat et sélection des créneaux](/works-and-projects/alternance-logitud/mg-shop/user_buy.png)

## Architecture & Choix Techniques

J'ai conçu l'architecture front-end de la solution autour de **Nuxt 4**, de **TypeScript strict** et des composants **TailwindCSS / Nuxt UI**, garantissant maintenabilité et rapidité d'exécution.

L'application repose sur un découpage en couches strict :

- **Présentation & UI :** Composants réutilisables auto-importés, gestion fine des interactions et feedback utilisateur via notifications toast.
- **État & Logique Métier :** Stores **Pinia** réactifs découplés de la vue et composables modulaires pour la gestion du panier et de la sélection des créneaux.
- **Réseau & Contrats d'API :** Intercepteur d'API résilient (`useApiFetch`) encapsulant `ofetch`, gérant le renouvellement automatique des sessions et le typage strict des DTOs avec l'API back-end NestJS.

## Défis Techniques & Solutions

### Résilience transactionnelle PayFIP & Idempotence

L'interfaçage avec la passerelle de télépaiement de la DGFiP (**PayFIP**) exigeait une intégrité financière absolue :

- **Verrous temporaires Redis (TTL 10 min) :** Blocage en temps réel des créneaux à jauge limitée dès la mise au panier pour éviter tout overbooking, relâchés automatiquement en cas d'abandon.
- **Clé d'idempotence unique SHA-256 :** Empêche tout double débit bancaire en cas de clics répétés de l'usager.
- **Validation par double canal :** Redirection web synchrone pour rassurer l'administré combinée à un webhook asynchrone sécurisé (signature HMAC SHA-256 de serveur à serveur), seul déclencheur légal de l'émission du titre.

![Système de tiroirs latéraux empilables](/works-and-projects/alternance-logitud/mg-shop/drawer_multi_panel.png)

### Composants d'infrastructure avancés pour l'administration

Pour maximiser la productivité des régisseurs municipaux, j'ai développé plusieurs briques d'interface réutilisables :

- **DataTable bimode haute performance :** Filtrage, tri multi-colonnes et pagination instantanés côté client (< 30 ms) pour les listes courantes, avec bascule transparente en mode serveur pour les gros volumes, et exports natifs CSV/PDF.
- **Tiroirs empilables (Stackable Drawers) :** Gestion d'une pile de panneaux contextuels coulissants (LIFO) avec piégeage du focus conforme RGAA, évitant l'ouverture de modales intrusives lors de l'inspection de dossiers.
- **Visualiseur de différences JSON & Tableaux de bord :** Comparateur d'historique (Git-diff) pour l'audit des grilles tarifaires et intégration d'**Apache ECharts** pour le suivi des ventes et de la fréquentation.

![DataTable avec sélecteur de colonnes et export](/works-and-projects/alternance-logitud/mg-shop/datatable_export.png)

## Qualité, Performance & Accessibilité

- **Pipelines CI/CD stricts :** Contrôle automatisé sur chaque Pull Request (linting ESLint, vérification stricte des types TypeScript et tests unitaires **Vitest** atteignant 85% de couverture).
- **Accessibilité RGAA :** Raccourcis clavier universels (palette `Ctrl+K`), contrastes adaptés aux normes WCAG AA et gestion des focus-traps.

## Impact & Résultats

- **> 600 000 € de transactions** traitées en ligne de manière sécurisée.
- **90 % de dématérialisation** des achats de titres dès les premiers mois d'exploitation.
- **0 anomalie comptable** ou double débit grâce à l'architecture d'idempotence.
- **40 % de gain de temps** pour l'équipe technique lors de l'intégration de nouveaux modules administratifs.

---

### Documentation & Ressources

Pour approfondir les détails d'implémentation et les schémas d'architecture :

- [Consulter le rapport d'expérience d'ingénierie logicielle (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
