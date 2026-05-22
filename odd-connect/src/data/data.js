export const ODDS = [
  { n:1,  label:"Pas de pauvreté",        pct:65, color:"#E5243B" },
  { n:2,  label:"Faim zéro",              pct:58, color:"#DDA63A" },
  { n:3,  label:"Bonne santé",            pct:72, color:"#4C9F38" },
  { n:4,  label:"Éducation de qualité",   pct:70, color:"#C5192D" },
  { n:5,  label:"Égalité des sexes",      pct:61, color:"#FF3A21" },
  { n:6,  label:"Eau propre",             pct:48, color:"#26BDE2" },
  { n:7,  label:"Énergie propre",         pct:52, color:"#FCC30B" },
  { n:8,  label:"Travail décent",         pct:63, color:"#A21942" },
  { n:9,  label:"Industrie",              pct:55, color:"#FD6925" },
  { n:10, label:"Inégalités réduites",    pct:55, color:"#DD1367" },
  { n:11, label:"Villes durables",        pct:66, color:"#FD9D24" },
  { n:12, label:"Consommation durable",   pct:59, color:"#BF8B2E" },
  { n:13, label:"Action climatique",      pct:31, color:"#3F7E44" },
  { n:14, label:"Vie aquatique",          pct:34, color:"#0A97D9" },
  { n:15, label:"Vie terrestre",          pct:68, color:"#56C02B" },
  { n:16, label:"Paix & Justice",         pct:74, color:"#00689D" },
  { n:17, label:"Partenariats",           pct:62, color:"#19486A" },
];

export const CAMPAIGNS = [
  {
    id:1, title:"Eau pour tous au Nord-Bénin",
    desc:"Mobilisation pour l'accès à l'eau potable dans les communes de l'Atacora.",
    odd:6, oddLabel:"ODD 6", signatures:4820, goal:10000,
    color:"#26BDE2", bg:"#EAF8FD", status:"active", days:18,
    tags:["Eau", "Atacora"]
  },
  {
    id:2, title:"Énergies renouvelables pour les écoles",
    desc:"Campagne pour équiper 200 écoles rurales de panneaux solaires d'ici 2026.",
    odd:7, oddLabel:"ODD 7", signatures:2150, goal:5000,
    color:"#FCC30B", bg:"#FFFBEA", status:"active", days:34,
    tags:["Énergie", "Éducation"]
  },
  {
    id:3, title:"Stop déforestation côtière",
    desc:"Protéger les mangroves et forêts littorales du Bénin contre l'exploitation illégale.",
    odd:15, oddLabel:"ODD 15", signatures:6340, goal:8000,
    color:"#56C02B", bg:"#EDFADF", status:"active", days:7,
    tags:["Forêt", "Environnement"]
  },
  {
    id:4, title:"Parité dans les conseils communaux",
    desc:"Augmenter la représentation féminine à 40% dans toutes les communes du Bénin.",
    odd:5, oddLabel:"ODD 5", signatures:3100, goal:6000,
    color:"#FF3A21", bg:"#FFF0EE", status:"active", days:45,
    tags:["Genre", "Gouvernance"]
  },
];

export const SIGNALS = [
  {
    id:1, severity:"high", odd:14, oddLabel:"ODD 14",
    oddColor:"#0A97D9", title:"Déversement industriel dans l'Ouémé",
    desc:"Des substances chimiques ont été déversées dans la rivière Ouémé. La zone de pêche artisanale est fortement impactée.",
    location:"Adjohoun, Ouémé", time:"Il y a 2h", status:"En cours", statusColor:"#E8A000"
  },
  {
    id:2, severity:"medium", odd:6, oddLabel:"ODD 6",
    oddColor:"#26BDE2", title:"Pénurie d'eau potable — 3 quartiers",
    desc:"Les pompes hydrauliques sont hors service depuis 10 jours. Environ 2 000 habitants n'ont plus accès à l'eau.",
    location:"Parakou, Borgou", time:"Il y a 5h", status:"Signalé", statusColor:"#D85A30"
  },
  {
    id:3, severity:"medium", odd:7, oddLabel:"ODD 7",
    oddColor:"#FCC30B", title:"École sans électricité depuis 3 semaines",
    desc:"L'école primaire de Natitingou-Centre est privée d'électricité. 400 élèves impactés pour les cours du soir.",
    location:"Natitingou, Atacora", time:"Il y a 1j", status:"Signalé", statusColor:"#D85A30"
  },
  {
    id:4, severity:"low", odd:15, oddLabel:"ODD 15",
    oddColor:"#56C02B", title:"Reboisement communautaire réalisé",
    desc:"500 arbres plantés par les jeunes de la commune d'Abomey-Calavi. Action initiée via la plateforme.",
    location:"Abomey-Calavi, Atlantique", time:"Il y a 2j", status:"Résolu", statusColor:"#1D9E75"
  },
  {
    id:5, severity:"high", odd:13, oddLabel:"ODD 13",
    oddColor:"#3F7E44", title:"Érosion côtière accélérée à Cotonou",
    desc:"La plage de Fidjrossè perd 3m par an. Plusieurs habitations menacées.",
    location:"Cotonou, Littoral", time:"Il y a 3j", status:"En cours", statusColor:"#E8A000"
  },
];

export const FORUM_POSTS = [
  {
    id:1, title:"Comment impliquer les jeunes dans le suivi des ODD localement ?",
    excerpt:"Dans ma commune de Bohicon, peu de jeunes connaissent les ODD. J'ai lancé un club scolaire, voici les résultats après 6 mois...",
    tags:["ODD 4","ODD 17","Jeunesse"], author:"Kouassi A.", time:"Il y a 3h", replies:24, likes:41
  },
  {
    id:2, title:"Rapport eau potable Atacora : les chiffres sont inquiétants",
    excerpt:"J'ai analysé les données INSAE 2023. Seulement 38% de la population de l'Atacora a accès à l'eau potable. Voici mes conclusions...",
    tags:["ODD 6","Données","Atacora"], author:"Reine F.", time:"Il y a 1j", replies:17, likes:89
  },
  {
    id:3, title:"Expérience : panel solaire pour notre école rurale à Kandi",
    excerpt:"Après 8 mois de démarche, notre école a enfin ses panneaux solaires. Je partage toutes les étapes pour que d'autres puissent faire pareil.",
    tags:["ODD 7","ODD 4","Témoignage"], author:"Ibrahim M.", time:"Il y a 2j", replies:35, likes:127
  },
  {
    id:4, title:"Pétition : interdire les plastiques non-recyclables au Bénin",
    excerpt:"Nous avons lancé une pétition nationale. Objectif : 50 000 signatures avant la session de l'Assemblée nationale en juin.",
    tags:["ODD 12","Plaidoyer","Plastique"], author:"Mariame T.", time:"Il y a 3j", replies:62, likes:203
  },
];

export const EVENTS = [
  {
    day:"15", month:"Juin", title:"Forum National ODD Bénin 2025",
    desc:"Rassemblement annuel des acteurs du développement durable. Présentations, ateliers et plénières.",
    type:"Conférence", location:"Cotonou, Palais des Congrès", icon:"🎤"
  },
  {
    day:"22", month:"Juin", title:"Hackathon Données & ODD",
    desc:"72h pour développer des solutions numériques innovantes au service des ODD. Ouvert aux 18-35 ans.",
    type:"Hackathon", location:"EPAC, Cotonou", icon:"💻"
  },
  {
    day:"05", month:"Jul.", title:"Action reboisement — Abomey-Calavi",
    desc:"Plantation collective de 1 000 arbres. Rejoins la communauté ODD Connect et contribue à l'ODD 15.",
    type:"Action terrain", location:"Abomey-Calavi", icon:"🌱"
  },
  {
    day:"18", month:"Jul.", title:"Atelier plaidoyer pour les femmes rurales",
    desc:"Formation aux outils de plaidoyer citoyen pour les femmes leaders des communes rurales.",
    type:"Formation", location:"Parakou, Centre culturel", icon:"📋"
  },
  {
    day:"30", month:"Jul.", title:"Journée Mondiale de l'Eau — Action nationale",
    desc:"Mobilisation citoyenne nationale pour alerter sur l'accès à l'eau potable dans les zones rurales.",
    type:"Mobilisation", location:"Tout le Bénin", icon:"💧"
  },
];

export const DOCS = [
  {
    icon:"📊", title:"Rapport ODD Bénin 2024",
    desc:"Rapport annuel de l'INSAE sur les progrès des 17 ODD. Données désagrégées par commune.",
    type:"Rapport officiel", date:"Mars 2024", pages:128
  },
  {
    icon:"💧", title:"Accès à l'eau — Zones rurales",
    desc:"Étude de terrain sur l'accès à l'eau potable dans les départements du Nord-Bénin.",
    type:"Étude", date:"Jan. 2024", pages:56
  },
  {
    icon:"🌱", title:"Guide reboisement communautaire",
    desc:"Manuel pratique pour organiser des actions de reboisement dans votre commune.",
    type:"Guide pratique", date:"Fév. 2024", pages:32
  },
  {
    icon:"⚡", title:"Énergies renouvelables au Bénin",
    desc:"État des lieux et perspectives de développement des énergies solaire et éolienne.",
    type:"Rapport", date:"Nov. 2023", pages:88
  },
  {
    icon:"👥", title:"Participation citoyenne & ODD",
    desc:"Comment mobiliser les communautés locales pour accélérer l'atteinte des ODD.",
    type:"Guide pratique", date:"Oct. 2023", pages:44
  },
  {
    icon:"📈", title:"Cartographie des inégalités",
    desc:"Analyse spatiale des inégalités de développement entre communes béninoises.",
    type:"Étude", date:"Sep. 2023", pages:72
  },
];

export const COMMUNES = [
  { name:"Cotonou", pct:78 }, { name:"Porto-Novo", pct:71 },
  { name:"Abomey-Calavi", pct:67 }, { name:"Parakou", pct:62 },
  { name:"Natitingou", pct:54 }, { name:"Lokossa", pct:48 },
];

export const MONTHS = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
export const SCORE_DATA = [54,55,56,57,58,58,59,59,60,60,61,61];
export const USERS_DATA = [320,410,490,600,720,850,980,1100,1250,1400,1620,1840];
