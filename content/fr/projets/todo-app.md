## Contexte & Enjeux Métier

Dans le cadre de l'obtention de mon titre d'**Expert en développement logiciel (Bac+5 / RNCP Niveau 7)** à Ynov Campus Strasbourg, j'ai réalisé la refonte intégrale de l'application historique _Getting Started Todo App_ de Docker en une **plateforme distribuée Cloud-Native et DevSecOps**.

L'objectif était de prouver la maîtrise d'une chaîne logicielle d'ingénierie moderne : conception d'une architecture microservices modulaire, provisionnement automatisé d'infrastructure cloud, sécurisation Zero-Trust et maintien en condition opérationnelle (MCO).

![Interface de gestion de tâches de l'application](/works-and-projects/mastere-ynov/todo-app-cloud/images/notes_added.webp)

## Architecture Cloud-Native & Infrastructure as Code (IaC)

L'infrastructure applicative est entièrement déclarée et déployée sous forme de code via **Terraform** sur Microsoft **Azure** :

- **Cluster Kubernetes géré (Azure AKS) :** Orchestration conteneurisée des microservices (Frontend React, Backend API Node.js/Express, Auth Service, Base MySQL managée).
- **Réseau isolé & Zero-Trust :** Déploiement dans un réseau virtuel privé (**VNet**) étanche, sans exposition publique de la base de données.
- **Gestion sécurisée des secrets :** Montage direct des secrets en mémoire des conteneurs via **Azure Key Vault Provider for Secrets Store CSI Driver**, interdisant tout secret en clair dans les fichiers de configuration ou le code.

![Espace de gestion de compte et sécurité](/works-and-projects/mastere-ynov/todo-app-cloud/images/account.webp)

## Pipeline DevSecOps & Maintien Opérationnel (MCO)

### CI/CD fédéré et scans de vulnérabilités

- **Fédération OIDC (OpenID Connect) :** Pipelines GitHub Actions authentifiés auprès d'Azure sans clé statique ni mot de passe longue durée stocké dans le dépôt.
- **Analyse de sécurité continue :** Scans automatisés des images Docker par **Trivy** avant publication sur le registre privé (**Azure ACR**), couplés à l'analyse de dépendances par Dependabot.
- **Déploiement continu via Helm :** Déploiements progressifs par charts Helm avec stratégie de **Rolling Update** pour des mises à jour sans interruption de service (Zero-Downtime).

### Résilience & Observabilité

- **Sondes Kubernetes découplées :** Configuration de sondes `readiness` et `liveness` pour recycler automatiquement les pods défaillants sans perte de trafic.
- **Validation sous charge :** Campagnes de tests de charge sous **k6** confirmant un temps de réponse **p95 < 300 ms** et un **SLA supérieur à 99.9 %**.

## Impact & Résultats

- **SLA 99.9 % validé** sous stress-test k6 avec distribution de charge progressive.
- **0 secret statique** dans l'ensemble de la chaîne CI/CD et des dépôts Git.
- **Architecture Zero-Downtime :** Déploiements et bascules de versions transparents pour l'utilisateur final.
- **Validation de la certification d'État :** Validation des compétences RNCP de conception logicielle et de MCO.

---

### Documentation & Ressources

Les dossiers techniques complets soumis pour l'évaluation RNCP sont consultables en intégralité :

- [Consulter le dossier d'évaluation : Concevoir et Développer (PDF)](/works-and-projects/mastere-ynov/todo-app-cloud/concevoir-et-developper.pdf)
- [Consulter le dossier d'évaluation : Maintien en Condition Opérationnelle (PDF)](/works-and-projects/mastere-ynov/todo-app-cloud/maintien-condition-op.pdf)
- [Explorer le code source sur GitHub](https://github.com/wanicolas/todo-app-cloud)
