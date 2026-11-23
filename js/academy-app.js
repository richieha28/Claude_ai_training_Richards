/* Notion & n8n Automation Academy */
(function () {
  const STORAGE = {
    theme: 'aa_theme',
    lessons: 'aa_lessons_done',
    modules: 'aa_modules_done',
    quizzes: 'aa_quiz_scores',
    exercises: 'aa_exercises_done',
    capstone: 'aa_capstone',
    badges: 'aa_badges_earned',
    certName: 'aa_cert_name',
    freeStack: 'aa_free_stack',
    sim: 'aa_sim_state'
  };

  const VIEWS = {
    overview: 'Home',
    pathway: 'How to learn',
    notion: '1. Notion',
    n8n: '2. Automation',
    integration: '3. Connect it all',
    module: 'Lesson',
    simulator: 'Try a workflow',
    badges: 'Your badges',
    assessment: 'Final quiz',
    certificate: 'Certificate'
  };

  const LESSON_TYPE_LABELS = {
    reading: 'Read',
    walkthrough: 'Step by step',
    demo: 'See an example',
    diagram: 'Picture it'
  };

  const COURSES = {
    notion: typeof AA_NOTION !== 'undefined' ? AA_NOTION : null,
    n8n: typeof AA_N8N !== 'undefined' ? AA_N8N : null,
    integration: typeof AA_INTEGRATION !== 'undefined' ? AA_INTEGRATION : null
  };

  const state = {
    view: 'overview',
    courseId: null,
    moduleId: null,
    lessonId: null,
    lessonsDone: JSON.parse(localStorage.getItem(STORAGE.lessons) || '[]'),
    modulesDone: JSON.parse(localStorage.getItem(STORAGE.modules) || '[]'),
    quizScores: JSON.parse(localStorage.getItem(STORAGE.quizzes) || '{}'),
    exercisesDone: JSON.parse(localStorage.getItem(STORAGE.exercises) || '[]'),
    capstone: JSON.parse(localStorage.getItem(STORAGE.capstone) || '{}'),
    badges: JSON.parse(localStorage.getItem(STORAGE.badges) || '[]'),
    freeStack: localStorage.getItem(STORAGE.freeStack) === '1',
    quiz: null,
    simFlowId: (typeof AA_SAMPLE_WORKFLOWS !== 'undefined' && AA_SAMPLE_WORKFLOWS[0]) ? AA_SAMPLE_WORKFLOWS[0].id : null,
    simOutput: null
  };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = '<i class="ti ti-check"></i> ' + esc(msg);
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 2400);
  }

  function save() {
    localStorage.setItem(STORAGE.lessons, JSON.stringify(state.lessonsDone));
    localStorage.setItem(STORAGE.modules, JSON.stringify(state.modulesDone));
    localStorage.setItem(STORAGE.quizzes, JSON.stringify(state.quizScores));
    localStorage.setItem(STORAGE.exercises, JSON.stringify(state.exercisesDone));
    localStorage.setItem(STORAGE.capstone, JSON.stringify(state.capstone));
    localStorage.setItem(STORAGE.badges, JSON.stringify(state.badges));
    localStorage.setItem(STORAGE.freeStack, state.freeStack ? '1' : '0');
    refreshBadges();
    updateProgressUI();
  }

  function allModules() {
    const list = [];
    Object.keys(COURSES).forEach(function (cid) {
      const c = COURSES[cid];
      if (!c || !c.modules) return;
      c.modules.forEach(function (m) {
        list.push({ courseId: cid, module: m });
      });
    });
    return list;
  }

  function totalLessons() {
    return allModules().reduce(function (n, x) { return n + (x.module.lessons || []).length; }, 0);
  }

  function progressPct() {
    const tot = totalLessons() || 1;
    return Math.round((state.lessonsDone.length / tot) * 100);
  }

  function courseProgress(courseId) {
    const course = COURSES[courseId];
    if (!course) return { lessons: 0, done: 0, modules: 0, modulesDone: 0, pct: 0 };
    const lessons = course.modules.reduce(function (n, m) { return n + (m.lessons || []).length; }, 0);
    const done = course.modules.reduce(function (n, m) {
      return n + (m.lessons || []).filter(function (l) { return state.lessonsDone.includes(l.id); }).length;
    }, 0);
    const modulesDone = course.modules.filter(function (m) { return state.modulesDone.includes(m.id); }).length;
    return {
      lessons: lessons,
      done: done,
      modules: course.modules.length,
      modulesDone: modulesDone,
      pct: lessons ? Math.round((done / lessons) * 100) : 0
    };
  }

  function courseMeta(courseId) {
    return (AA_META.courses || []).find(function (c) { return c.id === courseId; }) || null;
  }

  function findContinueTarget() {
    var order = ['notion', 'n8n', 'integration'];
    for (var i = 0; i < order.length; i++) {
      var cid = order[i];
      var course = COURSES[cid];
      if (!course) continue;
      for (var j = 0; j < course.modules.length; j++) {
        var m = course.modules[j];
        if (!state.modulesDone.includes(m.id)) {
          return { courseId: cid, module: m, courseTitle: (courseMeta(cid) || {}).shortTitle || course.title };
        }
      }
    }
    return null;
  }

  function siblingModules(courseId, moduleId) {
    var course = COURSES[courseId];
    if (!course) return { prev: null, next: null, index: -1 };
    var idx = course.modules.findIndex(function (m) { return m.id === moduleId; });
    return {
      index: idx,
      prev: idx > 0 ? course.modules[idx - 1] : null,
      next: idx >= 0 && idx < course.modules.length - 1 ? course.modules[idx + 1] : null
    };
  }

  function plainCourseBlurb(courseId) {
    var meta = courseMeta(courseId);
    return meta ? (meta.plainGoal || meta.blurb || '') : '';
  }

  function friendlyLessonType(type) {
    return LESSON_TYPE_LABELS[type] || 'Learn';
  }

  function breadcrumbs(parts) {
    return '<nav class="aa-breadcrumbs" aria-label="Breadcrumb">' +
      parts.map(function (p, i) {
        if (p.action) {
          return '<button type="button" class="aa-crumb-btn" data-crumb="' + esc(p.action) + '">' + esc(p.label) + '</button>' +
            (i < parts.length - 1 ? '<span class="aa-crumb-sep">/</span>' : '');
        }
        return '<span class="aa-crumb-current">' + esc(p.label) + '</span>';
      }).join('') +
    '</nav>';
  }

  function updateProgressUI() {
    const pct = progressPct();
    const fill = document.getElementById('aa-progress-fill');
    const label = document.getElementById('aa-progress-pct');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
  }

  function setView(view) {
    state.view = view;
    if (view !== 'module') {
      state.moduleId = null;
      state.lessonId = null;
      state.quiz = null;
    }
    document.querySelectorAll('.sidebar-links [data-view]').forEach(function (btn) {
      const v = btn.dataset.view;
      const active = v === view || (view === 'module' && v === state.courseId);
      btn.classList.toggle('active', active);
    });
    const badge = document.getElementById('header-badge');
    if (badge) {
      if (view === 'module' && state.moduleId) {
        const m = findModule(state.courseId, state.moduleId);
        badge.textContent = m ? ('M' + m.number + ': ' + m.title) : 'Module';
      } else badge.textContent = VIEWS[view] || view;
    }
    document.getElementById('sidebar').classList.remove('open');
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openCourse(courseId) {
    state.courseId = courseId;
    setView(courseId);
  }

  function openModule(courseId, moduleId) {
    state.courseId = courseId;
    state.moduleId = moduleId;
    state.lessonId = null;
    state.quiz = null;
    setView('module');
  }

  function findModule(courseId, moduleId) {
    const c = COURSES[courseId];
    if (!c) return null;
    return c.modules.find(function (m) { return m.id === moduleId; }) || null;
  }

  function markLesson(lessonId) {
    if (!state.lessonsDone.includes(lessonId)) {
      state.lessonsDone.push(lessonId);
      save();
      toast('Lesson marked complete');
    }
  }

  function markExercise(moduleId) {
    if (!state.exercisesDone.includes(moduleId)) {
      state.exercisesDone.push(moduleId);
      save();
      toast('Exercise marked complete');
    }
  }

  function tryCompleteModule(mod) {
    const lessonIds = (mod.lessons || []).map(function (l) { return l.id; });
    const allLessons = lessonIds.every(function (id) { return state.lessonsDone.includes(id); });
    const quizOk = state.quizScores[mod.id] != null && state.quizScores[mod.id] >= 70;
    const exerciseOk = state.exercisesDone.includes(mod.id);
    let capOk = true;
    if (mod.checklist && mod.checklist.length) {
      const done = state.capstone[mod.id] || [];
      capOk = mod.checklist.every(function (_, i) { return done.includes(i); });
    }
    if (allLessons && quizOk && exerciseOk && capOk) {
      if (!state.modulesDone.includes(mod.id)) {
        state.modulesDone.push(mod.id);
        save();
        toast('Nice work - topic complete');
      }
      return true;
    }
    return false;
  }

  function refreshBadges() {
    const badges = typeof AA_BADGES !== 'undefined' ? AA_BADGES : [];
    badges.forEach(function (b) {
      if (state.badges.includes(b.id)) return;
      const r = b.requirement || {};
      let earn = false;
      if (r.course && r.modulesCompleted != null) {
        earn = courseProgress(r.course).modulesDone >= r.modulesCompleted;
      }
      if (r.allCourses) {
        earn = ['notion', 'n8n', 'integration'].every(function (cid) {
          const c = COURSES[cid];
          return c && courseProgress(cid).modulesDone >= c.modules.length;
        });
      }
      if (r.quizzesAbove80) {
        const count = Object.values(state.quizScores).filter(function (s) { return s >= 80; }).length;
        earn = count >= r.quizzesAbove80;
      }
      if (r.selfAttested) earn = state.freeStack;
      if (earn) state.badges.push(b.id);
    });
    localStorage.setItem(STORAGE.badges, JSON.stringify(state.badges));
  }

  /* ---------- RENDERERS ---------- */

  function renderOverview() {
    const meta = AA_META;
    const cont = findContinueTarget();
    return (
      '<section class="aa-hero hero glass-panel">' +
        '<p class="hero-eyebrow">Richards Edwin · Workflow Automation & Productivity</p>' +
        '<h2 class="hero-brand">' + esc(meta.title) + '</h2>' +
        '<p class="hero-title">' + esc(meta.subtitle) + '</p>' +
        '<p class="hero-desc">' + esc(meta.audienceNote) + '</p>' +
        '<p class="aa-callout"><strong>Good news:</strong> ' + esc(meta.freePolicy) + '</p>' +
        '<div class="hero-actions" style="margin-top:1rem">' +
          (cont
            ? ('<button class="btn btn-primary" type="button" data-open-module="' + esc(cont.module.id) + '" data-course="' + esc(cont.courseId) + '"><i class="ti ti-player-play"></i> Continue: Module ' + cont.module.number + '</button>')
            : '<button class="btn btn-primary" type="button" data-open-course="notion"><i class="ti ti-player-play"></i> Start with Notion</button>') +
          '<button class="btn btn-glass" type="button" data-goto="pathway">See the simple plan</button>' +
        '</div>' +
      '</section>' +
      (cont
        ? ('<article class="aa-continue glass-panel">' +
            '<div><p class="aa-eyebrow">Pick up where you left off</p>' +
            '<h3 style="font-size:16px;margin:4px 0 6px">' + esc(cont.courseTitle) + ' · Module ' + cont.module.number + ': ' + esc(cont.module.title) + '</h3>' +
            '<p style="font-size:13px;color:var(--text-secondary)">About ' + cont.module.durationMin + ' minutes. One clear topic at a time.</p></div>' +
            '<button class="btn btn-primary" type="button" data-open-module="' + esc(cont.module.id) + '" data-course="' + esc(cont.courseId) + '">Continue</button>' +
          '</article>')
        : '') +
      '<div class="aa-stat-grid">' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + progressPct() + '%</div><div class="aa-stat-label">Your progress</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + state.modulesDone.length + '/' + allModules().length + '</div><div class="aa-stat-label">Topics finished</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + state.lessonsDone.length + '</div><div class="aa-stat-label">Lessons done</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + state.badges.length + '</div><div class="aa-stat-label">Badges</div></div>' +
      '</div>' +
      '<div class="aa-section-head"><h2>Three easy steps</h2><p>Follow them in order. Each course builds on the last, but you can pause anytime.</p></div>' +
      '<div class="aa-course-grid">' +
        meta.courses.map(function (c, idx) {
          const p = courseProgress(c.id);
          return (
            '<button type="button" class="aa-course-card glass-panel" data-open-course="' + esc(c.id) + '">' +
              '<div class="aa-course-accent" style="background:' + esc(c.color) + '"></div>' +
              '<p class="aa-eyebrow">Step ' + (idx + 1) + '</p>' +
              '<h3>' + esc(c.title) + '</h3>' +
              '<p>' + esc(c.blurb) + '</p>' +
              '<p class="aa-plain-goal">' + esc(c.plainGoal || '') + '</p>' +
              '<div class="aa-meta-row">' +
                '<span class="aa-chip">' + esc(c.level) + '</span>' +
                '<span class="aa-chip">' + c.modules + ' short topics</span>' +
                '<span class="aa-chip' + (p.pct === 100 ? ' done' : '') + '">' + p.pct + '% done</span>' +
              '</div>' +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderPathway() {
    const meta = AA_META;
    return (
      breadcrumbs([{ label: 'Home', action: 'overview' }, { label: 'How to learn' }]) +
      '<div class="aa-section-head"><h2>How to learn this academy</h2><p>' + esc(meta.startHint) + '</p></div>' +
      '<article class="aa-lesson-card glass-panel">' +
        '<h3>Keep it simple</h3>' +
        '<ul>' +
          '<li>Do one short topic at a time (about 20-40 minutes).</li>' +
          '<li>Read the example, then try the practice step.</li>' +
          '<li>Skip nothing scary: technical words are explained in plain English first.</li>' +
          '<li>Use free tools only - you do not need paid software to learn.</li>' +
        '</ul>' +
      '</article>' +
      '<div class="aa-path-steps" style="margin-top:12px">' +
        meta.courses.map(function (c, idx) {
          const p = courseProgress(c.id);
          return (
            '<article class="aa-path-step glass-panel">' +
              '<div class="num">' + (idx + 1) + '</div>' +
              '<div>' +
                '<h3 style="font-size:16px;margin-bottom:4px">' + esc(c.title) + '</h3>' +
                '<p style="font-size:13px;color:var(--text-secondary);margin-bottom:6px">' + esc(c.blurb) + '</p>' +
                '<p class="aa-plain-goal">' + esc(c.plainGoal || '') + '</p>' +
                '<div class="aa-meta-row" style="margin:10px 0">' +
                  '<span class="aa-chip">' + esc(c.level) + '</span>' +
                  '<span class="aa-chip">' + p.modulesDone + '/' + c.modules + ' topics done</span>' +
                '</div>' +
                '<div class="aa-progress-bar"><div class="aa-progress-fill" style="width:' + p.pct + '%"></div></div>' +
                '<button class="btn btn-primary btn-sm" type="button" data-open-course="' + esc(c.id) + '">Open this course</button>' +
              '</div>' +
            '</article>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderCourse(courseId) {
    const course = COURSES[courseId];
    if (!course) return '<p>Course data missing.</p>';
    const meta = courseMeta(courseId) || { title: course.title, shortTitle: course.title };
    const p = courseProgress(courseId);
    const nextMod = course.modules.find(function (m) { return !state.modulesDone.includes(m.id); }) || course.modules[0];
    const freeNote = typeof course.freeNote === 'string' ? course.freeNote : '';
    const freeTable = course.freeVsPaid
      ? ('<details class="aa-details glass-panel"><summary>Optional: free vs paid notes</summary><div style="padding:0 1rem 1rem;overflow:auto"><table class="af-compare-table" style="width:100%;font-size:13px"><thead><tr><th>Item</th><th>Status</th></tr></thead><tbody>' +
        (Array.isArray(course.freeVsPaid)
          ? course.freeVsPaid.map(function (row) {
              if (typeof row === 'string') return '<tr><td colspan="2">' + esc(row) + '</td></tr>';
              return '<tr><td>' + esc(row.item || row.name || '') + '</td><td>' + esc(row.status || row.note || '') + '</td></tr>';
            }).join('')
          : Object.keys(course.freeVsPaid).map(function (k) {
              const v = course.freeVsPaid[k];
              if (Array.isArray(v)) return '<tr><td>' + esc(k) + '</td><td>' + esc(v.join('; ')) + '</td></tr>';
              return '<tr><td>' + esc(k) + '</td><td>' + esc(String(v)) + '</td></tr>';
            }).join('')) +
        '</tbody></table></div></details>')
      : '';

    return (
      breadcrumbs([
        { label: 'Home', action: 'overview' },
        { label: meta.shortTitle || meta.title }
      ]) +
      '<div class="aa-section-head">' +
        '<h2>' + esc(meta.title || course.title) + '</h2>' +
        '<p>' + esc(plainCourseBlurb(courseId) || course.description || '') + '</p>' +
      '</div>' +
      (freeNote ? ('<p class="aa-callout"><strong>You can stay on free tools:</strong> ' + esc(freeNote) + '</p>') : '') +
      freeTable +
      '<div class="aa-continue glass-panel" style="margin:12px 0">' +
        '<div><p class="aa-eyebrow">Suggested next step</p>' +
        '<h3 style="font-size:15px;margin:4px 0">Module ' + nextMod.number + ': ' + esc(nextMod.title) + '</h3>' +
        '<p style="font-size:13px;color:var(--text-secondary)">About ' + nextMod.durationMin + ' minutes</p></div>' +
        '<button class="btn btn-primary" type="button" data-open-module="' + esc(nextMod.id) + '" data-course="' + esc(courseId) + '">Start this topic</button>' +
      '</div>' +
      '<div class="aa-stat-grid">' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + p.pct + '%</div><div class="aa-stat-label">Progress</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + p.modulesDone + '/' + p.modules + '</div><div class="aa-stat-label">Topics done</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + p.done + '/' + p.lessons + '</div><div class="aa-stat-label">Lessons done</div></div>' +
        '<div class="aa-stat glass-panel"><div class="aa-stat-value">' + esc((meta.level || 'Beginner friendly')) + '</div><div class="aa-stat-label">Level</div></div>' +
      '</div>' +
      '<div class="aa-section-head"><h2>Topics in this course</h2><p>Open any topic. We recommend going in order from 1 upward.</p></div>' +
      '<div class="aa-module-list">' +
        course.modules.map(function (m) {
          const done = state.modulesDone.includes(m.id);
          const lessonDone = (m.lessons || []).filter(function (l) { return state.lessonsDone.includes(l.id); }).length;
          return (
            '<button type="button" class="aa-module-row glass-panel" data-open-module="' + esc(m.id) + '" data-course="' + esc(courseId) + '">' +
              '<div class="aa-mod-num' + (done ? ' done' : '') + '">' + (done ? '<i class="ti ti-check"></i>' : m.number) + '</div>' +
              '<div>' +
                '<div class="aa-mod-title">' + esc(m.title) + '</div>' +
                '<div class="aa-mod-sub">About ' + m.durationMin + ' min · ' + lessonDone + '/' + (m.lessons || []).length + ' lessons' +
                  (state.quizScores[m.id] != null ? (' · Quiz ' + state.quizScores[m.id] + '%') : '') +
                '</div>' +
              '</div>' +
              '<span class="aa-chip' + (done ? ' done' : '') + '">' + (done ? 'Done' : 'Open') + '</span>' +
            '</button>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderModule() {
    const mod = findModule(state.courseId, state.moduleId);
    if (!mod) return '<p>Topic not found.</p><button class="btn btn-glass" type="button" data-goto="' + esc(state.courseId || 'overview') + '">Back</button>';
    tryCompleteModule(mod);
    const meta = courseMeta(state.courseId) || { shortTitle: state.courseId };
    const sib = siblingModules(state.courseId, mod.id);

    return (
      breadcrumbs([
        { label: 'Home', action: 'overview' },
        { label: meta.shortTitle || 'Course', action: 'course:' + state.courseId },
        { label: 'Topic ' + mod.number }
      ]) +
      '<div class="aa-pager">' +
        (sib.prev
          ? ('<button class="btn btn-glass btn-sm" type="button" data-open-module="' + esc(sib.prev.id) + '" data-course="' + esc(state.courseId) + '"><i class="ti ti-arrow-left"></i> Previous</button>')
          : '<button class="btn btn-glass btn-sm" type="button" data-goto="' + esc(state.courseId) + '"><i class="ti ti-arrow-left"></i> Course list</button>') +
        (sib.next
          ? ('<button class="btn btn-primary btn-sm" type="button" data-open-module="' + esc(sib.next.id) + '" data-course="' + esc(state.courseId) + '">Next topic <i class="ti ti-arrow-right"></i></button>')
          : '<button class="btn btn-primary btn-sm" type="button" data-goto="' + esc(state.courseId) + '">Back to course</button>') +
      '</div>' +
      '<section class="aa-hero glass-panel" style="margin-top:12px">' +
        '<p class="aa-eyebrow">Topic ' + mod.number + ' of ' + (COURSES[state.courseId] ? COURSES[state.courseId].modules.length : '?') + ' · About ' + mod.durationMin + ' minutes</p>' +
        '<h2>' + esc(mod.title) + '</h2>' +
        '<p class="aa-plain-goal">In plain English: work through the short lessons below, try the practice, then take a quick check quiz.</p>' +
        (mod.freeNote ? ('<p class="aa-callout"><strong>Stay free:</strong> ' + esc(mod.freeNote) + '</p>') : '') +
        '<h3 style="font-size:13px;margin-top:12px;color:var(--text-muted)">What you will be able to do</h3>' +
        '<ul style="padding-left:1.15rem;font-size:13px;color:var(--text-secondary);margin-top:6px">' +
          (mod.objectives || []).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') +
        '</ul>' +
      '</section>' +
      '<div class="aa-section-head"><h2>Lessons</h2><p>Read one card at a time. Mark complete when it makes sense.</p></div>' +
      (mod.lessons || []).map(function (lesson, li) {
        const done = state.lessonsDone.includes(lesson.id);
        return (
          '<article class="aa-lesson-card glass-panel" id="lesson-' + esc(lesson.id) + '">' +
            '<div class="aa-meta-row" style="margin-bottom:8px">' +
              '<span class="aa-chip">Lesson ' + (li + 1) + '</span>' +
              '<span class="aa-chip">' + esc(friendlyLessonType(lesson.type)) + '</span>' +
              (done ? '<span class="aa-chip done">Done</span>' : '') +
            '</div>' +
            '<h3>' + esc(lesson.title) + '</h3>' +
            '<p class="aa-summary">' + esc(lesson.summary) + '</p>' +
            '<h4 style="font-size:12px;color:var(--text-muted)">Remember these points</h4>' +
            '<ul>' + (lesson.points || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
            (lesson.steps && lesson.steps.length
              ? ('<h4 style="font-size:12px;color:var(--text-muted)">Do this</h4><ul>' + lesson.steps.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>')
              : '') +
            '<div class="aa-callout"><strong>Everyday example:</strong> ' + esc(lesson.example) + '</div>' +
            '<h4 style="font-size:12px;color:var(--text-muted);margin-top:10px">Takeaways</h4>' +
            '<ul>' + (lesson.takeaways || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
            '<div class="aa-callout warn"><strong>Watch out for:</strong> ' + esc((lesson.mistakes || []).join(' · ')) + '</div>' +
            '<button class="btn ' + (done ? 'btn-glass' : 'btn-primary') + ' btn-sm" style="margin-top:12px" type="button" data-mark-lesson="' + esc(lesson.id) + '">' +
              (done ? 'Lesson done' : 'Mark this lesson done') +
            '</button>' +
          '</article>'
        );
      }).join('') +
      renderExercise(mod) +
      renderModuleQuiz(mod) +
      renderCapstone(mod) +
      '<div class="aa-pager aa-pager-bottom">' +
        (sib.prev
          ? ('<button class="btn btn-glass" type="button" data-open-module="' + esc(sib.prev.id) + '" data-course="' + esc(state.courseId) + '"><i class="ti ti-arrow-left"></i> Previous topic</button>')
          : '<span></span>') +
        '<button class="btn btn-glass" type="button" data-finish-module="' + esc(mod.id) + '">Check if topic is complete</button>' +
        (sib.next
          ? ('<button class="btn btn-primary" type="button" data-open-module="' + esc(sib.next.id) + '" data-course="' + esc(state.courseId) + '">Next topic <i class="ti ti-arrow-right"></i></button>')
          : '<button class="btn btn-primary" type="button" data-goto="' + esc(state.courseId) + '">Finish - back to course</button>') +
      '</div>'
    );
  }

  function renderExercise(mod) {
    if (!mod.exercise) return '';
    const ex = mod.exercise;
    const done = state.exercisesDone.includes(mod.id);
    return (
      '<div class="aa-section-head"><h2>Try it yourself</h2><p>A short practice. Follow the steps at your own pace.</p></div>' +
      '<article class="aa-lesson-card glass-panel">' +
        '<h3>' + esc(ex.title) + '</h3>' +
        '<p class="aa-summary">' + esc(ex.scenario || '') + '</p>' +
        '<h4 style="font-size:12px;color:var(--text-muted)">Steps</h4>' +
        '<ul>' + (ex.steps || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
        '<div class="aa-callout"><strong>What to produce:</strong> ' + esc(ex.deliverable || '') + '</div>' +
        '<button class="btn ' + (done ? 'btn-glass' : 'btn-primary') + ' btn-sm" style="margin-top:12px" type="button" data-mark-exercise="' + esc(mod.id) + '">' +
          (done ? 'Practice done' : 'I finished this practice') +
        '</button>' +
      '</article>'
    );
  }

  function renderModuleQuiz(mod) {
    const score = state.quizScores[mod.id];
    const active = state.quiz && state.quiz.moduleId === mod.id ? state.quiz : null;
    let body = '';
    if (active && active.finished) {
      body = '<p class="aa-summary">Score: <strong>' + active.score + '%</strong> (' + active.correct + '/' + active.questions.length + ')</p>' +
        '<button class="btn btn-glass btn-sm" type="button" data-start-quiz="' + esc(mod.id) + '">Retry quiz</button>';
    } else if (active) {
      const q = active.questions[active.index];
      body =
        '<p class="aa-mod-sub">Question ' + (active.index + 1) + ' of ' + active.questions.length + '</p>' +
        '<h3 style="font-size:16px;margin:8px 0 10px">' + esc(q.q) + '</h3>' +
        (q.options || []).map(function (o, oi) {
          return '<button type="button" class="aa-quiz-opt" data-quiz-answer="' + oi + '">' + esc(o) + '</button>';
        }).join('') +
        '<p id="aa-quiz-feedback" style="margin-top:8px;font-size:13px;color:var(--text-secondary)"></p>';
    } else {
      body =
        '<p class="aa-summary">Quick check · ' + (mod.quiz || []).length + ' easy questions. Pass with 70%.' +
        (score != null ? (' Last score: ' + score + '%.') : '') + '</p>' +
        '<button class="btn btn-primary btn-sm" type="button" data-start-quiz="' + esc(mod.id) + '">Start quick check</button>';
    }
    return (
      '<div class="aa-section-head"><h2>Quick check</h2><p>No trick questions - just confirm the main ideas.</p></div>' +
      '<article class="aa-lesson-card glass-panel" id="aa-quiz-panel">' + body + '</article>'
    );
  }

  function renderCapstone(mod) {
    if (!mod.checklist || !mod.checklist.length) return '';
    const done = state.capstone[mod.id] || [];
    return (
      '<div class="aa-section-head"><h2>Capstone checklist</h2></div>' +
      '<article class="aa-lesson-card glass-panel">' +
        '<p class="aa-summary">Complete every item to finish this capstone module.</p>' +
        mod.checklist.map(function (item, i) {
          const checked = done.includes(i);
          return (
            '<label style="display:flex;gap:10px;align-items:flex-start;margin:8px 0;font-size:13px;color:var(--text-secondary)">' +
              '<input type="checkbox" data-capstone="' + esc(mod.id) + '" data-idx="' + i + '"' + (checked ? ' checked' : '') + '>' +
              '<span>' + esc(item) + '</span>' +
            '</label>'
          );
        }).join('') +
      '</article>'
    );
  }

  function renderSimulator() {
    const flows = typeof AA_SAMPLE_WORKFLOWS !== 'undefined' ? AA_SAMPLE_WORKFLOWS : [];
    const nodes = typeof AA_SIM_NODES !== 'undefined' ? AA_SIM_NODES : [];
    const flow = flows.find(function (f) { return f.id === state.simFlowId; }) || flows[0];
    if (!flow) return '<p>Simulator data missing.</p>';

    const nodeByType = {};
    nodes.forEach(function (n) { nodeByType[n.type] = n; });

    const flowNodes = (flow.nodes || []).map(function (n) {
      const def = nodeByType[n.type] || { name: n.type, color: '#64748b' };
      return '<div class="aa-sim-chip" style="border-color:' + esc(def.color) + '40"><span class="aa-sim-dot" style="background:' + esc(def.color) + ';display:inline-block;margin-right:6px"></span>' + esc(n.label || def.name) + '</div>';
    });

    const joined = [];
    flowNodes.forEach(function (html, i) {
      joined.push(html);
      if (i < flowNodes.length - 1) joined.push('<span class="aa-sim-arrow">-></span>');
    });

    const cats = {};
    nodes.forEach(function (n) {
      cats[n.category] = cats[n.category] || [];
      cats[n.category].push(n);
    });

    return (
      breadcrumbs([{ label: 'Home', action: 'overview' }, { label: 'Try a workflow' }]) +
      '<div class="aa-section-head">' +
        '<h2>Try a workflow (practice playground)</h2>' +
        '<p>This is a friendly demo. It shows how steps connect. It is not the real n8n app - just a safe place to learn the idea.</p>' +
      '</div>' +
      '<div class="aa-meta-row" style="margin-bottom:12px">' +
        flows.map(function (f) {
          return '<button type="button" class="aa-chip' + (f.id === flow.id ? ' done' : '') + '" data-sim-flow="' + esc(f.id) + '">' + esc(f.title) + '</button>';
        }).join('') +
      '</div>' +
      '<div class="aa-sim-layout">' +
        '<aside class="aa-sim-palette glass-panel">' +
          '<h3>Node palette</h3>' +
          Object.keys(cats).map(function (cat) {
            return '<p style="font-size:11px;color:var(--text-muted);margin:10px 0 6px">' + esc(cat) + '</p>' +
              cats[cat].map(function (n) {
                return '<button type="button" class="aa-sim-node-btn" data-sim-info="' + esc(n.type) + '"><span class="aa-sim-dot" style="background:' + esc(n.color) + '"></span>' + esc(n.name) + '</button>';
              }).join('');
          }).join('') +
        '</aside>' +
        '<section class="aa-sim-canvas glass-panel">' +
          '<h3 style="font-size:16px">' + esc(flow.title) + '</h3>' +
          '<p style="font-size:13px;color:var(--text-secondary);margin-top:4px">' + esc(flow.summary) + '</p>' +
          '<p class="aa-callout"><strong>Scenario:</strong> ' + esc(flow.scenario) + '</p>' +
          '<div class="aa-sim-flow">' + joined.join('') + '</div>' +
          '<h4 style="font-size:12px;color:var(--text-muted)">Learning goals</h4>' +
          '<ul style="padding-left:1.1rem;font-size:13px;color:var(--text-secondary)">' +
            (flow.learningGoals || []).map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') +
          '</ul>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">' +
            '<button class="btn btn-primary btn-sm" type="button" data-sim-run="' + esc(flow.id) + '"><i class="ti ti-player-play"></i> Run simulation</button>' +
            '<button class="btn btn-glass btn-sm" type="button" data-sim-reset>Clear output</button>' +
          '</div>' +
          '<div id="aa-sim-info" class="aa-callout" style="margin-top:12px">Select a node in the palette to inspect what it does.</div>' +
          '<pre class="aa-sim-output" id="aa-sim-output">' + esc(state.simOutput || 'Run the simulation to inspect sample data flowing through each node.') + '</pre>' +
          '<p class="aa-callout" style="margin-top:10px"><strong>Free vs paid:</strong> ' + esc(flow.freeVsPaid || 'Uses core Community Edition concepts.') + '</p>' +
          '<p style="font-size:13px;color:var(--text-secondary);margin-top:8px">' + esc(flow.explanation || '') + '</p>' +
        '</section>' +
      '</div>'
    );
  }

  function renderBadges() {
    refreshBadges();
    const badges = typeof AA_BADGES !== 'undefined' ? AA_BADGES : [];
    return (
      '<div class="aa-section-head"><h2>Badges & milestones</h2><p>Earn badges as you complete modules, quizzes, and the free-stack path.</p></div>' +
      '<label class="aa-lesson-card glass-panel" style="display:flex;gap:10px;align-items:center;cursor:pointer">' +
        '<input type="checkbox" id="aa-free-stack"' + (state.freeStack ? ' checked' : '') + '>' +
        '<span style="font-size:13px">I completed the labs using free self-hosted tools (Notion Free + n8n Community Edition / Docker).</span>' +
      '</label>' +
      '<div class="aa-badge-grid" style="margin-top:12px">' +
        badges.map(function (b) {
          const earned = state.badges.includes(b.id);
          return (
            '<article class="aa-badge glass-panel' + (earned ? ' earned' : '') + '">' +
              '<div class="aa-badge-icon">' + esc(b.icon) + '</div>' +
              '<h3>' + esc(b.title) + '</h3>' +
              '<p>' + esc(b.description) + '</p>' +
              '<p style="margin-top:8px;font-size:11px;color:var(--text-muted)">' + (earned ? 'Earned' : 'Locked') + '</p>' +
            '</article>'
          );
        }).join('') +
      '</div>'
    );
  }

  function renderAssessment() {
    const path = (typeof AA_PATH_QUIZZES !== 'undefined' && AA_PATH_QUIZZES.pathway) ? AA_PATH_QUIZZES.pathway : null;
    if (!path) return '<p>Pathway assessment data missing.</p>';
    const active = state.quiz && state.quiz.moduleId === 'pathway' ? state.quiz : null;
    let body = '';
    if (active && active.finished) {
      body = '<p class="aa-summary">Pathway score: <strong>' + active.score + '%</strong>. Pass mark: ' + (path.passPercent || 75) + '%.</p>' +
        '<button class="btn btn-glass btn-sm" type="button" data-start-pathway-quiz>Retry</button>';
    } else if (active) {
      const q = active.questions[active.index];
      body =
        '<p class="aa-mod-sub">Question ' + (active.index + 1) + ' of ' + active.questions.length + '</p>' +
        '<h3 style="font-size:16px;margin:8px 0 10px">' + esc(q.q) + '</h3>' +
        (q.options || []).map(function (o, oi) {
          return '<button type="button" class="aa-quiz-opt" data-quiz-answer="' + oi + '">' + esc(o) + '</button>';
        }).join('') +
        '<p id="aa-quiz-feedback" style="margin-top:8px;font-size:13px;color:var(--text-secondary)"></p>';
    } else {
      body =
        '<p class="aa-summary">' + esc(path.title) + ' · ' + (path.questions || []).length + ' questions · pass at ' + (path.passPercent || 75) + '%</p>' +
        (state.quizScores.pathway != null ? ('<p class="aa-summary">Last score: ' + state.quizScores.pathway + '%</p>') : '') +
        '<button class="btn btn-primary btn-sm" type="button" data-start-pathway-quiz>Start pathway assessment</button>';
    }
    return (
      breadcrumbs([{ label: 'Home', action: 'overview' }, { label: 'Final quiz' }]) +
      '<div class="aa-section-head"><h2>Final quiz</h2><p>A short wrap-up quiz after you have explored the three courses. Pass at 75%.</p></div>' +
      '<article class="aa-lesson-card glass-panel" id="aa-quiz-panel">' + body + '</article>'
    );
  }

  function renderCertificate() {
    const allDone = ['notion', 'n8n', 'integration'].every(function (cid) {
      const c = COURSES[cid];
      return c && courseProgress(cid).modulesDone >= c.modules.length;
    });
    const pathwayPass = (state.quizScores.pathway || 0) >= 75;
    const unlocked = allDone && pathwayPass;
    const name = localStorage.getItem(STORAGE.certName) || '';

    return (
      breadcrumbs([{ label: 'Home', action: 'overview' }, { label: 'Certificate' }]) +
      '<div class="aa-section-head"><h2>Your certificate</h2><p>Unlock it by finishing all three courses and the final quiz (75%+). No rush - learn at your pace.</p></div>' +
      '<article class="aa-cert-card glass-panel' + (unlocked ? '' : ' locked') + '">' +
        '<p class="aa-eyebrow">Workflow Automation & Productivity</p>' +
        '<h2 style="font-size:1.5rem;margin:8px 0">Notion & n8n Automation Academy</h2>' +
        '<p style="color:var(--text-secondary);margin-bottom:12px">This certifies that</p>' +
        '<input class="glass-inset" id="aa-cert-name" style="padding:10px 14px;border-radius:10px;width:min(100%,320px);text-align:center;font-size:18px;font-weight:700;border:1px solid var(--border)" value="' + esc(name) + '" placeholder="Your name">' +
        '<p style="margin-top:12px;color:var(--text-secondary)">has completed the academy pathway covering Notion mastery, free self-hosted n8n automation, and AI-powered integrations.</p>' +
        '<p style="margin-top:16px;font-size:12px;color:var(--text-muted)">Designed and copyrighted by Richards Edwin</p>' +
        '<p style="margin-top:10px;font-size:13px">' +
          (unlocked
            ? '<span class="aa-chip done">Unlocked</span>'
            : ('<span class="aa-chip">Locked · Courses ' +
              ['notion', 'n8n', 'integration'].map(function (cid) { return courseProgress(cid).modulesDone + '/' + (COURSES[cid] ? COURSES[cid].modules.length : 0); }).join(' · ') +
              ' · Pathway quiz ' + (state.quizScores.pathway != null ? state.quizScores.pathway + '%' : 'not taken') + '</span>')) +
        '</p>' +
      '</article>'
    );
  }

  function render() {
    const root = document.getElementById('view-root');
    let html = '';
    try {
      if (state.view === 'overview') html = renderOverview();
      else if (state.view === 'pathway') html = renderPathway();
      else if (state.view === 'notion' || state.view === 'n8n' || state.view === 'integration') html = renderCourse(state.view);
      else if (state.view === 'module') html = renderModule();
      else if (state.view === 'simulator') html = renderSimulator();
      else if (state.view === 'badges') html = renderBadges();
      else if (state.view === 'assessment') html = renderAssessment();
      else if (state.view === 'certificate') html = renderCertificate();
      else html = renderOverview();
    } catch (err) {
      console.error(err);
      html = '<article class="glass-panel" style="padding:1.5rem"><h2>Unable to render view</h2><p class="aa-summary">' + esc(err.message) + '</p></article>';
    }
    root.innerHTML = html;
    bindViewEvents();
    updateProgressUI();
  }

  function startQuiz(moduleId) {
    const mod = findModule(state.courseId, moduleId);
    if (!mod || !mod.quiz) return;
    const questions = mod.quiz.slice().sort(function () { return Math.random() - 0.5; });
    state.quiz = { moduleId: moduleId, questions: questions, index: 0, correct: 0, finished: false, score: 0, locked: false };
    render();
  }

  function startPathwayQuiz() {
    const path = AA_PATH_QUIZZES.pathway;
    const questions = (path.questions || []).slice().sort(function () { return Math.random() - 0.5; });
    state.quiz = { moduleId: 'pathway', questions: questions, index: 0, correct: 0, finished: false, score: 0, locked: false };
    render();
  }

  function answerQuiz(oi, btn) {
    const qz = state.quiz;
    if (!qz || qz.locked) return;
    qz.locked = true;
    const q = qz.questions[qz.index];
    const parent = btn.parentElement;
    parent.querySelectorAll('.aa-quiz-opt').forEach(function (b, i) {
      b.disabled = true;
      if (i === q.correct) b.classList.add('correct');
      else if (b === btn && oi !== q.correct) b.classList.add('wrong');
    });
    if (oi === q.correct) qz.correct += 1;
    const fb = document.getElementById('aa-quiz-feedback');
    if (fb) fb.textContent = (oi === q.correct ? 'Correct. ' : 'Not quite. ') + (q.explain || '');
    setTimeout(function () {
      qz.locked = false;
      qz.index += 1;
      if (qz.index >= qz.questions.length) {
        qz.finished = true;
        qz.score = Math.round((qz.correct / qz.questions.length) * 100);
        state.quizScores[qz.moduleId] = qz.score;
        save();
        if (qz.moduleId !== 'pathway') {
          const mod = findModule(state.courseId, qz.moduleId);
          if (mod) tryCompleteModule(mod);
        }
      }
      render();
    }, 850);
  }

  function runSimulation(flowId) {
    const flow = AA_SAMPLE_WORKFLOWS.find(function (f) { return f.id === flowId; });
    if (!flow) return;
    const lines = [];
    lines.push('SIMULATION: ' + flow.title);
    lines.push('Scenario: ' + flow.scenario);
    lines.push('');
    lines.push('Sample input:');
    lines.push(JSON.stringify(flow.sampleInput || {}, null, 2));
    lines.push('');
    if (flow.simulatedRun && Array.isArray(flow.simulatedRun)) {
      flow.simulatedRun.forEach(function (step, i) {
        lines.push('--- Step ' + (i + 1) + ': ' + (step.node || step.label || 'Node') + ' ---');
        if (step.note) lines.push(step.note);
        if (step.output !== undefined) lines.push(JSON.stringify(step.output, null, 2));
        lines.push('');
      });
    } else {
      (flow.nodes || []).forEach(function (n, i) {
        lines.push('--- Step ' + (i + 1) + ': ' + (n.label || n.type) + ' ---');
        lines.push('Node type: ' + n.type);
        lines.push('Passed sample items forward (educational stub).');
        lines.push('');
      });
    }
    if (flow.tryNext) lines.push('Try next: ' + (Array.isArray(flow.tryNext) ? flow.tryNext.join(' | ') : flow.tryNext));
    state.simOutput = lines.join('\n');
    const out = document.getElementById('aa-sim-output');
    if (out) out.textContent = state.simOutput;
    else render();
  }

  function bindViewEvents() {
    document.querySelectorAll('[data-goto]').forEach(function (btn) {
      btn.addEventListener('click', function () { setView(btn.dataset.goto); });
    });
    document.querySelectorAll('[data-open-course]').forEach(function (btn) {
      btn.addEventListener('click', function () { openCourse(btn.dataset.openCourse); });
    });
    document.querySelectorAll('[data-open-module]').forEach(function (btn) {
      btn.addEventListener('click', function () { openModule(btn.dataset.course, btn.dataset.openModule); });
    });
    document.querySelectorAll('[data-mark-lesson]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        markLesson(btn.dataset.markLesson);
        const mod = findModule(state.courseId, state.moduleId);
        if (mod) tryCompleteModule(mod);
        render();
      });
    });
    document.querySelectorAll('[data-mark-exercise]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        markExercise(btn.dataset.markExercise);
        const mod = findModule(state.courseId, state.moduleId);
        if (mod) tryCompleteModule(mod);
        render();
      });
    });
    document.querySelectorAll('[data-start-quiz]').forEach(function (btn) {
      btn.addEventListener('click', function () { startQuiz(btn.dataset.startQuiz); });
    });
    document.querySelectorAll('[data-start-pathway-quiz]').forEach(function (btn) {
      btn.addEventListener('click', startPathwayQuiz);
    });
    document.querySelectorAll('[data-quiz-answer]').forEach(function (btn) {
      btn.addEventListener('click', function () { answerQuiz(+btn.dataset.quizAnswer, btn); });
    });
    document.querySelectorAll('[data-finish-module]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const mod = findModule(state.courseId, btn.dataset.finishModule);
        if (!mod) return;
        if (tryCompleteModule(mod)) toast('Module requirements met');
        else toast('Almost there: finish lessons, practice, quiz (70%+), and any checklist');
        render();
      });
    });
    document.querySelectorAll('[data-crumb]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var a = btn.dataset.crumb || '';
        if (a.indexOf('course:') === 0) openCourse(a.slice(7));
        else setView(a);
      });
    });
    document.querySelectorAll('[data-capstone]').forEach(function (input) {
      input.addEventListener('change', function () {
        const mid = input.dataset.capstone;
        const idx = +input.dataset.idx;
        const arr = state.capstone[mid] ? state.capstone[mid].slice() : [];
        if (input.checked) {
          if (!arr.includes(idx)) arr.push(idx);
        } else {
          const i = arr.indexOf(idx);
          if (i >= 0) arr.splice(i, 1);
        }
        state.capstone[mid] = arr;
        save();
        const mod = findModule(state.courseId, mid);
        if (mod) tryCompleteModule(mod);
      });
    });
    document.querySelectorAll('[data-sim-flow]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.simFlowId = btn.dataset.simFlow;
        state.simOutput = null;
        render();
      });
    });
    document.querySelectorAll('[data-sim-run]').forEach(function (btn) {
      btn.addEventListener('click', function () { runSimulation(btn.dataset.simRun); });
    });
    document.querySelectorAll('[data-sim-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () { state.simOutput = null; render(); });
    });
    document.querySelectorAll('[data-sim-info]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const n = AA_SIM_NODES.find(function (x) { return x.type === btn.dataset.simInfo; });
        const box = document.getElementById('aa-sim-info');
        if (!n || !box) return;
        box.innerHTML =
          '<strong>' + esc(n.name) + '</strong> · ' + esc(n.category) + '<br>' +
          esc(n.description) + '<br><br>' +
          '<strong>Behavior:</strong> ' + esc(n.behavior) + '<br>' +
          '<strong>Free vs paid:</strong> ' + esc(n.freeVsPaid || '');
      });
    });
    document.getElementById('aa-free-stack')?.addEventListener('change', function (e) {
      state.freeStack = e.target.checked;
      save();
      render();
    });
    document.getElementById('aa-cert-name')?.addEventListener('change', function (e) {
      localStorage.setItem(STORAGE.certName, e.target.value.trim());
    });
  }

  function buildSearchIndex() {
    const items = [];
    Object.keys(COURSES).forEach(function (cid) {
      const c = COURSES[cid];
      if (!c) return;
      items.push({ type: 'Course', title: c.title, sub: cid, action: function () { openCourse(cid); } });
      (c.modules || []).forEach(function (m) {
        items.push({ type: 'Module', title: m.title, sub: c.title, action: function () { openModule(cid, m.id); } });
        (m.lessons || []).forEach(function (l) {
          items.push({ type: 'Lesson', title: l.title, sub: m.title, action: function () { openModule(cid, m.id); } });
        });
      });
    });
    (typeof AA_SIM_NODES !== 'undefined' ? AA_SIM_NODES : []).forEach(function (n) {
      items.push({ type: 'Node', title: n.name, sub: n.category, action: function () { setView('simulator'); } });
    });
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
      ? searchIndex.filter(function (i) {
          return i.title.toLowerCase().includes(query) || (i.sub || '').toLowerCase().includes(query);
        }).slice(0, 14)
      : searchIndex.slice(0, 10);
    const el = document.getElementById('search-results');
    if (!results.length) {
      el.innerHTML = '<div class="search-empty">No results found</div>';
      return;
    }
    el.innerHTML = results.map(function (r, i) {
      return (
        '<div class="search-result' + (i === 0 ? ' focused' : '') + '" data-idx="' + i + '">' +
          '<span class="search-result-type">' + esc(r.type) + '</span>' +
          '<div><div class="search-result-title">' + esc(r.title) + '</div><div class="search-result-sub">' + esc(r.sub) + '</div></div>' +
        '</div>'
      );
    }).join('');
    el.querySelectorAll('.search-result').forEach(function (row) {
      row.addEventListener('click', function () {
        results[+row.dataset.idx].action();
        closeSearch();
      });
    });
  }

  function initChrome() {
    document.querySelectorAll('.sidebar-links [data-view]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const v = btn.dataset.view;
        if (v === 'notion' || v === 'n8n' || v === 'integration') openCourse(v);
        else setView(v);
      });
    });
    document.getElementById('mobile-menu')?.addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('open');
    });
    document.getElementById('sidebar-collapse')?.addEventListener('click', function () {
      document.getElementById('app').classList.toggle('sidebar-collapsed');
    });
    document.getElementById('theme-toggle')?.addEventListener('click', function () {
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
    document.getElementById('aa-search-open')?.addEventListener('click', openSearch);
    document.getElementById('search-overlay')?.addEventListener('click', function (e) {
      if (e.target.id === 'search-overlay') closeSearch();
    });
    document.getElementById('search-input')?.addEventListener('input', function (e) { renderSearch(e.target.value); });
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  }

  function init() {
    refreshBadges();
    searchIndex = buildSearchIndex();
    initChrome();
    render();
  }

  init();
})();
