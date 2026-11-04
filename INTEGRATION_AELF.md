# Chemin de Foi — Lectures liturgiques AELF
4 novembre 2026 — Intégration locale sous l’identité CJAJLK, distincte de CJAJLK Games.

## Base conservée
Le dossier du Bureau contenait le Lot 3.3 (30 prières, 13 leçons, 5 psaumes et 2 extraits d’Évangiles). Cette version plus récente a été conservée intégralement ; aucun retour au Lot 2.2 ni reconstruction. Les contenus et parcours locaux sont identiques avant/après. L’accueil, les paysages, la navigation principale et les styles existants sont conservés.

## Accès réel et sources officielles
- Abonnement : https://www.aelf.org/abonnement — usage non commercial et lien vers la documentation API. L’abonnement par courriel est distinct de l’accès technique à l’API.
- Documentation OpenAPI officielle : https://api.aelf.org/ — version 1.0.0, pas de clé ni de mécanisme d’authentification déclaré dans la documentation consultée.
- Endpoint utilisé : GET https://api.aelf.org/v1/messes/{date}/france ; date AAAA-MM-JJ. Ce point d’entrée fournit les lectures des messes. /v1/lectures correspond à l’office des lectures et n’est pas utilisé.
- Appels réussis sans inscription, clé ou en-tête secret, dans Node et dans Edge depuis un serveur local ainsi que depuis le HTML autonome. CORS observé : Access-Control-Allow-Origin: *.
- Le schéma accepte les années 20xx. Aucune plage exhaustive de disponibilité n’est publiée dans ce schéma ; le sélecteur accepte 2000–2099 et l’application gère les dates non disponibles, sans annoncer que toutes ces dates sont couvertes.
- Le calendrier demandé est France ; les réponses testées indiquent parfois la zone « romain ». L’interface affiche cette valeur reçue sans prétendre à une provenance différente.

## Périmètre autorisé appliqué
Les conditions du courriel du 2 novembre rapportées par CJ servent de consigne : lectures du jour uniquement, usage non lucratif, attribution visible AELF, aucun droit commercial ou droit général sur le Missel/Bible liturgique déduit de cet accès. Aucun texte complet de Bible liturgique, oraison, office ou texte du Missel n’est importé dans la bibliothèque locale. Seuls les types lecture_N, psaume et evangile sont retenus dans la réponse ; refrain et acclamation liés à ces lectures sont affichés lorsqu’ils sont présents. Les autres types de contenu sont ignorés.
La synthèse vocale est absente de l’écran AELF et bloquée aussi dans la fonction commune en cas d’appel direct. Les prières originales, textes Louis Segond déjà présents et prières personnelles gardent leur lecture vocale.

## Stockage et connexion
Les appels utilisent fetch avec cache: no-store, credentials: omit et sans référent. Aucune réponse AELF n’est écrite dans localStorage, sessionStorage, IndexedDB, les favoris, un fichier ou Cache Storage. Les résultats sont seulement détenus en mémoire pendant la consultation de la rubrique, puis effacés au départ, à la perte de connexion et lors du masquage de la page par navigation/rechargement. Les requêtes en cours sont annulées au départ ou au changement de date.
Le service worker ne traite désormais que les fichiers statiques explicitement listés ; tous les appels API restent hors de son cache. Les prières et leçons locales continuent à fonctionner hors ligne. Une erreur de connexion retire les textes AELF affichés et propose de réessayer ; aucune ancienne réponse n’est utilisée comme repli.
Le fonctionnement de l’infrastructure propre de l’AELF et des caches extérieurs à l’application n’est pas contrôlé par ce projet. Aucun cache applicatif des lectures n’est autorisé tant que CJ n’a pas reçu et validé une réponse sur ce point.

## Interface et fonctions
Entrée Lectures du jour depuis Bible et lecture. Date du jour par défaut, sélecteur, bouton Aujourd’hui, informations liturgiques réellement reçues, références et source avec lien officiel. Aa 20–36 px conservé et mémorisé. Les lectures sont affichées dans les panneaux ivoire existants ; aucun commentaire éditorial n’est inséré dans les textes AELF.
Un sélecteur apparaît si plusieurs ensembles de lectures sont fournis pour une date ; les variantes d’un même type sont identifiées. Les liens internes permettent de rejoindre une lecture. Le changement de date remplace la date de la rubrique dans l’historique pour que le retour mène à la bibliothèque sans traverser toutes les dates consultées.
Les données externes sont limitées aux champs utiles et leur HTML est reconstruit en balisage typographique sans scripts, images ni attributs actifs. Une lecture sans texte ou référence est omise avec avertissement ; une réponse vide ou d’une autre date est rejetée.

## À valider avant diffusion
Réponse AELF sur le cache temporaire et le hors-ligne encore attendue : ces fonctions restent désactivées. Toute monétisation nécessite un nouvel accord de l’AELF. Aucune publication n’est effectuée par cette livraison. Pour un déploiement futur, vérifier à nouveau l’accès CORS et les conditions AELF ; si l’API impose ultérieurement une clé privée, un serveur sera nécessaire, jamais une clé dans le HTML public.

## Utilisation
Continuer à ouvrir le projet du Bureau avec le même navigateur et la même adresse pour conserver les sauvegardes existantes. Le HTML autonome est une démonstration indépendante et peut utiliser un stockage distinct ; ses lectures AELF nécessitent Internet. Le projet complet peut être servi en HTTP local ou HTTPS pour son cache statique. Aucun compte ni abonnement de l’utilisateur n’est requis pour l’intégration testée.
