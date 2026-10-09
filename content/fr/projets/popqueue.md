## Contexte & Enjeux Métier

L'accueil physique des citoyens en mairie est une étape clé du service public territorial. Des files d'attente mal régulées créent de l'inconfort chez les usagers et perturbent le travail des agents au guichet.

Pour moderniser cette gestion sans imposer de matériel propriétaire coûteux, Logitud Solutions a créé **PopQueue**, une solution web modulaire temps réel. Ma mission a consisté à concevoir et développer **l'intégralité de l'interface usager sur borne tactile** ainsi que **de larges pans du back-office d'administration**, en synergie avec les composants de [**MG_UI**](/projets/mg-ui).

![Interface tactile de sélection de démarche sur la borne d'accueil](/works-and-projects/alternance-logitud/popqueue/choix_demarche.jpg)

## Architecture Front-End & Écosystème Temps Réel

L'écosystème synchronise instantanément trois applications front-end distinctes via des flux **WebSockets** :

- **L'application Borne Tactile (Usager) :** Développée intégralement pour un usage autonome sur tablette (choix de démarches, scan de convocation, distribution de tickets et check-in express).
- **La console Agent & les écrans Back-Office :** Écrans d'appel et de supervision conçus avec nos composants réutilisables [**MG_UI**](/projets/mg-ui), permettant aux agents de traiter les tickets et aux coordinateurs de superviser les flux en temps réel.
- **L'affichage dynamique en salle d'attente :** Diffusion instantanée des appels avec rappel visuel du numéro et orientation vers le bon guichet.

Côté front-end, un composable dédié (`usePopQueueSocket`) écoute les événements diffusés par le serveur WebSocket (`TicketCreated`, `TicketCalled`), assurant une réactivité sous les **100 ms** avec reconnexion automatique en cas d'aléa réseau.

![Tableau de bord de supervision globale des flux en temps réel](/works-and-projects/alternance-logitud/popqueue/supervision_globale_bo.jpg)

## Défis Techniques & Solutions

### Conception intégrale de la borne & Clavier virtuel autonome

Pour garantir la robustesse de la borne en mode kiosque, il était indispensable de maîtriser entièrement le comportement tactile :

- **Parcours usager épuré :** Arborescence de démarches claire, boutons surdimensionnés et contrastés pour une navigation sans friction.
- **Clavier virtuel sur-mesure :** L'usage du clavier virtuel natif des OS mobiles provoquant des décalages d'écran inesthétiques et l'apparition de barres d'outils parasites, j'ai développé un composant de clavier tactile virtuel autonome. Directement intégré au DOM, il est restreint aux caractères utiles (chiffres, lettres) et découplé du système sous-jacent.

![Clavier virtuel tactile sur mesure](/works-and-projects/alternance-logitud/popqueue/clavier.jpg)

### Synergie avec MG_UI & Back-Office d'Administration

Le développement du back-office de PopQueue s'est appuyé sur les composants de notre bibliothèque [**MG_UI**](/projets/mg-ui) conçue en parallèle :

- **Console agent réactive :** Gestion des actions en un clic (appel suivant, mise en attente, réorientation vers un autre guichet).
- **Supervision multi-guichets :** Vues de synthèse en temps réel affichant les files d'attente actives et le statut de chaque agent présent.
- **Synthèse vocale (RGAA 4.1.2) :** Intégration de la **Web Speech API** pour vocaliser dynamiquement les appels en salle d'attente (_« Ticket numéro A42 au guichet 3 »_), offrant une accessibilité totale aux personnes malvoyantes.

![Console agent au guichet](/works-and-projects/alternance-logitud/popqueue/console_agent_guichet.jpg)

## Impact & Résultats

- **< 100 ms de latence** de synchronisation entre l'action d'appel de l'agent et la notification visuelle/sonore en salle.
- **Déploiement universel :** Fonctionnement direct sur tablettes et écrans du commerce sans investissement matériel lourd.
- **Accessibilité exemplaire :** Respect rigoureux des critères du **RGAA 4.1.2** (zones tactiles larges, contrastes, vocalisation).
- **Gain de productivité :** Réduction des temps d'attente ressentis et confort d'organisation pour les agents d'accueil.

---

### Documentation & Ressources

Pour consulter les flux d'échanges et les spécifications ergonomiques :

- [Consulter le rapport d'expérience d'ingénierie logicielle (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
