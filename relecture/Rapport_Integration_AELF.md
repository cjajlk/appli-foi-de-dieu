# Rapport — Intégration AELF
4 novembre 2026

## Résultat
Intégration réalisée dans le projet existant du Bureau, avec sauvegarde préalable. Accès direct à l’API officielle confirmé sans clé, sans inscription technique et sans serveur intermédiaire. Base Lot 3.3 préservée (le dossier était plus récent que le Lot 2.2 mentionné).

Modifications limitées : nouvelle rubrique depuis Bible et lecture, Aa existant, attribution AELF et références, choix de date/ensemble de lectures, affichage des variantes, gestion des réponses absentes/incomplètes et erreurs. Synthèse vocale bloquée exclusivement sur cette rubrique. Service worker restreint aux fichiers statiques pour exclure explicitement les API.

## Tests réels de l’API
- 2026-11-04 : 1 ensemble(s), 3 entrées retenues. Pas de deuxième lecture.
- 2026-11-08 : 1 ensemble(s), 5 entrées retenues. Dimanche : deuxième lecture et sa variante.
- 2026-04-05 : 2 ensemble(s), 24 entrées retenues. Pâques : plusieurs ensembles et variantes.
Date sélectionnée concordante avec les réponses ; textes et références présents ; attribution et lien officiel contrôlés. Aucun corps de réponse AELF n’est archivé avec les tests ou la livraison.

## Affichage et navigation
Portrait 320×800, 360×800, 390×800 et PC 1440×800, lecteur 36 px : aucun débordement horizontal et derniers éléments accessibles après défilement. HTML autonome vérifié en émulation tactile sur les trois largeurs ; accès réel CORS à l’API, choix de date, bouton Aujourd’hui, Aa après rechargement et retour bibliothèque contrôlés. Inspection visuelle à 360 px réalisée sur les commandes de la rubrique. Aucun test sur téléphone Android physique.

## Erreurs et protections vérifiées
- Perte de connexion : effacement immédiat des textes en cours et de la réponse en mémoire ; rechargement hors ligne affiche seulement le message d’indisponibilité ; Réessayer récupère les lectures au retour du réseau.
- Simulations : HTTP 404, 429, erreur réseau, JSON illisible, lecture incomplète, réponse d’une autre date, absence de lectures, plusieurs ensembles. Messages adaptés, sans texte inventé.
- Délai de 15 secondes : expiration et annulation testées avec horloge accélérée. Sortie pendant un appel : annulation et réponse écartée.
- Test de contenu HTML actif : scripts, images et attributs supprimés ; aucun script exécuté. Types hors lectures ignorés.
- Aucun bouton Écouter sur AELF. Appel direct à speak() bloqué même avec identifiant de prière personnelle. Les voix des prières originales et personnelles fonctionnent encore (texte transmis à la synthèse vérifié ; pas d’écoute acoustique réelle).
- Requêtes no-store vérifiées. localStorage/sessionStorage et Cache Storage inspectés : aucune réponse AELF. Code de sauvegarde local inchangé, aucun ajout IndexedDB. Hors ligne statique fonctionnel, y compris rechargement avec fragment de navigation.
- Zéro erreur JavaScript dans les scénarios d’intégration. Les échecs réseau simulés sont attendus.

## Non-régression
Comparaison exacte des contenus avant/après : 30 prières, 13 leçons, 7 lectures, fiches et parcours préservés. Index, manifeste et tous les paysages identiques ; les styles antérieurs sont inchangés, les nouvelles règles sont limitées à la rubrique AELF.
Suite précédente relancée : 276 contrôles réussis, 28 premiers résultats visibles, neuf recherches de contenus, favoris et prières personnelles conservés, retour aux listes et position vérifiés, lecture 36 px et voix des contenus autorisés vérifiées. Aucun échec réseau ni erreur console dans ces contrôles des fonctions locales.

## Livrables et limites
HTML autonome en ligne pour l’AELF ; ZIP complet ; sauvegarde du projet avant intervention ; documentation des modalités et présent rapport. Les sources officielles et les points restant à valider sont détaillés dans INTEGRATION_AELF.md. La réponse concernant le cache/hors-ligne est toujours attendue : aucune mise en cache des lectures n’a été activée. Les textes sont ceux fournis par l’API, pas une relecture doctrinale ni un contrôle exhaustif du calendrier liturgique.
Aucun commit, push, abonnement, envoi de message ou publication n’a été effectué. Projet distinct de CJAJLK Games, sous l’identité CJAJLK.
