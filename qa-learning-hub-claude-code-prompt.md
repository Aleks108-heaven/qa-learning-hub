# Build Prompt: "QA Learning Hub" — Interactive Software Testing Tutorial App

> Paste this entire document into Claude Code as your build instructions. It contains the project brief, feature spec, and the real source content (extracted from 6 QA reference documents) needed to populate the app — no placeholder/lorem-ipsum content required.

---

## 1. Project Overview

Build **QA Learning Hub**, a self-contained, front-end web application that teaches software testing fundamentals through three integrated experiences:

1. **Tutorials** — structured lessons covering 7 core QA topics (6 practical/foundational modules + 1 certification-prep module)
2. **Quizzes** — auto-graded multiple-choice quizzes per topic, plus a mixed "final exam" mode
3. **Glossary** — a searchable, filterable reference of 100+ software testing terms

**Audience:** beginner-to-intermediate QA engineers, SDETs, and developers who want a structured way to learn manual testing, test design techniques, and API testing fundamentals.

**Tone:** clear, practical, example-driven — mirrors a well-organized QA training course, not a dry spec sheet.

You (Claude Code) have full discretion over tech stack, file structure, and state persistence approach (static vs. app with saved progress) — pick whatever is simplest to build and run reliably. A single-page app with client-side routing and no backend is a perfectly acceptable default if you don't have a stronger reason to add one.

---

## 2. Content Modules (Tutorials)

Build **7 tutorial modules**, one per source topic below (Module 7 is a distinct certification-prep track — see its own intro note). Each module should open with a short intro/"key takeaway" callout, then break into the listed sections as separate lesson pages or scrollable sections with a side/top navigation between them. Preserve the actual facts, numbers, and examples below — don't invent statistics.

### Module 1 — Manual Testing Fundamentals
**Intro takeaway:** Manual testing remains a vital part of modern QA — flexibility and human intuition catch complex bugs early, ensuring reliable user experiences. 100% automation is not possible, which makes manual testing imperative.

Lessons:
- **What is Manual Testing?** — testing executed without automation tools; tester manually performs actions (clicking, entering inputs, navigating) to verify behavior against requirements. No programming knowledge required.
- **Why It's Important** — UX validation (human judgment on placement/aesthetics/feedback — over 70% of projects cite UX as a primary reason for manual testing); catching bugs early is far cheaper (a defect found at implementation costs ~6x more to fix than one caught at design, per IBM System Sciences Institute); cost-effective for short-lifecycle/frequently-changing-UI projects.
- **Primary Goals** — Bug Identification, Requirement Validation, User Experience Assurance, Regression Confidence, Quality Delivery.
- **Characteristics** — Human-Centric, Exploratory Nature, Adaptability, Time-Intensive, Error-Prone but Insightful.
- **Types of Manual Testing** — Black Box, White Box, Grey Box; plus Unit, Integration, System, and Acceptance Testing.
- **How to Perform Manual Testing** — step-by-step workflow (requirement analysis → test case design → execution → defect logging → retesting/regression).
- **Case Studies** — Video Game UI testing; Hospital Management System testing (use as worked examples/scenarios in the lesson).
- **Myths vs. Reality** — common misconceptions about manual testing being obsolete/low-skill.
- **Challenges** — Time-Consuming, Repetitiveness, Human Error, Scalability Issues, Test Data Management, Environment Setup, Resource Dependency.
- **Manual vs. Automation Testing** — comparison table.
- **Common Tools** (for context, not hands-on) — Selenium, QTP/UFT, JMeter, LoadRunner, TestLink, Quality Center (ALM).
- **Advantages** — Human Insight, Flexibility, No Coding Required, Effective for Small Projects, Encourages Exploratory Testing.
- **Disadvantages** — Time-Consuming, Prone to Human Error, Limited Coverage, Not Scalable for large/complex apps.

### Module 2 — Software Testing Techniques & Test Case Design
**Intro takeaway:** Since exhaustive testing is impossible, structured techniques let testers achieve high coverage with minimal test cases by focusing on error-prone areas (boundaries, partitions, combinations, states).

Lessons:
- **The 7 Principles of Software Testing** — Testing Shows the Presence of Defects, Exhaustive Testing is Impossible, Early Testing Saves Time and Cost, Defect Clustering, Pesticide Paradox, Testing is Context-Dependent, Absence-of-Errors Fallacy.
- **Boundary Value Analysis (BVA)** — test at min/max and just inside/outside boundaries, since defects cluster there. *Worked example:* input valid range 1–10 → test boundary values **0, 1, 2, 9, 10, 11**.
- **Equivalence Class Partitioning (ECP)** — divide inputs into valid/invalid classes; test one representative value per class. *Worked example:* valid ranges 1–10 and 20–30 → five classes: `<1` (invalid), `1–10` (valid), `11–19` (invalid), `20–30` (valid), `>30` (invalid); sample test values: **-2, 3, 15, 25, 45**.
- **Decision Table Testing** — map input combinations to outputs in a cause-effect table. *Worked example:* a "Submit" button enables only when all form fields are filled. Steps: list inputs in rows → enumerate rule combinations in columns → fill in the combinations → record expected output per combination.
- **State Transition Testing** — model how input sequences move a system between states. *Worked example:* login with a PIN — correct PIN at any attempt → "Access Granted"; incorrect PIN 3 times in a row → "Account Blocked". Include a simple state table:

  | State | Correct PIN | Incorrect PIN |
  |---|---|---|
  | Start | Access Granted | 1st attempt |
  | 1st attempt | Access Granted | 2nd attempt |
  | 2nd attempt | Access Granted | 3rd attempt |
  | 3rd attempt | Access Granted | Account Blocked |
  | Access Granted | – | – |
  | Account Blocked | – | – |

- **Error Guessing** — using tester experience/intuition and historical defect data to anticipate likely problem areas; no formal steps, relies on skilled, experienced testers.
- **Advantages & Limitations** — advantages: better coverage, targets high-risk areas, reduces redundancy, catches issues early, boosts confidence. Limitations: no technique guarantees full defect detection, depends on tester skill, may miss integration/usability issues, limited automation support for some techniques.
- **Choosing the Right Technique** — align with project objectives, assess risk, fit the dev model (e.g., agile-friendly approaches for iterative systems), balance time/budget/skill constraints; best practice is combining multiple techniques rather than relying on one.

### Module 3 — Types of Software Testing (Reference Catalogue)
**Intro takeaway:** A "type" of testing is a classification with its own objective, strategy, and deliverables (e.g., Accessibility Testing validates the app is usable by people with disabilities). Understanding the landscape of testing types helps QA professionals pick the right combination for full coverage.

Lessons:
- **What is a Software Testing Type?** — definition and purpose of classifying testing activities.
- **The Testing Types Catalogue** — this is the primary source for the **Glossary** feature (Section 4 below has the full extracted list of 105 terms). In the tutorial module itself, present a curated "Top 20 Testing Types Every QA Should Know" (pick recognizable/high-value entries such as Acceptance, Accessibility, Agile, Alpha, Beta, API, Black Box, White Box, Gray Box, Exploratory, Functional, Non-functional, Load, Performance, Regression, Sanity, Smoke, Security, Stress, Usability Testing) as a lightweight intro, and link out to the full Glossary for the rest.
- **Categories** — group types conceptually: Functional, Non-Functional, Structural (White Box), Change-Related (Regression/Retesting), and Specialized (Security, Performance, Compatibility, etc.) — use this taxonomy to organize glossary filters (see Section 5).

### Module 4 — Ad Hoc Testing
**Intro takeaway:** Ad hoc testing is unplanned, undocumented testing where the tester tries to "break" the system using intuition and creativity — most valuable when time is short or as a supplement to structured testing.

Lessons:
- **What is Ad Hoc Testing?** — informal, unscripted; no test cases prepared in advance; a black-box approach.
- **When to Perform It** — early in development (before formal test cases exist); before official testing begins (smoke-check basics); after formal testing (catch what structured tests missed); when short on time; to explore a feature deeply; for usability checks; during beta testing.
- **Types of Ad Hoc Testing** — Buddy Testing, Pair Testing, Monkey Testing.
- **Advantages** — finds edge-case defects structured tests miss, requires no documentation overhead, fast, encourages creative thinking.
- **Disadvantages** — hard to reproduce/repeat, relies heavily on tester skill, poor traceability/coverage metrics, not suitable as the sole testing method.
- **Best Practices** — 1) Have good business knowledge, 2) target key/high-risk modules, 3) record every defect found, 4) pair up with another tester for fresh perspective.

### Module 5 — Exploratory Testing
**Intro takeaway:** Exploratory testing is simultaneous test design + execution — a "thinking" activity emphasizing investigation and learning, widely used in Agile. It is ad hoc testing *with a purpose*: structured and rigorous, not random.

Lessons:
- **What is Exploratory Testing?** — testers design and run tests on the fly, noting ideas before execution; personal freedom and responsibility of the individual tester.
- **Scripted vs. Exploratory Testing** — reproduce this comparison table in the lesson:

  | Scripted Testing | Exploratory Testing |
  |---|---|
  | Directed from requirements | Directed from requirements *and* exploring during testing |
  | Test cases determined well in advance | Test cases determined during testing |
  | Confirms testing against requirements | Investigates the system/application |
  | Emphasizes prediction and decision-making | Emphasizes adaptability and learning |
  | Confirmatory | Investigative |
  | About controlling tests | About improving test design |
  | Like reading a speech from a draft | Like having a spontaneous conversation |
  | The script is in control | The tester's mind is in control |

- **The SBTM Process (Session-Based Test Management)** — Step 1: Create a Bug Taxonomy (classification); Step 2: Define a Test Charter; Step 3: Time Box the session; Step 4: Review Results; Step 5: Debrief.
- **Pros & Cons** — Pros: finds more bugs, encourages creativity, requires less prep documentation, adapts quickly to changing requirements. Cons: depends heavily on tester skill, hard to measure coverage, difficult to repeat/reproduce exactly, less suited to strict compliance/audit needs.
- **When to Use It** — missing/ambiguous requirements, early iterations, critical applications needing deep investigation, and when experienced testers are available.

### Module 6 — REST API Testing
**Intro takeaway:** REST API testing validates RESTful web services by sending HTTP requests (GET, POST, PUT, DELETE) and checking the responses — no UI required.

Lessons:
- **What is REST?** — Representational State Transfer; an architectural style for building web services; widely used for cloud service communication. An API is a set of programming instructions/commands that let programs communicate and exchange functionality (e.g., a "Google API" exposing search, translation, calendar functions).
- **The 4 Core HTTP Methods** —
  - **GET** — retrieve data from the server via a URI; should have no side effects on data.
  - **POST** — create a new entity / send data to the server (e.g., form submissions, file uploads).
  - **PUT** — create a new entity or update an existing one.
  - **DELETE** — remove the resource(s) identified by a URI.
- **How to Test a REST API** — you need (1) a testing tool/framework and (2) either configured requests or custom test code. Common tools: Advanced REST Client, Postman, cURL.
- **Step-by-Step Testing Workflow** — open your REST client → enter the target API URL → select the HTTP method → set request headers → provide the request body (for POST/PUT) → submit the request → validate the response (status code, response body/schema, headers) against expected results.
- **Challenges of API Testing** — parameter combination selection, sequencing calls correctly, verifying just the output without a UI, integrating API tests into a GUI-based automation strategy.

### Module 7 — ISTQB® Certified Tester Foundation Level (CTFL) v4.0 Certification Track
**Source:** analyzed from *"ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0"* by Lucjan Stapp, Adam Roman & Michaël Pilaeten (Springer, 2024) — a 409-page commercially published exam-prep book. **Do not reproduce this book's text, worked examples, exercises, or sample exam questions in the app** (they're copyrighted). What follows is an original, independently-written module built around the book's *chapter/topic structure*, which mirrors the official public ISTQB Foundation Level syllabus (the syllabus itself, with its learning objectives and "K-level" codes, is freely published by ISTQB® for certification purposes). Treat this module as a **study-companion overview** of the certification, not a replacement for the syllabus or the book — and add a citation/"recommended reading" callout crediting the book by title and authors at the top of the module.

**Intro takeaway:** ISTQB® (International Software Testing Qualifications Board) Foundation Level is the entry-level, vendor-neutral certification for software testers worldwide. Its syllabus organizes testing knowledge into 6 chapters, each learning objective tagged with a "K-level" (K1 = remember, K2 = understand, K3 = apply) that signals how deeply the exam expects you to know it.

Lessons (one per official syllabus chapter):

- **7.0 How Certification Works** — the Foundation Level (CTFL) is the prerequisite for ISTQB's Advanced Level and Expert Level tracks; the exam is typically 40 multiple-choice questions, weighted by chapter and K-level, with a defined pass mark (~65%) — mention this framing without reproducing the book's exact exam-logistics tables.
- **7.1 Fundamentals of Testing** — what testing is and why it's necessary; testing vs. debugging; testing's contribution to project success; the relationship between testing and quality assurance; the distinction between a **root cause**, an **error** (a human mistake), a **defect** (a flaw in a work product caused by an error), and a **failure** (observable incorrect behavior caused by a defect). The **seven testing principles**: (1) testing shows the presence, not the absence, of defects; (2) exhaustive testing is impossible; (3) early testing saves time and money; (4) defects cluster together; (5) tests wear out (repeating the same tests stops finding new bugs); (6) testing is context-dependent; (7) absence-of-defects is a fallacy (a bug-free product that doesn't meet user needs can still fail). Core test activities (planning, monitoring & control, analysis, design, implementation, execution, completion) and testware (test plans, test cases, test data, test logs). The "whole-team approach" and the value of tester independence.
- **7.2 Testing Throughout the SDLC** — how the chosen development lifecycle model (sequential/Waterfall, iterative, Agile) shapes testing; DevOps and continuous delivery's impact on testing; the "shift-left" idea of testing earlier; retrospectives as a process-improvement mechanism. **Test levels** (component/unit, integration, system, acceptance) vs. **test types** (functional, non-functional, white-box/structural, change-related). Confirmation (re-)testing vs. regression testing. Maintenance testing and its triggers (modification, migration, retirement).
- **7.3 Static Testing** — testing work products (requirements, designs, code, test cases) *without executing them*; the value of early, frequent feedback; the formal **review process** (planning → kick-off → individual review → issue communication/analysis → fixing & reporting) and reviewer roles (author, moderator/facilitator, reviewers, scribe, manager). The four review types, from least to most formal: **Informal Review**, **Walkthrough**, **Technical Review**, and **Inspection** — and what makes reviews succeed (clear objectives, the right participants, a psychologically safe/blame-free culture).
- **7.4 Test Analysis and Design** — the three families of test techniques: **black-box** (behavior-based, no knowledge of internals), **white-box** (structure-based, uses code/architecture knowledge), and **experience-based** (uses tester intuition and history). Black-box techniques: **Equivalence Partitioning**, **Boundary Value Analysis**, **Decision Table Testing**, **State Transition Testing** (all already covered with worked examples in Module 2 — cross-link rather than duplicating). White-box techniques: **Statement Testing/Coverage** (has every executable statement been run at least once?) and **Branch Testing/Coverage** (has every decision outcome, true and false, been exercised?). Experience-based techniques: **Error Guessing**, **Exploratory Testing** (cross-link Modules 4 & 5), and **Checklist-Based Testing**. Collaboration-based approaches: writing user stories collaboratively, defining acceptance criteria, and **Acceptance Test-Driven Development (ATDD)**.
- **7.5 Managing the Test Activities** — **test planning** (purpose/content of a test plan, entry criteria vs. exit criteria, estimation techniques, test case prioritization); the **test pyramid** (more low-level automated tests, fewer high-level/UI tests) and the **testing quadrants** (mapping test types against "business-facing vs. technology-facing" and "supports the team vs. critiques the product"); **risk management** (risk = likelihood × impact; project risks vs. product risks; risk-based test prioritization and mitigation); **test monitoring, control, and completion** (metrics, test reports, communicating status to stakeholders); **configuration management**'s role in traceability; and **defect management** (the lifecycle and typical content of a defect report — summary, steps to reproduce, expected vs. actual result, severity, priority).
- **7.6 Test Tools** — categories of tools that support testing (test management, static analysis, test design, test data preparation, execution/automation, performance/monitoring, etc.) and the **benefits and risks of test automation** (benefits: repeatability, speed, objective results; risks: unrealistic expectations, maintenance cost, false sense of security, tool lock-in).

**App-specific notes for this module:**
- Present each of the 7 sub-lessons (7.0–7.6) as its own page/card, same as the other modules, with a "K-level" badge next to sub-topics where it adds value (e.g., "K3 — Apply" next to Equivalence Partitioning) to reinforce that this is exam-oriented content.
- Add a visible **"Recommended reading"** callout on this module's landing page: *"Stapp, L., Roman, A., & Pilaeten, M. (2024). ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0. Springer."* — pointing users to the full book/official ISTQB syllabus for the complete depth, exercises, and official practice exam this module summarizes.
- Do not label anything in this module as "official ISTQB questions" or "from the book" — all quiz content for this module must be original (see Section 3 additions below).

---

## 3. Quiz Feature

Build a quiz engine with:

- **Per-module quizzes** (5–8 questions each, multiple choice, 1 correct answer + 3 plausible distractors) drawn directly from the content above. Example seed questions to include verbatim or adapt:
  1. *(Manual Testing)* "According to the IBM System Sciences Institute, fixing a bug at implementation vs. at the design phase costs roughly how much more?" → **6x**
  2. *(Techniques)* "For a valid input range of 1–10, which values would Boundary Value Analysis test?" → **0, 1, 2, 9, 10, 11**
  3. *(Techniques)* "Which technique divides inputs into valid and invalid groups and tests one representative value from each?" → **Equivalence Class Partitioning**
  4. *(Ad Hoc Testing)* "Which of these is NOT a recognized type of Ad Hoc Testing?" → distractor should be a real testing type (e.g., Regression Testing) vs. correct answers **Buddy Testing / Pair Testing / Monkey Testing**
  5. *(Exploratory Testing)* "In SBTM, what comes immediately after defining the Test Charter?" → **Time Box**
  6. *(REST API)* "Which HTTP method both creates a new entity AND can update an existing one?" → **PUT**
  7. *(REST API)* "Which HTTP method should never have side effects on server data?" → **GET**
  8. *(ISTQB Fundamentals)* "Which of the seven testing principles states that running the same tests repeatedly eventually stops finding new bugs?" → **Tests wear out**
  9. *(ISTQB Fundamentals)* "A human mistake that leads to a flaw in code is called a defect. What is the human mistake itself called?" → **Error** (distractors: Fault, Failure, Root cause)
  10. *(ISTQB Static Testing)* "Which review type is the most formal, using defined roles, entry/exit criteria, and checklists?" → **Inspection** (distractors: Informal Review, Walkthrough, Technical Review)
  11. *(ISTQB Test Analysis & Design)* "Which white-box technique checks whether every executable line of code has been run at least once?" → **Statement Testing**
  12. *(ISTQB Test Management)* "In risk-based testing, risk level is typically calculated from which two factors?" → **Likelihood and impact**
  13. *(ISTQB Test Management)* "Which model favors many fast, low-level automated tests and fewer slow, high-level UI tests?" → **The Test Pyramid**
  14. *(ISTQB Test Tools)* "Which of these is a commonly cited *risk* (not benefit) of test automation?" → **Maintenance cost / false sense of security** (distractor options should include real benefits like "repeatability" and "speed" as wrong answers)

  Module 7 quiz should have its own 8–10 question bank spanning sections 7.1–7.6, all written originally (not sourced from the Self-Study Guide's sample questions or official ISTQB exam questions) — use the seed questions above as a starting set and extend them.
- **A "Final Exam" mode** that randomly mixes questions across all 6 modules (e.g., 20 questions).
- **Scoring & feedback** — show score at the end, and for each question after submission show whether the answer was correct plus a 1–2 sentence explanation drawn from the tutorial content.
- **Retry** — allow retaking a quiz; optionally shuffle question/answer order on retry.

---

## 4. Glossary Feature — Full Source Content (105 Testing Types)

This is the real, extracted content for the glossary — use it as-is (it's already clean, source-accurate copy). Store it as structured data (e.g., a JSON/TS array of `{ term, definition }` objects) that the Glossary UI searches/filters/sorts alphabetically.

<details>
<summary>Full glossary data (105 entries) — click to expand</summary>

- **Acceptance Testing:** Formal testing conducted to determine whether or not a system satisfies its acceptance criteria and to enable the customer to determine whether or not to accept the system. It is usually performed by the customer.
- **Accessibility Testing:** Type of testing which determines the usability of a product to the people having disabilities (deaf, blind, mentally disabled etc). The evaluation process is conducted by persons having disabilities.
- **Active Testing:** Type of testing consisting in introducing test data and analyzing the execution results. It is usually conducted by the testing team.
- **Agile Testing:** Software testing practice that follows the principles of the agile manifesto, emphasizing testing from the perspective of customers who will utilize the system. It is usually performed by the QA teams.
- **Age Testing:** Type of testing which evaluates a system's ability to perform in the future. The evaluation process is conducted by testing teams.
- **Ad-hoc Testing:** Testing performed without planning and documentation — the tester tries to 'break' the system by randomly trying the system's functionality. It is performed by the testing team.
- **Alpha Testing:** Alpha Testing is a type of software testing conducted at the developer's site to identify bugs, usability issues, and functionality gaps before releasing the product for beta testing. It involves internal testers, such as developers and QA teams, and sometimes select end users in a controlled environment.
- **Assertion Testing:** Type of testing consisting in verifying if the conditions confirm the product requirements. It is performed by the testing team.
- **API Testing:** Testing technique similar to Unit Testing in that it targets the code level. Api Testing differs from Unit Testing in that it is typically a QA task and not a developer task.
- **All-pairs Testing:** Combinatorial testing method that tests all possible discrete combinations of input parameters. It is performed by the testing teams.
- **Automated Testing:** Testing technique that uses Automation Testing tools to control the environment set-up, test execution and results reporting. It is performed by a computer and is used inside the testing teams.
- **Basis Path Testing:** A testing mechanism which derives a logical complexity measure of a procedural design and use this as a guide for defining a basic set of execution paths. It is used by testing teams when defining test cases.
- **Backward Compatibility Testing:** Testing method which verifies the behavior of the developed software with older versions of the test environment. It is performed by testing team.
- **Beta Testing:** Final testing before releasing application for commercial purpose. It is typically done by end-users or others.
- **Benchmark Testing:** Testing technique that uses representative sets of programs and data designed to evaluate the performance of computer hardware and software in a given configuration. It is performed by testing teams.
- **Big Bang Integration Testing:** Testing technique which integrates individual program modules only when everything is ready. It is performed by the testing teams.
- **Binary Portability Testing:** Technique that tests an executable application for portability across system platforms and environments, usually for conformation to an ABI specification. It is performed by the testing teams.
- **Boundary Value Testing:** Software testing technique in which tests are designed to include representatives of boundary values. It is performed by the QA testing teams.
- **Bottom Up Integration Testing:** In bottom-up Integration Testing, module at the lowest level are developed first and other modules which go towards the 'main' program are integrated and tested one at a time. It is usually performed by the testing teams.
- **Branch Testing:** Testing technique in which all branches in the program source code are tested at least once. This is done by the developer.
- **Breadth Testing:** A test suite that exercises the full functionality of a product but does not test features in detail. It is performed by testing teams.
- **Black box Testing:** A method of software testing that verifies the functionality of an application without having specific knowledge of the application's code/internal structure. Tests are based on requirements and functionality. It is performed by QA teams.
- **Code-driven Testing:** Testing technique that uses testing frameworks (such as xUnit) that allow the execution of unit tests to determine whether various sections of the code are acting as expected under various circumstances. It is performed by the development teams.
- **Compatibility Testing:** Testing technique that validates how well a software performs in a particular hardware/software/operating system/network environment. It is performed by the testing teams.
- **Comparison Testing:** Testing technique which compares the product strengths and weaknesses with previous versions or other similar products. Can be performed by tester, developers, product managers or product owners.
- **Component Testing:** Testing technique similar to unit testing but with a higher level of integration — testing is done in the context of the application instead of just directly testing a specific method. Can be performed by testing or development teams.
- **Configuration Testing:** Testing technique which determines minimal and optimal configuration of hardware and software, and the effect of adding or modifying resources such as memory, disk drives and CPU. Usually it is performed by the Performance Testing engineers.
- **Condition Coverage Testing:** Type of software testing where each condition is executed by making it true and false, in each of the ways at least once. It is typically made by the Automation Testing teams.
- **Compliance Testing:** Type of testing which checks whether the system was developed in accordance with standards, procedures and guidelines. It is usually performed by external companies which offer "Certified OGC Compliant" brand.
- **Concurrency Testing:** Multi-user testing geared towards determining the effects of accessing the same application code, module or database records. It it usually done by performance engineers.
- **Conformance Testing:** The process of testing that an implementation conforms to the specification on which it is based. It is usually performed by testing teams.
- **Context Driven Testing:** An Agile Testing technique that advocates continuous and creative evaluation of testing opportunities in light of the potential information revealed and the value of that information to the organization at a specific moment. It is usually performed by Agile testing teams.
- **Conversion Testing:** Testing of programs or procedures used to convert data from existing systems for use in replacement systems. It is usually performed by the QA teams.
- **Decision Coverage Testing:** Type of software testing where each condition/decision is executed by setting it on true/false. It is typically made by the automation testing teams.
- **Destructive Testing:** Type of testing in which the tests are carried out to the specimen's failure, in order to understand a specimen's structural performance or material behavior under different loads. It is usually performed by QA teams.
- **Dependency Testing:** Testing type which examines an application's requirements for pre-existing software, initial states and configuration in order to maintain proper functionality. It is usually performed by testing teams.
- **Dynamic Testing:** Term used in software engineering to describe the testing of the dynamic behavior of code. It is typically performed by testing teams.
- **Domain Testing:** White box testing technique which contains checkings that the program accepts only valid input. It is usually done by software development teams and occasionally by automation testing teams.
- **Error-Handling Testing:** Software testing type which determines the ability of the system to properly process erroneous transactions. It is usually performed by the testing teams.
- **End-to-end Testing:** Similar to system testing, involves testing of a complete application environment in a situation that mimics real-world use, such as interacting with a database, using network communications, or interacting with other hardware, applications, or systems if appropriate. It is performed by QA teams.
- **Endurance Testing:** Type of testing which checks for memory leaks or other problems that may occur with prolonged execution. It is usually performed by performance engineers.
- **Exploratory Testing:** Black box testing technique performed without planning and documentation. It is usually performed by manual testers.
- **Equivalence Partitioning Testing:** Software testing technique that divides the input data of a software unit into partitions of data from which test cases can be derived. it is usually performed by the QA teams.
- **Fault injection Testing:** Element of a comprehensive test strategy that enables the tester to concentrate on the manner in which the application under test is able to handle exceptions. It is performed by QA teams.
- **Formal verification Testing:** The act of proving or disproving the correctness of intended algorithms underlying a system with respect to a certain formal specification or property, using formal methods of mathematics. It is usually performed by QA teams.
- **Functional Testing:** Type of black box testing that bases its test cases on the specifications of the software component under test. It is performed by testing teams.
- **Fuzz Testing:** Software testing technique that provides invalid, unexpected, or random data to the inputs of a program — a special area of mutation testing. Fuzz testing is performed by testing teams.
- **Gorilla Testing:** Software testing technique which focuses on heavily testing of one particular module. It is performed by quality assurance teams, usually when running full testing.
- **Gray Box Testing:** A combination of Black Box and White Box testing methodologies: testing a piece of software against its specification but using some knowledge of its internal workings. It can be performed by either development or testing teams.
- **Glass box Testing:** Similar to white box testing, based on knowledge of the internal logic of an application's code. It is performed by development teams.
- **GUI software Testing:** The process of testing a product that uses a graphical user interface, to ensure it meets its written specifications. This is normally done by the testing teams.
- **Globalization Testing:** Testing method that checks proper functionality of the product with any of the culture/locale settings using every type of international input possible. It is performed by the testing team.
- **Hybrid Integration Testing:** Testing technique which combines top-down and bottom-up integration techniques in order leverage benefits of these kind of testing. It is usually performed by the testing teams.
- **Integration Testing:** The phase in software testing in which individual software modules are combined and tested as a group. It is usually conducted by testing teams.
- **Interface Testing:** Testing conducted to evaluate whether systems or components pass data and control correctly to one another. It is usually performed by both testing and development teams.
- **Install/uninstall Testing:** Quality assurance work that focuses on what customers will need to do to install and set up the new software successfully. It may involve full, partial or upgrades install/uninstall processes and is typically done by the software testing engineer in conjunction with the configuration manager.
- **Internationalization Testing:** The process which ensures that product's functionality is not broken and all the messages are properly externalized when used in different languages and locale. It is usually performed by the testing teams.
- **Inter-Systems Testing:** A testing technique focused on verifying that the interconnections between applications function correctly. It is typically performed by the testing teams.
- **Keyword-driven Testing:** Also known as table-driven testing or action-word testing, is a software testing methodology for automated testing that separates the test creation process into two distinct stages: a Planning Stage and an Implementation Stage. It can be used by either manual or automation testing teams.
- **Load Testing:** Testing technique that puts demand on a system or device and measures its response. It is usually conducted by the performance engineers.
- **Localization Testing:** Part of software testing process focused on adapting a globalized application to a particular culture/locale. It is normally done by the testing teams.
- **Loop Testing:** A white box testing technique that exercises program loops. It is performed by the development teams.
- **Manual Scripted Testing:** Testing method in which the test cases are designed and reviewed by the team before executing it. It is done by Manual Testing teams.
- **Manual-Support Testing:** Testing technique that involves testing of all the functions performed by the people while preparing the data and using these data from automated system. it is conducted by testing teams.
- **Model-Based Testing:** The application of Model based design for designing and executing the necessary artifacts to perform software testing. It is usually performed by testing teams.
- **Mutation Testing:** Method of software testing which involves modifying programs' source code or byte code in small ways in order to test sections of the code that are seldom or never accessed during normal tests execution. It is normally conducted by testers.
- **Modularity-driven Testing:** Software testing technique which requires the creation of small, independent scripts that represent modules, sections, and functions of the application under test. It is usually performed by the testing team.
- **Non-functional Testing:** Testing technique which focuses on testing of a software application for its non-functional requirements. Can be conducted by the performance engineers or by manual testing teams.
- **Negative Testing:** Also known as "test to fail" — testing method where the tests' aim is showing that a component or system does not work. It is performed by manual or automation testers.
- **Operational Testing:** Testing technique conducted to evaluate a system or component in its operational environment. Usually it is performed by testing teams.
- **Orthogonal array Testing:** Systematic, statistical way of testing which can be applied in user interface testing, system testing, Regression Testing, configuration testing and Performance Testing. It is performed by the testing team.
- **Pair Testing:** Software development technique in which two team members work together at one keyboard to test the software application. One does the testing and the other analyzes or reviews the testing. This can be done between one Tester and Developer or Business Analyst or between two testers with both participants taking turns at driving the keyboard.
- **Passive Testing:** Testing technique consisting in monitoring the results of a running system without introducing any special test data. It is performed by the testing team.
- **Parallel Testing:** Testing technique which has the purpose to ensure that a new application which has replaced its older version has been installed and is running correctly. It is conducted by the testing team.
- **Path Testing:** Typical white box testing which has the goal to satisfy coverage criteria for each logical path through the program. It is usually performed by the development team.
- **Penetration Testing:** Testing method which evaluates the security of a computer system or network by simulating an attack from a malicious source. Usually they are conducted by specialized penetration testing companies.
- **Performance Testing:** Functional testing conducted to evaluate the compliance of a system or component with specified performance requirements. It is usually conducted by the performance engineer.
- **Qualification Testing:** Testing against the specifications of the previous release, usually conducted by the developer for the consumer, to demonstrate that the software meets its specified requirements.
- **Ramp Testing:** Type of testing consisting in raising an input signal continuously until the system breaks down. It may be conducted by the testing team or the performance engineer.
- **Regression Testing:** Type of software testing that seeks to uncover software errors after changes to the program (e.g. bug fixes or new functionality) have been made, by retesting the program. It is performed by the testing teams.
- **Recovery Testing:** Testing technique which evaluates how well a system recovers from crashes, hardware failures, or other catastrophic problems. It is performed by the testing teams.
- **Requirements Testing:** Testing technique which validates that the requirements are correct, complete, unambiguous, and logically consistent and allows designing a necessary and sufficient set of test cases from those requirements. It is performed by QA teams.
- **Security Testing:** A process to determine that an information system protects data and maintains functionality as intended. It can be performed by testing teams or by specialized security-testing companies.
- **Sanity Testing:** Testing technique which determines if a new software version is performing well enough to accept it for a major testing effort. It is performed by the testing teams.
- **Scenario Testing:** Testing activity that uses scenarios based on a hypothetical story to help a person think through a complex problem or system for a testing environment. It is performed by the testing teams.
- **Scalability Testing:** Part of the battery of non-functional tests which tests a software application for measuring its capability to scale up — be it the user load supported, the number of transactions, the data volume etc. It is conducted by the performance engineer.
- **Statement Testing:** White box testing which satisfies the criterion that each statement in a program is executed at least once during program testing. It is usually performed by the development team.
- **Static Testing:** A form of software testing where the software is not actually used. It checks mainly for the sanity of the code, algorithm, or document. It is used by the developer who wrote the code.
- **Stability Testing:** Testing technique which attempts to determine if an application will crash. It is usually conducted by the performance engineer.
- **Smoke Testing:** Testing technique which examines all the basic components of a software system to ensure that they work properly. Typically, smoke testing is conducted by the testing team, immediately after a software build is made.
- **Storage Testing:** Testing type that verifies the program under test stores data files in the correct directories and that it reserves sufficient space to prevent unexpected termination resulting from lack of space. It is usually performed by the testing team.
- **Stress Testing:** Testing technique which evaluates a system or component at or beyond the limits of its specified requirements. It is usually conducted by the performance engineer.
- **Structural Testing:** White box testing technique which takes into account the internal structure of a system or component and ensures that each program statement performs its intended function. It is usually performed by the software developers.
- **System Testing:** The process of testing an integrated hardware and software system to verify that the system meets its specified requirements. It is conducted by the testing teams in both development and target environment.
- **System integration Testing:** Testing process that exercises a software system's coexistence with others. It is usually performed by the testing teams.
- **Top Down Integration Testing:** Testing technique that involves starting at the top of a system hierarchy at the user interface and using stubs to test from the top down until the entire system has been implemented. It is conducted by the testing teams.
- **Thread Testing:** A variation of top-down testing technique where the progressive integration of components follows the implementation of subsets of the requirements. It is usually performed by the testing teams.
- **Upgrade Testing:** Testing technique that verifies if assets created with older versions can be used properly and that user's learning is not challenged. It is performed by the testing teams.
- **Unit Testing:** Software verification and validation method in which a programmer tests if individual units of source code are fit for use. It is usually conducted by the development team.
- **User Interface Testing:** Type of testing which is performed to check how user-friendly the application is. It is performed by testing teams.
- **Usability Testing:** Testing technique which verifies the ease with which a user can learn to operate, prepare inputs for, and interpret outputs of a system or component. It is usually performed by end users.
- **Volume Testing:** Testing which confirms that any values that may become large over time (such as accumulated counts, logs, and data files), can be accommodated by the program and will not cause the program to stop working or degrade its operation in any manner. It is usually conducted by the performance engineer.
- **Vulnerability Testing:** Type of testing which regards application security and has the purpose to prevent problems which may affect the application integrity and stability. It can be performed by the internal testing teams or outsourced to specialized companies.
- **White box Testing:** Testing technique based on knowledge of the internal logic of an application's code and includes tests like coverage of code statements, branches, paths, conditions. It is performed by software developers.
- **Workflow Testing:** Scripted end-to-end testing technique which duplicates specific workflows which are expected to be utilized by the end-user. It is usually conducted by testing teams.

</details>

**Also fold these terms into the glossary** (from the other 5 modules, not part of the 105-count list above — avoid duplicating if already present):
- **Buddy Testing** — two testers (often a developer + a tester) work together on the same module, combining perspectives.
- **Pair Testing** — two testers work together on the same test session in real time, one driving and one observing/suggesting.
- **Monkey Testing** — random, unstructured inputs thrown at the application to see if it breaks ("monkey at the keyboard").
- **Boundary Value Analysis (BVA)** — see Module 2 definition above.
- **Equivalence Class Partitioning (ECP)** — see Module 2 definition above.
- **Decision Table Testing** — see Module 2 definition above.
- **State Transition Testing** — see Module 2 definition above.
- **Error Guessing** — see Module 2 definition above.
- **REST (Representational State Transfer)** — architectural style for designing networked web services.
- **SBTM (Session-Based Test Management)** — a structured framework for running and reporting on exploratory testing sessions.

**Additional terms from Module 7 (ISTQB CTFL v4.0)** — original definitions, written independently of the source book:
- **K-Level (K1–K4)** — the ISTQB syllabus's scale for how deeply a learning objective is examined: K1 = Remember, K2 = Understand, K3 = Apply, K4 = Analyze (Foundation Level uses mainly K1–K3).
- **Test Basis** — the body of knowledge (requirements, designs, user stories, etc.) used as the source for deriving test cases.
- **Test Oracle** — the source used to determine the expected result of a test (a spec, another system, a person's knowledge, etc.).
- **Error / Defect / Failure / Root Cause** — a human **error** (mistake) can introduce a **defect** (flaw) into a work product; when executed, a defect can cause a **failure** (observable wrong behavior); the underlying reason the error happened is the **root cause**.
- **Confirmation Testing (Re-testing)** — re-running a previously failed test after a fix to confirm the defect is resolved.
- **Regression Testing** — re-running existing tests to confirm that a change hasn't broken previously working functionality.
- **Entry Criteria / Exit Criteria** — the conditions that must be met before a test activity can start (entry) or be considered complete (exit).
- **Test Pyramid** — a model recommending more low-level, fast, automated tests (unit) and progressively fewer higher-level, slower tests (integration, UI/E2E).
- **Testing Quadrants** — a model mapping test types by whether they are business-facing vs. technology-facing, and whether they support the team or critique the product.
- **Product Risk vs. Project Risk** — a **product risk** is the possibility a work product could fail to satisfy stakeholder needs; a **project risk** threatens the project's ability to deliver its objectives (e.g., schedule, resourcing).
- **Informal Review / Walkthrough / Technical Review / Inspection** — the four ISTQB review types, in increasing order of formality.
- **Shift-Left** — moving testing activities earlier in the development lifecycle to catch defects sooner and more cheaply.
- **Whole-Team Approach** — the practice (common in Agile) where developers, testers, and other roles share responsibility for quality rather than testing being solely a separate team's job.

---

## 5. Functional Requirements

1. **Navigation** — a persistent top or side nav with links to: Home/Dashboard, the 6 tutorial modules, Quizzes, and Glossary.
2. **Module pages** — each module renders its intro callout + lessons in order, with clear headings, bullet lists, and the tables/worked examples reproduced faithfully (especially the state transition table and scripted-vs-exploratory comparison table). Include a "Take the Module Quiz" call-to-action at the end of each module.
3. **Glossary page** —
   - Search box (filters by term or definition text, live/instant filtering).
   - A–Z index/jump links.
   - Optional category filter using the taxonomy from Module 3 (Functional / Non-Functional / Structural / Change-Related / Specialized) — best-effort tagging is fine since the source list doesn't pre-categorize every term.
4. **Quiz pages** — one question at a time or a scrollable form (your choice); a results screen with score, pass/fail threshold (e.g., 70%), and per-question review.
5. **Progress indicators (nice-to-have)** — mark modules as "Not Started / In Progress / Completed" and show quiz best-scores, if you choose to add lightweight client-side persistence (e.g., localStorage). Not required for v1.
6. **Responsive design** — usable on both desktop and mobile.

## 6. Non-Functional Requirements

- **Accuracy** — do not fabricate statistics, tool names, or definitions beyond what's provided above; if a UI element needs sample data not covered here, clearly mark it as an example rather than presenting it as sourced fact.
- **Accessibility** — semantic HTML, keyboard-navigable quiz options, sufficient color contrast.
- **Maintainability** — keep tutorial and glossary content in separate data files/objects from UI components, so content can be edited or extended (e.g., adding the remaining ~85 glossary terms' categories, or a 7th module) without touching rendering logic.
- **No backend required** unless you judge persistence (accounts, cross-device progress sync) to be worth the added complexity — a static/client-only app is an acceptable, encouraged default.

## 7. Suggested Tech Stack (flexible)

Pick what's fastest for you to build reliably; a reasonable default:
- React (or plain HTML/CSS/JS) single-page app with client-side routing
- Component-driven structure: `Layout`, `ModuleList`, `ModulePage`, `Quiz`, `Glossary`
- Content stored as structured data (JSON/TS/JS objects), imported by components — not hardcoded inline JSX
- Tailwind CSS (or equivalent) for styling; clean, modern "learning platform" aesthetic — not a generic gray corporate template

## 8. Deliverable

A working, runnable app containing all 7 tutorial modules, the full glossary (105 + ~24 supplemental terms), and a working quiz engine with at least the 14 seed questions above expanded to a full per-module quiz bank (including Module 7's own 8–10 question bank). Prioritize getting the real content in correctly over polishing visuals first.

## 9. Copyright Note on Module 7's Source

Modules 1–6 are built from short web-tutorial articles the user owns/uploaded directly. Module 7 is different: it's derived from a **commercially published, copyrighted book** (Springer, 2024). To keep the app on solid footing:
- Do **not** paste in the book's prose, its worked examples/case studies, its 14 practical exercises, or any of its ~70+ sample/official exam questions.
- Do use the **official ISTQB syllabus structure** (chapter names, section names, K-level tags) — this framework is separately and freely published by ISTQB® itself for certification purposes, so describing *what topics exist and how they're organized* is fine.
- Write all lesson explanations and quiz questions for Module 7 **originally**, in the app's own voice — Section 2's Module 7 write-up above and Section 3's seed questions already do this; extend them the same way.
- Keep the "Recommended reading" citation to the source book visible on the module page so it's credited, not obscured.
