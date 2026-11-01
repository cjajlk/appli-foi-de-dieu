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

const STORE='chemin-de-foi-demo-v01';const defaults={size:24,theme:'light',favorites:[],personal:[],sizeOpen:false};
let saved;try{saved=JSON.parse(localStorage.getItem(STORE)||'{}')}catch{saved={}}
if(!saved||typeof saved!=='object')saved={};
if(saved.visualVersion!==2){saved.theme='light';saved.visualVersion=2;}
saved.size=Number.isFinite(Number(saved.size))?Math.max(20,Math.min(36,Number(saved.size))):24;
const state={...defaults,...saved,route:'accueil',filter:'all',search:'',active:null,editing:null,origin:'prieres'};
function persist(){try{localStorage.setItem(STORE,JSON.stringify({visualVersion:2,size:state.size,theme:state.theme,sizeOpen:state.sizeOpen,favorites:state.favorites,personal:state.personal}))}catch{showToast('Stockage indisponible : les changements peuvent ne pas être conservés.')}}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
const main=document.querySelector('#main');
// Bibliothèques : métadonnées de classement uniquement, aucun texte religieux ajouté.
const LIBRARY_PAGE_SIZE=10;
const PSALM_THEMES={23:['Confiance','Espérance'],27:['Confiance','Peur'],46:['Détresse','Paix'],91:['Confiance','Protection'],121:['Chemin','Confiance']};
const PRAYER_THEMES={matin:['Matin'],soir:['Soir'],courage:['Confiance','Courage'],souffrance:['Souffrance'],solitude:['Solitude'],pardon:['Pardon'],doute:['Doute'],paix:['Paix intérieure'],esperance:['Espérance'],merci:['Gratitude'],'petites-joies':['Gratitude'],proches:['Gratitude','Proches'],'famille-paix':['Famille','Paix intérieure'],amour:['Couple'],mariage:['Mariage'],ecoute:['Couple','Écoute'],'matin-attention':['Matin'],'soir-deposer':['Soir'],'merci-discret':['Gratitude'],'pardon-reparer':['Pardon'],'paix-attente':['Paix intérieure'],'confiance-choix':['Confiance'],'famille-quotidien':['Famille'],'epreuve-presence':['Souffrance','Espérance']};
const BIBLE_BOOKS=[{id:'psaumes',name:'Les Psaumes',psalms:true},{id:'matthieu',name:'Évangile selon Matthieu',chapters:[{number:11,readings:['mat11'],range:'verset 28 uniquement'}]},{id:'jean',name:'Évangile selon Jean',chapters:[{number:14,readings:['jn14'],range:'verset 27 uniquement'}]}];
const COURSES=[{id:'premiers',title:'Premiers repères',description:'Dieu, Jésus, la prière, les Évangiles et le doute.',lessons:BEGINNER_PATH},{id:'approfondir',title:'Pour aller plus loin',description:'La foi, les psaumes, la souffrance, le pardon et la charité.',lessons:COMPLEMENTARY_PATH}];
const libraryViews=new Map(),navigationViews=new Map(),recentViews=new Map();
let navigationCounter=0,currentNavigationId=null,navigationEpoch=0;
const NAVIGATION_STORE='chemin-de-foi-navigation-v31';
try{const cached=JSON.parse(sessionStorage.getItem(NAVIGATION_STORE)||'null');if(cached){for(const [key,value]of cached.entries||[])navigationViews.set(key,value);for(const [key,value]of cached.recent||[])recentViews.set(key,value);for(const [key,value]of cached.library||[])libraryViews.set(key,value)}}catch{}
function saveNavigationSession(){try{sessionStorage.setItem(NAVIGATION_STORE,JSON.stringify({entries:[...navigationViews].slice(-160),recent:[...recentViews].slice(-160),library:[...libraryViews].slice(-160)}))}catch{}}

function viewKey(route=state.route,id=state.active){return route+'/'+(id||'')}
function libraryView(){const key=viewKey();if(!libraryViews.has(key))libraryViews.set(key,{query:'',theme:'',page:1});return libraryViews.get(key)}
function normalizeSearch(value){return String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim()}
function matchesSearch(text,query){const haystack=normalizeSearch(text);return normalizeSearch(query).split(/\s+/).filter(Boolean).every(word=>haystack.includes(word))}
function rememberNavigation(){if(!currentNavigationId)return;const el=document.activeElement?.closest('[data-go]');const snapshot={route:state.route,active:state.active,scroll:window.scrollY,library:{...libraryView()},focus:el?{route:el.dataset.go,id:el.dataset.id||''}:null};navigationViews.set(currentNavigationId,snapshot);recentViews.set(viewKey(),snapshot);saveNavigationSession()}
function restoreNavigation(snapshot){const epoch=++navigationEpoch;if(snapshot?.library)libraryViews.set(viewKey(),{...snapshot.library});render();requestAnimationFrame(()=>requestAnimationFrame(()=>{if(epoch!==navigationEpoch)return;if(snapshot?.focus){const target=[...main.querySelectorAll('[data-go]')].find(e=>e.dataset.go===snapshot.focus.route&&(e.dataset.id||'')===snapshot.focus.id);target?.focus({preventScroll:true})}window.scrollTo({top:snapshot?.scroll||0,behavior:'instant'})}))}
function go(route,active=null){rememberNavigation();if('speechSynthesis'in window)window.speechSynthesis.cancel();const parent=currentNavigationId;state.route=route;state.active=active;state.search='';currentNavigationId='cdf-'+Date.now()+'-'+(++navigationCounter);history.pushState({cdfNavId:currentNavigationId,parent},'', '#'+route+(active?'/'+encodeURIComponent(active):''));const snapshot=['prayer','reading','lesson','view-personal'].includes(route)?null:recentViews.get(viewKey());restoreNavigation(snapshot)}
function goBack(fallback='accueil',id=null){if(history.state?.parent){history.back()}else{go(fallback,id)}}
function followAddress(){const [route,id]=location.hash.slice(1).split('/');const active=id?decodeURIComponent(id):null;if((route||'accueil')===state.route&&active===state.active&&history.state?.cdfNavId===currentNavigationId)return;rememberNavigation();if('speechSynthesis'in window)window.speechSynthesis.cancel();state.route=route||'accueil';state.active=active;state.search='';currentNavigationId=history.state?.cdfNavId||'cdf-'+Date.now()+'-'+(++navigationCounter);if(!history.state?.cdfNavId)history.replaceState({cdfNavId:currentNavigationId,parent:null},'');restoreNavigation(navigationViews.get(currentNavigationId)||recentViews.get(viewKey()))}
function libraryBack(label,fallback,id=''){return `<button class="back" type="button" data-back data-fallback="${esc(fallback)}" data-fallback-id="${esc(id)}">← ${esc(label)}</button>`}
function compactEntry(route,title,description,id='',badge=''){return `<button type="button" class="list-button compact-entry" data-go="${esc(route)}" ${id?`data-id="${esc(id)}"`:''}>${badge?`<span class="entry-badge" aria-hidden="true">${esc(badge)}</span>`:''}<span class="grow"><strong>${esc(title)}</strong><small>${esc(description)}</small></span><span class="chevron" aria-hidden="true">›</span></button>`}
function filterCount(view=libraryView()){return [view.theme,view.bookId,view.courseId].filter(Boolean).length}
function searchControls(label,themes=[]){const view=libraryView();const canFilter=themes.length>0||['prieres','bible','decouvrir'].includes(state.route);return `<form class="library-tools library-compact" id="library-search" role="search"><label class="visually-hidden" for="library-query">${esc(label)}</label><div class="library-search-line"><span class="library-search-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></span><input type="search" id="library-query" maxlength="120" autocomplete="off" value="${esc(view.query)}" placeholder="${state.route==='psalms'?'N° ou mot-clé…':state.route==='book'?'N° de chapitre…':state.route==='bible'?'Livre ou passage…':state.route==='decouvrir'||state.route==='course'?'Rechercher une leçon…':'Rechercher une prière…'}" aria-controls="library-results"><button type="button" class="library-query-clear" data-query-clear aria-label="Effacer les mots recherchés" ${view.query?'':'hidden'}>×</button>${canFilter?`<button type="button" class="action secondary library-filter-toggle" id="library-filter-toggle" data-filter-toggle aria-controls="library-filter-panel" aria-expanded="${!!view.filtersOpen}">Filtrer${filterCount(view)?' ('+filterCount(view)+')':''}</button>`:''}</div>${canFilter?`<div class="library-filter-panel" id="library-filter-panel" ${view.filtersOpen?'':'hidden'}>${state.route==='prieres'?`<nav class="library-category-nav" aria-label="Choisir une catégorie"><p>Catégories</p><div>${CATEGORY.map(c=>`<button type="button" class="action secondary library-category-option" data-go="category" data-id="${esc(c.id)}">${esc(c.name)}</button>`).join('')}</div></nav>`:''}${themes.length?`<div class="field"><label for="library-theme">${state.route==='psalms'?'Thème éditorial':'Thème'}</label><select id="library-theme" aria-controls="library-results"><option value="">Tous les thèmes</option>${themes.map(theme=>`<option ${view.theme===theme?'selected':''} value="${esc(theme)}">${esc(theme)}</option>`).join('')}</select></div>`:''}${state.route==='bible'?`<div class="field"><label for="library-book">Livre</label><select id="library-book"><option value="">Tous les livres disponibles</option>${availableBooks().map(book=>`<option value="${esc(book.id)}" ${view.bookId===book.id?'selected':''}>${esc(book.name)}</option>`).join('')}</select></div>`:''}${state.route==='decouvrir'?`<div class="field"><label for="library-course">Parcours</label><select id="library-course"><option value="">Tous les parcours</option>${COURSES.map(c=>`<option value="${esc(c.id)}" ${view.courseId===c.id?'selected':''}>${esc(c.title)}</option>`).join('')}</select></div>`:''}<button type="button" class="action secondary" data-filters-reset>Réinitialiser les filtres</button></div>`:''}${state.route==='psalms'?'<p class="small" id="psalm-jump-message" role="status"></p>':''}</form>`}
function resultUnit(count){const route=state.route;if(['prieres','category','favorites'].includes(route))return count===1?'prière':'prières';if(route==='psalms')return count===1?'psaume':'psaumes';if(route==='course')return count===1?'leçon':'leçons';if(route==='book')return count===1?'chapitre':'chapitres';return count===1?'résultat':'résultats'}
function pageEntries(items,draw,empty){const view=libraryView(),pages=Math.max(1,Math.ceil(items.length/LIBRARY_PAGE_SIZE));view.page=Math.max(1,Math.min(pages,view.page||1));const start=(view.page-1)*LIBRARY_PAGE_SIZE;const message=empty||'Aucun résultat pour cette recherche. Essaie un autre mot ou modifie les filtres.';const numberQuery=state.route==='psalms'&&/^\d+$/.test(view.query.trim());return `<div class="library-summary"><p class="library-status" id="library-status" role="status" tabindex="-1">${items.length} ${resultUnit(items.length)}${pages>1?' · '+(start+1)+'–'+Math.min(start+LIBRARY_PAGE_SIZE,items.length):''}</p>${numberQuery?`<button type="submit" form="library-search" class="action library-number-open" id="open-psalm-number" title="Accès direct, indépendamment du filtre">Ouvrir ${Number(view.query)}</button>`:''}</div>${items.length?`<div class="card-list compact-list">${items.slice(start,start+LIBRARY_PAGE_SIZE).map(draw).join('')}</div>`:`<div class="empty"><p>${esc(message)}</p><button type="button" class="action secondary" data-library-reset>Effacer la recherche</button></div>`}${pages>1?`<nav class="library-pagination" aria-label="Pages des résultats"><button class="action secondary" type="button" data-library-page="${view.page-1}" ${view.page===1?'disabled':''}>← Précédent</button><span>Page ${view.page} / ${pages}</span><button class="action secondary" type="button" data-library-page="${view.page+1}" ${view.page===pages?'disabled':''}>Suivant →</button></nav>`:''}`}
function readingBookId(r){if(r.psalm)return 'psaumes';return BIBLE_BOOKS.find(b=>b.chapters?.some(c=>c.readings.includes(r.id)))?.id||''}
function readingRow(r){if(r.psalm)return compactEntry('reading','Psaume '+r.psalm,'Repère éditorial : '+r.title.replace(/^Psaume \d+\s*[—–-]\s*/,''),r.id,String(r.psalm));const b=BIBLE_BOOKS.find(b=>b.id===readingBookId(r));const chapter=b?.chapters.find(c=>c.readings.includes(r.id));return compactEntry('reading',r.title,`${b?.name||'Extrait biblique'} ${chapter?.number||''} · ${chapter?.range||'Passage intégré'} · Louis Segond 1910`,r.id)}
function lessonRow(l){return compactEntry('lesson',PATH_TITLES[l.id]||l.title,l.intro,l.id)}
function libraryResults(){const view=libraryView();if(state.route==='prieres')return prayerRows(PRAYERS.filter(p=>prayerMatches(p,view)));if(state.route==='category')return prayerRows(PRAYERS.filter(p=>p.category===state.active&&prayerMatches(p,view)));if(state.route==='favorites')return prayerRows(PRAYERS.filter(p=>state.favorites.includes(p.id)&&prayerMatches(p,view)));if(state.route==='psalms'){const numeric=/^\d+$/.test(view.query.trim());const items=psalmItems().filter(r=>(!view.theme||psalmTags(r).includes(view.theme))&&(numeric?r.psalm===Number(view.query):matchesSearch([r.title,r.intro,r.text,psalmTags(r).join(' ')].join(' '),view.query))).sort((a,b)=>a.psalm-b.psalm);return pageEntries(items,readingRow,numeric?'Ce numéro n’est pas encore intégré, ou ne correspond pas au thème sélectionné. Modifie le filtre ou recherche un psaume disponible.':undefined)}if(state.route==='bible'){if(!view.query&&!view.bookId)return pageEntries(availableBooks(),book=>compactEntry(book.psalms?'psalms':'book',book.name,book.psalms?psalmItems().length+' psaumes complets · Louis Segond 1910':availableChapters(book).length+' chapitre avec un extrait · Louis Segond 1910',book.psalms?'':book.id,'▤'));const rows=[];if(!view.bookId){for(const book of availableBooks())if(matchesSearch(book.name,view.query))rows.push({book})}for(const reading of READINGS){if((!view.bookId||readingBookId(reading)===view.bookId)&&matchesSearch([reading.title,reading.intro,reading.source].join(' '),view.query))rows.push({reading})}return pageEntries(rows,row=>row.reading?readingRow(row.reading):compactEntry(row.book.psalms?'psalms':'book',row.book.name,'Ouvrir les passages disponibles · Louis Segond 1910',row.book.psalms?'':row.book.id,'▤'))}if(state.route==='book'){const book=BIBLE_BOOKS.find(b=>b.id===state.active);return pageEntries(availableChapters(book||{}).filter(c=>matchesSearch('Chapitre '+c.number+' '+c.range,view.query)),c=>compactEntry('reading','Chapitre '+c.number,'Extrait intégré : '+c.range+' · Louis Segond 1910',c.readings.find(id=>READINGS.some(r=>r.id===id&&r.text))))}if(state.route==='decouvrir'){if(!view.query&&!view.courseId)return pageEntries([...COURSES.map(c=>({course:c})),{lesson:BIBLE_GUIDE}],row=>row.lesson?lessonRow(row.lesson):compactEntry('course',row.course.title,row.course.lessons.length+' leçons · '+row.course.description,row.course.id,'✦'));const scope=view.courseId?COURSES.find(c=>c.id===view.courseId)?.lessons:LESSONS.map(l=>l.id).concat(BIBLE_GUIDE.id);return pageEntries([...LESSONS,BIBLE_GUIDE].filter(l=>scope?.includes(l.id)&&matchesSearch([l.title,PATH_TITLES[l.id],l.intro].join(' '),view.query)),lessonRow)}if(state.route==='course'){const course=COURSES.find(c=>c.id===state.active);return pageEntries((course?.lessons||[]).map(id=>LESSONS.find(l=>l.id===id)).filter(l=>l&&matchesSearch([l.title,PATH_TITLES[l.id],l.intro].join(' '),view.query)),lessonRow)}return ''}
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
function psalms(){const available=psalmItems();return head('Les Psaumes',available.length+' psaumes disponibles · Louis Segond 1910.')+libraryBack('Retour à Bible et lecture','bible')+searchControls('Numéro ou mots-clés',[...new Set(available.flatMap(r=>psalmTags(r)))].sort((a,b)=>a.localeCompare(b,'fr')))+`<div id="library-results">${libraryResults()}</div><p class="editorial-note library-note">Les titres thématiques et les thèmes sont des repères éditoriaux. Pour un accès direct, saisis un numéro de 1 à 150 puis choisis « Ouvrir le numéro ». Aucun texte n’est créé pour les psaumes absents.</p></div>`}
function availableChapters(book){return (book.chapters||[]).filter(c=>c.readings.some(id=>READINGS.some(r=>r.id===id&&r.text)))}
function availableBooks(){return BIBLE_BOOKS.filter(book=>book.psalms?psalmItems().length:availableChapters(book).length)}
function bible(){const books=availableBooks();return head('Bible et lecture','Choisir un livre, puis un chapitre réellement intégré.')+searchControls('Rechercher un livre ou un passage')+`<div id="library-results">${libraryResults()}</div><div class="notice small">Louis Segond 1910, domaine public. Les cinq psaumes sont complets ; Matthieu 11 et Jean 14 sont des extraits, pas des chapitres complets. Cette traduction n’est pas la traduction liturgique officielle catholique.</div></div>`}
function book(){const book=BIBLE_BOOKS.find(b=>b.id===state.active);if(!book)return bible();if(book.psalms)return psalms();const chapters=availableChapters(book);return head(book.name,'Chapitres disponibles · Louis Segond 1910.')+libraryBack('Retour aux livres','bible')+`${searchControls("Rechercher un chapitre ou un passage")}<div id="library-results">${libraryResults()}</div><p class="editorial-note">Seul le passage indiqué est intégré. Aucun chapitre absent n’est activé.</p></div>`}
function discover(){return head('Découvrir la foi','Choisir un parcours ou trouver une leçon, librement.')+searchControls('Rechercher une leçon ou un parcours')+`<div id="library-results">${libraryResults()}</div><p class="editorial-note">${LESSONS.length} leçons de découverte de la tradition chrétienne catholique. Propositions éditoriales à relire avec un prêtre. Aucun ordre ni progression obligatoire.</p></div>`}
function course(){const c=COURSES.find(c=>c.id===state.active);if(!c)return discover();return head(c.title,c.description)+libraryBack('Retour aux parcours','decouvrir')+searchControls('Rechercher dans ce parcours')+`<div id="library-results">${libraryResults()}</div><p class="editorial-note library-note">Tu peux choisir n’importe quelle leçon et revenir à cette liste à tout moment.</p></div>`}
function favorites(){const items=PRAYERS.filter(p=>state.favorites.includes(p.id));return head('Mes favoris','Ces préférences restent sur cet appareil.')+libraryBack('Retour aux prières','prieres')+(items.length?searchControls('Rechercher dans mes favoris',prayerThemes(items))+`<div id="library-results">${libraryResults()}</div>`:'<p class="empty">Aucun favori pour le moment. Ouvre une prière puis choisis « Ajouter aux favoris ».</p>')+'</div>'}
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
function reader(type){const p=(type==='prayer'?PRAYERS:type==='reading'?READINGS:[...LESSONS,BIBLE_GUIDE]).find(p=>p.id===state.active);if(!p)return type==='lesson'?discover():type==='reading'?bible():prayers();const own=type==='prayer';const isFav=state.favorites.includes(p.id);const contents=type==='lesson'?`<p class="small">Repères de tradition chrétienne catholique — proposition éditoriale à relire.</p>`+p.paragraphs.map(x=>`<p>${esc(x)}</p>`).join('')+(p.example?`<p><strong>Exemple concret :</strong><br>${esc(p.example)}</p>`:''):`<p>${esc(p.text)}</p>`;const parentCourse=type==='lesson'?COURSES.find(c=>c.lessons.includes(p.id)):null;const parentBook=type==='reading'&&!p.psalm?BIBLE_BOOKS.find(b=>b.chapters?.some(c=>c.readings.includes(p.id))):null;const back=type==='lesson'?(parentCourse?'course':'decouvrir'):type==='reading'?(p.psalm?'psalms':parentBook?'book':'bible'):'category';const backId=type==='prayer'?p.category:parentCourse?.id||parentBook?.id||'';return `<div class="content">${libraryBack("Retour à la liste",back,backId)}<section class="reading-stage">${textSizeControl()}<div class="reading-card"><p class="eyebrow">${type==='lesson'?'Découvrir la foi':type==='reading'?'La Bible':'Prière'}</p><h1>${esc(type==='lesson'?(PATH_TITLES[p.id]||p.title):p.title)}</h1>${p.psalm?`<p class="small">Titre thématique et introduction : repères éditoriaux de Chemin de Foi, distincts du texte biblique.</p>`:''}${p.intro?`<p class="small">${esc(p.intro)}</p>`:''}<div class="divider" style="background:#9b78546e"></div><div class="lesson-body">${contents}</div>${type==='lesson'?`<div class="notice"><strong>Pour réfléchir, sans obligation :</strong><br>${esc(p.question)}</div><p class="editorial-note">Texte de découverte à relire avec un prêtre avant publication.</p>`:''}${p.source?`<p class="source">${esc(p.source)}${p.references?'<br>'+p.references.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)}</a>`).join(' · '):''}</p>`:''}${p.psalmNote?psalmNoteMarkup(p):''}${own?`<p class="source">Prière originale rédigée pour Chemin de Foi. Proposition éditoriale à relire avant publication.</p>`:''}</div><div class="reading-actions"><div class="actions"><button class="action" id="speak" type="button">▶ Écouter</button><button class="action secondary" id="stop-speak" type="button">■ Arrêter</button>${own?`<button class="heart-btn" data-fav="${esc(p.id)}" type="button" aria-pressed="${isFav}">${isFav?'★ Favori':'☆ Ajouter aux favoris'}</button>`:''}</div><p class="small" id="speech-message">La lecture vocale dépend des voix disponibles sur ton appareil.</p></div></section></div>`}
function personal(){return head('Mes prières personnelles','Tes textes restent uniquement dans ce navigateur. Aucun envoi à un serveur.')+`<button class="back" data-go="plus">← Mon espace</button><div class="actions"><button class="action" data-go="edit-personal">+ Écrire une prière</button></div>${state.personal.length?`<div class="card-list">${state.personal.map(x=>button('view-personal',x.title,'Prière personnelle • Sur cet appareil','✎',x.id)).join('')}</div>`:'<p class="empty">Tu n’as pas encore écrit de prière personnelle.</p>'}<div class="notice small">Attention : effacer les données du navigateur ou changer de téléphone peut supprimer ces textes. Ils ne sont pas synchronisés.</div></div>`}
function editPersonal(){const p=state.personal.find(x=>x.id===state.editing)||{title:'',text:''};return head(state.editing?'Modifier ma prière':'Écrire une prière','Il n’y a pas de bonne ou de mauvaise façon d’exprimer tes pensées.')+`<button class="back" data-go="personal">← Retour</button><form id="personal-form"><div class="field"><label for="ptitle">Titre</label><input id="ptitle" maxlength="90" required value="${esc(p.title)}" placeholder="Une prière du soir…"></div><div class="field"><label for="ptext">Ma prière</label><textarea id="ptext" maxlength="8000" required placeholder="Seigneur…">${esc(p.text)}</textarea></div><button class="action" type="submit">Enregistrer sur cet appareil</button></form></div>`}
function viewPersonal(){const p=state.personal.find(x=>x.id===state.active);if(!p)return personal();return `<div class="content"><button class="back" data-go="personal">← Mes prières personnelles</button><section class="reading-stage">${textSizeControl()}<div class="reading-card"><p class="eyebrow">Ma prière personnelle</p><h1>${esc(p.title)}</h1><div class="divider"></div><p>${esc(p.text)}</p></div><div class="reading-actions actions"><button class="action" id="speak">▶ Écouter</button><button class="action secondary" id="stop-speak">■ Arrêter</button><button class="action secondary" id="edit-this">✎ Modifier</button><button class="action secondary" id="delete-this">Supprimer</button></div></section></div>`}
function settings(){return head('Réglages','Choisis ce qui rend la lecture confortable.')+`<section class="panel"><h2>Confort visuel</h2><div class="settings-option"><div><strong>Taille du texte de lecture</strong><p class="setting-description">Grand, clair et facile à suivre</p></div><select id="size-select" aria-label="Taille du texte de lecture">${[20,22,24,26,28,30,32,34,36].map(s=>`<option value="${s}" ${state.size===s?'selected':''}>${s} px</option>`).join('')}</select></div><div class="settings-option"><div><strong>Ambiance</strong><p class="setting-description">Choisir le contraste qui te convient</p></div><select id="theme-select" aria-label="Thème"><option value="dark" ${state.theme==='dark'?'selected':''}>Crème chaleureuse</option><option value="light" ${state.theme==='light'?'selected':''}>Ivoire lumineux</option></select></div><div class="notice small">Les deux ambiances restent claires pour faciliter la lecture. Tu peux également utiliser le zoom du navigateur.</div></section><section class="panel"><h2>Vie privée</h2><p>Les favoris, tes prières personnelles et les réglages sont conservés localement dans ton navigateur. Aucun compte, aucune publicité et aucun suivi d'utilisation.</p><button class="action secondary" id="clear-storage">Supprimer mes données locales</button></section></div>`}
function plus(){return head('Mon espace','Tout est facultatif, tu es libre d’avancer à ton rythme.')+`<div class="card-list">${button('favorites','Mes favoris','Retrouver les prières sauvegardées','☆')}${button('personal','Mes prières personnelles','Écrire et conserver mes mots sur cet appareil','✎')}${button('settings','Confort de lecture','Taille des caractères et ambiance','⚙')}${button('about','À propos de Chemin de Foi','Notre intention et le statut de cette démonstration','✧')}</div><div class="panel"><h3>Famille et relations</h3><p class="subtle">Prières et réflexions pour la famille, l'écoute et le mariage.</p><button class="action secondary" data-go="category" data-id="famille">Voir ces prières</button></div></div>`}
function about(){return head('À propos','Une application pour découvrir et approfondir la foi chrétienne.')+`<div class="panel"><h2>Une porte ouverte, jamais une obligation.</h2><p>Chemin de Foi est un projet indépendant d'inspiration chrétienne : des prières, des textes et de courtes explications proposés dans un cadre paisible et bienveillant.</p><p>La version actuelle est un prototype de démonstration. Les textes pédagogiques et les contenus religieux feront l'objet d'une relecture avec des accompagnateurs compétents avant une diffusion au public.</p><p>Aucune affiliation officielle avec l'Église n'est revendiquée. Cette application ne remplace pas un accompagnement spirituel, médical ou psychologique lorsque cela est nécessaire.</p></div></div>`}
function render(){document.body.classList.add('theme-light');document.body.classList.toggle('theme-cream',state.theme==='dark');main.dataset.section=state.route;document.body.dataset.section=state.route;document.body.dataset.library=String(['prieres','category','favorites','psalms','bible','book','decouvrir','course'].includes(state.route));document.documentElement.style.setProperty('--reading',state.size+'px');main.innerHTML=({accueil:home,prieres:prayers,category,bible,psalms,book,course,decouvrir:discover,prayer:()=>reader('prayer'),reading:()=>reader('reading'),lesson:()=>reader('lesson'),favorites,personal,'edit-personal':editPersonal,'view-personal':viewPersonal,settings,plus,about}[state.route]||home)();document.querySelectorAll('.nav-button').forEach(b=>{const r=b.dataset.route;const active=state.route===r||(['prayer','category','favorites','personal','edit-personal','view-personal'].includes(state.route)&&r==='prieres')||(['reading','psalms','book'].includes(state.route)&&r==='bible')||(['lesson','course'].includes(state.route)&&r==='decouvrir')||(['settings','about'].includes(state.route)&&r==='plus');b.classList.toggle('selected',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});}
let toastTimer;function showToast(msg){let n=document.querySelector('#toast');if(!n){n=document.createElement('div');n.id='toast';n.setAttribute('role','status');n.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:93px;z-index:30;max-width:min(90vw,500px);padding:12px 18px;border-radius:15px;color:#213145;background:#ffe7bd;box-shadow:0 6px 30px #0008;text-align:center';document.body.append(n)}n.textContent=msg;clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.remove(),3400)}
function speak(){if(!('speechSynthesis'in window)){showToast('La lecture vocale n’est pas disponible sur cet appareil.');return;}let p=(state.route==='prayer'?PRAYERS:state.route==='reading'?READINGS:state.route==='lesson'?[...LESSONS,BIBLE_GUIDE]:state.personal).find(x=>x.id===state.active);if(!p)return;window.speechSynthesis.cancel();const text=state.route==='lesson'?[...(p.paragraphs||[]),p.example?'Exemple concret. '+p.example:'',p.question?'Pour réfléchir, sans obligation. '+p.question:'',p.source||''].filter(Boolean).join('. '):state.route==='reading'?[p.intro,p.text,p.source,psalmNoteText(p)].filter(Boolean).join('. '):p.text;const u=new SpeechSynthesisUtterance(p.title+'. '+text);u.lang='fr-FR';u.rate=.86;u.pitch=1;u.onerror=()=>showToast('Lecture vocale indisponible : vérifier les voix françaises installées.');window.speechSynthesis.speak(u);showToast('Lecture vocale démarrée si une voix française est disponible.');}
document.addEventListener('click',e=>{if(handleLibraryClick(e))return;if(e.target.closest('#text-size-panel summary')){e.preventDefault();const panel=document.querySelector('#text-size-panel');panel.open=!panel.open;state.sizeOpen=panel.open;persist();return}const goEl=e.target.closest('[data-go]');if(goEl){if(goEl.dataset.go!=='edit-personal')state.editing=null;go(goEl.dataset.go,goEl.dataset.id||null);return}const nav=e.target.closest('[data-route]');if(nav){go(nav.dataset.route);return}const f=e.target.closest('[data-fav]');if(f){let id=f.dataset.fav;state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];persist();render();return}const siz=e.target.closest('[data-size]');if(siz){setReadingSize(state.size+Number(siz.dataset.size));return}if(e.target.closest('#speak')){speak();return}if(e.target.closest('#stop-speak')){if('speechSynthesis' in window)window.speechSynthesis.cancel();return}if(e.target.closest('#header-settings')){go('settings');return}if(e.target.closest('#edit-this')){state.editing=state.active;go('edit-personal');return}if(e.target.closest('#delete-this')){if(confirm('Supprimer définitivement cette prière personnelle de cet appareil ?')){state.personal=state.personal.filter(x=>x.id!==state.active);persist();go('personal')}return}if(e.target.closest('#clear-storage')){if(confirm('Supprimer tous les favoris, prières personnelles et réglages de ce navigateur ?')){state.personal=[];state.favorites=[];state.size=24;state.theme='light';libraryViews.clear();navigationViews.clear();recentViews.clear();try{sessionStorage.removeItem(NAVIGATION_STORE)}catch{}persist();go('settings');showToast('Données locales effacées.')}return}});
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
