(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();function m(e,t,i){return["auth"].includes(window.currentPage)?`
    <div style="min-height:100vh;background:var(--off-white);padding:40px 20px;">
      <div style="text-align:center;margin-bottom:8px;">
        <button onclick="navigate('home')" style="background:none;border:none;cursor:pointer;font-size:12px;color:var(--text-light);">← Retour à l'accueil</button>
      </div>
      ${i}
    </div>`:`
  <div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <a class="logo-mark" href="#" onclick="navigate('home');return false;">
          <div class="logo-icon">🌍</div>
          <div class="logo-text">
            <strong>ODD Connect</strong>
            <span>Bénin</span>
          </div>
        </a>
      </div>

      <nav class="sidebar-nav">
        <span class="nav-section-label">Navigation</span>
        <button class="nav-item ${currentPage==="home"?"active":""}" onclick="navigate('home')">
          <span class="nav-icon">🏠</span> Accueil
        </button>
        <button class="nav-item ${currentPage==="dashboard"?"active":""}" onclick="navigate('dashboard')">
          <span class="nav-icon">📊</span> Dashboard ODD
        </button>
        <button class="nav-item ${currentPage==="plaidoyer"||currentPage==="campagne-detail"?"active":""}" onclick="navigate('plaidoyer')">
          <span class="nav-icon">📢</span> Plaidoyer
        </button>
        <button class="nav-item ${currentPage==="veille"||currentPage==="nouveau-signalement"?"active":""}" onclick="navigate('veille')">
          <span class="nav-icon">🔔</span> Veille citoyenne
          <span class="nav-badge">5</span>
        </button>
        <button class="nav-item ${currentPage==="carte"?"active":""}" onclick="navigate('carte')">
          <span class="nav-icon">🗺️</span> Cartographie
        </button>

        <span class="nav-section-label">Communauté</span>
        <button class="nav-item ${currentPage==="forum"?"active":""}" onclick="navigate('forum')">
          <span class="nav-icon">💬</span> Forum
        </button>
        <button class="nav-item ${currentPage==="bibliotheque"?"active":""}" onclick="navigate('bibliotheque')">
          <span class="nav-icon">📚</span> Bibliothèque
        </button>
        <button class="nav-item ${currentPage==="calendrier"?"active":""}" onclick="navigate('calendrier')">
          <span class="nav-icon">📅</span> Calendrier
        </button>
        <button class="nav-item ${currentPage==="partenaires"?"active":""}" onclick="navigate('partenaires')">
          <span class="nav-icon">🤝</span> Partenaires
        </button>

        <span class="nav-section-label">Compte</span>
        <button class="nav-item ${currentPage==="notifications"?"active":""}" onclick="navigate('notifications')" style="position:relative">
          <span class="nav-icon">🔔</span> Notifications
          <span class="nav-badge">4</span>
        </button>
        <button class="nav-item ${currentPage==="profil"?"active":""}" onclick="navigate('profil')">
          <span class="nav-icon">👤</span> Mon profil
        </button>
        <button class="nav-item ${currentPage==="parametres"?"active":""}" onclick="navigate('parametres')">
          <span class="nav-icon">⚙️</span> Paramètres
        </button>
        <button class="nav-item ${currentPage==="admin"?"active":""}" onclick="navigate('admin')">
          <span class="nav-icon">🛡️</span> Administration
        </button>

        <span class="nav-section-label">Info</span>
        <button class="nav-item ${currentPage==="apropos"?"active":""}" onclick="navigate('apropos')">
          <span class="nav-icon">ℹ️</span> À propos
        </button>
      </nav>

      <div class="sidebar-footer">
        <div class="user-chip" style="cursor:pointer" onclick="navigate('profil')">
          <div class="user-avatar">YK</div>
          <div class="user-info">
            <strong>Yao Kouassi</strong>
            <span>Citoyen actif</span>
          </div>
        </div>
      </div>
    </aside>

    <div class="main-content">
      <header class="topbar">
        <div class="topbar-left">
          <div>
            <div class="page-title">${e}</div>
            <div class="page-subtitle">${t}</div>
          </div>
        </div>
        <div class="topbar-right">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-light);">
            <span class="status-dot"></span> Données actualisées
          </div>
          <button class="btn btn-outline btn-sm" onclick="navigate('recherche')">🔍 Rechercher</button>
          <button class="btn btn-outline btn-sm" onclick="navigate('notifications')" style="position:relative">
            🔔
            <span style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;background:var(--coral);border-radius:50%;font-size:9px;color:white;display:flex;align-items:center;justify-content:center;font-weight:700">4</span>
          </button>
          <button class="btn btn-primary btn-sm" onclick="navigate('nouveau-signalement')">+ Signaler</button>
        </div>
      </header>

      <main class="page-body" id="page-body">
        ${i}
      </main>
    </div>
  </div>`}const p=[{n:1,label:"Pas de pauvreté",pct:65,color:"#E5243B"},{n:2,label:"Faim zéro",pct:58,color:"#DDA63A"},{n:3,label:"Bonne santé",pct:72,color:"#4C9F38"},{n:4,label:"Éducation de qualité",pct:70,color:"#C5192D"},{n:5,label:"Égalité des sexes",pct:61,color:"#FF3A21"},{n:6,label:"Eau propre",pct:48,color:"#26BDE2"},{n:7,label:"Énergie propre",pct:52,color:"#FCC30B"},{n:8,label:"Travail décent",pct:63,color:"#A21942"},{n:9,label:"Industrie",pct:55,color:"#FD6925"},{n:10,label:"Inégalités réduites",pct:55,color:"#DD1367"},{n:11,label:"Villes durables",pct:66,color:"#FD9D24"},{n:12,label:"Consommation durable",pct:59,color:"#BF8B2E"},{n:13,label:"Action climatique",pct:31,color:"#3F7E44"},{n:14,label:"Vie aquatique",pct:34,color:"#0A97D9"},{n:15,label:"Vie terrestre",pct:68,color:"#56C02B"},{n:16,label:"Paix & Justice",pct:74,color:"#00689D"},{n:17,label:"Partenariats",pct:62,color:"#19486A"}],v=[{id:1,title:"Eau pour tous au Nord-Bénin",desc:"Mobilisation pour l'accès à l'eau potable dans les communes de l'Atacora.",odd:6,oddLabel:"ODD 6",signatures:4820,goal:1e4,color:"#26BDE2",bg:"#EAF8FD",status:"active",days:18,tags:["Eau","Atacora"]},{id:2,title:"Énergies renouvelables pour les écoles",desc:"Campagne pour équiper 200 écoles rurales de panneaux solaires d'ici 2026.",odd:7,oddLabel:"ODD 7",signatures:2150,goal:5e3,color:"#FCC30B",bg:"#FFFBEA",status:"active",days:34,tags:["Énergie","Éducation"]},{id:3,title:"Stop déforestation côtière",desc:"Protéger les mangroves et forêts littorales du Bénin contre l'exploitation illégale.",odd:15,oddLabel:"ODD 15",signatures:6340,goal:8e3,color:"#56C02B",bg:"#EDFADF",status:"active",days:7,tags:["Forêt","Environnement"]},{id:4,title:"Parité dans les conseils communaux",desc:"Augmenter la représentation féminine à 40% dans toutes les communes du Bénin.",odd:5,oddLabel:"ODD 5",signatures:3100,goal:6e3,color:"#FF3A21",bg:"#FFF0EE",status:"active",days:45,tags:["Genre","Gouvernance"]}],u=[{id:1,severity:"high",odd:14,oddLabel:"ODD 14",oddColor:"#0A97D9",title:"Déversement industriel dans l'Ouémé",desc:"Des substances chimiques ont été déversées dans la rivière Ouémé. La zone de pêche artisanale est fortement impactée.",location:"Adjohoun, Ouémé",time:"Il y a 2h",status:"En cours",statusColor:"#E8A000"},{id:2,severity:"medium",odd:6,oddLabel:"ODD 6",oddColor:"#26BDE2",title:"Pénurie d'eau potable — 3 quartiers",desc:"Les pompes hydrauliques sont hors service depuis 10 jours. Environ 2 000 habitants n'ont plus accès à l'eau.",location:"Parakou, Borgou",time:"Il y a 5h",status:"Signalé",statusColor:"#D85A30"},{id:3,severity:"medium",odd:7,oddLabel:"ODD 7",oddColor:"#FCC30B",title:"École sans électricité depuis 3 semaines",desc:"L'école primaire de Natitingou-Centre est privée d'électricité. 400 élèves impactés pour les cours du soir.",location:"Natitingou, Atacora",time:"Il y a 1j",status:"Signalé",statusColor:"#D85A30"},{id:4,severity:"low",odd:15,oddLabel:"ODD 15",oddColor:"#56C02B",title:"Reboisement communautaire réalisé",desc:"500 arbres plantés par les jeunes de la commune d'Abomey-Calavi. Action initiée via la plateforme.",location:"Abomey-Calavi, Atlantique",time:"Il y a 2j",status:"Résolu",statusColor:"#1D9E75"},{id:5,severity:"high",odd:13,oddLabel:"ODD 13",oddColor:"#3F7E44",title:"Érosion côtière accélérée à Cotonou",desc:"La plage de Fidjrossè perd 3m par an. Plusieurs habitations menacées.",location:"Cotonou, Littoral",time:"Il y a 3j",status:"En cours",statusColor:"#E8A000"}],x=[{id:1,title:"Comment impliquer les jeunes dans le suivi des ODD localement ?",excerpt:"Dans ma commune de Bohicon, peu de jeunes connaissent les ODD. J'ai lancé un club scolaire, voici les résultats après 6 mois...",tags:["ODD 4","ODD 17","Jeunesse"],author:"Kouassi A.",time:"Il y a 3h",replies:24,likes:41},{id:2,title:"Rapport eau potable Atacora : les chiffres sont inquiétants",excerpt:"J'ai analysé les données INSAE 2023. Seulement 38% de la population de l'Atacora a accès à l'eau potable. Voici mes conclusions...",tags:["ODD 6","Données","Atacora"],author:"Reine F.",time:"Il y a 1j",replies:17,likes:89},{id:3,title:"Expérience : panel solaire pour notre école rurale à Kandi",excerpt:"Après 8 mois de démarche, notre école a enfin ses panneaux solaires. Je partage toutes les étapes pour que d'autres puissent faire pareil.",tags:["ODD 7","ODD 4","Témoignage"],author:"Ibrahim M.",time:"Il y a 2j",replies:35,likes:127},{id:4,title:"Pétition : interdire les plastiques non-recyclables au Bénin",excerpt:"Nous avons lancé une pétition nationale. Objectif : 50 000 signatures avant la session de l'Assemblée nationale en juin.",tags:["ODD 12","Plaidoyer","Plastique"],author:"Mariame T.",time:"Il y a 3j",replies:62,likes:203}],y=[{day:"15",month:"Juin",title:"Forum National ODD Bénin 2025",desc:"Rassemblement annuel des acteurs du développement durable. Présentations, ateliers et plénières.",type:"Conférence",location:"Cotonou, Palais des Congrès",icon:"🎤"},{day:"22",month:"Juin",title:"Hackathon Données & ODD",desc:"72h pour développer des solutions numériques innovantes au service des ODD. Ouvert aux 18-35 ans.",type:"Hackathon",location:"EPAC, Cotonou",icon:"💻"},{day:"05",month:"Jul.",title:"Action reboisement — Abomey-Calavi",desc:"Plantation collective de 1 000 arbres. Rejoins la communauté ODD Connect et contribue à l'ODD 15.",type:"Action terrain",location:"Abomey-Calavi",icon:"🌱"},{day:"18",month:"Jul.",title:"Atelier plaidoyer pour les femmes rurales",desc:"Formation aux outils de plaidoyer citoyen pour les femmes leaders des communes rurales.",type:"Formation",location:"Parakou, Centre culturel",icon:"📋"},{day:"30",month:"Jul.",title:"Journée Mondiale de l'Eau — Action nationale",desc:"Mobilisation citoyenne nationale pour alerter sur l'accès à l'eau potable dans les zones rurales.",type:"Mobilisation",location:"Tout le Bénin",icon:"💧"}],f=[{icon:"📊",title:"Rapport ODD Bénin 2024",desc:"Rapport annuel de l'INSAE sur les progrès des 17 ODD. Données désagrégées par commune.",type:"Rapport officiel",date:"Mars 2024",pages:128},{icon:"💧",title:"Accès à l'eau — Zones rurales",desc:"Étude de terrain sur l'accès à l'eau potable dans les départements du Nord-Bénin.",type:"Étude",date:"Jan. 2024",pages:56},{icon:"🌱",title:"Guide reboisement communautaire",desc:"Manuel pratique pour organiser des actions de reboisement dans votre commune.",type:"Guide pratique",date:"Fév. 2024",pages:32},{icon:"⚡",title:"Énergies renouvelables au Bénin",desc:"État des lieux et perspectives de développement des énergies solaire et éolienne.",type:"Rapport",date:"Nov. 2023",pages:88},{icon:"👥",title:"Participation citoyenne & ODD",desc:"Comment mobiliser les communautés locales pour accélérer l'atteinte des ODD.",type:"Guide pratique",date:"Oct. 2023",pages:44},{icon:"📈",title:"Cartographie des inégalités",desc:"Analyse spatiale des inégalités de développement entre communes béninoises.",type:"Étude",date:"Sep. 2023",pages:72}],g=[{name:"Cotonou",pct:78},{name:"Porto-Novo",pct:71},{name:"Abomey-Calavi",pct:67},{name:"Parakou",pct:62},{name:"Natitingou",pct:54},{name:"Lokossa",pct:48}],c=["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],h=[54,55,56,57,58,58,59,59,60,60,61,61],D=[320,410,490,600,720,850,980,1100,1250,1400,1620,1840];function w(){return`
  <div class="fade-up">
    <div class="hero">
      <div class="hero-badge">🟢 Plateforme nationale — Bénin</div>
      <h1 class="hero-title">Ensemble pour les<br>17 ODD au Bénin</h1>
      <p class="hero-sub">Rejoins des milliers de citoyens qui suivent les progrès, signalent les problèmes et plaident pour un Bénin durable.</p>
      <div class="hero-ctas">
        <button class="btn-hero-primary" onclick="navigate('dashboard')">📊 Voir le Dashboard</button>
        <button class="btn-hero-outline" onclick="navigate('plaidoyer')">📢 Rejoindre une campagne</button>
      </div>
    </div>

    <div class="stats-strip mb-24">
      <div class="stat-block">
        <div class="stat-val">12 400</div>
        <div class="stat-label">Citoyens actifs</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">34</div>
        <div class="stat-label">Campagnes en cours</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">127</div>
        <div class="stat-label">Signalements ouverts</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">61%</div>
        <div class="stat-label">Score ODD moyen</div>
      </div>
    </div>

    <div style="margin-bottom:8px;">
      <h2 style="font-family:var(--font-display);font-size:20px;color:var(--green-deep);margin-bottom:4px;">Les modules de la plateforme</h2>
      <p style="font-size:13px;color:var(--text-sub);margin-bottom:16px;">Explore toutes les fonctionnalités disponibles</p>
    </div>
    <div class="modules-grid mb-24">
      ${[{icon:"📊",name:"Dashboard ODD",desc:"Suivi des 17 indicateurs en temps réel",page:"dashboard",bg:"#E1F5EE",ic:"#0F6E56"},{icon:"📢",name:"Plaidoyer",desc:"Campagnes et pétitions nationales",page:"plaidoyer",bg:"#FFF8E1",ic:"#E8A000"},{icon:"🔔",name:"Veille citoyenne",desc:"Signalements géolocalisés",page:"veille",bg:"#FFF0EE",ic:"#D85A30"},{icon:"🗺️",name:"Cartographie",desc:"Carte interactive du Bénin",page:"carte",bg:"#EAF4FF",ic:"#185FA5"},{icon:"🤖",name:"IA & Data",desc:"Analyses et recommandations",page:"dashboard",bg:"#F0EEFF",ic:"#6C63CC"},{icon:"💬",name:"Forum",desc:"Discussions communautaires",page:"forum",bg:"#E1F5EE",ic:"#0F6E56"},{icon:"📚",name:"Bibliothèque",desc:"Rapports et ressources",page:"bibliotheque",bg:"#FFE9F3",ic:"#C94F7B"},{icon:"📅",name:"Calendrier",desc:"Agenda des événements ODD",page:"calendrier",bg:"#F5F5F5",ic:"#4A6960"},{icon:"🌍",name:"Partenaires",desc:"Réseau d'organisations",page:"home",bg:"#E1F5EE",ic:"#0A4D3C"}].map(t=>`
        <div class="module-card" onclick="navigate('${t.page}')">
          <div class="module-icon" style="background:${t.bg};">${t.icon}</div>
          <div class="module-name">${t.name}</div>
          <div class="module-desc">${t.desc}</div>
        </div>
      `).join("")}
    </div>
  </div>`}function k(){const e=p.map(a=>`
    <div class="odd-pill" style="background:${a.pct>=70?"#1D9E75":a.pct>=40?"#BA7517":"#A32D2D"};" title="${a.label} — ${a.pct}%">
      <div class="odd-num">ODD ${a.n}</div>
      <div class="odd-pct">${a.pct}%</div>
      <div class="odd-bar-bg"><div class="odd-bar-fill" style="width:${a.pct}%"></div></div>
    </div>`).join(""),t=g.map((a,o)=>`
    <div class="commune-row">
      <span class="commune-rank">${o+1}</span>
      <span class="commune-name">${a.name}</span>
      <div class="commune-track"><div class="commune-fill" style="width:${a.pct}%"></div></div>
      <span class="commune-pct">${a.pct}%</span>
    </div>
  `).join(""),i=u.slice(0,4).map(a=>`
    <div class="alert-item">
      <div class="alert-dot" style="background:${a.severity==="high"?"#D85A30":a.severity==="medium"?"#E8A000":"#1D9E75"}"></div>
      <div>
        <div class="alert-text">${a.title}</div>
        <div class="alert-meta">📍 ${a.location} · ${a.time}</div>
      </div>
    </div>
  `).join(""),s=p.filter(a=>a.pct<60).sort((a,o)=>a.pct-o.pct).slice(0,5).map(a=>{const o=a.pct>=40?"#E8A000":"#D85A30";return`
    <div class="prog-item">
      <div class="prog-top">
        <span class="prog-name">ODD ${a.n} · ${a.label}</span>
        <span class="prog-pct" style="color:${o}">${a.pct}%</span>
      </div>
      <div class="prog-track"><div class="prog-fill" style="width:${a.pct}%;background:${o}"></div></div>
    </div>`}).join("");return`
  <div class="fade-up">
    <div class="kpi-grid mb-24">
      <div class="kpi-card green">
        <div class="kpi-label">Score ODD moyen</div>
        <div class="kpi-value">61<span style="font-size:18px;color:var(--text-light)">%</span></div>
        <div class="kpi-delta up">↑ +4.2% vs 2023</div>
      </div>
      <div class="kpi-card amber">
        <div class="kpi-label">Citoyens actifs</div>
        <div class="kpi-value">12.4<span style="font-size:18px;color:var(--text-light)">k</span></div>
        <div class="kpi-delta up">↑ +1 840 ce mois</div>
      </div>
      <div class="kpi-card coral">
        <div class="kpi-label">Signalements ouverts</div>
        <div class="kpi-value">127</div>
        <div class="kpi-delta down">↓ 23 en attente</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-label">Pétitions signées</div>
        <div class="kpi-value">8.4<span style="font-size:18px;color:var(--text-light)">k</span></div>
        <div class="kpi-delta up">↑ +620 cette semaine</div>
      </div>
    </div>

    <div class="card mb-16">
      <div class="card-header">
        <span class="card-title">Progression des 17 ODD — Bénin 2024</span>
        <div style="display:flex;gap:10px;font-size:11px;">
          <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#1D9E75;display:inline-block"></span>≥70% En voie</span>
          <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#BA7517;display:inline-block"></span>40–69% Modéré</span>
          <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:2px;background:#A32D2D;display:inline-block"></span>&lt;40% Critique</span>
        </div>
      </div>
      <div class="card-body">
        <div class="odd-grid">${e}</div>
      </div>
    </div>

    <div class="grid-3 mb-16">
      <div class="card">
        <div class="card-header">
          <span class="card-title">Évolution du score ODD (12 mois)</span>
        </div>
        <div class="card-body">
          <div class="chart-wrapper" style="height:200px">
            <canvas id="lineChart"></canvas>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="card-title">Par pilier</span>
        </div>
        <div class="card-body">
          <div class="chart-wrapper" style="height:200px">
            <canvas id="radarChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-header">
          <span class="card-title">ODD prioritaires — En retard</span>
        </div>
        <div class="card-body">${s}</div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="card-title">Alertes récentes</span>
          <button class="btn btn-ghost btn-sm" onclick="navigate('veille')">Voir tout →</button>
        </div>
        <div class="card-body">${i}</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-header"><span class="card-title">Participation citoyenne</span></div>
        <div class="card-body">
          <div class="chart-wrapper" style="height:160px"><canvas id="barChart"></canvas></div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Classement communes</span></div>
        <div class="card-body">${t}</div>
      </div>
    </div>
  </div>`}function $(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Plaidoyer citoyen</h2>
        <p class="section-sub">Campagnes actives · Pétitions · Lettres aux décideurs</p>
      </div>
      <button class="btn btn-primary">+ Lancer une campagne</button>
    </div>

    <div class="stats-strip mb-24">
      <div class="stat-block">
        <div class="stat-val">34</div>
        <div class="stat-label">Campagnes actives</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">16 410</div>
        <div class="stat-label">Signatures totales</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">12</div>
        <div class="stat-label">Campagnes gagnées</div>
      </div>
      <div class="stat-block">
        <div class="stat-val">8</div>
        <div class="stat-label">Réponses officielles</div>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Toutes</button>
      <button class="btn btn-outline btn-sm">💧 Eau</button>
      <button class="btn btn-outline btn-sm">⚡ Énergie</button>
      <button class="btn btn-outline btn-sm">🌱 Environnement</button>
      <button class="btn btn-outline btn-sm">👥 Genre</button>
      <button class="btn btn-outline btn-sm">🎓 Éducation</button>
    </div>

    <div class="campaign-grid">${v.map(t=>{const i=Math.round(t.signatures/t.goal*100);return`
    <div class="campaign-card">
      <div class="camp-tag" style="background:${t.bg};color:${t.color}">${t.oddLabel} · ${t.tags[0]}</div>
      <div class="camp-title">${t.title}</div>
      <div class="camp-desc">${t.desc}</div>
      <div class="camp-progress-track">
        <div class="camp-progress-fill" style="width:${i}%;background:${t.color}"></div>
      </div>
      <div class="camp-meta">
        <span><strong>${t.signatures.toLocaleString("fr")}</strong> signatures sur ${t.goal.toLocaleString("fr")}</span>
        <span>⏱ ${t.days} jours restants</span>
      </div>
      <div class="camp-actions">
        <button class="btn btn-primary btn-sm" style="background:${t.color}">✍️ Signer</button>
        <button class="btn btn-outline btn-sm">📤 Partager</button>
        <button class="btn btn-ghost btn-sm">📋 Détails</button>
      </div>
    </div>`}).join("")}</div>
  </div>`}function A(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Veille citoyenne</h2>
        <p class="section-sub">Signalements géolocalisés · Alertes en temps réel</p>
      </div>
      <button class="btn btn-primary">🚨 Nouveau signalement</button>
    </div>

    <div class="kpi-grid mb-24">
      <div class="kpi-card coral">
        <div class="kpi-label">Signalements actifs</div>
        <div class="kpi-value">127</div>
        <div class="kpi-delta down">↑ +8 cette semaine</div>
      </div>
      <div class="kpi-card amber">
        <div class="kpi-label">En attente validation</div>
        <div class="kpi-value">23</div>
        <div class="kpi-delta down">À traiter</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-label">Résolus ce mois</div>
        <div class="kpi-value">41</div>
        <div class="kpi-delta up">↑ +12 vs mois dernier</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-label">Communes couvertes</div>
        <div class="kpi-value">38</div>
        <div class="kpi-delta up">Sur 77 communes</div>
      </div>
    </div>

    <div class="grid-3 mb-16">
      <div>
        <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm">Tous</button>
          <button class="btn btn-outline btn-sm">🔴 Urgent</button>
          <button class="btn btn-outline btn-sm">🟡 En cours</button>
          <button class="btn btn-outline btn-sm">🟢 Résolu</button>
        </div>
        <div class="signal-list">${u.map(t=>`
    <div class="signal-card">
      <div class="signal-sev" style="background:${t.severity==="high"?"#D85A30":t.severity==="medium"?"#E8A000":"#1D9E75"}"></div>
      <div style="flex:1">
        <div class="signal-odd-tag" style="background:${t.oddColor}22;color:${t.oddColor}">${t.oddLabel}</div>
        <div class="signal-title">${t.title}</div>
        <div class="signal-desc">${t.desc}</div>
        <div class="signal-footer">
          <span class="signal-loc">📍 ${t.location} · ${t.time}</span>
          <span class="signal-status" style="background:${t.statusColor}22;color:${t.statusColor}">${t.status}</span>
        </div>
      </div>
    </div>
  `).join("")}</div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Par catégorie ODD</span></div>
        <div class="card-body">
          <div class="chart-wrapper" style="height:240px"><canvas id="signalChart"></canvas></div>
        </div>
      </div>
    </div>
  </div>`}function C(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Cartographie interactive</h2>
        <p class="section-sub">Projets ODD, signalements et initiatives par commune</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-outline btn-sm">🔍 Filtrer</button>
        <button class="btn btn-outline btn-sm">📥 Exporter</button>
      </div>
    </div>

    <div class="grid-3 mb-16">
      <div>
        <div id="map-container"></div>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm">Projets ODD</button>
          <button class="btn btn-outline btn-sm">Signalements</button>
          <button class="btn btn-outline btn-sm">Initiatives</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Points sur la carte</span></div>
          <div class="card-body">
            <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
              <div style="display:flex;align-items:center;gap:8px;"><span style="width:12px;height:12px;border-radius:50%;background:#1D9E75;display:inline-block"></span> Projets actifs (47)</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="width:12px;height:12px;border-radius:50%;background:#D85A30;display:inline-block"></span> Signalements urgents (12)</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="width:12px;height:12px;border-radius:50%;background:#E8A000;display:inline-block"></span> En cours de traitement (23)</div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="width:12px;height:12px;border-radius:50%;background:#185FA5;display:inline-block"></span> Événements à venir (8)</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Communes actives</span></div>
          <div class="card-body">
            ${g.map((e,t)=>`
              <div class="commune-row">
                <span class="commune-rank">${t+1}</span>
                <span class="commune-name">${e.name}</span>
                <div class="commune-track"><div class="commune-fill" style="width:${e.pct}%"></div></div>
                <span class="commune-pct">${e.pct}%</span>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`}function z(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Forum communautaire</h2>
        <p class="section-sub">Discussions · Partage d'expériences · Co-construction</p>
      </div>
      <button class="btn btn-primary">✍️ Nouveau post</button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Tous les sujets</button>
      <button class="btn btn-outline btn-sm">🔥 Populaires</button>
      <button class="btn btn-outline btn-sm">🆕 Récents</button>
      <button class="btn btn-outline btn-sm">💧 ODD 6</button>
      <button class="btn btn-outline btn-sm">⚡ ODD 7</button>
      <button class="btn btn-outline btn-sm">🌱 ODD 15</button>
    </div>

    <div class="grid-3">
      <div class="forum-list">${x.map(t=>`
    <div class="forum-card">
      <div class="forum-tags">
        ${t.tags.map(i=>`<span class="forum-tag" style="background:var(--green-soft);color:var(--green-mid)">${i}</span>`).join("")}
      </div>
      <div class="forum-title">${t.title}</div>
      <div class="forum-excerpt">${t.excerpt}</div>
      <div class="forum-footer">
        <span>👤 ${t.author}</span>
        <span>⏱ ${t.time}</span>
        <span>💬 ${t.replies} réponses</span>
        <span>❤️ ${t.likes} likes</span>
      </div>
    </div>
  `).join("")}</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Membres actifs</span></div>
          <div class="card-body">
            ${[{name:"Mariame T.",posts:203,badge:"🏆"},{name:"Ibrahim M.",posts:127,badge:"⭐"},{name:"Reine F.",posts:89,badge:"🌱"},{name:"Kouassi A.",posts:41,badge:"💬"}].map(t=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:28px;height:28px;border-radius:50%;background:var(--green-soft);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--green-mid);">${t.name[0]}</div>
                <div style="flex:1;"><div style="font-size:12px;font-weight:600">${t.name}</div><div style="font-size:11px;color:var(--text-light)">${t.posts} contributions</div></div>
                <span>${t.badge}</span>
              </div>`).join("")}
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Thèmes populaires</span></div>
          <div class="card-body" style="display:flex;flex-wrap:wrap;gap:6px;">
            ${["#EauPotable","#ÉnergiesSolaires","#Reboisement","#ÉgalitéFemmes","#DéchetsPlastiques","#ClimatBénin","#JeunesODD"].map(t=>`<span style="background:var(--green-soft);color:var(--green-mid);border-radius:20px;padding:4px 10px;font-size:12px;cursor:pointer">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`}function E(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Bibliothèque documentaire</h2>
        <p class="section-sub">Rapports · Études · Guides pratiques · Ressources ODD</p>
      </div>
      <button class="btn btn-primary">+ Publier un document</button>
    </div>

    <div style="background:white;border-radius:var(--radius-md);border:1px solid var(--gray-200);padding:14px 16px;margin-bottom:20px;display:flex;gap:10px;align-items:center;">
      <span style="font-size:18px">🔍</span>
      <input type="text" placeholder="Rechercher dans la bibliothèque..." style="border:none;outline:none;flex:1;font-size:14px;font-family:var(--font-body);color:var(--text-main);">
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Tous</button>
      <button class="btn btn-outline btn-sm">📊 Rapports officiels</button>
      <button class="btn btn-outline btn-sm">🔬 Études</button>
      <button class="btn btn-outline btn-sm">📋 Guides pratiques</button>
      <button class="btn btn-outline btn-sm">💧 ODD 6</button>
      <button class="btn btn-outline btn-sm">🌱 ODD 15</button>
    </div>

    <div class="doc-grid">${f.map(t=>`
    <div class="doc-card">
      <div class="doc-type-icon">${t.icon}</div>
      <div class="doc-title">${t.title}</div>
      <div class="doc-desc">${t.desc}</div>
      <div class="doc-footer">
        <span style="background:var(--green-soft);color:var(--green-mid);border-radius:4px;padding:2px 8px;font-size:11px;font-weight:600">${t.type}</span>
        <span>${t.date} · ${t.pages}p</span>
      </div>
      <button class="btn btn-outline btn-sm" style="width:100%;margin-top:10px;justify-content:center;">📥 Télécharger</button>
    </div>
  `).join("")}</div>
  </div>`}function P(){return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Calendrier d'événements</h2>
        <p class="section-sub">Conférences · Ateliers · Actions de terrain · Mobilisations</p>
      </div>
      <button class="btn btn-primary">+ Créer un événement</button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Tous</button>
      <button class="btn btn-outline btn-sm">🎤 Conférences</button>
      <button class="btn btn-outline btn-sm">💻 Hackathons</button>
      <button class="btn btn-outline btn-sm">🌱 Actions terrain</button>
      <button class="btn btn-outline btn-sm">📋 Formations</button>
    </div>

    <div class="grid-3">
      <div class="event-list">${y.map(t=>`
    <div class="event-card">
      <div class="event-date-block">
        <div class="event-day">${t.day}</div>
        <div class="event-month">${t.month}</div>
      </div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="font-size:12px;background:var(--green-soft);color:var(--green-mid);border-radius:4px;padding:2px 8px;font-weight:600">${t.type}</span>
        </div>
        <div class="event-title">${t.icon} ${t.title}</div>
        <div class="event-desc">${t.desc}</div>
        <div class="event-meta">
          <span>📍 ${t.location}</span>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button class="btn btn-primary btn-sm">S'inscrire</button>
          <button class="btn btn-outline btn-sm">📤 Partager</button>
        </div>
      </div>
    </div>
  `).join("")}</div>
      <div class="card">
        <div class="card-header"><span class="card-title">Juin 2025</span></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:11px;">
            ${["L","M","M","J","V","S","D"].map(t=>`<div style="font-weight:600;color:var(--text-light);padding:4px">${t}</div>`).join("")}
            ${Array.from({length:30},(t,i)=>{const n=i+1;return`<div style="padding:6px 4px;border-radius:4px;cursor:pointer;${[15,22].includes(n)?"background:var(--green-soft);color:var(--green-mid);font-weight:600":""}">${n}</div>`}).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`}function j(){return`
  <div class="fade-up">
    <h2 class="section-title" style="margin-bottom:20px;">Mon profil</h2>

    <div class="grid-3">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-body" style="text-align:center;padding:28px;">
            <div style="width:72px;height:72px;border-radius:50%;background:var(--green-live);color:white;font-size:28px;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">YK</div>
            <div style="font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--green-deep);">Yao Kouassi</div>
            <div style="font-size:13px;color:var(--text-sub);margin-bottom:14px;">Citoyen actif · Cotonou</div>
            <span style="background:var(--green-soft);color:var(--green-mid);border-radius:20px;padding:4px 14px;font-size:12px;font-weight:600">⭐ Ambassadeur ODD</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Mes badges</span></div>
          <div class="card-body" style="display:flex;flex-wrap:wrap;gap:8px;">
            ${["🏆 Top contributeur","🌱 Reboiseur","💧 Défenseur eau","📊 Data citoyen","🎤 Plaideur"].map(e=>`<span style="background:var(--gray-100);border-radius:20px;padding:4px 10px;font-size:12px;">${e}</span>`).join("")}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Mon activité</span></div>
          <div class="card-body">
            <div class="stats-strip" style="border:none;grid-template-columns:repeat(2,1fr);gap:12px;">
              <div style="text-align:center;padding:16px;background:var(--green-pale);border-radius:var(--radius-sm);">
                <div class="stat-val" style="font-size:28px;">12</div>
                <div class="stat-label">Pétitions signées</div>
              </div>
              <div style="text-align:center;padding:16px;background:#FFF8E1;border-radius:var(--radius-sm);">
                <div class="stat-val" style="font-size:28px;">4</div>
                <div class="stat-label">Signalements</div>
              </div>
              <div style="text-align:center;padding:16px;background:#EAF4FF;border-radius:var(--radius-sm);">
                <div class="stat-val" style="font-size:28px;">28</div>
                <div class="stat-label">Posts forum</div>
              </div>
              <div style="text-align:center;padding:16px;background:#FFE9F3;border-radius:var(--radius-sm);">
                <div class="stat-val" style="font-size:28px;">3</div>
                <div class="stat-label">Événements</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Mes ODD favoris</span></div>
          <div class="card-body" style="display:flex;flex-wrap:wrap;gap:6px;">
            ${[6,7,13,15].map(e=>{const t=p.find(n=>n.n===e);return`<div style="background:${t.pct>=70?"#1D9E75":t.pct>=40?"#BA7517":"#A32D2D"};border-radius:6px;padding:6px 10px;color:white;font-size:12px;font-weight:700;">ODD ${e}</div>`}).join("")}
          </div>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Paramètres du compte</span></div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
            <button class="btn btn-outline btn-sm" style="justify-content:flex-start">✏️ Modifier mon profil</button>
            <button class="btn btn-outline btn-sm" style="justify-content:flex-start">🔔 Notifications</button>
            <button class="btn btn-outline btn-sm" style="justify-content:flex-start">🌍 Langue & région</button>
            <button class="btn btn-ghost btn-sm" style="justify-content:flex-start;color:var(--coral)">🚪 Se déconnecter</button>
          </div>
        </div>
      </div>
    </div>
  </div>`}function F(){return`
  <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;">
    <div style="width:100%;max-width:440px;">

      <div style="text-align:center;margin-bottom:32px;">
        <div style="width:52px;height:52px;border-radius:14px;background:var(--green-live);color:white;font-size:26px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">🌍</div>
        <h2 style="font-family:var(--font-display);font-size:26px;font-weight:700;color:var(--green-deep);margin-bottom:6px;">ODD Connect Bénin</h2>
        <p style="font-size:14px;color:var(--text-sub);">Rejoins des milliers de citoyens engagés</p>
      </div>

      <div style="display:flex;background:var(--gray-100);border-radius:var(--radius-md);padding:4px;margin-bottom:24px;" id="auth-tabs">
        <button onclick="switchAuthTab('login')" id="tab-login"
          style="flex:1;padding:8px;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;background:white;color:var(--green-deep);box-shadow:var(--shadow-sm);">
          Se connecter
        </button>
        <button onclick="switchAuthTab('register')" id="tab-register"
          style="flex:1;padding:8px;border:none;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;background:transparent;color:var(--text-sub);">
          S'inscrire
        </button>
      </div>

      <!-- LOGIN FORM -->
      <div id="form-login" class="card">
        <div class="card-body" style="padding:28px;">
          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Email</label>
            <input type="email" placeholder="votre@email.com"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main);">
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Mot de passe</label>
            <input type="password" placeholder="••••••••"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main);">
          </div>
          <button onclick="navigate('home')" class="btn btn-primary" style="width:100%;justify-content:center;padding:11px;">
            Se connecter →
          </button>
          <p style="text-align:center;font-size:12px;color:var(--text-light);margin-top:14px;">
            <a href="#" style="color:var(--green-mid);text-decoration:none;">Mot de passe oublié ?</a>
          </p>
          <div style="border-top:1px solid var(--gray-200);margin:18px 0;"></div>
          <button style="width:100%;padding:10px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);background:white;font-size:13px;font-family:var(--font-body);cursor:pointer;color:var(--text-sub);">
            🔑 Continuer avec Google
          </button>
        </div>
      </div>

      <!-- REGISTER FORM -->
      <div id="form-register" class="card" style="display:none;">
        <div class="card-body" style="padding:28px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Prénom</label>
              <input type="text" placeholder="Koffi"
                style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Nom</label>
              <input type="text" placeholder="Assogba"
                style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
            </div>
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Email</label>
            <input type="email" placeholder="votre@email.com"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Commune</label>
            <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main);background:white;">
              <option>Cotonou</option><option>Porto-Novo</option><option>Parakou</option>
              <option>Abomey-Calavi</option><option>Natitingou</option><option>Lokossa</option>
              <option>Autre commune...</option>
            </select>
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Profil</label>
            <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main);background:white;">
              <option>Citoyen</option><option>Organisation</option><option>Chercheur / Étudiant</option>
              <option>Journaliste</option><option>Institution publique</option>
            </select>
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Mot de passe</label>
            <input type="password" placeholder="Minimum 8 caractères"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
          </div>
          <button onclick="navigate('home')" class="btn btn-primary" style="width:100%;justify-content:center;padding:11px;">
            Créer mon compte →
          </button>
          <p style="text-align:center;font-size:12px;color:var(--text-light);margin-top:12px;">
            En créant un compte, tu acceptes nos <a href="#" style="color:var(--green-mid);text-decoration:none;">conditions d'utilisation</a>
          </p>
        </div>
      </div>

    </div>
  </div>

  <script>
  window.switchAuthTab = function(tab) {
    const fl = document.getElementById('form-login');
    const fr = document.getElementById('form-register');
    const tl = document.getElementById('tab-login');
    const tr = document.getElementById('tab-register');
    if (tab === 'login') {
      fl.style.display='block'; fr.style.display='none';
      tl.style.background='white'; tl.style.color='var(--green-deep)'; tl.style.fontWeight='600'; tl.style.boxShadow='var(--shadow-sm)';
      tr.style.background='transparent'; tr.style.color='var(--text-sub)'; tr.style.fontWeight='500'; tr.style.boxShadow='none';
    } else {
      fl.style.display='none'; fr.style.display='block';
      tr.style.background='white'; tr.style.color='var(--green-deep)'; tr.style.fontWeight='600'; tr.style.boxShadow='var(--shadow-sm)';
      tl.style.background='transparent'; tl.style.color='var(--text-sub)'; tl.style.fontWeight='500'; tl.style.boxShadow='none';
    }
  };
  <\/script>`}function O(){const e=v[0],t=Math.round(e.signatures/e.goal*100),i=[{date:"10 Mai 2025",title:"Réponse officielle du Ministère de l'Eau",text:"Le Ministère a confirmé l'inscription de 3 nouvelles forages dans le budget 2026 suite à notre pétition."},{date:"28 Avr. 2025",title:"Cap des 4 000 signatures franchi !",text:"Merci à tous ! Nous avons atteint 4 000 signatures. La pression monte sur les décideurs."},{date:"15 Avr. 2025",title:"Lancement officiel de la campagne",text:"La campagne Eau pour tous au Nord-Bénin est officiellement lancée avec le soutien de 12 organisations partenaires."}],n=[{init:"AK",name:"Amina Kola",lieu:"Natitingou",temps:"Il y a 2h"},{init:"FB",name:"Fidèle Boco",lieu:"Kandi",temps:"Il y a 3h"},{init:"RM",name:"Reine Monla",lieu:"Djougou",temps:"Il y a 5h"},{init:"IB",name:"Ibrahim Boni",lieu:"Tanguiéta",temps:"Il y a 6h"},{init:"AT",name:"Adélaïde Tobla",lieu:"Parakou",temps:"Il y a 8h"}];return`
  <div class="fade-up">
    <button onclick="navigate('plaidoyer')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour aux campagnes</button>

    <div class="grid-3 mb-16">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <!-- Header campagne -->
        <div class="card">
          <div class="card-body" style="padding:24px;">
            <div style="display:flex;gap:8px;margin-bottom:14px;">
              ${e.tags.map(s=>`<span style="background:${e.bg};color:${e.color};border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600">${s}</span>`).join("")}
              <span style="background:#E1F5EE;color:#0F6E56;border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600">🟢 Active</span>
            </div>
            <h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--green-deep);margin-bottom:10px;">${e.title}</h2>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;margin-bottom:20px;">
              Dans les communes de l'Atacora et de la Donga, plus de 320 000 personnes n'ont pas accès à l'eau potable. Cette campagne vise à interpeller le gouvernement béninois et les partenaires techniques pour financer la construction de 50 nouvelles infrastructures hydrauliques dans les zones les plus défavorisées.
            </p>
            <div style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-family:var(--font-display);font-size:28px;font-weight:700;color:${e.color}">${e.signatures.toLocaleString("fr")}</span>
              <span style="font-size:13px;color:var(--text-light)">sur ${e.goal.toLocaleString("fr")} objectif</span>
            </div>
            <div style="height:10px;background:var(--gray-100);border-radius:5px;margin-bottom:10px;">
              <div style="height:10px;border-radius:5px;background:${e.color};width:${t}%;transition:width .6s"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-light);margin-bottom:20px;">
              <span><strong style="color:var(--text-main)">${t}%</strong> de l'objectif</span>
              <span>⏱ <strong style="color:var(--text-main)">${e.days} jours</strong> restants</span>
            </div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;font-size:15px;">✍️ Signer cette pétition</button>
            <div style="display:flex;gap:8px;margin-top:10px;">
              <button class="btn btn-outline" style="flex:1;justify-content:center;">📤 Partager</button>
              <button class="btn btn-outline" style="flex:1;justify-content:center;">📧 Lettre décideur</button>
            </div>
          </div>
        </div>

        <!-- Porteurs -->
        <div class="card">
          <div class="card-header"><span class="card-title">Porteurs de la campagne</span></div>
          <div class="card-body">
            ${[{init:"OBE",name:"ONG Bénin Eau Vie",role:"Porteur principal"},{init:"UNI",name:"Université d'Abomey",role:"Partenaire académique"},{init:"WA",name:"WaterAid Bénin",role:"Partenaire technique"}].map(s=>`
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:36px;height:36px;border-radius:10px;background:var(--green-soft);color:var(--green-mid);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;">${s.init}</div>
                <div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--text-light)">${s.role}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Colonne droite -->
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Signataires récents -->
        <div class="card">
          <div class="card-header"><span class="card-title">Derniers signataires</span></div>
          <div class="card-body">
            ${n.map(s=>`
              <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:30px;height:30px;border-radius:50%;background:var(--green-soft);color:var(--green-mid);font-size:11px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.init}</div>
                <div style="flex:1"><div style="font-size:12.5px;font-weight:500">${s.name}</div><div style="font-size:11px;color:var(--text-light)">📍 ${s.lieu}</div></div>
                <span style="font-size:11px;color:var(--text-light)">${s.temps}</span>
              </div>`).join("")}
            <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px;justify-content:center;">Voir tous les signataires</button>
          </div>
        </div>

        <!-- Mises à jour -->
        <div class="card">
          <div class="card-header"><span class="card-title">Mises à jour</span></div>
          <div class="card-body">
            ${i.map((s,a)=>`
              <div style="padding:10px 0;border-bottom:${a<i.length-1?"1px solid var(--gray-100)":"none"}">
                <div style="font-size:11px;color:var(--text-light);margin-bottom:3px">${s.date}</div>
                <div style="font-size:13px;font-weight:600;margin-bottom:4px">${s.title}</div>
                <div style="font-size:12px;color:var(--text-sub);line-height:1.5">${s.text}</div>
              </div>`).join("")}
          </div>
        </div>

        <!-- Impact -->
        <div class="card" style="background:var(--green-pale);border-color:var(--green-soft)">
          <div class="card-body" style="text-align:center;padding:20px;">
            <div style="font-size:28px;margin-bottom:6px">💧</div>
            <div style="font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--green-deep)">320 000</div>
            <div style="font-size:12px;color:var(--green-mid);margin-bottom:12px">personnes concernées</div>
            <div style="font-size:12px;color:var(--text-sub);line-height:1.6">Ta signature contribue à garantir l'accès à l'eau pour les populations du Nord-Bénin.</div>
          </div>
        </div>
      </div>
    </div>
  </div>`}function B(){return`
  <div class="fade-up">
    <button onclick="navigate('veille')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour à la veille</button>

    <div style="max-width:700px;">
      <h2 class="section-title" style="margin-bottom:6px;">Nouveau signalement</h2>
      <p style="font-size:14px;color:var(--text-sub);margin-bottom:24px;">Signale un problème environnemental, social ou infrastructurel dans ta commune.</p>

      <div class="card">
        <div class="card-body" style="padding:28px;display:flex;flex-direction:column;gap:20px;">

          <!-- Titre -->
          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Titre du signalement *</label>
            <input type="text" placeholder="Ex: Déversement de déchets près du marché central"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
          </div>

          <!-- ODD concerné -->
          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px;">ODD concerné *</label>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;" id="odd-selector">
              ${[{n:6,label:"💧 Eau propre",color:"#26BDE2"},{n:7,label:"⚡ Énergie",color:"#FCC30B"},{n:11,label:"🏘️ Villes",color:"#FD9D24"},{n:13,label:"🌡️ Climat",color:"#3F7E44"},{n:14,label:"🐟 Mer",color:"#0A97D9"},{n:15,label:"🌿 Forêts",color:"#56C02B"},{n:3,label:"❤️ Santé",color:"#4C9F38"},{n:12,label:"♻️ Déchets",color:"#BF8B2E"}].map(e=>`
                <button onclick="selectODD(this,'${e.color}')"
                  style="padding:8px 6px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:12px;font-weight:500;cursor:pointer;background:white;color:var(--text-main);transition:all .2s;text-align:center;">
                  ${e.label}
                </button>`).join("")}
            </div>
          </div>

          <!-- Description -->
          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Description détaillée *</label>
            <textarea rows="4" placeholder="Décris le problème en détail : quoi, où, depuis quand, qui est impacté..."
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;resize:vertical;"></textarea>
          </div>

          <!-- Localisation -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Commune *</label>
              <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;background:white;color:var(--text-main);">
                <option value="">Sélectionner...</option>
                <option>Cotonou</option><option>Porto-Novo</option><option>Parakou</option>
                <option>Abomey-Calavi</option><option>Natitingou</option><option>Lokossa</option>
                <option>Kandi</option><option>Abomey</option><option>Bohicon</option>
              </select>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Quartier / Arrondissement</label>
              <input type="text" placeholder="Ex: Akpakpa, Cadjehoun..."
                style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
            </div>
          </div>

          <!-- Niveau d'urgence -->
          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px;">Niveau d'urgence *</label>
            <div style="display:flex;gap:10px;">
              ${[{val:"low",label:"🟢 Faible",desc:"Peut attendre"},{val:"medium",label:"🟡 Modéré",desc:"À traiter sous 48h"},{val:"high",label:"🔴 Urgent",desc:"Intervention rapide nécessaire"}].map(e=>`
                <label style="flex:1;border:1px solid var(--gray-200);border-radius:var(--radius-sm);padding:10px;cursor:pointer;text-align:center;">
                  <input type="radio" name="urgence" value="${e.val}" style="display:none">
                  <div style="font-size:13px;font-weight:600;margin-bottom:2px">${e.label}</div>
                  <div style="font-size:11px;color:var(--text-light)">${e.desc}</div>
                </label>`).join("")}
            </div>
          </div>

          <!-- Upload photos -->
          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px;">Photos / Vidéos (optionnel)</label>
            <div style="border:2px dashed var(--gray-200);border-radius:var(--radius-sm);padding:24px;text-align:center;cursor:pointer;background:var(--gray-100);">
              <div style="font-size:28px;margin-bottom:8px">📷</div>
              <div style="font-size:13px;font-weight:600;color:var(--text-sub);margin-bottom:4px">Glisse tes fichiers ici</div>
              <div style="font-size:12px;color:var(--text-light)">PNG, JPG, MP4 — Max 10 Mo</div>
              <button class="btn btn-outline btn-sm" style="margin-top:10px">Parcourir</button>
            </div>
          </div>

          <!-- Anonymat -->
          <div style="display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--gray-100);border-radius:var(--radius-sm);">
            <input type="checkbox" id="anon" style="width:16px;height:16px;cursor:pointer">
            <label for="anon" style="font-size:13px;color:var(--text-sub);cursor:pointer">Signaler anonymement (ton nom ne sera pas affiché publiquement)</label>
          </div>

          <!-- Actions -->
          <div style="display:flex;gap:10px;padding-top:8px;border-top:1px solid var(--gray-100);">
            <button onclick="navigate('veille')" class="btn btn-outline" style="flex:1;justify-content:center;">Annuler</button>
            <button onclick="navigate('veille')" class="btn btn-primary" style="flex:2;justify-content:center;padding:11px;">🚨 Soumettre le signalement</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
  window.selectODD = function(btn, color) {
    document.querySelectorAll('#odd-selector button').forEach(b => {
      b.style.background='white'; b.style.color='var(--text-main)'; b.style.borderColor='var(--gray-200)';
    });
    btn.style.background = color+'22';
    btn.style.color = color;
    btn.style.borderColor = color;
  };
  <\/script>`}function S(){return`
  <div class="fade-up">
    <button onclick="navigate('dashboard')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour au dashboard</button>

    <!-- Hero ODD -->
    <div style="background:linear-gradient(135deg,#0D2137,#0A4D3C);border-radius:var(--radius-xl);padding:36px 40px;margin-bottom:24px;display:flex;align-items:center;gap:32px;">
      <div style="width:80px;height:80px;border-radius:18px;background:#26BDE2;display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0">💧</div>
      <div style="flex:1">
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:4px;letter-spacing:.1em">ODD 6 · OBJECTIF MONDIAL</div>
        <h2 style="font-family:var(--font-display);font-size:28px;font-weight:700;color:white;margin-bottom:6px">Eau propre et assainissement</h2>
        <p style="font-size:14px;color:rgba(255,255,255,.65);line-height:1.6;max-width:600px">Garantir l'accès de tous à des services d'alimentation en eau et d'assainissement gérés de façon durable.</p>
      </div>
      <div style="text-align:center;flex-shrink:0">
        <div style="font-family:var(--font-display);font-size:56px;font-weight:700;color:#26BDE2;line-height:1">48<span style="font-size:28px">%</span></div>
        <div style="font-size:12px;color:rgba(255,255,255,.5)">Score Bénin 2024</div>
        <div style="background:#E8A00022;border:1px solid #E8A00044;border-radius:20px;padding:4px 12px;font-size:12px;color:#E8A000;margin-top:8px">🟡 Progrès modéré</div>
      </div>
    </div>

    <div class="grid-3 mb-16">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Indicateurs -->
        <div class="card">
          <div class="card-header"><span class="card-title">Indicateurs clés — Bénin 2024</span></div>
          <div class="card-body">
            ${[{label:"% population accès eau potable",val:"52%",trend:"▲ +3%",color:"#1D9E75"},{label:"% ménages eau courante domicile",val:"24%",trend:"▲ +1.5%",color:"#1D9E75"},{label:"Délai moyen accès point d'eau",val:"38 min",trend:"▼ -5 min",color:"#1D9E75"},{label:"Communes avec eau traitée",val:"28 / 77",trend:"▲ +4",color:"#1D9E75"},{label:"Budget gouvernemental alloué",val:"12.4 Md FCFA",trend:"▲ +8%",color:"#1D9E75"},{label:"Puits fonctionnels recensés",val:"4 820",trend:"▼ -120",color:"#E8A000"}].map(t=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:12.5px;color:var(--text-sub);flex:1;padding-right:12px">${t.label}</span>
                <div style="text-align:right">
                  <div style="font-size:14px;font-weight:700;color:var(--green-deep)">${t.val}</div>
                  <div style="font-size:11px;color:${t.color}">${t.trend}</div>
                </div>
              </div>`).join("")}
          </div>
        </div>

        <!-- Objectif 2030 -->
        <div class="card" style="background:var(--green-pale);border-color:var(--green-soft);">
          <div class="card-body">
            <div style="font-size:12px;font-weight:600;color:var(--green-mid);margin-bottom:10px">🎯 OBJECTIF 2030</div>
            <p style="font-size:13px;color:var(--green-deep);line-height:1.6">Accès universel et équitable à l'eau potable et à l'assainissement pour tous les béninois, avec élimination des inégalités entre zones rurales et urbaines.</p>
            <div style="margin-top:14px">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px">
                <span style="color:var(--text-sub)">Progrès vers l'objectif</span>
                <span style="font-weight:600;color:var(--green-mid)">48% / 100%</span>
              </div>
              <div style="height:8px;background:var(--green-soft);border-radius:4px">
                <div style="height:8px;border-radius:4px;background:var(--green-live);width:48%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne droite -->
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Évolution par région -->
        <div class="card">
          <div class="card-header"><span class="card-title">Accès eau par département</span></div>
          <div class="card-body">
            ${[{dep:"Littoral",val:89},{dep:"Atlantique",val:71},{dep:"Ouémé",val:64},{dep:"Borgou",val:48},{dep:"Zou",val:44},{dep:"Atacora",val:31},{dep:"Alibori",val:28},{dep:"Donga",val:35}].map(t=>`
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                <span style="font-size:12px;color:var(--text-main);width:80px;flex-shrink:0">${t.dep}</span>
                <div style="flex:1;height:6px;background:var(--gray-100);border-radius:3px">
                  <div style="height:6px;border-radius:3px;background:${t.val>=60?"#1D9E75":t.val>=40?"#E8A000":"#D85A30"};width:${t.val}%"></div>
                </div>
                <span style="font-size:12px;font-weight:600;width:32px;text-align:right">${t.val}%</span>
              </div>`).join("")}
          </div>
        </div>

        <!-- Actions liées -->
        <div class="card">
          <div class="card-header"><span class="card-title">Campagnes liées</span></div>
          <div class="card-body">
            ${v.filter(t=>t.odd===6||t.odd===14).map(t=>`
              <div onclick="navigate('campagne-detail')" style="padding:10px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);cursor:pointer;margin-bottom:8px;background:white;transition:all .2s"
                onmouseover="this.style.borderColor='#26BDE2'" onmouseout="this.style.borderColor='var(--gray-200)'">
                <div style="font-size:12.5px;font-weight:600;margin-bottom:3px">${t.title}</div>
                <div style="font-size:11px;color:var(--text-light)">${t.signatures.toLocaleString("fr")} signatures · ${t.days} jours restants</div>
              </div>`).join("")}
            <button onclick="navigate('plaidoyer')" class="btn btn-outline btn-sm" style="width:100%;justify-content:center;margin-top:4px">Voir toutes les campagnes ODD 6</button>
          </div>
        </div>
      </div>
    </div>
  </div>`}function N(){const e=[{icon:"✍️",type:"Pétition",title:"Ta signature a été confirmée",sub:"Campagne : Eau pour tous au Nord-Bénin",time:"Il y a 2h",unread:!0,color:"#26BDE2"},{icon:"🚨",type:"Alerte",title:"Nouveau signalement dans ta commune",sub:"Déversement industriel · Cotonou, Littoral",time:"Il y a 3h",unread:!0,color:"#D85A30"},{icon:"💬",type:"Forum",title:"Réponse à ton post",sub:"Ibrahim M. a répondu à « Comment impliquer les jeunes... »",time:"Il y a 5h",unread:!0,color:"#6C63CC"},{icon:"🎉",type:"Badge",title:"Nouveau badge obtenu !",sub:"Tu as reçu le badge « Défenseur de l'eau »",time:"Il y a 1j",unread:!0,color:"#E8A000"},{icon:"📅",type:"Événement",title:"Rappel : Forum National ODD dans 5 jours",sub:"15 Juin · Cotonou, Palais des Congrès",time:"Il y a 1j",unread:!1,color:"#1D9E75"},{icon:"📊",type:"Dashboard",title:"Mise à jour des indicateurs ODD",sub:"Les données INSAE du T1 2025 sont disponibles",time:"Il y a 2j",unread:!1,color:"#185FA5"},{icon:"📢",type:"Campagne",title:"La campagne Eau progresse !",sub:"4 800 signatures — 96% de l'objectif atteint",time:"Il y a 3j",unread:!1,color:"#26BDE2"},{icon:"✅",type:"Signalement",title:"Ton signalement a été résolu",sub:"Reboisement Abomey-Calavi · Résolu par la mairie",time:"Il y a 5j",unread:!1,color:"#1D9E75"}];return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Notifications</h2>
        <p style="font-size:13px;color:var(--text-sub)">4 non lues</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-outline btn-sm">Tout marquer lu</button>
        <button class="btn btn-ghost btn-sm" onclick="navigate('parametres')">⚙️ Paramètres</button>
      </div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Toutes</button>
      <button class="btn btn-outline btn-sm">Non lues (4)</button>
      <button class="btn btn-outline btn-sm">✍️ Pétitions</button>
      <button class="btn btn-outline btn-sm">🚨 Alertes</button>
      <button class="btn btn-outline btn-sm">💬 Forum</button>
      <button class="btn btn-outline btn-sm">📅 Événements</button>
    </div>

    <div class="card">
      <div class="card-body" style="padding:0;">
        ${e.map((t,i)=>`
          <div style="display:flex;align-items:flex-start;gap:14px;padding:16px 20px;border-bottom:${i<e.length-1?"1px solid var(--gray-100)":"none"};background:${t.unread?"var(--green-pale)":"white"};cursor:pointer;transition:background .2s"
            onmouseover="this.style.background='${t.unread?"#e0f5ec":"var(--gray-100)"}'" onmouseout="this.style.background='${t.unread?"var(--green-pale)":"white"}'">
            <div style="width:40px;height:40px;border-radius:10px;background:${t.color}22;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${t.icon}</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
                <span style="font-size:11px;font-weight:600;color:${t.color};background:${t.color}18;border-radius:4px;padding:1px 7px">${t.type}</span>
                ${t.unread?'<span style="width:7px;height:7px;border-radius:50%;background:var(--green-live);display:inline-block"></span>':""}
              </div>
              <div style="font-size:13.5px;font-weight:${t.unread?"600":"400"};color:var(--text-main);margin-bottom:2px">${t.title}</div>
              <div style="font-size:12px;color:var(--text-sub)">${t.sub}</div>
            </div>
            <div style="font-size:11px;color:var(--text-light);flex-shrink:0;margin-top:2px">${t.time}</div>
          </div>`).join("")}
      </div>
    </div>
  </div>`}function M(){return`
  <div class="fade-up">
    <h2 class="section-title" style="margin-bottom:24px;">Paramètres</h2>

    <div style="display:grid;grid-template-columns:220px 1fr;gap:20px;">
      <!-- Sidebar paramètres -->
      <div class="card" style="height:fit-content;">
        <div class="card-body" style="padding:10px;">
          ${[{id:"compte",label:"👤 Compte & Profil"},{id:"notifs",label:"🔔 Notifications"},{id:"confidentialite",label:"🔒 Confidentialité"},{id:"langue",label:"🌍 Langue & Région"},{id:"apparence",label:"🎨 Apparence"}].map((t,i)=>`
            <button onclick="showSection('${t.id}')" id="sec-btn-${t.id}"
              style="width:100%;text-align:left;padding:10px 12px;border:none;border-radius:var(--radius-sm);font-size:13px;cursor:pointer;font-family:var(--font-body);margin-bottom:2px;transition:all .2s;
              background:${i===0?"var(--green-soft)":"transparent"};color:${i===0?"var(--green-mid)":"var(--text-main)"};font-weight:${i===0?"600":"400"}">
              ${t.label}
            </button>`).join("")}
          <div style="border-top:1px solid var(--gray-200);margin:10px 0;"></div>
          <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:flex-start;color:var(--coral)">🚪 Se déconnecter</button>
        </div>
      </div>

      <!-- Contenu paramètres -->
      <div>
        <!-- COMPTE -->
        <div id="sec-compte" class="card">
          <div class="card-header" style="padding-bottom:16px;border-bottom:1px solid var(--gray-100);">
            <span class="card-title" style="font-size:16px;">Compte & Profil</span>
          </div>
          <div class="card-body" style="padding:24px;display:flex;flex-direction:column;gap:18px;">
            <div style="display:flex;align-items:center;gap:16px;padding:16px;background:var(--gray-100);border-radius:var(--radius-md);">
              <div style="width:56px;height:56px;border-radius:50%;background:var(--green-live);color:white;font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;">YK</div>
              <div style="flex:1">
                <div style="font-size:15px;font-weight:600">Yao Kouassi</div>
                <div style="font-size:13px;color:var(--text-sub)">yao.kouassi@email.com · Cotonou</div>
              </div>
              <button class="btn btn-outline btn-sm">Changer photo</button>
            </div>
            ${[{label:"Prénom",val:"Yao",type:"text"},{label:"Nom",val:"Kouassi",type:"text"},{label:"Email",val:"yao.kouassi@email.com",type:"email"},{label:"Commune",val:"Cotonou",type:"text"},{label:"Téléphone",val:"+229 97 XX XX XX",type:"tel"}].map(t=>`
              <div>
                <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">${t.label}</label>
                <input type="${t.type}" value="${t.val}"
                  style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main)">
              </div>`).join("")}
            <div style="display:flex;gap:10px;">
              <button class="btn btn-primary">Sauvegarder</button>
              <button class="btn btn-outline">Annuler</button>
            </div>
          </div>
        </div>

        <!-- NOTIFS (caché initialement) -->
        <div id="sec-notifs" class="card" style="display:none;">
          <div class="card-header" style="padding-bottom:16px;border-bottom:1px solid var(--gray-100);">
            <span class="card-title" style="font-size:16px;">Notifications</span>
          </div>
          <div class="card-body" style="padding:24px;">
            ${[{label:"Nouvelles campagnes de plaidoyer",detail:"Quand une campagne est lancée dans ta commune"},{label:"Signalements dans ta zone",detail:"Alertes géolocalisées près de chez toi"},{label:"Réponses à tes posts forum",detail:"Quand quelqu'un répond à ta discussion"},{label:"Mises à jour des pétitions signées",detail:"Progression et résultats de tes pétitions"},{label:"Événements à venir",detail:"Rappels 24h avant les événements inscrits"},{label:"Nouveaux documents ODD",detail:"Quand un rapport ou guide est publié"},{label:"Newsletter mensuelle",detail:"Résumé mensuel des activités ODD Bénin"}].map((t,i)=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:${i<6?"1px solid var(--gray-100)":"none"}">
                <div>
                  <div style="font-size:13.5px;font-weight:500;margin-bottom:2px">${t.label}</div>
                  <div style="font-size:12px;color:var(--text-light)">${t.detail}</div>
                </div>
                <label style="position:relative;width:40px;height:22px;cursor:pointer;flex-shrink:0">
                  <input type="checkbox" ${i<5?"checked":""} style="display:none" class="toggle-input">
                  <span style="position:absolute;inset:0;border-radius:11px;background:${i<5?"var(--green-live)":"var(--gray-200)"};transition:.2s"></span>
                  <span style="position:absolute;top:3px;left:${i<5?"21":"3"}px;width:16px;height:16px;border-radius:50%;background:white;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)"></span>
                </label>
              </div>`).join("")}
          </div>
        </div>

        <!-- CONFIDENTIALITE (caché) -->
        <div id="sec-confidentialite" class="card" style="display:none;">
          <div class="card-header" style="padding-bottom:16px;border-bottom:1px solid var(--gray-100);">
            <span class="card-title" style="font-size:16px;">Confidentialité & Sécurité</span>
          </div>
          <div class="card-body" style="padding:24px;display:flex;flex-direction:column;gap:16px;">
            <div style="padding:16px;border:1px solid var(--gray-200);border-radius:var(--radius-md);">
              <div style="font-size:14px;font-weight:600;margin-bottom:4px">Visibilité du profil</div>
              <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">Qui peut voir ton profil et tes contributions ?</div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                ${[{v:"public",l:"🌍 Public — Visible par tous"},{v:"members",l:"👥 Membres — Visible par les inscrits"},{v:"private",l:"🔒 Privé — Visible uniquement par toi"}].map((t,i)=>`
                  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;">
                    <input type="radio" name="visibility" value="${t.v}" ${i===0?"checked":""} style="accent-color:var(--green-live)"> ${t.l}
                  </label>`).join("")}
              </div>
            </div>
            <div style="padding:16px;border:1px solid var(--gray-200);border-radius:var(--radius-md);">
              <div style="font-size:14px;font-weight:600;margin-bottom:4px">Double authentification</div>
              <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">Sécurise ton compte avec une vérification SMS</div>
              <button class="btn btn-outline btn-sm">Activer la 2FA</button>
            </div>
            <div style="padding:16px;border:1px solid #FFE0DC;border-radius:var(--radius-md);background:#FFF8F7;">
              <div style="font-size:14px;font-weight:600;color:var(--coral);margin-bottom:4px">Zone danger</div>
              <div style="font-size:13px;color:var(--text-sub);margin-bottom:12px">Ces actions sont irréversibles.</div>
              <div style="display:flex;gap:8px;">
                <button class="btn btn-sm" style="background:transparent;border:1px solid var(--coral);color:var(--coral);padding:6px 14px;border-radius:var(--radius-sm);cursor:pointer;font-size:12px">Télécharger mes données</button>
                <button class="btn btn-sm" style="background:var(--coral);color:white;padding:6px 14px;border-radius:var(--radius-sm);cursor:pointer;font-size:12px;border:none">Supprimer mon compte</button>
              </div>
            </div>
          </div>
        </div>

        <!-- LANGUE (caché) -->
        <div id="sec-langue" class="card" style="display:none;">
          <div class="card-header" style="padding-bottom:16px;border-bottom:1px solid var(--gray-100);">
            <span class="card-title" style="font-size:16px;">Langue & Région</span>
          </div>
          <div class="card-body" style="padding:24px;display:flex;flex-direction:column;gap:16px;">
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px;">Langue de l'interface</label>
              <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;background:white;">
                <option selected>🇫🇷 Français</option>
                <option>🇬🇧 English</option>
                <option>🇧🇯 Fon (bientôt)</option>
                <option>🇧🇯 Yoruba (bientôt)</option>
                <option>🇧🇯 Bariba (bientôt)</option>
              </select>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px;">Commune de référence</label>
              <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;background:white;">
                <option selected>Cotonou</option><option>Porto-Novo</option><option>Parakou</option><option>Abomey-Calavi</option>
              </select>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px;">Format de date</label>
              <select style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;background:white;">
                <option>JJ/MM/AAAA (ex: 22/05/2025)</option><option>MM/DD/YYYY</option>
              </select>
            </div>
            <button class="btn btn-primary" style="align-self:flex-start">Sauvegarder</button>
          </div>
        </div>

        <!-- APPARENCE (caché) -->
        <div id="sec-apparence" class="card" style="display:none;">
          <div class="card-header" style="padding-bottom:16px;border-bottom:1px solid var(--gray-100);">
            <span class="card-title" style="font-size:16px;">Apparence</span>
          </div>
          <div class="card-body" style="padding:24px;display:flex;flex-direction:column;gap:20px;">
            <div>
              <div style="font-size:13px;font-weight:600;margin-bottom:12px;">Thème</div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
                ${[{id:"light",label:"☀️ Clair",active:!0},{id:"dark",label:"🌙 Sombre",active:!1},{id:"auto",label:"💻 Système",active:!1}].map(t=>`
                  <button style="padding:16px 12px;border:${t.active?"2px solid var(--green-live)":"1px solid var(--gray-200)"};border-radius:var(--radius-md);font-size:13px;font-weight:${t.active?"600":"400"};cursor:pointer;background:${t.active?"var(--green-pale)":"white"};color:${t.active?"var(--green-mid)":"var(--text-main)"}">
                    ${t.label}
                  </button>`).join("")}
              </div>
            </div>
            <div>
              <div style="font-size:13px;font-weight:600;margin-bottom:12px;">Taille du texte</div>
              <div style="display:flex;align-items:center;gap:12px;">
                <span style="font-size:11px;color:var(--text-light)">A</span>
                <input type="range" min="1" max="5" value="3" style="flex:1">
                <span style="font-size:16px;color:var(--text-main)">A</span>
              </div>
            </div>
            <div>
              <div style="font-size:13px;font-weight:600;margin-bottom:12px;">Densité d'affichage</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                ${[{l:"Compact",s:!0},{l:"Confortable",s:!1}].map(t=>`
                  <button style="padding:12px;border:${t.s?"2px solid var(--green-live)":"1px solid var(--gray-200)"};border-radius:var(--radius-md);font-size:13px;cursor:pointer;background:${t.s?"var(--green-pale)":"white"};color:${t.s?"var(--green-mid)":"var(--text-main)"}">${t.l}</button>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
  const sectionIds = ['compte','notifs','confidentialite','langue','apparence'];
  window.showSection = function(id) {
    sectionIds.forEach(s => {
      document.getElementById('sec-'+s).style.display = s===id ? 'block' : 'none';
      const btn = document.getElementById('sec-btn-'+s);
      btn.style.background = s===id ? 'var(--green-soft)' : 'transparent';
      btn.style.color = s===id ? 'var(--green-mid)' : 'var(--text-main)';
      btn.style.fontWeight = s===id ? '600' : '400';
    });
  };
  <\/script>`}function I(){const e=[{init:"PNUD",name:"Programme des Nations Unies pour le développement",type:"Organisation internationale",pays:"ONU",odds:[1,2,3,8,10,16,17],desc:"Soutien technique et financier au suivi des ODD au Bénin."},{init:"UNICEF",name:"Fonds des Nations Unies pour l'enfance",type:"Organisation internationale",pays:"ONU",odds:[2,3,4,5,6],desc:"Protection des droits des enfants et appui aux services sociaux de base."},{init:"INSAE",name:"Institut National de la Statistique et de l'Analyse Économique",type:"Institution publique",pays:"Bénin",odds:[17],desc:"Production des données statistiques nationales sur les ODD."},{init:"UAC",name:"Université d'Abomey-Calavi",type:"Académique",pays:"Bénin",odds:[4,9,17],desc:"Recherche et formation sur le développement durable au Bénin."},{init:"GIZ",name:"Coopération Technique Allemande",type:"Coopération bilatérale",pays:"Allemagne",odds:[6,7,11,13,15],desc:"Projets d'eau, d'énergie et d'urbanisme durable."},{init:"AFD",name:"Agence Française de Développement",type:"Coopération bilatérale",pays:"France",odds:[6,7,8,9,11],desc:"Financement de projets structurants pour le développement."},{init:"WA",name:"WaterAid Bénin",type:"ONG internationale",pays:"Bénin",odds:[6],desc:"Accès à l'eau potable et assainissement pour les populations vulnérables."},{init:"EBI",name:"Éco-Bénin Initiative",type:"ONG nationale",pays:"Bénin",odds:[12,13,14,15],desc:"Promotion de l'économie verte et protection de la biodiversité."}],t={"Organisation internationale":"#26BDE2","Institution publique":"#1D9E75",Académique:"#6C63CC","Coopération bilatérale":"#185FA5","ONG internationale":"#E8A000","ONG nationale":"#C94F7B"};return`
  <div class="fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div>
        <h2 class="section-title">Réseau partenaires</h2>
        <p class="section-sub">Organisations, institutions et acteurs qui soutiennent les ODD au Bénin</p>
      </div>
      <button class="btn btn-primary">+ Devenir partenaire</button>
    </div>

    <div class="stats-strip mb-24">
      <div class="stat-block"><div class="stat-val">78</div><div class="stat-label">Organisations partenaires</div></div>
      <div class="stat-block"><div class="stat-val">24</div><div class="stat-label">Pays représentés</div></div>
      <div class="stat-block"><div class="stat-val">142</div><div class="stat-label">Projets en cours</div></div>
      <div class="stat-block"><div class="stat-val">17</div><div class="stat-label">ODD couverts</div></div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm">Tous</button>
      <button class="btn btn-outline btn-sm">🌍 Internationaux</button>
      <button class="btn btn-outline btn-sm">🇧🇯 Nationaux</button>
      <button class="btn btn-outline btn-sm">🎓 Académiques</button>
      <button class="btn btn-outline btn-sm">🤝 ONG</button>
    </div>

    <div class="grid-cols-3">
      ${e.map(i=>{const n=t[i.type]||"#888";return`
        <div class="card" style="cursor:pointer;transition:all .2s" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div class="card-body" style="padding:20px;">
            <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
              <div style="width:44px;height:44px;border-radius:10px;background:${n}22;color:${n};font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i.init}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:600;line-height:1.3;margin-bottom:4px">${i.name}</div>
                <span style="font-size:10px;font-weight:600;background:${n}18;color:${n};border-radius:4px;padding:2px 7px">${i.type}</span>
              </div>
            </div>
            <p style="font-size:12.5px;color:var(--text-sub);line-height:1.5;margin-bottom:12px">${i.desc}</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;">
              ${i.odds.map(s=>`<span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--text-sub);border-radius:4px;padding:2px 6px">ODD ${s}</span>`).join("")}
            </div>
          </div>
        </div>`}).join("")}
    </div>

    <div style="margin-top:28px;background:linear-gradient(135deg,var(--navy),var(--green-deep));border-radius:var(--radius-xl);padding:40px;text-align:center;">
      <h3 style="font-family:var(--font-display);font-size:24px;color:white;margin-bottom:10px">Rejoindre le réseau ODD Connect</h3>
      <p style="font-size:14px;color:rgba(255,255,255,.65);max-width:500px;margin:0 auto 20px;line-height:1.7">Ton organisation œuvre pour les ODD au Bénin ? Rejoins notre réseau et amplifiez ensemble l'impact de vos actions.</p>
      <button class="btn-hero-primary">Candidater comme partenaire →</button>
    </div>
  </div>`}function q(){const e=[{init:"AK",name:"Adélaïde Kpossou",role:"Directrice exécutive",bg:"#E1F5EE",color:"#0F6E56"},{init:"SM",name:"Serge Médégan",role:"Responsable technique",bg:"#EAF4FF",color:"#185FA5"},{init:"FM",name:"Fatima Maïga",role:"Chargée de plaidoyer",bg:"#FFE9F3",color:"#C94F7B"},{init:"KD",name:"Kodjo Dossou",role:"Analyste données ODD",bg:"#F0EEFF",color:"#6C63CC"}];return`
  <div class="fade-up">
    <!-- Hero -->
    <div style="background:linear-gradient(135deg,var(--navy),var(--green-deep));border-radius:var(--radius-xl);padding:52px 56px;margin-bottom:28px;position:relative;overflow:hidden;">
      <div style="position:absolute;right:-60px;top:-60px;width:300px;height:300px;border-radius:50%;background:rgba(29,158,117,.15)"></div>
      <div style="position:absolute;left:30%;bottom:-80px;width:200px;height:200px;border-radius:50%;background:rgba(29,158,117,.08)"></div>
      <div style="position:relative;z-index:1">
        <div style="font-size:12px;color:rgba(255,255,255,.45);letter-spacing:.15em;margin-bottom:12px">À PROPOS · ODD CONNECT BÉNIN</div>
        <h2 style="font-family:var(--font-display);font-size:36px;font-weight:700;color:white;margin-bottom:14px;max-width:550px">Accélérer l'atteinte des ODD grâce au numérique citoyen</h2>
        <p style="font-size:15px;color:rgba(255,255,255,.65);max-width:580px;line-height:1.75">ODD Connect Bénin est une plateforme civic-tech indépendante créée en 2024 pour connecter citoyens, organisations et institutions autour des 17 Objectifs de Développement Durable.</p>
      </div>
    </div>

    <div class="grid-3 mb-24">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">Notre mission</span></div>
          <div class="card-body">
            <p style="font-size:13.5px;color:var(--text-sub);line-height:1.75">Créer un espace numérique national qui relie citoyens, organisations, jeunes et décideurs pour accélérer l'atteinte des ODD à travers le plaidoyer, le partage de données et l'action citoyenne collective.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">Nos valeurs</span></div>
          <div class="card-body">
            ${[{icon:"🌍",v:"Inclusivité",d:"Accessible à tous les béninois, sans exclusion"},{icon:"📊",v:"Transparence",d:"Données ouvertes et processus vérifiables"},{icon:"🤝",v:"Collaboration",d:"Co-construction avec les communautés"},{icon:"⚡",v:"Action",d:"Du plaidoyer aux résultats concrets"}].map(t=>`
              <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:18px">${t.icon}</span>
                <div><div style="font-size:13px;font-weight:600">${t.v}</div><div style="font-size:12px;color:var(--text-sub)">${t.d}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">L'équipe</span></div>
          <div class="card-body">
            ${e.map(t=>`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:40px;height:40px;border-radius:50%;background:${t.bg};color:${t.color};font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${t.init}</div>
                <div><div style="font-size:13px;font-weight:600">${t.name}</div><div style="font-size:12px;color:var(--text-sub)">${t.role}</div></div>
              </div>`).join("")}
            <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:8px">Voir toute l'équipe</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">Contact</span></div>
          <div class="card-body">
            ${[{icon:"📧",label:"Email",val:"contact@oddconnect.bj"},{icon:"📱",label:"WhatsApp",val:"+229 01 XX XX XX"},{icon:"🌐",label:"Site",val:"www.oddconnect.bj"},{icon:"🐦",label:"Twitter / X",val:"@ODDConnectBenin"}].map(t=>`
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:16px;width:24px;text-align:center">${t.icon}</span>
                <div><div style="font-size:11px;color:var(--text-light)">${t.label}</div><div style="font-size:13px;color:var(--green-mid);font-weight:500">${t.val}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="card mb-24">
      <div class="card-header"><span class="card-title" style="font-size:15px;">Notre parcours</span></div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;">
          <div style="position:absolute;top:18px;left:10%;right:10%;height:2px;background:var(--green-soft);z-index:0"></div>
          ${[{year:"2023",event:"Idée & recherche",desc:"Consultation de 200 citoyens et 40 organisations"},{year:"Fév. 2024",event:"Lancement MVP",desc:"Dashboard ODD + Plaidoyer + 3 communes pilotes"},{year:"Juin 2024",event:"Phase pilote",desc:"1 200 utilisateurs · 8 campagnes · 15 communes"},{year:"2025",event:"Déploiement national",desc:"Toutes les 77 communes · App mobile · IA"}].map((t,i)=>`
            <div style="text-align:center;position:relative;z-index:1;padding:0 10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:var(--green-live);color:white;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;border:3px solid white;box-shadow:0 0 0 2px var(--green-live)">${i+1}</div>
              <div style="font-size:12px;font-weight:700;color:var(--green-deep);margin-bottom:2px">${t.year}</div>
              <div style="font-size:13px;font-weight:600;margin-bottom:4px">${t.event}</div>
              <div style="font-size:11px;color:var(--text-sub);line-height:1.5">${t.desc}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </div>`}function R(){const e=[{icon:"👥",label:"Utilisateurs",val:"12 418",sub:"34 nouveaux aujourd'hui",color:"#1D9E75"},{icon:"🚨",label:"Signalements à valider",val:"23",sub:"Attente modération",color:"#D85A30"},{icon:"📢",label:"Campagnes actives",val:"34",sub:"8 en attente d'approbation",color:"#E8A000"},{icon:"📄",label:"Documents à valider",val:"7",sub:"Soumis cette semaine",color:"#185FA5"}],t=[{time:"14:32",event:"Nouveau signalement soumis",user:"Amina K.",type:"signal",color:"#D85A30"},{time:"14:18",event:"Campagne validée et publiée",user:"Admin",type:"admin",color:"#1D9E75"},{time:"13:55",event:"Inscription nouvel utilisateur",user:"Ibrahim M.",type:"user",color:"#185FA5"},{time:"13:40",event:"Document mis en ligne",user:"INSAE Bénin",type:"doc",color:"#6C63CC"},{time:"12:18",event:"Signalement marqué résolu",user:"Mairie Abomey",type:"signal",color:"#1D9E75"},{time:"11:44",event:"Campagne signalée comme spam",user:"Kofi T.",type:"flag",color:"#E8A000"}];return`
  <div class="fade-up">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div style="width:36px;height:36px;border-radius:10px;background:#FFE0DC;color:#D85A30;font-size:18px;display:flex;align-items:center;justify-content:center;">🛡️</div>
      <div>
        <h2 class="section-title">Panneau d'administration</h2>
        <p class="section-sub">Vue réservée aux modérateurs et administrateurs</p>
      </div>
    </div>

    <div class="kpi-grid mb-24">
      ${e.map(i=>`
        <div class="kpi-card" style="cursor:pointer" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font-size:22px">${i.icon}</span>
            <span style="font-size:11px;color:var(--text-light);font-weight:500;text-transform:uppercase;letter-spacing:.05em">${i.label}</span>
          </div>
          <div class="kpi-value" style="color:${i.color}">${i.val}</div>
          <div style="font-size:12px;color:var(--text-light);margin-top:4px">${i.sub}</div>
        </div>`).join("")}
    </div>

    <div class="grid-3 mb-16">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Actions rapides -->
        <div class="card">
          <div class="card-header"><span class="card-title">File de modération</span></div>
          <div class="card-body">
            ${u.slice(0,3).map(i=>`
              <div style="padding:10px 0;border-bottom:1px solid var(--gray-100)">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:12px;font-weight:600">${i.title}</span>
                  <span style="font-size:10px;background:#FFF8E1;color:#E8A000;border-radius:4px;padding:2px 7px;font-weight:600">À valider</span>
                </div>
                <div style="font-size:11px;color:var(--text-light);margin-bottom:8px">📍 ${i.location}</div>
                <div style="display:flex;gap:6px">
                  <button class="btn btn-sm" style="background:var(--green-live);color:white;border:none;padding:4px 10px;border-radius:4px;font-size:11px;cursor:pointer">✓ Valider</button>
                  <button class="btn btn-sm" style="background:var(--coral);color:white;border:none;padding:4px 10px;border-radius:4px;font-size:11px;cursor:pointer">✗ Rejeter</button>
                </div>
              </div>`).join("")}
            <button class="btn btn-outline btn-sm" style="width:100%;justify-content:center;margin-top:8px">Voir tout (23)</button>
          </div>
        </div>

        <!-- Accès rapides -->
        <div class="card">
          <div class="card-header"><span class="card-title">Accès rapides</span></div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:6px;">
            ${[{icon:"👥",label:"Gérer les utilisateurs"},{icon:"📢",label:"Approuver les campagnes"},{icon:"📄",label:"Valider les documents"},{icon:"📊",label:"Mettre à jour les données ODD"},{icon:"📧",label:"Envoyer une communication"},{icon:"⚙️",label:"Configuration plateforme"}].map(i=>`<button class="btn btn-outline btn-sm" style="justify-content:flex-start;gap:8px">${i.icon} ${i.label}</button>`).join("")}
          </div>
        </div>
      </div>

      <!-- Logs -->
      <div class="card">
        <div class="card-header">
          <span class="card-title">Journal d'activité</span>
          <span class="card-meta">Aujourd'hui</span>
        </div>
        <div class="card-body" style="padding:0">
          ${t.map(i=>`
            <div style="display:flex;gap:10px;padding:12px 20px;border-bottom:1px solid var(--gray-100);align-items:flex-start;">
              <span style="font-size:11px;color:var(--text-light);width:38px;flex-shrink:0;margin-top:1px">${i.time}</span>
              <div style="width:6px;height:6px;border-radius:50%;background:${i.color};margin-top:5px;flex-shrink:0"></div>
              <div style="flex:1">
                <div style="font-size:12.5px;color:var(--text-main)">${i.event}</div>
                <div style="font-size:11px;color:var(--text-light)">par ${i.user}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </div>`}function T(){return`
  <div style="min-height:70vh;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;">
    <div style="font-size:72px;margin-bottom:16px">🌍</div>
    <h2 style="font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--green-deep);margin-bottom:10px">Page introuvable</h2>
    <p style="font-size:15px;color:var(--text-sub);max-width:380px;line-height:1.7;margin-bottom:28px">
      Cette page n'existe pas encore ou a été déplacée. Mais tu peux explorer toutes les fonctionnalités disponibles !
    </p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
      <button onclick="navigate('home')" class="btn btn-primary" style="padding:10px 24px">🏠 Retour à l'accueil</button>
      <button onclick="navigate('dashboard')" class="btn btn-outline" style="padding:10px 24px">📊 Voir le Dashboard</button>
    </div>
  </div>`}window.currentPage="home";const b={home:{title:"Accueil",sub:"Bienvenue sur ODD Connect Bénin",fn:w},dashboard:{title:"Dashboard ODD",sub:"Suivi des 17 indicateurs · Bénin 2024",fn:k},plaidoyer:{title:"Plaidoyer citoyen",sub:"Campagnes actives et pétitions nationales",fn:$},veille:{title:"Veille citoyenne",sub:"Signalements et alertes en temps réel",fn:A},carte:{title:"Cartographie",sub:"Projets ODD et initiatives par commune",fn:C},forum:{title:"Forum communautaire",sub:"Discussions et co-construction citoyenne",fn:z},bibliotheque:{title:"Bibliothèque",sub:"Rapports, études et guides pratiques",fn:E},calendrier:{title:"Calendrier",sub:"Agenda des événements ODD au Bénin",fn:P},profil:{title:"Mon profil",sub:"Compte, activité et paramètres",fn:j},auth:{title:"Connexion",sub:"Accède à ton espace ODD Connect",fn:F},"campagne-detail":{title:"Détail campagne",sub:"Eau pour tous au Nord-Bénin · ODD 6",fn:O},"nouveau-signalement":{title:"Nouveau signalement",sub:"Signale un problème dans ta commune",fn:B},"odd-detail":{title:"ODD 6 · Eau propre",sub:"Indicateurs, objectifs et actions au Bénin",fn:S},notifications:{title:"Notifications",sub:"4 notifications non lues",fn:N},parametres:{title:"Paramètres",sub:"Compte, notifications et préférences",fn:M},partenaires:{title:"Réseau partenaires",sub:"78 organisations engagées pour les ODD",fn:I},apropos:{title:"À propos",sub:"Notre mission, équipe et parcours",fn:q},admin:{title:"Administration",sub:"Modération et gestion de la plateforme",fn:R},404:{title:"Page introuvable",sub:"Cette page n'existe pas",fn:T}};window.navigate=function(e){b[e]||(e="404"),window.currentPage=e;const t=b[e];document.getElementById("app").innerHTML=m(t.title,t.sub,t.fn()),window.scrollTo(0,0),setTimeout(()=>V(e),60)};function V(e){e==="dashboard"&&G(),e==="veille"&&J(),e==="carte"&&K()}const l={};function d(e){l[e]&&(l[e].destroy(),delete l[e])}function G(){d("lineChart");const e=document.getElementById("lineChart");e&&(l.lineChart=new Chart(e,{type:"line",data:{labels:c,datasets:[{label:"Score ODD",data:h,borderColor:"#1D9E75",backgroundColor:"rgba(29,158,117,.08)",tension:.4,fill:!0,pointRadius:3,pointBackgroundColor:"#1D9E75",borderWidth:2},{label:"Objectif",data:c.map((n,s)=>55+s),borderColor:"#185FA5",borderDash:[5,4],pointRadius:0,borderWidth:1.5,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8"}},y:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8",callback:n=>n+"%"},min:50,max:70}}}})),d("radarChart");const t=document.getElementById("radarChart");t&&(l.radarChart=new Chart(t,{type:"radar",data:{labels:["Personnes","Planète","Prospérité","Paix"],datasets:[{data:[68,54,61,72],borderColor:"#1D9E75",backgroundColor:"rgba(29,158,117,.15)",borderWidth:2,pointBackgroundColor:"#1D9E75",pointRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{r:{min:0,max:100,ticks:{display:!1},pointLabels:{color:"#4A6960",font:{size:11}},grid:{color:"rgba(0,0,0,.06)"},angleLines:{color:"rgba(0,0,0,.06)"}}}}})),d("barChart");const i=document.getElementById("barChart");i&&(l.barChart=new Chart(i,{type:"bar",data:{labels:c,datasets:[{label:"Utilisateurs",data:D,backgroundColor:"rgba(29,158,117,.7)",borderRadius:3},{label:"Signalements",data:[12,18,22,28,35,41,38,45,52,60,71,84].map(n=>n*8),backgroundColor:"rgba(24,95,165,.5)",borderRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{font:{size:10},color:"#9AB0A8"}},y:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8"}}}}}))}function J(){d("signalChart");const e=document.getElementById("signalChart");e&&(l.signalChart=new Chart(e,{type:"doughnut",data:{labels:["ODD 6 · Eau","ODD 7 · Énergie","ODD 13 · Climat","ODD 14 · Aquatique","ODD 15 · Forêt"],datasets:[{data:[32,18,24,15,11],backgroundColor:["#26BDE2","#FCC30B","#3F7E44","#0A97D9","#56C02B"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:8,color:"#4A6960"}}}}}))}let r=null;function K(){if(!document.getElementById("map-container")||!window.L)return;r&&(r.remove(),r=null),r=L.map("map-container").setView([9.3,2.3],7),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(r),[{lat:6.37,lng:2.42,title:"Cotonou",color:"#1D9E75",text:"Projet eau potable"},{lat:6.5,lng:2.62,title:"Porto-Novo",color:"#1D9E75",text:"Éducation rurale"},{lat:9.34,lng:2.65,title:"Parakou",color:"#D85A30",text:"🚨 Pénurie eau"},{lat:10.3,lng:1.38,title:"Natitingou",color:"#E8A000",text:"École sans électricité"},{lat:7.18,lng:1.99,title:"Abomey",color:"#185FA5",text:"📅 Atelier ODD"},{lat:6.95,lng:2.22,title:"Abomey-Calavi",color:"#1D9E75",text:"Reboisement"},{lat:6.78,lng:1.98,title:"Lokossa",color:"#E8A000",text:"Assainissement"},{lat:11.12,lng:2.88,title:"Kandi",color:"#1D9E75",text:"Énergie solaire"},{lat:9.75,lng:1.61,title:"Djougou",color:"#D85A30",text:"🚨 Déforestation"},{lat:7.97,lng:2.23,title:"Savalou",color:"#1D9E75",text:"Agriculture durable"}].forEach(i=>{const n=L.divIcon({html:`<div style="width:14px;height:14px;border-radius:50%;background:${i.color};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,className:"",iconSize:[14,14]});L.marker([i.lat,i.lng],{icon:n}).addTo(r).bindPopup(`<strong>${i.title}</strong><br><span style="font-size:12px;color:#666">${i.text}</span>`)})}navigate("home");
