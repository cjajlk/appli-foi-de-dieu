# Chemin de Foi V0.1 — Lot 3 : rapport de livraison

Intervention réalisée dans le dossier existant du Bureau, à partir de l’état du Lot 2.4. Sauvegarde complète avant intervention fournie. Aucun commit, push ni publication.

## Contenus livrés

- 24 prières originales : les 16 précédentes sont conservées mot pour mot avec leurs identifiants ; 8 textes distincts ont été ajoutés. Thèmes : rencontres du matin, journée inachevée du soir, bonté reçue, réparation, attente inquiète, discernement, partage familial et espérance dans la souffrance. Aucune promesse de guérison ou de résultat miraculeux ajoutée.
- Dix leçons de parcours : les six premières sont conservées et complétées par un exemple concret et des références ; quatre leçons nouvelles portent sur la foi, les psaumes, la souffrance, puis le pardon et les grandes valeurs chrétiennes. Chaque leçon dispose d’une explication, d’un exemple, de références vérifiables et d’une réflexion facultative.
- Le repère « Comment commencer la Bible ? » du Lot 1 est conservé séparément, sans être compté comme une onzième leçon. Son ancienne adresse de lecture reste valide.
- Cinq psaumes intégraux : 23, 27, 46, 91 et 121. L’ancien extrait ps23 est développé sous le même identifiant. Les deux extraits d’Évangiles existants sont conservés : la rubrique Bible propose donc sept lectures au total.
- Toutes les introductions sont originales et distinctes du texte biblique ; les images de protection du psaume 91 sont contextualisées sans garantie médicale ou matérielle. Le nom de la traduction, la référence, le caractère intégral et la source sont affichés.
- Les explications sont présentées comme des repères de tradition chrétienne catholique et des propositions à relire, sans approbation officielle revendiquée.

## Sources et vérification éditoriale

Édition exclusive des cinq psaumes : eBible, fraLSG, Louis Segond 1910. Notice de droits consultée le 1er novembre 2026 : https://ebible.org/fraLSG/copyright.htm ; cette édition indique explicitement le domaine public. La Segond n’est pas présentée comme la traduction liturgique officielle catholique.

Import des versets depuis les pages de l’édition : contrôle des suites de numéros, des débuts et fins, conservation des titres anciens et des mentions « Pause ». Nombre de versets : 6, 14, 12, 16 et 8. Pour le psaume 46, le titre compte comme verset 1 dans cette édition. Espaces et retours à la ligne normalisés ; numéros ajoutés à l’affichage ; notes éditoriales marginales exclues. Les cinq textes intégrés sont comparés automatiquement aux données importées.

Références catholiques : Catéchisme de l’Église catholique, site du Vatican. Douze pages de références et la notice eBible ont été vérifiées accessibles et archivées pour contrôle interne. Les liens et empreintes des pages bibliques sont fournis dans Sources_Lot3.json. Aucun long extrait du Catéchisme n’est distribué ; les explications sont des formulations originales.

Le dossier « Contenus à relire par le prêtre » contient les textes complets de l’application, les références, l’origine des textes, des points doctrinaux par leçon et des espaces de remarques. PDF de 29 pages, accompagné d’une version texte modifiable. PDF rendu en images, inspecté visuellement et vérifié par extraction : les prières, paragraphes de leçons, exemples et versets sont tous présents. Les psaumes longs sont répartis sur des pages de suite identifiées, sans page finale réduite à quelques lignes isolées.

## Préservation

Comparaison automatique avec la sauvegarde : les 16 prières sont identiques ; les explications, titres, introductions et questions des sept textes pédagogiques antérieurs sont conservés. Fichiers styles.css, index.html et manifest.webmanifest strictement identiques. Aucun changement de décor, de palette, de navigation ou de réglage.

Identifiants, titres et textes de prières contrôlés sans doublon exact ou après normalisation. Les thèmes peuvent se compléter, comme demandé. Stockage local, favoris et prières personnelles préservés. Famille, couple et mariage restent dans Famille et relations. Aucun compte, publicité, système de points ou rappel ajouté.

## Tests fonctionnels

- 464 vérifications de pages sur Edge à 320×800, 360×800, 390×800 et 1440×800, dans les deux variantes d’ambiance et avec les textes de lecture à 36 px. Aucun débordement horizontal ni erreur JavaScript.
- 236 commandes contrôlées entièrement accessibles après défilement entre l’en-tête et la navigation. Réserve inférieure également vérifiée avec une barre système et une navigation agrandie simulées.
- Réglage Aa de 20 à 36 px, touches Début/Fin, boutons −/+, état replié, thème et persistance après rechargement vérifiés.
- Ajout/retrait et conservation des favoris ; prière personnelle antérieure conservée puis modifiée dans le navigateur de test. Les huit nouvelles prières ont aussi été ajoutées en favoris, vérifiées après rechargement puis retirées, en préservant un favori et une prière personnelle antérieurs.
- 42 textes transmis à la synthèse vocale contrôlés (24 prières, 7 lectures, 10 leçons et le repère Bible). Corps complet, dernières lignes et langue fr-FR vérifiés. Les psaumes sont précédés de leur introduction ; les leçons incluent désormais exemple et réflexion facultative. Arrêt déclenché.
- HTML autonome testé séparément sur trois contextes mobiles tactiles à 320, 360 et 390 px : 141 pages contrôlées à 36 px, plus réglage par toucher et persistance. Aucune erreur JavaScript ni débordement.

Les tests mobiles sont des émulations Chromium/Edge. Le rendu sonore réel et le comportement des barres système propres au Samsung restent à confirmer sur l’appareil. Aucune validation doctrinale n’est présumée : celle-ci appartient au prêtre et aux accompagnateurs.

## Utilisation

Ouvrir index.html du ZIP ou la démonstration HTML autonome. Pour retrouver les données personnelles existantes, continuer à utiliser le même navigateur et la même adresse d’ouverture. Une copie HTML ou une autre adresse peut utiliser un stockage différent ; la mise à jour n’efface pas les données de l’application existante.

