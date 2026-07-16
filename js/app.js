/* Claude AI Professional Training — GitHub Edition v2 */

const SECTIONS = [
  { key: 'learn', label: 'Learn', icon: 'ti-book', minutesKey: 'learn' },
  { key: 'demo', label: 'Demo', icon: 'ti-player-play', minutesKey: 'demo' },
  { key: 'apply', label: 'Apply', icon: 'ti-hand-click', minutesKey: 'apply' },
  { key: 'quiz', label: 'Quiz', icon: 'ti-clipboard-check', minutesKey: 'quiz' },
  { key: 'summary', label: 'Summary', icon: 'ti-check', minutesKey: 'summary' }
];

const PALETTE = [
  { bg: '#eff6ff', text: '#1d4ed8', icon: 'ti-brain', dot: '#3b82f6' },
  { bg: '#dbeafe', text: '#1e40af', icon: 'ti-layout-dashboard', dot: '#2563eb' },
  { bg: '#e0f2fe', text: '#0369a1', icon: 'ti-pencil', dot: '#0284c7' },
  { bg: '#ede9fe', text: '#5b21b6', icon: 'ti-file-text', dot: '#7c3aed' },
  { bg: '#f0f9ff', text: '#0c4a6e', icon: 'ti-files', dot: '#0ea5e9' },
  { bg: '#ecfdf5', text: '#065f46', icon: 'ti-chart-bar', dot: '#059669' },
  { bg: '#f8fafc', text: '#334155', icon: 'ti-code', dot: '#64748b' },
  { bg: '#dbeafe', text: '#1e3a8a', icon: 'ti-settings-2', dot: '#2563eb' },
  { bg: '#e0f2fe', text: '#075985', icon: 'ti-briefcase', dot: '#0284c7' },
  { bg: '#eff6ff', text: '#1e40af', icon: 'ti-shield-check', dot: '#3b82f6' }
];

const STORAGE = {
  done: 'claudeGithub_done',
  notes: 'claudeGithub_notes',
  notepad: 'claudeGithub_notepad',
  sidebar: 'claudeGithub_sidebar',
  lastMod: 'claudeGithub_lastMod',
  theme: 'claudeGithub_theme',
  certName: 'claudeGithub_certName',
  capstone: 'claudeGithub_capstone',
  highlight: 'claudeGithub_highlight'
};

const state = {
  view: 'home',
  module: 1,
  openSection: 'learn',
  completed: JSON.parse(localStorage.getItem(STORAGE.done) || '[]'),
  capstone: JSON.parse(localStorage.getItem(STORAGE.capstone) || '{}'),
  notepadOpen: localStorage.getItem(STORAGE.notepad) === 'open',
  notepadMin: false,
  sidebarCollapsed: localStorage.getItem(STORAGE.sidebar) === 'collapsed',
  libraryFilter: 'All',
  glossaryFilter: '',
  highlightSlug: localStorage.getItem(STORAGE.highlight) || null
};

let searchIndex = [];
const glossaryBySlug = Object.fromEntries(GLOSSARY.map(g => [g.slug, g]));

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<i class="ti ti-check"></i> ${esc(msg)}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function linkifyGlossary(html) {
  if (!html || html.includes('glossary-link')) return html;
  let result = html;
  const sorted = [...GLOSSARY].sort((a, b) => b.term.length - a.term.length);
  for (const g of sorted) {
    const terms = [g.term, ...(g.aliases || [])];
    for (const term of terms) {
      const regex = new RegExp(`(?<![\\w-])(${escapeRegex(term)})(?![\\w-])(?![^<]*>)`, 'gi');
      result = result.replace(regex, (match) =>
        `<button type="button" class="glossary-link" data-slug="${g.slug}" title="Glossary: ${esc(g.term)}">${match}</button>`
      );
    }
  }
  return result;
}

function buildSearchIndex() {
  const items = [];
  MODULES.forEach(m => {
    items.push({ type: 'Module', title: m.title, sub: m.overview.slice(0, 80), action: () => goCourse(m.id) });
    m.objectives.forEach(o => items.push({ type: 'Objective', title: o, sub: `Module ${m.id}`, action: () => goCourse(m.id) }));
    m.concepts.forEach(c => items.push({ type: 'Topic', title: c.title, sub: `Module ${m.id}`, action: () => goCourse(m.id, 'learn', c.title) }));
  });
  GLOSSARY.forEach(g => {
    items.push({ type: 'Glossary', title: g.term, sub: `Module ${g.moduleId} · ${g.concept}`, action: () => goGlossaryTerm(g.slug) });
  });
  PROMPT_LIBRARY.forEach(p => {
    items.push({
      type: 'Prompt', title: p.title, sub: `${p.cat} · ${p.diff}`,
      action: () => {
        state.libraryFilter = 'All';
        setView('library');
        setTimeout(() => {
          const el = [...document.querySelectorAll('.prompt-title')].find(t => t.textContent === p.title);
          el?.closest('.prompt-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    });
  });
  return items;
}

function saveProgress() {
  localStorage.setItem(STORAGE.done, JSON.stringify(state.completed));
  localStorage.setItem(STORAGE.capstone, JSON.stringify(state.capstone));
  updateProgressUI();
}

function updateProgressUI() {
  const count = state.completed.length;
  const pct = Math.round((count / MODULES.length) * 100);
  const ringOffset = 113 - (113 * pct / 100);
  ['progress-done', 'stat-done'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = count; });
  ['progress-pct', 'stat-progress'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = pct + '%'; });
  const ring = document.getElementById('progress-ring');
  if (ring) ring.style.strokeDashoffset = ringOffset;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('[data-view]').forEach(btn => {
    if (btn.dataset.view) btn.classList.toggle('active', btn.dataset.view === view);
  });
  const labels = { home: 'Home', course: `Module ${state.module}`, library: 'Prompt Library', glossary: 'Glossary', certificate: 'Certificate' };
  document.getElementById('header-badge').textContent = labels[view] || view;
  if (view === 'home') renderHome();
  if (view === 'course') renderCourse();
  if (view === 'library') renderLibrary();
  if (view === 'glossary') renderGlossary();
  if (view === 'certificate') renderCertificate();
  document.getElementById('sidebar').classList.remove('open');
}

function goCourse(modId, section, conceptTitle) {
  state.module = modId;
  state.openSection = section || 'learn';
  localStorage.setItem(STORAGE.lastMod, modId);
  if (conceptTitle) {
    state.highlightConcept = conceptTitle;
  }
  setView('course');
  renderSidebarModules();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (conceptTitle) {
    setTimeout(() => {
      const concepts = document.querySelectorAll('.training-concept h4');
      concepts.forEach(h => {
        if (h.textContent === conceptTitle) {
          h.closest('.training-concept').classList.add('concept-highlight');
          h.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }, 300);
  }
}

function goGlossaryTerm(slug) {
  const g = glossaryBySlug[slug];
  if (!g) return;
  goCourse(g.moduleId, 'learn', g.concept);
}

function goLibrary(promptIdx) {
  setView('library');
  if (promptIdx !== undefined) {
    const p = PROMPT_LIBRARY[promptIdx];
    if (p) state.libraryFilter = p.cat;
    renderLibrary();
    setTimeout(() => {
      const cards = document.querySelectorAll('.prompt-card');
      const idx = promptIdx % cards.length;
      if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }
}

function nextIncompleteModule() {
  const next = MODULES.find(m => !state.completed.includes(m.id));
  return next ? next.id : 1;
}

function renderSidebarModules() {
  document.getElementById('sidebar-modules').innerHTML = MODULES.map(m => {
    const p = PALETTE[(m.id - 1) % PALETTE.length];
    const done = state.completed.includes(m.id);
    const active = state.view === 'course' && m.id === state.module;
    return `<button type="button" class="mod-link${active ? ' active' : ''}${done ? ' done' : ''}" data-mod="${m.id}">
      <span class="mod-dot" style="background:${done ? 'var(--success)' : p.dot}"></span><span>M${m.id}</span></button>`;
  }).join('');
  document.querySelectorAll('.mod-link').forEach(btn => {
    btn.addEventListener('click', () => goCourse(+btn.dataset.mod));
  });
}

function renderHome() {
  document.getElementById('stat-prompts').textContent = PROMPT_LIBRARY.length;
  const libCount = document.getElementById('library-count');
  if (libCount) libCount.textContent = PROMPT_LIBRARY.length;
  updateProgressUI();

  const nextId = nextIncompleteModule();
  const nextMod = MODULES.find(m => m.id === nextId);
  const card = document.getElementById('continue-card');
  const p = PALETTE[(nextId - 1) % PALETTE.length];
  const allDone = state.completed.length >= MODULES.length;

  card.hidden = false;
  if (!allDone) {
    card.innerHTML = `
      <div class="continue-icon" style="background:${p.bg}"><i class="ti ${p.icon}" style="color:${p.text}"></i></div>
      <div class="continue-body"><h3>Continue where you left off</h3><p>${esc(nextMod.title)}</p>
        <div class="continue-tags"><span class="tag">Module ${nextId}</span><span class="tag">${nextMod.hours} hours</span></div></div>
      <button class="btn btn-primary" type="button" id="continue-go">Start <i class="ti ti-arrow-right"></i></button>`;
    document.getElementById('continue-go').addEventListener('click', () => goCourse(nextId));
  } else {
    card.innerHTML = `
      <div class="continue-icon" style="background:var(--success-soft)"><i class="ti ti-trophy" style="color:var(--success)"></i></div>
      <div class="continue-body"><h3>Course complete!</h3><p>View your certificate or explore the prompt library.</p></div>
      <button class="btn btn-primary" type="button" id="continue-cert">Certificate <i class="ti ti-certificate"></i></button>`;
    document.getElementById('continue-cert').addEventListener('click', () => setView('certificate'));
  }

  document.getElementById('home-modules').innerHTML = MODULES.map(m => {
    const p = PALETTE[(m.id - 1) % PALETTE.length];
    const done = state.completed.includes(m.id);
    return `<div class="module-card glass-panel" role="button" tabindex="0" data-mod="${m.id}">
      <div class="module-card-head">
        <div class="module-card-icon" style="background:${p.bg}"><i class="ti ${done ? 'ti-circle-check' : p.icon}" style="color:${done ? 'var(--success)' : p.text}"></i></div>
        <div><div class="module-card-num">Module ${m.id} · ${m.hours}h</div><div class="module-card-title">${esc(m.title)}</div></div>
      </div>
      <div class="module-progress"><div class="module-progress-fill" style="width:${done ? 100 : 0}%"></div></div>
      <div class="module-card-meta"><span>${done ? 'Complete' : 'Not started'}</span><span>5 sections</span></div></div>`;
  }).join('');

  document.querySelectorAll('.module-card').forEach(card => {
    const go = () => goCourse(+card.dataset.mod);
    card.addEventListener('click', go);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  });
}

function renderModuleTabs() {
  document.getElementById('module-tabs').innerHTML = MODULES.map(m =>
    `<button type="button" class="module-tab${m.id === state.module ? ' active' : ''}${state.completed.includes(m.id) ? ' done' : ''}" data-tab="${m.id}">${esc(m.shortTitle)}</button>`
  ).join('');
  document.querySelectorAll('.module-tab').forEach(btn => {
    btn.addEventListener('click', () => { state.module = +btn.dataset.tab; state.openSection = 'learn'; renderCourse(); });
  });
}

function renderBeforeAfter(modId) {
  const ba = BEFORE_AFTER[modId];
  if (!ba) return '';
  return `<div class="before-after"><h4><i class="ti ti-arrows-diff"></i> Before & After: ${esc(ba.title)}</h4>
    <div class="ba-grid">
      <div class="ba-col ba-before"><span class="ba-label">Weak prompt</span><p>${esc(ba.before)}</p></div>
      <div class="ba-col ba-after"><span class="ba-label">Strong prompt</span><p>${esc(ba.after)}</p></div>
    </div></div>`;
}

function renderLearn(m) {
  return m.concepts.map(c => `
    <div class="training-concept" id="concept-${c.title.replace(/\s+/g, '-').toLowerCase()}">
      <h4>${esc(c.title)}</h4>
      <div class="body">${linkifyGlossary(c.body)}</div>
      <div class="training-example">${linkifyGlossary(c.example)}</div>
    </div>`).join('');
}

function renderDemo(m) {
  const ba = renderBeforeAfter(m.id);
  const demos = m.demos.map((d, i) => `
    <div class="training-demo-item">
      <h4>Demo ${i + 1}: ${esc(d.title)}</h4>
      <div class="demo-block">
        <div class="demo-header"><span class="demo-dot r"></span><span class="demo-dot y"></span><span class="demo-dot g"></span> Claude.ai</div>
        <div class="demo-body">
          <div class="demo-prompt"><div class="demo-label"><i class="ti ti-user"></i> Your prompt</div>${esc(d.prompt)}
            <button class="copy-inline" type="button" data-demo="${i}"><i class="ti ti-copy"></i> Copy</button></div>
          <div class="demo-note"><strong>Trainer tip:</strong> Live-demo in Claude.ai. Compare output if you refine one variable.</div>
        </div>
      </div>
    </div>`).join('');
  return ba + demos;
}

function renderCapstone() {
  const doneCount = CAPSTONE_ITEMS.filter(i => state.capstone[i.id]).length;
  return `<div class="capstone-panel glass-panel">
    <h3><i class="ti ti-flag"></i> Mini Capstone Project</h3>
    <p>Complete this checklist to finish Module 10 and earn your certificate.</p>
    <div class="capstone-progress">${doneCount} / ${CAPSTONE_ITEMS.length} complete</div>
    <ul class="capstone-list">${CAPSTONE_ITEMS.map(item => `
      <li><label><input type="checkbox" data-capstone="${item.id}" ${state.capstone[item.id] ? 'checked' : ''}>
        <span>${esc(item.label)}</span></label></li>`).join('')}</ul>
  </div>`;
}

function renderApply(m) {
  let html = m.apply.map((a, i) => `
    <div class="training-apply-item"><h4>Exercise ${i + 1}</h4><p>${esc(a.task)}</p>
      <button class="reveal-btn" type="button" data-hint="${i}"><i class="ti ti-bulb"></i> Show hint</button>
      <div class="reveal-content" id="hint-${i}"><strong>Hint:</strong> ${esc(a.hint)}</div></div>`).join('');
  if (m.id === 10) html += renderCapstone();
  return html;
}

function renderQuiz(m) {
  const letters = ['A', 'B', 'C', 'D'];
  return m.quiz.map((q, i) => `
    <div class="training-quiz-item quiz-card" data-quiz="${i}">
      <p class="quiz-q">${i + 1}. ${esc(q.q)}</p>
      ${q.options.map((opt, j) => `<button type="button" class="qopt" data-q="${i}" data-opt="${j}"><span class="qopt-letter">${letters[j]}</span>${esc(opt)}</button>`).join('')}
      <div class="qfeedback" id="fb-${i}"></div></div>`).join('');
}

function renderSummary(m) {
  const done = state.completed.includes(m.id);
  const contrastClass = m.id % 2 === 0 ? 'remember-contrast alt' : 'remember-contrast';
  return `
    <div class="takeaway-box"><h4><i class="ti ti-list-check"></i> Key Takeaways</h4>
      <ul class="takeaway-list">${m.summary.takeaways.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
    <div class="${contrastClass}">
      <h4><i class="ti ti-bookmark"></i> Remember This</h4>
      <ul>${m.summary.takeaways.slice(0, 3).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <p class="remember-next"><strong>Next:</strong> ${esc(m.summary.next)}</p></div>
    <div class="training-nav-footer">
      <button type="button" class="btn btn-primary" id="mark-done">${done ? '<i class="ti ti-circle-check"></i> Completed' : '<i class="ti ti-check"></i> Mark Complete'}</button>
      ${m.id > 1 ? `<button type="button" class="btn btn-glass" id="prev-mod"><i class="ti ti-arrow-left"></i> Previous</button>` : ''}
      ${m.id < MODULES.length ? `<button type="button" class="btn btn-glass" id="next-mod">Next <i class="ti ti-arrow-right"></i></button>` : ''}
      ${state.completed.length >= MODULES.length ? `<button type="button" class="btn btn-glass" id="go-cert"><i class="ti ti-certificate"></i> Certificate</button>` : ''}
    </div>`;
}

function renderSections(m) {
  const s = m.schedule;
  const contents = { learn: renderLearn(m), demo: renderDemo(m), apply: renderApply(m), quiz: renderQuiz(m), summary: renderSummary(m) };
  return `<div class="training-sections">${SECTIONS.map(sec => `
    <div class="training-section${state.openSection === sec.key ? ' open' : ''}" data-section="${sec.key}">
      <button type="button" class="training-section__head" aria-expanded="${state.openSection === sec.key}">
        <span class="training-section__badge training-section__badge--${sec.key}"><i class="ti ${sec.icon}"></i></span>
        <span>${sec.label}</span><span class="training-section__time">~${s[sec.minutesKey]} min</span>
        <i class="ti ti-chevron-down training-section__chevron"></i></button>
      <div class="training-section__body">${contents[sec.key]}</div></div>`).join('')}</div>`;
}

function renderCourse() {
  const m = MODULES.find(x => x.id === state.module);
  const p = PALETTE[(m.id - 1) % PALETTE.length];
  const s = m.schedule;
  renderModuleTabs();
  renderSidebarModules();

  document.getElementById('course-content').innerHTML = `
    <section class="glass-panel training-hero">
      <div style="display:flex;gap:16px;align-items:flex-start">
        <div class="hero-icon" style="background:${p.bg}"><i class="ti ${p.icon}" style="color:${p.text}"></i></div>
        <div style="flex:1">
          <div class="hero-eyebrow">Module ${m.id} of ${MODULES.length} · ${m.hours} hours</div>
          <h2 class="hero-title">${esc(m.title)}</h2>
          <p class="hero-desc">${linkifyGlossary(m.overview)}</p>
          <div class="training-schedule">
            <span><i class="ti ti-book"></i> Learn ${s.learn}m</span><span><i class="ti ti-player-play"></i> Demo ${s.demo}m</span>
            <span><i class="ti ti-hand-click"></i> Apply ${s.apply}m</span><span><i class="ti ti-clipboard-check"></i> Quiz ${s.quiz}m</span>
            <span><i class="ti ti-check"></i> Summary ${s.summary}m</span></div></div></div>
    </section>
    <section class="glass-panel outcomes" style="margin-bottom:16px"><h4>Learning Objectives</h4>
      <ul>${m.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul></section>
    ${renderSections(m)}`;

  bindCourseEvents(m);
  bindGlossaryLinks();
}

function bindGlossaryLinks() {
  document.querySelectorAll('.glossary-link').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const g = glossaryBySlug[btn.dataset.slug];
      if (g) showGlossaryPopover(g, btn);
    });
  });
}

function showGlossaryPopover(g, anchor) {
  document.querySelectorAll('.glossary-popover').forEach(p => p.remove());
  const pop = document.createElement('div');
  pop.className = 'glossary-popover glass-panel';
  pop.innerHTML = `
    <strong>${esc(g.term)}</strong>
    <p>${esc(g.definition)}</p>
    <div class="glossary-popover-meta">Module ${g.moduleId} · ${esc(g.concept)}</div>
    <button type="button" class="btn btn-glass btn-sm" data-go-slug="${g.slug}">Go to lesson <i class="ti ti-arrow-right"></i></button>
    <button type="button" class="glossary-popover-close" aria-label="Close">&times;</button>`;
  document.body.appendChild(pop);
  const rect = anchor.getBoundingClientRect();
  pop.style.top = Math.min(rect.bottom + 8, window.innerHeight - 200) + 'px';
  pop.style.left = Math.min(rect.left, window.innerWidth - 320) + 'px';
  pop.querySelector('[data-go-slug]').addEventListener('click', () => { pop.remove(); goGlossaryTerm(g.slug); });
  pop.querySelector('.glossary-popover-close').addEventListener('click', () => pop.remove());
  setTimeout(() => document.addEventListener('click', function close(e) {
    if (!pop.contains(e.target) && e.target !== anchor) { pop.remove(); document.removeEventListener('click', close); }
  }), 10);
}

function bindCourseEvents(m) {
  document.querySelectorAll('.training-section__head').forEach(head => {
    head.addEventListener('click', () => {
      const key = head.closest('.training-section').dataset.section;
      state.openSection = state.openSection === key ? null : key;
      document.querySelectorAll('.training-section').forEach(sec => {
        const open = sec.dataset.section === state.openSection;
        sec.classList.toggle('open', open);
        sec.querySelector('.training-section__head').setAttribute('aria-expanded', open);
      });
    });
  });

  document.querySelectorAll('.copy-inline').forEach(btn => {
    btn.addEventListener('click', () => navigator.clipboard.writeText(m.demos[+btn.dataset.demo].prompt).then(() => toast('Prompt copied')));
  });

  document.querySelectorAll('[data-hint]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('hint-' + btn.dataset.hint).classList.add('show');
      btn.style.display = 'none';
    });
  });

  document.querySelectorAll('[data-capstone]').forEach(cb => {
    cb.addEventListener('change', () => {
      state.capstone[cb.dataset.capstone] = cb.checked;
      saveProgress();
      if (CAPSTONE_ITEMS.every(i => state.capstone[i.id])) toast('Capstone checklist complete!');
    });
  });

  document.querySelectorAll('.qopt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = +btn.dataset.q, opt = +btn.dataset.opt;
      const item = document.querySelector(`[data-quiz="${qi}"]`);
      if (item.classList.contains('answered')) return;
      item.classList.add('answered');
      const q = m.quiz[qi];
      item.querySelectorAll('.qopt').forEach((o, j) => {
        o.disabled = true;
        if (j === q.correct) o.classList.add('correct');
        else if (j === opt) o.classList.add('wrong');
      });
      const fb = document.getElementById('fb-' + qi);
      fb.classList.add('show', opt === q.correct ? 'ok' : 'no');
      fb.textContent = opt === q.correct ? q.explain : 'Not quite. ' + q.explain;
    });
  });

  document.getElementById('mark-done')?.addEventListener('click', () => {
    if (state.completed.includes(m.id)) state.completed = state.completed.filter(x => x !== m.id);
    else {
      state.completed.push(m.id);
      toast('Module ' + m.id + ' complete!');
      if (state.completed.length === MODULES.length) toast('All modules done — view your certificate!');
    }
    saveProgress(); renderCourse();
  });
  document.getElementById('prev-mod')?.addEventListener('click', () => goCourse(state.module - 1));
  document.getElementById('next-mod')?.addEventListener('click', () => goCourse(state.module + 1));
  document.getElementById('go-cert')?.addEventListener('click', () => setView('certificate'));
}

function renderLibrary() {
  document.getElementById('library-filters').innerHTML = PROMPT_CATEGORIES.map(cat =>
    `<button type="button" class="filter-btn${state.libraryFilter === cat ? ' active' : ''}" data-cat="${esc(cat)}">${esc(cat)}${cat !== 'All' ? ` (${PROMPT_LIBRARY.filter(p => p.cat === cat).length})` : ''}</button>`
  ).join('');
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => { state.libraryFilter = btn.dataset.cat; renderLibrary(); });
  });

  const filtered = state.libraryFilter === 'All' ? PROMPT_LIBRARY : PROMPT_LIBRARY.filter(p => p.cat === state.libraryFilter);
  document.getElementById('prompt-grid').innerHTML = filtered.map((p, i) => `
    <div class="prompt-card glass-panel">
      <div class="prompt-cat">${esc(p.cat)} · ${esc(p.diff)}</div>
      <div class="prompt-title">${esc(p.title)}</div>
      <div class="prompt-text">${esc(p.prompt)}</div>
      <div class="prompt-use">${esc(p.use)}</div>
      <div class="prompt-card-foot">
        <span style="font-size:11px;color:var(--text-muted)">${esc(p.output)}</span>
        <button type="button" class="copy-btn" data-idx="${i}"><i class="ti ti-copy"></i> Copy</button>
      </div></div>`).join('');

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(filtered[+btn.dataset.idx].prompt).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<i class="ti ti-check"></i> Copied';
        toast('Prompt copied');
        setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<i class="ti ti-copy"></i> Copy'; }, 2000);
      });
    });
  });
}

function renderGlossary() {
  const q = state.glossaryFilter.toLowerCase();
  const filtered = GLOSSARY.filter(g =>
    !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q) || (g.aliases || []).some(a => a.toLowerCase().includes(q))
  );
  document.getElementById('glossary-grid').innerHTML = filtered.map(g => `
    <div class="glossary-card glass-panel">
      <button type="button" class="glossary-card-term" data-slug="${g.slug}">${esc(g.term)}</button>
      ${g.aliases?.length ? `<div class="glossary-aliases">Also: ${g.aliases.map(a => esc(a)).join(', ')}</div>` : ''}
      <p>${esc(g.definition)}</p>
      <div class="glossary-card-meta">
        <span><i class="ti ti-book"></i> Module ${g.moduleId}</span>
        <span>${esc(g.concept)}</span>
      </div>
      <button type="button" class="btn btn-glass btn-sm glossary-go" data-slug="${g.slug}">Go to lesson <i class="ti ti-arrow-right"></i></button>
    </div>`).join('') || '<p class="search-empty">No terms match your filter.</p>';

  document.querySelectorAll('.glossary-card-term, .glossary-go').forEach(btn => {
    btn.addEventListener('click', () => goGlossaryTerm(btn.dataset.slug));
  });
}

function renderCertificate() {
  const allDone = state.completed.length >= MODULES.length;
  const capstoneDone = CAPSTONE_ITEMS.every(i => state.capstone[i.id]);
  const name = localStorage.getItem(STORAGE.certName) || 'Your Name';
  document.getElementById('cert-name-input').value = name === 'Your Name' ? '' : name;
  document.getElementById('cert-name-display').textContent = name;
  document.getElementById('cert-date').textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const status = document.getElementById('cert-status');
  const card = document.getElementById('cert-card');
  if (!allDone) {
    status.textContent = `Complete all 10 modules to unlock your certificate (${state.completed.length}/10 done).`;
    card.classList.add('cert-locked');
  } else if (!capstoneDone) {
    status.textContent = 'All modules complete! Finish the Module 10 capstone checklist to finalize your certificate.';
    card.classList.remove('cert-locked');
  } else {
    status.textContent = 'Congratulations! You have completed the Claude AI Professional Training programme.';
    card.classList.remove('cert-locked');
  }
}

function saveCertName() {
  const name = document.getElementById('cert-name-input').value.trim() || 'Your Name';
  localStorage.setItem(STORAGE.certName, name);
  document.getElementById('cert-name-display').textContent = name;
  toast('Certificate updated');
}

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
    ? searchIndex.filter(item => item.title.toLowerCase().includes(query) || item.sub.toLowerCase().includes(query)).slice(0, 14)
    : searchIndex.slice(0, 10);
  const el = document.getElementById('search-results');
  if (!results.length) { el.innerHTML = '<div class="search-empty">No results found</div>'; return; }
  el.innerHTML = results.map((r, i) => `
    <div class="search-result${i === 0 ? ' focused' : ''}" data-idx="${i}">
      <span class="search-result-type">${esc(r.type)}</span>
      <div><div class="search-result-title">${esc(r.title)}</div><div class="search-result-sub">${esc(r.sub)}</div></div></div>`).join('');
  el.querySelectorAll('.search-result').forEach(row => {
    row.addEventListener('click', () => { results[+row.dataset.idx].action(); closeSearch(); });
  });
}

function setNotepad(open) {
  state.notepadOpen = open;
  document.getElementById('notepad').classList.toggle('open', open);
  document.getElementById('notepad').classList.remove('minimized');
  state.notepadMin = false;
  document.getElementById('main').classList.toggle('notepad-open', open);
  localStorage.setItem(STORAGE.notepad, open ? 'open' : 'closed');
}

function exportNotepad() {
  const text = document.getElementById('notepad-text').value;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'claude-ai-course-notes-' + new Date().toISOString().slice(0, 10) + '.txt';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Notes exported');
}

function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  document.getElementById('app').classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  localStorage.setItem(STORAGE.sidebar, state.sidebarCollapsed ? 'collapsed' : 'expanded');
  document.getElementById('sidebar-collapse').innerHTML = state.sidebarCollapsed
    ? '<i class="ti ti-layout-sidebar-left-expand"></i>'
    : '<i class="ti ti-layout-sidebar-left-collapse"></i><span>Collapse</span>';
}

function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  localStorage.setItem(STORAGE.theme, dark ? 'light' : 'dark');
  document.querySelector('#theme-toggle i').className = dark ? 'ti ti-moon' : 'ti ti-sun';
}

function init() {
  searchIndex = buildSearchIndex();
  const savedTheme = localStorage.getItem(STORAGE.theme);
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('#theme-toggle i').className = 'ti ti-sun';
  }

  const lastMod = +localStorage.getItem(STORAGE.lastMod) || 1;
  document.getElementById('notepad-text').value = localStorage.getItem(STORAGE.notes) || '';
  document.getElementById('notepad-text').addEventListener('input', () => {
    localStorage.setItem(STORAGE.notes, document.getElementById('notepad-text').value);
    document.getElementById('notepad-status').textContent = 'Saved ' + new Date().toLocaleTimeString();
  });

  if (state.notepadOpen) setNotepad(true);
  if (state.sidebarCollapsed) {
    document.getElementById('app').classList.add('sidebar-collapsed');
    document.getElementById('sidebar-collapse').innerHTML = '<i class="ti ti-layout-sidebar-left-expand"></i>';
  }

  document.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
  document.getElementById('btn-continue').addEventListener('click', () => goCourse(nextIncompleteModule()));
  document.getElementById('search-open').addEventListener('click', openSearch);
  document.getElementById('search-overlay').addEventListener('click', e => { if (e.target.id === 'search-overlay') closeSearch(); });
  document.getElementById('search-input').addEventListener('input', e => renderSearch(e.target.value));
  document.getElementById('notepad-btn').addEventListener('click', () => setNotepad(!state.notepadOpen));
  document.getElementById('notepad-close').addEventListener('click', () => setNotepad(false));
  document.getElementById('notepad-export').addEventListener('click', exportNotepad);
  document.getElementById('notepad-min').addEventListener('click', () => {
    state.notepadMin = !state.notepadMin;
    document.getElementById('notepad').classList.toggle('minimized', state.notepadMin);
    document.getElementById('main').classList.toggle('notepad-open', state.notepadOpen && !state.notepadMin);
  });
  document.getElementById('sidebar-collapse').addEventListener('click', toggleSidebar);
  document.getElementById('mobile-menu').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('cert-save').addEventListener('click', saveCertName);
  document.getElementById('cert-print').addEventListener('click', () => window.print());
  document.getElementById('glossary-filter')?.addEventListener('input', e => {
    state.glossaryFilter = e.target.value;
    renderGlossary();
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') { closeSearch(); document.querySelectorAll('.glossary-popover').forEach(p => p.remove()); }
  });

  renderSidebarModules();
  state.module = lastMod;
  setView('home');
  updateProgressUI();
}

init();
