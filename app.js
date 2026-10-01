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
    homeIntro: "A structured path through software testing, from your first manual test case to testing AI systems. It starts with the fundamentals and test design techniques, surveys the full range of testing types, and builds practical skill with ad hoc, exploratory and REST API testing. From there it moves to ISTQB® CTFL v4.0 exam prep, a working toolbox and career reference, test/QA architecture, application security, and hands-on performance, UI/UX and automation testing. Module 12 covers AI testing from both sides: using AI to test, and testing AI-based systems. Every module ends with a quiz, and a mixed Final Exam draws on all of them.",
    pathHeading: "Your learning path",
    pathIntro: "The modules are grouped into five stages. Take them in order if you're new to QA, or jump to the stage you need. Complete each module's quiz before moving on; the Final Exam is the checkpoint at the end.",
    stage1Title: "Stage 1 · Foundations",
    stage1Desc: "The vocabulary, principles and core techniques every other module builds on.",
    stage2Title: "Stage 2 · Hands-on testing",
    stage2Desc: "Unscripted and API testing: finding the bugs scripts miss and testing below the UI.",
    stage3Title: "Stage 3 · Certification & career",
    stage3Desc: "Formalize what you know for the ISTQB® CTFL v4.0 exam, and build your toolbox and career plan.",
    stage4Title: "Stage 4 · Engineering quality at scale",
    stage4Desc: "Architecture, security and hands-on performance, UI/UX and automation work.",
    stage5Title: "Stage 5 · AI testing",
    stage5Desc: "Using AI in testing, and testing AI-based systems.",
    lessonsCount: "{n} lessons",
    quizQsCount: "{n}-question quiz",
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
    alsoLabel: "also:",
    checkAnswer: "Check answer",
    ctaContinue: "Continue: {title}",
    filterByCategory: "Filter by category"
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
  // Own-property check so values like "__proto__" or "constructor" (from the URL or localStorage) never resolve to inherited members.
  function hasOwn(o, k){
    return Object.prototype.hasOwnProperty.call(o, k);
  }
  function hasLocale(code){
    return hasOwn(window.QAHUB_LOCALES, code);
  }

  // ---------- HTML allowlist sanitizer ----------
  // Lesson bodies, callouts and the footer are author-written HTML rendered with innerHTML. They are trusted
  // today, but every render goes through this allowlist so a bad edit or translation contribution cannot
  // introduce script, handlers, styles, frames or unsafe links. Anything not listed is dropped.
  var SAFE_TAGS = { A:1, BR:1, CODE:1, DIV:1, EM:1, LI:1, OL:1, P:1, PRE:1, SPAN:1, STRONG:1, SUB:1, SUP:1, TABLE:1, TBODY:1, TD:1, TH:1, THEAD:1, TR:1, UL:1 };
  var SAFE_CLASSES = { "chip-list":1, "k-badge":1, "table-wrap":1, "worked-example":1 };
  function sanitizeHTML(html){
    var tpl = document.createElement("template");   // inert: nothing loads or runs while parsing
    tpl.innerHTML = html;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(ch){
        if(ch.nodeType === 3) return;                                   // text
        if(ch.nodeType !== 1 || !hasOwn(SAFE_TAGS, ch.tagName)){ node.removeChild(ch); return; }
        Array.prototype.slice.call(ch.attributes).forEach(function(a){
          var name = a.name.toLowerCase();
          if(name === "class"){
            var kept = a.value.split(/\s+/).filter(function(c){ return hasOwn(SAFE_CLASSES, c); }).join(" ");
            if(kept) ch.setAttribute("class", kept); else ch.removeAttribute("class");
          } else if(!(name === "href" && ch.tagName === "A")){
            ch.removeAttribute(a.name);
          }
        });
        if(ch.tagName === "A"){
          var href = ch.getAttribute("href") || "";
          if(/^https:\/\//i.test(href)){
            ch.setAttribute("target", "_blank");
            ch.setAttribute("rel", "noopener noreferrer");
          } else if(!/^#\/?[\w\/-]*$/.test(href)){
            ch.removeAttribute("href");                                 // javascript:, data:, http:, etc.
          }
        }
        walk(ch);
      });
    })(tpl.content);
    return tpl.innerHTML;
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
    var navEl = document.getElementById("qh-sidebar-inner");
    if(navEl) navEl.setAttribute("aria-label", t("navTutorials"));
    var footer = document.getElementById("qh-footer");
    if(footer) footer.innerHTML = sanitizeHTML(t("footerText"));
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
  var FINAL_EXAM_SIZE = 20;

  // ---------- Progress persistence (per-viewer convenience only) ----------
  var STORAGE_KEY = "qahub_progress_v1";
  var VALID_STATUSES = { "not-started":1, "in-progress":1, "completed":1 };
  function isObj(o){ return !!o && typeof o === "object" && !Array.isArray(o); }
  // localStorage is attacker-writable (another script on the origin, a shared browser, DevTools), so stored
  // progress is never trusted: it is rebuilt from known module/quiz ids with validated values only.
  function sanitizeProgress(p){
    var clean = { modules:{}, quizzes:{} };
    if(!isObj(p)) return clean;
    var mods = window.QAHUB_MODULES || [];
    mods.forEach(function(m){
      var rec = isObj(p.modules) && hasOwn(p.modules, m.id) ? p.modules[m.id] : null;
      if(isObj(rec) && typeof rec.status === "string" && hasOwn(VALID_STATUSES, rec.status)) clean.modules[m.id] = { status: rec.status };
    });
    ["final"].concat(mods.map(function(m){ return m.id; })).forEach(function(k){
      var rec = isObj(p.quizzes) && hasOwn(p.quizzes, k) ? p.quizzes[k] : null;
      if(isObj(rec) && typeof rec.best === "number" && isFinite(rec.best) && rec.best >= 0 && rec.best <= 100) clean.quizzes[k] = { best: Math.round(rec.best) };
    });
    return clean;
  }
  function loadProgress(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      return sanitizeProgress(raw ? JSON.parse(raw) : null);
    }catch(e){ return { modules:{}, quizzes:{} }; }
  }
  function saveProgress(p){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
  }
  var progress = loadProgress();
  function moduleStatus(id){
    var s = progress.modules[id] && progress.modules[id].status;
    return s && hasOwn(VALID_STATUSES, s) ? s : "not-started";
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
  var APP_NAME = "QA Learning Hub";
  function setTitle(part){
    document.title = part ? part + " · " + APP_NAME : APP_NAME;
  }
  function scrollBehavior(){
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }
  function bindAnchorScroll(selector){
    root.querySelectorAll(selector).forEach(function(a){
      a.addEventListener("click", function(e){
        e.preventDefault();
        var target = document.getElementById(a.getAttribute("href").slice(1));
        if(target) target.scrollIntoView({behavior:scrollBehavior(), block:"start"});
      });
    });
  }
  // Best-score badge: green only when the pass threshold was met, otherwise a neutral "attempted".
  function quizBadge(score){
    if(score == null) return '<span class="badge not-started">'+esc(t("notAttempted"))+'</span>';
    if(score/100 >= PASS_THRESHOLD) return '<span class="badge completed">'+esc(t("passed"))+'</span>';
    return '<span class="badge in-progress">'+esc(t("attempted"))+'</span>';
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
    // Order: the frequent destinations first (dashboard, practice), then the 12 modules, then the rarely used language picker.
    html += '<div class="nav-group">';
    html += navLink("#/home", t("navDashboard"), activeRoute==="home", null);
    html += navLink("#/quiz", t("navQuizzes"), activeRoute==="quiz-picker", null);
    html += navLink("#/glossary", t("navGlossary"), activeRoute==="glossary", null);
    html += '</div>';
    html += '<div class="nav-group"><div class="nav-label">'+esc(t("navTutorials"))+'</div>';
    MODULES.forEach(function(m){
      var status = moduleStatus(m.id);
      var dotClass = status === "completed" ? "done" : (status === "in-progress" ? "progress" : "");
      var statusText = status === "completed" ? t("badgeCompleted") : (status === "in-progress" ? t("badgeInProgress") : "");
      var isActive = activeRoute === "module:" + m.id;
      html += '<a class="nav-link'+(isActive?' active':'')+'" href="#/module/'+esc(m.id)+'"'+(isActive?' aria-current="page"':'')+'><span class="num">'+esc(m.num)+'</span><span>'+esc(m.title)+'</span><span class="status-dot '+dotClass+'" aria-hidden="true"></span>'+(statusText?'<span class="sr-only">'+esc(statusText)+'</span>':'')+'</a>';
    });
    html += '</div>';
    html += '<div class="nav-group lang-switcher"><select id="qh-lang-select" class="filter-select" aria-label="'+esc(t("langLabel"))+'">';
    availableLocales().forEach(function(l){
      html += '<option value="'+l.code+'" '+(l.code===currentLocale?'selected':'')+'>'+esc(l.label)+'</option>';
    });
    html += '</select></div>';
    wrap.innerHTML = html;
    var langSelect = document.getElementById("qh-lang-select");
    if(langSelect) langSelect.addEventListener("change", function(e){ setLocale(e.target.value); });
  }
  function navLink(href, label, active, num){
    return '<a class="nav-link'+(active?' active':'')+'" href="'+href+'"'+(active?' aria-current="page"':'')+'>'+(num!=null?'<span class="num">'+num+'</span>':'')+'<span>'+esc(label)+'</span></a>';
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
    document.getElementById("qh-menu-btn").setAttribute("aria-expanded", "false");
    window.scrollTo(0,0);
    if(route.name === "home") renderHome();
    else if(route.name === "module") renderModule(route.id);
    else if(route.name === "quiz-picker") renderQuizPicker();
    else if(route.name === "quiz-run") renderQuizRun(route.id);
    else if(route.name === "glossary") renderGlossary();
    else renderHome();
    // Keyboard and screen-reader users land on the new page's heading (skipped on first load).
    if(rendered && route.name !== "quiz-run") focusHeading();
    rendered = true;
  }
  var rendered = false;
  function focusHeading(){
    var h = root.querySelector("h1, h2");
    if(h){ h.setAttribute("tabindex", "-1"); h.focus({preventScroll:true}); }
  }
  // Scrollable tables become keyboard-reachable regions; header cells get a scope for screen readers.
  function enhanceContent(){
    root.querySelectorAll(".table-wrap").forEach(function(w){
      var lesson = w.closest(".lesson");
      var heading = lesson && lesson.querySelector("h2, h3");
      w.setAttribute("tabindex", "0");
      w.setAttribute("role", "region");
      if(heading) w.setAttribute("aria-label", heading.textContent);
    });
    root.querySelectorAll("th:not([scope])").forEach(function(th){ th.setAttribute("scope", "col"); });
  }

  // ---------- Home / Dashboard ----------
  function renderHome(){
    var MODULES = curModules();
    var GLOSSARY = curGlossary();
    var completed = MODULES.filter(function(m){ return moduleStatus(m.id)==="completed"; }).length;
    var inProgress = MODULES.filter(function(m){ return moduleStatus(m.id)==="in-progress"; }).length;
    var quizzesTaken = Object.keys(progress.quizzes).length;
    var html = '';
    setTitle("");
    html += '<div class="hero-eyebrow">'+esc(t("heroEyebrow"))+'</div>';
    html += '<h1>'+esc(t("homeTitle"))+'</h1>';
    html += '<p class="lede">'+esc(t("homeIntro"))+'</p>';
    // Resume point: the first module (in course order) that isn't completed yet.
    var resume = MODULES.filter(function(m){ return moduleStatus(m.id) !== "completed"; })[0];
    if(resume && (completed > 0 || inProgress > 0)){
      html += '<div class="continue-row"><a class="btn" href="#/module/'+esc(resume.id)+'">'+esc(tf("ctaContinue",{title:resume.title}))+' &rarr;</a></div>';
    }
    html += '<div class="stat-row">';
    html += statTile(completed+" / "+MODULES.length, t("statModulesCompleted"));
    html += statTile(inProgress, t("statModulesInProgress"));
    html += statTile(quizzesTaken, t("statQuizzesAttempted"));
    html += statTile(GLOSSARY.length, t("statGlossaryTerms"));
    html += '</div>';
    html += '<h2 class="h2-section">'+esc(t("tutorialModulesHeading"))+'</h2>';
    html += '<div class="dashboard-grid">';
    MODULES.forEach(function(m){
      var status = moduleStatus(m.id);
      var badgeClass = status.replace("_","-");
      var badgeLabel = status === "not-started" ? t("badgeNotStarted") : (status === "in-progress" ? t("badgeInProgress") : t("badgeCompleted"));
      var qScore = bestScore(m.id);
      html += '<a class="card" href="#/module/'+esc(m.id)+'">';
      html += '<span class="card-num">'+esc(t("moduleWord"))+' '+pad2(m.num)+'</span>';
      html += '<h3>'+esc(m.title)+'</h3>';
      html += '<p>'+esc(m.summary)+'</p>';
      html += '<div class="card-foot"><span class="badge '+badgeClass+'">'+esc(badgeLabel)+'</span>'+(qScore!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:qScore}))+'</span>':'')+'</div>';
      html += '</a>';
    });
    html += '</div>';
    html += renderLearningPath(MODULES);
    html += '<div class="cta-row wide">';
    html += '<a class="btn" href="#/quiz/final">'+esc(t("ctaFinalExam"))+'</a>';
    html += '<a class="btn secondary" href="#/glossary">'+esc(t("ctaBrowseGlossary"))+'</a>';
    html += '</div>';
    root.innerHTML = html;
  }
  var PATH_STAGES = [[1,2,3],[4,5,6],[7,8],[9,10,11],[12]];
  function renderLearningPath(MODULES){
    var QUIZZES = curQuizzes();
    var html = '<h2 class="h2-section">'+esc(t("pathHeading"))+'</h2>';
    html += '<p class="lede">'+esc(t("pathIntro"))+'</p>';
    PATH_STAGES.forEach(function(nums, i){
      html += '<section class="path-stage"><h3>'+esc(t("stage"+(i+1)+"Title"))+'</h3>';
      html += '<p class="path-stage-desc">'+esc(t("stage"+(i+1)+"Desc"))+'</p>';
      nums.forEach(function(num){
        var m = MODULES.filter(function(x){ return x.num === num; })[0];
        if(!m) return;
        var qs = (QUIZZES[m.id] || []).length;
        html += '<div class="path-module"><a href="#/module/'+esc(m.id)+'"><strong>'+esc(t("crumbModule"))+' '+esc(m.num)+' — '+esc(m.title)+'</strong></a>';
        html += '<p>'+esc(m.overview || m.summary)+'</p>';
        html += '<div class="path-meta">'+esc(tf("lessonsCount",{n:m.lessons.length}))+(qs?' · <a href="#/quiz/'+esc(m.id)+'">'+esc(tf("quizQsCount",{n:qs}))+'</a>':'')+'</div></div>';
      });
      html += '</section>';
    });
    return html;
  }
  function statTile(num, label){
    return '<div class="stat-tile"><div class="stat-num">'+esc(num)+'</div><div class="stat-label">'+esc(label)+'</div></div>';
  }

  // ---------- Module page ----------
  function renderModule(id){
    var m = moduleById(id);
    if(!m){ renderSidebar("home"); renderHome(); return; }
    touchModule(id);
    renderSidebar("module:"+id);
    var MODULES = curModules();
    var idx = MODULES.indexOf(m);
    var prev = MODULES[idx-1], next = MODULES[idx+1];
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / '+esc(t("crumbModule"))+' '+m.num+'</div>';
    setTitle(m.title);
    html += '<h1>'+esc(m.title)+'</h1>';
    if(m.overview){
      html += '<p class="lede">'+esc(m.overview)+'</p>';
    }
    html += '<div class="callout"><div class="eyebrow">'+esc(t("calloutTakeaway"))+'</div><p>'+esc(m.takeaway)+'</p></div>';
    if(m.callout){
      html += '<div class="callout reading"><div class="eyebrow">'+esc(m.callout.label)+'</div><p>'+sanitizeHTML(m.callout.body)+'</p></div>';
    }
    html += '<div class="lesson-nav">';
    m.lessons.forEach(function(l, i){
      html += '<a class="lesson-pill" href="#lesson-'+i+'">'+esc(l.h)+'</a>';
    });
    html += '</div>';
    m.lessons.forEach(function(l, i){
      html += '<section class="lesson" id="lesson-'+i+'"><h2>'+esc(l.h)+'</h2>'+sanitizeHTML(l.body)+'</section>';
    });
    var status = moduleStatus(id);
    html += '<div class="cta-row stack">';
    if(status !== "completed"){
      html += '<button class="btn secondary" id="qh-mark-complete">'+esc(t("markComplete"))+'</button>';
    } else {
      html += '<span class="badge completed">'+esc(t("badgeCompleted"))+'</span>';
    }
    html += '<a class="btn" href="#/quiz/'+m.id+'">'+esc(tf("takeModuleQuiz",{num:m.num}))+'</a>';
    html += '</div>';
    html += '<div class="cta-row split">';
    html += prev ? '<a class="btn ghost" href="#/module/'+esc(prev.id)+'">&larr; '+esc(prev.title)+'</a>' : '<span></span>';
    html += next ? '<a class="btn ghost" href="#/module/'+esc(next.id)+'">'+esc(next.title)+' &rarr;</a>' : '<a class="btn ghost" href="#/quiz">'+esc(t("allQuizzes"))+'</a>';
    html += '</div>';
    root.innerHTML = html;
    enhanceContent();
    bindAnchorScroll(".lesson-pill");
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
    setTitle(t("quizzesTitle"));
    html += '<h1>'+esc(t("quizzesTitle"))+'</h1>';
    html += '<p class="lede">'+esc(t("quizzesIntro"))+'</p>';
    html += '<div class="quiz-picker-grid">';
    html += '<a class="card final-card" href="#/quiz/final">';
    html += '<span class="card-num">'+esc(t("finalExamCardNum"))+'</span><h3>'+esc(t("finalExamTitle"))+'</h3><p>'+esc(tf("finalExamDesc",{n:FINAL_EXAM_SIZE,m:MODULES.length}))+'</p>';
    var fb = bestScore("final");
    html += '<div class="card-foot">'+quizBadge(fb)+(fb!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:fb}))+'</span>':'')+'</div>';
    html += '</a>';
    MODULES.forEach(function(m){
      var qs = QUIZZES[m.id] || [];
      var sc = bestScore(m.id);
      html += '<a class="card" href="#/quiz/'+esc(m.id)+'">';
      html += '<span class="card-num">'+esc(tf("moduleQuizCardNum",{num:pad2(m.num)}))+'</span><h3>'+esc(m.title)+'</h3><p>'+esc(tf("quizQuestionsCount",{n:qs.length}))+'</p>';
      html += '<div class="card-foot">'+quizBadge(sc)+(sc!=null?'<span class="score-pill">'+esc(tf("bestScoreLabel",{pct:sc}))+'</span>':'')+'</div>';
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
      return pool.slice(0, Math.min(FINAL_EXAM_SIZE, pool.length));
    }
    var qs = hasOwn(QUIZZES, quizId) && Array.isArray(QUIZZES[quizId]) ? QUIZZES[quizId] : [];
    return shuffle(qs);
  }
  function prepQuestion(q){
    var opts = q.options.map(function(text, i){ return { text: text, isCorrect: i === q.correct }; });
    opts = shuffle(opts);
    return { q: q.q, explain: q.explain, source: q.source, options: opts, selectedIndex: null, answeredIndex: null };
  }
  function renderQuizRun(quizId){
    // Only "final" and real module ids are quizzes; anything else in the URL falls back to the picker.
    if(quizId !== "final" && !moduleById(quizId)){ renderQuizPicker(); return; }
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
    renderQuizQuestion("question");
  }
  // focusTarget: "question" moves focus to the question text (new question), "next" to the Next button (after checking).
  function renderQuizQuestion(focusTarget){
    var st = quizState;
    var total = st.questions.length;
    var q = st.questions[st.current];
    var answered = q.answeredIndex != null;
    var html = '';
    setTitle(st.title);
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / <a href="#/quiz">'+esc(t("quizzesTitle"))+'</a> / '+esc(st.title)+'</div>';
    html += '<div class="quiz-meta"><h2>'+esc(st.title)+'</h2><span class="score-pill">'+esc(tf("questionOf",{a:st.current+1,b:total}))+'</span></div>';
    html += '<div class="progress-bar" role="progressbar" aria-label="'+esc(tf("questionOf",{a:st.current+1,b:total}))+'" aria-valuemin="0" aria-valuemax="'+total+'" aria-valuenow="'+st.current+'"><div id="qh-pbar"></div></div>';
    html += '<div class="q-card">';
    html += '<div class="q-num">'+esc(t("questionLabel"))+' '+(st.current+1)+(q.source?' &middot; '+esc(q.source):'')+'</div>';
    html += '<div class="q-text" id="qh-qtext" tabindex="-1">'+esc(q.q)+'</div>';
    html += '<div id="qh-opts" role="radiogroup" aria-labelledby="qh-qtext">';
    q.options.forEach(function(o, i){
      var cls = "opt";
      var srNote = "";
      if(answered){
        cls += " disabled";
        if(o.isCorrect){ cls += " correct"; srNote = t("correctAnswer"); }
        else if(i === q.answeredIndex){ cls += " incorrect"; srNote = t("yourAnswer"); }
      } else if(q.selectedIndex === i){
        cls += " selected";
      }
      var checked = answered ? q.answeredIndex === i : q.selectedIndex === i;
      html += '<label class="'+cls+'" data-i="'+i+'"><input type="radio" name="qh-opt" value="'+i+'"'+(answered?' disabled':'')+(checked?' checked':'')+'/>'+(srNote?'<span class="sr-only">'+esc(srNote)+' </span>':'')+'<span>'+esc(o.text)+'</span></label>';
    });
    html += '</div>';
    if(answered){
      var wasCorrect = q.options[q.answeredIndex].isCorrect;
      html += '<div class="explain '+(wasCorrect?'correct-note':'incorrect-note')+'" id="qh-explain"><strong>'+esc(wasCorrect?t("correctPrefix"):t("incorrectPrefix"))+'</strong>'+esc(q.explain)+'</div>';
    }
    html += '</div>';
    html += '<div class="quiz-nav">';
    html += '<a class="btn ghost" href="#/quiz">'+esc(t("exitQuiz"))+'</a>';
    if(answered){
      html += '<button class="btn" id="qh-next" type="button" aria-describedby="qh-explain">'+esc(st.current+1 < total ? t("nextQuestion") : t("seeResults"))+'</button>';
    } else {
      html += '<button class="btn" id="qh-check" type="button"'+(q.selectedIndex==null?' disabled':'')+'>'+esc(t("checkAnswer"))+'</button>';
    }
    html += '</div>';
    root.innerHTML = html;
    // Width is set through the CSSOM (not a style attribute) so the CSP can forbid inline styles.
    document.getElementById("qh-pbar").style.width = Math.round((st.current)/total*100) + "%";

    // Selecting only marks a choice (in place, so keyboard focus and arrow-key navigation survive);
    // the answer is committed by "Check answer", so a stray click or arrow key can't lock in a mistake.
    var checkBtn = document.getElementById("qh-check");
    if(!answered){
      root.querySelectorAll('#qh-opts input').forEach(function(input){
        input.addEventListener("change", function(){
          q.selectedIndex = parseInt(input.value, 10);
          root.querySelectorAll('#qh-opts .opt').forEach(function(l){
            l.classList.toggle("selected", parseInt(l.getAttribute("data-i"), 10) === q.selectedIndex);
          });
          if(checkBtn) checkBtn.disabled = false;
        });
      });
      if(checkBtn) checkBtn.addEventListener("click", function(){
        if(q.selectedIndex == null) return;
        q.answeredIndex = q.selectedIndex;
        if(q.options[q.answeredIndex].isCorrect) st.score++;
        renderQuizQuestion("next");
      });
    }
    var nextBtn = document.getElementById("qh-next");
    if(nextBtn) nextBtn.addEventListener("click", function(){
      if(st.current + 1 < total){
        st.current++;
        window.scrollTo(0,0);
        renderQuizQuestion("question");
      } else {
        renderQuizResults();
      }
    });
    var focusEl = focusTarget === "next" ? nextBtn : (focusTarget === "question" ? document.getElementById("qh-qtext") : null);
    if(focusEl) focusEl.focus({preventScroll:true});
  }
  function renderQuizResults(){
    var st = quizState;
    var total = st.questions.length;
    var pct = Math.round((st.score/total)*100);
    var passed = pct/100 >= PASS_THRESHOLD;
    recordScore(st.quizId, pct);
    var html = '';
    html += '<div class="crumb"><a href="#/home">'+esc(t("navDashboard"))+'</a> / <a href="#/quiz">'+esc(t("quizzesTitle"))+'</a> / '+esc(st.title)+' '+esc(t("resultsSuffix"))+'</div>';
    setTitle(st.title + " " + t("resultsSuffix"));
    html += '<h1 class="sr-only" id="qh-result-h">'+esc(st.title)+' '+esc(t("resultsSuffix"))+'</h1>';
    html += '<div class="result-hero">';
    html += '<div class="result-kicker">'+esc(st.title)+'</div>';
    html += '<div class="result-score">'+pct+'%</div>';
    html += '<p class="result-line">'+esc(tf("resultsCorrectLine",{score:st.score,total:total,pct:Math.round(PASS_THRESHOLD*100)}))+'</p>';
    html += '<p class="result-verdict '+(passed?'result-pass':'result-fail')+'">'+esc(passed?t("passed"):t("failed"))+'</p>';
    html += '<div class="cta-row tight">';
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
      html += '<h3>'+esc(q.q)+'</h3>';
      html += '<p><strong>'+esc(t("yourAnswer"))+'</strong> <span class="'+(wasCorrect?'ans-good':'ans-bad')+'">'+(userOpt?esc(userOpt.text):esc(t("skipped")))+'</span></p>';
      if(!wasCorrect) html += '<p><strong>'+esc(t("correctAnswer"))+'</strong> <span class="ans-good">'+esc(correctOpt.text)+'</span></p>';
      html += '<div class="explain">'+esc(q.explain)+'</div>';
      html += '</div>';
    });
    root.innerHTML = html;
    var resultH = document.getElementById("qh-result-h");
    if(resultH){ resultH.setAttribute("tabindex", "-1"); resultH.focus({preventScroll:true}); }
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
    setTitle(t("glossaryTitle"));
    html += '<h1>'+esc(t("glossaryTitle"))+'</h1>';
    html += '<p class="lede">'+esc(tf("glossaryIntro",{n:GLOSSARY.length}))+'</p>';
    html += '<div class="glossary-toolbar" role="search">';
    html += '<input class="search-input" id="qh-search" type="search" aria-label="'+esc(t("searchPlaceholder").replace(/…$/, ""))+'" placeholder="'+esc(t("searchPlaceholder"))+'" value="'+esc(glossaryState.query)+'" />';
    html += '<select class="filter-select" id="qh-filter" aria-label="'+esc(t("filterByCategory"))+'">';
    ["all"].concat(GLOSSARY_CATS).forEach(function(c){
      html += '<option value="'+c+'" '+(glossaryState.cat===c?'selected':'')+'>'+(c==="all"?esc(t("allCategories")):esc(catLabel(c)))+'</option>';
    });
    html += '</select>';
    html += '</div>';
    html += '<div id="qh-az"></div>';
    html += '<div id="qh-count" class="glossary-count" role="status" aria-live="polite"></div>';
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
        var target = document.getElementById(a.getAttribute("href").slice(1));
        if(target) target.scrollIntoView({behavior:scrollBehavior(), block:"start"});
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
  document.getElementById("qh-menu-btn").addEventListener("click", function(e){
    var open = document.getElementById("qh-sidebar").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open ? "true" : "false");
  });

  applyStaticStrings();
  window.addEventListener("hashchange", render);
  render();
})();
