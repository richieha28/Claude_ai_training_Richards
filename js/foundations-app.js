/* AI Foundations & Career Intelligence Hub */
(function () {
  const STORAGE = {
    theme: 'af_theme',
    understood: 'af_glossary_understood',
    days: 'af_days_done',
    topics: 'af_topics_done',
    assess: 'af_assess_scores',
    career: 'af_career_result',
    sidebar: 'af_sidebar'
  };

  const VIEWS = {
    overview: 'Overview',
    fundamentals: 'AI Fundamentals',
    glossary: 'AI Glossary',
    tools: 'AI Tools Explorer',
    prompts: 'Prompt Engineering',
    workplace: 'AI at Work',
    agentic: 'Agentic AI',
    news: 'AI Industry Pulse',
    features: "What's New in AI",
    careers: 'Career Navigator',
    certs: 'Certification Centre',
    plan: '10-Day Learning Plan',
    assess: 'Knowledge Assessment',
    roadmap: '90-Day Roadmap'
  };

  const state = {
    view: 'overview',
    glossaryFilter: 'All',
    glossaryDiff: 'All',
    glossaryQ: '',
    toolsFilter: 'All',
    toolsQ: '',
    newsFilter: 'All',
    newsQ: '',
    newsItems: [],
    newsMeta: null,
    understood: JSON.parse(localStorage.getItem(STORAGE.understood) || '[]'),
    daysDone: JSON.parse(localStorage.getItem(STORAGE.days) || '[]'),
    topicsDone: JSON.parse(localStorage.getItem(STORAGE.topics) || '[]'),
    assessScores: JSON.parse(localStorage.getItem(STORAGE.assess) || '{}'),
    careerResult: (function () {
      try {
        const raw = JSON.parse(localStorage.getItem(STORAGE.career) || 'null');
        if (!raw) return null;
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw.ranked)) return raw.ranked;
        return null;
      } catch (_) { return null; }
    })(),
    quiz: null,
    fundTopic: null
  };

  function esc(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<i class="ti ti-check"></i> ${esc(msg)}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_) {}
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) {}
    ta.remove();
    return ok;
  }

  function saveUnderstood() { localStorage.setItem(STORAGE.understood, JSON.stringify(state.understood)); }
  function saveDays() { localStorage.setItem(STORAGE.days, JSON.stringify(state.daysDone)); }
  function saveTopics() { localStorage.setItem(STORAGE.topics, JSON.stringify(state.topicsDone)); }
  function saveAssess() { localStorage.setItem(STORAGE.assess, JSON.stringify(state.assessScores)); }

  function progressPct() {
    const gTotal = (typeof AF_GLOSSARY !== 'undefined' ? AF_GLOSSARY.length : 1);
    const dTotal = (typeof AF_LEARNING_PLAN !== 'undefined' ? AF_LEARNING_PLAN.length : 10);
    const tTotal = (typeof AF_FUNDAMENTALS !== 'undefined' ? AF_FUNDAMENTALS.length : 1);
    const parts = [
      state.understood.length / gTotal,
      state.daysDone.length / dTotal,
      state.topicsDone.length / tTotal
    ];
    return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
  }

  function updateProgressUI() {
    const pct = progressPct();
    const fill = document.getElementById('af-progress-fill');
    const label = document.getElementById('af-progress-pct');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  }

  function setView(view) {
    state.view = view;
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });
    document.getElementById('header-badge').textContent = VIEWS[view] || view;
    document.getElementById('sidebar').classList.remove('open');
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- RENDERERS ---------- */

  function renderOverview() {
    const featuredTool = AF_TOOLS[0];
    const featuredFeature = AF_FEATURES.find(f => f.featureOfTheWeek || f.featureOfWeek) || AF_FEATURES[0];
    const trending = AF_GLOSSARY.slice(0, 5);
    const headline = state.newsItems[0];
    const nextDay = AF_LEARNING_PLAN.find(d => !state.daysDone.includes(d.day)) || AF_LEARNING_PLAN[0];

    return `
      <section class="af-hero-mini glass-panel">
        <p class="hero-eyebrow">AI literacy for experienced professionals</p>
        <h2>Understand AI. Explore the Ecosystem.<br>Discover Your Next Career.</h2>
        <p>A practical, non-coding hub to build AI fluency, follow industry developments, and map a career path that fits your experience.</p>
        <div class="hero-actions" style="margin-top:1rem">
          <button class="btn btn-primary" type="button" data-goto="plan"><i class="ti ti-player-play"></i> Start 10-Day Plan</button>
          <button class="btn btn-glass" type="button" data-goto="glossary">Open Glossary</button>
        </div>
      </section>

      <div class="af-dash-grid">
        <div class="af-stat-card glass-panel"><div class="af-stat-value">${progressPct()}%</div><div class="af-stat-label">Overall progress</div></div>
        <div class="af-stat-card glass-panel"><div class="af-stat-value">${state.understood.length}</div><div class="af-stat-label">Terms understood / ${AF_GLOSSARY.length}</div></div>
        <div class="af-stat-card glass-panel"><div class="af-stat-value">${state.daysDone.length}/10</div><div class="af-stat-label">Learning days complete</div></div>
        <div class="af-stat-card glass-panel"><div class="af-stat-value">${AF_TOOLS.length}</div><div class="af-stat-label">AI tools catalogued</div></div>
      </div>

      <div class="af-grid-2">
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-calendar"></i></div>
          <h3>Today's focus</h3>
          <p><strong>Day ${nextDay.day}:</strong> ${esc(nextDay.title)}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="plan">Continue plan</button>
        </article>
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-news"></i></div>
          <h3>Latest AI headline</h3>
          <p>${headline ? esc(headline.headline) : 'Live feed pending - open Industry Pulse for official sources.'}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="news">Industry Pulse</button>
        </article>
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-apps"></i></div>
          <h3>Featured tool</h3>
          <p><strong>${esc(featuredTool.name)}</strong> - ${esc(featuredTool.summary)}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="tools">Explore tools</button>
        </article>
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-sparkles"></i></div>
          <h3>Feature of the week</h3>
          <p><strong>${esc(featuredFeature.title || featuredFeature.name || featuredFeature.feature)}</strong> | ${esc(featuredFeature.vendor || featuredFeature.product || '')}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="features">What's new</button>
        </article>
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-vocabulary"></i></div>
          <h3>Trending terms</h3>
          <p>${trending.map(t => esc(t.term)).join(' | ')}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="glossary">Study glossary</button>
        </article>
        <article class="af-tile glass-panel">
          <div class="tile-icon"><i class="ti ti-map"></i></div>
          <h3>Career recommendation</h3>
          <p>${state.careerResult ? esc(state.careerResult[0]?.title || 'See your matches') : 'Take the career assessment to get three tailored paths.'}</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="careers">Career navigator</button>
        </article>
      </div>
    `;
  }

  function renderFundamentals() {
    const sections = [...new Set(AF_FUNDAMENTALS.map(t => t.section))];
    if (state.fundTopic) {
      const t = AF_FUNDAMENTALS.find(x => x.id === state.fundTopic);
      if (!t) { state.fundTopic = null; return renderFundamentals(); }
      const done = state.topicsDone.includes(t.id);
      return `
        <button class="btn btn-glass btn-sm" type="button" id="af-back-fund"><i class="ti ti-arrow-left"></i> All topics</button>
        <article class="glass-panel" style="padding:1.5rem;margin-top:1rem">
          <p class="af-card-meta">${esc(t.section)}</p>
          <h2 style="font-size:24px;font-weight:700">${esc(t.title)}</h2>
          <h3 style="margin-top:1.25rem;font-size:14px;color:var(--text-muted)">Simple explanation</h3>
          <p class="af-card-body">${esc(t.explanation)}</p>
          <h3 style="margin-top:1rem;font-size:14px;color:var(--text-muted)">Real-world example</h3>
          <p class="af-card-body">${esc(t.example)}</p>
          <h3 style="margin-top:1rem;font-size:14px;color:var(--text-muted)">Business application</h3>
          <p class="af-card-body">${esc(t.businessUse)}</p>
          <h3 style="margin-top:1rem;font-size:14px;color:var(--text-muted)">Common misconception</h3>
          <p class="af-card-body">${esc(t.misconception)}</p>
          <button class="btn ${done ? 'btn-glass' : 'btn-primary'}" style="margin-top:1rem" type="button" id="af-mark-topic" data-id="${esc(t.id)}">
            ${done ? 'Marked complete' : 'Mark topic complete'}
          </button>
          <div class="af-section-head"><h2>Knowledge check</h2></div>
          ${(t.quiz || []).map((q, qi) => `
            <div class="glass-panel" style="padding:1rem;margin-bottom:10px" data-quiz-block="${qi}">
              <p style="font-weight:600">${qi + 1}. ${esc(q.q)}</p>
              ${(q.options || []).map((o, oi) => `
                <button type="button" class="af-quiz-opt" data-topic-quiz="${esc(t.id)}" data-qi="${qi}" data-oi="${oi}" data-correct="${q.correct}">${esc(o)}</button>
              `).join('')}
              <p class="af-quiz-explain" style="display:none;margin-top:8px;font-size:13px;color:var(--text-secondary)"></p>
            </div>
          `).join('')}
        </article>`;
    }

    return `
      <div class="af-section-head">
        <h2>AI Fundamentals</h2>
        <p>Beginner-friendly explanations - no maths, no coding. Mark topics as you go.</p>
      </div>
      ${sections.map(sec => `
        <h3 style="margin:1.25rem 0 0.75rem;font-size:15px;font-weight:600">${esc(sec)}</h3>
        <div class="af-grid-2">
          ${AF_FUNDAMENTALS.filter(t => t.section === sec).map(t => `
            <button type="button" class="af-tile glass-panel" style="text-align:left" data-open-topic="${esc(t.id)}">
              <h3>${esc(t.title)} ${state.topicsDone.includes(t.id) ? '<i class="ti ti-check" style="color:var(--success)"></i>' : ''}</h3>
              <p>${esc(t.explanation).slice(0, 120)}...</p>
            </button>
          `).join('')}
        </div>
      `).join('')}`;
  }

  function renderGlossary() {
    const cats = ['All', ...new Set(AF_GLOSSARY.map(g => g.category))];
    const diffs = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    let items = AF_GLOSSARY.slice();
    if (state.glossaryFilter !== 'All') items = items.filter(g => g.category === state.glossaryFilter);
    if (state.glossaryDiff !== 'All') items = items.filter(g => g.difficulty === state.glossaryDiff);
    if (state.glossaryQ) {
      const q = state.glossaryQ.toLowerCase();
      items = items.filter(g => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q));
    }
    items.sort((a, b) => a.term.localeCompare(b.term));
    const pct = Math.round((state.understood.length / AF_GLOSSARY.length) * 100);

    return `
      <div class="af-section-head">
        <h2>AI Glossary & Dictionary</h2>
        <p>${AF_GLOSSARY.length} terms | ${state.understood.length} marked understood (${pct}%)</p>
        <div class="af-progress-bar"><div class="af-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="af-toolbar">
        <input class="af-search" id="af-glossary-q" placeholder="Search terms..." value="${esc(state.glossaryQ)}">
        ${cats.map(c => `<button type="button" class="af-chip${state.glossaryFilter === c ? ' active' : ''}" data-gcat="${esc(c)}">${esc(c)}</button>`).join('')}
      </div>
      <div class="af-toolbar">
        ${diffs.map(d => `<button type="button" class="af-chip${state.glossaryDiff === d ? ' active' : ''}" data-gdiff="${esc(d)}">${esc(d)}</button>`).join('')}
      </div>
      ${items.map(g => {
        const known = state.understood.includes(g.id);
        return `
        <article class="af-card glass-panel" data-expand="${esc(g.id)}">
          <div class="af-card-meta">${esc(g.category)} | ${esc(g.difficulty)}</div>
          <div class="af-card-title">${esc(g.term)} ${known ? '<i class="ti ti-circle-check" style="color:var(--success);font-size:16px"></i>' : ''}</div>
          <div class="af-card-body">${esc(g.definition)}</div>
          <div class="af-card-extra">
            <h4>Practical example</h4><p class="af-card-body">${esc(g.example)}</p>
            <h4>Where it is used</h4><p class="af-card-body">${esc(g.whereUsed)}</p>
            <h4>Related terms</h4>
            <div class="af-related">${(g.related || []).map(r => `<button type="button" data-related="${esc(r)}">${esc(r)}</button>`).join('') || '<span class="af-card-body">-</span>'}</div>
            <button type="button" class="btn ${known ? 'btn-glass' : 'btn-primary'} btn-sm" style="margin-top:12px" data-understand="${esc(g.id)}">
              ${known ? 'Understood' : 'Mark as understood'}
            </button>
          </div>
        </article>`;
      }).join('') || '<p class="af-news-empty">No terms match your filters.</p>'}`;
  }

  function renderTools() {
    const cats = ['All', ...new Set(AF_TOOLS.map(t => t.category))];
    let items = AF_TOOLS.slice();
    if (state.toolsFilter !== 'All') items = items.filter(t => t.category === state.toolsFilter);
    if (state.toolsQ) {
      const q = state.toolsQ.toLowerCase();
      items = items.filter(t => t.name.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q));
    }
    return `
      <div class="af-section-head">
        <h2>AI Tools Explorer</h2>
        <p>Interactive directory of popular AI products. Pricing and features change - always verify on official sites.</p>
      </div>
      <div class="af-toolbar">
        <input class="af-search" id="af-tools-q" placeholder="Search tools..." value="${esc(state.toolsQ)}">
        ${cats.map(c => `<button type="button" class="af-chip${state.toolsFilter === c ? ' active' : ''}" data-tcat="${esc(c)}">${esc(c)}</button>`).join('')}
      </div>
      <div class="af-grid-2">
        ${items.map(t => `
          <article class="af-tool-card glass-panel">
            <span class="af-badge">${esc(t.category)}</span>
            <span class="af-badge">${esc(t.difficulty || 'Beginner')}</span>
            <h3 style="margin-top:8px">${esc(t.name)}</h3>
            <p class="af-card-body">${esc(t.summary)}</p>
            <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Key features</h4>
            <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(t.features || []).slice(0,4).map(f => `<li>${esc(f)}</li>`).join('')}</ul>
            <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Use cases</h4>
            <p class="af-card-body">${(t.useCases || []).slice(0,3).map(esc).join(' | ')}</p>
            <p class="af-card-body" style="margin-top:8px"><strong>Audience:</strong> ${esc(t.audience || 'Professionals')}</p>
            <p class="af-card-body"><strong>Pricing:</strong> ${esc(t.pricingNote)}</p>
            <p class="af-card-body"><strong>Alternatives:</strong> ${(t.alternatives || []).map(esc).join(', ') || '-'}</p>
            <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
              ${t.website ? `<a class="btn btn-glass btn-sm" href="${esc(t.website)}" target="_blank" rel="noopener">Website</a>` : ''}
              ${t.docs ? `<a class="btn btn-glass btn-sm" href="${esc(t.docs)}" target="_blank" rel="noopener">Docs</a>` : ''}
            </div>
          </article>
        `).join('')}
      </div>
      <div class="af-section-head"><h2>Quick comparison</h2><p>Assistants at a glance - verify details on vendor sites.</p></div>
      <div class="glass-panel" style="padding:1rem;overflow:auto">
        <table class="af-compare-table">
          <thead><tr><th>Tool</th><th>Best for</th><th>Difficulty</th><th>Official site</th></tr></thead>
          <tbody>
            ${AF_TOOLS.filter(t => /Assistant|General/i.test(t.category)).slice(0, 6).map(t => `
              <tr>
                <td>${esc(t.name)}</td>
                <td>${esc((t.useCases && t.useCases[0]) || t.summary)}</td>
                <td>${esc(t.difficulty || '-')}</td>
                <td>${t.website ? `<a href="${esc(t.website)}" target="_blank" rel="noopener">Open</a>` : '-'}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function renderPrompts() {
    return `
      <div class="af-section-head">
        <h2>Prompt Engineering Lab</h2>
        <p>Practical prompting for workplace tasks. This playground is offline - copy prompts into Claude, ChatGPT, or Gemini. It is not connected to a live AI API.</p>
      </div>
      <div class="af-grid-2">
        ${(AF_PROMPT_TOPICS || []).map(t => `
          <article class="af-tile glass-panel">
            <h3>${esc(t.title || t.name || t.topic)}</h3>
            <p>${esc(t.summary || t.body || t.description || '')}</p>
            ${t.tips ? `<ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary);margin-top:8px">${t.tips.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
          </article>
        `).join('')}
      </div>
      <div class="af-section-head"><h2>Exercises - basic vs improved</h2></div>
      ${(AF_PROMPT_EXERCISES || []).map((ex, i) => `
        <article class="glass-panel" style="padding:1.25rem;margin-bottom:12px">
          <h3 style="font-size:16px">${i + 1}. ${esc(ex.title || ex.name)}</h3>
          <p class="af-card-body">${esc(ex.scenario || ex.description || '')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Basic prompt</h4>
          <pre class="af-prompt-box">${esc(ex.basicPrompt)}</pre>
          <button type="button" class="btn btn-glass btn-sm" data-copy-ex="${esc(ex.id)}" data-copy-kind="basic"><i class="ti ti-copy"></i> Copy basic</button>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Improved prompt</h4>
          <pre class="af-prompt-box">${esc(ex.improvedPrompt)}</pre>
          <button type="button" class="btn btn-primary btn-sm" data-copy-ex="${esc(ex.id)}" data-copy-kind="improved"><i class="ti ti-copy"></i> Copy improved</button>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Why it is better</h4>
          <p class="af-card-body">${esc(ex.improvementsExplain || ex.explanation || '')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Expected output</h4>
          <p class="af-card-body">${esc(ex.expectedOutput || '')}</p>
        </article>
      `).join('')}`;
  }

  function renderWorkplace() {
    return `
      <div class="af-section-head">
        <h2>AI in the Workplace</h2>
        <p>How AI is changing business functions - practical examples, not implementation guides.</p>
      </div>
      ${AF_WORKPLACE.map(w => `
        <article class="glass-panel" style="padding:1.25rem;margin-bottom:12px">
          <h3 style="font-size:18px">${esc(w.function || w.title || w.name)}</h3>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Common problems</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(w.problems || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">AI applications</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(w.applications || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Popular tools</h4>
          <p class="af-card-body">${(w.tools || []).map(esc).join(' | ')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Automation examples</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(w.automationExamples || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Skills needed</h4>
          <p class="af-card-body">${(w.skillsNeeded || []).map(esc).join(' | ')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Career implications</h4>
          <p class="af-card-body">${esc(w.careerImplications || '')}</p>
        </article>
      `).join('')}`;
  }

  function renderAgentic() {
    const a = AF_AGENTIC;
    const overview = a.overview || {};
    const overviewText = typeof overview === 'string' ? overview : (overview.summary || a.intro || '');
    return `
      <div class="af-section-head">
        <h2>${esc(overview.title || 'Understanding Agentic AI')}</h2>
        <p>Awareness-level module - no coding required.</p>
      </div>
      <article class="glass-panel" style="padding:1.35rem;margin-bottom:14px">
        <p class="af-card-body">${esc(overviewText)}</p>
        ${overview.keyTakeaways ? `<ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary);margin-top:10px">${overview.keyTakeaways.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        ${overview.whenToUse ? `<p class="af-card-body" style="margin-top:10px"><strong>When to use:</strong> ${esc(overview.whenToUse)}</p>` : ''}
        ${overview.risks ? `<p class="af-card-body" style="margin-top:8px"><strong>Risks:</strong> ${overview.risks.map(esc).join(' | ')}</p>` : ''}
      </article>
      <div class="af-section-head"><h2>Traditional software -> Multi-agent systems</h2></div>
      <div class="af-grid-2">
        ${(a.comparison || []).map((c, i) => `
          <article class="af-tile glass-panel">
            <div class="af-badge">${i + 1}</div>
            <h3>${esc(c.level || c.label || c.title || c.name)}</h3>
            <p><strong>Autonomy:</strong> ${esc(c.autonomy || '')}</p>
            <p>${esc(c.behavior || c.description || c.detail || '')}</p>
            <p style="margin-top:6px;font-size:12px;color:var(--text-muted)"><strong>Example:</strong> ${esc(c.example || '')}</p>
            <p style="margin-top:4px;font-size:12px;color:var(--text-muted)"><strong>Limits:</strong> ${esc(c.limits || '')}</p>
          </article>
        `).join('')}
      </div>
      <div class="af-section-head"><h2>Key concepts</h2></div>
      ${(a.concepts || []).map(c => `
        <article class="af-card glass-panel">
          <div class="af-card-title">${esc(c.title || c.term || c.name)}</div>
          <div class="af-card-body">${esc(c.explanation || c.body || c.description || '')}</div>
          ${c.example ? `<div class="af-card-body" style="margin-top:8px"><strong>Example:</strong> ${esc(c.example)}</div>` : ''}
        </article>
      `).join('')}`;
  }

  function renderNews() {
    const items = state.newsItems.length ? state.newsItems : [];
    const cats = ['All', 'AI models', 'AI tools', 'Agentic AI', 'Enterprise AI', 'Research', 'Regulations', 'Career trends'];
    let filtered = items;
    if (state.newsFilter !== 'All') filtered = items.filter(n => (n.category || '').toLowerCase().includes(state.newsFilter.toLowerCase().replace('ai ', '')));
    if (state.newsQ) {
      const q = state.newsQ.toLowerCase();
      filtered = filtered.filter(n => (n.headline || '').toLowerCase().includes(q) || (n.summary || '').toLowerCase().includes(q));
    }
    const updated = state.newsMeta?.lastFetched || AF_NEWS_FALLBACK?.lastFetched;

    return `
      <div class="af-section-head">
        <h2>AI Industry Pulse</h2>
        <p>Latest developments from official AI company blogs and reputable sources. Last fetched: ${updated ? esc(updated) : 'not yet refreshed'}.</p>
      </div>
      <div class="af-toolbar">
        <input class="af-search" id="af-news-q" placeholder="Search news..." value="${esc(state.newsQ)}">
        ${cats.map(c => `<button type="button" class="af-chip${state.newsFilter === c ? ' active' : ''}" data-ncat="${esc(c)}">${esc(c)}</button>`).join('')}
      </div>
      ${filtered.length ? filtered.map(n => `
        <article class="af-news-card glass-panel">
          <div class="af-news-meta">${esc(n.company || n.source || '')} | ${esc(n.publishedAt || n.date || '')} | ${esc(n.category || '')}</div>
          <h3>${esc(n.headline)}</h3>
          <p class="af-card-body">${esc(n.summary)}</p>
          ${n.whyItMatters ? `<p class="af-card-body"><strong>Why it matters:</strong> ${esc(n.whyItMatters)}</p>` : ''}
          ${n.careerImplications ? `<p class="af-card-body"><strong>Career angle:</strong> ${esc(n.careerImplications)}</p>` : ''}
          ${n.url ? `<a class="btn btn-glass btn-sm" style="margin-top:8px" href="${esc(n.url)}" target="_blank" rel="noopener">Read original source</a>` : ''}
        </article>
      `).join('') : `
        <div class="af-news-empty glass-panel">
          <p>${esc(AF_NEWS_FALLBACK?.message || 'Live news feed is not available yet.')}</p>
          <p style="margin-top:12px">Follow official sources meanwhile:</p>
          <p style="margin-top:8px">
            <a href="https://www.anthropic.com/news" target="_blank" rel="noopener">Anthropic</a> |
            <a href="https://openai.com/news/" target="_blank" rel="noopener">OpenAI</a> |
            <a href="https://blog.google/technology/ai/" target="_blank" rel="noopener">Google AI</a> |
            <a href="https://blogs.microsoft.com/ai/" target="_blank" rel="noopener">Microsoft AI</a> |
            <a href="https://nvidianews.nvidia.com/" target="_blank" rel="noopener">NVIDIA</a>
          </p>
          <p style="margin-top:12px;font-size:12px;color:var(--text-muted)">Enable the GitHub Action <code>fetch-ai-news</code> to refresh <code>data/news.json</code> daily.</p>
        </div>`}`;
  }

  function renderFeatures() {
    const week = AF_FEATURES.find(f => f.featureOfTheWeek || f.featureOfWeek) || AF_FEATURES[0];
    return `
      <div class="af-section-head">
        <h2>What's New in AI?</h2>
        <p>Product capability updates. Status labels: Announced / Preview / Generally available. Always verify on official announcement pages - availability varies by plan and region.</p>
      </div>
      <article class="glass-panel" style="padding:1.35rem;margin-bottom:1rem;border:1px solid var(--accent)">
        <span class="af-badge">Feature of the Week</span>
        <h3 style="margin-top:8px;font-size:20px">${esc(week.title || week.name || week.feature)}</h3>
        <p class="af-card-body"><strong>${esc(week.vendor || week.product)}</strong> | ${esc(week.status)} | as of ${esc(week.asOf || week.date || '')}</p>
        <p class="af-card-body">${esc(week.whatItDoes || week.summary || '')}</p>
        <p class="af-card-body"><strong>Why it matters:</strong> ${esc(week.whyItMatters || week.whyCare || '')}</p>
        <p class="af-card-body"><strong>Try this:</strong> ${esc(week.learningAngle || week.tryThis || week.exampleUse || week.useCase || 'Open the product and explore the new capability with a real work task.')}</p>
        ${week.verifyNote ? `<p class="af-card-body" style="font-size:12px;color:var(--text-muted)">${esc(week.verifyNote)}</p>` : ''}
        ${week.officialUrl || week.url || week.link ? `<a class="btn btn-primary btn-sm" href="${esc(week.officialUrl || week.url || week.link)}" target="_blank" rel="noopener">Official announcement</a>` : ''}
      </article>
      <div class="glass-panel" style="padding:1rem;overflow:auto;margin-bottom:1rem">
        <table class="af-compare-table">
          <thead><tr><th>Product</th><th>New feature</th><th>Business benefit</th><th>Audience</th><th>Status</th></tr></thead>
          <tbody>
            ${AF_FEATURES.map(f => `
              <tr>
                <td>${esc(f.vendor || f.product)}</td>
                <td>${esc(f.title || f.name || f.feature)}</td>
                <td>${esc(f.whyItMatters || f.whyCare || f.businessBenefit || '')}</td>
                <td>${esc((f.tags && f.tags.join(', ')) || f.whoBenefits || f.audience || 'Professionals')}</td>
                <td><span class="af-badge ${/general/i.test(f.status) ? 'ga' : 'preview'}">${esc(f.status)}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${AF_FEATURES.map(f => `
        <article class="af-card glass-panel">
          <div class="af-card-meta">${esc(f.vendor || f.product)} | ${esc(f.asOf || f.date || '')}</div>
          <div class="af-card-title">${esc(f.title || f.name || f.feature)} <span class="af-badge ${/general/i.test(f.status) ? 'ga' : 'preview'}">${esc(f.status)}</span></div>
          <div class="af-card-body">${esc(f.whatItDoes || f.summary || '')}</div>
          <div class="af-card-body"><strong>Why users should care:</strong> ${esc(f.whyItMatters || f.whyCare || '')}</div>
          <div class="af-card-body"><strong>Try this:</strong> ${esc(f.learningAngle || f.exampleUse || f.useCase || '')}</div>
          ${f.verifyNote ? `<div class="af-card-body" style="font-size:12px;color:var(--text-muted)">${esc(f.verifyNote)}</div>` : ''}
          ${f.officialUrl || f.url || f.link ? `<a href="${esc(f.officialUrl || f.url || f.link)}" target="_blank" rel="noopener" class="btn btn-glass btn-sm" style="margin-top:8px">Source</a>` : ''}
        </article>
      `).join('')}`;
  }

  function renderCareers() {
    const q = AF_CAREER_QUESTIONS || [];
    const likert = [
      { value: '1', label: 'Strongly disagree' },
      { value: '2', label: 'Disagree' },
      { value: '3', label: 'Neutral' },
      { value: '4', label: 'Agree' },
      { value: '5', label: 'Strongly agree' }
    ];
    return `
      <div class="af-section-head">
        <h2>AI Career Navigator</h2>
        <p>Explore AI-adjacent roles suited to experienced professionals. Recommendations are guidance only - not job guarantees or salary promises.</p>
      </div>
      <article class="glass-panel" style="padding:1.35rem;margin-bottom:1.25rem">
        <h3 style="font-size:18px;margin-bottom:12px">Career assessment</h3>
        <p class="af-card-body" style="margin-bottom:12px">Rate how true each statement is for you (1-5). We map your preferences to three role paths.</p>
        <form class="af-form-grid" id="af-career-form">
          <label>Years of professional experience
            <select name="years" required>
              <option value="">Select...</option>
              <option>0-5</option><option>5-10</option><option>10-15</option><option>15+</option>
            </select>
          </label>
          <label>Current industry
            <input name="industry" type="text" placeholder="e.g. Finance, Consulting, Manufacturing" required>
          </label>
          <label>Current job function
            <input name="function" type="text" placeholder="e.g. Operations, HR, Project Management" required>
          </label>
          <label>Coding experience
            <select name="coding" required>
              <option value="">Select...</option>
              <option>None</option><option>Light / scripts</option><option>Comfortable</option><option>Professional engineer</option>
            </select>
          </label>
          <label>Learning hours per week
            <select name="hours" required>
              <option value="">Select...</option>
              <option>1-3</option><option>4-6</option><option>7-10</option><option>10+</option>
            </select>
          </label>
          ${q.map((item) => `
            <label style="grid-column:1/-1">${esc(item.q || item.question || item.label)}
              <select name="${esc(item.id)}" required>
                <option value="">Select...</option>
                ${likert.map(o => `<option value="${o.value}">${o.label}</option>`).join('')}
              </select>
            </label>
          `).join('')}
          <button class="btn btn-primary" type="submit">Get 3 career recommendations</button>
        </form>
        <div id="af-career-results" style="margin-top:1rem">
          ${state.careerResult ? renderCareerResults(state.careerResult) : ''}
        </div>
      </article>
      <div class="af-section-head"><h2>All career paths</h2></div>
      ${AF_CAREERS.map(c => `
        <article class="glass-panel" style="padding:1.25rem;margin-bottom:12px">
          <span class="af-badge">${esc(c.category || 'AI career')}</span>
          <h3 style="font-size:17px;margin-top:8px">${esc(c.title || c.name)}</h3>
          <p class="af-card-body">${esc(c.description || c.summary || '')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Responsibilities</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(c.responsibilities || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Skills</h4>
          <p class="af-card-body">${(c.skillsNeeded || c.skills || c.requiredSkills || []).map(esc).join(' | ')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Tools</h4>
          <p class="af-card-body">${(c.toolsFamiliarity || c.tools || c.recommendedTools || []).map(esc).join(' | ')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Typical background</h4>
          <p class="af-card-body">${esc(c.typicalBackground || '')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Career progression</h4>
          <p class="af-card-body">${esc(c.growthPath || c.roadmap || c.learningRoadmap || '')}</p>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Day in the life</h4>
          <p class="af-card-body">${esc(c.dayInLife || '')}</p>
          ${c.salaryNote ? `<p class="af-card-body" style="font-size:12px;color:var(--text-muted)">${esc(c.salaryNote)}</p>` : ''}
        </article>
      `).join('')}`;
  }

  function renderCareerResults(list) {
    return `<h4 style="margin-bottom:8px">Your top matches</h4>
      ${list.map((c, i) => `
        <div class="glass-inset" style="padding:12px;margin-bottom:8px;border-radius:12px">
          <strong>${i + 1}. ${esc(c.title || c.name)}</strong>
          <p class="af-card-body">${esc(c.reason || c.description || '')}</p>
        </div>`).join('')}`;
  }

  function renderCerts() {
    const certs = typeof AF_CERTIFICATIONS !== 'undefined' ? AF_CERTIFICATIONS : [];
    return `
      <div class="af-section-head">
        <h2>Certification Centre</h2>
        <p>Official vendor credentials and learning programmes. Exam codes, fees, and availability change - verify on vendor sites before registering. This hub's completion checklist is separate from vendor certifications.</p>
      </div>
      ${certs.length ? certs.map(c => `
        <article class="glass-panel" style="padding:1.25rem;margin-bottom:12px">
          <span class="af-badge">${esc(c.provider || c.issuer || c.organisation || c.org)}</span>
          <span class="af-badge">${esc(c.level || c.skillLevel || '')}</span>
          <h3 style="margin-top:8px;font-size:17px">${esc(c.name)}</h3>
          <p class="af-card-body">${esc(c.focus || '')}</p>
          <p class="af-card-body"><strong>Audience:</strong> ${esc(c.audience || c.intendedAudience || '')}</p>
          <p class="af-card-body"><strong>Related skills:</strong> ${(c.relatedSkills || c.topics || []).map(esc).join(' | ')}</p>
          <p class="af-card-body"><strong>Exam / fee notes:</strong> ${esc(c.examNotes || c.examDetails || c.fee || 'Verify on official site')}</p>
          <p class="af-card-body"><strong>Type:</strong> ${esc(c.type || 'Official vendor certification / course - verify current status')}</p>
          <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
            ${c.learningUrl || c.url ? `<a class="btn btn-primary btn-sm" href="${esc(c.learningUrl || c.url)}" target="_blank" rel="noopener">Official learning</a>` : ''}
            ${c.examUrl ? `<a class="btn btn-glass btn-sm" href="${esc(c.examUrl)}" target="_blank" rel="noopener">Exam info</a>` : ''}
          </div>
        </article>
      `).join('') : '<article class="glass-panel" style="padding:1.25rem"><p class="af-card-body">Certification data failed to load. Refresh the page or check that certifications.js is present.</p></article>'}`;
  }

  function renderPlan() {
    return `
      <div class="af-section-head">
        <h2>10-Day Learning Plan</h2>
        <p>Complete without coding. Check off days as you finish.</p>
        <div class="af-progress-bar"><div class="af-progress-fill" style="width:${(state.daysDone.length / 10) * 100}%"></div></div>
      </div>
      ${AF_LEARNING_PLAN.map(d => {
        const done = state.daysDone.includes(d.day);
        return `
        <article class="af-day-card glass-panel${done ? ' done' : ''}">
          <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <h3 style="font-size:17px">Day ${d.day}: ${esc(d.title)}</h3>
            <button type="button" class="btn ${done ? 'btn-glass' : 'btn-primary'} btn-sm" data-day="${d.day}">${done ? 'Completed' : 'Mark complete'}</button>
          </div>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Objectives</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(d.objectives || []).map(o => `<li>${esc(o)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Reading</h4>
          ${Array.isArray(d.reading)
            ? `<ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${d.reading.map(o => `<li>${esc(o)}</li>`).join('')}</ul>`
            : `<p class="af-card-body">${esc(d.reading || d.material || '')}</p>`}
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Knowledge checks</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(d.checks || []).map(o => `<li>${esc(o)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Examples</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(d.examples || []).map(o => `<li>${esc(o)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Exercises</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(d.exercises || []).map(o => `<li>${esc(o)}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Resources</h4>
          <ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">${(d.resources || []).map(o => `<li>${typeof o === 'string' ? esc(o) : `<a href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.label || o.url)}</a>`}</li>`).join('')}</ul>
          <h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Summary</h4>
          <p class="af-card-body">${esc(d.summary || '')}</p>
          <div class="af-checklist">
            ${(d.checklist || []).map(c => `<label><input type="checkbox"> ${esc(c)}</label>`).join('')}
          </div>
        </article>`;
      }).join('')}`;
  }

  function renderAssess() {
    const scores = state.assessScores;
    return `
      <div class="af-section-head">
        <h2>Interactive Knowledge Centre</h2>
        <p>Quizzes run entirely in your browser. Progress is saved in localStorage.</p>
      </div>
      <div class="af-grid-2">
        <article class="af-tile glass-panel">
          <h3>AI Glossary Quiz</h3>
          <p>15 questions${scores.glossary != null ? ` | Last score: ${scores.glossary}%` : ''}</p>
          <button class="btn btn-primary btn-sm" style="margin-top:10px" type="button" data-start-quiz="glossary">Start</button>
        </article>
        <article class="af-tile glass-panel">
          <h3>AI Tools Quiz</h3>
          <p>10 questions${scores.tools != null ? ` | Last score: ${scores.tools}%` : ''}</p>
          <button class="btn btn-primary btn-sm" style="margin-top:10px" type="button" data-start-quiz="tools">Start</button>
        </article>
        <article class="af-tile glass-panel">
          <h3>AI Fundamentals Assessment</h3>
          <p>50 questions${scores.fundamentals != null ? ` | Last score: ${scores.fundamentals}%` : ''}</p>
          <button class="btn btn-primary btn-sm" style="margin-top:10px" type="button" data-start-quiz="fundamentals">Start</button>
        </article>
        <article class="af-tile glass-panel">
          <h3>Career assessment</h3>
          <p>Get role recommendations based on your background.</p>
          <button class="btn btn-glass btn-sm" style="margin-top:10px" type="button" data-goto="careers">Open Career Navigator</button>
        </article>
      </div>
      <div id="af-quiz-area">${state.quiz ? renderQuiz() : ''}</div>`;
  }

  function renderQuiz() {
    const qz = state.quiz;
    if (qz.finished) {
      return `<article class="glass-panel" style="padding:1.5rem;margin-top:1rem">
        <h3>Score: ${qz.score}%</h3>
        <p class="af-card-body">You answered ${qz.correct} of ${qz.questions.length} correctly.</p>
        <button class="btn btn-glass" type="button" data-start-quiz="${qz.type}">Retry</button>
      </article>`;
    }
    const q = qz.questions[qz.index];
    return `<article class="glass-panel" style="padding:1.5rem;margin-top:1rem">
      <p class="af-card-meta">Question ${qz.index + 1} of ${qz.questions.length}${q.difficulty ? ' | ' + esc(q.difficulty) : ''}</p>
      <h3 style="font-size:18px;margin:8px 0 12px">${esc(q.q || q.question)}</h3>
      ${(q.options || []).map((o, oi) => `
        <button type="button" class="af-quiz-opt" data-answer="${oi}">${esc(o)}</button>
      `).join('')}
      <p id="af-quiz-feedback" style="margin-top:10px;font-size:13px;color:var(--text-secondary)"></p>
    </article>`;
  }

  function renderRoadmap() {
    const target = state.careerResult?.[0]?.title || 'your chosen AI specialisation';
    return `
      <div class="af-section-head">
        <h2>My Next 90 Days in AI</h2>
        <p>A three-month literacy-to-specialisation plan. Adapt pace to your weekly study hours. Focus role: <strong>${esc(target)}</strong>.</p>
      </div>
      <article class="af-roadmap-month glass-panel">
        <h3>Month 1 - AI literacy & tool proficiency</h3>
        <ul style="padding-left:1.1rem;font-size:14px;color:var(--text-secondary);margin-top:8px">
          <li>Week 1: Complete Days 1-3 of the 10-day plan (AI intro + LLMs + glossary sprint).</li>
          <li>Week 2: Days 4-5 (tools ecosystem + prompt engineering practice in Claude).</li>
          <li>Week 3: Days 6-7 (workplace AI + agentic awareness).</li>
          <li>Week 4: Days 8-10 + Fundamentals assessment; mark 40+ glossary terms understood.</li>
        </ul>
      </article>
      <article class="af-roadmap-month glass-panel">
        <h3>Month 2 - Specialisation skills</h3>
        <ul style="padding-left:1.1rem;font-size:14px;color:var(--text-secondary);margin-top:8px">
          <li>Week 5: Deep-dive the Career Navigator role that fits you; list skill gaps.</li>
          <li>Week 6: Study recommended tools for that role; build 3 reusable prompt templates.</li>
          <li>Week 7: Map one real process from your job to an AI-assisted workflow (human review included).</li>
          <li>Week 8: Draft a one-page AI use-case proposal for your manager/team.</li>
        </ul>
      </article>
      <article class="af-roadmap-month glass-panel">
        <h3>Month 3 - Certification & portfolio</h3>
        <ul style="padding-left:1.1rem;font-size:14px;color:var(--text-secondary);margin-top:8px">
          <li>Week 9: Choose one official vendor path from Certification Centre; start official learning path.</li>
          <li>Week 10-11: Complete vendor modules; practice with sample questions from official materials.</li>
          <li>Week 12: Package portfolio (prompt library, use-case write-up, before/after example) and schedule exam if ready.</li>
        </ul>
        <p class="af-card-body" style="margin-top:10px">This roadmap does not guarantee employment or salary outcomes. Verify certification fees and eligibility on official sites.</p>
      </article>
      <button class="btn btn-primary" type="button" data-goto="careers">Refine with Career Navigator</button>
      <button class="btn btn-glass" type="button" data-goto="certs">Browse certifications</button>`;
  }

  function render() {
    const root = document.getElementById('view-root');
    const map = {
      overview: renderOverview,
      fundamentals: renderFundamentals,
      glossary: renderGlossary,
      tools: renderTools,
      prompts: renderPrompts,
      workplace: renderWorkplace,
      agentic: renderAgentic,
      news: renderNews,
      features: renderFeatures,
      careers: renderCareers,
      certs: renderCerts,
      plan: renderPlan,
      assess: renderAssess,
      roadmap: renderRoadmap
    };
    root.innerHTML = (map[state.view] || renderOverview)();
    bindViewEvents();
    updateProgressUI();
  }

  function bindViewEvents() {
    document.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => setView(btn.dataset.goto));
    });

    document.getElementById('af-back-fund')?.addEventListener('click', () => {
      state.fundTopic = null;
      render();
    });

    document.querySelectorAll('[data-open-topic]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.fundTopic = btn.dataset.openTopic;
        render();
      });
    });

    document.getElementById('af-mark-topic')?.addEventListener('click', () => {
      const id = document.getElementById('af-mark-topic').dataset.id;
      if (!state.topicsDone.includes(id)) {
        state.topicsDone.push(id);
        saveTopics();
        toast('Topic marked complete');
        render();
      }
    });

    document.querySelectorAll('[data-topic-quiz]').forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.closest('[data-quiz-block]');
        const correct = +btn.dataset.correct;
        const oi = +btn.dataset.oi;
        block.querySelectorAll('.af-quiz-opt').forEach(b => {
          b.disabled = true;
          if (+b.dataset.oi === correct) b.classList.add('correct');
          else if (b === btn && oi !== correct) b.classList.add('wrong');
        });
        const topic = AF_FUNDAMENTALS.find(t => t.id === btn.dataset.topicQuiz);
        const explain = topic?.quiz?.[+btn.dataset.qi]?.explain || '';
        const exp = block.querySelector('.af-quiz-explain');
        exp.style.display = 'block';
        exp.textContent = (oi === correct ? 'Correct. ' : 'Not quite. ') + explain;
      });
    });

    document.querySelectorAll('[data-expand]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-understand], [data-related]')) return;
        card.classList.toggle('expanded');
      });
    });

    document.querySelectorAll('[data-understand]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.understand;
        if (state.understood.includes(id)) state.understood = state.understood.filter(x => x !== id);
        else state.understood.push(id);
        saveUnderstood();
        render();
      });
    });

    document.querySelectorAll('[data-related]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.glossaryQ = btn.dataset.related;
        state.glossaryFilter = 'All';
        setView('glossary');
      });
    });

    document.querySelectorAll('[data-gcat]').forEach(btn => {
      btn.addEventListener('click', () => { state.glossaryFilter = btn.dataset.gcat; render(); });
    });
    document.querySelectorAll('[data-gdiff]').forEach(btn => {
      btn.addEventListener('click', () => { state.glossaryDiff = btn.dataset.gdiff; render(); });
    });
    document.getElementById('af-glossary-q')?.addEventListener('input', (e) => {
      state.glossaryQ = e.target.value;
      clearTimeout(window.__afG);
      window.__afG = setTimeout(render, 200);
    });

    document.querySelectorAll('[data-tcat]').forEach(btn => {
      btn.addEventListener('click', () => { state.toolsFilter = btn.dataset.tcat; render(); });
    });
    document.getElementById('af-tools-q')?.addEventListener('input', (e) => {
      state.toolsQ = e.target.value;
      clearTimeout(window.__afT);
      window.__afT = setTimeout(render, 200);
    });

    document.querySelectorAll('[data-ncat]').forEach(btn => {
      btn.addEventListener('click', () => { state.newsFilter = btn.dataset.ncat; render(); });
    });
    document.getElementById('af-news-q')?.addEventListener('input', (e) => {
      state.newsQ = e.target.value;
      clearTimeout(window.__afN);
      window.__afN = setTimeout(render, 200);
    });

    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const ok = await copyText(btn.dataset.copy);
        toast(ok ? 'Copied to clipboard' : 'Copy failed');
      });
    });

    document.querySelectorAll('[data-copy-ex]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const ex = (AF_PROMPT_EXERCISES || []).find(x => x.id === btn.dataset.copyEx);
        if (!ex) return toast('Prompt not found');
        const text = btn.dataset.copyKind === 'basic' ? ex.basicPrompt : ex.improvedPrompt;
        const ok = await copyText(text || '');
        toast(ok ? 'Copied to clipboard' : 'Copy failed');
      });
    });

    document.querySelectorAll('[data-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        const day = +btn.dataset.day;
        if (state.daysDone.includes(day)) state.daysDone = state.daysDone.filter(d => d !== day);
        else state.daysDone.push(day);
        saveDays();
        render();
      });
    });

    document.getElementById('af-career-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const roleScores = {};
      AF_CAREERS.forEach(c => { roleScores[c.id] = 0; });

      (AF_CAREER_QUESTIONS || []).forEach(item => {
        const rating = Number(fd.get(item.id) || 0);
        if (!rating) return;
        const weight = rating - 3; // -2..+2 around neutral
        (item.mapsTo || []).forEach((roleId, idx) => {
          const boost = weight * (3 - idx); // first mapped role gets more weight
          roleScores[roleId] = (roleScores[roleId] || 0) + boost;
        });
      });

      const coding = String(fd.get('coding') || '');
      if (/none/i.test(coding)) {
        ['role-ml-engineer', 'role-researcher', 'role-architect'].forEach(id => { roleScores[id] = (roleScores[id] || 0) - 2; });
        ['role-ai-ba', 'role-ai-pm', 'role-enablement', 'role-consultant'].forEach(id => { roleScores[id] = (roleScores[id] || 0) + 1; });
      } else if (/professional/i.test(coding)) {
        ['role-ml-engineer', 'role-architect', 'role-automation'].forEach(id => { roleScores[id] = (roleScores[id] || 0) + 2; });
      }

      const ranked = Object.entries(roleScores)
        .sort((a, b) => b[1] - a[1])
        .map(([id]) => AF_CAREERS.find(c => c.id === id))
        .filter(Boolean)
        .slice(0, 3)
        .map((career, i) => ({
          ...career,
          title: career.title || career.name,
          reason: `Rank #${i + 1} based on your preference ratings${fd.get('function') ? ` and ${fd.get('function')} background` : ''}. Suggested next step: review this role's skills, then open the 90-Day Roadmap.`
        }));

      state.careerResult = ranked;
      localStorage.setItem(STORAGE.career, JSON.stringify({
        ranked,
        profile: {
          years: fd.get('years'),
          industry: fd.get('industry'),
          function: fd.get('function'),
          coding: fd.get('coding'),
          hours: fd.get('hours')
        }
      }));
      document.getElementById('af-career-results').innerHTML = renderCareerResults(ranked);
      toast('Career matches updated');
    });

    document.querySelectorAll('[data-start-quiz]').forEach(btn => {
      btn.addEventListener('click', () => startQuiz(btn.dataset.startQuiz));
    });

    document.querySelectorAll('[data-answer]').forEach(btn => {
      btn.addEventListener('click', () => answerQuiz(+btn.dataset.answer, btn));
    });
  }

  function startQuiz(type) {
    let questions = [];
    if (type === 'glossary') questions = AF_QUIZ_GLOSSARY.slice();
    if (type === 'tools') questions = AF_QUIZ_TOOLS.slice();
    if (type === 'fundamentals') questions = AF_QUIZ_FUNDAMENTALS.slice();
    // shuffle lightly
    questions = questions.sort(() => Math.random() - 0.5);
    state.quiz = { type, questions, index: 0, correct: 0, finished: false, score: 0 };
    render();
  }

  function answerQuiz(oi, btn) {
    const qz = state.quiz;
    if (!qz || qz.locked) return;
    qz.locked = true;
    const q = qz.questions[qz.index];
    const correct = q.correct;
    const parent = btn.parentElement;
    parent.querySelectorAll('.af-quiz-opt').forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (b === btn && oi !== correct) b.classList.add('wrong');
    });
    if (oi === correct) qz.correct += 1;
    const fb = document.getElementById('af-quiz-feedback');
    if (fb) fb.textContent = q.explain || (oi === correct ? 'Correct.' : 'Review the related glossary term.');
    setTimeout(() => {
      qz.locked = false;
      qz.index += 1;
      if (qz.index >= qz.questions.length) {
        qz.finished = true;
        qz.score = Math.round((qz.correct / qz.questions.length) * 100);
        state.assessScores[qz.type] = qz.score;
        saveAssess();
      }
      render();
    }, 900);
  }

  async function loadNews() {
    try {
      const res = await fetch('data/news.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('missing');
      const json = await res.json();
      state.newsMeta = json;
      state.newsItems = Array.isArray(json.items) ? json.items : [];
    } catch (_) {
      state.newsMeta = AF_NEWS_FALLBACK || { lastFetched: null };
      state.newsItems = AF_NEWS_FALLBACK?.items || [];
    }
  }

  function buildSearchIndex() {
    const items = [];
    (typeof AF_GLOSSARY !== 'undefined' ? AF_GLOSSARY : []).forEach(g => items.push({ type: 'Glossary', title: g.term, sub: (g.definition || '').slice(0, 80), action: () => { state.glossaryQ = g.term; setView('glossary'); } }));
    (typeof AF_TOOLS !== 'undefined' ? AF_TOOLS : []).forEach(t => items.push({ type: 'Tool', title: t.name, sub: t.category, action: () => { state.toolsQ = t.name; setView('tools'); } }));
    (typeof AF_CAREERS !== 'undefined' ? AF_CAREERS : []).forEach(c => items.push({ type: 'Career', title: c.title || c.name, sub: 'Career path', action: () => setView('careers') }));
    (typeof AF_FUNDAMENTALS !== 'undefined' ? AF_FUNDAMENTALS : []).forEach(t => items.push({ type: 'Topic', title: t.title, sub: t.section, action: () => { state.fundTopic = t.id; setView('fundamentals'); } }));
    (typeof AF_CERTIFICATIONS !== 'undefined' ? AF_CERTIFICATIONS : []).forEach(c => items.push({ type: 'Cert', title: c.name, sub: c.provider || c.issuer || '', action: () => setView('certs') }));
    return items;
  }

  let searchIndex = [];

  function openSearch() {
    document.getElementById('search-overlay').classList.add('open');
    const input = document.getElementById('search-input');
    input.value = '';
    input.focus();
    renderSearch('');
  }

  function closeSearch() {
    document.getElementById('search-overlay').classList.remove('open');
  }

  function renderSearch(q) {
    const query = q.toLowerCase().trim();
    const results = query
      ? searchIndex.filter(i => i.title.toLowerCase().includes(query) || (i.sub || '').toLowerCase().includes(query)).slice(0, 14)
      : searchIndex.slice(0, 10);
    const el = document.getElementById('search-results');
    if (!results.length) { el.innerHTML = '<div class="search-empty">No results found</div>'; return; }
    el.innerHTML = results.map((r, i) => `
      <div class="search-result${i === 0 ? ' focused' : ''}" data-idx="${i}">
        <span class="search-result-type">${esc(r.type)}</span>
        <div><div class="search-result-title">${esc(r.title)}</div><div class="search-result-sub">${esc(r.sub)}</div></div>
      </div>`).join('');
    el.querySelectorAll('.search-result').forEach(row => {
      row.addEventListener('click', () => { results[+row.dataset.idx].action(); closeSearch(); });
    });
  }

  function initChrome() {
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => setView(btn.dataset.view));
    });
    document.getElementById('mobile-menu')?.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
    document.getElementById('sidebar-collapse')?.addEventListener('click', () => {
      document.getElementById('app').classList.toggle('sidebar-collapsed');
    });
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      const html = document.documentElement;
      const dark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', dark ? 'light' : 'dark');
      localStorage.setItem(STORAGE.theme, dark ? 'light' : 'dark');
      document.querySelector('#theme-toggle i').className = dark ? 'ti ti-moon' : 'ti ti-sun';
    });
    const savedTheme = localStorage.getItem(STORAGE.theme);
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.querySelector('#theme-toggle i').className = 'ti ti-sun';
    }
    document.getElementById('af-search-open')?.addEventListener('click', openSearch);
    document.getElementById('search-overlay')?.addEventListener('click', e => {
      if (e.target.id === 'search-overlay') closeSearch();
    });
    document.getElementById('search-input')?.addEventListener('input', e => renderSearch(e.target.value));
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
      if (e.key === 'Escape') closeSearch();
    });
  }

  async function init() {
    try {
      await loadNews();
    } catch (err) {
      console.warn('News load failed', err);
      state.newsMeta = typeof AF_NEWS_FALLBACK !== 'undefined' ? AF_NEWS_FALLBACK : { lastFetched: null };
      state.newsItems = state.newsMeta.items || [];
    }
    try {
      searchIndex = buildSearchIndex();
    } catch (err) {
      console.warn('Search index failed', err);
      searchIndex = [];
    }
    initChrome();
    try {
      render();
    } catch (err) {
      console.error('Initial render failed', err);
      const root = document.getElementById('view-root');
      if (root) root.innerHTML = '<article class="glass-panel" style="padding:1.5rem"><h2>Unable to load this view</h2><p class="af-card-body">Open the browser console for details, then refresh.</p></article>';
    }
  }

  init();
})();
