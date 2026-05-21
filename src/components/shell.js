export function renderShell(pageTitle, pageSubtitle, contentHTML) {
  return `
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

        <button class="nav-item ${currentPage==='home'?'active':''}" onclick="navigate('home')">
          <span class="nav-icon">🏠</span> Accueil
        </button>
        <button class="nav-item ${currentPage==='dashboard'?'active':''}" onclick="navigate('dashboard')">
          <span class="nav-icon">📊</span> Dashboard ODD
        </button>
        <button class="nav-item ${currentPage==='plaidoyer'?'active':''}" onclick="navigate('plaidoyer')">
          <span class="nav-icon">📢</span> Plaidoyer
        </button>
        <button class="nav-item ${currentPage==='veille'?'active':''}" onclick="navigate('veille')">
          <span class="nav-icon">🔔</span> Veille citoyenne
          <span class="nav-badge">5</span>
        </button>
        <button class="nav-item ${currentPage==='carte'?'active':''}" onclick="navigate('carte')">
          <span class="nav-icon">🗺️</span> Cartographie
        </button>

        <span class="nav-section-label">Communauté</span>

        <button class="nav-item ${currentPage==='forum'?'active':''}" onclick="navigate('forum')">
          <span class="nav-icon">💬</span> Forum
        </button>
        <button class="nav-item ${currentPage==='bibliotheque'?'active':''}" onclick="navigate('bibliotheque')">
          <span class="nav-icon">📚</span> Bibliothèque
        </button>
        <button class="nav-item ${currentPage==='calendrier'?'active':''}" onclick="navigate('calendrier')">
          <span class="nav-icon">📅</span> Calendrier
        </button>

        <span class="nav-section-label">Compte</span>

        <button class="nav-item ${currentPage==='profil'?'active':''}" onclick="navigate('profil')">
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
            <div class="page-title">${pageTitle}</div>
            <div class="page-subtitle">${pageSubtitle}</div>
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
        ${contentHTML}
      </main>
    </div>
  </div>`;
}
