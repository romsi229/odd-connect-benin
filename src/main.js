import { renderShell } from './components/shell.js';
import {
  homePage, dashboardPage, plaidoyerPage, veillePage,
  cartePage, forumPage, bibliothequePage, calendrierPage, profilPage
} from './pages/pages.js';
import { MONTHS, SCORE_DATA, USERS_DATA, ODDS, SIGNALS } from './data/data.js';

// ── Router ────────────────────────────────────────────────────────────────
window.currentPage = 'home';

const PAGES = {
  home:        { title: 'Accueil',               sub: 'Bienvenue sur ODD Connect Bénin',              fn: homePage },
  dashboard:   { title: 'Dashboard ODD',          sub: 'Suivi des 17 indicateurs · Bénin 2024',        fn: dashboardPage },
  plaidoyer:   { title: 'Plaidoyer citoyen',      sub: 'Campagnes actives et pétitions nationales',    fn: plaidoyerPage },
  veille:      { title: 'Veille citoyenne',        sub: 'Signalements et alertes en temps réel',        fn: veillePage },
  carte:       { title: 'Cartographie',            sub: 'Projets ODD et initiatives par commune',       fn: cartePage },
  forum:       { title: 'Forum communautaire',     sub: 'Discussions et co-construction citoyenne',     fn: forumPage },
  bibliotheque:{ title: 'Bibliothèque',            sub: 'Rapports, études et guides pratiques',         fn: bibliothequePage },
  calendrier:  { title: 'Calendrier',              sub: 'Agenda des événements ODD au Bénin',           fn: calendrierPage },
  profil:      { title: 'Mon profil',              sub: 'Compte, activité et paramètres',               fn: profilPage },
};

window.navigate = function(page) {
  if (!PAGES[page]) page = 'home';
  window.currentPage = page;
  const p = PAGES[page];
  document.getElementById('app').innerHTML = renderShell(p.title, p.sub, p.fn());
  window.scrollTo(0,0);
  setTimeout(() => afterRender(page), 50);
};

function afterRender(page) {
  if (page === 'dashboard') initDashboardCharts();
  if (page === 'veille')    initVeilleChart();
  if (page === 'carte')     initMap();
}

// ── Charts ────────────────────────────────────────────────────────────────
const chartInstances = {};

function destroyChart(id) {
  if (chartInstances[id]) { chartInstances[id].destroy(); delete chartInstances[id]; }
}

function initDashboardCharts() {
  // Line chart
  destroyChart('lineChart');
  const lc = document.getElementById('lineChart');
  if (lc) chartInstances['lineChart'] = new Chart(lc, {
    type: 'line',
    data: {
      labels: MONTHS,
      datasets: [
        { label: 'Score ODD', data: SCORE_DATA,
          borderColor: '#1D9E75', backgroundColor: 'rgba(29,158,117,.08)',
          tension: .4, fill: true, pointRadius: 3, pointBackgroundColor: '#1D9E75', borderWidth: 2 },
        { label: 'Objectif', data: MONTHS.map((_,i)=>55+i),
          borderColor: '#185FA5', borderDash: [5,4], pointRadius: 0, borderWidth: 1.5, fill: false }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8' } },
        y:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8', callback:v=>v+'%' }, min:50, max:70 }
      }
    }
  });

  // Radar chart
  destroyChart('radarChart');
  const rc = document.getElementById('radarChart');
  if (rc) chartInstances['radarChart'] = new Chart(rc, {
    type: 'radar',
    data: {
      labels: ['Personnes','Planète','Prospérité','Paix'],
      datasets: [{ data:[68,54,61,72],
        borderColor:'#1D9E75', backgroundColor:'rgba(29,158,117,.15)',
        borderWidth:2, pointBackgroundColor:'#1D9E75', pointRadius:4 }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ r:{ min:0, max:100,
        ticks:{ display:false },
        pointLabels:{ color:'#4A6960', font:{size:11} },
        grid:{ color:'rgba(0,0,0,.06)' }, angleLines:{ color:'rgba(0,0,0,.06)' }
      }}
    }
  });

  // Bar chart
  destroyChart('barChart');
  const bc = document.getElementById('barChart');
  if (bc) chartInstances['barChart'] = new Chart(bc, {
    type: 'bar',
    data: {
      labels: MONTHS,
      datasets: [
        { label:'Utilisateurs', data: USERS_DATA, backgroundColor:'rgba(29,158,117,.7)', borderRadius:3 },
        { label:'Signalements', data:[12,18,22,28,35,41,38,45,52,60,71,84].map(v=>v*8), backgroundColor:'rgba(24,95,165,.5)', borderRadius:3 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ font:{size:10}, color:'#9AB0A8' } },
        y:{ grid:{ color:'rgba(0,0,0,.04)' }, ticks:{ font:{size:10}, color:'#9AB0A8' } }
      }
    }
  });
}

function initVeilleChart() {
  destroyChart('signalChart');
  const el = document.getElementById('signalChart');
  if (!el) return;
  const labels = ['ODD 6 · Eau','ODD 7 · Énergie','ODD 13 · Climat','ODD 14 · Aquatique','ODD 15 · Forêt'];
  chartInstances['signalChart'] = new Chart(el, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data:[32,18,24,15,11],
        backgroundColor:['#26BDE2','#FCC30B','#3F7E44','#0A97D9','#56C02B'],
        borderWidth:0 }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ font:{size:11}, padding:8, color:'#4A6960' } } }
    }
  });
}

// ── Map ───────────────────────────────────────────────────────────────────
let mapInstance = null;

function initMap() {
  const el = document.getElementById('map-container');
  if (!el || !window.L) return;
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }

  mapInstance = L.map('map-container').setView([9.3, 2.3], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapInstance);

  const points = [
    { lat:6.37, lng:2.42,  title:"Cotonou", type:"project",  color:"#1D9E75", text:"Projet eau potable" },
    { lat:6.5,  lng:2.62,  title:"Porto-Novo", type:"project", color:"#1D9E75", text:"Éducation rurale" },
    { lat:9.34, lng:2.65,  title:"Parakou", type:"signal",   color:"#D85A30", text:"🚨 Pénurie eau" },
    { lat:10.3, lng:1.38,  title:"Natitingou", type:"signal", color:"#E8A000", text:"École sans électricité" },
    { lat:7.18, lng:1.99,  title:"Abomey", type:"event",    color:"#185FA5", text:"📅 Atelier ODD" },
    { lat:6.95, lng:2.22,  title:"Abomey-Calavi", type:"project", color:"#1D9E75", text:"Reboisement" },
    { lat:6.78, lng:1.98,  title:"Lokossa", type:"signal",   color:"#E8A000", text:"Assainissement" },
    { lat:11.12, lng:2.88, title:"Kandi", type:"project",   color:"#1D9E75", text:"Énergie solaire" },
  ];

  points.forEach(p => {
    const icon = L.divIcon({
      html: `<div style="width:14px;height:14px;border-radius:50%;background:${p.color};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
      className: '', iconSize:[14,14]
    });
    L.marker([p.lat, p.lng], {icon}).addTo(mapInstance)
      .bindPopup(`<strong>${p.title}</strong><br><span style="font-size:12px;color:#666">${p.text}</span>`);
  });
}

// ── Boot ──────────────────────────────────────────────────────────────────
navigate('home');
