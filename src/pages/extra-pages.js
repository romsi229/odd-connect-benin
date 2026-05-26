import { ODDS, CAMPAIGNS, SIGNALS, FORUM_POSTS, EVENTS, DOCS } from '../data/data.js';

// ═══════════════════════════════════════════════════════════════
// RECHERCHE
// ═══════════════════════════════════════════════════════════════
export function recherchePage() {
  const results = [
    { type:"Campagne", icon:"📢", color:"#E8A000", bg:"#FFF8E1", title:"Eau pour tous au Nord-Bénin", sub:"4 820 signatures · ODD 6 · Active", page:"campagne-detail" },
    { type:"ODD", icon:"💧", color:"#26BDE2", bg:"#EAF8FD", title:"ODD 6 — Eau propre et assainissement", sub:"Score Bénin : 48% · Modéré", page:"odd-detail" },
    { type:"Signalement", icon:"🚨", color:"#D85A30", bg:"#FFF0EE", title:"Déversement industriel dans l'Ouémé", sub:"Adjohoun · Il y a 2h · En cours", page:"signal-detail" },
    { type:"Forum", icon:"💬", color:"#6C63CC", bg:"#F0EEFF", title:"Comment impliquer les jeunes dans le suivi des ODD ?", sub:"24 réponses · 41 likes · Kouassi A.", page:"forum-detail" },
    { type:"Document", icon:"📄", color:"#1D9E75", bg:"#E1F5EE", title:"Rapport ODD Bénin 2024", sub:"INSAE · Mars 2024 · 128 pages", page:"doc-detail" },
    { type:"Événement", icon:"📅", color:"#185FA5", bg:"#EAF4FF", title:"Forum National ODD Bénin 2025", sub:"15 Juin · Cotonou, Palais des Congrès", page:"event-detail" },
  ];

  return `
  <div class="fade-up">
    <h2 class="section-title" style="margin-bottom:16px;">Recherche</h2>

    <div style="background:white;border-radius:var(--radius-lg);border:1.5px solid var(--green-live);padding:14px 18px;margin-bottom:20px;display:flex;gap:12px;align-items:center;box-shadow:0 0 0 4px rgba(29,158,117,.08);">
      <span style="font-size:20px">🔍</span>
      <input id="search-input" type="text" placeholder="Rechercher campagnes, ODD, signalements, documents…"
        style="border:none;outline:none;flex:1;font-size:15px;font-family:var(--font-body);color:var(--text-main);background:transparent;"
        oninput="filterResults(this.value)" autofocus>
      <button onclick="document.getElementById('search-input').value='';filterResults('')" class="btn btn-ghost btn-sm">✕</button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm" onclick="filterType('all')">Tout</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('Campagne')">📢 Campagnes</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('ODD')">🌍 ODD</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('Signalement')">🚨 Signalements</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('Forum')">💬 Forum</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('Document')">📄 Documents</button>
      <button class="btn btn-outline btn-sm" onclick="filterType('Événement')">📅 Événements</button>
    </div>

    <div id="results-list" style="display:flex;flex-direction:column;gap:8px;">
      ${results.map(r => `
        <div class="search-result-card" data-type="${r.type}" onclick="navigate('${r.page}')"
          style="background:white;border:1px solid var(--gray-200);border-radius:var(--radius-md);padding:14px 18px;display:flex;align-items:center;gap:14px;cursor:pointer;transition:all .2s;box-shadow:var(--shadow-sm);"
          onmouseover="this.style.borderColor='var(--green-live)';this.style.boxShadow='var(--shadow-md)'"
          onmouseout="this.style.borderColor='var(--gray-200)';this.style.boxShadow='var(--shadow-sm)'">
          <div style="width:42px;height:42px;border-radius:10px;background:${r.bg};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${r.icon}</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
              <span style="font-size:10px;font-weight:600;background:${r.bg};color:${r.color};border-radius:4px;padding:2px 7px">${r.type}</span>
            </div>
            <div style="font-size:13.5px;font-weight:600;color:var(--text-main);margin-bottom:2px">${r.title}</div>
            <div style="font-size:12px;color:var(--text-sub)">${r.sub}</div>
          </div>
          <span style="font-size:16px;color:var(--text-light)">→</span>
        </div>`).join('')}
    </div>

    <div id="no-result" style="display:none;text-align:center;padding:48px;color:var(--text-sub);">
      <div style="font-size:40px;margin-bottom:12px">🔍</div>
      <div style="font-size:15px;font-weight:600;margin-bottom:6px">Aucun résultat</div>
      <div style="font-size:13px">Essaie avec d'autres mots clés</div>
    </div>
  </div>

  <script>
  window.filterResults = function(val) {
    const cards = document.querySelectorAll('.search-result-card');
    let found = 0;
    cards.forEach(c => {
      const matches = c.innerText.toLowerCase().includes(val.toLowerCase());
      c.style.display = matches ? 'flex' : 'none';
      if (matches) found++;
    });
    document.getElementById('no-result').style.display = found === 0 ? 'block' : 'none';
  };
  window.filterType = function(type) {
    const cards = document.querySelectorAll('.search-result-card');
    cards.forEach(c => {
      c.style.display = (type === 'all' || c.dataset.type === type) ? 'flex' : 'none';
    });
    document.getElementById('no-result').style.display = 'none';
  };
  </script>`;
}

// ═══════════════════════════════════════════════════════════════
// DETAIL FORUM POST
// ═══════════════════════════════════════════════════════════════
export function forumDetailPage() {
  const post = FORUM_POSTS[0];
  const replies = [
    { init:"RM", name:"Reine F.", time:"Il y a 1h", likes:18, text:"Excellente initiative ! Dans ma commune de Bohicon, on a essayé la même chose avec le lycée technique. Le plus difficile c'est de maintenir la motivation sur la durée. As-tu des astuces pour garder les jeunes engagés après les premiers mois ?" },
    { init:"IB", name:"Ibrahim M.", time:"Il y a 3h", likes:12, text:"Super article ! Je travaille sur un projet similaire à Kandi. Je pense que le digital est la clé — les jeunes sont beaucoup plus réceptifs quand on utilise WhatsApp et TikTok pour communiquer sur les ODD." },
    { init:"AT", name:"Adélaïde T.", time:"Il y a 5h", likes:7, text:"Merci pour ce partage. Est-ce que tu as eu du soutien de la mairie de Bohicon ? Dans mon cas à Parakou, le partenariat avec la commune a vraiment changé les choses pour obtenir des salles et du matériel." },
    { init:"FK", name:"Fidèle K.", time:"Il y a 8h", likes:4, text:"Très inspirant ! J'aimerais reproduire cela dans mon école à Cotonou. Tu serais disponible pour un échange direct pour partager tes expériences ?" },
  ];

  return `
  <div class="fade-up">
    <button onclick="navigate('forum')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour au forum</button>

    <div class="grid-3">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <!-- Post principal -->
        <div class="card">
          <div class="card-body" style="padding:24px;">
            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
              ${post.tags.map(t=>`<span style="background:var(--green-soft);color:var(--green-mid);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600">${t}</span>`).join('')}
            </div>
            <h2 style="font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--green-deep);margin-bottom:14px;line-height:1.3">${post.title}</h2>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--gray-100)">
              <div style="width:36px;height:36px;border-radius:50%;background:var(--green-soft);color:var(--green-mid);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center">${post.author[0]}</div>
              <div><div style="font-size:13px;font-weight:600">${post.author}</div><div style="font-size:11px;color:var(--text-light)">${post.time} · Bohicon, Zou</div></div>
              <div style="margin-left:auto;display:flex;gap:8px">
                <span style="font-size:12px;color:var(--text-light)">💬 ${post.replies}</span>
                <span style="font-size:12px;color:var(--text-light)">❤️ ${post.likes}</span>
              </div>
            </div>
            <p style="font-size:14px;color:var(--text-main);line-height:1.8;margin-bottom:16px">
              Dans ma commune de Bohicon, j'ai constaté que peu de jeunes connaissaient les ODD malgré leur importance. En septembre 2024, j'ai décidé de créer le premier club ODD dans mon lycée avec l'aide du directeur.
            </p>
            <p style="font-size:14px;color:var(--text-main);line-height:1.8;margin-bottom:16px">
              Après 6 mois, voici les résultats : <strong>47 membres actifs</strong>, 3 actions de terrain réalisées (reboisement, collecte de déchets, sensibilisation eau), et une présentation devant la mairie qui a abouti à un partenariat officiel.
            </p>
            <p style="font-size:14px;color:var(--text-main);line-height:1.8;">
              La clé ? Rendre les ODD concrets et locaux. Plutôt que de parler de "développement durable", on parle de "notre rivière", "notre école", "notre marché". Les jeunes se sentent concernés quand c'est leur environnement immédiat.
            </p>
            <div style="display:flex;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid var(--gray-100)">
              <button class="btn btn-outline btn-sm">❤️ J'aime (${post.likes})</button>
              <button class="btn btn-outline btn-sm">📤 Partager</button>
              <button class="btn btn-outline btn-sm">🔖 Sauvegarder</button>
            </div>
          </div>
        </div>

        <!-- Réponses -->
        <div class="card">
          <div class="card-header"><span class="card-title">${post.replies} Réponses</span></div>
          <div class="card-body" style="padding:0">
            ${replies.map((r,i)=>`
              <div style="padding:16px 20px;border-bottom:${i<replies.length-1?'1px solid var(--gray-100)':'none'}">
                <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px">
                  <div style="width:32px;height:32px;border-radius:50%;background:var(--green-soft);color:var(--green-mid);font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:center;flex-shrink:0">${r.init}</div>
                  <div style="flex:1">
                    <div style="display:flex;justify-content:space-between;align-items:baseline">
                      <span style="font-size:13px;font-weight:600">${r.name}</span>
                      <span style="font-size:11px;color:var(--text-light)">${r.time}</span>
                    </div>
                    <p style="font-size:13px;color:var(--text-sub);line-height:1.6;margin-top:6px">${r.text}</p>
                    <button style="background:none;border:none;font-size:11px;color:var(--text-light);cursor:pointer;margin-top:6px;padding:0">❤️ ${r.likes} · Répondre</button>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Écrire une réponse -->
        <div class="card">
          <div class="card-header"><span class="card-title">Écrire une réponse</span></div>
          <div class="card-body">
            <textarea rows="4" placeholder="Partage ton expérience ou pose une question…"
              style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;resize:vertical;margin-bottom:10px;"></textarea>
            <button class="btn btn-primary">💬 Publier la réponse</button>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Discussions similaires</span></div>
          <div class="card-body">
            ${FORUM_POSTS.slice(1).map(p=>`
              <div onclick="navigate('forum-detail')" style="padding:10px 0;border-bottom:1px solid var(--gray-100);cursor:pointer">
                <div style="font-size:12.5px;font-weight:600;color:var(--text-main);margin-bottom:3px;line-height:1.4">${p.title}</div>
                <div style="font-size:11px;color:var(--text-light)">💬 ${p.replies} · ❤️ ${p.likes}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">À propos de l'auteur</span></div>
          <div class="card-body" style="text-align:center;padding:20px">
            <div style="width:52px;height:52px;border-radius:50%;background:var(--green-soft);color:var(--green-mid);font-size:20px;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 10px">K</div>
            <div style="font-size:14px;font-weight:600">${post.author}</div>
            <div style="font-size:12px;color:var(--text-sub);margin-bottom:12px">Bohicon · 203 contributions</div>
            <span style="background:var(--green-soft);color:var(--green-mid);border-radius:20px;padding:3px 12px;font-size:11px;font-weight:600">🏆 Top contributeur</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// DETAIL DOCUMENT
// ═══════════════════════════════════════════════════════════════
export function docDetailPage() {
  const doc = DOCS[0];
  return `
  <div class="fade-up">
    <button onclick="navigate('bibliotheque')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour à la bibliothèque</button>

    <div class="grid-3">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-body" style="padding:28px;">
            <div style="font-size:48px;margin-bottom:16px">${doc.icon}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
              <span style="background:var(--green-soft);color:var(--green-mid);border-radius:4px;padding:3px 10px;font-size:12px;font-weight:600">${doc.type}</span>
              <span style="background:var(--gray-100);color:var(--text-sub);border-radius:4px;padding:3px 10px;font-size:12px">ODD 1–17</span>
              <span style="background:var(--gray-100);color:var(--text-sub);border-radius:4px;padding:3px 10px;font-size:12px">Bénin</span>
            </div>
            <h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--green-deep);margin-bottom:10px">${doc.title}</h2>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;margin-bottom:20px">
              Ce rapport annuel de l'Institut National de la Statistique et de l'Analyse Économique (INSAE) présente l'état d'avancement du Bénin sur les 17 Objectifs de Développement Durable. Il inclut des données désagrégées par département, commune, genre et tranche d'âge.
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
              ${[
                {label:"Auteur",val:"INSAE Bénin"},
                {label:"Date",val:doc.date},
                {label:"Pages",val:`${doc.pages} pages`},
                {label:"Format",val:"PDF"},
                {label:"Langue",val:"Français"},
                {label:"Téléchargements",val:"1 247"},
              ].map(i=>`
                <div style="padding:10px;background:var(--gray-100);border-radius:var(--radius-sm)">
                  <div style="font-size:10px;color:var(--text-light);font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-bottom:3px">${i.label}</div>
                  <div style="font-size:13px;font-weight:600;color:var(--text-main)">${i.val}</div>
                </div>`).join('')}
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <button class="btn btn-primary" style="justify-content:center;padding:11px">📥 Télécharger le PDF</button>
              <div style="display:flex;gap:8px">
                <button class="btn btn-outline" style="flex:1;justify-content:center">📤 Partager</button>
                <button class="btn btn-outline" style="flex:1;justify-content:center">🔖 Sauvegarder</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Table des matières</span></div>
          <div class="card-body">
            ${[
              {ch:"1",title:"Introduction et contexte",pages:"1–12"},
              {ch:"2",title:"Méthodologie et sources de données",pages:"13–24"},
              {ch:"3",title:"Résultats par ODD (1 à 6)",pages:"25–58"},
              {ch:"4",title:"Résultats par ODD (7 à 12)",pages:"59–92"},
              {ch:"5",title:"Résultats par ODD (13 à 17)",pages:"93–112"},
              {ch:"6",title:"Analyse territoriale par département",pages:"113–122"},
              {ch:"7",title:"Conclusions et recommandations",pages:"123–128"},
            ].map(c=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--gray-100);cursor:pointer"
                onmouseover="this.style.color='var(--green-mid)'" onmouseout="this.style.color='var(--text-main)'">
                <div style="display:flex;gap:10px;align-items:center">
                  <span style="font-size:11px;color:var(--text-light);width:16px">${c.ch}.</span>
                  <span style="font-size:12.5px">${c.title}</span>
                </div>
                <span style="font-size:11px;color:var(--text-light)">${c.pages}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Documents similaires</span></div>
          <div class="card-body">
            ${DOCS.slice(1,4).map(d=>`
              <div onclick="navigate('doc-detail')" style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100);cursor:pointer">
                <span style="font-size:20px">${d.icon}</span>
                <div>
                  <div style="font-size:12.5px;font-weight:600;margin-bottom:2px">${d.title}</div>
                  <div style="font-size:11px;color:var(--text-light)">${d.type} · ${d.date}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// DETAIL ÉVÉNEMENT
// ═══════════════════════════════════════════════════════════════
export function eventDetailPage() {
  const ev = EVENTS[0];
  return `
  <div class="fade-up">
    <button onclick="navigate('calendrier')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour au calendrier</button>

    <div class="grid-3">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div style="background:linear-gradient(135deg,var(--navy),var(--green-deep));border-radius:var(--radius-xl);padding:32px 36px;color:white;">
          <div style="font-size:40px;margin-bottom:12px">${ev.icon}</div>
          <div style="background:rgba(29,158,117,.25);border:1px solid rgba(29,158,117,.4);border-radius:20px;padding:4px 14px;font-size:11px;color:#6BDDAC;display:inline-block;margin-bottom:14px">📅 ${ev.type}</div>
          <h2 style="font-family:var(--font-display);font-size:26px;font-weight:700;line-height:1.3;margin-bottom:10px">${ev.title}</h2>
          <p style="font-size:14px;color:rgba(255,255,255,.65);line-height:1.7">${ev.desc}</p>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Informations pratiques</span></div>
          <div class="card-body">
            ${[
              {icon:"📅",label:"Date",val:`${ev.day} ${ev.month} 2025`},
              {icon:"⏰",label:"Horaire",val:"8h30 – 17h00"},
              {icon:"📍",label:"Lieu",val:ev.location},
              {icon:"👥",label:"Capacité",val:"500 participants"},
              {icon:"🎟️",label:"Accès",val:"Gratuit sur inscription"},
              {icon:"🌐",label:"Langue",val:"Français"},
            ].map(i=>`
              <div style="display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100)">
                <span style="font-size:18px;width:24px;text-align:center">${i.icon}</span>
                <div>
                  <div style="font-size:11px;color:var(--text-light);font-weight:600">${i.label}</div>
                  <div style="font-size:13px;font-weight:500">${i.val}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Programme</span></div>
          <div class="card-body">
            ${[
              {time:"8h30",act:"Accueil et enregistrement"},
              {time:"9h00",act:"Cérémonie d'ouverture officielle"},
              {time:"9h45",act:"Présentation du rapport ODD Bénin 2024"},
              {time:"11h00",act:"Panels thématiques (4 salles en parallèle)"},
              {time:"12h30",act:"Déjeuner & networking"},
              {time:"14h00",act:"Ateliers de co-construction solutions"},
              {time:"16h00",act:"Restitution et recommandations"},
              {time:"17h00",act:"Clôture et cocktail"},
            ].map((p,i)=>`
              <div style="display:flex;gap:12px;padding:8px 0;border-bottom:${i<7?'1px solid var(--gray-100)':'none'}">
                <span style="font-size:11px;font-weight:600;color:var(--green-mid);width:42px;flex-shrink:0;margin-top:2px">${p.time}</span>
                <span style="font-size:13px;color:var(--text-main)">${p.act}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-body" style="padding:24px;text-align:center;">
            <div style="font-family:var(--font-display);font-size:42px;font-weight:700;color:var(--green-deep)">347</div>
            <div style="font-size:13px;color:var(--text-sub);margin-bottom:4px">inscrits sur 500</div>
            <div style="height:8px;background:var(--gray-100);border-radius:4px;margin:14px 0">
              <div style="height:8px;border-radius:4px;background:var(--green-live);width:69%"></div>
            </div>
            <div style="font-size:12px;color:var(--text-light);margin-bottom:20px">153 places restantes</div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;font-size:14px">✅ S'inscrire gratuitement</button>
            <div style="display:flex;gap:8px;margin-top:10px">
              <button class="btn btn-outline" style="flex:1;justify-content:center">📤 Partager</button>
              <button class="btn btn-outline" style="flex:1;justify-content:center">📅 Agenda</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Intervenants confirmés</span></div>
          <div class="card-body">
            ${[
              {init:"MK",name:"Ministère du Plan",role:"Représentant du gouvernement"},
              {init:"UN",name:"PNUD Bénin",role:"Partenaire technique"},
              {init:"UA",name:"Université d'Abomey",role:"Analyse des données"},
              {init:"OB",name:"ONG Bénin Vert",role:"Société civile"},
            ].map(s=>`
              <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--gray-100)">
                <div style="width:34px;height:34px;border-radius:10px;background:var(--green-soft);color:var(--green-mid);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center">${s.init}</div>
                <div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--text-light)">${s.role}</div></div>
              </div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Autres événements</span></div>
          <div class="card-body">
            ${EVENTS.slice(1,4).map(e=>`
              <div onclick="navigate('event-detail')" style="display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100);cursor:pointer">
                <div style="width:40px;height:40px;border-radius:8px;background:var(--green-soft);text-align:center;padding:5px 4px;flex-shrink:0">
                  <div style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--green-deep);line-height:1">${e.day}</div>
                  <div style="font-size:9px;font-weight:600;color:var(--green-mid);text-transform:uppercase">${e.month}</div>
                </div>
                <div>
                  <div style="font-size:12.5px;font-weight:600;line-height:1.3">${e.title}</div>
                  <div style="font-size:11px;color:var(--text-light)">${e.type}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// DETAIL SIGNALEMENT
// ═══════════════════════════════════════════════════════════════
export function signalDetailPage() {
  const s = SIGNALS[0];
  return `
  <div class="fade-up">
    <button onclick="navigate('veille')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour à la veille</button>

    <div class="grid-3">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-body" style="padding:24px;">
            <div style="display:flex;gap:8px;margin-bottom:14px;align-items:center">
              <div style="width:10px;height:10px;border-radius:50%;background:#D85A30;flex-shrink:0"></div>
              <span style="background:${s.oddColor}22;color:${s.oddColor};border-radius:4px;padding:3px 10px;font-size:12px;font-weight:600">${s.oddLabel}</span>
              <span style="background:#FFE0DC;color:#D85A30;border-radius:4px;padding:3px 10px;font-size:12px;font-weight:600">🔴 Urgent</span>
              <span style="background:${s.statusColor}22;color:${s.statusColor};border-radius:4px;padding:3px 10px;font-size:12px;font-weight:600;margin-left:auto">${s.status}</span>
            </div>
            <h2 style="font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--green-deep);margin-bottom:12px">${s.title}</h2>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;margin-bottom:16px">
              ${s.desc} Les populations riveraines ont signalé une odeur chimique forte depuis 48h. Des poissons morts ont été observés sur 3km de cours d'eau. Les autorités locales ont été informées.
            </p>

            <div style="background:var(--gray-100);border-radius:var(--radius-md);padding:14px;margin-bottom:16px">
              ${[
                {icon:"📍",label:"Localisation",val:s.location},
                {icon:"⏱",label:"Signalé",val:s.time},
                {icon:"👤",label:"Signalé par",val:"Citoyen anonyme"},
                {icon:"🔁",label:"Statut",val:s.status},
              ].map(i=>`
                <div style="display:flex;gap:10px;padding:6px 0">
                  <span>${i.icon}</span>
                  <span style="font-size:12px;color:var(--text-light);width:90px">${i.label}</span>
                  <span style="font-size:12px;font-weight:600">${i.val}</span>
                </div>`).join('')}
            </div>

            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-outline btn-sm">👍 Confirmer (12)</button>
              <button class="btn btn-outline btn-sm">📤 Partager</button>
              <button class="btn btn-outline btn-sm">🚩 Signaler doublon</button>
            </div>
          </div>
        </div>

        <!-- Timeline de suivi -->
        <div class="card">
          <div class="card-header"><span class="card-title">Suivi du signalement</span></div>
          <div class="card-body">
            ${[
              {time:"Il y a 2h",actor:"Citoyen",text:"Signalement soumis avec photos",color:"#D85A30",done:true},
              {time:"Il y a 1h",actor:"Modérateur",text:"Signalement validé et publié",color:"#E8A000",done:true},
              {time:"En cours",actor:"Mairie Adjohoun",text:"Prise en charge par les autorités locales",color:"#185FA5",done:false},
              {time:"À venir",actor:"Ministère Environnement",text:"Rapport d'inspection attendu",color:"#888",done:false},
            ].map((t,i)=>`
              <div style="display:flex;gap:12px;padding:10px 0;${i<3?'border-bottom:1px solid var(--gray-100)':''}">
                <div style="display:flex;flex-direction:column;align-items:center;gap:0">
                  <div style="width:12px;height:12px;border-radius:50%;background:${t.done?t.color:'var(--gray-200)'};flex-shrink:0;margin-top:4px"></div>
                  ${i<3?`<div style="width:2px;flex:1;background:var(--gray-200);margin:4px 0"></div>`:''}
                </div>
                <div style="flex:1">
                  <div style="font-size:11px;color:var(--text-light);margin-bottom:2px">${t.time} · ${t.actor}</div>
                  <div style="font-size:13px;color:${t.done?'var(--text-main)':'var(--text-light)'}">${t.text}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Signalements similaires</span></div>
          <div class="card-body">
            ${SIGNALS.slice(1,4).map(sig=>`
              <div onclick="navigate('signal-detail')" style="padding:10px 0;border-bottom:1px solid var(--gray-100);cursor:pointer">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <div style="width:7px;height:7px;border-radius:50%;background:${sig.severity==='high'?'#D85A30':sig.severity==='medium'?'#E8A000':'#1D9E75'}"></div>
                  <span style="font-size:10px;color:${sig.oddColor};font-weight:600">${sig.oddLabel}</span>
                </div>
                <div style="font-size:12.5px;font-weight:600;margin-bottom:2px">${sig.title}</div>
                <div style="font-size:11px;color:var(--text-light)">📍 ${sig.location} · ${sig.time}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="card" style="background:var(--green-pale);border-color:var(--green-soft)">
          <div class="card-body" style="padding:18px;">
            <div style="font-size:13px;font-weight:600;color:var(--green-deep);margin-bottom:8px">🤝 Tu peux agir</div>
            <div style="font-size:12.5px;color:var(--green-mid);line-height:1.7;margin-bottom:12px">Partage ce signalement pour alerter plus de monde et augmenter la pression sur les autorités.</div>
            <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center">📢 Lancer une campagne liée</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// LANCER UNE NOUVELLE CAMPAGNE
// ═══════════════════════════════════════════════════════════════
export function nouvelleCampagnePage() {
  return `
  <div class="fade-up">
    <button onclick="navigate('plaidoyer')" class="btn btn-ghost btn-sm" style="margin-bottom:16px;">← Retour au plaidoyer</button>

    <div style="max-width:720px;">
      <h2 class="section-title" style="margin-bottom:6px;">Lancer une campagne</h2>
      <p style="font-size:14px;color:var(--text-sub);margin-bottom:24px;">Mobilise des citoyens autour d'une cause liée aux ODD au Bénin.</p>

      <div class="card">
        <div class="card-body" style="padding:28px;display:flex;flex-direction:column;gap:22px;">

          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Titre de la campagne *</label>
            <input type="text" placeholder="Ex: Accès à l'eau potable pour les villages de l'Atacora"
              style="width:100%;padding:11px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
          </div>

          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:8px">ODD lié *</label>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
              ${ODDS.slice(0,9).map(o=>`
                <button onclick="this.style.background='${o.color}22';this.style.borderColor='${o.color}';this.style.color='${o.color}'"
                  style="padding:8px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:12px;cursor:pointer;background:white;color:var(--text-sub);transition:all .2s;text-align:center">
                  ODD ${o.n} · ${o.label.split(' ').slice(0,2).join(' ')}
                </button>`).join('')}
            </div>
          </div>

          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Description *</label>
            <textarea rows="5" placeholder="Explique le problème, son impact et pourquoi les citoyens doivent s'engager…"
              style="width:100%;padding:11px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;resize:vertical;"></textarea>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Objectif signatures *</label>
              <input type="number" placeholder="Ex: 10 000" value="5000"
                style="width:100%;padding:11px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Durée (jours) *</label>
              <input type="number" placeholder="Ex: 60" value="30"
                style="width:100%;padding:11px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;">
            </div>
          </div>

          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Destinataire du plaidoyer *</label>
            <select style="width:100%;padding:11px 14px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:14px;font-family:var(--font-body);outline:none;background:white;color:var(--text-main)">
              <option>Gouvernement du Bénin</option>
              <option>Ministère de l'Eau</option>
              <option>Ministère de l'Environnement</option>
              <option>Ministère de l'Éducation</option>
              <option>Assemblée Nationale</option>
              <option>Mairie concernée</option>
              <option>Partenaires internationaux</option>
            </select>
          </div>

          <div>
            <label style="display:block;font-size:12px;font-weight:600;color:var(--text-sub);margin-bottom:6px">Image de couverture (optionnel)</label>
            <div style="border:2px dashed var(--gray-200);border-radius:var(--radius-sm);padding:24px;text-align:center;background:var(--gray-100);">
              <div style="font-size:28px;margin-bottom:6px">🖼️</div>
              <div style="font-size:13px;color:var(--text-sub);margin-bottom:8px">Glisse une image ici</div>
              <button class="btn btn-outline btn-sm">Parcourir</button>
            </div>
          </div>

          <div style="display:flex;gap:10px;padding-top:8px;border-top:1px solid var(--gray-100)">
            <button onclick="navigate('plaidoyer')" class="btn btn-outline" style="flex:1;justify-content:center">Annuler</button>
            <button onclick="navigate('campagne-detail')" class="btn btn-primary" style="flex:2;justify-content:center;padding:11px">📢 Soumettre la campagne</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
