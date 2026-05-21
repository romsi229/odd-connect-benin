(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();function m(e,t,a){return`
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
        <button class="nav-item ${currentPage==="plaidoyer"?"active":""}" onclick="navigate('plaidoyer')">
          <span class="nav-icon">📢</span> Plaidoyer
        </button>
        <button class="nav-item ${currentPage==="veille"?"active":""}" onclick="navigate('veille')">
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

        <span class="nav-section-label">Compte</span>

        <button class="nav-item ${currentPage==="profil"?"active":""}" onclick="navigate('profil')">
          <span class="nav-icon">👤</span> Mon profil
        </button>
      </nav>

      <div class="sidebar-footer">
        <div class="user-chip">
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
          <button class="btn btn-outline btn-sm">🔍 Rechercher</button>
          <button class="btn btn-primary btn-sm">+ Signaler</button>
        </div>
      </header>

      <main class="page-body" id="page-body">
        ${a}
      </main>
    </div>
  </div>`}const p=[{n:1,label:"Pas de pauvreté",pct:65,color:"#E5243B"},{n:2,label:"Faim zéro",pct:58,color:"#DDA63A"},{n:3,label:"Bonne santé",pct:72,color:"#4C9F38"},{n:4,label:"Éducation de qualité",pct:70,color:"#C5192D"},{n:5,label:"Égalité des sexes",pct:61,color:"#FF3A21"},{n:6,label:"Eau propre",pct:48,color:"#26BDE2"},{n:7,label:"Énergie propre",pct:52,color:"#FCC30B"},{n:8,label:"Travail décent",pct:63,color:"#A21942"},{n:9,label:"Industrie",pct:55,color:"#FD6925"},{n:10,label:"Inégalités réduites",pct:55,color:"#DD1367"},{n:11,label:"Villes durables",pct:66,color:"#FD9D24"},{n:12,label:"Consommation durable",pct:59,color:"#BF8B2E"},{n:13,label:"Action climatique",pct:31,color:"#3F7E44"},{n:14,label:"Vie aquatique",pct:34,color:"#0A97D9"},{n:15,label:"Vie terrestre",pct:68,color:"#56C02B"},{n:16,label:"Paix & Justice",pct:74,color:"#00689D"},{n:17,label:"Partenariats",pct:62,color:"#19486A"}],g=[{id:1,title:"Eau pour tous au Nord-Bénin",desc:"Mobilisation pour l'accès à l'eau potable dans les communes de l'Atacora.",odd:6,oddLabel:"ODD 6",signatures:4820,goal:1e4,color:"#26BDE2",bg:"#EAF8FD",status:"active",days:18,tags:["Eau","Atacora"]},{id:2,title:"Énergies renouvelables pour les écoles",desc:"Campagne pour équiper 200 écoles rurales de panneaux solaires d'ici 2026.",odd:7,oddLabel:"ODD 7",signatures:2150,goal:5e3,color:"#FCC30B",bg:"#FFFBEA",status:"active",days:34,tags:["Énergie","Éducation"]},{id:3,title:"Stop déforestation côtière",desc:"Protéger les mangroves et forêts littorales du Bénin contre l'exploitation illégale.",odd:15,oddLabel:"ODD 15",signatures:6340,goal:8e3,color:"#56C02B",bg:"#EDFADF",status:"active",days:7,tags:["Forêt","Environnement"]},{id:4,title:"Parité dans les conseils communaux",desc:"Augmenter la représentation féminine à 40% dans toutes les communes du Bénin.",odd:5,oddLabel:"ODD 5",signatures:3100,goal:6e3,color:"#FF3A21",bg:"#FFF0EE",status:"active",days:45,tags:["Genre","Gouvernance"]}],u=[{id:1,severity:"high",odd:14,oddLabel:"ODD 14",oddColor:"#0A97D9",title:"Déversement industriel dans l'Ouémé",desc:"Des substances chimiques ont été déversées dans la rivière Ouémé. La zone de pêche artisanale est fortement impactée.",location:"Adjohoun, Ouémé",time:"Il y a 2h",status:"En cours",statusColor:"#E8A000"},{id:2,severity:"medium",odd:6,oddLabel:"ODD 6",oddColor:"#26BDE2",title:"Pénurie d'eau potable — 3 quartiers",desc:"Les pompes hydrauliques sont hors service depuis 10 jours. Environ 2 000 habitants n'ont plus accès à l'eau.",location:"Parakou, Borgou",time:"Il y a 5h",status:"Signalé",statusColor:"#D85A30"},{id:3,severity:"medium",odd:7,oddLabel:"ODD 7",oddColor:"#FCC30B",title:"École sans électricité depuis 3 semaines",desc:"L'école primaire de Natitingou-Centre est privée d'électricité. 400 élèves impactés pour les cours du soir.",location:"Natitingou, Atacora",time:"Il y a 1j",status:"Signalé",statusColor:"#D85A30"},{id:4,severity:"low",odd:15,oddLabel:"ODD 15",oddColor:"#56C02B",title:"Reboisement communautaire réalisé",desc:"500 arbres plantés par les jeunes de la commune d'Abomey-Calavi. Action initiée via la plateforme.",location:"Abomey-Calavi, Atlantique",time:"Il y a 2j",status:"Résolu",statusColor:"#1D9E75"},{id:5,severity:"high",odd:13,oddLabel:"ODD 13",oddColor:"#3F7E44",title:"Érosion côtière accélérée à Cotonou",desc:"La plage de Fidjrossè perd 3m par an. Plusieurs habitations menacées.",location:"Cotonou, Littoral",time:"Il y a 3j",status:"En cours",statusColor:"#E8A000"}],y=[{id:1,title:"Comment impliquer les jeunes dans le suivi des ODD localement ?",excerpt:"Dans ma commune de Bohicon, peu de jeunes connaissent les ODD. J'ai lancé un club scolaire, voici les résultats après 6 mois...",tags:["ODD 4","ODD 17","Jeunesse"],author:"Kouassi A.",time:"Il y a 3h",replies:24,likes:41},{id:2,title:"Rapport eau potable Atacora : les chiffres sont inquiétants",excerpt:"J'ai analysé les données INSAE 2023. Seulement 38% de la population de l'Atacora a accès à l'eau potable. Voici mes conclusions...",tags:["ODD 6","Données","Atacora"],author:"Reine F.",time:"Il y a 1j",replies:17,likes:89},{id:3,title:"Expérience : panel solaire pour notre école rurale à Kandi",excerpt:"Après 8 mois de démarche, notre école a enfin ses panneaux solaires. Je partage toutes les étapes pour que d'autres puissent faire pareil.",tags:["ODD 7","ODD 4","Témoignage"],author:"Ibrahim M.",time:"Il y a 2j",replies:35,likes:127},{id:4,title:"Pétition : interdire les plastiques non-recyclables au Bénin",excerpt:"Nous avons lancé une pétition nationale. Objectif : 50 000 signatures avant la session de l'Assemblée nationale en juin.",tags:["ODD 12","Plaidoyer","Plastique"],author:"Mariame T.",time:"Il y a 3j",replies:62,likes:203}],f=[{day:"15",month:"Juin",title:"Forum National ODD Bénin 2025",desc:"Rassemblement annuel des acteurs du développement durable. Présentations, ateliers et plénières.",type:"Conférence",location:"Cotonou, Palais des Congrès",icon:"🎤"},{day:"22",month:"Juin",title:"Hackathon Données & ODD",desc:"72h pour développer des solutions numériques innovantes au service des ODD. Ouvert aux 18-35 ans.",type:"Hackathon",location:"EPAC, Cotonou",icon:"💻"},{day:"05",month:"Jul.",title:"Action reboisement — Abomey-Calavi",desc:"Plantation collective de 1 000 arbres. Rejoins la communauté ODD Connect et contribue à l'ODD 15.",type:"Action terrain",location:"Abomey-Calavi",icon:"🌱"},{day:"18",month:"Jul.",title:"Atelier plaidoyer pour les femmes rurales",desc:"Formation aux outils de plaidoyer citoyen pour les femmes leaders des communes rurales.",type:"Formation",location:"Parakou, Centre culturel",icon:"📋"},{day:"30",month:"Jul.",title:"Journée Mondiale de l'Eau — Action nationale",desc:"Mobilisation citoyenne nationale pour alerter sur l'accès à l'eau potable dans les zones rurales.",type:"Mobilisation",location:"Tout le Bénin",icon:"💧"}],x=[{icon:"📊",title:"Rapport ODD Bénin 2024",desc:"Rapport annuel de l'INSAE sur les progrès des 17 ODD. Données désagrégées par commune.",type:"Rapport officiel",date:"Mars 2024",pages:128},{icon:"💧",title:"Accès à l'eau — Zones rurales",desc:"Étude de terrain sur l'accès à l'eau potable dans les départements du Nord-Bénin.",type:"Étude",date:"Jan. 2024",pages:56},{icon:"🌱",title:"Guide reboisement communautaire",desc:"Manuel pratique pour organiser des actions de reboisement dans votre commune.",type:"Guide pratique",date:"Fév. 2024",pages:32},{icon:"⚡",title:"Énergies renouvelables au Bénin",desc:"État des lieux et perspectives de développement des énergies solaire et éolienne.",type:"Rapport",date:"Nov. 2023",pages:88},{icon:"👥",title:"Participation citoyenne & ODD",desc:"Comment mobiliser les communautés locales pour accélérer l'atteinte des ODD.",type:"Guide pratique",date:"Oct. 2023",pages:44},{icon:"📈",title:"Cartographie des inégalités",desc:"Analyse spatiale des inégalités de développement entre communes béninoises.",type:"Étude",date:"Sep. 2023",pages:72}],b=[{name:"Cotonou",pct:78},{name:"Porto-Novo",pct:71},{name:"Abomey-Calavi",pct:67},{name:"Parakou",pct:62},{name:"Natitingou",pct:54},{name:"Lokossa",pct:48}],c=["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],h=[54,55,56,57,58,58,59,59,60,60,61,61],D=[320,410,490,600,720,850,980,1100,1250,1400,1620,1840];function k(){return`
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
  </div>`}function C(){const e=p.map(s=>`
    <div class="odd-pill" style="background:${s.pct>=70?"#1D9E75":s.pct>=40?"#BA7517":"#A32D2D"};" title="${s.label} — ${s.pct}%">
      <div class="odd-num">ODD ${s.n}</div>
      <div class="odd-pct">${s.pct}%</div>
      <div class="odd-bar-bg"><div class="odd-bar-fill" style="width:${s.pct}%"></div></div>
    </div>`).join(""),t=b.map((s,l)=>`
    <div class="commune-row">
      <span class="commune-rank">${l+1}</span>
      <span class="commune-name">${s.name}</span>
      <div class="commune-track"><div class="commune-fill" style="width:${s.pct}%"></div></div>
      <span class="commune-pct">${s.pct}%</span>
    </div>
  `).join(""),a=u.slice(0,4).map(s=>`
    <div class="alert-item">
      <div class="alert-dot" style="background:${s.severity==="high"?"#D85A30":s.severity==="medium"?"#E8A000":"#1D9E75"}"></div>
      <div>
        <div class="alert-text">${s.title}</div>
        <div class="alert-meta">📍 ${s.location} · ${s.time}</div>
      </div>
    </div>
  `).join(""),i=p.filter(s=>s.pct<60).sort((s,l)=>s.pct-l.pct).slice(0,5).map(s=>{const l=s.pct>=40?"#E8A000":"#D85A30";return`
    <div class="prog-item">
      <div class="prog-top">
        <span class="prog-name">ODD ${s.n} · ${s.label}</span>
        <span class="prog-pct" style="color:${l}">${s.pct}%</span>
      </div>
      <div class="prog-track"><div class="prog-fill" style="width:${s.pct}%;background:${l}"></div></div>
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
        <div class="card-body">${i}</div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="card-title">Alertes récentes</span>
          <button class="btn btn-ghost btn-sm" onclick="navigate('veille')">Voir tout →</button>
        </div>
        <div class="card-body">${a}</div>
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

    <div class="campaign-grid">${g.map(t=>{const a=Math.round(t.signatures/t.goal*100);return`
    <div class="campaign-card">
      <div class="camp-tag" style="background:${t.bg};color:${t.color}">${t.oddLabel} · ${t.tags[0]}</div>
      <div class="camp-title">${t.title}</div>
      <div class="camp-desc">${t.desc}</div>
      <div class="camp-progress-track">
        <div class="camp-progress-fill" style="width:${a}%;background:${t.color}"></div>
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
  </div>`}function E(){return`
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
            ${b.map((e,t)=>`
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
  </div>`}function O(){return`
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
      <div class="forum-list">${y.map(t=>`
    <div class="forum-card">
      <div class="forum-tags">
        ${t.tags.map(a=>`<span class="forum-tag" style="background:var(--green-soft);color:var(--green-mid)">${a}</span>`).join("")}
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
  </div>`}function P(){return`
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

    <div class="doc-grid">${x.map(t=>`
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
  </div>`}function F(){return`
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
      <div class="event-list">${f.map(t=>`
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
            ${Array.from({length:30},(t,a)=>{const n=a+1;return`<div style="padding:6px 4px;border-radius:4px;cursor:pointer;${[15,22].includes(n)?"background:var(--green-soft);color:var(--green-mid);font-weight:600":""}">${n}</div>`}).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`}function w(){return`
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
  </div>`}window.currentPage="home";const v={home:{title:"Accueil",sub:"Bienvenue sur ODD Connect Bénin",fn:k},dashboard:{title:"Dashboard ODD",sub:"Suivi des 17 indicateurs · Bénin 2024",fn:C},plaidoyer:{title:"Plaidoyer citoyen",sub:"Campagnes actives et pétitions nationales",fn:$},veille:{title:"Veille citoyenne",sub:"Signalements et alertes en temps réel",fn:A},carte:{title:"Cartographie",sub:"Projets ODD et initiatives par commune",fn:E},forum:{title:"Forum communautaire",sub:"Discussions et co-construction citoyenne",fn:O},bibliotheque:{title:"Bibliothèque",sub:"Rapports, études et guides pratiques",fn:P},calendrier:{title:"Calendrier",sub:"Agenda des événements ODD au Bénin",fn:F},profil:{title:"Mon profil",sub:"Compte, activité et paramètres",fn:w}};window.navigate=function(e){v[e]||(e="home"),window.currentPage=e;const t=v[e];document.getElementById("app").innerHTML=m(t.title,t.sub,t.fn()),window.scrollTo(0,0),setTimeout(()=>j(e),50)};function j(e){e==="dashboard"&&B(),e==="veille"&&S(),e==="carte"&&M()}const o={};function r(e){o[e]&&(o[e].destroy(),delete o[e])}function B(){r("lineChart");const e=document.getElementById("lineChart");e&&(o.lineChart=new Chart(e,{type:"line",data:{labels:c,datasets:[{label:"Score ODD",data:h,borderColor:"#1D9E75",backgroundColor:"rgba(29,158,117,.08)",tension:.4,fill:!0,pointRadius:3,pointBackgroundColor:"#1D9E75",borderWidth:2},{label:"Objectif",data:c.map((n,i)=>55+i),borderColor:"#185FA5",borderDash:[5,4],pointRadius:0,borderWidth:1.5,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8"}},y:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8",callback:n=>n+"%"},min:50,max:70}}}})),r("radarChart");const t=document.getElementById("radarChart");t&&(o.radarChart=new Chart(t,{type:"radar",data:{labels:["Personnes","Planète","Prospérité","Paix"],datasets:[{data:[68,54,61,72],borderColor:"#1D9E75",backgroundColor:"rgba(29,158,117,.15)",borderWidth:2,pointBackgroundColor:"#1D9E75",pointRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{r:{min:0,max:100,ticks:{display:!1},pointLabels:{color:"#4A6960",font:{size:11}},grid:{color:"rgba(0,0,0,.06)"},angleLines:{color:"rgba(0,0,0,.06)"}}}}})),r("barChart");const a=document.getElementById("barChart");a&&(o.barChart=new Chart(a,{type:"bar",data:{labels:c,datasets:[{label:"Utilisateurs",data:D,backgroundColor:"rgba(29,158,117,.7)",borderRadius:3},{label:"Signalements",data:[12,18,22,28,35,41,38,45,52,60,71,84].map(n=>n*8),backgroundColor:"rgba(24,95,165,.5)",borderRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{font:{size:10},color:"#9AB0A8"}},y:{grid:{color:"rgba(0,0,0,.04)"},ticks:{font:{size:10},color:"#9AB0A8"}}}}}))}function S(){r("signalChart");const e=document.getElementById("signalChart");if(!e)return;const t=["ODD 6 · Eau","ODD 7 · Énergie","ODD 13 · Climat","ODD 14 · Aquatique","ODD 15 · Forêt"];o.signalChart=new Chart(e,{type:"doughnut",data:{labels:t,datasets:[{data:[32,18,24,15,11],backgroundColor:["#26BDE2","#FCC30B","#3F7E44","#0A97D9","#56C02B"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:8,color:"#4A6960"}}}}})}let d=null;function M(){if(!document.getElementById("map-container")||!window.L)return;d&&(d.remove(),d=null),d=L.map("map-container").setView([9.3,2.3],7),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(d),[{lat:6.37,lng:2.42,title:"Cotonou",type:"project",color:"#1D9E75",text:"Projet eau potable"},{lat:6.5,lng:2.62,title:"Porto-Novo",type:"project",color:"#1D9E75",text:"Éducation rurale"},{lat:9.34,lng:2.65,title:"Parakou",type:"signal",color:"#D85A30",text:"🚨 Pénurie eau"},{lat:10.3,lng:1.38,title:"Natitingou",type:"signal",color:"#E8A000",text:"École sans électricité"},{lat:7.18,lng:1.99,title:"Abomey",type:"event",color:"#185FA5",text:"📅 Atelier ODD"},{lat:6.95,lng:2.22,title:"Abomey-Calavi",type:"project",color:"#1D9E75",text:"Reboisement"},{lat:6.78,lng:1.98,title:"Lokossa",type:"signal",color:"#E8A000",text:"Assainissement"},{lat:11.12,lng:2.88,title:"Kandi",type:"project",color:"#1D9E75",text:"Énergie solaire"}].forEach(a=>{const n=L.divIcon({html:`<div style="width:14px;height:14px;border-radius:50%;background:${a.color};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,className:"",iconSize:[14,14]});L.marker([a.lat,a.lng],{icon:n}).addTo(d).bindPopup(`<strong>${a.title}</strong><br><span style="font-size:12px;color:#666">${a.text}</span>`)})}navigate("home");
