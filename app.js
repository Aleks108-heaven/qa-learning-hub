(function(){
  "use strict";

  // ---------- i18n ----------
  var EN_UI = {
    brandTagline: "Software Testing Course",
    menuButton: "Menu",
    footerText: "QA Learning Hub · manual testing, test design, ad hoc &amp; exploratory testing, REST API testing, ISTQB® CTFL v4.0 exam prep, a working QA toolbox &amp; career reference, test/QA architecture, application security testing, and hands-on performance, UI/UX &amp; automation testing.",
    navDashboard: "Dashboard",
    navTutorials: "Tutorials",
    navPractice: "Practice",
    navQuizzes: "Quizzes",
    navGlossary: "Glossary",
    langLabel: "Language",
    heroEyebrow: "Software Testing Course",
    homeTitle: "QA Learning Hub",
    homeIntro: "A structured path through manual testing fundamentals, test design techniques, the full testing-types landscape, ad hoc and exploratory testing, REST API testing, ISTQB® CTFL v4.0 exam prep, a practical toolbox and career reference, test/QA architecture, application security testing, and hands-on performance, UI/UX, and automation testing. A quiz follows every module. Module 12 covers AI testing: using AI to test, and testing AI-based systems.",
    statModulesCompleted: "Modules completed",
    statModulesInProgress: "Modules in progress",
    statQuizzesAttempted: "Quizzes attempted",
    statGlossaryTerms: "Glossary terms",
    tutorialModulesHeading: "Tutorial modules",
    badgeNotStarted: "Not started",
    badgeInProgress: "In progress",
    badgeCompleted: "Completed",
    bestScoreLabel: "best {pct}%",
    ctaFinalExam: "Take the Final Exam",
    ctaBrowseGlossary: "Browse the Glossary",
    moduleWord: "MODULE",
    crumbModule: "Module",
    calloutTakeaway: "Key takeaway",
    markComplete: "Mark module as complete",
    takeModuleQuiz: "Take the Module {num} Quiz →",
    allQuizzes: "All quizzes →",
    quizzesTitle: "Quizzes",
    quizzesIntro: "Take any module quiz on its own, or mix everything together in the Final Exam. Each quiz can be retaken as many times as you like — questions and answer order shuffle on every attempt.",
    finalExamCardNum: "FINAL EXAM",
    finalExamTitle: "Mixed Final Exam",
    finalExamDesc: "{n} questions randomly drawn from all {m} modules.",
    attempted: "Attempted",
    notAttempted: "Not attempted",
    moduleQuizCardNum: "MODULE {num} QUIZ",
    quizQuestionsCount: "{n} questions covering this module.",
    questionOf: "Question {a} of {b}",
    questionLabel: "QUESTION",
    exitQuiz: "Exit quiz",
    nextQuestion: "Next question →",
    seeResults: "See results →",
    correctPrefix: "Correct. ",
    incorrectPrefix: "Not quite. ",
    resultsSuffix: "Results",
    resultsCorrectLine: "{score} of {total} correct · pass threshold {pct}%",
    passed: "Passed",
    failed: "Not yet — give it another try",
    retakeQuiz: "Retake this quiz",
    backToQuizzes: "Back to quizzes",
    reviewHeading: "Review",
    yourAnswer: "Your answer:",
    correctAnswer: "Correct answer:",
    skipped: "Skipped",
    noQuestionsAvailable: "No questions available for this quiz yet.",
    finalExamTitleLabel: "Final Exam",
    quizSuffix: "Quiz",
    glossaryTitle: "Testing Glossary",
    glossaryIntro: "{n} software testing terms and types, searchable and filterable by category.",
    searchPlaceholder: "Search terms or definitions…",
    allCategories: "All categories",
    termsCount: "{n} terms",
    noTermsMatch: "No terms match your search.",
    alsoLabel: "also:"
  };
  var EN_CAT_LABELS = {
    "Functional": "Functional",
    "Non-Functional": "Non-Functional",
    "Structural": "Structural",
    "Change-Related": "Change-Related",
    "Specialized": "Specialized",
    "General": "General"
  };
  var SUPPORTED_LOCALES = [
    { code: "en", label: "English" },
    { code: "uk", label: "Українська" },
    { code: "pl", label: "Polski" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "de", label: "Deutsch" }
  ];

  window.QAHUB_LOCALES = window.QAHUB_LOCALES || {};
  window.QAHUB_LOCALES.en = {
    modules: window.QAHUB_MODULES || [],
    quizzes: window.QAHUB_QUIZZES || {},
    glossary: window.QAHUB_GLOSSARY || [],
    ui: EN_UI,
    catLabels: EN_CAT_LABELS
  };

  var LOCALE_KEY = "qahub_locale_v1";
  // Own-property check so stored values like "__proto__" or "constructor" can't pass as a locale.
  function hasLocale(code){
    return Object.prototype.hasOwnProperty.call(window.QAHUB_LOCALES, code);
  }
  function loadLocale(){
    try{
      var v = localStorage.getItem(LOCALE_KEY);
      return v && hasLocale(v) ? v : "en";
    }catch(e){ return "en"; }
  }
  function saveLocale(code){
    try{ localStorage.setItem(LOCALE_KEY, code); }catch(e){}
  }
  var currentLocale = loadLocale();

  function LD(){ return window.QAHUB_LOCALES[currentLocale] || window.QAHUB_LOCALES.en; }
  function t(key){
    var ld = LD();
    var v = ld.ui && ld.ui[key] != null ? ld.ui[key] : window.QAHUB_LOCALES.en.ui[key];
    return v != null ? v : key;
  }
  function tf(key, vars){
    var s = t(key);
    return s.replace(/\{(\w+)\}/g, function(_, k){ return (vars && vars[k] != null) ? vars[k] : ""; });
  }
  function catLabel(code){
    var ld = LD();
    return (ld.catLabels && ld.catLabels[code]) || code;
  }
  function curModules(){ return LD().modules || []; }
  function curGlossary(){ return LD().glossary || []; }
  function curQuizzes(){ return LD().quizzes || {}; }
  function availableLocales(){
    return SUPPORTED_LOCALES.filter(function(l){ return !!window.QAHUB_LOCALES[l.code]; });
  }
  function applyStaticStrings(){
    document.documentElement.setAttribute("lang", currentLocale);
    var tagline = document.getElementById("qh-brand-tagline");
    if(tagline) tagline.textContent = t("brandTagline");
    var menuBtn = document.getElementById("qh-menu-btn");
    if(menuBtn) menuBtn.textContent = t("menuButton");
    var footer = document.getElementById("qh-footer");
    if(footer) footer.innerHTML = t("footerText");
  }
  function setLocale(code){
    if(!hasLocale(code)) return;
    currentLocale = code;
    saveLocale(code);
    quizState = null;
    applyStaticStrings();
    render();
  }

  var PASS_THRESHOLD = 0.7;

  // ---------- Progress persistence (per-viewer convenience only) ----------
  var STORAGE_KEY = "qahub_progress_v1";
  function loadProgress(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      var p = raw ? JSON.parse(raw) : null;
      // Tampered or corrupt data (null, arrays, strings) falls back to a fresh record instead of crashing the app.
      var isObj = function(o){ return o && typeof o === "object" && !Array.isArray(o); };
      if(!isObj(p) || !isObj(p.modules) || !isObj(p.quizzes)) return { modules:{}, quizzes:{} };
      return p;
    }catch(e){ return { modules:{}, quizzes:{} }; }
  }
  function saveProgress(p){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
  }
  var progress = loadProgress();
  var VALID_STATUSES = { "not-started":1, "in-progress":1, "completed":1 };
  function moduleStatus(id){
    var s = progress.modules[id] && progress.modules[id].status;
    return VALID_STATUSES[s] ? s : "not-started";
  }
  function setModuleStatus(id, status){
    progress.modules[id] = progress.modules[id] || {};
    progress.modules[id].status = status;
    saveProgress(progress);
  }
  function touchModule(id){
    if(moduleStatus(id) === "not-started"){ setModuleStatus(id, "in-progress"); }
  }
  function bestScore(quizId){
    var q = progress.quizzes[quizId];
    return q ? q.best : null;
  }
  function recordScore(quizId, pct){
    progress.quizzes[quizId] = progress.quizzes[quizId] || {};
    if(progress.quizzes[quizId].best == null || pct > progress.quizzes[quizId].best){
      progress.quizzes[quizId].best = pct;
    }
    saveProgress(progress);
  }

  // ---------- helpers ----------
  function esc(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function pad2(n){ return (n < 10 ? "0" : "") + n; }
  function shuffle(arr){
    var a = arr.slice();
    for(var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var tmp=a[i]; a[i]=a[j]; a[j]=tmp;
    }
    return a;
  }
  function el(tag, attrs, html){
    var e = document.createElement(tag);
    if(attrs) for(var k in attrs) e.setAttribute(k, attrs[k]);
    if(html != null) e.innerHTML = html;
    return e;
  }
  function moduleById(id){
    var MODULES = curModules();
    for(var i=0;i<MODULES.length;i++) if(MODULES[i].id===id) return MODULES[i];
    return null;
  }

  var root = document.getElementById("qh-app");

  // ---------- Sidebar ----------
  function renderSidebar(activeRoute){
    var wrap = document.getElementById("qh-sidebar-inner");
    var MODULES = curModules();
    var html = "";
    html += '<div class="nav-group lang-switcher"><select id="qh-lang-select" class="filter-select" aria-label="'+esc(t("langLabel"))+'">';
    availableLocales().forEach(function(l){
      html += '<option value="'+l.code+'" '+(l.code===currentLocale?'selected':'')+'>'+esc(l.label)+'</option>';
    });
    html += '</select></div>';
    html += '<div class="nav-group">';
    html += navLink("#/home", t("navDashboard"), activeRoute==="home", null);
    html += '</div>';
    html += '<div class="nav-group"><div class="nav-label">'+esc(t("navTutorials"))+'</div>';
    MODULES.forEach(function(m){
      var status = moduleStatus(m.id);
      var dotClass = status === "completed" ? "done" : (status === "in-progress" ? "progress" : "");
      var isActive = activeRoute === "module:" + m.id;
      html += '<a class="nav-link'+(isActive?' active':'')+'" href="#/module/'+m.id+'"><span class="num">'+m.num+'</span><span>'+esc(m.title)+'</span><span class="status-dot '+dotClass+'"></span></a>';
    });
    html += '</div>';
    html += '<div class="nav-group"><div class="nav-label">'+esc(t("navPractice"))+'</div>';
    html += navLink("#/quiz", t("navQuizzes"), activeRoute==="quiz-picker", null);
    html += navLink("#/glossary", t("navGlossary"), activeRoute==="glossary", null);
    html += '</div>';
    wrap.innerHTML = html;
    var langSelect = document.getElementById("qh-lang-select");
    if(langSelect) langSelect.addEventListener("change", function(e){ setLocale(e.target.value); });
  }
  function navLink(href, label, active, num){
    return '<a class="nav-link'+(active?' active':'')+'" href="'+href+'">'+(num!=null?'<span class="num">'+num+'</span>':'')+'<span>'+esc(label)+'</span></a>';
  }

  // ---------- Router ----------
  function parseRoute(){
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    if(parts.length === 0) return { name:"home" };
    if(parts[0] === "module" && parts[1]) return { name:"module", id: parts[1] };
    if(parts[0] === "quiz" && parts[1] === "final") return { name:"quiz-run", id:"final" };
    if(parts[0] === "quiz" && parts[1]) return { name:"quiz-run", id: parts[1] };
    if(parts[0] === "quiz") return { name:"quiz-picker" };
    if(parts[0] === "glossary") return { name:"glossary" };
    return { name:"home" };
  }

  function render(){
    var route = parseRoute();
    var activeKey = route.name === "module" ? "module:"+route.id :
      (route.name === "quiz-picker" || route.name === "quiz-run" ? "quiz-picker" :
      (route.name === "glossary" ? "glossary" : "home"));
    renderSidebar(activeKey);
    document.getElementById("qh-sidebar").classList.remove("open");
    window.scrollTo(0,0);
    if(route.name === "home") return renderHome();
    if(route.name === "module") return renderModule(route.id);
    if(route.name === "quiz-picker") return renderQuizPicker();
    if(route.name === "quiz-run") return renderQuizRun(route.id);
    if(route.name === "glossary") return renderGlossary();
    renderHome();
  }

  // ---------- Home / Dashboard ----------
  function renderHome(){
    var MODULES = curModules();
    var GLOSSARY = curGlossary();
    var completed = MODULES.filter(function(m){ return moduleStatus(m.id)==="completed"; }).length;
    var inProgress = MODULES.filter(function(m){ return moduleStatus(m.id)==="in-progress"; }).length;
    var quizzesTaken = Object.keys(progress.quizzes).length;
    var html = '';
    html += '<div class="hero-eyebrow">'+esc(t("heroEyebrow"))+'</div>';
    html += '<h1>'+esc(t("homeTitle"))+'</h1>';
    html += '<p style="max-width:62ch;color:var(--ink-soft);font-size:1.05rem;">'+esc(t("homeIntro"))+'</p>';
    html += '<div class="stat-row">';
    html += statTile(completed+" / "+MODULES.length, t("statModulesCompleted"));
    html += statTile(inProgress, t("statModulesInProgress"));
    html += statTile(quizzesTaken, t("statQuizzesAttempted"));
    html += statTile(GLOSSARY.length, t("statGlossaryTerms"));
    html += '</div>';
    html += '<h2 style="margin-top:34px;">'+esc(t("tutorialModulesHeading"))+'</h2>';
    html += '<div class="dashboard-grid">';
    MODULES.forEach(function(m){
      var status = moduleStatus(m.id);
      var badgeClass = status.replace("_","-");
      var badgeLabel = status === "not-started" ? t("badgeNotStarted") : (status === "in-progress" ? t("badgeInProgress") : t("badgeCompleted"));
      var qScore = bestScore(m.id);
      html += '<a class="card" href="#/module/'+m.id+'" style="text-decoration:none;">';
      html += '<span class="card-num">'+esc(t("moduleWord"))+' '+pad2(m.num)+'</span>';
      html += '<h3>'+esc(m.title)+'</h3>';
      html += '<p>'+esc(m.summary)+'</p>';
      html += '<div class="card-foot"><span class="badge '+badgeClass+'">'+esc(badgeLabel)+'</span>'+(qScore!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:qScore}))+'</span>':'')+'</div>';
      html += '</a>';
    });
    html += '</div>';
    html += '<div class="cta-row" style="margin-top:36px;gap:14px;">';
    html += '<a class="btn" href="#/quiz/final">'+esc(t("ctaFinalExam"))+'</a>';
    html += '<a class="btn secondary" href="#/glossary">'+esc(t("ctaBrowseGlossary"))+'</a>';
    html += '</div>';
    root.innerHTML = html;
  }
  function statTile(num, label){
    return '<div class="stat-tile"><div class="stat-num">'+esc(num)+'</div><div class="stat-label">'+esc(label)+'</div></div>';
  }

  // ---------- Module page ----------
  function renderModule(id){
    var m = moduleById(id);
    if(!m){ renderHome(); return; }
    touchModule(id);
    renderSidebar("module:"+id);
    var MODULES = curModules();
    var idx = MODULES.indexOf(m);
    var prev = MODULES[idx-1], next = MODULES[idx+1];
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / '+esc(t("crumbModule"))+' '+m.num+'</div>';
    html += '<h1>'+esc(m.title)+'</h1>';
    html += '<div class="callout"><div class="eyebrow">'+esc(t("calloutTakeaway"))+'</div><p>'+esc(m.takeaway)+'</p></div>';
    if(m.callout){
      html += '<div class="callout reading"><div class="eyebrow">'+esc(m.callout.label)+'</div><p>'+m.callout.body+'</p></div>';
    }
    html += '<div class="lesson-nav">';
    m.lessons.forEach(function(l, i){
      html += '<a class="lesson-pill" href="#lesson-'+i+'" onclick="event.preventDefault();document.getElementById(\'lesson-'+i+'\').scrollIntoView({behavior:\'smooth\',block:\'start\'});">'+esc(l.h)+'</a>';
    });
    html += '</div>';
    m.lessons.forEach(function(l, i){
      html += '<div class="lesson" id="lesson-'+i+'"><h3>'+esc(l.h)+'</h3>'+l.body+'</div>';
    });
    var status = moduleStatus(id);
    html += '<div class="cta-row" style="flex-direction:column;align-items:center;gap:12px;margin-top:10px;">';
    if(status !== "completed"){
      html += '<button class="btn secondary" id="qh-mark-complete">'+esc(t("markComplete"))+'</button>';
    } else {
      html += '<span class="badge completed">'+esc(t("badgeCompleted"))+'</span>';
    }
    html += '<a class="btn" href="#/quiz/'+m.id+'">'+esc(tf("takeModuleQuiz",{num:m.num}))+'</a>';
    html += '</div>';
    html += '<div class="cta-row" style="justify-content:space-between;margin-top:34px;">';
    html += prev ? '<a class="btn ghost" href="#/module/'+prev.id+'">&larr; '+esc(prev.title)+'</a>' : '<span></span>';
    html += next ? '<a class="btn ghost" href="#/module/'+next.id+'">'+esc(next.title)+' &rarr;</a>' : '<a class="btn ghost" href="#/quiz">'+esc(t("allQuizzes"))+'</a>';
    html += '</div>';
    root.innerHTML = html;
    var btn = document.getElementById("qh-mark-complete");
    if(btn) btn.addEventListener("click", function(){
      setModuleStatus(id, "completed");
      renderModule(id);
    });
  }

  // ---------- Quiz picker ----------
  function renderQuizPicker(){
    var MODULES = curModules();
    var QUIZZES = curQuizzes();
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / '+esc(t("quizzesTitle"))+'</div>';
    html += '<h1>'+esc(t("quizzesTitle"))+'</h1>';
    html += '<p style="color:var(--ink-soft);max-width:60ch;">'+esc(t("quizzesIntro"))+'</p>';
    html += '<div class="quiz-picker-grid">';
    html += '<a class="card final-card" href="#/quiz/final" style="text-decoration:none;">';
    html += '<span class="card-num">'+esc(t("finalExamCardNum"))+'</span><h3>'+esc(t("finalExamTitle"))+'</h3><p>'+esc(tf("finalExamDesc",{n:20,m:MODULES.length}))+'</p>';
    var fb = bestScore("final");
    html += '<div class="card-foot"><span class="badge '+(fb!=null?'completed':'not-started')+'">'+(fb!=null?esc(t("attempted")):esc(t("notAttempted")))+'</span>'+(fb!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:fb}))+'</span>':'')+'</div>';
    html += '</a>';
    MODULES.forEach(function(m){
      var qs = QUIZZES[m.id] || [];
      var sc = bestScore(m.id);
      html += '<a class="card" href="#/quiz/'+m.id+'" style="text-decoration:none;">';
      html += '<span class="card-num">'+esc(tf("moduleQuizCardNum",{num:pad2(m.num)}))+'</span><h3>'+esc(m.title)+'</h3><p>'+esc(tf("quizQuestionsCount",{n:qs.length}))+'</p>';
      html += '<div class="card-foot"><span class="badge '+(sc!=null?'completed':'not-started')+'">'+(sc!=null?esc(t("attempted")):esc(t("notAttempted")))+'</span>'+(sc!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:sc}))+'</span>':'')+'</div>';
      html += '</a>';
    });
    html += '</div>';
    root.innerHTML = html;
  }

  // ---------- Quiz run ----------
  var quizState = null;
  function buildQuizQuestions(quizId){
    var MODULES = curModules();
    var QUIZZES = curQuizzes();
    if(quizId === "final"){
      var pool = [];
      MODULES.forEach(function(m){
        (QUIZZES[m.id]||[]).forEach(function(q){
          pool.push(Object.assign({}, q, { source: m.title }));
        });
      });
      pool = shuffle(pool);
      return pool.slice(0, Math.min(20, pool.length));
    }
    var qs = QUIZZES[quizId] || [];
    return shuffle(qs);
  }
  function prepQuestion(q){
    var opts = q.options.map(function(text, i){ return { text: text, isCorrect: i === q.correct }; });
    opts = shuffle(opts);
    return { q: q.q, explain: q.explain, source: q.source, options: opts, answeredIndex: null };
  }
  function renderQuizRun(quizId){
    var mod = moduleById(quizId);
    var title = quizId === "final" ? t("finalExamTitleLabel") : (mod ? mod.title + " " + t("quizSuffix") : t("quizzesTitle"));
    var rawQs = buildQuizQuestions(quizId);
    if(rawQs.length === 0){
      root.innerHTML = '<p>'+esc(t("noQuestionsAvailable"))+'</p>';
      return;
    }
    quizState = {
      quizId: quizId,
      title: title,
      questions: rawQs.map(prepQuestion),
      current: 0,
      score: 0
    };
    renderQuizQuestion();
  }
  function renderQuizQuestion(){
    var st = quizState;
    var total = st.questions.length;
    var q = st.questions[st.current];
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / <a href="#/quiz">'+esc(t("quizzesTitle"))+'</a> / '+esc(st.title)+'</div>';
    html += '<div class="quiz-meta"><h2 style="margin:0;">'+esc(st.title)+'</h2><span class="score-pill">'+esc(tf("questionOf",{a:st.current+1,b:total}))+'</span></div>';
    html += '<div class="progress-bar"><div style="width:'+Math.round((st.current)/total*100)+'%"></div></div>';
    html += '<div class="q-card">';
    html += '<div class="q-num">'+esc(t("questionLabel"))+' '+(st.current+1)+(q.source?' &middot; '+esc(q.source):'')+'</div>';
    html += '<div class="q-text">'+esc(q.q)+'</div>';
    html += '<div id="qh-opts">';
    q.options.forEach(function(o, i){
      var cls = "opt";
      if(q.answeredIndex != null){
        cls += " disabled";
        if(o.isCorrect) cls += " correct";
        else if(i === q.answeredIndex) cls += " incorrect";
      }
      html += '<label class="'+cls+'" data-i="'+i+'"><input type="radio" name="qh-opt" '+(q.answeredIndex!=null?'disabled':'')+' '+(q.answeredIndex===i?'checked':'')+'/><span>'+esc(o.text)+'</span></label>';
    });
    html += '</div>';
    if(q.answeredIndex != null){
      var wasCorrect = q.options[q.answeredIndex].isCorrect;
      html += '<div class="explain '+(wasCorrect?'correct-note':'incorrect-note')+'"><strong>'+esc(wasCorrect?t("correctPrefix"):t("incorrectPrefix"))+'</strong>'+esc(q.explain)+'</div>';
    }
    html += '</div>';
    html += '<div class="quiz-nav">';
    html += '<a class="btn ghost" href="#/quiz">'+esc(t("exitQuiz"))+'</a>';
    if(q.answeredIndex != null){
      html += '<button class="btn" id="qh-next">'+esc(st.current+1 < total ? t("nextQuestion") : t("seeResults"))+'</button>';
    } else {
      html += '<span></span>';
    }
    html += '</div>';
    root.innerHTML = html;

    var opts = document.querySelectorAll('#qh-opts .opt');
    opts.forEach(function(optEl){
      optEl.addEventListener("click", function(){
        if(q.answeredIndex != null) return;
        var i = parseInt(optEl.getAttribute("data-i"), 10);
        q.answeredIndex = i;
        if(q.options[i].isCorrect) st.score++;
        renderQuizQuestion();
      });
    });
    var nextBtn = document.getElementById("qh-next");
    if(nextBtn) nextBtn.addEventListener("click", function(){
      if(st.current + 1 < total){
        st.current++;
        renderQuizQuestion();
      } else {
        renderQuizResults();
      }
    });
  }
  function renderQuizResults(){
    var st = quizState;
    var total = st.questions.length;
    var pct = Math.round((st.score/total)*100);
    var passed = pct/100 >= PASS_THRESHOLD;
    recordScore(st.quizId, pct);
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / <a href="#/quiz">'+esc(t("quizzesTitle"))+'</a> / '+esc(st.title)+' '+esc(t("resultsSuffix"))+'</div>';
    html += '<div class="result-hero">';
    html += '<div style="color:var(--ink-soft);font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">'+esc(st.title)+'</div>';
    html += '<div class="result-score">'+pct+'%</div>';
    html += '<p style="margin:8px 0 0;">'+esc(tf("resultsCorrectLine",{score:st.score,total:total,pct:Math.round(PASS_THRESHOLD*100)}))+'</p>';
    html += '<p class="'+(passed?'result-pass':'result-fail')+'" style="margin-top:6px;">'+esc(passed?t("passed"):t("failed"))+'</p>';
    html += '<div class="cta-row" style="margin-top:20px;gap:12px;">';
    html += '<button class="btn" id="qh-retry">'+esc(t("retakeQuiz"))+'</button>';
    html += '<a class="btn secondary" href="#/quiz">'+esc(t("backToQuizzes"))+'</a>';
    html += '</div></div>';
    html += '<h2>'+esc(t("reviewHeading"))+'</h2>';
    st.questions.forEach(function(q, i){
      var correctOpt = q.options.filter(function(o){return o.isCorrect;})[0];
      var userOpt = q.answeredIndex!=null ? q.options[q.answeredIndex] : null;
      var wasCorrect = userOpt && userOpt.isCorrect;
      html += '<div class="lesson review-item">';
      html += '<div class="q-num">'+esc(t("questionLabel"))+' '+(i+1)+(q.source?' &middot; '+esc(q.source):'')+'</div>';
      html += '<h3 style="font-size:1.02rem;">'+esc(q.q)+'</h3>';
      html += '<p style="margin-bottom:6px;"><strong>'+esc(t("yourAnswer"))+'</strong> <span style="color:'+(wasCorrect?'var(--good)':'var(--bad)')+'">'+(userOpt?esc(userOpt.text):esc(t("skipped")))+'</span></p>';
      if(!wasCorrect) html += '<p style="margin-bottom:6px;"><strong>'+esc(t("correctAnswer"))+'</strong> <span style="color:var(--good);">'+esc(correctOpt.text)+'</span></p>';
      html += '<div class="explain">'+esc(q.explain)+'</div>';
      html += '</div>';
    });
    root.innerHTML = html;
    document.getElementById("qh-retry").addEventListener("click", function(){
      renderQuizRun(st.quizId);
    });
  }

  // ---------- Glossary ----------
  var glossaryState = { query:"", cat:"all" };
  var GLOSSARY_CATS = ["Functional","Non-Functional","Structural","Change-Related","Specialized","General"];
  function renderGlossary(){
    var GLOSSARY = curGlossary();
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / '+esc(t("navGlossary"))+'</div>';
    html += '<h1>'+esc(t("glossaryTitle"))+'</h1>';
    html += '<p style="color:var(--ink-soft);max-width:65ch;">'+esc(tf("glossaryIntro",{n:GLOSSARY.length}))+'</p>';
    html += '<div class="glossary-toolbar">';
    html += '<input class="search-input" id="qh-search" type="text" placeholder="'+esc(t("searchPlaceholder"))+'" value="'+esc(glossaryState.query)+'" />';
    html += '<select class="filter-select" id="qh-filter">';
    ["all"].concat(GLOSSARY_CATS).forEach(function(c){
      html += '<option value="'+c+'" '+(glossaryState.cat===c?'selected':'')+'>'+(c==="all"?esc(t("allCategories")):esc(catLabel(c)))+'</option>';
    });
    html += '</select>';
    html += '</div>';
    html += '<div id="qh-az"></div>';
    html += '<div id="qh-count" class="glossary-count"></div>';
    html += '<div id="qh-gloss-list"></div>';
    root.innerHTML = html;

    document.getElementById("qh-search").addEventListener("input", function(e){
      glossaryState.query = e.target.value;
      renderGlossaryList();
    });
    document.getElementById("qh-filter").addEventListener("change", function(e){
      glossaryState.cat = e.target.value;
      renderGlossaryList();
    });
    renderGlossaryList();
  }
  function highlight(text, query){
    if(!query) return esc(text);
    var idx = text.toLowerCase().indexOf(query.toLowerCase());
    if(idx === -1) return esc(text);
    return esc(text.slice(0,idx)) + "<mark>" + esc(text.slice(idx, idx+query.length)) + "</mark>" + esc(text.slice(idx+query.length));
  }
  function renderGlossaryList(){
    var GLOSSARY = curGlossary();
    var q = glossaryState.query.trim().toLowerCase();
    var cat = glossaryState.cat;
    var filtered = GLOSSARY.filter(function(g){
      if(cat !== "all" && g.cat !== cat) return false;
      if(!q) return true;
      if(g.term.toLowerCase().indexOf(q) !== -1) return true;
      if(g.def.toLowerCase().indexOf(q) !== -1) return true;
      if(g.aliases && g.aliases.some(function(a){ return a.toLowerCase().indexOf(q) !== -1; })) return true;
      return false;
    });
    filtered.sort(function(a,b){ return a.term.localeCompare(b.term, currentLocale); });

    document.getElementById("qh-count").textContent = tf("termsCount", {n: filtered.length});

    // A-Z jump (only when not searching, to keep anchors meaningful) — derived from the actual
    // term set so it works for any alphabet (Cyrillic, accented Latin, etc.), not just A-Z.
    var azWrap = document.getElementById("qh-az");
    var lettersPresent = {};
    filtered.forEach(function(g){ lettersPresent[g.term[0].toLocaleUpperCase(currentLocale)] = true; });
    var letters = Object.keys(lettersPresent).sort(function(a,b){ return a.localeCompare(b, currentLocale); });
    var az = "";
    letters.forEach(function(letter){
      az += '<a href="#gl-'+encodeURIComponent(letter)+'">'+esc(letter)+'</a>';
    });
    azWrap.innerHTML = '<div class="az-jump">'+az+'</div>';
    // Scroll in place instead of changing location.hash, which the router would treat as an unknown route.
    azWrap.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(e){
        e.preventDefault();
        var el = document.getElementById(a.getAttribute("href").slice(1));
        if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
      });
    });

    var listWrap = document.getElementById("qh-gloss-list");
    if(filtered.length === 0){
      listWrap.innerHTML = '<div class="empty-state">'+esc(t("noTermsMatch"))+'</div>';
      return;
    }
    var html = "";
    var lastLetter = null;
    filtered.forEach(function(g){
      var letter = g.term[0].toLocaleUpperCase(currentLocale);
      if(letter !== lastLetter){
        html += '<div class="gloss-section-label" id="gl-'+encodeURIComponent(letter)+'">'+esc(letter)+'</div>';
        lastLetter = letter;
      }
      html += '<div class="gloss-entry">';
      html += '<div class="gloss-term"><strong>'+highlight(g.term, q)+'</strong><span class="cat-tag">'+esc(catLabel(g.cat))+'</span>';
      if(g.aliases && g.aliases.length) html += '<span class="gloss-alias">'+esc(t("alsoLabel"))+' '+g.aliases.map(esc).join(", ")+'</span>';
      html += '</div>';
      html += '<p class="gloss-def">'+highlight(g.def, q)+'</p>';
      html += '</div>';
    });
    listWrap.innerHTML = html;
  }

  // ---------- Mobile menu ----------
  document.getElementById("qh-menu-btn").addEventListener("click", function(){
    document.getElementById("qh-sidebar").classList.toggle("open");
  });

  applyStaticStrings();
  window.addEventListener("hashchange", render);
  render();
})();
