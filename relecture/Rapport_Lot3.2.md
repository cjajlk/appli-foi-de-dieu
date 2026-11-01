# Chemin de Foi V0.1 — Lot 3.2

Projet du Bureau mis à jour après sauvegarde complète. Aucun commit, push ni publication.

## Simplification des bibliothèques

- Barre de recherche compacte de 54 px au lieu du grand formulaire. Les caractères restent à 18 px dans le champ et les zones tactiles à 44 px minimum. Le bouton × efface les mots, sans supprimer le filtre actif.
- Bouton « Filtrer » avec compteur des filtres actifs. Les thèmes, catégories de prières, choix de livre ou de parcours sont accessibles uniquement à la demande.
- Dans une catégorie déjà ouverte, aucune sélection de catégorie n’est répétée. Les lignes n’affichent plus systématiquement le nom de cette catégorie sous chaque titre. Dans un livre ou un parcours, pas de filtre qui répète ce contexte déjà choisi.
- Prières : les 24 textes sont proposés immédiatement, avec dix résultats maximum par page. Les cinq catégories existantes restent accessibles dans Filtrer ; la recherche fonctionne aussi à l’intérieur de chaque catégorie.
- Psaumes : recherche par numéro ou mots-clés, thèmes éditoriaux derrière Filtrer. Lorsqu’un numéro est saisi, l’action « Ouvrir [numéro] » apparaît près du compte de résultats ; Entrée conserve l’accès direct. Un numéro absent ou hors de 1 à 150 ne crée aucun texte.
- Bible : la même barre recherche des livres ou des passages déjà intégrés. Une recherche comme « repos » mène directement à l’extrait correspondant ; le choix du livre est un filtre secondaire. La structure livres → chapitres → lecteur reste disponible.
- Découvrir : recherche directe des leçons, filtre par parcours sur la page générale ; dans un parcours, une barre simple sans filtre de parcours redondant.
- Compteur explicite de résultats, indication de la plage affichée pour les listes paginées, message clair en cas de résultat vide et action pour effacer la recherche.

Les espaces verticaux inutiles au-dessus des listes ont été réduits, sans retirer le paysage : le même décor reste visible sur tout l’écran, autour des cartes et sous les barres. Les couleurs, les cartes premium et le style cinématographique sont conservés.

## Résultats visibles dès l’ouverture

Mesure réelle sur Les Psaumes à 360×800, sans défilement :

| Mesure | Lot 3.1 | Lot 3.2 |
|---|---:|---:|
| Hauteur du bloc de recherche | 300 px | 54 px |
| Début du premier résultat | 699 px | 417 px |
| Fin du premier résultat | 806 px | 524 px |

La navigation flottante commence vers 718 px : le premier résultat est désormais entièrement visible. Cette visibilité complète du premier résultat, sans défilement et avec les filtres fermés, est vérifiée pour sept vues de bibliothèque aux quatre largeurs : 28 cas.

52 captures réelles fournies : prières, catégorie, psaumes, recherche numérique, filtres ouverts, Bible, recherche de passage, chapitres, parcours, leçons, favoris, lecture et fin de lecture, à 320, 360, 390 et 1440 px. Elles sont prises depuis le haut de la page, sauf les vues explicitement nommées lecture-bas.

## Conservation et confort

Les 24 prières, dix leçons, cinq psaumes, deux extraits d’Évangiles et le repère Bible sont strictement identiques à la sauvegarde. Aucun contenu religieux n’a été modifié.

Code de l’accueil, du panneau Aa, des tailles 20–36 px, des réglages, du stockage personnel, de la lecture vocale et des prières personnelles vérifié identique. Les fichiers index.html, manifest.webmanifest et toutes les images sont inchangés ; les styles existants sont intégralement conservés, avec des adaptations limitées aux composants de bibliothèque.

Le retour conserve mots, filtres, état du panneau Filtrer, page de résultats et position de défilement, y compris après rechargement d’une prière. Les boutons précédent/suivant du navigateur ont été contrôlés. Les marges inférieures, safe areas et réserves de la navigation flottante restent actives ; toutes les fins de liste et de lecture sont accessibles au défilement.

## Console et indicateur signalé

Le signalement a été examiné. Aucune erreur JavaScript, erreur de console, réponse HTTP en échec ou requête échouée n’a été reproduite sur la version sauvegardée, avec l’ancien serveur de captures et avec un serveur aux types de fichiers correctement déclarés.

Sur la version finale, les tests et les 52 captures enregistrent également zéro erreur JavaScript, zéro erreur de console et zéro erreur réseau. Le service worker est activé et le rechargement hors ligne conserve bien les 24 prières, dix leçons et sept lectures.

La cause exacte de l’indicateur observé par CJ reste donc non reproduite ; aucune correction d’une erreur précise ne peut être revendiquée sur cette seule base. Le contrôle couvre l’application réellement chargée, sa console et ses ressources.

## Tests

- 240 vérifications de pages à 320×800, 360×800, 390×800 et 1440×800, avec les lectures à 36 px : pas de débordement horizontal ni de fin de page masquée par la navigation.
- 28 vérifications géométriques des premiers résultats : entièrement visibles dès l’ouverture, barres de recherche de 54 px.
- Recherche pendant la frappe sans perte du focus, accents, casse, recherche globale et dans une catégorie ; résultats vides et effacement.
- Filtres de thème, de livre et de parcours ; compteur actif, ouverture/repli, réinitialisation des filtres sans effacer les mots ; absence de filtres de contexte redondants.
- Recherche numérique des psaumes, zéros initiaux, ouverture directe indépendante du filtre, entrée absente, limite 1–150 et recherche par mots-clés avec Entrée.
- Deuxième page de prières, retour depuis la lecture, conservation du filtre et de la position après rechargement ; précédent et suivant du navigateur.
- Passage biblique trouvé directement, retour à la recherche, filtre par livre, chapitre absent non activé ; leçon trouvée directement et recherche dans son parcours.
- 174 pages supplémentaires de la démonstration HTML dans trois contextes mobiles tactiles à 320, 360 et 390 px. Aa, taille mémorisée après rechargement, filtres tactiles, favoris conservés, synthèse et arrêt déclenchés, liens directs et retours vérifiés.
- Analyse syntaxique JavaScript et vérification des différences Git sans erreur.

Les tests Android sont des émulations mobiles Chromium/Edge, pas des essais physiques sur Samsung. Le rendu sonore et les barres système propres à l’appareil restent à confirmer sur celui-ci.

## Fichiers

HTML autonome, ZIP du projet, captures et sauvegarde avant intervention. Le dossier de relecture religieuse des lots précédents est conservé dans le ZIP.

Pour retrouver les favoris, prières personnelles et réglages existants, conserver le même navigateur et la même adresse d’ouverture. Une copie HTML ou une autre adresse peut avoir un stockage distinct ; la mise à jour n’efface pas les données de l’application existante.
