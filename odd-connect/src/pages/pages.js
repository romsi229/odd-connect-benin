import { ODDS, CAMPAIGNS, SIGNALS, FORUM_POSTS, EVENTS, DOCS, COMMUNES } from '../data/data.js';

// ── HOME PAGE ─────────────────────────────────────────────────────────────
export function homePage() {
  const modules = [
    { icon:"📊", name:"Dashboard ODD", desc:"Suivi des 17 indicateurs en temps réel", page:"dashboard", bg:"#E1F5EE", ic:"#0F6E56" },
    { icon:"📢", name:"Plaidoyer", desc:"Campagnes et pétitions nationales", page:"plaidoyer", bg:"#FFF8E1", ic:"#E8A000" },
    { icon:"🔔", name:"Veille citoyenne", desc:"Signalements géolocalisés", page:"veille", bg:"#FFF0EE", ic:"#D85A30" },
    { icon:"🗺️", name:"Cartographie", desc:"Carte interactive du Bénin", page:"carte", bg:"#EAF4FF", ic:"#185FA5" },
    { icon:"🤖", name:"IA & Data", desc:"Analyses et recommandations", page:"dashboard", bg:"#F0EEFF", ic:"#6C63CC" },
    { icon:"💬", name:"Forum", desc:"Discussions communautaires", page:"forum", bg:"#E1F5EE", ic:"#0F6E56" },
    { icon:"📚", name:"Bibliothèque", desc:"Rapports et ressources", page:"bibliotheque", bg:"#FFE9F3", ic:"#C94F7B" },
    { icon:"📅", name:"Calendrier", desc:"Agenda des événements ODD", page:"calendrier", bg:"#F5F5F5", ic:"#4A6960" },
    { icon:"🌍", name:"Partenaires", desc:"Réseau d'organisations", page:"home", bg:"#E1F5EE", ic:"#0A4D3C" },
  ];

  return `
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
      ${modules.map(m => `
        <div class="module-card" onclick="navigate('${m.page}')">
          <div class="module-icon" style="background:${m.bg};">${m.icon}</div>
          <div class="module-name">${m.name}</div>
          <div class="module-desc">${m.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ── DASHBOARD PAGE ────────────────────────────────────────────────────────
export function dashboardPage() {
  const oddHTML = ODDS.map(o => {
    const bg = o.pct >= 70 ? '#1D9E75' : o.pct >= 40 ? '#BA7517' : '#A32D2D';
    return `
    <div class="odd-pill" style="background:${bg};" title="${o.label} — ${o.pct}%">
      <div class="odd-num">ODD ${o.n}</div>
      <div class="odd-pct">${o.pct}%</div>
      <div class="odd-bar-bg"><div class="odd-bar-fill" style="width:${o.pct}%"></div></div>
    </div>`;
  }).join('');

  const communesHTML = COMMUNES.map((c, i) => `
    <div class="commune-row">
      <span class="commune-rank">${i+1}</span>
      <span class="commune-name">${c.name}</span>
      <div class="commune-track"><div class="commune-fill" style="width:${c.pct}%"></div></div>
      <span class="commune-pct">${c.pct}%</span>
    </div>
  `).join('');

  const alertsHTML = SIGNALS.slice(0,4).map(s => `
    <div class="alert-item">
      <div class="alert-dot" style="background:${s.severity==='high'?'#D85A30':s.severity==='medium'?'#E8A000':'#1D9E75'}"></div>
      <div>
        <div class="alert-text">${s.title}</div>
        <div class="alert-meta">📍 ${s.location} · ${s.time}</div>
      </div>
    </div>
  `).join('');

  const laggingODDs = ODDS.filter(o => o.pct < 60).sort((a,b)=>a.pct-b.pct).slice(0,5);
  const progressHTML = laggingODDs.map(o => {
    const col = o.pct >= 40 ? '#E8A000' : '#D85A30';
    return `
    <div class="prog-item">
      <div class="prog-top">
        <span class="prog-name">ODD ${o.n} · ${o.label}</span>
        <span class="prog-pct" style="color:${col}">${o.pct}%</span>
      </div>
      <div class="prog-track"><div class="prog-fill" style="width:${o.pct}%;background:${col}"></div></div>
    </div>`;
  }).join('');

  return `
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
        <div class="odd-grid">${oddHTML}</div>
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
        <div class="card-body">${progressHTML}</div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="card-title">Alertes récentes</span>
          <button class="btn btn-ghost btn-sm" onclick="navigate('veille')">Voir tout →</button>
        </div>
        <div class="card-body">${alertsHTML}</div>
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
        <div class="card-body">${communesHTML}</div>
      </div>
    </div>
  </div>`;
}

// ── PLAIDOYER PAGE ────────────────────────────────────────────────────────
export function plaidoyerPage() {
  const campsHTML = CAMPAIGNS.map(c => {
    const progress = Math.round((c.signatures / c.goal) * 100);
    return `
    <div class="campaign-card">
      <div class="camp-tag" style="background:${c.bg};color:${c.color}">${c.oddLabel} · ${c.tags[0]}</div>
      <div class="camp-title">${c.title}</div>
      <div class="camp-desc">${c.desc}</div>
      <div class="camp-progress-track">
        <div class="camp-progress-fill" style="width:${progress}%;background:${c.color}"></div>
      </div>
      <div class="camp-meta">
        <span><strong>${c.signatures.toLocaleString('fr')}</strong> signatures sur ${c.goal.toLocaleString('fr')}</span>
        <span>⏱ ${c.days} jours restants</span>
      </div>
      <div class="camp-actions">
        <button class="btn btn-primary btn-sm" style="background:${c.color}">✍️ Signer</button>
        <button class="btn btn-outline btn-sm">📤 Partager</button>
        <button class="btn btn-ghost btn-sm">📋 Détails</button>
      </div>
    </div>`;
  }).join('');

  return `
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

    <div class="campaign-grid">${campsHTML}</div>
  </div>`;
}

// ── VEILLE CITOYENNE PAGE ─────────────────────────────────────────────────
export function veillePage() {
  const signalsHTML = SIGNALS.map(s => `
    <div class="signal-card">
      <div class="signal-sev" style="background:${s.severity==='high'?'#D85A30':s.severity==='medium'?'#E8A000':'#1D9E75'}"></div>
      <div style="flex:1">
        <div class="signal-odd-tag" style="background:${s.oddColor}22;color:${s.oddColor}">${s.oddLabel}</div>
        <div class="signal-title">${s.title}</div>
        <div class="signal-desc">${s.desc}</div>
        <div class="signal-footer">
          <span class="signal-loc">📍 ${s.location} · ${s.time}</span>
          <span class="signal-status" style="background:${s.statusColor}22;color:${s.statusColor}">${s.status}</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
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
        <div class="signal-list">${signalsHTML}</div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Par catégorie ODD</span></div>
        <div class="card-body">
          <div class="chart-wrapper" style="height:240px"><canvas id="signalChart"></canvas></div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── CARTE PAGE ────────────────────────────────────────────────────────────
export function cartePage() {
  return `
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
            ${COMMUNES.map((c,i) => `
              <div class="commune-row">
                <span class="commune-rank">${i+1}</span>
                <span class="commune-name">${c.name}</span>
                <div class="commune-track"><div class="commune-fill" style="width:${c.pct}%"></div></div>
                <span class="commune-pct">${c.pct}%</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── FORUM PAGE ────────────────────────────────────────────────────────────
export function forumPage() {
  const postsHTML = FORUM_POSTS.map(p => `
    <div class="forum-card">
      <div class="forum-tags">
        ${p.tags.map(t => `<span class="forum-tag" style="background:var(--green-soft);color:var(--green-mid)">${t}</span>`).join('')}
      </div>
      <div class="forum-title">${p.title}</div>
      <div class="forum-excerpt">${p.excerpt}</div>
      <div class="forum-footer">
        <span>👤 ${p.author}</span>
        <span>⏱ ${p.time}</span>
        <span>💬 ${p.replies} réponses</span>
        <span>❤️ ${p.likes} likes</span>
      </div>
    </div>
  `).join('');

  return `
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
      <div class="forum-list">${postsHTML}</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Membres actifs</span></div>
          <div class="card-body">
            ${[
              {name:"Mariame T.", posts:203, badge:"🏆"},
              {name:"Ibrahim M.", posts:127, badge:"⭐"},
              {name:"Reine F.", posts:89, badge:"🌱"},
              {name:"Kouassi A.", posts:41, badge:"💬"},
            ].map(m => `
              <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:28px;height:28px;border-radius:50%;background:var(--green-soft);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--green-mid);">${m.name[0]}</div>
                <div style="flex:1;"><div style="font-size:12px;font-weight:600">${m.name}</div><div style="font-size:11px;color:var(--text-light)">${m.posts} contributions</div></div>
                <span>${m.badge}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Thèmes populaires</span></div>
          <div class="card-body" style="display:flex;flex-wrap:wrap;gap:6px;">
            ${["#EauPotable","#ÉnergiesSolaires","#Reboisement","#ÉgalitéFemmes","#DéchetsPlastiques","#ClimatBénin","#JeunesODD"].map(t =>`<span style="background:var(--green-soft);color:var(--green-mid);border-radius:20px;padding:4px 10px;font-size:12px;cursor:pointer">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── BIBLIOTHÈQUE PAGE ─────────────────────────────────────────────────────
export function bibliothequePage() {
  const docsHTML = DOCS.map(d => `
    <div class="doc-card">
      <div class="doc-type-icon">${d.icon}</div>
      <div class="doc-title">${d.title}</div>
      <div class="doc-desc">${d.desc}</div>
      <div class="doc-footer">
        <span style="background:var(--green-soft);color:var(--green-mid);border-radius:4px;padding:2px 8px;font-size:11px;font-weight:600">${d.type}</span>
        <span>${d.date} · ${d.pages}p</span>
      </div>
      <button class="btn btn-outline btn-sm" style="width:100%;margin-top:10px;justify-content:center;">📥 Télécharger</button>
    </div>
  `).join('');

  return `
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

    <div class="doc-grid">${docsHTML}</div>
  </div>`;
}

// ── CALENDRIER PAGE ───────────────────────────────────────────────────────
export function calendrierPage() {
  const eventsHTML = EVENTS.map(e => `
    <div class="event-card">
      <div class="event-date-block">
        <div class="event-day">${e.day}</div>
        <div class="event-month">${e.month}</div>
      </div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="font-size:12px;background:var(--green-soft);color:var(--green-mid);border-radius:4px;padding:2px 8px;font-weight:600">${e.type}</span>
        </div>
        <div class="event-title">${e.icon} ${e.title}</div>
        <div class="event-desc">${e.desc}</div>
        <div class="event-meta">
          <span>📍 ${e.location}</span>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button class="btn btn-primary btn-sm">S'inscrire</button>
          <button class="btn btn-outline btn-sm">📤 Partager</button>
        </div>
      </div>
    </div>
  `).join('');

  return `
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
      <div class="event-list">${eventsHTML}</div>
      <div class="card">
        <div class="card-header"><span class="card-title">Juin 2025</span></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:11px;">
            ${["L","M","M","J","V","S","D"].map(d=>`<div style="font-weight:600;color:var(--text-light);padding:4px">${d}</div>`).join('')}
            ${Array.from({length:30},(_,i)=>{
              const day = i+1;
              const hasEvent = [15,22].includes(day);
              return `<div style="padding:6px 4px;border-radius:4px;cursor:pointer;${hasEvent?'background:var(--green-soft);color:var(--green-mid);font-weight:600':''}">${day}</div>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── PROFIL PAGE ───────────────────────────────────────────────────────────
export function profilPage() {
  return `
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
            ${["🏆 Top contributeur","🌱 Reboiseur","💧 Défenseur eau","📊 Data citoyen","🎤 Plaideur"].map(b=>`<span style="background:var(--gray-100);border-radius:20px;padding:4px 10px;font-size:12px;">${b}</span>`).join('')}
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
            ${[6,7,13,15].map(n => {
              const o = ODDS.find(x=>x.n===n);
              const bg = o.pct >= 70 ? '#1D9E75' : o.pct >= 40 ? '#BA7517' : '#A32D2D';
              return `<div style="background:${bg};border-radius:6px;padding:6px 10px;color:white;font-size:12px;font-weight:700;">ODD ${n}</div>`;
            }).join('')}
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
  </div>`;
}
