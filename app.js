/* Chemin de Foi — prototype local V0.1 / Lot 3.3. Aucun serveur ni suivi. */
'use strict';
const CATEGORY = [
 {id:'quotidien',name:'Prières quotidiennes',desc:'Matin, soir et confiance',icon:'☀'},
 {id:'epreuves',name:'Dans les épreuves',desc:'Souffrance, fatigue et réconfort',icon:'✧'},
 {id:'paix',name:'Paix et espérance',desc:'Calme, doutes et nouveau départ',icon:'❋'},
 {id:'gratitude',name:'Remerciements',desc:'Reconnaissance et petites joies',icon:'✦'},
 {id:'famille',name:'Famille et relations',desc:'Proches, écoute et mariage',icon:'♡'}
];
const PRAYERS = [
{id:'matin',category:'quotidien',title:'Pour commencer la journée',text:`Seigneur,\nJe t'ouvre cette journée telle qu'elle est, avec ses joies et ses inquiétudes.\nApprends-moi à regarder les autres avec bonté, à parler avec douceur et à agir avec courage.\nQuand je me sentirai pressé, aide-moi à trouver un instant de paix.\nQue mes petits gestes puissent apporter un peu de lumière autour de moi.\nAmen.`},
{id:'soir',category:'quotidien',title:'Pour retrouver le calme le soir',text:`Seigneur,\nLe jour s'achève. Je dépose devant toi ma fatigue, mes erreurs et ce qui me préoccupe encore.\nMerci pour les instants heureux, même les plus discrets.\nAide-moi à laisser reposer ce que je ne peux pas changer ce soir.\nDonne-moi le courage de recommencer demain avec patience et confiance.\nAmen.`},
{id:'courage',category:'quotidien',title:'Pour trouver du courage',text:`Seigneur,\nCertaines journées me semblent plus lourdes que d'autres.\nJe ne te demande pas que tout devienne facile, mais d'apprendre à avancer sans perdre espoir.\nAide-moi à reconnaître les mains tendues, à demander de l'aide quand il le faut et à rester attentif aux autres.\nAmen.`},
{id:'souffrance',category:'epreuves',title:'Quand la souffrance pèse',text:`Seigneur,\nTu connais les douleurs que j'ai du mal à expliquer.\nJe ne comprends pas toujours pourquoi la vie est si difficile.\nAccueille mes questions et mon découragement.\nEntoure-moi de personnes qui savent écouter, et donne-moi la force de prendre soin de moi, pas après pas.\nAmen.`},
{id:'solitude',category:'epreuves',title:'Quand je me sens seul',text:`Seigneur,\nIl m'arrive de me sentir loin des autres, même au milieu du monde.\nAide-moi à ne pas croire que je dois tout porter seul.\nOuvre mon cœur à une rencontre, à une parole sincère, à un geste de tendresse.\nQue je puisse aussi devenir une présence attentive pour quelqu'un.\nAmen.`},
{id:'pardon',category:'epreuves',title:'Pour demander pardon',text:`Seigneur,\nJe reconnais que mes mots ou mes gestes ont parfois blessé.\nDonne-moi le courage de le reconnaître sans chercher d'excuse.\nApprends-moi à réparer ce qui peut l'être, à écouter l'autre et à respecter son rythme.\nAide-moi à grandir dans la vérité et la douceur.\nAmen.`},
{id:'doute',category:'paix',title:'Quand je doute de ta présence',text:`Mon Dieu,\nJe ne sais pas toujours si tu es là, ni comment te parler.\nAu fond de moi, pourtant, une espérance demeure.\nSi tu es là, accompagne mes questions sans que je sois obligé de prétendre comprendre.\nAide-moi à chercher honnêtement, à écouter et à découvrir ce que croire pourrait signifier pour moi.\nAmen.`},
{id:'paix',category:'paix',title:'Pour un moment de paix',text:`Seigneur,\nJe m'arrête un instant.\nJe laisse mes pensées ralentir et mon souffle retrouver son rythme.\nApprends-moi la patience avec moi-même et avec ceux que j'aime.\nQue la paix que je cherche devienne aussi une paix que j'offre par mes paroles et mes gestes.\nAmen.`},
{id:'esperance',category:'paix',title:"Pour retrouver l'espérance",text:`Seigneur,\nQuand je ne vois plus très bien la suite du chemin, aide-moi à discerner le prochain petit pas.\nRappelle-moi que je peux avancer sans avoir toutes les réponses.\nDonne-moi le courage de recommencer, d'apprendre et de m'ouvrir à la beauté de ce jour.\nAmen.`},
{id:'merci',category:'gratitude',title:'Pour remercier Dieu',text:`Seigneur,\nMerci pour les personnes qui m'aiment et pour celles qui m'aident à grandir.\nMerci pour les moments simples que j'oublie parfois de remarquer.\nMerci aussi pour ce désir de retrouver la foi et de mieux comprendre.\nAide-moi à rendre un peu de cette bonté autour de moi.\nAmen.`},
{id:'petites-joies',category:'gratitude',title:'Pour les petites joies',text:`Seigneur,\nAujourd'hui, je prends le temps de reconnaître ce qui m'a fait du bien : un sourire, une conversation, une lumière, un instant tranquille.\nQue ces petites joies ne passent pas inaperçues.\nApprends-moi à les accueillir et à les partager.\nAmen.`},
{id:'proches',category:'gratitude',title:"Pour les personnes qui m'entourent",text:`Seigneur,\nMerci pour les personnes qui comptent dans ma vie.\nAide-moi à ne pas considérer leur présence comme acquise.\nDonne-moi l'attention de leur témoigner mon affection, le courage de les soutenir et l'humilité de les écouter.\nAmen.`},
{id:'famille-paix',category:'famille',title:'Pour la paix dans notre famille',text:`Seigneur,\nAide-nous à parler sans nous blesser et à écouter sans vouloir gagner.\nQuand la fatigue prend trop de place, rappelle-nous l'importance des gestes simples.\nApprends-nous à chercher ensemble des solutions justes, dans le respect de chacun.\nAmen.`},
{id:'amour',category:'famille',title:'Pour prendre soin de notre amour',text:`Seigneur,\nApprends-moi à aimer avec patience et sincérité.\nAide-moi à montrer mon amour par des attentions concrètes et à entendre ce dont l'autre a réellement besoin.\nQue nous trouvions chaque jour de nouvelles façons de nous respecter, de nous comprendre et de nous soutenir mutuellement.\nAmen.`},
{id:'mariage',category:'famille',title:'Sur le chemin du mariage',text:`Seigneur,\nNous avançons vers notre mariage avec nos joies, nos histoires et nos questions.\nAide-nous à construire une union fondée sur la liberté, la confiance, l'écoute et le respect.\nQue notre engagement grandisse dans les gestes de chaque jour, dans la tendresse et la fidélité.\nAmen.`},
{id:'ecoute',category:'famille',title:'Pour mieux nous écouter',text:`Seigneur,\nAvant de répondre trop vite, apprends-moi à écouter vraiment.\nAide-moi à comprendre les émotions et les besoins de la personne que j'aime, sans les minimiser.\nDonne-nous de la douceur pour parler des choses difficiles et du courage pour réparer nos maladresses.\nAmen.`}
];
const LESSONS = [
{id:'dieu',title:'Qui est Dieu pour les chrétiens ?',intro:'Une première découverte, sans devoir tout croire immédiatement.',paragraphs:[`Pour les chrétiens, Dieu n'est pas seulement une idée ou une force impersonnelle. Ils croient en un Dieu créateur, qui aime les êtres humains et les appelle à la liberté et à la relation.`,`La foi chrétienne parle d'un seul Dieu, Père, Fils et Esprit Saint : c'est ce que les chrétiens nomment la Trinité. Ce mot peut sembler compliqué. Pour commencer, retiens simplement qu'il exprime la manière dont les chrétiens comprennent Dieu et son amour.`,`Croire ne signifie pas avoir réponse à tout. On peut découvrir ces croyances, poser des questions et prendre son temps.`],question:'Quand tu entends le mot « Dieu », quelle question te vient en premier ?'},
{id:'jesus',title:'Qui est Jésus ?',intro:'Comprendre pourquoi Jésus occupe une place centrale.',paragraphs:[`Jésus de Nazareth a vécu au premier siècle dans la région de la Galilée et de la Judée. Sa vie et son enseignement sont racontés notamment dans les quatre Évangiles.`,`Pour les chrétiens, Jésus est le Christ, le Fils de Dieu. Ils croient que sa vie, sa mort et sa résurrection révèlent l'amour de Dieu et ouvrent un chemin d'espérance.`,`Ses enseignements donnent une place importante à la compassion, au pardon, à la justice et à l'amour du prochain. Ces paroles peuvent être lues et méditées même lorsque l'on se pose encore des questions sur la foi.`],question:'Quel enseignement de Jésus aimerais-tu comprendre davantage ?'},
{id:'prier',title:'Pourquoi prier ?',intro:"Prier n'est pas une performance à réussir.",paragraphs:[`Dans la tradition chrétienne, prier signifie se tourner vers Dieu : pour remercier, demander de l'aide, confier une souffrance ou simplement demeurer en silence.`,`Il existe des prières connues, comme le Notre Père, mais on peut aussi prier avec ses propres mots. Le doute ou le silence n'empêchent pas de commencer.`,`La prière ne garantit pas que chaque difficulté disparaîtra. Pour beaucoup de croyants, elle ouvre plutôt un espace de confiance, d'écoute et de discernement. Elle peut accompagner des démarches concrètes pour demander du soutien.`],question:"Si tu pouvais dire une seule phrase à Dieu aujourd'hui, laquelle serait-ce ?"},
{id:'bible',title:'Comment commencer la Bible ?',intro:'Un livre composé de nombreux livres.',paragraphs:[`La Bible réunit des textes de différents genres : récits, lois, poèmes, prières, prophéties, lettres et Évangiles. Elle ne se lit pas toujours comme un roman, de la première à la dernière page.`,`Les chrétiens distinguent l'Ancien Testament et le Nouveau Testament. Pour commencer, il est souvent plus accessible de découvrir un Évangile, puis quelques psaumes.`,`Pour comprendre un passage, il est utile de se demander qui parle, à qui le texte s'adresse et dans quel contexte il a été écrit. Les explications proposées dans l'application sont une aide de découverte, non un remplacement de l'accompagnement pastoral.`],question:'Préférerais-tu commencer par la vie de Jésus ou par les psaumes ?'},
{id:'doutes',title:'Ai-je le droit de douter ?',intro:'La recherche fait partie du chemin.',paragraphs:[`Dans les récits bibliques, des personnes croyantes expriment des questions, de la peur et parfois de l'incompréhension. La foi chrétienne n'est pas toujours présentée comme une certitude facile.`,`Tu peux ne pas savoir ce que tu crois. Tu peux aussi espérer que Dieu existe sans ressentir quelque chose de particulier. La recherche sincère ne demande pas de masquer les difficultés.`,`Parler avec un prêtre, un accompagnateur ou une personne de confiance peut aider à formuler les questions qui restent ouvertes.`],question:'Quelle question aimerais-tu pouvoir poser librement ?'}
];

// Compléments du Lot 2 : les cinq leçons originales et leurs identifiants restent disponibles.
LESSONS.push(
{id:'commencer-priere',title:'Comment commencer à prier ?',intro:'Quelques mots suffisent pour faire un premier pas.',paragraphs:["Tu peux choisir un endroit calme, mais il n'est pas nécessaire de trouver des conditions parfaites. Prends un instant pour te rendre disponible, assis ou dans une autre position confortable.","Tu peux dire à Dieu ce que tu vis : une joie, une inquiétude, un merci ou une question. Une phrase comme « Seigneur, je ne sais pas comment te parler, mais me voici » peut suffire. Tu peux aussi rester en silence ou lire une prière proposée ici.","Il n'y a pas de durée à atteindre ni de sensation à obtenir. Si ton attention s'éloigne, reviens doucement à tes mots. Tu es libre de t'arrêter et de reprendre quand tu le souhaites. La prière peut accompagner une demande d'aide concrète ; elle ne la remplace pas."],question:"Quels mots simples aimerais-tu confier aujourd'hui ?"},
{id:'evangiles',title:'Comment comprendre les Évangiles ?',intro:'Découvrir Jésus à travers quatre témoignages.',paragraphs:["Les Évangiles selon Matthieu, Marc, Luc et Jean racontent la vie, les paroles, la mort et la résurrection de Jésus. Pour les chrétiens, ils annoncent une bonne nouvelle. Chaque évangéliste offre un regard particulier ; leurs récits ne sont pas quatre comptes rendus identiques.","Tu peux commencer par un court passage. Demande-toi : qui parle, à qui, que se passe-t-il et qu'est-ce qui m'interroge ? Un récit, une parabole et une image ne se lisent pas exactement de la même manière. Le contexte aide à comprendre.","Un passage difficile n'oblige pas à conclure tout de suite. Tu peux le relire, consulter une explication ou en parler avec un prêtre. Les extraits déjà présents dans l'application peuvent servir de point de départ, à ton rythme."],question:"Dans un récit sur Jésus, quel geste ou quelle parole souhaiterais-tu mieux comprendre ?"}
);
const BEGINNER_PATH=['dieu','jesus','prier','commencer-priere','evangiles','doutes'];
const PATH_TITLES={'dieu':'Qui est Dieu dans la foi chrétienne ?','jesus':'Qui est Jésus ?','prier':'Pourquoi les chrétiens prient-ils ?','commencer-priere':'Comment commencer à prier ?','evangiles':'Comment comprendre les Évangiles ?','doutes':"Que faire lorsqu’on doute ?"};

const READINGS = [
{id:'ps23',title:'Psaume 23 — Le Seigneur est mon berger',intro:'Psaume de confiance',text:`L’Éternel est mon berger : je ne manquerai de rien.\nIl me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles.\nIl restaure mon âme, Il me conduit dans les sentiers de la justice, À cause de son nom.`,source:'Psaume 23, versets 1 à 3 — traduction Louis Segond 1910 (domaine public). Extrait.'},
{id:'mat11',title:'Une invitation au repos',intro:'Évangile selon Matthieu',text:`Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.`,source:'Matthieu 11,28 — traduction Louis Segond 1910 (domaine public).'},
{id:'jn14',title:'Je vous laisse la paix',intro:'Évangile selon Jean',text:`Je vous laisse la paix, je vous donne ma paix. Je ne vous donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s'alarme point.`,source:'Jean 14,27 — traduction Louis Segond 1910 (domaine public).'}
];

// Lot 3 : textes originaux proposés à la relecture, sans modification des 16 prières précédentes.
PRAYERS.push(...[
  {
    "id": "matin-attention",
    "category": "quotidien",
    "title": "Pour accueillir les rencontres du matin",
    "text": "Seigneur,\nAvant de commencer, je te confie les personnes que je vais rencontrer.\nAide-moi à voir leur visage avant de penser à mes tâches.\nQuand je serai distrait ou impatient, rappelle-moi qu'une parole simple peut faire du bien.\nDonne-moi de reconnaître mes limites et de choisir ce qui est juste, même dans les petits gestes.\nQue cette journée soit ouverte à l'écoute et au partage.\nAmen."
  },
  {
    "id": "soir-deposer",
    "category": "quotidien",
    "title": "Pour déposer une journée inachevée",
    "text": "Seigneur,\nTout n'est pas terminé et je n'ai pas trouvé toutes les réponses.\nCe soir, je te confie ce qui reste ouvert.\nAide-moi à reconnaître ce que j'ai pu faire, sans oublier ce qui demande encore de l'attention.\nApprends-moi à laisser une place au repos, sans devoir mériter chaque instant de calme.\nDemain, donne-moi la patience de reprendre un pas à la fois.\nAmen."
  },
  {
    "id": "merci-discret",
    "category": "gratitude",
    "title": "Pour la bonté reçue en silence",
    "text": "Mon Dieu,\nJe pense aux gestes qui m'ont soutenu sans faire de bruit : une présence, un repas partagé, un service rendu.\nMerci pour ces personnes et pour leur attention.\nAide-moi à leur dire ma reconnaissance, avec des mots ou un geste sincère.\nQue je sache à mon tour offrir un peu de temps, sans attendre de récompense.\nOuvre mes yeux à la bonté discrète qui traverse nos journées.\nAmen."
  },
  {
    "id": "pardon-reparer",
    "category": "epreuves",
    "title": "Pour trouver un geste de réparation",
    "text": "Seigneur,\nJe pense à une parole que je regrette.\nAide-moi à la regarder avec vérité, sans me cacher derrière ma fatigue ou ma colère.\nDonne-moi le courage de présenter des excuses et de réparer ce qui peut l'être.\nApprends-moi aussi à respecter le silence et le temps de la personne blessée.\nQue mon désir de pardon devienne un changement concret, patient et sincère.\nAmen."
  },
  {
    "id": "paix-attente",
    "category": "paix",
    "title": "Pour traverser une attente inquiète",
    "text": "Seigneur,\nQuand j'attends une nouvelle, mes pensées vont parfois trop loin.\nJe te confie cette inquiétude, sans prétendre savoir ce qui arrivera.\nAide-moi à revenir à ce que je peux faire aujourd'hui : respirer, demander du soutien, prendre soin de moi et des autres.\nQue je puisse accueillir une présence amie et laisser un peu de place au calme.\nReste auprès de moi dans cette attente.\nAmen."
  },
  {
    "id": "confiance-choix",
    "category": "quotidien",
    "title": "Pour discerner un choix avec confiance",
    "text": "Mon Dieu,\nUne décision m'attend et je crains de me tromper.\nAide-moi à prendre le temps d'écouter, de me renseigner et de demander conseil.\nÉclaire ce qui peut servir la vérité, le respect et le bien de chacun.\nJe ne te demande pas un signe qui déciderait à ma place, mais la liberté d'agir avec conscience.\nAccompagne mes pas et mon désir d'apprendre.\nAmen."
  },
  {
    "id": "famille-quotidien",
    "category": "famille",
    "title": "Pour partager les charges en famille",
    "text": "Seigneur,\nDans notre maison, chacun porte des tâches, des soucis et parfois une fatigue invisible.\nAide-nous à les reconnaître et à chercher une répartition plus juste.\nApprends-nous à demander de l'aide sans honte et à écouter sans nous comparer.\nQue nos différences trouvent une place dans le respect de chacun.\nDonne-nous l'attention de remercier, de nous parler simplement et de prendre soin des plus fragiles.\nAmen."
  },
  {
    "id": "epreuve-presence",
    "category": "epreuves",
    "title": "Pour garder une espérance dans la souffrance",
    "text": "Seigneur,\nJe te confie ce qui fait mal et ce que je ne comprends pas.\nJe n'ai pas à te cacher mes larmes ni à trouver de belles paroles.\nAide-moi à accueillir les soins, l'aide et les présences qui peuvent me soutenir.\nQuand l'avenir paraît fermé, garde en moi la possibilité d'un prochain petit pas.\nQue ton amour puisse être accueilli dans les gestes de ceux qui m'accompagnent.\nAmen."
  }
]);
const BIBLE_GUIDE=LESSONS.splice(LESSONS.findIndex(l=>l.id==='bible'),1)[0];
BIBLE_GUIDE.source='CEC, nos 109–114 et 120–127. Repère complémentaire conservé du Lot 1.';
BIBLE_GUIDE.references=[{label:'CEC 109–114',url:'https://www.vatican.va/archive/FRA0013/__PR.HTM'},{label:'CEC 120–127',url:'https://www.vatican.va/archive/FRA0013/__PS.HTM'}];
for(const [id,extra] of Object.entries({
  "dieu": {
    "example": "En regardant un paysage ou en recevant une aide inattendue, une personne peut se demander ce que les chrétiens veulent dire lorsqu'ils parlent d'un Dieu créateur et aimant, sans devoir conclure immédiatement.",
    "source": "CEC, nos 232–234 ; Matthieu 28,19.",
    "references": [
      {
        "label": "CEC 232–234",
        "url": "https://www.vatican.va/archive/FRA0013/__P18.HTM"
      }
    ],
    "review": "Relire la présentation de la Trinité ; éviter de réduire Dieu à une force ou la Trinité à trois dieux."
  },
  "jesus": {
    "example": "En lisant un geste d'accueil de Jésus dans un Évangile, tu peux te demander comment écouter une personne mise à l'écart. Cette lecture peut ouvrir une question sur ce que les catholiques confessent de Jésus.",
    "source": "CEC, nos 464–469 ; Luc 10,25–37.",
    "references": [
      {
        "label": "CEC 464–469",
        "url": "https://www.vatican.va/archive/FRA0013/__P1G.HTM"
      }
    ],
    "review": "Valider la confession de Jésus vrai Dieu et vrai homme, ainsi que la place de sa mort et de sa résurrection ; ne pas le présenter seulement comme un exemple moral."
  },
  "prier": {
    "example": "Avant une conversation difficile, tu peux confier à Dieu ce que tu crains, puis préparer quelques mots respectueux. La prière accompagne cette préparation sans garantir la réaction de ton interlocuteur.",
    "source": "CEC, nos 2558–2565 ; Luc 11,1–4.",
    "references": [
      {
        "label": "CEC 2558–2565",
        "url": "https://www.vatican.va/archive/FRA0013/__P8U.HTM"
      }
    ],
    "review": "Vérifier que la prière est présentée comme relation au Dieu trinitaire, et non comme une technique pour obtenir un résultat."
  },
  "commencer-priere": {
    "example": "Tu peux t'asseoir quelques instants, dire un merci avec tes mots et écouter le silence. Si tu ne sais pas continuer, tu peux lire une prière courte ; il n'y a pas d'exercice à réussir.",
    "source": "CEC, nos 2700–2704 ; Luc 11,1–4.",
    "references": [
      {
        "label": "CEC 2700–2704",
        "url": "https://www.vatican.va/archive/FRA0013/__P9F.HTM"
      }
    ],
    "review": "Relire l’articulation entre mots personnels, silence, prière reçue de l’Église et Notre Père, sans transformer la proposition en obligation."
  },
  "evangiles": {
    "example": "Dans le récit du bon Samaritain, tu peux observer qui demande de l'aide et qui s'arrête. Puis tu peux relire les questions du dialogue pour éviter de détacher une phrase de l'ensemble du récit.",
    "source": "CEC, nos 109–114 et 125–127 ; Luc 10,25–37.",
    "references": [
      {
        "label": "CEC 109–114",
        "url": "https://www.vatican.va/archive/FRA0013/__PR.HTM"
      },
      {
        "label": "CEC 125–127",
        "url": "https://www.vatican.va/archive/FRA0013/__PS.HTM"
      }
    ],
    "review": "Vérifier la présentation des quatre témoignages, l’historicité des Évangiles et la place de l’interprétation dans la Tradition catholique."
  },
  "doutes": {
    "example": "Une personne qui ne ressent rien en priant peut noter ce qui la trouble et en parler avec un accompagnateur attentif. Elle n'a pas à jouer un rôle pour être écoutée.",
    "source": "CEC, nos 158–160 ; Marc 9,24.",
    "references": [
      {
        "label": "CEC 158–160",
        "url": "https://www.vatican.va/archive/FRA0013/__PY.HTM"
      }
    ],
    "review": "Distinguer difficultés de compréhension, absence de sentiment, recherche sincère et refus volontaire de croire ; garder l’accueil sans effacer les distinctions doctrinales."
  }
})){Object.assign(LESSONS.find(l=>l.id===id),extra)}
LESSONS.push(...[
  {
    "id": "foi",
    "title": "Qu’est-ce que croire pour un catholique ?",
    "intro": "Une confiance libre qui cherche à comprendre.",
    "paragraphs": [
      "Dans la tradition catholique, la foi est une réponse libre à Dieu qui se fait connaître, en particulier en Jésus. Elle engage la confiance et l'intelligence ; elle ne se réduit ni à une émotion agréable ni à la preuve d'un laboratoire.",
      "L'Église présente la foi comme un don à accueillir, qui peut grandir par la lecture, la prière et la rencontre d'autres croyants. Découvrir cet enseignement ne t'oblige pas à déclarer une certitude que tu n'as pas.",
      "L'amour du prochain donne à cette confiance une expression concrète. Les questions peuvent être travaillées avec une personne formée, sans pression ni jugement sur la valeur de celui qui cherche."
    ],
    "example": "Quelqu'un qui hésite peut lire un passage d'Évangile, noter sa question puis la poser à un prêtre, sans promettre de tout accepter immédiatement.",
    "question": "Quelle question souhaiterais-tu comprendre avant d'aller plus loin ?",
    "source": "Catéchisme de l’Église catholique (CEC), nos 150, 153–160 ; Marc 9,24.",
    "references": [
      {
        "label": "CEC 150–152",
        "url": "https://www.vatican.va/archive/FRA0013/__PX.HTM"
      },
      {
        "label": "CEC 153–160",
        "url": "https://www.vatican.va/archive/FRA0013/__PY.HTM"
      }
    ],
    "review": "Vérifier la distinction entre connaissance, assentiment de foi, grâce et liberté, sans présenter la foi comme une preuve scientifique."
  },
  {
    "id": "psaumes",
    "title": "Comment découvrir les psaumes ?",
    "intro": "Des poèmes pour exprimer la confiance, la joie ou la détresse.",
    "paragraphs": [
      "Les psaumes sont des prières poétiques de la Bible, issues de la prière d'Israël. La tradition catholique les reçoit aussi dans sa prière personnelle et dans la liturgie. Leurs voix sont variées : louange, demande, plainte ou espérance.",
      "On peut commencer par quelques versets et écouter ce qu'ils expriment. Les images de refuge, de berger et de chemin parlent d'une relation à Dieu ; elles ne doivent pas devenir une garantie de sécurité matérielle ou de guérison.",
      "Certains passages évoquent des ennemis ou des violences dans des mots anciens. On peut les lire avec leur contexte et en demander une explication, sans en tirer une permission de faire du mal."
    ],
    "example": "Après une journée éprouvante, tu peux lire le psaume 23 et retenir l'image du berger. Si un mot te paraît difficile, note-le pour en parler plutôt que de te forcer à tout comprendre.",
    "question": "Quelle image du psaume t'aide à exprimer ce que tu vis, ou au contraire te questionne ?",
    "source": "CEC, nos 2585–2589 ; Psaumes 23, 27, 46, 91 et 121, numérotation Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ],
    "review": "Valider le respect de la prière juive, la lecture chrétienne des images violentes et les correspondances de numérotation liturgique."
  },
  {
    "id": "souffrir",
    "title": "Que dit la foi devant la souffrance ?",
    "intro": "Accompagner une épreuve sans l’expliquer trop vite.",
    "paragraphs": [
      "La souffrance peut faire naître une révolte ou une question sur Dieu. La tradition catholique regarde Jésus proche des personnes éprouvées et reconnaît dans sa mort et sa résurrection une espérance. Elle ne donne pas pour autant une explication simple à chaque malheur.",
      "Une personne malade ou blessée n'a pas à prouver sa foi par son endurance. On peut prier, protester, demander des soins et rechercher une aide concrète. Une absence de guérison ne permet pas de conclure à un manque de foi.",
      "Accompagner peut commencer par écouter et soulager une charge. La prière ne remplace pas les soins ; aucun texte de cette application ne promet un résultat médical ou un miracle."
    ],
    "example": "Pour soutenir un proche hospitalisé, tu peux proposer une visite s'il la souhaite, apporter une aide pratique et respecter son besoin de silence. Une prière peut accompagner cette présence, avec son accord.",
    "question": "Quelle présence ou quelle aide concrète pourrais-tu demander ou proposer librement ?",
    "source": "CEC, nos 1500–1509, notamment 1503 et 1508 ; Matthieu 25,36.",
    "references": [
      {
        "label": "CEC 1500–1509",
        "url": "https://www.vatican.va/archive/FRA0013/__P4F.HTM"
      }
    ],
    "review": "Relire la relation entre souffrance, péché, salut et espérance pascale. Éviter toute interprétation qui ferait porter la faute de la maladie au malade."
  },
  {
    "id": "pardon-charite",
    "title": "Pardon et grandes valeurs chrétiennes",
    "intro": "Aimer en vérité, avec justice et respect des personnes.",
    "paragraphs": [
      "Dans la tradition catholique, la charité est l'amour de Dieu et du prochain. Elle s'accompagne de vérité, de justice et de miséricorde : aimer ne consiste pas seulement à éprouver de la sympathie, mais à chercher le bien réel de l'autre.",
      "Jésus invite au pardon. Ce chemin peut être long et douloureux : pardonner n'est pas nier une blessure, oublier les faits ou renoncer à la justice. On peut garder des limites et chercher une protection. Il ne faut pas imposer une reprise de contact à une personne en danger.",
      "Lorsque l'on a soi-même blessé, reconnaître sa responsabilité et réparer comptent aussi. Dans la vie catholique, le sacrement de réconciliation est un lieu de pardon reçu de Dieu, à découvrir avec un prêtre ; une prière de l'application ne remplace pas ce sacrement."
    ],
    "example": "Après avoir blessé quelqu'un par une remarque, tu peux reconnaître précisément tes mots et proposer de réparer. La personne reste libre de prendre du temps. Dans une situation de violence, se protéger et demander de l'aide restent prioritaires.",
    "question": "Quel petit geste de vérité, de justice ou de bonté est possible sans te mettre en difficulté ?",
    "source": "CEC, nos 1822–1825 et 2839–2845 ; Jean 13,34 ; Luc 15,11–32.",
    "references": [
      {
        "label": "CEC 1822–1825",
        "url": "https://www.vatican.va/archive/FRA0013/__P60.HTM"
      },
      {
        "label": "CEC 2839–2845",
        "url": "https://www.vatican.va/archive/FRA0013/__PA5.HTM"
      }
    ],
    "review": "Valider les distinctions entre pardon, oubli, réconciliation, réparation et absolution sacramentelle, en protégeant les personnes victimes de violence."
  }
]);
const COMPLEMENTARY_PATH=['foi','psaumes','souffrir','pardon-charite'];
const PSALM_RECORDS=[
  {
    "id": "ps23",
    "title": "Psaume 23 — Le Seigneur est mon berger",
    "intro": "Ce poème de confiance compare Dieu à un berger et à un hôte accueillant. Il peut aider à parler de ce qui soutient au milieu d'une épreuve, sans promettre l'absence de difficultés.",
    "text": "1 Cantique de David.\nL’Éternel est mon berger: je ne manquerai de rien.\n\n2 Il me fait reposer dans de verts pâturages,\nIl me dirige près des eaux paisibles.\n\n3 Il restaure mon âme,\nIl me conduit dans les sentiers de la justice,\nA cause de son nom.\n\n4 Quand je marche dans la vallée de l’ombre de la mort,\nJe ne crains aucun mal, car tu es avec moi:\nTa houlette et ton bâton me rassurent.\n\n5 Tu dresses devant moi une table,\nEn face de mes adversaires;\nTu oins d’huile ma tête,\nEt ma coupe déborde.\n\n6 Oui, le bonheur et la grâce m’accompagneront\nTous les jours de ma vie,\nEt j’habiterai dans la maison de l’Éternel\nJusqu’à la fin de mes jours.",
    "psalm": 23,
    "source": "Psaume 23, versets 1 à 6 — Louis Segond 1910, domaine public. Texte intégral, titres anciens inclus. Numérotation de cette édition ; ce texte n’est pas la traduction liturgique officielle catholique.",
    "references": [
      {
        "label": "Édition Louis Segond 1910 — eBible",
        "url": "https://ebible.org/fraLSG/PSA023.htm"
      }
    ]
  },
  {
    "id": "ps27",
    "title": "Psaume 27 — Lumière et confiance",
    "intro": "Ce psaume fait entendre une confiance qui traverse la peur et la supplication. Ses images d'ennemis appartiennent à un langage ancien : elles n'autorisent pas la haine ou la violence.",
    "text": "1 De David.\nL’Éternel est ma lumière et mon salut:\nDe qui aurais-je crainte?\nL’Éternel est le soutien de ma vie:\nDe qui aurais-je peur?\n\n2 Quand des méchants s’avancent contre moi,\nPour dévorer ma chair,\nCe sont mes persécuteurs et mes ennemis\nQui chancellent et tombent.\n\n3 Si une armée se campait contre moi,\nMon cœur n’aurait aucune crainte;\nSi une guerre s’élevait contre moi,\nJe serais malgré cela plein de confiance.\n\n4 Je demande à l’Éternel une chose, que je désire ardemment:\nJe voudrais habiter toute ma vie dans la maison de l’Éternel,\nPour contempler la magnificence de l’Éternel\nEt pour admirer son temple.\n\n5 Car il me protégera dans son tabernacle au jour du malheur,\nIl me cachera sous l’abri de sa tente;\nIl m’élèvera sur un rocher.\n\n6 Et déjà ma tête s’élève sur mes ennemis qui m’entourent;\nJ’offrirai des sacrifices dans sa tente, au son de la trompette;\nJe chanterai, je célébrerai l’Éternel.\n\n7 Éternel! Écoute ma voix, je t’invoque:\nAie pitié de moi et exauce-moi!\n\n8 Mon cœur dit de ta part: Cherchez ma face!\nJe cherche ta face, ô Éternel!\n\n9 Ne me cache point ta face,\nNe repousse pas avec colère ton serviteur!\nTu es mon secours, ne me laisse pas, ne m’abandonne pas,\nDieu de mon salut!\n\n10 Car mon père et ma mère m’abandonnent,\nMais l’Éternel me recueillera.\n\n11 Éternel! enseigne-moi ta voie,\nConduis-moi dans le sentier de la droiture,\nA cause de mes ennemis.\n\n12 Ne me livre pas au bon plaisir de mes adversaires,\nCar il s’élève contre moi de faux témoins\nEt des gens qui ne respirent que la violence.\n\n13 Oh! Si je n’étais pas sûr de voir la bonté de l’Éternel\nSur la terre des vivants!…\n\n14 Espère en l’Éternel!\nFortifie-toi et que ton cœur s’affermisse!\nEspère en l’Éternel!",
    "psalm": 27,
    "source": "Psaume 27, versets 1 à 14 — Louis Segond 1910, domaine public. Texte intégral, titres anciens inclus. Numérotation de cette édition ; ce texte n’est pas la traduction liturgique officielle catholique.",
    "references": [
      {
        "label": "Édition Louis Segond 1910 — eBible",
        "url": "https://ebible.org/fraLSG/PSA027.htm"
      }
    ]
  },
  {
    "id": "ps46",
    "title": "Psaume 46 — Un refuge dans la détresse",
    "intro": "Au milieu d'un monde bouleversé, cette prière cherche un appui en Dieu et évoque la fin des combats. Son langage poétique n'annonce pas la disparition de tous les dangers. Le titre ancien est compté comme verset 1 dans cette édition.",
    "text": "1 Au chef des chantres. Des fils de Koré. Sur alamoth. Cantique.\n\n2 Dieu est pour nous un refuge et un appui,\nUn secours qui ne manque jamais dans la détresse.\n\n3 C’est pourquoi nous sommes sans crainte quand la terre est bouleversée,\nEt que les montagnes chancellent au cœur des mers,\n\n4 Quand les flots de la mer mugissent, écument,\nSe soulèvent jusqu’à faire trembler les montagnes.\n— Pause.\n\n5 Il est un fleuve dont les courants réjouissent la cité de Dieu,\nLe sanctuaire des demeures du Très-Haut.\n\n6 Dieu est au milieu d’elle: elle n’est point ébranlée;\nDieu la secourt dès l’aube du matin.\n\n7 Des nations s’agitent, des royaumes s’ébranlent;\nIl fait entendre sa voix: la terre se fond d’épouvante.\n\n8 L’Éternel des armées est avec nous,\nLe Dieu de Jacob est pour nous une haute retraite.\n— Pause.\n\n9 Venez, contemplez les œuvres de l’Éternel,\nLes ravages qu’il a opérés sur la terre!\n\n10 C’est lui qui a fait cesser les combats jusqu’au bout de la terre;\nIl a brisé l’arc, et il a rompu la lance,\nIl a consumé par le feu les chars de guerre.\n\n11 Arrêtez, et sachez que je suis Dieu:\nJe domine sur les nations, je domine sur la terre.\n\n12 L’Éternel des armées est avec nous,\nLe Dieu de Jacob est pour nous une haute retraite.\n— Pause.",
    "psalm": 46,
    "source": "Psaume 46, versets 1 à 12 — Louis Segond 1910, domaine public. Texte intégral, titres anciens inclus. Numérotation de cette édition ; ce texte n’est pas la traduction liturgique officielle catholique.",
    "references": [
      {
        "label": "Édition Louis Segond 1910 — eBible",
        "url": "https://ebible.org/fraLSG/PSA046.htm"
      }
    ]
  },
  {
    "id": "ps91",
    "title": "Psaume 91 — À l’abri du Très-Haut",
    "intro": "Ce poème exprime la confiance en Dieu par des images de refuge et de protection. Dans cette proposition de lecture chrétienne, ces images ne constituent pas une assurance contre la maladie ou les accidents. Ce texte ne remplace ni prudence ni soins.",
    "text": "1 Celui qui demeure sous l’abri du Très-Haut\nRepose à l’ombre du Tout-Puissant.\n\n2 Je dis à l’Éternel: Mon refuge et ma forteresse,\nMon Dieu en qui je me confie!\n\n3 Car c’est lui qui te délivre du filet de l’oiseleur,\nDe la peste et de ses ravages.\n\n4 Il te couvrira de ses plumes,\nEt tu trouveras un refuge sous ses ailes;\nSa fidélité est un bouclier et une cuirasse.\n\n5 Tu ne craindras ni les terreurs de la nuit,\nNi la flèche qui vole de jour,\n\n6 Ni la peste qui marche dans les ténèbres,\nNi la contagion qui frappe en plein midi.\n\n7 Que mille tombent à ton côté,\nEt dix mille à ta droite,\nTu ne seras pas atteint;\n\n8 De tes yeux seulement tu regarderas,\nEt tu verras la rétribution des méchants.\n\n9 Car tu es mon refuge, ô Éternel!\nTu fais du Très-Haut ta retraite.\n\n10 Aucun malheur ne t’arrivera,\nAucun fléau n’approchera de ta tente.\n\n11 Car il ordonnera à ses anges\nDe te garder dans toutes tes voies;\n\n12 Ils te porteront sur les mains,\nDe peur que ton pied ne heurte contre une pierre.\n\n13 Tu marcheras sur le lion et sur l’aspic,\nTu fouleras le lionceau et le dragon.\n\n14 Puisqu’il m’aime, je le délivrerai;\nJe le protégerai, puisqu’il connaît mon nom.\n\n15 Il m’invoquera, et je lui répondrai;\nJe serai avec lui dans la détresse,\nJe le délivrerai et je le glorifierai.\n\n16 Je le rassasierai de longs jours,\nEt je lui ferai voir mon salut.",
    "psalm": 91,
    "source": "Psaume 91, versets 1 à 16 — Louis Segond 1910, domaine public. Texte intégral, titres anciens inclus. Numérotation de cette édition ; ce texte n’est pas la traduction liturgique officielle catholique.",
    "references": [
      {
        "label": "Édition Louis Segond 1910 — eBible",
        "url": "https://ebible.org/fraLSG/PSA091.htm"
      }
    ]
  },
  {
    "id": "ps121",
    "title": "Psaume 121 — Sur le chemin",
    "intro": "Cette prière de pèlerin évoque un départ, un chemin et l'attention de Dieu. Ses images de protection soutiennent l'espérance ; elles ne promettent pas un voyage sans risque ou une vie sans épreuve.",
    "text": "1 Cantique des degrés.\nJe lève mes yeux vers les montagnes…\nD’où me viendra le secours?\n\n2 Le secours me vient de l’Éternel,\nQui a fait les cieux et la terre.\n\n3 Il ne permettra point que ton pied chancelle;\nCelui qui te garde ne sommeillera point.\n\n4 Voici, il ne sommeille ni ne dort,\nCelui qui garde Israël.\n\n5 L’Éternel est celui qui te garde,\nL’Éternel est ton ombre à ta main droite.\n\n6 Pendant le jour le soleil ne te frappera point,\nNi la lune pendant la nuit.\n\n7 L’Éternel te gardera de tout mal,\nIl gardera ton âme;\n\n8 L’Éternel gardera ton départ et ton arrivée,\nDès maintenant et à jamais.",
    "psalm": 121,
    "source": "Psaume 121, versets 1 à 8 — Louis Segond 1910, domaine public. Texte intégral, titres anciens inclus. Numérotation de cette édition ; ce texte n’est pas la traduction liturgique officielle catholique.",
    "references": [
      {
        "label": "Édition Louis Segond 1910 — eBible",
        "url": "https://ebible.org/fraLSG/PSA121.htm"
      }
    ]
  }
];
for(const p of PSALM_RECORDS){const i=READINGS.findIndex(r=>r.id===p.id);if(i>=0)READINGS[i]=p;else READINGS.push(p)}


// Lot 3.3 : propositions éditoriales à relire, sans changement des contenus antérieurs.
PRAYERS.push(...[
  {
    "id": "confiance-foi-hesitante",
    "category": "paix",
    "title": "Pour confier à Dieu une foi hésitante",
    "themes": [
      "Confiance",
      "Doute"
    ],
    "text": "Mon Dieu,\nIl y a des jours où je voudrais te faire confiance, mais où tes silences me déconcertent. Je ne veux ni cacher mes questions ni faire semblant de croire plus facilement que je ne le peux.\nAccueille ce désir fragile de te chercher. Aide-moi à reconnaître ce qui me trouble, à écouter sans me comparer aux autres et à demander des éclaircissements quand une parole me blesse ou m'échappe.\nQuand je ne ressens rien, apprends-moi à ne pas me juger trop vite. Qu'une rencontre honnête, une lecture ou un instant de silence puisse ouvrir un peu d'espace en moi.\nJe te confie ma recherche telle qu'elle est aujourd'hui. Accompagne mon pas, même hésitant, dans la liberté et la vérité.\nAmen."
  },
  {
    "id": "pardon-mots-manquent",
    "category": "epreuves",
    "title": "Quand les mots manquent pour demander pardon",
    "themes": [
      "Pardon"
    ],
    "text": "Seigneur,\nJe sais que j'ai blessé quelqu'un, mais je ne trouve pas les mots pour m'approcher de cette personne. J'ai peur de sa réaction et je voudrais parfois expliquer ma faute avant même d'avoir écouté sa peine.\nAide-moi à préparer une parole simple, qui reconnaisse ce que j'ai fait sans réclamer d'être rassuré. Donne-moi le courage de nommer le tort causé et d'entendre ce que l'autre souhaite me dire.\nSi ma demande ne reçoit pas de réponse immédiate, apprends-moi à respecter ce temps. Que mes excuses ne deviennent pas une pression de plus.\nMontre-moi les gestes de réparation possibles et aide-moi à les tenir dans la durée. Je te confie ce chemin avec humilité, sans chercher à décider du pardon de l'autre.\nAmen."
  },
  {
    "id": "patience-reponse-douce",
    "category": "paix",
    "title": "Pour répondre avec patience et douceur",
    "themes": [
      "Patience",
      "Douceur"
    ],
    "text": "Seigneur,\nQuand je suis pressé ou fatigué, une petite contrariété peut prendre toute la place. Je réponds parfois trop sèchement à une personne qui ne connaît pas ce que je porte.\nAide-moi à reconnaître ce moment avant que mes mots ne dépassent ma pensée. Donne-moi la liberté de faire une pause, de parler moins vite et de demander un peu de temps si j'en ai besoin.\nApprends-moi à écouter la personne devant moi, sans la réduire à ce qui m'agace. Que ma douceur reste sincère, capable de dire aussi une limite ou un désaccord avec respect.\nSi je manque de patience, aide-moi à le reconnaître et à recommencer. Que mes gestes ordinaires puissent offrir aux autres un peu de cette attention que j'espère recevoir moi-même.\nAmen."
  },
  {
    "id": "proche-presence-souffrance",
    "category": "epreuves",
    "title": "Auprès d’un proche qui souffre",
    "themes": [
      "Souffrance",
      "Proches",
      "Accompagnement"
    ],
    "text": "Seigneur,\nUne personne que j'aime traverse une souffrance que je ne peux pas enlever. Je voudrais trouver une phrase qui réconforte, mais je crains de parler trop vite ou de ne pas savoir rester présent.\nAide-moi à lui demander ce qui lui ferait du bien, puis à respecter sa réponse. Apprends-moi à offrir une aide précise, un repas, un trajet ou un moment d'écoute, sans imposer ma présence.\nSoutiens les personnes qui prennent soin d'elle et celles qui cherchent avec elle les soins adaptés. Donne-moi aussi de reconnaître ma fatigue et de prendre le relais avec d'autres.\nJe ne te demande pas de garantir une issue que je ne connais pas. Je te confie cette personne, son courage et ses questions. Que notre affection demeure attentive et respectueuse.\nAmen."
  },
  {
    "id": "journee-contretemps",
    "category": "quotidien",
    "title": "Quand la journée commence de travers",
    "themes": [
      "Courage",
      "Confiance"
    ],
    "text": "Mon Dieu,\nCette journée semble déjà trop lourde. Un imprévu, une mauvaise nouvelle ou une tâche de plus me donne l'impression de ne plus savoir par où commencer.\nAide-moi à distinguer ce qui est urgent de ce qui peut attendre. Donne-moi le courage de choisir une première action à ma portée, puis d'avancer sans exiger de tout résoudre à la fois.\nSi je dois demander de l'aide ou reconnaître une limite, apprends-moi à le faire sans honte. Rappelle-moi aussi que les personnes autour de moi portent peut-être une journée difficile.\nQuand la tension monte, ouvre une petite place pour respirer et reprendre mes mots avec respect. Je te confie ce jour imparfait, ses obstacles et ses rencontres. Accompagne mon désir d'y faire quelque chose de bon.\nAmen."
  },
  {
    "id": "joies-accueillir-partager",
    "category": "gratitude",
    "title": "Pour accueillir une petite joie et la partager",
    "themes": [
      "Gratitude",
      "Petites joies"
    ],
    "text": "Seigneur,\nAujourd'hui, une chose simple m'a fait sourire : une lumière sur le chemin, une conversation inattendue, une musique ou un geste d'amitié. Je prends un moment pour accueillir cette joie au lieu de passer aussitôt à la suite.\nMerci pour ce qui rend la vie plus douce et pour les personnes qui y contribuent, souvent sans le savoir. Aide-moi à leur témoigner ma reconnaissance avec des mots précis et une attention vraie.\nQue cette joie ne m'éloigne pas de ceux qui peinent. Qu'elle m'apprenne plutôt à partager ce que je peux offrir, sans demander aux autres d'être heureux sur commande.\nJe te confie ce souvenir léger. Apprends-moi à le recevoir comme un cadeau de ce jour, sans vouloir le retenir ni mesurer ma vie à ce seul instant.\nAmen."
  }
]);
LESSONS.push(...[
  {
    "id": "lire-un-psaume",
    "title": "Comment lire un psaume ?",
    "intro": "Une méthode simple pour entrer dans une prière poétique.",
    "paragraphs": [
      "Un psaume est un poème de prière transmis dans la Bible. Issus de la prière d'Israël, les psaumes expriment des expériences très diverses : gratitude, détresse, confiance ou recherche de justice. Dans la tradition catholique, ils sont reçus comme Écriture sainte et utilisés dans la liturgie comme dans la prière personnelle.",
      "Pour commencer, lis un court psaume une première fois. Repère qui parle, ce qui est demandé et les images employées. Relis ensuite un verset qui te touche ou t'interroge. Tu peux répondre avec tes propres mots, ou simplement garder un silence.",
      "Il n'est pas nécessaire de retrouver tous les sentiments du poème. Certains mots appartiennent à un monde ancien ; un passage difficile peut être discuté avec un prêtre. Les images de protection n'offrent pas une assurance contre les accidents ou la maladie."
    ],
    "example": "Tu peux lire le psaume 23, remarquer l'image du berger puis celle de la vallée sombre. Demande-toi ce que chacune fait entendre, avant de choisir un verset pour une courte prière.",
    "question": "Quel mot du psaume aimerais-tu reprendre, ou faire expliquer, sans obligation de ressentir quelque chose ?",
    "source": "CEC, nos 2585–2589 ; Psaume 23,1–4 (Louis Segond 1910).",
    "references": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      },
      {
        "label": "Psaume 23 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA023.htm"
      }
    ],
    "review": "Valider la présentation des racines juives des psaumes et de leur usage catholique ; distinguer méthode de lecture, prière et garantie de protection."
  },
  {
    "id": "quatre-evangiles",
    "title": "Découvrir les quatre Évangiles",
    "intro": "Quatre témoignages pour découvrir un même Jésus.",
    "paragraphs": [
      "La Bible chrétienne contient quatre Évangiles, traditionnellement désignés par les noms de Matthieu, Marc, Luc et Jean. Dans la foi catholique, ils occupent une place centrale : ils témoignent de la vie, de l'enseignement, de la mort et de la résurrection de Jésus.",
      "Matthieu donne notamment une grande place aux enseignements de Jésus, comme le discours sur la montagne. Marc raconte de nombreuses rencontres et actions de Jésus, avec un récit vivant, par exemple la rencontre de Bartimée.",
      "Luc propose des récits marquants sur la miséricorde et l'accueil, comme la parabole du père et de ses deux fils. Jean développe des dialogues et des signes qui invitent à reconnaître qui est Jésus, comme le récit de Cana.",
      "Ces repères n'épuisent pas la richesse de chaque livre. Les quatre voix se complètent dans la lecture de l'Église ; tu peux découvrir un petit passage à la fois, sans devoir commencer les quatre livres ensemble."
    ],
    "example": "Tu peux choisir Luc 15,11–32 et observer comment le père accueille chacun de ses fils. Une autre fois, lis une rencontre dans Marc et demande-toi comment Jésus écoute la personne qui l'appelle.",
    "question": "Quelle porte d’entrée t’attire aujourd’hui : un enseignement, une rencontre, une parabole ou un dialogue ?",
    "source": "CEC, nos 125–127 ; Matthieu 5,1–12 ; Marc 10,46–52 ; Luc 15,11–32 ; Jean 2,1–11. Références bibliques, Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 125–127",
        "url": "https://www.vatican.va/archive/FRA0013/__PS.HTM"
      },
      {
        "label": "Matthieu 5",
        "url": "https://ebible.org/fraLSG/MAT05.htm"
      },
      {
        "label": "Marc 10",
        "url": "https://ebible.org/fraLSG/MRK10.htm"
      },
      {
        "label": "Luc 15",
        "url": "https://ebible.org/fraLSG/LUK15.htm"
      },
      {
        "label": "Jean 2",
        "url": "https://ebible.org/fraLSG/JHN02.htm"
      }
    ],
    "review": "Relire les accents pédagogiques attribués aux quatre Évangiles, sans les enfermer dans un portrait réducteur. Vérifier la distinction entre noms traditionnels, histoire de rédaction et témoignage reçu par l’Église."
  },
  {
    "id": "prier-mots-personnels",
    "title": "Prier avec ses propres mots",
    "intro": "Parler simplement à Dieu, même quand on hésite.",
    "paragraphs": [
      "Dans la tradition catholique, la prière est une relation avec Dieu. On peut commencer avec des mots très simples, sans connaître de longues formules. Une joie, une inquiétude ou une question peuvent devenir le point de départ d'une parole adressée à Dieu.",
      "Tu peux dire ce que tu vis, ce que tu espères et ce qui reste difficile. Si tu doutes, tu peux nommer ce doute honnêtement. La prière ne demande pas de fabriquer une émotion ou de réussir une belle phrase.",
      "Les prières reçues de l'Église, notamment le Notre Père, gardent aussi leur place. Les mots personnels peuvent les accompagner. Avec l'aide d'un prêtre, on peut découvrir peu à peu cette prière partagée et sa dimension de rencontre avec Dieu."
    ],
    "example": "Tu peux commencer ainsi : « Mon Dieu, je suis fatigué et je ne sais pas bien quoi te dire. Voici ce qui me préoccupe. Aide-moi à écouter et à demander le soutien dont j'ai besoin. » Puis tu peux t'arrêter en silence.",
    "question": "Si tu le souhaites, quelle phrase sincère pourrais-tu adresser à Dieu à partir de ta journée ?",
    "source": "CEC, nos 2558–2565 et 2700–2704 ; Matthieu 6,7–9 ; Marc 9,24. Références bibliques, Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 2558–2565",
        "url": "https://www.vatican.va/archive/FRA0013/__P8U.HTM"
      },
      {
        "label": "CEC 2700–2704",
        "url": "https://www.vatican.va/archive/FRA0013/__P9F.HTM"
      },
      {
        "label": "Matthieu 6",
        "url": "https://ebible.org/fraLSG/MAT06.htm"
      },
      {
        "label": "Marc 9",
        "url": "https://ebible.org/fraLSG/MRK09.htm"
      }
    ],
    "review": "Valider la liberté des mots personnels et l’accueil du doute, sans réduire la prière à une technique de bien-être ni opposer parole personnelle, Notre Père et prière de l’Église."
  }
]);
COMPLEMENTARY_PATH.push(...["lire-un-psaume","quatre-evangiles","prier-mots-personnels"]);
const PSALM_NOTES={
  "23": {
    "contextTheme": "Ce poème de confiance est présenté comme un cantique de David dans le texte. Deux images se succèdent : le berger qui conduit et l'hôte qui accueille à sa table. La vallée sombre fait partie du chemin évoqué ; le psaume n'annonce pas une vie sans épreuve.",
    "feelings": "La confiance et le sentiment d'être accueilli traversent le poème, avec la peur que peut évoquer la vallée. La dernière parole ouvre une espérance de demeurer auprès de Dieu.",
    "takeaway": "Un lecteur peut retenir l'image d'une présence qui accompagne. Dans la lecture chrétienne, elle peut nourrir une prière au milieu des difficultés, tout en laissant une place aux aides concrètes.",
    "reflection": "Quelle image te rejoint le plus : le chemin, la table ou la maison ? Tu peux aussi garder une question ouverte.",
    "source": "Psaume 23,1–6, notamment versets 1–4, 5 et 6 ; CEC 2585–2589.",
    "review": "Relire le sens de l’attribution à David et des images d’accompagnement ; ne pas transformer la confiance en promesse de confort ou de réussite.",
    "references": [
      {
        "label": "Psaume 23 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA023.htm"
      },
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  "27": {
    "contextTheme": "Cette prière, placée sous le nom de David, associe confiance, recherche de la présence de Dieu et supplication. Elle évoque le sanctuaire, des adversaires et l'attente d'un secours, sans permettre à elle seule de reconstruire une circonstance historique précise.",
    "feelings": "Le courage côtoie l'inquiétude, la peur d'être abandonné et le désir d'être accueilli. Le psaume montre qu'une prière peut porter plusieurs sentiments, même contradictoires en apparence.",
    "takeaway": "Il est possible de confier à Dieu une peur réelle tout en cherchant un chemin de droiture. Les mots sur les ennemis n'autorisent pas à désigner quelqu'un à la haine ou à lui faire violence.",
    "reflection": "Y a-t-il une inquiétude ou une demande que tu aimerais formuler simplement, sans devoir la résoudre tout de suite ?",
    "source": "Psaume 27,1–14, notamment versets 4, 7–10 et 14 ; CEC 2585–2589.",
    "review": "Valider l’explication des images de sanctuaire, d’abandon et d’ennemis ; éviter toute identification automatique des adversaires bibliques aux proches du lecteur.",
    "references": [
      {
        "label": "Psaume 27 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA027.htm"
      },
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  "46": {
    "contextTheme": "Le titre ancien présente un cantique des fils de Koré. Cette prière collective évoque les bouleversements de la terre, une cité soutenue par Dieu et la fin des combats. Le refrain souligne la présence du Dieu de Jacob au milieu du peuple.",
    "feelings": "Le texte fait entendre l'effroi que suscite un monde instable, puis une assurance partagée et un appel à reconnaître Dieu. Cette confiance n'efface pas la violence des images employées.",
    "takeaway": "Le lecteur peut retenir le désir d'un appui et d'une paix qui dépassent ses seules forces. Le poème invite à une confiance spirituelle ; il ne garantit pas l'absence de guerre, de catastrophe ou de détresse.",
    "reflection": "Quelle présence t'aide à ne pas porter seul une période de bouleversement ? Tu peux en faire une demande ou un merci.",
    "source": "Psaume 46,1–12, titre compris dans la numérotation Segond 1910 ; notamment versets 2–4, 8 et 10–12 ; CEC 2585–2589.",
    "review": "Vérifier les termes collectifs et la lecture des images de guerre ; confirmer la numérotation de douze versets, dont le titre ancien.",
    "references": [
      {
        "label": "Psaume 46 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA046.htm"
      },
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  "91": {
    "contextTheme": "Ce poème exprime une confiance en Dieu par les images de l'abri, des ailes et du refuge. Plusieurs voix se répondent ; les derniers versets présentent une parole divine de présence dans la détresse. Le langage de protection est celui d'une prière poétique.",
    "feelings": "La peur de la nuit et des dangers se mêle au besoin de sécurité et à une grande confiance. Le texte prend au sérieux ce qui inquiète la personne qui prie.",
    "takeaway": "Dans cette proposition de lecture chrétienne, on peut recevoir une invitation à confier sa peur, sans lire ces images comme une assurance contre les accidents ou la maladie. Matthieu 4,5–7 met précisément en scène une citation du psaume à laquelle Jésus répond en refusant de mettre Dieu à l'épreuve. Prudence et soins restent nécessaires.",
    "reflection": "Quel souci voudrais-tu confier, tout en gardant les gestes de prudence et les soutiens dont tu as besoin ?",
    "source": "Psaume 91,1–16, notamment versets 1–4 et 14–16 ; Matthieu 4,5–7 ; CEC 2585–2589.",
    "review": "Relire en priorité le langage de protection et le lien avec Matthieu 4. Écarter toute promesse de guérison, d’invulnérabilité ou de faute imputée à la personne malade.",
    "references": [
      {
        "label": "Psaume 91 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA091.htm"
      },
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      },
      {
        "label": "Matthieu 4,5–7",
        "url": "https://ebible.org/fraLSG/MAT04.htm"
      }
    ]
  },
  "121": {
    "contextTheme": "Le titre parle d'un cantique des degrés. Dans la tradition de lecture des psaumes, ce groupe de chants est associé au pèlerinage. Le poème regarde vers les montagnes, puis évoque le secours et la vigilance de Dieu au départ comme à l'arrivée.",
    "feelings": "Une question ouvre le texte, suivie d'une confiance apaisée. Les images du jour et de la nuit expriment le désir d'une présence attentive dans la durée.",
    "takeaway": "Un lecteur peut y trouver des mots pour accompagner un départ ou une étape de vie. La confiance exprimée ne dispense pas de préparer son chemin, de rester prudent et d'accepter l'aide d'autres personnes.",
    "reflection": "Quelle étape te semble être un départ aujourd'hui ? Quelle aide concrète et quelle parole d'espérance souhaiterais-tu accueillir ?",
    "source": "Psaume 121,1–8 ; CEC 2585–2589. Benoît XVI, audience générale du 4 mai 2005 (psaume 120 liturgique, 121 dans la Segond).",
    "review": "Confirmer le sens traditionnel des cantiques des degrés et la prudence historique ; distinguer confiance spirituelle et garantie de sécurité pendant un voyage.",
    "references": [
      {
        "label": "Psaume 121 — Louis Segond 1910",
        "url": "https://ebible.org/fraLSG/PSA121.htm"
      },
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      },
      {
        "label": "Benoît XVI, audience du 4 mai 2005 — psaume 120 liturgique / 121 Segond",
        "url": "https://www.vatican.va/content/benedict-xvi/fr/audiences/2005/documents/hf_ben-xvi_aud_20050504.html"
      }
    ]
  }
};
for(const p of READINGS){if(p.psalm&&PSALM_NOTES[p.psalm])p.psalmNote=PSALM_NOTES[p.psalm]}

// Enrichissement original préparé pour la relecture du 12 novembre 2026.
LESSONS.push(...[
  {
    "id": "ess-dieu",
    "title": "Qui est Dieu ?",
    "intro": "Tu peux commencer avec tes questions, sans devoir déjà savoir ce que tu crois.",
    "sections": [
      {
        "title": "Une présence à découvrir",
        "text": "Dans la foi catholique, Dieu est à l’origine de tout ce qui existe et appelle chaque personne à une relation libre avec lui. Il n’est pas décrit comme un objet caché quelque part dans l’univers. Dire qu’il est Créateur, c’est reconnaître que la vie est reçue et qu’elle a une dignité. Cette conviction religieuse ne remplace pas la recherche scientifique sur le fonctionnement du monde."
      },
      {
        "title": "L’amour au cœur de la foi",
        "text": "Les chrétiens découvrent le visage de Dieu à travers l’histoire biblique et, de manière centrale, à travers Jésus. Ils croient que Dieu aime avant que l’être humain ait réussi à devenir parfait. Cet amour invite à répondre, à apprendre à aimer et à reconnaître ses erreurs. Il ne signifie pas que tout ce qui arrive serait bon, ni que les personnes croyantes seraient épargnées par les épreuves."
      },
      {
        "title": "Que veut dire appeler Dieu Père ?",
        "text": "Jésus parle de Dieu comme de son Père et invite ses disciples à lui faire confiance. Le mot évoque une origine et une sollicitude, sans réduire Dieu à un homme ni à l’image d’un parent humain. Si une histoire familiale a été douloureuse, cette parole peut être difficile à accueillir. Il est possible de prendre le temps d’en parler, sans forcer une émotion ou nier ce qui a blessé."
      },
      {
        "title": "Une relation qui se construit",
        "text": "Chercher Dieu peut passer par la lecture d’un Évangile, une prière très simple, une rencontre avec une communauté ou l’attention à une personne fragile. Aucune de ces expériences ne fonctionne comme une preuve automatique. La tradition catholique associe la foi à une confiance éclairée, qui peut dialoguer avec la raison et se laisser questionner. On peut explorer cette proposition et rester honnête sur ses hésitations."
      }
    ],
    "paragraphs": [
      "Dans la foi catholique, Dieu est à l’origine de tout ce qui existe et appelle chaque personne à une relation libre avec lui. Il n’est pas décrit comme un objet caché quelque part dans l’univers. Dire qu’il est Créateur, c’est reconnaître que la vie est reçue et qu’elle a une dignité. Cette conviction religieuse ne remplace pas la recherche scientifique sur le fonctionnement du monde.",
      "Les chrétiens découvrent le visage de Dieu à travers l’histoire biblique et, de manière centrale, à travers Jésus. Ils croient que Dieu aime avant que l’être humain ait réussi à devenir parfait. Cet amour invite à répondre, à apprendre à aimer et à reconnaître ses erreurs. Il ne signifie pas que tout ce qui arrive serait bon, ni que les personnes croyantes seraient épargnées par les épreuves.",
      "Jésus parle de Dieu comme de son Père et invite ses disciples à lui faire confiance. Le mot évoque une origine et une sollicitude, sans réduire Dieu à un homme ni à l’image d’un parent humain. Si une histoire familiale a été douloureuse, cette parole peut être difficile à accueillir. Il est possible de prendre le temps d’en parler, sans forcer une émotion ou nier ce qui a blessé.",
      "Chercher Dieu peut passer par la lecture d’un Évangile, une prière très simple, une rencontre avec une communauté ou l’attention à une personne fragile. Aucune de ces expériences ne fonctionne comme une preuve automatique. La tradition catholique associe la foi à une confiance éclairée, qui peut dialoguer avec la raison et se laisser questionner. On peut explorer cette proposition et rester honnête sur ses hésitations."
    ],
    "examples": [
      "En regardant un paysage, tu peux remercier pour la beauté reçue, puis te demander quel geste concret aiderait à la préserver. Le regard de foi devient ainsi une invitation à prendre soin.",
      "Si le mot Père te met mal à l’aise, tu peux commencer ta prière par Mon Dieu, ou simplement garder un silence. Une personne de confiance peut t’aider à comprendre ce qui te retient."
    ],
    "example": "En regardant un paysage, tu peux remercier pour la beauté reçue, puis te demander quel geste concret aiderait à la préserver. Le regard de foi devient ainsi une invitation à prendre soin.\n\nSi le mot Père te met mal à l’aise, tu peux commencer ta prière par Mon Dieu, ou simplement garder un silence. Une personne de confiance peut t’aider à comprendre ce qui te retient.",
    "summary": [
      "La foi catholique reconnaît Dieu comme Créateur et comme amour.",
      "Jésus est au centre de la découverte chrétienne de Dieu.",
      "La relation proposée laisse une place à la liberté, à la raison et aux questions."
    ],
    "question": "Quelle image de Dieu portes-tu aujourd’hui, et d’où te vient-elle ?",
    "invitation": "Tu peux poursuivre avec la leçon sur la Trinité ou lire Luc 15, 11–32.",
    "source": "CEC 199–221 et 239 ; Luc 15, 11–32 ; 1 Jean 4, 7–16. Références bibliques consultées dans Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 199–221",
        "url": "https://www.vatican.va/archive/FRA0013/__P17.HTM"
      },
      {
        "label": "CEC 239",
        "url": "https://www.vatican.va/archive/FRA0013/__P18.HTM"
      },
      {
        "label": "Luc 15, 11–32",
        "url": "https://ebible.org/fraLSG/LUK15.htm"
      },
      {
        "label": "1 Jean 4, 7–16",
        "url": "https://ebible.org/fraLSG/1JN04.htm"
      }
    ],
    "review": "Vérifier la distinction entre création, science et relation personnelle ; la paternité de Dieu face aux blessures familiales ; ne pas présenter une conviction de foi comme une démonstration."
  },
  {
    "id": "ess-trinite",
    "title": "Comprendre la Sainte Trinité",
    "intro": "Ce mot peut sembler compliqué. On peut en découvrir le sens sans tout comprendre d’un seul coup.",
    "sections": [
      {
        "title": "Un seul Dieu, trois Personnes",
        "text": "La foi catholique confesse un seul Dieu : le Père, le Fils et le Saint-Esprit. Elle ne parle ni de trois dieux qui coopéreraient, ni d’un Dieu qui changerait simplement de masque. Le Père n’est pas le Fils, le Fils n’est pas l’Esprit ; chacun est pleinement Dieu. Le mot Personne est ici un terme de foi : il ne désigne pas trois individus séparés comme dans une famille humaine."
      },
      {
        "title": "Partir de la vie de Jésus",
        "text": "La Trinité se découvre dans le témoignage des Évangiles : Jésus s’adresse au Père, reçoit et accomplit sa mission, et promet l’Esprit Saint. Au baptême de Jésus, Matthieu met en scène Jésus, l’Esprit et la voix du Père. À la fin de cet Évangile, le baptême des disciples est lié au Père, au Fils et au Saint-Esprit. La doctrine cherche à accueillir ensemble ces témoignages."
      },
      {
        "title": "Un mystère qui invite à entrer en relation",
        "text": "Dans le langage chrétien, mystère ne signifie pas devinette réservée aux spécialistes. Il désigne une réalité que l’on reçoit dans la foi et que l’on n’épuise pas par une définition. Les images de l’eau, du soleil ou d’une famille peuvent parfois aider à poser une question, mais elles deviennent trompeuses si on les prend pour une explication exacte de Dieu. Mieux vaut accepter cette limite que fabriquer une comparaison parfaite."
      },
      {
        "title": "Une foi présente dans la prière",
        "text": "Le signe de croix et la prière chrétienne rappellent cette confession. Les catholiques prient le Père, par le Fils, dans l’Esprit ; ils peuvent aussi s’adresser à Jésus ou à l’Esprit Saint. Cette relation n’est pas un exercice à réussir. Elle invite à recevoir la vie comme un don et à grandir dans l’amour des autres, tout en respectant la différence entre Dieu et nos relations humaines."
      }
    ],
    "paragraphs": [
      "La foi catholique confesse un seul Dieu : le Père, le Fils et le Saint-Esprit. Elle ne parle ni de trois dieux qui coopéreraient, ni d’un Dieu qui changerait simplement de masque. Le Père n’est pas le Fils, le Fils n’est pas l’Esprit ; chacun est pleinement Dieu. Le mot Personne est ici un terme de foi : il ne désigne pas trois individus séparés comme dans une famille humaine.",
      "La Trinité se découvre dans le témoignage des Évangiles : Jésus s’adresse au Père, reçoit et accomplit sa mission, et promet l’Esprit Saint. Au baptême de Jésus, Matthieu met en scène Jésus, l’Esprit et la voix du Père. À la fin de cet Évangile, le baptême des disciples est lié au Père, au Fils et au Saint-Esprit. La doctrine cherche à accueillir ensemble ces témoignages.",
      "Dans le langage chrétien, mystère ne signifie pas devinette réservée aux spécialistes. Il désigne une réalité que l’on reçoit dans la foi et que l’on n’épuise pas par une définition. Les images de l’eau, du soleil ou d’une famille peuvent parfois aider à poser une question, mais elles deviennent trompeuses si on les prend pour une explication exacte de Dieu. Mieux vaut accepter cette limite que fabriquer une comparaison parfaite.",
      "Le signe de croix et la prière chrétienne rappellent cette confession. Les catholiques prient le Père, par le Fils, dans l’Esprit ; ils peuvent aussi s’adresser à Jésus ou à l’Esprit Saint. Cette relation n’est pas un exercice à réussir. Elle invite à recevoir la vie comme un don et à grandir dans l’amour des autres, tout en respectant la différence entre Dieu et nos relations humaines."
    ],
    "examples": [
      "En voyant quelqu’un faire le signe de croix, tu peux reconnaître une manière simple de rappeler le baptême et la foi trinitaire, plutôt qu’un geste magique.",
      "Si tu ne sais pas à qui t’adresser dans la prière, tu peux simplement dire Mon Dieu. Tu pourras ensuite découvrir les paroles du Notre Père avec quelqu’un."
    ],
    "example": "En voyant quelqu’un faire le signe de croix, tu peux reconnaître une manière simple de rappeler le baptême et la foi trinitaire, plutôt qu’un geste magique.\n\nSi tu ne sais pas à qui t’adresser dans la prière, tu peux simplement dire Mon Dieu. Tu pourras ensuite découvrir les paroles du Notre Père avec quelqu’un.",
    "summary": [
      "Les catholiques croient en un seul Dieu, Père, Fils et Saint-Esprit.",
      "Les trois Personnes sont réellement distinctes et ne sont pas trois parties de Dieu.",
      "Les comparaisons humaines restent limitées."
    ],
    "question": "Quelle question aimerais-tu poser à propos du Père, du Fils ou de l’Esprit ?",
    "invitation": "La leçon sur Jésus peut aider à poursuivre cette découverte.",
    "source": "CEC 232–260 ; Matthieu 3, 13–17 et 28, 19–20 ; Jean 14, 16–17. Références bibliques : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 232–260",
        "url": "https://www.vatican.va/archive/FRA0013/__P18.HTM"
      },
      {
        "label": "Matthieu 3, 13–17",
        "url": "https://ebible.org/fraLSG/MAT03.htm"
      },
      {
        "label": "Matthieu 28, 19–20",
        "url": "https://ebible.org/fraLSG/MAT28.htm"
      },
      {
        "label": "Jean 14, 16–17",
        "url": "https://ebible.org/fraLSG/JHN14.htm"
      }
    ],
    "review": "Relire les termes une nature/trois Personnes ; écarter modalisme, trithéisme et division de Dieu ; vérifier la pédagogie du mot mystère."
  },
  {
    "id": "ess-jesus",
    "title": "Qui est réellement Jésus ?",
    "intro": "Tu peux découvrir Jésus par étapes, à partir de ses rencontres et de ses paroles.",
    "sections": [
      {
        "title": "Une vie dans une histoire concrète",
        "text": "Jésus est un Juif du premier siècle, vivant dans le contexte de la Galilée et de la Judée. Les Évangiles racontent son annonce du Royaume de Dieu, ses rencontres, sa prière et le chemin qui le conduit à Jérusalem. Ils sont des témoignages de foi enracinés dans une histoire, avec des intentions et des accents propres ; ils ne ressemblent pas à une biographie contemporaine qui expliquerait chaque détail de sa vie."
      },
      {
        "title": "Plus qu’un maître de sagesse pour les chrétiens",
        "text": "Pour les catholiques, Jésus est le Fils de Dieu devenu homme. Il est pleinement Dieu et pleinement homme, sans confusion entre les deux. Cela ne signifie pas qu’il jouerait à être humain : les récits montrent sa fatigue, son émotion, son amitié et sa souffrance. La foi chrétienne reconnaît en lui une humanité véritable, sans péché, et la présence de Dieu qui vient à la rencontre des êtres humains."
      },
      {
        "title": "Un message qui touche les relations",
        "text": "Jésus enseigne l’amour de Dieu et du prochain, appelle à la conversion et accueille des personnes tenues à distance. Ses paraboles donnent à réfléchir plutôt que de fournir un slogan pour chaque situation. Dans le récit de Zachée, l’accueil reçu conduit à envisager une réparation des torts. La miséricorde ne rend donc pas le mal insignifiant : elle ouvre une possibilité de changement et de justice."
      },
      {
        "title": "Découvrir par la lecture",
        "text": "Pour commencer, choisis un récit court et observe les personnes présentes, les gestes de Jésus et la réponse qu’ils suscitent. Une parole difficile mérite d’être replacée dans son contexte, avec un accompagnateur si besoin. La foi en Jésus comprend aussi sa mort et sa Résurrection : on ne peut pas réduire son message à une simple méthode de bien-être. Il est possible de s’approcher de cette confession avec des interrogations sincères."
      }
    ],
    "paragraphs": [
      "Jésus est un Juif du premier siècle, vivant dans le contexte de la Galilée et de la Judée. Les Évangiles racontent son annonce du Royaume de Dieu, ses rencontres, sa prière et le chemin qui le conduit à Jérusalem. Ils sont des témoignages de foi enracinés dans une histoire, avec des intentions et des accents propres ; ils ne ressemblent pas à une biographie contemporaine qui expliquerait chaque détail de sa vie.",
      "Pour les catholiques, Jésus est le Fils de Dieu devenu homme. Il est pleinement Dieu et pleinement homme, sans confusion entre les deux. Cela ne signifie pas qu’il jouerait à être humain : les récits montrent sa fatigue, son émotion, son amitié et sa souffrance. La foi chrétienne reconnaît en lui une humanité véritable, sans péché, et la présence de Dieu qui vient à la rencontre des êtres humains.",
      "Jésus enseigne l’amour de Dieu et du prochain, appelle à la conversion et accueille des personnes tenues à distance. Ses paraboles donnent à réfléchir plutôt que de fournir un slogan pour chaque situation. Dans le récit de Zachée, l’accueil reçu conduit à envisager une réparation des torts. La miséricorde ne rend donc pas le mal insignifiant : elle ouvre une possibilité de changement et de justice.",
      "Pour commencer, choisis un récit court et observe les personnes présentes, les gestes de Jésus et la réponse qu’ils suscitent. Une parole difficile mérite d’être replacée dans son contexte, avec un accompagnateur si besoin. La foi en Jésus comprend aussi sa mort et sa Résurrection : on ne peut pas réduire son message à une simple méthode de bien-être. Il est possible de s’approcher de cette confession avec des interrogations sincères."
    ],
    "examples": [
      "Tu peux lire Luc 19, 1–10 et regarder comment Zachée passe de la curiosité à une décision concrète. Puis te demander si un geste de justice serait possible dans ta propre journée.",
      "Si une phrase sur Jésus te choque ou te paraît contradictoire, note-la avant de conclure. Comparer le récit entier avec un prêtre peut éclairer le sens des mots."
    ],
    "example": "Tu peux lire Luc 19, 1–10 et regarder comment Zachée passe de la curiosité à une décision concrète. Puis te demander si un geste de justice serait possible dans ta propre journée.\n\nSi une phrase sur Jésus te choque ou te paraît contradictoire, note-la avant de conclure. Comparer le récit entier avec un prêtre peut éclairer le sens des mots.",
    "summary": [
      "Jésus appartient à l’histoire juive du premier siècle.",
      "Les catholiques le confessent vrai Dieu et vrai homme.",
      "Son accueil appelle à aimer, à se convertir et à réparer."
    ],
    "question": "Dans les rencontres de Jésus, quel geste aimerais-tu mieux comprendre ?",
    "invitation": "Tu peux poursuivre avec la leçon sur sa mort et sa Résurrection.",
    "source": "CEC 456–469 ; Jean 1, 1–18 ; Luc 19, 1–10. Références bibliques : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 456–469",
        "url": "https://www.vatican.va/archive/FRA0013/__P1G.HTM"
      },
      {
        "label": "Jean 1, 1–18",
        "url": "https://ebible.org/fraLSG/JHN01.htm"
      },
      {
        "label": "Luc 19, 1–10",
        "url": "https://ebible.org/fraLSG/LUK19.htm"
      }
    ],
    "review": "Vérifier l’unité de la Personne du Christ et ses deux natures ; distinguer recherche historique et confession chrétienne sans les opposer artificiellement."
  },
  {
    "id": "ess-paques",
    "title": "La mort et la Résurrection de Jésus",
    "intro": "Ces événements sont au cœur de la foi chrétienne. On peut les aborder sans minimiser leur difficulté.",
    "sections": [
      {
        "title": "Une mort réelle",
        "text": "Les Évangiles racontent l’arrestation de Jésus, sa condamnation sous l’autorité de Ponce Pilate, sa crucifixion et sa mise au tombeau. Les chrétiens ne présentent pas cette souffrance comme une apparence. La lecture catholique de la Passion refuse d’attribuer collectivement la mort de Jésus aux Juifs de son époque, et plus encore aux Juifs d’aujourd’hui. Les récits demandent une lecture attentive de leur contexte."
      },
      {
        "title": "Le sens chrétien de la croix",
        "text": "Dans la foi catholique, Jésus donne librement sa vie par amour et ouvre un chemin de réconciliation avec Dieu. Dire qu’il meurt pour les péchés ne veut pas dire que la violence deviendrait bonne, ni que Dieu aurait besoin de notre souffrance. La croix révèle jusqu’où va l’amour au milieu du mal. Elle ne donne jamais à un proche ou à une autorité le droit d’exiger qu’une personne reste dans une situation de violence."
      },
      {
        "title": "Ce que les chrétiens appellent Résurrection",
        "text": "Les Évangiles témoignent du tombeau vide et de rencontres du Ressuscité avec ses disciples. La confession catholique ne réduit pas la Résurrection au souvenir de Jésus dans les cœurs, et ne la décrit pas comme un simple retour à la vie d’avant. Elle annonce que Jésus, avec son corps glorifié, entre dans une vie qui dépasse la mort. Ce cœur de la foi n’est pas présenté ici comme un résultat de laboratoire."
      },
      {
        "title": "Une espérance, pas une explication à tout",
        "text": "Pâques ne supprime pas la douleur du deuil ni les questions devant la mort. Les chrétiens y puisent l’espérance que le mal et la mort n’ont pas le dernier mot. Dans le récit d’Emmaüs, des disciples passent par la déception, l’écoute et une rencontre reconnue progressivement. On peut prendre le temps de lire ce récit sans s’obliger à ressentir immédiatement la joie qu’il annonce."
      }
    ],
    "paragraphs": [
      "Les Évangiles racontent l’arrestation de Jésus, sa condamnation sous l’autorité de Ponce Pilate, sa crucifixion et sa mise au tombeau. Les chrétiens ne présentent pas cette souffrance comme une apparence. La lecture catholique de la Passion refuse d’attribuer collectivement la mort de Jésus aux Juifs de son époque, et plus encore aux Juifs d’aujourd’hui. Les récits demandent une lecture attentive de leur contexte.",
      "Dans la foi catholique, Jésus donne librement sa vie par amour et ouvre un chemin de réconciliation avec Dieu. Dire qu’il meurt pour les péchés ne veut pas dire que la violence deviendrait bonne, ni que Dieu aurait besoin de notre souffrance. La croix révèle jusqu’où va l’amour au milieu du mal. Elle ne donne jamais à un proche ou à une autorité le droit d’exiger qu’une personne reste dans une situation de violence.",
      "Les Évangiles témoignent du tombeau vide et de rencontres du Ressuscité avec ses disciples. La confession catholique ne réduit pas la Résurrection au souvenir de Jésus dans les cœurs, et ne la décrit pas comme un simple retour à la vie d’avant. Elle annonce que Jésus, avec son corps glorifié, entre dans une vie qui dépasse la mort. Ce cœur de la foi n’est pas présenté ici comme un résultat de laboratoire.",
      "Pâques ne supprime pas la douleur du deuil ni les questions devant la mort. Les chrétiens y puisent l’espérance que le mal et la mort n’ont pas le dernier mot. Dans le récit d’Emmaüs, des disciples passent par la déception, l’écoute et une rencontre reconnue progressivement. On peut prendre le temps de lire ce récit sans s’obliger à ressentir immédiatement la joie qu’il annonce."
    ],
    "examples": [
      "Auprès d’un ami en deuil, la foi pascale peut inspirer une présence fidèle et une prière. Elle n’autorise pas à lui demander de cesser de pleurer.",
      "Devant un crucifix, tu peux te demander quel amour cette image veut montrer, plutôt que chercher une raison de supporter une violence qu’il faudrait faire cesser."
    ],
    "example": "Auprès d’un ami en deuil, la foi pascale peut inspirer une présence fidèle et une prière. Elle n’autorise pas à lui demander de cesser de pleurer.\n\nDevant un crucifix, tu peux te demander quel amour cette image veut montrer, plutôt que chercher une raison de supporter une violence qu’il faudrait faire cesser.",
    "summary": [
      "La croix et la Résurrection forment le centre de la foi chrétienne.",
      "Aucune responsabilité collective ne doit être imputée au peuple juif.",
      "L’espérance pascale n’efface pas le deuil et ne justifie pas les violences."
    ],
    "question": "Quelle parole d’espérance pourrais-tu accueillir sans nier ce qui te fait souffrir ?",
    "invitation": "Tu peux lire le récit d’Emmaüs, Luc 24, 13–35, à ton rythme.",
    "source": "CEC 597–598, 599–618 et 638–658 ; Luc 23, 44–56 et 24, 13–35. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 597–618",
        "url": "https://www.vatican.va/archive/FRA0013/__P1L.HTM"
      },
      {
        "label": "CEC 638–658",
        "url": "https://www.vatican.va/archive/FRA0013/__P1P.HTM"
      },
      {
        "label": "Luc 23, 44–56",
        "url": "https://ebible.org/fraLSG/LUK23.htm"
      },
      {
        "label": "Luc 24, 13–35",
        "url": "https://ebible.org/fraLSG/LUK24.htm"
      }
    ],
    "review": "Prioritaire : rédemption, liberté du don du Christ, réalité corporelle et transcendante de la Résurrection ; refus de l’antijudaïsme et d’une valorisation de la violence."
  },
  {
    "id": "ess-esprit",
    "title": "Le Saint-Esprit dans notre vie",
    "intro": "L’Esprit Saint peut sembler mystérieux. La tradition chrétienne le relie à la vie reçue et à l’amour qui grandit.",
    "sections": [
      {
        "title": "Qui est l’Esprit Saint ?",
        "text": "Dans la foi catholique, le Saint-Esprit est la troisième Personne de la Trinité, pleinement Dieu avec le Père et le Fils. Il n’est pas une énergie anonyme ni une simple émotion intérieure. Les images bibliques du souffle, du feu et de l’eau évoquent son action, mais ne sont pas des descriptions physiques de ce qu’il serait."
      },
      {
        "title": "Dans la vie de Jésus et de l’Église",
        "text": "Les Évangiles lient l’Esprit à la vie et à la mission de Jésus. Les Actes des Apôtres racontent qu’à la Pentecôte les disciples reçoivent l’Esprit et deviennent témoins de Jésus. L’Église catholique croit qu’il rassemble les croyants, les aide à prier et leur donne de participer à la vie du Christ. Son action ne se limite pas à des expériences spectaculaires ou à des personnes considérées comme exceptionnelles."
      },
      {
        "title": "Des fruits qui se reconnaissent dans la durée",
        "text": "La lettre aux Galates associe le fruit de l’Esprit notamment à l’amour, à la paix, à la patience et à la douceur. On peut se servir de ces repères pour discerner une orientation. Ils n’offrent pas un test permettant d’affirmer que chaque sentiment vient directement de Dieu. Une idée très intense peut demander du recul, un dialogue et une confrontation à l’Évangile, à la raison et au respect des personnes."
      },
      {
        "title": "Demander de l’aide pour aimer",
        "text": "Une prière à l’Esprit peut être très simple : demander la lumière pour choisir, la force pour faire le bien ou la disponibilité pour écouter. Cela ne garantit pas une décision sans erreur. Recevoir un conseil, reconnaître ses limites et chercher un soutien professionnel lorsqu’il est nécessaire restent des démarches responsables. Dans la foi catholique, la grâce ne dispense pas d’apprendre et de tenir compte du réel."
      }
    ],
    "paragraphs": [
      "Dans la foi catholique, le Saint-Esprit est la troisième Personne de la Trinité, pleinement Dieu avec le Père et le Fils. Il n’est pas une énergie anonyme ni une simple émotion intérieure. Les images bibliques du souffle, du feu et de l’eau évoquent son action, mais ne sont pas des descriptions physiques de ce qu’il serait.",
      "Les Évangiles lient l’Esprit à la vie et à la mission de Jésus. Les Actes des Apôtres racontent qu’à la Pentecôte les disciples reçoivent l’Esprit et deviennent témoins de Jésus. L’Église catholique croit qu’il rassemble les croyants, les aide à prier et leur donne de participer à la vie du Christ. Son action ne se limite pas à des expériences spectaculaires ou à des personnes considérées comme exceptionnelles.",
      "La lettre aux Galates associe le fruit de l’Esprit notamment à l’amour, à la paix, à la patience et à la douceur. On peut se servir de ces repères pour discerner une orientation. Ils n’offrent pas un test permettant d’affirmer que chaque sentiment vient directement de Dieu. Une idée très intense peut demander du recul, un dialogue et une confrontation à l’Évangile, à la raison et au respect des personnes.",
      "Une prière à l’Esprit peut être très simple : demander la lumière pour choisir, la force pour faire le bien ou la disponibilité pour écouter. Cela ne garantit pas une décision sans erreur. Recevoir un conseil, reconnaître ses limites et chercher un soutien professionnel lorsqu’il est nécessaire restent des démarches responsables. Dans la foi catholique, la grâce ne dispense pas d’apprendre et de tenir compte du réel."
    ],
    "examples": [
      "Avant une discussion tendue, tu peux demander à l’Esprit de t’aider à écouter, puis choisir de laisser l’autre terminer sa phrase. Le geste concret compte autant que l’élan ressenti.",
      "Si quelqu’un affirme que Dieu lui demande d’imposer une décision qui t’effraie, tu peux prendre de la distance et demander conseil à une autre personne compétente."
    ],
    "example": "Avant une discussion tendue, tu peux demander à l’Esprit de t’aider à écouter, puis choisir de laisser l’autre terminer sa phrase. Le geste concret compte autant que l’élan ressenti.\n\nSi quelqu’un affirme que Dieu lui demande d’imposer une décision qui t’effraie, tu peux prendre de la distance et demander conseil à une autre personne compétente.",
    "summary": [
      "Le Saint-Esprit est une Personne divine, pas une force impersonnelle.",
      "Ses fruits invitent à l’amour, à la paix et à la patience.",
      "Le discernement ne consiste pas à suivre aveuglément une émotion."
    ],
    "question": "Quel fruit de l’Esprit aimerais-tu voir grandir dans une relation concrète ?",
    "invitation": "Tu peux découvrir Actes 2, 1–11, puis en parler avec un accompagnateur.",
    "source": "CEC 689–690 et 731–741 ; Actes 2, 1–11 ; Galates 5, 22–23. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 689–690",
        "url": "https://www.vatican.va/archive/FRA0013/__P1U.HTM"
      },
      {
        "label": "CEC 731–741",
        "url": "https://www.vatican.va/archive/FRA0013/__P1Y.HTM"
      },
      {
        "label": "Actes 2, 1–11",
        "url": "https://ebible.org/fraLSG/ACT02.htm"
      },
      {
        "label": "Galates 5, 22–23",
        "url": "https://ebible.org/fraLSG/GAL05.htm"
      }
    ],
    "review": "Relire la Personne divine de l’Esprit, son action ecclésiale et les critères de discernement ; ne pas assimiler automatiquement émotion, symptôme ou décision personnelle à une inspiration divine."
  },
  {
    "id": "ess-prier",
    "title": "Pourquoi et comment prier ?",
    "intro": "Tu peux commencer avec des mots ordinaires, même si tu n’as pas prié depuis longtemps.",
    "sections": [
      {
        "title": "Une relation avec Dieu",
        "text": "Pour les catholiques, prier est entrer en relation avec Dieu qui prend l’initiative de nous aimer. On peut lui demander de l’aide, remercier, reconnaître une faute, intercéder pour quelqu’un ou simplement rester présent en silence. La prière personnelle et la prière de l’Église se nourrissent l’une l’autre. On n’a pas besoin de choisir entre des mots spontanés et les grandes prières reçues dans la tradition."
      },
      {
        "title": "Un commencement très concret",
        "text": "Tu peux chercher un endroit où tu te sens en sécurité, poser le téléphone et prendre quelques instants pour te rendre disponible. Puis nommer ce qui est là : une gratitude, une peur, une question. Une phrase suffit pour commencer. Lire quelques versets d’un Évangile et répondre avec tes propres mots est aussi possible. La posture, le calme et la durée peuvent aider, mais ne mesurent pas la valeur de ta prière."
      },
      {
        "title": "Prier sans exiger un résultat",
        "text": "Jésus enseigne le Notre Père à ses disciples : la prière y comprend la confiance en Dieu, les besoins de la vie, le pardon et le désir de faire sa volonté. Demander quelque chose avec confiance ne transforme pas Dieu en distributeur de réponses. La prière peut soutenir une démarche difficile sans garantir la guérison, la réussite ou la réaction d’une autre personne. Elle n’enlève pas notre responsabilité d’agir."
      },
      {
        "title": "Quand les mots ou l’attention manquent",
        "text": "Les distractions et les périodes sèches font partie de nombreuses expériences croyantes. Tu peux revenir doucement à une phrase, lire un psaume ou dire que tu ne sais pas prier. Il n’est pas utile de te juger à chaque pensée qui passe. Si une difficulté dure, parler avec un prêtre ou une personne de confiance peut aider. La liberté de cette application n’abolit pas les repères de la tradition ; elle te laisse les découvrir sans pression."
      }
    ],
    "paragraphs": [
      "Pour les catholiques, prier est entrer en relation avec Dieu qui prend l’initiative de nous aimer. On peut lui demander de l’aide, remercier, reconnaître une faute, intercéder pour quelqu’un ou simplement rester présent en silence. La prière personnelle et la prière de l’Église se nourrissent l’une l’autre. On n’a pas besoin de choisir entre des mots spontanés et les grandes prières reçues dans la tradition.",
      "Tu peux chercher un endroit où tu te sens en sécurité, poser le téléphone et prendre quelques instants pour te rendre disponible. Puis nommer ce qui est là : une gratitude, une peur, une question. Une phrase suffit pour commencer. Lire quelques versets d’un Évangile et répondre avec tes propres mots est aussi possible. La posture, le calme et la durée peuvent aider, mais ne mesurent pas la valeur de ta prière.",
      "Jésus enseigne le Notre Père à ses disciples : la prière y comprend la confiance en Dieu, les besoins de la vie, le pardon et le désir de faire sa volonté. Demander quelque chose avec confiance ne transforme pas Dieu en distributeur de réponses. La prière peut soutenir une démarche difficile sans garantir la guérison, la réussite ou la réaction d’une autre personne. Elle n’enlève pas notre responsabilité d’agir.",
      "Les distractions et les périodes sèches font partie de nombreuses expériences croyantes. Tu peux revenir doucement à une phrase, lire un psaume ou dire que tu ne sais pas prier. Il n’est pas utile de te juger à chaque pensée qui passe. Si une difficulté dure, parler avec un prêtre ou une personne de confiance peut aider. La liberté de cette application n’abolit pas les repères de la tradition ; elle te laisse les découvrir sans pression."
    ],
    "examples": [
      "Dans le bus avant un rendez-vous, tu peux confier ton inquiétude à Dieu, puis préparer une question utile à poser. La prière accompagne l’action au lieu de la remplacer.",
      "Le soir, tu peux nommer une petite joie et une difficulté. Si tu n’as rien à dire, garder un instant de silence peut être une manière honnête de te présenter."
    ],
    "example": "Dans le bus avant un rendez-vous, tu peux confier ton inquiétude à Dieu, puis préparer une question utile à poser. La prière accompagne l’action au lieu de la remplacer.\n\nLe soir, tu peux nommer une petite joie et une difficulté. Si tu n’as rien à dire, garder un instant de silence peut être une manière honnête de te présenter.",
    "summary": [
      "Prier peut prendre la forme de mots, de silence ou d’une prière reçue.",
      "Une demande n’est pas une garantie de résultat.",
      "On peut revenir à la prière malgré les distractions et les doutes."
    ],
    "question": "Quels mots simples correspondraient aujourd’hui à ce que tu vis ?",
    "invitation": "Tu peux poursuivre avec Prier avec ses propres mots ou le Notre Père dans Matthieu 6, 9–13.",
    "source": "CEC 2558–2565 et 2700–2704 ; Matthieu 6, 5–13 ; Luc 11, 1–4. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 2558–2565",
        "url": "https://www.vatican.va/archive/FRA0013/__P8U.HTM"
      },
      {
        "label": "CEC 2700–2704",
        "url": "https://www.vatican.va/archive/FRA0013/__P9F.HTM"
      },
      {
        "label": "Matthieu 6, 5–13",
        "url": "https://ebible.org/fraLSG/MAT06.htm"
      },
      {
        "label": "Luc 11, 1–4",
        "url": "https://ebible.org/fraLSG/LUK11.htm"
      }
    ],
    "review": "Vérifier la primauté de la grâce et la relation entre prière personnelle et liturgique ; préciser l’absence de garantie matérielle sans nier la prière de demande."
  },
  {
    "id": "ess-reconciliation",
    "title": "Le pardon et la réconciliation",
    "intro": "Il est possible de regarder une faute avec vérité sans réduire toute sa personne à cette faute.",
    "sections": [
      {
        "title": "Une miséricorde qui appelle une réponse",
        "text": "La tradition catholique annonce que Dieu désire le retour du pécheur et offre son pardon. Dans la parabole du fils retrouvé, l’accueil du père ne dépend pas d’un discours parfaitement réussi. Ce pardon invite pourtant à reconnaître le mal et à changer de direction. Il n’efface pas la responsabilité humaine ni la nécessité de protéger les personnes qui ont été blessées."
      },
      {
        "title": "Que signifie se repentir ?",
        "text": "Le repentir commence par reconnaître devant Dieu un acte mauvais, sans se chercher seulement des excuses. Il comprend le désir de ne pas recommencer et de réparer ce qui peut l’être. Une émotion très forte n’est pas indispensable : la sincérité et la volonté de se remettre en chemin comptent. On peut avoir besoin d’aide pour distinguer une faute réelle d’un sentiment de culpabilité envahissant ou d’une responsabilité que quelqu’un nous impose injustement."
      },
      {
        "title": "Le sacrement de réconciliation",
        "text": "Pour les baptisés catholiques, la confession est une rencontre sacramentelle avec le Christ dans l’Église. Elle comprend l’examen de conscience, le regret des péchés, leur aveu au prêtre et la démarche de réparation proposée. Le prêtre donne l’absolution au nom du Christ selon les conditions du sacrement. Si tu ne sais pas comment faire, tu peux le dire simplement. Un dialogue dans l’application ne remplace jamais cette célébration."
      },
      {
        "title": "Pardon, réparation et sécurité",
        "text": "Demander pardon à une personne ne lui impose ni une réponse immédiate ni le rétablissement de la relation. Rendre ce qui a été pris ou rectifier une rumeur peut être nécessaire. Le pardon n’oblige pas à oublier, à abandonner une démarche de justice ou à rester exposé à une violence. Le secret sacramentel engage strictement le confesseur ; la personne qui se confie reste libre de chercher protection, soins et recours appropriés."
      }
    ],
    "paragraphs": [
      "La tradition catholique annonce que Dieu désire le retour du pécheur et offre son pardon. Dans la parabole du fils retrouvé, l’accueil du père ne dépend pas d’un discours parfaitement réussi. Ce pardon invite pourtant à reconnaître le mal et à changer de direction. Il n’efface pas la responsabilité humaine ni la nécessité de protéger les personnes qui ont été blessées.",
      "Le repentir commence par reconnaître devant Dieu un acte mauvais, sans se chercher seulement des excuses. Il comprend le désir de ne pas recommencer et de réparer ce qui peut l’être. Une émotion très forte n’est pas indispensable : la sincérité et la volonté de se remettre en chemin comptent. On peut avoir besoin d’aide pour distinguer une faute réelle d’un sentiment de culpabilité envahissant ou d’une responsabilité que quelqu’un nous impose injustement.",
      "Pour les baptisés catholiques, la confession est une rencontre sacramentelle avec le Christ dans l’Église. Elle comprend l’examen de conscience, le regret des péchés, leur aveu au prêtre et la démarche de réparation proposée. Le prêtre donne l’absolution au nom du Christ selon les conditions du sacrement. Si tu ne sais pas comment faire, tu peux le dire simplement. Un dialogue dans l’application ne remplace jamais cette célébration.",
      "Demander pardon à une personne ne lui impose ni une réponse immédiate ni le rétablissement de la relation. Rendre ce qui a été pris ou rectifier une rumeur peut être nécessaire. Le pardon n’oblige pas à oublier, à abandonner une démarche de justice ou à rester exposé à une violence. Le secret sacramentel engage strictement le confesseur ; la personne qui se confie reste libre de chercher protection, soins et recours appropriés."
    ],
    "examples": [
      "Après avoir diffusé une information fausse sur un collègue, reconnaître l’erreur devant lui peut ne pas suffire : corriger l’information auprès de ceux qui l’ont reçue est un geste de réparation.",
      "Après des années sans confession, tu peux demander un rendez-vous et dire au prêtre que tu as besoin d’être guidé. Tu n’as pas à préparer un texte parfait."
    ],
    "example": "Après avoir diffusé une information fausse sur un collègue, reconnaître l’erreur devant lui peut ne pas suffire : corriger l’information auprès de ceux qui l’ont reçue est un geste de réparation.\n\nAprès des années sans confession, tu peux demander un rendez-vous et dire au prêtre que tu as besoin d’être guidé. Tu n’as pas à préparer un texte parfait.",
    "summary": [
      "La miséricorde ouvre un avenir sans rendre le mal insignifiant.",
      "Repentir, aveu, absolution et réparation ont leur place dans le sacrement.",
      "Pardonner ne supprime ni la justice ni la protection des personnes."
    ],
    "question": "Quel premier pas de vérité ou de réparation serait juste et possible pour toi ?",
    "invitation": "Un prêtre peut expliquer le déroulement du sacrement avant toute démarche.",
    "source": "CEC 1422–1424, 1450–1460 et 1467 ; Luc 15, 11–32 ; Jean 20, 19–23. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 1422",
        "url": "https://www.vatican.va/archive/FRA0013/__P41.HTM"
      },
      {
        "label": "CEC 1423–1424",
        "url": "https://www.vatican.va/archive/FRA0013/__P42.HTM"
      },
      {
        "label": "CEC 1450–1460",
        "url": "https://www.vatican.va/archive/FRA0013/__P48.HTM"
      },
      {
        "label": "CEC 1467",
        "url": "https://www.vatican.va/archive/FRA0013/__P49.HTM"
      },
      {
        "label": "Luc 15, 11–32",
        "url": "https://ebible.org/fraLSG/LUK15.htm"
      },
      {
        "label": "Jean 20, 19–23",
        "url": "https://ebible.org/fraLSG/JHN20.htm"
      }
    ],
    "review": "Prioritaire : conditions de l’absolution, distinction contrition/culpabilité et pardon/réconciliation ; secret sacramentel ; protection des victimes et limites des conseils généraux."
  },
  {
    "id": "ess-messe",
    "title": "Comprendre la messe",
    "intro": "Tu peux entrer dans une église sans connaître tous les gestes ni toutes les réponses.",
    "sections": [
      {
        "title": "Se rassembler et écouter",
        "text": "La messe est la célébration de l’Eucharistie, au cœur de la vie catholique. Elle commence par le rassemblement, des rites d’accueil et une prière. La liturgie de la Parole fait entendre des textes de l’Écriture, dont un passage d’Évangile. L’homélie aide à en accueillir le sens ; le Credo, lorsqu’il est prévu, exprime la foi, et la prière universelle confie les besoins de l’Église et du monde."
      },
      {
        "title": "Rendre grâce avec le Christ",
        "text": "Lors de la liturgie eucharistique, le pain et le vin sont apportés à l’autel. Dans la prière eucharistique, l’Église rend grâce au Père, invoque l’Esprit et fait mémoire de la mort et de la Résurrection de Jésus. Selon la foi catholique, par la consécration, le pain et le vin deviennent réellement le Corps et le Sang du Christ, tandis que leurs apparences demeurent. L’Eucharistie n’est donc pas comprise comme un simple symbole ou un souvenir affectif."
      },
      {
        "title": "Le don du Christ rendu présent",
        "text": "Le mot sacrifice ne signifie pas que Jésus serait crucifié une nouvelle fois à chaque messe. L’Église croit que son unique offrande est rendue présente sacramentellement. Après le Notre Père et les rites de communion, les fidèles disposés à recevoir le sacrement communient. La communion engage la foi et la vie de l’Église ; si tu te poses des questions sur ta situation, un prêtre peut t’accompagner sans que l’application décide à sa place."
      },
      {
        "title": "Repartir pour vivre autrement",
        "text": "La bénédiction et l’envoi rappellent que la célébration se prolonge dans la vie quotidienne. Une personne en découverte peut participer à l’écoute et à la prière sans communier. Ne pas connaître les réponses n’empêche pas d’être présent. Pour la tradition catholique, la messe dominicale a une place essentielle et relève d’un engagement ecclésial, avec des empêchements légitimes, notamment la maladie. Ce repère mérite une explication bienveillante, pas un jugement à distance."
      }
    ],
    "paragraphs": [
      "La messe est la célébration de l’Eucharistie, au cœur de la vie catholique. Elle commence par le rassemblement, des rites d’accueil et une prière. La liturgie de la Parole fait entendre des textes de l’Écriture, dont un passage d’Évangile. L’homélie aide à en accueillir le sens ; le Credo, lorsqu’il est prévu, exprime la foi, et la prière universelle confie les besoins de l’Église et du monde.",
      "Lors de la liturgie eucharistique, le pain et le vin sont apportés à l’autel. Dans la prière eucharistique, l’Église rend grâce au Père, invoque l’Esprit et fait mémoire de la mort et de la Résurrection de Jésus. Selon la foi catholique, par la consécration, le pain et le vin deviennent réellement le Corps et le Sang du Christ, tandis que leurs apparences demeurent. L’Eucharistie n’est donc pas comprise comme un simple symbole ou un souvenir affectif.",
      "Le mot sacrifice ne signifie pas que Jésus serait crucifié une nouvelle fois à chaque messe. L’Église croit que son unique offrande est rendue présente sacramentellement. Après le Notre Père et les rites de communion, les fidèles disposés à recevoir le sacrement communient. La communion engage la foi et la vie de l’Église ; si tu te poses des questions sur ta situation, un prêtre peut t’accompagner sans que l’application décide à sa place.",
      "La bénédiction et l’envoi rappellent que la célébration se prolonge dans la vie quotidienne. Une personne en découverte peut participer à l’écoute et à la prière sans communier. Ne pas connaître les réponses n’empêche pas d’être présent. Pour la tradition catholique, la messe dominicale a une place essentielle et relève d’un engagement ecclésial, avec des empêchements légitimes, notamment la maladie. Ce repère mérite une explication bienveillante, pas un jugement à distance."
    ],
    "examples": [
      "Lors d’une première visite, tu peux t’installer à un endroit qui te permet de suivre tranquillement et demander ensuite ce que signifie un geste qui t’a étonné.",
      "Après la messe, prendre le temps d’aider un voisin isolé peut donner une forme concrète à ce que la célébration invite à vivre."
    ],
    "example": "Lors d’une première visite, tu peux t’installer à un endroit qui te permet de suivre tranquillement et demander ensuite ce que signifie un geste qui t’a étonné.\n\nAprès la messe, prendre le temps d’aider un voisin isolé peut donner une forme concrète à ce que la célébration invite à vivre.",
    "summary": [
      "La Parole et l’Eucharistie forment les deux grands moments de la messe.",
      "Les catholiques croient à la présence réelle du Christ dans l’Eucharistie.",
      "On peut découvrir la messe sans communier et demander un accompagnement."
    ],
    "question": "Quelle étape de la messe aimerais-tu mieux comprendre avant d’y participer ?",
    "invitation": "Tu peux découvrir les sept sacrements ou préparer une visite avec ta paroisse.",
    "source": "CEC 1345–1355, 1362–1377 et 2177–2183 ; Luc 24, 13–35 ; 1 Corinthiens 11, 23–26. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 1345–1355",
        "url": "https://www.vatican.va/archive/FRA0013/__P3V.HTM"
      },
      {
        "label": "CEC 1362–1377",
        "url": "https://www.vatican.va/archive/FRA0013/__P3W.HTM"
      },
      {
        "label": "CEC 2177–2183",
        "url": "https://www.vatican.va/archive/FRA0013/__P7J.HTM"
      },
      {
        "label": "Luc 24, 13–35",
        "url": "https://ebible.org/fraLSG/LUK24.htm"
      },
      {
        "label": "1 Corinthiens 11, 23–26",
        "url": "https://ebible.org/fraLSG/1CO11.htm"
      }
    ],
    "review": "Prioritaire : présence réelle et conversion eucharistique, unique sacrifice rendu présent, conditions de communion et obligation dominicale avec empêchements légitimes. Aucun texte du Missel n’est reproduit."
  },
  {
    "id": "ess-sacrements",
    "title": "Les sept sacrements",
    "intro": "Les sacrements accompagnent la vie chrétienne. Tu peux d’abord repérer leur place, sans décider immédiatement d’une démarche.",
    "sections": [
      {
        "title": "Des signes d’une rencontre",
        "text": "Pour l’Église catholique, les sacrements sont des signes efficaces de la grâce : à travers des paroles et des gestes, le Christ agit dans son Église. Ils ne sont pas des récompenses pour les personnes irréprochables, ni des procédés magiques. Leur préparation aide à comprendre ce qui est reçu et à y répondre librement. Les catholiques reconnaissent sept sacrements, qui ont chacun une place propre et sont liés entre eux."
      },
      {
        "title": "L’initiation chrétienne",
        "text": "Le baptême unit au Christ, fait entrer dans l’Église et donne une vie nouvelle ; il est lié au pardon des péchés. La confirmation donne une effusion particulière de l’Esprit Saint et affermit le lien à l’Église et la mission du baptisé. L’Eucharistie nourrit la communion au Christ et à son Église. Pour un adulte en découverte, un parcours d’accompagnement permet de prendre le temps de connaître la foi et de discerner une demande de baptême."
      },
      {
        "title": "La guérison et le relèvement",
        "text": "La réconciliation donne au baptisé qui se repent de recevoir le pardon de Dieu dans une rencontre sacramentelle. L’onction des malades est destinée aux personnes gravement éprouvées par la maladie ou la fragilité liée à l’âge, selon le discernement pastoral. Elle apporte la grâce du Christ dans l’épreuve ; elle n’est pas réservée au tout dernier instant et ne garantit pas une guérison physique. Elle ne remplace jamais les soins."
      },
      {
        "title": "Le service de la communion",
        "text": "Le sacrement de l’ordre établit des évêques, des prêtres et des diacres pour des ministères distincts au service de l’Église. Dans la doctrine catholique, le mariage sacramentel unit un homme et une femme baptisés par leur consentement libre dans une alliance fidèle, indissoluble et ouverte à la vie. Cette présentation générale n’épuise pas les situations des couples : la préparation au mariage permet d’approfondir la liberté, le consentement, l’accueil de la vie et les questions concrètes avec des accompagnateurs."
      }
    ],
    "paragraphs": [
      "Pour l’Église catholique, les sacrements sont des signes efficaces de la grâce : à travers des paroles et des gestes, le Christ agit dans son Église. Ils ne sont pas des récompenses pour les personnes irréprochables, ni des procédés magiques. Leur préparation aide à comprendre ce qui est reçu et à y répondre librement. Les catholiques reconnaissent sept sacrements, qui ont chacun une place propre et sont liés entre eux.",
      "Le baptême unit au Christ, fait entrer dans l’Église et donne une vie nouvelle ; il est lié au pardon des péchés. La confirmation donne une effusion particulière de l’Esprit Saint et affermit le lien à l’Église et la mission du baptisé. L’Eucharistie nourrit la communion au Christ et à son Église. Pour un adulte en découverte, un parcours d’accompagnement permet de prendre le temps de connaître la foi et de discerner une demande de baptême.",
      "La réconciliation donne au baptisé qui se repent de recevoir le pardon de Dieu dans une rencontre sacramentelle. L’onction des malades est destinée aux personnes gravement éprouvées par la maladie ou la fragilité liée à l’âge, selon le discernement pastoral. Elle apporte la grâce du Christ dans l’épreuve ; elle n’est pas réservée au tout dernier instant et ne garantit pas une guérison physique. Elle ne remplace jamais les soins.",
      "Le sacrement de l’ordre établit des évêques, des prêtres et des diacres pour des ministères distincts au service de l’Église. Dans la doctrine catholique, le mariage sacramentel unit un homme et une femme baptisés par leur consentement libre dans une alliance fidèle, indissoluble et ouverte à la vie. Cette présentation générale n’épuise pas les situations des couples : la préparation au mariage permet d’approfondir la liberté, le consentement, l’accueil de la vie et les questions concrètes avec des accompagnateurs."
    ],
    "examples": [
      "Une personne adulte qui souhaite le baptême peut contacter une paroisse pour parler de son chemin. Demander des renseignements ne l’oblige pas à fixer immédiatement une date.",
      "Un couple peut préparer un rendez-vous en notant ses questions sur le consentement, les enfants ou les différences de conviction, sans attendre d’avoir déjà toutes les réponses."
    ],
    "example": "Une personne adulte qui souhaite le baptême peut contacter une paroisse pour parler de son chemin. Demander des renseignements ne l’oblige pas à fixer immédiatement une date.\n\nUn couple peut préparer un rendez-vous en notant ses questions sur le consentement, les enfants ou les différences de conviction, sans attendre d’avoir déjà toutes les réponses.",
    "summary": [
      "Initiation : baptême, confirmation, Eucharistie.",
      "Guérison : réconciliation et onction des malades.",
      "Service de la communion : ordre et mariage."
    ],
    "question": "Quel sacrement aimerais-tu comprendre à partir de ta propre histoire ?",
    "invitation": "Pour les questions de couple, retrouve aussi Famille et relations dans Mon espace.",
    "source": "CEC 1210–1211, 1239–1243, 1302–1305, 1511–1515 et 1601–1605 ; Matthieu 28, 19–20 ; Jacques 5, 14–15. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 1210–1211",
        "url": "https://www.vatican.va/archive/FRA0013/__P39.HTM"
      },
      {
        "label": "CEC 1239–1243",
        "url": "https://www.vatican.va/archive/FRA0013/__P3E.HTM"
      },
      {
        "label": "CEC 1302–1305",
        "url": "https://www.vatican.va/archive/FRA0013/__P3N.HTM"
      },
      {
        "label": "CEC 1511–1513",
        "url": "https://www.vatican.va/archive/FRA0013/__P4F.HTM"
      },
      {
        "label": "CEC 1514–1515",
        "url": "https://www.vatican.va/archive/FRA0013/__P4G.HTM"
      },
      {
        "label": "CEC 1601",
        "url": "https://www.vatican.va/archive/FRA0013/__P4U.HTM"
      },
      {
        "label": "CEC 1602–1605",
        "url": "https://www.vatican.va/archive/FRA0013/__P4V.HTM"
      },
      {
        "label": "Matthieu 28, 19–20",
        "url": "https://ebible.org/fraLSG/MAT28.htm"
      },
      {
        "label": "Jacques 5, 14–15",
        "url": "https://ebible.org/fraLSG/JAS05.htm"
      }
    ],
    "review": "Prioritaire pour les accompagnateurs : grâce sacramentelle, préparation des adultes, confirmation, onction et critères pastoraux ; consentement matrimonial, unité, indissolubilité, ouverture à la vie et situations particulières. Ne pas transformer la liste des sacrements en conseil individuel."
  },
  {
    "id": "ess-quotidien",
    "title": "Vivre sa foi au quotidien",
    "intro": "La vie chrétienne se découvre aussi dans les journées ordinaires, avec leurs joies et leurs limites.",
    "sections": [
      {
        "title": "Croire, espérer, aimer",
        "text": "La tradition catholique parle de foi, d’espérance et de charité. La foi est une confiance en Dieu et une réponse à ce qu’il révèle. L’espérance s’appuie sur sa fidélité et sa promesse, sans prédire un avenir matériel facile. La charité est l’amour de Dieu et du prochain reçu de Dieu et mis en actes. Ces dimensions ne se réduisent pas à être optimiste, à connaître des idées ou à se sentir généreux."
      },
      {
        "title": "Des choix ordinaires qui comptent",
        "text": "Dire la vérité, respecter une personne dont on ne partage pas les convictions, être juste dans son travail ou partager avec quelqu’un dans le besoin peuvent donner corps à la foi. Le récit du bon Samaritain invite à regarder celui qui est blessé et à devenir son prochain. Il ne demande pas de tout faire seul : appeler une aide compétente et accepter ses propres limites peuvent être des actes responsables de charité."
      },
      {
        "title": "Une vie reliée aux autres",
        "text": "La foi catholique comporte la prière et les sacrements, mais aussi une vie de communauté et un souci de justice. L’attention aux plus fragiles ne remplace pas la relation à Dieu ; elle en est une expression essentielle. À l’inverse, la pratique religieuse ne justifie jamais le mépris ou la malhonnêteté. Chacun peut examiner avec humilité la cohérence entre ce qu’il croit, ce qu’il dit et ce qu’il fait."
      },
      {
        "title": "Avancer avec ses limites",
        "text": "La fatigue, le doute ou les échecs ne font pas disparaître toute possibilité de chemin. On peut demander de l’aide, reprendre une démarche et reconnaître ce qui doit changer. Une petite habitude librement choisie peut soutenir cette vie, sans devenir une mesure de valeur personnelle. Cette application ne distribue ni score spirituel ni récompense ; elle propose des ressources pour découvrir une tradition et réfléchir à des choix concrets."
      }
    ],
    "paragraphs": [
      "La tradition catholique parle de foi, d’espérance et de charité. La foi est une confiance en Dieu et une réponse à ce qu’il révèle. L’espérance s’appuie sur sa fidélité et sa promesse, sans prédire un avenir matériel facile. La charité est l’amour de Dieu et du prochain reçu de Dieu et mis en actes. Ces dimensions ne se réduisent pas à être optimiste, à connaître des idées ou à se sentir généreux.",
      "Dire la vérité, respecter une personne dont on ne partage pas les convictions, être juste dans son travail ou partager avec quelqu’un dans le besoin peuvent donner corps à la foi. Le récit du bon Samaritain invite à regarder celui qui est blessé et à devenir son prochain. Il ne demande pas de tout faire seul : appeler une aide compétente et accepter ses propres limites peuvent être des actes responsables de charité.",
      "La foi catholique comporte la prière et les sacrements, mais aussi une vie de communauté et un souci de justice. L’attention aux plus fragiles ne remplace pas la relation à Dieu ; elle en est une expression essentielle. À l’inverse, la pratique religieuse ne justifie jamais le mépris ou la malhonnêteté. Chacun peut examiner avec humilité la cohérence entre ce qu’il croit, ce qu’il dit et ce qu’il fait.",
      "La fatigue, le doute ou les échecs ne font pas disparaître toute possibilité de chemin. On peut demander de l’aide, reprendre une démarche et reconnaître ce qui doit changer. Une petite habitude librement choisie peut soutenir cette vie, sans devenir une mesure de valeur personnelle. Cette application ne distribue ni score spirituel ni récompense ; elle propose des ressources pour découvrir une tradition et réfléchir à des choix concrets."
    ],
    "examples": [
      "Au travail, refuser de participer à une moquerie peut être une manière discrète de respecter la dignité de quelqu’un. Il est aussi possible de chercher une réponse collective si une injustice se répète.",
      "Quand tu es épuisé, aider peut consister à mettre une personne en relation avec quelqu’un de disponible. La charité ne suppose pas de promettre une présence que tu ne peux pas tenir."
    ],
    "example": "Au travail, refuser de participer à une moquerie peut être une manière discrète de respecter la dignité de quelqu’un. Il est aussi possible de chercher une réponse collective si une injustice se répète.\n\nQuand tu es épuisé, aider peut consister à mettre une personne en relation avec quelqu’un de disponible. La charité ne suppose pas de promettre une présence que tu ne peux pas tenir.",
    "summary": [
      "La foi, l’espérance et la charité se soutiennent.",
      "La prière et les actes de justice sont appelés à rester cohérents.",
      "Avancer n’exige pas de nier ses limites ni de tout porter seul."
    ],
    "question": "Quel geste juste et réaliste pourrais-tu choisir dans une relation cette semaine ?",
    "invitation": "Tu peux ouvrir Mes questions sur la foi ou discuter d’un exemple concret avec un accompagnateur.",
    "source": "CEC 1812–1829 ; Luc 10, 25–37 ; Jacques 2, 14–18. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 1812–1829",
        "url": "https://www.vatican.va/archive/FRA0013/__P60.HTM"
      },
      {
        "label": "Luc 10, 25–37",
        "url": "https://ebible.org/fraLSG/LUK10.htm"
      },
      {
        "label": "Jacques 2, 14–18",
        "url": "https://ebible.org/fraLSG/JAS02.htm"
      }
    ],
    "review": "Vérifier les vertus théologales et le lien grâce, foi et actes ; ne pas réduire la foi à une morale ni présenter la pratique comme une performance."
  }
]);
const FAITH_QUESTIONS=[
  {
    "id": "q-souffrance",
    "title": "Pourquoi Dieu permet-il la souffrance ?",
    "intro": "Une question difficile mérite d’abord d’être accueillie, surtout lorsqu’elle vient d’une blessure.",
    "paragraphs": [
      "La foi catholique reconnaît la réalité du mal et ne prétend pas donner la raison précise de chaque drame. Elle distingue notamment le mal lié aux actes humains et les souffrances de la condition créée. La liberté humaine compte dans cette réflexion, mais elle n’explique pas à elle seule la maladie d’un enfant ou une catastrophe. Il serait injuste de transformer une telle épreuve en accusation contre la personne qui souffre.",
      "Les chrétiens regardent Jésus qui partage la souffrance humaine et s’engage contre ce qui écrase. Sa croix et sa Résurrection fondent leur espérance, sans rendre chaque événement intelligible. La présence, les soins, la protection et la recherche de justice demeurent nécessaires. On peut dire sa révolte dans la prière et chercher un interlocuteur capable d’écouter, sans accepter une réponse rapide qui ferait de la douleur un bien."
    ],
    "example": "Auprès d’un proche malade, tu peux demander ce qui lui serait utile aujourd’hui, plutôt que lui expliquer pourquoi Dieu aurait voulu sa maladie.",
    "question": "De quelle présence ou de quelle aide aurais-tu besoin pour ne pas porter seul cette question ?",
    "source": "CEC 309–314 ; Jean 11, 32–36 ; Romains 8, 22–27. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 309–314",
        "url": "https://www.vatican.va/archive/FRA0013/__P1A.HTM"
      },
      {
        "label": "Jean 11, 32–36",
        "url": "https://ebible.org/fraLSG/JHN11.htm"
      },
      {
        "label": "Romains 8, 22–27",
        "url": "https://ebible.org/fraLSG/ROM08.htm"
      }
    ],
    "review": "Prioritaire : providence et permission du mal, absence d’explication individuelle imposée, refus d’une faute supposée de la victime ; articulation avec les soins.",
    "related": "souffrir"
  },
  {
    "id": "q-retour",
    "title": "Peut-on retrouver la foi après des années de doute ?",
    "intro": "Un chemin peut reprendre sans effacer ce qui a été difficile ni jouer à être certain.",
    "paragraphs": [
      "Dans la perspective catholique, la rencontre avec Dieu reste possible après une longue distance. Revenir peut commencer par une question, un récit d’Évangile ou une conversation. Cela ne garantit ni une émotion immédiate ni le retour à une façon de croire identique à celle de l’enfance. Une foi adulte peut demander de relire des images de Dieu, des blessures ou des idées reçues.",
      "Il est possible de distinguer un doute intellectuel, une déception liée à des personnes et une difficulté à faire confiance. Ces dimensions peuvent se mêler. Une paroisse, un prêtre ou un groupe d’accueil peut proposer une découverte adaptée sans t’obliger à tout raconter d’emblée. La liberté de la foi est essentielle : ni une pression familiale ni le désir de faire plaisir à quelqu’un ne peuvent remplacer une réponse personnelle."
    ],
    "example": "Tu peux demander un rendez-vous en disant simplement : Je voudrais comprendre où j’en suis. Cette première rencontre peut servir à poser des questions, sans engagement précipité.",
    "question": "Quelle question ou quelle rencontre rendrait possible un premier pas libre ?",
    "source": "CEC 160 et 166 ; Luc 15, 11–32. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 160",
        "url": "https://www.vatican.va/archive/FRA0013/__PY.HTM"
      },
      {
        "label": "CEC 166",
        "url": "https://www.vatican.va/archive/FRA0013/__PZ.HTM"
      },
      {
        "label": "Luc 15, 11–32",
        "url": "https://ebible.org/fraLSG/LUK15.htm"
      }
    ],
    "review": "Vérifier les références sur la liberté de la foi et sa dimension ecclésiale ; éviter toute promesse de conversion ou de retour automatique.",
    "related": "ess-dieu"
  },
  {
    "id": "q-messe",
    "title": "Pourquoi les catholiques vont-ils à la messe ?",
    "intro": "La messe a un sens communautaire et sacramentel, même quand une personne n’y ressent rien de particulier.",
    "paragraphs": [
      "Les catholiques s’y rassemblent pour écouter la Parole de Dieu et célébrer l’Eucharistie, en mémoire vivante de la mort et de la Résurrection de Jésus. Ils croient y recevoir le Christ et être unis plus profondément à lui et à l’Église. Cette démarche n’est pas seulement une réunion entre personnes qui pensent la même chose, ni une façon de prouver publiquement qu’elles seraient meilleures.",
      "La tradition catholique demande la participation à la messe le dimanche et aux fêtes de précepte, sauf empêchement sérieux ou dispense. La maladie ou le soin d’une personne fragile peuvent notamment constituer des empêchements légitimes. Une situation concrète mérite un dialogue pastoral. Quelqu’un qui découvre peut venir écouter et prier sans communier ; regarder une célébration à distance peut aider une personne empêchée, sans être assimilé en toute situation à la participation sacramentelle."
    ],
    "example": "Si tu accompagnes un proche à la messe, tu peux choisir d’observer et poser ensuite une question. Il n’est pas nécessaire d’imiter un geste dont tu ne comprends pas encore le sens.",
    "question": "Qu’aimerais-tu comprendre pour te sentir plus libre lors d’une visite ?",
    "source": "CEC 1324–1327 et 2177–2183 ; Actes 2, 42–47. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 1324–1327",
        "url": "https://www.vatican.va/archive/FRA0013/__P3S.HTM"
      },
      {
        "label": "CEC 2177–2183",
        "url": "https://www.vatican.va/archive/FRA0013/__P7J.HTM"
      },
      {
        "label": "Actes 2, 42–47",
        "url": "https://ebible.org/fraLSG/ACT02.htm"
      }
    ],
    "review": "Relire obligation dominicale, dispenses, empêchements et différence entre écoute à distance et participation sacramentelle ; conditions de communion à accompagner individuellement.",
    "related": "ess-messe"
  },
  {
    "id": "q-mots",
    "title": "Comment prier lorsqu’on ne sait pas quoi dire ?",
    "intro": "Le silence et les mots hésitants peuvent avoir leur place dans une prière sincère.",
    "paragraphs": [
      "Tu peux commencer par nommer ce que tu vis devant Dieu : une inquiétude, un merci ou même l’impression de ne pas savoir croire. La tradition catholique reçoit aussi des prières communes, comme le Notre Père, qui offrent des mots lorsque les nôtres manquent. Les deux formes peuvent se soutenir : une formule connue n’est pas forcément mécanique et une parole spontanée n’est pas forcément plus profonde.",
      "Il est possible de lire lentement un verset, puis de garder le silence. L’objectif n’est pas de remplir un temps ni d’obtenir une sensation particulière. Si les pensées s’éloignent, revenir doucement à une phrase peut suffire. Quand le silence devient angoissant, mieux vaut adapter ce moment, rester avec quelqu’un ou demander conseil. La prière ne doit pas devenir une épreuve que l’on s’impose pour mériter l’attention de Dieu."
    ],
    "example": "Tu peux dire : Mon Dieu, je ne trouve pas les mots ; voici ce qui me préoccupe. Puis t’arrêter, sans chercher à composer un discours.",
    "question": "Un mot, un silence ou une prière connue te conviendrait-il le mieux aujourd’hui ?",
    "source": "CEC 2700–2704 et 2729 ; Romains 8, 26–27 ; Luc 11, 1–4. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 2700–2704",
        "url": "https://www.vatican.va/archive/FRA0013/__P9F.HTM"
      },
      {
        "label": "CEC 2729",
        "url": "https://www.vatican.va/archive/FRA0013/__P9L.HTM"
      },
      {
        "label": "Romains 8, 26–27",
        "url": "https://ebible.org/fraLSG/ROM08.htm"
      },
      {
        "label": "Luc 11, 1–4",
        "url": "https://ebible.org/fraLSG/LUK11.htm"
      }
    ],
    "review": "Vérifier l’accueil des distractions et la distinction entre prière, exercice de relaxation et obligation de ressentir quelque chose.",
    "related": "prier-mots-personnels"
  },
  {
    "id": "q-pardon",
    "title": "Dieu peut-il pardonner toutes nos fautes ?",
    "intro": "La gravité d’une faute peut faire peur. La tradition catholique annonce une miséricorde plus grande que ce qui nous enferme.",
    "paragraphs": [
      "L’Église enseigne qu’aucun péché ne dépasse la miséricorde de Dieu pour celui qui se tourne vers lui avec repentir. Cela ne transforme pas le pardon en effacement automatique de la responsabilité. Reconnaître le mal, consentir à changer et chercher à réparer font partie du chemin. Dans la vie catholique, le sacrement de réconciliation donne une place concrète à l’aveu et à l’absolution.",
      "Les paroles bibliques sur le péché contre l’Esprit Saint peuvent inquiéter. Le Catéchisme les relie au refus délibéré d’accueillir la miséricorde et le repentir, et non à une pensée involontaire ou à une question angoissée. Une peur persistante d’être impardonnable mérite un accompagnement attentif. Le pardon de Dieu n’oblige pas une victime à renouer une relation dangereuse et ne remplace pas les démarches de justice nécessaires."
    ],
    "example": "Une personne qui regrette une faute ancienne peut en parler à un prêtre sans attendre de savoir tout formuler. Si la culpabilité envahit chaque journée, un soutien professionnel peut aussi être utile.",
    "question": "Qu’aurais-tu besoin de demander à un interlocuteur de confiance pour sortir de l’isolement ?",
    "source": "CEC 982–983 et 1864 ; Luc 15, 11–32. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 982–983",
        "url": "https://www.vatican.va/archive/FRA0013/__P29.HTM"
      },
      {
        "label": "CEC 1864",
        "url": "https://www.vatican.va/archive/FRA0013/__P66.HTM"
      },
      {
        "label": "Luc 15, 11–32",
        "url": "https://ebible.org/fraLSG/LUK15.htm"
      }
    ],
    "review": "Prioritaire : vérifier le renvoi exact de CEC 1864, les dispositions de repentir, le péché contre l’Esprit et la prévention d’une culpabilité obsessionnelle.",
    "related": "ess-reconciliation"
  },
  {
    "id": "q-sans-reponse",
    "title": "Pourquoi certaines prières semblent-elles sans réponse ?",
    "intro": "Ce sentiment peut être douloureux ; il n’est pas nécessaire de le cacher pour parler de foi.",
    "paragraphs": [
      "Une demande sincère peut rester sans le résultat espéré : une maladie continue, une relation ne se répare pas ou une décision reste difficile. La foi catholique ne permet pas d’en conclure que la personne a mal prié ou manque forcément de foi. Elle invite à la confiance en Dieu tout en reconnaissant que nous ne savons pas expliquer chacune de ces situations.",
      "L’Évangile montre Jésus priant dans l’angoisse à Gethsémani. La prière chrétienne peut donc porter un désir très fort, mais aussi une recherche de la volonté de Dieu. Il serait abusif de dire à une personne que le silence prouve qu’un drame était bon pour elle. On peut continuer à demander, exprimer sa déception, chercher du soutien et agir concrètement. Aucune formule et aucune répétition ne permettent de contraindre Dieu à un résultat."
    ],
    "example": "Si tu pries pour un proche sans constater d’amélioration, tu peux continuer à lui témoigner de l’attention et parler à quelqu’un de ta peine. Les soins et les aides utiles gardent toute leur place.",
    "question": "Que voudrais-tu pouvoir dire à Dieu sans te censurer aujourd’hui ?",
    "source": "CEC 2734–2741 ; Marc 14, 32–36. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 2734–2741",
        "url": "https://www.vatican.va/archive/FRA0013/__P9M.HTM"
      },
      {
        "label": "Marc 14, 32–36",
        "url": "https://ebible.org/fraLSG/MRK14.htm"
      }
    ],
    "review": "Relire la confiance filiale, la prière de demande et la volonté de Dieu ; refuser toute garantie de résultat ou accusation de manque de foi.",
    "related": "ess-prier"
  },
  {
    "id": "q-croire-pratiquer",
    "title": "Quelle différence entre croire en Dieu et pratiquer sa religion ?",
    "intro": "Les convictions intérieures et les gestes religieux sont liés, mais ils ne se confondent pas.",
    "paragraphs": [
      "Croire peut désigner une confiance en Dieu et l’accueil d’une parole reçue comme vraie. Pratiquer donne à cette foi des formes visibles : prier, participer à la vie de l’Église, célébrer les sacrements et servir son prochain. Dans le catholicisme, ces dimensions sont appelées à se nourrir ; la foi n’est pas seulement une opinion privée et la pratique n’est pas seulement l’exécution de gestes.",
      "Une personne peut chercher Dieu tout en ayant pris ses distances avec une communauté, parfois à cause de blessures réelles. Une autre peut conserver des habitudes religieuses tout en traversant une période de doute. Ces situations invitent au dialogue plutôt qu’à classer les personnes. La tradition appelle à une cohérence entre la confession de foi, la célébration et la charité. Elle ne donne pas à l’application le pouvoir de mesurer la qualité spirituelle de quelqu’un."
    ],
    "example": "Si tu dis croire mais ne sais pas comment rejoindre une communauté, tu peux chercher d’abord un lieu où tes questions seront entendues. Si tu pratiques par habitude, un passage d’Évangile peut aider à en retrouver le sens.",
    "question": "Quel lien aimerais-tu approfondir entre ce que tu crois et ce que tu vis ?",
    "source": "CEC 166–169 et 1814–1816 ; Jacques 2, 14–18. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 166–167",
        "url": "https://www.vatican.va/archive/FRA0013/__PZ.HTM"
      },
      {
        "label": "CEC 168–169",
        "url": "https://www.vatican.va/archive/FRA0013/__P10.HTM"
      },
      {
        "label": "CEC 1814–1816",
        "url": "https://www.vatican.va/archive/FRA0013/__P60.HTM"
      },
      {
        "label": "Jacques 2, 14–18",
        "url": "https://ebible.org/fraLSG/JAS02.htm"
      }
    ],
    "review": "Vérifier la dimension personnelle et ecclésiale de la foi ; éviter de dissocier ou de confondre pratique, charité et foi.",
    "related": "ess-quotidien"
  },
  {
    "id": "q-doutes",
    "title": "Peut-on avoir des doutes tout en étant croyant ?",
    "intro": "Une interrogation n’est pas à elle seule le signe que tout ton chemin serait faux.",
    "paragraphs": [
      "La foi n’est pas la même chose qu’une évidence qui supprimerait toutes les questions. Un croyant peut chercher à comprendre un enseignement, traverser une épreuve ou ne plus ressentir la présence de Dieu. Il est utile de distinguer cette recherche, parfois involontaire, d’un refus délibéré de ce que l’on reconnaît comme venant de Dieu. L’application ne peut pas juger cette disposition intérieure à la place d’une personne.",
      "Dans l’Évangile selon Jean, Thomas exprime sa difficulté devant l’annonce de la Résurrection. Le récit invite à regarder sa rencontre avec Jésus plutôt qu’à enfermer Thomas dans une étiquette. Une question peut être travaillée par la lecture, la réflexion et le dialogue. Quand le doute fait souffrir, un accompagnateur respectueux peut aider ; il n’a pas à exiger que tu fasses semblant d’être certain."
    ],
    "example": "Tu peux noter une question précise et la poser à un prêtre : J’ai du mal à comprendre cela, pouvez-vous m’aider à distinguer ce que l’Église enseigne et l’image que je m’en fais ?",
    "question": "Quelle question pourrais-tu exprimer sans te sentir obligé de la résoudre aujourd’hui ?",
    "source": "CEC 153–159 et 2088 ; Jean 20, 24–29. Références : Louis Segond 1910.",
    "references": [
      {
        "label": "CEC 153–159",
        "url": "https://www.vatican.va/archive/FRA0013/__PY.HTM"
      },
      {
        "label": "CEC 2088",
        "url": "https://www.vatican.va/archive/FRA0013/__P77.HTM"
      },
      {
        "label": "Jean 20, 24–29",
        "url": "https://ebible.org/fraLSG/JHN20.htm"
      }
    ],
    "review": "Vérifier la distinction entre doute involontaire, recherche et refus volontaire ; ne pas faire du doute une condition ni une faute automatique.",
    "related": "doutes"
  }
];
const ESSENTIAL_LESSON_IDS=["ess-dieu","ess-trinite","ess-jesus","ess-paques","ess-esprit","ess-prier","ess-reconciliation","ess-messe","ess-sacrements","ess-quotidien"];
// Lectures AELF : réponses éphémères, jamais dans les contenus locaux ou les favoris.
const aelfView={date:'',status:'idle',data:null,error:'',mass:0,controller:null,token:0};
function aelfToday(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function aelfValidDate(s){if(!/^20\d{2}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00Z');return !isNaN(d)&&d.toISOString().slice(0,10)===s}
function aelfDate(){return aelfValidDate(state.active)?state.active:aelfToday()}
function aelfClear(){aelfView.token++;aelfView.controller?.abort();aelfView.controller=null;aelfView.data=null;aelfView.date='';aelfView.status='idle';aelfView.error='';aelfView.mass=0}
function aelfSource(){return '<p class="source aelf-source">Source des lectures liturgiques : AELF — <a href="https://www.aelf.org" target="_blank" rel="noopener noreferrer">www.aelf.org</a></p>'}
// Reconstruire uniquement le balisage typographique utile, sans attributs ni contenu actif.
function aelfHtml(value){const doc=new DOMParser().parseFromString(String(value||''),'text/html');const allowed=new Set(['P','BR','STRONG','EM','B','I','SUP','SUB']);function clean(n){if(n.nodeType===3)return esc(n.textContent);if(n.nodeType!==1||['SCRIPT','STYLE','IFRAME','OBJECT','SVG','MATH','TEMPLATE','IMG'].includes(n.tagName))return '';const inner=[...n.childNodes].map(clean).join('');return allowed.has(n.tagName)?`<${n.tagName.toLowerCase()}>${inner}${n.tagName==='BR'?'':`</${n.tagName.toLowerCase()}>`}`:inner}return [...doc.body.childNodes].map(clean).join('')}
function aelfNormalize(data,date){if(!data||data.informations?.date!==date||!Array.isArray(data.messes))throw new Error('incomplete');const fields=['type','titre','ref','contenu','intro_lue','refrain_psalmique','ref_refrain','verset_evangile','ref_verset'];const info={};for(const k of ['date','zone','ligne1','ligne2','ligne3','temps_liturgique','couleur','annee'])if(typeof data.informations[k]==='string')info[k]=data.informations[k];let incomplete=false;const messes=data.messes.map(m=>({nom:typeof m.nom==='string'?m.nom:'',lectures:(Array.isArray(m.lectures)?m.lectures:[]).filter(l=>l&&typeof l.type==='string'&&(/^(lecture_\d+|psaume|evangile)$/.test(l.type))).flatMap(l=>{if(typeof l.contenu!=='string'||!l.contenu.trim()||typeof l.ref!=='string'||!l.ref.trim()){incomplete=true;return []}return [Object.fromEntries(fields.map(k=>[k,typeof l[k]==='string'?l[k]:'']))]})})).filter(m=>m.lectures.length);if(!messes.length)throw new Error('incomplete');return {informations:info,messes,incomplete}}
function aelfLabel(type){return type==='psaume'?'Psaume responsorial':type==='evangile'?'Évangile du jour':type==='lecture_1'?'Première lecture':type==='lecture_2'?'Deuxième lecture':'Lecture '+type.slice(8)}
function aelfContents(){if(aelfView.status==='loading'||aelfView.status==='idle')return '<p role="status">Chargement des lectures auprès de l’AELF…</p>';if(aelfView.status==='error')return `<p role="alert">${esc(aelfView.error)}</p><button type="button" class="action" data-aelf-retry>Réessayer</button>`;const {informations:info,messes,incomplete}=aelfView.data;const mass=messes[aelfView.mass]||messes[0];const seen={};return `<div class="aelf-info">${[...new Set([info.ligne1,info.ligne2,info.ligne3].filter(Boolean))].map(x=>`<p>${esc(x)}</p>`).join('')}<p class="small">${[info.temps_liturgique&&'Temps liturgique : '+info.temps_liturgique,info.couleur&&'Couleur : '+info.couleur,info.annee&&'Année : '+info.annee,info.zone&&'Calendrier renvoyé : '+info.zone].filter(Boolean).map(esc).join(' · ')}</p></div>${messes.length>1?`<div class="field"><label for="aelf-mass">Lectures proposées pour cette journée</label><select id="aelf-mass">${messes.map((m,i)=>`<option value="${i}" ${i===aelfView.mass?'selected':''}>${esc(m.nom||'Choix '+(i+1))}</option>`).join('')}</select></div>`:mass.nom?`<p class="eyebrow">${esc(mass.nom)}</p>`:''}${incomplete?'<p class="notice" role="status">La réponse AELF est incomplète. Seules les lectures accompagnées de leur texte et de leur référence sont affichées.</p>':''}<nav class="aelf-jump" aria-label="Aller à une lecture">${mass.lectures.map((l,i)=>`<a href="#aelf-part-${i}" data-aelf-jump="aelf-part-${i}">${esc(aelfLabel(l.type))}${mass.lectures.filter(x=>x.type===l.type).length>1?' — choix '+(mass.lectures.slice(0,i+1).filter(x=>x.type===l.type).length):''}</a>`).join('')}</nav>${mass.lectures.map((l,i)=>{const occurrence=(seen[l.type]||0)+1;seen[l.type]=occurrence;return `<section class="aelf-part" id="aelf-part-${i}" tabindex="-1"><h2>${esc(aelfLabel(l.type))}${occurrence>1?' — autre version fournie par l’AELF':''}</h2><p class="aelf-ref">${esc(l.ref)}</p>${l.titre?`<div class="aelf-heading">${aelfHtml(l.titre)}</div>`:''}${l.intro_lue?`<div>${aelfHtml(l.intro_lue)}</div>`:''}${l.refrain_psalmique?`<div class="aelf-refrain"><strong>Refrain</strong><div>${aelfHtml(l.refrain_psalmique)}</div>${l.ref_refrain?`<p class="small">${esc(l.ref_refrain)}</p>`:''}</div>`:''}${l.verset_evangile?`<div class="aelf-refrain"><strong>Acclamation</strong><div>${aelfHtml(l.verset_evangile)}</div>${l.ref_verset?`<p class="small">${esc(l.ref_verset)}</p>`:''}</div>`:''}<div class="aelf-text">${aelfHtml(l.contenu)}</div></section>`}).join('')}${aelfSource()}`}
function aelfPage(){const date=aelfDate();const label=new Intl.DateTimeFormat('fr-FR',{dateStyle:'full'}).format(new Date(date+'T12:00:00'));return `<div class="content aelf-page">${libraryBack('Bible et lecture','bible')}<section class="reading-stage">${textSizeControl()}<div class="reading-card"><p class="eyebrow">Lectures liturgiques · CJAJLK</p><h1>Lectures du jour</h1><p id="aelf-date-label">${esc(label)}</p>${aelfSource()}<form id="aelf-date-form" class="aelf-date-form"><div class="field"><label for="aelf-date">Choisir une date</label><input type="date" id="aelf-date" value="${date}" min="2000-01-01" max="2099-12-31" required></div><button class="action" type="submit">Consulter</button><button class="action secondary" type="button" data-aelf-today>Aujourd’hui</button></form><p class="small">Calendrier demandé : France. Les dates disponibles dépendent de l’AELF. Consultation en ligne uniquement ; pas de lecture vocale pour ces textes.</p><div id="aelf-result" aria-busy="${aelfView.status==='loading'}">${aelfContents()}</div></div></section></div>`}
function aelfRefresh(){if(state.route!=='aelf')return;const target=document.querySelector('#aelf-result');if(target){target.innerHTML=aelfContents();target.setAttribute('aria-busy',String(aelfView.status==='loading'))}}
async function aelfLoad(force=false){const date=aelfDate();if(!force&&aelfView.date===date&&['loading','ready','error'].includes(aelfView.status))return;aelfClear();aelfView.date=date;aelfView.status='loading';const token=aelfView.token;const controller=new AbortController();aelfView.controller=controller;aelfRefresh();let timedOut=false;const timeout=setTimeout(()=>{timedOut=true;controller.abort()},15000);try{if(!navigator.onLine)throw new Error('offline');const response=await fetch(`https://api.aelf.org/v1/messes/${date}/france`,{cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',signal:controller.signal});if(!response.ok)throw new Error(response.status===404?'missing':response.status===429?'busy':'network');const data=aelfNormalize(await response.json(),date);if(token!==aelfView.token||state.route!=='aelf')return;aelfView.data=data;aelfView.status='ready'}catch(e){if(token!==aelfView.token||state.route!=='aelf')return;aelfView.data=null;aelfView.status='error';aelfView.error=!navigator.onLine||e.message==='offline'?'Connexion indisponible. Les lectures AELF ne sont pas conservées hors connexion.':e.message==='missing'?'Aucune lecture AELF disponible pour cette date. Choisis une autre journée.':e.message==='incomplete'||e instanceof SyntaxError?'La réponse AELF est incomplète ou illisible. Réessaie plus tard.':e.message==='busy'?'Le service AELF reçoit trop de demandes. Réessaie un peu plus tard.':timedOut?'Le service AELF met trop de temps à répondre. Tu peux réessayer.':'Impossible de joindre le service AELF. Vérifie la connexion ou réessaie plus tard.'}finally{clearTimeout(timeout);if(token===aelfView.token){aelfView.controller=null;aelfRefresh()}}}
function aelfAfterRender(){if(state.route==='aelf')void aelfLoad();else if(aelfView.date||aelfView.data)aelfClear()}
function aelfChooseDate(date){if(!aelfValidDate(date))return;rememberNavigation();state.active=date;history.replaceState(history.state,'','#aelf/'+date);render()}
document.addEventListener('submit',e=>{if(e.target.id!=='aelf-date-form')return;e.preventDefault();const date=document.querySelector('#aelf-date').value;if(aelfValidDate(date))aelfChooseDate(date)});
document.addEventListener('change',e=>{if(e.target.id==='aelf-mass'&&aelfView.data){aelfView.mass=Math.max(0,Math.min(aelfView.data.messes.length-1,Number(e.target.value)||0));aelfRefresh()}});
document.addEventListener('click',e=>{if(e.target.closest('[data-aelf-retry]'))void aelfLoad(true);if(e.target.closest('[data-aelf-today]'))aelfChooseDate(aelfToday());const jump=e.target.closest('[data-aelf-jump]');if(jump){e.preventDefault();const part=document.getElementById(jump.dataset.aelfJump);part?.focus({preventScroll:true});part?.scrollIntoView({block:'start',behavior:'smooth'})}});
window.addEventListener('offline',()=>{aelfClear();if(state.route==='aelf'){aelfView.date=aelfDate();aelfView.status='error';aelfView.error='Connexion indisponible. Les lectures AELF ne sont pas conservées hors connexion.';aelfRefresh()}});
window.addEventListener('pagehide',()=>{aelfClear();if(state.route==='aelf')aelfRefresh()});
window.addEventListener('pageshow',e=>{if(e.persisted&&state.route==='aelf')void aelfLoad(true)});

const STORE='chemin-de-foi-demo-v01';const defaults={size:24,theme:'light',favorites:[],personal:[],sizeOpen:false};
let saved;try{saved=JSON.parse(localStorage.getItem(STORE)||'{}')}catch{saved={}}
if(!saved||typeof saved!=='object')saved={};
if(saved.visualVersion!==2){saved.theme='light';saved.visualVersion=2;}
saved.size=Number.isFinite(Number(saved.size))?Math.max(20,Math.min(36,Number(saved.size))):24;
const state={...defaults,...saved,route:'accueil',filter:'all',search:'',active:null,editing:null,origin:'prieres'};
function persist(){try{localStorage.setItem(STORE,JSON.stringify({visualVersion:2,size:state.size,theme:state.theme,sizeOpen:state.sizeOpen,favorites:state.favorites,personal:state.personal}))}catch{showToast('Stockage indisponible : les changements peuvent ne pas être conservés.')}}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
const main=document.querySelector('#main');
const BIBLE_STORIES = [
  {
    "id": "recit-creation",
    "category": "ancien",
    "title": "La Création et Adam et Ève",
    "intro": "Deux récits des origines, puis un récit de confiance rompue.",
    "scripture": [
      {
        "label": "Genèse 1, 1–31",
        "url": "https://ebible.org/fraLSG/GEN01.htm#V1"
      },
      {
        "label": "Genèse 2, 1–25",
        "url": "https://ebible.org/fraLSG/GEN02.htm#V1"
      },
      {
        "label": "Genèse 3, 1–24",
        "url": "https://ebible.org/fraLSG/GEN03.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 355–357",
        "url": "https://www.vatican.va/archive/FRA0013/__P1C.HTM"
      },
      {
        "label": "CEC 390",
        "url": "https://www.vatican.va/archive/FRA0013/__P1D.HTM"
      }
    ],
    "context": "La Genèse ouvre la Torah et la Bible chrétienne. Ces pages des origines parlent dans les formes littéraires du Proche-Orient ancien. Elles donnent des repères sur Dieu et la condition humaine plutôt qu’une chronologie à confronter à la géologie.",
    "summary": "Le premier récit ordonne la création et place l’être humain, homme et femme, à l’image de Dieu. Le second décrit le jardin confié à l’être humain et la rencontre de l’homme et de la femme. Au chapitre 3, ils mangent du fruit défendu, se cachent et sont éloignés du jardin.",
    "explanation": "Le texte laisse le fruit sans nom. La question centrale est la confiance face à une limite. La honte et les accusations montrent que le geste touche aussi les relations.",
    "teaching": "La lecture catholique reconnaît la dignité de chaque personne créée à l’image de Dieu. Elle comprend le langage imagé de la chute comme l’expression d’une rupture originelle avec Dieu.",
    "example": "Confier un jardin à quelqu’un lui donne une responsabilité plutôt qu’un droit de tout épuiser.",
    "question": "Qu’est-ce qui t’aide à prendre soin de ce qui t’est confié ?"
  },
  {
    "id": "recit-noe",
    "category": "ancien",
    "title": "Noé et l’Alliance",
    "intro": "Après le déluge, un engagement qui concerne tous les vivants.",
    "scripture": [
      {
        "label": "Genèse 6, 5–22",
        "url": "https://ebible.org/fraLSG/GEN06.htm#V5"
      },
      {
        "label": "Genèse 8, 6–22",
        "url": "https://ebible.org/fraLSG/GEN08.htm#V6"
      },
      {
        "label": "Genèse 9, 8–17",
        "url": "https://ebible.org/fraLSG/GEN09.htm#V8"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 56–58",
        "url": "https://www.vatican.va/archive/FRA0013/__PH.HTM"
      }
    ],
    "context": "La Genèse situe Noé avant Abraham. Le déluge appartient aux récits des origines, dans un monde ancien où circulaient des récits de grandes inondations. La portée religieuse de ce récit se lit dans sa conclusion.",
    "summary": "Le récit présente une humanité violente et Noé chargé de construire une arche. Après la décrue, Noé sort et offre un sacrifice. Dieu établit une alliance avec Noé, ses descendants et les êtres vivants, dont l’arc dans la nuée devient le signe.",
    "explanation": "Une alliance désigne ici un engagement durable. Regarder qui est inclus dans la promesse aide à comprendre pourquoi l’histoire ne s’arrête pas au sauvetage d’une famille.",
    "teaching": "Le Catéchisme présente l’alliance avec Noé comme une étape qui embrasse les nations. Elle invite à reconnaître la fidélité de Dieu. Le récit ne permet pas d’attribuer une catastrophe actuelle à la faute de ses victimes.",
    "example": "Après une inondation, une commune peut rebâtir en prévoyant aussi les besoins des personnes les plus isolées.",
    "question": "Quelle attention pourrais-tu porter à la vie autour de toi ?"
  },
  {
    "id": "recit-abraham",
    "category": "ancien",
    "title": "Abraham, partir sur une promesse",
    "intro": "Une vocation, une terre et une bénédiction destinée aux familles de la terre.",
    "scripture": [
      {
        "label": "Genèse 12, 1–9",
        "url": "https://ebible.org/fraLSG/GEN12.htm#V1"
      },
      {
        "label": "Genèse 15, 1–6",
        "url": "https://ebible.org/fraLSG/GEN15.htm#V1"
      },
      {
        "label": "Genèse 21, 1–7",
        "url": "https://ebible.org/fraLSG/GEN21.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 59–61",
        "url": "https://www.vatican.va/archive/FRA0013/__PH.HTM"
      }
    ],
    "context": "Les récits des patriarches mettent en scène des familles, leurs déplacements et leurs liens avec la terre. Ils occupent la seconde grande partie de la Genèse. Une datation biographique précise d’Abraham ne découle pas de ces pages.",
    "summary": "Abram quitte son pays avec Saraï et Lot à l’appel de Dieu. La promesse lui annonce une descendance et une bénédiction qui atteindra d’autres familles. Malgré l’attente, Abram fait confiance. Plus loin, Sara donne naissance à Isaac.",
    "explanation": "La promesse ouvre un avenir sans livrer d’avance chaque étape. La durée de l’attente fait partie de l’histoire.",
    "teaching": "Pour la tradition catholique, Abraham est un témoin de la foi et le commencement d’un peuple appelé par Dieu. Son élection porte une bénédiction destinée à dépasser son cercle familial.",
    "example": "On peut s’engager à accompagner quelqu’un sans savoir exactement comment la relation évoluera.",
    "question": "Dans cette histoire, qu’est-ce qui distingue la confiance de la certitude de tout prévoir ?"
  },
  {
    "id": "recit-exode",
    "category": "ancien",
    "title": "Moïse et la sortie d’Égypte",
    "intro": "Du travail forcé à la traversée, un récit fondateur de libération.",
    "scripture": [
      {
        "label": "Exode 3, 1–15",
        "url": "https://ebible.org/fraLSG/EXO03.htm#V1"
      },
      {
        "label": "Exode 12, 1–14",
        "url": "https://ebible.org/fraLSG/EXO12.htm#V1"
      },
      {
        "label": "Exode 14, 10–31",
        "url": "https://ebible.org/fraLSG/EXO14.htm#V10"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 62–64",
        "url": "https://www.vatican.va/archive/FRA0013/__PH.HTM"
      },
      {
        "label": "CEC 2574–2577",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      },
      {
        "label": "CEC 117",
        "url": "https://www.vatican.va/archive/FRA0013/__PR.HTM"
      }
    ],
    "context": "L’Exode raconte les origines d’Israël comme peuple libéré. L’Égypte royale, le travail forcé et le désert en forment le cadre narratif. Les données historiques ne permettent pas de fixer avec certitude la date et l’itinéraire de la traversée racontée.",
    "summary": "Au buisson ardent, Dieu appelle Moïse après avoir entendu la détresse du peuple. La Pâque prépare le départ. Poursuivi par les forces de Pharaon, Israël traverse la mer et voit la menace disparaître.",
    "explanation": "La libération est vécue ensemble. La mémoire du départ se transmet par des gestes et un récit, ce que montre le repas pascal dans Exode 12.",
    "teaching": "L’Église lit l’Exode comme une étape de l’alliance avec Israël. Elle y reconnaît aussi un éclairage sur le salut et le baptême, tout en respectant la portée propre de la Pâque juive.",
    "example": "Une famille peut garder la mémoire d’une libération en racontant les événements à la génération suivante.",
    "question": "Quel détail du récit te fait percevoir la peur ou le courage du peuple ?"
  },
  {
    "id": "recit-david",
    "category": "ancien",
    "title": "David, du berger au roi",
    "intro": "Le choix inattendu de David et la promesse liée à sa maison.",
    "scripture": [
      {
        "label": "1 Samuel 16, 1–13",
        "url": "https://ebible.org/fraLSG/1SA16.htm#V1"
      },
      {
        "label": "1 Samuel 17, 40–51",
        "url": "https://ebible.org/fraLSG/1SA17.htm#V40"
      },
      {
        "label": "2 Samuel 7, 8–16",
        "url": "https://ebible.org/fraLSG/2SA07.htm#V8"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2578–2580",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ],
    "context": "Les livres de Samuel racontent la mise en place de la royauté en Israël. Le récit passe de Saül à David et relit la royauté à la lumière de l’alliance.",
    "summary": "Samuel reçoit la mission d’oindre un fils de Jessé. David, le plus jeune, est appelé depuis le troupeau. Il affronte ensuite Goliath avec une fronde. Plus tard, le prophète Nathan transmet à David une promesse concernant sa maison, c’est-à-dire sa dynastie.",
    "explanation": "Les trois épisodes mettent en regard l’apparence, la confiance et la durée d’une promesse. La victoire sur Goliath ne résume pas toute la vie de David.",
    "teaching": "La tradition catholique retient David comme figure de prière et de confiance. Elle lit la promesse dynastique dans l’histoire qui conduit au Christ, appelé fils de David.",
    "example": "Dans une équipe, le membre qu’on remarque le moins peut être celui dont le jugement fait avancer la situation.",
    "question": "Qu’est-ce qui te fait changer d’avis sur quelqu’un que tu connais peu ?"
  },
  {
    "id": "recit-prophetes",
    "category": "ancien",
    "title": "Les prophètes, justice et espérance",
    "intro": "Deux voix pour entendre la critique de l’injustice et l’annonce d’un avenir.",
    "scripture": [
      {
        "label": "Amos 5, 10–24",
        "url": "https://ebible.org/fraLSG/AMO05.htm#V10"
      },
      {
        "label": "Ésaïe 40, 1–11",
        "url": "https://ebible.org/fraLSG/ISA40.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 64",
        "url": "https://www.vatican.va/archive/FRA0013/__PH.HTM"
      },
      {
        "label": "CEC 2581–2584",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ],
    "context": "Amos s’adresse au royaume du Nord au VIIIe siècle avant notre ère. Ésaïe 40 ouvre une section généralement lue sur l’horizon de l’exil à Babylone, bien après l’époque d’Amos.",
    "summary": "Amos dénonce les abus qui écartent les pauvres et critique des célébrations dissociées de la justice. Ésaïe 40 s’ouvre sur une parole de consolation et annonce une venue de Dieu auprès de son peuple.",
    "explanation": "Un prophète ne se réduit pas à quelqu’un qui prévoit l’avenir. Ces deux textes s’adressent à des situations différentes. L’un dénonce, l’autre relève, et tous deux appellent à entendre ce que la situation demande.",
    "teaching": "Le Catéchisme voit dans les prophètes des témoins qui forment le peuple à l’espérance et à la conversion. Le culte et l’attention à la justice ont ainsi vocation à se rejoindre.",
    "example": "Une collecte ne règle pas à elle seule une pratique injuste. Une communauté peut aider et corriger ce qui produit le besoin.",
    "question": "Quelle différence vois-tu entre consoler et promettre que tout ira vite mieux ?"
  },
  {
    "id": "recit-naissance",
    "category": "jesus",
    "title": "La naissance de Jésus",
    "intro": "Bethléem, les bergers et le signe d’un enfant.",
    "scripture": [
      {
        "label": "Luc 2, 1–20",
        "url": "https://ebible.org/fraLSG/LUK02.htm#V1"
      },
      {
        "label": "Matthieu 2, 1–12",
        "url": "https://ebible.org/fraLSG/MAT02.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 525–526",
        "url": "https://www.vatican.va/archive/FRA0013/__P1I.HTM"
      }
    ],
    "context": "Les évangiles de Luc et de Matthieu proposent des récits distincts de l’enfance. Luc évoque un recensement sous domination romaine et Matthieu situe les mages au temps d’Hérode. Le rapprochement de leurs repères chronologiques est discuté.",
    "summary": "Dans Luc, Marie met au monde Jésus à Bethléem et le couche dans une mangeoire. Des bergers entendent l’annonce de la naissance et viennent voir l’enfant. Dans Matthieu, des mages venus d’Orient cherchent le roi des Juifs et offrent leurs présents.",
    "explanation": "Les bergers appartiennent au récit de Luc et les mages à celui de Matthieu. Une crèche réunit souvent les deux scènes, ce qui relève de la tradition de représentation.",
    "teaching": "Pour la foi catholique, Noël célèbre le Fils de Dieu devenu véritablement humain. La petitesse de l’enfant et la simplicité de son accueil éclairent la manière dont Dieu se rend proche.",
    "example": "Pour lire une crèche, on peut chercher de quel évangile vient chaque groupe de personnages.",
    "question": "Quel détail de Luc ou de Matthieu aimerais-tu relire à part ?"
  },
  {
    "id": "recit-bapteme",
    "category": "jesus",
    "title": "Le baptême de Jésus",
    "intro": "Le Jourdain et le début de la vie publique.",
    "scripture": [
      {
        "label": "Matthieu 3, 1–17",
        "url": "https://ebible.org/fraLSG/MAT03.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 535–537",
        "url": "https://www.vatican.va/archive/FRA0013/__P1I.HTM"
      }
    ],
    "context": "Jean appelle à la conversion près du Jourdain. Le baptême de Jean s’inscrit dans un contexte juif où des lavages pouvaient exprimer la purification. Matthieu le place avant la mission publique de Jésus.",
    "summary": "Jean baptise ceux qui viennent à lui. Quand Jésus se présente, Jean hésite, puis accepte. Jésus remonte de l’eau, l’Esprit descend comme une colombe et une voix le désigne comme le Fils bien-aimé.",
    "explanation": "Le récit associe un geste visible et une révélation sur l’identité de Jésus. La comparaison avec la colombe est une image du récit.",
    "teaching": "La lecture catholique comprend la démarche de Jésus, tenu pour sans péché, comme une entrée solidaire dans sa mission. Elle distingue le baptême donné par Jean du sacrement chrétien, éclairé par la mort et la Résurrection du Christ.",
    "example": "Sur une image du Jourdain, on peut repérer séparément l’eau, Jésus, la colombe et le signe de la voix.",
    "question": "Pourquoi la réaction de Jean donne-t-elle du relief au geste de Jésus ?"
  },
  {
    "id": "recit-samaritain",
    "category": "jesus",
    "title": "Le Bon Samaritain",
    "intro": "Une parabole qui déplace la question du prochain.",
    "scripture": [
      {
        "label": "Luc 10, 25–37",
        "url": "https://ebible.org/fraLSG/LUK10.htm#V25"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 1822–1829",
        "url": "https://www.vatican.va/archive/FRA0013/__P60.HTM"
      }
    ],
    "context": "Luc présente une discussion avec un spécialiste de la Loi. Juifs et Samaritains partageaient des racines religieuses et avaient des lieux et pratiques de culte distincts. Leur relation pouvait être tendue. Le récit du voyageur est une parabole.",
    "summary": "Un homme attaqué est laissé à terre sur la route de Jérusalem à Jéricho. Un prêtre et un lévite passent. Un Samaritain s’arrête, soigne le blessé, le conduit à une auberge et prévoit ses frais. Jésus demande qui s’est fait le prochain de l’homme blessé.",
    "explanation": "La question passe des personnes qui entreraient dans un cercle de solidarité au comportement de celui qui prend soin. Le texte ne donne pas les motifs des deux premiers passants.",
    "teaching": "La tradition catholique relie cette attention à la charité, amour de Dieu et du prochain qui se manifeste dans des actes. Elle appelle à porter secours avec discernement.",
    "example": "Face à une personne tombée dans la rue, appeler une aide compétente peut être le premier geste de proximité.",
    "question": "Quel geste du Samaritain montre que son aide se prolonge au-delà de l’urgence ?"
  },
  {
    "id": "recit-fils",
    "category": "jesus",
    "title": "Le fils prodigue et son frère",
    "intro": "Une parabole à relire du point de vue des deux fils.",
    "scripture": [
      {
        "label": "Luc 15, 1–3",
        "url": "https://ebible.org/fraLSG/LUK15.htm#V1"
      },
      {
        "label": "Luc 15, 11–32",
        "url": "https://ebible.org/fraLSG/LUK15.htm#V11"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 1439",
        "url": "https://www.vatican.va/archive/FRA0013/__P46.HTM"
      }
    ],
    "context": "Luc introduit ce groupe de paraboles par des critiques sur l’accueil des pécheurs par Jésus. Le récit emploie des scènes de maisonnée, d’héritage et de fête familières à son auditoire.",
    "summary": "Le fils cadet part avec sa part, la dépense et connaît la faim. Il rentre en préparant un aveu. Son père court l’accueillir et fait préparer une fête. Le fils aîné proteste. Le père sort lui parler et lui rappelle la joie du retour de son frère.",
    "explanation": "Le père se déplace vers chacun. Le récit se termine sur sa parole à l’aîné, dont la réaction finale demeure ouverte.",
    "teaching": "Le Catéchisme lit cette parabole comme une image de la conversion et de la miséricorde. L’accueil ouvre un chemin de retour et la parole du père invite chacun à retrouver une relation.",
    "example": "Dans une histoire familiale, deux personnes peuvent avoir besoin d’être écoutées avant de comprendre le même événement.",
    "question": "Avec quel personnage aimerais-tu reprendre le récit, et à quel moment ?"
  },
  {
    "id": "recit-passion",
    "category": "jesus",
    "title": "La Passion et la Résurrection",
    "intro": "Lire le passage de la mort de Jésus à l’annonce de Pâques dans Luc.",
    "scripture": [
      {
        "label": "Luc 22, 39–53",
        "url": "https://ebible.org/fraLSG/LUK22.htm#V39"
      },
      {
        "label": "Luc 23, 13–56",
        "url": "https://ebible.org/fraLSG/LUK23.htm#V13"
      },
      {
        "label": "Luc 24, 1–35",
        "url": "https://ebible.org/fraLSG/LUK24.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 597–598",
        "url": "https://www.vatican.va/archive/FRA0013/__P1L.HTM"
      },
      {
        "label": "CEC 638–647",
        "url": "https://www.vatican.va/archive/FRA0013/__P1P.HTM"
      }
    ],
    "context": "Le récit se situe à Jérusalem, autour de la Pâque, sous l’administration romaine de Ponce Pilate. Les Évangiles relatent la Passion et les rencontres pascales avec leurs propres accents. Cette fiche suit Luc.",
    "summary": "Après sa prière au mont des Oliviers, Jésus est arrêté. Luc raconte sa condamnation, la crucifixion et la mise au tombeau. Des femmes trouvent ensuite le tombeau ouvert et entendent l’annonce de la Résurrection. Sur le chemin d’Emmaüs, deux disciples reconnaissent Jésus au partage du pain.",
    "explanation": "La lecture d’Emmaüs suit une progression. Les disciples parlent de leur déception, écoutent une lecture des Écritures, reconnaissent Jésus puis retournent vers les autres.",
    "teaching": "L’Église confesse la mort réelle et la Résurrection corporelle du Christ comme le cœur de Pâques. Elle refuse d’imputer collectivement sa mort au peuple juif. La croix ne justifie pas de maintenir une personne dans la violence.",
    "example": "Quand un récit paraît trop dense, on peut suivre un seul personnage, puis reprendre le passage du point de vue d’un autre.",
    "question": "Quel changement remarques-tu entre le départ et le retour des disciples d’Emmaüs ?"
  },
  {
    "id": "recit-pentecote",
    "category": "actes",
    "title": "La Pentecôte",
    "intro": "Des langues diverses et une annonce entendue à Jérusalem.",
    "scripture": [
      {
        "label": "Actes 2, 1–13",
        "url": "https://ebible.org/fraLSG/ACT02.htm#V1"
      },
      {
        "label": "Actes 2, 14–21",
        "url": "https://ebible.org/fraLSG/ACT02.htm#V14"
      },
      {
        "label": "Actes 2, 37–47",
        "url": "https://ebible.org/fraLSG/ACT02.htm#V37"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 731–733",
        "url": "https://www.vatican.va/archive/FRA0013/__P1Y.HTM"
      }
    ],
    "context": "Les Actes prolongent le récit de Luc. La Pentecôte se déroule à Jérusalem lors d’une fête juive déjà existante, qui rassemble des personnes venues de lieux différents.",
    "summary": "Un bruit comme un souffle et des langues comme de feu accompagnent la venue de l’Esprit. Les personnes rassemblées entendent les disciples parler dans leurs langues. Pierre prend la parole, cite Joël et appelle à la conversion. Le récit montre ensuite une communauté qui apprend, prie et partage.",
    "explanation": "La diversité des langues reste perceptible. Ce que le récit met en avant, c’est la possibilité d’entendre une annonce commune au milieu de cette diversité.",
    "teaching": "La foi catholique reconnaît dans la Pentecôte un don de l’Esprit Saint et un élan pour la mission de l’Église. L’Esprit est une Personne divine. Le vent et le feu sont des images de sa manifestation.",
    "example": "Dans un groupe multilingue, traduire un message permet à chacun de le recevoir dans sa langue.",
    "question": "Qu’est-ce qui aide un groupe à s’écouter quand ses membres parlent ou pensent différemment ?"
  }
];
const BIBLE_PSALM_THEMES = [
  {
    "id": "theme-psaume-confiance",
    "title": "Confiance",
    "numbers": [
      23,
      91
    ],
    "summary": "Le berger du psaume 23 accompagne jusque dans la vallée. Le psaume 91 emploie des images d’abri et de refuge.",
    "teaching": "La confiance biblique peut se dire au milieu d’un danger. Ces images expriment l’appui cherché auprès de Dieu et laissent toute leur place à la prudence et au soin.",
    "question": "Quelle image évoque pour toi un appui au milieu d’une difficulté ?",
    "scripture": [
      {
        "label": "Psaume 23, 1–6",
        "url": "https://ebible.org/fraLSG/PSA023.htm#V1"
      },
      {
        "label": "Psaume 91, 1–16",
        "url": "https://ebible.org/fraLSG/PSA091.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  {
    "id": "theme-psaume-gratitude",
    "title": "Gratitude",
    "numbers": [
      103
    ],
    "summary": "Le psaume 103 invite le priant à se rappeler les bienfaits de Dieu, sa compassion et la fragilité humaine.",
    "teaching": "La gratitude du psaume naît d’une mémoire. On peut reconnaître un bien reçu tout en restant lucide sur ce qui est pénible.",
    "question": "Quel bien discret aimerais-tu garder en mémoire ?",
    "scripture": [
      {
        "label": "Psaume 103, 1–22",
        "url": "https://ebible.org/fraLSG/PSA103.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  {
    "id": "theme-psaume-peur",
    "title": "Peur",
    "numbers": [
      27
    ],
    "summary": "Le psaume 27 s’ouvre sur la confiance, puis fait entendre une demande d’aide et la peur d’être abandonné.",
    "teaching": "Ces deux voix appartiennent au même poème. Elles permettent au priant de dire sa peur avec honnêteté et de chercher une présence.",
    "question": "Quelle phrase du poème te semble assez vraie pour être reprise aujourd’hui ?",
    "scripture": [
      {
        "label": "Psaume 27, 1–14",
        "url": "https://ebible.org/fraLSG/PSA027.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  {
    "id": "theme-psaume-souffrance",
    "title": "Souffrance",
    "numbers": [
      46,
      130
    ],
    "summary": "Le psaume 46 présente un monde bouleversé et une communauté qui cherche refuge. Le psaume 130 fait entendre un appel depuis les profondeurs.",
    "teaching": "La prière biblique laisse parler l’épreuve, collectivement ou personnellement. Ces textes peuvent accompagner une recherche de soutien concret.",
    "question": "Aurais-tu plutôt besoin de mots pour dire l’épreuve ou d’une personne à qui en parler ?",
    "scripture": [
      {
        "label": "Psaume 46, 1–12",
        "url": "https://ebible.org/fraLSG/PSA046.htm#V1"
      },
      {
        "label": "Psaume 130, 1–8",
        "url": "https://ebible.org/fraLSG/PSA130.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  {
    "id": "theme-psaume-pardon",
    "title": "Pardon",
    "numbers": [
      51,
      130
    ],
    "summary": "Le psaume 51 demande la purification et un cœur renouvelé. Le psaume 130 associe l’appel des profondeurs, le pardon et l’attente.",
    "teaching": "La tradition catholique les reçoit comme des psaumes pénitentiels. Ils offrent des mots pour reconnaître une faute et demander la miséricorde, dans un chemin qui peut aussi demander réparation et accompagnement.",
    "question": "Quel pas de vérité ou de réparation serait juste et possible ?",
    "scripture": [
      {
        "label": "Psaume 51, 1–21",
        "url": "https://ebible.org/fraLSG/PSA051.htm#V1"
      },
      {
        "label": "Psaume 130, 1–8",
        "url": "https://ebible.org/fraLSG/PSA130.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  },
  {
    "id": "theme-psaume-esperance",
    "title": "Espérance",
    "numbers": [
      121,
      130
    ],
    "summary": "Le psaume 121 emploie l’image du chemin et de la veille. Le psaume 130 compare l’attente à celle de veilleurs qui guettent le matin.",
    "teaching": "L’espérance de ces poèmes donne des mots à l’attente. Leur langage de protection et de veille peut soutenir le priant pendant un chemin dont il ne connaît pas toutes les étapes.",
    "question": "Qu’est-ce qui peut t’aider à traverser une attente sans la porter seul ?",
    "scripture": [
      {
        "label": "Psaume 121, 1–8",
        "url": "https://ebible.org/fraLSG/PSA121.htm#V1"
      },
      {
        "label": "Psaume 130, 1–8",
        "url": "https://ebible.org/fraLSG/PSA130.htm#V1"
      }
    ],
    "doctrine": [
      {
        "label": "CEC 2585–2589",
        "url": "https://www.vatican.va/archive/FRA0013/__P8W.HTM"
      }
    ]
  }
];
const BIBLE_START = {
  "id": "recit-commencer",
  "title": "Je commence la Bible",
  "intro": "Une méthode simple pour choisir et lire un premier passage à ton rythme.",
  "context": "Pour cette première séance, prends la scène du Bon Samaritain dans Luc. Elle commence par une question adressée à Jésus au sujet de la vie éternelle et du prochain. Garde aussi le psaume 23 à portée de main si tu préfères commencer par un poème.",
  "summary": "Choisis une scène courte, par exemple Luc 10, 25–37. Dans une référence, le premier nombre désigne le chapitre et les suivants les versets. Lis quelques phrases avant et après le passage, puis repère qui parle, à qui et dans quelle situation.",
  "explanation": "Sur une feuille, écris une action que tu observes dans le passage, puis une question qu’elle te laisse. Relis ensuite la dernière réplique de Jésus. Regarde si elle change ta question. Cette méthode garde la lecture du passage et ta réaction personnelle bien distinctes.",
  "teaching": "L’Église catholique invite à tenir compte des genres littéraires et du contexte, et à lire les Écritures dans l’unité de la Bible et de la foi de l’Église.",
  "example": "Tu peux alterner un récit évangélique et un psaume, en gardant une seule question par lecture.",
  "question": "Quel premier passage te paraît abordable aujourd’hui ?",
  "scripture": [
    {
      "label": "Luc 10, 25–37",
      "url": "https://ebible.org/fraLSG/LUK10.htm#V25"
    },
    {
      "label": "Psaume 23, 1–6",
      "url": "https://ebible.org/fraLSG/PSA023.htm#V1"
    }
  ],
  "doctrine": [
    {
      "label": "CEC 109–114",
      "url": "https://www.vatican.va/archive/FRA0013/__PR.HTM"
    },
    {
      "label": "CEC 131–133",
      "url": "https://www.vatican.va/archive/FRA0013/__PT.HTM"
    }
  ]
};
const BIBLE_CATEGORIES = {
  ancien: 'Ancien Testament',
  jesus: 'Vie de Jésus',
  actes: 'Actes des Apôtres'
};
const BIBLE_DISCOVERY_ITEMS = [...BIBLE_STORIES, ...BIBLE_PSALM_THEMES, BIBLE_START];
const LEARNING_ITEMS = [...LESSONS, ...BIBLE_DISCOVERY_ITEMS];

function learningRoute(id) {
  if (BIBLE_PSALM_THEMES.some(item => item.id === id)) return 'bible-theme';
  if (BIBLE_DISCOVERY_ITEMS.some(item => item.id === id)) return 'bible-story';
  return LESSONS.some(item => item.id === id) ? 'lesson' : null;
}

function bibleDiscoveryEntry(item) {
  return compactEntry(learningRoute(item.id), item.title, item.intro || item.numbers.map(n => 'Psaume ' + n).join(' · '), item.id);
}

function bibleDiscoveryFavorites() {
  const items = BIBLE_DISCOVERY_ITEMS.filter(item => state.favorites.includes(item.id));
  if (!items.length) return '';
  return '<section class="panel"><h2>Découverte de la Bible</h2><div class="card-list">' +
    items.map(bibleDiscoveryEntry).join('') + '</div></section>';
}

function bibleDiscovery() {
  const last = consultedLessons().find(item => BIBLE_DISCOVERY_ITEMS.includes(item));
  const resume = learning.enabled && last
    ? `<div class="learning-links"><button type="button" class="action secondary" data-resume-lesson="${esc(last.id)}">Reprendre : ${esc(last.title)}</button></div>` : '';
  return head('Découvrir la Bible', 'Choisis un point de départ, sans ordre imposé.') +
    libraryBack('Bible et lecture', 'bible') + resume +
    '<div class="card-list">' +
    compactEntry('bible-story', BIBLE_START.title, BIBLE_START.intro, BIBLE_START.id, '▤') +
    compactEntry('bible-stories', 'Les grands récits de la Bible', 'Douze fiches de la Genèse aux Actes.', '', '✦') +
    compactEntry('bible-stories', BIBLE_CATEGORIES.ancien, 'Six récits sur les origines et l’histoire d’Israël.', 'ancien') +
    compactEntry('bible-stories', BIBLE_CATEGORIES.jesus, 'Cinq récits des Évangiles.', 'jesus') +
    compactEntry('bible-stories', BIBLE_CATEGORIES.actes, 'La Pentecôte et les débuts de l’Église.', 'actes') +
    compactEntry('bible-themes', 'Psaumes', 'Six thèmes pour découvrir huit psaumes.') +
    '</div></div>';
}

function bibleStories() {
  const category = BIBLE_CATEGORIES[state.active];
  return head(typeof category === 'string' ? category : 'Les grands récits de la Bible',
    'Des fiches pour suivre le texte et découvrir une lecture catholique.') +
    libraryBack('Découvrir la Bible', 'bible-discovery') +
    searchControls('Rechercher un récit biblique') +
    `<div id="library-results">${libraryResults()}</div></div>`;
}

function bibleStoryResults(view) {
  const items = BIBLE_STORIES.filter(item =>
    (!Object.hasOwn(BIBLE_CATEGORIES, state.active) || item.category === state.active) &&
    matchesSearch([item.title, item.intro, ...item.scripture.map(ref => ref.label)].join(' '), view.query)
  );
  return pageEntries(items, bibleDiscoveryEntry, 'Aucun récit trouvé pour ces mots.');
}

function bibleThemes() {
  return head('Les psaumes par thème', 'Des repères pour choisir un psaume selon ce que tu traverses. Numérotation Louis Segond.') +
    libraryBack('Découvrir la Bible', 'bible-discovery') +
    '<div class="card-list">' +
    BIBLE_PSALM_THEMES.map(bibleDiscoveryEntry).join('') +
    compactEntry('psalms', 'Psaumes disponibles dans l’application', 'Retrouver les cinq textes intégraux et la recherche par numéro.') +
    '</div></div>';
}

function bibleReferenceLinks(references) {
  return references.map(ref =>
    `<a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.label)}</a>`
  ).join(' · ');
}

function bibleReadingSection(title, text) {
  return `<h2>${esc(title)}</h2><p>${esc(text)}</p>`;
}

function bibleDiscoveryReader() {
  const isTheme = state.route === 'bible-theme';
  const item = (isTheme ? BIBLE_PSALM_THEMES : [...BIBLE_STORIES, BIBLE_START]).find(x => x.id === state.active);
  if (!item) return bibleDiscovery();
  const back = isTheme ? 'bible-themes' : item === BIBLE_START ? 'bible-discovery' : 'bible-stories';
  const isFavorite = state.favorites.includes(item.id);
  const sections = isTheme
    ? [['Repères dans les psaumes', item.summary], ['Lecture catholique', item.teaching]]
    : [
        ['Contexte historique et religieux', item.context],
        [item === BIBLE_START ? 'Une première lecture' : 'Résumé du passage', item.summary],
        ['Pour comprendre', item.explanation],
        ['Lecture catholique', item.teaching],
        ['Illustration pédagogique', item.example]
      ];
  const localPsalms = (item.numbers || []).map(n => psalmItems().find(p => p.psalm === n)).filter(Boolean);
  return `<div class="content">
    ${libraryBack('Retour à la découverte biblique', back, item.category || '')}
    <section class="reading-stage">
      ${textSizeControl()}
      <div class="reading-card">
        <p class="eyebrow">${isTheme ? 'Psaumes par thème' : 'Découvrir la Bible'}</p>
        <h1>${esc(item.title)}</h1>
        ${item.intro ? `<p class="small">${esc(item.intro)}</p>` : ''}
        <p class="source">Passages bibliques · Louis Segond 1910 sur eBible<br>${bibleReferenceLinks(item.scripture)}</p>
        <div class="lesson-body extended-lesson">
          ${sections.map(([title, value]) => bibleReadingSection(title, value)).join('')}
        </div>
        <div class="notice"><strong>Pour réfléchir, si tu le souhaites</strong><br>${esc(item.question)}</div>
        <p class="source">Références catholiques · Catéchisme de l’Église catholique<br>${bibleReferenceLinks(item.doctrine)}</p>
        <p class="editorial-note">Fiche originale de Chemin de Foi, à relire par un prêtre.</p>
        ${item === BIBLE_START ? '<button type="button" class="action secondary" data-go="lesson" data-id="bible">Retrouver le repère « Comment commencer la Bible ? »</button>' : ''}
        ${localPsalms.length ? '<div class="actions">' + localPsalms.map(p =>
          `<button type="button" class="action secondary" data-go="reading" data-id="${esc(p.id)}">Lire le psaume ${p.psalm} ici</button>`
        ).join('') + '</div>' : ''}
      </div>
      <div class="reading-actions">
        <button type="button" class="heart-btn" data-fav="${esc(item.id)}" aria-pressed="${isFavorite}">${isFavorite ? '★ Favori' : '☆ Ajouter aux favoris'}</button>
      </div>
    </section>
  </div>`;
}

// Suivi pédagogique local : identifiants et positions des seules leçons originales, jamais de texte AELF.
const LEARNING_STORE='chemin-de-foi-learning-v1';
const learning={enabled:true,entries:{},last:null,available:true};let learningCurrent=null,learningTimer;
try{const saved=JSON.parse(localStorage.getItem(LEARNING_STORE)||'null');if(saved&&typeof saved==='object'){learning.enabled=saved.enabled!==false;if(learning.enabled){for(const l of LEARNING_ITEMS){const v=saved.entries?.[l.id];if(v&&Number.isFinite(v.ratio)&&Number.isFinite(v.seen))learning.entries[l.id]={ratio:Math.min(1,Math.max(0,v.ratio)),seen:v.seen}}if(learningRoute(saved.last))learning.last=saved.last}}}catch{}
function learningPersist(){try{localStorage.setItem(LEARNING_STORE,JSON.stringify({version:1,enabled:learning.enabled,entries:learning.entries,last:learning.last}))}catch{learning.available=false}}
function learningRemember(){if(!learning.enabled||state.route!==learningRoute(state.active))return;const previous=learning.entries[state.active];if(!previous)return;const height=Math.max(0,document.documentElement.scrollHeight-innerHeight);previous.ratio=height?Math.min(1,Math.max(0,scrollY/height)):0;learningPersist()}
function learningAfterRender(){const id=state.route===learningRoute(state.active)?state.active:null;if(learning.enabled&&id&&learningCurrent!==id){learning.entries[id]={ratio:learning.entries[id]?.ratio||0,seen:Date.now()};learning.last=id;learningPersist()}learningCurrent=id}
function learningReset(){clearTimeout(learningTimer);learning.entries={};learning.last=null;learningCurrent=null;try{localStorage.removeItem(LEARNING_STORE)}catch{learning.available=false}}
function learningLinks(){return `<div class="learning-links"><button class="action secondary" data-go="questions">Mes questions sur la foi</button><button class="action secondary" data-go="consulted">Mes lectures</button></div>`}
function questionsPage(){return head('Mes questions sur la foi','Des repères catholiques pour réfléchir, sans réponse imposée à chaque épreuve.')+libraryBack('Découvrir la foi','decouvrir')+searchControls('Rechercher une question sur la foi')+`<div id="library-results">${libraryResults()}</div><p class="editorial-note">Réponses originales à soumettre à un prêtre ; aucune approbation officielle de l’Église n’est revendiquée.</p></div>`}
function consultedLessons(){return LEARNING_ITEMS.filter(l=>learning.entries[l.id]).sort((a,b)=>learning.entries[b.id].seen-learning.entries[a.id].seen)}
function consultedPage(){const last=LEARNING_ITEMS.find(l=>l.id===learning.last);return head('Mes lectures','Un repère facultatif sur cet appareil, sans compte et sans progression obligatoire.')+libraryBack('Découvrir la foi','decouvrir')+`<div class="panel"><label class="learning-opt"><input type="checkbox" id="learning-enabled" ${learning.enabled?'checked':''}> Conserver mes lectures sur cet appareil</label><p class="small">Seuls les titres consultés et la position de lecture sont repérés localement. Aucun suivi des lectures AELF. Désactiver efface ce suivi, sans toucher aux favoris ni aux prières personnelles.</p>${!learning.available?'<p role="status">Le stockage est indisponible : ce repère peut être perdu en fermant la page.</p>':''}${learning.enabled&&last?`<button class="action" data-resume-lesson="${esc(last.id)}">Reprendre : ${esc(last.title)}</button><button class="action secondary" data-clear-learning>Effacer ce suivi</button>`:''}</div>${searchControls('Rechercher une lecture consultée')}<div id="library-results">${libraryResults()}</div></div>`}
function extendedLessonBody(p){return (p.sections?p.sections.map(s=>`<h2>${esc(s.title)}</h2><p>${esc(s.text)}</p>`).join(''):p.paragraphs.map(x=>`<p>${esc(x)}</p>`).join(''))+(p.examples?`<h2>Dans la vie quotidienne</h2>${p.examples.map(x=>`<p>${esc(x)}</p>`).join('')}`:p.example?`<p><strong>Exemple concret :</strong><br>${esc(p.example)}</p>`:'')+(p.summary?`<h2>À retenir</h2><ul>${p.summary.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'')+(p.invitation?`<h2>Pour poursuivre, librement</h2><p>${esc(p.invitation)}</p>`:'')}
document.addEventListener('scroll',()=>{clearTimeout(learningTimer);learningTimer=setTimeout(learningRemember,250)},{passive:true});
document.addEventListener('change',e=>{if(e.target.id!=='learning-enabled')return;learning.enabled=e.target.checked;if(!learning.enabled)learningReset();learningPersist();render()});
document.addEventListener('click',e=>{if(e.target.closest('[data-clear-learning]')){learningReset();learningPersist();render();return}const resume=e.target.closest('[data-resume-lesson]');if(!resume)return;const id=resume.dataset.resumeLesson;const saved=learning.entries[id];const route=learningRoute(id);if(!saved||!route)return;const ratio=saved.ratio;go(route,id);const epoch=navigationEpoch;requestAnimationFrame(()=>requestAnimationFrame(()=>{if(state.route===route&&state.active===id&&epoch===navigationEpoch)window.scrollTo({top:ratio*Math.max(0,document.documentElement.scrollHeight-innerHeight),behavior:'instant'})}))});

// Bibliothèques : métadonnées de classement uniquement, aucun texte religieux ajouté.
const LIBRARY_PAGE_SIZE=10;
const PSALM_THEMES={23:['Confiance','Espérance'],27:['Confiance','Peur'],46:['Détresse','Paix'],91:['Confiance','Protection'],121:['Chemin','Confiance']};
const PRAYER_THEMES={matin:['Matin'],soir:['Soir'],courage:['Confiance','Courage'],souffrance:['Souffrance'],solitude:['Solitude'],pardon:['Pardon'],doute:['Doute'],paix:['Paix intérieure'],esperance:['Espérance'],merci:['Gratitude'],'petites-joies':['Gratitude'],proches:['Gratitude','Proches'],'famille-paix':['Famille','Paix intérieure'],amour:['Couple'],mariage:['Mariage'],ecoute:['Couple','Écoute'],'matin-attention':['Matin'],'soir-deposer':['Soir'],'merci-discret':['Gratitude'],'pardon-reparer':['Pardon'],'paix-attente':['Paix intérieure'],'confiance-choix':['Confiance'],'famille-quotidien':['Famille'],'epreuve-presence':['Souffrance','Espérance']};
const BIBLE_BOOKS=[{id:'psaumes',name:'Les Psaumes',psalms:true},{id:'matthieu',name:'Évangile selon Matthieu',chapters:[{number:11,readings:['mat11'],range:'verset 28 uniquement'}]},{id:'jean',name:'Évangile selon Jean',chapters:[{number:14,readings:['jn14'],range:'verset 27 uniquement'}]}];
const COURSES=[{id:'essentiels',title:'Les essentiels de la foi catholique',description:'Dieu, Jésus, la prière, la messe et les sacrements.',lessons:ESSENTIAL_LESSON_IDS},{id:'premiers',title:'Premiers repères',description:'Dieu, Jésus, la prière, les Évangiles et le doute.',lessons:BEGINNER_PATH},{id:'approfondir',title:'Pour aller plus loin',description:'La foi, les psaumes, la souffrance, le pardon et la charité.',lessons:COMPLEMENTARY_PATH}];
const libraryViews=new Map(),navigationViews=new Map(),recentViews=new Map();
let navigationCounter=0,currentNavigationId=null,navigationEpoch=0;
const NAVIGATION_STORE='chemin-de-foi-navigation-v31';
try{const cached=JSON.parse(sessionStorage.getItem(NAVIGATION_STORE)||'null');if(cached){for(const [key,value]of cached.entries||[])navigationViews.set(key,value);for(const [key,value]of cached.recent||[])recentViews.set(key,value);for(const [key,value]of cached.library||[])libraryViews.set(key,value)}}catch{}
function saveNavigationSession(){try{sessionStorage.setItem(NAVIGATION_STORE,JSON.stringify({entries:[...navigationViews].slice(-160),recent:[...recentViews].slice(-160),library:[...libraryViews].slice(-160)}))}catch{}}

function viewKey(route=state.route,id=state.active){return route+'/'+(id||'')}
function libraryView(){const key=viewKey();if(!libraryViews.has(key))libraryViews.set(key,{query:'',theme:'',page:1});return libraryViews.get(key)}
function normalizeSearch(value){return String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim()}
function matchesSearch(text,query){const haystack=normalizeSearch(text);return normalizeSearch(query).split(/\s+/).filter(Boolean).every(word=>haystack.includes(word))}
function rememberNavigation(){learningRemember();if(!currentNavigationId)return;const el=document.activeElement?.closest('[data-go]');const snapshot={route:state.route,active:state.active,scroll:window.scrollY,library:{...libraryView()},focus:el?{route:el.dataset.go,id:el.dataset.id||''}:null};navigationViews.set(currentNavigationId,snapshot);recentViews.set(viewKey(),snapshot);saveNavigationSession()}
function restoreNavigation(snapshot){const epoch=++navigationEpoch;if(snapshot?.library)libraryViews.set(viewKey(),{...snapshot.library});render();requestAnimationFrame(()=>requestAnimationFrame(()=>{if(epoch!==navigationEpoch)return;if(snapshot?.focus){const target=[...main.querySelectorAll('[data-go]')].find(e=>e.dataset.go===snapshot.focus.route&&(e.dataset.id||'')===snapshot.focus.id);target?.focus({preventScroll:true})}window.scrollTo({top:snapshot?.scroll||0,behavior:'instant'})}))}
function go(route,active=null){rememberNavigation();if('speechSynthesis'in window)window.speechSynthesis.cancel();const parent=currentNavigationId;state.route=route;state.active=active;state.search='';currentNavigationId='cdf-'+Date.now()+'-'+(++navigationCounter);history.pushState({cdfNavId:currentNavigationId,parent},'', '#'+route+(active?'/'+encodeURIComponent(active):''));const snapshot=['prayer','reading','lesson','question','bible-story','bible-theme','view-personal'].includes(route)?null:recentViews.get(viewKey());restoreNavigation(snapshot)}
function goBack(fallback='accueil',id=null){if(history.state?.parent){history.back()}else{go(fallback,id)}}
function followAddress(){const [route,id]=location.hash.slice(1).split('/');const active=id?decodeURIComponent(id):null;if((route||'accueil')===state.route&&active===state.active&&history.state?.cdfNavId===currentNavigationId)return;rememberNavigation();if('speechSynthesis'in window)window.speechSynthesis.cancel();state.route=route||'accueil';state.active=active;state.search='';currentNavigationId=history.state?.cdfNavId||'cdf-'+Date.now()+'-'+(++navigationCounter);if(!history.state?.cdfNavId)history.replaceState({cdfNavId:currentNavigationId,parent:null},'');restoreNavigation(navigationViews.get(currentNavigationId)||recentViews.get(viewKey()))}
function libraryBack(label,fallback,id=''){return `<button class="back" type="button" data-back data-fallback="${esc(fallback)}" data-fallback-id="${esc(id)}">← ${esc(label)}</button>`}
function compactEntry(route,title,description,id='',badge=''){return `<button type="button" class="list-button compact-entry" data-go="${esc(route)}" ${id?`data-id="${esc(id)}"`:''}>${badge?`<span class="entry-badge" aria-hidden="true">${esc(badge)}</span>`:''}<span class="grow"><strong>${esc(title)}</strong><small>${esc(description)}</small></span><span class="chevron" aria-hidden="true">›</span></button>`}
function filterCount(view=libraryView()){return [view.theme,view.bookId,view.courseId].filter(Boolean).length}
function searchControls(label,themes=[]){const view=libraryView();const canFilter=themes.length>0||['prieres','bible','decouvrir'].includes(state.route);return `<form class="library-tools library-compact" id="library-search" role="search"><label class="visually-hidden" for="library-query">${esc(label)}</label><div class="library-search-line"><span class="library-search-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></span><input type="search" id="library-query" maxlength="120" autocomplete="off" value="${esc(view.query)}" placeholder="${state.route==='psalms'?'N° ou mot-clé…':state.route==='book'?'N° de chapitre…':state.route==='bible'?'Livre ou passage…':state.route==='questions'?'Rechercher une question…':state.route==='decouvrir'||state.route==='course'?'Rechercher une leçon…':state.route==='consulted'?'Rechercher une lecture…':state.route==='bible-stories'?'Rechercher un récit…':'Rechercher une prière…'}" aria-controls="library-results"><button type="button" class="library-query-clear" data-query-clear aria-label="Effacer les mots recherchés" ${view.query?'':'hidden'}>×</button>${canFilter?`<button type="button" class="action secondary library-filter-toggle" id="library-filter-toggle" data-filter-toggle aria-controls="library-filter-panel" aria-expanded="${!!view.filtersOpen}">Filtrer${filterCount(view)?' ('+filterCount(view)+')':''}</button>`:''}</div>${canFilter?`<div class="library-filter-panel" id="library-filter-panel" ${view.filtersOpen?'':'hidden'}>${state.route==='prieres'?`<nav class="library-category-nav" aria-label="Choisir une catégorie"><p>Catégories</p><div>${CATEGORY.map(c=>`<button type="button" class="action secondary library-category-option" data-go="category" data-id="${esc(c.id)}">${esc(c.name)}</button>`).join('')}</div></nav>`:''}${themes.length?`<div class="field"><label for="library-theme">${state.route==='psalms'?'Thème éditorial':'Thème'}</label><select id="library-theme" aria-controls="library-results"><option value="">Tous les thèmes</option>${themes.map(theme=>`<option ${view.theme===theme?'selected':''} value="${esc(theme)}">${esc(theme)}</option>`).join('')}</select></div>`:''}${state.route==='bible'?`<div class="field"><label for="library-book">Livre</label><select id="library-book"><option value="">Tous les livres disponibles</option>${availableBooks().map(book=>`<option value="${esc(book.id)}" ${view.bookId===book.id?'selected':''}>${esc(book.name)}</option>`).join('')}</select></div>`:''}${state.route==='decouvrir'?`<div class="field"><label for="library-course">Parcours</label><select id="library-course"><option value="">Tous les parcours</option>${COURSES.map(c=>`<option value="${esc(c.id)}" ${view.courseId===c.id?'selected':''}>${esc(c.title)}</option>`).join('')}</select></div>`:''}<button type="button" class="action secondary" data-filters-reset>Réinitialiser les filtres</button></div>`:''}${state.route==='psalms'?'<p class="small" id="psalm-jump-message" role="status"></p>':''}</form>`}
function resultUnit(count){const route=state.route;if(['prieres','category','favorites'].includes(route))return count===1?'prière':'prières';if(route==='psalms')return count===1?'psaume':'psaumes';if(route==='course')return count===1?'leçon':'leçons';if(route==='consulted')return count===1?'lecture':'lectures';if(route==='bible-stories')return count===1?'récit':'récits';if(route==='questions')return count===1?'question':'questions';if(route==='book')return count===1?'chapitre':'chapitres';return count===1?'résultat':'résultats'}
function pageEntries(items,draw,empty){const view=libraryView(),pages=Math.max(1,Math.ceil(items.length/LIBRARY_PAGE_SIZE));view.page=Math.max(1,Math.min(pages,view.page||1));const start=(view.page-1)*LIBRARY_PAGE_SIZE;const message=empty||'Aucun résultat pour cette recherche. Essaie un autre mot ou modifie les filtres.';const numberQuery=state.route==='psalms'&&/^\d+$/.test(view.query.trim());return `<div class="library-summary"><p class="library-status" id="library-status" role="status" tabindex="-1">${items.length} ${resultUnit(items.length)}${pages>1?' · '+(start+1)+'–'+Math.min(start+LIBRARY_PAGE_SIZE,items.length):''}</p>${numberQuery?`<button type="submit" form="library-search" class="action library-number-open" id="open-psalm-number" title="Accès direct, indépendamment du filtre">Ouvrir ${Number(view.query)}</button>`:''}</div>${items.length?`<div class="card-list compact-list">${items.slice(start,start+LIBRARY_PAGE_SIZE).map(draw).join('')}</div>`:`<div class="empty"><p>${esc(message)}</p><button type="button" class="action secondary" data-library-reset>Effacer la recherche</button></div>`}${pages>1?`<nav class="library-pagination" aria-label="Pages des résultats"><button class="action secondary" type="button" data-library-page="${view.page-1}" ${view.page===1?'disabled':''}>← Précédent</button><span>Page ${view.page} / ${pages}</span><button class="action secondary" type="button" data-library-page="${view.page+1}" ${view.page===pages?'disabled':''}>Suivant →</button></nav>`:''}`}
function readingBookId(r){if(r.psalm)return 'psaumes';return BIBLE_BOOKS.find(b=>b.chapters?.some(c=>c.readings.includes(r.id)))?.id||''}
function readingRow(r){if(r.psalm)return compactEntry('reading','Psaume '+r.psalm,'Repère éditorial : '+r.title.replace(/^Psaume \d+\s*[—–-]\s*/,''),r.id,String(r.psalm));const b=BIBLE_BOOKS.find(b=>b.id===readingBookId(r));const chapter=b?.chapters.find(c=>c.readings.includes(r.id));return compactEntry('reading',r.title,`${b?.name||'Extrait biblique'} ${chapter?.number||''} · ${chapter?.range||'Passage intégré'} · Louis Segond 1910`,r.id)}
function lessonRow(l){return compactEntry('lesson',PATH_TITLES[l.id]||l.title,l.intro+(learning.enabled&&learning.entries[l.id]?' · Consultée sur cet appareil':''),l.id)}
function libraryResults(){const view=libraryView();if(state.route==='bible-stories')return bibleStoryResults(view);if(state.route==='questions')return pageEntries(FAITH_QUESTIONS.filter(q=>matchesSearch(q.title+' '+q.intro,view.query)),q=>compactEntry('question',q.title,q.intro,q.id),'Aucune question pour ces mots. Essaie par exemple doute, pardon ou messe.');if(state.route==='consulted')return pageEntries(consultedLessons().filter(l=>matchesSearch(l.title+' '+(l.intro||''),view.query)),l=>(learningRoute(l.id)==='lesson'?lessonRow(l):bibleDiscoveryEntry(l))+(learning.enabled?`<button class="action secondary learning-resume" data-resume-lesson="${esc(l.id)}">Reprendre la lecture</button>`:''),learning.enabled?'Aucune lecture consultée pour ces mots. Tu peux ouvrir une leçon ou une fiche biblique.':'Le suivi est désactivé. Tu peux toujours choisir librement toutes les leçons.');if(state.route==='prieres')return prayerRows(PRAYERS.filter(p=>prayerMatches(p,view)));if(state.route==='category')return prayerRows(PRAYERS.filter(p=>p.category===state.active&&prayerMatches(p,view)));if(state.route==='favorites')return prayerRows(PRAYERS.filter(p=>state.favorites.includes(p.id)&&prayerMatches(p,view)));if(state.route==='psalms'){const numeric=/^\d+$/.test(view.query.trim());const items=psalmItems().filter(r=>(!view.theme||psalmTags(r).includes(view.theme))&&(numeric?r.psalm===Number(view.query):matchesSearch([r.title,r.intro,r.text,psalmTags(r).join(' ')].join(' '),view.query))).sort((a,b)=>a.psalm-b.psalm);return pageEntries(items,readingRow,numeric?'Ce numéro n’est pas encore intégré, ou ne correspond pas au thème sélectionné. Modifie le filtre ou recherche un psaume disponible.':undefined)}if(state.route==='bible'){if(!view.query&&!view.bookId)return pageEntries(availableBooks(),book=>compactEntry(book.psalms?'psalms':'book',book.name,book.psalms?psalmItems().length+' psaumes complets · Louis Segond 1910':availableChapters(book).length+' chapitre avec un extrait · Louis Segond 1910',book.psalms?'':book.id,'▤'));const rows=[];if(!view.bookId){for(const book of availableBooks())if(matchesSearch(book.name,view.query))rows.push({book})}for(const reading of READINGS){if((!view.bookId||readingBookId(reading)===view.bookId)&&matchesSearch([reading.title,reading.intro,reading.source].join(' '),view.query))rows.push({reading})}return pageEntries(rows,row=>row.reading?readingRow(row.reading):compactEntry(row.book.psalms?'psalms':'book',row.book.name,'Ouvrir les passages disponibles · Louis Segond 1910',row.book.psalms?'':row.book.id,'▤'))}if(state.route==='book'){const book=BIBLE_BOOKS.find(b=>b.id===state.active);return pageEntries(availableChapters(book||{}).filter(c=>matchesSearch('Chapitre '+c.number+' '+c.range,view.query)),c=>compactEntry('reading','Chapitre '+c.number,'Extrait intégré : '+c.range+' · Louis Segond 1910',c.readings.find(id=>READINGS.some(r=>r.id===id&&r.text))))}if(state.route==='decouvrir'){if(!view.query&&!view.courseId)return pageEntries([...COURSES.map(c=>({course:c})),{lesson:BIBLE_GUIDE}],row=>row.lesson?lessonRow(row.lesson):compactEntry('course',row.course.title,row.course.lessons.length+' leçons · '+row.course.description,row.course.id,'✦'));const scope=view.courseId?COURSES.find(c=>c.id===view.courseId)?.lessons:LESSONS.map(l=>l.id).concat(BIBLE_GUIDE.id);return pageEntries([...LESSONS,BIBLE_GUIDE].filter(l=>scope?.includes(l.id)&&matchesSearch([l.title,PATH_TITLES[l.id],l.intro].join(' '),view.query)),lessonRow)}if(state.route==='course'){const course=COURSES.find(c=>c.id===state.active);return pageEntries((course?.lessons||[]).map(id=>LESSONS.find(l=>l.id===id)).filter(l=>l&&matchesSearch([l.title,PATH_TITLES[l.id],l.intro].join(' '),view.query)),lessonRow)}return ''}
function refreshLibrary(){const region=document.querySelector('#library-results');if(region)region.innerHTML=libraryResults();const view=libraryView();const clear=document.querySelector('[data-query-clear]');if(clear)clear.hidden=!view.query;const toggle=document.querySelector('[data-filter-toggle]');if(toggle){toggle.textContent='Filtrer'+(filterCount(view)?' ('+filterCount(view)+')':'');toggle.setAttribute('aria-expanded',String(!!view.filtersOpen))}const panel=document.querySelector('#library-filter-panel');if(panel)panel.hidden=!view.filtersOpen}
function handleLibraryClick(e){const back=e.target.closest('[data-back]');if(back){goBack(back.dataset.fallback||'accueil',back.dataset.fallbackId||null);return true}if(e.target.closest('[data-filter-toggle]')){libraryView().filtersOpen=!libraryView().filtersOpen;refreshLibrary();return true}if(e.target.closest('[data-query-clear]')){libraryView().query='';libraryView().page=1;const input=document.querySelector('#library-query');input.value='';refreshLibrary();input.focus();return true}if(e.target.closest('[data-filters-reset]')){Object.assign(libraryView(),{theme:'',bookId:'',courseId:'',page:1});for(const id of ['library-theme','library-book','library-course']){const select=document.getElementById(id);if(select)select.value=''}refreshLibrary();return true}const reset=e.target.closest('[data-library-reset]');if(reset){Object.assign(libraryView(),{query:'',theme:'',bookId:'',courseId:'',page:1});const input=document.querySelector('#library-query');if(input)input.value='';for(const id of ['library-theme','library-book','library-course']){const select=document.getElementById(id);if(select)select.value=''}refreshLibrary();const message=document.querySelector('#psalm-jump-message');if(message)message.textContent='';input?.focus();return true}const page=e.target.closest('[data-library-page]');if(page&&!page.disabled){libraryView().page=Number(page.dataset.libraryPage);refreshLibrary();const status=document.querySelector('#library-status');status?.focus({preventScroll:true});status?.scrollIntoView({block:'start',behavior:'instant'});return true}return false}

function prayerTags(p){return Array.isArray(p.themes)?p.themes:PRAYER_THEMES[p.id]||[]}
function psalmTags(p){return Array.isArray(p.themes)?p.themes:PSALM_THEMES[p.psalm]||[]}
function prayerMatches(p,view){const category=CATEGORY.find(c=>c.id===p.category);const themes=prayerTags(p);return (!view.theme||themes.includes(view.theme))&&matchesSearch([p.title,category?.name,themes.join(' '),p.text].join(' '),view.query)}
function prayerRows(items){return pageEntries(items,p=>compactEntry('prayer',p.title,[prayerTags(p).join(' · '),state.route==='category'?'':CATEGORY.find(c=>c.id===p.category)?.name].filter(Boolean).join(' — '),p.id),'Aucune prière pour cette recherche dans la liste actuelle.')}
function prayerThemes(items){return [...new Set(items.flatMap(p=>prayerTags(p)))].sort((a,b)=>a.localeCompare(b,'fr'))}
function psalmItems(){return READINGS.filter(r=>Number.isInteger(r.psalm)&&r.psalm>=1&&r.psalm<=150&&r.text)}
function prayers(){return head('Prières','Rechercher une prière ou choisir une intention.')+searchControls('Rechercher par titre ou thème',prayerThemes(PRAYERS))+`<div id="library-results">${libraryResults()}</div><div class="library-shortcuts">${compactEntry('favorites','Mes prières favorites','Retrouver les textes enregistrés')}${compactEntry('personal','Mes prières personnelles','Mes propres mots, sur cet appareil')}</div></div>`}
function category(){const c=CATEGORY.find(c=>c.id===state.active);if(!c)return prayers();const items=PRAYERS.filter(p=>p.category===c.id);return head(c.name,c.desc)+libraryBack('Retour aux catégories','prieres')+searchControls('Rechercher dans cette catégorie',prayerThemes(items))+`<div id="library-results">${libraryResults()}</div></div>`}
function psalms(){const available=psalmItems();return head('Les Psaumes',available.length+' psaumes disponibles · Louis Segond 1910.')+libraryBack('Retour à Bible et lecture','bible')+'<div class="learning-links"><button type="button" class="action secondary" data-go="bible-themes">Explorer les psaumes par thème</button></div>'+searchControls('Numéro ou mots-clés',[...new Set(available.flatMap(r=>psalmTags(r)))].sort((a,b)=>a.localeCompare(b,'fr')))+`<div id="library-results">${libraryResults()}</div><p class="editorial-note library-note">Les titres thématiques et les thèmes sont des repères éditoriaux. Pour un accès direct, saisis un numéro de 1 à 150 puis choisis « Ouvrir le numéro ». Aucun texte n’est créé pour les psaumes absents.</p></div>`}
function availableChapters(book){return (book.chapters||[]).filter(c=>c.readings.some(id=>READINGS.some(r=>r.id===id&&r.text)))}
function availableBooks(){return BIBLE_BOOKS.filter(book=>book.psalms?psalmItems().length:availableChapters(book).length)}
function bible(){const books=availableBooks();return head('Bible et lecture','Choisir un livre, puis un chapitre réellement intégré.')+button('aelf','Lectures du jour','Lectures liturgiques AELF · En ligne','☀')+'<div class="learning-links"><button type="button" class="action secondary" data-go="bible-discovery">Découvrir la Bible</button></div>'+searchControls('Rechercher un livre ou un passage')+`<div id="library-results">${libraryResults()}</div><div class="notice small">Louis Segond 1910, domaine public. Les cinq psaumes sont complets ; Matthieu 11 et Jean 14 sont des extraits, pas des chapitres complets. Cette traduction n’est pas la traduction liturgique officielle catholique.</div></div>`}
function book(){const book=BIBLE_BOOKS.find(b=>b.id===state.active);if(!book)return bible();if(book.psalms)return psalms();const chapters=availableChapters(book);return head(book.name,'Chapitres disponibles · Louis Segond 1910.')+libraryBack('Retour aux livres','bible')+`${searchControls("Rechercher un chapitre ou un passage")}<div id="library-results">${libraryResults()}</div><p class="editorial-note">Seul le passage indiqué est intégré. Aucun chapitre absent n’est activé.</p></div>`}
function discover(){return head('Découvrir la foi','Choisir un parcours ou trouver une leçon, librement.')+learningLinks()+searchControls('Rechercher une leçon ou un parcours')+`<div id="library-results">${libraryResults()}</div><p class="editorial-note">${LESSONS.length} leçons de découverte de la tradition chrétienne catholique. Propositions éditoriales à relire avec un prêtre. Aucun ordre ni progression obligatoire.</p></div>`}
function course(){const c=COURSES.find(c=>c.id===state.active);if(!c)return discover();return head(c.title,c.description)+libraryBack('Retour aux parcours','decouvrir')+searchControls('Rechercher dans ce parcours')+`<div id="library-results">${libraryResults()}</div><p class="editorial-note library-note">Tu peux choisir n’importe quelle leçon et revenir à cette liste à tout moment.</p></div>`}
function favorites(){const items=PRAYERS.filter(p=>state.favorites.includes(p.id));return head('Mes favoris','Ces préférences restent sur cet appareil.')+libraryBack('Retour aux prières','prieres')+(items.length?searchControls('Rechercher dans mes favoris',prayerThemes(items))+`<div id="library-results">${libraryResults()}</div>`:'<p class="empty">Aucune prière en favoris pour le moment.</p>')+bibleDiscoveryFavorites()+'</div>'}
document.addEventListener('input',e=>{if(e.target.id==='library-query'){const message=document.querySelector('#psalm-jump-message');if(message)message.textContent='';libraryView().query=e.target.value;libraryView().page=1;refreshLibrary()}});
document.addEventListener('change',e=>{const fields={'library-theme':'theme','library-book':'bookId','library-course':'courseId'};if(fields[e.target.id]){libraryView()[fields[e.target.id]]=e.target.value;libraryView().page=1;refreshLibrary()}});
document.addEventListener('submit',e=>{if(e.target.id!=='library-search')return;e.preventDefault();refreshLibrary();if(state.route==='psalms'){const query=libraryView().query.trim();const number=Number(query);const message=document.querySelector('#psalm-jump-message');if(!/^\d+$/.test(query))return;if(number<1||number>150){message.textContent='Choisis un numéro de psaume de 1 à 150.';return}const item=psalmItems().find(r=>r.psalm===number);if(item)go('reading',item.id);else message.textContent=`Le psaume ${number} n’est pas encore intégré. Aucun texte n’a été créé.`}});

function button(route,title,desc,icon='✦',id=''){return `<button type="button" class="list-button" data-go="${route}" ${id?`data-id="${esc(id)}"`:''}><span class="round-icon" aria-hidden="true">${icon}</span><span class="grow"><strong>${esc(title)}</strong><small>${esc(desc)}</small></span><span class="chevron" aria-hidden="true">›</span></button>`}
function head(label,description){return `<div class="content"><header class="section-intro"><p class="eyebrow">Chemin de Foi</p><h1>${esc(label)}</h1><p class="subtle">${esc(description)}</p></header>`}
function homeIcon(name){const paths={prayer:'M10 21V11L7 15 4 17l-2-2 4-4 3-8c1-2 3-1 3 1v9m2 8V11l3 4 3 2 2-2-4-4-3-8c-1-2-3-1-3 1v9',book:'M12 5C8 2 3 3 2 4v16c3-2 7-2 10 0 3-2 7-2 10 0V4c-3-2-7-2-10 1Zm0 0v15M5 8h4M5 12h4m6-4h4m-4 4h4',sprout:'M12 22V11C5 12 2 7 2 3c6 0 10 3 10 8 0-5 4-8 10-8 0 5-4 9-10 8',sun:'M2 19h20M5 15a7 7 0 0 1 14 0M12 1v3M3 5l2 2m16-2-2 2M1 12h3m16 0h3',peace:'M12 21C7 18 4 15 4 10c4 0 7 2 8 6 1-4 4-6 8-6 0 5-3 8-8 11Zm0-5C8 12 9 7 12 3c3 4 4 9 0 13',more:'M4 12h.01M12 12h.01M20 12h.01'};return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+paths[name]+'"/></svg>'}
function home(){const cards=[['prieres','Prières','Se confier à Dieu','prayer',''],['bible','Bible et lecture','Lire et méditer','book',''],['decouvrir','Découvrir la foi','Comprendre pas à pas','sprout',''],['reading','Réflexion du jour','Un extrait à méditer','sun','mat11'],['prayer','Recueillement','Un instant de paix','peace','paix'],['plus','Plus','Favoris et préférences','more','']];return `<div class="cinema-home"><section class="home-scene" aria-label="Bienvenue dans Chemin de Foi"><div class="home-wordmark"><span class="home-emblem" aria-hidden="true">✧</span><h1>Chemin <em>de Foi</em></h1><p>Prier · Lire · Découvrir · Grandir</p></div><div class="home-welcome"><h2>Un chemin de paix</h2><p>Découvrir, prier et avancer,<br>librement, à ton rythme.</p></div></section><div class="home-cards">${cards.map(([route,title,desc,icon,id])=>`<button type="button" class="home-card" data-go="${route}" ${id?'data-id="'+id+'"':''}>${homeIcon(icon)}<strong>${title.replace("Recueillement","Recueil&shy;lement")}</strong><small>${desc}</small></button>`).join('')}</div><div class="home-foot"><button class="home-intro" data-go="lesson" data-id="dieu">Découvrir en 3 minutes →</button><p>Aucun compte · Aucune obligation</p></div></div>`}
function textSizeControl(){return `<details class="text-size" id="text-size-panel" ${state.sizeOpen?'open':''}><summary><span class="text-size-label"><span aria-hidden="true">Aa</span> Taille du texte <output id="size-value" for="reading-size">${state.size} px</output></span><span class="size-chevron" aria-hidden="true">⌄</span></summary><div class="text-size-controls"><button type="button" data-size="-2" aria-label="Réduire la taille du texte" ${state.size<=20?'disabled':''}>−</button><input id="reading-size" type="range" min="20" max="36" step="2" value="${state.size}" aria-label="Taille du texte" aria-valuetext="${state.size} pixels"><button type="button" data-size="2" aria-label="Agrandir la taille du texte" ${state.size>=36?'disabled':''}>+</button></div></details>`}
function setReadingSize(value){state.size=Math.max(20,Math.min(36,Number(value)));document.documentElement.style.setProperty('--reading',state.size+'px');persist();const range=document.querySelector('#reading-size');if(range){range.value=state.size;range.setAttribute('aria-valuetext',state.size+' pixels');document.querySelector('#size-value').value=state.size+' px';document.querySelector('[data-size="-2"]').disabled=state.size<=20;document.querySelector('[data-size="2"]').disabled=state.size>=36;}}
function psalmNoteText(p){const note=p.psalmNote;if(!note)return '';return ['Commentaire original de Chemin de Foi, distinct du texte biblique.','Contexte et thème. '+note.contextTheme,'Sentiments exprimés. '+note.feelings,'À retenir. '+note.takeaway,'Réflexion facultative. '+note.reflection,'Références. '+note.source].join('. ')}
function psalmNoteMarkup(p){const note=p.psalmNote;if(!note)return '';return `<section class="lesson-body" aria-labelledby="psalm-note-title"><div class="divider"></div><h2 id="psalm-note-title">Pour comprendre ce psaume</h2><p class="small">Commentaire original de Chemin de Foi, distinct du texte biblique. Proposition éditoriale à relire avec un prêtre.</p><p><strong>Contexte et thème :</strong><br>${esc(note.contextTheme)}</p><p><strong>Sentiments exprimés :</strong><br>${esc(note.feelings)}</p><p><strong>À retenir :</strong><br>${esc(note.takeaway)}</p><p><strong>Réflexion facultative :</strong><br>${esc(note.reflection)}</p><p class="source">${esc(note.source)}<br>${note.references.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)}</a>`).join(' · ')}</p></section>`}
function reader(type){const educational=['lesson','question'].includes(type);const p=(type==='prayer'?PRAYERS:type==='reading'?READINGS:type==='question'?FAITH_QUESTIONS:[...LESSONS,BIBLE_GUIDE]).find(p=>p.id===state.active);if(!p)return type==='question'?questionsPage():type==='lesson'?discover():type==='reading'?bible():prayers();const own=type==='prayer';const isFav=state.favorites.includes(p.id);const contents=educational?`<p class="small">Repères de tradition chrétienne catholique — proposition éditoriale à relire.</p>`+extendedLessonBody(p):`<p>${esc(p.text)}</p>`;const parentCourse=type==='lesson'?COURSES.find(c=>c.lessons.includes(p.id)):null;const parentBook=type==='reading'&&!p.psalm?BIBLE_BOOKS.find(b=>b.chapters?.some(c=>c.readings.includes(p.id))):null;const back=type==='question'?'questions':type==='lesson'?(parentCourse?'course':'decouvrir'):type==='reading'?(p.psalm?'psalms':parentBook?'book':'bible'):'category';const backId=type==='prayer'?p.category:parentCourse?.id||parentBook?.id||'';return `<div class="content">${libraryBack("Retour à la liste",back,backId)}<section class="reading-stage">${textSizeControl()}<div class="reading-card"><p class="eyebrow">${type==='question'?'Mes questions sur la foi':type==='lesson'?'Découvrir la foi':type==='reading'?'La Bible':'Prière'}</p><h1>${esc(type==='lesson'?(PATH_TITLES[p.id]||p.title):p.title)}</h1>${p.psalm?`<p class="small">Titre thématique et introduction : repères éditoriaux de Chemin de Foi, distincts du texte biblique.</p>`:''}${p.intro?`<p class="${p.sections||type==='question'?'':'small'}">${esc(p.intro)}</p>`:''}<div class="divider" style="background:#9b78546e"></div><div class="lesson-body ${p.sections||type==='question'?'extended-lesson':''}">${contents}</div>${educational?`<div class="notice"><strong>Pour réfléchir, sans obligation :</strong><br>${esc(p.question)}</div><p class="editorial-note">Texte de découverte à relire avec un prêtre avant publication.</p>`:''}${p.source?`<p class="source">${esc(p.source)}${p.references?'<br>'+p.references.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)}</a>`).join(' · '):''}</p>`:''}${p.related?`<button class="action secondary" data-go="lesson" data-id="${esc(p.related)}">Poursuivre avec une leçon liée</button>`:''}${p.psalmNote?psalmNoteMarkup(p):''}${own?`<p class="source">Prière originale rédigée pour Chemin de Foi. Proposition éditoriale à relire avant publication.</p>`:''}</div><div class="reading-actions"><div class="actions"><button class="action" id="speak" type="button">▶ Écouter</button><button class="action secondary" id="stop-speak" type="button">■ Arrêter</button>${own?`<button class="heart-btn" data-fav="${esc(p.id)}" type="button" aria-pressed="${isFav}">${isFav?'★ Favori':'☆ Ajouter aux favoris'}</button>`:''}</div><p class="small" id="speech-message">La lecture vocale dépend des voix disponibles sur ton appareil.</p></div></section></div>`}
function personal(){return head('Mes prières personnelles','Tes textes restent uniquement dans ce navigateur. Aucun envoi à un serveur.')+`<button class="back" data-go="plus">← Mon espace</button><div class="actions"><button class="action" data-go="edit-personal">+ Écrire une prière</button></div>${state.personal.length?`<div class="card-list">${state.personal.map(x=>button('view-personal',x.title,'Prière personnelle • Sur cet appareil','✎',x.id)).join('')}</div>`:'<p class="empty">Tu n’as pas encore écrit de prière personnelle.</p>'}<div class="notice small">Attention : effacer les données du navigateur ou changer de téléphone peut supprimer ces textes. Ils ne sont pas synchronisés.</div></div>`}
function editPersonal(){const p=state.personal.find(x=>x.id===state.editing)||{title:'',text:''};return head(state.editing?'Modifier ma prière':'Écrire une prière','Il n’y a pas de bonne ou de mauvaise façon d’exprimer tes pensées.')+`<button class="back" data-go="personal">← Retour</button><form id="personal-form"><div class="field"><label for="ptitle">Titre</label><input id="ptitle" maxlength="90" required value="${esc(p.title)}" placeholder="Une prière du soir…"></div><div class="field"><label for="ptext">Ma prière</label><textarea id="ptext" maxlength="8000" required placeholder="Seigneur…">${esc(p.text)}</textarea></div><button class="action" type="submit">Enregistrer sur cet appareil</button></form></div>`}
function viewPersonal(){const p=state.personal.find(x=>x.id===state.active);if(!p)return personal();return `<div class="content"><button class="back" data-go="personal">← Mes prières personnelles</button><section class="reading-stage">${textSizeControl()}<div class="reading-card"><p class="eyebrow">Ma prière personnelle</p><h1>${esc(p.title)}</h1><div class="divider"></div><p>${esc(p.text)}</p></div><div class="reading-actions actions"><button class="action" id="speak">▶ Écouter</button><button class="action secondary" id="stop-speak">■ Arrêter</button><button class="action secondary" id="edit-this">✎ Modifier</button><button class="action secondary" id="delete-this">Supprimer</button></div></section></div>`}
function settings(){return head('Réglages','Choisis ce qui rend la lecture confortable.')+`<section class="panel"><h2>Confort visuel</h2><div class="settings-option"><div><strong>Taille du texte de lecture</strong><p class="setting-description">Grand, clair et facile à suivre</p></div><select id="size-select" aria-label="Taille du texte de lecture">${[20,22,24,26,28,30,32,34,36].map(s=>`<option value="${s}" ${state.size===s?'selected':''}>${s} px</option>`).join('')}</select></div><div class="settings-option"><div><strong>Ambiance</strong><p class="setting-description">Choisir le contraste qui te convient</p></div><select id="theme-select" aria-label="Thème"><option value="dark" ${state.theme==='dark'?'selected':''}>Crème chaleureuse</option><option value="light" ${state.theme==='light'?'selected':''}>Ivoire lumineux</option></select></div><div class="notice small">Les deux ambiances restent claires pour faciliter la lecture. Tu peux également utiliser le zoom du navigateur.</div></section><section class="panel"><h2>Vie privée</h2><p>Les favoris, tes prières personnelles et les réglages sont conservés localement dans ton navigateur. Aucun compte, aucune publicité et aucun suivi d'utilisation.</p><button class="action secondary" id="clear-storage">Supprimer mes données locales</button></section></div>`}
function plus(){return head('Mon espace','Tout est facultatif, tu es libre d’avancer à ton rythme.')+`<div class="card-list">${button('favorites','Mes favoris','Retrouver les prières sauvegardées','☆')}${button('personal','Mes prières personnelles','Écrire et conserver mes mots sur cet appareil','✎')}${button('settings','Confort de lecture','Taille des caractères et ambiance','⚙')}${button('about','À propos de Chemin de Foi','Notre intention et le statut de cette démonstration','✧')}</div><div class="panel"><h3>Famille et relations</h3><p class="subtle">Prières et réflexions pour la famille, l'écoute et le mariage.</p><button class="action secondary" data-go="category" data-id="famille">Voir ces prières</button></div></div>`}
function about(){return head('À propos','Une application pour découvrir et approfondir la foi chrétienne.')+`<div class="panel"><h2>Une porte ouverte, jamais une obligation.</h2><p>Chemin de Foi est un projet indépendant d'inspiration chrétienne : des prières, des textes et de courtes explications proposés dans un cadre paisible et bienveillant.</p><p>La version actuelle est un prototype de démonstration. Les textes pédagogiques et les contenus religieux feront l'objet d'une relecture avec des accompagnateurs compétents avant une diffusion au public.</p><p>Aucune affiliation officielle avec l'Église n'est revendiquée. Cette application ne remplace pas un accompagnement spirituel, médical ou psychologique lorsque cela est nécessaire.</p></div></div>`}
function render(){document.body.classList.add('theme-light');document.body.classList.toggle('theme-cream',state.theme==='dark');main.dataset.section=state.route;document.body.dataset.section=state.route;document.body.dataset.library=String(['prieres','category','favorites','psalms','bible','book','decouvrir','course','questions','consulted'].includes(state.route));document.documentElement.style.setProperty('--reading',state.size+'px');main.innerHTML=({accueil:home,prieres:prayers,category,bible,'bible-discovery':bibleDiscovery,'bible-stories':bibleStories,'bible-themes':bibleThemes,'bible-story':bibleDiscoveryReader,'bible-theme':bibleDiscoveryReader,aelf:aelfPage,questions:questionsPage,consulted:consultedPage,question:()=>reader('question'),psalms,book,course,decouvrir:discover,prayer:()=>reader('prayer'),reading:()=>reader('reading'),lesson:()=>reader('lesson'),favorites,personal,'edit-personal':editPersonal,'view-personal':viewPersonal,settings,plus,about}[state.route]||home)();document.querySelectorAll('.nav-button').forEach(b=>{const r=b.dataset.route;const active=state.route===r||(['prayer','category','favorites','personal','edit-personal','view-personal'].includes(state.route)&&r==='prieres')||(['reading','psalms','book','aelf','bible-discovery','bible-stories','bible-themes','bible-story','bible-theme'].includes(state.route)&&r==='bible')||(['lesson','course','questions','question','consulted'].includes(state.route)&&r==='decouvrir')||(['settings','about'].includes(state.route)&&r==='plus');b.classList.toggle('selected',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});aelfAfterRender();learningAfterRender();}
let toastTimer;function showToast(msg){let n=document.querySelector('#toast');if(!n){n=document.createElement('div');n.id='toast';n.setAttribute('role','status');n.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:93px;z-index:30;max-width:min(90vw,500px);padding:12px 18px;border-radius:15px;color:#213145;background:#ffe7bd;box-shadow:0 6px 30px #0008;text-align:center';document.body.append(n)}n.textContent=msg;clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.remove(),3400)}
function speak(){if(state.route==='aelf'){showToast('La synthèse vocale n’est pas autorisée pour les textes AELF.');return;}if(!('speechSynthesis'in window)){showToast('La lecture vocale n’est pas disponible sur cet appareil.');return;}let p=(state.route==='prayer'?PRAYERS:state.route==='reading'?READINGS:state.route==='lesson'?[...LESSONS,BIBLE_GUIDE]:state.route==='question'?FAITH_QUESTIONS:state.personal).find(x=>x.id===state.active);if(!p)return;window.speechSynthesis.cancel();const text=['lesson','question'].includes(state.route)?[p.intro||'',...(p.sections?p.sections.flatMap(s=>[s.title,s.text]):p.paragraphs||[]),p.example?'Exemple concret. '+p.example:'',p.summary?'À retenir. '+p.summary.join('. '):'',p.invitation?'Pour poursuivre. '+p.invitation:'',p.question?'Pour réfléchir, sans obligation. '+p.question:'',p.source||''].filter(Boolean).join('. '):state.route==='reading'?[p.intro,p.text,p.source,psalmNoteText(p)].filter(Boolean).join('. '):p.text;const u=new SpeechSynthesisUtterance(p.title+'. '+text);u.lang='fr-FR';u.rate=.86;u.pitch=1;u.onerror=()=>showToast('Lecture vocale indisponible : vérifier les voix françaises installées.');window.speechSynthesis.speak(u);showToast('Lecture vocale démarrée si une voix française est disponible.');}
document.addEventListener('click',e=>{if(handleLibraryClick(e))return;if(e.target.closest('#text-size-panel summary')){e.preventDefault();const panel=document.querySelector('#text-size-panel');panel.open=!panel.open;state.sizeOpen=panel.open;persist();return}const goEl=e.target.closest('[data-go]');if(goEl){if(goEl.dataset.go!=='edit-personal')state.editing=null;go(goEl.dataset.go,goEl.dataset.id||null);return}const nav=e.target.closest('[data-route]');if(nav){go(nav.dataset.route);return}const f=e.target.closest('[data-fav]');if(f){let id=f.dataset.fav;state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];persist();render();return}const siz=e.target.closest('[data-size]');if(siz){setReadingSize(state.size+Number(siz.dataset.size));return}if(e.target.closest('#speak')){speak();return}if(e.target.closest('#stop-speak')){if('speechSynthesis' in window)window.speechSynthesis.cancel();return}if(e.target.closest('#header-settings')){go('settings');return}if(e.target.closest('#edit-this')){state.editing=state.active;go('edit-personal');return}if(e.target.closest('#delete-this')){if(confirm('Supprimer définitivement cette prière personnelle de cet appareil ?')){state.personal=state.personal.filter(x=>x.id!==state.active);persist();go('personal')}return}if(e.target.closest('#clear-storage')){if(confirm('Supprimer tous les favoris, prières personnelles et réglages de ce navigateur ?')){learningReset();state.personal=[];state.favorites=[];state.size=24;state.theme='light';libraryViews.clear();navigationViews.clear();recentViews.clear();try{sessionStorage.removeItem(NAVIGATION_STORE)}catch{}persist();go('settings');showToast('Données locales effacées.')}return}});
document.addEventListener('toggle',e=>{if(e.target.id==='text-size-panel'&&e.target.isConnected){state.sizeOpen=e.target.open;persist()}},true);
document.addEventListener('input',e=>{if(e.target.id==='reading-size')setReadingSize(e.target.value)});
document.addEventListener('change',e=>{if(e.target.id==='size-select'){state.size=Number(e.target.value);persist();render()}if(e.target.id==='theme-select'){state.theme=e.target.value;persist();render()}});
document.addEventListener('submit',e=>{if(e.target.id!=='personal-form')return;e.preventDefault();const title=document.querySelector('#ptitle').value.trim();const text=document.querySelector('#ptext').value.trim();if(!title||!text)return;const id=state.editing||'local-'+Date.now();const entry={id,title,text};state.personal=state.personal.filter(x=>x.id!==id).concat(entry);state.editing=null;persist();go('personal');showToast('Prière enregistrée sur cet appareil.');});
if('scrollRestoration'in history)history.scrollRestoration='manual';
currentNavigationId=history.state?.cdfNavId||'cdf-initial-'+Date.now();history.replaceState({...history.state,cdfNavId:currentNavigationId,parent:history.state?.parent||null},'');
const first=location.hash.slice(1).split('/');if(first[0]){state.route=first[0];state.active=first[1]?decodeURIComponent(first[1]):null}restoreNavigation(navigationViews.get(currentNavigationId));
window.addEventListener('pagehide',rememberNavigation);
window.addEventListener('popstate',followAddress);
window.addEventListener('hashchange',followAddress);
if('serviceWorker'in navigator&&location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

// Réserver l’espace réel de la navigation, même après agrandissement système.
function updateNavigationClearance(){const nav=document.querySelector('.bottom-nav');if(!nav)return;const box=nav.getBoundingClientRect();const inset=parseFloat(getComputedStyle(nav).bottom)||0;document.documentElement.style.setProperty('--nav-clearance',Math.ceil(box.height+inset+24)+'px');}
if('ResizeObserver' in window)new ResizeObserver(updateNavigationClearance).observe(document.querySelector('.bottom-nav'));
window.addEventListener('resize',updateNavigationClearance);
if(window.visualViewport)window.visualViewport.addEventListener('resize',updateNavigationClearance);
updateNavigationClearance();
