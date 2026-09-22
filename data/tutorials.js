// QA Learning Hub — Tutorial module content
window.QAHUB_MODULES = [
{
  id: "manual-testing",
  num: 1,
  title: "Manual Testing Fundamentals",
  summary: "Why human testers still matter, and how to run a manual testing effort well.",
  takeaway: "Manual testing remains a vital part of modern QA — flexibility and human intuition catch complex bugs early, ensuring reliable user experiences. 100% automation is not possible, which makes manual testing imperative.",
  lessons: [
    { h: "What is Manual Testing?", body: `
      <p>Manual testing is testing executed <strong>without automation tools</strong>. A tester manually performs actions — clicking, entering inputs, navigating screens — to verify behavior against requirements. No programming knowledge is required, which makes it the most accessible entry point into QA.</p>` },
    { h: "Why It's Important", body: `
      <ul>
        <li><strong>UX validation</strong> — human judgment on placement, aesthetics and feedback. Over <strong>70% of projects</strong> cite UX as a primary reason for manual testing.</li>
        <li><strong>Catching bugs early is far cheaper</strong> — a defect found at implementation costs roughly <strong>6x more</strong> to fix than one caught at the design phase, per the IBM System Sciences Institute.</li>
        <li><strong>Cost-effective</strong> for short-lifecycle projects or those with frequently-changing UIs, where building automation would outlast the feature itself.</li>
      </ul>` },
    { h: "Primary Goals", body: `
      <ul>
        <li>Bug Identification</li>
        <li>Requirement Validation</li>
        <li>User Experience Assurance</li>
        <li>Regression Confidence</li>
        <li>Quality Delivery</li>
      </ul>` },
    { h: "Characteristics", body: `
      <ul>
        <li><strong>Human-Centric</strong> — depends on tester judgment, not scripts.</li>
        <li><strong>Exploratory Nature</strong> — testers can deviate and investigate.</li>
        <li><strong>Adaptability</strong> — adjusts quickly to changing requirements.</li>
        <li><strong>Time-Intensive</strong> — every pass is manual effort.</li>
        <li><strong>Error-Prone but Insightful</strong> — humans miss things scripts wouldn't, but also notice things scripts can't.</li>
      </ul>` },
    { h: "Types of Manual Testing", body: `
      <p>By knowledge of internals:</p>
      <ul>
        <li><strong>Black Box Testing</strong> — no knowledge of internal code, based on requirements.</li>
        <li><strong>White Box Testing</strong> — full knowledge of internal logic/code.</li>
        <li><strong>Grey Box Testing</strong> — partial knowledge of internals.</li>
      </ul>
      <p>By test level:</p>
      <ul>
        <li><strong>Unit Testing</strong> — individual components.</li>
        <li><strong>Integration Testing</strong> — combined modules.</li>
        <li><strong>System Testing</strong> — the whole integrated system.</li>
        <li><strong>Acceptance Testing</strong> — validation against business needs.</li>
      </ul>` },
    { h: "How to Perform Manual Testing", body: `
      <p>A typical manual testing workflow:</p>
      <ol>
        <li><strong>Requirement analysis</strong> — understand what needs to be built and tested.</li>
        <li><strong>Test case design</strong> — write steps, inputs and expected results.</li>
        <li><strong>Execution</strong> — run the test cases against the build.</li>
        <li><strong>Defect logging</strong> — record any deviation from expected behavior.</li>
        <li><strong>Retesting / regression</strong> — confirm fixes and check nothing else broke.</li>
      </ol>` },
    { h: "Case Studies", body: `
      <p><strong>Video Game UI testing:</strong> a tester manually walks through menus, HUD elements and control mappings across different resolutions and input devices — the kind of subjective "does this feel right" judgment that's hard to automate.</p>
      <p><strong>Hospital Management System testing:</strong> a tester works through patient registration, appointment scheduling and billing workflows end-to-end, checking that data entered by a receptionist correctly reaches the doctor's and billing screens — validating real-world usage sequences, not just isolated functions.</p>` },
    { h: "Myths vs. Reality", body: `
      <p><strong>Myth:</strong> Manual testing is obsolete now that automation exists. <strong>Reality:</strong> automation cannot judge subjective UX, cannot handle every edge case cost-effectively, and exhaustive testing of every path is impossible — manual testers fill exactly that gap.</p>
      <p><strong>Myth:</strong> Manual testing is low-skill "clicking around." <strong>Reality:</strong> it requires deep requirement analysis, structured test design and sharp defect investigation skills.</p>` },
    { h: "Challenges", body: `
      <ul>
        <li>Time-Consuming</li>
        <li>Repetitiveness</li>
        <li>Human Error</li>
        <li>Scalability Issues</li>
        <li>Test Data Management</li>
        <li>Environment Setup</li>
        <li>Resource Dependency</li>
      </ul>` },
    { h: "Manual vs. Automation Testing", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Aspect</th><th>Manual Testing</th><th>Automation Testing</th></tr></thead>
        <tbody>
          <tr><td>Speed</td><td>Slower, human-paced</td><td>Fast, repeatable at scale</td></tr>
          <tr><td>Setup cost</td><td>Low — no scripting needed</td><td>Higher — scripts must be built and maintained</td></tr>
          <tr><td>Best for</td><td>Exploratory, UX, short-lived UIs</td><td>Repetitive regression, large test suites</td></tr>
          <tr><td>Human judgment</td><td>Yes</td><td>No</td></tr>
          <tr><td>Skill required</td><td>Domain and testing knowledge</td><td>Programming plus testing knowledge</td></tr>
        </tbody>
      </table></div>` },
    { h: "Common Tools (for context)", body: `
      <p>Tools you'll hear referenced around manual and automation testing work: <strong>Selenium</strong>, <strong>QTP/UFT</strong>, <strong>JMeter</strong>, <strong>LoadRunner</strong>, <strong>TestLink</strong>, <strong>Quality Center (ALM)</strong>. This module is about the manual discipline, not hands-on tool training.</p>` },
    { h: "Advantages", body: `
      <ul>
        <li>Human Insight</li>
        <li>Flexibility</li>
        <li>No Coding Required</li>
        <li>Effective for Small Projects</li>
        <li>Encourages Exploratory Testing</li>
      </ul>` },
    { h: "Disadvantages", body: `
      <ul>
        <li>Time-Consuming</li>
        <li>Prone to Human Error</li>
        <li>Limited Coverage</li>
        <li>Not Scalable for large/complex apps</li>
      </ul>` },
    { h: "Defect Severity, Priority & Writing a Great Bug Report", body: `
      <p><strong>Severity vs. Priority</strong> are the two axes every defect gets judged on, and confusing them is a common beginner mistake:</p>
      <ul>
        <li><strong>Severity</strong> — the technical impact on the system (does it crash the app, corrupt data, or just misalign a button?). Set by the tester based on observed behavior.</li>
        <li><strong>Priority</strong> — how urgently it needs fixing, from a business perspective (a low-severity typo on the homepage can be high priority right before a big launch). Usually set collaboratively with product.</li>
      </ul>
      <p>They're independent: a high-severity crash in a rarely-used admin panel might be low priority; a low-severity but highly visible cosmetic bug on the checkout page might be high priority.</p>
      <p><strong>A bug report that gets fixed fast includes:</strong></p>
      <ul>
        <li><strong>Clear summary</strong> — one line describing the problem, not the investigation.</li>
        <li><strong>Steps to reproduce</strong> — numbered, exact, minimal (cut anything not needed to trigger the bug).</li>
        <li><strong>Expected vs. actual result</strong> — stated explicitly, not implied.</li>
        <li><strong>Environment</strong> — browser/OS/device/build version/environment (staging vs. prod).</li>
        <li><strong>Severity &amp; priority</strong> — your assessment, even if product later adjusts it.</li>
        <li><strong>Evidence</strong> — screenshot, screen recording, or log excerpt; a picture ends most "can't reproduce" arguments before they start.</li>
      </ul>
      <p>A report missing repro steps is the single most common reason a bug gets bounced back to the reporter instead of fixed.</p>` }
  ]
},
{
  id: "test-techniques",
  num: 2,
  title: "Software Testing Techniques & Test Case Design",
  summary: "Structured techniques — boundaries, partitions, decision tables, states — for high coverage with fewer test cases.",
  takeaway: "Since exhaustive testing is impossible, structured techniques let testers achieve high coverage with minimal test cases by focusing on error-prone areas: boundaries, partitions, combinations, and states.",
  lessons: [
    { h: "The 7 Principles of Software Testing", body: `
      <ol>
        <li><strong>Testing Shows the Presence of Defects</strong> — testing can prove defects exist, never that none do.</li>
        <li><strong>Exhaustive Testing is Impossible</strong> — testing every input/path combination isn't feasible except in trivial cases.</li>
        <li><strong>Early Testing Saves Time and Cost</strong> — the earlier a defect is found, the cheaper it is to fix.</li>
        <li><strong>Defect Clustering</strong> — a small number of modules usually contain most of the defects.</li>
        <li><strong>Pesticide Paradox</strong> — running the same tests repeatedly stops finding new bugs; tests must evolve.</li>
        <li><strong>Testing is Context-Dependent</strong> — how you test a banking app differs from how you test a game.</li>
        <li><strong>Absence-of-Errors Fallacy</strong> — a bug-free product that doesn't meet user needs is still a failure.</li>
      </ol>` },
    { h: "Boundary Value Analysis (BVA)", body: `
      <p>Defects cluster at the edges of input ranges, so BVA tests values at the minimum, maximum, and just inside/outside each boundary.</p>
      <p class="worked-example"><strong>Worked example:</strong> for a valid input range of <strong>1–10</strong>, BVA tests the boundary values <strong>0, 1, 2, 9, 10, 11</strong>.</p>` },
    { h: "Equivalence Class Partitioning (ECP)", body: `
      <p>Divide inputs into valid and invalid classes, then test just one representative value per class — because if one value in a class fails or passes, the rest of the class is assumed to behave the same way.</p>
      <p class="worked-example"><strong>Worked example:</strong> valid ranges 1–10 and 20–30 produce five classes: <code>&lt;1</code> (invalid), <code>1–10</code> (valid), <code>11–19</code> (invalid), <code>20–30</code> (valid), <code>&gt;30</code> (invalid). Sample test values: <strong>-2, 3, 15, 25, 45</strong>.</p>` },
    { h: "Decision Table Testing", body: `
      <p>Maps input combinations to outputs in a cause-effect table — useful when a system's behavior depends on combinations of conditions.</p>
      <p class="worked-example"><strong>Worked example:</strong> a "Submit" button enables only when all form fields are filled.</p>
      <p><strong>Steps:</strong></p>
      <ol>
        <li>List inputs (conditions) in rows.</li>
        <li>Enumerate rule combinations in columns.</li>
        <li>Fill in the combinations.</li>
        <li>Record the expected output for each combination.</li>
      </ol>` },
    { h: "State Transition Testing", body: `
      <p>Models how a sequence of inputs moves a system between defined states, so you can test both the transitions and the states themselves.</p>
      <p class="worked-example"><strong>Worked example:</strong> a login system with a PIN — a correct PIN at any attempt grants access; three incorrect attempts in a row blocks the account.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>State</th><th>Correct PIN</th><th>Incorrect PIN</th></tr></thead>
        <tbody>
          <tr><td>Start</td><td>Access Granted</td><td>1st attempt</td></tr>
          <tr><td>1st attempt</td><td>Access Granted</td><td>2nd attempt</td></tr>
          <tr><td>2nd attempt</td><td>Access Granted</td><td>3rd attempt</td></tr>
          <tr><td>3rd attempt</td><td>Access Granted</td><td>Account Blocked</td></tr>
          <tr><td>Access Granted</td><td>–</td><td>–</td></tr>
          <tr><td>Account Blocked</td><td>–</td><td>–</td></tr>
        </tbody>
      </table></div>` },
    { h: "Error Guessing", body: `
      <p>Uses a tester's experience, intuition, and historical defect data to anticipate likely problem areas. There are no formal steps — it relies entirely on skilled, experienced testers who have seen where things tend to break before.</p>` },
    { h: "Advantages & Limitations", body: `
      <p><strong>Advantages:</strong> better coverage, targets high-risk areas, reduces redundancy, catches issues early, boosts confidence.</p>
      <p><strong>Limitations:</strong> no technique guarantees full defect detection, results depend on tester skill, may miss integration or usability issues, and some techniques have limited automation support.</p>` },
    { h: "Choosing the Right Technique", body: `
      <p>Align the technique with project objectives, assess risk, and fit the development model — for example, favoring agile-friendly approaches on iterative systems. Balance time, budget, and skill constraints. Best practice is <strong>combining multiple techniques</strong> rather than relying on just one.</p>` },
    { h: "Pairwise Testing & Use Case Testing", body: `
      <p><strong>Pairwise (combinatorial) testing</strong> tackles a problem Equivalence Partitioning and BVA don't solve alone: when a feature has many independent input parameters, testing every combination explodes fast (5 parameters with 4 values each = 1,024 combinations). Pairwise testing is built on the observation that most real-world defects are triggered by an interaction between just <strong>two</strong> parameters, not five at once — so a well-chosen subset of test cases that covers every possible <em>pair</em> of parameter values catches the large majority of interaction bugs at a fraction of the cost.</p>
      <p><em>Worked example:</em> a form with Browser (Chrome/Firefox/Safari), OS (Windows/Mac/Linux), and Language (EN/ES) has 18 possible full combinations — pairwise reduces this to around 9 test cases while still exercising every Browser×OS, Browser×Language, and OS×Language pair at least once. <strong>Orthogonal Array Testing</strong> is the underlying statistical method often used to generate these reduced sets.</p>
      <p><strong>Use Case Testing</strong> derives test cases directly from documented use cases — the step-by-step interactions between an actor (user or external system) and the system under test, including the main success scenario and its alternate/exception flows. It's especially effective for validating that a workflow behaves correctly end-to-end from the user's perspective, complementing more input-focused techniques like ECP and BVA.</p>` }
  ]
},
{
  id: "testing-types",
  num: 3,
  title: "Types of Software Testing — Reference Catalogue",
  summary: "The landscape of testing types, and a curated top 20 to know first.",
  takeaway: "A “type” of testing is a classification with its own objective, strategy, and deliverables — for example, Accessibility Testing validates that an app is usable by people with disabilities. Understanding the landscape helps QA professionals pick the right combination for full coverage.",
  lessons: [
    { h: "What is a Software Testing Type?", body: `
      <p>A testing type classifies a testing activity by what it's checking (function, performance, security, usability...) and who typically performs it. Knowing the catalogue helps you recognize the right tool for a given risk, rather than reaching for the same handful of tests every time.</p>` },
    { h: "Top 20 Testing Types Every QA Should Know", body: `
      <p>A lightweight introduction — the full 105+ term catalogue lives in the <a href="#/glossary">Glossary</a>.</p>
      <ul class="chip-list">
        <li>Acceptance Testing</li><li>Accessibility Testing</li><li>Agile Testing</li><li>Alpha Testing</li>
        <li>Beta Testing</li><li>API Testing</li><li>Black Box Testing</li><li>White Box Testing</li>
        <li>Gray Box Testing</li><li>Exploratory Testing</li><li>Functional Testing</li><li>Non-functional Testing</li>
        <li>Load Testing</li><li>Performance Testing</li><li>Regression Testing</li><li>Sanity Testing</li>
        <li>Smoke Testing</li><li>Security Testing</li><li>Stress Testing</li><li>Usability Testing</li>
      </ul>` },
    { h: "Categories", body: `
      <p>The Glossary uses this taxonomy to group and filter testing types:</p>
      <ul>
        <li><strong>Functional</strong> — verifies what the system does against requirements (Acceptance, System, Integration Testing...).</li>
        <li><strong>Non-Functional</strong> — verifies how well it does it (Performance, Load, Usability Testing...).</li>
        <li><strong>Structural (White Box)</strong> — verifies internal code paths and logic (Unit, Branch, Path Testing...).</li>
        <li><strong>Change-Related</strong> — verifies that changes haven't broken anything (Regression, Retesting, Smoke Testing...).</li>
        <li><strong>Specialized</strong> — targeted concerns like security, compatibility, localization (Penetration, Compatibility Testing...).</li>
        <li><strong>General</strong> — process- or methodology-oriented types that don't fit neatly elsewhere (Agile Testing, Static Testing...).</li>
      </ul>` },
    { h: "Non-Functional Testing in Practice", body: `
      <p>Non-functional testing asks "how well" a system performs rather than "does it do the right thing" — and each sub-type needs its own planning approach:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Type</th><th>What you measure</th><th>Typical approach</th></tr></thead>
        <tbody>
          <tr><td><strong>Performance</strong></td><td>Response time, throughput, resource usage under expected load</td><td>Baseline first, then compare against defined SLAs/thresholds — see Load/Stress/Scalability Testing in the Glossary.</td></tr>
          <tr><td><strong>Usability</strong></td><td>Ease of learning, efficiency, error rate, subjective satisfaction</td><td>Task-based sessions with real or representative users; think-aloud protocols surface confusion words alone won't.</td></tr>
          <tr><td><strong>Compatibility</strong></td><td>Correct behavior across browsers, devices, OS versions, screen sizes</td><td>Prioritize by real user analytics (which browsers/devices your actual users have) rather than testing everything equally.</td></tr>
          <tr><td><strong>Localization</strong></td><td>Correct translation, date/currency/number formats, text expansion not breaking layout</td><td>Test with pseudo-localization early (artificially lengthened/accented strings) to catch layout breaks before real translations exist.</td></tr>
        </tbody>
      </table></div>
      <p>The common thread: non-functional testing needs an explicit, agreed-upon threshold before you start ("page loads in under 2s at 500 concurrent users") — without one, "how well" has no pass/fail line, just opinions.</p>` }
  ]
},
{
  id: "adhoc-testing",
  num: 4,
  title: "Ad Hoc Testing",
  summary: "Unplanned, undocumented testing that tries to break the system on intuition and creativity.",
  takeaway: "Ad hoc testing is unplanned, undocumented testing where the tester tries to “break” the system using intuition and creativity — most valuable when time is short or as a supplement to structured testing.",
  lessons: [
    { h: "What is Ad Hoc Testing?", body: `
      <p>Informal, unscripted testing with no test cases prepared in advance. It's a black-box approach: the tester has no special insight into the code, just a goal of finding what breaks.</p>` },
    { h: "When to Perform It", body: `
      <ul>
        <li>Early in development, before formal test cases exist.</li>
        <li>Before official testing begins, as a smoke-check of the basics.</li>
        <li>After formal testing, to catch what structured tests missed.</li>
        <li>When short on time.</li>
        <li>To explore a feature deeply.</li>
        <li>For usability checks.</li>
        <li>During beta testing.</li>
      </ul>` },
    { h: "Types of Ad Hoc Testing", body: `
      <ul>
        <li><strong>Buddy Testing</strong> — a developer and a tester work together on the same module.</li>
        <li><strong>Pair Testing</strong> — two testers share one session, one driving and one observing.</li>
        <li><strong>Monkey Testing</strong> — random, unstructured inputs thrown at the app to see if it breaks.</li>
      </ul>` },
    { h: "Advantages", body: `
      <ul>
        <li>Finds edge-case defects structured tests miss.</li>
        <li>Requires no documentation overhead.</li>
        <li>Fast.</li>
        <li>Encourages creative thinking.</li>
      </ul>` },
    { h: "Disadvantages", body: `
      <ul>
        <li>Hard to reproduce or repeat.</li>
        <li>Relies heavily on tester skill.</li>
        <li>Poor traceability and coverage metrics.</li>
        <li>Not suitable as the sole testing method.</li>
      </ul>` },
    { h: "Best Practices", body: `
      <ol>
        <li>Have good business knowledge.</li>
        <li>Target key/high-risk modules.</li>
        <li>Record every defect found.</li>
        <li>Pair up with another tester for a fresh perspective.</li>
      </ol>` },
    { h: "Integrating Ad Hoc Testing into Agile Sprints", body: `
      <p>Ad hoc testing fits naturally into a sprint's rhythm without needing its own dedicated ceremony:</p>
      <ul>
        <li><strong>Right after a feature is dev-complete</strong> — before formal test cases are even written, a quick unscripted pass often surfaces the obvious breakage fastest, cheaply, before more structured testing invests time in it.</li>
        <li><strong>During sprint review prep</strong> — a short ad hoc session the day before demo catches embarrassing issues before they surface live in front of stakeholders.</li>
        <li><strong>As a "bug bash"</strong> — a time-boxed session (30-60 minutes) where the whole team, not just QA, ad hoc tests a build together; this also spreads product knowledge and finds bugs no single tester's habits would have hit.</li>
        <li><strong>Time-boxed, not open-ended</strong> — even informal testing benefits from a stated time limit (e.g. 20 minutes on the new checkout flow) so it stays focused rather than wandering.</li>
      </ul>
      <p>The main adjustment for Agile teams: log findings immediately in the sprint's tracker, even briefly, rather than relying on memory — ad hoc sessions move fast and details fade quickly once the session ends.</p>` }
  ]
},
{
  id: "exploratory-testing",
  num: 5,
  title: "Exploratory Testing",
  summary: "Simultaneous test design and execution — ad hoc testing with a purpose.",
  takeaway: "Exploratory testing is simultaneous test design and execution — a “thinking” activity emphasizing investigation and learning, widely used in Agile. It is ad hoc testing with a purpose: structured and rigorous, not random.",
  lessons: [
    { h: "What is Exploratory Testing?", body: `
      <p>Testers design and run tests on the fly, noting ideas before execution. It emphasizes the personal freedom and responsibility of the individual tester to direct their own investigation.</p>` },
    { h: "Scripted vs. Exploratory Testing", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Scripted Testing</th><th>Exploratory Testing</th></tr></thead>
        <tbody>
          <tr><td>Directed from requirements</td><td>Directed from requirements and exploring during testing</td></tr>
          <tr><td>Test cases determined well in advance</td><td>Test cases determined during testing</td></tr>
          <tr><td>Confirms testing against requirements</td><td>Investigates the system/application</td></tr>
          <tr><td>Emphasizes prediction and decision-making</td><td>Emphasizes adaptability and learning</td></tr>
          <tr><td>Confirmatory</td><td>Investigative</td></tr>
          <tr><td>About controlling tests</td><td>About improving test design</td></tr>
          <tr><td>Like reading a speech from a draft</td><td>Like having a spontaneous conversation</td></tr>
          <tr><td>The script is in control</td><td>The tester's mind is in control</td></tr>
        </tbody>
      </table></div>` },
    { h: "The SBTM Process (Session-Based Test Management)", body: `
      <ol>
        <li><strong>Create a Bug Taxonomy</strong> — a classification for the kinds of bugs you expect to find.</li>
        <li><strong>Define a Test Charter</strong> — a mission statement for the session.</li>
        <li><strong>Time Box the session</strong> — set a fixed duration and stick to it.</li>
        <li><strong>Review Results</strong> — go over what was found.</li>
        <li><strong>Debrief</strong> — discuss the session with the team.</li>
      </ol>` },
    { h: "Pros & Cons", body: `
      <p><strong>Pros:</strong> finds more bugs, encourages creativity, requires less prep documentation, adapts quickly to changing requirements.</p>
      <p><strong>Cons:</strong> depends heavily on tester skill, hard to measure coverage, difficult to repeat or reproduce exactly, less suited to strict compliance/audit needs.</p>` },
    { h: "When to Use It", body: `
      <ul>
        <li>Requirements are missing or ambiguous.</li>
        <li>Early iterations of a feature.</li>
        <li>Critical applications needing deep investigation.</li>
        <li>Experienced testers are available.</li>
      </ul>` },
    { h: "Exploratory Testing Heuristics: SFDPOT & HICCUPPS", body: `
      <p>Heuristics give exploratory testing structure without turning it into a script — they're prompts for where to look next, not steps to follow in order.</p>
      <p><strong>SFDPOT</strong> ("San Francisco Depot") is a coverage-mapping mnemonic for deciding what parts of a product to explore:</p>
      <ul>
        <li><strong>S</strong>tructure — what the product is made of (code, files, dependencies).</li>
        <li><strong>F</strong>unction — what it does (features, commands, operations).</li>
        <li><strong>D</strong>ata — what it processes (inputs, outputs, formats, storage).</li>
        <li><strong>P</strong>latform — what it depends on (OS, browser, hardware, network).</li>
        <li><strong>O</strong>perations — how it's actually used in the real world (typical and atypical usage).</li>
        <li><strong>T</strong>ime — how time affects it (timeouts, timezones, concurrency, sequencing).</li>
      </ul>
      <p><strong>HICCUPPS</strong> is an oracle heuristic — a way to decide whether an observed behavior is actually a bug, when there's no explicit spec to check against:</p>
      <ul>
        <li><strong>H</strong>istory — does it behave consistently with how it behaved before?</li>
        <li><strong>I</strong>mage — does it match the image/reputation the company wants to project?</li>
        <li><strong>C</strong>omparable products — how do similar products handle this?</li>
        <li><strong>C</strong>laims — does it match what documentation, marketing, or help text claims?</li>
        <li><strong>U</strong>ser expectations — does it match what a reasonable user would expect?</li>
        <li><strong>P</strong>roduct — is it internally consistent with the rest of the product?</li>
        <li><strong>P</strong>urpose — does it serve the feature's actual purpose?</li>
        <li><strong>S</strong>tatutes — does it comply with laws, regulations, or standards?</li>
      </ul>
      <p>Together they turn "explore the app" from a vague instruction into a repeatable set of lenses any tester can pick up.</p>` }
  ]
},
{
  id: "rest-api-testing",
  num: 6,
  title: "REST API Testing",
  summary: "Validating RESTful services by sending HTTP requests and checking the responses — no UI required.",
  takeaway: "REST API testing validates RESTful web services by sending HTTP requests (GET, POST, PUT, DELETE) and checking the responses — no UI required.",
  lessons: [
    { h: "What is REST?", body: `
      <p><strong>REST</strong> (Representational State Transfer) is an architectural style for building web services, widely used for cloud service communication. An <strong>API</strong> is a set of programming instructions and commands that let programs communicate and exchange functionality — for example, a "Google API" exposing search, translation, or calendar functions.</p>` },
    { h: "The 4 Core HTTP Methods", body: `
      <ul>
        <li><strong>GET</strong> — retrieve data from the server via a URI; should have no side effects on data.</li>
        <li><strong>POST</strong> — create a new entity or send data to the server (e.g. form submissions, file uploads).</li>
        <li><strong>PUT</strong> — create a new entity or update an existing one.</li>
        <li><strong>DELETE</strong> — remove the resource(s) identified by a URI.</li>
      </ul>` },
    { h: "How to Test a REST API", body: `
      <p>You need two things: (1) a testing tool or framework, and (2) either configured requests or custom test code. Common tools: <strong>Advanced REST Client</strong>, <strong>Postman</strong>, <strong>cURL</strong>.</p>` },
    { h: "Step-by-Step Testing Workflow", body: `
      <ol>
        <li>Open your REST client.</li>
        <li>Enter the target API URL.</li>
        <li>Select the HTTP method.</li>
        <li>Set request headers.</li>
        <li>Provide the request body (for POST/PUT).</li>
        <li>Submit the request.</li>
        <li>Validate the response — status code, response body/schema, and headers — against expected results.</li>
      </ol>` },
    { h: "Challenges of API Testing", body: `
      <ul>
        <li>Selecting the right parameter combinations to test.</li>
        <li>Sequencing calls correctly.</li>
        <li>Verifying just the output without a UI to look at.</li>
        <li>Integrating API tests into a GUI-based automation strategy.</li>
      </ul>` },
    { h: "API Authentication, Authorization & Beyond REST", body: `
      <p><strong>Testing authentication and authorization</strong> is one of the highest-value things API testing does, since a broken auth check exposes data or actions to people who shouldn't have them:</p>
      <ul>
        <li><strong>API keys</strong> — simplest scheme; test that requests without a valid key are rejected, and that a revoked key stops working immediately.</li>
        <li><strong>OAuth 2.0</strong> — the standard for delegated access (e.g. "log in with Google"); test token expiry handling, refresh-token flows, and that scopes are actually enforced (a token scoped to "read" shouldn't be able to write).</li>
        <li><strong>JWT (JSON Web Tokens)</strong> — self-contained tokens carrying claims; test signature validation (a tampered token must be rejected), expiry (<code>exp</code> claim), and that the server doesn't blindly trust claims without verifying the signature.</li>
      </ul>
      <p><strong>Authorization testing</strong> goes beyond "is this user logged in" to "can this specific user do this specific thing" — testing with multiple accounts of different roles/permissions to confirm one user can't access or modify another user's data (a category of bug serious enough that it gets its own name in Module 10: Broken Access Control).</p>
      <p><strong>Beyond REST:</strong> not every API is REST, and each style shifts what testing looks like:</p>
      <ul>
        <li><strong>GraphQL</strong> — a single endpoint where the client specifies exactly what data it wants in the query. Testing focus shifts toward validating the schema, checking that queries can't request excessive/nested data (a denial-of-service risk unique to GraphQL), and testing mutations (GraphQL's equivalent of POST/PUT) for the same authorization rigor as REST writes.</li>
        <li><strong>gRPC</strong> — a binary, contract-first protocol (using Protocol Buffers) built for fast service-to-service communication. Testing typically works from the <code>.proto</code> contract definition directly, and tools like <code>grpcurl</code> or BloomRPC stand in for what Postman/cURL do for REST.</li>
      </ul>` }
  ]
},
{
  id: "istqb-ctfl",
  num: 7,
  title: "ISTQB® CTFL v4.0 Certification Track",
  summary: "A study-companion overview of the ISTQB Foundation Level syllabus — the entry-level, vendor-neutral testing certification.",
  takeaway: "ISTQB® Foundation Level is the entry-level, vendor-neutral certification for software testers worldwide. Its syllabus organizes testing knowledge into 6 chapters, each learning objective tagged with a \"K-level\" (K1 = remember, K2 = understand, K3 = apply) that signals how deeply the exam expects you to know it.",
  callout: {
    label: "Recommended reading",
    body: "Stapp, L., Roman, A., &amp; Pilaeten, M. (2024). <em>ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0.</em> Springer. This module is a study-companion overview — for full depth, exercises, and official practice exams, see the book or the official ISTQB syllabus."
  },
  lessons: [
    { h: "7.0 How Certification Works", body: `
      <p>The Foundation Level (CTFL) is the entry-level ISTQB® certification and the prerequisite for the Advanced Level and Expert Level tracks. The exam is typically <strong>40 multiple-choice questions</strong>, weighted by chapter and K-level, with a defined pass mark of roughly <strong>65%</strong>.</p>` },
    { h: "7.1 Fundamentals of Testing", body: `
      <p><span class="k-badge">K2</span> <strong>What testing is and why it's necessary:</strong> testing is distinct from debugging, contributes directly to project success, and supports — but is not the same as — quality assurance.</p>
      <p><strong>Error, Defect, Failure, Root Cause:</strong> a human <strong>error</strong> (mistake) can introduce a <strong>defect</strong> (flaw) into a work product; when executed, a defect can cause a <strong>failure</strong> (observable wrong behavior); the underlying reason the error happened is the <strong>root cause</strong>.</p>
      <p><span class="k-badge">K2</span> <strong>The seven testing principles:</strong></p>
      <ol>
        <li>Testing shows the presence, not the absence, of defects.</li>
        <li>Exhaustive testing is impossible.</li>
        <li>Early testing saves time and money.</li>
        <li>Defects cluster together.</li>
        <li>Tests wear out — repeating the same tests stops finding new bugs.</li>
        <li>Testing is context-dependent.</li>
        <li>Absence-of-defects is a fallacy — a bug-free product that doesn't meet user needs can still fail.</li>
      </ol>
      <p><strong>Core test activities:</strong> planning, monitoring &amp; control, analysis, design, implementation, execution, and completion — producing testware such as test plans, test cases, test data, and test logs.</p>
      <p>The <strong>whole-team approach</strong> treats testing as a shared team responsibility, while <strong>tester independence</strong> still adds value by bringing a perspective free of the author's assumptions.</p>` },
    { h: "7.2 Testing Throughout the SDLC", body: `
      <p><span class="k-badge">K2</span> The chosen development lifecycle model — sequential/Waterfall, iterative, or Agile — shapes how and when testing happens. DevOps and continuous delivery push testing earlier and more frequently, an idea often called <strong>"shift-left."</strong> Retrospectives serve as a process-improvement mechanism across all models.</p>
      <p><strong>Test levels</strong> (component/unit, integration, system, acceptance) describe <em>where</em> testing happens; <strong>test types</strong> (functional, non-functional, white-box/structural, change-related) describe <em>what</em> is being tested — the two are independent dimensions.</p>
      <p><strong>Confirmation (re-)testing</strong> re-runs a previously failed test after a fix to confirm the defect is resolved; <strong>regression testing</strong> re-runs existing tests to confirm a change hasn't broken previously working functionality. <strong>Maintenance testing</strong> is triggered by modification, migration, or retirement of a system.</p>` },
    { h: "7.3 Static Testing", body: `
      <p><span class="k-badge">K2</span> Static testing examines work products — requirements, designs, code, test cases — <strong>without executing them</strong>, giving early, frequent feedback before dynamic testing is even possible.</p>
      <p>The <strong>formal review process:</strong> planning → kick-off → individual review → issue communication/analysis → fixing &amp; reporting. Typical reviewer roles: <strong>author</strong>, <strong>moderator/facilitator</strong>, <strong>reviewers</strong>, <strong>scribe</strong>, and <strong>manager</strong>.</p>
      <p><strong>Four review types</strong>, from least to most formal: <strong>Informal Review</strong> &rarr; <strong>Walkthrough</strong> &rarr; <strong>Technical Review</strong> &rarr; <strong>Inspection</strong>.</p>
      <p>Reviews succeed when they have clear objectives, the right participants, and a psychologically safe, blame-free culture.</p>` },
    { h: "7.4 Test Analysis and Design", body: `
      <p><span class="k-badge">K2</span> Three families of test techniques:</p>
      <ul>
        <li><strong>Black-box</strong> (behavior-based) — no knowledge of internals. Covered with worked examples in <em>Module 2</em>: <span class="k-badge">K3</span> Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, and State Transition Testing.</li>
        <li><strong>White-box</strong> (structure-based) — uses code/architecture knowledge. <span class="k-badge">K3</span> <strong>Statement Testing/Coverage</strong> asks whether every executable statement has run at least once; <strong>Branch Testing/Coverage</strong> asks whether every decision outcome (true and false) has been exercised.</li>
        <li><strong>Experience-based</strong> — uses tester intuition and history: <strong>Error Guessing</strong>, <strong>Exploratory Testing</strong> (see <em>Modules 4 &amp; 5</em>), and <strong>Checklist-Based Testing</strong>.</li>
      </ul>
      <p><strong>Collaboration-based approaches:</strong> writing user stories collaboratively, defining acceptance criteria, and <strong>Acceptance Test-Driven Development (ATDD)</strong>.</p>` },
    { h: "7.5 Managing the Test Activities", body: `
      <p><span class="k-badge">K2</span> <strong>Test planning</strong> defines a test plan's purpose and content, sets <strong>entry criteria</strong> (conditions to start) and <strong>exit criteria</strong> (conditions to finish), and uses estimation and prioritization techniques.</p>
      <p>The <strong>test pyramid</strong> recommends many fast, low-level automated tests and fewer slow, high-level UI tests. The <strong>testing quadrants</strong> map test types along two axes: business-facing vs. technology-facing, and supports-the-team vs. critiques-the-product.</p>
      <p><span class="k-badge">K2</span> <strong>Risk management:</strong> risk = likelihood &times; impact. <strong>Product risks</strong> threaten whether the work product satisfies stakeholder needs; <strong>project risks</strong> threaten the project's ability to deliver (schedule, resourcing). Risk-based testing prioritizes higher-risk areas.</p>
      <p><strong>Test monitoring, control, and completion</strong> track metrics and communicate status via test reports. <strong>Configuration management</strong> supports traceability. A <strong>defect report</strong> typically includes a summary, steps to reproduce, expected vs. actual result, severity, and priority.</p>` },
    { h: "7.6 Test Tools", body: `
      <p><span class="k-badge">K1</span> Tool categories that support testing: test management, static analysis, test design, test data preparation, execution/automation, and performance/monitoring, among others.</p>
      <p><strong>Benefits of test automation:</strong> repeatability, speed, and objective results. <strong>Risks:</strong> unrealistic expectations, ongoing maintenance cost, a false sense of security, and tool lock-in.</p>` },
    { h: "7.7 Study Tips & Common Exam Pitfalls", body: `
      <p>Original study guidance for this module — not sourced from the official exam or the Self-Study Guide's own practice questions:</p>
      <ul>
        <li><strong>Study by K-level, not just by chapter.</strong> A K1 term just needs recognition; a K3 technique needs you to actually apply it to a scenario. Spend your limited time on K2/K3 material, since that's where most exam questions live.</li>
        <li><strong>Watch for "best" vs. "a" distractors.</strong> A common trap question gives four technically-true statements but only one is the <em>best</em> answer for the specific scenario described — read the scenario twice before picking.</li>
        <li><strong>Don't confuse similar-sounding terms.</strong> Error/Defect/Failure/Root Cause (7.1), Verification/Validation, and the four review types (7.3) are frequently tested precisely because they're easy to mix up under time pressure.</li>
        <li><strong>Practice the worked examples from Module 2</strong> (BVA, ECP, Decision Tables, State Transition) until you can produce the test cases from scratch, not just recognize a correct example — 7.4 draws directly on this.</li>
        <li><strong>Time management:</strong> with 40 questions in a fixed window, don't let one hard question eat disproportionate time — mark it, move on, and return if time allows.</li>
        <li><strong>The night before:</strong> skim the glossary (Module 7 terms are all in this app's Glossary), don't cram new material, and get sleep — recognition-heavy exams reward a rested memory more than a last-minute reading marathon.</li>
      </ul>` }
  ]
},
{
  id: "qa-toolbox",
  num: 8,
  title: "QA Toolbox & Career Growth",
  summary: "A practical reference for the working QA: real tools by category, the metrics that actually get discussed in standups, an interview cram sheet, and where to keep learning.",
  takeaway: "Knowing testing theory gets you in the door — knowing which tool to reach for, which metric a stakeholder actually cares about, and how to talk about your experience is what keeps you moving. This module is a living reference, not a course to \"finish.\"",
  lessons: [
    { h: "8.1 Test Automation Frameworks", body: `
      <p>No single framework wins every context — the right pick depends on the app under test, the team's language, and how much of the stack you need to cover.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Tool</th><th>Best for</th><th>Language(s)</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><strong>Selenium WebDriver</strong></td><td>Cross-browser web UI automation</td><td>Java, Python, C#, JS, Ruby</td><td>The longest-standing standard; large ecosystem, more boilerplate than newer tools.</td></tr>
          <tr><td><strong>Playwright</strong></td><td>Modern web UI automation</td><td>JS/TS, Python, Java, C#</td><td>Auto-waiting, built-in test runner, strong network interception — fast-growing default for new projects.</td></tr>
          <tr><td><strong>Cypress</strong></td><td>Fast, developer-friendly web testing</td><td>JS/TS</td><td>Runs inside the browser; excellent debugging experience, single-origin limitations historically.</td></tr>
          <tr><td><strong>Appium</strong></td><td>Mobile app automation (iOS/Android)</td><td>Java, Python, JS, etc.</td><td>Extends WebDriver protocol to native and hybrid mobile apps.</td></tr>
          <tr><td><strong>Robot Framework</strong></td><td>Keyword-driven testing for mixed technical/non-technical teams</td><td>Python-based, tabular syntax</td><td>Good fit when business analysts co-author test cases.</td></tr>
        </tbody>
      </table></div>` },
    { h: "8.2 Programming Languages for Test Automation", body: `
      <p>Which language to learn is usually decided by the team and stack you're joining, not the other way around — but here's how the common choices actually compare in practice.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Language</th><th>Where it's strong in QA</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><strong>Java</strong></td><td>Enterprise UI automation (Selenium), API testing (REST Assured)</td><td>The most common language in large, established automation teams; verbose but extremely well-tooled with mature frameworks (JUnit, TestNG).</td></tr>
          <tr><td><strong>Python</strong></td><td>API testing, general scripting, data-heavy test tooling, Robot Framework, Locust</td><td>Readable, fast to write, huge library ecosystem (pytest, requests) — often the easiest entry point for testers coming from a non-developer background.</td></tr>
          <tr><td><strong>JavaScript / TypeScript</strong></td><td>Modern web UI automation (Playwright, Cypress), k6 performance scripts</td><td>Natural fit when the app under test is itself a JS/TS web app — testers can read the app's own codebase and share tooling with developers.</td></tr>
          <tr><td><strong>C#</strong></td><td>.NET-stack UI and API automation (Selenium, Playwright, SpecFlow)</td><td>The default choice on teams building with .NET; strong tooling inside Visual Studio.</td></tr>
          <tr><td><strong>SQL</strong></td><td>Not an automation language, but essential everywhere</td><td>Needed constantly for data validation, test data setup, and verifying what actually landed in the database after a test.</td></tr>
          <tr><td><strong>Bash / Shell scripting</strong></td><td>CI/CD glue, environment setup, quick log/file inspection</td><td>Not used to write test logic, but shows up in almost every pipeline a tester touches.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Practical advice:</strong> match the language to the application under test and the team's existing stack — automation written in a language nobody else on the team knows becomes an orphaned, unmaintained suite within a year. If there's no constraint, Python and JavaScript/TypeScript are currently the fastest paths from zero to a working automation suite.</p>` },
    { h: "8.3 API & Performance Testing Tools", body: `
      <p><strong>API testing:</strong></p>
      <ul>
        <li><strong>Postman</strong> — the most common starting point for manual and semi-automated API exploration, collections, and environment-based testing.</li>
        <li><strong>REST Assured</strong> — a Java DSL for writing API tests as code, integrates naturally into JVM test suites and CI pipelines.</li>
        <li><strong>SoapUI</strong> — geared toward SOAP and legacy enterprise web services alongside REST.</li>
        <li><strong>cURL / HTTPie</strong> — lightweight command-line clients, useful for quick checks and reproducible bug reports.</li>
      </ul>
      <p><strong>Performance & load testing:</strong></p>
      <ul>
        <li><strong>JMeter</strong> — mature, GUI-driven, huge protocol support; can get resource-heavy at high load volumes.</li>
        <li><strong>k6</strong> — scripts load tests in JavaScript, CLI-first, plays well with CI/CD and cloud execution.</li>
        <li><strong>Gatling</strong> — Scala-based, known for detailed reports and efficient resource usage under high concurrency.</li>
        <li><strong>Locust</strong> — Python-based, define user behavior as code, scales out across worker processes.</li>
      </ul>` },
    { h: "8.4 Bug Tracking, CI/CD & Collaboration Tools", body: `
      <p><strong>Defect & test management:</strong> Jira (with Xray or Zephyr for test case management), Azure DevOps, TestRail, qTest — used to track defects through their lifecycle and link test cases to requirements and builds.</p>
      <p><strong>CI/CD (where automated tests actually run):</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI — QA's job here is usually wiring test suites into pipeline stages, gating merges on pass/fail, and keeping runs fast enough that people don't start skipping them.</p>
      <p><strong>Version control & review:</strong> Git-based workflows (GitHub/GitLab/Bitbucket) — testers increasingly review pull requests, not just post-hoc builds, as part of the shift-left move covered in Module 7.</p>` },
    { h: "8.5 AI in Software Testing", body: `
      <p>AI has moved from novelty to a normal part of the QA toolbox over the past few years — both as something testers use, and as a new kind of thing testers need to test.</p>
      <p><strong>Where AI is showing up as a testing tool:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Category</th><th>What it does</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><strong>Self-healing locators</strong></td><td>Automatically adjusts UI element selectors when the DOM changes, instead of a test breaking on every markup tweak.</td><td>Testim, Healenium, some Playwright/Selenium plugins.</td></tr>
          <tr><td><strong>Visual AI testing</strong></td><td>Compares screenshots using perceptual diffing rather than pixel-exact matching, so it flags real visual regressions but ignores rendering noise.</td><td>Applitools Eyes, Percy.</td></tr>
          <tr><td><strong>AI-assisted test generation</strong></td><td>Drafts test cases or automation scripts from requirements, user stories, or existing app exploration.</td><td>GitHub Copilot, Claude, ChatGPT, and purpose-built tools like Functionize and mabl.</td></tr>
          <tr><td><strong>Predictive test selection</strong></td><td>Uses historical failure data to run only the subset of tests most likely to catch a regression for a given change, cutting CI time.</td><td>Common in large-scale CI platforms; less common in small teams.</td></tr>
          <tr><td><strong>AI-assisted bug triage</strong></td><td>Clusters similar defect reports, suggests severity/priority, or flags likely duplicates.</td><td>Increasingly built into Jira and similar defect trackers.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Using AI-generated tests well:</strong> treat AI output as a first draft, not a finished test — a generated test still needs a human to confirm it's asserting the right thing, not just that it runs and passes. AI is good at producing plausible-looking test code quickly; it's not reliably good at knowing which behavior actually matters to the business, which is exactly the judgment call testing exists for.</p>
      <p><strong>Testing AI features themselves</strong> is now its own emerging QA skill — when the product under test includes an LLM-powered feature (a chatbot, a search assistant, a summarizer), traditional exact-match assertions stop working because outputs are non-deterministic. This calls for different techniques: evaluating output against a rubric rather than an exact string, checking for hallucination (confidently stated but false information), testing prompt injection and jailbreak resistance, and verifying the system degrades safely on ambiguous or adversarial input rather than producing something harmful or nonsensical.</p>
      <p><strong>Risks worth flagging to a team:</strong> feeding proprietary code or customer data into a third-party AI tool without checking its data-handling policy; over-trusting a green checkmark on an AI-generated test that never actually exercised the real bug path; and AI-authored automation becoming just as unmaintainable as human-authored automation if nobody understands what it does.</p>` },
    { h: "8.6 QA Metrics & KPIs That Matter", body: `
      <p>Metrics are only useful when tied to a decision. These are the ones that come up most often in real standups and retros:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Metric</th><th>What it tells you</th></tr></thead>
        <tbody>
          <tr><td><strong>Defect Density</strong></td><td>Defects found per unit of size (e.g. per 1,000 lines of code or per feature) — flags unusually risky modules.</td></tr>
          <tr><td><strong>Escape Rate / Escaped Defects</strong></td><td>Defects found in production vs. caught pre-release — the sharpest signal of whether your test strategy is actually working.</td></tr>
          <tr><td><strong>Test Coverage</strong></td><td>How much of the code or requirements are exercised by tests. High coverage alone doesn't guarantee quality — it says nothing about assertion strength.</td></tr>
          <tr><td><strong>Flakiness Rate</strong></td><td>Share of automated tests that fail intermittently with no code change — a rising rate erodes trust in the whole suite faster than almost anything else.</td></tr>
          <tr><td><strong>MTTD / MTTR</strong></td><td>Mean Time To Detect / Mean Time To Resolve a defect — how fast problems are found and fixed once they exist.</td></tr>
          <tr><td><strong>Lead Time for Changes</strong> &amp; <strong>Deployment Frequency</strong></td><td>Two of the four DORA metrics; QA cycle time is often the biggest lever on lead time.</td></tr>
          <tr><td><strong>Pass/Fail Rate Trend</strong></td><td>Tracked over builds, not as a single number — a slow downward trend in pass rate often predicts a release risk before anyone says so out loud.</td></tr>
        </tbody>
      </table></div>
      <p>A healthy metrics culture treats these as conversation-starters for investigation, not scores to game — optimizing a single metric in isolation (e.g. chasing 100% coverage) reliably produces bad incentives.</p>` },
    { h: "8.7 Interview Prep — Quick-Reference Cram Sheet", body: `
      <p>Common questions, answered the way a strong candidate would in one or two sentences:</p>
      <ul>
        <li><strong>"Walk me through your testing process for a new feature."</strong> Review requirements/acceptance criteria &rarr; identify risk areas &rarr; design test cases (mixing black-box techniques with exploratory charters) &rarr; execute &rarr; log defects with clear repro steps &rarr; retest fixes &rarr; regress.</li>
        <li><strong>"How do you prioritize what to test with limited time?"</strong> Risk-based prioritization — weigh likelihood x impact, focus on high-traffic paths and recent changes, use Pareto/defect-clustering intuition.</li>
        <li><strong>"Describe a bug you found that others missed."</strong> Keep a real example ready with: what led you to look there, the repro steps, the impact, and how it was ultimately fixed — interviewers are testing for specificity, not drama.</li>
        <li><strong>"Manual vs. automated — how do you decide?"</strong> Automate stable, repetitive, high-value regression paths; keep exploratory/UX/ambiguous-requirement work manual (see Modules 1 &amp; 5).</li>
        <li><strong>"What makes a good bug report?"</strong> A clear summary, exact steps to reproduce, expected vs. actual result, environment details, severity/priority, and supporting evidence (logs, screenshots).</li>
        <li><strong>"How do you handle disagreement with a developer about whether something is a bug?"</strong> Anchor back to the requirement/acceptance criteria or spec (the test basis); if it's genuinely ambiguous, escalate for a product decision rather than arguing from opinion.</li>
        <li><strong>"What's the difference between verification and validation?"</strong> Verification asks "are we building the product right?" (matches the spec); validation asks "are we building the right product?" (meets the actual user need).</li>
        <li><strong>"How would you test a feature powered by an LLM?"</strong> Trade exact-match assertions for rubric-based evaluation of output quality; specifically test for hallucination, check behavior on ambiguous/adversarial input, and verify the system fails safely rather than producing something harmful or nonsensical.</li>
      </ul>` },
    { h: "8.8 Career Resources — Certifications, Communities & Reading", body: `
      <p><strong>Certifications worth knowing about</strong> (beyond the ISTQB CTFL covered in Module 7):</p>
      <ul>
        <li><strong>ISTQB Advanced Level</strong> (Test Analyst, Test Manager, Technical Test Analyst) — the natural next step after Foundation Level.</li>
        <li><strong>ISTQB Agile Tester</strong> — extension certification focused on testing within Agile/Scrum teams.</li>
        <li><strong>Certified Software Tester (CSTE)</strong> — offered by QAI, an alternative to the ISTQB track with a similar breadth.</li>
        <li>Tool-specific credentials (e.g. vendor-issued Selenium/Playwright/Postman certificates) — useful for demonstrating hands-on depth alongside a foundational cert.</li>
      </ul>
      <p><strong>Communities worth following:</strong> Ministry of Testing (courses, articles, and a large practitioner community), the r/QualityAssurance and r/softwaretesting communities, local/regional meetup groups, and conference talks from sources like TestBash and STAREAST (many are posted free afterward).</p>
      <p><strong>Books worth reading beyond a certification syllabus:</strong> <em>Lessons Learned in Software Testing</em> (Kaner, Bach, Pettichord) for context-driven thinking; <em>Explore It!</em> (Elisabeth Hendrickson) for a practical exploratory testing playbook; <em>Agile Testing</em> and <em>More Agile Testing</em> (Crispin &amp; Gregory) for testing inside Agile teams.</p>
      <p>The single highest-leverage habit for staying sharp: keep a running personal log of interesting bugs you find and how you found them — it becomes both an interview-prep resource and a pattern-recognition tool over time.</p>` },
    { h: "8.9 Accessibility Testing Tools & Practices", body: `
      <p>Accessibility testing verifies a product can be used by people with disabilities — visual, auditory, motor, and cognitive — and in most regulated markets it's also a legal requirement, not just a nice-to-have.</p>
      <p><strong>WCAG (Web Content Accessibility Guidelines)</strong> is the standard reference, organized around four principles — content must be <strong>Perceivable, Operable, Understandable, and Robust</strong> (often abbreviated POUR) — with three conformance levels (A, AA, AAA); most organizations target <strong>AA</strong>.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Tool</th><th>What it checks</th></tr></thead>
        <tbody>
          <tr><td><strong>axe DevTools</strong></td><td>Automated WCAG rule-checking as a browser extension or CI-integrated library; catches missing alt text, poor color contrast, missing form labels, etc.</td></tr>
          <tr><td><strong>Lighthouse</strong></td><td>Built into Chrome DevTools; gives an accessibility score alongside performance/SEO, good for a quick baseline check.</td></tr>
          <tr><td><strong>Screen readers</strong> (NVDA, JAWS, VoiceOver)</td><td>Manual testing tool — navigating the app using only a screen reader surfaces problems automated scanners miss entirely, like illogical reading order or unlabeled interactive elements.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Automated scanners catch roughly 30-40% of accessibility issues</strong> — they're excellent at objective checks (contrast ratios, missing attributes) but can't judge whether alt text is actually meaningful or whether a keyboard-only user can complete a full workflow without a mouse. A real accessibility test pass always includes manual keyboard-only navigation and at least spot-checking with a screen reader.</p>` }
  ]
},
{
  id: "test-architecture",
  num: 9,
  title: "QA & Test Architecture",
  summary: "The design decisions behind a scalable QA practice: how automation frameworks, test environments, CI/CD pipelines, and distributed-systems testing are actually architected.",
  takeaway: "Good testing at scale isn't just knowing techniques — it's architectural: how a framework is structured so 200 tests don't become 200 places to fix the same broken locator, how environments and data are managed so tests are reproducible, how a pipeline is staged so feedback arrives fast, and how testing adapts once a system is no longer one deployable unit.",
  lessons: [
    { h: "9.1 Test Automation Framework Architecture", body: `
      <p>How an automation suite is structured determines whether it stays maintainable at 50 tests or collapses under its own weight at 500. Two patterns dominate:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Pattern</th><th>How it works</th><th>Trade-off</th></tr></thead>
        <tbody>
          <tr><td><strong>Page Object Model (POM)</strong></td><td>Each UI page/component gets a class that encapsulates its locators and the actions available on it; tests call methods on page objects instead of touching locators directly.</td><td>Simple and widely understood, but can grow unwieldy on large apps with many page objects and shared components.</td></tr>
          <tr><td><strong>Screenplay Pattern</strong></td><td>Models the test as an <strong>Actor</strong> who has <strong>Abilities</strong> (e.g. browse the web), performs <strong>Tasks</strong> (composed of smaller interactions), and asks <strong>Questions</strong> (assertions about state) — composition over inheritance.</td><td>More scalable and reusable for large, complex suites; steeper learning curve and more upfront design than POM.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Layered ("hybrid") architecture</strong> separates a suite into distinct layers regardless of which UI pattern is used: a <strong>test layer</strong> (readable test cases, the "what"), a <strong>logic/actions layer</strong> (page objects or screenplay tasks, the "how"), and a <strong>data layer</strong> (test data, fixtures, config) — kept independent so a locator change doesn't ripple into test logic, and test logic doesn't ripple into the tests themselves.</p>
      <p><strong>Data-driven vs. keyword-driven design:</strong> data-driven testing runs the same test logic against many input/expected-output pairs pulled from an external source (CSV, JSON, a spreadsheet); keyword-driven testing goes further, expressing whole test steps as keywords (e.g. "Login", "AddToCart") in a table so non-programmers can compose new tests from existing building blocks (Robot Framework, covered in Module 8, is built around this idea).</p>` },
    { h: "9.2 Test Environment Architecture & Test Data Management", body: `
      <p><strong>The environment pipeline:</strong> most orgs promote a build through a sequence of environments, each with a different purpose:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Environment</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><strong>Dev</strong></td><td>Developers integrate and sanity-check their own changes; unstable by design.</td></tr>
          <tr><td><strong>QA / Test</strong></td><td>Dedicated to structured test execution — manual and automated — against a relatively stable build.</td></tr>
          <tr><td><strong>Staging</strong></td><td>Mirrors production configuration as closely as possible; the last check before release, often used for final sign-off and performance testing.</td></tr>
          <tr><td><strong>Production</strong></td><td>Live traffic. Shift-right practices (see 9.3) extend testing into this environment deliberately and safely.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Ephemeral test environments</strong> — spun up on demand per pull request or per test run and torn down afterward — avoid the classic problem of a single shared QA environment where one team's half-finished change blocks everyone else's testing. Containerization (Docker) and orchestration (Kubernetes) are what make this practical: a full environment definition becomes a reproducible artifact rather than a hand-configured machine someone has to babysit.</p>
      <p><strong>Service virtualization</strong> stands in for a real dependency (a third-party API, a not-yet-built downstream service, a system that's expensive or risky to call in a test) with a simulated version that returns realistic canned or rule-based responses — tools like WireMock and Mountebank do this. It's what makes reliable, fast tests possible for a system with many external dependencies.</p>
      <p><strong>Test data management:</strong> synthetic data generation (fabricating realistic-looking data rather than using real records), data masking/anonymization when real production data must be used (to protect PII), and self-cleaning tests (each test creates and tears down its own data rather than depending on shared fixtures) are the three most common strategies for keeping test data reliable and safe.</p>` },
    { h: "9.3 CI/CD & Pipeline Architecture for QA", body: `
      <p>A typical pipeline stages tests from fast/cheap to slow/expensive, so a broken build fails fast instead of burning an hour before anyone finds out:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Stage</th><th>What runs</th><th>Typical duration</th></tr></thead>
        <tbody>
          <tr><td>1. Build</td><td>Compile, lint, static analysis</td><td>Seconds to a couple minutes</td></tr>
          <tr><td>2. Unit tests</td><td>Fast, isolated, no external dependencies</td><td>Seconds to minutes</td></tr>
          <tr><td>3. Integration / API tests</td><td>Real or virtualized service dependencies</td><td>Minutes</td></tr>
          <tr><td>4. UI / E2E tests</td><td>Full-stack browser or app tests (often on a subset of critical paths, not everything)</td><td>Minutes to tens of minutes</td></tr>
          <tr><td>5. Performance / security scans</td><td>Load tests, SAST/DAST scans — often run less frequently than every commit</td><td>Minutes to longer</td></tr>
          <tr><td>6. Deploy</td><td>Promotion to staging/production, often gated by all prior stages passing</td><td>Minutes</td></tr>
        </tbody>
      </table></div>
      <p><strong>Test parallelization and sharding</strong> — splitting a test suite across multiple workers/machines so it runs concurrently instead of sequentially — is usually the single biggest lever for keeping a growing suite fast enough that people don't start skipping it.</p>
      <p><strong>Quality gates</strong> are automated checks that block a merge or deployment when not satisfied: a minimum pass rate, a coverage threshold, zero critical security findings, or a performance budget. The gate should be strict enough to catch real regressions but not so strict (or so flaky) that people start routinely overriding it — an override that becomes routine is a sign the gate itself needs fixing.</p>
      <p><strong>Shift-left vs. shift-right:</strong> shift-left (covered in Module 7) moves testing earlier — into design and code review. <strong>Shift-right</strong> is the complementary idea: deliberately extending testing into production via canary releases (rolling a change out to a small percentage of traffic first), feature flags (shipping code dark and enabling it gradually), and synthetic monitoring (scripted checks that continuously probe production like a real user). Mature QA practices use both ends, not just one.</p>` },
    { h: "9.4 Testing Distributed Systems & Microservices", body: `
      <p>Once a system is split into many independently-deployed services, traditional full-stack end-to-end testing stops scaling — the number of service-version combinations grows combinatorially, and spinning up "the whole system" for every test run becomes slow, flaky, and expensive.</p>
      <p><strong>Contract testing</strong> solves this by testing each service pair's contract in isolation rather than the whole chain together. In <strong>consumer-driven contract testing</strong> (the model behind the Pact framework), the consumer of a service defines the interactions it expects; the provider verifies it satisfies that contract independently, with no need to stand up the consumer at all. This catches breaking API changes without a full integration environment.</p>
      <p><strong>Service mesh testing</strong> considers the network layer itself — routing, retries, timeouts, mutual TLS, traffic shaping — that infrastructure like Istio or Linkerd manages between services. Testing here often means verifying the mesh's routing/policy configuration behaves as intended (e.g. a canary rule really does send 5% of traffic to the new version), not just testing application logic.</p>
      <p><strong>Chaos engineering</strong> deliberately injects failure — killing an instance, adding network latency, exhausting a resource — into a system (often production, under controlled conditions) to verify it degrades gracefully instead of cascading into a full outage. Tools like Chaos Monkey (Netflix) and Gremlin popularized this as a discipline rather than an accident.</p>
      <p><strong>Observability-driven testing</strong> uses the "three pillars" — logs, metrics, and traces — to validate system behavior continuously, including in production where you can't pre-script every scenario. Instead of only asking "did this test pass," it asks "does what we observe in real traffic match what we expect" — closing the loop that shift-right testing opens.</p>` },
    { h: "9.5 Choosing the Right Architecture for Your Context", body: `
      <p>None of the above is a checklist to fully adopt — it's a menu to choose from based on context. A five-person startup shipping one monolith weekly needs almost none of the microservices-testing machinery in 9.4; a 200-engineer org running 40 services needs most of it.</p>
      <p><strong>Rough decision factors:</strong> team size and release cadence (faster releases push toward more automation and shift-right practices), system complexity and number of independently-deployed services (drives the need for contract testing and service mesh awareness), and regulatory/compliance constraints (can push toward stricter quality gates and more conservative environment promotion).</p>
      <p><strong>Common anti-patterns worth naming:</strong></p>
      <ul>
        <li><strong>The "ice-cream cone"</strong> — the inverse of the healthy Test Pyramid (Module 7): a suite top-heavy with slow, brittle UI/E2E tests and few fast unit tests, so the whole suite is slow, flaky, and expensive to maintain.</li>
        <li><strong>Shared mutable test environments</strong> — one QA environment everyone deploys to and mutates data in, which produces flaky, hard-to-reproduce failures that have nothing to do with the code being tested.</li>
        <li><strong>No test data strategy</strong> — tests that depend on hand-maintained, undocumented fixture data nobody fully understands anymore, which breaks silently as the schema evolves.</li>
      </ul>
      <p>The throughline across this whole module: architecture decisions in QA are trade-offs between speed, reliability, and maintenance cost — not a search for one universally "correct" setup.</p>` },
    { h: "9.6 Test Reporting & Observability Architecture", body: `
      <p>A test suite that runs but produces reports nobody reads or trusts delivers little value — reporting infrastructure is as much an architectural decision as the tests themselves.</p>
      <p><strong>Test reporting tools:</strong> Allure and ReportPortal are common choices for turning raw test-runner output into readable, historical dashboards — showing pass/fail trends over time, not just the latest run, and letting a failure be traced back to a specific commit or environment.</p>
      <p><strong>What good test reporting architecture provides:</strong></p>
      <ul>
        <li><strong>Historical trend view</strong> — is the pass rate trending down over the last 10 builds, not just "did this one build pass."</li>
        <li><strong>Flaky test detection</strong> — automatically flagging tests that fail intermittently with no code change (see Flakiness Rate, Module 8), so they can be quarantined or fixed rather than silently eroding trust in the suite.</li>
        <li><strong>Fast failure triage</strong> — linking a failure directly to logs, screenshots, or a video recording from that specific run, so a developer doesn't have to reproduce it locally just to see what happened.</li>
        <li><strong>Ownership and routing</strong> — failures automatically notify the team that owns the affected area, rather than landing in a channel nobody monitors.</li>
      </ul>
      <p>This closes the loop with 9.3 and 9.4: a pipeline can be perfectly staged and a system perfectly observable in production, but if the test results themselves aren't reported in a way people actually act on, none of that architecture pays off.</p>` }
  ]
},
{
  id: "security-testing",
  num: 10,
  title: "Security Testing & AppSec",
  summary: "Thinking like an attacker: the OWASP Top 10, the tools that find vulnerabilities before attackers do, and how security gets built into the SDLC rather than bolted on at the end.",
  takeaway: "Security testing isn't a separate discipline bolted onto QA at the end — it's the same testing mindset (find where the system breaks) pointed at a different question: not \"does this work as intended,\" but \"can this be made to do something it was never intended to do.\" The earlier that question gets asked, the cheaper the answer.",
  lessons: [
    { h: "10.1 Security Testing Fundamentals & the Attacker Mindset", body: `
      <p>Functional testing asks "does the happy path work, and are the known edge cases handled?" <strong>Security testing asks a fundamentally different question: "what happens when someone deliberately tries to break the rules?"</strong> A login form that correctly rejects a wrong password is functionally correct — but security testing also asks: what if the password field receives 50,000 characters, or a snippet of SQL, or the request bypasses the form entirely and hits the API directly?</p>
      <p><strong>Core security properties testers should keep in mind (the "CIA triad" plus two):</strong></p>
      <ul>
        <li><strong>Confidentiality</strong> — only authorized parties can read data.</li>
        <li><strong>Integrity</strong> — data can't be modified by unauthorized parties, and tampering is detectable.</li>
        <li><strong>Availability</strong> — the system stays usable for legitimate users (resisting denial-of-service).</li>
        <li><strong>Authentication</strong> — the system correctly verifies who someone claims to be.</li>
        <li><strong>Authorization</strong> — the system correctly restricts what an authenticated user is allowed to do.</li>
      </ul>
      <p><strong>Least privilege</strong> — every user, service, and process should have only the minimum access it needs to do its job, nothing more — is the single principle that underlies most of the vulnerability classes in 10.2 and 10.3: almost every serious breach involves something having more access than it needed.</p>` },
    { h: "10.2 OWASP Top 10 Deep Dive", body: `
      <p>The <strong>OWASP Top 10</strong> is the most widely referenced list of critical web application security risks, published by the Open Worldwide Application Security Project and updated periodically based on real-world data. It's the standard starting vocabulary for security-aware testing:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Risk</th><th>What it means</th></tr></thead>
        <tbody>
          <tr><td><strong>Broken Access Control</strong></td><td>Users can act outside their intended permissions — e.g. changing an ID in a URL to view another user's data.</td></tr>
          <tr><td><strong>Cryptographic Failures</strong></td><td>Sensitive data exposed due to weak, missing, or misconfigured encryption (in transit or at rest).</td></tr>
          <tr><td><strong>Injection</strong></td><td>Untrusted input is interpreted as code/commands by an interpreter — SQL Injection, Command Injection, etc. (see 10.3).</td></tr>
          <tr><td><strong>Insecure Design</strong></td><td>A flaw in the design itself, not just the implementation — no amount of secure coding fixes a fundamentally unsafe design.</td></tr>
          <tr><td><strong>Security Misconfiguration</strong></td><td>Default credentials, unnecessary features enabled, verbose error messages leaking internals, missing security headers.</td></tr>
          <tr><td><strong>Vulnerable & Outdated Components</strong></td><td>Using libraries/frameworks with known, unpatched vulnerabilities — see dependency scanning in 10.4.</td></tr>
          <tr><td><strong>Identification & Authentication Failures</strong></td><td>Weak password policies, session fixation, missing multi-factor authentication, predictable session tokens.</td></tr>
          <tr><td><strong>Software & Data Integrity Failures</strong></td><td>Trusting code/data (e.g. auto-updates, CI/CD pipelines, plugins) without verifying its integrity.</td></tr>
          <tr><td><strong>Security Logging & Monitoring Failures</strong></td><td>Attacks go undetected because nothing is logged, or logs aren't monitored/alerted on.</td></tr>
          <tr><td><strong>Server-Side Request Forgery (SSRF)</strong></td><td>An attacker tricks the server into making requests to unintended internal or external destinations.</td></tr>
        </tbody>
      </table></div>
      <p>Testing against this list doesn't mean deep penetration testing for every risk — even manual testers can meaningfully check for misconfigurations, weak auth flows, and overly verbose error messages without specialized security tooling.</p>` },
    { h: "10.3 Common Vulnerability Classes", body: `
      <p>A closer look at the vulnerability classes testers encounter most often in practice:</p>
      <p><strong>SQL Injection (SQLi)</strong> — untrusted input is concatenated directly into a SQL query instead of being properly parameterized, letting an attacker alter the query's logic. Classic test: entering <code>' OR '1'='1</code> into a login field to see if it bypasses authentication. Fix: parameterized queries/prepared statements, never string-concatenated SQL.</p>
      <p><strong>Cross-Site Scripting (XSS)</strong> — untrusted input is rendered as executable script in another user's browser. <strong>Stored XSS</strong> persists the malicious script (e.g. in a comment field, later rendered to other users); <strong>Reflected XSS</strong> bounces it back immediately in a response (e.g. via a crafted URL); <strong>DOM-based XSS</strong> happens entirely client-side via unsafe JavaScript DOM manipulation. Test by submitting a harmless script payload (e.g. <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>) into every input field and checking if it executes instead of displaying as text.</p>
      <p><strong>Cross-Site Request Forgery (CSRF)</strong> — a malicious site tricks a logged-in user's browser into submitting an unwanted request to a target site where they're authenticated (e.g. an invisible auto-submitting form that changes the victim's email). Defenses: CSRF tokens, SameSite cookie attributes.</p>
      <p><strong>Broken Access Control / IDOR (Insecure Direct Object Reference)</strong> — the system fails to verify that the current user is actually authorized to access the specific resource they're requesting, often exploited simply by changing an ID in a URL or API call (e.g. <code>/api/orders/1001</code> → <code>/api/orders/1002</code>) and seeing if another user's data comes back.</p>
      <p><strong>Authentication/Authorization flaws</strong> — weak password reset flows, session tokens that don't expire, missing rate-limiting on login (allowing brute-force), and privilege escalation (a regular user gaining admin-level actions) all fall here — see 10.6 for how threat modeling helps catch these before release.</p>` },
    { h: "10.4 Security Testing Tools & Techniques", body: `
      <p>Security testing tooling is usually described by <strong>when</strong> it runs and <strong>what</strong> it can see:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Approach</th><th>How it works</th><th>Example tools</th></tr></thead>
        <tbody>
          <tr><td><strong>SAST</strong> (Static Application Security Testing)</td><td>Scans source code without running it, looking for known-dangerous patterns (e.g. string-concatenated SQL, hardcoded secrets). Runs early — can be part of every commit.</td><td>SonarQube, Semgrep, Checkmarx</td></tr>
          <tr><td><strong>DAST</strong> (Dynamic Application Security Testing)</td><td>Attacks a running application from the outside, like a real attacker would, with no knowledge of the source code. Catches runtime/configuration issues SAST can't see.</td><td>OWASP ZAP, Burp Suite</td></tr>
          <tr><td><strong>IAST</strong> (Interactive Application Security Testing)</td><td>Combines both — an agent instrumented inside a running application observes real traffic/execution to find vulnerabilities with more context and fewer false positives than DAST alone.</td><td>Contrast Security, Seeker</td></tr>
          <tr><td><strong>SCA</strong> (Software Composition Analysis / dependency scanning)</td><td>Scans third-party libraries and dependencies for known CVEs (published vulnerabilities), addressing the "Vulnerable & Outdated Components" risk directly.</td><td>Snyk, Dependabot, OWASP Dependency-Check</td></tr>
        </tbody>
      </table></div>
      <p>A mature AppSec practice layers these rather than picking one: SAST and SCA run on every commit (fast, cheap, catches known patterns), while DAST runs less frequently against a deployed environment (slower, but catches what static analysis structurally can't see).</p>` },
    { h: "10.5 Penetration Testing Basics", body: `
      <p><strong>Penetration Testing</strong> ("pen testing") is authorized, simulated attacking of a system to find exploitable vulnerabilities before real attackers do — distinct from the automated scanning in 10.4 in that it involves a skilled human actively chaining weaknesses together the way a real adversary would.</p>
      <p><strong>Typical phases:</strong></p>
      <ol>
        <li><strong>Reconnaissance</strong> — gathering information about the target (technologies used, exposed endpoints, employee/organizational info).</li>
        <li><strong>Scanning</strong> — identifying live hosts, open ports, and services, often using automated tools as a starting point.</li>
        <li><strong>Exploitation</strong> — actively attempting to exploit discovered weaknesses to gain access or extract data.</li>
        <li><strong>Post-exploitation</strong> — assessing how far an attacker could go from that initial foothold (privilege escalation, lateral movement).</li>
        <li><strong>Reporting</strong> — documenting findings with severity, evidence, and remediation guidance — the actual deliverable that makes a pen test valuable.</li>
      </ol>
      <p><strong>Testing types by knowledge level</strong> mirror the black/white/grey-box distinction from Module 1: <strong>black-box</strong> pen testing (no internal knowledge, like an external attacker), <strong>white-box</strong> (full access to code/architecture, deepest coverage), and <strong>grey-box</strong> (partial knowledge, e.g. a valid low-privilege account — often the most realistic simulation of an insider threat or a compromised account).</p>
      <p><strong>Scope and authorization matter enormously</strong> — a pen test always operates under a signed agreement defining exactly what's in scope and explicit written permission; without that, the exact same actions are simply illegal, unauthorized hacking.</p>` },
    { h: "10.6 AppSec in the SDLC: Threat Modeling & Secure Code Review", body: `
      <p><strong>Threat modeling</strong> is a structured exercise, done during design (before code is written), to identify what could go wrong and how to defend against it. A common framework is <strong>STRIDE</strong>:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Letter</th><th>Threat category</th></tr></thead>
        <tbody>
          <tr><td><strong>S</strong></td><td>Spoofing — pretending to be someone/something else</td></tr>
          <tr><td><strong>T</strong></td><td>Tampering — modifying data or code without authorization</td></tr>
          <tr><td><strong>R</strong></td><td>Repudiation — denying having performed an action, with no way to prove otherwise</td></tr>
          <tr><td><strong>I</strong></td><td>Information Disclosure — exposing information to those not authorized to see it</td></tr>
          <tr><td><strong>D</strong></td><td>Denial of Service — degrading or denying legitimate access</td></tr>
          <tr><td><strong>E</strong></td><td>Elevation of Privilege — gaining capabilities without proper authorization</td></tr>
        </tbody>
      </table></div>
      <p>Running through STRIDE against a system's data flow diagram — for each component and data flow, asking "could this be spoofed / tampered with / etc." — catches design-level security gaps far cheaper than finding them after launch (this is the security-specific version of Early Testing Saves Time and Cost, Module 7).</p>
      <p><strong>Secure code review</strong> extends ordinary code review with a security lens: checking for hardcoded secrets, unparameterized queries, missing input validation, and unsafe deserialization of untrusted data. It works best paired with SAST tooling (10.4) — automation catches the mechanical patterns, human review catches the logic-level and design-level issues automation structurally can't reason about.</p>
      <p>This is what "shift-left security" means concretely: threat modeling at design time and secure code review at implementation time, rather than security testing only appearing right before release.</p>` },
    { h: "10.7 Security in CI/CD & Compliance Basics", body: `
      <p><strong>Security as a pipeline gate:</strong> extending the quality gates from Module 9 with security-specific checks — SAST/SCA scans blocking a merge on new critical findings, secret-scanning preventing credentials from ever being committed, and container image scanning before a deploy. The goal is the same as any shift-left practice: catch it in minutes during CI, not in an incident response call after launch.</p>
      <p><strong>Zero trust</strong> is an architectural principle relevant to how systems are tested: never assume a request is safe just because it came from inside the network perimeter — every request gets authenticated and authorized on its own merits, regardless of source. This changes what "internal" testing needs to check: an internal service calling another internal service still needs to prove who it is.</p>
      <p><strong>Compliance-adjacent testing concerns</strong> (not a substitute for a real compliance audit, but relevant to what a QA team gets asked to verify):</p>
      <ul>
        <li><strong>SOC 2</strong> — commonly requires evidence of access controls, change management, and monitoring; QA teams are often asked to demonstrate test/deploy processes have appropriate approvals and audit trails.</li>
        <li><strong>GDPR-adjacent concerns</strong> — testing data deletion actually works end-to-end (a "delete my account" request should really delete the data, including backups/replicas on their retention schedule), and that PII is masked/anonymized in non-production test environments (tying back to Test Data Management, Module 9).</li>
      </ul>
      <p>None of this makes a QA team responsible for full regulatory compliance — but knowing these concerns exist is what lets a tester recognize when a finding ("test data contains real customer emails") is actually a compliance issue, not just a data-hygiene nitpick.</p>` }
  ]
},
{
  id: "performance-ux-automation",
  num: 11,
  title: "Performance, UI/UX & Automation Testing in Practice",
  summary: "Putting the toolbox to work: running a load test, evaluating usability with real heuristics, writing your first automated test, and knowing which additional tools fill the gaps.",
  takeaway: "Every technique and tool covered so far comes together here: this module is about actually running a load test, actually evaluating a UI against a usability heuristic, and actually writing an automated test — not just recognizing the vocabulary for them.",
  lessons: [
    { h: "11.1 Load & Performance Testing in Practice", body: `
      <p>Performance testing has several distinct flavors, and picking the wrong one for your goal wastes a test cycle:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Type</th><th>What it checks</th><th>How it's run</th></tr></thead>
        <tbody>
          <tr><td><strong>Load Testing</strong></td><td>Behavior under expected, realistic load</td><td>Ramp up to the expected concurrent-user count and hold steady, measuring response time and error rate.</td></tr>
          <tr><td><strong>Stress Testing</strong></td><td>Where the system actually breaks</td><td>Keep increasing load past expected levels until failure, to find the ceiling and how gracefully (or not) it degrades.</td></tr>
          <tr><td><strong>Spike Testing</strong></td><td>Sudden, extreme traffic bursts</td><td>Jump load abruptly (e.g. 100 to 5,000 users in seconds) — simulates a marketing campaign or viral moment.</td></tr>
          <tr><td><strong>Soak Testing</strong></td><td>Behavior over a long, sustained duration</td><td>Run moderate load for many hours or days, watching for memory leaks and slow resource exhaustion that short tests never surface.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Metrics that matter:</strong> average response time is misleading on its own — a system averaging 200ms could still leave 5% of users waiting 4 seconds. That's why performance results are usually reported as <strong>percentiles</strong>: <strong>p95</strong> (95% of requests were faster than this) and <strong>p99</strong> (99% were) reveal the tail-end experience average alone hides. <strong>Throughput</strong> (requests handled per second) and error rate under load round out the core metric set.</p>
      <p><strong>A basic load test workflow:</strong> define realistic user scenarios (not just hitting one endpoint in a loop) → set a target load profile (ramp-up pattern, peak concurrency, duration) → run it against a non-production environment sized like production → capture p95/p99 response time, throughput, and error rate → compare against the agreed threshold (see Module 3's non-functional testing lesson) → report and re-test after any fix.</p>` },
    { h: "11.2 UI/UX Testing Methodology", body: `
      <p>UI testing checks that the interface renders and behaves correctly (buttons work, layouts don't break); <strong>UX testing goes further and asks whether the experience actually serves the user well</strong> — those are different questions requiring different methods.</p>
      <p><strong>Heuristic evaluation</strong> — assessing a UI against a known set of usability principles without needing real users. Jakob Nielsen's 10 usability heuristics are the most widely used starting point, including: visibility of system status, match between the system and the real world, user control and freedom, consistency and standards, error prevention, and recognition rather than recall. A tester can run a heuristic pass alone in an afternoon and catch a meaningful share of usability issues before ever recruiting a user.</p>
      <p><strong>Usability testing with real users</strong> — task-based sessions ("find and buy a blue medium t-shirt") where you observe, not guide; a <strong>think-aloud protocol</strong> (asking the participant to narrate their thoughts as they go) surfaces confusion that silent observation alone misses. Even 5 users in a session typically surface the majority of a design's major usability problems — you don't need a huge sample to get real signal.</p>
      <p><strong>A/B testing</strong> — running two variants of a design with real production traffic split between them and comparing a target metric (conversion rate, task completion, time-on-task). Unlike heuristic evaluation or moderated usability sessions, A/B testing measures actual behavior at scale rather than observed or self-reported behavior in a session — the two approaches are complementary, not substitutes for each other.</p>
      <p><strong>Visual regression testing</strong> — automatically comparing screenshots of the UI before and after a change to catch unintended visual breakage (see Applitools/Percy, Module 8) — this is the automatable slice of UI testing; the judgment-based heuristic and real-user work above is not something automation replaces.</p>` },
    { h: "11.3 Hands-On Test Automation: Writing Your First Automated Test", body: `
      <p>Moving from theory (Module 9's framework architecture) to practice — what an actual automated UI test looks like and the habits that keep it reliable:</p>
      <p><strong>A minimal Playwright test</strong> (conceptually — syntax varies by language binding):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Step</th><th>What it does</th></tr></thead>
        <tbody>
          <tr><td>1. Navigate</td><td>Open the target URL in a fresh browser context.</td></tr>
          <tr><td>2. Locate</td><td>Find the element to interact with — prefer a role or test-id locator over a brittle CSS selector tied to styling.</td></tr>
          <tr><td>3. Act</td><td>Click, type, or otherwise interact with the located element.</td></tr>
          <tr><td>4. Assert</td><td>Check the resulting state matches what's expected (text appeared, URL changed, element became visible).</td></tr>
        </tbody>
      </table></div>
      <p><strong>What separates a reliable automated test from a flaky one:</strong></p>
      <ul>
        <li><strong>Prefer auto-waiting over fixed sleeps</strong> — a hardcoded <code>wait(2000)</code> is either too short (still flaky) or too long (slows the whole suite); modern tools (Playwright, Cypress) auto-wait for an element to be actionable instead.</li>
        <li><strong>Locator stability</strong> — a locator tied to a dedicated <code>data-testid</code> attribute survives a redesign; one tied to a CSS class used for styling breaks the moment a designer changes that class.</li>
        <li><strong>Test independence</strong> — each test should set up its own state and not depend on another test having run first (or in a specific order) — order-dependent tests are a common, hard-to-diagnose source of "works alone, fails in the suite."</li>
        <li><strong>One clear assertion focus per test</strong> — a test that checks five unrelated things fails ambiguously; smaller, focused tests fail with a clear, specific signal.</li>
      </ul>
      <p>This is where Module 9.1's Page Object Model / Screenplay Pattern earns its keep: the locators and actions above live in one place, so a redesign means updating one page object, not fifty individual tests.</p>` },
    { h: "11.4 Additional Tools Worth Knowing", body: `
      <p>Rounding out Module 8's toolbox with tools specific to performance, cross-browser/device coverage, and low-code automation:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Category</th><th>Tools</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><strong>Cross-browser/device cloud testing</strong></td><td>BrowserStack, Sauce Labs, LambdaTest</td><td>Run the same test suite against real browsers/OS/device combinations in the cloud, without maintaining a physical device lab.</td></tr>
          <tr><td><strong>Low-code / record-and-playback automation</strong></td><td>Katalon Studio, TestCafe, Ghost Inspector</td><td>Lower the barrier to entry for teams without dedicated automation engineers — trade-off is typically less flexibility than code-first frameworks for complex logic.</td></tr>
          <tr><td><strong>Visual/perceptual diffing</strong></td><td>Applitools Eyes, Percy, Chromatic</td><td>Covered in Module 8 — worth re-noting here alongside the other UI-testing tools since visual regression is part of a complete UI test strategy.</td></tr>
          <tr><td><strong>Mobile-specific testing</strong></td><td>Appium (Module 8), Firebase Test Lab, Xcode/Android Studio simulators</td><td>Real-device cloud farms (via BrowserStack/Sauce Labs) catch device-specific rendering and performance issues simulators can miss.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Continuous testing</strong> — the practice of running automated tests continuously throughout the pipeline (not just before release) so feedback on every change arrives within minutes — ties this module directly back to Module 9.3's pipeline architecture: none of these tools deliver value sitting outside a pipeline that actually runs them on every change.</p>` }
  ]
}
];
