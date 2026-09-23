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
      <p>A report missing repro steps is the single most common reason a bug gets bounced back to the reporter instead of fixed.</p>` },
    { h: "Why Testing Exists: Error → Defect → Failure", body: `
      <p>Testing exists to:</p>
      <ul>
        <li><strong>Reduce risk</strong> by giving stakeholders actionable information about quality before release.</li>
        <li><strong>Verify requirements</strong>: the product behaves as specified and expected.</li>
        <li><strong>Prevent defects</strong>: early reviews and tests catch issues before they're coded in.</li>
        <li><strong>Build confidence</strong>, with one caveat (Dijkstra): testing shows the <strong>presence</strong> of defects, never their <strong>absence</strong>.</li>
      </ul>
      <p>The later a defect is found, the more it costs. One caught in requirements can be around <strong>100× cheaper</strong> to fix than one found in production, which is the whole argument for "shift-left".</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>Error</strong> (mistake)</td><td>A human mistake in code, a spec or a decision</td></tr>
          <tr><td><strong>Defect</strong> (bug, fault)</td><td>The flaw in code or documentation that the error caused</td></tr>
          <tr><td><strong>Failure</strong></td><td>The incorrect behavior actually observed when the defect executes</td></tr>
        </tbody>
      </table></div>
      <p><em>Example:</em> a developer misreads "free shipping over $50" as "$50 or more" (error), writes <code>&gt;=</code> instead of <code>&gt;</code> (defect), and a $50.00 order ships free (failure). A defect doesn't always cause a failure, because that code path may never run, and one failure can have several defects behind it.</p>
      <p><strong>Testing vs debugging vs checking:</strong></p>
      <ul>
        <li><strong>Testing</strong>: questioning the product to find information. It's a human, thinking activity.</li>
        <li><strong>Debugging</strong>: locating the root cause of a failure and fixing it. That's a developer activity.</li>
        <li><strong>Checking</strong>: algorithmic verification of specific facts. Most "automation" is checking.</li>
      </ul>` },
    { h: "Test Levels & Test Types", body: `
      <p><strong>Test levels</strong> describe <em>where</em> testing happens:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Level</th><th>Scope</th><th>Typical owner</th></tr></thead>
        <tbody>
          <tr><td>Unit / Component</td><td>A single code unit in isolation</td><td>Developers</td></tr>
          <tr><td>Integration</td><td>Interaction between components and interfaces</td><td>Developers + QA</td></tr>
          <tr><td>System</td><td>The whole system against its requirements, end to end</td><td>QA</td></tr>
          <tr><td>Acceptance (UAT, alpha, beta)</td><td>Validation by users or the customer</td><td>Users, product owner, with QA support</td></tr>
        </tbody>
      </table></div>
      <p><strong>Integration strategies:</strong> <em>incremental</em> (top-down or bottom-up, adding pieces one at a time) versus <em>big-bang</em> (everything at once). Big-bang is risky because when something fails, it's hard to tell which piece caused it.</p>
      <p><strong>Test types</strong> describe <em>what</em> you're testing for:</p>
      <ul>
        <li><strong>Functional</strong>: what the system does.</li>
        <li><strong>Non-functional</strong>: how well it does it (performance, security, usability, reliability, portability).</li>
        <li><strong>Structural (white-box)</strong>: the internal structure and code.</li>
        <li><strong>Change-related</strong>: <strong>confirmation testing</strong> (retest that a fixed defect is really fixed) and <strong>regression testing</strong> (check the change didn't break anything else).</li>
      </ul>
      <p>Levels and types are independent: you can run performance tests at the integration level, or functional tests at the unit level.</p>` },
    { h: "The Test Process, Traceability & Static Testing", body: `
      <p>The fundamental test process (aligned with ISTQB and ISO/IEC/IEEE 29119):</p>
      <ol>
        <li><strong>Test planning</strong>: strategy, schedule, resources, entry and exit criteria.</li>
        <li><strong>Test analysis</strong>: study the test basis (requirements, specs, risks) and identify <em>test conditions</em>, meaning what to test.</li>
        <li><strong>Test design</strong>: derive and prioritize test cases from those conditions, meaning how to test.</li>
        <li><strong>Test implementation</strong>: prepare test data, environments, scripts and suites.</li>
        <li><strong>Test execution</strong>: run the tests, compare actual with expected results, log defects.</li>
        <li><strong>Test completion</strong>: summary report, archive the testware, capture lessons learned.</li>
      </ol>
      <p><strong>Traceability</strong> links requirements → test conditions → test cases → defects. It proves coverage ("every requirement has a test") and enables impact analysis ("this requirement changed, so these tests need rerunning").</p>
      <p><strong>Static testing</strong> finds defects <em>without executing</em> anything:</p>
      <ul>
        <li><strong>Reviews</strong>, from least to most formal: informal review → walkthrough → technical review → <strong>inspection</strong> (defined roles, entry criteria, defect logs).</li>
        <li><strong>Static analysis</strong>: linters, security scanners and complexity tools applied to code or documents.</li>
      </ul>
      <p><strong>A manual tester's day-to-day:</strong> analyze requirements and flag ambiguities early; design and run test cases, exploring beyond the script; report defects clearly; verify fixes and run regression around changed areas; sign features off against acceptance and exit criteria.</p>` }
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
      <p><strong>Use Case Testing</strong> derives test cases directly from documented use cases — the step-by-step interactions between an actor (user or external system) and the system under test, including the main success scenario and its alternate/exception flows. It's especially effective for validating that a workflow behaves correctly end-to-end from the user's perspective, complementing more input-focused techniques like ECP and BVA.</p>` },
    { h: "White-Box Techniques & Code Coverage", body: `
      <p>White-box (structure-based) techniques derive tests from the code itself. From weakest to strongest:</p>
      <ul>
        <li><strong>Statement coverage</strong>: every executable statement runs at least once.</li>
        <li><strong>Branch (decision) coverage</strong>: every branch outcome, true and false, is taken. 100% branch coverage implies 100% statement coverage, but not the other way round.</li>
        <li><strong>MC/DC</strong> (modified condition/decision coverage): each Boolean sub-condition is shown to independently affect the outcome. It's required in safety-critical domains such as avionics.</li>
        <li><strong>Path coverage</strong>: every executable path. It's the strongest, but often impractical because paths multiply with every loop and branch.</li>
      </ul>
      <p><strong>Cyclomatic complexity</strong> (McCabe) = <code>E − N + 2P</code> (edges, nodes and connected components of the control-flow graph). For a single function it equals the number of decisions + 1, and gives the number of independent paths to test. High values flag code that's hard to test and maintain.</p>
      <p><strong>Data-flow coverage</strong> follows each variable from where it's defined to where it's used (def-use pairs), catching anomalies such as a variable used before it's set.</p>
      <p><em>Example:</em> <code>if (a &gt; 0) { x = 1 }</code> with no else. The single test <code>a = 5</code> gives 100% statement coverage but only 50% branch coverage, because the false branch never runs. Add <code>a = 0</code> to reach 100% branch coverage.</p>` },
    { h: "Combining Techniques: Classification Trees, Attacks & EP + BVA", body: `
      <p><strong>EP + BVA together</strong> give the highest yield for input fields. For an age field accepting <strong>18–60</strong>:</p>
      <ul>
        <li>Partitions: <code>&lt; 18</code> (invalid), <code>18–60</code> (valid), <code>&gt; 60</code> (invalid).</li>
        <li>Boundaries: <strong>17, 18, 19, 59, 60, 61</strong>.</li>
      </ul>
      <p><strong>Classification trees</strong> break the test object into aspects (e.g. <em>payment method</em>, <em>currency</em>, <em>customer type</em>), partition each aspect into classes, then pick combinations from the tree. They're a visual way to reason about complex combinations.</p>
      <p><strong>Attacks and fault injection</strong> deliberately provoke known failure classes. What happens when the network drops mid-upload? When the disk is full? When a dependency times out?</p>
      <p><strong>Checklist-based testing</strong> uses heuristic lists (such as SFDIPOT) for repeatable breadth; it's experience-based, like error guessing and exploratory testing.</p>` },
    { h: "Test Case Anatomy & Coverage Trade-offs", body: `
      <p><strong>A good test case contains:</strong></p>
      <ol>
        <li><strong>Unique ID and title</strong>: searchable, describing the behavior tested.</li>
        <li><strong>Preconditions</strong>: required state, data and environment.</li>
        <li><strong>Steps</strong>: numbered, minimal, exact.</li>
        <li><strong>Test data</strong>: concrete values, ideally derived from EP/BVA.</li>
        <li><strong>Expected result</strong>: the oracle, i.e. what "correct" means.</li>
        <li><strong>Postconditions</strong> (optional): the expected end state.</li>
        <li><strong>Traceability</strong>: a link to the requirement, risk or user story.</li>
      </ol>
      <p><strong>Choosing coverage in practice:</strong></p>
      <ul>
        <li><strong>EP + BVA</strong> for input-heavy forms: cheap and high yield.</li>
        <li><strong>Decision tables</strong> whenever conditions interact. Remember that <code>2<sup>n</sup></code> combinations grow fast.</li>
        <li><strong>State transitions</strong> for anything with modes, sessions or workflows.</li>
        <li><strong>Pairwise</strong> when the parameter space explodes (browser × OS × locale × plan).</li>
        <li><strong>Path or MC/DC coverage</strong> only for critical algorithms such as payments or safety logic.</li>
        <li>Never chase 100% coverage everywhere; aim for <strong>risk-proportional</strong> coverage.</li>
        <li><strong>No spec?</strong> Use other oracles: comparable products, heuristics such as HICCUPPS (Module 5), or real user behavior.</li>
      </ul>` }
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
      <p>The main adjustment for Agile teams: log findings immediately in the sprint's tracker, even briefly, rather than relying on memory — ad hoc sessions move fast and details fade quickly once the session ends.</p>` },
    { h: "Ad Hoc vs. Exploratory, Error Guessing & Monkey Testing", body: `
      <p>Ad hoc testing is <strong>informal, unplanned testing without documentation</strong>. The tester relies on intuition, experience and product knowledge, with no predefined test cases, coverage metrics or formal procedure. It starts immediately with minimal preparation, and results are hard to reproduce unless you keep notes.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Approach</th><th>Planning</th><th>Documentation</th><th>Structure</th></tr></thead>
        <tbody>
          <tr><td><strong>Ad hoc testing</strong></td><td>None</td><td>None</td><td>Free-form, guided by skill and hunches</td></tr>
          <tr><td><strong>Exploratory testing</strong></td><td>Time-boxed charters</td><td>Session notes</td><td>Charter-driven; learning, design and execution happen together</td></tr>
          <tr><td><strong>Error guessing</strong></td><td>None</td><td>None</td><td>Guided by defect history and experience</td></tr>
          <tr><td><strong>Monkey testing</strong></td><td>None</td><td>None</td><td>Random inputs with no intent</td></tr>
        </tbody>
      </table></div>
      <p>Exploratory testing (Module 5) is the <strong>disciplined evolution</strong> of ad hoc testing: it keeps the freedom but adds charters, timeboxes and note-taking through session-based test management (SBTM).</p>
      <p><strong>When ad hoc testing is especially valuable:</strong></p>
      <ul>
        <li><strong>Time pressure</strong>: a quick sanity pass before a demo or release.</li>
        <li><strong>Early, unstable builds</strong> where scripted cases break constantly.</li>
        <li><strong>Fresh eyes</strong>: a new tester's unbiased poking finds what scripted testers overlook.</li>
        <li><strong>Post-fix spot checks</strong> around a hotfix.</li>
        <li><strong>First impressions</strong>: "what would a user try first?"</li>
      </ul>` },
    { h: "Making Ad Hoc Testing Effective", body: `
      <p><strong>The risks to manage:</strong> no coverage guarantee, so gaps stay invisible; poor reproducibility ("found a bug, can't reproduce it" wastes triage time); it isn't repeatable, so it can't serve as regression; and results depend heavily on individual skill.</p>
      <p><strong>Six habits that fix most of that:</strong></p>
      <ol>
        <li><strong>Keep rough notes and screenshots</strong> as you go. Informal logging beats none.</li>
        <li><strong>Time-box the session</strong> (60–90 minutes) and pick a target area.</li>
        <li><strong>Mind the pesticide paradox</strong>: don't keep walking the same paths.</li>
        <li><strong>Turn every defect you find into a formal, scripted test case</strong>, so it's covered next time.</li>
        <li><strong>Use a heuristic to guide coverage</strong>, such as <strong>SFDIPOT</strong>: Structure, Function, Data, <strong>Interfaces</strong>, Platform, Operations, Time. That's the SFDPOT mnemonic from Module 5 with Interfaces added.</li>
        <li><strong>Pair up</strong> with a developer or another tester for faster discovery.</li>
      </ol>` }
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
      <p>Testers design and run tests on the fly, noting ideas before execution. It emphasizes the personal freedom and responsibility of the individual tester to direct their own investigation.</p>
      <p>ISTQB defines it as an <strong>experience-based</strong> technique in which tests are designed, executed and evaluated <em>at the same time</em> while the tester learns about the test object, using what each test reveals to design new and better tests.</p>
      <p>Scripted testing runs analysis → design → implementation → execution → evaluation as separate steps. Exploratory testing compresses them into one continuous feedback loop:</p>
      <pre><code>Learn about the product → choose something interesting/risky
→ design a test → execute it → observe → interpret
→ learn something new → design the next test ↺</code></pre>
      <p>The key property is <strong>adaptation</strong>: when a result is unexpected, the discovery immediately changes the next test instead of the tester ploughing on through a fixed script.</p>` },
    { h: "Exploratory vs. Ad Hoc, Error Guessing & Checklists", body: `
      <p><strong>Exploratory ≠ random clicking.</strong> Ad hoc testing ("I'll click around and see") has no structure or objective, so it's hard to measure, repeat, explain or hand over. Exploratory testing keeps the freedom but adds a mission, a defined scope, a timebox, a risk focus, notes, captured questions and planned follow-up.</p>
      <p><strong>Exploratory testing = freedom + purpose + investigation + discipline.</strong></p>
      <p><strong>Error guessing</strong> <em>predicts</em> likely problems from experience ("this app broke on long names before, so I'll try long names"). <strong>Exploratory testing</strong> <em>investigates and adapts</em>: enter a long name → notice truncation → check whether the database holds the full value → refresh → read the record through the API → try another field → compare UI and API. Error guessing is often one tool used inside an exploratory session.</p>
      <p><strong>Checklist-based testing</strong> starts from a predefined list. Exploration can start from the same checklist but expand it as it goes:</p>
      <pre><code>[ ] Invalid login
     ↓ found different error messages
     ↓ explore error-message consistency
     ↓ found possible account enumeration
     ↓ explore behavior across username states</code></pre>
      <p>ISTQB CTFL lists all three (checklist-based testing, error guessing, exploratory testing) as <strong>experience-based</strong> techniques.</p>` },
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
          <tr><td>Main strength: repeatability</td><td>Main strength: discovery</td></tr>
          <tr><td>Best for known requirements and regression</td><td>Best for unknown risks and unexpected behavior</td></tr>
          <tr><td>Documented as detailed test cases</td><td>Documented as charters, notes and session reports</td></tr>
          <tr><td>Highly suitable for automation</td><td>Human judgment is central; discoveries get automated afterwards</td></tr>
        </tbody>
      </table></div>
      <p>Neither replaces the other. A mature QA strategy combines <strong>scripted tests</strong> for repeatable known behavior, <strong>automated regression</strong> for stable checks, and <strong>exploratory testing</strong> for investigation and discovery.</p>` },
    { h: "The SBTM Process (Session-Based Test Management)", body: `
      <ol>
        <li><strong>Create a Bug Taxonomy</strong> — a classification for the kinds of bugs you expect to find.</li>
        <li><strong>Define a Test Charter</strong> — a mission statement for the session.</li>
        <li><strong>Time Box the session</strong> — set a fixed duration and stick to it.</li>
        <li><strong>Review Results</strong> — go over what was found.</li>
        <li><strong>Debrief</strong> — discuss the session with the team.</li>
      </ol>
      <p>The ISTQB Advanced Agile Tester syllabus describes sessions as time-boxed (commonly <strong>60–120 minutes</strong>), driven by a charter, and documented with notes, screenshots, recordings, coverage, observations and anomalies.</p>` },
    { h: "Writing a Test Charter", body: `
      <p>A <strong>test charter</strong> is a statement of test objectives, and possibly test ideas, that guides a session. It gives direction without prescribing every click. A good charter answers: what are we testing, why, which area or risk, what do we want to learn, and what constraints apply?</p>
      <ul>
        <li><strong>Bad:</strong> "Test login."</li>
        <li><strong>Better:</strong> "Explore the login flow for authentication failures, unusual input, session handling, and error-message behavior."</li>
        <li><strong>More focused:</strong> "Explore login with invalid, boundary, and unusual credentials, paying particular attention to lockout, error handling, and session behavior."</li>
      </ul>
      <p>A charter provides <strong>focus</strong>, not a script. Too vague and you're clicking at random; too restrictive and you can't follow the interesting discoveries.</p>
      <pre><code>Charter:      Explore [feature/area] to discover [risk/behavior].
Mission:      Understand whether [objective].
Focus:        [area 1] · [area 2] · [area 3]
Risks:        [risk 1] · [risk 2]
Test ideas:   [idea] · [idea] · [idea]
Out of scope: [area]
Environment:  Browser · OS · Build · Device
Timebox:      [XX minutes]
Tester / Date</code></pre>
      <p><strong>Example charter library:</strong></p>
      <ul>
        <li><strong>Registration:</strong> explore validation, duplicate accounts, boundary data, and error handling.</li>
        <li><strong>REST API:</strong> explore validation, authentication, authorization, malformed requests, boundary data, duplicate requests, and error handling.</li>
        <li><strong>Multi-tenancy:</strong> explore whether users can access, search, modify, export, or infer another tenant's data.</li>
        <li><strong>File upload:</strong> explore file type, size, naming, duplicates, interruption, cancellation, and malformed files.</li>
        <li><strong>Search:</strong> explore empty queries, special characters, large result sets, pagination, filters, sorting, and concurrent data changes.</li>
        <li><strong>Payment:</strong> explore failed payment, retry, cancellation, duplicate submission, timeout, and interrupted network.</li>
      </ul>` },
    { h: "Running a Session: Prepare, Explore, Record, Debrief", body: `
      <p><strong>1. Prepare:</strong> understand the feature, read the requirements, identify risks, review earlier defects, check the build, prepare test data and environment, then define the charter and timebox.</p>
      <p><strong>2. Explore:</strong> observe, ask questions, form hypotheses, vary inputs, follow interesting paths, compare behavior with expectations, apply heuristics, record evidence. When something odd happens: <strong>stop → reproduce → isolate → expand → compare</strong>.</p>
      <p><strong>3. Debrief:</strong> What did we test and learn? What defects did we find? What questions and risks remain? What was <em>not</em> tested? Which areas need another session? Which discoveries should become scripted or automated tests?</p>
      <p><strong>Timeboxing</strong> keeps exploration from growing without limit and makes the effort easy to communicate: about 30 min for a quick investigation, 60 for focused feature exploration, 90 for a normal deep dive, 120 for a larger investigation.</p>
      <p><strong>Record, don't rely on memory:</strong> actions, test data, observations, hypotheses, questions, environment and build, screenshots, recordings, logs, API requests/responses, console errors, network failures, defects, and areas covered <em>and not covered</em>.</p>
      <pre><code>10:03 Registered a normal user successfully.
10:06 Repeated registration with the same email.
10:07 UI displayed a generic error.
10:10 API returned 500 instead of the expected 4xx.
10:12 Hypothesis: duplicate registration isn't handled.
10:15 Reproduced in a second browser.
10:18 Reproduced directly through the API. Confirmed.
10:25 Bug report created.
10:35 UI accepts a 256-char password but the API rejects it.
10:40 Second defect created.</code></pre>
      <p>That's the learning loop in action: <strong>observation → hypothesis → new test → new evidence → new hypothesis</strong>.</p>
      <p><strong>A 60-minute session, for example:</strong> 0–5 read requirements and identify risks · 5–10 prepare account, data and charter · 10–20 normal workflow · 20–30 invalid and boundary data · 30–40 interruptions and state transitions · 40–50 permissions, concurrency or integrations · 50–55 reproduce findings · 55–60 document defects, risks, questions and follow-ups.</p>` },
    { h: "Pros & Cons", body: `
      <p><strong>Pros:</strong> finds more bugs, encourages creativity, requires less prep documentation, adapts quickly to changing requirements.</p>
      <p><strong>Cons:</strong> depends heavily on tester skill, hard to measure coverage, difficult to repeat or reproduce exactly, less suited to strict compliance/audit needs.</p>` },
    { h: "When to Use It", body: `
      <ul>
        <li>Requirements are missing or ambiguous.</li>
        <li>Early iterations of a feature.</li>
        <li>Critical applications needing deep investigation.</li>
        <li>Experienced testers are available.</li>
        <li>The feature is new, acceptance criteria are minimal, or the product is changing fast.</li>
        <li>There's no time to build a full scripted suite.</li>
        <li>You're investigating a suspected defect. Ask "what else could be related to this?", because one defect often exposes a whole class of problems.</li>
        <li>Integration behavior is uncertain, workflows are complex, or edge cases are likely.</li>
      </ul>
      <p><strong>Complex workflow example:</strong> for a checkout (<em>Product → Cart → Discount → Address → Payment → Confirmation</em>), explore interruptions and combinations: remove a product mid-checkout, change quantity after a discount, let the session expire, refresh the payment page, press Back, open two tabs, change the address after shipping is calculated, retry payment, drop the network.</p>` },
    { h: "Exploratory Testing in Agile & CI/CD", body: `
      <p>Agile produces frequent change and often incomplete information, which suits exploration well. ISTQB's Agile material places it during iteration execution, reviews and demos, after major changes, and whenever acceptance criteria are vague. Explore new stories, changed functionality, integration points, sprint increments and high-risk areas.</p>
      <pre><code>Commit → Build → Unit tests → API tests → UI smoke tests
→ Deploy test environment → Exploratory testing
→ Defect investigation → Automated regression → Release</code></pre>
      <p>CI/CD automation gives <strong>fast, repeatable feedback</strong>; exploratory testing gives <strong>adaptive human investigation</strong>. Exploration bridges development, requirements, automated checks and user-focused validation.</p>` },
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
      <p>Together they turn "explore the app" from a vague instruction into a repeatable set of lenses any tester can pick up.</p>` },
    { h: "Practical Heuristics: What If, Data, State & Interruptions", body: `
      <p>A heuristic is a practical rule of thumb for guiding investigation. Keep these in your back pocket:</p>
      <ul>
        <li><strong>What if…</strong> the value is empty, huge or tiny? The user presses Back, refreshes or double-clicks? The request repeats, the network drops, two users act at once, the session expires, or data changes in another tab?</li>
        <li><strong>Change the context:</strong> browsers, devices, screen sizes, user roles and permissions, locales, languages, time zones, network conditions, account states.</li>
        <li><strong>Change the data:</strong> empty, null, zero, negative, min, max, max + 1, very long, very short, Unicode, whitespace, special characters, duplicates, malformed values, unexpected types.</li>
        <li><strong>CRUD + permissions:</strong> for each of Create/Read/Update/Delete, can this user do it, and what happens without permission? Then try combinations and invalid transitions.</li>
        <li><strong>Boundaries:</strong> min − 1, min, min + 1, max − 1, max, max + 1.</li>
        <li><strong>State:</strong> which states can this object reach? For <code>Draft → Submitted → Approved → Completed</code>, try invalid moves like <code>Completed → Draft</code>, <code>Approved → Submitted</code>, or updating a deleted item.</li>
        <li><strong>Concurrency:</strong> two users on one record, two browsers, two tabs, duplicate requests, simultaneous update/delete, simultaneous login, concurrent API calls.</li>
        <li><strong>Interruption:</strong> refresh, Back, Forward, close and reopen the tab, disconnect and reconnect the network, timeouts, session expiry.</li>
        <li><strong>Consistency:</strong> UI vs API, browser A vs browser B, user A vs user B, current version vs previous version.</li>
      </ul>
      <p>Throughout, keep the investigator's questions going: <em>What happened? What did I expect? Is the difference meaningful? Why might it happen? What could explain it? What test would tell the explanations apart? What else could be affected?</em></p>` },
    { h: "Risk Focus & Worked Examples", body: `
      <p>Prioritize with <strong>Risk = Likelihood × Impact</strong>. Rather than clicking through low-risk UI, spend the session where failure matters most: authentication, authorization, payment, personal data, tenant isolation, permissions, data deletion, concurrency, integrations and critical business workflows.</p>
      <p><strong>Login.</strong> <em>Charter: explore authentication with invalid, boundary, unexpected and repeated input, focusing on security, error handling and session behavior.</em> Ideas: valid/invalid/empty credentials; min/max/max + 1 lengths; spaces, Unicode, special characters; login then logout, refresh, Back, close browser, or a second tab; repeated failures and lockout; consistent error messages; session invalidated after logout; protected pages after logout; the same account in two browsers.</p>
      <p><strong>REST API.</strong> Exploration isn't UI-only. Try missing, extra or wrong-type fields, null, empty strings, malformed JSON, invalid or expired auth, the wrong method or content type, duplicate and repeated requests, large or empty payloads, invalid, nonexistent or deleted IDs, concurrent requests, pagination edges and sort/filter combinations. Observe the status, body, headers, schema, error structure, timing, persistence, authorization and side effects (see Module 6).</p>
      <p><strong>Multi-tenancy.</strong> <em>Charter: explore tenant isolation as users from different tenants access, create, update, search and delete project data concurrently.</em> Put User A in Tenant A and User B in Tenant B, create similar projects in both, then try searching for the other tenant's data, direct URLs, swapped IDs, cached pages, logout/login switching, exports, notifications, search indexes, attachments and background jobs. Expected property: nobody can see or change another tenant's data unless the product explicitly allows it.</p>` },
    { h: "Beyond Functional: Security, Usability, Compatibility & Performance", body: `
      <p><strong>Security:</strong> exploration can uncover security problems but <em>doesn't replace</em> dedicated, authorized security testing. Useful questions: Can authorization be bypassed? Can I swap in another user's ID? Can hidden functions be reached directly? What happens after logout or session expiry? Do error messages leak sensitive info? Can requests be replayed? Can I tamper with client-side values? Can an ordinary user reach admin functions?</p>
      <p><strong>Usability:</strong> look for confusing navigation, inconsistent controls, unclear messages or terminology, poor error recovery, inaccessible features and easy-to-trigger destructive actions. Play personas: first-time user, expert, impatient user, error-prone user, someone with little domain knowledge.</p>
      <p><strong>Compatibility:</strong> Chrome, Edge, Firefox, Safari, mobile browsers, OS versions, screen sizes, zoom levels, high-DPI. Watch for layout breaks, unsupported controls, browser-specific behavior, JavaScript errors, rendering and timing differences, file-upload and keyboard issues.</p>
      <p><strong>Performance signals:</strong> exploration is no substitute for performance testing, but it can spot trouble: a page that suddenly slows, latency that grows with repetition, UI degradation on large datasets, rising memory, resource problems across tabs. Follow these up with a controlled test in JMeter or k6.</p>` },
    { h: "From Discovery to Automation", body: `
      <p>Exploration depends on human observation and reasoning, but it constantly feeds automation:</p>
      <pre><code>Explore → discover important behavior → understand the stable
expected behavior → create a regression test → automate if valuable</code></pre>
      <p><em>Example:</em> exploring reveals that double-clicking <strong>Save</strong> creates two contacts. Confirm it manually → file the defect → the developer fixes it → add a Playwright regression check such as <code>expect(contactCount).toBe(1)</code>. The automation now guards the behavior that exploration discovered.</p>
      <p><strong>A Playwright-flavored routine:</strong> deploy the build → run smoke tests → pick a charter → explore manually with DevTools and network logs → reproduce anything interesting → decide whether it's a defect → file the bug → automate it if it's important and stable.</p>
      <p><strong>Supporting tools:</strong> test management (Jira, Azure DevOps, TestRail, Zephyr, Xray) · notes (Markdown, Notion, OneNote, Google Docs) · evidence (screenshots, recordings, DevTools, network/console logs) · API exploration (Postman, Insomnia, curl) · automation afterwards (Playwright, Cypress, Selenium, REST Assured, Newman) · performance follow-up (JMeter, k6). Tools don't make a session exploratory; the approach does.</p>` },
    { h: "Reporting, Coverage, Metrics & Definition of Done", body: `
      <p><strong>An exploratory bug must still be reproducible.</strong> Example title: <em>API returns HTTP 500 when registering an existing email.</em> Include preconditions (a user with <code>test@example.com</code> exists), steps (POST <code>/users</code> with that email), expected (a client-error response per the API contract), actual (HTTP 500), evidence (request, response, timestamp, environment, logs) and where it came from (<em>found during session "Registration: duplicate and boundary data"</em>).</p>
      <p><strong>Coverage has several dimensions:</strong> feature, risk, data, workflow, state, role, platform and integration. "I tested the screen" isn't a coverage statement. You should be able to say <strong>what was explored and what remains unknown</strong>.</p>
      <p><strong>Metrics, used carefully:</strong> session duration, charter, areas covered, risks investigated, defects and questions raised, follow-up sessions, regression tests and automation candidates created, unresolved risks. Avoid vanity numbers ("500 clicks, so testing was good"). Ask instead: <em>what important information did the session produce?</em></p>
      <p><strong>Definition of Done for a session:</strong> the charter was addressed; key risks were investigated; observations, evidence and questions were recorded; defects were reported; untested areas and follow-up work were identified. Done doesn't mean "everything is tested". It means <em>we investigated the mission and can explain what we learned and what remains unknown.</em></p>` },
    { h: "Common Mistakes & Quick Reference", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Mistake</th><th>Better</th></tr></thead>
        <tbody>
          <tr><td>Random clicking with no objective</td><td>Write a charter</td></tr>
          <tr><td>No notes, so discoveries can't be reproduced</td><td>Record actions, observations and evidence</td></tr>
          <tr><td>Testing everything equally</td><td>Prioritize by risk</td></tr>
          <tr><td>Treating exploration as regression</td><td>Use it to investigate unknowns and change</td></tr>
          <tr><td>Never turning discoveries into regression tests</td><td>Automate or document stable, high-value checks</td></tr>
          <tr><td>No timebox</td><td>Run focused sessions</td></tr>
          <tr><td>Vague defect reports</td><td>Capture evidence while exploring</td></tr>
          <tr><td>Overly restrictive charter</td><td>Define the mission, not every click</td></tr>
        </tbody>
      </table></div>
      <p>Weaknesses such as inconsistent coverage, poor reproducibility and dependence on skill shrink with charters, timeboxes, notes, risk analysis, debriefs, evidence capture, peer review, follow-up scripted tests and automation.</p>
      <p><strong>Exam memory trick:</strong></p>
      <pre><code>SCRIPTED     Design → Execute → Evaluate
EXPLORATORY  Learn ↔ Design ↔ Execute ↔ Evaluate

Exploratory ≠ Random
Exploratory = Mission + Timebox + Investigation
            + Adaptation + Notes + Learning</code></pre>
      <p><strong>One-sentence definition:</strong> exploratory testing is a disciplined, experience-based approach in which the tester simultaneously learns about the product, designs tests, executes them, evaluates the results, and adapts the next test based on what was discovered.</p>
      <p><strong>Further reading:</strong> <a href="https://istqb-glossary.page/" target="_blank" rel="noopener">ISTQB Glossary</a> · <a href="https://istqb.org/" target="_blank" rel="noopener">ISTQB syllabi</a> · <a href="https://martinfowler.com/bliki/ExploratoryTesting.html" target="_blank" rel="noopener">Martin Fowler: Exploratory Testing</a></p>` }
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
      </ul>
      <p>Beyond the core four you'll regularly meet:</p>
      <ul>
        <li><strong>PATCH</strong> — commonly a <em>partial</em> update (change only the fields sent), whereas PUT commonly replaces the whole resource.</li>
        <li><strong>HEAD</strong> — returns the headers only, without the normal response body.</li>
        <li><strong>OPTIONS</strong> — asks which operations/capabilities the endpoint supports (also used by browsers for CORS preflight).</li>
      </ul>
      <p>A typical resource set looks like <code>GET /api/contacts</code>, <code>GET /api/contacts/123</code>, <code>POST /api/contacts</code>, <code>PUT</code>/<code>PATCH</code>/<code>DELETE /api/contacts/123</code>. Always treat the <strong>API contract as the source of truth</strong>: real implementations don't always follow textbook REST semantics exactly.</p>` },
    { h: "Request & Response Anatomy", body: `
      <p>A request travels <strong>QA client → HTTP request → REST API → business logic → database/services → HTTP response</strong>. Testing at this layer is faster and more focused than UI testing and exposes defects hidden below the UI.</p>
      <p>A request can contain: method, URL, <strong>path parameters</strong>, <strong>query parameters</strong>, headers, authentication, and a body.</p>
      <pre><code>GET /api/users/123?include=orders&amp;page=2
Authorization: Bearer abc123
Accept: application/json</code></pre>
      <p>Here <code>123</code> is a path parameter; <code>include=orders</code> and <code>page=2</code> are query parameters. A create request and its response:</p>
      <pre><code>POST /api/contacts
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{ "firstName": "John", "lastName": "Smith" }

HTTP/1.1 201 Created
Content-Type: application/json

{ "id": "12345", "firstName": "John", "lastName": "Smith" }</code></pre>
      <p><strong>Headers worth testing:</strong> <code>Content-Type</code>, <code>Accept</code>, <code>Authorization</code>, <code>Cache-Control</code>, <code>Location</code>, <code>ETag</code>, <code>Set-Cookie</code>, and request/correlation IDs. Try missing headers, a wrong <code>Content-Type</code>, unsupported <code>Accept</code> values, and missing or invalid <code>Authorization</code>.</p>` },
    { h: "HTTP Status Codes", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Class</th><th>Common codes</th></tr></thead>
        <tbody>
          <tr><td><strong>2xx</strong> Success</td><td>200 OK · 201 Created · 202 Accepted · 204 No Content</td></tr>
          <tr><td><strong>3xx</strong> Redirection</td><td>301 Moved Permanently · 302 Found · 304 Not Modified</td></tr>
          <tr><td><strong>4xx</strong> Client error</td><td>400 Bad Request · 401 Unauthorized (authentication required) · 403 Forbidden · 404 Not Found · 405 Method Not Allowed · 409 Conflict · 415 Unsupported Media Type · 422 Unprocessable Content · 429 Too Many Requests</td></tr>
          <tr><td><strong>5xx</strong> Server error</td><td>500 Internal Server Error · 501 Not Implemented · 502 Bad Gateway · 503 Service Unavailable · 504 Gateway Timeout</td></tr>
        </tbody>
      </table></div>
      <p><strong>Don't expect 200 from every successful request.</strong> A create usually returns 201, a delete often 204, an async job 202 — the expected status depends on the operation and the contract. And any 5xx caused by client input is a defect: bad input should get a 4xx.</p>` },
    { h: "Designing Input Tests: Parameters, Bodies & Boundaries", body: `
      <p><strong>Path parameters</strong> (<code>GET /users/{id}</code>): valid IDs, nonexistent IDs, zero, negative, very large, strings instead of numbers, null-like values, missing, malformed, special characters.</p>
      <p><strong>Query parameters</strong> (<code>GET /users?page=2&amp;limit=20</code>): normal values, zero, negative, very large, min/max limits, missing, empty, duplicated, invalid types, special characters, URL encoding.</p>
      <p><strong>JSON bodies:</strong> valid data, missing required fields, empty strings, nulls, wrong types, invalid formats, unexpected fields, duplicates, oversized values, malformed JSON.</p>
      <pre><code>{"firstName":"John","lastName":"Smith","age":30}   valid
{"firstName":"John","age":30}                       missing field
{"firstName":"","lastName":"Smith"}                 empty value
{"firstName":123,"lastName":true}                   wrong types</code></pre>
      <p><strong>Positive testing</strong> confirms valid requests succeed as expected. <strong>Negative testing</strong> covers invalid/expired auth, invalid IDs, duplicates, unsupported methods, invalid <code>Content-Type</code>, malformed JSON, oversized requests, and unexpected parameters — the API should reject each one safely with a clear 4xx.</p>
      <p><strong>Boundary Value Analysis</strong> (Module 2) applies to strings, integers, arrays, pagination, file sizes, quantities, dates and money. Username length 3–30 → test <strong>2, 3, 4, 29, 30, 31</strong>. Age 18–120 → test <strong>17, 18, 19, 119, 120, 121</strong>.</p>
      <p><strong>Data-driven testing:</strong> run the same test logic over a dataset (valid, boundary, invalid, duplicate, Unicode, case variations, special characters) rather than one hard-coded example.</p>` },
    { h: "Response Validation, Schemas & Contract Testing", body: `
      <p>Validate far more than the status code:</p>
      <ul>
        <li>status code, response headers and <code>Content-Type</code></li>
        <li>JSON structure/schema, data types, required fields and actual values</li>
        <li>business rules</li>
        <li>database state, where appropriate</li>
        <li>response time, where performance matters</li>
      </ul>
      <p><strong>OpenAPI/Swagger</strong> and <strong>JSON Schema</strong> define the API contract: methods, parameters, request/response schemas, auth requirements and error responses. <strong>Contract testing</strong> checks that the implementation still matches it. Example defect: the docs say <code>id</code> is an integer, but the API returns a string. That's <strong>contract drift</strong>, and it can break every consumer of the API.</p>
      <p><strong>Database validation:</strong> where it adds value, confirm an operation produced the expected persistent state (records, relationships, timestamps, defaults, status). Don't make <em>every</em> API test depend on direct DB access, though: that coupling makes suites slower and more brittle.</p>` },
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
      </ul>` },
    { h: "Multi-User & Tenant Isolation", body: `
      <p><strong>Authentication</strong> asks <em>who are you?</em>; <strong>authorization</strong> asks <em>are you allowed to do this?</em> For authentication, cover Basic Auth, Bearer tokens, API keys, OAuth 2.0 and JWT with valid, invalid, missing, expired, malformed, wrong and revoked credentials.</p>
      <p>For authorization, create <strong>User A, User B and an Admin</strong>, then try each one against the others' resources and against privileged operations. The key question: can one user read or modify another user's objects?</p>
      <p>In <strong>multi-tenant</strong> systems, verify a user from Tenant A cannot read, update, delete, search, or even <em>infer</em> resources of Tenant B. Probe IDs, filters, pagination, exports, bulk endpoints and indirect references, where leaks commonly hide.</p>` },
    { h: "Workflows, State & Tricky Data", body: `
      <p><strong>CRUD cycle:</strong> <code>CREATE → READ → UPDATE → READ → DELETE → READ</code>. Each READ proves the previous step really took effect. Then chain real workflows: <em>Register → Login → Get token → Create contact → Get → Update → Delete → Verify deletion</em>.</p>
      <p><strong>Idempotency &amp; duplicates:</strong> repeating an operation the contract says is idempotent (PUT, DELETE, often PATCH) should leave the resource in the same intended state. Repeat POSTs, too: do they create duplicate orders, contacts or payments?</p>
      <p><strong>Pagination, sorting, filtering:</strong> first/middle/last page, beyond the last page, zero/negative page, min/max/huge limit, duplicates or missing records across pages; ascending/descending, invalid sort fields, multiple fields, case sensitivity; valid/invalid/empty filters, multiple filters, filters combined with pagination.</p>
      <p><strong>Dates &amp; times:</strong> UTC vs local, timezone conversions, daylight-saving transitions, leap years/leap days, midnight/end-of-day, past/future and invalid dates, supported formats. Pin down exact semantics for values like <code>2026-09-23T10:00:00Z</code>.</p>
      <p><strong>Concurrency:</strong> two users modifying the same resource at once. Check optimistic locking (e.g. <code>ETag</code>/<code>If-Match</code> → 409/412), race conditions, lost updates, duplicate operations, and the final state.</p>` },
    { h: "OWASP API Security Top 10 (2023)", body: `
      <p>Use the OWASP list as a risk-based security checklist, not an afterthought to status-code checks:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th>Risk</th><th>How a QA probes it</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Broken Object Level Authorization (BOLA)</td><td>Request another user's object ID</td></tr>
          <tr><td>2</td><td>Broken Authentication</td><td>Missing, invalid, expired, malformed, revoked tokens</td></tr>
          <tr><td>3</td><td>Broken Object Property Level Authorization</td><td>Try to set privileged fields: <code>role</code>, <code>ownerId</code>, <code>tenantId</code>, <code>isAdmin</code></td></tr>
          <tr><td>4</td><td>Unrestricted Resource Consumption</td><td>Huge payloads/arrays, extreme pagination, high request rates</td></tr>
          <tr><td>5</td><td>Broken Function Level Authorization</td><td>Call admin/privileged endpoints with each role</td></tr>
          <tr><td>6</td><td>Unrestricted Access to Sensitive Business Flows</td><td>Repeat password resets, votes, coupons, sign-ups, orders</td></tr>
          <tr><td>7</td><td>Server-Side Request Forgery (SSRF)</td><td>If the API fetches URLs, verify server-side restrictions (authorized test env only)</td></tr>
          <tr><td>8</td><td>Security Misconfiguration</td><td>Debug info, stack traces, unneeded methods, default creds, CORS/TLS</td></tr>
          <tr><td>9</td><td>Improper Inventory Management</td><td>Find obsolete, undocumented, debug or deprecated API versions</td></tr>
          <tr><td>10</td><td>Unsafe Consumption of APIs</td><td>Feed malformed, partial, slow, oversized third-party responses</td></tr>
        </tbody>
      </table></div>
      <p>Module 10 goes deeper into application security testing.</p>` },
    { h: "Tools, Automation & CI/CD", body: `
      <p><strong>Postman</strong> handles requests, collections, environments, variables, scripts, assertions, auth, request chaining and CI runs. Use variables such as <code>{{baseUrl}}</code>, <code>{{token}}</code>, <code>{{userId}}</code> instead of hard-coded environment values.</p>
      <pre><code>pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});</code></pre>
      <p><strong>Playwright</strong> (TypeScript) has a built-in API request layer:</p>
      <pre><code>const response = await request.post('/api/users', {
  data: { name: 'John', email: 'john@example.com' }
});
expect(response.status()).toBe(201);</code></pre>
      <p>Keep API clients, auth, test data, schemas and assertions reusable rather than repeating them in each spec:</p>
      <pre><code>tests/
├── api/        auth/ · contacts/ · negative/
├── fixtures/   apiClient.ts · testData.ts
├── helpers/    auth.ts · assertions.ts
└── schemas/</code></pre>
      <p><strong>API + UI together:</strong> create a user via API and verify login in the UI, or create a contact in the UI and verify it via API. This isolates whether a defect is in the UI, the API, the integration or persistence.</p>
      <p><strong>Performance:</strong> measure response time, latency, throughput, requests/second, error rate, CPU, memory and DB behavior across baseline, load, stress, spike and soak scenarios, using tools like <strong>k6</strong> and <strong>JMeter</strong>.</p>
      <p><strong>CI/CD:</strong> push → GitHub Actions → install deps → start app → run API tests (<code>npx playwright test tests/api</code>) → run UI tests → reports → <strong>quality gate</strong>. Run on pull requests and key branches, and keep reports and failure artifacts.</p>` },
    { h: "Test Case Template, Endpoint Matrix & Negative Checklist", body: `
      <p><strong>API test case fields:</strong> ID, title, preconditions, endpoint, method, headers, auth, path/query params, body, test data, steps, expected status, expected headers, expected response/schema, expected DB state, priority, severity.</p>
      <p><em>Example: TC-API-001: Create contact with valid data. <code>POST /contacts</code> → expect <code>201 Created</code>; verify the generated ID, then <code>GET /contacts/{id}</code> to confirm the resource exists.</em></p>
      <p><strong>For every endpoint, ask:</strong> Is the method and URL correct? Who can access it? Which headers, parameters and body fields are required or valid? Are data types, status codes, schema and returned data correct? Are errors safe and useful? Are authorization boundaries enforced? Are side effects correct? What happens under concurrency and load?</p>
      <p><strong>Essential negative checklist:</strong> missing required field · empty string · null · wrong type · invalid format · too short / too long · boundary −1 / boundary / +1 · negative · zero · very large number · unknown ID · missing ID · duplicate request · invalid JSON · empty JSON · missing/wrong <code>Content-Type</code> · missing/invalid auth · expired token · insufficient permissions · wrong user · unsupported method · rate limit · large payload · unexpected parameters · special characters · Unicode · injection-like input · HTML/script-like input.</p>` },
    { h: "The QA Mindset, Roadmap & Portfolio", body: `
      <ul>
        <li><strong>Beginner:</strong> Does the API return 200?</li>
        <li><strong>Stronger:</strong> Does it return the correct status, schema, data, headers, permissions and side effects?</li>
        <li><strong>Advanced:</strong> What if two users call it at once, the token expires, the payload is malformed, the resource belongs to another tenant, the DB is down, a third party returns junk, or the request is repeated many times?</li>
      </ul>
      <p>The goal is <strong>risk-based API testing</strong>, not just sending requests.</p>
      <p><strong>Junior QA learning roadmap:</strong></p>
      <ol>
        <li>HTTP/HTTPS, URLs, methods, headers, status codes, JSON</li>
        <li>Postman: collections, environments, variables, scripts, assertions</li>
        <li>Positive/negative, boundaries, equivalence partitioning, decision tables, state transitions, data-driven</li>
        <li>Basic Auth, Bearer, JWT, OAuth, API keys</li>
        <li>CRUD, pagination, filtering, sorting, file upload, idempotency, concurrency, webhooks, async APIs</li>
        <li>OpenAPI/Swagger, JSON Schema, contract testing, schema drift</li>
        <li>OWASP API Top 10, authorization, rate limiting, data exposure</li>
        <li>Playwright API, TypeScript, Postman scripts and CLI</li>
        <li>k6/JMeter: load, stress, spike, soak</li>
        <li>Git, GitHub Actions, Jenkins, reporting, artifacts, quality gates</li>
      </ol>
      <p><strong>Portfolio project blueprint:</strong> test strategy, test plan, endpoint inventory, positive/negative/boundary tests, auth and authorization tests, CRUD tests, schema/contract tests, security checklist, Postman collection, Playwright API automation, test-data management, CI/CD, HTML/Allure reporting, defect examples, and a README explaining the approach.</p>
      <p><strong>Resources:</strong> <a href="https://learning.postman.com/docs/tests-and-scripts/tests-and-scripts/" target="_blank" rel="noopener">Postman tests &amp; scripts</a> · <a href="https://api-security.owasp.org/editions/2023/en/0x11-t10/" target="_blank" rel="noopener">OWASP API Security Top 10</a> · <a href="https://spec.openapis.org/oas/latest.html" target="_blank" rel="noopener">OpenAPI Specification</a> · <a href="https://learning.postman.com/docs/tests-and-scripts/running-collections/running-collections-overview/" target="_blank" rel="noopener">Running Postman collections in CI</a></p>` }
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
      </ul>` },
    { h: "7.8 Exam Blueprint: Format & Chapter Weighting", body: `
      <p>CTFL v4.0 was released in 2023 and applies across Waterfall, Agile, DevOps and continuous delivery. The exam at a glance:</p>
      <ul>
        <li><strong>40 multiple-choice questions</strong>, 1 point each, in <strong>60 minutes</strong> (75 minutes for non-native speakers).</li>
        <li><strong>Pass mark: 65%</strong>, i.e. <strong>26 of 40</strong>. There's no negative marking, so answer every question.</li>
        <li>Closed book. No prerequisites. The certificate doesn't expire.</li>
      </ul>
      <div class="table-wrap"><table>
        <thead><tr><th>Ch.</th><th>Topic</th><th>Questions</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Fundamentals of Testing</td><td>8</td></tr>
          <tr><td>2</td><td>Testing Throughout the SDLC</td><td>6</td></tr>
          <tr><td>3</td><td>Static Testing</td><td>4</td></tr>
          <tr><td>4</td><td>Test Analysis and Design</td><td><strong>11</strong> (highest weight)</td></tr>
          <tr><td>5</td><td>Managing the Test Activities</td><td>9</td></tr>
          <tr><td>6</td><td>Test Tools</td><td>2</td></tr>
        </tbody>
      </table></div>
      <p>Chapters 4 and 5 together make up about half the exam, and that's where the <strong>K3 (apply)</strong> questions concentrate: deriving partitions and boundaries, filling decision tables, walking state transitions, calculating coverage, prioritizing by risk.</p>
      <p><strong>Study path:</strong> read the official syllabus PDF and the ISTQB glossary from istqb.org; drill K3 techniques until they're automatic; take at least one full, timed 40-question mock exam and review it chapter by chapter; choose accredited training or self-study, since both are valid routes. Pay attention to what v4.0 added: DevOps/CI-CD context, collaboration-based approaches (ATDD, BDD), and more emphasis on risk-based testing.</p>
      <p><em>Always check exam details against the current official syllabus. Figures here reflect v4.0.</em></p>` },
    { h: "7.9 Beyond Foundation: The ISTQB Ladder", body: `
      <p><strong>Agile Tester extension (CTFL-AT)</strong>: the agile testing mindset, the tester's role in Scrum and Kanban, the "three amigos" (business, development and testing perspectives discussing a story together), Definition of Done, and the <strong>agile testing quadrants</strong> (Crispin/Gregory, after Marick):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Quadrant</th><th>Focus</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>Q1</td><td>Technology-facing, supports the team</td><td>Unit and component tests</td></tr>
          <tr><td>Q2</td><td>Business-facing, supports the team</td><td>Functional and story tests, examples</td></tr>
          <tr><td>Q3</td><td>Business-facing, critiques the product</td><td>Exploratory, usability, UAT</td></tr>
          <tr><td>Q4</td><td>Technology-facing, critiques the product</td><td>Performance, security, other non-functional</td></tr>
        </tbody>
      </table></div>
      <p><strong>Advanced Level (CTAL)</strong>, three modules:</p>
      <ul>
        <li><strong>Test Analyst</strong>: advanced black-box techniques, usability, reviews, defect analysis.</li>
        <li><strong>Technical Test Analyst</strong>: deeper white-box coverage including MC/DC, security and performance test design, automation architecture.</li>
        <li><strong>Test Manager</strong>: strategy, risk, estimation, metrics, people and process improvement.</li>
      </ul>
      <p><strong>Expert Level (CTEL)</strong> covers topics such as test management and improving the test process. <strong>Specialist</strong> streams include Test Automation Engineer, Agile Technical Tester, and mobile, automotive, security and AI testing.</p>
      <p>A common sequence: CTFL → Agile Tester or Test Automation Engineer → the CTAL module that matches your role.</p>` }
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
      <p><strong>Automated scanners catch roughly 30-40% of accessibility issues</strong> — they're excellent at objective checks (contrast ratios, missing attributes) but can't judge whether alt text is actually meaningful or whether a keyboard-only user can complete a full workflow without a mouse. A real accessibility test pass always includes manual keyboard-only navigation and at least spot-checking with a screen reader.</p>` },
    { h: "8.10 Competency Ladder: Junior → Mid → Senior → Lead", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Level</th><th>What it looks like</th><th>Typical certification goal</th></tr></thead>
        <tbody>
          <tr><td><strong>Junior</strong> (0–2 yrs)</td><td>Executes well-defined test cases; writes clear, reproducible bug reports; learns EP/BVA; follows the test plan; runs existing automation.</td><td>ISTQB CTFL within the first year</td></tr>
          <tr><td><strong>Mid</strong> (2–5 yrs)</td><td>Designs test cases independently and picks techniques by risk; spots requirement gaps; owns features end to end; builds and maintains automation, debugs flaky tests, integrates CI; contributes to test plans; mentors juniors informally.</td><td>CTFL + Agile Tester or Test Automation Engineer</td></tr>
          <tr><td><strong>Senior</strong> (5+ yrs)</td><td>Defines test strategy; owns risk analysis and exit criteria and influences release decisions; designs automation frameworks and CI/CD test pipelines; mentors formally; goes deep in at least one specialty (performance, security, mobile).</td><td>The CTAL module matching the role</td></tr>
          <tr><td><strong>Lead / Head of QA</strong></td><td>Sets organization-wide strategy, standards and quality culture; develops other seniors; communicates quality posture to leadership.</td><td>Full CTAL, Expert Level in a specialty</td></tr>
        </tbody>
      </table></div>
      <p>Years are only a rough guide. Promotion follows demonstrated behavior, not time served.</p>` },
    { h: "8.11 Development Plan, Career Tracks & Metrics to Avoid", body: `
      <p><strong>A personal development plan:</strong></p>
      <ol>
        <li><strong>Current level</strong> for each competency (test design, automation, process and strategy, defect communication, leadership), with evidence.</li>
        <li><strong>Target level</strong> and timeframe.</li>
        <li><strong>Gaps</strong>: the specific behaviors to develop.</li>
        <li><strong>Actions</strong>: stretch projects, certification, mentoring, reading (e.g. <em>Lessons Learned in Software Testing</em>, <em>Explore It!</em>, <em>Continuous Delivery</em>).</li>
        <li><strong>Checkpoints</strong>: a quarterly self-review against the ladder.</li>
      </ol>
      <p><strong>Career tracks:</strong></p>
      <ul>
        <li><strong>Individual contributor:</strong> manual QA → automation engineer (SDET) → senior SDET → principal QA / QA architect.</li>
        <li><strong>Management:</strong> QA → team lead → QA manager → head of quality.</li>
        <li><strong>Specialization:</strong> performance engineering, security/AppSec, mobile, accessibility, AI/ML testing.</li>
      </ul>
      <p><strong>High-leverage habits:</strong> learn to read code and logs; master SQL and HTTP; practice explaining quality risk to non-testers; contribute to open-source test tools; write about testing to build visibility.</p>
      <p><strong>Metrics worth adding to 8.6:</strong> <em>defect leakage</em> (defects found after release vs before), <em>rejection rate</em> (bug reports rejected as invalid), <em>MTTR</em> (mean time to repair), and <em>automation ROI</em> (runs × time saved − maintenance cost).</p>
      <p><strong>Anti-metrics to avoid:</strong> lines of test code, raw test count, pass rate on its own, coverage percentage as the only exit gate, and anything that penalizes testers for finding bugs.</p>` }
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
      <p>This closes the loop with 9.3 and 9.4: a pipeline can be perfectly staged and a system perfectly observable in production, but if the test results themselves aren't reported in a way people actually act on, none of that architecture pays off.</p>` },
    { h: "9.7 Test Strategy vs. Test Plan & Risk-Based Test Architecture", body: `
      <div class="table-wrap"><table>
        <thead><tr><th></th><th>Test strategy</th><th>Test plan</th></tr></thead>
        <tbody>
          <tr><td>Level</td><td>Organization or product, and stable over time</td><td>Project or release</td></tr>
          <tr><td>Covers</td><td>Approach, tools, environments, automation policy, defect workflow</td><td>Scope, schedule, resources, risks, entry/exit criteria, deliverables</td></tr>
        </tbody>
      </table></div>
      <p><strong>Risk-based test architecture:</strong></p>
      <ol>
        <li>Identify risk items: features, integrations, data flows.</li>
        <li>Score each by <strong>impact × likelihood</strong>.</li>
        <li>Allocate effort in proportion to the score, and pick techniques by risk level. High risk gets decision tables, boundary analysis and deeper coverage; low risk gets smoke and sanity checks.</li>
        <li>Re-assess every build, because risks change.</li>
      </ol>
      <p><strong>Product risks</strong> are what could go wrong in the product (wrong calculations, data loss, security holes). <strong>Project risks</strong> are what could derail the testing itself (late builds, unstable environments, losing people).</p>
      <p><strong>Configuration management</strong> applies to all testware: keep test cases, scripts, data sets and environment configs under version control.</p>` },
    { h: "9.8 Process Architecture & Quality Culture", body: `
      <p><strong>Map testing onto delivery:</strong> clarify acceptance criteria during backlog refinement, hold "three amigos" conversations, and build test gates into the Definition of Done.</p>
      <ul>
        <li><strong>Entry criteria</strong>: build deployed, environment stable, test data ready, blockers cleared.</li>
        <li><strong>Exit criteria</strong>: coverage targets met, defect gates passed (e.g. no open P1s), sign-off.</li>
      </ul>
      <p><strong>Automation placement and design:</strong> unit tests pre-commit, API and integration tests on merge, E2E nightly or pre-release, performance on a schedule. Use stable IDs or <code>data-*</code> attributes for locators rather than brittle XPath. Tag tests (smoke, regression), run them in parallel, keep a quarantine lane for flaky tests, and allow retries only for genuine infrastructure flakiness. Design for <strong>testability</strong>: ask developers for test hooks, deterministic modes, fake clocks and API-level access.</p>
      <p><strong>Feedback loops:</strong> root-cause analysis of defects (<strong>5 Whys</strong>, <strong>fishbone/Ishikawa</strong> diagrams), and process-improvement models such as <strong>TMMi</strong> and <strong>TPI</strong>.</p>
      <p><strong>Reporting:</strong> test progress (planned vs run vs passed), defect trend burn-down, and a quality assessment that states the <em>residual risk</em>.</p>
      <p><strong>Quality culture:</strong> quality is the whole team's responsibility. Testers advocate for it; everyone builds it in. Shift left <em>and</em> right: production monitoring, error tracking and post-release feedback feed new tests. Because testing shows the presence of defects, not their absence, communicate <strong>confidence levels, not absolutes</strong>.</p>` }
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
      <p>None of this makes a QA team responsible for full regulatory compliance — but knowing these concerns exist is what lets a tester recognize when a finding ("test data contains real customer emails") is actually a compliance issue, not just a data-hygiene nitpick.</p>` },
    { h: "10.8 Practical Security Test Ideas & Shift-Left Triage", body: `
      <p>Security checks a QA engineer can run as part of normal feature testing (in an authorized environment):</p>
      <ul>
        <li><strong>Fuzz inputs</strong>: malformed, oversized, Unicode, null bytes. It's the classic ad hoc and error-guessing hybrid.</li>
        <li><strong>Try to bypass auth</strong>: change user IDs in URLs and API calls; send expired, missing or tampered tokens.</li>
        <li><strong>Check security headers</strong>: <code>Content-Security-Policy</code>, <code>Strict-Transport-Security</code> (HSTS), <code>X-Frame-Options</code>, and cookie flags <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code>.</li>
        <li><strong>Verify rate limiting and account lockout</strong> against brute-force login attempts.</li>
        <li><strong>Look for data exposure</strong>: sensitive data in logs, API responses or URLs; TLS in transit; encryption at rest.</li>
        <li><strong>Look for misconfiguration</strong>: default credentials, verbose error pages, exposed admin endpoints, over-permissive CORS.</li>
      </ul>
      <p><strong>Tools:</strong> OWASP ZAP, Burp Suite, nmap, sqlmap, semgrep, Trivy.</p>
      <p><strong>Shift-left integration:</strong></p>
      <ul>
        <li>Run SAST, DAST and SCA (dependency scanning) in <strong>CI</strong>, not only before a release. Vulnerable libraries, such as the Log4Shell class of issue, are caught by automated SCA.</li>
        <li>Gate merges on critical findings, and triage by severity using <strong>CVSS</strong> scores.</li>
        <li>Put security defects in the <strong>same defect workflow</strong> as other bugs. Severity still isn't the same as priority.</li>
        <li>Add a security checklist to each story's review, and support developers with secure-coding training and security champions.</li>
      </ul>` }
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
      <p><strong>Continuous testing</strong> — the practice of running automated tests continuously throughout the pipeline (not just before release) so feedback on every change arrives within minutes — ties this module directly back to Module 9.3's pipeline architecture: none of these tools deliver value sitting outside a pipeline that actually runs them on every change.</p>` },
    { h: "11.5 Performance Metrics & Practice Rules", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Type</th><th>Question it answers</th></tr></thead>
        <tbody>
          <tr><td>Load</td><td>Does the system meet its SLAs at the expected peak load?</td></tr>
          <tr><td>Stress</td><td>Where is the breaking point, and does it recover?</td></tr>
          <tr><td>Spike</td><td>What happens on sudden, extreme bursts?</td></tr>
          <tr><td>Soak / endurance</td><td>Do leaks or degradation appear under sustained load?</td></tr>
          <tr><td>Scalability</td><td>Does performance keep pace when resources and load are scaled up?</td></tr>
        </tbody>
      </table></div>
      <p><strong>Key metrics:</strong> response time, reported as <strong>percentiles</strong> (P95/P99 matter more than averages, because an average hides the slow tail that real users feel); throughput (requests per second); error rate; resource utilization (CPU, memory, I/O, database, network).</p>
      <p><strong>Practice rules:</strong></p>
      <ul>
        <li>Define <strong>SLAs/SLOs before testing</strong>, e.g. "P95 under 800 ms at 500 concurrent users", and test against those numbers rather than "feels fast".</li>
        <li>Find the <strong>bottleneck resource</strong>, not just the slow endpoint.</li>
        <li>Model realistic user journeys with <strong>think time</strong>, and isolate the test environment.</li>
        <li>Common tools: JMeter, k6, Gatling, Locust, LoadRunner.</li>
      </ul>` },
    { h: "11.6 Accessibility, Visual Regression & Localization", body: `
      <ul>
        <li><strong>Usability testing</strong>: watch real users complete tasks and measure task success, time on task and error count.</li>
        <li><strong>Heuristic evaluation</strong>: an expert review against Nielsen's 10 usability heuristics.</li>
        <li><strong>UI functional testing</strong>: forms, navigation, validation states, cross-browser and cross-device behavior.</li>
        <li><strong>Visual regression testing</strong>: pixel- or DOM-diff tools (Percy, Applitools, BackstopJS) catch unintended visual changes that functional assertions miss.</li>
        <li><strong>Accessibility (a11y)</strong> against WCAG 2.1/2.2 levels A, AA and AAA. Automated tools such as axe and Lighthouse catch only about <strong>30–40%</strong> of issues, so manual checks are mandatory: keyboard-only navigation, screen readers (NVDA, VoiceOver), contrast and focus order. See Module 8.9 for tools.</li>
        <li><strong>Localization / i18n</strong>: date, number and currency formats, translations, text expansion, right-to-left (RTL) layouts.</li>
      </ul>` },
    { h: "11.7 What to Automate & the Test Pyramid", body: `
      <p><strong>Good automation candidates:</strong> stable, repeated checks (smoke, regression, build verification); expensive manual work (load tests, data-heavy checks, cross-browser matrices); critical paths worth the maintenance (login, checkout, core API).</p>
      <p><strong>Don't automate:</strong> one-off exploration, UI that's still changing every sprint, usability judgment, or anything whose maintenance cost exceeds the time it saves.</p>
      <pre><code>       E2E         ← few: slow, fragile, high value
      /   \\
   Integration     ← a moderate number
  /     |     \\
 Unit (many)       ← fast, isolated, the foundation</code></pre>
      <p>For microservices, the <strong>testing honeycomb</strong> and <strong>testing trophy</strong> shift the weight toward integration tests and away from end-to-end tests.</p>
      <p><strong>Practice rules:</strong></p>
      <ul>
        <li>Treat test code like production code: version control, review, no duplication, refactoring.</li>
        <li>Prefer <strong>API-level over UI-level checks</strong> for the same coverage; they're cheaper and more stable.</li>
        <li>Isolate tests: reset data between runs and never depend on execution order.</li>
        <li>Fail fast and clearly: an assertion should name the behavior that broke.</li>
        <li><strong>Quarantine flaky tests immediately.</strong> A red suite people have learned to ignore is worse than no suite.</li>
        <li>Run the fastest suites on every commit and slower ones on merge or nightly.</li>
      </ul>` }
  ]
},
{
  id: "ai-testing",
  num: 12,
  title: "AI Testing: Using AI & Testing AI",
  summary: "Two disciplines in one: AI-assisted and agentic testing tools, and how to test machine-learning and generative-AI systems.",
  takeaway: "\"AI testing\" means two different things: using AI to help test software, and testing software that is itself built on AI. For AI tools, judge them by how much maintenance they save, not how fast they write tests. For AI systems, replace exact expected results with statistical oracles: metrics, tolerances and continuous monitoring.",
  lessons: [
    { h: "12.1 Two Meanings of \"AI Testing\"", body: `
      <p>The term covers two distinct disciplines, and it helps to keep them apart:</p>
      <div class="table-wrap"><table>
        <thead><tr><th></th><th>Using AI for testing</th><th>Testing AI-based systems</th></tr></thead>
        <tbody>
          <tr><td>What</td><td>AI-assisted or agentic tools that generate, maintain and run tests</td><td>Verifying systems built on machine learning (ML) or generative AI</td></tr>
          <tr><td>The AI is…</td><td>Your tool</td><td>The product under test</td></tr>
          <tr><td>Main question</td><td>Does this tool make our testing cheaper and better?</td><td>Does this model behave well enough, fairly and safely?</td></tr>
          <tr><td>Covered in</td><td>12.2, 12.3 and Module 8.5</td><td>12.4 to 12.7</td></tr>
        </tbody>
      </table></div>
      <p>ISTQB draws the same line. Its Certified Tester AI Testing (<strong>CT-AI</strong>) certification focuses on testing AI-based systems; according to ISTQB's announcement of <strong>CT-AI v2.0</strong>, the "using AI for testing" material was dropped from the syllabus so it could concentrate on that. (See 12.8 for the certification path.)</p>` },
    { h: "12.2 Using AI for Testing: What the Tools Do", body: `
      <p>Four capabilities define AI-augmented testing today:</p>
      <ul>
        <li><strong>Generative test creation</strong>: large language models (LLMs) draft test plans, test cases and automation scripts from requirements, tickets or plain-English goals.</li>
        <li><strong>Self-healing automation</strong>: when the UI or API changes, the tool proposes a repair instead of leaving a broken suite. This targets the real cost driver of automation, which is maintenance.</li>
        <li><strong>Intelligent failure triage</strong>: clustering failed tests, suggesting root causes, and spotting flaky tests.</li>
        <li><strong>Agentic testing</strong>: autonomous agents explore an application, design tests and judge the results. The move from <em>assisted</em> (the AI helps a person) to <em>agentic</em> (the AI acts on its own within limits) is the main trend in current tools.</li>
      </ul>
      <p><strong>Keep a human in the loop.</strong> AI output is a first draft. A generated test still needs someone to confirm it asserts the behavior that matters, not merely that it runs and passes. An AI-generated test that is green but never exercised the real bug path is worse than no test, because it creates false confidence. Module 8.5 covers the day-to-day tooling and the data-handling risks of sending code or customer data to third-party AI services.</p>` },
    { h: "12.3 Choosing AI Testing Tools", body: `
      <p>The market roughly splits into three groups:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Category</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>AI-powered platforms</td><td>ACCELQ, mabl, Testsigma, KaneAI</td></tr>
          <tr><td>Open-source frameworks, increasingly with AI add-ons</td><td>Selenium, Playwright, Cypress, Appium, k6</td></tr>
          <tr><td>Enterprise suites</td><td>Tricentis Tosca and qTest, Parasoft SOAtest, Katalon, Worksoft, BrowserStack</td></tr>
        </tbody>
      </table></div>
      <p>Analyst firms now treat AI-augmented software testing as its own market category, and Gartner has published a Magic Quadrant for it. Vendor lists change fast, so treat the examples above as a snapshot, not a recommendation.</p>
      <p><strong>How to evaluate a tool:</strong></p>
      <ol>
        <li><strong>Judge by recurring maintenance cost, not authoring speed.</strong> Writing a test is a one-off cost; keeping it alive through every redesign is the bill that decides return on investment.</li>
        <li><strong>Check CI/CD integration</strong> (Jenkins, GitHub Actions, GitLab CI, Azure DevOps), with tests triggered automatically on commits and pull requests.</li>
        <li><strong>Test the "agentic" claim.</strong> Many vendors market agentic testing while offering little more than script generation. Run a trial on your own application.</li>
        <li><strong>Check data handling</strong>: where your code, screenshots and test data go, and whether they are used for training.</li>
        <li><strong>Make sure people can still read the tests.</strong> AI-authored automation becomes unmaintainable just like human-authored automation if nobody understands it.</li>
      </ol>` },
    { h: "12.4 Why AI-Based Systems Are Hard to Test", body: `
      <p>Traditional testing assumes a <em>test oracle</em>: a way to know the one correct result. AI systems break that assumption:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Characteristic</th><th>What it means for testing</th></tr></thead>
        <tbody>
          <tr><td><strong>Probabilistic, non-deterministic output</strong></td><td>There is no single expected result. Oracles become statistical: accuracy, precision and recall, acceptable tolerances.</td></tr>
          <tr><td><strong>Self-learning, evolving behavior</strong></td><td>A system that passes today can fail tomorrow with no code change, so regression testing becomes continuous.</td></tr>
          <tr><td><strong>Reliance on data</strong></td><td>Quality is decided by the training and test data, so data preparation and data quality become test activities.</td></tr>
          <tr><td><strong>Complexity and opacity</strong></td><td>Deep neural networks are hard to interpret, so transparency and explainability need testing too.</td></tr>
          <tr><td><strong>Bias and ethics</strong></td><td>Fairness across groups (e.g. age, gender, region) has to be tested explicitly; it won't show up by accident.</td></tr>
          <tr><td><strong>Dynamic specifications</strong></td><td>Behavior isn't fixed logic written in code; it emerges from data, so the specification itself is statistical.</td></tr>
        </tbody>
      </table></div>
      <p>The practical shift: from "does output X equal expected Y?" to "across a representative dataset, is the model good enough, fair enough and safe enough, and does it stay that way?"</p>` },
    { h: "12.5 Measuring ML Models: The Confusion Matrix", body: `
      <p>For a classifier, testers need to calculate and interpret the standard metrics. They all come from the <strong>confusion matrix</strong>. Example: a fraud model checks 1,000 transactions, 60 of which are really fraud.</p>
      <div class="table-wrap"><table>
        <thead><tr><th></th><th>Predicted fraud</th><th>Predicted legitimate</th></tr></thead>
        <tbody>
          <tr><td><strong>Actually fraud</strong> (60)</td><td>True positive (TP) = 40</td><td>False negative (FN) = 20</td></tr>
          <tr><td><strong>Actually legitimate</strong> (940)</td><td>False positive (FP) = 10</td><td>True negative (TN) = 930</td></tr>
        </tbody>
      </table></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Metric</th><th>Formula</th><th>Example</th><th>Question it answers</th></tr></thead>
        <tbody>
          <tr><td>Accuracy</td><td>(TP + TN) / all</td><td>970 / 1,000 = <strong>97%</strong></td><td>How often is the model right overall?</td></tr>
          <tr><td>Precision</td><td>TP / (TP + FP)</td><td>40 / 50 = <strong>80%</strong></td><td>When it flags fraud, how often is it really fraud?</td></tr>
          <tr><td>Recall (sensitivity)</td><td>TP / (TP + FN)</td><td>40 / 60 = <strong>67%</strong></td><td>Of all real fraud, how much did it catch?</td></tr>
          <tr><td>F1 score</td><td>2 × P × R / (P + R)</td><td>≈ <strong>0.73</strong></td><td>One number balancing precision and recall</td></tr>
        </tbody>
      </table></div>
      <p><strong>The accuracy trap:</strong> 97% sounds excellent, yet the model misses a third of all fraud. On imbalanced data, a model that simply answered "legitimate" every time would still score 94%. Always look past accuracy.</p>
      <p><strong>Precision or recall?</strong> It depends on which mistake costs more. Missing a disease or fraud case (a false negative) usually makes <em>recall</em> the priority. Wrongly blocking good customers or flooding a team with false alarms (false positives) makes <em>precision</em> the priority. Agree the target metrics and thresholds with the business <em>before</em> testing, just as you would agree SLAs for performance (Module 11).</p>` },
    { h: "12.6 Data, Test Levels & Production Monitoring", body: `
      <p><strong>Two ML-specific test levels:</strong></p>
      <ul>
        <li><strong>Model testing (offline)</strong>: evaluate the model on held-out data it never saw during training, before deployment.</li>
        <li><strong>Post-deployment testing (online)</strong>: monitor the live model, because real-world data drifts. <em>Data drift</em> means the inputs change (new customer groups, new products); <em>concept drift</em> means the relationship between inputs and the right answer changes (fraud patterns evolve). Both degrade a model silently.</li>
      </ul>
      <p><strong>Where testers add the most value in the ML workflow:</strong></p>
      <ol>
        <li><strong>Training data</strong>: selection, quality, labeling errors, representativeness and bias.</li>
        <li><strong>Test data design</strong>: edge cases, rare classes and adversarial inputs (inputs crafted to fool the model).</li>
        <li><strong>Metric definition</strong>: which metrics and thresholds count as "good enough".</li>
        <li><strong>Model evaluation</strong>: running and interpreting the metrics, including fairness across groups.</li>
        <li><strong>Production monitoring</strong>: drift detection and alerts.</li>
      </ol>
      <p><strong>Test infrastructure</strong> changes too: reproducible data pipelines, versioned models and datasets, and statistical analysis of results replace deterministic pass/fail gates. <strong>ISO/IEC 25059</strong> extends the ISO/IEC 25010 (SQuaRE) quality model with AI-specific characteristics such as adaptability and functional suitability for ML, and is a useful checklist for which qualities to test.</p>` },
    { h: "12.7 Testing Generative AI & LLM Features", body: `
      <p>When the product includes an LLM feature (a chatbot, a search assistant, a summarizer), exact-match assertions stop working, because the same prompt can produce different valid answers. Test with these techniques instead:</p>
      <ul>
        <li><strong>Rubric-based evaluation</strong>: score answers against criteria (correct, complete, on-topic, right tone) rather than an exact string. Build a <em>golden set</em> of representative prompts with reviewed reference answers and rerun it after every model or prompt change.</li>
        <li><strong>Hallucination checks</strong>: look for confidently stated but false information, such as invented facts, citations or product features.</li>
        <li><strong>Groundedness</strong>: when the system answers from supplied documents (retrieval-augmented generation, RAG), check that every claim is supported by those documents.</li>
        <li><strong>Prompt injection and jailbreaks</strong>: try instructions hidden in user input or retrieved content ("ignore previous instructions…") and attempts to bypass safety rules.</li>
        <li><strong>Safety and bias</strong>: harmful, toxic or discriminatory output; leaks of personal data or system prompts.</li>
        <li><strong>Graceful degradation</strong>: on ambiguous or adversarial input, the system should ask, refuse or hedge, not produce something harmful or nonsensical.</li>
      </ul>
      <p><strong>Report pass rates, not single runs.</strong> Run each prompt several times and state results as rates ("92% of answers met the rubric"), with a threshold agreed in advance. Automated "LLM-as-judge" scoring can scale evaluation, but spot-check it with human reviewers, because the judge can be wrong too.</p>` },
    { h: "12.8 Certification Path & Key Takeaways", body: `
      <p><strong>ISTQB Certified Tester AI Testing (CT-AI)</strong> is a specialist certification that requires the Foundation Level (CTFL, Module 7) first. According to ISTQB's v2.0 announcement, it covers ML workflows, data preparation, performance evaluation with the metrics from 12.5, generative-AI testing, and ISO/IEC 25059. Exams are offered through ISTQB member boards and exam providers such as BCS and AT*SQA. Check istqb.org for the current syllabus version and exam rules before booking.</p>
      <p><strong>Key takeaways:</strong></p>
      <ol>
        <li>"AI testing" means two things: using AI to test, and testing AI. Both now have established practices and certification paths.</li>
        <li>AI testing tools pay off by reducing <strong>maintenance</strong>, not just by writing tests faster. Keep a human reviewing what they produce.</li>
        <li>Testing AI systems replaces exact expected results with <strong>statistical oracles</strong>: metrics, tolerances and continuous monitoring.</li>
        <li>Accuracy alone can mislead; choose precision, recall or F1 based on which mistakes cost the most.</li>
        <li>The ISTQB CT-AI syllabus is the standard reference curriculum for testing AI-based systems.</li>
      </ol>` }
  ]
}
];
// __KB_V1__
