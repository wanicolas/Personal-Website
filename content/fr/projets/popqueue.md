## Contexte & Enjeux Métier

L'accueil physique des citoyens en mairie est une étape critique de la relation usager. Des files d'attente mal gérées créent de la frustration chez les administrés et désorganisent les agents au guichet.

Pour répondre à cet enjeu, Logitud Solutions a initié le développement de **PopQueue**, une suite applicative modulaire synchronisée en temps réel pour équiper les collectivités sans les contraindre à acheter du matériel propriétaire lourd et onéreux.

![Interface tactile de sélection de démarche sur la borne d'accueil](/works-and-projects/alternance-logitud/popqueue/choix_demarche.jpg)

## Architecture & Écosystème Temps Réel

Le système s'articule autour de trois interfaces synchronisées de manière bidirectionnelle via des **WebSockets** animés par **Laravel Reverb** :

1. **La borne tactile usager :** Permet la sélection de démarches, la distribution de tickets et le check-in de rendez-vous préalables.
2. **La console agent :** Interface web réactive permettant aux agents d'appeler le ticket suivant, de gérer les absences ou de réassigner un dossier à un autre guichet.
3. **L'écran de diffusion en salle d'attente :** Affiche le statut des files, le rappel sonore et visuel des numéros appelés et l'orientation vers le guichet dédié.

Le protocole WebSocket émet des événements légers (`TicketCreated`, `TicketCalled`) capturés en **moins de 100 ms**, avec un composable sur-mesure (`usePopQueueSocket`) gérant la reconnexion automatique en backoff exponentiel en cas de coupure réseau.

![Tableau de bord de supervision globale des flux en temps réel](/works-and-projects/alternance-logitud/popqueue/supervision_globale_bo.jpg)

## Défis Techniques & Solutions

### Clavier virtuel autonome sur mesure

Sur tablette tactile en mode kiosque, l'utilisation du clavier virtuel natif du système d'exploitation posait d'importants problèmes : décalage violent du viewport, apparition de barres d'outils parasites et autocomplétion inappropriée.

J'ai conçu un composant de **clavier virtuel tactile autonome**, directement intégré à l'arbre DOM de l'application :

- Restreint strictement aux caractères utiles aux démarches (numérique pour les numéros de dossiers, alphabétique pour les noms).
- Entièrement découplé des spécificités d'Android, Windows ou iPadOS.
- Ergonomie étudiée avec cibles de frappe de grandes dimensions (> 48x48 px) pour minimiser les erreurs de saisie.

![Clavier virtuel tactile sur mesure](/works-and-projects/alternance-logitud/popqueue/clavier.jpg)

### Accessibilité inclusive & Synthèse vocale (RGAA 4.1.2)

L'accueil public impose une accessibilité irréprochable pour tous les publics :

- **Synthèse vocale native :** Exploitation de la **Web Speech API** pour vocaliser dynamiquement les appels de tickets en salle d'attente (_« Ticket numéro A42 au guichet 3 »_), garantissant l'autonomie des usagers malvoyants.
- **Conformité PMR :** Contrastes renforcés, hiérarchie visuelle épurée et zones tactiles larges adaptées aux personnes à mobilité réduite.

![Console agent et écran de salle d'attente](/works-and-projects/alternance-logitud/popqueue/console_agent_guichet.jpg)

## Impact & Résultats

- **< 100 ms de latence** de synchronisation entre l'appel au guichet et l'affichage en salle d'attente.
- **Suppression du matériel propriétaire :** Déploiement direct sur tablettes et écrans TV standards via de simples navigateurs.
- **100 % accessible :** Respect rigoureux des critères du **RGAA 4.1.2**.
- **Amélioration continue :** Réduction constatée du temps d'attente ressenti et meilleure sérénité pour les agents d'accueil.

---

### Documentation & Ressources

Pour consulter les flux d'événements et l'analyse complète de PopQueue :

- [Consulter le rapport d'expérience d'ingénierie logicielle (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
