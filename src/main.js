import { renderShell } from './components/shell.js';
import {
  homePage, dashboardPage, plaidoyerPage, veillePage,
  cartePage, forumPage, bibliothequePage, calendrierPage, profilPage
} from './pages/pages.js';
import {
  authPage, campagneDetailPage, nouveauSignalementPage, oddDetailPage,
  notificationsPage, parametresPage, partenairesPage, aproposPage,
  adminPage, notFoundPage
} from './pages/new-pages.js';
import {
  recherchePage, forumDetailPage, docDetailPage, eventDetailPage,
  signalDetailPage, nouvelleCampagnePage
} from './pages/extra-pages.js';
import { MONTHS, SCORE_DATA, USERS_DATA, ODDS, SIGNALS } from './data/data.js';

window.currentPage = 'home';

const PAGES = {
  // Principales
  home:                  { title:'Accueil',                      sub:'Bienvenue sur ODD Connect Bénin',             fn: homePage },
  dashboard:             { title:'Dashboard ODD',                sub:'Suivi des 17 indicateurs · Bénin 2024',       fn: dashboardPage },
  plaidoyer:             { title:'Plaidoyer citoyen',            sub:'Campagnes actives et pétitions nationales',   fn: plaidoyerPage },
  veille:                { title:'Veille citoyenne',             sub:'Signalements et alertes en temps réel',       fn: veillePage },
  carte:                 { title:'Cartographie',                 sub:'Projets ODD et initiatives par commune',      fn: cartePage },
  forum:                 { title:'Forum communautaire',          sub:'Discussions et co-construction citoyenne',    fn: forumPage },
  bibliotheque:          { title:'Bibliothèque',                 sub:'Rapports, études et guides pratiques',        fn: bibliothequePage },
  calendrier:            { title:'Calendrier',                   sub:"Agenda des événements ODD au Bénin",          fn: calendrierPage },
  profil:                { title:'Mon profil',                   sub:'Compte, activité et paramètres',              fn: profilPage },
  // Auth & compte
  auth:                  { title:'Connexion',                    sub:"Accède à ton espace ODD Connect",             fn: authPage },
  notifications:         { title:'Notifications',                sub:'4 notifications non lues',                    fn: notificationsPage },
  parametres:            { title:'Paramètres',                   sub:'Compte, notifications et préférences',        fn: parametresPage },
  admin:                 { title:'Administration',               sub:'Modération et gestion de la plateforme',      fn: adminPage },
  // Pages détail
  'campagne-detail':     { title:'Détail campagne',              sub:'Eau pour tous au Nord-Bénin · ODD 6',         fn: campagneDetailPage },
  'nouvelle-campagne':   { title:'Lancer une campagne',          sub:'Mobilise des citoyens autour des ODD',        fn: nouvelleCampagnePage },
  'nouveau-signalement': { title:'Nouveau signalement',          sub:'Signale un problème dans ta commune',         fn: nouveauSignalementPage },
  'signal-detail':       { title:'Détail signalement',           sub:'Déversement industriel · Adjohoun',           fn: signalDetailPage },
  'odd-detail':          { title:'ODD 6 · Eau propre',           sub:'Indicateurs, objectifs et actions au Bénin', fn: oddDetailPage },
  'forum-detail':        { title:'Discussion',                   sub:'Impliquer les jeunes dans le suivi des ODD',  fn: forumDetailPage },
  'doc-detail':          { title:'Rapport ODD Bénin 2024',       sub:'INSAE · 128 pages · Mars 2024',              fn: docDetailPage },
  'event-detail':        { title:'Forum National ODD 2025',      sub:'15 Juin · Cotonou · 347 inscrits',           fn: eventDetailPage },
  // Découverte
  recherche:             { title:'Recherche',                    sub:'Rechercher sur toute la plateforme',          fn: recherchePage },
  partenaires:           { title:'Réseau partenaires',           sub:'78 organisations engagées pour les ODD',      fn: partenairesPage },
  apropos:               { title:'À propos',                     sub:'Notre mission, équipe et parcours',           fn: aproposPage },
  // 404
  '404':                 { title:'Page introuvable',             sub:"Cette page n'existe pas",                     fn: notFoundPage },
};

window.navigate = function(page) {
  if (!PAGES[page]) page = '404';
  window.currentPage = page;
  const p = PAGES[page];
  document.getElementById('app').innerHTML = renderShell(p.title, p.sub, p.fn());
  window.scrollTo(0, 0);
  setTimeout(() => afterRender(page), 60);
};

function afterRender(page) {
  if (page === 'dashboard') initDashboardCharts();
  if (page === 'veille')    initVeilleChart();
  if (page === 'carte')     initMap();
}

// ── Charts ───────────────────────────────────────────────────────
const charts = {};
function kill(id) { if (charts[id]) { charts[id].destroy(); delete charts[id]; } }

function initDashboardCharts() {
  kill('lineChart');
  const lc = document.getElementById('lineChart');
  if (lc) charts['lineChart'] = new Chart(lc, {
    type:'line',
    data:{ labels:MONTHS, datasets:[
      { data:SCORE_DATA, borderColor:'#1D9E75', backgroundColor:'rgba(29,158,117,.08)', tension:.4, fill:true, pointRadius:3, pointBackgroundColor:'#1D9E75', borderWidth:2 },
      { data:MONTHS.map((_,i)=>55+i), borderColor:'#185FA5', borderDash:[5,4], pointRadius:0, borderWidth:1.5, fill:false }
    ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8' } },
        y:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8', callback:v=>v+'%' }, min:50, max:70 }
      }
    }
  });

  kill('radarChart');
  const rc = document.getElementById('radarChart');
  if (rc) charts['radarChart'] = new Chart(rc, {
    type:'radar',
    data:{ labels:['Personnes','Planète','Prospérité','Paix'],
      datasets:[{ data:[68,54,61,72], borderColor:'#1D9E75', backgroundColor:'rgba(29,158,117,.15)', borderWidth:2, pointBackgroundColor:'#1D9E75', pointRadius:4 }]
    },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ r:{ min:0, max:100, ticks:{ display:false }, pointLabels:{ color:'#4A6960', font:{size:11} }, grid:{ color:'rgba(0,0,0,.06)' }, angleLines:{ color:'rgba(0,0,0,.06)' } } }
    }
  });

  kill('barChart');
  const bc = document.getElementById('barChart');
  if (bc) charts['barChart'] = new Chart(bc, {
    type:'bar',
    data:{ labels:MONTHS, datasets:[
      { data:USERS_DATA, backgroundColor:'rgba(29,158,117,.7)', borderRadius:3 },
      { data:[12,18,22,28,35,41,38,45,52,60,71,84].map(v=>v*8), backgroundColor:'rgba(24,95,165,.5)', borderRadius:3 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ font:{size:10}, color:'#9AB0A8' } },
        y:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8' } }
      }
    }
  });
}

function initVeilleChart() {
  kill('signalChart');
  const el = document.getElementById('signalChart');
  if (!el) return;
  charts['signalChart'] = new Chart(el, {
    type:'doughnut',
    data:{ labels:['ODD 6','ODD 7','ODD 13','ODD 14','ODD 15'],
      datasets:[{ data:[32,18,24,15,11], backgroundColor:['#26BDE2','#FCC30B','#3F7E44','#0A97D9','#56C02B'], borderWidth:0 }]
    },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ font:{size:11}, padding:8, color:'#4A6960' } } }
    }
  });
}

// ── Map ──────────────────────────────────────────────────────────
let mapInstance = null;
function initMap() {
  const el = document.getElementById('map-container');
  if (!el || !window.L) return;
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
  mapInstance = L.map('map-container').setView([9.3, 2.3], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© OpenStreetMap'
  }).addTo(mapInstance);
  [
    { lat:6.37,  lng:2.42, t:"Cotonou",       c:"#1D9E75", tx:"Projet eau potable" },
    { lat:6.5,   lng:2.62, t:"Porto-Novo",    c:"#1D9E75", tx:"Éducation rurale" },
    { lat:9.34,  lng:2.65, t:"Parakou",       c:"#D85A30", tx:"🚨 Pénurie eau" },
    { lat:10.3,  lng:1.38, t:"Natitingou",    c:"#E8A000", tx:"École sans électricité" },
    { lat:7.18,  lng:1.99, t:"Abomey",        c:"#185FA5", tx:"📅 Atelier ODD" },
    { lat:6.95,  lng:2.22, t:"Abomey-Calavi", c:"#1D9E75", tx:"Reboisement" },
    { lat:6.78,  lng:1.98, t:"Lokossa",       c:"#E8A000", tx:"Assainissement" },
    { lat:11.12, lng:2.88, t:"Kandi",         c:"#1D9E75", tx:"Énergie solaire" },
    { lat:9.75,  lng:1.61, t:"Djougou",       c:"#D85A30", tx:"🚨 Déforestation" },
  ].forEach(p => {
    L.marker([p.lat,p.lng], {
      icon: L.divIcon({ html:`<div style="width:14px;height:14px;border-radius:50%;background:${p.c};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`, className:'', iconSize:[14,14] })
    }).addTo(mapInstance).bindPopup(`<strong>${p.t}</strong><br><span style="font-size:12px;color:#666">${p.tx}</span>`);
  });
}

navigate('home');
