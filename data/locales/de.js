// QA Learning Hub — German (de) locale
window.QAHUB_LOCALES = window.QAHUB_LOCALES || {};
window.QAHUB_LOCALES.de = {
  ui: {
    brandTagline: "Softwaretest-Kurs",
    menuButton: "Menü",
    footerText: "QA Learning Hub &middot; manuelles Testen, Testdesign, Ad-hoc- &amp; explorative Tests, REST-API-Testing, ISTQB&reg; CTFL v4.0 Prüfungsvorbereitung, eine praktische QA-Toolbox &amp; Karrierereferenz, Test-/QA-Architektur sowie Sicherheitstests für Anwendungen und praxisnahe Performance-, UI/UX- &amp; Automatisierungstests.",
    navDashboard: "Dashboard",
    navTutorials: "Tutorials",
    navPractice: "Übung",
    navQuizzes: "Quizze",
    navGlossary: "Glossar",
    langLabel: "Sprache",
    heroEyebrow: "Softwaretest-Kurs",
    homeTitle: "QA Learning Hub",
    homeIntro: "Ein strukturierter Weg durch die Grundlagen des manuellen Testens, Testdesign-Techniken, die gesamte Landschaft der Testarten, Ad-hoc- und explorative Tests, REST-API-Testing sowie die Prüfungsvorbereitung für ISTQB® CTFL v4.0 — dazu eine praktische Toolbox und Karrierereferenz, Test-/QA-Architektur sowie Sicherheitstests für Anwendungen und praxisnahe Performance-, UI/UX- und Automatisierungstests. Nach jedem Modul folgt ein Quiz.",
    statModulesCompleted: "Abgeschlossene Module",
    statModulesInProgress: "Module in Bearbeitung",
    statQuizzesAttempted: "Versuchte Quizze",
    statGlossaryTerms: "Glossarbegriffe",
    tutorialModulesHeading: "Tutorial-Module",
    badgeNotStarted: "Nicht begonnen",
    badgeInProgress: "In Bearbeitung",
    badgeCompleted: "Abgeschlossen",
    bestScoreLabel: "Bestwert {pct}%",
    ctaFinalExam: "Zur Abschlussprüfung",
    ctaBrowseGlossary: "Glossar durchsuchen",
    moduleWord: "MODUL",
    crumbModule: "Modul",
    calloutTakeaway: "Kernaussage",
    markComplete: "Modul als abgeschlossen markieren",
    takeModuleQuiz: "Quiz zu Modul {num} starten →",
    allQuizzes: "Alle Quizze →",
    quizzesTitle: "Quizze",
    quizzesIntro: "Absolviere jedes Modulquiz einzeln oder mische alles in der Abschlussprüfung. Jedes Quiz kann beliebig oft wiederholt werden — Fragen und Antwortreihenfolge werden bei jedem Versuch neu gemischt.",
    finalExamCardNum: "ABSCHLUSSPRÜFUNG",
    finalExamTitle: "Gemischte Abschlussprüfung",
    finalExamDesc: "{n} Fragen, zufällig aus allen {m} Modulen ausgewählt.",
    attempted: "Versucht",
    notAttempted: "Nicht versucht",
    moduleQuizCardNum: "QUIZ ZU MODUL {num}",
    quizQuestionsCount: "{n} Fragen zu diesem Modul.",
    questionOf: "Frage {a} von {b}",
    questionLabel: "FRAGE",
    exitQuiz: "Quiz verlassen",
    nextQuestion: "Nächste Frage →",
    seeResults: "Ergebnisse ansehen →",
    correctPrefix: "Richtig. ",
    incorrectPrefix: "Nicht ganz. ",
    resultsSuffix: "Ergebnisse",
    resultsCorrectLine: "{score} von {total} richtig · Bestehensgrenze {pct}%",
    passed: "Bestanden",
    failed: "Noch nicht — versuch es noch einmal",
    retakeQuiz: "Quiz wiederholen",
    backToQuizzes: "Zurück zu den Quizzen",
    reviewHeading: "Überprüfung",
    yourAnswer: "Deine Antwort:",
    correctAnswer: "Richtige Antwort:",
    skipped: "Übersprungen",
    noQuestionsAvailable: "Für dieses Quiz sind noch keine Fragen verfügbar.",
    finalExamTitleLabel: "Abschlussprüfung",
    quizSuffix: "Quiz",
    glossaryTitle: "Test-Glossar",
    glossaryIntro: "{n} Begriffe und Testarten aus dem Softwaretest, durchsuchbar und nach Kategorie filterbar.",
    searchPlaceholder: "Begriffe oder Definitionen suchen…",
    allCategories: "Alle Kategorien",
    termsCount: "{n} Begriffe",
    noTermsMatch: "Keine Begriffe entsprechen deiner Suche.",
    alsoLabel: "auch:"
  },
  catLabels: {
    "Functional": "Funktional",
    "Non-Functional": "Nicht-funktional",
    "Structural": "Strukturell",
    "Change-Related": "Änderungsbezogen",
    "Specialized": "Spezialisiert",
    "General": "Allgemein"
  },
  modules: [
{
  id: "manual-testing",
  num: 1,
  title: "Grundlagen des manuellen Testens",
  summary: "Warum menschliche Tester weiterhin wichtig sind und wie man manuelles Testen gut durchführt.",
  takeaway: "Manuelles Testen bleibt ein wesentlicher Bestandteil moderner QA — Flexibilität und menschliche Intuition entdecken komplexe Fehler frühzeitig und sorgen für zuverlässige Nutzererlebnisse. 100% Automatisierung ist nicht möglich, was manuelles Testen unverzichtbar macht.",
  lessons: [
    { h: "Was ist manuelles Testen?", body: `
      <p>Manuelles Testen ist Testen, das <strong>ohne Automatisierungswerkzeuge</strong> durchgeführt wird. Ein Tester führt Aktionen manuell aus — klicken, Eingaben machen, durch Bildschirme navigieren —, um das Verhalten gegen die Anforderungen zu überprüfen. Es sind keine Programmierkenntnisse nötig, was es zum zugänglichsten Einstieg in die QA macht.</p>` },
    { h: "Warum es wichtig ist", body: `
      <ul>
        <li><strong>UX-Validierung</strong> — menschliches Urteilsvermögen zu Anordnung, Ästhetik und Feedback. Über <strong>70% der Projekte</strong> nennen UX als Hauptgrund für manuelles Testen.</li>
        <li><strong>Fehler früh zu finden ist wesentlich günstiger</strong> — ein Defekt, der bei der Implementierung gefunden wird, kostet laut IBM System Sciences Institute etwa <strong>6x mehr</strong> in der Behebung als einer, der in der Designphase entdeckt wird.</li>
        <li><strong>Kosteneffizient</strong> für Projekte mit kurzem Lebenszyklus oder häufig wechselnden Oberflächen, bei denen der Aufbau von Automatisierung das Feature selbst überdauern würde.</li>
      </ul>` },
    { h: "Hauptziele", body: `
      <ul>
        <li>Fehleridentifikation</li>
        <li>Anforderungsvalidierung</li>
        <li>Sicherstellung der Nutzererfahrung</li>
        <li>Regressionssicherheit</li>
        <li>Qualitätslieferung</li>
      </ul>` },
    { h: "Merkmale", body: `
      <ul>
        <li><strong>Menschzentriert</strong> — hängt vom Urteilsvermögen des Testers ab, nicht von Skripten.</li>
        <li><strong>Explorative Natur</strong> — Tester können abweichen und nachforschen.</li>
        <li><strong>Anpassungsfähigkeit</strong> — passt sich schnell an sich ändernde Anforderungen an.</li>
        <li><strong>Zeitintensiv</strong> — jeder Durchlauf ist manueller Aufwand.</li>
        <li><strong>Fehleranfällig, aber aufschlussreich</strong> — Menschen übersehen Dinge, die Skripte nicht übersehen würden, bemerken aber auch Dinge, die Skripte nicht bemerken können.</li>
      </ul>` },
    { h: "Arten des manuellen Testens", body: `
      <p>Nach Kenntnis der internen Struktur:</p>
      <ul>
        <li><strong>Black-Box-Testing</strong> — keine Kenntnis des internen Codes, basiert auf Anforderungen.</li>
        <li><strong>White-Box-Testing</strong> — vollständige Kenntnis der internen Logik/des Codes.</li>
        <li><strong>Grey-Box-Testing</strong> — teilweise Kenntnis der internen Struktur.</li>
      </ul>
      <p>Nach Teststufe:</p>
      <ul>
        <li><strong>Komponententest (Unit Testing)</strong> — einzelne Komponenten.</li>
        <li><strong>Integrationstest</strong> — kombinierte Module.</li>
        <li><strong>Systemtest</strong> — das gesamte integrierte System.</li>
        <li><strong>Abnahmetest</strong> — Validierung gegen Geschäftsanforderungen.</li>
      </ul>` },
    { h: "Wie man manuelles Testen durchführt", body: `
      <p>Ein typischer manueller Testworkflow:</p>
      <ol>
        <li><strong>Anforderungsanalyse</strong> — verstehen, was gebaut und getestet werden muss.</li>
        <li><strong>Testfalldesign</strong> — Schritte, Eingaben und erwartete Ergebnisse schreiben.</li>
        <li><strong>Ausführung</strong> — die Testfälle gegen den Build ausführen.</li>
        <li><strong>Fehlerprotokollierung</strong> — jede Abweichung vom erwarteten Verhalten festhalten.</li>
        <li><strong>Nachtest / Regression</strong> — Korrekturen bestätigen und prüfen, dass nichts anderes kaputtgegangen ist.</li>
      </ol>` },
    { h: "Fallstudien", body: `
      <p><strong>UI-Test für Videospiele:</strong> Ein Tester geht manuell durch Menüs, HUD-Elemente und Steuerungsbelegungen bei verschiedenen Auflösungen und Eingabegeräten — die Art von subjektivem „fühlt sich das richtig an“-Urteil, die schwer zu automatisieren ist.</p>
      <p><strong>Test eines Krankenhausverwaltungssystems:</strong> Ein Tester arbeitet Patientenregistrierung, Terminplanung und Abrechnungsworkflows durchgängig durch und prüft, ob von einer Rezeption eingegebene Daten korrekt auf den Bildschirmen von Arzt und Abrechnung ankommen — er validiert reale Nutzungssequenzen, nicht nur isolierte Funktionen.</p>` },
    { h: "Mythen vs. Realität", body: `
      <p><strong>Mythos:</strong> Manuelles Testen ist überflüssig, jetzt wo es Automatisierung gibt. <strong>Realität:</strong> Automatisierung kann subjektive UX nicht beurteilen, kann nicht jeden Grenzfall kosteneffizient behandeln, und erschöpfendes Testen jedes Pfades ist unmöglich — manuelle Tester schließen genau diese Lücke.</p>
      <p><strong>Mythos:</strong> Manuelles Testen ist gering qualifiziertes „Herumklicken“. <strong>Realität:</strong> Es erfordert tiefgehende Anforderungsanalyse, strukturiertes Testdesign und scharfe Fehleruntersuchungsfähigkeiten.</p>` },
    { h: "Herausforderungen", body: `
      <ul>
        <li>Zeitaufwendig</li>
        <li>Wiederholung</li>
        <li>Menschliche Fehler</li>
        <li>Skalierbarkeitsprobleme</li>
        <li>Testdatenverwaltung</li>
        <li>Umgebungseinrichtung</li>
        <li>Ressourcenabhängigkeit</li>
      </ul>` },
    { h: "Manuelles Testen vs. Automatisiertes Testen", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Aspekt</th><th>Manuelles Testen</th><th>Automatisiertes Testen</th></tr></thead>
        <tbody>
          <tr><td>Geschwindigkeit</td><td>Langsamer, menschliches Tempo</td><td>Schnell, in großem Umfang wiederholbar</td></tr>
          <tr><td>Einrichtungskosten</td><td>Niedrig — kein Scripting nötig</td><td>Höher — Skripte müssen erstellt und gepflegt werden</td></tr>
          <tr><td>Am besten für</td><td>Explorative Tests, UX, kurzlebige Oberflächen</td><td>Sich wiederholende Regression, große Testsuiten</td></tr>
          <tr><td>Menschliches Urteilsvermögen</td><td>Ja</td><td>Nein</td></tr>
          <tr><td>Erforderliche Fähigkeiten</td><td>Fach- und Testwissen</td><td>Programmier- plus Testwissen</td></tr>
        </tbody>
      </table></div>` },
    { h: "Gängige Werkzeuge (zur Einordnung)", body: `
      <p>Werkzeuge, die im Zusammenhang mit manuellem und automatisiertem Testen häufig genannt werden: <strong>Selenium</strong>, <strong>QTP/UFT</strong>, <strong>JMeter</strong>, <strong>LoadRunner</strong>, <strong>TestLink</strong>, <strong>Quality Center (ALM)</strong>. In diesem Modul geht es um die manuelle Disziplin, nicht um praktisches Werkzeugtraining.</p>` },
    { h: "Vorteile", body: `
      <ul>
        <li>Menschliche Einsicht</li>
        <li>Flexibilität</li>
        <li>Keine Programmierung erforderlich</li>
        <li>Effektiv für kleine Projekte</li>
        <li>Fördert explorative Tests</li>
      </ul>` },
    { h: "Nachteile", body: `
      <ul>
        <li>Zeitaufwendig</li>
        <li>Anfällig für menschliche Fehler</li>
        <li>Begrenzte Abdeckung</li>
        <li>Nicht skalierbar für große/komplexe Anwendungen</li>
      </ul>` },
    { h: "Fehlerschweregrad, Priorität & einen guten Fehlerbericht schreiben", body: `
      <p><strong>Schweregrad (Severity) vs. Priorität</strong> sind die beiden Achsen, nach denen jeder Defekt beurteilt wird, und sie zu verwechseln ist ein häufiger Anfängerfehler:</p>
      <ul>
        <li><strong>Schweregrad</strong> — die technische Auswirkung auf das System (stürzt die App ab, werden Daten beschädigt, oder ist nur ein Button falsch ausgerichtet?). Wird vom Tester anhand des beobachteten Verhaltens festgelegt.</li>
        <li><strong>Priorität</strong> — wie dringend die Behebung ist, aus geschäftlicher Sicht (ein Tippfehler mit niedrigem Schweregrad auf der Startseite kann kurz vor einem großen Launch hohe Priorität haben). Wird meist gemeinsam mit dem Produktteam festgelegt.</li>
      </ul>
      <p>Sie sind unabhängig voneinander: Ein Absturz mit hohem Schweregrad in einem selten genutzten Admin-Panel kann niedrige Priorität haben; ein kosmetischer Fehler mit niedrigem Schweregrad, aber hoher Sichtbarkeit auf der Checkout-Seite kann hohe Priorität haben.</p>
      <p><strong>Ein Fehlerbericht, der schnell behoben wird, enthält:</strong></p>
      <ul>
        <li><strong>Klare Zusammenfassung</strong> — eine Zeile, die das Problem beschreibt, nicht die Untersuchung.</li>
        <li><strong>Reproduktionsschritte</strong> — nummeriert, exakt, minimal (alles streichen, was nicht nötig ist, um den Fehler auszulösen).</li>
        <li><strong>Erwartetes vs. tatsächliches Ergebnis</strong> — explizit angegeben, nicht impliziert.</li>
        <li><strong>Umgebung</strong> — Browser/Betriebssystem/Gerät/Build-Version/Umgebung (Staging vs. Produktion).</li>
        <li><strong>Schweregrad &amp; Priorität</strong> — deine Einschätzung, auch wenn das Produktteam sie später anpasst.</li>
        <li><strong>Nachweise</strong> — Screenshot, Bildschirmaufnahme oder Log-Ausschnitt; ein Bild beendet die meisten „kann ich nicht reproduzieren“-Diskussionen, bevor sie beginnen.</li>
      </ul>
      <p>Ein Bericht ohne Reproduktionsschritte ist der mit Abstand häufigste Grund, warum ein Fehler an den Melder zurückgegeben wird, statt behoben zu werden.</p>` },
    { h: "Warum es Tests gibt: Fehlhandlung → Fehlerzustand → Fehlerwirkung", body: `
      <p>Testen dient dazu:</p>
      <ul>
        <li><strong>Risiko zu senken</strong>, indem Stakeholder vor dem Release verwertbare Informationen über die Qualität erhalten.</li>
        <li><strong>Anforderungen zu verifizieren</strong>: Das Produkt verhält sich wie spezifiziert und erwartet.</li>
        <li><strong>Fehler zu verhindern</strong>: Frühe Reviews und Tests fangen Probleme ab, bevor sie einprogrammiert werden.</li>
        <li><strong>Vertrauen aufzubauen</strong>, mit einem Vorbehalt (Dijkstra): Testen zeigt die <strong>Anwesenheit</strong> von Fehlern, nie ihre <strong>Abwesenheit</strong>.</li>
      </ul>
      <p>Je später ein Fehler gefunden wird, desto teurer ist er. Einer, der in den Anforderungen entdeckt wird, kann etwa <strong>100-mal billiger</strong> zu beheben sein als einer in Produktion. Genau das ist das Argument für „Shift-Left“.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Begriff</th><th>Bedeutung</th></tr></thead>
        <tbody>
          <tr><td><strong>Fehlhandlung</strong> (Error)</td><td>Ein menschlicher Irrtum in Code, Spezifikation oder Entscheidung</td></tr>
          <tr><td><strong>Fehlerzustand</strong> (Defect, Bug)</td><td>Der Mangel in Code oder Dokumentation, den die Fehlhandlung verursacht hat</td></tr>
          <tr><td><strong>Fehlerwirkung</strong> (Failure)</td><td>Das tatsächlich beobachtete falsche Verhalten, wenn der Fehlerzustand ausgeführt wird</td></tr>
        </tbody>
      </table></div>
      <p><em>Beispiel:</em> Ein Entwickler versteht „kostenloser Versand über 50 €“ als „ab 50 €“ (Fehlhandlung), schreibt <code>&gt;=</code> statt <code>&gt;</code> (Fehlerzustand), und eine Bestellung über genau 50,00 € wird kostenlos versandt (Fehlerwirkung). Ein Fehlerzustand führt nicht immer zu einer Fehlerwirkung, weil der Codepfad vielleicht nie ausgeführt wird, und hinter einer Fehlerwirkung können mehrere Fehlerzustände stecken.</p>
      <p><strong>Testen vs. Debugging vs. Prüfen (Checking):</strong></p>
      <ul>
        <li><strong>Testen</strong>: das Produkt hinterfragen, um Informationen zu gewinnen. Eine menschliche, denkende Tätigkeit.</li>
        <li><strong>Debugging</strong>: die Ursache einer Fehlerwirkung finden und beheben. Eine Tätigkeit der Entwicklung.</li>
        <li><strong>Checking</strong>: algorithmische Überprüfung konkreter Fakten. Die meiste „Automatisierung“ ist Checking.</li>
      </ul>` },
    { h: "Teststufen & Testarten", body: `
      <p><strong>Teststufen</strong> beschreiben, <em>wo</em> getestet wird:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Stufe</th><th>Umfang</th><th>Typischer Verantwortlicher</th></tr></thead>
        <tbody>
          <tr><td>Unit / Komponente</td><td>Eine einzelne Code-Einheit isoliert</td><td>Entwickler</td></tr>
          <tr><td>Integration</td><td>Zusammenspiel von Komponenten und Schnittstellen</td><td>Entwickler + QA</td></tr>
          <tr><td>System</td><td>Das ganze System gegen seine Anforderungen, Ende zu Ende</td><td>QA</td></tr>
          <tr><td>Abnahme (UAT, Alpha, Beta)</td><td>Validierung durch Nutzer oder Kunden</td><td>Nutzer, Product Owner, mit QA-Unterstützung</td></tr>
        </tbody>
      </table></div>
      <p><strong>Integrationsstrategien:</strong> <em>inkrementell</em> (Top-down oder Bottom-up, Teil für Teil) gegenüber <em>Big-Bang</em> (alles auf einmal). Big-Bang ist riskant, weil man bei einem Fehler kaum erkennt, welches Teil ihn verursacht hat.</p>
      <p><strong>Testarten</strong> beschreiben, <em>worauf</em> getestet wird:</p>
      <ul>
        <li><strong>Funktional</strong>: was das System tut.</li>
        <li><strong>Nicht-funktional</strong>: wie gut es das tut (Performance, Sicherheit, Usability, Zuverlässigkeit, Portabilität).</li>
        <li><strong>Strukturell (White-Box)</strong>: die interne Struktur und der Code.</li>
        <li><strong>Änderungsbezogen</strong>: <strong>Fehlernachtest</strong> (prüfen, ob ein behobener Fehler wirklich behoben ist) und <strong>Regressionstest</strong> (prüfen, ob die Änderung nichts anderes kaputt gemacht hat).</li>
      </ul>
      <p>Stufen und Arten sind unabhängig voneinander: Man kann Performance-Tests auf Integrationsstufe oder funktionale Tests auf Unit-Stufe durchführen.</p>` },
    { h: "Testprozess, Rückverfolgbarkeit & statischer Test", body: `
      <p>Der grundlegende Testprozess (angelehnt an ISTQB und ISO/IEC/IEEE 29119):</p>
      <ol>
        <li><strong>Testplanung</strong>: Strategie, Zeitplan, Ressourcen, Eingangs- und Endekriterien.</li>
        <li><strong>Testanalyse</strong>: die Testbasis (Anforderungen, Spezifikationen, Risiken) untersuchen und <em>Testbedingungen</em> identifizieren, also was getestet wird.</li>
        <li><strong>Testentwurf</strong>: Testfälle aus diesen Bedingungen ableiten und priorisieren, also wie getestet wird.</li>
        <li><strong>Testrealisierung</strong>: Testdaten, Umgebungen, Skripte und Testsuiten vorbereiten.</li>
        <li><strong>Testdurchführung</strong>: Tests ausführen, Ist- mit Soll-Ergebnissen vergleichen, Fehler erfassen.</li>
        <li><strong>Testabschluss</strong>: Abschlussbericht, Testmittel archivieren, Lessons Learned festhalten.</li>
      </ol>
      <p><strong>Rückverfolgbarkeit</strong> verknüpft Anforderungen → Testbedingungen → Testfälle → Fehler. Sie belegt die Abdeckung („jede Anforderung hat einen Test“) und ermöglicht Auswirkungsanalysen („diese Anforderung hat sich geändert, also müssen diese Tests erneut laufen“).</p>
      <p><strong>Statischer Test</strong> findet Fehler, <em>ohne</em> etwas auszuführen:</p>
      <ul>
        <li><strong>Reviews</strong>, von am wenigsten bis am meisten formal: informelles Review → Walkthrough → technisches Review → <strong>Inspektion</strong> (feste Rollen, Eingangskriterien, Fehlerprotokolle).</li>
        <li><strong>Statische Analyse</strong>: Linter, Sicherheitsscanner und Komplexitätswerkzeuge für Code oder Dokumente.</li>
      </ul>
      <p><strong>Der Alltag eines manuellen Testers:</strong> Anforderungen analysieren und Unklarheiten früh ansprechen; Testfälle entwerfen und ausführen und dabei über das Skript hinaus erkunden; Fehler klar melden; Korrekturen verifizieren und Regressionstests um geänderte Bereiche fahren; Features gegen Abnahme- und Endekriterien freigeben.</p>` }
  ]
},
{
  id: "test-techniques",
  num: 2,
  title: "Softwaretest-Techniken & Testfalldesign",
  summary: "Strukturierte Techniken — Grenzwerte, Partitionen, Entscheidungstabellen, Zustände — für hohe Abdeckung mit weniger Testfällen.",
  takeaway: "Da erschöpfendes Testen unmöglich ist, ermöglichen strukturierte Techniken Testern hohe Abdeckung mit minimalen Testfällen, indem sie sich auf fehleranfällige Bereiche konzentrieren: Grenzwerte, Partitionen, Kombinationen und Zustände.",
  lessons: [
    { h: "Die 7 Prinzipien des Softwaretestens", body: `
      <ol>
        <li><strong>Testen zeigt das Vorhandensein von Fehlern</strong> — Testen kann beweisen, dass Fehler existieren, niemals dass keine vorhanden sind.</li>
        <li><strong>Erschöpfendes Testen ist unmöglich</strong> — jede Kombination von Eingaben/Pfaden zu testen ist außer in trivialen Fällen nicht machbar.</li>
        <li><strong>Frühes Testen spart Zeit und Kosten</strong> — je früher ein Fehler gefunden wird, desto günstiger ist die Behebung.</li>
        <li><strong>Fehlerhäufung (Defect Clustering)</strong> — eine kleine Anzahl von Modulen enthält meist die meisten Fehler.</li>
        <li><strong>Pestizid-Paradoxon</strong> — dieselben Tests wiederholt auszuführen findet irgendwann keine neuen Fehler mehr; Tests müssen sich weiterentwickeln.</li>
        <li><strong>Testen ist kontextabhängig</strong> — wie man eine Banking-App testet, unterscheidet sich davon, wie man ein Spiel testet.</li>
        <li><strong>Trugschluss der Fehlerfreiheit</strong> — ein fehlerfreies Produkt, das die Nutzerbedürfnisse nicht erfüllt, ist trotzdem ein Misserfolg.</li>
      </ol>` },
    { h: "Grenzwertanalyse (Boundary Value Analysis, BVA)", body: `
      <p>Fehler häufen sich an den Rändern von Eingabebereichen, daher testet BVA Werte am Minimum, Maximum sowie knapp innerhalb/außerhalb jeder Grenze.</p>
      <p class="worked-example"><strong>Durchgerechnetes Beispiel:</strong> Für einen gültigen Eingabebereich von <strong>1–10</strong> testet BVA die Grenzwerte <strong>0, 1, 2, 9, 10, 11</strong>.</p>` },
    { h: "Äquivalenzklassenbildung (Equivalence Class Partitioning, ECP)", body: `
      <p>Eingaben werden in gültige und ungültige Klassen unterteilt, dann wird nur ein repräsentativer Wert pro Klasse getestet — denn wenn ein Wert in einer Klasse fehlschlägt oder besteht, wird angenommen, dass sich der Rest der Klasse gleich verhält.</p>
      <p class="worked-example"><strong>Durchgerechnetes Beispiel:</strong> Die gültigen Bereiche 1–10 und 20–30 ergeben fünf Klassen: <code>&lt;1</code> (ungültig), <code>1–10</code> (gültig), <code>11–19</code> (ungültig), <code>20–30</code> (gültig), <code>&gt;30</code> (ungültig). Beispiel-Testwerte: <strong>-2, 3, 15, 25, 45</strong>.</p>` },
    { h: "Entscheidungstabellentest", body: `
      <p>Bildet Eingabekombinationen in einer Ursache-Wirkungs-Tabelle auf Ausgaben ab — nützlich, wenn das Verhalten eines Systems von Kombinationen von Bedingungen abhängt.</p>
      <p class="worked-example"><strong>Durchgerechnetes Beispiel:</strong> Ein „Absenden“-Button wird nur aktiviert, wenn alle Formularfelder ausgefüllt sind.</p>
      <p><strong>Schritte:</strong></p>
      <ol>
        <li>Eingaben (Bedingungen) in Zeilen auflisten.</li>
        <li>Regelkombinationen in Spalten aufzählen.</li>
        <li>Die Kombinationen eintragen.</li>
        <li>Das erwartete Ergebnis für jede Kombination festhalten.</li>
      </ol>` },
    { h: "Zustandsübergangstest", body: `
      <p>Modelliert, wie eine Folge von Eingaben ein System zwischen definierten Zuständen bewegt, sodass man sowohl die Übergänge als auch die Zustände selbst testen kann.</p>
      <p class="worked-example"><strong>Durchgerechnetes Beispiel:</strong> ein Login-System mit einer PIN — eine korrekte PIN gewährt bei jedem Versuch Zugriff; drei falsche Versuche hintereinander sperren das Konto.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Zustand</th><th>Korrekte PIN</th><th>Falsche PIN</th></tr></thead>
        <tbody>
          <tr><td>Start</td><td>Zugriff gewährt</td><td>1. Versuch</td></tr>
          <tr><td>1. Versuch</td><td>Zugriff gewährt</td><td>2. Versuch</td></tr>
          <tr><td>2. Versuch</td><td>Zugriff gewährt</td><td>3. Versuch</td></tr>
          <tr><td>3. Versuch</td><td>Zugriff gewährt</td><td>Konto gesperrt</td></tr>
          <tr><td>Zugriff gewährt</td><td>–</td><td>–</td></tr>
          <tr><td>Konto gesperrt</td><td>–</td><td>–</td></tr>
        </tbody>
      </table></div>` },
    { h: "Fehlerraten (Error Guessing)", body: `
      <p>Nutzt die Erfahrung, Intuition und historische Fehlerdaten eines Testers, um wahrscheinliche Problembereiche vorherzusehen. Es gibt keine formalen Schritte — es beruht vollständig auf erfahrenen, kompetenten Testern, die bereits gesehen haben, wo Dinge tendenziell kaputtgehen.</p>` },
    { h: "Vorteile & Grenzen", body: `
      <p><strong>Vorteile:</strong> bessere Abdeckung, adressiert Hochrisikobereiche, reduziert Redundanz, findet Probleme frühzeitig, stärkt das Vertrauen.</p>
      <p><strong>Grenzen:</strong> keine Technik garantiert vollständige Fehlererkennung, Ergebnisse hängen von der Fähigkeit des Testers ab, kann Integrations- oder Usability-Probleme übersehen, und manche Techniken haben nur begrenzte Automatisierungsunterstützung.</p>` },
    { h: "Die richtige Technik wählen", body: `
      <p>Die Technik an den Projektzielen ausrichten, Risiko bewerten und zum Entwicklungsmodell passen — zum Beispiel bei iterativen Systemen agilfreundliche Ansätze bevorzugen. Zeit, Budget und Fähigkeitsbeschränkungen abwägen. Bewährte Praxis ist, <strong>mehrere Techniken zu kombinieren</strong>, statt sich nur auf eine zu verlassen.</p>` },
    { h: "Pairwise-Testing & Use-Case-Testing", body: `
      <p><strong>Pairwise-Testing (kombinatorisches Testen)</strong> löst ein Problem, das Äquivalenzklassenbildung und Grenzwertanalyse allein nicht lösen: Wenn ein Feature viele unabhängige Eingabeparameter hat, explodiert die Anzahl der zu testenden Kombinationen schnell (5 Parameter mit je 4 Werten = 1.024 Kombinationen). Pairwise-Testing beruht auf der Beobachtung, dass die meisten realen Defekte durch das Zusammenspiel von nur <strong>zwei</strong> Parametern ausgelöst werden, nicht von fünf gleichzeitig — eine sorgfältig gewählte Teilmenge von Testfällen, die jedes mögliche <em>Paar</em> von Parameterwerten abdeckt, findet daher den Großteil der Interaktionsfehler zu einem Bruchteil der Kosten.</p>
      <p><em>Durchgerechnetes Beispiel:</em> Ein Formular mit Browser (Chrome/Firefox/Safari), Betriebssystem (Windows/Mac/Linux) und Sprache (EN/ES) hat 18 mögliche vollständige Kombinationen — Pairwise-Testing reduziert dies auf etwa 9 Testfälle und deckt dabei trotzdem jedes Browser×OS-, Browser×Sprache- und OS×Sprache-Paar mindestens einmal ab. <strong>Orthogonal Array Testing</strong> ist die zugrunde liegende statistische Methode, die oft zur Erzeugung dieser reduzierten Testmengen verwendet wird.</p>
      <p><strong>Use-Case-Testing</strong> leitet Testfälle direkt aus dokumentierten Anwendungsfällen (Use Cases) ab — den schrittweisen Interaktionen zwischen einem Akteur (Nutzer oder externes System) und dem zu testenden System, einschließlich des Haupterfolgsszenarios und seiner alternativen Abläufe/Ausnahmeabläufe. Es ist besonders wirksam, um zu validieren, dass ein Workflow durchgängig aus Sicht des Nutzers korrekt funktioniert, und ergänzt eingabefokussiertere Techniken wie ECP und BVA.</p>` },
    { h: "White-Box-Techniken & Codeabdeckung", body: `
      <p>White-Box-Techniken (strukturbasiert) leiten Tests aus dem Code selbst ab. Von schwach nach stark:</p>
      <ul>
        <li><strong>Anweisungsüberdeckung</strong>: Jede ausführbare Anweisung läuft mindestens einmal.</li>
        <li><strong>Zweig-(Entscheidungs-)überdeckung</strong>: Jeder Zweigausgang, wahr und falsch, wird genommen. 100 % Zweigüberdeckung impliziert 100 % Anweisungsüberdeckung, aber nicht umgekehrt.</li>
        <li><strong>MC/DC</strong> (modifizierte Bedingungs-/Entscheidungsüberdeckung): Für jede boolesche Teilbedingung wird gezeigt, dass sie das Ergebnis unabhängig beeinflusst. Gefordert in sicherheitskritischen Bereichen wie der Luftfahrt.</li>
        <li><strong>Pfadüberdeckung</strong>: jeder ausführbare Pfad. Die stärkste, aber oft unpraktikabel, weil sich Pfade mit jeder Schleife und Verzweigung vervielfachen.</li>
      </ul>
      <p><strong>Zyklomatische Komplexität</strong> (McCabe) = <code>E − N + 2P</code> (Kanten, Knoten und zusammenhängende Komponenten des Kontrollflussgraphen). Für eine einzelne Funktion ist sie gleich Anzahl der Entscheidungen + 1 und gibt die Zahl unabhängiger Pfade an, die zu testen sind. Hohe Werte markieren Code, der schwer zu testen und zu warten ist.</p>
      <p><strong>Datenflussüberdeckung</strong> verfolgt jede Variable von ihrer Definition bis zu ihrer Verwendung (Def-Use-Paare) und findet Anomalien wie eine Variable, die vor dem Setzen benutzt wird.</p>
      <p><em>Beispiel:</em> <code>if (a &gt; 0) { x = 1 }</code> ohne else. Der einzelne Test <code>a = 5</code> erreicht 100 % Anweisungs-, aber nur 50 % Zweigüberdeckung, weil der Falsch-Zweig nie durchlaufen wird. Mit zusätzlich <code>a = 0</code> sind es 100 % Zweigüberdeckung.</p>` },
    { h: "Techniken kombinieren: Klassifikationsbäume, Attacken & ÄK + GWA", body: `
      <p><strong>Äquivalenzklassen + Grenzwertanalyse zusammen</strong> bringen bei Eingabefeldern den höchsten Ertrag. Für ein Altersfeld, das <strong>18–60</strong> akzeptiert:</p>
      <ul>
        <li>Klassen: <code>&lt; 18</code> (ungültig), <code>18–60</code> (gültig), <code>&gt; 60</code> (ungültig).</li>
        <li>Grenzwerte: <strong>17, 18, 19, 59, 60, 61</strong>.</li>
      </ul>
      <p><strong>Klassifikationsbäume</strong> zerlegen das Testobjekt in Aspekte (z. B. <em>Zahlungsart</em>, <em>Währung</em>, <em>Kundentyp</em>), teilen jeden Aspekt in Klassen und wählen dann Kombinationen aus dem Baum. Eine visuelle Methode, um über komplexe Kombinationen nachzudenken.</p>
      <p><strong>Attacken und Fehlerinjektion</strong> provozieren gezielt bekannte Fehlerklassen. Was passiert, wenn das Netz mitten im Upload abbricht? Wenn die Festplatte voll ist? Wenn eine Abhängigkeit in einen Timeout läuft?</p>
      <p><strong>Checklistenbasiertes Testen</strong> nutzt heuristische Listen (etwa SFDIPOT) für wiederholbare Breite; es ist erfahrungsbasiert wie Error Guessing und exploratives Testen.</p>` },
    { h: "Aufbau eines Testfalls & Abwägungen bei der Abdeckung", body: `
      <p><strong>Ein guter Testfall enthält:</strong></p>
      <ol>
        <li><strong>Eindeutige ID und Titel</strong>: durchsuchbar, beschreibt das getestete Verhalten.</li>
        <li><strong>Vorbedingungen</strong>: benötigter Zustand, Daten und Umgebung.</li>
        <li><strong>Schritte</strong>: nummeriert, minimal, exakt.</li>
        <li><strong>Testdaten</strong>: konkrete Werte, idealerweise aus ÄK/GWA abgeleitet.</li>
        <li><strong>Erwartetes Ergebnis</strong>: das Orakel, also was „korrekt“ bedeutet.</li>
        <li><strong>Nachbedingungen</strong> (optional): der erwartete Endzustand.</li>
        <li><strong>Rückverfolgbarkeit</strong>: ein Link zur Anforderung, zum Risiko oder zur User Story.</li>
      </ol>
      <p><strong>Abdeckung in der Praxis wählen:</strong></p>
      <ul>
        <li><strong>ÄK + GWA</strong> für eingabelastige Formulare: günstig und ergiebig.</li>
        <li><strong>Entscheidungstabellen</strong>, sobald Bedingungen zusammenwirken. Bedenke: <code>2<sup>n</sup></code> Kombinationen wachsen schnell.</li>
        <li><strong>Zustandsübergänge</strong> für alles mit Modi, Sessions oder Abläufen.</li>
        <li><strong>Pairwise</strong>, wenn der Parameterraum explodiert (Browser × OS × Locale × Tarif).</li>
        <li><strong>Pfad- oder MC/DC-Überdeckung</strong> nur für kritische Algorithmen wie Zahlungen oder Sicherheitslogik.</li>
        <li>Nie überall 100 % Abdeckung jagen; <strong>risikoproportionale</strong> Abdeckung anstreben.</li>
        <li><strong>Keine Spezifikation?</strong> Andere Orakel nutzen: vergleichbare Produkte, Heuristiken wie HICCUPPS (Modul 5) oder echtes Nutzerverhalten.</li>
      </ul>` }
  ]
},
{
  id: "testing-types",
  num: 3,
  title: "Arten des Softwaretestens — Referenzkatalog",
  summary: "Die Landschaft der Testarten und eine kuratierte Top 20, die man zuerst kennen sollte.",
  takeaway: "Eine „Art“ des Testens ist eine Klassifizierung mit eigenem Ziel, eigener Strategie und eigenen Ergebnissen — zum Beispiel validiert Accessibility Testing, dass eine App für Menschen mit Behinderungen nutzbar ist. Das Verständnis der Landschaft hilft QA-Fachleuten, die richtige Kombination für vollständige Abdeckung auszuwählen.",
  lessons: [
    { h: "Was ist eine Softwaretestart?", body: `
      <p>Eine Testart klassifiziert eine Testaktivität danach, was sie prüft (Funktion, Performance, Sicherheit, Usability...) und wer sie typischerweise durchführt. Die Kenntnis des Katalogs hilft dabei, das richtige Werkzeug für ein bestimmtes Risiko zu erkennen, statt immer auf dieselbe Handvoll Tests zurückzugreifen.</p>` },
    { h: "Top 20 Testarten, die jede QA-Fachkraft kennen sollte", body: `
      <p>Eine leichte Einführung — der vollständige Katalog mit über 105 Begriffen befindet sich im <a href="#/glossary">Glossar</a>.</p>
      <ul class="chip-list">
        <li>Abnahmetest</li><li>Accessibility-Test</li><li>Agiles Testen</li><li>Alpha-Test</li>
        <li>Beta-Test</li><li>API-Test</li><li>Black-Box-Test</li><li>White-Box-Test</li>
        <li>Gray-Box-Test</li><li>Explorativer Test</li><li>Funktionaler Test</li><li>Nicht-funktionaler Test</li>
        <li>Lasttest</li><li>Performance-Test</li><li>Regressionstest</li><li>Sanity-Test</li>
        <li>Smoke-Test</li><li>Sicherheitstest</li><li>Stresstest</li><li>Usability-Test</li>
      </ul>` },
    { h: "Kategorien", body: `
      <p>Das Glossar verwendet diese Taxonomie, um Testarten zu gruppieren und zu filtern:</p>
      <ul>
        <li><strong>Funktional</strong> — überprüft, was das System gegenüber den Anforderungen tut (Abnahme-, System-, Integrationstest...).</li>
        <li><strong>Nicht-funktional</strong> — überprüft, wie gut es das tut (Performance-, Last-, Usability-Test...).</li>
        <li><strong>Strukturell (White Box)</strong> — überprüft interne Codepfade und Logik (Unit-, Branch-, Path-Test...).</li>
        <li><strong>Änderungsbezogen</strong> — überprüft, dass Änderungen nichts kaputtgemacht haben (Regression, Nachtest, Smoke-Test...).</li>
        <li><strong>Spezialisiert</strong> — gezielte Anliegen wie Sicherheit, Kompatibilität, Lokalisierung (Penetrations-, Kompatibilitätstest...).</li>
        <li><strong>Allgemein</strong> — prozess- oder methodikorientierte Arten, die sich sonst nirgends sauber einordnen lassen (Agiles Testen, Statisches Testen...).</li>
      </ul>` },
    { h: "Nicht-funktionales Testen in der Praxis", body: `
      <p>Nicht-funktionales Testen fragt „wie gut“ ein System leistet, nicht „tut es das Richtige“ — und jeder Untertyp braucht seinen eigenen Planungsansatz:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Art</th><th>Was du misst</th><th>Typischer Ansatz</th></tr></thead>
        <tbody>
          <tr><td><strong>Performance</strong></td><td>Antwortzeit, Durchsatz, Ressourcennutzung unter erwarteter Last</td><td>Zuerst eine Baseline erstellen, dann gegen definierte SLAs/Schwellenwerte vergleichen — siehe Last-/Stress-/Skalierbarkeitstest im Glossar.</td></tr>
          <tr><td><strong>Usability</strong></td><td>Erlernbarkeit, Effizienz, Fehlerrate, subjektive Zufriedenheit</td><td>Aufgabenbasierte Sitzungen mit echten oder repräsentativen Nutzern; Think-Aloud-Protokolle decken Verwirrung auf, die Worte allein nicht zeigen.</td></tr>
          <tr><td><strong>Kompatibilität</strong></td><td>Korrektes Verhalten über Browser, Geräte, Betriebssystemversionen, Bildschirmgrößen hinweg</td><td>Nach echten Nutzeranalysen priorisieren (welche Browser/Geräte die tatsächlichen Nutzer haben), statt alles gleich zu behandeln.</td></tr>
          <tr><td><strong>Lokalisierung</strong></td><td>Korrekte Übersetzung, Datums-/Währungs-/Zahlenformate, Textexpansion, die das Layout nicht zerstört</td><td>Früh mit Pseudo-Lokalisierung testen (künstlich verlängerte/akzentuierte Zeichenketten), um Layout-Brüche zu erkennen, bevor echte Übersetzungen existieren.</td></tr>
        </tbody>
      </table></div>
      <p>Der gemeinsame Nenner: Nicht-funktionales Testen braucht einen expliziten, vereinbarten Schwellenwert, bevor man beginnt („Seite lädt in unter 2 Sekunden bei 500 gleichzeitigen Nutzern“) — ohne einen solchen hat „wie gut“ keine Bestehens-/Fehlgrenze, nur Meinungen.</p>` }
  ]
},
{
  id: "adhoc-testing",
  num: 4,
  title: "Ad-hoc-Testing",
  summary: "Ungeplantes, undokumentiertes Testen, das versucht, das System mit Intuition und Kreativität zum Absturz zu bringen.",
  takeaway: "Ad-hoc-Testing ist ungeplantes, undokumentiertes Testen, bei dem der Tester versucht, das System mit Intuition und Kreativität zu „brechen“ — am wertvollsten, wenn die Zeit knapp ist oder als Ergänzung zu strukturiertem Testen.",
  lessons: [
    { h: "Was ist Ad-hoc-Testing?", body: `
      <p>Informelles, ungescriptetes Testen ohne im Voraus vorbereitete Testfälle. Es ist ein Black-Box-Ansatz: Der Tester hat keine besondere Einsicht in den Code, sondern nur das Ziel herauszufinden, was kaputtgeht.</p>` },
    { h: "Wann man es durchführt", body: `
      <ul>
        <li>Früh in der Entwicklung, bevor formale Testfälle existieren.</li>
        <li>Vor Beginn des offiziellen Testens, als Smoke-Check der Grundlagen.</li>
        <li>Nach formalem Testen, um zu erfassen, was strukturierte Tests verpasst haben.</li>
        <li>Wenn die Zeit knapp ist.</li>
        <li>Um ein Feature tiefgehend zu erkunden.</li>
        <li>Für Usability-Prüfungen.</li>
        <li>Während Beta-Tests.</li>
      </ul>` },
    { h: "Arten des Ad-hoc-Testing", body: `
      <ul>
        <li><strong>Buddy Testing</strong> — ein Entwickler und ein Tester arbeiten gemeinsam an demselben Modul.</li>
        <li><strong>Pair Testing</strong> — zwei Tester teilen sich eine Sitzung, einer steuert, der andere beobachtet.</li>
        <li><strong>Monkey Testing</strong> — zufällige, unstrukturierte Eingaben werden auf die App geworfen, um zu sehen, ob sie abstürzt.</li>
      </ul>` },
    { h: "Vorteile", body: `
      <ul>
        <li>Findet Grenzfall-Defekte, die strukturierte Tests übersehen.</li>
        <li>Erfordert keinen Dokumentationsaufwand.</li>
        <li>Schnell.</li>
        <li>Fördert kreatives Denken.</li>
      </ul>` },
    { h: "Nachteile", body: `
      <ul>
        <li>Schwer zu reproduzieren oder zu wiederholen.</li>
        <li>Hängt stark von der Fähigkeit des Testers ab.</li>
        <li>Schwache Nachverfolgbarkeit und Abdeckungsmetriken.</li>
        <li>Nicht als alleinige Testmethode geeignet.</li>
      </ul>` },
    { h: "Bewährte Praktiken", body: `
      <ol>
        <li>Gutes Geschäftswissen haben.</li>
        <li>Schlüssel-/Hochrisikomodule anvisieren.</li>
        <li>Jeden gefundenen Fehler dokumentieren.</li>
        <li>Sich mit einem anderen Tester zusammentun, für eine frische Perspektive.</li>
      </ol>` },
    { h: "Ad-hoc-Testing in Agile-Sprints integrieren", body: `
      <p>Ad-hoc-Testing fügt sich natürlich in den Rhythmus eines Sprints ein, ohne eine eigene dedizierte Zeremonie zu benötigen:</p>
      <ul>
        <li><strong>Direkt nachdem ein Feature entwicklungsseitig fertig ist</strong> — noch bevor formale Testfälle überhaupt geschrieben sind, deckt ein schneller ungescripteter Durchgang oft die offensichtlichsten Fehler am schnellsten und günstigsten auf, bevor strukturierteres Testen Zeit investiert.</li>
        <li><strong>Während der Vorbereitung des Sprint Reviews</strong> — eine kurze Ad-hoc-Sitzung am Tag vor der Demo findet peinliche Probleme, bevor sie live vor Stakeholdern auftauchen.</li>
        <li><strong>Als „Bug Bash“</strong> — eine zeitlich begrenzte Sitzung (30–60 Minuten), in der das gesamte Team, nicht nur QA, gemeinsam Ad-hoc-Tests an einem Build durchführt; das verbreitet außerdem Produktwissen und findet Fehler, auf die die Gewohnheiten eines einzelnen Testers nicht gestoßen wären.</li>
        <li><strong>Zeitlich begrenzt, nicht offen</strong> — selbst informelles Testen profitiert von einer festgelegten Zeitgrenze (z. B. 20 Minuten für den neuen Checkout-Flow), damit es fokussiert bleibt, statt abzuschweifen.</li>
      </ul>
      <p>Die wichtigste Anpassung für Agile-Teams: Befunde sofort im Sprint-Tracker festhalten, auch nur kurz, statt sich auf das Gedächtnis zu verlassen — Ad-hoc-Sitzungen laufen schnell ab, und Details verblassen rasch, sobald die Sitzung endet.</p>` },
    { h: "Ad-hoc vs. explorativ, Error Guessing & Monkey-Testing", body: `
      <p>Ad-hoc-Testen ist <strong>informelles, ungeplantes Testen ohne Dokumentation</strong>. Der Tester verlässt sich auf Intuition, Erfahrung und Produktwissen, ohne vordefinierte Testfälle, Abdeckungsmetriken oder formales Vorgehen. Es beginnt sofort mit minimaler Vorbereitung, und die Ergebnisse sind schwer reproduzierbar, wenn man keine Notizen führt.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Ansatz</th><th>Planung</th><th>Dokumentation</th><th>Struktur</th></tr></thead>
        <tbody>
          <tr><td><strong>Ad-hoc-Testen</strong></td><td>Keine</td><td>Keine</td><td>Frei, geleitet von Können und Bauchgefühl</td></tr>
          <tr><td><strong>Exploratives Testen</strong></td><td>Zeitlich begrenzte Charters</td><td>Session-Notizen</td><td>Charter-gesteuert; Lernen, Entwurf und Durchführung gleichzeitig</td></tr>
          <tr><td><strong>Error Guessing</strong></td><td>Keine</td><td>Keine</td><td>Geleitet von Fehlerhistorie und Erfahrung</td></tr>
          <tr><td><strong>Monkey-Testing</strong></td><td>Keine</td><td>Keine</td><td>Zufällige Eingaben ohne Absicht</td></tr>
        </tbody>
      </table></div>
      <p>Exploratives Testen (Modul 5) ist die <strong>disziplinierte Weiterentwicklung</strong> des Ad-hoc-Testens: Es behält die Freiheit, ergänzt aber Charters, Timeboxen und Notizen über Session-Based Test Management (SBTM).</p>
      <p><strong>Wann Ad-hoc-Testen besonders wertvoll ist:</strong></p>
      <ul>
        <li><strong>Zeitdruck</strong>: ein schneller Plausibilitätsdurchlauf vor einer Demo oder einem Release.</li>
        <li><strong>Frühe, instabile Builds</strong>, bei denen geskriptete Fälle ständig brechen.</li>
        <li><strong>Frischer Blick</strong>: Das unvoreingenommene Herumprobieren eines neuen Testers findet, was geskriptete Tester übersehen.</li>
        <li><strong>Stichproben nach Korrekturen</strong> rund um einen Hotfix.</li>
        <li><strong>Erster Eindruck</strong>: „Was würde ein Nutzer als Erstes ausprobieren?“</li>
      </ul>` },
    { h: "Ad-hoc-Testen wirksam machen", body: `
      <p><strong>Die zu beherrschenden Risiken:</strong> keine Abdeckungsgarantie, Lücken bleiben also unsichtbar; schlechte Reproduzierbarkeit („Bug gefunden, kann ihn nicht reproduzieren“ kostet Triage-Zeit); nicht wiederholbar, daher als Regression ungeeignet; und die Ergebnisse hängen stark vom Können des Einzelnen ab.</p>
      <p><strong>Sechs Gewohnheiten, die das meiste davon beheben:</strong></p>
      <ol>
        <li><strong>Grobe Notizen und Screenshots</strong> nebenbei festhalten. Informelles Protokollieren ist besser als keines.</li>
        <li><strong>Die Session zeitlich begrenzen</strong> (60–90 Minuten) und einen Zielbereich wählen.</li>
        <li><strong>Das Pestizid-Paradoxon beachten</strong>: nicht immer dieselben Pfade gehen.</li>
        <li><strong>Jeden gefundenen Fehler in einen formalen, geskripteten Testfall überführen</strong>, damit er beim nächsten Mal abgedeckt ist.</li>
        <li><strong>Eine Heuristik zur Abdeckung nutzen</strong>, etwa <strong>SFDIPOT</strong>: Structure, Function, Data, <strong>Interfaces</strong>, Platform, Operations, Time. Das ist die SFDPOT-Eselsbrücke aus Modul 5 plus Interfaces.</li>
        <li><strong>Zu zweit testen</strong>, mit einem Entwickler oder einem anderen Tester, um schneller Neues zu entdecken.</li>
      </ol>` }
  ]
},
{
  id: "exploratory-testing",
  num: 5,
  title: "Exploratives Testen",
  summary: "Gleichzeitiges Testdesign und Testausführung — Ad-hoc-Testing mit einem Zweck.",
  takeaway: "Exploratives Testen ist gleichzeitiges Testdesign und Testausführung — eine „denkende“ Aktivität, die Untersuchung und Lernen betont, weit verbreitet in Agile. Es ist Ad-hoc-Testing mit einem Zweck: strukturiert und rigoros, nicht zufällig.",
  lessons: [
    { h: "Was ist exploratives Testen?", body: `
      <p>Tester entwerfen und führen Tests im laufenden Betrieb aus und notieren Ideen vor der Ausführung. Es betont die persönliche Freiheit und Verantwortung des einzelnen Testers, die eigene Untersuchung zu steuern.</p>
      <p>ISTQB definiert es als <strong>erfahrungsbasierte</strong> Technik, bei der Tests <em>gleichzeitig</em> entworfen, ausgeführt und bewertet werden, während der Tester das Testobjekt kennenlernt, und bei der jede Erkenntnis in neue, bessere Tests einfließt.</p>
      <p>Skriptbasiertes Testen führt Analyse → Entwurf → Implementierung → Durchführung → Bewertung als getrennte Schritte aus. Exploratives Testen verdichtet sie zu einer durchgehenden Feedbackschleife:</p>
      <pre><code>Produkt kennenlernen → etwas Interessantes/Riskantes wählen
→ Test entwerfen → ausführen → beobachten → interpretieren
→ Neues lernen → nächsten Test entwerfen ↺</code></pre>
      <p>Die entscheidende Eigenschaft ist <strong>Anpassung</strong>: Ist ein Ergebnis unerwartet, ändert die Entdeckung sofort den nächsten Test, statt dass der Tester stur ein festes Skript abarbeitet.</p>` },
    { h: "Explorativ vs. Ad-hoc, Error Guessing & Checklisten", body: `
      <p><strong>Explorativ ≠ zufälliges Klicken.</strong> Ad-hoc-Testen („ich klicke mal herum und schaue“) hat weder Struktur noch Ziel und ist daher schwer zu messen, zu wiederholen, zu erklären oder zu übergeben. Exploratives Testen behält die Freiheit, ergänzt aber eine Mission, einen definierten Umfang, eine Timebox, einen Risikofokus, Notizen, festgehaltene Fragen und geplante Nacharbeit.</p>
      <p><strong>Exploratives Testen = Freiheit + Zweck + Untersuchung + Disziplin.</strong></p>
      <p><strong>Error Guessing</strong> <em>sagt</em> wahrscheinliche Probleme aus Erfahrung <em>voraus</em> („die App ist schon an langen Namen gescheitert, also teste ich lange Namen“). <strong>Exploratives Testen</strong> <em>untersucht und passt sich an</em>: langen Namen eingeben → Abschneiden bemerken → prüfen, ob die Datenbank den vollen Wert enthält → neu laden → Datensatz über die API lesen → ein anderes Feld probieren → UI und API vergleichen. Error Guessing ist oft ein Werkzeug innerhalb einer explorativen Session.</p>
      <p><strong>Checklistenbasiertes Testen</strong> startet mit einer vorgegebenen Liste. Exploration kann mit derselben Checkliste beginnen, sie aber unterwegs erweitern:</p>
      <pre><code>[ ] Ungültiger Login
     ↓ unterschiedliche Fehlermeldungen gefunden
     ↓ Konsistenz der Fehlermeldungen erkunden
     ↓ mögliche Account-Enumeration gefunden
     ↓ Verhalten über verschiedene Benutzernamen-Zustände erkunden</code></pre>
      <p>ISTQB CTFL führt alle drei (checklistenbasiertes Testen, Error Guessing, exploratives Testen) als <strong>erfahrungsbasierte</strong> Techniken.</p>` },
    { h: "Skriptbasiertes vs. exploratives Testen", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Skriptbasiertes Testen</th><th>Exploratives Testen</th></tr></thead>
        <tbody>
          <tr><td>Von Anforderungen geleitet</td><td>Von Anforderungen geleitet und während des Testens erkundend</td></tr>
          <tr><td>Testfälle weit im Voraus festgelegt</td><td>Testfälle werden während des Testens festgelegt</td></tr>
          <tr><td>Bestätigt Tests gegen Anforderungen</td><td>Untersucht das System/die Anwendung</td></tr>
          <tr><td>Betont Vorhersage und Entscheidungsfindung</td><td>Betont Anpassungsfähigkeit und Lernen</td></tr>
          <tr><td>Bestätigend</td><td>Untersuchend</td></tr>
          <tr><td>Geht um die Kontrolle von Tests</td><td>Geht um die Verbesserung des Testdesigns</td></tr>
          <tr><td>Wie das Vorlesen einer Rede von einem Entwurf</td><td>Wie ein spontanes Gespräch</td></tr>
          <tr><td>Das Skript hat die Kontrolle</td><td>Der Geist des Testers hat die Kontrolle</td></tr>
        <tr><td>Hauptstärke: Wiederholbarkeit</td><td>Hauptstärke: Entdeckung</td></tr>
          <tr><td>Am besten für bekannte Anforderungen und Regression</td><td>Am besten für unbekannte Risiken und unerwartetes Verhalten</td></tr>
          <tr><td>Dokumentiert als detaillierte Testfälle</td><td>Dokumentiert als Charters, Notizen und Session-Berichte</td></tr>
          <tr><td>Sehr gut automatisierbar</td><td>Menschliches Urteil steht im Zentrum; Entdeckungen werden danach automatisiert</td></tr>
        </tbody>
      </table></div>
      <p>Keines ersetzt das andere. Eine reife QA-Strategie kombiniert <strong>skriptbasierte Tests</strong> für wiederholbares bekanntes Verhalten, <strong>automatisierte Regression</strong> für stabile Prüfungen und <strong>exploratives Testen</strong> für Untersuchung und Entdeckung.</p>` },
    { h: "Der SBTM-Prozess (Session-Based Test Management)", body: `
      <ol>
        <li><strong>Eine Fehlertaxonomie erstellen</strong> — eine Klassifizierung für die Arten von Fehlern, die man erwartet zu finden.</li>
        <li><strong>Ein Test-Charter definieren</strong> — eine Missionserklärung für die Sitzung.</li>
        <li><strong>Die Sitzung zeitlich begrenzen (Time Box)</strong> — eine feste Dauer festlegen und sich daran halten.</li>
        <li><strong>Ergebnisse überprüfen</strong> — durchgehen, was gefunden wurde.</li>
        <li><strong>Debriefing</strong> — die Sitzung mit dem Team besprechen.</li>
      </ol>
      <p>Der ISTQB-Lehrplan Advanced Agile Tester beschreibt Sessions als zeitlich begrenzt (üblicherweise <strong>60–120 Minuten</strong>), von einem Charter gesteuert und dokumentiert mit Notizen, Screenshots, Aufzeichnungen, Abdeckung, Beobachtungen und Anomalien.</p>` },
    { h: "Einen Test-Charter schreiben", body: `
      <p>Ein <strong>Test-Charter</strong> ist eine Aussage über Testziele und ggf. Testideen, die eine Session leitet. Er gibt Richtung, ohne jeden Klick vorzuschreiben. Ein guter Charter beantwortet: Was testen wir, warum, welcher Bereich oder welches Risiko, was wollen wir lernen, welche Einschränkungen gelten?</p>
      <ul>
        <li><strong>Schlecht:</strong> „Login testen.“</li>
        <li><strong>Besser:</strong> „Den Login-Ablauf auf Authentifizierungsfehler, ungewöhnliche Eingaben, Session-Handling und Fehlermeldungen erkunden.“</li>
        <li><strong>Fokussierter:</strong> „Login mit ungültigen, Grenz- und ungewöhnlichen Zugangsdaten erkunden, mit besonderem Augenmerk auf Sperrung, Fehlerbehandlung und Session-Verhalten.“</li>
      </ul>
      <p>Ein Charter gibt <strong>Fokus</strong>, kein Skript. Zu vage, und man klickt zufällig herum; zu restriktiv, und man kann interessanten Entdeckungen nicht folgen.</p>
      <pre><code>Charter:       [Feature/Bereich] erkunden, um [Risiko/Verhalten] aufzudecken.
Mission:       Verstehen, ob [Ziel].
Fokus:         [Bereich 1] · [Bereich 2] · [Bereich 3]
Risiken:       [Risiko 1] · [Risiko 2]
Testideen:     [Idee] · [Idee] · [Idee]
Außerhalb:     [Bereich]
Umgebung:      Browser · OS · Build · Gerät
Timebox:       [XX Minuten]
Tester / Datum</code></pre>
      <p><strong>Beispiel-Charter-Bibliothek:</strong></p>
      <ul>
        <li><strong>Registrierung:</strong> Validierung, doppelte Konten, Grenzdaten und Fehlerbehandlung erkunden.</li>
        <li><strong>REST-API:</strong> Validierung, Authentifizierung, Autorisierung, fehlerhafte Requests, Grenzdaten, doppelte Requests und Fehlerbehandlung erkunden.</li>
        <li><strong>Mandantenfähigkeit:</strong> erkunden, ob Nutzer Daten eines anderen Mandanten abrufen, durchsuchen, ändern, exportieren oder erschließen können.</li>
        <li><strong>Datei-Upload:</strong> Dateityp, Größe, Benennung, Duplikate, Unterbrechung, Abbruch und fehlerhafte Dateien erkunden.</li>
        <li><strong>Suche:</strong> leere Anfragen, Sonderzeichen, große Ergebnismengen, Paginierung, Filter, Sortierung und gleichzeitige Datenänderungen erkunden.</li>
        <li><strong>Zahlung:</strong> fehlgeschlagene Zahlung, Wiederholung, Abbruch, doppelte Übermittlung, Timeout und Netzwerkunterbrechung erkunden.</li>
      </ul>` },
    { h: "Eine Session durchführen: Vorbereiten, Erkunden, Festhalten, Debriefing", body: `
      <p><strong>1. Vorbereiten:</strong> Feature verstehen, Anforderungen lesen, Risiken identifizieren, frühere Defekte prüfen, Build prüfen, Testdaten und Umgebung vorbereiten, dann Charter und Timebox festlegen.</p>
      <p><strong>2. Erkunden:</strong> beobachten, Fragen stellen, Hypothesen bilden, Eingaben variieren, interessanten Pfaden folgen, Verhalten mit Erwartungen vergleichen, Heuristiken anwenden, Belege sichern. Wenn etwas Seltsames passiert: <strong>stoppen → reproduzieren → isolieren → ausweiten → vergleichen</strong>.</p>
      <p><strong>3. Debriefing:</strong> Was haben wir getestet und gelernt? Welche Defekte gefunden? Welche Fragen und Risiken bleiben? Was wurde <em>nicht</em> getestet? Welche Bereiche brauchen eine weitere Session? Welche Entdeckungen sollten skriptbasierte oder automatisierte Tests werden?</p>
      <p><strong>Timeboxing</strong> verhindert, dass Exploration grenzenlos wächst, und macht den Aufwand gut kommunizierbar: ca. 30 Min. für eine schnelle Untersuchung, 60 für fokussierte Feature-Exploration, 90 für einen normalen Deep Dive, 120 für eine größere Untersuchung.</p>
      <p><strong>Festhalten, nicht auf das Gedächtnis verlassen:</strong> Aktionen, Testdaten, Beobachtungen, Hypothesen, Fragen, Umgebung und Build, Screenshots, Aufzeichnungen, Logs, API-Requests/-Responses, Konsolenfehler, Netzwerkfehler, Defekte sowie abgedeckte <em>und nicht abgedeckte</em> Bereiche.</p>
      <pre><code>10:03 Normalen Nutzer erfolgreich registriert.
10:06 Registrierung mit derselben E-Mail wiederholt.
10:07 UI zeigte generischen Fehler.
10:10 API lieferte 500 statt des erwarteten 4xx.
10:12 Hypothese: doppelte Registrierung wird nicht behandelt.
10:15 In zweitem Browser reproduziert.
10:18 Direkt über die API reproduziert. Bestätigt.
10:25 Bug-Report erstellt.
10:35 UI akzeptiert 256-Zeichen-Passwort, die API lehnt es ab.
10:40 Zweiten Defekt erstellt.</code></pre>
      <p>Das ist die Lernschleife in Aktion: <strong>Beobachtung → Hypothese → neuer Test → neuer Beleg → neue Hypothese</strong>.</p>
      <p><strong>Eine 60-Minuten-Session, zum Beispiel:</strong> 0–5 Anforderungen lesen, Risiken identifizieren · 5–10 Konto, Daten und Charter vorbereiten · 10–20 normaler Ablauf · 20–30 ungültige und Grenzdaten · 30–40 Unterbrechungen und Zustandsübergänge · 40–50 Berechtigungen, Nebenläufigkeit oder Integrationen · 50–55 Funde reproduzieren · 55–60 Defekte, Risiken, Fragen und Nacharbeit dokumentieren.</p>` },
    { h: "Vor- & Nachteile", body: `
      <p><strong>Vorteile:</strong> findet mehr Fehler, fördert Kreativität, benötigt weniger Vorbereitungsdokumentation, passt sich schnell an sich ändernde Anforderungen an.</p>
      <p><strong>Nachteile:</strong> hängt stark von der Fähigkeit des Testers ab, schwer messbare Abdeckung, schwer exakt zu wiederholen oder zu reproduzieren, weniger geeignet für strenge Compliance-/Audit-Anforderungen.</p>` },
    { h: "Wann man es einsetzt", body: `
      <ul>
        <li>Anforderungen fehlen oder sind mehrdeutig.</li>
        <li>Frühe Iterationen eines Features.</li>
        <li>Kritische Anwendungen, die tiefgehende Untersuchung benötigen.</li>
        <li>Erfahrene Tester sind verfügbar.</li>
      <li>Das Feature ist neu, Akzeptanzkriterien sind minimal oder das Produkt ändert sich schnell.</li>
        <li>Es fehlt die Zeit für eine vollständige skriptbasierte Suite.</li>
        <li>Du untersuchst einen vermuteten Defekt. Frage: „Was könnte noch damit zusammenhängen?“, denn ein Defekt legt oft eine ganze Klasse von Problemen offen.</li>
        <li>Integrationsverhalten ist unsicher, Abläufe sind komplex oder Randfälle wahrscheinlich.</li>
        </ul>
      <p><strong>Beispiel komplexer Ablauf:</strong> Erkunde beim Checkout (<em>Produkt → Warenkorb → Rabatt → Adresse → Zahlung → Bestätigung</em>) Unterbrechungen und Kombinationen: Produkt mitten im Checkout entfernen, Menge nach Rabatt ändern, Session ablaufen lassen, Zahlungsseite neu laden, Zurück drücken, zwei Tabs öffnen, Adresse nach Versandberechnung ändern, Zahlung wiederholen, Netzwerk trennen.</p>` },
    { h: "Exploratives Testen in Agile & CI/CD", body: `
      <p>Agile erzeugt häufige Änderungen und oft unvollständige Informationen, was gut zur Exploration passt. Das ISTQB-Agile-Material verortet sie während der Iterationsdurchführung, in Reviews und Demos, nach größeren Änderungen und immer dann, wenn Akzeptanzkriterien vage sind. Erkunde neue Stories, geänderte Funktionalität, Integrationspunkte, Sprint-Inkremente und Hochrisikobereiche.</p>
      <pre><code>Commit → Build → Unit tests → API tests → UI smoke tests
→ Deploy test environment → Exploratory testing
→ Defect investigation → Automated regression → Release</code></pre>
      <p>CI/CD-Automatisierung liefert <strong>schnelles, wiederholbares Feedback</strong>; exploratives Testen liefert <strong>adaptive menschliche Untersuchung</strong>. Exploration verbindet Entwicklung, Anforderungen, automatisierte Prüfungen und nutzerorientierte Validierung.</p>` },
    { h: "Heuristiken des explorativen Testens: SFDPOT & HICCUPPS", body: `
      <p>Heuristiken geben explorativem Testen Struktur, ohne es in ein Skript zu verwandeln — sie sind Denkanstöße dafür, wo man als Nächstes hinschauen sollte, keine Schritte, die man der Reihe nach befolgt.</p>
      <p><strong>SFDPOT</strong> („San Francisco Depot") ist eine Eselsbrücke zur Abdeckungsplanung, um zu entscheiden, welche Teile eines Produkts man erkundet:</p>
      <ul>
        <li><strong>S</strong>tructure (Struktur) — woraus das Produkt besteht (Code, Dateien, Abhängigkeiten).</li>
        <li><strong>F</strong>unction (Funktion) — was es tut (Features, Befehle, Operationen).</li>
        <li><strong>D</strong>ata (Daten) — was es verarbeitet (Eingaben, Ausgaben, Formate, Speicherung).</li>
        <li><strong>P</strong>latform (Plattform) — wovon es abhängt (Betriebssystem, Browser, Hardware, Netzwerk).</li>
        <li><strong>O</strong>perations (Betrieb) — wie es tatsächlich in der realen Welt genutzt wird (typische und untypische Nutzung).</li>
        <li><strong>T</strong>ime (Zeit) — wie die Zeit es beeinflusst (Timeouts, Zeitzonen, Nebenläufigkeit, Reihenfolge).</li>
      </ul>
      <p><strong>HICCUPPS</strong> ist eine Oracle-Heuristik — eine Möglichkeit zu entscheiden, ob ein beobachtetes Verhalten tatsächlich ein Fehler ist, wenn es keine explizite Spezifikation zum Abgleich gibt:</p>
      <ul>
        <li><strong>H</strong>istory (Historie) — verhält es sich konsistent damit, wie es sich zuvor verhalten hat?</li>
        <li><strong>I</strong>mage (Image) — entspricht es dem Image/Ruf, das das Unternehmen vermitteln möchte?</li>
        <li><strong>C</strong>omparable products (Vergleichbare Produkte) — wie gehen ähnliche Produkte damit um?</li>
        <li><strong>C</strong>laims (Behauptungen) — entspricht es dem, was Dokumentation, Marketing oder Hilfetexte behaupten?</li>
        <li><strong>U</strong>ser expectations (Nutzererwartungen) — entspricht es dem, was ein vernünftiger Nutzer erwarten würde?</li>
        <li><strong>P</strong>roduct (Produkt) — ist es intern konsistent mit dem Rest des Produkts?</li>
        <li><strong>P</strong>urpose (Zweck) — dient es dem tatsächlichen Zweck des Features?</li>
        <li><strong>S</strong>tatutes (Gesetze) — entspricht es Gesetzen, Vorschriften oder Standards?</li>
      </ul>
      <p>Zusammen verwandeln sie „die App erkunden" von einer vagen Anweisung in eine wiederholbare Sammlung von Blickwinkeln, die jeder Tester nutzen kann.</p>` },
    { h: "Praktische Heuristiken: Was wäre wenn, Daten, Zustand & Unterbrechungen", body: `
      <p>Eine Heuristik ist eine praktische Faustregel zur Steuerung der Untersuchung. Halte diese griffbereit:</p>
      <ul>
        <li><strong>Was wäre, wenn…</strong> der Wert leer, riesig oder winzig ist? Der Nutzer Zurück drückt, neu lädt oder doppelklickt? Der Request wiederholt wird, das Netz wegfällt, zwei Nutzer gleichzeitig handeln, die Session abläuft oder Daten in einem anderen Tab geändert werden?</li>
        <li><strong>Kontext wechseln:</strong> Browser, Geräte, Bildschirmgrößen, Rollen und Berechtigungen, Locales, Sprachen, Zeitzonen, Netzbedingungen, Kontozustände.</li>
        <li><strong>Daten wechseln:</strong> leer, null, Null, negativ, Min, Max, Max + 1, sehr lang, sehr kurz, Unicode, Leerzeichen, Sonderzeichen, Duplikate, fehlerhafte Werte, unerwartete Typen.</li>
        <li><strong>CRUD + Berechtigungen:</strong> Darf dieser Nutzer jeweils Create/Read/Update/Delete, und was passiert ohne Berechtigung? Dann Kombinationen und ungültige Übergänge probieren.</li>
        <li><strong>Grenzen:</strong> Min − 1, Min, Min + 1, Max − 1, Max, Max + 1.</li>
        <li><strong>Zustand:</strong> Welche Zustände kann dieses Objekt erreichen? Bei <code>Draft → Submitted → Approved → Completed</code> ungültige Wechsel wie <code>Completed → Draft</code>, <code>Approved → Submitted</code> oder das Ändern eines gelöschten Elements versuchen.</li>
        <li><strong>Nebenläufigkeit:</strong> zwei Nutzer an einem Datensatz, zwei Browser, zwei Tabs, doppelte Requests, gleichzeitiges Ändern/Löschen, gleichzeitiger Login, parallele API-Aufrufe.</li>
        <li><strong>Unterbrechung:</strong> neu laden, Zurück, Vor, Tab schließen und wieder öffnen, Netz trennen und verbinden, Timeouts, Session-Ablauf.</li>
        <li><strong>Konsistenz:</strong> UI vs. API, Browser A vs. Browser B, Nutzer A vs. Nutzer B, aktuelle vs. vorherige Version.</li>
      </ul>
      <p>Stelle dabei ständig die Fragen eines Ermittlers: <em>Was ist passiert? Was habe ich erwartet? Ist der Unterschied relevant? Warum könnte das passieren? Was könnte es erklären? Welcher Test würde die Erklärungen unterscheiden? Was könnte noch betroffen sein?</em></p>` },
    { h: "Risikofokus & ausgearbeitete Beispiele", body: `
      <p>Priorisiere mit <strong>Risiko = Eintrittswahrscheinlichkeit × Auswirkung</strong>. Statt risikoarme UI durchzuklicken, verbringe die Session dort, wo Fehler am meisten schaden: Authentifizierung, Autorisierung, Zahlung, personenbezogene Daten, Mandantenisolation, Berechtigungen, Datenlöschung, Nebenläufigkeit, Integrationen und kritische Geschäftsabläufe.</p>
      <p><strong>Login.</strong> <em>Charter: Authentifizierung mit ungültigen, Grenz-, unerwarteten und wiederholten Eingaben erkunden, mit Fokus auf Sicherheit, Fehlerbehandlung und Session-Verhalten.</em> Ideen: gültige/ungültige/leere Zugangsdaten; Min-/Max-/Max + 1-Längen; Leerzeichen, Unicode, Sonderzeichen; Login dann Logout, Neuladen, Zurück, Browser schließen oder zweiter Tab; wiederholte Fehlversuche und Sperrung; konsistente Fehlermeldungen; Session nach Logout ungültig; geschützte Seiten nach Logout; dasselbe Konto in zwei Browsern.</p>
      <p><strong>REST-API.</strong> Exploration ist nicht nur UI. Probiere fehlende, zusätzliche oder falsch typisierte Felder, null, leere Strings, fehlerhaftes JSON, ungültige oder abgelaufene Auth, falsche Methode oder Content-Type, doppelte und wiederholte Requests, große oder leere Payloads, ungültige, nicht existierende oder gelöschte IDs, parallele Requests, Paginierungsgrenzen und Sortier-/Filterkombinationen. Beobachte Status, Body, Header, Schema, Fehlerstruktur, Zeit, Persistenz, Autorisierung und Nebenwirkungen (siehe Modul 6).</p>
      <p><strong>Mandantenfähigkeit.</strong> <em>Charter: Mandantenisolation erkunden, während Nutzer verschiedener Mandanten gleichzeitig Projektdaten abrufen, anlegen, ändern, durchsuchen und löschen.</em> Nutzer A in Mandant A, Nutzer B in Mandant B, ähnliche Projekte in beiden anlegen, dann nach Daten des anderen Mandanten suchen, direkte URLs, getauschte IDs, gecachte Seiten, Logout/Login-Wechsel, Exporte, Benachrichtigungen, Suchindizes, Anhänge und Hintergrundjobs probieren. Erwartete Eigenschaft: Niemand sieht oder ändert Daten eines anderen Mandanten, sofern das Produkt es nicht ausdrücklich erlaubt.</p>` },
    { h: "Über Funktionales hinaus: Sicherheit, Usability, Kompatibilität & Performance", body: `
      <p><strong>Sicherheit:</strong> Exploration kann Sicherheitsprobleme aufdecken, <em>ersetzt</em> aber kein dediziertes, autorisiertes Sicherheitstesting. Nützliche Fragen: Lässt sich die Autorisierung umgehen? Kann ich die ID eines anderen Nutzers einsetzen? Sind versteckte Funktionen direkt erreichbar? Was passiert nach Logout oder Session-Ablauf? Verraten Fehlermeldungen sensible Infos? Lassen sich Requests wiederholen? Kann ich clientseitige Werte manipulieren? Erreicht ein normaler Nutzer Admin-Funktionen?</p>
      <p><strong>Usability:</strong> Achte auf verwirrende Navigation, inkonsistente Bedienelemente, unklare Meldungen oder Begriffe, schlechte Fehlerbehebung, unzugängliche Funktionen und leicht auslösbare destruktive Aktionen. Spiele Personas: Erstnutzer, Experte, ungeduldiger Nutzer, fehleranfälliger Nutzer, jemand mit wenig Fachwissen.</p>
      <p><strong>Kompatibilität:</strong> Chrome, Edge, Firefox, Safari, mobile Browser, OS-Versionen, Bildschirmgrößen, Zoomstufen, High-DPI. Achte auf Layoutbrüche, nicht unterstützte Bedienelemente, browserspezifisches Verhalten, JavaScript-Fehler, Rendering- und Timing-Unterschiede, Probleme bei Datei-Upload und Tastatur.</p>
      <p><strong>Performance-Signale:</strong> Exploration ersetzt keine Performance-Tests, kann aber Probleme erkennen: eine Seite, die plötzlich langsam wird, Latenz, die mit Wiederholung wächst, UI-Verschlechterung bei großen Datenmengen, steigender Speicher, Ressourcenprobleme über mehrere Tabs. Verfolge das mit einem kontrollierten Test in JMeter oder k6 weiter.</p>` },
    { h: "Von der Entdeckung zur Automatisierung", body: `
      <p>Exploration beruht auf menschlicher Beobachtung und Urteilskraft, speist aber ständig die Automatisierung:</p>
      <pre><code>Erkunden → wichtiges Verhalten entdecken → stabiles erwartetes
Verhalten verstehen → Regressionstest erstellen → automatisieren, wenn sinnvoll</code></pre>
      <p><em>Beispiel:</em> Die Exploration zeigt, dass ein Doppelklick auf <strong>Speichern</strong> zwei Kontakte anlegt. Manuell bestätigen → Defekt melden → Entwickler behebt ihn → Playwright-Regressionscheck wie <code>expect(contactCount).toBe(1)</code> ergänzen. Die Automatisierung schützt jetzt das Verhalten, das die Exploration entdeckt hat.</p>
      <p><strong>Eine Playwright-Routine:</strong> Build deployen → Smoke-Tests ausführen → Charter wählen → manuell mit DevTools und Netzwerk-Logs erkunden → Interessantes reproduzieren → entscheiden, ob es ein Defekt ist → Bug melden → automatisieren, wenn wichtig und stabil.</p>
      <p><strong>Unterstützende Werkzeuge:</strong> Testmanagement (Jira, Azure DevOps, TestRail, Zephyr, Xray) · Notizen (Markdown, Notion, OneNote, Google Docs) · Belege (Screenshots, Aufzeichnungen, DevTools, Netzwerk-/Konsolen-Logs) · API-Exploration (Postman, Insomnia, curl) · Automatisierung danach (Playwright, Cypress, Selenium, REST Assured, Newman) · Performance-Nacharbeit (JMeter, k6). Werkzeuge machen eine Session nicht explorativ, die Herangehensweise tut es.</p>` },
    { h: "Reporting, Abdeckung, Metriken & Definition of Done", body: `
      <p><strong>Ein explorativ gefundener Bug muss trotzdem reproduzierbar sein.</strong> Beispieltitel: <em>API liefert HTTP 500 bei Registrierung einer bereits existierenden E-Mail.</em> Enthalten sein sollten Vorbedingungen (ein Nutzer mit <code>test@example.com</code> existiert), Schritte (POST <code>/users</code> mit dieser E-Mail), erwartet (eine Client-Fehlerantwort laut API-Vertrag), tatsächlich (HTTP 500), Belege (Request, Response, Zeitstempel, Umgebung, Logs) und die Herkunft (<em>gefunden in Session „Registrierung: doppelte und Grenzdaten“</em>).</p>
      <p><strong>Abdeckung hat mehrere Dimensionen:</strong> Feature, Risiko, Daten, Ablauf, Zustand, Rolle, Plattform und Integration. „Ich habe den Bildschirm getestet“ ist keine Abdeckungsaussage. Du solltest sagen können, <strong>was erkundet wurde und was unbekannt bleibt</strong>.</p>
      <p><strong>Metriken, mit Bedacht:</strong> Session-Dauer, Charter, abgedeckte Bereiche, untersuchte Risiken, gefundene Defekte und Fragen, Folgesessions, erstellte Regressionstests und Automatisierungskandidaten, offene Risiken. Vermeide Eitelkeitszahlen („500 Klicks, also war das Testen gut“). Frage stattdessen: <em>Welche wichtigen Informationen hat die Session geliefert?</em></p>
      <p><strong>Definition of Done einer Session:</strong> Der Charter wurde bearbeitet; Schlüsselrisiken wurden untersucht; Beobachtungen, Belege und Fragen wurden festgehalten; Defekte wurden gemeldet; ungetestete Bereiche und Nacharbeit wurden benannt. Done heißt nicht „alles ist getestet“. Es heißt: <em>Wir haben die Mission untersucht und können erklären, was wir gelernt haben und was unbekannt bleibt.</em></p>` },
    { h: "Häufige Fehler & Kurzreferenz", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Fehler</th><th>Besser</th></tr></thead>
        <tbody>
          <tr><td>Zufälliges Klicken ohne Ziel</td><td>Einen Charter schreiben</td></tr>
          <tr><td>Keine Notizen, Entdeckungen nicht reproduzierbar</td><td>Aktionen, Beobachtungen und Belege festhalten</td></tr>
          <tr><td>Alles gleich intensiv testen</td><td>Nach Risiko priorisieren</td></tr>
          <tr><td>Exploration als Regression behandeln</td><td>Sie für Unbekanntes und Änderungen nutzen</td></tr>
          <tr><td>Entdeckungen nie in Regressionstests überführen</td><td>Stabile, wertvolle Prüfungen automatisieren oder dokumentieren</td></tr>
          <tr><td>Keine Timebox</td><td>Fokussierte Sessions durchführen</td></tr>
          <tr><td>Vage Defektberichte</td><td>Belege schon beim Erkunden sichern</td></tr>
          <tr><td>Zu restriktiver Charter</td><td>Die Mission definieren, nicht jeden Klick</td></tr>
        </tbody>
      </table></div>
      <p>Schwächen wie inkonsistente Abdeckung, schlechte Reproduzierbarkeit und Abhängigkeit von Können schrumpfen durch Charter, Timeboxen, Notizen, Risikoanalyse, Debriefings, Belegsicherung, Peer Reviews, skriptbasierte Folgetests und Automatisierung.</p>
      <p><strong>Prüfungs-Eselsbrücke:</strong></p>
      <pre><code>SCRIPTED     Design → Execute → Evaluate
EXPLORATORY  Learn ↔ Design ↔ Execute ↔ Evaluate

Exploratory ≠ Random
Exploratory = Mission + Timebox + Investigation
            + Adaptation + Notes + Learning</code></pre>
      <p><strong>Definition in einem Satz:</strong> Exploratives Testen ist ein disziplinierter, erfahrungsbasierter Ansatz, bei dem der Tester gleichzeitig das Produkt kennenlernt, Tests entwirft, ausführt, die Ergebnisse bewertet und den nächsten Test an das Entdeckte anpasst.</p>
      <p><strong>Weiterführend:</strong> <a href="https://istqb-glossary.page/" target="_blank" rel="noopener">ISTQB Glossary</a> · <a href="https://istqb.org/" target="_blank" rel="noopener">ISTQB</a> · <a href="https://martinfowler.com/bliki/ExploratoryTesting.html" target="_blank" rel="noopener">Martin Fowler: Exploratory Testing</a></p>` }
  ]
},
{
  id: "rest-api-testing",
  num: 6,
  title: "REST-API-Testing",
  summary: "Validierung von RESTful-Diensten durch das Senden von HTTP-Anfragen und die Überprüfung der Antworten — keine UI erforderlich.",
  takeaway: "REST-API-Testing validiert RESTful-Webdienste, indem HTTP-Anfragen (GET, POST, PUT, DELETE) gesendet und die Antworten geprüft werden — keine UI erforderlich.",
  lessons: [
    { h: "Was ist REST?", body: `
      <p><strong>REST</strong> (Representational State Transfer) ist ein architektonischer Stil für den Aufbau von Webdiensten, weit verbreitet für die Kommunikation von Cloud-Diensten. Eine <strong>API</strong> ist eine Reihe von Programmieranweisungen und Befehlen, die es Programmen ermöglichen, zu kommunizieren und Funktionalität auszutauschen — zum Beispiel eine „Google API“, die Such-, Übersetzungs- oder Kalenderfunktionen bereitstellt.</p>` },
    { h: "Die 4 Kern-HTTP-Methoden", body: `
      <ul>
        <li><strong>GET</strong> — ruft Daten vom Server über eine URI ab; sollte keine Nebenwirkungen auf Daten haben.</li>
        <li><strong>POST</strong> — erstellt eine neue Entität oder sendet Daten an den Server (z. B. Formularübermittlungen, Datei-Uploads).</li>
        <li><strong>PUT</strong> — erstellt eine neue Entität oder aktualisiert eine bestehende.</li>
        <li><strong>DELETE</strong> — entfernt die durch eine URI identifizierte(n) Ressource(n).</li>
      </ul>
      <p>Über die vier Kernmethoden hinaus begegnen dir regelmäßig:</p>
      <ul>
        <li><strong>PATCH</strong> — üblicherweise eine <em>teilweise</em> Aktualisierung (nur die gesendeten Felder ändern), während PUT üblicherweise die gesamte Ressource ersetzt.</li>
        <li><strong>HEAD</strong> — liefert nur die Header, ohne den normalen Response-Body.</li>
        <li><strong>OPTIONS</strong> — fragt ab, welche Operationen/Fähigkeiten der Endpunkt unterstützt (wird auch von Browsern für den CORS-Preflight genutzt).</li>
      </ul>
      <p>Ein typischer Ressourcensatz: <code>GET /api/contacts</code>, <code>GET /api/contacts/123</code>, <code>POST /api/contacts</code>, <code>PUT</code>/<code>PATCH</code>/<code>DELETE /api/contacts/123</code>. Betrachte immer den <strong>API-Vertrag als maßgebliche Quelle</strong> — reale Implementierungen folgen der REST-Lehrbuchsemantik nicht immer exakt.</p>` },
    { h: "Aufbau von Request & Response", body: `
      <p>Eine Anfrage läuft so: <strong>QA-Client → HTTP-Request → REST-API → Geschäftslogik → Datenbank/Dienste → HTTP-Response</strong>. Tests auf dieser Ebene sind schneller und fokussierter als UI-Tests und decken Fehler unterhalb der UI auf.</p>
      <p>Ein Request kann enthalten: Methode, URL, <strong>Pfadparameter</strong>, <strong>Query-Parameter</strong>, Header, Authentifizierung und einen Body.</p>
      <pre><code>GET /api/users/123?include=orders&amp;page=2
Authorization: Bearer abc123
Accept: application/json</code></pre>
      <p>Hier ist <code>123</code> ein Pfadparameter; <code>include=orders</code> und <code>page=2</code> sind Query-Parameter. Ein Create-Request und seine Antwort:</p>
      <pre><code>POST /api/contacts
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{ "firstName": "John", "lastName": "Smith" }

HTTP/1.1 201 Created
Content-Type: application/json

{ "id": "12345", "firstName": "John", "lastName": "Smith" }</code></pre>
      <p><strong>Testenswerte Header:</strong> <code>Content-Type</code>, <code>Accept</code>, <code>Authorization</code>, <code>Cache-Control</code>, <code>Location</code>, <code>ETag</code>, <code>Set-Cookie</code> sowie Request-/Korrelations-IDs. Teste fehlende Header, falschen <code>Content-Type</code>, nicht unterstützte <code>Accept</code>-Werte und fehlende oder ungültige <code>Authorization</code>.</p>` },
    { h: "HTTP-Statuscodes", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Klasse</th><th>Häufige Codes</th></tr></thead>
        <tbody>
          <tr><td><strong>2xx</strong> Erfolg</td><td>200 OK · 201 Created · 202 Accepted · 204 No Content</td></tr>
          <tr><td><strong>3xx</strong> Umleitung</td><td>301 Moved Permanently · 302 Found · 304 Not Modified</td></tr>
          <tr><td><strong>4xx</strong> Client-Fehler</td><td>400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 405 Method Not Allowed · 409 Conflict · 415 Unsupported Media Type · 422 Unprocessable Content · 429 Too Many Requests</td></tr>
          <tr><td><strong>5xx</strong> Server-Fehler</td><td>500 Internal Server Error · 501 Not Implemented · 502 Bad Gateway · 503 Service Unavailable · 504 Gateway Timeout</td></tr>
        </tbody>
      </table></div>
      <p><strong>Erwarte nicht von jeder erfolgreichen Anfrage eine 200.</strong> Ein Create liefert meist 201, ein Delete oft 204, ein asynchroner Job 202 — der erwartete Status hängt von Operation und Vertrag ab. Und jede 5xx, die durch Client-Eingaben ausgelöst wird, ist ein Defekt: Fehlerhafte Eingaben sollten eine 4xx erhalten.</p>` },
    { h: "Eingabetests entwerfen: Parameter, Bodies & Grenzwerte", body: `
      <p><strong>Pfadparameter</strong> (<code>GET /users/{id}</code>): gültige IDs, nicht existierende IDs, Null, negative, sehr große Werte, Strings statt Zahlen, null-artige Werte, fehlend, fehlerhaft, Sonderzeichen.</p>
      <p><strong>Query-Parameter</strong> (<code>GET /users?page=2&amp;limit=20</code>): normale Werte, Null, negativ, sehr groß, Min-/Max-Limits, fehlend, leer, doppelt, ungültige Typen, Sonderzeichen, URL-Kodierung.</p>
      <p><strong>JSON-Bodies:</strong> gültige Daten, fehlende Pflichtfelder, leere Strings, Nullwerte, falsche Typen, ungültige Formate, unerwartete Felder, Duplikate, übergroße Werte, fehlerhaftes JSON.</p>
      <pre><code>{"firstName":"John","lastName":"Smith","age":30}   gültig
{"firstName":"John","age":30}                       Feld fehlt
{"firstName":"","lastName":"Smith"}                 leerer Wert
{"firstName":123,"lastName":true}                   falsche Typen</code></pre>
      <p><strong>Positives Testen</strong> bestätigt, dass gültige Anfragen wie erwartet erfolgreich sind. <strong>Negatives Testen</strong> deckt ungültige/abgelaufene Auth, ungültige IDs, Duplikate, nicht unterstützte Methoden, ungültigen <code>Content-Type</code>, fehlerhaftes JSON, übergroße Requests und unerwartete Parameter ab — die API sollte jeden Fall sicher mit einer klaren 4xx ablehnen.</p>
      <p><strong>Grenzwertanalyse</strong> (Modul 2) gilt für Strings, Ganzzahlen, Arrays, Paginierung, Dateigrößen, Mengen, Datumswerte und Geldbeträge. Benutzername 3–30 Zeichen → teste <strong>2, 3, 4, 29, 30, 31</strong>. Alter 18–120 → teste <strong>17, 18, 19, 119, 120, 121</strong>.</p>
      <p><strong>Datengetriebenes Testen:</strong> dieselbe Testlogik über einen Datensatz laufen lassen (gültig, Grenzwert, ungültig, Duplikat, Unicode, Groß-/Kleinschreibung, Sonderzeichen) statt über ein fest codiertes Beispiel.</p>` },
    { h: "Response-Validierung, Schemas & Vertragstests", body: `
      <p>Validiere weit mehr als den Statuscode:</p>
      <ul>
        <li>Statuscode, Response-Header und <code>Content-Type</code></li>
        <li>JSON-Struktur/Schema, Datentypen, Pflichtfelder und tatsächliche Werte</li>
        <li>Geschäftsregeln</li>
        <li>Datenbankzustand, wo sinnvoll</li>
        <li>Antwortzeit, wo Performance zählt</li>
      </ul>
      <p><strong>OpenAPI/Swagger</strong> und <strong>JSON Schema</strong> definieren den API-Vertrag: Methoden, Parameter, Request-/Response-Schemas, Auth-Anforderungen und Fehlerantworten. <strong>Vertragstests</strong> prüfen, dass die Implementierung noch dazu passt. Beispieldefekt: Laut Doku ist <code>id</code> eine Ganzzahl, die API liefert aber einen String. Das ist <strong>Contract Drift</strong> und kann jeden Konsumenten der API brechen.</p>
      <p><strong>Datenbankvalidierung:</strong> Wo es Mehrwert bringt, bestätige, dass eine Operation den erwarteten persistenten Zustand erzeugt hat (Datensätze, Beziehungen, Zeitstempel, Standardwerte, Status). Mache aber nicht <em>jeden</em> API-Test von direktem DB-Zugriff abhängig: Diese Kopplung macht Suiten langsamer und fragiler.</p>` },
    { h: "Wie man eine REST-API testet", body: `
      <p>Man braucht zwei Dinge: (1) ein Testwerkzeug oder Framework und (2) entweder konfigurierte Anfragen oder eigenen Testcode. Gängige Werkzeuge: <strong>Advanced REST Client</strong>, <strong>Postman</strong>, <strong>cURL</strong>.</p>` },
    { h: "Schrittweiser Test-Workflow", body: `
      <ol>
        <li>Den REST-Client öffnen.</li>
        <li>Die Ziel-API-URL eingeben.</li>
        <li>Die HTTP-Methode auswählen.</li>
        <li>Request-Header festlegen.</li>
        <li>Den Request-Body angeben (für POST/PUT).</li>
        <li>Die Anfrage absenden.</li>
        <li>Die Antwort validieren — Statuscode, Response-Body/Schema und Header — gegen die erwarteten Ergebnisse.</li>
      </ol>` },
    { h: "Herausforderungen beim API-Testing", body: `
      <ul>
        <li>Auswahl der richtigen Parameterkombinationen zum Testen.</li>
        <li>Aufrufe in der richtigen Reihenfolge ausführen.</li>
        <li>Nur die Ausgabe überprüfen, ohne eine UI zum Anschauen.</li>
        <li>API-Tests in eine GUI-basierte Automatisierungsstrategie integrieren.</li>
      </ul>` },
    { h: "API-Authentifizierung, Autorisierung & über REST hinaus", body: `
      <p><strong>Das Testen von Authentifizierung und Autorisierung</strong> gehört zu den wertvollsten Dingen, die API-Testing leistet, denn eine defekte Auth-Prüfung legt Daten oder Aktionen für Personen offen, die keinen Zugriff haben sollten:</p>
      <ul>
        <li><strong>API-Schlüssel</strong> — das einfachste Schema; testen, dass Anfragen ohne gültigen Schlüssel abgelehnt werden und dass ein widerrufener Schlüssel sofort nicht mehr funktioniert.</li>
        <li><strong>OAuth 2.0</strong> — der Standard für delegierten Zugriff (z. B. „Mit Google anmelden"); testen, wie der Ablauf von Tokens gehandhabt wird, wie Refresh-Token-Abläufe funktionieren und dass Scopes tatsächlich durchgesetzt werden (ein auf „read" beschränktes Token sollte nicht schreiben können).</li>
        <li><strong>JWT (JSON Web Tokens)</strong> — in sich geschlossene Tokens, die Claims tragen; testen der Signaturvalidierung (ein manipuliertes Token muss abgelehnt werden), des Ablaufs (<code>exp</code>-Claim) und dass der Server Claims nicht blind vertraut, ohne die Signatur zu prüfen.</li>
      </ul>
      <p><strong>Autorisierungstests</strong> gehen über „ist dieser Nutzer eingeloggt" hinaus zu „darf dieser spezifische Nutzer diese spezifische Aktion ausführen" — getestet wird mit mehreren Konten unterschiedlicher Rollen/Berechtigungen, um zu bestätigen, dass ein Nutzer nicht auf die Daten eines anderen zugreifen oder sie ändern kann (eine Fehlerkategorie, die ernst genug ist, um in Modul 10 einen eigenen Namen zu bekommen: Broken Access Control).</p>
      <p><strong>Über REST hinaus:</strong> Nicht jede API ist REST, und jeder Stil verändert, wie das Testen aussieht:</p>
      <ul>
        <li><strong>GraphQL</strong> — ein einzelner Endpunkt, bei dem der Client in der Query genau angibt, welche Daten er möchte. Der Testfokus verschiebt sich hin zur Validierung des Schemas, zur Prüfung, dass Queries keine exzessiven/verschachtelten Daten anfordern können (ein für GraphQL spezifisches Denial-of-Service-Risiko), und zum Testen von Mutations (das GraphQL-Äquivalent zu POST/PUT) mit derselben Autorisierungsstrenge wie bei REST-Schreibzugriffen.</li>
        <li><strong>gRPC</strong> — ein binäres, contract-first-Protokoll (mit Protocol Buffers), gebaut für schnelle Service-zu-Service-Kommunikation. Testen erfolgt typischerweise direkt anhand der <code>.proto</code>-Vertragsdefinition, und Werkzeuge wie <code>grpcurl</code> oder BloomRPC übernehmen für gRPC, was Postman/cURL für REST leisten.</li>
      </ul>` },
    { h: "Mehrbenutzer- & Mandantenisolation", body: `
      <p><strong>Authentifizierung</strong> fragt <em>Wer bist du?</em>; <strong>Autorisierung</strong> fragt <em>Darfst du das tun?</em> Decke bei der Authentifizierung Basic Auth, Bearer-Tokens, API-Schlüssel, OAuth 2.0 und JWT mit gültigen, ungültigen, fehlenden, abgelaufenen, fehlerhaften, falschen und widerrufenen Anmeldedaten ab.</p>
      <p>Für die Autorisierung lege <strong>Nutzer A, Nutzer B und einen Admin</strong> an und probiere jeden gegen die Ressourcen der anderen und gegen privilegierte Operationen. Die Kernfrage: Kann ein Nutzer die Objekte eines anderen lesen oder ändern?</p>
      <p>In <strong>mandantenfähigen</strong> Systemen prüfe, dass ein Nutzer aus Mandant A Ressourcen von Mandant B weder lesen, ändern, löschen, durchsuchen noch <em>erschließen</em> kann. Untersuche IDs, Filter, Paginierung, Exporte, Bulk-Endpunkte und indirekte Referenzen — dort verstecken sich Lecks häufig.</p>` },
    { h: "Workflows, Zustand & knifflige Daten", body: `
      <p><strong>CRUD-Zyklus:</strong> <code>CREATE → READ → UPDATE → READ → DELETE → READ</code>. Jedes READ belegt, dass der vorherige Schritt wirklich gewirkt hat. Verkette dann reale Workflows: <em>Registrieren → Einloggen → Token holen → Kontakt erstellen → Abrufen → Aktualisieren → Löschen → Löschung prüfen</em>.</p>
      <p><strong>Idempotenz &amp; Duplikate:</strong> Eine laut Vertrag idempotente Operation (PUT, DELETE, oft PATCH) sollte bei Wiederholung die Ressource im selben beabsichtigten Zustand lassen. Wiederhole auch POSTs: Entstehen doppelte Bestellungen, Kontakte oder Zahlungen?</p>
      <p><strong>Paginierung, Sortierung, Filterung:</strong> erste/mittlere/letzte Seite, jenseits der letzten Seite, Null-/negative Seite, Min-/Max-/riesiges Limit, doppelte oder fehlende Datensätze über Seiten hinweg; auf-/absteigend, ungültige Sortierfelder, mehrere Felder, Groß-/Kleinschreibung; gültige/ungültige/leere Filter, mehrere Filter, Filter kombiniert mit Paginierung.</p>
      <p><strong>Datum &amp; Uhrzeit:</strong> UTC vs. Ortszeit, Zeitzonenumrechnung, Sommerzeitwechsel, Schaltjahre/Schalttage, Mitternacht/Tagesende, vergangene/zukünftige und ungültige Daten, unterstützte Formate. Kläre die genaue Semantik von Werten wie <code>2026-09-23T10:00:00Z</code>.</p>
      <p><strong>Nebenläufigkeit:</strong> Zwei Nutzer ändern gleichzeitig dieselbe Ressource. Prüfe optimistisches Locking (z. B. <code>ETag</code>/<code>If-Match</code> → 409/412), Race Conditions, verlorene Updates, doppelte Operationen und den Endzustand.</p>` },
    { h: "OWASP API Security Top 10 (2023)", body: `
      <p>Nutze die OWASP-Liste als risikobasierte Sicherheits-Checkliste, nicht als Nachgedanken zu Statuscode-Prüfungen:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th>Risiko</th><th>Wie QA es prüft</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Broken Object Level Authorization (BOLA)</td><td>Die Objekt-ID eines anderen Nutzers anfragen</td></tr>
          <tr><td>2</td><td>Broken Authentication</td><td>Fehlende, ungültige, abgelaufene, fehlerhafte, widerrufene Tokens</td></tr>
          <tr><td>3</td><td>Broken Object Property Level Authorization</td><td>Privilegierte Felder setzen: <code>role</code>, <code>ownerId</code>, <code>tenantId</code>, <code>isAdmin</code></td></tr>
          <tr><td>4</td><td>Unrestricted Resource Consumption</td><td>Riesige Payloads/Arrays, extreme Paginierung, hohe Anfrageraten</td></tr>
          <tr><td>5</td><td>Broken Function Level Authorization</td><td>Admin-/privilegierte Endpunkte mit jeder Rolle aufrufen</td></tr>
          <tr><td>6</td><td>Unrestricted Access to Sensitive Business Flows</td><td>Passwort-Resets, Abstimmungen, Gutscheine, Registrierungen, Bestellungen wiederholen</td></tr>
          <tr><td>7</td><td>Server-Side Request Forgery (SSRF)</td><td>Wenn die API URLs abruft, serverseitige Einschränkungen prüfen (nur autorisierte Testumgebung)</td></tr>
          <tr><td>8</td><td>Security Misconfiguration</td><td>Debug-Infos, Stacktraces, unnötige Methoden, Standard-Zugangsdaten, CORS/TLS</td></tr>
          <tr><td>9</td><td>Improper Inventory Management</td><td>Veraltete, undokumentierte, Debug- oder abgekündigte API-Versionen finden</td></tr>
          <tr><td>10</td><td>Unsafe Consumption of APIs</td><td>Fehlerhafte, unvollständige, langsame, übergroße Antworten von Drittanbietern einspeisen</td></tr>
        </tbody>
      </table></div>
      <p>Modul 10 vertieft das Testen der Anwendungssicherheit.</p>` },
    { h: "Werkzeuge, Automatisierung & CI/CD", body: `
      <p><strong>Postman</strong> beherrscht Requests, Collections, Environments, Variablen, Skripte, Assertions, Auth, Request-Verkettung und CI-Läufe. Nutze Variablen wie <code>{{baseUrl}}</code>, <code>{{token}}</code>, <code>{{userId}}</code> statt fest codierter umgebungsspezifischer Werte.</p>
      <pre><code>pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});</code></pre>
      <p><strong>Playwright</strong> (TypeScript) hat eine eingebaute API-Request-Schicht:</p>
      <pre><code>const response = await request.post('/api/users', {
  data: { name: 'John', email: 'john@example.com' }
});
expect(response.status()).toBe(201);</code></pre>
      <p>Halte API-Clients, Auth, Testdaten, Schemas und Assertions wiederverwendbar, statt sie in jeder Spec zu wiederholen:</p>
      <pre><code>tests/
├── api/        auth/ · contacts/ · negative/
├── fixtures/   apiClient.ts · testData.ts
├── helpers/    auth.ts · assertions.ts
└── schemas/</code></pre>
      <p><strong>API + UI zusammen:</strong> Einen Nutzer per API anlegen und den Login in der UI prüfen, oder einen Kontakt in der UI anlegen und per API prüfen. So lässt sich eingrenzen, ob ein Defekt in UI, API, Integration oder Persistenz liegt.</p>
      <p><strong>Performance:</strong> Miss Antwortzeit, Latenz, Durchsatz, Requests/Sekunde, Fehlerrate, CPU, Speicher und DB-Verhalten in Baseline-, Last-, Stress-, Spike- und Soak-Szenarien mit Werkzeugen wie <strong>k6</strong> und <strong>JMeter</strong>.</p>
      <p><strong>CI/CD:</strong> Push → GitHub Actions → Abhängigkeiten installieren → App starten → API-Tests ausführen (<code>npx playwright test tests/api</code>) → UI-Tests ausführen → Berichte → <strong>Quality Gate</strong>. Auf Pull Requests und wichtigen Branches laufen lassen und Berichte sowie Fehler-Artefakte aufbewahren.</p>` },
    { h: "Testfall-Vorlage, Endpunkt-Matrix & Negativ-Checkliste", body: `
      <p><strong>Felder eines API-Testfalls:</strong> ID, Titel, Vorbedingungen, Endpunkt, Methode, Header, Auth, Pfad-/Query-Parameter, Body, Testdaten, Schritte, erwarteter Status, erwartete Header, erwartete Response/Schema, erwarteter DB-Zustand, Priorität, Schweregrad.</p>
      <p><em>Beispiel: TC-API-001: Kontakt mit gültigen Daten erstellen. <code>POST /contacts</code> → erwarte <code>201 Created</code>; prüfe die generierte ID und dann <code>GET /contacts/{id}</code>, um zu bestätigen, dass die Ressource existiert.</em></p>
      <p><strong>Frage bei jedem Endpunkt:</strong> Sind Methode und URL korrekt? Wer darf zugreifen? Welche Header, Parameter und Body-Felder sind erforderlich bzw. gültig? Stimmen Datentypen, Statuscodes, Schema und zurückgegebene Daten? Sind Fehlermeldungen sicher und nützlich? Werden Autorisierungsgrenzen durchgesetzt? Sind Nebenwirkungen korrekt? Was passiert bei Nebenläufigkeit und Last?</p>
      <p><strong>Wichtige Negativ-Checkliste:</strong> fehlendes Pflichtfeld · leerer String · null · falscher Typ · ungültiges Format · zu kurz / zu lang · Grenze −1 / Grenze / +1 · negativ · Null · sehr große Zahl · unbekannte ID · fehlende ID · doppelte Anfrage · ungültiges JSON · leeres JSON · fehlender/falscher <code>Content-Type</code> · fehlende/ungültige Auth · abgelaufenes Token · unzureichende Berechtigungen · falscher Nutzer · nicht unterstützte Methode · Rate Limit · große Payload · unerwartete Parameter · Sonderzeichen · Unicode · injection-artige Eingaben · HTML-/Skript-artige Eingaben.</p>` },
    { h: "QA-Denkweise, Lernpfad & Portfolio", body: `
      <ul>
        <li><strong>Einsteiger:</strong> Liefert die API eine 200?</li>
        <li><strong>Fortgeschritten:</strong> Liefert sie den korrekten Status, Schema, Daten, Header, Berechtigungen und Nebenwirkungen?</li>
        <li><strong>Experte:</strong> Was passiert, wenn zwei Nutzer sie gleichzeitig aufrufen, das Token abläuft, die Payload fehlerhaft ist, die Ressource einem anderen Mandanten gehört, die DB ausfällt, ein Drittanbieter Unsinn liefert oder die Anfrage vielfach wiederholt wird?</li>
      </ul>
      <p>Das Ziel ist <strong>risikobasiertes API-Testing</strong>, nicht bloß das Senden von Anfragen.</p>
      <p><strong>Lernpfad für Junior-QA:</strong></p>
      <ol>
        <li>HTTP/HTTPS, URLs, Methoden, Header, Statuscodes, JSON</li>
        <li>Postman: Collections, Environments, Variablen, Skripte, Assertions</li>
        <li>Positiv/Negativ, Grenzwerte, Äquivalenzklassen, Entscheidungstabellen, Zustandsübergänge, datengetrieben</li>
        <li>Basic Auth, Bearer, JWT, OAuth, API-Schlüssel</li>
        <li>CRUD, Paginierung, Filterung, Sortierung, Datei-Upload, Idempotenz, Nebenläufigkeit, Webhooks, asynchrone APIs</li>
        <li>OpenAPI/Swagger, JSON Schema, Vertragstests, Schema Drift</li>
        <li>OWASP API Top 10, Autorisierung, Rate Limiting, Datenoffenlegung</li>
        <li>Playwright API, TypeScript, Postman-Skripte und CLI</li>
        <li>k6/JMeter: Last, Stress, Spike, Soak</li>
        <li>Git, GitHub Actions, Jenkins, Reporting, Artefakte, Quality Gates</li>
      </ol>
      <p><strong>Blaupause für ein Portfolio-Projekt:</strong> Teststrategie, Testplan, Endpunkt-Inventar, Positiv-/Negativ-/Grenzwerttests, Auth- und Autorisierungstests, CRUD-Tests, Schema-/Vertragstests, Sicherheits-Checkliste, Postman-Collection, Playwright-API-Automatisierung, Testdatenmanagement, CI/CD, HTML-/Allure-Reporting, Defektbeispiele und ein README, das den Ansatz erklärt.</p>
      <p><strong>Ressourcen:</strong> <a href="https://learning.postman.com/docs/tests-and-scripts/tests-and-scripts/" target="_blank" rel="noopener">Postman: Tests &amp; Skripte</a> · <a href="https://api-security.owasp.org/editions/2023/en/0x11-t10/" target="_blank" rel="noopener">OWASP API Security Top 10</a> · <a href="https://spec.openapis.org/oas/latest.html" target="_blank" rel="noopener">OpenAPI-Spezifikation</a> · <a href="https://learning.postman.com/docs/tests-and-scripts/running-collections/running-collections-overview/" target="_blank" rel="noopener">Postman-Collections in CI ausführen</a></p>` }
  ]
},
{
  id: "istqb-ctfl",
  num: 7,
  title: "ISTQB® CTFL v4.0 Zertifizierungspfad",
  summary: "Ein Studienbegleiter-Überblick über den ISTQB-Foundation-Level-Lehrplan — die anbieterneutrale Einstiegszertifizierung im Testen.",
  takeaway: "ISTQB® Foundation Level ist die weltweit anbieterneutrale Einstiegszertifizierung für Softwaretester. Der Lehrplan gliedert Testwissen in 6 Kapitel, wobei jedes Lernziel mit einem „K-Level“ (K1 = erinnern, K2 = verstehen, K3 = anwenden) versehen ist, das anzeigt, wie tief die Prüfung dieses Wissen erwartet.",
  callout: {
    label: "Empfohlene Lektüre",
    body: "Stapp, L., Roman, A., &amp; Pilaeten, M. (2024). <em>ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0.</em> Springer. Dieses Modul ist ein Studienbegleiter-Überblick — für volle Tiefe, Übungen und offizielle Musterprüfungen siehe das Buch oder den offiziellen ISTQB-Lehrplan."
  },
  lessons: [
    { h: "7.0 Wie die Zertifizierung funktioniert", body: `
      <p>Der Foundation Level (CTFL) ist die ISTQB®-Einstiegszertifizierung und die Voraussetzung für die Tracks Advanced Level und Expert Level. Die Prüfung besteht typischerweise aus <strong>40 Multiple-Choice-Fragen</strong>, gewichtet nach Kapitel und K-Level, mit einer festgelegten Bestehensgrenze von etwa <strong>65%</strong>.</p>` },
    { h: "7.1 Grundlagen des Testens", body: `
      <p><span class="k-badge">K2</span> <strong>Was Testen ist und warum es notwendig ist:</strong> Testen unterscheidet sich vom Debuggen, trägt direkt zum Projekterfolg bei und unterstützt die Qualitätssicherung, ist aber nicht dasselbe wie diese.</p>
      <p><strong>Fehler, Defekt, Ausfall, Grundursache:</strong> Ein menschlicher <strong>Fehler</strong> (Irrtum) kann einen <strong>Defekt</strong> (Mangel) in ein Arbeitsergebnis einbringen; wird er ausgeführt, kann ein Defekt einen <strong>Ausfall</strong> (beobachtbares Fehlverhalten) verursachen; der zugrunde liegende Grund, warum der Fehler passierte, ist die <strong>Grundursache</strong> (Root Cause).</p>
      <p><span class="k-badge">K2</span> <strong>Die sieben Testprinzipien:</strong></p>
      <ol>
        <li>Testen zeigt das Vorhandensein, nicht die Abwesenheit von Defekten.</li>
        <li>Erschöpfendes Testen ist unmöglich.</li>
        <li>Frühes Testen spart Zeit und Geld.</li>
        <li>Defekte häufen sich.</li>
        <li>Tests nutzen sich ab — das Wiederholen derselben Tests findet keine neuen Fehler mehr.</li>
        <li>Testen ist kontextabhängig.</li>
        <li>Der Trugschluss der Fehlerfreiheit — ein fehlerfreies Produkt, das die Nutzerbedürfnisse nicht erfüllt, kann trotzdem scheitern.</li>
      </ol>
      <p><strong>Kernaktivitäten des Testens:</strong> Planung, Überwachung &amp; Steuerung, Analyse, Design, Implementierung, Durchführung und Abschluss — sie erzeugen Testware wie Testpläne, Testfälle, Testdaten und Testprotokolle.</p>
      <p>Der <strong>Whole-Team-Ansatz</strong> behandelt Testen als gemeinsame Teamverantwortung, während <strong>Testerunabhängigkeit</strong> weiterhin Wert schafft, indem sie eine Perspektive frei von den Annahmen des Autors einbringt.</p>` },
    { h: "7.2 Testen im gesamten Softwarelebenszyklus", body: `
      <p><span class="k-badge">K2</span> Das gewählte Entwicklungslebenszyklusmodell — sequenziell/Wasserfall, iterativ oder agil — prägt, wie und wann Testen stattfindet. DevOps und Continuous Delivery verschieben Testen früher und häufiger, eine Idee, die oft „Shift-Left“ genannt wird. Retrospektiven dienen als Mechanismus zur Prozessverbesserung über alle Modelle hinweg.</p>
      <p><strong>Teststufen</strong> (Komponente/Unit, Integration, System, Abnahme) beschreiben, <em>wo</em> Testen stattfindet; <strong>Testarten</strong> (funktional, nicht-funktional, White-Box/strukturell, änderungsbezogen) beschreiben, <em>was</em> getestet wird — die beiden sind unabhängige Dimensionen.</p>
      <p><strong>Bestätigungstest (Nachtest)</strong> führt einen zuvor fehlgeschlagenen Test nach einer Korrektur erneut aus, um zu bestätigen, dass der Defekt behoben ist; <strong>Regressionstest</strong> führt bestehende Tests erneut aus, um zu bestätigen, dass eine Änderung zuvor funktionierende Funktionalität nicht kaputtgemacht hat. <strong>Wartungstest</strong> wird durch Modifikation, Migration oder Außerbetriebnahme eines Systems ausgelöst.</p>` },
    { h: "7.3 Statisches Testen", body: `
      <p><span class="k-badge">K2</span> Statisches Testen untersucht Arbeitsergebnisse — Anforderungen, Designs, Code, Testfälle — <strong>ohne sie auszuführen</strong>, und liefert damit frühes, häufiges Feedback, bevor dynamisches Testen überhaupt möglich ist.</p>
      <p>Der <strong>formale Reviewprozess:</strong> Planung → Kick-off → Einzelprüfung → Kommunikation/Analyse der Befunde → Korrektur &amp; Berichterstattung. Typische Reviewer-Rollen: <strong>Autor</strong>, <strong>Moderator/Facilitator</strong>, <strong>Reviewer</strong>, <strong>Protokollant</strong> und <strong>Manager</strong>.</p>
      <p><strong>Vier Review-Arten</strong>, von am wenigsten bis am formellsten: <strong>Informelles Review</strong> &rarr; <strong>Walkthrough</strong> &rarr; <strong>Technisches Review</strong> &rarr; <strong>Inspektion</strong>.</p>
      <p>Reviews sind erfolgreich, wenn sie klare Ziele, die richtigen Teilnehmer und eine psychologisch sichere, schuldfreie Kultur haben.</p>` },
    { h: "7.4 Testanalyse und Testdesign", body: `
      <p><span class="k-badge">K2</span> Drei Familien von Testtechniken:</p>
      <ul>
        <li><strong>Black-Box</strong> (verhaltensbasiert) — keine Kenntnis der internen Struktur. Mit durchgerechneten Beispielen in <em>Modul 2</em> abgedeckt: <span class="k-badge">K3</span> Äquivalenzklassenbildung, Grenzwertanalyse, Entscheidungstabellentest und Zustandsübergangstest.</li>
        <li><strong>White-Box</strong> (strukturbasiert) — nutzt Code-/Architekturwissen. <span class="k-badge">K3</span> <strong>Anweisungstest/-abdeckung</strong> fragt, ob jede ausführbare Anweisung mindestens einmal ausgeführt wurde; <strong>Zweigtest/-abdeckung</strong> fragt, ob jedes Entscheidungsergebnis (wahr und falsch) durchlaufen wurde.</li>
        <li><strong>Erfahrungsbasiert</strong> — nutzt Testerintuition und -historie: <strong>Fehlerraten (Error Guessing)</strong>, <strong>Exploratives Testen</strong> (siehe <em>Module 4 &amp; 5</em>) und <strong>Checklistenbasiertes Testen</strong>.</li>
      </ul>
      <p><strong>Kollaborationsbasierte Ansätze:</strong> gemeinsames Schreiben von User Stories, Definieren von Abnahmekriterien und <strong>akzeptanztestgetriebene Entwicklung (ATDD)</strong>.</p>` },
    { h: "7.5 Steuerung der Testaktivitäten", body: `
      <p><span class="k-badge">K2</span> <strong>Testplanung</strong> definiert Zweck und Inhalt eines Testplans, legt <strong>Eingangskriterien</strong> (Bedingungen zum Start) und <strong>Endekriterien</strong> (Bedingungen zum Abschluss) fest und nutzt Schätz- und Priorisierungstechniken.</p>
      <p>Die <strong>Testpyramide</strong> empfiehlt viele schnelle, niedrigstufige automatisierte Tests und weniger langsame, hochstufige UI-Tests. Die <strong>Testquadranten</strong> ordnen Testarten entlang zweier Achsen ein: geschäftsorientiert vs. technologieorientiert, und teamunterstützend vs. produktkritisierend.</p>
      <p><span class="k-badge">K2</span> <strong>Risikomanagement:</strong> Risiko = Eintrittswahrscheinlichkeit &times; Auswirkung. <strong>Produktrisiken</strong> bedrohen, ob das Arbeitsergebnis die Stakeholder-Bedürfnisse erfüllt; <strong>Projektrisiken</strong> bedrohen die Fähigkeit des Projekts zu liefern (Zeitplan, Ressourcen). Risikobasiertes Testen priorisiert Bereiche mit höherem Risiko.</p>
      <p><strong>Testüberwachung, -steuerung und -abschluss</strong> verfolgen Metriken und kommunizieren den Status über Testberichte. <strong>Konfigurationsmanagement</strong> unterstützt Nachvollziehbarkeit. Ein <strong>Fehlerbericht</strong> enthält typischerweise eine Zusammenfassung, Schritte zur Reproduktion, erwartetes vs. tatsächliches Ergebnis, Schweregrad und Priorität.</p>` },
    { h: "7.6 Testwerkzeuge", body: `
      <p><span class="k-badge">K1</span> Werkzeugkategorien, die Testen unterstützen: Testmanagement, statische Analyse, Testdesign, Testdatenaufbereitung, Ausführung/Automatisierung sowie Performance/Monitoring, unter anderem.</p>
      <p><strong>Vorteile der Testautomatisierung:</strong> Wiederholbarkeit, Geschwindigkeit und objektive Ergebnisse. <strong>Risiken:</strong> unrealistische Erwartungen, laufende Wartungskosten, ein falsches Sicherheitsgefühl und Tool-Lock-in.</p>` },
    { h: "7.7 Lerntipps & häufige Prüfungsfallen", body: `
      <p>Eigenständige Lernhinweise für dieses Modul — nicht aus der offiziellen Prüfung oder den eigenen Übungsfragen des Self-Study Guide entnommen:</p>
      <ul>
        <li><strong>Nach K-Level lernen, nicht nur nach Kapitel.</strong> Ein K1-Begriff braucht nur Wiedererkennung; eine K3-Technik verlangt, sie tatsächlich auf ein Szenario anzuwenden. Die begrenzte Zeit auf K2-/K3-Material verwenden, denn dort liegen die meisten Prüfungsfragen.</li>
        <li><strong>Auf „beste" vs. „eine" Ablenker achten.</strong> Eine häufige Fallenfrage liefert vier technisch wahre Aussagen, aber nur eine ist die <em>beste</em> Antwort für das konkret beschriebene Szenario — das Szenario zweimal lesen, bevor man wählt.</li>
        <li><strong>Ähnlich klingende Begriffe nicht verwechseln.</strong> Fehler/Defekt/Ausfall/Grundursache (7.1), Verifikation/Validierung und die vier Review-Arten (7.3) werden häufig geprüft, gerade weil sie sich unter Zeitdruck leicht verwechseln lassen.</li>
        <li><strong>Die durchgerechneten Beispiele aus Modul 2 üben</strong> (BVA, ECP, Entscheidungstabellen, Zustandsübergang), bis du die Testfälle von Grund auf selbst erstellen kannst, nicht nur ein korrektes Beispiel erkennst — 7.4 baut direkt darauf auf.</li>
        <li><strong>Zeitmanagement:</strong> Bei 40 Fragen in einem festen Zeitfenster sollte eine schwere Frage nicht unverhältnismäßig viel Zeit fressen — markieren, weitermachen und bei Zeit zurückkehren.</li>
        <li><strong>Der Abend davor:</strong> das Glossar überfliegen (die Begriffe aus Modul 7 sind alle im Glossar dieser App), kein neues Material mehr pauken und schlafen — bei erinnerungslastigen Prüfungen zahlt sich ein ausgeruhtes Gedächtnis mehr aus als ein Last-Minute-Lesemarathon.</li>
      </ul>` },
    { h: "7.8 Prüfungsaufbau: Format & Gewichtung der Kapitel", body: `
      <p>CTFL v4.0 erschien 2023 und gilt für Wasserfall, Agile, DevOps und Continuous Delivery. Die Prüfung im Überblick:</p>
      <ul>
        <li><strong>40 Multiple-Choice-Fragen</strong>, je 1 Punkt, in <strong>60 Minuten</strong> (75 Minuten für Nicht-Muttersprachler).</li>
        <li><strong>Bestehensgrenze: 65 %</strong>, also <strong>26 von 40</strong>. Es gibt keine Minuspunkte, beantworte also jede Frage.</li>
        <li>Ohne Hilfsmittel. Keine Voraussetzungen. Das Zertifikat läuft nicht ab.</li>
      </ul>
      <div class="table-wrap"><table>
        <thead><tr><th>Kap.</th><th>Thema</th><th>Fragen</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Grundlagen des Testens</td><td>8</td></tr>
          <tr><td>2</td><td>Testen im Softwareentwicklungslebenszyklus</td><td>6</td></tr>
          <tr><td>3</td><td>Statischer Test</td><td>4</td></tr>
          <tr><td>4</td><td>Testanalyse und -entwurf</td><td><strong>11</strong> (höchste Gewichtung)</td></tr>
          <tr><td>5</td><td>Management der Testaktivitäten</td><td>9</td></tr>
          <tr><td>6</td><td>Testwerkzeuge</td><td>2</td></tr>
        </tbody>
      </table></div>
      <p>Die Kapitel 4 und 5 machen zusammen etwa die Hälfte der Prüfung aus, und dort konzentrieren sich die <strong>K3-Fragen (anwenden)</strong>: Klassen und Grenzwerte ableiten, Entscheidungstabellen füllen, Zustandsübergänge durchgehen, Abdeckung berechnen, nach Risiko priorisieren.</p>
      <p><strong>Lernweg:</strong> Lies den offiziellen Lehrplan und das ISTQB-Glossar von istqb.org; übe K3-Techniken, bis sie sitzen; mache mindestens eine vollständige, zeitlich gemessene Probeprüfung mit 40 Fragen und werte sie kapitelweise aus; wähle eine akkreditierte Schulung oder Selbststudium, beides ist gültig. Achte auf die Neuerungen in v4.0: DevOps/CI-CD-Kontext, kollaborative Ansätze (ATDD, BDD) und mehr Gewicht auf risikobasiertem Testen.</p>
      <p><em>Prüfe die Angaben immer am aktuellen offiziellen Lehrplan. Die Zahlen hier beziehen sich auf v4.0.</em></p>` },
    { h: "7.9 Über Foundation hinaus: die ISTQB-Leiter", body: `
      <p><strong>Agile-Tester-Erweiterung (CTFL-AT)</strong>: agile Test-Denkweise, die Rolle des Testers in Scrum und Kanban, die „Three Amigos“ (Fachlichkeit, Entwicklung und Test besprechen eine Story gemeinsam), Definition of Done und die <strong>agilen Testquadranten</strong> (Crispin/Gregory, nach Marick):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Quadrant</th><th>Fokus</th><th>Beispiele</th></tr></thead>
        <tbody>
          <tr><td>Q1</td><td>Technologieorientiert, unterstützt das Team</td><td>Unit- und Komponententests</td></tr>
          <tr><td>Q2</td><td>Geschäftsorientiert, unterstützt das Team</td><td>Funktionale und Story-Tests, Beispiele</td></tr>
          <tr><td>Q3</td><td>Geschäftsorientiert, kritisiert das Produkt</td><td>Explorativ, Usability, Abnahmetest</td></tr>
          <tr><td>Q4</td><td>Technologieorientiert, kritisiert das Produkt</td><td>Performance, Sicherheit, weitere nicht-funktionale Tests</td></tr>
        </tbody>
      </table></div>
      <p><strong>Advanced Level (CTAL)</strong>, drei Module:</p>
      <ul>
        <li><strong>Test Analyst</strong>: fortgeschrittene Black-Box-Techniken, Usability, Reviews, Fehleranalyse.</li>
        <li><strong>Technical Test Analyst</strong>: tiefere White-Box-Abdeckung einschließlich MC/DC, Entwurf von Sicherheits- und Performance-Tests, Automatisierungsarchitektur.</li>
        <li><strong>Test Manager</strong>: Strategie, Risiko, Schätzung, Metriken, Menschen und Prozessverbesserung.</li>
      </ul>
      <p><strong>Expert Level (CTEL)</strong> behandelt Themen wie Testmanagement und die Verbesserung des Testprozesses. <strong>Spezialisten</strong>-Zweige umfassen Test Automation Engineer, Agile Technical Tester sowie Mobile-, Automotive-, Sicherheits- und KI-Testen.</p>
      <p>Ein häufiger Weg: CTFL → Agile Tester oder Test Automation Engineer → das CTAL-Modul, das zur eigenen Rolle passt.</p>` }
  ]
},
{
  id: "qa-toolbox",
  num: 8,
  title: "QA-Toolbox & Karrierewachstum",
  summary: "Eine praktische Referenz für die arbeitende QA-Fachkraft: reale Werkzeuge nach Kategorie, die Metriken, die in Standups wirklich besprochen werden, ein Interview-Spickzettel und wo man weiterlernen kann.",
  takeaway: "Testtheorie zu kennen verschafft dir Zugang — zu wissen, zu welchem Werkzeug man greift, welche Metrik einen Stakeholder tatsächlich interessiert, und wie man über die eigene Erfahrung spricht, ist das, was einen weiterbringt. Dieses Modul ist eine lebendige Referenz, kein Kurs zum „Abschließen“.",
  lessons: [
    { h: "8.1 Testautomatisierungs-Frameworks", body: `
      <p>Kein einzelnes Framework gewinnt in jedem Kontext — die richtige Wahl hängt von der zu testenden App, der Sprache des Teams und davon ab, wie viel vom Stack abgedeckt werden muss.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Werkzeug</th><th>Am besten für</th><th>Sprache(n)</th><th>Hinweise</th></tr></thead>
        <tbody>
          <tr><td><strong>Selenium WebDriver</strong></td><td>Browserübergreifende Web-UI-Automatisierung</td><td>Java, Python, C#, JS, Ruby</td><td>Der am längsten etablierte Standard; großes Ökosystem, mehr Boilerplate als neuere Werkzeuge.</td></tr>
          <tr><td><strong>Playwright</strong></td><td>Moderne Web-UI-Automatisierung</td><td>JS/TS, Python, Java, C#</td><td>Auto-Waiting, integrierter Test-Runner, starke Netzwerk-Interception — schnell wachsender Standard für neue Projekte.</td></tr>
          <tr><td><strong>Cypress</strong></td><td>Schnelles, entwicklerfreundliches Web-Testing</td><td>JS/TS</td><td>Läuft innerhalb des Browsers; exzellente Debugging-Erfahrung, historisch bedingte Single-Origin-Einschränkungen.</td></tr>
          <tr><td><strong>Appium</strong></td><td>Mobile-App-Automatisierung (iOS/Android)</td><td>Java, Python, JS, etc.</td><td>Erweitert das WebDriver-Protokoll auf native und hybride mobile Apps.</td></tr>
          <tr><td><strong>Robot Framework</strong></td><td>Schlüsselwortgetriebenes Testen für gemischte technische/nicht-technische Teams</td><td>Python-basiert, tabellarische Syntax</td><td>Gute Wahl, wenn Business-Analysten Testfälle mitverfassen.</td></tr>
        </tbody>
      </table></div>` },
    { h: "8.2 Programmiersprachen für Testautomatisierung", body: `
      <p>Welche Sprache man lernt, entscheidet meist das Team und der Stack, dem man beitritt, nicht umgekehrt — aber hier ist, wie die gängigen Optionen in der Praxis tatsächlich abschneiden.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Sprache</th><th>Wo sie in der QA stark ist</th><th>Hinweise</th></tr></thead>
        <tbody>
          <tr><td><strong>Java</strong></td><td>Enterprise-UI-Automatisierung (Selenium), API-Testing (REST Assured)</td><td>Die häufigste Sprache in großen, etablierten Automatisierungsteams; umständlich, aber äußerst gut ausgestattet mit ausgereiften Frameworks (JUnit, TestNG).</td></tr>
          <tr><td><strong>Python</strong></td><td>API-Testing, allgemeines Scripting, datenlastiges Test-Tooling, Robot Framework, Locust</td><td>Lesbar, schnell zu schreiben, riesiges Bibliotheksökosystem (pytest, requests) — oft der einfachste Einstieg für Tester ohne Entwicklerhintergrund.</td></tr>
          <tr><td><strong>JavaScript / TypeScript</strong></td><td>Moderne Web-UI-Automatisierung (Playwright, Cypress), k6-Performance-Skripte</td><td>Natürliche Wahl, wenn die getestete App selbst eine JS/TS-Web-App ist — Tester können die Codebasis der App selbst lesen und Tooling mit Entwicklern teilen.</td></tr>
          <tr><td><strong>C#</strong></td><td>UI- und API-Automatisierung im .NET-Stack (Selenium, Playwright, SpecFlow)</td><td>Die Standardwahl bei Teams, die mit .NET bauen; starkes Tooling in Visual Studio.</td></tr>
          <tr><td><strong>SQL</strong></td><td>Keine Automatisierungssprache, aber überall unverzichtbar</td><td>Ständig benötigt für Datenvalidierung, Testdaten-Einrichtung und die Überprüfung, was nach einem Test tatsächlich in der Datenbank gelandet ist.</td></tr>
          <tr><td><strong>Bash / Shell-Scripting</strong></td><td>CI/CD-Klebstoff, Umgebungseinrichtung, schnelle Log-/Datei-Inspektion</td><td>Wird nicht zum Schreiben von Testlogik verwendet, taucht aber in fast jeder Pipeline auf, mit der ein Tester zu tun hat.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Praktischer Rat:</strong> die Sprache an die zu testende Anwendung und den bestehenden Stack des Teams anpassen — Automatisierung, die in einer Sprache geschrieben ist, die sonst niemand im Team beherrscht, wird innerhalb eines Jahres zu einer verwaisten, ungepflegten Suite. Ohne Einschränkung sind Python und JavaScript/TypeScript aktuell die schnellsten Wege von null zu einer funktionierenden Automatisierungssuite.</p>` },
    { h: "8.3 API- & Performance-Testing-Werkzeuge", body: `
      <p><strong>API-Testing:</strong></p>
      <ul>
        <li><strong>Postman</strong> — der häufigste Ausgangspunkt für manuelle und halbautomatisierte API-Erkundung, Collections und umgebungsbasiertes Testen.</li>
        <li><strong>REST Assured</strong> — eine Java-DSL zum Schreiben von API-Tests als Code, fügt sich natürlich in JVM-Testsuiten und CI-Pipelines ein.</li>
        <li><strong>SoapUI</strong> — ausgerichtet auf SOAP und Legacy-Enterprise-Webdienste neben REST.</li>
        <li><strong>cURL / HTTPie</strong> — leichtgewichtige Kommandozeilen-Clients, nützlich für schnelle Checks und reproduzierbare Fehlerberichte.</li>
      </ul>
      <p><strong>Performance- & Lasttests:</strong></p>
      <ul>
        <li><strong>JMeter</strong> — ausgereift, GUI-gesteuert, riesige Protokollunterstützung; kann bei hohen Lastvolumen ressourcenintensiv werden.</li>
        <li><strong>k6</strong> — skriptet Lasttests in JavaScript, CLI-first, funktioniert gut mit CI/CD und Cloud-Ausführung.</li>
        <li><strong>Gatling</strong> — Scala-basiert, bekannt für detaillierte Berichte und effiziente Ressourcennutzung bei hoher Parallelität.</li>
        <li><strong>Locust</strong> — Python-basiert, Nutzerverhalten wird als Code definiert, skaliert über Worker-Prozesse hinweg.</li>
      </ul>` },
    { h: "8.4 Fehlerverfolgung, CI/CD & Kollaborationswerkzeuge", body: `
      <p><strong>Defekt- und Testmanagement:</strong> Jira (mit Xray oder Zephyr für Testfallmanagement), Azure DevOps, TestRail, qTest — verwendet, um Defekte durch ihren Lebenszyklus zu verfolgen und Testfälle mit Anforderungen und Builds zu verknüpfen.</p>
      <p><strong>CI/CD (wo automatisierte Tests tatsächlich laufen):</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI — die Aufgabe der QA besteht hier meist darin, Testsuiten in Pipeline-Stufen einzubinden, Merges auf Bestehen/Nichtbestehen abhängig zu machen und Durchläufe schnell genug zu halten, dass sie nicht übersprungen werden.</p>
      <p><strong>Versionskontrolle & Review:</strong> Git-basierte Workflows (GitHub/GitLab/Bitbucket) — Tester überprüfen zunehmend Pull Requests, nicht nur nachträgliche Builds, als Teil der in Modul 7 behandelten Shift-Left-Bewegung.</p>` },
    { h: "8.5 KI im Softwaretesten", body: `
      <p>KI hat sich in den letzten Jahren von einer Spielerei zu einem normalen Teil der QA-Toolbox entwickelt — sowohl als etwas, das Tester nutzen, als auch als eine neue Art von Sache, die Tester testen müssen.</p>
      <p><strong>Wo KI als Testwerkzeug auftaucht:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Kategorie</th><th>Was sie tut</th><th>Beispiele</th></tr></thead>
        <tbody>
          <tr><td><strong>Selbstheilende Locator</strong></td><td>Passt UI-Element-Selektoren automatisch an, wenn sich das DOM ändert, statt dass ein Test bei jeder Markup-Änderung kaputtgeht.</td><td>Testim, Healenium, einige Playwright-/Selenium-Plugins.</td></tr>
          <tr><td><strong>Visuelles KI-Testing</strong></td><td>Vergleicht Screenshots mittels wahrnehmungsbasiertem Diffing statt pixelgenauem Abgleich, sodass echte visuelle Regressionen erkannt, aber Rendering-Rauschen ignoriert wird.</td><td>Applitools Eyes, Percy.</td></tr>
          <tr><td><strong>KI-unterstützte Testgenerierung</strong></td><td>Entwirft Testfälle oder Automatisierungsskripte aus Anforderungen, User Stories oder bestehender App-Erkundung.</td><td>GitHub Copilot, Claude, ChatGPT sowie zweckgebundene Werkzeuge wie Functionize und mabl.</td></tr>
          <tr><td><strong>Vorausschauende Testauswahl</strong></td><td>Nutzt historische Fehlerdaten, um nur die Teilmenge der Tests auszuführen, die am wahrscheinlichsten eine Regression für eine gegebene Änderung erkennt, und verkürzt so die CI-Zeit.</td><td>Verbreitet in großen CI-Plattformen; seltener in kleinen Teams.</td></tr>
          <tr><td><strong>KI-unterstützte Fehler-Triage</strong></td><td>Gruppiert ähnliche Fehlerberichte, schlägt Schweregrad/Priorität vor oder markiert wahrscheinliche Duplikate.</td><td>Zunehmend in Jira und ähnliche Fehler-Tracker integriert.</td></tr>
        </tbody>
      </table></div>
      <p><strong>KI-generierte Tests gut nutzen:</strong> KI-Ausgaben als ersten Entwurf behandeln, nicht als fertigen Test — ein generierter Test braucht weiterhin einen Menschen, der bestätigt, dass er das Richtige prüft, nicht nur, dass er läuft und besteht. KI ist gut darin, schnell plausibel aussehenden Testcode zu erzeugen; sie ist nicht zuverlässig gut darin zu wissen, welches Verhalten dem Geschäft tatsächlich wichtig ist — genau die Urteilsfähigkeit, für die Testen existiert.</p>
      <p><strong>Das Testen von KI-Funktionen selbst</strong> ist inzwischen eine eigene aufkommende QA-Fähigkeit — wenn das zu testende Produkt eine LLM-gestützte Funktion enthält (ein Chatbot, ein Suchassistent, ein Zusammenfasser), funktionieren traditionelle exakte Abgleichsassertions nicht mehr, weil die Ausgaben nicht-deterministisch sind. Das erfordert andere Techniken: die Bewertung der Ausgabe anhand einer Rubrik statt eines exakten Strings, die Prüfung auf Halluzination (selbstsicher formulierte, aber falsche Information), das Testen von Prompt-Injection und Jailbreak-Resistenz sowie die Überprüfung, dass das System bei mehrdeutigen oder feindlichen Eingaben sicher degradiert, statt etwas Schädliches oder Unsinniges zu erzeugen.</p>
      <p><strong>Risiken, die einem Team gemeldet werden sollten:</strong> proprietären Code oder Kundendaten in ein KI-Drittanbieterwerkzeug einzuspeisen, ohne dessen Datenverarbeitungsrichtlinie zu prüfen; einem grünen Häkchen bei einem KI-generierten Test zu sehr zu vertrauen, das den echten Fehlerpfad nie tatsächlich durchlaufen hat; und dass KI-erstellte Automatisierung ebenso unwartbar werden kann wie von Menschen erstellte, wenn niemand versteht, was sie tut.</p>` },
    { h: "8.6 QA-Metriken & KPIs, die zählen", body: `
      <p>Metriken sind nur nützlich, wenn sie mit einer Entscheidung verknüpft sind. Dies sind die, die in echten Standups und Retros am häufigsten auftauchen:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Metrik</th><th>Was sie dir sagt</th></tr></thead>
        <tbody>
          <tr><td><strong>Fehlerdichte (Defect Density)</strong></td><td>Gefundene Fehler pro Größeneinheit (z. B. pro 1.000 Codezeilen oder pro Feature) — markiert ungewöhnlich riskante Module.</td></tr>
          <tr><td><strong>Escape Rate / Entkommene Fehler</strong></td><td>In der Produktion gefundene Fehler vs. vor der Veröffentlichung abgefangene — das schärfste Signal dafür, ob die Teststrategie tatsächlich funktioniert.</td></tr>
          <tr><td><strong>Testabdeckung</strong></td><td>Wie viel des Codes oder der Anforderungen von Tests durchlaufen wird. Hohe Abdeckung allein garantiert keine Qualität — sie sagt nichts über die Stärke der Assertions aus.</td></tr>
          <tr><td><strong>Flakiness-Rate</strong></td><td>Anteil automatisierter Tests, die zeitweise ohne Codeänderung fehlschlagen — eine steigende Rate untergräbt das Vertrauen in die gesamte Suite schneller als fast alles andere.</td></tr>
          <tr><td><strong>MTTD / MTTR</strong></td><td>Mittlere Zeit bis zur Erkennung / Mittlere Zeit bis zur Behebung eines Fehlers — wie schnell Probleme gefunden und behoben werden, sobald sie existieren.</td></tr>
          <tr><td><strong>Lead Time for Changes</strong> &amp; <strong>Deployment Frequency</strong></td><td>Zwei der vier DORA-Metriken; die QA-Zykluszeit ist oft der größte Hebel für die Lead Time.</td></tr>
          <tr><td><strong>Trend der Bestehens-/Fehlerquote</strong></td><td>Über Builds hinweg verfolgt, nicht als Einzelzahl — ein langsamer Abwärtstrend der Bestehensquote sagt ein Release-Risiko oft voraus, bevor es jemand laut ausspricht.</td></tr>
        </tbody>
      </table></div>
      <p>Eine gesunde Metrikkultur behandelt diese als Gesprächsanstöße für Untersuchungen, nicht als Punktzahlen zum Optimieren — eine einzelne Metrik isoliert zu optimieren (z. B. das Jagen von 100% Abdeckung) erzeugt zuverlässig schlechte Anreize.</p>` },
    { h: "8.7 Interviewvorbereitung — Kurzreferenz-Spickzettel", body: `
      <p>Häufige Fragen, beantwortet so, wie es ein starker Kandidat in ein oder zwei Sätzen tun würde:</p>
      <ul>
        <li><strong>„Führ mich durch deinen Testprozess für ein neues Feature.“</strong> Anforderungen/Abnahmekriterien prüfen &rarr; Risikobereiche identifizieren &rarr; Testfälle entwerfen (Black-Box-Techniken mit explorativen Charters mischen) &rarr; ausführen &rarr; Fehler mit klaren Reproduktionsschritten protokollieren &rarr; Korrekturen nachtesten &rarr; Regression durchführen.</li>
        <li><strong>„Wie priorisierst du, was mit begrenzter Zeit getestet wird?“</strong> Risikobasierte Priorisierung — Wahrscheinlichkeit mal Auswirkung abwägen, sich auf stark frequentierte Pfade und kürzliche Änderungen konzentrieren, Pareto-/Fehlerhäufungs-Intuition nutzen.</li>
        <li><strong>„Beschreib einen Fehler, den du gefunden hast und den andere übersehen haben.“</strong> Ein echtes Beispiel bereithalten mit: was dich dort hinführte, die Reproduktionsschritte, die Auswirkung und wie er letztlich behoben wurde — Interviewer prüfen auf Konkretheit, nicht auf Dramatik.</li>
        <li><strong>„Manuell vs. automatisiert — wie entscheidest du?“</strong> Stabile, sich wiederholende, hochwertige Regressionspfade automatisieren; exploratives/UX-/mehrdeutige-Anforderungs-Arbeit manuell halten (siehe Module 1 &amp; 5).</li>
        <li><strong>„Was macht einen guten Fehlerbericht aus?“</strong> Eine klare Zusammenfassung, exakte Reproduktionsschritte, erwartetes vs. tatsächliches Ergebnis, Umgebungsdetails, Schweregrad/Priorität und unterstützende Nachweise (Logs, Screenshots).</li>
        <li><strong>„Wie gehst du mit Meinungsverschiedenheiten mit einem Entwickler darüber um, ob etwas ein Fehler ist?“</strong> Auf die Anforderung/Abnahmekriterien oder Spezifikation (die Testbasis) zurückgreifen; wenn es wirklich mehrdeutig ist, für eine Produktentscheidung eskalieren, statt aus Meinung zu argumentieren.</li>
        <li><strong>„Was ist der Unterschied zwischen Verifikation und Validierung?“</strong> Verifikation fragt „bauen wir das Produkt richtig?“ (entspricht der Spezifikation); Validierung fragt „bauen wir das richtige Produkt?“ (erfüllt das tatsächliche Nutzerbedürfnis).</li>
        <li><strong>„Wie würdest du ein Feature testen, das von einem LLM angetrieben wird?“</strong> Exakte Abgleichsassertions gegen rubrikbasierte Bewertung der Ausgabequalität eintauschen; gezielt auf Halluzination testen, Verhalten bei mehrdeutiger/feindlicher Eingabe prüfen und verifizieren, dass das System sicher versagt, statt etwas Schädliches oder Unsinniges zu erzeugen.</li>
      </ul>` },
    { h: "8.8 Karriereressourcen — Zertifizierungen, Communities & Lektüre", body: `
      <p><strong>Zertifizierungen, die man kennen sollte</strong> (über das in Modul 7 behandelte ISTQB CTFL hinaus):</p>
      <ul>
        <li><strong>ISTQB Advanced Level</strong> (Test Analyst, Test Manager, Technical Test Analyst) — der natürliche nächste Schritt nach dem Foundation Level.</li>
        <li><strong>ISTQB Agile Tester</strong> — Erweiterungszertifizierung mit Fokus auf Testen innerhalb von Agile-/Scrum-Teams.</li>
        <li><strong>Certified Software Tester (CSTE)</strong> — angeboten von QAI, eine Alternative zum ISTQB-Track mit ähnlicher Breite.</li>
        <li>Werkzeugspezifische Nachweise (z. B. von Anbietern ausgestellte Selenium-/Playwright-/Postman-Zertifikate) — nützlich, um praktische Tiefe neben einer grundlegenden Zertifizierung zu demonstrieren.</li>
      </ul>
      <p><strong>Communities, denen man folgen sollte:</strong> Ministry of Testing (Kurse, Artikel und eine große Praktiker-Community), die Communities r/QualityAssurance und r/softwaretesting, lokale/regionale Meetup-Gruppen sowie Konferenzvorträge von Quellen wie TestBash und STAREAST (viele werden im Nachhinein kostenlos veröffentlicht).</p>
      <p><strong>Bücher, die über einen Zertifizierungslehrplan hinaus lesenswert sind:</strong> <em>Lessons Learned in Software Testing</em> (Kaner, Bach, Pettichord) für kontextgetriebenes Denken; <em>Explore It!</em> (Elisabeth Hendrickson) für ein praktisches Playbook zum explorativen Testen; <em>Agile Testing</em> und <em>More Agile Testing</em> (Crispin &amp; Gregory) für Testen innerhalb agiler Teams.</p>
      <p>Die einzige Gewohnheit mit dem größten Hebel, um scharf zu bleiben: ein laufendes persönliches Logbuch interessanter gefundener Fehler und wie man sie gefunden hat zu führen — es wird mit der Zeit sowohl zu einer Interviewvorbereitungsressource als auch zu einem Mustererkennungswerkzeug.</p>` },
    { h: "8.9 Accessibility-Testing-Werkzeuge & Praktiken", body: `
      <p>Accessibility-Testing verifiziert, dass ein Produkt von Menschen mit Behinderungen genutzt werden kann — visuell, auditiv, motorisch und kognitiv — und in den meisten regulierten Märkten ist es zudem eine gesetzliche Pflicht, nicht nur ein „nice-to-have".</p>
      <p><strong>WCAG (Web Content Accessibility Guidelines)</strong> ist die Standardreferenz, organisiert um vier Prinzipien — Inhalte müssen <strong>wahrnehmbar, bedienbar, verständlich und robust</strong> sein (oft mit POUR abgekürzt) — mit drei Konformitätsstufen (A, AA, AAA); die meisten Organisationen zielen auf <strong>AA</strong>.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Werkzeug</th><th>Was es prüft</th></tr></thead>
        <tbody>
          <tr><td><strong>axe DevTools</strong></td><td>Automatisierte WCAG-Regelprüfung als Browser-Erweiterung oder CI-integrierte Bibliothek; findet fehlenden Alt-Text, schlechten Farbkontrast, fehlende Formularbeschriftungen usw.</td></tr>
          <tr><td><strong>Lighthouse</strong></td><td>In die Chrome-DevTools integriert; liefert einen Accessibility-Score neben Performance/SEO, gut für eine schnelle Baseline-Prüfung.</td></tr>
          <tr><td><strong>Screenreader</strong> (NVDA, JAWS, VoiceOver)</td><td>Manuelles Testwerkzeug — durch die App allein mit einem Screenreader zu navigieren, deckt Probleme auf, die automatisierte Scanner komplett übersehen, etwa eine unlogische Lesereihenfolge oder unbeschriftete interaktive Elemente.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Automatisierte Scanner finden etwa 30–40% der Accessibility-Probleme</strong> — sie sind hervorragend bei objektiven Prüfungen (Kontrastverhältnisse, fehlende Attribute), können aber nicht beurteilen, ob Alt-Text tatsächlich aussagekräftig ist oder ob ein Nutzer, der nur die Tastatur verwendet, einen kompletten Workflow ohne Maus abschließen kann. Ein echter Accessibility-Testdurchlauf umfasst immer manuelle reine Tastaturnavigation und mindestens stichprobenartige Prüfung mit einem Screenreader.</p>` },
    { h: "8.10 Kompetenzleiter: Junior → Mid → Senior → Lead", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Stufe</th><th>Wie sie aussieht</th><th>Typisches Zertifizierungsziel</th></tr></thead>
        <tbody>
          <tr><td><strong>Junior</strong> (0–2 Jahre)</td><td>Führt klar definierte Testfälle aus; schreibt klare, reproduzierbare Bug-Reports; lernt ÄK/GWA; folgt dem Testkonzept; führt vorhandene Automatisierung aus.</td><td>ISTQB CTFL im ersten Jahr</td></tr>
          <tr><td><strong>Mid</strong> (2–5 Jahre)</td><td>Entwirft Testfälle selbstständig und wählt Techniken nach Risiko; erkennt Lücken in Anforderungen; verantwortet Features von Anfang bis Ende; baut und pflegt Automatisierung, debuggt flaky Tests, bindet CI an; wirkt an Testkonzepten mit; betreut Juniors informell.</td><td>CTFL + Agile Tester oder Test Automation Engineer</td></tr>
          <tr><td><strong>Senior</strong> (5+ Jahre)</td><td>Definiert die Teststrategie; verantwortet Risikoanalyse und Endekriterien und beeinflusst Release-Entscheidungen; entwirft Automatisierungs-Frameworks und CI/CD-Testpipelines; betreut formal; geht in mindestens einem Fachgebiet in die Tiefe (Performance, Sicherheit, Mobile).</td><td>Das zur Rolle passende CTAL-Modul</td></tr>
          <tr><td><strong>Lead / Head of QA</strong></td><td>Setzt organisationsweite Strategie, Standards und Qualitätskultur; entwickelt andere Seniors; vermittelt den Qualitätsstand an die Führung.</td><td>Vollständiges CTAL, Expert Level in einem Fachgebiet</td></tr>
        </tbody>
      </table></div>
      <p>Die Jahre sind nur ein grober Anhaltspunkt. Beförderung folgt gezeigtem Verhalten, nicht abgesessener Zeit.</p>` },
    { h: "8.11 Entwicklungsplan, Karrierewege & Metriken, die man meiden sollte", body: `
      <p><strong>Ein persönlicher Entwicklungsplan:</strong></p>
      <ol>
        <li><strong>Aktuelle Stufe</strong> je Kompetenz (Testentwurf, Automatisierung, Prozess und Strategie, Fehlerkommunikation, Führung), mit Belegen.</li>
        <li><strong>Zielstufe</strong> und Zeitrahmen.</li>
        <li><strong>Lücken</strong>: die konkreten Verhaltensweisen, die zu entwickeln sind.</li>
        <li><strong>Maßnahmen</strong>: Stretch-Projekte, Zertifizierung, Mentoring, Lektüre (z. B. <em>Lessons Learned in Software Testing</em>, <em>Explore It!</em>, <em>Continuous Delivery</em>).</li>
        <li><strong>Checkpoints</strong>: eine vierteljährliche Selbsteinschätzung anhand der Leiter.</li>
      </ol>
      <p><strong>Karrierewege:</strong></p>
      <ul>
        <li><strong>Fachkarriere:</strong> manuelle QA → Automatisierungsingenieur (SDET) → Senior SDET → Principal QA / QA-Architekt.</li>
        <li><strong>Führungskarriere:</strong> QA → Teamlead → QA-Manager → Head of Quality.</li>
        <li><strong>Spezialisierung:</strong> Performance-Engineering, Sicherheit/AppSec, Mobile, Barrierefreiheit, KI/ML-Testen.</li>
      </ul>
      <p><strong>Gewohnheiten mit großer Hebelwirkung:</strong> Code und Logs lesen lernen; SQL und HTTP beherrschen; üben, Qualitätsrisiken Nicht-Testern zu erklären; zu Open-Source-Testwerkzeugen beitragen; über Testen schreiben, um sichtbar zu werden.</p>
      <p><strong>Metriken als Ergänzung zu 8.6:</strong> <em>Fehlerdurchschlupf</em> (Defect Leakage: nach dem Release vs. davor gefundene Fehler), <em>Ablehnungsquote</em> (als ungültig abgelehnte Bug-Reports), <em>MTTR</em> (mittlere Zeit bis zur Behebung) und <em>Automatisierungs-ROI</em> (Läufe × eingesparte Zeit − Wartungskosten).</p>
      <p><strong>Anti-Metriken, die man meiden sollte:</strong> Zeilen Testcode, reine Anzahl der Tests, Bestehensquote allein, Abdeckungsprozent als einziges Endekriterium und alles, was Tester für gefundene Bugs bestraft.</p>` }
  ]
},
{
  id: "test-architecture",
  num: 9,
  title: "QA & Test-Architektur",
  summary: "Die Designentscheidungen hinter einer skalierbaren QA-Praxis: wie Automatisierungs-Frameworks, Testumgebungen, CI/CD-Pipelines und das Testen verteilter Systeme tatsächlich architektiert werden.",
  takeaway: "Gutes Testen im großen Maßstab bedeutet nicht nur, Techniken zu kennen — es ist architektonisch: wie ein Framework strukturiert ist, damit 200 Tests nicht zu 200 Stellen werden, an denen derselbe kaputte Locator repariert werden muss, wie Umgebungen und Daten verwaltet werden, damit Tests reproduzierbar sind, wie eine Pipeline gestaffelt ist, damit Feedback schnell ankommt, und wie sich Testen anpasst, sobald ein System nicht mehr eine einzige deploybare Einheit ist.",
  lessons: [
    { h: "9.1 Testautomatisierungs-Framework-Architektur", body: `
      <p>Wie eine Automatisierungssuite strukturiert ist, entscheidet darüber, ob sie bei 50 Tests wartbar bleibt oder bei 500 unter ihrem eigenen Gewicht zusammenbricht. Zwei Muster dominieren:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Muster</th><th>Wie es funktioniert</th><th>Trade-off</th></tr></thead>
        <tbody>
          <tr><td><strong>Page Object Model (POM)</strong></td><td>Jede UI-Seite/Komponente erhält eine Klasse, die ihre Locators und die auf ihr verfügbaren Aktionen kapselt; Tests rufen Methoden auf Page-Objekten auf, statt Locators direkt anzufassen.</td><td>Einfach und weithin verstanden, kann aber bei großen Apps mit vielen Page-Objekten und gemeinsam genutzten Komponenten unhandlich werden.</td></tr>
          <tr><td><strong>Screenplay Pattern</strong></td><td>Modelliert den Test als einen <strong>Actor</strong>, der <strong>Abilities</strong> besitzt (z. B. im Web zu browsen), <strong>Tasks</strong> ausführt (zusammengesetzt aus kleineren Interaktionen) und <strong>Questions</strong> stellt (Assertions über den Zustand) — Komposition statt Vererbung.</td><td>Skalierbarer und wiederverwendbarer für große, komplexe Suiten; steilere Lernkurve und mehr Vorab-Design als POM.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Geschichtete („hybride") Architektur</strong> trennt eine Suite unabhängig vom verwendeten UI-Muster in unterschiedliche Schichten: eine <strong>Testschicht</strong> (lesbare Testfälle, das „Was"), eine <strong>Logik-/Aktionsschicht</strong> (Page-Objekte oder Screenplay-Tasks, das „Wie") und eine <strong>Datenschicht</strong> (Testdaten, Fixtures, Konfiguration) — unabhängig gehalten, sodass eine Locator-Änderung nicht in die Testlogik durchschlägt und die Testlogik nicht in die Tests selbst.</p>
      <p><strong>Datengetriebenes vs. schlüsselwortgetriebenes Design:</strong> Datengetriebenes Testen führt dieselbe Testlogik gegen viele Eingabe-/Erwartungswert-Paare aus einer externen Quelle (CSV, JSON, eine Tabelle) aus; schlüsselwortgetriebenes Testen geht weiter und drückt ganze Testschritte als Schlüsselwörter (z. B. „Login", „AddToCart") in einer Tabelle aus, sodass Nicht-Programmierer neue Tests aus vorhandenen Bausteinen zusammensetzen können (Robot Framework, behandelt in Modul 8, basiert auf dieser Idee).</p>` },
    { h: "9.2 Test-Environment-Architektur & Testdatenmanagement", body: `
      <p><strong>Die Umgebungs-Pipeline:</strong> Die meisten Organisationen befördern einen Build durch eine Abfolge von Umgebungen, jede mit einem anderen Zweck:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Umgebung</th><th>Zweck</th></tr></thead>
        <tbody>
          <tr><td><strong>Dev</strong></td><td>Entwickler integrieren und prüfen ihre eigenen Änderungen auf Plausibilität; von Natur aus instabil.</td></tr>
          <tr><td><strong>QA / Test</strong></td><td>Dediziert für strukturierte Testdurchführung — manuell und automatisiert — gegen einen relativ stabilen Build.</td></tr>
          <tr><td><strong>Staging</strong></td><td>Spiegelt die Produktionskonfiguration so genau wie möglich; die letzte Prüfung vor der Freigabe, oft für den finalen Abnahmeentscheid und Performance-Testing genutzt.</td></tr>
          <tr><td><strong>Produktion</strong></td><td>Live-Traffic. Shift-Right-Praktiken (siehe 9.3) erweitern das Testen bewusst und sicher auf diese Umgebung.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Ephemere Testumgebungen</strong> — bei Bedarf pro Pull Request oder Testlauf hochgefahren und danach wieder abgebaut — vermeiden das klassische Problem einer einzigen geteilten QA-Umgebung, in der die halbfertige Änderung eines Teams das Testen aller anderen blockiert. Containerisierung (Docker) und Orchestrierung (Kubernetes) machen dies praktikabel: Eine vollständige Umgebungsdefinition wird zu einem reproduzierbaren Artefakt statt zu einer handkonfigurierten Maschine, die jemand betreuen muss.</p>
      <p><strong>Service-Virtualisierung</strong> tritt anstelle einer echten Abhängigkeit (eine Drittanbieter-API, ein noch nicht gebauter nachgelagerter Dienst, ein System, das teuer oder riskant in einem Test aufzurufen ist) mit einer simulierten Version, die realistische, vorgefertigte oder regelbasierte Antworten liefert — Werkzeuge wie WireMock und Mountebank leisten das. Das macht zuverlässige, schnelle Tests für ein System mit vielen externen Abhängigkeiten erst möglich.</p>
      <p><strong>Testdatenmanagement:</strong> Synthetische Datengenerierung (realistisch aussehende Daten erzeugen statt echte Datensätze zu verwenden), Datenmaskierung/Anonymisierung, wenn echte Produktionsdaten verwendet werden müssen (zum Schutz personenbezogener Daten), und selbstreinigende Tests (jeder Test erstellt und entfernt seine eigenen Daten, statt von gemeinsam genutzten Fixtures abzuhängen) sind die drei gängigsten Strategien, um Testdaten zuverlässig und sicher zu halten.</p>` },
    { h: "9.3 CI/CD- & Pipeline-Architektur für QA", body: `
      <p>Eine typische Pipeline staffelt Tests von schnell/günstig zu langsam/teuer, sodass ein defekter Build schnell fehlschlägt, statt eine Stunde zu verbrennen, bevor es jemand merkt:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Stufe</th><th>Was läuft</th><th>Typische Dauer</th></tr></thead>
        <tbody>
          <tr><td>1. Build</td><td>Kompilieren, Linting, statische Analyse</td><td>Sekunden bis wenige Minuten</td></tr>
          <tr><td>2. Unit-Tests</td><td>Schnell, isoliert, keine externen Abhängigkeiten</td><td>Sekunden bis Minuten</td></tr>
          <tr><td>3. Integrations-/API-Tests</td><td>Echte oder virtualisierte Service-Abhängigkeiten</td><td>Minuten</td></tr>
          <tr><td>4. UI-/E2E-Tests</td><td>Full-Stack-Browser- oder App-Tests (oft auf eine Teilmenge kritischer Pfade beschränkt, nicht alles)</td><td>Minuten bis zig Minuten</td></tr>
          <tr><td>5. Performance-/Sicherheitsscans</td><td>Lasttests, SAST-/DAST-Scans — oft seltener als bei jedem Commit ausgeführt</td><td>Minuten bis länger</td></tr>
          <tr><td>6. Deploy</td><td>Beförderung nach Staging/Produktion, oft durch das Bestehen aller vorherigen Stufen abgesichert</td><td>Minuten</td></tr>
        </tbody>
      </table></div>
      <p><strong>Testparallelisierung und Sharding</strong> — das Aufteilen einer Testsuite auf mehrere Worker/Maschinen, sodass sie gleichzeitig statt nacheinander läuft — ist meist der wirksamste einzelne Hebel, um eine wachsende Suite so schnell zu halten, dass niemand anfängt, sie zu überspringen.</p>
      <p><strong>Quality Gates</strong> sind automatisierte Prüfungen, die einen Merge oder ein Deployment blockieren, wenn sie nicht erfüllt sind: eine Mindestbestehensquote, ein Abdeckungsschwellenwert, null kritische Sicherheitsfunde oder ein Performance-Budget. Das Gate sollte streng genug sein, um echte Regressionen zu erkennen, aber nicht so streng (oder so flaky), dass Leute anfangen, es routinemäßig zu übersteuern — eine Übersteuerung, die zur Routine wird, ist ein Zeichen dafür, dass das Gate selbst repariert werden muss.</p>
      <p><strong>Shift-Left vs. Shift-Right:</strong> Shift-Left (behandelt in Modul 7) verschiebt das Testen früher — in Design und Code-Review. <strong>Shift-Right</strong> ist die komplementäre Idee: das bewusste Erweitern des Testens auf die Produktion mittels Canary-Releases (das schrittweise Ausrollen einer Änderung zunächst an einen kleinen Prozentsatz des Traffics), Feature Flags (Code dunkel ausliefern und schrittweise aktivieren) und synthetischem Monitoring (skriptierte Prüfungen, die die Produktion fortlaufend wie ein echter Nutzer abtasten). Ausgereifte QA-Praktiken nutzen beide Enden, nicht nur eines.</p>` },
    { h: "9.4 Testen verteilter Systeme & Microservices", body: `
      <p>Sobald ein System in viele unabhängig deploybare Dienste aufgeteilt ist, hört traditionelles Full-Stack-End-to-End-Testing auf zu skalieren — die Anzahl der Service-Versions-Kombinationen wächst kombinatorisch, und „das gesamte System" für jeden Testlauf hochzufahren wird langsam, flaky und teuer.</p>
      <p><strong>Contract Testing</strong> löst dies, indem der Vertrag (Contract) jedes Service-Paars isoliert getestet wird, statt der gesamten Kette zusammen. Beim <strong>konsumentengetriebenen Contract Testing</strong> (das Modell hinter dem Pact-Framework) definiert der Konsument eines Dienstes die Interaktionen, die er erwartet; der Provider verifiziert unabhängig, dass er diesen Vertrag erfüllt, ganz ohne den Konsumenten hochfahren zu müssen. Das erkennt breaking API-Änderungen ohne eine vollständige Integrationsumgebung.</p>
      <p><strong>Service-Mesh-Testing</strong> betrachtet die Netzwerkschicht selbst — Routing, Retries, Timeouts, mutual TLS, Traffic Shaping —, die Infrastruktur wie Istio oder Linkerd zwischen Diensten verwaltet. Testen bedeutet hier oft, zu verifizieren, dass die Routing-/Policy-Konfiguration des Mesh sich wie beabsichtigt verhält (z. B. dass eine Canary-Regel tatsächlich 5% des Traffics an die neue Version sendet), nicht nur, die Anwendungslogik zu testen.</p>
      <p><strong>Chaos Engineering</strong> injiziert bewusst Fehler — eine Instanz töten, Netzwerklatenz hinzufügen, eine Ressource erschöpfen — in ein System (oft die Produktion, unter kontrollierten Bedingungen), um zu verifizieren, dass es sich anmutig degradiert statt in einen vollständigen Ausfall zu kaskadieren. Werkzeuge wie Chaos Monkey (Netflix) und Gremlin haben dies als Disziplin statt als Unfall populär gemacht.</p>
      <p><strong>Observability-getriebenes Testen</strong> nutzt die „drei Säulen" — Logs, Metriken und Traces —, um das Systemverhalten fortlaufend zu validieren, auch in der Produktion, wo man nicht jedes Szenario im Voraus skripten kann. Statt nur zu fragen „ist dieser Test bestanden", fragt es „stimmt das, was wir im echten Traffic beobachten, mit dem überein, was wir erwarten" — und schließt damit die Schleife, die Shift-Right-Testing öffnet.</p>` },
    { h: "9.5 Die richtige Architektur für den eigenen Kontext wählen", body: `
      <p>Nichts von alledem ist eine Checkliste zum vollständigen Übernehmen — es ist ein Menü, aus dem man je nach Kontext wählt. Ein fünfköpfiges Startup, das wöchentlich einen Monolithen ausliefert, braucht fast nichts von der Microservices-Testing-Maschinerie aus 9.4; eine Organisation mit 200 Ingenieuren, die 40 Dienste betreibt, braucht das meiste davon.</p>
      <p><strong>Grobe Entscheidungsfaktoren:</strong> Teamgröße und Release-Kadenz (schnellere Releases drängen zu mehr Automatisierung und Shift-Right-Praktiken), Systemkomplexität und Anzahl unabhängig deploybarer Dienste (treibt den Bedarf an Contract Testing und Service-Mesh-Bewusstsein), und regulatorische/Compliance-Vorgaben (können zu strengeren Quality Gates und konservativerer Umgebungsbeförderung drängen).</p>
      <p><strong>Erwähnenswerte Anti-Patterns:</strong></p>
      <ul>
        <li><strong>Die „Eistüte"</strong> — das Gegenteil der gesunden Testpyramide (Modul 7): eine Suite, die oben schwer ist mit langsamen, brüchigen UI-/E2E-Tests und wenigen schnellen Unit-Tests, sodass die gesamte Suite langsam, flaky und teuer in der Wartung ist.</li>
        <li><strong>Geteilte, veränderliche Testumgebungen</strong> — eine QA-Umgebung, in die jeder deployt und deren Daten jeder verändert, was flaky, schwer reproduzierbare Fehlschläge erzeugt, die nichts mit dem getesteten Code zu tun haben.</li>
        <li><strong>Keine Testdatenstrategie</strong> — Tests, die von handgepflegten, undokumentierten Fixture-Daten abhängen, die niemand mehr vollständig versteht, was still bricht, sobald sich das Schema weiterentwickelt.</li>
      </ul>
      <p>Der rote Faden durch dieses gesamte Modul: Architekturentscheidungen in der QA sind Trade-offs zwischen Geschwindigkeit, Zuverlässigkeit und Wartungskosten — keine Suche nach einem universell „richtigen" Setup.</p>` },
    { h: "9.6 Testreporting- & Observability-Architektur", body: `
      <p>Eine Testsuite, die läuft, aber Berichte erzeugt, die niemand liest oder ihnen vertraut, liefert wenig Wert — Reporting-Infrastruktur ist ebenso sehr eine Architekturentscheidung wie die Tests selbst.</p>
      <p><strong>Testreporting-Werkzeuge:</strong> Allure und ReportPortal sind gängige Wahlmöglichkeiten, um die Rohausgabe eines Test-Runners in lesbare, historische Dashboards zu verwandeln — sie zeigen Bestehens-/Fehlschlagstrends über die Zeit, nicht nur den letzten Lauf, und erlauben es, einen Fehlschlag bis zu einem bestimmten Commit oder einer Umgebung zurückzuverfolgen.</p>
      <p><strong>Was eine gute Testreporting-Architektur bietet:</strong></p>
      <ul>
        <li><strong>Historische Trendansicht</strong> — sinkt die Bestehensquote über die letzten 10 Builds, nicht nur „ist dieser eine Build bestanden".</li>
        <li><strong>Flaky-Test-Erkennung</strong> — automatisches Markieren von Tests, die zeitweise ohne Codeänderung fehlschlagen (siehe Flakiness-Rate, Modul 8), sodass sie isoliert oder repariert werden können, statt still das Vertrauen in die Suite zu untergraben.</li>
        <li><strong>Schnelle Fehler-Triage</strong> — einen Fehlschlag direkt mit Logs, Screenshots oder einer Videoaufzeichnung des jeweiligen Laufs zu verknüpfen, sodass ein Entwickler ihn nicht lokal reproduzieren muss, nur um zu sehen, was passiert ist.</li>
        <li><strong>Ownership und Routing</strong> — Fehlschläge benachrichtigen automatisch das Team, dem der betroffene Bereich gehört, statt in einem Kanal zu landen, den niemand beobachtet.</li>
      </ul>
      <p>Das schließt den Kreis zu 9.3 und 9.4: Eine Pipeline kann perfekt gestaffelt und ein System in der Produktion perfekt beobachtbar sein — aber wenn die Testergebnisse selbst nicht so berichtet werden, dass Menschen tatsächlich danach handeln, zahlt sich diese ganze Architektur nicht aus.</p>` },
    { h: "9.7 Teststrategie vs. Testkonzept & risikobasierte Testarchitektur", body: `
      <div class="table-wrap"><table>
        <thead><tr><th></th><th>Teststrategie</th><th>Testkonzept (Testplan)</th></tr></thead>
        <tbody>
          <tr><td>Ebene</td><td>Organisation oder Produkt, über die Zeit stabil</td><td>Projekt oder Release</td></tr>
          <tr><td>Inhalt</td><td>Vorgehen, Werkzeuge, Umgebungen, Automatisierungsrichtlinie, Fehler-Workflow</td><td>Umfang, Zeitplan, Ressourcen, Risiken, Eingangs-/Endekriterien, Ergebnisse</td></tr>
        </tbody>
      </table></div>
      <p><strong>Risikobasierte Testarchitektur:</strong></p>
      <ol>
        <li>Risikoelemente identifizieren: Features, Integrationen, Datenflüsse.</li>
        <li>Jedes nach <strong>Auswirkung × Eintrittswahrscheinlichkeit</strong> bewerten.</li>
        <li>Aufwand proportional zum Wert verteilen und Techniken nach Risikostufe wählen. Hohes Risiko bekommt Entscheidungstabellen, Grenzwertanalyse und tiefere Abdeckung; niedriges Risiko Smoke- und Plausibilitätsprüfungen.</li>
        <li>Bei jedem Build neu bewerten, denn Risiken ändern sich.</li>
      </ol>
      <p><strong>Produktrisiken</strong> betreffen, was im Produkt schiefgehen kann (falsche Berechnungen, Datenverlust, Sicherheitslücken). <strong>Projektrisiken</strong> betreffen, was das Testen selbst gefährden kann (späte Builds, instabile Umgebungen, Personalausfall).</p>
      <p><strong>Konfigurationsmanagement</strong> gilt für alle Testmittel: Testfälle, Skripte, Datensätze und Umgebungskonfigurationen gehören unter Versionskontrolle.</p>` },
    { h: "9.8 Prozessarchitektur & Qualitätskultur", body: `
      <p><strong>Testen in die Auslieferung einbetten:</strong> Akzeptanzkriterien im Backlog-Refinement klären, „Three Amigos“-Gespräche führen und Testgates in die Definition of Done aufnehmen.</p>
      <ul>
        <li><strong>Eingangskriterien</strong>: Build bereitgestellt, Umgebung stabil, Testdaten bereit, Blocker beseitigt.</li>
        <li><strong>Endekriterien</strong>: Abdeckungsziele erreicht, Fehler-Gates bestanden (z. B. keine offenen P1), Freigabe.</li>
      </ul>
      <p><strong>Platzierung und Design der Automatisierung:</strong> Unit-Tests vor dem Commit, API- und Integrationstests beim Merge, E2E nachts oder vor dem Release, Performance nach Zeitplan. Stabile IDs oder <code>data-*</code>-Attribute als Locator statt brüchigem XPath. Tests taggen (Smoke, Regression), parallel ausführen, eine Quarantäne-Spur für flaky Tests vorhalten und Wiederholungen nur bei echter Infrastruktur-Instabilität erlauben. Auf <strong>Testbarkeit</strong> hin entwerfen: Entwickler um Test-Hooks, deterministische Modi, simulierte Uhren und API-Zugriff bitten.</p>
      <p><strong>Feedbackschleifen:</strong> Ursachenanalyse von Fehlern (<strong>5 Whys</strong>, <strong>Fischgräten-/Ishikawa</strong>-Diagramme) und Modelle zur Prozessverbesserung wie <strong>TMMi</strong> und <strong>TPI</strong>.</p>
      <p><strong>Berichterstattung:</strong> Testfortschritt (geplant vs. ausgeführt vs. bestanden), Burn-down des Fehlertrends und eine Qualitätsbewertung, die das <em>Restrisiko</em> benennt.</p>
      <p><strong>Qualitätskultur:</strong> Qualität liegt in der Verantwortung des ganzen Teams. Tester setzen sich für sie ein; alle bauen sie ein. Shift-Left <em>und</em> Shift-Right: Produktionsmonitoring, Fehlertracking und Feedback nach dem Release speisen neue Tests. Weil Testen die Anwesenheit von Fehlern zeigt, nicht ihre Abwesenheit, kommuniziere <strong>Vertrauensniveaus, keine Absolutaussagen</strong>.</p>` }
  ]
},
{
  id: "security-testing",
  num: 10,
  title: "Sicherheitstests & AppSec",
  summary: "Wie ein Angreifer denken: die OWASP Top 10, die Werkzeuge, die Schwachstellen finden, bevor Angreifer es tun, und wie Sicherheit in den SDLC eingebaut wird, statt erst am Ende angeflanscht zu werden.",
  takeaway: "Sicherheitstests sind keine separate Disziplin, die am Ende an QA angeflanscht wird — es ist dieselbe Testmentalität (herausfinden, wo das System bricht), nur auf eine andere Frage gerichtet: nicht „funktioniert das wie beabsichtigt“, sondern „kann man das dazu bringen, etwas zu tun, wofür es nie gedacht war“. Je früher diese Frage gestellt wird, desto günstiger ist die Antwort.",
  lessons: [
    { h: "10.1 Grundlagen des Sicherheitstestens & die Denkweise eines Angreifers", body: `
      <p>Funktionales Testen fragt „funktioniert der Happy Path, und werden die bekannten Grenzfälle behandelt?" <strong>Sicherheitstests stellen eine grundlegend andere Frage: „was passiert, wenn jemand absichtlich versucht, die Regeln zu brechen?"</strong> Ein Login-Formular, das ein falsches Passwort korrekt ablehnt, ist funktional korrekt — aber Sicherheitstests fragen auch: Was, wenn das Passwortfeld 50.000 Zeichen erhält, oder ein Stück SQL, oder die Anfrage das Formular komplett umgeht und direkt die API trifft?</p>
      <p><strong>Zentrale Sicherheitseigenschaften, die Tester im Blick behalten sollten (die „CIA-Triade" plus zwei):</strong></p>
      <ul>
        <li><strong>Vertraulichkeit (Confidentiality)</strong> — nur autorisierte Parteien können Daten lesen.</li>
        <li><strong>Integrität (Integrity)</strong> — Daten können nicht von unautorisierten Parteien verändert werden, und Manipulation ist erkennbar.</li>
        <li><strong>Verfügbarkeit (Availability)</strong> — das System bleibt für legitime Nutzer nutzbar (widersteht Denial-of-Service).</li>
        <li><strong>Authentifizierung (Authentication)</strong> — das System überprüft korrekt, wer jemand vorgibt zu sein.</li>
        <li><strong>Autorisierung (Authorization)</strong> — das System beschränkt korrekt, was ein authentifizierter Nutzer tun darf.</li>
      </ul>
      <p><strong>Least Privilege</strong> — jeder Nutzer, jeder Dienst und jeder Prozess sollte nur den minimal nötigen Zugriff haben, um seine Aufgabe zu erledigen, nicht mehr — ist das eine Prinzip, das den meisten Schwachstellenklassen in 10.2 und 10.3 zugrunde liegt: Fast jede ernsthafte Sicherheitsverletzung beinhaltet, dass etwas mehr Zugriff hatte, als es brauchte.</p>` },
    { h: "10.2 OWASP Top 10 im Detail", body: `
      <p>Die <strong>OWASP Top 10</strong> ist die am häufigsten referenzierte Liste kritischer Sicherheitsrisiken für Webanwendungen, veröffentlicht vom Open Worldwide Application Security Project und periodisch anhand realer Daten aktualisiert. Sie ist das Standardvokabular für sicherheitsbewusstes Testen:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Risiko</th><th>Was es bedeutet</th></tr></thead>
        <tbody>
          <tr><td><strong>Broken Access Control</strong></td><td>Nutzer können außerhalb ihrer vorgesehenen Berechtigungen handeln — z. B. eine ID in einer URL ändern, um die Daten eines anderen Nutzers einzusehen.</td></tr>
          <tr><td><strong>Cryptographic Failures</strong></td><td>Sensible Daten sind durch schwache, fehlende oder falsch konfigurierte Verschlüsselung offengelegt (bei der Übertragung oder im Ruhezustand).</td></tr>
          <tr><td><strong>Injection</strong></td><td>Nicht vertrauenswürdige Eingaben werden von einem Interpreter als Code/Befehle interpretiert — SQL Injection, Command Injection usw. (siehe 10.3).</td></tr>
          <tr><td><strong>Insecure Design</strong></td><td>Ein Mangel im Design selbst, nicht nur in der Umsetzung — kein noch so sicheres Coding behebt ein grundlegend unsicheres Design.</td></tr>
          <tr><td><strong>Security Misconfiguration</strong></td><td>Standard-Zugangsdaten, unnötig aktivierte Features, ausführliche Fehlermeldungen, die interne Details preisgeben, fehlende Sicherheits-Header.</td></tr>
          <tr><td><strong>Vulnerable &amp; Outdated Components</strong></td><td>Verwendung von Bibliotheken/Frameworks mit bekannten, ungepatchten Schwachstellen — siehe Dependency-Scanning in 10.4.</td></tr>
          <tr><td><strong>Identification &amp; Authentication Failures</strong></td><td>Schwache Passwortrichtlinien, Session Fixation, fehlende Zwei-Faktor-/Multi-Faktor-Authentifizierung, vorhersehbare Session-Tokens.</td></tr>
          <tr><td><strong>Software &amp; Data Integrity Failures</strong></td><td>Code/Daten vertrauen (z. B. Auto-Updates, CI/CD-Pipelines, Plugins), ohne deren Integrität zu verifizieren.</td></tr>
          <tr><td><strong>Security Logging &amp; Monitoring Failures</strong></td><td>Angriffe bleiben unentdeckt, weil nichts protokolliert wird oder Logs nicht überwacht/alarmiert werden.</td></tr>
          <tr><td><strong>Server-Side Request Forgery (SSRF)</strong></td><td>Ein Angreifer bringt den Server dazu, Anfragen an unbeabsichtigte interne oder externe Ziele zu senden.</td></tr>
        </tbody>
      </table></div>
      <p>Gegen diese Liste zu testen bedeutet nicht, für jedes Risiko tiefgehende Penetrationstests durchzuführen — selbst manuelle Tester können sinnvoll auf Fehlkonfigurationen, schwache Auth-Abläufe und übermäßig ausführliche Fehlermeldungen prüfen, ohne spezialisiertes Sicherheits-Tooling.</p>` },
    { h: "10.3 Häufige Schwachstellenklassen", body: `
      <p>Ein genauerer Blick auf die Schwachstellenklassen, denen Tester in der Praxis am häufigsten begegnen:</p>
      <p><strong>SQL Injection (SQLi)</strong> — nicht vertrauenswürdige Eingaben werden direkt in eine SQL-Abfrage verkettet, statt sie korrekt zu parametrisieren, wodurch ein Angreifer die Logik der Abfrage verändern kann. Klassischer Test: <code>' OR '1'='1</code> in ein Login-Feld eingeben, um zu sehen, ob dies die Authentifizierung umgeht. Behebung: parametrisierte Abfragen/Prepared Statements, niemals stringverkettetes SQL.</p>
      <p><strong>Cross-Site Scripting (XSS)</strong> — nicht vertrauenswürdige Eingaben werden als ausführbares Skript im Browser eines anderen Nutzers gerendert. <strong>Stored XSS</strong> speichert das schädliche Skript dauerhaft (z. B. in einem Kommentarfeld, später anderen Nutzern angezeigt); <strong>Reflected XSS</strong> spiegelt es sofort in einer Antwort zurück (z. B. über eine präparierte URL); <strong>DOM-basiertes XSS</strong> geschieht vollständig clientseitig durch unsichere JavaScript-DOM-Manipulation. Testen, indem man eine harmlose Skript-Payload (z. B. <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>) in jedes Eingabefeld einträgt und prüft, ob sie ausgeführt wird, statt als Text angezeigt zu werden.</p>
      <p><strong>Cross-Site Request Forgery (CSRF)</strong> — eine bösartige Seite bringt den Browser eines angemeldeten Nutzers dazu, eine unerwünschte Anfrage an eine Zielseite zu senden, bei der er authentifiziert ist (z. B. ein unsichtbares, automatisch abgesendetes Formular, das die E-Mail-Adresse des Opfers ändert). Abwehrmaßnahmen: CSRF-Tokens, SameSite-Cookie-Attribute.</p>
      <p><strong>Broken Access Control / IDOR (Insecure Direct Object Reference)</strong> — das System versäumt es zu prüfen, ob der aktuelle Nutzer tatsächlich berechtigt ist, auf die konkret angeforderte Ressource zuzugreifen, oft ausgenutzt, indem einfach eine ID in einer URL oder einem API-Aufruf geändert wird (z. B. <code>/api/orders/1001</code> → <code>/api/orders/1002</code>) und geprüft wird, ob die Daten eines anderen Nutzers zurückkommen.</p>
      <p><strong>Authentifizierungs-/Autorisierungsfehler</strong> — schwache Passwort-Reset-Abläufe, Session-Tokens, die nie ablaufen, fehlendes Rate-Limiting beim Login (das Brute-Force ermöglicht) und Privilege Escalation (ein normaler Nutzer erlangt Admin-Rechte) fallen alle in diese Kategorie — siehe 10.6, wie Threat Modeling hilft, dies vor der Veröffentlichung zu erkennen.</p>` },
    { h: "10.4 Sicherheitstest-Werkzeuge & -Techniken", body: `
      <p>Sicherheitstest-Tooling wird meist danach beschrieben, <strong>wann</strong> es läuft und <strong>was</strong> es sehen kann:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Ansatz</th><th>Wie es funktioniert</th><th>Beispielwerkzeuge</th></tr></thead>
        <tbody>
          <tr><td><strong>SAST</strong> (Static Application Security Testing)</td><td>Durchsucht Quellcode, ohne ihn auszuführen, nach bekannt gefährlichen Mustern (z. B. stringverkettetes SQL, hartkodierte Secrets). Läuft früh — kann Teil jedes Commits sein.</td><td>SonarQube, Semgrep, Checkmarx</td></tr>
          <tr><td><strong>DAST</strong> (Dynamic Application Security Testing)</td><td>Greift eine laufende Anwendung von außen an, wie ein echter Angreifer, ohne Kenntnis des Quellcodes. Findet Laufzeit-/Konfigurationsprobleme, die SAST nicht sehen kann.</td><td>OWASP ZAP, Burp Suite</td></tr>
          <tr><td><strong>IAST</strong> (Interactive Application Security Testing)</td><td>Kombiniert beides — ein Agent, der in einer laufenden Anwendung instrumentiert ist, beobachtet echten Traffic/echte Ausführung, um Schwachstellen mit mehr Kontext und weniger Fehlalarmen als DAST allein zu finden.</td><td>Contrast Security, Seeker</td></tr>
          <tr><td><strong>SCA</strong> (Software Composition Analysis / Dependency-Scanning)</td><td>Durchsucht Drittanbieter-Bibliotheken und Abhängigkeiten nach bekannten CVEs (veröffentlichten Schwachstellen) und adressiert direkt das Risiko „Vulnerable & Outdated Components".</td><td>Snyk, Dependabot, OWASP Dependency-Check</td></tr>
        </tbody>
      </table></div>
      <p>Eine ausgereifte AppSec-Praxis schichtet diese Ansätze, statt nur einen zu wählen: SAST und SCA laufen bei jedem Commit (schnell, günstig, findet bekannte Muster), während DAST seltener gegen eine deployte Umgebung läuft (langsamer, findet aber, was statische Analyse strukturell nicht sehen kann).</p>` },
    { h: "10.5 Grundlagen des Penetrationstestens", body: `
      <p><strong>Penetrationstests</strong> („Pen Testing") sind autorisierte, simulierte Angriffe auf ein System, um ausnutzbare Schwachstellen zu finden, bevor echte Angreifer dies tun — im Unterschied zum automatisierten Scanning aus 10.4 dadurch, dass ein erfahrener Mensch aktiv Schwachstellen so miteinander verkettet, wie es ein echter Gegner tun würde.</p>
      <p><strong>Typische Phasen:</strong></p>
      <ol>
        <li><strong>Reconnaissance (Aufklärung)</strong> — Informationen über das Ziel sammeln (verwendete Technologien, exponierte Endpunkte, Mitarbeiter-/Organisationsinformationen).</li>
        <li><strong>Scanning</strong> — aktive Hosts, offene Ports und Dienste identifizieren, oft mit automatisierten Werkzeugen als Ausgangspunkt.</li>
        <li><strong>Exploitation</strong> — aktiv versuchen, entdeckte Schwachstellen auszunutzen, um Zugriff zu erlangen oder Daten zu extrahieren.</li>
        <li><strong>Post-Exploitation</strong> — bewerten, wie weit ein Angreifer von diesem ersten Zugang aus kommen könnte (Privilege Escalation, laterale Bewegung).</li>
        <li><strong>Reporting</strong> — Befunde mit Schweregrad, Nachweisen und Behebungsempfehlungen dokumentieren — das eigentliche Ergebnis, das einen Pen Test wertvoll macht.</li>
      </ol>
      <p><strong>Testarten nach Wissensstand</strong> spiegeln die Black-/White-/Grey-Box-Unterscheidung aus Modul 1: <strong>Black-Box</strong>-Pen-Testing (keine interne Kenntnis, wie ein externer Angreifer), <strong>White-Box</strong> (voller Zugriff auf Code/Architektur, tiefste Abdeckung) und <strong>Grey-Box</strong> (teilweise Kenntnis, z. B. ein gültiges Konto mit niedrigen Rechten — oft die realistischste Simulation einer Insider-Bedrohung oder eines kompromittierten Kontos).</p>
      <p><strong>Scope und Autorisierung sind enorm wichtig</strong> — ein Pen Test läuft immer unter einer unterzeichneten Vereinbarung, die genau festlegt, was im Scope ist, sowie einer ausdrücklichen schriftlichen Erlaubnis; ohne das sind exakt dieselben Handlungen schlicht illegales, unautorisiertes Hacking.</p>` },
    { h: "10.6 AppSec im SDLC: Threat Modeling & sicheres Code-Review", body: `
      <p><strong>Threat Modeling</strong> ist eine strukturierte Übung, die während des Designs (bevor Code geschrieben wird) durchgeführt wird, um zu identifizieren, was schiefgehen könnte und wie man sich dagegen schützt. Ein gängiges Framework ist <strong>STRIDE</strong>:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Buchstabe</th><th>Bedrohungskategorie</th></tr></thead>
        <tbody>
          <tr><td><strong>S</strong></td><td>Spoofing — vorgeben, jemand/etwas anderes zu sein</td></tr>
          <tr><td><strong>T</strong></td><td>Tampering — Daten oder Code ohne Autorisierung verändern</td></tr>
          <tr><td><strong>R</strong></td><td>Repudiation — abstreiten, eine Aktion durchgeführt zu haben, ohne dass sich das Gegenteil beweisen lässt</td></tr>
          <tr><td><strong>I</strong></td><td>Information Disclosure — Informationen gegenüber Nichtberechtigten offenlegen</td></tr>
          <tr><td><strong>D</strong></td><td>Denial of Service — legitimen Zugriff beeinträchtigen oder verweigern</td></tr>
          <tr><td><strong>E</strong></td><td>Elevation of Privilege — Fähigkeiten ohne ordnungsgemäße Autorisierung erlangen</td></tr>
        </tbody>
      </table></div>
      <p>STRIDE anhand des Datenflussdiagramms eines Systems durchzugehen — für jede Komponente und jeden Datenfluss zu fragen „könnte dies gespooft / manipuliert / usw. werden" — erkennt Sicherheitslücken auf Designebene deutlich günstiger, als sie nach dem Launch zu finden (dies ist die sicherheitsspezifische Version von „Frühes Testen spart Zeit und Kosten", Modul 7).</p>
      <p><strong>Sicheres Code-Review</strong> erweitert gewöhnliches Code-Review um eine Sicherheitsperspektive: Prüfung auf hartkodierte Secrets, unparametrisierte Abfragen, fehlende Eingabevalidierung und unsichere Deserialisierung nicht vertrauenswürdiger Daten. Es funktioniert am besten kombiniert mit SAST-Tooling (10.4) — Automatisierung findet die mechanischen Muster, menschliches Review findet die Logik- und Designprobleme, über die Automatisierung strukturell nicht nachdenken kann.</p>
      <p>Genau das bedeutet „Shift-Left-Security" konkret: Threat Modeling zur Designzeit und sicheres Code-Review zur Implementierungszeit, statt dass Sicherheitstests erst kurz vor der Veröffentlichung auftauchen.</p>` },
    { h: "10.7 Sicherheit in CI/CD & Compliance-Grundlagen", body: `
      <p><strong>Sicherheit als Pipeline-Gate:</strong> Erweiterung der Quality Gates aus Modul 9 um sicherheitsspezifische Prüfungen — SAST-/SCA-Scans, die einen Merge bei neuen kritischen Funden blockieren, Secret-Scanning, das verhindert, dass Zugangsdaten überhaupt jemals committet werden, und Container-Image-Scanning vor einem Deploy. Das Ziel ist dasselbe wie bei jeder Shift-Left-Praxis: es in Minuten während der CI erkennen, nicht in einem Incident-Response-Anruf nach dem Launch.</p>
      <p><strong>Zero Trust</strong> ist ein architektonisches Prinzip, das relevant dafür ist, wie Systeme getestet werden: nie annehmen, dass eine Anfrage sicher ist, nur weil sie von innerhalb des Netzwerkperimeters kommt — jede Anfrage wird unabhängig von ihrer Herkunft anhand eigener Kriterien authentifiziert und autorisiert. Das verändert, was „internes" Testen prüfen muss: Ein interner Dienst, der einen anderen internen Dienst aufruft, muss weiterhin nachweisen, wer er ist.</p>
      <p><strong>Compliance-nahe Testanliegen</strong> (kein Ersatz für ein echtes Compliance-Audit, aber relevant für das, was ein QA-Team zu verifizieren gebeten wird):</p>
      <ul>
        <li><strong>SOC 2</strong> — verlangt üblicherweise Nachweise für Zugriffskontrollen, Change Management und Monitoring; QA-Teams werden oft gebeten zu zeigen, dass Test-/Deploy-Prozesse angemessene Freigaben und Audit-Trails haben.</li>
        <li><strong>DSGVO-nahe Anliegen</strong> — testen, dass Datenlöschung tatsächlich durchgängig funktioniert (eine „Lösche mein Konto"-Anfrage sollte die Daten wirklich löschen, einschließlich Backups/Replikaten gemäß ihrem Aufbewahrungsplan), und dass personenbezogene Daten (PII) in Nicht-Produktions-Testumgebungen maskiert/anonymisiert sind (Rückbezug auf Testdatenmanagement, Modul 9).</li>
      </ul>
      <p>Nichts davon macht ein QA-Team für vollständige regulatorische Compliance verantwortlich — aber zu wissen, dass diese Anliegen existieren, ermöglicht es einem Tester zu erkennen, wenn ein Befund („Testdaten enthalten echte Kunden-E-Mail-Adressen") tatsächlich ein Compliance-Problem ist, nicht nur eine Datenhygiene-Kleinigkeit.</p>` },
    { h: "10.8 Praktische Sicherheitstestideen & Shift-Left-Triage", body: `
      <p>Sicherheitsprüfungen, die ein QA-Engineer im normalen Featuretest durchführen kann (in einer autorisierten Umgebung):</p>
      <ul>
        <li><strong>Eingaben fuzzen</strong>: fehlerhaft, übergroß, Unicode, Null-Bytes. Die klassische Mischung aus Ad-hoc-Testen und Error Guessing.</li>
        <li><strong>Auth-Umgehung versuchen</strong>: Nutzer-IDs in URLs und API-Aufrufen ändern; abgelaufene, fehlende oder manipulierte Tokens senden.</li>
        <li><strong>Sicherheits-Header prüfen</strong>: <code>Content-Security-Policy</code>, <code>Strict-Transport-Security</code> (HSTS), <code>X-Frame-Options</code> und die Cookie-Flags <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code>.</li>
        <li><strong>Rate Limiting und Kontosperre prüfen</strong> gegen Brute-Force-Login-Versuche.</li>
        <li><strong>Nach Datenlecks suchen</strong>: sensible Daten in Logs, API-Antworten oder URLs; TLS bei der Übertragung; Verschlüsselung im Ruhezustand.</li>
        <li><strong>Nach Fehlkonfigurationen suchen</strong>: Standard-Zugangsdaten, ausführliche Fehlerseiten, offene Admin-Endpunkte, zu großzügiges CORS.</li>
      </ul>
      <p><strong>Werkzeuge:</strong> OWASP ZAP, Burp Suite, nmap, sqlmap, semgrep, Trivy.</p>
      <p><strong>Shift-Left-Integration:</strong></p>
      <ul>
        <li>SAST, DAST und SCA (Abhängigkeitsscan) in der <strong>CI</strong> laufen lassen, nicht nur vor einem Release. Verwundbare Bibliotheken, etwa Probleme der Log4Shell-Klasse, fängt automatisiertes SCA ab.</li>
        <li>Merges bei kritischen Funden blockieren und nach Schweregrad mit <strong>CVSS</strong>-Werten triagieren.</li>
        <li>Sicherheitsfehler in den <strong>gleichen Fehler-Workflow</strong> wie andere Bugs aufnehmen. Schweregrad ist trotzdem nicht Priorität.</li>
        <li>Eine Sicherheits-Checkliste in das Review jeder Story aufnehmen und Entwickler mit Secure-Coding-Schulungen und Security Champions unterstützen.</li>
      </ul>` }
  ]
},
{
  id: "performance-ux-automation",
  num: 11,
  title: "Performance-, UI/UX- und Automatisierungstests in der Praxis",
  summary: "Die Toolbox in Aktion: einen Lasttest durchführen, Usability anhand echter Heuristiken bewerten, den ersten automatisierten Test schreiben und wissen, welche zusätzlichen Werkzeuge die Lücken schließen.",
  takeaway: "Hier laufen alle bisher behandelten Techniken und Werkzeuge zusammen: In diesem Modul geht es darum, tatsächlich einen Lasttest durchzuführen, eine UI tatsächlich anhand einer Usability-Heuristik zu bewerten und tatsächlich einen automatisierten Test zu schreiben — nicht nur das Vokabular dafür zu erkennen.",
  lessons: [
    { h: "11.1 Last- und Performance-Testing in der Praxis", body: `
      <p>Performance-Testing hat mehrere unterschiedliche Ausprägungen, und die falsche für das eigene Ziel zu wählen, verschwendet einen Testzyklus:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Typ</th><th>Was geprüft wird</th><th>Wie es durchgeführt wird</th></tr></thead>
        <tbody>
          <tr><td><strong>Load Testing</strong></td><td>Verhalten unter erwarteter, realistischer Last</td><td>Schrittweise auf die erwartete Anzahl gleichzeitiger Nutzer hochfahren und diese halten, dabei Antwortzeit und Fehlerrate messen.</td></tr>
          <tr><td><strong>Stress Testing</strong></td><td>Wo das System tatsächlich bricht</td><td>Die Last kontinuierlich über die erwarteten Werte hinaus steigern, bis es zum Ausfall kommt, um die Obergrenze zu finden und zu sehen, wie (un)geordnet das System degradiert.</td></tr>
          <tr><td><strong>Spike Testing</strong></td><td>Plötzliche, extreme Traffic-Ausbrüche</td><td>Die Last abrupt hochspringen lassen (z. B. von 100 auf 5.000 Nutzer innerhalb von Sekunden) — simuliert eine Marketingkampagne oder einen viralen Moment.</td></tr>
          <tr><td><strong>Soak Testing</strong></td><td>Verhalten über eine lange, anhaltende Dauer</td><td>Moderate Last über viele Stunden oder Tage laufen lassen und dabei auf Memory Leaks und langsame Ressourcenerschöpfung achten, die kurze Tests niemals zutage fördern.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Metriken, die zählen:</strong> Die durchschnittliche Antwortzeit ist für sich genommen irreführend — ein System mit einem Durchschnitt von 200ms könnte trotzdem 5% der Nutzer 4 Sekunden warten lassen. Deshalb werden Performance-Ergebnisse meist als <strong>Perzentile</strong> berichtet: <strong>p95</strong> (95% der Anfragen waren schneller als dieser Wert) und <strong>p99</strong> (99% waren es) offenbaren die Erfahrung am Rand der Verteilung, die ein reiner Durchschnitt verbirgt. <strong>Throughput</strong> (verarbeitete Anfragen pro Sekunde) und die Fehlerrate unter Last runden das Kern-Metrikset ab.</p>
      <p><strong>Ein grundlegender Lasttest-Workflow:</strong> realistische Nutzerszenarien definieren (nicht nur einen Endpunkt in einer Schleife treffen) → ein Ziel-Lastprofil festlegen (Ramp-up-Muster, Spitzenparallelität, Dauer) → gegen eine Nicht-Produktionsumgebung ausführen, die wie die Produktion dimensioniert ist → p95-/p99-Antwortzeit, Throughput und Fehlerrate erfassen → mit dem vereinbarten Schwellenwert vergleichen (siehe die Lektion zu nichtfunktionalem Testen in Modul 3) → berichten und nach jeder Behebung erneut testen.</p>` },
    { h: "11.2 UI/UX-Testmethodik", body: `
      <p>UI-Testing prüft, ob die Oberfläche korrekt gerendert wird und sich korrekt verhält (Buttons funktionieren, Layouts brechen nicht); <strong>UX-Testing geht weiter und fragt, ob die Erfahrung dem Nutzer tatsächlich dient</strong> — das sind unterschiedliche Fragen, die unterschiedliche Methoden erfordern.</p>
      <p><strong>Heuristische Evaluation</strong> — die Bewertung einer UI anhand eines bekannten Satzes von Usability-Prinzipien, ohne echte Nutzer zu benötigen. Jakob Nielsens 10 Usability-Heuristiken sind der am weitesten verbreitete Ausgangspunkt, darunter: Sichtbarkeit des Systemstatus, Übereinstimmung zwischen System und realer Welt, Nutzerkontrolle und -freiheit, Konsistenz und Standards, Fehlervermeidung sowie Wiedererkennung statt Erinnern. Ein Tester kann einen heuristischen Durchgang allein an einem Nachmittag durchführen und dabei einen bedeutenden Anteil der Usability-Probleme erkennen, bevor überhaupt ein Nutzer rekrutiert wird.</p>
      <p><strong>Usability-Testing mit echten Nutzern</strong> — aufgabenbasierte Sitzungen („ein blaues T-Shirt in Größe M finden und kaufen") bei denen beobachtet, nicht angeleitet wird; ein <strong>Think-Aloud-Protokoll</strong> (den Teilnehmer bitten, seine Gedanken laut zu äußern, während er vorgeht) deckt Verwirrung auf, die reine stille Beobachtung übersieht. Schon 5 Nutzer in einer Sitzung decken typischerweise den Großteil der wesentlichen Usability-Probleme eines Designs auf — man braucht keine riesige Stichprobe, um echtes Signal zu erhalten.</p>
      <p><strong>A/B-Testing</strong> — zwei Varianten eines Designs mit echtem Produktions-Traffic, der zwischen ihnen aufgeteilt wird, und der Vergleich einer Zielmetrik (Konversionsrate, Aufgabenerfüllung, Time-on-Task). Anders als heuristische Evaluation oder moderierte Usability-Sitzungen misst A/B-Testing tatsächliches Verhalten im großen Maßstab statt beobachtetem oder selbst berichtetem Verhalten in einer Sitzung — die beiden Ansätze ergänzen sich, statt sich gegenseitig zu ersetzen.</p>
      <p><strong>Visuelles Regressionstesten</strong> — automatischer Vergleich von Screenshots der UI vor und nach einer Änderung, um unbeabsichtigte visuelle Brüche zu erkennen (siehe Applitools/Percy, Modul 8) — das ist der automatisierbare Anteil des UI-Testings; die urteilsbasierte heuristische Arbeit und die Arbeit mit echten Nutzern oben werden durch Automatisierung nicht ersetzt.</p>` },
    { h: "11.3 Praktische Testautomatisierung: den ersten automatisierten Test schreiben", body: `
      <p>Der Schritt von der Theorie (Framework-Architektur aus Modul 9) zur Praxis — wie ein tatsächlicher automatisierter UI-Test aussieht und welche Gewohnheiten ihn zuverlässig halten:</p>
      <p><strong>Ein minimaler Playwright-Test</strong> (konzeptionell — die Syntax variiert je nach Sprachanbindung):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Schritt</th><th>Was er tut</th></tr></thead>
        <tbody>
          <tr><td>1. Navigieren</td><td>Die Ziel-URL in einem frischen Browser-Kontext öffnen.</td></tr>
          <tr><td>2. Lokalisieren</td><td>Das Element finden, mit dem interagiert werden soll — ein Rollen- oder Test-ID-Locator ist einem brüchigen, an Styling gebundenen CSS-Selektor vorzuziehen.</td></tr>
          <tr><td>3. Handeln</td><td>Das gefundene Element klicken, beschreiben oder anderweitig damit interagieren.</td></tr>
          <tr><td>4. Prüfen (Assert)</td><td>Prüfen, ob der resultierende Zustand dem Erwarteten entspricht (Text erschienen, URL geändert, Element sichtbar geworden).</td></tr>
        </tbody>
      </table></div>
      <p><strong>Was einen zuverlässigen automatisierten Test von einem flakigen unterscheidet:</strong></p>
      <ul>
        <li><strong>Auto-Waiting statt fester Sleeps bevorzugen</strong> — ein hartkodiertes <code>wait(2000)</code> ist entweder zu kurz (weiterhin flakig) oder zu lang (verlangsamt die gesamte Suite); moderne Werkzeuge (Playwright, Cypress) warten stattdessen automatisch, bis ein Element handlungsfähig ist.</li>
        <li><strong>Locator-Stabilität</strong> — ein Locator, der an ein dediziertes <code>data-testid</code>-Attribut gebunden ist, übersteht ein Redesign; einer, der an eine für Styling verwendete CSS-Klasse gebunden ist, bricht in dem Moment, in dem ein Designer diese Klasse ändert.</li>
        <li><strong>Testunabhängigkeit</strong> — jeder Test sollte seinen eigenen Zustand aufbauen und nicht davon abhängen, dass zuvor (oder in einer bestimmten Reihenfolge) ein anderer Test gelaufen ist — reihenfolgeabhängige Tests sind eine häufige, schwer zu diagnostizierende Quelle für „funktioniert allein, schlägt in der Suite fehl".</li>
        <li><strong>Ein klarer Assertion-Fokus pro Test</strong> — ein Test, der fünf unabhängige Dinge prüft, schlägt uneindeutig fehl; kleinere, fokussierte Tests schlagen mit einem klaren, spezifischen Signal fehl.</li>
      </ul>
      <p>Genau hier zahlt sich das Page Object Model / Screenplay Pattern aus Modul 9.1 aus: Die oben genannten Locators und Aktionen leben an einem Ort, sodass ein Redesign bedeutet, ein Page-Objekt zu aktualisieren, nicht fünfzig einzelne Tests.</p>` },
    { h: "11.4 Weitere sehenswerte Werkzeuge", body: `
      <p>Abrundung der Toolbox aus Modul 8 mit Werkzeugen speziell für Performance, Cross-Browser-/Geräte-Abdeckung und Low-Code-Automatisierung:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Kategorie</th><th>Werkzeuge</th><th>Anmerkungen</th></tr></thead>
        <tbody>
          <tr><td><strong>Cross-Browser-/Geräte-Cloud-Testing</strong></td><td>BrowserStack, Sauce Labs, LambdaTest</td><td>Dieselbe Testsuite gegen echte Browser-/Betriebssystem-/Geräte-Kombinationen in der Cloud ausführen, ohne ein physisches Geräte-Lab zu betreiben.</td></tr>
          <tr><td><strong>Low-Code-/Record-and-Playback-Automatisierung</strong></td><td>Katalon Studio, TestCafe, Ghost Inspector</td><td>Senkt die Einstiegshürde für Teams ohne dedizierte Automatisierungs-Engineers — der Trade-off ist typischerweise weniger Flexibilität als bei code-first-Frameworks für komplexe Logik.</td></tr>
          <tr><td><strong>Visuelles/wahrnehmungsbasiertes Diffing</strong></td><td>Applitools Eyes, Percy, Chromatic</td><td>Bereits in Modul 8 behandelt — hier neben den anderen UI-Testwerkzeugen erneut erwähnenswert, da visuelle Regression Teil einer vollständigen UI-Teststrategie ist.</td></tr>
          <tr><td><strong>Mobilspezifisches Testing</strong></td><td>Appium (Modul 8), Firebase Test Lab, Xcode-/Android-Studio-Simulatoren</td><td>Echtgeräte-Cloud-Farmen (über BrowserStack/Sauce Labs) erkennen gerätespezifische Rendering- und Performance-Probleme, die Simulatoren übersehen können.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Continuous Testing</strong> — die Praxis, automatisierte Tests durchgehend über die gesamte Pipeline hinweg auszuführen (nicht nur vor dem Release), sodass Feedback zu jeder Änderung innerhalb von Minuten eintrifft — knüpft dieses Modul direkt an die Pipeline-Architektur aus Modul 9.3 an: Keines dieser Werkzeuge liefert Wert, wenn es außerhalb einer Pipeline steht, die sie tatsächlich bei jeder Änderung ausführt.</p>` },
    { h: "11.5 Performance-Metriken & Praxisregeln", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Art</th><th>Beantwortete Frage</th></tr></thead>
        <tbody>
          <tr><td>Last</td><td>Erfüllt das System seine SLAs bei der erwarteten Spitzenlast?</td></tr>
          <tr><td>Stress</td><td>Wo liegt der Bruchpunkt, und erholt es sich?</td></tr>
          <tr><td>Spike</td><td>Was passiert bei plötzlichen, extremen Lastspitzen?</td></tr>
          <tr><td>Soak / Dauerlast</td><td>Treten unter anhaltender Last Lecks oder Verschlechterungen auf?</td></tr>
          <tr><td>Skalierbarkeit</td><td>Hält die Performance Schritt, wenn Ressourcen und Last hochskaliert werden?</td></tr>
        </tbody>
      </table></div>
      <p><strong>Wichtige Metriken:</strong> Antwortzeit, angegeben als <strong>Perzentile</strong> (P95/P99 zählen mehr als Durchschnitte, weil ein Durchschnitt den langsamen Rest verbirgt, den echte Nutzer spüren); Durchsatz (Requests pro Sekunde); Fehlerrate; Ressourcenauslastung (CPU, Speicher, I/O, Datenbank, Netzwerk).</p>
      <p><strong>Praxisregeln:</strong></p>
      <ul>
        <li><strong>SLAs/SLOs vor dem Test festlegen</strong>, z. B. „P95 unter 800 ms bei 500 gleichzeitigen Nutzern“, und gegen diese Zahlen testen statt nach Gefühl.</li>
        <li>Die <strong>Engpass-Ressource</strong> finden, nicht nur den langsamen Endpunkt.</li>
        <li>Realistische Nutzerabläufe mit <strong>Denkzeiten</strong> modellieren und die Testumgebung isolieren.</li>
        <li>Gängige Werkzeuge: JMeter, k6, Gatling, Locust, LoadRunner.</li>
      </ul>` },
    { h: "11.6 Barrierefreiheit, visuelle Regression & Lokalisierung", body: `
      <ul>
        <li><strong>Usability-Tests</strong>: echte Nutzer bei Aufgaben beobachten und Aufgabenerfolg, Bearbeitungszeit und Fehleranzahl messen.</li>
        <li><strong>Heuristische Evaluation</strong>: ein Expertenreview anhand von Nielsens 10 Usability-Heuristiken.</li>
        <li><strong>Funktionale UI-Tests</strong>: Formulare, Navigation, Validierungszustände, Verhalten über Browser und Geräte hinweg.</li>
        <li><strong>Visuelle Regressionstests</strong>: Pixel- oder DOM-Vergleichswerkzeuge (Percy, Applitools, BackstopJS) fangen unbeabsichtigte visuelle Änderungen ab, die funktionale Assertions übersehen.</li>
        <li><strong>Barrierefreiheit (a11y)</strong> nach WCAG 2.1/2.2, Stufen A, AA und AAA. Automatische Werkzeuge wie axe und Lighthouse finden nur etwa <strong>30–40 %</strong> der Probleme, daher sind manuelle Prüfungen Pflicht: reine Tastaturbedienung, Screenreader (NVDA, VoiceOver), Kontrast und Fokusreihenfolge. Werkzeuge siehe Modul 8.9.</li>
        <li><strong>Lokalisierung / i18n</strong>: Datums-, Zahlen- und Währungsformate, Übersetzungen, Textverlängerung, Rechts-nach-links-Layouts (RTL).</li>
      </ul>` },
    { h: "11.7 Was automatisieren & die Testpyramide", body: `
      <p><strong>Gute Automatisierungskandidaten:</strong> stabile, wiederholte Prüfungen (Smoke, Regression, Build-Verifikation); teure manuelle Arbeit (Lasttests, datenlastige Prüfungen, Cross-Browser-Matrizen); kritische Pfade, die den Wartungsaufwand wert sind (Login, Checkout, zentrale API).</p>
      <p><strong>Nicht automatisieren:</strong> einmalige Exploration, eine UI, die sich jeden Sprint ändert, Usability-Urteile oder alles, dessen Wartungskosten die eingesparte Zeit übersteigen.</p>
      <pre><code>       E2E         ← wenige: langsam, fragil, hoher Wert
      /   \\
   Integration     ← eine mittlere Anzahl
  /     |     \\
 Unit (many)       ← schnell, isoliert, das Fundament</code></pre>
      <p>Bei Microservices verlagern die <strong>Testing-Honeycomb</strong> und die <strong>Testing-Trophy</strong> das Gewicht hin zu Integrationstests und weg von End-to-End-Tests.</p>
      <p><strong>Praxisregeln:</strong></p>
      <ul>
        <li>Testcode wie Produktionscode behandeln: Versionskontrolle, Review, keine Duplikate, Refactoring.</li>
        <li><strong>API-Prüfungen gegenüber UI-Prüfungen bevorzugen</strong>, wenn sie dasselbe abdecken; sie sind günstiger und stabiler.</li>
        <li>Tests isolieren: Daten zwischen Läufen zurücksetzen und nie von der Ausführungsreihenfolge abhängen.</li>
        <li>Schnell und klar scheitern: Eine Assertion sollte das kaputte Verhalten benennen.</li>
        <li><strong>Flaky Tests sofort in Quarantäne.</strong> Eine rote Suite, die alle zu ignorieren gelernt haben, ist schlimmer als keine.</li>
        <li>Die schnellsten Suiten bei jedem Commit laufen lassen, langsamere beim Merge oder nachts.</li>
      </ul>` }
  ]
}
  ],
  quizzes: {
  "manual-testing": [
    { q: "Wie viel mehr kostet laut dem IBM System Sciences Institute die Behebung eines bei der Implementierung gefundenen Fehlers im Vergleich zu einem, der in der Designphase gefunden wurde?", options: ["2x", "6x", "15x", "Es kostet gleich viel"], correct: 1, explain: "Das IBM System Sciences Institute stellte fest, dass ein bei der Implementierung entdeckter Defekt etwa 6x mehr kostet als einer, der beim Design entdeckt wird — das Kernargument für frühes Testen." },
    { q: "Welcher Anteil der Projekte nennt UX-Validierung als Hauptgrund für manuelles Testen?", options: ["Über 70%", "Etwa 10%", "Genau 50%", "Unter 5%"], correct: 0, explain: "Über 70% der Projekte nennen UX — Anordnung, Ästhetik und Feedback — als Hauptgrund, warum menschliche Tester benötigt werden." },
    { q: "Welche Klassifizierung des manuellen Testens basiert darauf, KEINE Kenntnis des internen Codes der Anwendung zu haben?", options: ["White-Box-Testing", "Grey-Box-Testing", "Black-Box-Testing", "Komponententest (Unit Testing)"], correct: 2, explain: "Black-Box-Testing überprüft die Funktionalität nur anhand von Anforderungen und Spezifikationen, ohne Kenntnis des internen Codes." },
    { q: "Welches davon ist eines der fünf in diesem Tutorial aufgeführten Hauptziele des manuellen Testens?", options: ["Automatisierungsabdeckung", "Regressionssicherheit", "Lastausgleich", "Code-Refactoring"], correct: 1, explain: "Die fünf Hauptziele sind Fehleridentifikation, Anforderungsvalidierung, Sicherstellung der Nutzererfahrung, Regressionssicherheit und Qualitätslieferung." },
    { q: "Welches davon wird als Nachteil des manuellen Testens für große, komplexe Anwendungen genannt?", options: ["Zu schnell, um Fehler zu finden", "Nicht skalierbar", "Erfordert intensive Programmierkenntnisse", "Kann kein menschliches Urteilsvermögen einbeziehen"], correct: 1, explain: "Manuelles Testen ist zeitaufwendig und skaliert nicht gut für große oder komplexe Anwendungen — deshalb existiert Automatisierung daneben." },
    { q: "Was validiert der manuelle Tester in der Fallstudie zum Krankenhausverwaltungssystem primär?", options: ["Serverantwortzeiten unter Last", "Dass die App fehlerfrei kompiliert", "Reale Workflow-Sequenzen über Registrierung, Terminplanung und Abrechnung hinweg", "Quellcode-Stilkonventionen"], correct: 2, explain: "Die Fallstudie geht darum, zu validieren, dass in einem Workflow eingegebene Daten (z. B. Registrierung) korrekt auf nachgelagerten Bildschirmen (Abrechnung, Arztansichten) ankommen — eine reale Nutzungssequenz." },
    { q: "Welcher Testansatz erfordert laut dem Vergleich manuell vs. automatisiert zusätzlich zum Testwissen Programmierkenntnisse?", options: ["Manuelles Testen", "Automatisiertes Testen", "Keins von beiden", "Beide gleichermaßen, ohne Unterschied"], correct: 1, explain: "Automatisiertes Testen erfordert Programmier- plus Testwissen, während manuelles Testen Fach- und Testwissen, aber keine Programmierung benötigt." },
    { q: "Was ist der zentrale Unterschied zwischen Schweregrad (Severity) und Priorität eines Defekts?", options: ["Sie bedeuten exakt dasselbe", "Schweregrad ist die technische Auswirkung; Priorität ist, wie dringend die Behebung aus geschäftlicher Sicht ist", "Der Schweregrad wird vom Produktteam festgelegt, die Priorität vom Tester", "Priorität gilt nur für automatisierte Tests"], correct: 1, explain: "Schweregrad und Priorität sind unabhängige Achsen — ein Fehler mit hohem Schweregrad in einem selten genutzten Bereich kann niedrige Priorität haben, während ein Fehler mit niedrigem Schweregrad, aber hoher Sichtbarkeit hohe Priorität haben kann." },
    { q: "Was ist der häufigste Grund, warum ein Fehlerbericht an den Melder zurückgegeben wird, statt behoben zu werden?", options: ["Der Bericht ist zu kurz", "Fehlende Reproduktionsschritte", "Der Schweregrad wurde zu hoch angesetzt", "Er wurde von einem Junior-Tester gefunden"], correct: 1, explain: "Ohne klare, exakte Reproduktionsschritte kann ein Entwickler das Problem oft nicht bestätigen oder diagnostizieren, sodass der Bericht für mehr Details zurückgeschickt wird, bevor er behoben werden kann." },
    { q: "Ein Entwickler schreibt >= statt >, und eine Bestellung über genau 50,00 € wird fälschlich kostenlos versandt. Welcher Begriff beschreibt das falsche Verhalten, das der Kunde sieht?", options: ["Fehlhandlung (Error)","Fehlerzustand (Defect)","Fehlerwirkung (Failure)","Grundursache"], correct: 2, explain: "Der menschliche Irrtum ist die Fehlhandlung, der falsche Operator im Code der Fehlerzustand, und das beobachtete falsche Verhalten beim Ausführen die Fehlerwirkung." },
    { q: "Was ist der Unterschied zwischen Fehlernachtest und Regressionstest?", options: ["Sie sind dasselbe","Der Fehlernachtest prüft, ob ein behobener Fehler behoben ist; der Regressionstest prüft, ob die Änderung nichts anderes kaputt gemacht hat","Regressionstests gibt es nur vor dem Release, Fehlernachtests nur danach","Fehlernachtests sind automatisiert, Regressionstests manuell"], correct: 1, explain: "Beide sind änderungsbezogene Testarten: Der Fehlernachtest zielt auf die konkrete Korrektur, der Regressionstest auf alles drumherum." },
    { q: "Warum gilt Big-Bang-Integration als riskant?", options: ["Sie braucht zu viele Tester","Wenn alle Komponenten auf einmal kombiniert werden, lässt sich schwer feststellen, welche eine Fehlerwirkung verursacht hat","Nur Entwickler dürfen sie durchführen","Sie überspringt den Systemtest"], correct: 1, explain: "Inkrementelle Integration (Top-down oder Bottom-up) fügt Teile schrittweise hinzu, sodass eine neue Fehlerwirkung auf das zuletzt hinzugefügte Teil hinweist." },
    { q: "Welche ist die formalste Review-Art?", options: ["Informelles Review","Walkthrough","Technisches Review","Inspektion"], correct: 3, explain: "Die Inspektion ist die formalste Review-Art, mit festen Rollen, Eingangskriterien und Fehlerprotokoll." },
    { q: "Was verknüpft die Rückverfolgbarkeit?", options: ["Tester und Entwickler","Anforderungen, Testbedingungen, Testfälle und Fehler","Builds und Server","Nur Bugs und ihre Fix-Commits"], correct: 1, explain: "Rückverfolgbarkeit belegt die Abdeckung und unterstützt die Auswirkungsanalyse, wenn sich eine Anforderung ändert." }
  ],
  "test-techniques": [
    { q: "Welche Werte würde die Grenzwertanalyse für einen gültigen Eingabebereich von 1–10 testen?", options: ["1, 5, 10", "0, 1, 2, 9, 10, 11", "-10, 0, 10, 20", "Jede Ganzzahl von 1 bis 10"], correct: 1, explain: "BVA testet Werte knapp innerhalb, an und knapp außerhalb jeder Grenze: 0, 1, 2 (untere Grenze) und 9, 10, 11 (obere Grenze)." },
    { q: "Welche Technik unterteilt Eingaben in gültige und ungültige Gruppen und testet einen repräsentativen Wert aus jeder?", options: ["Grenzwertanalyse", "Entscheidungstabellentest", "Äquivalenzklassenbildung", "Zustandsübergangstest"], correct: 2, explain: "Äquivalenzklassenbildung (ECP) geht davon aus, dass sich alle Werte einer Klasse gleich verhalten, daher genügt das Testen eines Repräsentanten pro Klasse." },
    { q: "Welches Testprinzip besagt, dass das wiederholte Ausführen derselben Tests irgendwann keine neuen Fehler mehr findet?", options: ["Fehlerhäufung (Defect Clustering)", "Pestizid-Paradoxon", "Trugschluss der Fehlerfreiheit", "Erschöpfendes Testen ist unmöglich"], correct: 1, explain: "Das Pestizid-Paradoxon: die Wiederverwendung derselben Tests macht sie „immun“ gegen das Finden neuer Defekte, daher müssen Tests überprüft und aktualisiert werden." },
    { q: "Eine kleine Anzahl von Modulen, die die meisten Defekte eines Systems enthalten, wird durch welches Prinzip beschrieben?", options: ["Fehlerhäufung (Defect Clustering)", "Frühes Testen spart Zeit und Kosten", "Testen ist kontextabhängig", "Pestizid-Paradoxon"], correct: 0, explain: "Fehlerhäufung (Defect Clustering) beobachtet, dass Defekte dazu neigen, sich in einer kleinen Anzahl von Modulen zu konzentrieren." },
    { q: "Welche Technik würde man verwenden, um einen „Absenden“-Button zu testen, der sich nur aktiviert, wenn alle Formularfelder ausgefüllt sind?", options: ["Fehlerraten (Error Guessing)", "Grenzwertanalyse", "Entscheidungstabellentest", "Pfadtest"], correct: 2, explain: "Der Entscheidungstabellentest bildet Kombinationen von Eingabebedingungen (welche Felder ausgefüllt sind) auf erwartete Ausgaben ab (Button aktiviert oder nicht)." },
    { q: "Was passiert im Login/PIN-Zustandsübergangsbeispiel nach 3 falschen PIN-Versuchen in Folge?", options: ["Zugriff gewährt", "Der Zähler wird auf 0 zurückgesetzt", "Konto gesperrt", "Nichts ändert sich"], correct: 2, explain: "Laut Zustandstabelle versetzen drei aufeinanderfolgende falsche Versuche das System in den Zustand „Konto gesperrt“." },
    { q: "Welche Technik beruht rein auf Testerintuition und historischen Fehlerdaten, ohne formale Schritte?", options: ["Fehlerraten (Error Guessing)", "Äquivalenzklassenbildung", "Entscheidungstabellentest", "Grenzwertanalyse"], correct: 0, explain: "Fehlerraten (Error Guessing) hat keine formalen Schritte — es hängt vollständig von der Erfahrung des Testers und dem Wissen ab, wo Fehler tendenziell auftreten." },
    { q: "Was ist die bewährte Empfehlung für die Wahl einer Testdesign-Technik?", options: ["Immer nur die Grenzwertanalyse verwenden", "Sich für Konsistenz auf eine einzige Technik verlassen", "Mehrere Techniken kombinieren, statt sich auf eine zu verlassen", "Die Technikwahl überspringen und alles erschöpfend testen"], correct: 2, explain: "Keine einzelne Technik garantiert vollständige Fehlererkennung, daher wird empfohlen, mehrere Techniken zu kombinieren." },
    { q: "Warum ist Pairwise-Testing für ein Feature mit vielen unabhängigen Eingabeparametern nützlich?", options: ["Es testet jede mögliche Kombination und garantiert damit vollständige Abdeckung", "Es deckt jedes Paar von Parameterwerten mit deutlich weniger Testfällen ab, da die meisten Defekte aus dem Zusammenspiel zweier Parameter entstehen", "Es funktioniert nur für Grenzwerte", "Es ersetzt die Äquivalenzklassenbildung vollständig"], correct: 1, explain: "Pairwise-Testing beruht auf der Beobachtung, dass die meisten Interaktionsdefekte nur zwei Parameter betreffen, daher deckt das Abdecken jedes Paares (statt jeder vollständigen Kombination) die meisten Probleme deutlich günstiger ab." },
    { q: "Woraus leitet Use-Case-Testing Testfälle ab?", options: ["Aus zufälliger Datengenerierung", "Aus dokumentierten, schrittweisen Interaktionen zwischen einem Akteur und dem System, einschließlich alternativer Abläufe/Ausnahmeabläufe", "Aus der Branch-Abdeckung des Quellcodes", "Aus den Grenzwerten eines einzelnen Eingabefelds"], correct: 1, explain: "Use-Case-Testing baut Testfälle direkt aus dem Haupterfolgsszenario und den alternativen Abläufen/Ausnahmeabläufen eines dokumentierten Anwendungsfalls und validiert einen durchgängigen Workflow aus Sicht des Nutzers." },
    { q: "Ein Altersfeld akzeptiert 18–60. Welche Menge nennt die zu testenden Grenzwerte?", options: ["18 und 60","17, 18, 19, 59, 60, 61","0, 18, 60, 100","18, 39, 60"], correct: 1, explain: "Die Grenzwertanalyse testet knapp unter, auf und knapp über jeder Grenze: 17, 18, 19 und 59, 60, 61." },
    { q: "Code: if (a > 0) { x = 1 } ohne else. Du führst nur a = 5 aus. Welche Überdeckung erreichst du?", options: ["100 % Anweisung, 100 % Zweig","100 % Anweisung, 50 % Zweig","50 % Anweisung, 50 % Zweig","0 % Zweig"], correct: 1, explain: "Jede Anweisung läuft, aber der Falsch-Zweig des if wird nie genommen, daher 50 % Zweigüberdeckung." },
    { q: "Welches Überdeckungskriterium wird typischerweise in sicherheitskritischen Bereichen wie der Luftfahrt gefordert?", options: ["Anweisungsüberdeckung","MC/DC (modifizierte Bedingungs-/Entscheidungsüberdeckung)","Pairwise-Abdeckung","Äquivalenzklassenabdeckung"], correct: 1, explain: "MC/DC zeigt, dass jede boolesche Teilbedingung das Ergebnis der Entscheidung unabhängig beeinflusst." },
    { q: "Eine Funktion hat 3 Entscheidungen. Wie hoch ist ihre zyklomatische Komplexität?", options: ["2","3","4","6"], correct: 2, explain: "Für eine einzelne Funktion gilt: zyklomatische Komplexität = Anzahl der Entscheidungen + 1 = 4, die Zahl unabhängiger Pfade." },
    { q: "Welches Abdeckungsziel ist für die meisten Projekte am praktikabelsten?", options: ["100 % Pfadüberdeckung überall","Risikoproportionale Abdeckung, mit den stärksten Kriterien nur für kritischen Code","Nur Anweisungsüberdeckung","Gar keine Abdeckungsziele"], correct: 1, explain: "Der Abdeckungsaufwand sollte zum Risiko passen: günstige ÄK/GWA breit, Pfad oder MC/DC nur für kritische Algorithmen." }
  ],
  "testing-types": [
    { q: "Was definiert eine „Art“ des Softwaretestens laut diesem Modul?", options: ["Nur das Werkzeug, mit dem es ausgeführt wird", "Eine Klassifizierung mit eigenem Ziel, eigener Strategie und eigenen Ergebnissen", "Die Programmiersprache des zu testenden Systems", "Wie lange der Test zur Ausführung braucht"], correct: 1, explain: "Eine Testart ist eine Klassifizierung — wie Accessibility Testing — mit einem spezifischen Ziel, einer Strategie und Ergebnissen." },
    { q: "Welche Kategorie gruppiert Testarten wie Unit-Testing, Branch-Testing und Path-Testing?", options: ["Funktional", "Nicht-funktional", "Strukturell (White Box)", "Änderungsbezogen"], correct: 2, explain: "Dies sind alles White-Box-/strukturelle Techniken, die die internen Codepfade eines Systems untersuchen." },
    { q: "Regressionstest und Smoke-Test gehören in der Taxonomie des Moduls am besten zu welcher Kategorie?", options: ["Spezialisiert", "Änderungsbezogen", "Strukturell", "Nicht-funktional"], correct: 1, explain: "Beide werden durch eine Änderung ausgelöst (eine Korrektur, ein neuer Build) und prüfen, dass die Änderung nichts kaputtgemacht hat — änderungsbezogen." },
    { q: "Welches davon gehört zu den kuratierten „Top 20 Testarten, die jede QA-Fachkraft kennen sollte“?", options: ["Fault-Injection-Test", "Usability-Test", "Orthogonaler Array-Test", "Modularitätsgetriebenes Testen"], correct: 1, explain: "Usability-Test ist einer der 20 wertvollen, erkennbaren Einträge, die das Modul als Ausgangspunkt hervorhebt." },
    { q: "Wie wird Accessibility Testing am besten kategorisiert?", options: ["Spezialisiert", "Strukturell", "Änderungsbezogen", "Funktional"], correct: 0, explain: "Accessibility Testing adressiert ein gezieltes, spezialisiertes Anliegen — Nutzbarkeit für Menschen mit Behinderungen." },
    { q: "Wo befindet sich in dieser App der vollständige Katalog mit über 105 Testartenbegriffen?", options: ["Nur im Text dieses Moduls", "Im Glossar", "In der Abschlussprüfung", "Er ist nicht enthalten"], correct: 1, explain: "Das Modul verlinkt zum Glossar, das den vollständigen extrahierten Katalog der Testarten enthält." },
    { q: "Warum braucht nicht-funktionales Testen einen expliziten Schwellenwert, der vor Testbeginn festgelegt wird?", options: ["Braucht es nicht — „gut genug“ ist immer offensichtlich", "Ohne einen solchen hat „wie gut“ keine Bestehens-/Fehlgrenze, nur Meinungen", "Schwellenwerte werden nur für funktionales Testen benötigt", "Schwellenwerte verlangsamen den Testprozess unnötig"], correct: 1, explain: "Eine Aussage wie „Seite lädt in unter 2 Sekunden bei 500 gleichzeitigen Nutzern“ liefert eine klare Bestehens-/Fehlgrenze — ohne einen vereinbarten Schwellenwert sind nicht-funktionale Ergebnisse nur subjektive Meinungen." },
    { q: "Warum ist Pseudo-Lokalisierung (künstlich verlängerte/akzentuierte Zeichenketten) nützlich, bevor echte Übersetzungen existieren?", options: ["Sie ersetzt die Notwendigkeit echter Übersetzung vollständig", "Sie deckt frühzeitig Layout-Brüche auf, die durch Textexpansion verursacht werden", "Sie testet die Serverleistung unter Last", "Sie prüft nur die Währungsformatierung"], correct: 1, explain: "Pseudo-Lokalisierung deckt UI-Layoutprobleme durch längeren übersetzten Text auf, bevor echte Übersetzungen überhaupt geschrieben sind, und findet so eine ganze Fehlerklasse frühzeitig." }
  ],
  "adhoc-testing": [
    { q: "Welches davon ist in diesem Tutorial KEINE anerkannte Art des Ad-hoc-Testing?", options: ["Buddy Testing", "Pair Testing", "Monkey Testing", "Regressionstest"], correct: 3, explain: "Regressionstest ist eine änderungsbezogene Testart, keine Form des Ad-hoc-Testing. Buddy-, Pair- und Monkey-Testing sind die drei behandelten Arten." },
    { q: "Ad-hoc-Testing wird am besten als welche Art von Ansatz beschrieben?", options: ["Ein White-Box-Ansatz, der Zugriff auf den Quellcode erfordert", "Ein Black-Box-Ansatz ohne vorbereitete Testfälle", "Eine automatisierte Regressionssuite", "Ein formaler, dokumentierter Zertifizierungsprozess"], correct: 1, explain: "Ad-hoc-Testing ist informell, ungescriptet und Black-Box — es werden keine Testfälle im Voraus vorbereitet." },
    { q: "Welches ist ein aufgeführtes „Wann man es durchführt“-Szenario für Ad-hoc-Testing?", options: ["Nur während der anfänglichen Anforderungserhebung", "Wenn die Zeit knapp ist", "Nur nachdem das Produkt ausgeliefert wurde", "Nie während des Beta-Testens"], correct: 1, explain: "Zeitknappheit ist einer von mehreren guten Momenten für Ad-hoc-Testing, neben früher Entwicklung, vor/nach formalem Testen, tiefer Feature-Erkundung, Usability-Prüfungen und Beta-Testing." },
    { q: "Was ist ein wichtiger Nachteil des Ad-hoc-Testing?", options: ["Es erfordert umfangreiche Dokumentation", "Es ist schwer zu reproduzieren oder zu wiederholen", "Es kann keine Grenzfall-Defekte finden", "Es ist immer langsamer als skriptbasiertes Testen"], correct: 1, explain: "Da es kein Skript oder Protokoll gibt, sind Ad-hoc-Testsitzungen schwer exakt zu reproduzieren — eine echte Schwäche bei der Nachverfolgbarkeit." },
    { q: "Welche bewährte Praxis wird für Ad-hoc-Testing empfohlen?", options: ["Fehler nicht dokumentieren, um Zeit zu sparen", "Zufällige Module ohne Risikobewertung testen", "Schlüssel-/Hochrisikomodule anvisieren und jeden gefundenen Fehler dokumentieren", "Sich nie mit einem anderen Tester zusammentun"], correct: 2, explain: "Bewährte Praktiken umfassen gutes Geschäftswissen, das Anvisieren von Hochrisikomodulen, das Dokumentieren jedes Fehlers und das Zusammenarbeiten für eine frische Perspektive." },
    { q: "Was kennzeichnet beim Monkey Testing die der Anwendung übergebene Eingabe?", options: ["Sorgfältig skriptierte Grenzwerte", "Zufällige, unstrukturierte Eingaben", "Nur gültige Äquivalenzklassen-Eingaben", "Aus einer Entscheidungstabelle generierte Eingaben"], correct: 1, explain: "Monkey Testing wirft zufällige, unstrukturierte Eingaben auf die Anwendung, um zu sehen, ob sie abstürzt." },
    { q: "Was ist ein „Bug Bash“, wie er zur Integration von Ad-hoc-Testing in Agile-Sprints verwendet wird?", options: ["Eine formale, geskriptete Regressionssuite", "Eine zeitlich begrenzte Sitzung, in der das gesamte Team gemeinsam Ad-hoc-Tests an einem Build durchführt", "Ein Meeting zur Priorisierung des Backlogs", "Ein Werkzeug zur automatischen Erzeugung von Fehlerberichten"], correct: 1, explain: "Ein Bug Bash ist eine zeitlich begrenzte (oft 30–60-minütige) Sitzung, in der das gesamte Team, nicht nur QA, gemeinsam einen Build testet — das verbreitet Produktwissen und findet Fehler, auf die individuelle Gewohnheiten nicht gestoßen wären." },
    { q: "Warum sollten selbst informelle Ad-hoc-Testsitzungen zeitlich begrenzt sein?", options: ["Zeitliche Begrenzung ist für Ad-hoc-Testing eigentlich nicht nützlich", "Sie hält die Sitzung fokussiert, statt abzuschweifen, auch ohne ein formales Skript", "Sie garantiert vollständige Testabdeckung", "Sie ersetzt die Notwendigkeit, Fehler zu protokollieren"], correct: 1, explain: "Eine festgelegte Zeitgrenze (z. B. 20 Minuten für den neuen Checkout-Flow) hält eine ungescriptete Sitzung fokussiert, obwohl es keinen formalen Testfall zum Befolgen gibt." },
    { q: "Welcher Ansatz hat im Gegensatz zum Ad-hoc-Testen zeitlich begrenzte Charters und Session-Notizen?", options: ["Monkey-Testing","Error Guessing","Exploratives Testen","Buddy-Testing"], correct: 2, explain: "Exploratives Testen ist die disziplinierte Weiterentwicklung des Ad-hoc-Testens und ergänzt Charters, Timeboxen und Notizen (SBTM)." },
    { q: "Du findest in einer Ad-hoc-Session einen Bug. Welche bewährte Praxis sollte folgen?", options: ["Ihn im Kopf behalten, um Zeit zu sparen","Ihn in einen formalen, geskripteten Testfall überführen, damit er künftig abgedeckt ist","Die Session beenden und neu beginnen","Ihn nur im nächsten Standup erwähnen"], correct: 1, explain: "Ad-hoc-Funde in geskriptete Tests zu überführen gleicht die fehlende Wiederholbarkeit des Ad-hoc-Testens aus." },
    { q: "Wofür steht das zusätzliche „I“ in der SFDIPOT-Heuristik?", options: ["Integration","Interfaces (Schnittstellen)","Inputs (Eingaben)","Infrastruktur"], correct: 1, explain: "SFDIPOT steht für Structure, Function, Data, Interfaces, Platform, Operations, Time: SFDPOT plus Interfaces." }
  ],
  "exploratory-testing": [
    { q: "Was folgt bei SBTM unmittelbar auf die Definition des Test-Charters?", options: ["Debriefing", "Ergebnisse überprüfen", "Die Sitzung zeitlich begrenzen (Time Box)", "Eine Fehlertaxonomie erstellen"], correct: 2, explain: "Die SBTM-Reihenfolge lautet: Fehlertaxonomie → Test-Charter → Sitzung zeitlich begrenzen → Ergebnisse überprüfen → Debriefing." },
    { q: "Laut der Vergleichstabelle skriptbasiert vs. explorativ wird exploratives Testen am besten beschrieben als...", options: ["Bestätigend", "Untersuchend", "Um die Kontrolle von Tests gehend", "Nur von Anforderungen geleitet"], correct: 1, explain: "Die Tabelle stellt skriptbasiertes Testen (bestätigend) explorativem Testen (untersuchend) gegenüber." },
    { q: "Beim explorativen Testen finden Testdesign und Testausführung...", options: ["In strikt getrennten Phasen statt, Design zuerst", "Gleichzeitig statt", "Nur nach dem Ausliefern des Produkts statt", "Nur von Entwicklern statt, nie von Testern"], correct: 1, explain: "Exploratives Testen zeichnet sich durch gleichzeitiges Testdesign und -ausführung aus — eine „denkende“ Aktivität aus Untersuchung und Lernen." },
    { q: "Was wird als Nachteil des explorativen Testens aufgeführt?", options: ["Es erfordert umfangreiche Dokumentation im Voraus", "Es ist schwer, die Abdeckung zu messen", "Es kann sich nicht an ändernde Anforderungen anpassen", "Es findet nie neue Fehler"], correct: 1, explain: "Da Sitzungen nicht vorab geskriptet sind, ist es schwierig, die genaue Abdeckung zu messen und Sitzungen exakt zu reproduzieren." },
    { q: "Wann wird explorative Tests laut diesem Modul besonders empfohlen?", options: ["Nur bei vollständig dokumentierten, stabilen Anforderungen", "Wenn Anforderungen fehlen oder mehrdeutig sind", "Nur bei strikten regulatorischen/Compliance-Audits", "Nur für Tester ohne Fachwissen"], correct: 1, explain: "Explorative Tests glänzen, wenn Anforderungen fehlen/mehrdeutig sind, in frühen Iterationen, bei kritischen Apps, die tiefgehende Untersuchung benötigen, und mit erfahrenen Testern." },
    { q: "Welcher Satz aus der Vergleichstabelle beschreibt skriptbasiertes Testen?", options: ["Wie ein spontanes Gespräch", "Der Geist des Testers hat die Kontrolle", "Wie das Vorlesen einer Rede von einem Entwurf", "Um die Verbesserung des Testdesigns gehend"], correct: 2, explain: "Skriptbasiertes Testen ist „wie das Vorlesen einer Rede von einem Entwurf“ — das Skript hat die Kontrolle, im Gegensatz zum spontanen Gespräch des explorativen Testens." },
    { q: "Wofür steht das „O“ in der SFDPOT-Heuristik?", options: ["Objectives (Ziele)", "Output (Ausgabe)", "Operations — wie das Produkt tatsächlich in der realen Welt genutzt wird", "Optimization (Optimierung)"], correct: 2, explain: "Das O in SFDPOT steht für Operations — wie das Produkt tatsächlich in der realen Welt genutzt wird, einschließlich untypischer Nutzung, nicht nur seiner dokumentierten Funktion." },
    { q: "Welche Frage hilft „User expectations“ in der HICCUPPS-Oracle-Heuristik einem Tester zu beantworten?", options: ["Ob der Code fehlerfrei kompiliert", "Ob ein beobachtetes Verhalten ein Fehler ist, indem geprüft wird, ob es dem entspricht, was ein vernünftiger Nutzer erwarten würde", "Wie schnell das System unter Last antwortet", "Mit welchem Browser der Test durchgeführt wurde"], correct: 1, explain: "HICCUPPS ist eine Reihe von Oracle-Heuristiken, um zu entscheiden, ob unerwartetes Verhalten als Fehler zählt, wenn es keine explizite Spezifikation zum Abgleich gibt — „Nutzererwartungen“ fragt, ob es dem entspricht, was ein vernünftiger Nutzer erwarten würde." },
    { q: "Welche Aussage unterscheidet exploratives Testen am besten von Ad-hoc-Testen?", options: ["Sie sind dasselbe","Exploratives Testen ergänzt die Freiheit des Testers um Mission, Timebox, Risikofokus, Notizen und Nacharbeit; Ad-hoc-Testen hat keine vorgegebene Struktur oder Zielsetzung","Ad-hoc-Testen nutzt immer einen schriftlichen Charter","Exploratives Testen erfordert vollständig geskriptete Testfälle"], correct: 1, explain: "Exploratives Testen = Freiheit + Zweck + Untersuchung + Disziplin. Ad-hoc-Testen nach dem Motto „herumklicken und schauen“ ist schwer zu messen, zu wiederholen oder zu übergeben." },
    { q: "Welcher dieser Test-Charter ist der SCHWÄCHSTE?", options: ["Login testen.","Den Login-Ablauf auf Authentifizierungsfehler, ungewöhnliche Eingaben, Session-Handling und Fehlermeldungen erkunden.","Login mit ungültigen, Grenz- und ungewöhnlichen Zugangsdaten erkunden, mit Fokus auf Sperrung und Session-Verhalten.","Registrierungsvalidierung, doppelte Konten, Grenzdaten und Fehlerbehandlung erkunden."], correct: 0, explain: "„Login testen“ nennt weder Ziel, Risiko noch Fokus. Ein guter Charter sagt, was erkundet und gelernt werden soll, ohne jeden Klick vorzuschreiben." },
    { q: "Was ist laut ISTQB ein Test-Charter?", options: ["Ein detailliertes Schritt-für-Schritt-Skript mit erwarteten Ergebnissen","Eine Aussage über Testziele und ggf. Testideen, wie getestet werden soll","Ein vom Kunden unterschriebener Vertrag","Eine Liste automatisierter Regressionstests"], correct: 1, explain: "Ein Charter gibt einer Session Richtung und Fokus, ohne jede Aktion vorzuschreiben." },
    { q: "Wie lange sind explorative Sessions laut ISTQB-Lehrplan Advanced Agile Tester üblicherweise zeitlich begrenzt?", options: ["5–10 Minuten","60–120 Minuten","Einen ganzen Arbeitstag","Es gibt nie ein Zeitlimit"], correct: 1, explain: "Sessions dauern üblicherweise etwa 60–120 Minuten, werden von einem Charter gesteuert und mit Notizen, Screenshots, Abdeckung und Anomalien dokumentiert." },
    { q: "Wie unterscheidet sich Error Guessing vom explorativen Testen?", options: ["Error Guessing sagt wahrscheinliche Probleme aus Erfahrung voraus; exploratives Testen untersucht fortlaufend und passt sich dem Gelernten an","Error Guessing ist eine White-Box-Technik","Exploratives Testen nutzt nie Erfahrung","Sie sind identisch"], correct: 0, explain: "Error Guessing = wahrscheinliche Probleme vorhersagen. Exploratives Testen = fortlaufend untersuchen und anpassen. Error Guessing wird oft innerhalb einer explorativen Session eingesetzt." },
    { q: "Welche drei Techniken fasst ISTQB CTFL als erfahrungsbasiert zusammen?", options: ["Grenzwertanalyse, Äquivalenzklassen, Entscheidungstabellen","Checklistenbasiertes Testen, Error Guessing, exploratives Testen","Unit-, Integrations-, Systemtest","Anweisungs-, Zweig-, Pfadabdeckung"], correct: 1, explain: "Checklistenbasiertes Testen, Error Guessing und exploratives Testen beruhen alle auf Erfahrung, Wissen und Intuition des Testers." },
    { q: "In einer Session zeigt die UI bei doppelter Registrierung einen generischen Fehler, die API liefert aber HTTP 500. Was ist der beste nächste Schritt?", options: ["Ignorieren; die UI hat es abgefangen","Stoppen, reproduzieren, isolieren (z. B. die API direkt aufrufen), dann Belege sichern und den Defekt melden","Die Session von vorn beginnen","Das Feature als bestanden markieren"], correct: 1, explain: "Wenn etwas Ungewöhnliches passiert: stoppen → reproduzieren → isolieren → ausweiten → vergleichen, dann mit Belegen melden. Ein 5xx bei fehlerhafter Client-Eingabe ist ein Defekt." },
    { q: "Welche Formel liegt der risikobasierten Priorisierung im explorativen Testen zugrunde?", options: ["Risiko = Kosten + Zeit","Risiko = Eintrittswahrscheinlichkeit × Auswirkung","Risiko = Bugs ÷ Tests","Risiko = Abdeckung × Geschwindigkeit"], correct: 1, explain: "Konzentriere die Exploration dort, wo Fehler wahrscheinlich und schädlich sind: Auth, Zahlungen, personenbezogene Daten, Mandantenisolation, Löschung, Nebenläufigkeit, Integrationen." },
    { q: "Eine Bestellung durchläuft Draft → Submitted → Approved → Completed. Welcher Test ist für die Zustandsexploration nützlich?", options: ["Nur einmal den Happy Path testen","Ungültige Übergänge wie Completed → Draft oder Approved → Submitted versuchen","Nur die Farben der Seite prüfen","Zustände überspringen; sie enthalten keine Bugs"], correct: 1, explain: "Zustandsexploration fragt, welche Zustände ein Objekt erreichen kann, und versucht dann ungültige Übergänge, die das System ablehnen sollte." },
    { q: "Die Exploration zeigt, dass ein Doppelklick auf Speichern zwei Kontakte anlegt. Was sollte nach der Behebung passieren?", options: ["Nichts; Exploration kann keine Automatisierung speisen","Einen Regressionstest ergänzen (z. B. einen Playwright-Check, dass die Kontaktanzahl 1 ist), damit der Defekt nicht zurückkehrt","Den Bug-Report löschen","Dieselbe explorative Session ewig wiederholen"], correct: 1, explain: "Exploration entdeckt Verhalten; Automatisierung schützt dann das stabile, wichtige Verhalten, das sie gefunden hat." },
    { q: "Was ist das aussagekräftigste Maß für den Wert einer explorativen Session?", options: ["Anzahl der Klicks","Anzahl der Screenshots","Welche wichtigen Informationen die Session geliefert hat: Defekte, Risiken, Fragen und Abdeckung","Wie lange der Tester eingeloggt war"], correct: 2, explain: "Aktivität zu zählen misst keine Testqualität. Frage, welche wichtigen Informationen die Session geliefert hat und was unbekannt bleibt." },
    { q: "Was bedeutet „Done“ für eine explorative Session?", options: ["Alles ist getestet","Der Charter wurde bearbeitet und das Team kann erklären, was gelernt wurde und was unbekannt bleibt","Es wurden keine Defekte gefunden","Die Timebox ist abgelaufen, unabhängig von Notizen"], correct: 1, explain: "Done bedeutet, dass die Mission untersucht wurde, Funde, Belege und Fragen festgehalten und nicht abgedeckte Bereiche sowie Nacharbeit benannt wurden, nicht dass alles getestet wurde." },
    { q: "Wo passt exploratives Testen typischerweise in eine CI/CD-Pipeline?", options: ["Es ersetzt Unit-Tests","Nachdem die automatisierten Prüfungen eine Testumgebung bereitgestellt haben, als adaptive menschliche Untersuchung vor Regression und Release","Erst nach dem Release in Produktion","Es passt nicht in CI/CD"], correct: 1, explain: "CI/CD-Automatisierung liefert schnelles, wiederholbares Feedback; exploratives Testen ergänzt adaptive menschliche Untersuchung am bereitgestellten Build." },
    { q: "Welcher ist ein häufiger Fehler beim explorativen Testen?", options: ["Einen Charter verwenden","Die Session zeitlich begrenzen","Einen zu restriktiven Charter schreiben, der den Tester daran hindert, nützlichen Entdeckungen zu folgen","Belege während der Session sichern"], correct: 2, explain: "Ein Charter sollte die Mission definieren, nicht jeden Klick. Ist er zu restriktiv, kann sich die Exploration nicht anpassen." },
    { q: "Bei der Exploration fällt dir auf, dass eine Seite mit jeder Wiederholung einer Aktion langsamer wird. Was sollte folgen?", options: ["Die Performance-Tests für erledigt erklären","Es als Signal werten und mit einem kontrollierten Performance-Test nachfassen (z. B. JMeter oder k6)","Ignorieren; exploratives Testen deckt Performance nicht ab","Es nur als Usability-Defekt melden"], correct: 1, explain: "Exploration ersetzt keine Performance-Tests, kann aber verdächtige Signale erkennen, die einen kontrollierten Test mit geeigneten Werkzeugen rechtfertigen." } // __EXPL_V2__
  ],
  "rest-api-testing": [
    { q: "Welche HTTP-Methode erstellt sowohl eine neue Entität ALS AUCH kann eine bestehende aktualisieren?", options: ["GET", "POST", "PUT", "DELETE"], correct: 2, explain: "PUT kann je nachdem, ob die Ressource bereits existiert, eine neue Entität erstellen oder eine bestehende aktualisieren." },
    { q: "Welche HTTP-Methode sollte niemals Nebenwirkungen auf Serverdaten haben?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0, explain: "GET dient rein dem Abrufen von Daten über eine URI und sollte keine Nebenwirkungen auf serverseitige Daten haben." },
    { q: "Wofür steht REST?", options: ["Reliable State Transfer", "Representational State Transfer", "Remote Endpoint Service Testing", "Redundant State Transmission"], correct: 1, explain: "REST steht für Representational State Transfer, einen architektonischen Stil für Webdienste." },
    { q: "Welche HTTP-Methode wird typischerweise für Formularübermittlungen und Datei-Uploads verwendet, die neue Daten erstellen?", options: ["GET", "POST", "DELETE", "HEAD"], correct: 1, explain: "POST erstellt eine neue Entität oder sendet Daten an den Server, wie z. B. Formularübermittlungen oder Datei-Uploads." },
    { q: "Welche Werkzeuge werden in diesem Modul als gängige Möglichkeiten genannt, eine REST-API zu testen?", options: ["Selenium, JMeter, LoadRunner", "Advanced REST Client, Postman, cURL", "Excel, Word, PowerPoint", "Git, Docker, Kubernetes"], correct: 1, explain: "Das Modul nennt Advanced REST Client, Postman und cURL als gängige REST-API-Testwerkzeuge." },
    { q: "Was sollte man laut dem schrittweisen Workflow nach dem Absenden einer API-Anfrage validieren?", options: ["Nur den HTTP-Statuscode", "Nur, ob der Server nicht abgestürzt ist", "Statuscode, Response-Body/Schema und Header", "Nichts — ein erfolgreicher Versand genügt"], correct: 2, explain: "Der Workflow verlangt, den Statuscode, den Response-Body bzw. das Schema sowie die Header gegen die erwarteten Ergebnisse zu validieren." },
    { q: "Welches davon wird als echte Herausforderung des API-Testings genannt?", options: ["Zu viel UI zum Durchklicken", "Nur die Ausgabe ohne eine UI zu überprüfen", "APIs benötigen nie eine Reihenfolge von Aufrufen", "Es gibt zu wenige HTTP-Methoden zur Auswahl"], correct: 1, explain: "Ohne eine UI erfordert das Überprüfen nur der Ausgabe-Antwort andere Validierungsfähigkeiten als typisches UI-Testing." },
    { q: "Was sollte beim Testen eines JWT-basierten Authentifizierungsablaufs bezüglich der Signaturvalidierung geprüft werden?", options: ["Signaturen müssen nicht geprüft werden, wenn das Token wohlgeformt aussieht", "Ein manipuliertes Token muss abgelehnt werden — der Server darf Claims nicht vertrauen, ohne die Signatur zu prüfen", "Nur der Ablauf des Tokens zählt, nicht seine Signatur", "JWTs können nicht auf Sicherheitsprobleme getestet werden"], correct: 1, explain: "Die Claims eines JWT sind nur vertrauenswürdig, wenn die Signatur verifiziert wird — ein Server, der Claims vertraut, ohne die Signatur zu prüfen, kann durch ein manipuliertes Token getäuscht werden." },
    { q: "Welches Testanliegen ist spezifisch für GraphQL und gilt nicht in gleicher Weise für typische REST-Endpunkte?", options: ["GraphQL kann kein JSON zurückgeben", "Anfragen, die exzessive oder tief verschachtelte Daten anfordern, können ein Denial-of-Service-Risiko darstellen", "GraphQL kennt kein Konzept der Authentifizierung", "GraphQL unterstützt nur GET-Anfragen"], correct: 1, explain: "Da ein GraphQL-Client in einer einzigen Query tief verschachtelte oder exzessive Daten anfordern kann, muss das Testen prüfen, ob das Schema gegen Queries geschützt ist, die den Server überlasten könnten." },
    { q: "Was ist der übliche Unterschied zwischen PUT und PATCH?", options: ["PUT löscht, PATCH erstellt","PUT ersetzt üblicherweise die gesamte Ressource; PATCH aktualisiert üblicherweise nur einige Felder","Sie sind in jeder API identisch","PATCH liefert nur Header"], correct: 1, explain: "PUT ersetzt üblicherweise eine Ressource, PATCH führt üblicherweise eine Teilaktualisierung durch — maßgeblich bleibt aber der API-Vertrag." },
    { q: "Was ist in GET /api/users/123?include=orders&page=2 die 123?", options: ["Ein Query-Parameter","Ein Header","Ein Pfadparameter","Der Request-Body"], correct: 2, explain: "123 ist Teil des URL-Pfads — ein Pfadparameter. include und page sind Query-Parameter." },
    { q: "Welchen Status liefert ein POST, der erfolgreich einen Kontakt erstellt, am typischsten?", options: ["200 OK","201 Created","204 No Content","302 Found"], correct: 1, explain: "201 Created ist die übliche Antwort auf ein erfolgreiches Create. Nimm nicht an, dass jeder Erfolg 200 ist — der erwartete Code hängt von Operation und Vertrag ab." },
    { q: "Welcher Statuscode signalisiert, dass der Client zu viele Anfragen gesendet hat (Rate Limiting)?", options: ["409","415","429","503"], correct: 2, explain: "429 Too Many Requests zeigt Rate Limiting an. 409 ist Conflict, 415 Unsupported Media Type, 503 Service Unavailable." },
    { q: "Ein Benutzername muss 3–30 Zeichen lang sein. Welche Grenzwerte solltest du testen?", options: ["Nur 3 und 30","1, 15, 50","2, 3, 4, 29, 30, 31","0 und 100"], correct: 2, explain: "Die Grenzwertanalyse testet knapp unter, auf und knapp über jeder Grenze: 2, 3, 4 und 29, 30, 31." },
    { q: "Laut Doku ist das Feld 'id' eine Ganzzahl, die API liefert es aber als String. Wie nennt man das?", options: ["Idempotenz","Contract Drift","Rate Limiting","Mandantenisolation"], correct: 1, explain: "Wenn die Implementierung nicht mehr zum dokumentierten Vertrag (OpenAPI/JSON Schema) passt, ist das Contract Drift — und es kann API-Konsumenten brechen." },
    { q: "Was ist der Unterschied zwischen Authentifizierung und Autorisierung?", options: ["Sie bedeuten dasselbe","Authentifizierung fragt, wer du bist; Autorisierung fragt, ob du die Operation ausführen darfst","Autorisierung erfolgt vor der Authentifizierung","Authentifizierung gilt nur für Admins"], correct: 1, explain: "Authentifizierung prüft die Identität; Autorisierung prüft die Berechtigung für eine bestimmte Aktion oder Ressource." },
    { q: "Nutzer A ruft GET /orders/555 auf, eine Bestellung von Nutzer B, und erhält die Daten. Welches OWASP-API-Risiko ist das?", options: ["Broken Object Level Authorization (BOLA)","Server-Side Request Forgery","Improper Inventory Management","Unsafe Consumption of APIs"], correct: 0, explain: "Auf das Objekt eines anderen Nutzers durch Ändern der ID zuzugreifen, ist Broken Object Level Authorization — Platz 1 der OWASP API Security Top 10 (2023)." },
    { q: "Ein normaler Nutzer sendet {\"isAdmin\": true} in einem Profil-Update und die API akzeptiert es. Welches OWASP-API-Risiko zeigt das?", options: ["Broken Authentication","Broken Object Property Level Authorization","Unrestricted Resource Consumption","Security Misconfiguration"], correct: 1, explain: "Privilegierte Eigenschaften wie role, isAdmin, ownerId oder tenantId ändern zu können, ist Broken Object Property Level Authorization." },
    { q: "Warum enthält der CRUD-Workflow nach jedem Schritt ein READ (CREATE → READ → UPDATE → READ → DELETE → READ)?", options: ["Um den Test zu verlangsamen","Um zu bestätigen, dass jede Operation wirklich gewirkt hat, einschließlich dass die gelöschte Ressource weg ist","Weil READ vor jedem Schreibzugriff Pflicht ist","Um Rate Limiting zu testen"], correct: 1, explain: "Jedes READ prüft, dass der vorherige Schreibzugriff den Zustand wirklich geändert hat — z. B. sollte das letzte READ nach dem DELETE 404 liefern." },
    { q: "Dasselbe DELETE oder PUT zweimal zu senden, sollte die Ressource im selben beabsichtigten Zustand lassen. Welche Eigenschaft wird getestet?", options: ["Idempotenz","Paginierung","Pseudo-Lokalisierung","Nebenläufigkeit"], correct: 0, explain: "Eine idempotente Operation erzeugt denselben Endzustand, egal wie oft sie wiederholt wird. Wiederholte POSTs sollten ebenfalls auf Duplikate geprüft werden." },
    { q: "Zwei Nutzer aktualisieren denselben Datensatz gleichzeitig, und eine Änderung verschwindet stillschweigend. Welche Art von Defekt ist das?", options: ["Ein Contract Drift","Ein verlorenes Update — ein Nebenläufigkeitsdefekt","Ein Grenzwertdefekt","Ein Caching-Header-Defekt"], correct: 1, explain: "Nebenläufigkeitstests suchen nach verlorenen Updates und Race Conditions; optimistisches Locking sollte den Konflikt erkennen (z. B. 409), statt zu überschreiben." },
    { q: "Warum nutzt man in Postman Variablen wie {{baseUrl}} und {{token}}?", options: ["Sie machen Requests schneller","Sie vermeiden fest codierte umgebungsspezifische Werte, sodass Collections in verschiedenen Umgebungen laufen","Postman verlangt, dass jeder Wert eine Variable ist","Sie verschlüsseln den Request"], correct: 1, explain: "Environment-Variablen lassen dieselbe Collection gegen Dev, Staging oder CI laufen, ohne jeden Request zu bearbeiten." },
    { q: "Warum sollte nicht jeder API-Test direkt die Datenbank abfragen?", options: ["Datenbanken lassen sich nicht testen","Es koppelt die Suite zu stark und macht sie langsamer und fragiler","APIs ändern nie den Datenbankzustand","REST verbietet es"], correct: 1, explain: "DB-Validierung ist dort wertvoll, wo sie passt, aber wenn jeder Test davon abhängt, wird die Suite langsam und fragil." },
    { q: "Welche Frage spiegelt die 'Experten'-Denkweise im API-QA wider?", options: ["Liefert sie 200?","Existiert der Endpunkt?","Was passiert, wenn zwei Nutzer sie gleichzeitig aufrufen, das Token abläuft oder die Ressource einem anderen Mandanten gehört?","Ist die URL richtig geschrieben?"], correct: 2, explain: "Fortgeschrittenes, risikobasiertes Testen fragt, was bei Nebenläufigkeit, abgelaufener Auth, fehlerhaften Eingaben, mandantenübergreifendem Zugriff, ausfallenden Abhängigkeiten und wiederholten Anfragen passiert." } // __REST_V2__
  ],
  "istqb-ctfl": [
    { q: "Welches der sieben Testprinzipien besagt, dass das wiederholte Ausführen derselben Tests irgendwann keine neuen Fehler mehr findet?", options: ["Fehlerhäufung (Defect Clustering)", "Tests nutzen sich ab", "Das Pestizid-Paradoxon ist ein Mythos", "Erschöpfendes Testen ist unmöglich"], correct: 1, explain: "„Tests nutzen sich ab“ — die wiederholte Verwendung derselben Tests macht sie zunehmend weniger effektiv beim Finden neuer Defekte." },
    { q: "Ein menschlicher Irrtum, der zu einem Mangel in einem Arbeitsergebnis führt, wird als Defekt bezeichnet. Wie wird der Irrtum selbst genannt?", options: ["Fehlerhaftigkeit (Fault)", "Ausfall (Failure)", "Fehler (Error)", "Grundursache (Root Cause)"], correct: 2, explain: "Ein Fehler (menschlicher Irrtum) bringt einen Defekt (Mangel) hervor; wird er ausgeführt, kann ein Defekt einen Ausfall (beobachtbares Fehlverhalten) verursachen. Der zugrunde liegende Grund ist die Grundursache." },
    { q: "Welche Review-Art ist am formellsten und verwendet definierte Rollen, Eingangs-/Endekriterien und Checklisten?", options: ["Informelles Review", "Walkthrough", "Technisches Review", "Inspektion"], correct: 3, explain: "Die Inspektion ist die formellste der vier Review-Arten, gefolgt von abnehmender Formalität durch Technisches Review, Walkthrough und Informelles Review." },
    { q: "Welche White-Box-Technik prüft, ob jede ausführbare Anweisung mindestens einmal ausgeführt wurde?", options: ["Zweigtest", "Anweisungstest", "Entscheidungstabellentest", "Zustandsübergangstest"], correct: 1, explain: "Anweisungstest/-abdeckung fragt, ob jede ausführbare Anweisung im Code während des Testens mindestens einmal ausgeführt wurde." },
    { q: "Beim risikobasierten Testen wird der Risikograd typischerweise aus welchen zwei Faktoren berechnet?", options: ["Kosten und Dauer", "Eintrittswahrscheinlichkeit und Auswirkung", "Schweregrad und Priorität", "Abdeckung und Komplexität"], correct: 1, explain: "Risiko = Eintrittswahrscheinlichkeit x Auswirkung. Bereiche mit höherem Risiko — wahrscheinlicher zu versagen und schädlicher, wenn sie es tun — werden priorisiert." },
    { q: "Welches Modell bevorzugt viele schnelle, niedrigstufige automatisierte Tests und weniger langsame, hochstufige UI-Tests?", options: ["Die Testquadranten", "Das V-Modell", "Die Testpyramide", "Der Fehlerlebenszyklus"], correct: 2, explain: "Die Testpyramide empfiehlt eine breite Basis schneller, niedrigstufiger automatisierter Tests (Unit) und zunehmend weniger langsamere, hochstufige Tests (Integration, UI/E2E)." },
    { q: "Welches davon wird häufig als Risiko (nicht als Vorteil) der Testautomatisierung genannt?", options: ["Wiederholbarkeit", "Objektive Ergebnisse", "Wartungskosten / falsches Sicherheitsgefühl", "Geschwindigkeit"], correct: 2, explain: "Wiederholbarkeit, objektive Ergebnisse und Geschwindigkeit sind Vorteile der Automatisierung; Wartungskosten und ein falsches Sicherheitsgefühl sind häufig genannte Risiken." },
    { q: "Welche Kategorie von Testtechniken beruht auf Testerintuition und historischen Fehlerdaten statt auf einem formalen, dokumentierten Verfahren?", options: ["Black-Box", "White-Box", "Erfahrungsbasiert", "Strukturbasiert"], correct: 2, explain: "Erfahrungsbasierte Techniken — Fehlerraten, Exploratives Testen, Checklistenbasiertes Testen — schöpfen aus Testerintuition und -historie statt aus formaler Ableitung von einer Testbasis." },
    { q: "Was unterscheidet laut Lehrplan eine Teststufe von einer Testart?", options: ["Sie sind zwei Namen für dasselbe", "Die Teststufe beschreibt, wo Testen stattfindet (z. B. Unit, System); die Testart beschreibt, was getestet wird (z. B. funktional, nicht-funktional)", "Die Testart gilt nur für agile Projekte", "Die Teststufe gilt nur für manuelles Testen"], correct: 1, explain: "Teststufen (Komponente, Integration, System, Abnahme) und Testarten (funktional, nicht-funktional, strukturell, änderungsbezogen) sind unabhängige Dimensionen — eine Testart kann auf jeder Teststufe angewendet werden." },
    { q: "Was ist der Zweck von Endekriterien in der Testplanung?", options: ["Zu entscheiden, wer am Kickoff-Meeting teilnimmt", "Die Bedingungen zu definieren, die erfüllt sein müssen, damit eine Testaktivität als abgeschlossen gilt", "Fehlern einen Schweregrad zuzuweisen", "Auszuwählen, welche HTTP-Methode getestet wird"], correct: 1, explain: "Endekriterien definieren, wann eine Testaktivität abgeschlossen ist; Eingangskriterien definieren die Bedingungen, die vor dem Start nötig sind." },
    { q: "Was ist laut der Lektion zu Lerntipps die effektivste Nutzung begrenzter Prüfungsvorbereitungszeit?", options: ["Gleich viel Zeit für jedes K-Level aufwenden", "Sich auf K2-/K3-Material konzentrieren, da dort die meisten Prüfungsfragen liegen", "Nur K1-Begriffe (Erinnern) lernen", "Die exakten Logistiktabellen des Buchs zur Prüfung auswendig lernen"], correct: 1, explain: "K1-Begriffe brauchen nur Wiedererkennung, aber K2-/K3-Material erfordert Verständnis und Anwendung — und genau dort konzentrieren sich die meisten Prüfungsfragen." },
    { q: "Welche Art von Falle stellt typischerweise eine „beste Antwort“-Ablenkerfrage?", options: ["Sie gibt eine offensichtlich falsche Antwort und drei identische richtige", "Sie liefert vier technisch wahre Aussagen, aber nur eine ist die beste Passung für das konkret beschriebene Szenario", "Sie hat überhaupt nie eine richtige Antwort", "Sie erscheint nur im Quiz zu Modul 7, nie in der echten Prüfung"], correct: 1, explain: "Eine typische ISTQB-artige Falle präsentiert mehrere technisch wahre Aussagen, aber nur eine ist die beste Antwort für das genaue gegebene Szenario — das sorgfältige Lesen des Szenarios zählt mehr als das bloße Faktenwissen." },
    { q: "Wie hoch ist die Bestehensgrenze bei CTFL v4.0?", options: ["50 % (20 von 40)","65 % (26 von 40)","75 % (30 von 40)","80 % (32 von 40)"], correct: 1, explain: "Die Bestehensgrenze liegt bei 65 %, also 26 richtigen Antworten von 40. Es gibt keine Minuspunkte." },
    { q: "Welches Kapitel von CTFL v4.0 hat die meisten Prüfungsfragen?", options: ["Kapitel 1: Grundlagen des Testens","Kapitel 3: Statischer Test","Kapitel 4: Testanalyse und -entwurf","Kapitel 6: Testwerkzeuge"], correct: 2, explain: "Kapitel 4 stellt 11 der 40 Fragen, viele davon K3-Anwendungsfragen zu Testtechniken." },
    { q: "In welchen agilen Testquadranten gehören exploratives Testen und Usability-Tests?", options: ["Q1: technologieorientiert, unterstützt das Team","Q2: geschäftsorientiert, unterstützt das Team","Q3: geschäftsorientiert, kritisiert das Produkt","Q4: technologieorientiert, kritisiert das Produkt"], correct: 2, explain: "Q3 kritisiert das Produkt aus Geschäfts- und Nutzersicht: exploratives Testen, Usability und Abnahmetest." },
    { q: "Welches CTAL-Modul konzentriert sich auf Strategie, Schätzung, Metriken und Menschen?", options: ["Test Analyst","Technical Test Analyst","Test Manager","Agile Tester"], correct: 2, explain: "Test Manager behandelt Strategie, Risiko, Schätzung, Metriken sowie Menschen und Prozessverbesserung." }
  ],
  "qa-toolbox": [
    { q: "Welches Werkzeug wird als innerhalb des Browsers laufend beschrieben, mit einer stark entwicklerorientierten Debugging-Erfahrung für JS/TS-Web-Testing?", options: ["Selenium WebDriver", "Cypress", "Appium", "REST Assured"], correct: 1, explain: "Cypress läuft im Browser selbst, was ihm im Vergleich zu WebDriver-basierten Werkzeugen eine unverwechselbare, hochgradig interaktive Debugging-Erfahrung verleiht." },
    { q: "Welches Werkzeug erweitert das WebDriver-Protokoll, um native und hybride mobile Apps zu automatisieren?", options: ["Playwright", "Robot Framework", "Appium", "k6"], correct: 2, explain: "Appium erweitert das WebDriver-Protokoll, sodass derselbe für das Web verwendete Automatisierungsansatz native und hybride mobile Apps auf iOS und Android steuern kann." },
    { q: "Welches Performance-Testing-Werkzeug skriptet Lasttests in JavaScript und ist CLI-first, für einfache CI/CD-Integration gebaut?", options: ["JMeter", "k6", "Gatling", "SoapUI"], correct: 1, explain: "k6-Skripte werden in JavaScript geschrieben und das Werkzeug ist CLI-first konzipiert, was es zu einer natürlichen Wahl für CI/CD-Pipelines macht." },
    { q: "Eine Metrik, die in der Produktion gefundene Fehler im Vergleich zu vor der Veröffentlichung abgefangenen Fehlern verfolgt, wird genannt...", options: ["Fehlerdichte (Defect Density)", "Testabdeckung", "Escape Rate", "Flakiness-Rate"], correct: 2, explain: "Die Escape Rate (entkommene Fehler) ist das schärfste Signal dafür, ob eine Teststrategie tatsächlich Probleme abfängt, bevor Nutzer es tun." },
    { q: "Warum ist eine steigende Flakiness-Rate in einer automatisierten Testsuite ein ernstes Problem, über die Fehlschläge selbst hinaus?", options: ["Sie hat keine echte Auswirkung auf das Team", "Sie untergräbt das Vertrauen in die Suite, sodass echte Fehlschläge standardmäßig ignoriert werden", "Sie bedeutet immer, dass die Anwendung eine Sicherheitslücke hat", "Sie betrifft nur manuelle Tester"], correct: 1, explain: "Sobald eine Suite als flaky bekannt ist, werden Fehlschläge standardmäßig abgetan — einschließlich echter — was den Wert der Automatisierung insgesamt leise zerstört." },
    { q: "Welches Paar sind zwei der vier in diesem Modul erwähnten DORA-Metriken?", options: ["Fehlerdichte und Escape Rate", "Lead Time for Changes und Deployment Frequency", "MTTD und Testabdeckung", "Bestehensquote und Flakiness-Rate"], correct: 1, explain: "Lead Time for Changes und Deployment Frequency sind zwei der vier DORA-Metriken; die QA-Zykluszeit ist oft ein wesentlicher Faktor für die Lead Time." },
    { q: "Was ist in einem Interview die stärkste Antwort auf „Beschreib einen Fehler, den du gefunden hast und den andere übersehen haben“?", options: ["Eine vage, allgemeine Antwort geben, um nicht angeberisch zu wirken", "Ein konkretes reales Beispiel beschreiben: was dich dorthin führte, Reproduktionsschritte, Auswirkung und Lösung", "Sagen, dass man sich an keine spezifischen Fehler erinnert", "So viele Fehlertypen wie möglich ohne Details auflisten"], correct: 1, explain: "Interviewer prüfen auf Konkretheit und echten Untersuchungsprozess, nicht auf eine dramatische Geschichte — ein konkretes Beispiel mit Reproduktionsschritten und Auswirkung sticht hervor." },
    { q: "Was ist der zentrale Unterschied zwischen Verifikation und Validierung?", options: ["Sie bedeuten exakt dasselbe", "Verifikation fragt, ob das Produkt der Spezifikation entspricht; Validierung fragt, ob es das reale Nutzerbedürfnis erfüllt", "Verifikation ist manuell, Validierung ist immer automatisiert", "Validierung gilt nur für Performance-Testing"], correct: 1, explain: "Verifikation prüft „bauen wir das Produkt richtig?“ gegen die Spezifikation; Validierung prüft „bauen wir das richtige Produkt?“ gegen das tatsächliche Nutzerbedürfnis." },
    { q: "Welche Sprache wird als natürliche Wahl beschrieben, um eine Web-App zu automatisieren, wenn deren eigenes Frontend darin geschrieben ist, sodass Tester Tooling mit Entwicklern teilen können?", options: ["Java", "SQL", "JavaScript / TypeScript", "Bash"], correct: 2, explain: "JavaScript/TypeScript ist eine natürliche Wahl zum Testen von JS/TS-Web-Apps — Tester können die Codebasis der App selbst lesen und dasselbe Tooling wie das Entwicklerteam wiederverwenden." },
    { q: "Was ist das Hauptrisiko, Testautomatisierung in einer Sprache zu schreiben, die sonst niemand im Team beherrscht?", options: ["Sie läuft langsamer als andere Sprachen", "Sie wird innerhalb eines Jahres zu einer verwaisten, ungepflegten Suite", "Sie kann nicht in CI/CD integriert werden", "Sie ist unter den meisten Open-Source-Lizenzen illegal"], correct: 1, explain: "Automatisierung ist nur so wertvoll wie die Fähigkeit des Teams, sie zu pflegen — Code, den niemand lesen oder aktualisieren kann, verfällt tendenziell und wird aufgegeben." },
    { q: "Welches Problem löst selbstheilende Testautomatisierung?", options: ["Sie schreibt ganze Testsuiten ohne menschliches Zutun", "Sie passt UI-Locators automatisch an, wenn sich das Seiten-Markup ändert, statt den Test zu brechen", "Sie behebt Fehler in der zu testenden Anwendung", "Sie ersetzt die Notwendigkeit eines QA-Teams"], correct: 1, explain: "Selbstheilende Automatisierung (z. B. Testim, Healenium) passt Element-Locators an, wenn sich das DOM ändert, sodass kleine Markup-Änderungen nicht jeden Test brechen, der dieses Element berührt." },
    { q: "Warum funktionieren exakte Abgleichsassertions beim Testen eines LLM-gestützten Features typischerweise nicht mehr?", options: ["LLMs erzeugen niemals Textausgaben", "LLM-Ausgaben sind nicht-deterministisch, sodass dieselbe Eingabe unterschiedliche gültige Ausgaben erzeugen kann", "Exakte Abgleichsassertions sind immer zu langsam", "LLMs können überhaupt nicht getestet werden"], correct: 1, explain: "Da LLM-Ausgaben selbst bei derselben Eingabe von Durchlauf zu Durchlauf variieren, verschiebt sich das Testen von exakten Abgleichsassertions hin zur rubrikbasierten Bewertung, ob die Ausgabe gut genug ist, nicht ob sie mit einem festen String identisch ist." },
    { q: "Was sollte ein Tester tun, bevor ein KI-generierter Test als fertig gilt?", options: ["Nichts — wenn er läuft und besteht, ist er fertig", "Bestätigen, dass ein Mensch verifiziert hat, dass er tatsächlich das Richtige prüft, nicht nur, dass er ausgeführt wird", "Ihn löschen und stattdessen immer manuell neu schreiben", "Nur prüfen, ob er das neueste KI-Modell verwendet"], correct: 1, explain: "KI-generierte Tests sind ein nützlicher erster Entwurf, aber nur ein Mensch kann beurteilen, ob der Test tatsächlich das für das Geschäft relevante Verhalten prüft." },
    { q: "Welchen Anteil der Accessibility-Probleme finden automatisierte Scanner (wie axe oder Lighthouse) typischerweise von sich aus?", options: ["100% — automatisiertes Scannen reicht allein aus", "Etwa 30–40% — manuelles Testen (reine Tastaturnavigation, Screenreader) ist weiterhin nötig", "0% — automatisierte Werkzeuge können Accessibility überhaupt nicht prüfen", "Genau 50%, laut WCAG-Standard"], correct: 1, explain: "Automatisierte Scanner sind hervorragend bei objektiven Prüfungen wie Kontrastverhältnissen, finden aber nur etwa 30–40% der Probleme — manuelles Testen mit Tastatur und Screenreader ist für vollständige Abdeckung weiterhin nötig." },
    { q: "Wofür stehen die Buchstaben POUR im Rahmen von WCAG?", options: ["Priority, Objective, Usability, Reliability", "Perceivable, Operable, Understandable, Robust (wahrnehmbar, bedienbar, verständlich, robust)", "Performance, Operations, Usage, Reporting", "Public, Open, Universal, Reviewed"], correct: 1, explain: "WCAG organisiert Accessibility-Anforderungen um vier Prinzipien: Inhalte müssen wahrnehmbar (Perceivable), bedienbar (Operable), verständlich (Understandable) und robust (Robust) sein." },
    { q: "Welches Verhalten kennzeichnet am besten einen Mid-Level-QA-Engineer im Vergleich zu einem Junior?", options: ["Führt vordefinierte Testfälle aus","Entwirft Testfälle selbstständig, wählt Techniken nach Risiko und verantwortet Features von Anfang bis Ende","Setzt die organisationsweite Qualitätsstrategie","Führt nur vorhandene Automatisierung aus"], correct: 1, explain: "Juniors führen klar definierte Fälle aus; Mid-Level-Engineers entwerfen selbstständig und verantworten Features; Seniors definieren die Strategie." },
    { q: "Was misst der Fehlerdurchschlupf (Defect Leakage)?", options: ["Von Entwicklern gefundene Bugs","Fehler, die in die Produktion entkommen, im Verhältnis zu den vor dem Release gefundenen","Die Anzahl doppelter Bug-Reports","Die Zeit zum Schreiben von Testcode"], correct: 1, explain: "Hoher Durchschlupf bedeutet, dass das Testen Fehler übersieht, die dann die Nutzer finden." },
    { q: "Welche dieser Kennzahlen ist eine Anti-Metrik, die falsches Verhalten fördert?", options: ["Fehlerdurchschlupf","Anforderungsabdeckung","Reine Anzahl geschriebener Testfälle","Mittlere Zeit bis zur Behebung (MTTR)"], correct: 2, explain: "Reine Testanzahlen belohnen Menge statt Wert, genau wie Zeilen Testcode oder die Bestehensquote allein." }
  ],
  "test-architecture": [
    { q: "Was ist der Hauptunterschied zwischen dem Page Object Model und dem Screenplay Pattern?", options: ["Sie sind genau dasselbe mit unterschiedlichen Namen", "POM kapselt die Locators/Aktionen jeder Seite in einer Klasse; Screenplay modelliert Tests als einen Actor mit Abilities, Tasks und Questions mittels Komposition", "Screenplay funktioniert nur für API-Testing, nicht für UI-Testing", "POM ist neuer und wird gegenüber Screenplay immer bevorzugt"], correct: 1, explain: "POM organisiert Automatisierung um Page-Klassen herum; Screenplay verwendet ein akteurzentriertes, kompositionsbasiertes Modell (Abilities, Tasks, Questions), das für große, komplexe Suiten tendenziell besser skaliert." },
    { q: "Was ist in einer geschichteten (\"hybriden\") Testautomatisierungs-Architektur der Zweck, die Datenschicht von der Logikschicht zu trennen?", options: ["Es hat keinen echten Nutzen, nur zusätzliche Dateien", "Damit eine Locator- oder Testdatenänderung nicht in die lesbaren Testfälle selbst durchschlägt", "Damit Tests auf derselben Hardware schneller laufen", "Damit nur Entwickler Tests schreiben können"], correct: 1, explain: "Das Trennen von Testfällen, Aktions-/Logikcode und Daten verhindert, dass eine Locator- oder Datenänderung die lesbare Testschicht kaputtmacht — das hält große Suiten wartbar." },
    { q: "Welches Problem lösen ephemere, bedarfsgesteuerte Testumgebungen?", options: ["Sie lassen Tests ohne jeglichen Code laufen", "Sie vermeiden das klassische Problem, dass eine geteilte QA-Umgebung durch die halbfertige Änderung eines anderen Teams blockiert wird", "Sie machen Testdaten vollständig überflüssig", "Sie ersetzen die Notwendigkeit einer Staging-Umgebung"], correct: 1, explain: "Eine frische Umgebung pro Pull Request oder Testlauf hochzufahren (über Container/Orchestrierung) vermeidet Konflikte und Flakiness, die durch eine einzige geteilte, veränderliche QA-Umgebung entstehen." },
    { q: "Was bietet Service-Virtualisierung in einer Testumgebung?", options: ["Eine echte, vollständig deployte Kopie jeder Abhängigkeit", "Einen simulierten Ersatz für eine echte Abhängigkeit, der realistische, vorgefertigte oder regelbasierte Antworten liefert", "Eine Möglichkeit, das Testen externer Integrationen ganz zu überspringen", "Eine virtuelle Maschine, um die gesamte Testsuite auszuführen"], correct: 1, explain: "Werkzeuge wie WireMock und Mountebank simulieren die Antworten einer Abhängigkeit, was Tests schneller und zuverlässiger macht, wenn eine echte Abhängigkeit teuer, riskant oder noch nicht gebaut ist." },
    { q: "Warum werden Tests in einer CI/CD-Pipeline von schnell/günstig zu langsam/teuer gestaffelt (Unit vor Integration vor E2E)?", options: ["Es ist willkürlich und spielt keine Rolle", "Damit ein defekter Build schnell fehlschlägt, statt Zeit in langsameren Stufen zu verbrennen", "Weil langsame Tests immer zuverlässiger sind", "Weil CI/CD-Werkzeuge genau diese Reihenfolge verlangen"], correct: 1, explain: "Günstige, schnelle Prüfungen zuerst zu staffeln bedeutet, dass ein defekter Build in Sekunden oder Minuten erkannt wird, statt erst nachdem eine viel längere, teurere Stufe bereits gelaufen ist." },
    { q: "Was ist ein \"Quality Gate\" in einer CI/CD-Pipeline?", options: ["Ein physischer Sicherheitskontrollpunkt für den Serverraum", "Eine automatisierte Prüfung, die einen Merge oder ein Deployment blockiert, wenn eine Bedingung (z. B. Bestehensquote, Abdeckung, Sicherheitsfunde) nicht erfüllt ist", "Ein Synonym für eine Staging-Umgebung", "Ein manueller Freigabeschritt, der nur vom QA-Lead durchgeführt wird"], correct: 1, explain: "Ein Quality Gate ist eine automatisierte Bestanden/Nicht-bestanden-Bedingung — wie eine Mindestbestehensquote oder null kritische Schwachstellen —, die den Fortschritt durch die Pipeline blockiert, wenn sie nicht erfüllt ist." },
    { q: "Was ist \"Shift-Right\"-Testing im Unterschied zu Shift-Left?", options: ["Nur unmittelbar vor einer Deadline zu testen", "Das bewusste Erweitern des Testens auf die Produktion mittels Canary-Releases, Feature Flags und synthetischem Monitoring", "Alle Tester in eine andere Zeitzone zu verlegen", "Eine Technik, um Testberichte rechtsbündig auszurichten"], correct: 1, explain: "Shift-Right ergänzt Shift-Left, indem es das Testen bis in die Produktion selbst erweitert — Canary-Releases, Feature Flags und synthetisches Monitoring validieren das Verhalten mit echtem Traffic, sicher und schrittweise." },
    { q: "Warum hört traditionelles Full-Stack-End-to-End-Testing bei Microservices-Architekturen auf, gut zu skalieren?", options: ["Microservices können überhaupt nicht getestet werden", "Die Anzahl der Service-Versions-Kombinationen wächst kombinatorisch, was vollständige E2E-Läufe langsam, flaky und teuer macht", "E2E-Tests sind für Microservices unzulässig", "Microservices haben keine APIs zum Testen"], correct: 1, explain: "Mit zunehmender Anzahl unabhängig deploybarer Dienste wird das Testen jeder Kombination end-to-end kombinatorisch teuer — deshalb existiert Contract Testing als Alternative." },
    { q: "Wie vermeidet konsumentengetriebenes Contract Testing (z. B. Pact) die Notwendigkeit einer vollständigen Integrationsumgebung?", options: ["Gar nicht — es erfordert weiterhin, jeden Dienst gemeinsam zu deployen", "Der Konsument definiert die Interaktionen, die er erwartet, und der Provider verifiziert unabhängig, dass er diesen Vertrag erfüllt, ohne dass der Konsument laufen muss", "Es ersetzt alle anderen Testformen", "Es funktioniert nur für synchrone REST-APIs, niemals für Events"], correct: 1, explain: "Jede Seite des Vertrags wird unabhängig gegen die vereinbarten Erwartungen verifiziert, wodurch breaking Changes erkannt werden, ohne die gesamte Kette von Diensten gemeinsam hochzufahren." },
    { q: "Was macht Chaos Engineering?", options: ["Löscht zufällig Produktionsdaten, um Backups zu testen", "Injiziert bewusst kontrollierte Fehler (getötete Instanzen, Netzwerklatenz, Ressourcenerschöpfung), um zu verifizieren, dass ein System anmutig degradiert statt in einen Ausfall zu kaskadieren", "Erzeugt zufällige Testdaten für Unit-Tests", "Führt absichtlich Bugs in Code ein, um neue Entwickler zu schulen"], correct: 1, explain: "Chaos Engineering (populär gemacht durch Werkzeuge wie Chaos Monkey und Gremlin) injiziert bewusst Fehler unter kontrollierten Bedingungen, um Resilienz zu verifizieren, statt auf einen unkontrollierten echten Ausfall zu warten, um dieselben Lücken zu finden." },
    { q: "Was beschreibt das \"Eistüte\"-Anti-Pattern?", options: ["Eine perfekt ausbalancierte Testsuite", "Eine Suite, die oben schwer ist mit langsamen, brüchigen UI-/E2E-Tests und zu wenigen schnellen Unit-Tests — das Gegenteil einer gesunden Testpyramide", "Ein Werkzeug zur Visualisierung von Testabdeckung", "Ein Muster zum Organisieren von Glossarbegriffen"], correct: 1, explain: "Die Eistüte ist das Gegenteil der Testpyramide (Modul 7): schwer bei langsamen, flaky, hochstufigen UI-Tests und leicht bei schnellen, günstigen Unit-Tests, was die gesamte Suite langsam und schwer wartbar macht." },
    { q: "Was ist der Zweck eines Testreporting-Werkzeugs wie Allure oder ReportPortal?", options: ["Testfälle automatisch zu schreiben", "Die Rohausgabe eines Test-Runners in lesbare, historische Dashboards zu verwandeln, die Trends über die Zeit zeigen", "Die Notwendigkeit einer CI/CD-Pipeline zu ersetzen", "Glossardefinitionen zu erzeugen"], correct: 1, explain: "Werkzeuge wie Allure und ReportPortal verwandeln rohe Bestehens-/Fehlschlagsdaten in historische, trendsichtbare Dashboards — sie zeigen, ob sich die Bestehensquote über viele Builds hinweg verbessert oder verschlechtert, nicht nur den letzten Lauf." },
    { q: "Warum ist die Erkennung flaky Tests für die Testreporting-Infrastruktur wichtig?", options: ["Sie hat keinen echten Nutzen", "Tests, die zeitweise ohne Codeänderung fehlschlagen, untergraben das Vertrauen in die Suite, wenn sie nicht markiert und behoben werden", "Sie lässt Tests automatisch schneller laufen", "Sie betrifft nur manuelles Testen, nicht Automatisierung"], correct: 1, explain: "Ein zeitweise fehlschlagender Test, der nicht als flaky markiert wird, untergräbt still das Vertrauen in die gesamte Suite, da Leute aufhören zu glauben, dass Fehlschläge etwas Reales bedeuten." },
    { q: "Was unterscheidet eine Teststrategie von einem Testkonzept (Testplan)?", options: ["Sie sind dasselbe Dokument","Eine Strategie ist stabil und organisationsweit; ein Testkonzept gilt für ein Projekt oder Release mit Umfang, Zeitplan und Eingangs-/Endekriterien","Ein Testkonzept wird nach dem Release geschrieben","Eine Strategie listet einzelne Testfälle auf"], correct: 1, explain: "Die Strategie legt das übergreifende Vorgehen und die Richtlinien fest; jedes Testkonzept wendet sie auf ein bestimmtes Projekt oder Release an." },
    { q: "Späte Builds und eine instabile Testumgebung sind Beispiele für welche Art von Risiko?", options: ["Produktrisiko","Projektrisiko","Sicherheitsrisiko","Restrisiko"], correct: 1, explain: "Projektrisiken gefährden das Testen selbst; Produktrisiken betreffen, was im Produkt schiefgehen kann." },
    { q: "Welche Technik wird häufig zur Ursachenanalyse von Fehlern eingesetzt?", options: ["Pairwise-Testen","5 Whys und Fischgräten-(Ishikawa-)Diagramme","Grenzwertanalyse","Smoke-Tests"], correct: 1, explain: "5 Whys und Fischgrätendiagramme führen vom Symptom zur eigentlichen Ursache und speisen die Prozessverbesserung." }
  ],
  "security-testing": [
    { q: "Wie unterscheidet sich die Kernfrage des Sicherheitstestens von typischem funktionalem Testen?", options: ["Sie stellen exakt dieselbe Frage", "Funktionales Testen fragt, ob der Happy Path funktioniert; Sicherheitstests fragen, was passiert, wenn jemand absichtlich versucht, die Regeln zu brechen", "Sicherheitstests gelten nur für mobile Apps", "Funktionales Testen ist immer wichtiger als Sicherheitstests"], correct: 1, explain: "Funktionales Testen verifiziert beabsichtigtes Verhalten; Sicherheitstests fragen absichtlich, was passiert, wenn ein Nutzer oder Angreifer versucht, das System dazu zu bringen, etwas zu tun, wofür es nie gedacht war." },
    { q: "Was bedeutet das Prinzip „Least Privilege“?", options: ["Jeder Nutzer sollte standardmäßig vollen Administratorzugriff haben", "Jeder Nutzer, Dienst oder Prozess sollte nur den minimal nötigen Zugriff haben, um seine Aufgabe zu erledigen", "Berechtigungen sollten nach der Vergabe nie überprüft werden", "Nur das Sicherheitsteam braucht überhaupt Zugriffskontrollen"], correct: 1, explain: "Least Privilege bedeutet, nur den minimal nötigen Zugriff zu gewähren — fast jede ernsthafte Sicherheitsverletzung beinhaltet, dass etwas mehr Zugriff hatte, als es tatsächlich brauchte." },
    { q: "Welches OWASP-Top-10-Risiko wird so beschrieben: Nutzer können außerhalb ihrer vorgesehenen Berechtigungen handeln, z. B. die Daten eines anderen Nutzers einsehen, indem sie eine ID in einer URL ändern?", options: ["Cryptographic Failures", "Broken Access Control", "Security Misconfiguration", "Server-Side Request Forgery"], correct: 1, explain: "Broken Access Control umfasst Fehler dabei, ordnungsgemäß einzuschränken, worauf ein authentifizierter Nutzer zugreifen oder was er tun kann — das klassische Beispiel ist das Ändern einer ID in einer URL, um die Daten eines anderen einzusehen." },
    { q: "Was ist der klassische Test für SQL Injection in einem Login-Feld?", options: ["Einen sehr langen zufälligen String eingeben", "Eine Payload wie ' OR '1'='1 eingeben, um zu sehen, ob sie die Logik der Abfrage verändert und die Authentifizierung umgeht", "Das Formular schnell zweimal absenden", "Das Feld komplett leer lassen"], correct: 1, explain: "Eine Payload wie ' OR '1'='1 testet, ob nicht vertrauenswürdige Eingaben unsicher in eine SQL-Abfrage verkettet werden, wodurch deren Logik verändert und die Login-Prüfung möglicherweise komplett umgangen wird." },
    { q: "Was unterscheidet Stored XSS von Reflected XSS?", options: ["Es gibt keinen echten Unterschied zwischen ihnen", "Stored XSS speichert das schädliche Skript dauerhaft (z. B. in einem Kommentar) und liefert es später anderen Nutzern aus; Reflected XSS spiegelt es sofort in einer Antwort zurück", "Reflected XSS tritt nur in mobilen Apps auf", "Stored XSS kann nicht getestet werden"], correct: 1, explain: "Stored XSS speichert das schädliche Skript irgendwo, wo es später anderen Nutzern angezeigt wird (etwa in einem Kommentarfeld); Reflected XSS spiegelt die Payload sofort in derselben Antwort zurück, oft über eine präparierte URL." },
    { q: "Was nutzt CSRF (Cross-Site Request Forgery) aus?", options: ["Eine Schwäche in der Datenbankindizierung", "Dass der Browser eines angemeldeten Nutzers dazu gebracht wird, eine unerwünschte Anfrage an eine Seite zu senden, bei der er authentifiziert ist", "Einen Fehler in der HTTPS-Verschlüsselung selbst", "Langsame Serverantwortzeiten"], correct: 1, explain: "CSRF bringt den Browser eines Opfers — bereits bei einer Zielseite authentifiziert — dazu, eine Anfrage abzusenden, die das Opfer nie beabsichtigt hat, etwa über ein unsichtbares, automatisch abgesendetes Formular." },
    { q: "Was ist der zentrale Unterschied zwischen SAST und DAST?", options: ["Es sind identische Ansätze mit unterschiedlichen Namen", "SAST durchsucht Quellcode, ohne ihn auszuführen; DAST greift eine laufende Anwendung von außen an wie ein echter Angreifer", "DAST funktioniert nur bei Datenbanken", "SAST kann nur einmal pro Jahr ausgeführt werden"], correct: 1, explain: "SAST analysiert Quellcode statisch (keine Ausführung nötig, kann bei jedem Commit laufen); DAST testet eine laufende, deployte Anwendung dynamisch von außen und findet dabei andere Problemklassen." },
    { q: "Wonach sucht SCA (Software Composition Analysis)?", options: ["Tippfehler in Code-Kommentaren", "Bekannte Schwachstellen (CVEs) in Drittanbieter-Bibliotheken und Abhängigkeiten", "CSS-Styling-Fehler", "Datenbankabfrageleistung"], correct: 1, explain: "SCA-Werkzeuge wie Snyk und OWASP Dependency-Check durchsuchen Drittanbieter-Abhängigkeiten nach bekannten, veröffentlichten Schwachstellen — und adressieren damit direkt das OWASP-Risiko „Vulnerable & Outdated Components“." },
    { q: "Was muss beim Penetrationstesten immer vorhanden sein, bevor das Testen beginnt?", options: ["Nichts — jeder kann jedes System jederzeit einem Pen Test unterziehen", "Eine unterzeichnete Vereinbarung, die den Scope festlegt, sowie eine ausdrückliche schriftliche Autorisierung", "Ein vollständig automatisiertes Scanning-Werkzeug", "Eine öffentliche Ankündigung des Tests"], correct: 1, explain: "Ohne eine unterzeichnete Vereinbarung und eine ausdrückliche Autorisierung, die den Scope festlegt, sind exakt dieselben Handlungen, die bei einem Pen Test verwendet werden, schlicht illegales, unautorisiertes Hacking." },
    { q: "Wofür steht das „R“ im STRIDE-Threat-Modeling-Framework?", options: ["Reliability", "Repudiation — abstreiten, eine Aktion durchgeführt zu haben, ohne dass sich das Gegenteil beweisen lässt", "Redundancy", "Recovery"], correct: 1, explain: "Repudiation in STRIDE bezeichnet eine Bedrohung, bei der ein Akteur abstreiten kann, eine Aktion durchgeführt zu haben, und das System keine Möglichkeit hat, das Gegenteil zu beweisen (z. B. fehlende Audit-Logs)." },
    { q: "Was bedeutet „Zero Trust“ als architektonisches/testbezogenes Prinzip?", options: ["Kein System sollte jemals getestet werden", "Nie annehmen, dass eine Anfrage sicher ist, nur weil sie von innerhalb des Netzwerkperimeters kommt — jede Anfrage wird unabhängig von ihrer Herkunft authentifiziert und autorisiert", "Jedem internen Dienst standardmäßig vertrauen", "Nur extern zugängliche APIs brauchen eine Authentifizierung"], correct: 1, explain: "Zero Trust bedeutet, dass jede Anfrage — selbst aus dem internen Netzwerk — nachweisen muss, wer sie ist und wozu sie autorisiert ist, statt allein aufgrund ihrer Herkunft automatisch vertraut zu werden." },
    { q: "Warum ist die Verifikation, dass eine „Lösche mein Konto“-Anfrage tatsächlich Daten löscht (einschließlich Backups/Replikaten), ein compliance-relevantes Testanliegen?", options: ["Es ist rein ein Performance-Testing-Anliegen", "Es betrifft Datenlöschungsrechte gemäß Regelungen wie der DSGVO", "Es ist nur für interne Testumgebungen relevant", "Es hat keinen Bezug zu Compliance"], correct: 1, explain: "DSGVO-nahe Regelungen verlangen oft, dass eine Löschanfrage eines Nutzers dessen Daten tatsächlich systemweit entfernt, einschließlich Backups gemäß ihrem Aufbewahrungsplan — das durchgängig zu testen ist ein echtes Compliance-Anliegen, keine bloße Datenhygiene-Kleinigkeit." },
    { q: "Welches Cookie-Flag verhindert, dass JavaScript ein Session-Cookie lesen kann?", options: ["Secure","HttpOnly","SameSite","Max-Age"], correct: 1, explain: "HttpOnly blockiert den Skriptzugriff (schützt vor Cookie-Diebstahl per XSS); Secure beschränkt auf HTTPS; SameSite begrenzt das Senden über Seiten hinweg." },
    { q: "Wofür wird CVSS bei der Sicherheitstriage verwendet?", options: ["Zum Scannen von Quellcode","Zur Bewertung des Schweregrads von Schwachstellen, um Korrekturen zu priorisieren","Zur Verschlüsselung ruhender Daten","Für Lasttests des Logins"], correct: 1, explain: "CVSS liefert einen standardisierten Schweregrad, hilfreich bei der Entscheidung, welche Funde einen Merge blockieren sollten." },
    { q: "Wo sollten SAST-, DAST- und Abhängigkeitsscans (SCA) im Shift-Left-Ansatz laufen?", options: ["Nur einmal vor einem großen Release","Laufend in der CI-Pipeline","Nur nach einem Sicherheitsvorfall","Nur auf den Laptops der Entwickler"], correct: 1, explain: "Laufende Scans in der CI finden Schwachstellen, auch in Bibliotheken, solange sie günstig zu beheben sind." }
  ],
  "performance-ux-automation": [
    { q: "Was ist der zentrale Unterschied zwischen Load Testing und Stress Testing?", options: ["Es handelt sich um identische Techniken mit unterschiedlichen Namen", "Load Testing prüft das Verhalten unter erwartetem Traffic; Stress Testing steigert die Last kontinuierlich über die erwarteten Werte hinaus, um herauszufinden, wo das System bricht", "Stress Testing gilt nur für mobile Apps", "Load Testing wird immer in der Produktion durchgeführt"], correct: 1, explain: "Load Testing überprüft das Verhalten bei erwartetem, realistischem Traffic; Stress Testing steigert die Last bewusst darüber hinaus, um den Breakpoint des Systems und dessen Degradationsverhalten zu finden." },
    { q: "Was erkennt Soak Testing speziell, was ein kurzer Lasttest typischerweise übersieht?", options: ["Tippfehler in der UI", "Memory Leaks und langsame Ressourcenerschöpfung, die nur über eine lange, anhaltende Dauer auftreten", "Falscher Farbkontrast", "SQL-Injection-Schwachstellen"], correct: 1, explain: "Soak Testing lässt moderate Last über viele Stunden oder Tage laufen und deckt so Memory Leaks und allmähliche Ressourcenerschöpfung auf, die ein kurzer Test schlicht nicht lange genug läuft, um sie sichtbar zu machen." },
    { q: "Warum kann die durchschnittliche Antwortzeit als Performance-Metrik für sich genommen irreführend sein?", options: ["Durchschnittswerte sind in keinem Kontext jemals nützlich", "Ein niedriger Durchschnitt kann trotzdem verbergen, dass ein bedeutender Anteil der Nutzer deutlich langsamere Antworten erlebt — deshalb werden p95-/p99-Perzentile berichtet", "Die Antwortzeit lässt sich nicht genau messen", "Der Durchschnitt ist nur beim Stress Testing relevant, nicht beim Load Testing"], correct: 1, explain: "Ein System mit einem Durchschnitt von 200ms könnte trotzdem 5% der Nutzer mehrere Sekunden warten lassen — p95-/p99-Perzentile offenbaren genau diese Erfahrung am Rand der Verteilung, die ein reiner Durchschnitt verbirgt." },
    { q: "Was ist ein „Think-Aloud-Protokoll“ beim Usability-Testing?", options: ["Eine Regel, die Testern verbietet, während einer Sitzung zu sprechen", "Den Teilnehmer bitten, seine Gedanken laut zu äußern, während er eine Aufgabe erledigt, wodurch Verwirrung sichtbar wird, die reine stille Beobachtung übersehen würde", "Eine skriptierte Liste von Fragen, die dem Nutzer wörtlich vorgelesen wird", "Ein automatisiertes Werkzeug, das UI-Text für Barrierefreiheitstests laut vorliest"], correct: 1, explain: "Bei einem Think-Aloud-Protokoll verbalisiert der Teilnehmer seine Gedanken, während er eine Aufgabe bearbeitet, und offenbart dabei Verwirrung oder Zögern, das reines Beobachten seiner Handlungen nicht zeigen würde." },
    { q: "Wie unterscheidet sich A/B-Testing von heuristischer Evaluation als UX-Methode?", options: ["Es handelt sich um dasselbe", "A/B-Testing misst tatsächliches Verhalten im großen Maßstab mit echtem Produktions-Traffic, der zwischen Varianten aufgeteilt wird, statt Expertenurteil oder einer kleinen beobachteten Sitzung", "Heuristische Evaluation erfordert mehr Nutzer als A/B-Testing", "A/B-Testing macht jede andere UX-Methode überflüssig"], correct: 1, explain: "A/B-Testing vergleicht echtes Nutzerverhalten im großen Maßstab zwischen zwei Varianten; heuristische Evaluation ist eine Expertenbewertung anhand bekannter Usability-Prinzipien — beide ergänzen sich, statt sich zu ersetzen." },
    { q: "Warum gilt ein hartkodierter fester Sleep (z. B. wait(2000)) in der Testautomatisierung als schlechte Praxis?", options: ["Er sorgt immer dafür, dass Tests bestehen, unabhängig vom Zustand der App", "Er ist entweder zu kurz (weiterhin flakig) oder zu lang (verlangsamt die Suite) — moderne Werkzeuge warten stattdessen automatisch, bis ein Element handlungsfähig wird", "Feste Sleeps sind in den meisten Automatisierungs-Frameworks nicht erlaubt", "Er betrifft nur Performance-Tests, nicht funktionale Tests"], correct: 1, explain: "Ein fester Sleep ist eine Schätzung — zu kurz, und der Test bleibt flakig; zu lang, und er verlangsamt unnötig die gesamte Suite; Auto-Waiting (in Playwright/Cypress eingebaut) wartet genau so lange wie nötig." },
    { q: "Warum ist ein Locator, der an ein data-testid-Attribut gebunden ist, in der Regel zuverlässiger als einer, der an eine CSS-Styling-Klasse gebunden ist?", options: ["data-testid-Attribute laufen schneller als CSS-Selektoren", "Eine Styling-Klasse kann sich bei einem Redesign ändern und den Test stillschweigend brechen, während ein dediziertes Test-ID-Attribut über visuelle Änderungen hinweg stabil bleibt", "CSS-Selektoren können in keinem Automatisierungs-Framework verwendet werden", "Zwischen beiden Ansätzen besteht kein wirklicher Unterschied"], correct: 1, explain: "Eine für Styling verwendete CSS-Klasse ändert sich wahrscheinlich, wenn ein Designer die Seite neu gestaltet, und bricht dadurch den Test; ein dediziertes data-testid-Attribut ist ausschließlich fürs Testen gedacht und bleibt über visuelle Redesigns hinweg stabil." },
    { q: "Warum ist Testunabhängigkeit (nicht von der Ausführung oder Reihenfolge eines anderen Tests abzuhängen) in einer automatisierten Suite wichtig?", options: ["Es spielt keine Rolle, solange am Ende alle Tests bestehen", "Reihenfolgeabhängige Tests erzeugen das häufige, schwer zu diagnostizierende Fehlerbild „funktioniert allein, schlägt in der Suite fehl“", "Unabhängige Tests laufen immer langsamer als abhängige", "Das ist nur beim manuellen Testen relevant, nicht bei der Automatisierung"], correct: 1, explain: "Ein Test, der stillschweigend vom Restzustand eines anderen Tests abhängt, kann isoliert bestehen, aber fehlschlagen, wenn er als Teil der vollständigen Suite (oder in anderer Reihenfolge) läuft — ein notorisch schwer aufzuspürender Fehler." },
    { q: "Welche Art von Werkzeug stellen BrowserStack oder Sauce Labs bereit?", options: ["KI-basierte Testfallgenerierung", "Cross-Browser-/Geräte-Cloud-Testing — Ausführung derselben Suite gegen echte Browser-/Betriebssystem-/Geräte-Kombinationen, ohne ein physisches Geräte-Lab zu betreiben", "Statische Codeanalyse für Sicherheitsschwachstellen", "Bug-Tracking und Defektmanagement"], correct: 1, explain: "BrowserStack, Sauce Labs und LambdaTest bieten Cloud-Zugriff auf echte Browser-/Betriebssystem-/Geräte-Kombinationen und vermeiden so die Kosten und den Wartungsaufwand eines physischen Geräte-Labs." },
    { q: "Welcher Trade-off ist typischerweise mit Low-Code-/Record-and-Playback-Automatisierungswerkzeugen wie Katalon Studio verbunden?", options: ["Sie können von keinem Team jemals verwendet werden", "Sie senken die Einstiegshürde für Teams ohne dedizierte Automatisierungs-Engineers, sind aber bei komplexer Logik typischerweise weniger flexibel als code-first-Frameworks", "Sie sind immer teurer als code-first-Frameworks", "Sie funktionieren nur für API-Testing, niemals für UI-Testing"], correct: 1, explain: "Low-Code-Werkzeuge machen Automatisierung für Teams ohne tiefe Programmierkenntnisse zugänglich, aber diese Zugänglichkeit geht meist zulasten der Flexibilität, die ein code-first-Framework bei komplexer Testlogik bietet." },
    { q: "Was bedeutet „Continuous Testing“, und wie hängt es mit der Pipeline-Architektur aus Modul 9 zusammen?", options: ["Die vollständige manuelle Testsuite einmal im Jahr auszuführen", "Automatisierte Tests durchgehend über die gesamte Pipeline hinweg auszuführen, nicht nur vor dem Release, sodass Feedback zu einer Änderung innerhalb von Minuten eintrifft", "Ein Synonym für exploratives Testen", "Testen, das nie ein definiertes Bestehen-/Durchfallen-Kriterium hat"], correct: 1, explain: "Continuous Testing bettet automatisierte Tests durchgehend in die CI/CD-Pipeline ein, sodass jede Änderung schnelles Feedback erhält — die Werkzeuge dieses Moduls liefern nur dann Wert, wenn sie tatsächlich in eine Pipeline eingebunden sind, die sie kontinuierlich ausführt." },
    { q: "Warum sind P95/P99-Antwortzeiten wichtiger als der Durchschnitt?", options: ["Sie sind leichter zu berechnen","Der Durchschnitt verbirgt den langsamen Rest der Anfragen, den echte Nutzer tatsächlich erleben","Durchschnitte sind in SLAs nicht erlaubt","Perzentile messen den Durchsatz"], correct: 1, explain: "Ein guter Durchschnitt kann verbergen, dass 5 % der Nutzer viele Sekunden warten. Perzentile machen diesen Rest sichtbar." },
    { q: "Welche Performance-Testart sucht nach Speicherlecks und Verschlechterung über Stunden anhaltender Last?", options: ["Spike","Stress","Soak / Dauerlast","Smoke"], correct: 2, explain: "Soak-Tests (Dauerlast) halten realistische Last lange aufrecht, um Lecks und schleichende Verschlechterung aufzudecken." },
    { q: "Welchen Anteil der Barrierefreiheitsprobleme finden automatische Werkzeuge wie axe oder Lighthouse ungefähr?", options: ["Fast 100 %","Etwa 30–40 %","Etwa 80 %","Keinen"], correct: 1, explain: "Automatische Werkzeuge finden nur einen Teil; Tastaturbedienung, Screenreader sowie Kontrast- und Fokusprüfungen müssen manuell erfolgen." },
    { q: "Ein UI-Test schlägt zufällig etwa jedes zehnte Mal fehl. Was ist die empfohlene Sofortmaßnahme?", options: ["Die ganze Suite löschen","Den flaky Test in Quarantäne nehmen, damit er kein Vertrauen mehr zerstört, und dann untersuchen","Wiederholungen hinzufügen, bis er grün ist, und ihn vergessen","Rote Builds ab jetzt ignorieren"], correct: 1, explain: "Flaky Tests lehren Menschen, Fehlschläge zu ignorieren. Sofort in Quarantäne nehmen, dann die Ursache beheben." },
    { q: "Was ist ein schlechter Kandidat für Automatisierung?", options: ["Smoke-Tests bei jedem Build","Login-Regressionsprüfungen","Eine einmalige explorative Untersuchung eines neuen Features","Eine Cross-Browser-Matrix stabiler Prüfungen"], correct: 2, explain: "Einmalige Exploration, eine volatile UI und Usability-Urteile rechtfertigen den Automatisierungsaufwand nicht." }
  ]
  },
  glossary: [
{term:"Abnahmetest (Acceptance Testing)",cat:"Functional",def:"Formales Testen, das durchgeführt wird, um festzustellen, ob ein System seine Abnahmekriterien erfüllt, und um dem Kunden zu ermöglichen zu entscheiden, ob er das System abnimmt. Wird üblicherweise vom Kunden durchgeführt."},
{term:"Accessibility-Test",cat:"Specialized",def:"Testart, die die Nutzbarkeit eines Produkts für Menschen mit Behinderungen bestimmt (gehörlos, blind, geistig behindert usw.). Der Bewertungsprozess wird von Personen mit Behinderungen durchgeführt."},
{term:"Aktiver Test (Active Testing)",cat:"General",def:"Testart, die aus dem Einbringen von Testdaten und der Analyse der Ausführungsergebnisse besteht. Wird üblicherweise vom Testteam durchgeführt."},
{term:"Agiles Testen (Agile Testing)",cat:"General",def:"Softwaretestpraxis, die den Prinzipien des Agilen Manifests folgt und das Testen aus der Perspektive der Kunden betont, die das System nutzen werden. Wird üblicherweise von den QA-Teams durchgeführt."},
{term:"Alterungstest (Age Testing)",cat:"Specialized",def:"Testart, die die Fähigkeit eines Systems bewertet, auch in Zukunft zu funktionieren. Der Bewertungsprozess wird von Testteams durchgeführt."},
{term:"Ad-hoc-Test",cat:"Functional",def:"Testen ohne Planung und Dokumentation — der Tester versucht, das System zu „brechen“, indem er dessen Funktionalität zufällig ausprobiert. Wird vom Testteam durchgeführt.",aliases:["Ad Hoc Testing"]},
{term:"Alpha-Test",cat:"Functional",def:"Eine Art des Softwaretestens, die am Standort des Entwicklers durchgeführt wird, um Fehler, Usability-Probleme und Funktionslücken zu identifizieren, bevor das Produkt für den Beta-Test freigegeben wird. Beteiligt sind interne Tester wie Entwickler und QA-Teams sowie manchmal ausgewählte Endnutzer in einer kontrollierten Umgebung."},
{term:"Assertion-Test",cat:"General",def:"Testart, die darin besteht zu überprüfen, ob Bedingungen den Produktanforderungen entsprechen. Wird vom Testteam durchgeführt."},
{term:"API-Test",cat:"Functional",def:"Testtechnik, die dem Komponententest ähnelt, da sie auf Codeebene ansetzt. API-Testing unterscheidet sich vom Komponententest darin, dass es typischerweise eine QA-Aufgabe und keine Entwickleraufgabe ist."},
{term:"All-Pairs-Test",cat:"Specialized",def:"Kombinatorische Testmethode, die alle möglichen diskreten Kombinationen von Eingabeparametern testet. Wird von den Testteams durchgeführt."},
{term:"Automatisierter Test (Automated Testing)",cat:"General",def:"Testtechnik, die Automatisierungswerkzeuge zur Steuerung des Umgebungsaufbaus, der Testausführung und der Ergebnisberichterstattung nutzt. Wird von einem Computer durchgeführt und innerhalb der Testteams eingesetzt."},
{term:"Basispfadtest (Basis Path Testing)",cat:"Structural",def:"Ein Testmechanismus, der ein logisches Komplexitätsmaß eines prozeduralen Designs ableitet und dieses als Leitfaden zur Definition einer Basis von Ausführungspfaden nutzt. Wird von Testteams bei der Definition von Testfällen verwendet."},
{term:"Abwärtskompatibilitätstest (Backward Compatibility Testing)",cat:"Specialized",def:"Testmethode, die das Verhalten der entwickelten Software mit älteren Versionen der Testumgebung überprüft. Wird vom Testteam durchgeführt."},
{term:"Beta-Test",cat:"Functional",def:"Abschließender Test vor der Freigabe einer Anwendung für kommerzielle Zwecke. Wird typischerweise von Endnutzern oder anderen durchgeführt."},
{term:"Benchmark-Test",cat:"Non-Functional",def:"Testtechnik, die repräsentative Sätze von Programmen und Daten nutzt, um die Leistung von Computer-Hardware und -Software in einer bestimmten Konfiguration zu bewerten. Wird von Testteams durchgeführt."},
{term:"Big-Bang-Integrationstest",cat:"Functional",def:"Testtechnik, bei der einzelne Programmmodule erst integriert werden, wenn alles bereit ist. Wird von den Testteams durchgeführt."},
{term:"Binärportabilitätstest (Binary Portability Testing)",cat:"Specialized",def:"Technik, die eine ausführbare Anwendung auf Portabilität über Systemplattformen und -umgebungen hinweg testet, meist zur Konformitätsprüfung mit einer ABI-Spezifikation. Wird von den Testteams durchgeführt."},
{term:"Grenzwerttest (Boundary Value Testing)",cat:"Functional",def:"Softwaretesttechnik, bei der Tests so entworfen werden, dass sie Repräsentanten von Grenzwerten enthalten. Wird von den QA-Testteams durchgeführt. Beispiel: für einen gültigen Eingabebereich von 1–10, Testwerte 0, 1, 2, 9, 10 und 11.",aliases:["Boundary Value Analysis","BVA"]},
{term:"Bottom-Up-Integrationstest",cat:"Functional",def:"Beim Bottom-up-Integrationstest werden zuerst Module auf der niedrigsten Ebene entwickelt, und andere Module, die zum „Hauptprogramm“ führen, werden nacheinander integriert und getestet. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Zweigtest (Branch Testing)",cat:"Structural",def:"Testtechnik, bei der alle Zweige im Programmquellcode mindestens einmal getestet werden. Wird vom Entwickler durchgeführt."},
{term:"Breitentest (Breadth Testing)",cat:"General",def:"Eine Testsuite, die die volle Funktionalität eines Produkts durchläuft, Features aber nicht im Detail testet. Wird von Testteams durchgeführt."},
{term:"Black-Box-Test",cat:"General",def:"Eine Softwaretestmethode, die die Funktionalität einer Anwendung ohne spezifisches Wissen über deren Code/interne Struktur überprüft. Tests basieren auf Anforderungen und Funktionalität. Wird von QA-Teams durchgeführt."},
{term:"Codebasierter Test (Code-driven Testing)",cat:"Structural",def:"Testtechnik, die Testframeworks (wie xUnit) verwendet, die die Ausführung von Unit-Tests ermöglichen, um zu bestimmen, ob verschiedene Codeabschnitte unter verschiedenen Umständen wie erwartet funktionieren. Wird von den Entwicklungsteams durchgeführt."},
{term:"Kompatibilitätstest (Compatibility Testing)",cat:"Specialized",def:"Testtechnik, die validiert, wie gut eine Software in einer bestimmten Hardware-/Software-/Betriebssystem-/Netzwerkumgebung funktioniert. Wird von den Testteams durchgeführt."},
{term:"Vergleichstest (Comparison Testing)",cat:"General",def:"Testtechnik, die die Stärken und Schwächen des Produkts mit früheren Versionen oder anderen ähnlichen Produkten vergleicht. Kann von Testern, Entwicklern, Produktmanagern oder Product Ownern durchgeführt werden."},
{term:"Komponententest (Component Testing)",cat:"Functional",def:"Testtechnik, die dem Unit-Testing ähnelt, aber mit einem höheren Integrationsgrad — das Testen erfolgt im Kontext der Anwendung statt nur einer direkten Prüfung einer spezifischen Methode. Kann von Test- oder Entwicklungsteams durchgeführt werden."},
{term:"Konfigurationstest (Configuration Testing)",cat:"Non-Functional",def:"Testtechnik, die die minimale und optimale Konfiguration von Hardware und Software sowie die Auswirkung des Hinzufügens oder Änderns von Ressourcen wie Speicher, Festplatten und CPU bestimmt. Wird üblicherweise von Performance-Testing-Ingenieuren durchgeführt."},
{term:"Bedingungsabdeckungstest (Condition Coverage Testing)",cat:"Structural",def:"Art des Softwaretestens, bei der jede Bedingung mindestens einmal auf jede Weise wahr und falsch gesetzt wird. Wird typischerweise von den Automatisierungstestteams durchgeführt."},
{term:"Konformitätstest (Compliance Testing)",cat:"Specialized",def:"Testart, die prüft, ob das System gemäß Standards, Verfahren und Richtlinien entwickelt wurde. Wird üblicherweise von externen Unternehmen durchgeführt, die eine „Certified Compliant“-Kennzeichnung anbieten."},
{term:"Nebenläufigkeitstest (Concurrency Testing)",cat:"Non-Functional",def:"Mehrbenutzertest, der darauf abzielt, die Auswirkungen des gleichzeitigen Zugriffs auf denselben Anwendungscode, dasselbe Modul oder dieselben Datenbankeinträge zu bestimmen. Wird üblicherweise von Performance-Ingenieuren durchgeführt."},
{term:"Konformanztest (Conformance Testing)",cat:"Specialized",def:"Der Prozess, zu testen, ob eine Implementierung der Spezifikation entspricht, auf der sie basiert. Wird üblicherweise von Testteams durchgeführt."},
{term:"Kontextgetriebenes Testen (Context Driven Testing)",cat:"General",def:"Eine agile Testtechnik, die kontinuierliche und kreative Bewertung von Testmöglichkeiten im Licht der potenziell aufgedeckten Information und deren Wert für die Organisation zu einem bestimmten Zeitpunkt befürwortet. Wird üblicherweise von agilen Testteams durchgeführt."},
{term:"Konvertierungstest (Conversion Testing)",cat:"General",def:"Testen von Programmen oder Verfahren, die verwendet werden, um Daten aus bestehenden Systemen für die Nutzung in Ersatzsystemen zu konvertieren. Wird üblicherweise von den QA-Teams durchgeführt."},
{term:"Entscheidungsabdeckungstest (Decision Coverage Testing)",cat:"Structural",def:"Art des Softwaretestens, bei der jede Bedingung/Entscheidung durch Setzen auf wahr/falsch ausgeführt wird. Wird typischerweise von den Automatisierungstestteams durchgeführt."},
{term:"Entscheidungstabellentest (Decision Table Testing)",cat:"General",def:"Eine strukturierte Testdesign-Technik, die Kombinationen von Eingaben (Ursachen) auf ihre erwarteten Ausgaben (Wirkungen) in einer Ursache-Wirkungs-Tabelle abbildet. Schritte: Eingaben in Zeilen auflisten, Regelkombinationen in Spalten aufzählen, die Kombinationen eintragen und das erwartete Ergebnis für jede Kombination festhalten. Beispiel: ein „Absenden“-Button, der sich nur aktiviert, wenn alle Formularfelder ausgefüllt sind."},
{term:"Destruktiver Test (Destructive Testing)",cat:"Specialized",def:"Testart, bei der Tests bis zum Versagen des Prüflings durchgeführt werden, um das strukturelle Verhalten oder Materialverhalten eines Prüflings unter verschiedenen Lasten zu verstehen. Wird üblicherweise von QA-Teams durchgeführt."},
{term:"Abhängigkeitstest (Dependency Testing)",cat:"General",def:"Testart, die die Anforderungen einer Anwendung an bereits vorhandene Software, Anfangszustände und Konfiguration untersucht, um die ordnungsgemäße Funktionalität aufrechtzuerhalten. Wird üblicherweise von Testteams durchgeführt."},
{term:"Dynamischer Test (Dynamic Testing)",cat:"General",def:"Begriff aus dem Software Engineering für das Testen des dynamischen Verhaltens von Code. Wird typischerweise von Testteams durchgeführt."},
{term:"Domänentest (Domain Testing)",cat:"Structural",def:"White-Box-Testtechnik, die prüft, dass das Programm nur gültige Eingaben akzeptiert. Wird üblicherweise von Softwareentwicklungsteams und gelegentlich von Automatisierungstestteams durchgeführt."},
{term:"Fehlerbehandlungstest (Error-Handling Testing)",cat:"Functional",def:"Softwaretestart, die die Fähigkeit des Systems bestimmt, fehlerhafte Transaktionen ordnungsgemäß zu verarbeiten. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Fehlerraten (Error Guessing)",cat:"General",def:"Eine informelle Testdesign-Technik, die sich auf die Erfahrung, Intuition und historische Fehlerdaten des Testers stützt, um wahrscheinliche Problembereiche vorherzusehen. Sie hat keine formalen Schritte und beruht auf kompetenten, erfahrenen Testern."},
{term:"End-to-End-Test",cat:"Functional",def:"Ähnlich dem Systemtest, umfasst das Testen einer vollständigen Anwendungsumgebung in einer Situation, die den realen Einsatz nachahmt, etwa die Interaktion mit einer Datenbank, die Nutzung von Netzwerkkommunikation oder gegebenenfalls die Interaktion mit anderer Hardware, Anwendungen oder Systemen. Wird von QA-Teams durchgeführt."},
{term:"Dauertest (Endurance Testing)",cat:"Non-Functional",def:"Testart, die nach Speicherlecks oder anderen Problemen sucht, die bei langanhaltender Ausführung auftreten können. Wird üblicherweise von Performance-Ingenieuren durchgeführt."},
{term:"Explorativer Test (Exploratory Testing)",cat:"Functional",def:"Black-Box-Testtechnik ohne Planung und Dokumentation, bei der Testdesign und Testausführung gleichzeitig stattfinden. Wird üblicherweise von manuellen Testern durchgeführt."},
{term:"Äquivalenzklassenbildung (Equivalence Partitioning Testing)",cat:"Functional",def:"Softwaretesttechnik, die die Eingabedaten einer Softwareeinheit in Datenpartitionen unterteilt, aus denen Testfälle abgeleitet werden können. Beispiel: gültige Bereiche 1–10 und 20–30 ergeben fünf Klassen (<1, 1–10, 11–19, 20–30, >30); Beispiel-Testwerte -2, 3, 15, 25, 45. Wird üblicherweise von den QA-Teams durchgeführt.",aliases:["Equivalence Class Partitioning","ECP"]},
{term:"Fehlerinjektionstest (Fault Injection Testing)",cat:"Specialized",def:"Element einer umfassenden Teststrategie, das es dem Tester ermöglicht, sich darauf zu konzentrieren, wie die zu testende Anwendung Ausnahmen handhaben kann. Wird von QA-Teams durchgeführt."},
{term:"Formale Verifikation (Formal Verification Testing)",cat:"Structural",def:"Der Akt, die Korrektheit der zugrunde liegenden Algorithmen eines Systems in Bezug auf eine bestimmte formale Spezifikation oder Eigenschaft mithilfe formaler mathematischer Methoden zu beweisen oder zu widerlegen. Wird üblicherweise von QA-Teams durchgeführt."},
{term:"Funktionaler Test (Functional Testing)",cat:"Functional",def:"Art des Black-Box-Testens, die ihre Testfälle auf den Spezifikationen der zu testenden Softwarekomponente basiert. Wird von Testteams durchgeführt."},
{term:"Fuzz-Test (Fuzz Testing)",cat:"Specialized",def:"Softwaretesttechnik, die den Eingaben eines Programms ungültige, unerwartete oder zufällige Daten zuführt — ein spezielles Gebiet des Mutationstestens. Fuzz-Testing wird von Testteams durchgeführt."},
{term:"Gorilla-Test (Gorilla Testing)",cat:"General",def:"Softwaretesttechnik, die sich auf das intensive Testen eines bestimmten Moduls konzentriert. Wird von Qualitätssicherungsteams durchgeführt, üblicherweise beim vollständigen Testdurchlauf."},
{term:"Gray-Box-Test",cat:"General",def:"Eine Kombination aus Black-Box- und White-Box-Testmethodik: Testen einer Software gegen ihre Spezifikation, jedoch unter Nutzung gewisser Kenntnisse ihrer internen Funktionsweise. Kann von Entwicklungs- oder Testteams durchgeführt werden."},
{term:"Glass-Box-Test",cat:"Structural",def:"Ähnlich dem White-Box-Testen, basiert auf Kenntnis der internen Logik des Codes einer Anwendung. Wird von Entwicklungsteams durchgeführt."},
{term:"GUI-Softwaretest",cat:"Functional",def:"Der Prozess des Testens eines Produkts mit grafischer Benutzeroberfläche, um sicherzustellen, dass es seinen schriftlichen Spezifikationen entspricht. Wird normalerweise von den Testteams durchgeführt."},
{term:"Globalisierungstest (Globalization Testing)",cat:"Specialized",def:"Testmethode, die die ordnungsgemäße Funktionalität des Produkts mit jeder Kultur-/Gebietsschema-Einstellung unter Verwendung jeder möglichen internationalen Eingabe überprüft. Wird vom Testteam durchgeführt."},
{term:"Hybrider Integrationstest (Hybrid Integration Testing)",cat:"Functional",def:"Testtechnik, die Top-down- und Bottom-up-Integrationstechniken kombiniert, um die Vorteile beider Testarten zu nutzen. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Integrationstest (Integration Testing)",cat:"Functional",def:"Die Phase des Softwaretestens, in der einzelne Softwaremodule zusammengeführt und als Gruppe getestet werden. Wird üblicherweise von Testteams durchgeführt."},
{term:"Schnittstellentest (Interface Testing)",cat:"Functional",def:"Testen, das durchgeführt wird, um zu bewerten, ob Systeme oder Komponenten Daten und Steuerung korrekt untereinander weitergeben. Wird üblicherweise sowohl von Test- als auch von Entwicklungsteams durchgeführt."},
{term:"Installations-/Deinstallationstest (Install/Uninstall Testing)",cat:"Specialized",def:"Qualitätssicherungsarbeit, die sich darauf konzentriert, was Kunden tun müssen, um die neue Software erfolgreich zu installieren und einzurichten. Kann vollständige, teilweise oder Upgrade-Installations-/Deinstallationsprozesse umfassen und wird typischerweise vom Softwaretestingenieur zusammen mit dem Konfigurationsmanager durchgeführt."},
{term:"Internationalisierungstest (Internationalization Testing)",cat:"Specialized",def:"Der Prozess, der sicherstellt, dass die Funktionalität eines Produkts nicht beeinträchtigt wird und alle Meldungen bei Verwendung in verschiedenen Sprachen und Gebietsschemata korrekt ausgelagert sind. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Zwischensystemtest (Inter-Systems Testing)",cat:"Functional",def:"Eine Testtechnik, die sich darauf konzentriert zu überprüfen, dass die Verbindungen zwischen Anwendungen korrekt funktionieren. Wird typischerweise von den Testteams durchgeführt."},
{term:"Schlüsselwortgetriebener Test (Keyword-driven Testing)",cat:"General",def:"Auch bekannt als tabellengetriebenes Testen oder aktionswortgetriebenes Testen, eine Softwaretestmethodik für automatisiertes Testen, die den Testerstellungsprozess in zwei getrennte Phasen aufteilt: eine Planungsphase und eine Implementierungsphase. Kann sowohl von manuellen als auch von Automatisierungstestteams verwendet werden."},
{term:"Lasttest (Load Testing)",cat:"Non-Functional",def:"Testtechnik, die Last auf ein System oder Gerät ausübt und dessen Reaktion misst. Wird üblicherweise von den Performance-Ingenieuren durchgeführt."},
{term:"Lokalisierungstest (Localization Testing)",cat:"Specialized",def:"Teil des Softwaretestprozesses, der sich darauf konzentriert, eine globalisierte Anwendung an eine bestimmte Kultur/ein Gebietsschema anzupassen. Wird normalerweise von den Testteams durchgeführt."},
{term:"Schleifentest (Loop Testing)",cat:"Structural",def:"Eine White-Box-Testtechnik, die Programmschleifen durchläuft. Wird von den Entwicklungsteams durchgeführt."},
{term:"Manuell skriptbasierter Test (Manual Scripted Testing)",cat:"General",def:"Testmethode, bei der die Testfälle vor der Ausführung vom Team entworfen und überprüft werden. Wird von manuellen Testteams durchgeführt."},
{term:"Manuelle Unterstützungstests (Manual-Support Testing)",cat:"General",def:"Testtechnik, die das Testen aller von Personen ausgeführten Funktionen bei der Datenvorbereitung und Nutzung dieser Daten durch ein automatisiertes System umfasst. Wird von Testteams durchgeführt."},
{term:"Modellbasierter Test (Model-Based Testing)",cat:"General",def:"Die Anwendung von modellbasiertem Design zur Gestaltung und Ausführung der notwendigen Artefakte für die Durchführung von Softwaretests. Wird üblicherweise von Testteams durchgeführt."},
{term:"Mutationstest (Mutation Testing)",cat:"Structural",def:"Softwaretestmethode, die den Quellcode oder Bytecode eines Programms in kleinen Schritten verändert, um Codeabschnitte zu testen, die während der normalen Testausführung selten oder nie erreicht werden. Wird normalerweise von Testern durchgeführt."},
{term:"Modularitätsgetriebener Test (Modularity-driven Testing)",cat:"General",def:"Softwaretesttechnik, die die Erstellung kleiner, unabhängiger Skripte erfordert, die Module, Abschnitte und Funktionen der zu testenden Anwendung repräsentieren. Wird üblicherweise vom Testteam durchgeführt."},
{term:"Nicht-funktionaler Test (Non-functional Testing)",cat:"Non-Functional",def:"Testtechnik, die sich darauf konzentriert, eine Softwareanwendung auf ihre nicht-funktionalen Anforderungen zu testen. Kann von Performance-Ingenieuren oder von manuellen Testteams durchgeführt werden."},
{term:"Negativtest (Negative Testing)",cat:"General",def:"Auch bekannt als „Test to Fail“ — Testmethode, deren Ziel es ist zu zeigen, dass eine Komponente oder ein System nicht funktioniert. Wird von manuellen oder automatisierten Testern durchgeführt."},
{term:"Betriebstest (Operational Testing)",cat:"Non-Functional",def:"Testtechnik, die durchgeführt wird, um ein System oder eine Komponente in ihrer Betriebsumgebung zu bewerten. Wird üblicherweise von Testteams durchgeführt."},
{term:"Orthogonaler Array-Test (Orthogonal Array Testing)",cat:"Specialized",def:"Systematische, statistische Testmethode, die im Benutzeroberflächentest, Systemtest, Regressionstest, Konfigurationstest und Performance-Test angewendet werden kann. Wird vom Testteam durchgeführt."},
{term:"Pair Testing",cat:"Functional",def:"Softwareentwicklungstechnik, bei der zwei Teammitglieder gemeinsam an einer Tastatur die Softwareanwendung testen. Einer testet, der andere analysiert oder überprüft das Testen. Dies kann zwischen einem Tester und einem Entwickler oder Business-Analysten stattfinden, oder zwischen zwei Testern, die sich beim Tastaturführen abwechseln."},
{term:"Passiver Test (Passive Testing)",cat:"General",def:"Testtechnik, die aus der Überwachung der Ergebnisse eines laufenden Systems besteht, ohne spezielle Testdaten einzuführen. Wird vom Testteam durchgeführt."},
{term:"Paralleltest (Parallel Testing)",cat:"Change-Related",def:"Testtechnik, deren Zweck es ist sicherzustellen, dass eine neue Anwendung, die ihre ältere Version ersetzt hat, korrekt installiert wurde und läuft. Wird vom Testteam durchgeführt."},
{term:"Pfadtest (Path Testing)",cat:"Structural",def:"Typisches White-Box-Testen, dessen Ziel es ist, das Abdeckungskriterium für jeden logischen Pfad durch das Programm zu erfüllen. Wird üblicherweise vom Entwicklungsteam durchgeführt."},
{term:"Penetrationstest (Penetration Testing)",cat:"Specialized",def:"Testmethode, die die Sicherheit eines Computersystems oder Netzwerks bewertet, indem sie einen Angriff aus einer böswilligen Quelle simuliert. Wird üblicherweise von spezialisierten Penetrationstest-Unternehmen durchgeführt."},
{term:"Performance-Test (Performance Testing)",cat:"Non-Functional",def:"Funktionales Testen, das durchgeführt wird, um die Einhaltung spezifizierter Leistungsanforderungen durch ein System oder eine Komponente zu bewerten. Wird üblicherweise vom Performance-Ingenieur durchgeführt."},
{term:"Qualifikationstest (Qualification Testing)",cat:"Change-Related",def:"Testen gegen die Spezifikationen der vorherigen Version, üblicherweise vom Entwickler für den Kunden durchgeführt, um zu demonstrieren, dass die Software ihre spezifizierten Anforderungen erfüllt."},
{term:"Ramp-Test (Ramp Testing)",cat:"Non-Functional",def:"Testart, bei der ein Eingangssignal kontinuierlich erhöht wird, bis das System zusammenbricht. Kann vom Testteam oder vom Performance-Ingenieur durchgeführt werden."},
{term:"Regressionstest (Regression Testing)",cat:"Change-Related",def:"Art des Softwaretestens, die darauf abzielt, Softwarefehler nach Änderungen am Programm (z. B. Fehlerbehebungen oder neue Funktionalität) durch erneutes Testen des Programms aufzudecken. Wird von den Testteams durchgeführt."},
{term:"Wiederherstellungstest (Recovery Testing)",cat:"Non-Functional",def:"Testtechnik, die bewertet, wie gut sich ein System von Abstürzen, Hardwareausfällen oder anderen katastrophalen Problemen erholt. Wird von den Testteams durchgeführt."},
{term:"Anforderungstest (Requirements Testing)",cat:"Functional",def:"Testtechnik, die validiert, dass Anforderungen korrekt, vollständig, eindeutig und logisch konsistent sind, und die Gestaltung eines notwendigen und ausreichenden Satzes von Testfällen aus diesen Anforderungen ermöglicht. Wird von QA-Teams durchgeführt."},
{term:"Sicherheitstest (Security Testing)",cat:"Specialized",def:"Ein Prozess, um festzustellen, dass ein Informationssystem Daten schützt und die Funktionalität wie beabsichtigt aufrechterhält. Kann von Testteams oder von spezialisierten Sicherheitstestunternehmen durchgeführt werden."},
{term:"Sanity-Test (Sanity Testing)",cat:"Change-Related",def:"Testtechnik, die bestimmt, ob eine neue Softwareversion gut genug funktioniert, um sie für einen größeren Testaufwand anzunehmen. Wird von den Testteams durchgeführt."},
{term:"Szenariotest (Scenario Testing)",cat:"Functional",def:"Testaktivität, die Szenarien auf Basis einer hypothetischen Geschichte nutzt, um einer Person zu helfen, ein komplexes Problem oder System für eine Testumgebung durchzudenken. Wird von den Testteams durchgeführt."},
{term:"Skalierbarkeitstest (Scalability Testing)",cat:"Non-Functional",def:"Teil der Reihe nicht-funktionaler Tests, der eine Softwareanwendung testet, um ihre Fähigkeit zur Skalierung zu messen — sei es die unterstützte Nutzerlast, die Anzahl der Transaktionen, das Datenvolumen usw. Wird vom Performance-Ingenieur durchgeführt."},
{term:"Anweisungstest (Statement Testing)",cat:"Structural",def:"White-Box-Testen, das das Kriterium erfüllt, dass jede Anweisung in einem Programm während des Programmtestens mindestens einmal ausgeführt wird. Wird üblicherweise vom Entwicklungsteam durchgeführt."},
{term:"Statischer Test (Static Testing)",cat:"General",def:"Eine Form des Softwaretestens, bei der die Software nicht tatsächlich verwendet wird. Sie prüft hauptsächlich die Sinnhaftigkeit von Code, Algorithmus oder Dokument. Wird vom Entwickler eingesetzt, der den Code geschrieben hat."},
{term:"Stabilitätstest (Stability Testing)",cat:"Non-Functional",def:"Testtechnik, die versucht festzustellen, ob eine Anwendung abstürzen wird. Wird üblicherweise vom Performance-Ingenieur durchgeführt."},
{term:"Smoke-Test (Smoke Testing)",cat:"Change-Related",def:"Testtechnik, die alle grundlegenden Komponenten eines Softwaresystems überprüft, um sicherzustellen, dass sie ordnungsgemäß funktionieren. Typischerweise wird Smoke-Testing vom Testteam unmittelbar nach der Erstellung eines Software-Builds durchgeführt."},
{term:"Speichertest (Storage Testing)",cat:"Non-Functional",def:"Testart, die überprüft, dass das zu testende Programm Datendateien in den richtigen Verzeichnissen speichert und ausreichend Speicherplatz reserviert, um einen unerwarteten Abbruch durch Platzmangel zu verhindern. Wird üblicherweise vom Testteam durchgeführt."},
{term:"Stresstest (Stress Testing)",cat:"Non-Functional",def:"Testtechnik, die ein System oder eine Komponente an oder über die Grenzen seiner spezifizierten Anforderungen hinaus bewertet. Wird üblicherweise vom Performance-Ingenieur durchgeführt."},
{term:"Struktureller Test (Structural Testing)",cat:"Structural",def:"White-Box-Testtechnik, die die interne Struktur eines Systems oder einer Komponente berücksichtigt und sicherstellt, dass jede Programmanweisung ihre beabsichtigte Funktion erfüllt. Wird üblicherweise von den Softwareentwicklern durchgeführt."},
{term:"Systemtest (System Testing)",cat:"Functional",def:"Der Prozess des Testens eines integrierten Hardware- und Softwaresystems, um zu überprüfen, dass das System seine spezifizierten Anforderungen erfüllt. Wird von den Testteams sowohl in Entwicklungs- als auch in Zielumgebungen durchgeführt."},
{term:"Systemintegrationstest",cat:"Functional",def:"Testprozess, der die Koexistenz eines Softwaresystems mit anderen prüft. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Top-Down-Integrationstest",cat:"Functional",def:"Testtechnik, die an der Spitze einer Systemhierarchie bei der Benutzeroberfläche beginnt und Stubs verwendet, um von oben nach unten zu testen, bis das gesamte System implementiert ist. Wird von den Testteams durchgeführt."},
{term:"Thread-Test (Thread Testing)",cat:"Functional",def:"Eine Variante der Top-down-Testtechnik, bei der die fortschreitende Integration von Komponenten der Implementierung von Teilmengen der Anforderungen folgt. Wird üblicherweise von den Testteams durchgeführt."},
{term:"Upgrade-Test (Upgrade Testing)",cat:"Change-Related",def:"Testtechnik, die überprüft, ob mit älteren Versionen erstellte Assets ordnungsgemäß verwendet werden können und die Nutzererfahrung nicht beeinträchtigt wird. Wird von den Testteams durchgeführt."},
{term:"Komponententest (Unit Testing)",cat:"Structural",def:"Methode zur Softwareverifikation und -validierung, bei der ein Programmierer prüft, ob einzelne Quellcode-Einheiten einsatzbereit sind. Wird üblicherweise vom Entwicklungsteam durchgeführt."},
{term:"Benutzeroberflächentest (User Interface Testing)",cat:"Functional",def:"Testart, die durchgeführt wird, um zu prüfen, wie benutzerfreundlich die Anwendung ist. Wird von Testteams durchgeführt."},
{term:"Usability-Test",cat:"Non-Functional",def:"Testtechnik, die die Leichtigkeit überprüft, mit der ein Nutzer den Umgang mit einem System oder einer Komponente erlernen, Eingaben vorbereiten und Ausgaben interpretieren kann. Wird üblicherweise von Endnutzern durchgeführt."},
{term:"Volumentest (Volume Testing)",cat:"Non-Functional",def:"Testen, das bestätigt, dass alle Werte, die im Laufe der Zeit groß werden können (wie akkumulierte Zähler, Logs und Datendateien), vom Programm bewältigt werden können, ohne dass das Programm aufhört zu funktionieren oder seinen Betrieb in irgendeiner Weise beeinträchtigt. Wird üblicherweise vom Performance-Ingenieur durchgeführt."},
{term:"Schwachstellentest (Vulnerability Testing)",cat:"Specialized",def:"Testart, die sich mit Anwendungssicherheit befasst und darauf abzielt, Probleme zu verhindern, die die Integrität und Stabilität der Anwendung beeinträchtigen könnten. Kann von internen Testteams durchgeführt oder an spezialisierte Unternehmen ausgelagert werden."},
{term:"White-Box-Test",cat:"Structural",def:"Testtechnik, die auf Kenntnis der internen Logik des Codes einer Anwendung basiert und Tests wie die Abdeckung von Codeanweisungen, Zweigen, Pfaden und Bedingungen umfasst. Wird von Softwareentwicklern durchgeführt."},
{term:"Workflow-Test (Workflow Testing)",cat:"Functional",def:"Skriptbasierte End-to-End-Testtechnik, die spezifische Workflows dupliziert, die vom Endnutzer voraussichtlich genutzt werden. Wird üblicherweise von Testteams durchgeführt."},
{term:"Buddy Testing",cat:"General",def:"Zwei Tester (oft ein Entwickler + ein Tester) arbeiten gemeinsam an demselben Modul und kombinieren Perspektiven. Eine Art des Ad-hoc-Testing."},
{term:"Monkey Testing",cat:"General",def:"Zufällige, unstrukturierte Eingaben werden auf die Anwendung geworfen, um zu sehen, ob sie abstürzt — der „Affe an der Tastatur“-Ansatz. Eine Art des Ad-hoc-Testing."},
{term:"Zustandsübergangstest (State Transition Testing)",cat:"General",def:"Eine Testdesign-Technik, die modelliert, wie Eingabesequenzen ein System zwischen definierten Zuständen bewegen, sodass Tester Übergänge und Ausgaben bei jedem Zustand verifizieren können. Beispiel: ein Login-System mit einer PIN — eine korrekte PIN gewährt bei jedem Versuch Zugriff; drei falsche Versuche hintereinander sperren das Konto."},
{term:"REST",cat:"Specialized",def:"Representational State Transfer — ein architektonischer Stil für die Gestaltung vernetzter Webdienste, weit verbreitet für die Kommunikation von Cloud-Diensten. RESTful-APIs werden getestet, indem HTTP-Anfragen (GET, POST, PUT, DELETE) gesendet und die Antworten validiert werden."},
{term:"SBTM",cat:"General",def:"Session-Based Test Management — ein strukturiertes Framework zur Durchführung und Berichterstattung explorativer Testsitzungen. Schritte: Fehlertaxonomie erstellen, Test-Charter definieren, Sitzung zeitlich begrenzen, Ergebnisse überprüfen, Debriefing."},
{term:"K-Level (K1-K4)",cat:"Specialized",def:"Die Skala des ISTQB-Lehrplans dafür, wie tief ein Lernziel geprüft wird: K1 = Erinnern, K2 = Verstehen, K3 = Anwenden, K4 = Analysieren. Der Foundation-Level-Lehrplan verwendet hauptsächlich K1-K3.",aliases:["K-Level"]},
{term:"Testbasis (Test Basis)",cat:"Specialized",def:"Der Wissensbestand — Anforderungen, Designs, User Stories usw. —, der als Quelle für die Ableitung von Testfällen dient."},
{term:"Testorakel (Test Oracle)",cat:"Specialized",def:"Die Quelle, die zur Bestimmung des erwarteten Ergebnisses eines Tests verwendet wird: eine Spezifikation, ein anderes System, das Wissen einer Person oder Ähnliches."},
{term:"Bestätigungstest (Confirmation Testing)",cat:"Change-Related",def:"Auch Nachtest genannt — das erneute Ausführen eines zuvor fehlgeschlagenen Tests nach einer Korrektur, um zu bestätigen, dass der Defekt behoben ist.",aliases:["Re-testing","Nachtest"]},
{term:"Eingangskriterien (Entry Criteria)",cat:"Specialized",def:"Die Bedingungen, die erfüllt sein müssen, bevor eine Testaktivität beginnen kann. Gepaart mit Endekriterien, die festlegen, wann die Aktivität als abgeschlossen gilt."},
{term:"Endekriterien (Exit Criteria)",cat:"Specialized",def:"Die Bedingungen, die erfüllt sein müssen, damit eine Testaktivität als abgeschlossen gilt. Gepaart mit Eingangskriterien, die festlegen, wann sie beginnen kann."},
{term:"Testpyramide (Test Pyramid)",cat:"Specialized",def:"Ein Modell, das viele niedrigstufige, schnelle, automatisierte Tests (Unit) und zunehmend weniger hochstufige, langsamere Tests (Integration, UI/End-to-End) empfiehlt."},
{term:"Testquadranten (Testing Quadrants)",cat:"Specialized",def:"Ein Modell, das Testarten anhand zweier Achsen einordnet: ob sie geschäftsorientiert oder technologieorientiert sind, und ob sie das Team unterstützen oder das Produkt kritisieren."},
{term:"Produktrisiko (Product Risk)",cat:"Specialized",def:"Die Möglichkeit, dass ein Arbeitsergebnis die Stakeholder-Bedürfnisse nicht erfüllen könnte. Im Gegensatz zum Projektrisiko, das die Fähigkeit des Projekts bedroht, seine Ziele zu erreichen (z. B. Zeitplan, Ressourcen)."},
{term:"Projektrisiko (Project Risk)",cat:"Specialized",def:"Ein Risiko, das die Fähigkeit eines Projekts bedroht, seine Ziele zu erreichen — wie Zeitplanverzögerungen oder Ressourcenlücken. Im Gegensatz zum Produktrisiko, das bedroht, ob das Arbeitsergebnis selbst die Stakeholder-Bedürfnisse erfüllt."},
{term:"Fehlerdichte (Defect Density)",cat:"Specialized",def:"Eine Metrik, die gefundene Fehler pro Größeneinheit misst — z. B. pro 1.000 Codezeilen oder pro Feature —, verwendet, um ungewöhnlich riskante Module zu markieren."},
{term:"Escape Rate",cat:"Specialized",def:"Der Anteil der in der Produktion gefundenen Fehler im Vergleich zu den vor der Veröffentlichung abgefangenen. Ein wichtiges Signal dafür, ob eine Teststrategie tatsächlich funktioniert.",aliases:["Escaped Defects","Entkommene Fehler"]},
{term:"Flakiness-Rate",cat:"Specialized",def:"Der Anteil automatisierter Tests, die zeitweise ohne zugrunde liegende Codeänderung fehlschlagen. Eine steigende Flakiness-Rate untergräbt das Vertrauen in eine Testsuite, da echte Fehlschläge standardmäßig abgetan werden."},
{term:"MTTD / MTTR",cat:"Specialized",def:"Mittlere Zeit bis zur Erkennung und mittlere Zeit bis zur Behebung — wie schnell ein Defekt oder Vorfall gefunden wird, sobald er existiert, und wie schnell er danach behoben wird."},
{term:"DORA-Metriken",cat:"Specialized",def:"Vier Metriken der DevOps Research and Assessment-Gruppe zur Messung der Softwareauslieferungsleistung: Deployment Frequency, Lead Time for Changes, Change Failure Rate und Time to Restore Service."},
{term:"Shift-Left-Testing",cat:"Specialized",def:"Die Praxis, Testaktivitäten früher im Entwicklungslebenszyklus zu verschieben — z. B. Tester bereits bei Anforderungen und Design einzubeziehen — statt erst nach abgeschlossener Implementierung."},
{term:"Verifikation vs. Validierung",cat:"Specialized",def:"Verifikation fragt, ob ein Produkt gemäß seiner Spezifikation gebaut wurde („bauen wir das Produkt richtig?“); Validierung fragt, ob es das tatsächliche Nutzerbedürfnis erfüllt („bauen wir das richtige Produkt?“)."},
{term:"Selbstheilende Testautomatisierung",cat:"Specialized",def:"KI-unterstützte Automatisierung, die UI-Element-Locators automatisch anpasst, wenn sich das zugrunde liegende Seiten-Markup ändert, sodass Tests nicht bei jeder kleinen DOM-Änderung kaputtgehen."},
{term:"Visuelles KI-Testing (Visual AI Testing)",cat:"Specialized",def:"Ein Testansatz, der Screenshots mittels wahrnehmungsbasiertem (KI-basiertem) Diffing statt exaktem Pixelabgleich vergleicht, sodass echte visuelle Regressionen erkannt, aber harmloses Rendering-Rauschen ignoriert wird. Beispielwerkzeuge: Applitools Eyes, Percy."},
{term:"Vorausschauende Testauswahl (Predictive Test Selection)",cat:"Specialized",def:"Die Nutzung historischer Testfehlerdaten, um nur die Teilmenge der Tests auszuführen, die am wahrscheinlichsten eine Regression für eine gegebene Codeänderung erkennt, wodurch die CI-Laufzeit reduziert wird."},
{term:"Halluzination (KI)",cat:"Specialized",def:"Wenn ein KI-System, insbesondere ein LLM, eine Ausgabe erzeugt, die selbstsicher formuliert, aber faktisch falsch oder unbelegt ist — ein wichtiger Punkt beim Testen KI-gestützter Features."},
{term:"Prompt Injection",cat:"Specialized",def:"Ein Angriff oder eine Testtechnik, bei der gestaltete Eingaben versuchen, die ursprünglichen Anweisungen eines KI-Systems zu überschreiben, verwendet, um zu prüfen, ob ein LLM-gestütztes Feature zu unsicherem oder unbeabsichtigtem Verhalten manipuliert werden kann."},
{term:"Page Object Model (POM)",cat:"Specialized",def:"Ein Testautomatisierungs-Designmuster, bei dem jede UI-Seite oder -Komponente eine Klasse erhält, die ihre Locators und verfügbaren Aktionen kapselt, sodass Tests Methoden auf Page-Objekten aufrufen, statt Locators direkt anzufassen."},
{term:"Screenplay Pattern",cat:"Specialized",def:"Ein Testautomatisierungs-Designmuster, das einen Test als einen Actor mit Abilities modelliert, der Tasks ausführt und Questions stellt — bevorzugt Komposition gegenüber Vererbung und ist für große Suiten in der Regel skalierbarer als das Page Object Model."},
{term:"Service-Virtualisierung (Service Virtualization)",cat:"Specialized",def:"Das Simulieren einer echten Abhängigkeit (eine Drittanbieter-API, ein unfertiger nachgelagerter Dienst) durch einen Ersatz, der realistische, vorgefertigte oder regelbasierte Antworten liefert, was Tests schneller und zuverlässiger macht. Beispielwerkzeuge: WireMock, Mountebank."},
{term:"Contract Testing",cat:"Specialized",def:"Das Testen des Schnittstellenvertrags eines Service-Paars isoliert statt des gesamten Systems end-to-end, sodass breaking API-Änderungen ohne eine vollständige Integrationsumgebung erkannt werden.",aliases:["Consumer-Driven Contract Testing"]},
{term:"Service Mesh",cat:"Specialized",def:"Infrastruktur (z. B. Istio, Linkerd), die die Netzwerkschicht zwischen Microservices verwaltet — Routing, Retries, Timeouts, mutual TLS, Traffic Shaping —, oft getestet, indem verifiziert wird, dass ihre Routing-/Policy-Konfiguration sich wie beabsichtigt verhält."},
{term:"Chaos Engineering",cat:"Specialized",def:"Das bewusste Injizieren kontrollierter Fehler (getötete Instanzen, Netzwerklatenz, Ressourcenerschöpfung) in ein System, oft in der Produktion, um zu verifizieren, dass es anmutig degradiert statt in einen Ausfall zu kaskadieren. Populär gemacht durch Werkzeuge wie Chaos Monkey und Gremlin."},
{term:"Shift-Right-Testing",cat:"Specialized",def:"Das bewusste Erweitern des Testens auf die Produktion mittels Canary-Releases, Feature Flags und synthetischem Monitoring — die Ergänzung zum Shift-Left-Testing, das Testen früher im Lebenszyklus verschiebt."},
{term:"Quality Gate",cat:"Specialized",def:"Eine automatisierte Prüfung in einer CI/CD-Pipeline, die einen Merge oder ein Deployment blockiert, wenn eine Bedingung nicht erfüllt ist — etwa eine Mindestbestehensquote, ein Abdeckungsschwellenwert oder null kritische Sicherheitsfunde."},
{term:"Ephemere Testumgebung (Ephemeral Test Environment)",cat:"Specialized",def:"Eine Testumgebung, die bei Bedarf hochgefahren (z. B. pro Pull Request) und danach wieder abgebaut wird, wodurch Konflikte und Flakiness vermieden werden, die durch eine einzige geteilte, veränderliche QA-Umgebung entstehen."},
{term:"Observability (Drei Säulen)",cat:"Specialized",def:"Logs, Metriken und Traces — die drei Datentypen, mit denen Systemverhalten fortlaufend verstanden wird, auch in der Produktion, statt sich nur auf vorab skriptierte Testszenarien zu verlassen."},
{term:"Eistüte (Ice-Cream Cone, Anti-Pattern)",cat:"Specialized",def:"Eine Testsuiten-Form, die das Gegenteil einer gesunden Testpyramide ist: oben schwer mit langsamen, brüchigen UI-/End-to-End-Tests und zu wenigen schnellen, günstigen Unit-Tests, was die gesamte Suite langsam und schwer wartbar macht."},
{term:"Canary Release",cat:"Specialized",def:"Eine Deployment-Strategie, die eine Änderung zunächst an einen kleinen Prozentsatz des Produktions-Traffics ausrollt, sodass Probleme erkannt werden, bevor die Änderung alle erreicht."},
{term:"Feature Flag",cat:"Specialized",def:"Ein Schalter, der es erlaubt, Code zu deployen, aber inaktiv zu halten (\"dunkel auszuliefern\"), und ihn schrittweise oder selektiv zu aktivieren, verwendet um Deployment von Release zu entkoppeln und Shift-Right-Testing-Praktiken zu unterstützen."},
{term:"OWASP Top 10",cat:"Specialized",def:"Die am häufigsten referenzierte Liste kritischer Sicherheitsrisiken für Webanwendungen, veröffentlicht und periodisch aktualisiert vom Open Worldwide Application Security Project — das Standardvokabular für sicherheitsbewusstes Testen."},
{term:"SQL Injection (SQLi)",cat:"Specialized",def:"Eine Schwachstelle, bei der nicht vertrauenswürdige Eingaben direkt in eine SQL-Abfrage verkettet werden, statt korrekt parametrisiert zu werden, wodurch ein Angreifer die Logik der Abfrage verändern kann. Behoben durch parametrisierte Abfragen/Prepared Statements."},
{term:"Cross-Site Scripting (XSS)",cat:"Specialized",def:"Eine Schwachstelle, bei der nicht vertrauenswürdige Eingaben als ausführbares Skript im Browser eines anderen Nutzers gerendert werden. Stored XSS speichert die Payload dauerhaft; Reflected XSS spiegelt sie sofort zurück; DOM-basiertes XSS geschieht vollständig clientseitig."},
{term:"Cross-Site Request Forgery (CSRF)",cat:"Specialized",def:"Ein Angriff, bei dem eine bösartige Seite den Browser eines angemeldeten Nutzers dazu bringt, eine unerwünschte Anfrage an eine Zielseite zu senden, bei der er authentifiziert ist. Abgewehrt durch CSRF-Tokens und SameSite-Cookies."},
{term:"Broken Access Control",cat:"Specialized",def:"Eine Schwachstellenklasse, bei der das System nicht ordnungsgemäß einschränkt, worauf ein authentifizierter Nutzer zugreifen oder was er tun kann — das am höchsten eingestufte OWASP-Risiko, oft über IDOR ausgenutzt (Änderung einer ID in einer URL, um auf die Daten eines anderen Nutzers zuzugreifen).",aliases:["IDOR","Insecure Direct Object Reference"]},
{term:"SAST",cat:"Specialized",def:"Static Application Security Testing — durchsucht Quellcode, ohne ihn auszuführen, nach bekannt gefährlichen Mustern wie unparametrisierten Abfragen oder hartkodierten Secrets. Läuft früh, oft bei jedem Commit.",aliases:["Static Application Security Testing"]},
{term:"DAST",cat:"Specialized",def:"Dynamic Application Security Testing — greift eine laufende Anwendung von außen an, wie ein echter Angreifer, ohne Kenntnis des Quellcodes. Findet Laufzeit-/Konfigurationsprobleme, die SAST nicht sehen kann.",aliases:["Dynamic Application Security Testing"]},
{term:"IAST",cat:"Specialized",def:"Interactive Application Security Testing — kombiniert statische und dynamische Ansätze mittels eines in einer laufenden Anwendung instrumentierten Agenten, um Schwachstellen mit mehr Kontext und weniger Fehlalarmen zu finden.",aliases:["Interactive Application Security Testing"]},
{term:"SCA (Software Composition Analysis)",cat:"Specialized",def:"Das Durchsuchen von Drittanbieter-Bibliotheken und Abhängigkeiten nach bekannten, veröffentlichten Schwachstellen (CVEs) — adressiert das OWASP-Risiko „Vulnerable & Outdated Components“. Beispielwerkzeuge: Snyk, Dependabot.",aliases:["Software Composition Analysis","Dependency Scanning"]},
{term:"Threat Modeling",cat:"Specialized",def:"Eine strukturierte Übung, die während des Designs vor der Codeerstellung durchgeführt wird, um zu identifizieren, was in einem System schiefgehen könnte und wie man sich dagegen schützt — häufig mit dem STRIDE-Framework.",aliases:["STRIDE"]},
{term:"Zero Trust",cat:"Specialized",def:"Ein architektonisches Prinzip, das nie annimmt, eine Anfrage sei sicher, nur weil sie von innerhalb des Netzwerkperimeters kommt — jede Anfrage wird unabhängig von ihrer Herkunft anhand eigener Kriterien authentifiziert und autorisiert."},
{term:"Least Privilege",cat:"Specialized",def:"Das Prinzip, dass jeder Nutzer, Dienst oder Prozess nur den minimal nötigen Zugriff haben sollte, um seine Aufgabe zu erledigen — das Fundament, auf das sich die meisten Sicherheitsschwachstellenklassen letztlich zurückführen lassen."},
{term:"JWT (JSON Web Token)",cat:"Specialized",def:"Ein in sich geschlossenes Token, das Claims trägt, verwendet für Authentifizierung/Autorisierung. Seine Signatur muss bei jeder Anfrage verifiziert werden — vertraut man den Claims, ohne die Signatur zu prüfen, kann ein manipuliertes Token akzeptiert werden.",aliases:["JSON Web Token"]},
{term:"OAuth 2.0",cat:"Specialized",def:"Das Standardprotokoll für delegierten Zugriff (z. B. „Mit Google anmelden“), das begrenzte, ablaufende Tokens verwendet — Testen konzentriert sich auf Token-Ablauf, Refresh-Abläufe und die tatsächliche Durchsetzung gewährter Scopes."},
{term:"Pairwise Testing",cat:"Specialized",def:"Eine kombinatorische Testdesign-Technik, die jedes Paar von Parameterwerten mit deutlich weniger Testfällen abdeckt als das Testen aller Kombinationen, basierend auf der Beobachtung, dass die meisten Interaktionsdefekte nur zwei Parameter betreffen.",aliases:["Combinatorial Testing","Kombinatorisches Testen"]},
{term:"Use Case Testing",cat:"General",def:"Eine Testdesign-Technik, die Testfälle direkt aus dokumentierten Anwendungsfällen ableitet — den schrittweisen Interaktionen zwischen einem Akteur und dem System, einschließlich Haupt- und alternativer/Ausnahmeabläufe."},
{term:"WCAG",cat:"Specialized",def:"Web Content Accessibility Guidelines — die Standardreferenz für Barrierefreiheit, organisiert um vier Prinzipien (wahrnehmbar, bedienbar, verständlich, robust) mit den Konformitätsstufen A/AA/AAA.",aliases:["Web Content Accessibility Guidelines","POUR"]},
{term:"GraphQL",cat:"Specialized",def:"Ein Abfragesprachen-API-Stil mit einem einzigen Endpunkt, bei dem der Client genau angibt, welche Daten er möchte. Testfokus umfasst Schemavalidierung und den Schutz vor exzessiven/verschachtelten Queries (ein DoS-Risiko)."},
{term:"gRPC",cat:"Specialized",def:"Ein binäres, contract-first API-Protokoll (mit Protocol Buffers), gebaut für schnelle Service-zu-Service-Kommunikation, typischerweise getestet anhand seiner .proto-Vertragsdefinition mit Werkzeugen wie grpcurl."},
{term:"Spike Testing",cat:"Non-Functional",def:"Eine Performance-Testing-Art, bei der die Last abrupt hochspringt (z. B. von 100 auf 5.000 Nutzer innerhalb von Sekunden), um plötzliche Traffic-Ausbrüche wie eine Marketingkampagne oder einen viralen Moment zu simulieren."},
{term:"Soak Testing",cat:"Non-Functional",def:"Eine Performance-Testing-Art, bei der moderate Last über eine lange, anhaltende Dauer (viele Stunden oder Tage) läuft, um Memory Leaks und langsame Ressourcenerschöpfung zu erkennen, die kurze Tests nicht sichtbar machen können.",aliases:["Endurance Testing"]},
{term:"Response Time Percentile (p95/p99)",cat:"Non-Functional",def:"Eine Art, Performance-Ergebnisse zu berichten, die die Erfahrung am Rand der Verteilung offenbart, die ein Durchschnitt verbirgt — p95 bedeutet, dass 95% der Anfragen schneller waren als dieser Wert, p99, dass 99% es waren.",aliases:["p95","p99"]},
{term:"Throughput",cat:"Non-Functional",def:"Die Anzahl der Anfragen, die ein System pro Zeiteinheit verarbeitet (z. B. Anfragen pro Sekunde) — eine Kernmetrik neben Antwortzeit und Fehlerrate im Performance-Testing."},
{term:"Heuristic Evaluation",cat:"Specialized",def:"Die Bewertung einer UI anhand eines bekannten Satzes von Usability-Prinzipien (etwa Jakob Nielsens 10 Usability-Heuristiken), ohne echte Nutzer zu benötigen — ein schneller Weg, einen bedeutenden Anteil der Usability-Probleme zu erkennen."},
{term:"Think-Aloud Protocol",cat:"Specialized",def:"Eine Usability-Testing-Technik, bei der der Teilnehmer seine Gedanken laut äußert, während er eine Aufgabe erledigt, wodurch Verwirrung sichtbar wird, die reine stille Beobachtung übersehen würde."},
{term:"A/B Testing",cat:"Specialized",def:"Zwei Varianten eines Designs mit echtem Produktions-Traffic laufen lassen, der zwischen ihnen aufgeteilt wird, und eine Zielmetrik vergleichen (Konversionsrate, Aufgabenerfüllung) — misst tatsächliches Verhalten im großen Maßstab und ergänzt kleinere moderierte Usability-Sitzungen."},
{term:"Visual Regression Testing",cat:"Specialized",def:"Automatischer Vergleich von Screenshots einer UI vor und nach einer Änderung, um unbeabsichtigte visuelle Brüche zu erkennen. Beispielwerkzeuge: Applitools Eyes, Percy, Chromatic."},
{term:"Continuous Testing",cat:"Specialized",def:"Die Praxis, automatisierte Tests durchgehend über die CI/CD-Pipeline hinweg auszuführen, nicht nur vor dem Release, sodass Feedback zu jeder Änderung innerhalb von Minuten eintrifft."}
  ]
};
// __KB_V1__
