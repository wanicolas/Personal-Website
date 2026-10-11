## Contexte & Enjeux Métier

Dans le cadre de la modernisation de ses services publics, la **Ville de Mulhouse** a confié à Logitud Solutions la refonte intégrale de la billetterie et des ventes en ligne de ses équipements aquatiques et sportifs (**Aqua Mulhouse**). L'enjeu principal était de remplacer un outil historique vieillissant par une plateforme SaaS moderne, ergonomique et interconnectée à l'écosystème territorial Mon-Guichet.

Le front-end devait absorber de forts pics d'affluence estivaux tout en guidant facilement les usagers à travers une grande variété d'offres : entrées unitaires, abonnements annuels nominatifs et cours collectifs à jauges limitées (aquagym, natation).

![Tunnel d'achat et sélection des créneaux](/works-and-projects/alternance-logitud/mg-shop/user_buy.png)

## Architecture & Choix Techniques

J'ai conçu et développé l'architecture front-end de la solution autour de **Nuxt 4**, de **TypeScript strict** et de **TailwindCSS**, garantissant une ergonomie sans faille et une forte maintenabilité.

L'application repose sur un découpage front-end modulaire :

- **Présentation & Layout :** Composants réutilisables auto-importés, mise en page responsive et feedback interactif immédiat via un système de notifications toast.
- **État & Logique Métier :** Stores **Pinia** réactifs découplés de la vue et composables sur-mesure pour orchestrer le panier d'achat et le calendrier de réservation.
- **Communication Réseau & DTOs :** Composable d'interception d'API résilient (`useApiFetch`) encapsulant `ofetch`, assurant le typage strict des retours et la gestion fluide des sessions usagers.

![Panier d'achat et récapitulatif des commandes](/works-and-projects/alternance-logitud/mg-shop/user_cart.png)

## Défis Techniques & Solutions

### Tunnel d'achat fluide & Panier réactif multi-produits

L'expérience citoyenne a été pensée pour éliminer toute friction lors du passage de commande :

- **Réservation en temps réel :** Sélection visuelle sur calendrier dynamique avec vérification immédiate des jauges d'accueil disponibles avant ajout au panier.
- **Panier réactif (Pinia) :** Calcul instantané des tarifs dégressifs et des réductions spécifiques (résidents municipaux, familles, étudiants), avec persistance locale pour prévenir toute perte de panier en cas d'actualisation involontaire.
- **Gestion fine des erreurs réseau :** Guidage transparent en cas de déconnexion ou de créneau devenu indisponible, avec modales de reprise adaptées sans rupture du tunnel.

![Système de tiroirs latéraux empilables](/works-and-projects/alternance-logitud/mg-shop/drawer_multi_panel.png)

### Composants d'infrastructure avancés pour l'administration

Pour équiper efficacement les régisseurs municipaux dans la gestion des plannings et des inscrits, j'ai développé plusieurs briques d'interface réutilisables :

- **DataTable bimode haute performance :** Filtrage multi-colonnes, tri et pagination instantanés en mémoire côté navigateur (< 30 ms) sur les listes courantes, avec bascule transparente en mode serveur pour les gros volumes, et exports natifs CSV/PDF.
- **Tiroirs empilables (Stackable Drawers) :** Gestion d'une pile de panneaux latéraux superposables (LIFO) avec piégeage du focus conforme RGAA, permettant d'inspecter un dossier usager sans perdre le contexte de travail.
- **Visualiseur de différences JSON & Tableaux de bord :** Comparateur visuel (mode scindé ou unifié) pour l'audit des grilles tarifaires et intégration d'**Apache ECharts** pour le suivi des ventes et de la fréquentation.

![DataTable avec sélecteur de colonnes et export](/works-and-projects/alternance-logitud/mg-shop/datatable_export.png)

### Coordination technique & Pilotage Agile (25 sprints)

Au-delà de l'architecture front-end, j'ai assuré la coordination technique et l'industrialisation logicielle du projet sur 25 sprints Scrum : définition des standards de code, gouvernance qualité (CI/CD), résolutions d'architecture par POCs et animation des boucles de feedback avec la Ville de Mulhouse. Ce retour d'expérience a fait l'objet d'une [**soutenance dédiée disponible sur Slidev**](https://ynov-bloc3.vercel.app/) dans le cadre de ma certification RNCP 7.

## Qualité, Performance & Accessibilité

- **Pipelines CI/CD automatisés :** Contrôle de chaque Pull Request avec linting ESLint, vérification stricte du typage TypeScript et tests unitaires sous **Vitest** atteignant 85 % de couverture.
- **Ergonomie & Accessibilité :** Raccourcis clavier universels (palette de commandes `Ctrl+K`), contrastes validés selon les critères WCAG AA et gestion soignée des états ARIA.

## Impact & Résultats

- **> 600 000 € de transactions** traitées via le nouveau tunnel de vente en ligne.
- **90 % de dématérialisation** des achats d'entrées et abonnements dès les premiers mois d'exploitation.
- **40 % de gain de temps** pour l'équipe technique lors du développement des nouveaux écrans du back-office.
- **Parcours usager fluide et responsive**, plébiscité par les gestionnaires des piscines pour son intuitivité.

---

### Documentation & Ressources

Pour approfondir les détails d'implémentation et les démarches de pilotage :

- [Consulter le rapport d'expérience d'ingénierie logicielle (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
- [Consulter la présentation de soutenance sur le pilotage du projet (Slidev)](https://ynov-bloc3.vercel.app/)
- [Code source de la présentation sur GitHub](https://github.com/wanicolas/ynov-bloc3)
