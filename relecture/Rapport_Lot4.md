# Chemin de Foi · Lot 4

5 novembre 2026. Base sauvegardée au commit `b585086`.

Depuis **Bible et lecture → Découvrir la Bible**, le lecteur peut ouvrir les 12 grands récits, choisir l’Ancien Testament, la vie de Jésus ou les Actes, ou faire une première séance de lecture guidée. La liste complète se parcourt par pages et se recherche par titre, mot-clé ou référence. Les fiches distinguent le contexte, le résumé, l’explication, la lecture catholique, l’exemple pédagogique et la réflexion facultative.

| Thème | Psaumes, numérotation Louis Segond |
| --- | --- |
| Confiance | 23 et 91 |
| Gratitude | 103 |
| Peur | 27 |
| Souffrance | 46 et 130 |
| Pardon | 51 et 130 |
| Espérance | 121 et 130 |

Les cinq psaumes intégraux déjà présents restent accessibles dans le lecteur. Les psaumes 51, 103 et 130 sont proposés par des liens vers eBible. Le lot ajoute des commentaires originaux et des références, sans importer de texte biblique intégral supplémentaire.

Les favoris bibliques utilisent le même stockage que les favoris de prières et s’affichent dans une section dédiée. La reprise utilise la position relative de la fiche. Elle apparaît dans le parcours biblique et dans **Mes lectures**. La préférence existante permet de désactiver ou d’effacer cet historique tout en conservant les favoris. La reprise est approximative si la taille du texte ou l’écran change.

## Sources et relecture

57 références distinctes ont été contrôlées sur 46 pages, dont les ancres des versets et les numéros de paragraphes du Catéchisme. Le fichier `Sources_Bible_Lot4.json` les réunit. Les contextes discutés restent formulés avec prudence. Le dossier PDF de 20 pages rassemble les 19 nouvelles fiches et les points à soumettre au prêtre. Le texte et les liens ont été contrôlés par extraction, puis les pages ont été inspectées après rendu.

- [Catéchisme de l’Église catholique, critères d’interprétation](https://www.vatican.va/archive/FRA0013/__PR.HTM)
- [Louis Segond 1910, édition de référence pour les liens bibliques](https://ebible.org/fraLSG/)
- [Introduction au livre d’Amos, USCCB](https://bible.usccb.org/bible/amos/0)

Les passages étudiés peuvent aussi être cités dans les leçons doctrinales antérieures. La vérification a distingué ces références communes des doublons de contenu. Aucun titre, identifiant ou paragraphe pédagogique du Lot 4 ne reprend à l’identique celui d’une leçon ou question existante. La première séance est un exercice pratique qui renvoie au repère « Comment commencer la Bible ? ».

## Tests

| Contrôle | Résultat |
| --- | --- |
| 19 nouvelles fiches sur 320, 360, 390 et 1440 px, à 36 px | 76 vérifications réussies. Pas de débordement horizontal. Fin de page accessible au-dessus de la navigation. |
| Navigation et données locales | Recherche, pagination, retour, reprise après rechargement, favoris bibliques et de prière, ancien historique, prière personnelle et préférence Aa vérifiés. Désactivation du suivi vérifiée. |
| Non-régression | 360 contrôles réussis, dont 28 vérifications de visibilité du premier résultat. Console sans erreur. |
| AELF | Lectures réelles du 4 et du 8 novembre 2026 et de Pâques. Gestion d’une panne et d’un retour en ligne vérifiée. Aucun texte liturgique stocké ou transmis à la synthèse vocale. |
| Intégrité | 30 prières, 23 leçons, 8 questions et 7 lectures locales conservées. Bloc AELF, règles de cache, styles et ressources vérifiés par comparaison avec la sauvegarde. |

Les essais mobiles ont été réalisés par émulation dans Microsoft Edge sur PC. Le test ciblé est fourni dans `tests/lot4-smoke.cjs`. Avec Node.js, Playwright et Microsoft Edge disponibles, il se relance depuis le dossier du projet avec `node tests/lot4-smoke.cjs`. La variable `PLAYWRIGHT_MODULE` permet de désigner un module Playwright déjà installé ailleurs.
