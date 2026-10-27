(function(){
  "use strict";

  // ---------- i18n ----------
  var EN_UI = {
    brandTagline: "Software Testing Course",
    menuButton: "Menu",
    footerText: "QA Learning Hub · manual testing, test design, ad hoc &amp; exploratory testing, REST API testing, ISTQB® CTFL v4.0 exam prep, a working QA toolbox &amp; career reference, test/QA architecture, application security testing, hands-on performance, UI/UX &amp; automation testing, and evidence-based verification &amp; reporting.",
    navDashboard: "Dashboard",
    navTutorials: "Tutorials",
    navPractice: "Practice",
    navQuizzes: "Quizzes",
    navGlossary: "Glossary",
    langLabel: "Language",
    heroEyebrow: "Software Testing Course",
    homeTitle: "QA Learning Hub",
    homeIntro: "A structured path through software testing, from your first manual test case to testing AI systems. It starts with the fundamentals and test design techniques, surveys the full range of testing types, and builds practical skill with ad hoc, exploratory and REST API testing. From there it moves to ISTQB® CTFL v4.0 exam prep, a working toolbox and career reference, test/QA architecture, application security, and hands-on performance, UI/UX and automation testing. Module 12 covers AI testing from both sides: using AI to test, and testing AI-based systems. Module 13 closes the course with verification and reporting: evidence rules, rating findings, writing defect records and choosing a verdict, supported by the interactive QA Toolkit. Every module ends with a quiz, and a mixed Final Exam draws on all of them.",
    pathHeading: "Your learning path",
    pathIntro: "The modules are grouped into six stages. Take them in order if you're new to QA, or jump to the stage you need. Complete each module's quiz before moving on; the Final Exam is the checkpoint at the end.",
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
    filterByCategory: "Filter by category",
    navToolkit: "Toolkit",
    ctaToolkit: "Open the QA Toolkit",
    quizListHeading: "Choose a quiz",
    markIncomplete: "Mark module as not complete",
    resetProgress: "Reset all progress",
    resetConfirm: "Click again to confirm: this clears module status and quiz scores in this browser",
    resetDone: "Progress cleared.",
    stage6Title: "Stage 6 · Verification & reporting",
    stage6Desc: "Turn test results into evidence others can act on: findings, verdicts, code reviews and host checks.",
    toolkitTitle: "QA Toolkit",
    toolkitIntro: "Interactive helpers and reference lists that go with Module 13. Everything runs in your browser; nothing you type here is saved or sent anywhere. Severity levels, finding labels and verdict names (Critical, Confirmed, PASS WITH FINDINGS…) are standard terms and stay in English.",
    sevHeading: "Severity calculator",
    sevIntro: "Severity is impact × likelihood, each scored 1 to 5. Raise likelihood for internet exposure; lower it for localhost-only exposure or a verified compensating control, and say which adjustment you applied. Confidence is reported separately and never changes the score.",
    sevImpact: "Impact",
    sevLikelihood: "Likelihood",
    sevConfidence: "Confidence",
    impact1: "1 · Cosmetic",
    impact2: "2 · Minor loss, easy workaround",
    impact3: "3 · Degrades a task, workaround exists",
    impact4: "4 · Major function fails, workaround is hard",
    impact5: "5 · Data loss, security breach or blocked journey",
    like1: "1 · Rare",
    like2: "2 · Unlikely",
    like3: "3 · Some users, some of the time",
    like4: "4 · Likely",
    like5: "5 · Every user, every time",
    confHigh: "High · observed directly",
    confMedium: "Medium · strong indicators, benign explanation not excluded",
    confLow: "Low · weak indicator, needs verification",
    sevConfLine: "Confidence: {conf}. Reported separately; it does not change the score.",
    sevBands: "Bands: Critical 20–25 · High 12–19 · Medium 6–11 · Low 2–5 · Info 0–1",
    statHeading: "Final status helper",
    statIntro: "The rules are checked in order and the first match decides the status. Tick everything that is true for your verification.",
    statLegend: "Which of these are true?",
    statQ1: "A Confirmed Critical or High finding exists, or a core user journey is Confirmed broken",
    statQ2: "The target was unreachable, or too little could be verified to support any conclusion",
    statQ3: "Part of the requested scope is Blocked or Not Tested, or a Suspected Critical or High finding is unresolved",
    statQ4: "Medium, Low or Informational findings remain open",
    statResult: "Final status",
    statRule: "Rule {n} of 5",
    statNote1: "State any untested scope alongside the status.",
    statNote2: "Say what was unreachable and what access or evidence is needed.",
    statNote3: "List exactly what is Blocked, Not Tested or still Suspected.",
    statNote4: "List every open finding. The whole requested scope was verified.",
    statNote5: "PASS needs the whole requested scope verified, not merely the absence of defects.",
    recHeading: "Defect record builder",
    recIntro: "Fill in what you know and the Markdown updates as you type. Use real evidence only, with secrets masked: give the location, never the value.",
    recId: "ID",
    recTitle: "Title",
    recStatus: "Status",
    recSeverity: "Severity",
    recImpact: "Impact in one line",
    recPriority: "Priority",
    recEnv: "Environment",
    recPre: "Preconditions",
    recSteps: "Steps (one per line)",
    recExpected: "Expected",
    recActual: "Actual",
    recEvidence: "Evidence",
    recRoot: "Root cause",
    recRegression: "Regression test",
    recRepro: "Reproducible",
    prio1: "P1 · fix before release",
    prio2: "P2 · fix in the current cycle",
    prio3: "P3 · schedule",
    prio4: "P4 · backlog",
    recPreview: "Markdown preview",
    recCopy: "Copy Markdown",
    recDownload: "Download .md",
    recCopied: "Copied to the clipboard.",
    recCopyFail: "Copying is not available here. Select the text in the preview and copy it by hand.",
    refHeading: "Reference library",
    refNote: "The reference lists are in English: tool names, commands and rule names are the same in every language.",
    refPitfalls: "Language-specific pitfalls",
    refPickLanguage: "Language or stack",
    refCommands: "Quick read-only commands",
    refPickOs: "Operating system",
    refCopyCommands: "Copy commands",
    refChecklist: "Host security checklist",
    refLookFor: "Look for:"
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
    // Order: the frequent destinations first (dashboard, practice, toolkit), then the modules, then the rarely used language picker.
    html += '<div class="nav-group">';
    html += navLink("#/home", t("navDashboard"), activeRoute==="home", null);
    html += navLink("#/quiz", t("navQuizzes"), activeRoute==="quiz-picker", null);
    html += navLink("#/glossary", t("navGlossary"), activeRoute==="glossary", null);
    html += navLink("#/toolkit", t("navToolkit"), activeRoute==="toolkit", null);
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
    if(parts[0] === "toolkit") return { name:"toolkit" };
    return { name:"home" };
  }

  function render(){
    var route = parseRoute();
    var activeKey = route.name === "module" ? "module:"+route.id :
      (route.name === "quiz-picker" || route.name === "quiz-run" ? "quiz-picker" :
      (route.name === "glossary" ? "glossary" :
      (route.name === "toolkit" ? "toolkit" : "home")));
    renderSidebar(activeKey);
    document.getElementById("qh-sidebar").classList.remove("open");
    document.getElementById("qh-menu-btn").setAttribute("aria-expanded", "false");
    window.scrollTo(0,0);
    if(route.name === "home") renderHome();
    else if(route.name === "module") renderModule(route.id);
    else if(route.name === "quiz-picker") renderQuizPicker();
    else if(route.name === "quiz-run") renderQuizRun(route.id);
    else if(route.name === "glossary") renderGlossary();
    else if(route.name === "toolkit") renderToolkit();
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
    html += '<a class="btn secondary" href="#/toolkit">'+esc(t("ctaToolkit"))+'</a>';
    html += '</div>';
    // Progress lives only in this browser, so the learner needs a way to clear it (two-step: no blocking dialog).
    var hasProgress = completed > 0 || inProgress > 0 || quizzesTaken > 0;
    if(hasProgress){
      html += '<div class="cta-row tight"><button class="btn ghost" id="qh-reset" type="button">'+esc(t("resetProgress"))+'</button></div>';
    }
    html += '<p class="reset-note" id="qh-reset-note" role="status" aria-live="polite"></p>';
    root.innerHTML = html;
    var resetBtn = document.getElementById("qh-reset");
    if(resetBtn){
      var armed = false;
      resetBtn.addEventListener("click", function(){
        if(!armed){
          armed = true;
          resetBtn.textContent = t("resetConfirm");
          return;
        }
        progress = { modules:{}, quizzes:{} };
        saveProgress(progress);
        renderSidebar("home");
        renderHome();
        focusHeading();
        // Set after the render so the (new) live region announces the message.
        setTimeout(function(){
          var n = document.getElementById("qh-reset-note");
          if(n) n.textContent = t("resetDone");
        }, 60);
      });
      resetBtn.addEventListener("blur", function(){
        if(armed){ armed = false; resetBtn.textContent = t("resetProgress"); }
      });
    }
  }
  var PATH_STAGES = [[1,2,3],[4,5,6],[7,8],[9,10,11],[12],[13]];
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
      html += '<button class="btn secondary" id="qh-mark-complete" type="button">'+esc(t("markComplete"))+'</button>';
    } else {
      html += '<span class="badge completed">'+esc(t("badgeCompleted"))+'</span>';
      html += '<button class="btn ghost" id="qh-mark-incomplete" type="button">'+esc(t("markIncomplete"))+'</button>';
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
    // Completion is a toggle, and focus follows the control that replaces the one just used.
    var btn = document.getElementById("qh-mark-complete");
    if(btn) btn.addEventListener("click", function(){
      setModuleStatus(id, "completed");
      renderModule(id);
      var undo = document.getElementById("qh-mark-incomplete");
      if(undo) undo.focus({preventScroll:true});
    });
    var undoBtn = document.getElementById("qh-mark-incomplete");
    if(undoBtn) undoBtn.addEventListener("click", function(){
      setModuleStatus(id, "in-progress");
      renderModule(id);
      var again = document.getElementById("qh-mark-complete");
      if(again) again.focus({preventScroll:true});
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
    html += '<h2 class="sr-only">'+esc(t("quizListHeading"))+'</h2>';   // keeps the heading order h1 > h2 > h3 for the cards
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
      // Stratified draw: one random question from every module first, so the exam always covers the whole course
      // (a plain shuffle of the pooled bank left a module out of most exams, and the small modules almost never appeared).
      // The remaining slots are filled at random from what is left.
      var firsts = [], rest = [];
      MODULES.forEach(function(m){
        var bank = shuffle((QUIZZES[m.id]||[]).map(function(q){ return Object.assign({}, q, { source: m.title }); }));
        if(bank.length) firsts.push(bank.shift());
        rest = rest.concat(bank);
      });
      firsts = shuffle(firsts).slice(0, FINAL_EXAM_SIZE);
      var extra = shuffle(rest).slice(0, Math.max(0, FINAL_EXAM_SIZE - firsts.length));
      return shuffle(firsts.concat(extra));
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

  // ---------- Toolkit ----------
  // Interactive helpers (severity, final status, defect record) plus English reference lists from data/toolkit.js.
  // Everything the learner types is read with .value and written back with textContent or esc(); none of it reaches innerHTML raw.
  var SEV_BANDS = [["Critical", 20], ["High", 12], ["Medium", 6], ["Low", 2], ["Info", 0]];
  function severityBand(score){
    for(var i = 0; i < SEV_BANDS.length; i++) if(score >= SEV_BANDS[i][1]) return SEV_BANDS[i][0];
    return "Info";
  }
  // Decision rules, evaluated in order; the first true condition decides. The last entry is the fall-through.
  var FINAL_STATUSES = ["FAIL", "NOT ENOUGH EVIDENCE", "PARTIALLY VERIFIED", "PASS WITH FINDINGS", "PASS"];
  var STATUS_PILL = ["critical", "info", "high", "low", "good"];
  function finalStatusIndex(flags){
    for(var i = 0; i < flags.length; i++) if(flags[i]) return i;
    return flags.length;
  }
  // Text with `code` spans -> escaped HTML. Only the backtick spans become <code>.
  function codeText(s){
    return String(s).split("`").map(function(part, i){ return i % 2 ? "<code>" + esc(part) + "</code>" : esc(part); }).join("");
  }
  function numOptions(prefix, selected){
    var o = "";
    for(var n = 1; n <= 5; n++) o += '<option value="' + n + '"' + (n === selected ? " selected" : "") + ">" + esc(t(prefix + n)) + "</option>";
    return o;
  }
  function listOptions(pairs, selected){
    return pairs.map(function(p){ return '<option value="' + esc(p[0]) + '"' + (p[0] === selected ? " selected" : "") + ">" + esc(p[1]) + "</option>"; }).join("");
  }
  function fieldHTML(id, label, control, wide){
    return '<div class="field' + (wide ? " wide" : "") + '"><label for="' + id + '">' + esc(label) + "</label>" + control + "</div>";
  }
  function recordMarkdown(v){
    function cell(s, fallback){
      s = String(s == null ? "" : s).replace(/\r/g, "").trim();
      if(!s) return fallback || "(not provided)";
      return s.replace(/\|/g, "\\|").replace(/\n+/g, "<br>");
    }
    var steps = String(v.steps || "").split(/\r?\n/).map(function(l){ return l.replace(/^\s*(?:\d+[.)]|[-*])\s*/, "").trim(); })
      .filter(Boolean).map(function(l, i){ return (i + 1) + ". " + l.replace(/\|/g, "\\|"); }).join("<br>");
    var impact = String(v.impact || "").trim();
    var rows = [
      ["ID", cell(v.id)], ["Title", cell(v.title)], ["Status", v.status],
      ["Severity", v.severity + (impact ? " — " + cell(impact) : "")], ["Priority", v.priority],
      ["Environment", cell(v.env)], ["Preconditions", cell(v.pre)], ["Steps", steps || "(not provided)"],
      ["Expected", cell(v.expected)], ["Actual", cell(v.actual)], ["Evidence", cell(v.evidence)],
      ["Root cause", cell(v.root, "Not determined")], ["Regression test", cell(v.regression)], ["Reproducible", v.repro]
    ];
    var heading = [String(v.id || "").trim(), String(v.title || "").trim()].filter(Boolean).join(" — ").replace(/\s+/g, " ") || "Defect record";
    return "## " + heading + "\n\n| Field | Value |\n| --- | --- |\n" + rows.map(function(r){ return "| " + r[0] + " | " + r[1] + " |"; }).join("\n") + "\n";
  }
  function downloadText(name, text){
    var url = URL.createObjectURL(new Blob([text], { type: "text/markdown;charset=utf-8" }));
    var a = document.createElement("a");
    a.href = url; a.download = name; a.rel = "noopener";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
  }
  // Clipboard API where available (secure contexts), otherwise select-and-copy; done(ok) reports the outcome.
  function copyText(text, node, done){
    function fallback(){
      var ok = false;
      try{
        var r = document.createRange(); r.selectNodeContents(node);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        ok = !!(document.execCommand && document.execCommand("copy"));
      }catch(e){ ok = false; }
      done(ok);
    }
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function(){ done(true); }, fallback);
    else fallback();
  }
  function pitfallHTML(entry){
    return entry.groups.map(function(g){
      return "<h4>" + esc(g.label) + "</h4><ul>" + g.items.map(function(it){ return "<li>" + codeText(it) + "</li>"; }).join("") + "</ul>";
    }).join("");
  }
  function commandsText(entry){
    return entry.items.map(function(it){ return it.cmd + (it.note ? "   # " + it.note.replace(/`/g, "") : ""); }).join("\n");
  }
  function renderToolkit(){
    var tk = window.QAHUB_TOOLKIT || { pitfalls: [], commands: [], checklist: [], commandsBefore: [], commandsAfter: [], checklistReporting: [] };
    var h = "";
    setTitle(t("toolkitTitle"));
    h += '<div class="crumb"><a href="#/home">' + esc(t("navDashboard")) + "</a> / " + esc(t("toolkitTitle")) + "</div>";
    h += "<h1>" + esc(t("toolkitTitle")) + "</h1>";
    h += '<p class="lede">' + esc(t("toolkitIntro")) + "</p>";
    h += '<nav class="lesson-nav" aria-label="' + esc(t("toolkitTitle")) + '">';
    [["tk-sev", "sevHeading"], ["tk-stat", "statHeading"], ["tk-rec", "recHeading"], ["tk-ref", "refHeading"]].forEach(function(p){
      h += '<a class="lesson-pill" href="#' + p[0] + '">' + esc(t(p[1])) + "</a>";
    });
    h += "</nav>";

    // 1. Severity calculator
    h += '<section class="tool" id="tk-sev" aria-labelledby="tk-sev-h"><h2 id="tk-sev-h">' + esc(t("sevHeading")) + "</h2>";
    h += "<p>" + esc(t("sevIntro")) + "</p>";
    h += '<div class="field-row">';
    h += fieldHTML("tk-impact", t("sevImpact"), '<select id="tk-impact">' + numOptions("impact", 3) + "</select>");
    h += fieldHTML("tk-like", t("sevLikelihood"), '<select id="tk-like">' + numOptions("like", 3) + "</select>");
    h += fieldHTML("tk-conf", t("sevConfidence"), '<select id="tk-conf">' + listOptions([["confHigh", t("confHigh")], ["confMedium", t("confMedium")], ["confLow", t("confLow")]], "confMedium") + "</select>");
    h += "</div>";
    h += '<div class="result-box" id="tk-sev-out" role="status" aria-live="polite"></div>';
    h += '<p class="tool-legend">' + esc(t("sevBands")) + "</p></section>";

    // 2. Final status helper
    h += '<section class="tool" id="tk-stat" aria-labelledby="tk-stat-h"><h2 id="tk-stat-h">' + esc(t("statHeading")) + "</h2>";
    h += "<p>" + esc(t("statIntro")) + "</p>";
    h += "<fieldset><legend>" + esc(t("statLegend")) + "</legend>";
    for(var q = 1; q <= 4; q++){
      h += '<label class="check"><input type="checkbox" id="tk-q' + q + '"><span>' + esc(t("statQ" + q)) + "</span></label>";
    }
    h += "</fieldset>";
    h += '<div class="result-box" id="tk-stat-out" role="status" aria-live="polite"></div></section>';

    // 3. Defect record builder
    h += '<section class="tool" id="tk-rec" aria-labelledby="tk-rec-h"><h2 id="tk-rec-h">' + esc(t("recHeading")) + "</h2>";
    h += "<p>" + esc(t("recIntro")) + "</p>";
    h += '<div class="record-grid"><div class="record-form">';
    h += '<div class="field-row">' + fieldHTML("tk-rec-id", t("recId"), '<input type="text" id="tk-rec-id" value="QA-001" autocomplete="off">') +
      fieldHTML("tk-rec-status", t("recStatus"), '<select id="tk-rec-status">' + listOptions([["Confirmed", "Confirmed"], ["Suspected", "Suspected"]], "Confirmed") + "</select>") + "</div>";
    h += fieldHTML("tk-rec-title", t("recTitle"), '<input type="text" id="tk-rec-title" autocomplete="off">', true);
    h += '<div class="field-row">' + fieldHTML("tk-rec-severity", t("recSeverity"), '<select id="tk-rec-severity">' + listOptions([["Critical", "Critical"], ["High", "High"], ["Medium", "Medium"], ["Low", "Low"], ["Informational", "Informational"]], "Medium") + "</select>") +
      fieldHTML("tk-rec-priority", t("recPriority"), '<select id="tk-rec-priority">' + listOptions([["P1", t("prio1")], ["P2", t("prio2")], ["P3", t("prio3")], ["P4", t("prio4")]], "P2") + "</select>") + "</div>";
    h += fieldHTML("tk-rec-impact", t("recImpact"), '<input type="text" id="tk-rec-impact" autocomplete="off">', true);
    h += fieldHTML("tk-rec-env", t("recEnv"), '<input type="text" id="tk-rec-env" autocomplete="off">', true);
    h += fieldHTML("tk-rec-pre", t("recPre"), '<input type="text" id="tk-rec-pre" autocomplete="off">', true);
    h += fieldHTML("tk-rec-steps", t("recSteps"), '<textarea id="tk-rec-steps" rows="4"></textarea>', true);
    h += fieldHTML("tk-rec-expected", t("recExpected"), '<textarea id="tk-rec-expected" rows="2"></textarea>', true);
    h += fieldHTML("tk-rec-actual", t("recActual"), '<textarea id="tk-rec-actual" rows="2"></textarea>', true);
    h += fieldHTML("tk-rec-evidence", t("recEvidence"), '<textarea id="tk-rec-evidence" rows="3"></textarea>', true);
    h += fieldHTML("tk-rec-root", t("recRoot"), '<input type="text" id="tk-rec-root" placeholder="Not determined" autocomplete="off">', true);
    h += fieldHTML("tk-rec-regression", t("recRegression"), '<textarea id="tk-rec-regression" rows="2"></textarea>', true);
    h += fieldHTML("tk-rec-repro", t("recRepro"), '<select id="tk-rec-repro">' + listOptions([["Always", "Always"], ["Intermittent", "Intermittent"], ["Not reproduced", "Not reproduced"]], "Always") + "</select>", true);
    h += '</div><div class="record-out"><h3>' + esc(t("recPreview")) + "</h3>";
    h += '<pre id="tk-rec-pre-out" tabindex="0" aria-label="' + esc(t("recPreview")) + '"><code id="tk-rec-md"></code></pre>';
    h += '<div class="cta-row tight left"><button class="btn" id="tk-rec-copy" type="button">' + esc(t("recCopy")) + '</button>' +
      '<button class="btn secondary" id="tk-rec-download" type="button">' + esc(t("recDownload")) + "</button></div>";
    h += '<p class="tool-status" id="tk-rec-status-msg" role="status" aria-live="polite"></p></div></div></section>';

    // 4. Reference library (English)
    h += '<section class="tool" id="tk-ref" aria-labelledby="tk-ref-h"><h2 id="tk-ref-h">' + esc(t("refHeading")) + "</h2>";
    h += "<p>" + esc(t("refNote")) + "</p>";
    h += "<h3>" + esc(t("refPitfalls")) + "</h3><p>" + codeText(tk.pitfallsNote || "") + "</p>";
    h += fieldHTML("tk-pit-sel", t("refPickLanguage"), '<select id="tk-pit-sel">' + listOptions(tk.pitfalls.map(function(p){ return [p.id, p.name]; }), "all") + "</select>");
    h += '<div id="tk-pit-out" class="ref-out"></div>';
    h += "<h3>" + esc(t("refCommands")) + "</h3><ul>" + (tk.commandsBefore || []).map(function(s){ return "<li>" + codeText(s) + "</li>"; }).join("") + "</ul>";
    h += fieldHTML("tk-cmd-sel", t("refPickOs"), '<select id="tk-cmd-sel">' + listOptions(tk.commands.map(function(c){ return [c.id, c.name]; }), "linux") + "</select>");
    h += '<div id="tk-cmd-out" class="ref-out"></div>';
    h += '<ul>' + (tk.commandsAfter || []).map(function(s){ return "<li>" + codeText(s) + "</li>"; }).join("") + "</ul>";
    h += "<h3>" + esc(t("refChecklist")) + "</h3><ul>" + (tk.checklistReporting || []).map(function(s){ return "<li>" + codeText(s) + "</li>"; }).join("") + "</ul>";
    tk.checklist.forEach(function(c){
      h += '<details class="check-item"><summary><span class="num">' + esc(c.n) + "</span> " + esc(c.title) + '</summary><div class="check-body">';
      h += "<p><strong>" + esc(t("refLookFor")) + "</strong> " + codeText(c.look) + "</p>";
      if(c.cmds && c.cmds.length) h += "<ul>" + c.cmds.map(function(s){ return "<li>" + codeText(s) + "</li>"; }).join("") + "</ul>";
      h += "</div></details>";
    });
    h += "</section>";
    root.innerHTML = h;
    bindAnchorScroll(".lesson-pill");

    function $(id){ return document.getElementById(id); }

    // Severity calculator
    function updateSeverity(){
      var i = parseInt($("tk-impact").value, 10), l = parseInt($("tk-like").value, 10), score = i * l, band = severityBand(score);
      var confKey = $("tk-conf").value;
      $("tk-sev-out").innerHTML = '<p class="result-main"><span class="result-label">' + esc(t("recSeverity")) + '</span> <span class="pill pill-' + band.toLowerCase() + '">' + esc(band) +
        '</span> <span class="result-math">' + i + " × " + l + " = " + score + "</span></p><p class=\"result-note\">" +
        esc(tf("sevConfLine", { conf: t(confKey) })) + "</p>";
    }
    ["tk-impact", "tk-like", "tk-conf"].forEach(function(id){ $(id).addEventListener("change", updateSeverity); });
    updateSeverity();

    // Final status helper
    function updateStatus(){
      var flags = [1, 2, 3, 4].map(function(n){ return $("tk-q" + n).checked; });
      var idx = finalStatusIndex(flags);
      $("tk-stat-out").innerHTML = '<p class="result-main"><span class="result-label">' + esc(t("statResult")) + '</span> <span class="pill pill-' + STATUS_PILL[idx] + '">' + esc(FINAL_STATUSES[idx]) +
        '</span> <span class="result-math">' + esc(tf("statRule", { n: idx + 1 })) + '</span></p><p class="result-note">' + esc(t("statNote" + (idx + 1))) + "</p>";
    }
    [1, 2, 3, 4].forEach(function(n){ $("tk-q" + n).addEventListener("change", updateStatus); });
    updateStatus();

    // Defect record builder
    var RECORD_KEYS = { id: "tk-rec-id", title: "tk-rec-title", status: "tk-rec-status", severity: "tk-rec-severity", impact: "tk-rec-impact", priority: "tk-rec-priority",
      env: "tk-rec-env", pre: "tk-rec-pre", steps: "tk-rec-steps", expected: "tk-rec-expected", actual: "tk-rec-actual", evidence: "tk-rec-evidence",
      root: "tk-rec-root", regression: "tk-rec-regression", repro: "tk-rec-repro" };
    function recordValues(){
      var v = {};
      Object.keys(RECORD_KEYS).forEach(function(k){ v[k] = $(RECORD_KEYS[k]).value; });
      return v;
    }
    function updateRecord(){ $("tk-rec-md").textContent = recordMarkdown(recordValues()); }
    Object.keys(RECORD_KEYS).forEach(function(k){
      var el = $(RECORD_KEYS[k]);
      el.addEventListener(el.tagName === "SELECT" ? "change" : "input", updateRecord);
    });
    updateRecord();
    $("tk-rec-copy").addEventListener("click", function(){
      copyText($("tk-rec-md").textContent, $("tk-rec-md"), function(ok){ $("tk-rec-status-msg").textContent = ok ? t("recCopied") : t("recCopyFail"); });
    });
    $("tk-rec-download").addEventListener("click", function(){
      var v = recordValues();
      var name = (String(v.id).trim().replace(/[^\w.-]+/g, "-").replace(/^-+|-+$/g, "") || "defect-record") + ".md";
      downloadText(name, recordMarkdown(v));
    });

    // Reference library
    function updatePitfalls(){
      var entry = tk.pitfalls.filter(function(p){ return p.id === $("tk-pit-sel").value; })[0];
      $("tk-pit-out").innerHTML = entry ? pitfallHTML(entry) : "";
    }
    $("tk-pit-sel").addEventListener("change", updatePitfalls);
    updatePitfalls();
    function updateCommands(){
      var entry = tk.commands.filter(function(c){ return c.id === $("tk-cmd-sel").value; })[0];
      if(!entry){ $("tk-cmd-out").innerHTML = ""; return; }
      $("tk-cmd-out").innerHTML = '<pre tabindex="0" aria-label="' + esc(entry.name) + '"><code id="tk-cmd-code"></code></pre>' +
        (entry.footnote ? "<p>" + esc(entry.footnote) + "</p>" : "") +
        '<div class="cta-row tight left"><button class="btn secondary" id="tk-cmd-copy" type="button">' + esc(t("refCopyCommands")) + '</button></div>' +
        '<p class="tool-status" id="tk-cmd-msg" role="status" aria-live="polite"></p>';
      $("tk-cmd-code").textContent = commandsText(entry);
      $("tk-cmd-copy").addEventListener("click", function(){
        copyText($("tk-cmd-code").textContent, $("tk-cmd-code"), function(ok){ $("tk-cmd-msg").textContent = ok ? t("recCopied") : t("recCopyFail"); });
      });
    }
    $("tk-cmd-sel").addEventListener("change", updateCommands);
    updateCommands();
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
