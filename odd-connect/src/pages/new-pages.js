import { ODDS, CAMPAIGNS, SIGNALS, COMMUNES } from '../data/data.js';

// ═══════════════════════════════════════════════════════════════════
// PAGE CONNEXION / INSCRIPTION
// ═══════════════════════════════════════════════════════════════════
export function authPage() {
  return `
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
  </script>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE DÉTAIL CAMPAGNE
// ═══════════════════════════════════════════════════════════════════
export function campagneDetailPage() {
  const c = CAMPAIGNS[0];
  const progress = Math.round((c.signatures / c.goal) * 100);
  const updates = [
    { date:"10 Mai 2025", title:"Réponse officielle du Ministère de l'Eau", text:"Le Ministère a confirmé l'inscription de 3 nouvelles forages dans le budget 2026 suite à notre pétition." },
    { date:"28 Avr. 2025", title:"Cap des 4 000 signatures franchi !", text:"Merci à tous ! Nous avons atteint 4 000 signatures. La pression monte sur les décideurs." },
    { date:"15 Avr. 2025", title:"Lancement officiel de la campagne", text:"La campagne Eau pour tous au Nord-Bénin est officiellement lancée avec le soutien de 12 organisations partenaires." },
  ];
  const signataires = [
    {init:"AK", name:"Amina Kola", lieu:"Natitingou", temps:"Il y a 2h"},
    {init:"FB", name:"Fidèle Boco", lieu:"Kandi", temps:"Il y a 3h"},
    {init:"RM", name:"Reine Monla", lieu:"Djougou", temps:"Il y a 5h"},
    {init:"IB", name:"Ibrahim Boni", lieu:"Tanguiéta", temps:"Il y a 6h"},
    {init:"AT", name:"Adélaïde Tobla", lieu:"Parakou", temps:"Il y a 8h"},
  ];
  return `
  <div class="fade-up">
    <button onclick="navigate('plaidoyer')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour aux campagnes</button>

    <div class="grid-3 mb-16">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <!-- Header campagne -->
        <div class="card">
          <div class="card-body" style="padding:24px;">
            <div style="display:flex;gap:8px;margin-bottom:14px;">
              ${c.tags.map(t=>`<span style="background:${c.bg};color:${c.color};border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600">${t}</span>`).join('')}
              <span style="background:#E1F5EE;color:#0F6E56;border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600">🟢 Active</span>
            </div>
            <h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--green-deep);margin-bottom:10px;">${c.title}</h2>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;margin-bottom:20px;">
              Dans les communes de l'Atacora et de la Donga, plus de 320 000 personnes n'ont pas accès à l'eau potable. Cette campagne vise à interpeller le gouvernement béninois et les partenaires techniques pour financer la construction de 50 nouvelles infrastructures hydrauliques dans les zones les plus défavorisées.
            </p>
            <div style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-family:var(--font-display);font-size:28px;font-weight:700;color:${c.color}">${c.signatures.toLocaleString('fr')}</span>
              <span style="font-size:13px;color:var(--text-light)">sur ${c.goal.toLocaleString('fr')} objectif</span>
            </div>
            <div style="height:10px;background:var(--gray-100);border-radius:5px;margin-bottom:10px;">
              <div style="height:10px;border-radius:5px;background:${c.color};width:${progress}%;transition:width .6s"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-light);margin-bottom:20px;">
              <span><strong style="color:var(--text-main)">${progress}%</strong> de l'objectif</span>
              <span>⏱ <strong style="color:var(--text-main)">${c.days} jours</strong> restants</span>
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
            ${[{init:"OBE",name:"ONG Bénin Eau Vie",role:"Porteur principal"},{init:"UNI",name:"Université d'Abomey",role:"Partenaire académique"},{init:"WA",name:"WaterAid Bénin",role:"Partenaire technique"}].map(p=>`
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:36px;height:36px;border-radius:10px;background:var(--green-soft);color:var(--green-mid);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;">${p.init}</div>
                <div><div style="font-size:13px;font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--text-light)">${p.role}</div></div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Colonne droite -->
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Signataires récents -->
        <div class="card">
          <div class="card-header"><span class="card-title">Derniers signataires</span></div>
          <div class="card-body">
            ${signataires.map(s=>`
              <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:30px;height:30px;border-radius:50%;background:var(--green-soft);color:var(--green-mid);font-size:11px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.init}</div>
                <div style="flex:1"><div style="font-size:12.5px;font-weight:500">${s.name}</div><div style="font-size:11px;color:var(--text-light)">📍 ${s.lieu}</div></div>
                <span style="font-size:11px;color:var(--text-light)">${s.temps}</span>
              </div>`).join('')}
            <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px;justify-content:center;">Voir tous les signataires</button>
          </div>
        </div>

        <!-- Mises à jour -->
        <div class="card">
          <div class="card-header"><span class="card-title">Mises à jour</span></div>
          <div class="card-body">
            ${updates.map((u,i)=>`
              <div style="padding:10px 0;border-bottom:${i<updates.length-1?'1px solid var(--gray-100)':'none'}">
                <div style="font-size:11px;color:var(--text-light);margin-bottom:3px">${u.date}</div>
                <div style="font-size:13px;font-weight:600;margin-bottom:4px">${u.title}</div>
                <div style="font-size:12px;color:var(--text-sub);line-height:1.5">${u.text}</div>
              </div>`).join('')}
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
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE NOUVEAU SIGNALEMENT
// ═══════════════════════════════════════════════════════════════════
export function nouveauSignalementPage() {
  return `
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
              ${[{n:6,label:"💧 Eau propre",color:"#26BDE2"},{n:7,label:"⚡ Énergie",color:"#FCC30B"},{n:11,label:"🏘️ Villes",color:"#FD9D24"},{n:13,label:"🌡️ Climat",color:"#3F7E44"},{n:14,label:"🐟 Mer",color:"#0A97D9"},{n:15,label:"🌿 Forêts",color:"#56C02B"},{n:3,label:"❤️ Santé",color:"#4C9F38"},{n:12,label:"♻️ Déchets",color:"#BF8B2E"}].map(o=>`
                <button onclick="selectODD(this,'${o.color}')"
                  style="padding:8px 6px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:12px;font-weight:500;cursor:pointer;background:white;color:var(--text-main);transition:all .2s;text-align:center;">
                  ${o.label}
                </button>`).join('')}
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
              ${[{val:"low",label:"🟢 Faible",desc:"Peut attendre"},{val:"medium",label:"🟡 Modéré",desc:"À traiter sous 48h"},{val:"high",label:"🔴 Urgent",desc:"Intervention rapide nécessaire"}].map(u=>`
                <label style="flex:1;border:1px solid var(--gray-200);border-radius:var(--radius-sm);padding:10px;cursor:pointer;text-align:center;">
                  <input type="radio" name="urgence" value="${u.val}" style="display:none">
                  <div style="font-size:13px;font-weight:600;margin-bottom:2px">${u.label}</div>
                  <div style="font-size:11px;color:var(--text-light)">${u.desc}</div>
                </label>`).join('')}
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
  </script>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE DÉTAIL ODD
// ═══════════════════════════════════════════════════════════════════
export function oddDetailPage() {
  const odd = ODDS[5]; // ODD 6 - Eau
  const indicators = [
    { label:"% population accès eau potable", val:"52%", trend:"▲ +3%", color:"#1D9E75" },
    { label:"% ménages eau courante domicile", val:"24%", trend:"▲ +1.5%", color:"#1D9E75" },
    { label:"Délai moyen accès point d'eau", val:"38 min", trend:"▼ -5 min", color:"#1D9E75" },
    { label:"Communes avec eau traitée", val:"28 / 77", trend:"▲ +4", color:"#1D9E75" },
    { label:"Budget gouvernemental alloué", val:"12.4 Md FCFA", trend:"▲ +8%", color:"#1D9E75" },
    { label:"Puits fonctionnels recensés", val:"4 820", trend:"▼ -120", color:"#E8A000" },
  ];
  return `
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
            ${indicators.map(ind=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:12.5px;color:var(--text-sub);flex:1;padding-right:12px">${ind.label}</span>
                <div style="text-align:right">
                  <div style="font-size:14px;font-weight:700;color:var(--green-deep)">${ind.val}</div>
                  <div style="font-size:11px;color:${ind.color}">${ind.trend}</div>
                </div>
              </div>`).join('')}
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
            ${[
              {dep:"Littoral",val:89},{dep:"Atlantique",val:71},{dep:"Ouémé",val:64},
              {dep:"Borgou",val:48},{dep:"Zou",val:44},{dep:"Atacora",val:31},
              {dep:"Alibori",val:28},{dep:"Donga",val:35}
            ].map(d=>`
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                <span style="font-size:12px;color:var(--text-main);width:80px;flex-shrink:0">${d.dep}</span>
                <div style="flex:1;height:6px;background:var(--gray-100);border-radius:3px">
                  <div style="height:6px;border-radius:3px;background:${d.val>=60?'#1D9E75':d.val>=40?'#E8A000':'#D85A30'};width:${d.val}%"></div>
                </div>
                <span style="font-size:12px;font-weight:600;width:32px;text-align:right">${d.val}%</span>
              </div>`).join('')}
          </div>
        </div>

        <!-- Actions liées -->
        <div class="card">
          <div class="card-header"><span class="card-title">Campagnes liées</span></div>
          <div class="card-body">
            ${CAMPAIGNS.filter(c=>c.odd===6||c.odd===14).map(c=>`
              <div onclick="navigate('campagne-detail')" style="padding:10px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);cursor:pointer;margin-bottom:8px;background:white;transition:all .2s"
                onmouseover="this.style.borderColor='#26BDE2'" onmouseout="this.style.borderColor='var(--gray-200)'">
                <div style="font-size:12.5px;font-weight:600;margin-bottom:3px">${c.title}</div>
                <div style="font-size:11px;color:var(--text-light)">${c.signatures.toLocaleString('fr')} signatures · ${c.days} jours restants</div>
              </div>`).join('')}
            <button onclick="navigate('plaidoyer')" class="btn btn-outline btn-sm" style="width:100%;justify-content:center;margin-top:4px">Voir toutes les campagnes ODD 6</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════
export function notificationsPage() {
  const notifs = [
    { icon:"✍️", type:"Pétition", title:"Ta signature a été confirmée", sub:"Campagne : Eau pour tous au Nord-Bénin", time:"Il y a 2h", unread:true, color:"#26BDE2" },
    { icon:"🚨", type:"Alerte", title:"Nouveau signalement dans ta commune", sub:"Déversement industriel · Cotonou, Littoral", time:"Il y a 3h", unread:true, color:"#D85A30" },
    { icon:"💬", type:"Forum", title:"Réponse à ton post", sub:"Ibrahim M. a répondu à « Comment impliquer les jeunes... »", time:"Il y a 5h", unread:true, color:"#6C63CC" },
    { icon:"🎉", type:"Badge", title:"Nouveau badge obtenu !", sub:"Tu as reçu le badge « Défenseur de l'eau »", time:"Il y a 1j", unread:true, color:"#E8A000" },
    { icon:"📅", type:"Événement", title:"Rappel : Forum National ODD dans 5 jours", sub:"15 Juin · Cotonou, Palais des Congrès", time:"Il y a 1j", unread:false, color:"#1D9E75" },
    { icon:"📊", type:"Dashboard", title:"Mise à jour des indicateurs ODD", sub:"Les données INSAE du T1 2025 sont disponibles", time:"Il y a 2j", unread:false, color:"#185FA5" },
    { icon:"📢", type:"Campagne", title:"La campagne Eau progresse !", sub:"4 800 signatures — 96% de l'objectif atteint", time:"Il y a 3j", unread:false, color:"#26BDE2" },
    { icon:"✅", type:"Signalement", title:"Ton signalement a été résolu", sub:"Reboisement Abomey-Calavi · Résolu par la mairie", time:"Il y a 5j", unread:false, color:"#1D9E75" },
  ];
  return `
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
        ${notifs.map((n,i)=>`
          <div style="display:flex;align-items:flex-start;gap:14px;padding:16px 20px;border-bottom:${i<notifs.length-1?'1px solid var(--gray-100)':'none'};background:${n.unread?'var(--green-pale)':'white'};cursor:pointer;transition:background .2s"
            onmouseover="this.style.background='${n.unread?'#e0f5ec':'var(--gray-100)'}'" onmouseout="this.style.background='${n.unread?'var(--green-pale)':'white'}'">
            <div style="width:40px;height:40px;border-radius:10px;background:${n.color}22;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${n.icon}</div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
                <span style="font-size:11px;font-weight:600;color:${n.color};background:${n.color}18;border-radius:4px;padding:1px 7px">${n.type}</span>
                ${n.unread?'<span style="width:7px;height:7px;border-radius:50%;background:var(--green-live);display:inline-block"></span>':''}
              </div>
              <div style="font-size:13.5px;font-weight:${n.unread?'600':'400'};color:var(--text-main);margin-bottom:2px">${n.title}</div>
              <div style="font-size:12px;color:var(--text-sub)">${n.sub}</div>
            </div>
            <div style="font-size:11px;color:var(--text-light);flex-shrink:0;margin-top:2px">${n.time}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE PARAMÈTRES
// ═══════════════════════════════════════════════════════════════════
export function parametresPage() {
  const sections = [
    { id:"compte", label:"👤 Compte & Profil" },
    { id:"notifs", label:"🔔 Notifications" },
    { id:"confidentialite", label:"🔒 Confidentialité" },
    { id:"langue", label:"🌍 Langue & Région" },
    { id:"apparence", label:"🎨 Apparence" },
  ];
  return `
  <div class="fade-up">
    <h2 class="section-title" style="margin-bottom:24px;">Paramètres</h2>

    <div style="display:grid;grid-template-columns:220px 1fr;gap:20px;">
      <!-- Sidebar paramètres -->
      <div class="card" style="height:fit-content;">
        <div class="card-body" style="padding:10px;">
          ${sections.map((s,i)=>`
            <button onclick="showSection('${s.id}')" id="sec-btn-${s.id}"
              style="width:100%;text-align:left;padding:10px 12px;border:none;border-radius:var(--radius-sm);font-size:13px;cursor:pointer;font-family:var(--font-body);margin-bottom:2px;transition:all .2s;
              background:${i===0?'var(--green-soft)':'transparent'};color:${i===0?'var(--green-mid)':'var(--text-main)'};font-weight:${i===0?'600':'400'}">
              ${s.label}
            </button>`).join('')}
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
            ${[
              {label:"Prénom", val:"Yao", type:"text"},
              {label:"Nom", val:"Kouassi", type:"text"},
              {label:"Email", val:"yao.kouassi@email.com", type:"email"},
              {label:"Commune", val:"Cotonou", type:"text"},
              {label:"Téléphone", val:"+229 97 XX XX XX", type:"tel"},
            ].map(f=>`
              <div>
                <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">${f.label}</label>
                <input type="${f.type}" value="${f.val}"
                  style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;color:var(--text-main)">
              </div>`).join('')}
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
            ${[
              {label:"Nouvelles campagnes de plaidoyer", detail:"Quand une campagne est lancée dans ta commune"},
              {label:"Signalements dans ta zone", detail:"Alertes géolocalisées près de chez toi"},
              {label:"Réponses à tes posts forum", detail:"Quand quelqu'un répond à ta discussion"},
              {label:"Mises à jour des pétitions signées", detail:"Progression et résultats de tes pétitions"},
              {label:"Événements à venir", detail:"Rappels 24h avant les événements inscrits"},
              {label:"Nouveaux documents ODD", detail:"Quand un rapport ou guide est publié"},
              {label:"Newsletter mensuelle", detail:"Résumé mensuel des activités ODD Bénin"},
            ].map((n,i)=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:${i<6?'1px solid var(--gray-100)':'none'}">
                <div>
                  <div style="font-size:13.5px;font-weight:500;margin-bottom:2px">${n.label}</div>
                  <div style="font-size:12px;color:var(--text-light)">${n.detail}</div>
                </div>
                <label style="position:relative;width:40px;height:22px;cursor:pointer;flex-shrink:0">
                  <input type="checkbox" ${i<5?'checked':''} style="display:none" class="toggle-input">
                  <span style="position:absolute;inset:0;border-radius:11px;background:${i<5?'var(--green-live)':'var(--gray-200)'};transition:.2s"></span>
                  <span style="position:absolute;top:3px;left:${i<5?'21':'3'}px;width:16px;height:16px;border-radius:50%;background:white;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.2)"></span>
                </label>
              </div>`).join('')}
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
                ${[{v:"public",l:"🌍 Public — Visible par tous"},{v:"members",l:"👥 Membres — Visible par les inscrits"},{v:"private",l:"🔒 Privé — Visible uniquement par toi"}].map((o,i)=>`
                  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;">
                    <input type="radio" name="visibility" value="${o.v}" ${i===0?'checked':''} style="accent-color:var(--green-live)"> ${o.l}
                  </label>`).join('')}
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
                ${[{id:"light",label:"☀️ Clair",active:true},{id:"dark",label:"🌙 Sombre",active:false},{id:"auto",label:"💻 Système",active:false}].map(t=>`
                  <button style="padding:16px 12px;border:${t.active?'2px solid var(--green-live)':'1px solid var(--gray-200)'};border-radius:var(--radius-md);font-size:13px;font-weight:${t.active?'600':'400'};cursor:pointer;background:${t.active?'var(--green-pale)':'white'};color:${t.active?'var(--green-mid)':'var(--text-main)'}">
                    ${t.label}
                  </button>`).join('')}
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
                ${[{l:"Compact",s:true},{l:"Confortable",s:false}].map(d=>`
                  <button style="padding:12px;border:${d.s?'2px solid var(--green-live)':'1px solid var(--gray-200)'};border-radius:var(--radius-md);font-size:13px;cursor:pointer;background:${d.s?'var(--green-pale)':'white'};color:${d.s?'var(--green-mid)':'var(--text-main)'}">${d.l}</button>`).join('')}
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
  </script>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE PARTENAIRES
// ═══════════════════════════════════════════════════════════════════
export function partenairesPage() {
  const partenaires = [
    { init:"PNUD", name:"Programme des Nations Unies pour le développement", type:"Organisation internationale", pays:"ONU", odds:[1,2,3,8,10,16,17], desc:"Soutien technique et financier au suivi des ODD au Bénin." },
    { init:"UNICEF", name:"Fonds des Nations Unies pour l'enfance", type:"Organisation internationale", pays:"ONU", odds:[2,3,4,5,6], desc:"Protection des droits des enfants et appui aux services sociaux de base." },
    { init:"INSAE", name:"Institut National de la Statistique et de l'Analyse Économique", type:"Institution publique", pays:"Bénin", odds:[17], desc:"Production des données statistiques nationales sur les ODD." },
    { init:"UAC", name:"Université d'Abomey-Calavi", type:"Académique", pays:"Bénin", odds:[4,9,17], desc:"Recherche et formation sur le développement durable au Bénin." },
    { init:"GIZ", name:"Coopération Technique Allemande", type:"Coopération bilatérale", pays:"Allemagne", odds:[6,7,11,13,15], desc:"Projets d'eau, d'énergie et d'urbanisme durable." },
    { init:"AFD", name:"Agence Française de Développement", type:"Coopération bilatérale", pays:"France", odds:[6,7,8,9,11], desc:"Financement de projets structurants pour le développement." },
    { init:"WA", name:"WaterAid Bénin", type:"ONG internationale", pays:"Bénin", odds:[6], desc:"Accès à l'eau potable et assainissement pour les populations vulnérables." },
    { init:"EBI", name:"Éco-Bénin Initiative", type:"ONG nationale", pays:"Bénin", odds:[12,13,14,15], desc:"Promotion de l'économie verte et protection de la biodiversité." },
  ];
  const typeColors = {"Organisation internationale":"#26BDE2","Institution publique":"#1D9E75","Académique":"#6C63CC","Coopération bilatérale":"#185FA5","ONG internationale":"#E8A000","ONG nationale":"#C94F7B"};
  return `
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
      ${partenaires.map(p=>{
        const col = typeColors[p.type] || '#888';
        return `
        <div class="card" style="cursor:pointer;transition:all .2s" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div class="card-body" style="padding:20px;">
            <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
              <div style="width:44px;height:44px;border-radius:10px;background:${col}22;color:${col};font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${p.init}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:600;line-height:1.3;margin-bottom:4px">${p.name}</div>
                <span style="font-size:10px;font-weight:600;background:${col}18;color:${col};border-radius:4px;padding:2px 7px">${p.type}</span>
              </div>
            </div>
            <p style="font-size:12.5px;color:var(--text-sub);line-height:1.5;margin-bottom:12px">${p.desc}</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;">
              ${p.odds.map(n=>`<span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--text-sub);border-radius:4px;padding:2px 6px">ODD ${n}</span>`).join('')}
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>

    <div style="margin-top:28px;background:linear-gradient(135deg,var(--navy),var(--green-deep));border-radius:var(--radius-xl);padding:40px;text-align:center;">
      <h3 style="font-family:var(--font-display);font-size:24px;color:white;margin-bottom:10px">Rejoindre le réseau ODD Connect</h3>
      <p style="font-size:14px;color:rgba(255,255,255,.65);max-width:500px;margin:0 auto 20px;line-height:1.7">Ton organisation œuvre pour les ODD au Bénin ? Rejoins notre réseau et amplifiez ensemble l'impact de vos actions.</p>
      <button class="btn-hero-primary">Candidater comme partenaire →</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE À PROPOS
// ═══════════════════════════════════════════════════════════════════
export function aproposPage() {
  const team = [
    { init:"AK", name:"Adélaïde Kpossou", role:"Directrice exécutive", bg:"#E1F5EE", color:"#0F6E56" },
    { init:"SM", name:"Serge Médégan", role:"Responsable technique", bg:"#EAF4FF", color:"#185FA5" },
    { init:"FM", name:"Fatima Maïga", role:"Chargée de plaidoyer", bg:"#FFE9F3", color:"#C94F7B" },
    { init:"KD", name:"Kodjo Dossou", role:"Analyste données ODD", bg:"#F0EEFF", color:"#6C63CC" },
  ];
  return `
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
            ${[
              {icon:"🌍", v:"Inclusivité", d:"Accessible à tous les béninois, sans exclusion"},
              {icon:"📊", v:"Transparence", d:"Données ouvertes et processus vérifiables"},
              {icon:"🤝", v:"Collaboration", d:"Co-construction avec les communautés"},
              {icon:"⚡", v:"Action", d:"Du plaidoyer aux résultats concrets"},
            ].map(v=>`
              <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:18px">${v.icon}</span>
                <div><div style="font-size:13px;font-weight:600">${v.v}</div><div style="font-size:12px;color:var(--text-sub)">${v.d}</div></div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">L'équipe</span></div>
          <div class="card-body">
            ${team.map(m=>`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-100);">
                <div style="width:40px;height:40px;border-radius:50%;background:${m.bg};color:${m.color};font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${m.init}</div>
                <div><div style="font-size:13px;font-weight:600">${m.name}</div><div style="font-size:12px;color:var(--text-sub)">${m.role}</div></div>
              </div>`).join('')}
            <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;margin-top:8px">Voir toute l'équipe</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title" style="font-size:15px;">Contact</span></div>
          <div class="card-body">
            ${[
              {icon:"📧", label:"Email", val:"contact@oddconnect.bj"},
              {icon:"📱", label:"WhatsApp", val:"+229 01 XX XX XX"},
              {icon:"🌐", label:"Site", val:"www.oddconnect.bj"},
              {icon:"🐦", label:"Twitter / X", val:"@ODDConnectBenin"},
            ].map(c=>`
              <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--gray-100);">
                <span style="font-size:16px;width:24px;text-align:center">${c.icon}</span>
                <div><div style="font-size:11px;color:var(--text-light)">${c.label}</div><div style="font-size:13px;color:var(--green-mid);font-weight:500">${c.val}</div></div>
              </div>`).join('')}
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
          ${[
            {year:"2023", event:"Idée & recherche", desc:"Consultation de 200 citoyens et 40 organisations"},
            {year:"Fév. 2024", event:"Lancement MVP", desc:"Dashboard ODD + Plaidoyer + 3 communes pilotes"},
            {year:"Juin 2024", event:"Phase pilote", desc:"1 200 utilisateurs · 8 campagnes · 15 communes"},
            {year:"2025", event:"Déploiement national", desc:"Toutes les 77 communes · App mobile · IA"},
          ].map((e,i)=>`
            <div style="text-align:center;position:relative;z-index:1;padding:0 10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:var(--green-live);color:white;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;border:3px solid white;box-shadow:0 0 0 2px var(--green-live)">${i+1}</div>
              <div style="font-size:12px;font-weight:700;color:var(--green-deep);margin-bottom:2px">${e.year}</div>
              <div style="font-size:13px;font-weight:600;margin-bottom:4px">${e.event}</div>
              <div style="font-size:11px;color:var(--text-sub);line-height:1.5">${e.desc}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE ADMIN
// ═══════════════════════════════════════════════════════════════════
export function adminPage() {
  const actions = [
    { icon:"👥", label:"Utilisateurs", val:"12 418", sub:"34 nouveaux aujourd'hui", color:"#1D9E75" },
    { icon:"🚨", label:"Signalements à valider", val:"23", sub:"Attente modération", color:"#D85A30" },
    { icon:"📢", label:"Campagnes actives", val:"34", sub:"8 en attente d'approbation", color:"#E8A000" },
    { icon:"📄", label:"Documents à valider", val:"7", sub:"Soumis cette semaine", color:"#185FA5" },
  ];
  const logs = [
    { time:"14:32", event:"Nouveau signalement soumis", user:"Amina K.", type:"signal", color:"#D85A30" },
    { time:"14:18", event:"Campagne validée et publiée", user:"Admin", type:"admin", color:"#1D9E75" },
    { time:"13:55", event:"Inscription nouvel utilisateur", user:"Ibrahim M.", type:"user", color:"#185FA5" },
    { time:"13:40", event:"Document mis en ligne", user:"INSAE Bénin", type:"doc", color:"#6C63CC" },
    { time:"12:18", event:"Signalement marqué résolu", user:"Mairie Abomey", type:"signal", color:"#1D9E75" },
    { time:"11:44", event:"Campagne signalée comme spam", user:"Kofi T.", type:"flag", color:"#E8A000" },
  ];
  return `
  <div class="fade-up">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div style="width:36px;height:36px;border-radius:10px;background:#FFE0DC;color:#D85A30;font-size:18px;display:flex;align-items:center;justify-content:center;">🛡️</div>
      <div>
        <h2 class="section-title">Panneau d'administration</h2>
        <p class="section-sub">Vue réservée aux modérateurs et administrateurs</p>
      </div>
    </div>

    <div class="kpi-grid mb-24">
      ${actions.map(a=>`
        <div class="kpi-card" style="cursor:pointer" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font-size:22px">${a.icon}</span>
            <span style="font-size:11px;color:var(--text-light);font-weight:500;text-transform:uppercase;letter-spacing:.05em">${a.label}</span>
          </div>
          <div class="kpi-value" style="color:${a.color}">${a.val}</div>
          <div style="font-size:12px;color:var(--text-light);margin-top:4px">${a.sub}</div>
        </div>`).join('')}
    </div>

    <div class="grid-3 mb-16">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Actions rapides -->
        <div class="card">
          <div class="card-header"><span class="card-title">File de modération</span></div>
          <div class="card-body">
            ${SIGNALS.slice(0,3).map(s=>`
              <div style="padding:10px 0;border-bottom:1px solid var(--gray-100)">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:12px;font-weight:600">${s.title}</span>
                  <span style="font-size:10px;background:#FFF8E1;color:#E8A000;border-radius:4px;padding:2px 7px;font-weight:600">À valider</span>
                </div>
                <div style="font-size:11px;color:var(--text-light);margin-bottom:8px">📍 ${s.location}</div>
                <div style="display:flex;gap:6px">
                  <button class="btn btn-sm" style="background:var(--green-live);color:white;border:none;padding:4px 10px;border-radius:4px;font-size:11px;cursor:pointer">✓ Valider</button>
                  <button class="btn btn-sm" style="background:var(--coral);color:white;border:none;padding:4px 10px;border-radius:4px;font-size:11px;cursor:pointer">✗ Rejeter</button>
                </div>
              </div>`).join('')}
            <button class="btn btn-outline btn-sm" style="width:100%;justify-content:center;margin-top:8px">Voir tout (23)</button>
          </div>
        </div>

        <!-- Accès rapides -->
        <div class="card">
          <div class="card-header"><span class="card-title">Accès rapides</span></div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:6px;">
            ${[
              {icon:"👥",label:"Gérer les utilisateurs"},
              {icon:"📢",label:"Approuver les campagnes"},
              {icon:"📄",label:"Valider les documents"},
              {icon:"📊",label:"Mettre à jour les données ODD"},
              {icon:"📧",label:"Envoyer une communication"},
              {icon:"⚙️",label:"Configuration plateforme"},
            ].map(a=>`<button class="btn btn-outline btn-sm" style="justify-content:flex-start;gap:8px">${a.icon} ${a.label}</button>`).join('')}
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
          ${logs.map(l=>`
            <div style="display:flex;gap:10px;padding:12px 20px;border-bottom:1px solid var(--gray-100);align-items:flex-start;">
              <span style="font-size:11px;color:var(--text-light);width:38px;flex-shrink:0;margin-top:1px">${l.time}</span>
              <div style="width:6px;height:6px;border-radius:50%;background:${l.color};margin-top:5px;flex-shrink:0"></div>
              <div style="flex:1">
                <div style="font-size:12.5px;color:var(--text-main)">${l.event}</div>
                <div style="font-size:11px;color:var(--text-light)">par ${l.user}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════════
// PAGE 404
// ═══════════════════════════════════════════════════════════════════
export function notFoundPage() {
  return `
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
  </div>`;
}
