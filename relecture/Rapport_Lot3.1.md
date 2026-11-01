# Chemin de Foi V0.1 — Lot 3.1

Travail réalisé directement dans le dossier existant du Bureau, après sauvegarde du Lot 3. Aucun commit ni push GitHub, aucune publication.

## Bibliothèques

### Les Psaumes

Accessible directement depuis Bible et lecture. Cinq textes réellement intégrés : 23, 27, 46, 91 et 121. Recherche insensible à la casse et aux accents, par numéro exact ou mots-clés (titre, introduction, texte et thèmes renseignés). Les thèmes sont facultatifs et explicitement éditoriaux.

Le champ de recherche sert aussi à l’accès direct : saisir un numéro de 1 à 150 et choisir « Ouvrir le numéro » ou appuyer sur Entrée. Un numéro absent produit un message, sans fabriquer ni activer de texte. Les résultats portent le titre de référence « Psaume N » ; les intitulés thématiques sont signalés comme « Repère éditorial ». Cette distinction est rappelée dans le lecteur.

Affichage compact, dix résultats maximum par page. Le composant accepte une bibliothèque de 150 entrées sans rendre la liste entière d’un seul bloc. Il n’ajoute pas automatiquement les 145 psaumes absents.

### Prières

Les cinq catégories sont conservées. Recherche globale ou dans une catégorie par titre, thème, catégorie et texte, avec filtre thématique. Dans chaque catégorie, les prières sont affichées en lignes premium compactes, sans grande icône répétée, avec un titre et un court repère thématique. Dix résultats maximum par page. Les favoris disposent également de la recherche et de la liste compacte.

Les contenus de couple et mariage restent classés dans Famille et relations ; aucune entrée supplémentaire n’a été ajoutée à la navigation principale.

### Bible

Structure livres → chapitres → lecteur. Les Psaumes ouvrent directement leur index numéroté, sans étape intermédiaire redondante. Matthieu et Jean ouvrent leur liste de chapitres réellement disponibles, puis le passage dans le lecteur existant.

Matthieu 11 n’intègre que le verset 28 ; Jean 14 n’intègre que le verset 27. Les lignes des chapitres les désignent comme extraits, avec leurs références et Louis Segond 1910. Aucun autre livre ou chapitre n’est activé. Les listes de livres et de chapitres sont paginables ; une recherche apparaît lorsqu’elles dépassent dix entrées.

### Découvrir

Deux parcours : Premiers repères (six leçons) et Pour aller plus loin (quatre leçons). Chaque parcours présente les titres et descriptions en liste compacte ; toutes les leçons restent accessibles sans progression imposée. Le repère Bible du Lot 1 est conservé hors parcours. La structure des listes de parcours peut accueillir plus de dix leçons avec pagination et recherche conditionnelle.

## Retour et confort

Les boutons retour et les commandes précédent/suivant du navigateur conservent le filtre, la recherche, la page de résultats, la position de défilement et, lorsque possible, le focus de l’entrée ouverte. Cette conservation résiste aussi au rechargement du lecteur. L’état de navigation est conservé dans une clé de session distincte des données personnelles ; il ne modifie pas le stockage des favoris, prières personnelles et réglages.

Un lien direct vers un lecteur, sans page précédente interne, possède un retour vers sa bibliothèque, sa catégorie, son livre ou son parcours. Les recherches se mettent à jour sans reconstruire le champ de saisie. Les nouvelles zones tactiles testées mesurent au moins 44 px de haut. La réserve inférieure et les safe areas du Lot 2.4 sont conservées.

## Préservation

Comparaison automatique des ensembles : 24 prières, dix leçons, cinq psaumes complets, deux extraits d’Évangiles et le repère Bible strictement identiques au Lot 3. Les thèmes ajoutés sont des métadonnées de classement, pas des changements de texte biblique ou doctrinal.

Code de l’accueil, du panneau Aa, des réglages, de la persistance, de la synthèse et des prières personnelles inchangé. index.html et manifest.webmanifest identiques. Les règles graphiques antérieures et les paysages sont conservés ; seuls des styles de composants de bibliothèques ont été ajoutés. Le lecteur reste ivoire opaque, de 20 à 36 px. Cache versionné pour cette livraison.

## Tests réalisés

- 480 vérifications de pages : Edge à 320×800, 360×800, 390×800 et 1440×800, dans les deux variantes d’ambiance, avec les lectures à 36 px. Aucun débordement horizontal, aucune erreur JavaScript ni fin de page bloquée sous la navigation.
- Recherches par numéro, zéros initiaux, mots, accents et casse ; filtres, combinaisons sans résultat, effacement et numéros absents ou hors intervalle.
- Recherche de mariage dans Famille et relations, filtre Couple, recherche globale et deuxième page de résultats.
- Retour depuis un lecteur vers la recherche et la deuxième page, position de défilement comparée à quelques pixels près ; précédent/suivant du navigateur ; retour conservé après rechargement.
- Livres et chapitres disponibles uniquement ; accès aux extraits et retour aux livres. Deux parcours, ouverture libre des leçons et retour à leur liste.
- Test de pagination sur 150 métadonnées techniques isolées du projet : dix lignes par page, parcours des quinze pages et borne finale. Aucun texte de psaume absent n’a été créé, enregistré ou livré.
- 24 commandes tactiles examinées à 320 px dans les nouvelles vues : hauteur minimale de 44 px.
- HTML autonome vérifié dans trois contextes mobiles tactiles : 174 pages à 320, 360 et 390 px ; Aa, recherche, ouverture par numéro et Entrée, absence de texte absent, favoris conservés après rechargement, ouverture de liens directs et retours vers leurs bibliothèques.
- Lecture vocale et arrêt déclenchés dans les tests mobiles ; texte complet de la prière vérifié dans la demande de synthèse. La fonction de synthèse elle-même est identique au Lot 3.
- Syntaxe JavaScript et vérification des différences Git sans erreur.

Les tests Android sont des émulations mobiles Chromium/Edge, pas des essais sur un téléphone physique. Le son réel et les barres système propres au Samsung restent à confirmer sur l’appareil.

## Livraison

HTML autonome, ZIP complet, sauvegarde avant intervention et 44 captures réelles des bibliothèques et du lecteur aux quatre largeurs. Certaines vues sont volontairement défilées pour montrer les listes ; les vues « haut » montrent aussi leur état initial à 360×800.

Le ZIP conserve le dossier de relecture religieuse du Lot 3. Pour retrouver les données personnelles existantes, conserver le même navigateur et la même adresse d’ouverture. Une copie HTML ou un changement d’adresse peut utiliser un stockage distinct.
