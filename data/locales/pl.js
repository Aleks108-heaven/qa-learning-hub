// QA Learning Hub — Polish (pl) locale
window.QAHUB_LOCALES = window.QAHUB_LOCALES || {};
window.QAHUB_LOCALES.pl = {
  ui: {
    brandTagline: "Kurs testowania oprogramowania",
    menuButton: "Menu",
    footerText: "QA Learning Hub &middot; testowanie manualne, projektowanie testów, testowanie ad hoc i eksploracyjne, testowanie REST API, przygotowanie do egzaminu ISTQB&reg; CTFL v4.0, praktyczny zestaw narzędzi QA i przewodnik po karierze, architektura QA i testów, testowanie bezpieczeństwa aplikacji oraz praktyczne testowanie wydajności, UI/UX i automatyzacji.",
    navDashboard: "Panel główny",
    navTutorials: "Materiały szkoleniowe",
    navPractice: "Ćwiczenia",
    navQuizzes: "Quizy",
    navGlossary: "Słownik",
    langLabel: "Język",
    heroEyebrow: "Kurs testowania oprogramowania",
    homeTitle: "QA Learning Hub",
    homeIntro: "Uporządkowana ścieżka nauki obejmująca podstawy testowania manualnego, techniki projektowania testów, pełną panoramę rodzajów testów, testowanie ad hoc i eksploracyjne, testowanie REST API oraz przygotowanie do egzaminu ISTQB® CTFL v4.0 — a także praktyczny zestaw narzędzi i przewodnik po karierze, architekturę QA i testów, testowanie bezpieczeństwa aplikacji oraz praktyczne testowanie wydajności, UI/UX i automatyzacji. Po każdym module znajduje się quiz.",
    statModulesCompleted: "Ukończone moduły",
    statModulesInProgress: "Moduły w trakcie",
    statQuizzesAttempted: "Podejścia do quizów",
    statGlossaryTerms: "Terminy w słowniku",
    tutorialModulesHeading: "Moduły szkoleniowe",
    badgeNotStarted: "Nierozpoczęty",
    badgeInProgress: "W trakcie",
    badgeCompleted: "Ukończony",
    bestScoreLabel: "najlepszy wynik {pct}%",
    ctaFinalExam: "Przystąp do egzaminu końcowego",
    ctaBrowseGlossary: "Przeglądaj słownik",
    moduleWord: "MODUŁ",
    crumbModule: "Moduł",
    calloutTakeaway: "Kluczowy wniosek",
    markComplete: "Oznacz moduł jako ukończony",
    takeModuleQuiz: "Przystąp do quizu z modułu {num} →",
    allQuizzes: "Wszystkie quizy →",
    quizzesTitle: "Quizy",
    quizzesIntro: "Rozwiąż dowolny quiz modułowy samodzielnie lub połącz wszystko w Egzaminie Końcowym. Każdy quiz można powtarzać dowolną liczbę razy — pytania i kolejność odpowiedzi są losowane przy każdej próbie.",
    finalExamCardNum: "EGZAMIN KOŃCOWY",
    finalExamTitle: "Mieszany egzamin końcowy",
    finalExamDesc: "{n} pytań losowo wybranych ze wszystkich {m} modułów.",
    attempted: "Podjęto próbę",
    notAttempted: "Nie podjęto próby",
    moduleQuizCardNum: "QUIZ Z MODUŁU {num}",
    quizQuestionsCount: "{n} pytań obejmujących ten moduł.",
    questionOf: "Pytanie {a} z {b}",
    questionLabel: "PYTANIE",
    exitQuiz: "Wyjdź z quizu",
    nextQuestion: "Następne pytanie →",
    seeResults: "Zobacz wyniki →",
    correctPrefix: "Poprawnie. ",
    incorrectPrefix: "Niezupełnie. ",
    resultsSuffix: "Wyniki",
    resultsCorrectLine: "{score} z {total} poprawnie · próg zaliczenia {pct}%",
    passed: "Zaliczono",
    failed: "Jeszcze nie — spróbuj ponownie",
    retakeQuiz: "Podejdź do quizu ponownie",
    backToQuizzes: "Powrót do quizów",
    reviewHeading: "Podsumowanie",
    yourAnswer: "Twoja odpowiedź:",
    correctAnswer: "Poprawna odpowiedź:",
    skipped: "Pominięto",
    noQuestionsAvailable: "Dla tego quizu nie ma jeszcze dostępnych pytań.",
    finalExamTitleLabel: "Egzamin końcowy",
    quizSuffix: "Quiz",
    glossaryTitle: "Słownik pojęć testowych",
    glossaryIntro: "{n} terminów i rodzajów testowania oprogramowania, z możliwością wyszukiwania i filtrowania według kategorii.",
    searchPlaceholder: "Szukaj terminów lub definicji…",
    allCategories: "Wszystkie kategorie",
    termsCount: "{n} terminów",
    noTermsMatch: "Żaden termin nie pasuje do wyszukiwania.",
    alsoLabel: "także:"
  },
  catLabels: {
    "Functional": "Funkcjonalne",
    "Non-Functional": "Niefunkcjonalne",
    "Structural": "Strukturalne",
    "Change-Related": "Związane ze zmianą",
    "Specialized": "Specjalistyczne",
    "General": "Ogólne"
  },
  modules: [
{
  id: "manual-testing",
  num: 1,
  title: "Podstawy testowania manualnego",
  summary: "Dlaczego testerzy nadal mają znaczenie i jak dobrze prowadzić testowanie manualne.",
  takeaway: "Testowanie manualne pozostaje istotną częścią nowoczesnego QA — elastyczność i ludzka intuicja pozwalają wcześnie wychwycić złożone błędy, zapewniając niezawodne doświadczenia użytkownika. 100% automatyzacja nie jest możliwa, co czyni testowanie manualne niezbędnym.",
  lessons: [
    { h: "Czym jest testowanie manualne?", body: `
      <p>Testowanie manualne to testowanie wykonywane <strong>bez narzędzi automatyzujących</strong>. Tester ręcznie wykonuje czynności — klika, wprowadza dane, nawiguje po ekranach — aby zweryfikować zachowanie systemu względem wymagań. Nie jest wymagana wiedza programistyczna, co czyni je najbardziej dostępnym punktem wejścia do QA.</p>` },
    { h: "Dlaczego jest ważne", body: `
      <ul>
        <li><strong>Walidacja UX</strong> — ludzka ocena rozmieszczenia elementów, estetyki i informacji zwrotnej. Ponad <strong>70% projektów</strong> wskazuje UX jako główny powód stosowania testowania manualnego.</li>
        <li><strong>Wczesne wykrywanie błędów jest znacznie tańsze</strong> — defekt znaleziony na etapie implementacji kosztuje naprawę około <strong>6 razy więcej</strong> niż ten wykryty na etapie projektowania, według IBM System Sciences Institute.</li>
        <li><strong>Opłacalne</strong> w projektach o krótkim cyklu życia lub z często zmieniającym się interfejsem, gdzie budowa automatyzacji przetrwałaby dłużej niż sama funkcja.</li>
      </ul>` },
    { h: "Główne cele", body: `
      <ul>
        <li>Identyfikacja błędów</li>
        <li>Walidacja wymagań</li>
        <li>Zapewnienie doświadczenia użytkownika</li>
        <li>Pewność regresji</li>
        <li>Dostarczanie jakości</li>
      </ul>` },
    { h: "Charakterystyka", body: `
      <ul>
        <li><strong>Zorientowane na człowieka</strong> — zależy od osądu testera, a nie od skryptów.</li>
        <li><strong>Charakter eksploracyjny</strong> — testerzy mogą odbiegać od schematu i badać dalej.</li>
        <li><strong>Zdolność adaptacji</strong> — szybkie dostosowanie do zmieniających się wymagań.</li>
        <li><strong>Czasochłonność</strong> — każde przejście to ręczny wysiłek.</li>
        <li><strong>Podatne na błędy, ale spostrzegawcze</strong> — ludzie przeoczają rzeczy, których nie przeoczyłyby skrypty, ale też zauważają to, czego skrypty nie potrafią.</li>
      </ul>` },
    { h: "Rodzaje testowania manualnego", body: `
      <p>Według znajomości wnętrza systemu:</p>
      <ul>
        <li><strong>Testowanie czarnej skrzynki (Black Box)</strong> — brak wiedzy o wewnętrznym kodzie, oparte na wymaganiach.</li>
        <li><strong>Testowanie białej skrzynki (White Box)</strong> — pełna wiedza o wewnętrznej logice/kodzie.</li>
        <li><strong>Testowanie szarej skrzynki (Grey Box)</strong> — częściowa wiedza o wnętrzu systemu.</li>
      </ul>
      <p>Według poziomu testów:</p>
      <ul>
        <li><strong>Testy jednostkowe (Unit Testing)</strong> — pojedyncze komponenty.</li>
        <li><strong>Testy integracyjne (Integration Testing)</strong> — połączone moduły.</li>
        <li><strong>Testy systemowe (System Testing)</strong> — cały zintegrowany system.</li>
        <li><strong>Testy akceptacyjne (Acceptance Testing)</strong> — walidacja względem potrzeb biznesowych.</li>
      </ul>` },
    { h: "Jak przeprowadzać testowanie manualne", body: `
      <p>Typowy przebieg testowania manualnego:</p>
      <ol>
        <li><strong>Analiza wymagań</strong> — zrozumienie, co ma zostać zbudowane i przetestowane.</li>
        <li><strong>Projektowanie przypadków testowych</strong> — zapisanie kroków, danych wejściowych i oczekiwanych wyników.</li>
        <li><strong>Wykonanie</strong> — uruchomienie przypadków testowych na buildzie.</li>
        <li><strong>Rejestrowanie defektów</strong> — zapisanie każdego odstępstwa od oczekiwanego zachowania.</li>
        <li><strong>Retesty / regresja</strong> — potwierdzenie poprawek i sprawdzenie, czy nic innego się nie zepsuło.</li>
      </ol>` },
    { h: "Studia przypadków", body: `
      <p><strong>Testowanie interfejsu gry wideo:</strong> tester ręcznie przechodzi przez menu, elementy HUD i mapowania sterowania w różnych rozdzielczościach i na różnych urządzeniach wejściowych — to rodzaj subiektywnej oceny „czy to jest odpowiednie w odczuciu”, którą trudno zautomatyzować.</p>
      <p><strong>Testowanie systemu zarządzania szpitalem:</strong> tester przechodzi przez rejestrację pacjentów, planowanie wizyt i procesy rozliczeniowe od początku do końca, sprawdzając, czy dane wprowadzone przez recepcjonistę poprawnie trafiają na ekrany lekarza i rozliczeń — weryfikując rzeczywiste sekwencje użycia, a nie tylko izolowane funkcje.</p>` },
    { h: "Mity a rzeczywistość", body: `
      <p><strong>Mit:</strong> testowanie manualne jest przestarzałe, skoro istnieje automatyzacja. <strong>Rzeczywistość:</strong> automatyzacja nie potrafi ocenić subiektywnego UX, nie potrafi opłacalnie obsłużyć każdego przypadku brzegowego, a wyczerpujące przetestowanie każdej ścieżki jest niemożliwe — testerzy manualni wypełniają dokładnie tę lukę.</p>
      <p><strong>Mit:</strong> testowanie manualne to nisko wykwalifikowane „klikanie po ekranie”. <strong>Rzeczywistość:</strong> wymaga dogłębnej analizy wymagań, ustrukturyzowanego projektowania testów i wyostrzonych umiejętności analizy defektów.</p>` },
    { h: "Wyzwania", body: `
      <ul>
        <li>Czasochłonność</li>
        <li>Powtarzalność czynności</li>
        <li>Błąd ludzki</li>
        <li>Problemy ze skalowalnością</li>
        <li>Zarządzanie danymi testowymi</li>
        <li>Przygotowanie środowiska</li>
        <li>Zależność od zasobów</li>
      </ul>` },
    { h: "Testowanie manualne a automatyczne", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Aspekt</th><th>Testowanie manualne</th><th>Testowanie automatyczne</th></tr></thead>
        <tbody>
          <tr><td>Szybkość</td><td>Wolniejsze, w tempie człowieka</td><td>Szybkie, powtarzalne na dużą skalę</td></tr>
          <tr><td>Koszt wdrożenia</td><td>Niski — brak potrzeby pisania skryptów</td><td>Wyższy — skrypty trzeba zbudować i utrzymywać</td></tr>
          <tr><td>Najlepsze do</td><td>Testów eksploracyjnych, UX, krótkotrwałych interfejsów</td><td>Powtarzalnej regresji, dużych zestawów testów</td></tr>
          <tr><td>Ludzki osąd</td><td>Tak</td><td>Nie</td></tr>
          <tr><td>Wymagane umiejętności</td><td>Wiedza dziedzinowa i testowa</td><td>Programowanie oraz wiedza testowa</td></tr>
        </tbody>
      </table></div>` },
    { h: "Popularne narzędzia (dla kontekstu)", body: `
      <p>Narzędzia, o których usłyszysz w kontekście testowania manualnego i automatycznego: <strong>Selenium</strong>, <strong>QTP/UFT</strong>, <strong>JMeter</strong>, <strong>LoadRunner</strong>, <strong>TestLink</strong>, <strong>Quality Center (ALM)</strong>. Ten moduł dotyczy dyscypliny testowania manualnego, a nie praktycznego szkolenia z narzędzi.</p>` },
    { h: "Zalety", body: `
      <ul>
        <li>Ludzki wgląd</li>
        <li>Elastyczność</li>
        <li>Brak potrzeby kodowania</li>
        <li>Skuteczne w małych projektach</li>
        <li>Sprzyja testowaniu eksploracyjnemu</li>
      </ul>` },
    { h: "Wady", body: `
      <ul>
        <li>Czasochłonność</li>
        <li>Podatność na błąd ludzki</li>
        <li>Ograniczone pokrycie</li>
        <li>Brak skalowalności w dużych/złożonych aplikacjach</li>
      </ul>` },
    { h: "Waga i priorytet defektu oraz pisanie dobrego raportu o błędzie", body: `
      <p><strong>Waga a priorytet</strong> to dwie osie, według których ocenia się każdy defekt, a mylenie ich to częsty błąd początkujących:</p>
      <ul>
        <li><strong>Waga (Severity)</strong> — techniczny wpływ na system (czy powoduje awarię aplikacji, uszkodzenie danych, czy tylko przesunięcie przycisku?). Ustalana przez testera na podstawie zaobserwowanego zachowania.</li>
        <li><strong>Priorytet (Priority)</strong> — jak pilnie trzeba to naprawić, z perspektywy biznesowej (literówka o niskiej wadze na stronie głównej może mieć wysoki priorytet tuż przed dużą premierą). Zwykle ustalany wspólnie z produktem.</li>
      </ul>
      <p>Są od siebie niezależne: awaria o wysokiej wadze w rzadko używanym panelu administracyjnym może mieć niski priorytet; kosmetyczny błąd o niskiej wadze, ale wysoce widoczny na stronie płatności, może mieć wysoki priorytet.</p>
      <p><strong>Raport o błędzie, który zostaje szybko naprawiony, zawiera:</strong></p>
      <ul>
        <li><strong>Jasne podsumowanie</strong> — jedno zdanie opisujące problem, a nie dochodzenie.</li>
        <li><strong>Kroki reprodukcji</strong> — ponumerowane, dokładne, minimalne (usuń wszystko, co nie jest potrzebne do wywołania błędu).</li>
        <li><strong>Wynik oczekiwany kontra rzeczywisty</strong> — podany wprost, a nie domyślny.</li>
        <li><strong>Środowisko</strong> — przeglądarka/system operacyjny/urządzenie/wersja builda/środowisko (staging kontra produkcja).</li>
        <li><strong>Waga i priorytet</strong> — twoja ocena, nawet jeśli produkt później ją skoryguje.</li>
        <li><strong>Materiał dowodowy</strong> — zrzut ekranu, nagranie ekranu lub fragment logu; obraz kończy większość sporów typu „nie da się odtworzyć”, zanim się zaczną.</li>
      </ul>
      <p>Raport bez kroków reprodukcji to najczęstszy pojedynczy powód, dla którego błąd wraca do zgłaszającego zamiast zostać naprawiony.</p>` }
  ]
},
{
  id: "test-techniques",
  num: 2,
  title: "Techniki testowania oprogramowania i projektowanie przypadków testowych",
  summary: "Ustrukturyzowane techniki — granice, klasy równoważności, tablice decyzyjne, stany — pozwalające osiągnąć wysokie pokrycie przy mniejszej liczbie przypadków testowych.",
  takeaway: "Ponieważ wyczerpujące testowanie jest niemożliwe, ustrukturyzowane techniki pozwalają testerom osiągnąć wysokie pokrycie przy minimalnej liczbie przypadków testowych, koncentrując się na obszarach podatnych na błędy: granicach, podziałach, kombinacjach i stanach.",
  lessons: [
    { h: "7 zasad testowania oprogramowania", body: `
      <ol>
        <li><strong>Testowanie pokazuje obecność defektów</strong> — testowanie może udowodnić, że defekty istnieją, nigdy że ich nie ma.</li>
        <li><strong>Wyczerpujące testowanie jest niemożliwe</strong> — przetestowanie każdej kombinacji danych wejściowych/ścieżek jest niewykonalne poza przypadkami trywialnymi.</li>
        <li><strong>Wczesne testowanie oszczędza czas i koszty</strong> — im wcześniej znaleziony jest defekt, tym taniej go naprawić.</li>
        <li><strong>Grupowanie defektów</strong> — niewielka liczba modułów zwykle zawiera większość defektów.</li>
        <li><strong>Paradoks pestycydu</strong> — wielokrotne powtarzanie tych samych testów przestaje wykrywać nowe błędy; testy muszą ewoluować.</li>
        <li><strong>Testowanie zależy od kontekstu</strong> — sposób testowania aplikacji bankowej różni się od sposobu testowania gry.</li>
        <li><strong>Błędne mniemanie o braku błędów</strong> — produkt wolny od błędów, który nie spełnia potrzeb użytkownika, nadal jest porażką.</li>
      </ol>` },
    { h: "Analiza wartości brzegowych (BVA)", body: `
      <p>Defekty koncentrują się na krawędziach zakresów danych wejściowych, więc BVA testuje wartości minimalne, maksymalne oraz te tuż wewnątrz/na zewnątrz każdej granicy.</p>
      <p class="worked-example"><strong>Przykład:</strong> dla poprawnego zakresu wejściowego <strong>1–10</strong>, BVA testuje wartości graniczne <strong>0, 1, 2, 9, 10, 11</strong>.</p>` },
    { h: "Podział na klasy równoważności (ECP)", body: `
      <p>Podziel dane wejściowe na klasy poprawne i niepoprawne, a następnie przetestuj tylko jedną reprezentatywną wartość z każdej klasy — ponieważ jeśli jedna wartość w klasie zawodzi lub przechodzi test, zakłada się, że reszta klasy zachowa się tak samo.</p>
      <p class="worked-example"><strong>Przykład:</strong> poprawne zakresy 1–10 i 20–30 dają pięć klas: <code>&lt;1</code> (niepoprawna), <code>1–10</code> (poprawna), <code>11–19</code> (niepoprawna), <code>20–30</code> (poprawna), <code>&gt;30</code> (niepoprawna). Przykładowe wartości testowe: <strong>-2, 3, 15, 25, 45</strong>.</p>` },
    { h: "Testowanie tablicą decyzyjną", body: `
      <p>Mapuje kombinacje danych wejściowych na wyniki w tabeli przyczynowo-skutkowej — przydatne, gdy zachowanie systemu zależy od kombinacji warunków.</p>
      <p class="worked-example"><strong>Przykład:</strong> przycisk „Wyślij” aktywuje się tylko wtedy, gdy wszystkie pola formularza są wypełnione.</p>
      <p><strong>Kroki:</strong></p>
      <ol>
        <li>Wypisz dane wejściowe (warunki) w wierszach.</li>
        <li>Wymień kombinacje reguł w kolumnach.</li>
        <li>Uzupełnij kombinacje.</li>
        <li>Zapisz oczekiwany wynik dla każdej kombinacji.</li>
      </ol>` },
    { h: "Testowanie przejść między stanami", body: `
      <p>Modeluje, jak sekwencja danych wejściowych przeprowadza system między zdefiniowanymi stanami, dzięki czemu można testować zarówno przejścia, jak i same stany.</p>
      <p class="worked-example"><strong>Przykład:</strong> system logowania z kodem PIN — poprawny PIN przy dowolnej próbie daje dostęp; trzy błędne próby z rzędu blokują konto.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Stan</th><th>Poprawny PIN</th><th>Niepoprawny PIN</th></tr></thead>
        <tbody>
          <tr><td>Start</td><td>Dostęp przyznany</td><td>1. próba</td></tr>
          <tr><td>1. próba</td><td>Dostęp przyznany</td><td>2. próba</td></tr>
          <tr><td>2. próba</td><td>Dostęp przyznany</td><td>3. próba</td></tr>
          <tr><td>3. próba</td><td>Dostęp przyznany</td><td>Konto zablokowane</td></tr>
          <tr><td>Dostęp przyznany</td><td>–</td><td>–</td></tr>
          <tr><td>Konto zablokowane</td><td>–</td><td>–</td></tr>
        </tbody>
      </table></div>` },
    { h: "Zgadywanie błędów (Error Guessing)", body: `
      <p>Wykorzystuje doświadczenie testera, intuicję i historyczne dane o defektach, aby przewidzieć prawdopodobne obszary problemowe. Nie ma formalnych kroków — technika opiera się całkowicie na wykwalifikowanych, doświadczonych testerach, którzy wcześniej widzieli, gdzie zwykle coś się psuje.</p>` },
    { h: "Zalety i ograniczenia", body: `
      <p><strong>Zalety:</strong> lepsze pokrycie, ukierunkowanie na obszary wysokiego ryzyka, zmniejszenie redundancji, wczesne wykrywanie problemów, zwiększenie pewności.</p>
      <p><strong>Ograniczenia:</strong> żadna technika nie gwarantuje pełnego wykrycia defektów, wyniki zależą od umiejętności testera, mogą zostać pominięte problemy integracyjne lub użytecznościowe, a niektóre techniki mają ograniczone wsparcie automatyzacji.</p>` },
    { h: "Wybór odpowiedniej techniki", body: `
      <p>Dopasuj technikę do celów projektu, oceń ryzyko i dopasuj do modelu wytwarzania — na przykład preferując podejścia przyjazne dla Agile w systemach iteracyjnych. Zrównoważ ograniczenia czasu, budżetu i umiejętności. Najlepszą praktyką jest <strong>łączenie wielu technik</strong> zamiast polegania na jednej.</p>` },
    { h: "Testowanie parami (Pairwise) i testowanie przypadków użycia", body: `
      <p><strong>Testowanie parami (kombinatoryczne)</strong> rozwiązuje problem, którego Podział na klasy równoważności i BVA same nie rozwiązują: gdy funkcja ma wiele niezależnych parametrów wejściowych, testowanie każdej kombinacji szybko eksploduje (5 parametrów po 4 wartości każdy = 1024 kombinacje). Testowanie parami opiera się na obserwacji, że większość rzeczywistych defektów jest wywoływana przez interakcję zaledwie <strong>dwóch</strong> parametrów naraz, a nie pięciu — więc dobrze dobrany podzbiór przypadków testowych, który pokrywa każdą możliwą <em>parę</em> wartości parametrów, wychwytuje zdecydowaną większość błędów interakcji przy ułamku kosztu.</p>
      <p><em>Przykład:</em> formularz z przeglądarką (Chrome/Firefox/Safari), systemem operacyjnym (Windows/Mac/Linux) i językiem (EN/ES) ma 18 możliwych pełnych kombinacji — testowanie parami zmniejsza to do około 9 przypadków testowych, wciąż sprawdzając każdą parę Przeglądarka×System, Przeglądarka×Język i System×Język co najmniej raz. <strong>Testowanie tablicami ortogonalnymi (Orthogonal Array Testing)</strong> to leżąca u podstaw metoda statystyczna często używana do generowania takich zredukowanych zestawów.</p>
      <p><strong>Testowanie przypadków użycia (Use Case Testing)</strong> wyprowadza przypadki testowe bezpośrednio z udokumentowanych przypadków użycia — interakcji krok po kroku między aktorem (użytkownikiem lub systemem zewnętrznym) a testowanym systemem, obejmujących główny scenariusz sukcesu oraz jego alternatywne/wyjątkowe przebiegi. Jest szczególnie skuteczne przy walidacji, czy przepływ pracy działa poprawnie od początku do końca z perspektywy użytkownika, uzupełniając techniki bardziej skoncentrowane na danych wejściowych, takie jak ECP i BVA.</p>` }
  ]
},
{
  id: "testing-types",
  num: 3,
  title: "Rodzaje testowania oprogramowania — katalog referencyjny",
  summary: "Panorama rodzajów testowania oraz wyselekcjonowana lista 20 najważniejszych do poznania.",
  takeaway: "„Rodzaj” testowania to klasyfikacja z własnym celem, strategią i produktami — na przykład Testowanie Dostępności (Accessibility Testing) weryfikuje, czy aplikacja jest użyteczna dla osób z niepełnosprawnościami. Zrozumienie tej panoramy pomaga specjalistom QA dobrać właściwą kombinację dla pełnego pokrycia.",
  lessons: [
    { h: "Czym jest rodzaj testowania oprogramowania?", body: `
      <p>Rodzaj testowania klasyfikuje działanie testowe według tego, co sprawdza (funkcję, wydajność, bezpieczeństwo, użyteczność...) i kto zazwyczaj je wykonuje. Znajomość katalogu pomaga rozpoznać właściwe narzędzie dla danego ryzyka, zamiast za każdym razem sięgać po tę samą garstkę testów.</p>` },
    { h: "Top 20 rodzajów testowania, które powinien znać każdy QA", body: `
      <p>Lekkie wprowadzenie — pełny katalog ponad 105 terminów znajduje się w <a href="#/glossary">Słowniku</a>.</p>
      <ul class="chip-list">
        <li>Testowanie akceptacyjne</li><li>Testowanie dostępności</li><li>Testowanie zwinne (Agile)</li><li>Testowanie alfa</li>
        <li>Testowanie beta</li><li>Testowanie API</li><li>Testowanie czarnej skrzynki</li><li>Testowanie białej skrzynki</li>
        <li>Testowanie szarej skrzynki</li><li>Testowanie eksploracyjne</li><li>Testowanie funkcjonalne</li><li>Testowanie niefunkcjonalne</li>
        <li>Testy obciążeniowe (Load)</li><li>Testowanie wydajności</li><li>Testowanie regresyjne</li><li>Testy Sanity</li>
        <li>Testy dymne (Smoke)</li><li>Testowanie bezpieczeństwa</li><li>Testy warunków skrajnych (Stress)</li><li>Testowanie użyteczności</li>
      </ul>` },
    { h: "Kategorie", body: `
      <p>Słownik używa tej taksonomii do grupowania i filtrowania rodzajów testowania:</p>
      <ul>
        <li><strong>Funkcjonalne</strong> — weryfikuje, co system robi względem wymagań (testy akceptacyjne, systemowe, integracyjne...).</li>
        <li><strong>Niefunkcjonalne</strong> — weryfikuje, jak dobrze to robi (testowanie wydajności, obciążenia, użyteczności...).</li>
        <li><strong>Strukturalne (biała skrzynka)</strong> — weryfikuje wewnętrzne ścieżki kodu i logikę (testy jednostkowe, gałęzi, ścieżek...).</li>
        <li><strong>Związane ze zmianą</strong> — weryfikuje, że zmiany niczego nie zepsuły (regresja, retesty, testy dymne...).</li>
        <li><strong>Specjalistyczne</strong> — ukierunkowane zagadnienia, takie jak bezpieczeństwo, kompatybilność, lokalizacja (testy penetracyjne, testowanie kompatybilności...).</li>
        <li><strong>Ogólne</strong> — rodzaje zorientowane na proces lub metodologię, które nie pasują nigdzie indziej (testowanie zwinne, testowanie statyczne...).</li>
      </ul>` },
    { h: "Testowanie niefunkcjonalne w praktyce", body: `
      <p>Testowanie niefunkcjonalne pyta „jak dobrze” system działa, a nie „czy robi właściwą rzecz” — i każdy podtyp wymaga własnego podejścia do planowania:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Rodzaj</th><th>Co mierzysz</th><th>Typowe podejście</th></tr></thead>
        <tbody>
          <tr><td><strong>Wydajność</strong></td><td>Czas odpowiedzi, przepustowość, wykorzystanie zasobów przy oczekiwanym obciążeniu</td><td>Najpierw punkt odniesienia, potem porównanie z określonymi SLA/progami — zob. Testowanie obciążeniowe/warunków skrajnych/skalowalności w Słowniku.</td></tr>
          <tr><td><strong>Użyteczność</strong></td><td>Łatwość nauki, efektywność, wskaźnik błędów, subiektywna satysfakcja</td><td>Sesje oparte na zadaniach z prawdziwymi lub reprezentatywnymi użytkownikami; protokoły głośnego myślenia ujawniają zdezorientowanie, którego same słowa nie pokażą.</td></tr>
          <tr><td><strong>Kompatybilność</strong></td><td>Poprawne zachowanie w różnych przeglądarkach, urządzeniach, wersjach systemu, rozmiarach ekranu</td><td>Priorytetyzuj według rzeczywistej analityki użytkowników (jakich przeglądarek/urządzeń faktycznie używają twoi użytkownicy), zamiast testować wszystko po równo.</td></tr>
          <tr><td><strong>Lokalizacja</strong></td><td>Poprawne tłumaczenie, formaty daty/waluty/liczb, rozszerzenie tekstu niepsujące układu</td><td>Testuj wcześnie z pseudo-lokalizacją (sztucznie wydłużonymi/zaakcentowanymi ciągami znaków), aby wychwycić uszkodzenia układu, zanim powstaną prawdziwe tłumaczenia.</td></tr>
        </tbody>
      </table></div>
      <p>Wspólny wątek: testowanie niefunkcjonalne wymaga jawnego, uzgodnionego progu przed rozpoczęciem („strona ładuje się w mniej niż 2s przy 500 równoczesnych użytkownikach”) — bez niego „jak dobrze” nie ma linii zaliczenia/niezaliczenia, tylko opinie.</p>` }
  ]
},
{
  id: "adhoc-testing",
  num: 4,
  title: "Testowanie ad hoc",
  summary: "Niezaplanowane, nieudokumentowane testowanie, które próbuje przełamać system dzięki intuicji i kreatywności.",
  takeaway: "Testowanie ad hoc to niezaplanowane, nieudokumentowane testowanie, w którym tester próbuje „złamać” system, wykorzystując intuicję i kreatywność — najbardziej wartościowe, gdy czasu jest mało, lub jako uzupełnienie testowania ustrukturyzowanego.",
  lessons: [
    { h: "Czym jest testowanie ad hoc?", body: `
      <p>Nieformalne, niepisane testowanie bez przygotowanych wcześniej przypadków testowych. To podejście typu czarna skrzynka: tester nie ma szczególnego wglądu w kod, ma tylko cel — znalezienie tego, co się psuje.</p>` },
    { h: "Kiedy je stosować", body: `
      <ul>
        <li>Wcześnie w procesie tworzenia, zanim powstaną formalne przypadki testowe.</li>
        <li>Przed rozpoczęciem oficjalnego testowania, jako szybkie sprawdzenie podstaw.</li>
        <li>Po formalnym testowaniu, aby wychwycić to, co pominęły testy ustrukturyzowane.</li>
        <li>Gdy czasu jest mało.</li>
        <li>Aby dogłębnie zbadać daną funkcję.</li>
        <li>Do sprawdzeń użyteczności.</li>
        <li>Podczas testów beta.</li>
      </ul>` },
    { h: "Rodzaje testowania ad hoc", body: `
      <ul>
        <li><strong>Buddy Testing</strong> — deweloper i tester pracują razem nad tym samym modułem.</li>
        <li><strong>Pair Testing</strong> — dwóch testerów dzieli jedną sesję, jeden prowadzi, drugi obserwuje.</li>
        <li><strong>Monkey Testing</strong> — losowe, nieustrukturyzowane dane wejściowe rzucane na aplikację, aby sprawdzić, czy się zepsuje.</li>
      </ul>` },
    { h: "Zalety", body: `
      <ul>
        <li>Znajduje defekty przypadków brzegowych, które pomijają testy ustrukturyzowane.</li>
        <li>Nie wymaga dodatkowej dokumentacji.</li>
        <li>Szybkie.</li>
        <li>Zachęca do kreatywnego myślenia.</li>
      </ul>` },
    { h: "Wady", body: `
      <ul>
        <li>Trudne do odtworzenia lub powtórzenia.</li>
        <li>Silnie zależy od umiejętności testera.</li>
        <li>Słaba identyfikowalność i metryki pokrycia.</li>
        <li>Nieodpowiednie jako jedyna metoda testowania.</li>
      </ul>` },
    { h: "Najlepsze praktyki", body: `
      <ol>
        <li>Posiadaj dobrą znajomość biznesu.</li>
        <li>Skup się na kluczowych/wysoko ryzykownych modułach.</li>
        <li>Rejestruj każdy znaleziony defekt.</li>
        <li>Połącz się w parę z innym testerem dla świeżej perspektywy.</li>
      </ol>` },
    { h: "Integrowanie testowania ad hoc ze sprintami Agile", body: `
      <p>Testowanie ad hoc naturalnie wpisuje się w rytm sprintu, nie wymagając własnej dedykowanej ceremonii:</p>
      <ul>
        <li><strong>Tuż po ukończeniu funkcji przez deweloperów</strong> — zanim jeszcze zostaną napisane formalne przypadki testowe, szybkie nieskryptowane przejście często najszybciej i najtaniej ujawnia oczywiste usterki, zanim bardziej ustrukturyzowane testowanie zainwestuje w to czas.</li>
        <li><strong>Podczas przygotowań do przeglądu sprintu</strong> — krótka sesja ad hoc dzień przed demo wychwytuje kłopotliwe problemy, zanim ujawnią się na żywo przed interesariuszami.</li>
        <li><strong>Jako „bug bash”</strong> — sesja ograniczona czasowo (30–60 minut), podczas której cały zespół, nie tylko QA, wspólnie testuje ad hoc build; to również rozpowszechnia wiedzę o produkcie i znajduje błędy, na które nawyki żadnego pojedynczego testera by nie trafiły.</li>
        <li><strong>Ograniczone czasowo, a nie otwarte</strong> — nawet nieformalne testowanie korzysta na ustalonym limicie czasu (np. 20 minut na nowym przepływie płatności), dzięki czemu pozostaje skupione, zamiast błądzić.</li>
      </ul>
      <p>Główne dostosowanie dla zespołów Agile: zapisuj ustalenia natychmiast w trackerze sprintu, nawet krótko, zamiast polegać na pamięci — sesje ad hoc toczą się szybko, a szczegóły szybko zacierają się po zakończeniu sesji.</p>` }
  ]
},
{
  id: "exploratory-testing",
  num: 5,
  title: "Testowanie eksploracyjne",
  summary: "Jednoczesne projektowanie i wykonywanie testów — testowanie ad hoc z celem.",
  takeaway: "Testowanie eksploracyjne to jednoczesne projektowanie i wykonywanie testów — czynność „myślowa”, kładąca nacisk na badanie i uczenie się, powszechnie stosowana w Agile. To testowanie ad hoc z celem: ustrukturyzowane i rygorystyczne, a nie przypadkowe.",
  lessons: [
    { h: "Czym jest testowanie eksploracyjne?", body: `
      <p>Testerzy projektują i uruchamiają testy na bieżąco, notując pomysły przed ich wykonaniem. Podkreśla osobistą wolność i odpowiedzialność testera za kierowanie własnym badaniem.</p>
      <p>ISTQB definiuje je jako technikę <strong>opartą na doświadczeniu</strong>, w której testy są projektowane, wykonywane i oceniane <em>jednocześnie</em>, gdy tester poznaje przedmiot testów, a to, co ujawnia każdy test, służy do projektowania nowych, lepszych testów.</p>
      <p>Testowanie skryptowe wykonuje analizę → projektowanie → implementację → wykonanie → ocenę jako osobne kroki. Testowanie eksploracyjne łączy je w jedną ciągłą pętlę informacji zwrotnej:</p>
      <pre><code>Poznaj produkt → wybierz coś interesującego/ryzykownego
→ zaprojektuj test → wykonaj go → obserwuj → zinterpretuj
→ naucz się czegoś nowego → zaprojektuj kolejny test ↺</code></pre>
      <p>Kluczową cechą jest <strong>adaptacja</strong>: gdy wynik jest nieoczekiwany, odkrycie od razu zmienia kolejny test, zamiast mechanicznego trzymania się stałego skryptu.</p>` },
    { h: "Eksploracyjne a ad hoc, zgadywanie błędów i listy kontrolne", body: `
      <p><strong>Eksploracja ≠ losowe klikanie.</strong> Testowanie ad hoc („poklikam i zobaczę”) nie ma struktury ani celu, więc trudno je zmierzyć, powtórzyć, wyjaśnić lub przekazać. Testowanie eksploracyjne zachowuje swobodę, ale dodaje misję, określony zakres, timebox, nacisk na ryzyko, notatki, zapisane pytania i zaplanowane dalsze działania.</p>
      <p><strong>Testowanie eksploracyjne = swoboda + cel + dochodzenie + dyscyplina.</strong></p>
      <p><strong>Zgadywanie błędów</strong> (error guessing) <em>przewiduje</em> prawdopodobne problemy na podstawie doświadczenia („ta aplikacja już psuła się na długich nazwach, więc sprawdzę długie nazwy”). <strong>Testowanie eksploracyjne</strong> <em>bada i się dostosowuje</em>: wpisz długą nazwę → zauważ obcięcie → sprawdź, czy baza przechowuje pełną wartość → odśwież → odczytaj rekord przez API → spróbuj innego pola → porównaj UI i API. Zgadywanie błędów jest często jednym z narzędzi w sesji eksploracyjnej.</p>
      <p><strong>Testowanie oparte na liście kontrolnej</strong> zaczyna się od gotowej listy. Eksploracja może zacząć od tej samej listy, ale rozszerzać ją na bieżąco:</p>
      <pre><code>[ ] Nieprawidłowe logowanie
     ↓ znaleziono różne komunikaty błędów
     ↓ zbadaj spójność komunikatów
     ↓ znaleziono możliwą enumerację kont
     ↓ zbadaj zachowanie dla różnych stanów użytkownika</code></pre>
      <p>ISTQB CTFL zalicza wszystkie trzy (listy kontrolne, zgadywanie błędów, testowanie eksploracyjne) do technik <strong>opartych na doświadczeniu</strong>.</p>` },
    { h: "Testowanie skryptowe a eksploracyjne", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Testowanie skryptowe</th><th>Testowanie eksploracyjne</th></tr></thead>
        <tbody>
          <tr><td>Kierowane wymaganiami</td><td>Kierowane wymaganiami i eksploracją podczas testowania</td></tr>
          <tr><td>Przypadki testowe ustalone z wyprzedzeniem</td><td>Przypadki testowe ustalane podczas testowania</td></tr>
          <tr><td>Potwierdza testowanie względem wymagań</td><td>Bada system/aplikację</td></tr>
          <tr><td>Kładzie nacisk na przewidywanie i podejmowanie decyzji</td><td>Kładzie nacisk na adaptacyjność i uczenie się</td></tr>
          <tr><td>Potwierdzające</td><td>Badawcze</td></tr>
          <tr><td>Dotyczy kontrolowania testów</td><td>Dotyczy usprawniania projektu testów</td></tr>
          <tr><td>Jak odczytywanie przemówienia z kartki</td><td>Jak spontaniczna rozmowa</td></tr>
          <tr><td>To skrypt ma kontrolę</td><td>To umysł testera ma kontrolę</td></tr>
        <tr><td>Główna zaleta: powtarzalność</td><td>Główna zaleta: odkrywanie</td></tr>
          <tr><td>Najlepsze dla znanych wymagań i regresji</td><td>Najlepsze dla nieznanych ryzyk i nieoczekiwanych zachowań</td></tr>
          <tr><td>Dokumentowane jako szczegółowe przypadki testowe</td><td>Dokumentowane jako karty testów, notatki i raporty z sesji</td></tr>
          <tr><td>Bardzo dobrze nadaje się do automatyzacji</td><td>Ludzki osąd jest kluczowy; odkrycia automatyzuje się później</td></tr>
        </tbody>
      </table></div>
      <p>Żadne nie zastępuje drugiego. Dojrzała strategia QA łączy <strong>testy skryptowe</strong> dla znanego, powtarzalnego zachowania, <strong>zautomatyzowaną regresję</strong> dla stabilnych sprawdzeń i <strong>testowanie eksploracyjne</strong> do badania i odkrywania.</p>` },
    { h: "Proces SBTM (Session-Based Test Management)", body: `
      <ol>
        <li><strong>Utwórz taksonomię błędów</strong> — klasyfikację rodzajów błędów, których się spodziewasz.</li>
        <li><strong>Zdefiniuj kartę testową (Test Charter)</strong> — misję sesji.</li>
        <li><strong>Ogranicz czas sesji</strong> — ustal stały czas trwania i trzymaj się go.</li>
        <li><strong>Przejrzyj wyniki</strong> — przeanalizuj, co zostało znalezione.</li>
        <li><strong>Przeprowadź debriefing</strong> — omów sesję z zespołem.</li>
      </ol>
      <p>Sylabus ISTQB Advanced Agile Tester opisuje sesje jako ograniczone czasowo (zwykle <strong>60–120 minut</strong>), prowadzone według karty testu i dokumentowane notatkami, zrzutami ekranu, nagraniami, pokryciem, obserwacjami i anomaliami.</p>` },
    { h: "Pisanie karty testu (test charter)", body: `
      <p><strong>Karta testu</strong> to określenie celów testu i ewentualnie pomysłów na to, jak testować, które prowadzi sesję. Wskazuje kierunek, nie narzucając każdego kliknięcia. Dobra karta odpowiada: co testujemy, dlaczego, jaki obszar lub ryzyko, czego chcemy się dowiedzieć i jakie są ograniczenia?</p>
      <ul>
        <li><strong>Słaba:</strong> „Przetestuj logowanie.”</li>
        <li><strong>Lepsza:</strong> „Zbadaj proces logowania pod kątem błędów uwierzytelniania, nietypowych danych, obsługi sesji i komunikatów o błędach.”</li>
        <li><strong>Bardziej ukierunkowana:</strong> „Zbadaj logowanie z niepoprawnymi, brzegowymi i nietypowymi danymi, zwracając szczególną uwagę na blokadę konta, obsługę błędów i sesję.”</li>
      </ul>
      <p>Karta daje <strong>skupienie</strong>, a nie skrypt. Zbyt ogólna i kończy się losowym klikaniem; zbyt restrykcyjna i nie da się podążać za ciekawymi odkryciami.</p>
      <pre><code>Karta:          Zbadaj [funkcję/obszar], aby odkryć [ryzyko/zachowanie].
Misja:          Zrozum, czy [cel].
Skupienie:      [obszar 1] · [obszar 2] · [obszar 3]
Ryzyka:         [ryzyko 1] · [ryzyko 2]
Pomysły:        [pomysł] · [pomysł] · [pomysł]
Poza zakresem:  [obszar]
Środowisko:     Przeglądarka · OS · Build · Urządzenie
Timebox:        [XX minut]
Tester / Data</code></pre>
      <p><strong>Przykładowa biblioteka kart:</strong></p>
      <ul>
        <li><strong>Rejestracja:</strong> zbadaj walidację, zduplikowane konta, dane brzegowe i obsługę błędów.</li>
        <li><strong>REST API:</strong> zbadaj walidację, uwierzytelnianie, autoryzację, zniekształcone żądania, dane brzegowe, zduplikowane żądania i obsługę błędów.</li>
        <li><strong>Wielonajemcowość:</strong> zbadaj, czy użytkownicy mogą uzyskać dostęp, wyszukać, zmienić, wyeksportować lub wywnioskować dane innego najemcy.</li>
        <li><strong>Przesyłanie plików:</strong> zbadaj typ, rozmiar, nazwę, duplikaty, przerwanie, anulowanie i uszkodzone pliki.</li>
        <li><strong>Wyszukiwanie:</strong> zbadaj puste zapytania, znaki specjalne, duże zbiory wyników, paginację, filtry, sortowanie i równoczesne zmiany danych.</li>
        <li><strong>Płatność:</strong> zbadaj nieudaną płatność, ponowienie, anulowanie, podwójne wysłanie, timeout i przerwaną sieć.</li>
      </ul>` },
    { h: "Prowadzenie sesji: przygotowanie, eksploracja, zapis, podsumowanie", body: `
      <p><strong>1. Przygotowanie:</strong> zrozum funkcję, przeczytaj wymagania, zidentyfikuj ryzyka, przejrzyj wcześniejsze defekty, sprawdź build, przygotuj dane testowe i środowisko, a następnie określ kartę i timebox.</p>
      <p><strong>2. Eksploracja:</strong> obserwuj, zadawaj pytania, stawiaj hipotezy, zmieniaj dane wejściowe, podążaj ciekawymi ścieżkami, porównuj zachowanie z oczekiwaniami, stosuj heurystyki, zbieraj dowody. Gdy dzieje się coś dziwnego: <strong>zatrzymaj się → odtwórz → wyizoluj → rozszerz → porównaj</strong>.</p>
      <p><strong>3. Podsumowanie (debriefing):</strong> Co przetestowaliśmy i czego się nauczyliśmy? Jakie defekty znaleźliśmy? Jakie pytania i ryzyka pozostały? Czego <em>nie</em> przetestowano? Które obszary wymagają kolejnej sesji? Które odkrycia powinny stać się testami skryptowymi lub automatycznymi?</p>
      <p><strong>Timeboxing</strong> nie pozwala eksploracji rozrastać się bez końca i ułatwia komunikowanie nakładu pracy: ok. 30 min na szybkie sprawdzenie, 60 na eksplorację funkcji, 90 na zwykłą pogłębioną sesję, 120 na większe dochodzenie.</p>
      <p><strong>Zapisuj, nie polegaj na pamięci:</strong> działania, dane testowe, obserwacje, hipotezy, pytania, środowisko i build, zrzuty ekranu, nagrania, logi, żądania/odpowiedzi API, błędy konsoli, awarie sieci, defekty oraz obszary pokryte <em>i niepokryte</em>.</p>
      <pre><code>10:03 Zarejestrowano zwykłego użytkownika.
10:06 Powtórzono rejestrację z tym samym e-mailem.
10:07 UI pokazało ogólny błąd.
10:10 API zwróciło 500 zamiast oczekiwanego 4xx.
10:12 Hipoteza: duplikat rejestracji nie jest obsługiwany.
10:15 Odtworzono w drugiej przeglądarce.
10:18 Odtworzono bezpośrednio przez API. Potwierdzone.
10:25 Utworzono zgłoszenie błędu.
10:35 UI przyjmuje hasło 256-znakowe, API je odrzuca.
10:40 Utworzono drugi defekt.</code></pre>
      <p>To pętla uczenia się w praktyce: <strong>obserwacja → hipoteza → nowy test → nowy dowód → nowa hipoteza</strong>.</p>
      <p><strong>Przykładowa sesja 60-minutowa:</strong> 0–5 przeczytaj wymagania, zidentyfikuj ryzyka · 5–10 przygotuj konto, dane i kartę · 10–20 zwykły przepływ · 20–30 dane niepoprawne i brzegowe · 30–40 przerwania i przejścia stanów · 40–50 uprawnienia, współbieżność lub integracje · 50–55 odtwórz znaleziska · 55–60 udokumentuj defekty, ryzyka, pytania i dalsze kroki.</p>` },
    { h: "Zalety i wady", body: `
      <p><strong>Zalety:</strong> znajduje więcej błędów, sprzyja kreatywności, wymaga mniej dokumentacji przygotowawczej, szybko dostosowuje się do zmieniających się wymagań.</p>
      <p><strong>Wady:</strong> silnie zależy od umiejętności testera, trudno zmierzyć pokrycie, trudno dokładnie powtórzyć lub odtworzyć, mniej odpowiednie dla ścisłych wymagań zgodności/audytu.</p>` },
    { h: "Kiedy je stosować", body: `
      <ul>
        <li>Wymagania są niekompletne lub niejednoznaczne.</li>
        <li>Wczesne iteracje funkcji.</li>
        <li>Krytyczne aplikacje wymagające dogłębnego badania.</li>
        <li>Dostępni są doświadczeni testerzy.</li>
      <li>Funkcja jest nowa, kryteria akceptacji są minimalne lub produkt szybko się zmienia.</li>
        <li>Brakuje czasu na przygotowanie pełnego zestawu testów skryptowych.</li>
        <li>Badasz podejrzewany defekt. Zapytaj „co jeszcze może być z tym powiązane?”, bo jeden defekt często ujawnia całą klasę problemów.</li>
        <li>Zachowanie integracji jest niepewne, przepływy są złożone lub przypadki brzegowe są prawdopodobne.</li>
        </ul>
      <p><strong>Przykład złożonego przepływu:</strong> w procesie zakupu (<em>Produkt → Koszyk → Rabat → Adres → Płatność → Potwierdzenie</em>) badaj przerwania i kombinacje: usuń produkt w trakcie, zmień ilość po rabacie, pozwól wygasnąć sesji, odśwież stronę płatności, naciśnij Wstecz, otwórz dwie karty, zmień adres po naliczeniu wysyłki, ponów płatność, odłącz sieć.</p>` },
    { h: "Testowanie eksploracyjne w Agile i CI/CD", body: `
      <p>Agile przynosi częste zmiany i często niepełne informacje, co dobrze pasuje do eksploracji. Materiały ISTQB dla Agile umieszczają ją w trakcie iteracji, podczas przeglądów i demo, po dużych zmianach i wtedy, gdy kryteria akceptacji są niejasne. Badaj nowe historyjki, zmienioną funkcjonalność, punkty integracji, przyrosty sprintu i obszary wysokiego ryzyka.</p>
      <pre><code>Commit → Build → Unit tests → API tests → UI smoke tests
→ Deploy test environment → Exploratory testing
→ Defect investigation → Automated regression → Release</code></pre>
      <p>Automatyzacja CI/CD daje <strong>szybką, powtarzalną informację zwrotną</strong>; testowanie eksploracyjne daje <strong>adaptacyjne badanie przez człowieka</strong>. Eksploracja łączy rozwój, wymagania, automatyczne sprawdzenia i walidację z perspektywy użytkownika.</p>` },
    { h: "Heurystyki testowania eksploracyjnego: SFDPOT i HICCUPPS", body: `
      <p>Heurystyki nadają testowaniu eksploracyjnemu strukturę bez zamieniania go w skrypt — to podpowiedzi, gdzie spojrzeć dalej, a nie kroki do wykonania po kolei.</p>
      <p><strong>SFDPOT</strong> („San Francisco Depot") to mnemonik mapujący pokrycie, pomagający zdecydować, które części produktu eksplorować:</p>
      <ul>
        <li><strong>S</strong>tructure (Struktura) — z czego składa się produkt (kod, pliki, zależności).</li>
        <li><strong>F</strong>unction (Funkcja) — co robi (funkcje, polecenia, operacje).</li>
        <li><strong>D</strong>ata (Dane) — co przetwarza (dane wejściowe, wyjściowe, formaty, przechowywanie).</li>
        <li><strong>P</strong>latform (Platforma) — od czego zależy (system operacyjny, przeglądarka, sprzęt, sieć).</li>
        <li><strong>O</strong>perations (Operacje) — jak jest faktycznie używany w prawdziwym świecie (typowe i nietypowe użycie).</li>
        <li><strong>T</strong>ime (Czas) — jak wpływa na niego czas (limity czasu, strefy czasowe, współbieżność, kolejność).</li>
      </ul>
      <p><strong>HICCUPPS</strong> to heurystyka wyroczni — sposób na ustalenie, czy zaobserwowane zachowanie jest faktycznie błędem, gdy nie ma jawnej specyfikacji do porównania:</p>
      <ul>
        <li><strong>H</strong>istory (Historia) — czy zachowuje się spójnie z tym, jak zachowywał się wcześniej?</li>
        <li><strong>I</strong>mage (Wizerunek) — czy pasuje do wizerunku/reputacji, jaką firma chce prezentować?</li>
        <li><strong>C</strong>omparable products (Produkty porównywalne) — jak podobne produkty radzą sobie z tym?</li>
        <li><strong>C</strong>laims (Deklaracje) — czy zgadza się z tym, co twierdzi dokumentacja, marketing lub tekst pomocy?</li>
        <li><strong>U</strong>ser expectations (Oczekiwania użytkownika) — czy zgadza się z tym, czego oczekiwałby rozsądny użytkownik?</li>
        <li><strong>P</strong>roduct (Produkt) — czy jest wewnętrznie spójny z resztą produktu?</li>
        <li><strong>P</strong>urpose (Cel) — czy służy rzeczywistemu celowi funkcji?</li>
        <li><strong>S</strong>tatutes (Przepisy) — czy jest zgodny z prawem, regulacjami lub standardami?</li>
      </ul>
      <p>Razem zamieniają „eksploruj aplikację" z niejasnej instrukcji w powtarzalny zestaw soczewek, po które może sięgnąć każdy tester.</p>` },
    { h: "Praktyczne heurystyki: co jeśli, dane, stan i przerwania", body: `
      <p>Heurystyka to praktyczna reguła kciuka, która ukierunkowuje badanie. Miej je zawsze pod ręką:</p>
      <ul>
        <li><strong>Co jeśli…</strong> wartość jest pusta, ogromna lub malutka? Użytkownik naciśnie Wstecz, odświeży lub kliknie dwukrotnie? Żądanie się powtórzy, sieć zniknie, dwóch użytkowników zadziała naraz, sesja wygaśnie albo dane zmienią się w innej karcie?</li>
        <li><strong>Zmień kontekst:</strong> przeglądarki, urządzenia, rozmiary ekranu, role i uprawnienia, ustawienia regionalne, języki, strefy czasowe, warunki sieciowe, stany konta.</li>
        <li><strong>Zmień dane:</strong> puste, null, zero, ujemne, min., maks., maks. + 1, bardzo długie, bardzo krótkie, Unicode, białe znaki, znaki specjalne, duplikaty, zniekształcone wartości, nieoczekiwane typy.</li>
        <li><strong>CRUD + uprawnienia:</strong> czy ten użytkownik może wykonać Create/Read/Update/Delete i co się dzieje bez uprawnień? Potem kombinacje i niedozwolone przejścia.</li>
        <li><strong>Granice:</strong> min. − 1, min., min. + 1, maks. − 1, maks., maks. + 1.</li>
        <li><strong>Stan:</strong> jakie stany może osiągnąć ten obiekt? Dla <code>Draft → Submitted → Approved → Completed</code> spróbuj niedozwolonych przejść, np. <code>Completed → Draft</code>, <code>Approved → Submitted</code>, albo aktualizacji usuniętego elementu.</li>
        <li><strong>Współbieżność:</strong> dwóch użytkowników na jednym rekordzie, dwie przeglądarki, dwie karty, zduplikowane żądania, równoczesna aktualizacja/usunięcie, równoczesne logowanie, równoległe wywołania API.</li>
        <li><strong>Przerwania:</strong> odśwież, Wstecz, Dalej, zamknij i otwórz kartę, rozłącz i połącz sieć, timeouty, wygaśnięcie sesji.</li>
        <li><strong>Spójność:</strong> UI a API, przeglądarka A a B, użytkownik A a B, obecna a poprzednia wersja.</li>
      </ul>
      <p>Cały czas zadawaj pytania śledczego: <em>Co się stało? Czego się spodziewałem? Czy różnica jest istotna? Dlaczego tak mogło się stać? Co mogłoby to wyjaśnić? Jaki test rozróżni wyjaśnienia? Co jeszcze może być dotknięte?</em></p>` },
    { h: "Nacisk na ryzyko i przykłady", body: `
      <p>Ustalaj priorytety wg wzoru <strong>Ryzyko = Prawdopodobieństwo × Wpływ</strong>. Zamiast przeklikiwać mało ryzykowne UI, poświęć sesję tam, gdzie awaria najbardziej szkodzi: uwierzytelnianie, autoryzacja, płatności, dane osobowe, izolacja najemców, uprawnienia, usuwanie danych, współbieżność, integracje i krytyczne procesy biznesowe.</p>
      <p><strong>Logowanie.</strong> <em>Karta: zbadaj uwierzytelnianie z danymi niepoprawnymi, brzegowymi, nieoczekiwanymi i powtarzanymi, z naciskiem na bezpieczeństwo, obsługę błędów i sesję.</em> Pomysły: poprawne/niepoprawne/puste dane; długości min./maks./maks. + 1; spacje, Unicode, znaki specjalne; logowanie, a potem wylogowanie, odświeżenie, Wstecz, zamknięcie przeglądarki lub druga karta; powtarzane nieudane próby i blokada; spójne komunikaty błędów; sesja unieważniona po wylogowaniu; chronione strony po wylogowaniu; to samo konto w dwóch przeglądarkach.</p>
      <p><strong>REST API.</strong> Eksploracja to nie tylko UI. Próbuj brakujących, dodatkowych lub źle typowanych pól, null, pustych ciągów, zniekształconego JSON-a, niepoprawnego lub wygasłego uwierzytelnienia, złej metody lub content type, zduplikowanych i powtarzanych żądań, dużych lub pustych ładunków, niepoprawnych, nieistniejących lub usuniętych ID, równoległych żądań, granic paginacji i kombinacji sortowania/filtrów. Obserwuj status, ciało, nagłówki, schemat, strukturę błędów, czas, trwałość danych, autoryzację i skutki uboczne (zob. Moduł 6).</p>
      <p><strong>Wielonajemcowość.</strong> <em>Karta: zbadaj izolację najemców, gdy użytkownicy różnych najemców jednocześnie odczytują, tworzą, aktualizują, wyszukują i usuwają dane projektów.</em> Umieść Użytkownika A w najemcy A, a B w najemcy B, utwórz podobne projekty w obu, a następnie próbuj wyszukać dane drugiego najemcy, bezpośrednie URL-e, podmienione ID, strony z cache, przełączanie wylogowania/logowania, eksporty, powiadomienia, indeksy wyszukiwania, załączniki i zadania w tle. Oczekiwana właściwość: nikt nie widzi ani nie zmienia danych innego najemcy, chyba że produkt wyraźnie na to pozwala.</p>` },
    { h: "Poza funkcjonalnością: bezpieczeństwo, użyteczność, kompatybilność i wydajność", body: `
      <p><strong>Bezpieczeństwo:</strong> eksploracja może ujawnić problemy bezpieczeństwa, ale <em>nie zastępuje</em> dedykowanych, autoryzowanych testów bezpieczeństwa. Przydatne pytania: Czy da się obejść autoryzację? Czy mogę podstawić ID innego użytkownika? Czy ukryte funkcje są dostępne bezpośrednio? Co się dzieje po wylogowaniu lub wygaśnięciu sesji? Czy komunikaty błędów ujawniają wrażliwe dane? Czy żądania można powtórzyć? Czy mogę manipulować wartościami po stronie klienta? Czy zwykły użytkownik dociera do funkcji administracyjnych?</p>
      <p><strong>Użyteczność:</strong> szukaj mylącej nawigacji, niespójnych kontrolek, niejasnych komunikatów lub terminologii, słabego wychodzenia z błędów, niedostępnych funkcji i łatwych do przypadkowego uruchomienia destrukcyjnych akcji. Wcielaj się w persony: nowy użytkownik, ekspert, niecierpliwy użytkownik, użytkownik popełniający błędy, osoba z małą wiedzą domenową.</p>
      <p><strong>Kompatybilność:</strong> Chrome, Edge, Firefox, Safari, przeglądarki mobilne, wersje systemów, rozmiary ekranu, poziomy powiększenia, ekrany high-DPI. Wypatruj rozjechanego układu, nieobsługiwanych kontrolek, zachowań specyficznych dla przeglądarki, błędów JavaScript, różnic w renderowaniu i czasie, problemów z przesyłaniem plików i klawiaturą.</p>
      <p><strong>Sygnały wydajnościowe:</strong> eksploracja nie zastępuje testów wydajności, ale może wychwycić problemy: strona nagle zwalnia, opóźnienie rośnie z każdym powtórzeniem, UI słabnie przy dużych danych, rośnie zużycie pamięci, kilka kart powoduje problemy z zasobami. Kontynuuj to kontrolowanym testem w JMeter lub k6.</p>` },
    { h: "Od odkrycia do automatyzacji", body: `
      <p>Eksploracja opiera się na ludzkiej obserwacji i rozumowaniu, ale stale zasila automatyzację:</p>
      <pre><code>Eksploruj → odkryj ważne zachowanie → zrozum stabilne
oczekiwane zachowanie → utwórz test regresji → zautomatyzuj, jeśli warto</code></pre>
      <p><em>Przykład:</em> eksploracja pokazuje, że podwójne kliknięcie <strong>Zapisz</strong> tworzy dwa kontakty. Potwierdź ręcznie → zgłoś defekt → programista go naprawia → dodaj test regresji w Playwright, np. <code>expect(contactCount).toBe(1)</code>. Teraz automatyzacja chroni zachowanie odkryte podczas eksploracji.</p>
      <p><strong>Rutyna z Playwright:</strong> wdroż build → uruchom testy dymne → wybierz kartę → eksploruj ręcznie z DevTools i logami sieci → odtwórz to, co ciekawe → zdecyduj, czy to defekt → zgłoś błąd → zautomatyzuj, jeśli jest ważny i stabilny.</p>
      <p><strong>Narzędzia pomocnicze:</strong> zarządzanie testami (Jira, Azure DevOps, TestRail, Zephyr, Xray) · notatki (Markdown, Notion, OneNote, Google Docs) · dowody (zrzuty ekranu, nagrania, DevTools, logi sieci/konsoli) · eksploracja API (Postman, Insomnia, curl) · późniejsza automatyzacja (Playwright, Cypress, Selenium, REST Assured, Newman) · dalsze testy wydajności (JMeter, k6). To nie narzędzia czynią sesję eksploracyjną, tylko podejście.</p>` },
    { h: "Raportowanie, pokrycie, metryki i Definition of Done", body: `
      <p><strong>Błąd znaleziony podczas eksploracji wciąż musi być odtwarzalny.</strong> Przykładowy tytuł: <em>API zwraca HTTP 500 przy rejestracji istniejącego adresu e-mail.</em> Podaj warunki wstępne (istnieje użytkownik z <code>test@example.com</code>), kroki (POST <code>/users</code> z tym adresem), wynik oczekiwany (odpowiedź z błędem klienta zgodna z kontraktem API), rzeczywisty (HTTP 500), dowody (żądanie, odpowiedź, znacznik czasu, środowisko, logi) i źródło (<em>znalezione w sesji „Rejestracja: duplikaty i dane brzegowe”</em>).</p>
      <p><strong>Pokrycie ma kilka wymiarów:</strong> funkcje, ryzyka, dane, przepływy, stany, role, platformy i integracje. „Przetestowałem ekran” to nie jest stwierdzenie o pokryciu. Powinieneś umieć powiedzieć, <strong>co zbadano, a co pozostaje nieznane</strong>.</p>
      <p><strong>Metryki, z rozwagą:</strong> czas sesji, karta, pokryte obszary, zbadane ryzyka, znalezione defekty i pytania, kolejne sesje, utworzone testy regresji i kandydaci do automatyzacji, nierozwiązane ryzyka. Unikaj efektownych, lecz pustych liczb („500 kliknięć, więc testy były dobre”). Zamiast tego pytaj: <em>jakie ważne informacje dała ta sesja?</em></p>
      <p><strong>Definition of Done sesji:</strong> karta została zrealizowana; kluczowe ryzyka zbadano; obserwacje, dowody i pytania zapisano; defekty zgłoszono; wskazano nieprzetestowane obszary i dalsze działania. Zakończenie nie oznacza „wszystko przetestowane”. Oznacza, <em>że zbadaliśmy misję i potrafimy wyjaśnić, czego się dowiedzieliśmy i co pozostaje nieznane.</em></p>` },
    { h: "Typowe błędy i ściąga", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Błąd</th><th>Lepiej</th></tr></thead>
        <tbody>
          <tr><td>Losowe klikanie bez celu</td><td>Napisz kartę testu</td></tr>
          <tr><td>Brak notatek, więc odkryć nie da się odtworzyć</td><td>Zapisuj działania, obserwacje i dowody</td></tr>
          <tr><td>Testowanie wszystkiego jednakowo</td><td>Ustalaj priorytety według ryzyka</td></tr>
          <tr><td>Traktowanie eksploracji jak regresji</td><td>Używaj jej do badania niewiadomych i zmian</td></tr>
          <tr><td>Nieprzekształcanie odkryć w testy regresji</td><td>Automatyzuj lub dokumentuj stabilne, wartościowe sprawdzenia</td></tr>
          <tr><td>Brak timeboxa</td><td>Prowadź skupione sesje</td></tr>
          <tr><td>Niejasne zgłoszenia defektów</td><td>Zbieraj dowody podczas eksploracji</td></tr>
          <tr><td>Zbyt restrykcyjna karta</td><td>Określ misję, a nie każde kliknięcie</td></tr>
        </tbody>
      </table></div>
      <p>Słabości takie jak niespójne pokrycie, słaba odtwarzalność i zależność od umiejętności zmniejszają karty testów, timeboxy, notatki, analiza ryzyka, podsumowania, zbieranie dowodów, przeglądy koleżeńskie, późniejsze testy skryptowe i automatyzacja.</p>
      <p><strong>Ściąga egzaminacyjna:</strong></p>
      <pre><code>SCRIPTED     Design → Execute → Evaluate
EXPLORATORY  Learn ↔ Design ↔ Execute ↔ Evaluate

Exploratory ≠ Random
Exploratory = Mission + Timebox + Investigation
            + Adaptation + Notes + Learning</code></pre>
      <p><strong>Definicja w jednym zdaniu:</strong> testowanie eksploracyjne to zdyscyplinowane podejście oparte na doświadczeniu, w którym tester jednocześnie poznaje produkt, projektuje testy, wykonuje je, ocenia wyniki i dostosowuje kolejny test do tego, co odkrył.</p>
      <p><strong>Dalsza lektura:</strong> <a href="https://istqb-glossary.page/" target="_blank" rel="noopener">ISTQB Glossary</a> · <a href="https://istqb.org/" target="_blank" rel="noopener">ISTQB</a> · <a href="https://martinfowler.com/bliki/ExploratoryTesting.html" target="_blank" rel="noopener">Martin Fowler: Exploratory Testing</a></p>` }
  ]
},
{
  id: "rest-api-testing",
  num: 6,
  title: "Testowanie REST API",
  summary: "Walidacja usług RESTful poprzez wysyłanie żądań HTTP i sprawdzanie odpowiedzi — bez potrzeby interfejsu użytkownika.",
  takeaway: "Testowanie REST API polega na walidacji usług sieciowych RESTful poprzez wysyłanie żądań HTTP (GET, POST, PUT, DELETE) i sprawdzanie odpowiedzi — bez potrzeby interfejsu użytkownika.",
  lessons: [
    { h: "Czym jest REST?", body: `
      <p><strong>REST</strong> (Representational State Transfer) to styl architektoniczny budowania usług sieciowych, powszechnie stosowany w komunikacji usług chmurowych. <strong>API</strong> to zestaw instrukcji i poleceń programistycznych, które pozwalają programom komunikować się i wymieniać funkcjonalność — na przykład „API Google” udostępniające funkcje wyszukiwania, tłumaczenia czy kalendarza.</p>` },
    { h: "4 podstawowe metody HTTP", body: `
      <ul>
        <li><strong>GET</strong> — pobiera dane z serwera poprzez URI; nie powinno mieć efektów ubocznych na dane.</li>
        <li><strong>POST</strong> — tworzy nową encję lub wysyła dane do serwera (np. wysyłanie formularzy, przesyłanie plików).</li>
        <li><strong>PUT</strong> — tworzy nową encję lub aktualizuje istniejącą.</li>
        <li><strong>DELETE</strong> — usuwa zasób(y) zidentyfikowane przez URI.</li>
      </ul>
      <p>Poza czterema podstawowymi metodami regularnie spotkasz:</p>
      <ul>
        <li><strong>PATCH</strong> — zwykle <em>częściowa</em> aktualizacja (zmienia tylko przesłane pola), podczas gdy PUT zwykle zastępuje cały zasób.</li>
        <li><strong>HEAD</strong> — zwraca tylko nagłówki, bez zwykłego ciała odpowiedzi.</li>
        <li><strong>OPTIONS</strong> — pyta, jakie operacje/możliwości obsługuje endpoint (używane też przez przeglądarki w zapytaniu wstępnym CORS).</li>
      </ul>
      <p>Typowy zestaw zasobów: <code>GET /api/contacts</code>, <code>GET /api/contacts/123</code>, <code>POST /api/contacts</code>, <code>PUT</code>/<code>PATCH</code>/<code>DELETE /api/contacts/123</code>. Zawsze traktuj <strong>kontrakt API jako źródło prawdy</strong>: rzeczywiste implementacje nie zawsze dokładnie trzymają się podręcznikowej semantyki REST.</p>` },
    { h: "Budowa żądania i odpowiedzi", body: `
      <p>Żądanie przechodzi przez <strong>klient QA → żądanie HTTP → REST API → logika biznesowa → baza danych/usługi → odpowiedź HTTP</strong>. Testowanie na tej warstwie jest szybsze i bardziej ukierunkowane niż testy UI i ujawnia defekty ukryte pod UI.</p>
      <p>Żądanie może zawierać: metodę, URL, <strong>parametry ścieżki</strong>, <strong>parametry zapytania</strong>, nagłówki, uwierzytelnianie i ciało.</p>
      <pre><code>GET /api/users/123?include=orders&amp;page=2
Authorization: Bearer abc123
Accept: application/json</code></pre>
      <p>Tutaj <code>123</code> to parametr ścieżki; <code>include=orders</code> i <code>page=2</code> to parametry zapytania. Żądanie tworzące zasób i jego odpowiedź:</p>
      <pre><code>POST /api/contacts
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{ "firstName": "John", "lastName": "Smith" }

HTTP/1.1 201 Created
Content-Type: application/json

{ "id": "12345", "firstName": "John", "lastName": "Smith" }</code></pre>
      <p><strong>Nagłówki warte przetestowania:</strong> <code>Content-Type</code>, <code>Accept</code>, <code>Authorization</code>, <code>Cache-Control</code>, <code>Location</code>, <code>ETag</code>, <code>Set-Cookie</code> oraz identyfikatory żądania/korelacji. Sprawdź brakujące nagłówki, błędny <code>Content-Type</code>, nieobsługiwane wartości <code>Accept</code> oraz brakujący lub nieprawidłowy <code>Authorization</code>.</p>` },
    { h: "Kody statusu HTTP", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Klasa</th><th>Typowe kody</th></tr></thead>
        <tbody>
          <tr><td><strong>2xx</strong> Sukces</td><td>200 OK · 201 Created · 202 Accepted · 204 No Content</td></tr>
          <tr><td><strong>3xx</strong> Przekierowanie</td><td>301 Moved Permanently · 302 Found · 304 Not Modified</td></tr>
          <tr><td><strong>4xx</strong> Błąd klienta</td><td>400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 405 Method Not Allowed · 409 Conflict · 415 Unsupported Media Type · 422 Unprocessable Content · 429 Too Many Requests</td></tr>
          <tr><td><strong>5xx</strong> Błąd serwera</td><td>500 Internal Server Error · 501 Not Implemented · 502 Bad Gateway · 503 Service Unavailable · 504 Gateway Timeout</td></tr>
        </tbody>
      </table></div>
      <p><strong>Nie oczekuj 200 dla każdego udanego żądania.</strong> Utworzenie zwykle zwraca 201, usunięcie często 204, zadanie asynchroniczne 202: oczekiwany status zależy od operacji i kontraktu. A każdy 5xx wywołany danymi od klienta to defekt: błędne dane wejściowe powinny dostać 4xx.</p>` },
    { h: "Projektowanie testów wejścia: parametry, ciała i wartości brzegowe", body: `
      <p><strong>Parametry ścieżki</strong> (<code>GET /users/{id}</code>): poprawne ID, nieistniejące ID, zero, ujemne, bardzo duże, tekst zamiast liczby, wartości typu null, brakujące, zniekształcone, znaki specjalne.</p>
      <p><strong>Parametry zapytania</strong> (<code>GET /users?page=2&amp;limit=20</code>): wartości normalne, zero, ujemne, bardzo duże, limity min./maks., brakujące, puste, zduplikowane, niepoprawne typy, znaki specjalne, kodowanie URL.</p>
      <p><strong>Ciała JSON:</strong> poprawne dane, brak wymaganych pól, puste ciągi, null, błędne typy, niepoprawne formaty, nieoczekiwane pola, duplikaty, zbyt duże wartości, zniekształcony JSON.</p>
      <pre><code>{"firstName":"John","lastName":"Smith","age":30}   poprawne
{"firstName":"John","age":30}                       brak pola
{"firstName":"","lastName":"Smith"}                 pusta wartość
{"firstName":123,"lastName":true}                   błędne typy</code></pre>
      <p><strong>Testy pozytywne</strong> potwierdzają, że poprawne żądania kończą się zgodnie z oczekiwaniami. <strong>Testy negatywne</strong> obejmują niepoprawne/wygasłe uwierzytelnienie, niepoprawne ID, duplikaty, nieobsługiwane metody, niepoprawny <code>Content-Type</code>, zniekształcony JSON, zbyt duże żądania i nieoczekiwane parametry: API powinno bezpiecznie odrzucić każdy przypadek czytelnym 4xx.</p>
      <p><strong>Analiza wartości brzegowych</strong> (Moduł 2) dotyczy ciągów znaków, liczb całkowitych, tablic, paginacji, rozmiarów plików, ilości, dat i kwot. Nazwa użytkownika 3–30 znaków → testuj <strong>2, 3, 4, 29, 30, 31</strong>. Wiek 18–120 → testuj <strong>17, 18, 19, 119, 120, 121</strong>.</p>
      <p><strong>Testy sterowane danymi:</strong> uruchamiaj tę samą logikę testu na zbiorze danych (poprawne, brzegowe, niepoprawne, duplikaty, Unicode, różna wielkość liter, znaki specjalne) zamiast na jednym zakodowanym na sztywno przykładzie.</p>` },
    { h: "Walidacja odpowiedzi, schematy i testy kontraktowe", body: `
      <p>Waliduj znacznie więcej niż kod statusu:</p>
      <ul>
        <li>kod statusu, nagłówki odpowiedzi i <code>Content-Type</code></li>
        <li>strukturę/schemat JSON, typy danych, pola wymagane i rzeczywiste wartości</li>
        <li>reguły biznesowe</li>
        <li>stan bazy danych, gdy to zasadne</li>
        <li>czas odpowiedzi, gdy liczy się wydajność</li>
      </ul>
      <p><strong>OpenAPI/Swagger</strong> i <strong>JSON Schema</strong> definiują kontrakt API: metody, parametry, schematy żądań/odpowiedzi, wymagania uwierzytelniania i odpowiedzi błędów. <strong>Testy kontraktowe</strong> sprawdzają, czy implementacja wciąż do niego pasuje. Przykładowy defekt: dokumentacja mówi, że <code>id</code> to liczba całkowita, a API zwraca ciąg znaków. To <strong>dryf kontraktu</strong> (contract drift), który może zepsuć każdego konsumenta API.</p>
      <p><strong>Walidacja bazy danych:</strong> tam, gdzie wnosi wartość, potwierdź, że operacja dała oczekiwany stan trwały (rekordy, relacje, znaczniki czasu, wartości domyślne, status). Nie uzależniaj jednak <em>każdego</em> testu API od bezpośredniego dostępu do bazy: takie powiązanie spowalnia zestawy testów i czyni je kruchymi.</p>` },
    { h: "Jak testować REST API", body: `
      <p>Potrzebujesz dwóch rzeczy: (1) narzędzia lub frameworka testowego oraz (2) skonfigurowanych żądań albo niestandardowego kodu testowego. Popularne narzędzia: <strong>Advanced REST Client</strong>, <strong>Postman</strong>, <strong>cURL</strong>.</p>` },
    { h: "Przebieg testowania krok po kroku", body: `
      <ol>
        <li>Otwórz swojego klienta REST.</li>
        <li>Wprowadź docelowy adres URL API.</li>
        <li>Wybierz metodę HTTP.</li>
        <li>Ustaw nagłówki żądania.</li>
        <li>Podaj treść żądania (dla POST/PUT).</li>
        <li>Wyślij żądanie.</li>
        <li>Zwaliduj odpowiedź — kod statusu, treść/schemat odpowiedzi oraz nagłówki — względem oczekiwanych wyników.</li>
      </ol>` },
    { h: "Wyzwania testowania API", body: `
      <ul>
        <li>Wybór właściwych kombinacji parametrów do przetestowania.</li>
        <li>Poprawne sekwencjonowanie wywołań.</li>
        <li>Weryfikacja samego wyniku bez interfejsu użytkownika, na który można spojrzeć.</li>
        <li>Integracja testów API ze strategią automatyzacji opartą na GUI.</li>
      </ul>` },
    { h: "Uwierzytelnianie i autoryzacja API oraz poza REST", body: `
      <p><strong>Testowanie uwierzytelniania i autoryzacji</strong> to jedna z najwartościowszych rzeczy, jakie robi testowanie API, ponieważ zepsuta kontrola dostępu ujawnia dane lub działania osobom, które nie powinny ich mieć:</p>
      <ul>
        <li><strong>Klucze API</strong> — najprostszy schemat; sprawdź, czy żądania bez ważnego klucza są odrzucane oraz czy unieważniony klucz przestaje działać natychmiast.</li>
        <li><strong>OAuth 2.0</strong> — standard delegowanego dostępu (np. „zaloguj się przez Google"); testuj obsługę wygaśnięcia tokenu, przepływy tokenu odświeżania (refresh token) oraz to, czy zakresy (scopes) są faktycznie egzekwowane (token o zakresie „odczyt" nie powinien móc zapisywać).</li>
        <li><strong>JWT (JSON Web Tokens)</strong> — samodzielne tokeny zawierające roszczenia (claims); testuj walidację podpisu (zmanipulowany token musi zostać odrzucony), wygaśnięcie (roszczenie <code>exp</code>) oraz to, czy serwer nie ufa ślepo roszczeniom bez weryfikacji podpisu.</li>
      </ul>
      <p><strong>Testowanie autoryzacji</strong> wykracza poza pytanie „czy ten użytkownik jest zalogowany" i sprawdza „czy ten konkretny użytkownik może zrobić tę konkretną rzecz" — testowanie z wieloma kontami o różnych rolach/uprawnieniach, aby potwierdzić, że jeden użytkownik nie może uzyskać dostępu do danych innego użytkownika ani ich zmodyfikować (kategoria błędów na tyle poważna, że doczekała się własnej nazwy w Module 10: Broken Access Control).</p>
      <p><strong>Poza REST:</strong> nie każde API jest RESTowe, a każdy styl zmienia sposób testowania:</p>
      <ul>
        <li><strong>GraphQL</strong> — pojedynczy punkt końcowy, w którym klient określa dokładnie, jakich danych chce w zapytaniu. Nacisk testowania przesuwa się w stronę walidacji schematu, sprawdzania, że zapytania nie mogą żądać nadmiernych/zagnieżdżonych danych (ryzyko odmowy usługi charakterystyczne dla GraphQL), oraz testowania mutacji (odpowiednik POST/PUT w GraphQL) z tym samym rygorem autoryzacyjnym co zapisy REST.</li>
        <li><strong>gRPC</strong> — binarny protokół typu contract-first (wykorzystujący Protocol Buffers), zbudowany pod szybką komunikację między usługami. Testowanie zwykle pracuje bezpośrednio na definicji kontraktu <code>.proto</code>, a narzędzia takie jak <code>grpcurl</code> czy BloomRPC zastępują to, czym Postman/cURL są dla REST.</li>
      </ul>` },
    { h: "Izolacja użytkowników i najemców", body: `
      <p><strong>Uwierzytelnianie</strong> pyta <em>kim jesteś?</em>; <strong>autoryzacja</strong> pyta <em>czy wolno ci to zrobić?</em> Dla uwierzytelniania sprawdź Basic Auth, tokeny Bearer, klucze API, OAuth 2.0 i JWT z poświadczeniami poprawnymi, niepoprawnymi, brakującymi, wygasłymi, zniekształconymi, cudzymi i unieważnionymi.</p>
      <p>Dla autoryzacji utwórz <strong>Użytkownika A, Użytkownika B i Administratora</strong>, a potem sprawdź każdego z nich wobec zasobów pozostałych i operacji uprzywilejowanych. Kluczowe pytanie: czy jeden użytkownik może odczytać lub zmienić obiekty innego?</p>
      <p>W systemach <strong>wielonajemcowych</strong> (multi-tenant) sprawdź, czy użytkownik najemcy A nie może odczytać, zaktualizować, usunąć, wyszukać ani nawet <em>wywnioskować</em> zasobów najemcy B. Badaj ID, filtry, paginację, eksporty, endpointy masowe i pośrednie odwołania, bo tam często kryją się wycieki.</p>` },
    { h: "Przepływy, stan i podchwytliwe dane", body: `
      <p><strong>Cykl CRUD:</strong> <code>CREATE → READ → UPDATE → READ → DELETE → READ</code>. Każdy READ dowodzi, że poprzedni krok naprawdę zadziałał. Następnie łącz realne przepływy: <em>Rejestracja → Logowanie → Pobranie tokena → Utworzenie kontaktu → Odczyt → Aktualizacja → Usunięcie → Weryfikacja usunięcia</em>.</p>
      <p><strong>Idempotentność i duplikaty:</strong> powtórzenie operacji, którą kontrakt określa jako idempotentną (PUT, DELETE, często PATCH), powinno zostawić zasób w tym samym zamierzonym stanie. Powtarzaj też POST: czy tworzą zduplikowane zamówienia, kontakty lub płatności?</p>
      <p><strong>Paginacja, sortowanie, filtrowanie:</strong> pierwsza/środkowa/ostatnia strona, poza ostatnią stroną, strona zerowa/ujemna, limit min./maks./ogromny, zduplikowane lub brakujące rekordy między stronami; rosnąco/malejąco, niepoprawne pola sortowania, wiele pól, wielkość liter; poprawne/niepoprawne/puste filtry, wiele filtrów, filtry w połączeniu z paginacją.</p>
      <p><strong>Daty i godziny:</strong> UTC a czas lokalny, konwersje stref czasowych, zmiana czasu letniego, lata/dni przestępne, północ/koniec dnia, daty przeszłe/przyszłe i niepoprawne, obsługiwane formaty. Ustal dokładną semantykę wartości takich jak <code>2026-09-23T10:00:00Z</code>.</p>
      <p><strong>Współbieżność:</strong> dwóch użytkowników modyfikuje ten sam zasób jednocześnie. Sprawdź blokowanie optymistyczne (np. <code>ETag</code>/<code>If-Match</code> → 409/412), wyścigi (race conditions), utracone aktualizacje, zduplikowane operacje i stan końcowy.</p>` },
    { h: "OWASP API Security Top 10 (2023)", body: `
      <p>Używaj listy OWASP jako listy kontrolnej bezpieczeństwa opartej na ryzyku, a nie jako dodatku do sprawdzania kodów statusu:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th>Ryzyko</th><th>Jak QA to sprawdza</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Broken Object Level Authorization (BOLA)</td><td>Zażądaj obiektu o ID należącym do innego użytkownika</td></tr>
          <tr><td>2</td><td>Broken Authentication</td><td>Brakujące, niepoprawne, wygasłe, zniekształcone, unieważnione tokeny</td></tr>
          <tr><td>3</td><td>Broken Object Property Level Authorization</td><td>Spróbuj ustawić pola uprzywilejowane: <code>role</code>, <code>ownerId</code>, <code>tenantId</code>, <code>isAdmin</code></td></tr>
          <tr><td>4</td><td>Unrestricted Resource Consumption</td><td>Ogromne ładunki/tablice, ekstremalna paginacja, duża liczba żądań</td></tr>
          <tr><td>5</td><td>Broken Function Level Authorization</td><td>Wywołaj endpointy administracyjne/uprzywilejowane każdą rolą</td></tr>
          <tr><td>6</td><td>Unrestricted Access to Sensitive Business Flows</td><td>Powtarzaj resety haseł, głosy, kupony, rejestracje, zamówienia</td></tr>
          <tr><td>7</td><td>Server-Side Request Forgery (SSRF)</td><td>Jeśli API pobiera URL-e, sprawdź ograniczenia po stronie serwera (tylko w autoryzowanym środowisku testowym)</td></tr>
          <tr><td>8</td><td>Security Misconfiguration</td><td>Informacje debugowe, ślady stosu, zbędne metody, domyślne poświadczenia, CORS/TLS</td></tr>
          <tr><td>9</td><td>Improper Inventory Management</td><td>Znajdź przestarzałe, nieudokumentowane, debugowe lub wycofane wersje API</td></tr>
          <tr><td>10</td><td>Unsafe Consumption of APIs</td><td>Podawaj zniekształcone, niepełne, wolne, zbyt duże odpowiedzi zewnętrznych usług</td></tr>
        </tbody>
      </table></div>
      <p>Moduł 10 omawia testowanie bezpieczeństwa aplikacji szerzej.</p>` },
    { h: "Narzędzia, automatyzacja i CI/CD", body: `
      <p><strong>Postman</strong> obsługuje żądania, kolekcje, środowiska, zmienne, skrypty, asercje, uwierzytelnianie, łańcuchy żądań i uruchomienia w CI. Używaj zmiennych takich jak <code>{{baseUrl}}</code>, <code>{{token}}</code>, <code>{{userId}}</code> zamiast wartości zakodowanych na sztywno dla danego środowiska.</p>
      <pre><code>pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});</code></pre>
      <p><strong>Playwright</strong> (TypeScript) ma wbudowaną warstwę żądań API:</p>
      <pre><code>const response = await request.post('/api/users', {
  data: { name: 'John', email: 'john@example.com' }
});
expect(response.status()).toBe(201);</code></pre>
      <p>Utrzymuj klientów API, uwierzytelnianie, dane testowe, schematy i asercje jako elementy wielokrotnego użytku, zamiast powtarzać je w każdym pliku testów:</p>
      <pre><code>tests/
├── api/        auth/ · contacts/ · negative/
├── fixtures/   apiClient.ts · testData.ts
├── helpers/    auth.ts · assertions.ts
└── schemas/</code></pre>
      <p><strong>API + UI razem:</strong> utwórz użytkownika przez API i sprawdź logowanie w UI albo utwórz kontakt w UI i sprawdź go przez API. To pozwala ustalić, czy defekt leży w UI, API, integracji czy warstwie trwałości.</p>
      <p><strong>Wydajność:</strong> mierz czas odpowiedzi, opóźnienie, przepustowość, żądania na sekundę, odsetek błędów, CPU, pamięć i zachowanie bazy w scenariuszach bazowym, obciążeniowym, przeciążeniowym, skokowym i długotrwałym (soak), narzędziami takimi jak <strong>k6</strong> i <strong>JMeter</strong>.</p>
      <p><strong>CI/CD:</strong> push → GitHub Actions → instalacja zależności → uruchomienie aplikacji → testy API (<code>npx playwright test tests/api</code>) → testy UI → raporty → <strong>quality gate</strong>. Uruchamiaj je dla pull requestów i ważnych gałęzi oraz zachowuj raporty i artefakty błędów.</p>` },
    { h: "Szablon przypadku testowego, macierz endpointów i lista negatywna", body: `
      <p><strong>Pola przypadku testowego API:</strong> ID, tytuł, warunki wstępne, endpoint, metoda, nagłówki, uwierzytelnianie, parametry ścieżki/zapytania, ciało, dane testowe, kroki, oczekiwany status, oczekiwane nagłówki, oczekiwana odpowiedź/schemat, oczekiwany stan bazy, priorytet, ważność.</p>
      <p><em>Przykład: TC-API-001: Utworzenie kontaktu z poprawnymi danymi. <code>POST /contacts</code> → oczekiwane <code>201 Created</code>; sprawdź wygenerowane ID, a następnie <code>GET /contacts/{id}</code>, aby potwierdzić, że zasób istnieje.</em></p>
      <p><strong>Dla każdego endpointu zapytaj:</strong> Czy metoda i URL są poprawne? Kto ma do niego dostęp? Które nagłówki, parametry i pola ciała są wymagane lub poprawne? Czy typy danych, kody statusu, schemat i zwracane dane są prawidłowe? Czy błędy są bezpieczne i pomocne? Czy granice autoryzacji są egzekwowane? Czy skutki uboczne są prawidłowe? Co się dzieje przy współbieżności i obciążeniu?</p>
      <p><strong>Podstawowa lista testów negatywnych:</strong> brak wymaganego pola · pusty ciąg · null · błędny typ · niepoprawny format · za krótki / za długi · granica −1 / granica / +1 · liczba ujemna · zero · bardzo duża liczba · nieznane ID · brak ID · zduplikowane żądanie · niepoprawny JSON · pusty JSON · brak/błędny <code>Content-Type</code> · brak/niepoprawne uwierzytelnienie · wygasły token · niewystarczające uprawnienia · niewłaściwy użytkownik · nieobsługiwana metoda · limit żądań · duży ładunek · nieoczekiwane parametry · znaki specjalne · Unicode · dane przypominające wstrzyknięcia · dane przypominające HTML/skrypt.</p>` },
    { h: "Sposób myślenia QA, ścieżka nauki i portfolio", body: `
      <ul>
        <li><strong>Początkujący:</strong> czy API zwraca 200?</li>
        <li><strong>Bardziej dojrzały:</strong> czy zwraca prawidłowy status, schemat, dane, nagłówki, uprawnienia i skutki uboczne?</li>
        <li><strong>Zaawansowany:</strong> co się stanie, gdy dwóch użytkowników wywoła je jednocześnie, token wygaśnie, ładunek będzie zniekształcony, zasób będzie należał do innego najemcy, baza padnie, zewnętrzna usługa zwróci śmieci albo żądanie zostanie powtórzone wiele razy?</li>
      </ul>
      <p>Celem jest <strong>testowanie API oparte na ryzyku</strong>, a nie samo wysyłanie żądań.</p>
      <p><strong>Ścieżka nauki dla juniora QA:</strong></p>
      <ol>
        <li>HTTP/HTTPS, URL-e, metody, nagłówki, kody statusu, JSON</li>
        <li>Postman: kolekcje, środowiska, zmienne, skrypty, asercje</li>
        <li>Testy pozytywne/negatywne, wartości brzegowe, klasy równoważności, tablice decyzyjne, przejścia stanów, sterowanie danymi</li>
        <li>Basic Auth, Bearer, JWT, OAuth, klucze API</li>
        <li>CRUD, paginacja, filtrowanie, sortowanie, przesyłanie plików, idempotentność, współbieżność, webhooki, API asynchroniczne</li>
        <li>OpenAPI/Swagger, JSON Schema, testy kontraktowe, dryf schematu</li>
        <li>OWASP API Top 10, autoryzacja, limity żądań, ujawnianie danych</li>
        <li>Playwright API, TypeScript, skrypty Postmana i CLI</li>
        <li>k6/JMeter: obciążenie, przeciążenie, skoki, testy długotrwałe</li>
        <li>Git, GitHub Actions, Jenkins, raportowanie, artefakty, quality gates</li>
      </ol>
      <p><strong>Plan projektu do portfolio:</strong> strategia testów, plan testów, inwentarz endpointów, testy pozytywne/negatywne/brzegowe, testy uwierzytelniania i autoryzacji, testy CRUD, testy schematu/kontraktu, lista kontrolna bezpieczeństwa, kolekcja Postmana, automatyzacja API w Playwright, zarządzanie danymi testowymi, CI/CD, raporty HTML/Allure, przykłady defektów i README opisujące podejście.</p>
      <p><strong>Materiały:</strong> <a href="https://learning.postman.com/docs/tests-and-scripts/tests-and-scripts/" target="_blank" rel="noopener">Postman: testy i skrypty</a> · <a href="https://api-security.owasp.org/editions/2023/en/0x11-t10/" target="_blank" rel="noopener">OWASP API Security Top 10</a> · <a href="https://spec.openapis.org/oas/latest.html" target="_blank" rel="noopener">Specyfikacja OpenAPI</a> · <a href="https://learning.postman.com/docs/tests-and-scripts/running-collections/running-collections-overview/" target="_blank" rel="noopener">Uruchamianie kolekcji Postmana w CI</a></p>` }
  ]
},
{
  id: "istqb-ctfl",
  num: 7,
  title: "Ścieżka certyfikacji ISTQB® CTFL v4.0",
  summary: "Przegląd programu nauczania ISTQB Foundation Level w formie towarzysza nauki — podstawowej, niezależnej od dostawcy certyfikacji testowej.",
  takeaway: "ISTQB® Foundation Level to podstawowa, niezależna od dostawcy certyfikacja dla testerów oprogramowania na całym świecie. Jej sylabus organizuje wiedzę o testowaniu w 6 rozdziałów, a każdy cel nauczania jest oznaczony „poziomem K” (K1 = zapamiętaj, K2 = zrozum, K3 = zastosuj), który wskazuje, jak dogłębnie egzamin oczekuje danej wiedzy.",
  callout: {
    label: "Polecana lektura",
    body: "Stapp, L., Roman, A., &amp; Pilaeten, M. (2024). <em>ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0.</em> Springer. Ten moduł to przegląd w formie towarzysza nauki — po pełną głębię, ćwiczenia i oficjalne egzaminy próbne sięgnij po tę książkę lub oficjalny sylabus ISTQB."
  },
  lessons: [
    { h: "7.0 Jak działa certyfikacja", body: `
      <p>Foundation Level (CTFL) to podstawowa certyfikacja ISTQB® i warunek wstępny dla ścieżek Advanced Level i Expert Level. Egzamin to zazwyczaj <strong>40 pytań wielokrotnego wyboru</strong>, ważonych według rozdziału i poziomu K, z ustalonym progiem zaliczenia wynoszącym około <strong>65%</strong>.</p>` },
    { h: "7.1 Podstawy testowania", body: `
      <p><span class="k-badge">K2</span> <strong>Czym jest testowanie i dlaczego jest niezbędne:</strong> testowanie różni się od debugowania, przyczynia się bezpośrednio do sukcesu projektu i wspiera — ale nie jest tożsame z — zapewnianiem jakości.</p>
      <p><strong>Błąd, defekt, awaria, przyczyna źródłowa:</strong> ludzki <strong>błąd</strong> (pomyłka) może wprowadzić <strong>defekt</strong> (wadę) do produktu pracy; gdy zostanie wykonany, defekt może spowodować <strong>awarię</strong> (obserwowalne nieprawidłowe zachowanie); podstawowa przyczyna wystąpienia błędu to <strong>przyczyna źródłowa</strong>.</p>
      <p><span class="k-badge">K2</span> <strong>Siedem zasad testowania:</strong></p>
      <ol>
        <li>Testowanie pokazuje obecność, a nie brak defektów.</li>
        <li>Wyczerpujące testowanie jest niemożliwe.</li>
        <li>Wczesne testowanie oszczędza czas i pieniądze.</li>
        <li>Defekty grupują się razem.</li>
        <li>Testy się zużywają — powtarzanie tych samych testów przestaje wykrywać nowe błędy.</li>
        <li>Testowanie zależy od kontekstu.</li>
        <li>Błędne mniemanie o braku defektów — produkt wolny od błędów, który nie spełnia potrzeb użytkownika, nadal może okazać się porażką.</li>
      </ol>
      <p><strong>Podstawowe czynności testowe:</strong> planowanie, monitorowanie i kontrola, analiza, projektowanie, implementacja, wykonanie i zakończenie — tworzące produkty pracy testowej (testware), takie jak plany testów, przypadki testowe, dane testowe i dzienniki testów.</p>
      <p><strong>Podejście całego zespołu</strong> traktuje testowanie jako wspólną odpowiedzialność zespołu, podczas gdy <strong>niezależność testera</strong> nadal wnosi wartość, wprowadzając perspektywę wolną od założeń autora.</p>` },
    { h: "7.2 Testowanie w cyklu życia oprogramowania (SDLC)", body: `
      <p><span class="k-badge">K2</span> Wybrany model cyklu życia wytwarzania — sekwencyjny/kaskadowy (Waterfall), iteracyjny lub zwinny (Agile) — kształtuje sposób i moment prowadzenia testów. DevOps i ciągłe dostarczanie przesuwają testowanie wcześniej i częściej — koncepcja często nazywana <strong>„shift-left”</strong>. Retrospektywy służą jako mechanizm doskonalenia procesu we wszystkich modelach.</p>
      <p><strong>Poziomy testów</strong> (komponentowy/jednostkowy, integracyjny, systemowy, akceptacyjny) opisują, <em>gdzie</em> odbywa się testowanie; <strong>rodzaje testów</strong> (funkcjonalne, niefunkcjonalne, biało-skrzynkowe/strukturalne, związane ze zmianą) opisują, <em>co</em> jest testowane — to dwa niezależne wymiary.</p>
      <p><strong>Testowanie potwierdzające (retesty)</strong> ponownie uruchamia wcześniej nieudany test po poprawce, aby potwierdzić usunięcie defektu; <strong>testowanie regresyjne</strong> ponownie uruchamia istniejące testy, aby potwierdzić, że zmiana nie zepsuła wcześniej działającej funkcjonalności. <strong>Testowanie utrzymaniowe</strong> jest wywoływane przez modyfikację, migrację lub wycofanie systemu.</p>` },
    { h: "7.3 Testowanie statyczne", body: `
      <p><span class="k-badge">K2</span> Testowanie statyczne bada produkty pracy — wymagania, projekty, kod, przypadki testowe — <strong>bez ich wykonywania</strong>, dając wczesną, częstą informację zwrotną, zanim testowanie dynamiczne jest w ogóle możliwe.</p>
      <p><strong>Formalny proces przeglądu:</strong> planowanie → spotkanie inicjujące → przegląd indywidualny → komunikacja/analiza problemów → poprawki i raportowanie. Typowe role recenzentów: <strong>autor</strong>, <strong>moderator/facylitator</strong>, <strong>recenzenci</strong>, <strong>protokolant</strong> i <strong>kierownik</strong>.</p>
      <p><strong>Cztery rodzaje przeglądów</strong>, od najmniej do najbardziej formalnego: <strong>przegląd nieformalny</strong> &rarr; <strong>walkthrough</strong> &rarr; <strong>przegląd techniczny</strong> &rarr; <strong>inspekcja</strong>.</p>
      <p>Przeglądy odnoszą sukces, gdy mają jasne cele, odpowiednich uczestników i kulturę psychologicznego bezpieczeństwa, wolną od obwiniania.</p>` },
    { h: "7.4 Analiza i projektowanie testów", body: `
      <p><span class="k-badge">K2</span> Trzy rodziny technik testowych:</p>
      <ul>
        <li><strong>Czarnoskrzynkowe</strong> (oparte na zachowaniu) — bez znajomości wnętrza. Omówione z przykładami w <em>Module 2</em>: <span class="k-badge">K3</span> podział na klasy równoważności, analiza wartości brzegowych, testowanie tablicą decyzyjną i testowanie przejść między stanami.</li>
        <li><strong>Białoskrzynkowe</strong> (oparte na strukturze) — wykorzystuje znajomość kodu/architektury. <span class="k-badge">K3</span> <strong>Testowanie/pokrycie instrukcji</strong> sprawdza, czy każda wykonywalna instrukcja została uruchomiona co najmniej raz; <strong>testowanie/pokrycie gałęzi</strong> sprawdza, czy każdy wynik decyzji (prawda i fałsz) został sprawdzony.</li>
        <li><strong>Oparte na doświadczeniu</strong> — wykorzystują intuicję i historię testera: <strong>zgadywanie błędów (Error Guessing)</strong>, <strong>testowanie eksploracyjne</strong> (zob. <em>Moduły 4 i 5</em>) oraz <strong>testowanie oparte na listach kontrolnych</strong>.</li>
      </ul>
      <p><strong>Podejścia oparte na współpracy:</strong> wspólne pisanie historyjek użytkownika, definiowanie kryteriów akceptacji oraz <strong>rozwój sterowany testami akceptacyjnymi (ATDD)</strong>.</p>` },
    { h: "7.5 Zarządzanie czynnościami testowymi", body: `
      <p><span class="k-badge">K2</span> <strong>Planowanie testów</strong> definiuje cel i treść planu testów, ustala <strong>kryteria wejścia</strong> (warunki rozpoczęcia) i <strong>kryteria wyjścia</strong> (warunki zakończenia) oraz korzysta z technik estymacji i priorytetyzacji.</p>
      <p><strong>Piramida testów</strong> zaleca wiele szybkich, niskopoziomowych testów automatycznych i mniej wolnych, wysokopoziomowych testów UI. <strong>Kwadranty testowe</strong> mapują rodzaje testów wzdłuż dwóch osi: zorientowane na biznes vs. zorientowane na technologię oraz wspierające zespół vs. krytykujące produkt.</p>
      <p><span class="k-badge">K2</span> <strong>Zarządzanie ryzykiem:</strong> ryzyko = prawdopodobieństwo &times; wpływ. <strong>Ryzyka produktowe</strong> zagrażają temu, czy produkt pracy spełnia potrzeby interesariuszy; <strong>ryzyka projektowe</strong> zagrażają zdolności projektu do dostarczenia (harmonogram, zasoby). Testowanie oparte na ryzyku priorytetyzuje obszary wyższego ryzyka.</p>
      <p><strong>Monitorowanie, kontrola i zakończenie testów</strong> śledzą metryki i komunikują status poprzez raporty z testów. <strong>Zarządzanie konfiguracją</strong> wspiera identyfikowalność. <strong>Raport o defekcie</strong> zazwyczaj zawiera podsumowanie, kroki reprodukcji, wynik oczekiwany kontra rzeczywisty, wagę oraz priorytet.</p>` },
    { h: "7.6 Narzędzia testowe", body: `
      <p><span class="k-badge">K1</span> Kategorie narzędzi wspierających testowanie: zarządzanie testami, analiza statyczna, projektowanie testów, przygotowanie danych testowych, wykonanie/automatyzacja oraz wydajność/monitorowanie, między innymi.</p>
      <p><strong>Korzyści z automatyzacji testów:</strong> powtarzalność, szybkość i obiektywne wyniki. <strong>Ryzyka:</strong> nierealistyczne oczekiwania, bieżący koszt utrzymania, fałszywe poczucie bezpieczeństwa oraz uzależnienie od dostawcy narzędzia.</p>` },
    { h: "7.7 Wskazówki do nauki i typowe pułapki egzaminacyjne", body: `
      <p>Oryginalne wskazówki do nauki dla tego modułu — nie pochodzą z oficjalnego egzaminu ani z pytań ćwiczeniowych Self-Study Guide:</p>
      <ul>
        <li><strong>Ucz się według poziomu K, a nie tylko według rozdziału.</strong> Termin K1 wymaga tylko rozpoznania; technika K3 wymaga, byś faktycznie zastosował ją do scenariusza. Poświęć ograniczony czas materiałowi K2/K3, ponieważ tam znajduje się większość pytań egzaminacyjnych.</li>
        <li><strong>Uważaj na dystraktory typu „najlepsza" kontra „jakaś".</strong> Częsta pułapka to pytanie podające cztery technicznie prawdziwe stwierdzenia, z których tylko jedno jest <em>najlepszą</em> odpowiedzią dla opisanego scenariusza — przeczytaj scenariusz dwukrotnie przed wyborem.</li>
        <li><strong>Nie myl podobnie brzmiących terminów.</strong> Błąd/Defekt/Awaria/Przyczyna źródłowa (7.1), Weryfikacja/Walidacja oraz cztery rodzaje przeglądów (7.3) są często sprawdzane właśnie dlatego, że łatwo je pomylić pod presją czasu.</li>
        <li><strong>Przećwicz przykłady rozwiązane w Module 2</strong> (BVA, ECP, tablice decyzyjne, przejścia między stanami), aż będziesz w stanie stworzyć przypadki testowe od zera, a nie tylko rozpoznać poprawny przykład — 7.4 czerpie z tego bezpośrednio.</li>
        <li><strong>Zarządzanie czasem:</strong> przy 40 pytaniach w stałym oknie czasowym nie pozwól, aby jedno trudne pytanie pochłonęło nieproporcjonalnie dużo czasu — oznacz je, przejdź dalej i wróć, jeśli czas pozwoli.</li>
        <li><strong>Noc przed egzaminem:</strong> przejrzyj słownik (terminy z Modułu 7 są w Słowniku tej aplikacji), nie ucz się na pamięć nowego materiału i wyśpij się — egzaminy oparte na rozpoznawaniu nagradzają wypoczętą pamięć bardziej niż maraton czytania w ostatniej chwili.</li>
      </ul>` }
  ]
},
{
  id: "qa-toolbox",
  num: 8,
  title: "Zestaw narzędzi QA i rozwój kariery",
  summary: "Praktyczny przewodnik dla pracującego specjalisty QA: rzeczywiste narzędzia według kategorii, metryki, które naprawdę pojawiają się na standupach, ściąga na rozmowę kwalifikacyjną oraz miejsca, gdzie kontynuować naukę.",
  takeaway: "Znajomość teorii testowania otwiera drzwi — to wiedza, po jakie narzędzie sięgnąć, na jakiej metryce naprawdę zależy interesariuszowi i jak mówić o swoim doświadczeniu, sprawia, że idziesz dalej. Ten moduł to żywy materiał referencyjny, a nie kurs do „ukończenia”.",
  lessons: [
    { h: "8.1 Frameworki automatyzacji testów", body: `
      <p>Żaden pojedynczy framework nie wygrywa w każdym kontekście — właściwy wybór zależy od testowanej aplikacji, języka zespołu i tego, jak dużą część stosu trzeba pokryć.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Narzędzie</th><th>Najlepsze do</th><th>Języki</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td><strong>Selenium WebDriver</strong></td><td>Automatyzacji interfejsu webowego wielu przeglądarek</td><td>Java, Python, C#, JS, Ruby</td><td>Najdłużej istniejący standard; duży ekosystem, więcej kodu szablonowego niż w nowszych narzędziach.</td></tr>
          <tr><td><strong>Playwright</strong></td><td>Automatyzacji nowoczesnego interfejsu webowego</td><td>JS/TS, Python, Java, C#</td><td>Automatyczne oczekiwanie, wbudowany test runner, silne przechwytywanie ruchu sieciowego — szybko rosnący domyślny wybór dla nowych projektów.</td></tr>
          <tr><td><strong>Cypress</strong></td><td>Szybkiego testowania webowego przyjaznego deweloperom</td><td>JS/TS</td><td>Działa wewnątrz przeglądarki; doskonałe doświadczenie debugowania, historycznie ograniczenia jednodomenowe (single-origin).</td></tr>
          <tr><td><strong>Appium</strong></td><td>Automatyzacji aplikacji mobilnych (iOS/Android)</td><td>Java, Python, JS itd.</td><td>Rozszerza protokół WebDriver na natywne i hybrydowe aplikacje mobilne.</td></tr>
          <tr><td><strong>Robot Framework</strong></td><td>Testowania sterowanego słowami kluczowymi dla zespołów mieszanych technicznie/nietechnicznie</td><td>Oparty na Pythonie, składnia tabelaryczna</td><td>Dobrze sprawdza się, gdy analitycy biznesowi współtworzą przypadki testowe.</td></tr>
        </tbody>
      </table></div>` },
    { h: "8.2 Języki programowania do automatyzacji testów", body: `
      <p>Wybór, którego języka się nauczyć, zwykle jest podyktowany przez zespół i stos technologiczny, do którego dołączasz, a nie odwrotnie — ale oto jak w praktyce wypadają popularne wybory.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Język</th><th>Gdzie jest silny w QA</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td><strong>Java</strong></td><td>Automatyzacja UI klasy korporacyjnej (Selenium), testowanie API (REST Assured)</td><td>Najpopularniejszy język w dużych, ugruntowanych zespołach automatyzacji; rozwlekły, ale bardzo dobrze wyposażony w dojrzałe frameworki (JUnit, TestNG).</td></tr>
          <tr><td><strong>Python</strong></td><td>Testowanie API, ogólne skryptowanie, narzędzia testowe intensywnie korzystające z danych, Robot Framework, Locust</td><td>Czytelny, szybki do pisania, ogromny ekosystem bibliotek (pytest, requests) — często najłatwiejszy punkt wejścia dla testerów spoza świata programowania.</td></tr>
          <tr><td><strong>JavaScript / TypeScript</strong></td><td>Nowoczesna automatyzacja UI webowego (Playwright, Cypress), skrypty wydajnościowe k6</td><td>Naturalny wybór, gdy testowana aplikacja sama jest aplikacją webową JS/TS — testerzy mogą czytać kod aplikacji i dzielić narzędzia z deweloperami.</td></tr>
          <tr><td><strong>C#</strong></td><td>Automatyzacja UI i API w stosie .NET (Selenium, Playwright, SpecFlow)</td><td>Domyślny wybór w zespołach budujących na .NET; silne wsparcie narzędziowe w Visual Studio.</td></tr>
          <tr><td><strong>SQL</strong></td><td>Nie jest językiem automatyzacji, ale niezbędny wszędzie</td><td>Potrzebny stale do walidacji danych, przygotowania danych testowych i weryfikacji, co faktycznie trafiło do bazy danych po teście.</td></tr>
          <tr><td><strong>Bash / skrypty powłoki</strong></td><td>Klej CI/CD, przygotowanie środowiska, szybka inspekcja logów/plików</td><td>Nieużywany do pisania logiki testowej, ale pojawia się niemal w każdym pipeline, z którym styka się tester.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Praktyczna rada:</strong> dopasuj język do testowanej aplikacji i istniejącego stosu technologicznego zespołu — automatyzacja napisana w języku, którego nikt inny w zespole nie zna, w ciągu roku staje się osieroconym, nieutrzymywanym zestawem testów. Jeśli nie ma żadnego ograniczenia, Python oraz JavaScript/TypeScript są obecnie najszybszą drogą od zera do działającego zestawu automatyzacji.</p>` },
    { h: "8.3 Narzędzia do testowania API i wydajności", body: `
      <p><strong>Testowanie API:</strong></p>
      <ul>
        <li><strong>Postman</strong> — najpopularniejszy punkt startowy do manualnej i półautomatycznej eksploracji API, kolekcji i testowania opartego na środowiskach.</li>
        <li><strong>REST Assured</strong> — DSL w Javie do pisania testów API jako kodu, naturalnie integruje się z zestawami testów JVM i pipeline'ami CI.</li>
        <li><strong>SoapUI</strong> — ukierunkowane na SOAP i starsze, firmowe usługi sieciowe obok REST.</li>
        <li><strong>cURL / HTTPie</strong> — lekkie klienty wiersza poleceń, przydatne do szybkich sprawdzeń i odtwarzalnych zgłoszeń błędów.</li>
      </ul>
      <p><strong>Testowanie wydajności i obciążenia:</strong></p>
      <ul>
        <li><strong>JMeter</strong> — dojrzałe, sterowane GUI, ogromne wsparcie protokołów; może stać się zasobożerne przy dużych obciążeniach.</li>
        <li><strong>k6</strong> — skryptuje testy obciążeniowe w JavaScript, przede wszystkim z wiersza poleceń, dobrze współpracuje z CI/CD i wykonaniem w chmurze.</li>
        <li><strong>Gatling</strong> — oparty na Scali, znany z szczegółowych raportów i wydajnego wykorzystania zasobów przy wysokiej współbieżności.</li>
        <li><strong>Locust</strong> — oparty na Pythonie, definiuje zachowanie użytkowników jako kod, skaluje się na wielu procesach roboczych.</li>
      </ul>` },
    { h: "8.4 Śledzenie błędów, CI/CD i narzędzia do współpracy", body: `
      <p><strong>Zarządzanie defektami i testami:</strong> Jira (z Xray lub Zephyr do zarządzania przypadkami testowymi), Azure DevOps, TestRail, qTest — służą do śledzenia defektów przez ich cykl życia i łączenia przypadków testowych z wymaganiami i buildami.</p>
      <p><strong>CI/CD (gdzie faktycznie uruchamiają się testy automatyczne):</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI — zadaniem QA jest tu zwykle wpięcie zestawów testów w etapy pipeline'u, blokowanie merge'ów na podstawie wyniku pass/fail oraz utrzymanie na tyle szybkich przebiegów, by ludzie nie zaczęli ich pomijać.</p>
      <p><strong>Kontrola wersji i przeglądy:</strong> przepływy pracy oparte na Git (GitHub/GitLab/Bitbucket) — testerzy coraz częściej przeglądają pull requesty, a nie tylko gotowe buildy, w ramach ruchu shift-left omówionego w Module 7.</p>` },
    { h: "8.5 AI w testowaniu oprogramowania", body: `
      <p>W ciągu ostatnich kilku lat AI przeszła od ciekawostki do normalnej części zestawu narzędzi QA — zarówno jako coś, z czego testerzy korzystają, jak i nowy rodzaj rzeczy, które testerzy muszą testować.</p>
      <p><strong>Gdzie AI pojawia się jako narzędzie testowe:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Kategoria</th><th>Co robi</th><th>Przykłady</th></tr></thead>
        <tbody>
          <tr><td><strong>Samonaprawiające się lokatory</strong></td><td>Automatycznie dostosowuje selektory elementów UI, gdy zmienia się DOM, zamiast psuć test przy każdej drobnej zmianie znaczników.</td><td>Testim, Healenium, niektóre wtyczki Playwright/Selenium.</td></tr>
          <tr><td><strong>Wizualne testowanie AI</strong></td><td>Porównuje zrzuty ekranu za pomocą różnicowania percepcyjnego zamiast dokładnego dopasowania pikseli, dzięki czemu wykrywa prawdziwe regresje wizualne, ale ignoruje szum renderowania.</td><td>Applitools Eyes, Percy.</td></tr>
          <tr><td><strong>Generowanie testów wspomagane AI</strong></td><td>Tworzy szkice przypadków testowych lub skryptów automatyzacji na podstawie wymagań, historyjek użytkownika lub eksploracji istniejącej aplikacji.</td><td>GitHub Copilot, Claude, ChatGPT oraz dedykowane narzędzia takie jak Functionize i mabl.</td></tr>
          <tr><td><strong>Predykcyjny wybór testów</strong></td><td>Wykorzystuje historyczne dane o awariach, by uruchomić tylko podzbiór testów najbardziej prawdopodobnie wykrywających regresję dla danej zmiany, skracając czas CI.</td><td>Powszechne w dużych platformach CI; rzadsze w małych zespołach.</td></tr>
          <tr><td><strong>Triage defektów wspomagany AI</strong></td><td>Grupuje podobne zgłoszenia defektów, sugeruje wagę/priorytet lub oznacza prawdopodobne duplikaty.</td><td>Coraz częściej wbudowane w Jira i podobne systemy śledzenia defektów.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Dobre korzystanie z testów wygenerowanych przez AI:</strong> traktuj wynik AI jako pierwszy szkic, a nie gotowy test — wygenerowany test nadal wymaga człowieka, który potwierdzi, że sprawdza właściwą rzecz, a nie tylko że się uruchamia i przechodzi. AI dobrze radzi sobie z szybkim tworzeniem wiarygodnie wyglądającego kodu testowego; nie radzi sobie niezawodnie z rozpoznawaniem, które zachowanie naprawdę ma znaczenie dla biznesu — a to właśnie ta ocena jest sensem istnienia testowania.</p>
      <p><strong>Testowanie samych funkcji AI</strong> staje się teraz odrębną, rozwijającą się umiejętnością QA — gdy testowany produkt zawiera funkcję opartą na LLM (chatbot, asystent wyszukiwania, streszczenie), tradycyjne asercje dokładnego dopasowania przestają działać, ponieważ wyniki są niedeterministyczne. Wymaga to innych technik: oceny wyniku względem rubryki zamiast dokładnego ciągu znaków, sprawdzania pod kątem halucynacji (pewnie sformułowanych, ale fałszywych informacji), testowania odporności na prompt injection i jailbreak oraz weryfikacji, czy system bezpiecznie degraduje się przy niejednoznacznych lub wrogich danych wejściowych, zamiast tworzyć coś szkodliwego lub bezsensownego.</p>
      <p><strong>Ryzyka warte zgłoszenia zespołowi:</strong> przekazywanie zastrzeżonego kodu lub danych klientów do zewnętrznego narzędzia AI bez sprawdzenia jego polityki przetwarzania danych; nadmierne zaufanie do zielonego znacznika przy teście wygenerowanym przez AI, który nigdy faktycznie nie przeszedł przez prawdziwą ścieżkę błędu; oraz to, że automatyzacja tworzona przez AI może stać się równie nieutrzymywalna jak automatyzacja tworzona przez ludzi, jeśli nikt nie rozumie, co ona robi.</p>` },
    { h: "8.6 Metryki i KPI QA, które mają znaczenie", body: `
      <p>Metryki są przydatne tylko wtedy, gdy są powiązane z decyzją. Oto te, które najczęściej pojawiają się na prawdziwych standupach i retrospektywach:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Metryka</th><th>Co mówi</th></tr></thead>
        <tbody>
          <tr><td><strong>Gęstość defektów</strong></td><td>Defekty znalezione na jednostkę rozmiaru (np. na 1000 linii kodu lub na funkcję) — sygnalizuje nietypowo ryzykowne moduły.</td></tr>
          <tr><td><strong>Wskaźnik ucieczki defektów</strong></td><td>Defekty znalezione w produkcji względem wykrytych przed wydaniem — najostrzejszy sygnał tego, czy strategia testowa faktycznie działa.</td></tr>
          <tr><td><strong>Pokrycie testami</strong></td><td>Jaka część kodu lub wymagań jest sprawdzana przez testy. Samo wysokie pokrycie nie gwarantuje jakości — nic nie mówi o sile asercji.</td></tr>
          <tr><td><strong>Wskaźnik niestabilności (Flakiness Rate)</strong></td><td>Odsetek testów automatycznych, które zawodzą sporadycznie bez zmiany kodu — rosnący wskaźnik szybciej niż niemal cokolwiek innego niszczy zaufanie do całego zestawu testów.</td></tr>
          <tr><td><strong>MTTD / MTTR</strong></td><td>Średni czas do wykrycia / średni czas do rozwiązania defektu — jak szybko problemy są znajdowane i naprawiane, gdy już istnieją.</td></tr>
          <tr><td><strong>Czas realizacji zmian (Lead Time)</strong> i <strong>częstotliwość wdrożeń</strong></td><td>Dwie z czterech metryk DORA; czas cyklu QA jest często największą dźwignią wpływającą na lead time.</td></tr>
          <tr><td><strong>Trend wskaźnika sukcesu/porażki</strong></td><td>Śledzony w kolejnych buildach, nie jako pojedyncza liczba — powolny trend spadkowy wskaźnika sukcesu często przewiduje ryzyko wydania, zanim ktokolwiek powie to na głos.</td></tr>
        </tbody>
      </table></div>
      <p>Zdrowa kultura metryk traktuje je jako punkt wyjścia do dyskusji i dochodzenia, a nie jako wyniki do „ogrywania” — optymalizowanie pojedynczej metryki w izolacji (np. pogoń za 100% pokrycia) niezawodnie tworzy złe zachęty.</p>` },
    { h: "8.7 Przygotowanie do rozmowy kwalifikacyjnej — szybka ściąga", body: `
      <p>Popularne pytania, odpowiedziane tak, jak zrobiłby to mocny kandydat w jednym lub dwóch zdaniach:</p>
      <ul>
        <li><strong>„Przeprowadź mnie przez swój proces testowania nowej funkcji.”</strong> Przegląd wymagań/kryteriów akceptacji &rarr; identyfikacja obszarów ryzyka &rarr; projektowanie przypadków testowych (łącząc techniki czarnoskrzynkowe z kartami eksploracyjnymi) &rarr; wykonanie &rarr; rejestrowanie defektów z jasnymi krokami reprodukcji &rarr; retesty poprawek &rarr; regresja.</li>
        <li><strong>„Jak priorytetyzujesz, co testować przy ograniczonym czasie?”</strong> Priorytetyzacja oparta na ryzyku — ważenie prawdopodobieństwa razy wpływ, skupienie na ścieżkach o dużym ruchu i niedawnych zmianach, intuicja Pareto/grupowania defektów.</li>
        <li><strong>„Opisz błąd, który znalazłeś, a który inni pominęli.”</strong> Miej przygotowany prawdziwy przykład z: tym, co skłoniło cię do sprawdzenia tego miejsca, krokami reprodukcji, wpływem oraz sposobem ostatecznej naprawy — osoby przeprowadzające rozmowę sprawdzają konkretność, nie efekt dramatyczny.</li>
        <li><strong>„Manualne czy automatyczne — jak decydujesz?”</strong> Automatyzuj stabilne, powtarzalne, wysokowartościowe ścieżki regresyjne; testowanie eksploracyjne/UX/niejednoznacznych wymagań pozostaw manualne (zob. Moduły 1 i 5).</li>
        <li><strong>„Co sprawia, że raport o błędzie jest dobry?”</strong> Jasne podsumowanie, dokładne kroki reprodukcji, wynik oczekiwany kontra rzeczywisty, szczegóły środowiska, waga/priorytet oraz materiały dowodowe (logi, zrzuty ekranu).</li>
        <li><strong>„Jak radzisz sobie z niezgodą z deweloperem co do tego, czy coś jest błędem?”</strong> Wróć do podstawy testowej — wymagania/kryteria akceptacji lub specyfikacji; jeśli sprawa jest naprawdę niejednoznaczna, eskaluj do decyzji produktowej zamiast spierać się z pozycji opinii.</li>
        <li><strong>„Jaka jest różnica między weryfikacją a walidacją?”</strong> Weryfikacja pyta „czy budujemy produkt poprawnie?” (zgodność ze specyfikacją); walidacja pyta „czy budujemy właściwy produkt?” (zgodność z rzeczywistą potrzebą użytkownika).</li>
        <li><strong>„Jak przetestowałbyś funkcję opartą na LLM?”</strong> Zamień asercje dokładnego dopasowania na ocenę jakości wyniku opartą na rubryce; testuj szczególnie pod kątem halucynacji, sprawdzaj zachowanie przy niejednoznacznych/wrogich danych wejściowych oraz weryfikuj, że system zawodzi bezpiecznie, zamiast tworzyć coś szkodliwego lub bezsensownego.</li>
      </ul>` },
    { h: "8.8 Zasoby kariery — certyfikaty, społeczności i lektury", body: `
      <p><strong>Certyfikaty warte poznania</strong> (poza ISTQB CTFL omówionym w Module 7):</p>
      <ul>
        <li><strong>ISTQB Advanced Level</strong> (Test Analyst, Test Manager, Technical Test Analyst) — naturalny następny krok po Foundation Level.</li>
        <li><strong>ISTQB Agile Tester</strong> — certyfikat rozszerzający skupiony na testowaniu w zespołach Agile/Scrum.</li>
        <li><strong>Certified Software Tester (CSTE)</strong> — oferowany przez QAI, alternatywa dla ścieżki ISTQB o podobnym zakresie.</li>
        <li>Certyfikaty specyficzne dla narzędzi (np. certyfikaty Selenium/Playwright/Postman wydawane przez dostawców) — przydatne do wykazania praktycznej głębi obok certyfikatu podstawowego.</li>
      </ul>
      <p><strong>Społeczności warte obserwowania:</strong> Ministry of Testing (kursy, artykuły i duża społeczność praktyków), społeczności r/QualityAssurance i r/softwaretesting, lokalne/regionalne grupy spotkaniowe (meetupy) oraz wystąpienia konferencyjne ze źródeł takich jak TestBash i STAREAST (wiele publikowanych później za darmo).</p>
      <p><strong>Książki warte przeczytania poza sylabusem certyfikacyjnym:</strong> <em>Lessons Learned in Software Testing</em> (Kaner, Bach, Pettichord) — dla myślenia kontekstowego; <em>Explore It!</em> (Elisabeth Hendrickson) — dla praktycznego podręcznika testowania eksploracyjnego; <em>Agile Testing</em> oraz <em>More Agile Testing</em> (Crispin &amp; Gregory) — dla testowania w zespołach Agile.</p>
      <p>Pojedynczy nawyk o najwyższej dźwigni dla utrzymania formy: prowadź bieżący osobisty dziennik ciekawych znalezionych błędów i sposobu, w jaki je znalazłeś — z czasem staje się zarówno materiałem przygotowującym do rozmów kwalifikacyjnych, jak i narzędziem rozpoznawania wzorców.</p>` },
    { h: "8.9 Narzędzia i praktyki testowania dostępności", body: `
      <p>Testowanie dostępności weryfikuje, czy produkt może być używany przez osoby z niepełnosprawnościami — wzrokowymi, słuchowymi, ruchowymi i poznawczymi — a na większości rynków regulowanych jest to również wymóg prawny, a nie tylko miły dodatek.</p>
      <p><strong>WCAG (Web Content Accessibility Guidelines)</strong> to standardowy punkt odniesienia, zorganizowany wokół czterech zasad — treść musi być <strong>Postrzegalna, Funkcjonalna, Zrozumiała i Solidna</strong> (często skracane jako POUR) — z trzema poziomami zgodności (A, AA, AAA); większość organizacji celuje w poziom <strong>AA</strong>.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Narzędzie</th><th>Co sprawdza</th></tr></thead>
        <tbody>
          <tr><td><strong>axe DevTools</strong></td><td>Automatyczne sprawdzanie reguł WCAG jako rozszerzenie przeglądarki lub biblioteka zintegrowana z CI; wychwytuje brakujący tekst alternatywny, słaby kontrast kolorów, brakujące etykiety formularzy itd.</td></tr>
          <tr><td><strong>Lighthouse</strong></td><td>Wbudowany w Chrome DevTools; podaje wynik dostępności obok wydajności/SEO, dobry do szybkiego sprawdzenia punktu odniesienia.</td></tr>
          <tr><td><strong>Czytniki ekranu</strong> (NVDA, JAWS, VoiceOver)</td><td>Narzędzie do testowania manualnego — nawigowanie po aplikacji wyłącznie za pomocą czytnika ekranu ujawnia problemy, których automatyczne skanery w ogóle nie wychwytują, jak nielogiczna kolejność odczytu czy nieoznaczone elementy interaktywne.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Automatyczne skanery wychwytują z grubsza 30–40% problemów z dostępnością</strong> — są doskonałe w obiektywnych sprawdzeniach (współczynniki kontrastu, brakujące atrybuty), ale nie potrafią ocenić, czy tekst alternatywny jest faktycznie sensowny ani czy użytkownik korzystający wyłącznie z klawiatury może ukończyć cały przepływ pracy bez myszy. Prawdziwe przejście testów dostępności zawsze obejmuje manualną nawigację wyłącznie klawiaturą oraz przynajmniej wyrywkowe sprawdzenie czytnikiem ekranu.</p>` }
  ]
},
{
  id: "test-architecture",
  num: 9,
  title: "Architektura QA i testów",
  summary: "Decyzje projektowe stojące za skalowalną praktyką QA: jak w rzeczywistości projektuje się frameworki automatyzacji, środowiska testowe, pipeline'y CI/CD oraz testowanie systemów rozproszonych.",
  takeaway: "Dobre testowanie na dużą skalę to nie tylko znajomość technik — to architektura: jak framework jest zbudowany, aby 200 testów nie stało się 200 miejscami do naprawienia tego samego zepsutego lokatora, jak zarządza się środowiskami i danymi, aby testy były powtarzalne, jak zaprojektowany jest pipeline, aby informacja zwrotna docierała szybko, oraz jak testowanie adaptuje się, gdy system przestaje być jedną wdrażalną jednostką.",
  lessons: [
    { h: "9.1 Architektura frameworku automatyzacji testów", body: `
      <p>Sposób, w jaki zbudowany jest zestaw automatyzacji, decyduje o tym, czy pozostanie łatwy w utrzymaniu przy 50 testach, czy zawali się pod własnym ciężarem przy 500. Dominują dwa wzorce:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Wzorzec</th><th>Jak działa</th><th>Kompromis</th></tr></thead>
        <tbody>
          <tr><td><strong>Page Object Model (POM)</strong></td><td>Każda strona/komponent UI otrzymuje klasę, która hermetyzuje jej lokatory oraz dostępne na niej akcje; testy wywołują metody na obiektach stron zamiast bezpośrednio dotykać lokatorów.</td><td>Proste i powszechnie zrozumiałe, ale może stać się nieporęczne w dużych aplikacjach z wieloma obiektami stron i współdzielonymi komponentami.</td></tr>
          <tr><td><strong>Wzorzec Screenplay</strong></td><td>Modeluje test jako <strong>Aktora</strong>, który posiada <strong>Zdolności</strong> (np. przeglądanie sieci), wykonuje <strong>Zadania</strong> (złożone z mniejszych interakcji) i zadaje <strong>Pytania</strong> (asercje dotyczące stanu) — kompozycja zamiast dziedziczenia.</td><td>Bardziej skalowalny i wielokrotnego użytku w przypadku dużych, złożonych zestawów; bardziej stroma krzywa uczenia i więcej wstępnego projektowania niż w POM.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Architektura warstwowa ("hybrydowa")</strong> dzieli zestaw na odrębne warstwy niezależnie od tego, jaki wzorzec UI jest używany: <strong>warstwę testów</strong> (czytelne przypadki testowe, „co”), <strong>warstwę logiki/akcji</strong> (obiekty stron lub zadania screenplay, „jak”) oraz <strong>warstwę danych</strong> (dane testowe, fixtury, konfiguracja) — utrzymywane niezależnie, aby zmiana lokatora nie odbijała się na logice testów, a logika testów nie odbijała się na samych testach.</p>
      <p><strong>Projektowanie sterowane danymi vs. sterowane słowami kluczowymi:</strong> testowanie sterowane danymi uruchamia tę samą logikę testową dla wielu par wejście/oczekiwany wynik pobranych ze źródła zewnętrznego (CSV, JSON, arkusz kalkulacyjny); testowanie sterowane słowami kluczowymi idzie dalej, wyrażając całe kroki testowe jako słowa kluczowe (np. „Login”, „AddToCart”) w tabeli, dzięki czemu osoby nietechniczne mogą komponować nowe testy z istniejących klocków (Robot Framework, omówiony w Module 8, jest zbudowany wokół tej idei).</p>` },
    { h: "9.2 Architektura środowisk testowych i zarządzanie danymi testowymi", body: `
      <p><strong>Pipeline środowisk:</strong> większość organizacji przeprowadza build przez sekwencję środowisk, z których każde ma inny cel:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Środowisko</th><th>Cel</th></tr></thead>
        <tbody>
          <tr><td><strong>Dev</strong></td><td>Deweloperzy integrują i wstępnie sprawdzają własne zmiany; z założenia niestabilne.</td></tr>
          <tr><td><strong>QA / Test</strong></td><td>Poświęcone strukturalnemu wykonywaniu testów — manualnych i automatycznych — na stosunkowo stabilnym buildzie.</td></tr>
          <tr><td><strong>Staging</strong></td><td>Odzwierciedla konfigurację produkcyjną tak wiernie, jak to możliwe; ostatnia weryfikacja przed wydaniem, często używana do końcowej akceptacji i testów wydajnościowych.</td></tr>
          <tr><td><strong>Produkcja</strong></td><td>Ruch na żywo. Praktyki shift-right (patrz 9.3) świadomie i bezpiecznie rozszerzają testowanie na to środowisko.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Efemeryczne środowiska testowe</strong> — uruchamiane na żądanie dla każdego pull requesta lub przebiegu testów i usuwane później — pozwalają uniknąć klasycznego problemu jednego współdzielonego środowiska QA, w którym niedokończona zmiana jednego zespołu blokuje testowanie wszystkim innym. Konteneryzacja (Docker) i orkiestracja (Kubernetes) czynią to praktycznym: cała definicja środowiska staje się powtarzalnym artefaktem, a nie ręcznie skonfigurowaną maszyną, którą ktoś musi doglądać.</p>
      <p><strong>Wirtualizacja usług (service virtualization)</strong> zastępuje prawdziwą zależność (API strony trzeciej, jeszcze niezbudowaną usługę downstream, system kosztowny lub ryzykowny do wywoływania w teście) symulowaną wersją, która zwraca realistyczne, gotowe lub oparte na regułach odpowiedzi — robią to narzędzia takie jak WireMock i Mountebank. To właśnie ona umożliwia niezawodne, szybkie testy dla systemu z wieloma zależnościami zewnętrznymi.</p>
      <p><strong>Zarządzanie danymi testowymi:</strong> generowanie danych syntetycznych (fabrykowanie realistycznie wyglądających danych zamiast używania prawdziwych rekordów), maskowanie/anonimizacja danych, gdy trzeba użyć prawdziwych danych produkcyjnych (aby chronić dane osobowe), oraz samoczyszczące się testy (każdy test tworzy i usuwa własne dane zamiast polegać na współdzielonych fixturach) to trzy najczęstsze strategie utrzymania danych testowych w sposób niezawodny i bezpieczny.</p>` },
    { h: "9.3 Architektura CI/CD i pipeline'ów dla QA", body: `
      <p>Typowy pipeline układa testy od szybkich/tanich do wolnych/kosztownych, dzięki czemu zepsuty build zawodzi szybko, zamiast spalać godzinę, zanim ktokolwiek się o tym dowie:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Etap</th><th>Co się wykonuje</th><th>Typowy czas trwania</th></tr></thead>
        <tbody>
          <tr><td>1. Build</td><td>Kompilacja, linting, analiza statyczna</td><td>Od sekund do kilku minut</td></tr>
          <tr><td>2. Testy jednostkowe</td><td>Szybkie, izolowane, bez zewnętrznych zależności</td><td>Sekundy do minut</td></tr>
          <tr><td>3. Testy integracyjne / API</td><td>Prawdziwe lub zwirtualizowane zależności usług</td><td>Minuty</td></tr>
          <tr><td>4. Testy UI / E2E</td><td>Pełnostosowe testy przeglądarkowe lub aplikacyjne (często na podzbiorze krytycznych ścieżek, nie wszystkiego)</td><td>Od minut do dziesiątek minut</td></tr>
          <tr><td>5. Skany wydajności / bezpieczeństwa</td><td>Testy obciążeniowe, skany SAST/DAST — często uruchamiane rzadziej niż przy każdym commicie</td><td>Minuty i dłużej</td></tr>
          <tr><td>6. Wdrożenie</td><td>Promocja do stagingu/produkcji, często uwarunkowana przejściem wszystkich wcześniejszych etapów</td><td>Minuty</td></tr>
        </tbody>
      </table></div>
      <p><strong>Zrównoleglanie i podział (sharding) testów</strong> — rozdzielenie zestawu testów na wiele workerów/maszyn, aby wykonywał się równolegle zamiast sekwencyjnie — to zwykle pojedyncza najskuteczniejsza dźwignia utrzymania rosnącego zestawu wystarczająco szybkim, by ludzie nie zaczęli go pomijać.</p>
      <p><strong>Bramki jakości (quality gates)</strong> to automatyczne kontrole, które blokują scalenie lub wdrożenie, gdy nie są spełnione: minimalny wskaźnik zdawalności, próg pokrycia, zero krytycznych ustaleń bezpieczeństwa lub budżet wydajnościowy. Bramka powinna być wystarczająco surowa, by wychwycić prawdziwe regresje, ale nie na tyle surowa (lub niestabilna), by ludzie zaczęli ją rutynowo omijać — omijanie, które staje się rutyną, jest sygnałem, że sama bramka wymaga naprawy.</p>
      <p><strong>Shift-left kontra shift-right:</strong> shift-left (omówiony w Module 7) przesuwa testowanie wcześniej — w projektowanie i przegląd kodu. <strong>Shift-right</strong> to komplementarna idea: świadome rozszerzenie testowania na produkcję poprzez wydania kanarkowe (canary releases) (wdrażanie zmiany najpierw dla niewielkiego procenta ruchu), flagi funkcji (feature flags) (wysyłanie kodu w trybie ukrytym i włączanie go stopniowo) oraz monitoring syntetyczny (zaskryptowane kontrole, które nieprzerwanie sondują produkcję jak prawdziwy użytkownik). Dojrzałe praktyki QA wykorzystują oba podejścia, nie tylko jedno.</p>` },
    { h: "9.4 Testowanie systemów rozproszonych i mikroserwisów", body: `
      <p>Gdy system zostaje podzielony na wiele niezależnie wdrażanych usług, tradycyjne pełnostosowe testowanie end-to-end przestaje się skalować — liczba kombinacji wersji usług rośnie kombinatorycznie, a uruchamianie „całego systemu” przy każdym przebiegu testów staje się wolne, niestabilne i kosztowne.</p>
      <p><strong>Testowanie kontraktowe (contract testing)</strong> rozwiązuje ten problem, testując kontrakt każdej pary usług w izolacji zamiast całego łańcucha razem. W <strong>testowaniu kontraktowym sterowanym przez konsumenta</strong> (model stojący za frameworkiem Pact) konsument usługi definiuje interakcje, których oczekuje; dostawca weryfikuje niezależnie, czy spełnia ten kontrakt, bez potrzeby uruchamiania konsumenta w ogóle. Pozwala to wychwycić przełamujące zmiany API bez pełnego środowiska integracyjnego.</p>
      <p><strong>Testowanie service mesh</strong> uwzględnia samą warstwę sieciową — routing, ponawianie prób, limity czasu, wzajemne TLS, kształtowanie ruchu — którą zarządza infrastruktura taka jak Istio czy Linkerd między usługami. Testowanie tutaj często oznacza weryfikację, czy konfiguracja routingu/polityk mesh zachowuje się zgodnie z zamierzeniem (np. czy reguła kanarkowa faktycznie kieruje 5% ruchu do nowej wersji), a nie tylko testowanie logiki aplikacji.</p>
      <p><strong>Chaos engineering</strong> celowo wstrzykuje awarie — zabijanie instancji, dodawanie opóźnień sieciowych, wyczerpywanie zasobu — do systemu (często produkcyjnego, w kontrolowanych warunkach), aby zweryfikować, że degraduje się on łagodnie zamiast przechodzić w pełną awarię kaskadową. Narzędzia takie jak Chaos Monkey (Netflix) i Gremlin spopularyzowały to podejście jako dyscyplinę, a nie przypadek.</p>
      <p><strong>Testowanie sterowane obserwowalnością (observability-driven testing)</strong> wykorzystuje „trzy filary” — logi, metryki i ślady (traces) — do ciągłej walidacji zachowania systemu, także na produkcji, gdzie nie da się z góry zaskryptować każdego scenariusza. Zamiast pytać wyłącznie „czy ten test przeszedł”, pyta „czy to, co obserwujemy w rzeczywistym ruchu, odpowiada temu, czego oczekujemy” — zamykając pętlę, którą otwiera testowanie shift-right.</p>` },
    { h: "9.5 Dobór właściwej architektury do własnego kontekstu", body: `
      <p>Żadna z powyższych rzeczy nie jest listą kontrolną do pełnego wdrożenia — to menu, z którego wybiera się w zależności od kontekstu. Pięcioosobowy startup wydający cotygodniowo jeden monolit potrzebuje niemal żadnej z maszynerii testowania mikroserwisów z 9.4; organizacja licząca 200 inżynierów i prowadząca 40 usług potrzebuje większości z niej.</p>
      <p><strong>Przybliżone czynniki decyzyjne:</strong> wielkość zespołu i tempo wydań (szybsze wydania popychają w kierunku większej automatyzacji i praktyk shift-right), złożoność systemu i liczba niezależnie wdrażanych usług (napędza potrzebę testowania kontraktowego i świadomości service mesh) oraz ograniczenia regulacyjne/zgodności (mogą popychać w kierunku surowszych bramek jakości i bardziej zachowawczej promocji środowisk).</p>
      <p><strong>Warte nazwania powszechne antywzorce:</strong></p>
      <ul>
        <li><strong>„Lody na rożku" (ice-cream cone)</strong> — odwrotność zdrowej Piramidy testów (Module 7): zestaw obciążony u góry wolnymi, kruchymi testami UI/E2E i posiadający zbyt mało szybkich testów jednostkowych, przez co cały zestaw jest wolny, niestabilny i kosztowny w utrzymaniu.</li>
        <li><strong>Współdzielone, mutowalne środowiska testowe</strong> — jedno środowisko QA, do którego wszyscy wdrażają i w którym mutują dane, co powoduje niestabilne, trudne do odtworzenia awarie niemające nic wspólnego z testowanym kodem.</li>
        <li><strong>Brak strategii danych testowych</strong> — testy zależne od ręcznie utrzymywanych, nieudokumentowanych danych fixture, których już nikt w pełni nie rozumie, co powoduje ciche awarie w miarę ewolucji schematu.</li>
      </ul>
      <p>Wspólny wątek całego tego modułu: decyzje architektoniczne w QA to kompromisy między szybkością, niezawodnością i kosztem utrzymania — a nie poszukiwanie jednej uniwersalnie „poprawnej” konfiguracji.</p>` },
    { h: "9.6 Architektura raportowania testów i obserwowalności", body: `
      <p>Zestaw testów, który się wykonuje, ale generuje raporty, których nikt nie czyta ani im nie ufa, dostarcza niewielką wartość — infrastruktura raportowania jest w takim samym stopniu decyzją architektoniczną, jak same testy.</p>
      <p><strong>Narzędzia do raportowania testów:</strong> Allure i ReportPortal to popularne wybory do zamiany surowego wyniku test runnera w czytelne, historyczne dashboardy — pokazujące trendy zdawalności w czasie, a nie tylko wynik ostatniego przebiegu, i pozwalające prześledzić awarię do konkretnego commita lub środowiska.</p>
      <p><strong>Co zapewnia dobra architektura raportowania testów:</strong></p>
      <ul>
        <li><strong>Widok trendu historycznego</strong> — czy wskaźnik zdawalności spada w ciągu ostatnich 10 buildów, a nie tylko „czy ten jeden build przeszedł”.</li>
        <li><strong>Wykrywanie niestabilnych testów</strong> — automatyczne oznaczanie testów, które zawodzą sporadycznie bez zmiany kodu (zob. Wskaźnik niestabilności, Moduł 8), dzięki czemu można je poddać kwarantannie lub naprawić, zamiast po cichu podważać zaufanie do zestawu.</li>
        <li><strong>Szybkie triage awarii</strong> — bezpośrednie łączenie awarii z logami, zrzutami ekranu lub nagraniem wideo z tego konkretnego przebiegu, dzięki czemu deweloper nie musi odtwarzać jej lokalnie tylko po to, by zobaczyć, co się stało.</li>
        <li><strong>Własność i routing</strong> — awarie automatycznie powiadamiają zespół, który jest właścicielem dotkniętego obszaru, zamiast trafiać na kanał, którego nikt nie monitoruje.</li>
      </ul>
      <p>To zamyka pętlę z 9.3 i 9.4: pipeline może być doskonale zorganizowany etapami, a system doskonale obserwowalny na produkcji, ale jeśli same wyniki testów nie są raportowane w sposób, na podstawie którego ludzie faktycznie działają, cała ta architektura się nie opłaca.</p>` }
  ]
},
{
  id: "security-testing",
  num: 10,
  title: "Testowanie bezpieczeństwa i AppSec",
  summary: "Myślenie jak atakujący: OWASP Top 10, narzędzia znajdujące podatności, zanim zrobią to atakujący, oraz jak bezpieczeństwo jest wbudowywane w SDLC, zamiast być doklejane na końcu.",
  takeaway: "Testowanie bezpieczeństwa nie jest odrębną dyscypliną doklejoną do QA na końcu — to ten sam sposób myślenia testowego (znajdź, gdzie system się psuje) skierowany na inne pytanie: nie „czy to działa zgodnie z zamierzeniem”, ale „czy można sprawić, by zrobiło coś, czego nigdy nie miało robić”. Im wcześniej zadane zostanie to pytanie, tym tańsza odpowiedź.",
  lessons: [
    { h: "10.1 Podstawy testowania bezpieczeństwa i sposób myślenia atakującego", body: `
      <p>Testowanie funkcjonalne pyta „czy ścieżka główna działa i czy znane przypadki brzegowe są obsłużone?” <strong>Testowanie bezpieczeństwa zadaje zasadniczo inne pytanie: „co się dzieje, gdy ktoś celowo próbuje złamać zasady?”</strong> Formularz logowania, który poprawnie odrzuca błędne hasło, jest funkcjonalnie poprawny — ale testowanie bezpieczeństwa pyta też: co jeśli pole hasła otrzyma 50 000 znaków, fragment kodu SQL, albo żądanie całkowicie ominie formularz i trafi bezpośrednio do API?</p>
      <p><strong>Podstawowe właściwości bezpieczeństwa, o których powinien pamiętać tester (triada „CIA” plus dwie kolejne):</strong></p>
      <ul>
        <li><strong>Poufność (Confidentiality)</strong> — tylko upoważnione strony mogą odczytać dane.</li>
        <li><strong>Integralność (Integrity)</strong> — dane nie mogą być modyfikowane przez nieupoważnione strony, a manipulacja jest wykrywalna.</li>
        <li><strong>Dostępność (Availability)</strong> — system pozostaje użyteczny dla uprawnionych użytkowników (odporność na odmowę usługi).</li>
        <li><strong>Uwierzytelnianie (Authentication)</strong> — system poprawnie weryfikuje, za kogo ktoś się podaje.</li>
        <li><strong>Autoryzacja (Authorization)</strong> — system poprawnie ogranicza, co wolno robić uwierzytelnionemu użytkownikowi.</li>
      </ul>
      <p><strong>Zasada minimalnych uprawnień (Least Privilege)</strong> — każdy użytkownik, usługa i proces powinny mieć tylko minimalny dostęp potrzebny do wykonania swojego zadania, nic więcej — to pojedyncza zasada leżąca u podstaw większości klas podatności omówionych w 10.2 i 10.3: niemal każde poważne naruszenie bezpieczeństwa wiąże się z czymś, co miało więcej dostępu, niż potrzebowało.</p>` },
    { h: "10.2 Dogłębna analiza OWASP Top 10", body: `
      <p><strong>OWASP Top 10</strong> to najczęściej cytowana lista krytycznych ryzyk bezpieczeństwa aplikacji webowych, publikowana przez Open Worldwide Application Security Project i okresowo aktualizowana na podstawie rzeczywistych danych. To standardowe słownictwo startowe dla testowania świadomego bezpieczeństwa:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Ryzyko</th><th>Co oznacza</th></tr></thead>
        <tbody>
          <tr><td><strong>Broken Access Control (Zepsuta kontrola dostępu)</strong></td><td>Użytkownicy mogą działać poza zamierzonymi uprawnieniami — np. zmieniając ID w URL, by zobaczyć dane innego użytkownika.</td></tr>
          <tr><td><strong>Cryptographic Failures (Błędy kryptograficzne)</strong></td><td>Wrażliwe dane wyeksponowane z powodu słabego, brakującego lub źle skonfigurowanego szyfrowania (w tranzycie lub w spoczynku).</td></tr>
          <tr><td><strong>Injection (Wstrzykiwanie)</strong></td><td>Niezaufane dane wejściowe są interpretowane przez interpreter jako kod/polecenia — SQL Injection, Command Injection itd. (zob. 10.3).</td></tr>
          <tr><td><strong>Insecure Design (Niebezpieczny projekt)</strong></td><td>Wada samego projektu, nie tylko implementacji — żadna ilość bezpiecznego kodowania nie naprawi fundamentalnie niebezpiecznego projektu.</td></tr>
          <tr><td><strong>Security Misconfiguration (Błędna konfiguracja bezpieczeństwa)</strong></td><td>Domyślne dane logowania, niepotrzebne funkcje włączone, rozwlekłe komunikaty błędów ujawniające wewnętrzne szczegóły, brakujące nagłówki bezpieczeństwa.</td></tr>
          <tr><td><strong>Vulnerable &amp; Outdated Components (Podatne i przestarzałe komponenty)</strong></td><td>Używanie bibliotek/frameworków ze znanymi, niezałatanymi podatnościami — zob. skanowanie zależności w 10.4.</td></tr>
          <tr><td><strong>Identification &amp; Authentication Failures (Błędy identyfikacji i uwierzytelniania)</strong></td><td>Słabe polityki haseł, fiksacja sesji, brak uwierzytelniania wieloskładnikowego, przewidywalne tokeny sesji.</td></tr>
          <tr><td><strong>Software &amp; Data Integrity Failures (Błędy integralności oprogramowania i danych)</strong></td><td>Ufanie kodowi/danym (np. automatyczne aktualizacje, pipeline'y CI/CD, wtyczki) bez weryfikacji ich integralności.</td></tr>
          <tr><td><strong>Security Logging &amp; Monitoring Failures (Błędy logowania i monitorowania bezpieczeństwa)</strong></td><td>Ataki pozostają niewykryte, ponieważ nic nie jest logowane albo logi nie są monitorowane/nie generują alertów.</td></tr>
          <tr><td><strong>Server-Side Request Forgery (SSRF)</strong></td><td>Atakujący nakłania serwer do wysyłania żądań do niezamierzonych celów wewnętrznych lub zewnętrznych.</td></tr>
        </tbody>
      </table></div>
      <p>Testowanie względem tej listy nie oznacza dogłębnych testów penetracyjnych dla każdego ryzyka — nawet testerzy manualni mogą sensownie sprawdzać błędne konfiguracje, słabe przepływy uwierzytelniania i zbyt rozwlekłe komunikaty błędów bez specjalistycznych narzędzi bezpieczeństwa.</p>` },
    { h: "10.3 Popularne klasy podatności", body: `
      <p>Bliższe spojrzenie na klasy podatności, z którymi testerzy najczęściej stykają się w praktyce:</p>
      <p><strong>SQL Injection (SQLi)</strong> — niezaufane dane wejściowe są łączone bezpośrednio z zapytaniem SQL zamiast być poprawnie sparametryzowane, co pozwala atakującemu zmienić logikę zapytania. Klasyczny test: wpisanie <code>' OR '1'='1</code> w polu logowania, by sprawdzić, czy omija uwierzytelnianie. Naprawa: zapytania parametryzowane/przygotowane instrukcje (prepared statements), nigdy SQL sklejany ze stringów.</p>
      <p><strong>Cross-Site Scripting (XSS)</strong> — niezaufane dane wejściowe są renderowane jako wykonywalny skrypt w przeglądarce innego użytkownika. <strong>Stored XSS</strong> zapisuje złośliwy skrypt na stałe (np. w polu komentarza, renderowany później innym użytkownikom); <strong>Reflected XSS</strong> odbija go natychmiast w odpowiedzi (np. przez spreparowany URL); <strong>DOM-based XSS</strong> zachodzi całkowicie po stronie klienta poprzez niebezpieczną manipulację DOM w JavaScript. Testuj, wprowadzając nieszkodliwy ładunek skryptu (np. <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>) w każde pole wejściowe i sprawdzając, czy się wykonuje zamiast wyświetlić jako tekst.</p>
      <p><strong>Cross-Site Request Forgery (CSRF)</strong> — złośliwa strona nakłania przeglądarkę zalogowanego użytkownika do wysłania niechcianego żądania do docelowej strony, na której jest uwierzytelniony (np. niewidoczny, automatycznie wysyłany formularz zmieniający e-mail ofiary). Obrona: tokeny CSRF, atrybuty ciasteczek SameSite.</p>
      <p><strong>Broken Access Control / IDOR (Insecure Direct Object Reference)</strong> — system nie weryfikuje, czy bieżący użytkownik jest faktycznie upoważniony do dostępu do konkretnego żądanego zasobu, często wykorzystywane po prostu przez zmianę ID w URL lub wywołaniu API (np. <code>/api/orders/1001</code> → <code>/api/orders/1002</code>) i sprawdzenie, czy wracają dane innego użytkownika.</p>
      <p><strong>Wady uwierzytelniania/autoryzacji</strong> — słabe przepływy resetowania hasła, tokeny sesji, które nie wygasają, brak ograniczania liczby prób logowania (umożliwiający atak siłowy) oraz eskalacja uprawnień (zwykły użytkownik uzyskujący działania na poziomie administratora) — wszystko to mieści się tutaj; zob. 10.6, jak modelowanie zagrożeń pomaga wychwycić to przed wydaniem.</p>` },
    { h: "10.4 Narzędzia i techniki testowania bezpieczeństwa", body: `
      <p>Narzędzia do testowania bezpieczeństwa zwykle opisuje się według tego, <strong>kiedy</strong> działają i <strong>co</strong> mogą zobaczyć:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Podejście</th><th>Jak działa</th><th>Przykładowe narzędzia</th></tr></thead>
        <tbody>
          <tr><td><strong>SAST</strong> (Static Application Security Testing)</td><td>Skanuje kod źródłowy bez jego uruchamiania, szukając znanych niebezpiecznych wzorców (np. SQL sklejanego ze stringów, zahardkodowanych sekretów). Działa wcześnie — może być częścią każdego commita.</td><td>SonarQube, Semgrep, Checkmarx</td></tr>
          <tr><td><strong>DAST</strong> (Dynamic Application Security Testing)</td><td>Atakuje działającą aplikację z zewnątrz, tak jak zrobiłby to prawdziwy atakujący, bez znajomości kodu źródłowego. Wychwytuje problemy z czasem wykonania/konfiguracją, których SAST nie widzi.</td><td>OWASP ZAP, Burp Suite</td></tr>
          <tr><td><strong>IAST</strong> (Interactive Application Security Testing)</td><td>Łączy oba podejścia — agent zainstrumentowany wewnątrz działającej aplikacji obserwuje rzeczywisty ruch/wykonanie, by znaleźć podatności z większym kontekstem i mniejszą liczbą fałszywych trafień niż samo DAST.</td><td>Contrast Security, Seeker</td></tr>
          <tr><td><strong>SCA</strong> (Software Composition Analysis / skanowanie zależności)</td><td>Skanuje biblioteki i zależności firm trzecich pod kątem znanych CVE (opublikowanych podatności), bezpośrednio odnosząc się do ryzyka „Podatne i przestarzałe komponenty”.</td><td>Snyk, Dependabot, OWASP Dependency-Check</td></tr>
        </tbody>
      </table></div>
      <p>Dojrzała praktyka AppSec warstwuje te podejścia, zamiast wybierać jedno: SAST i SCA działają przy każdym commicie (szybkie, tanie, wychwytują znane wzorce), podczas gdy DAST działa rzadziej, względem wdrożonego środowiska (wolniejsze, ale wychwytuje to, czego analiza statyczna strukturalnie nie widzi).</p>` },
    { h: "10.5 Podstawy testów penetracyjnych", body: `
      <p><strong>Testy penetracyjne</strong> („pen testing”) to autoryzowany, symulowany atak na system, mający na celu znalezienie podatnych na wykorzystanie luk, zanim zrobią to prawdziwi atakujący — różni się od automatycznego skanowania z 10.4 tym, że angażuje wykwalifikowanego człowieka aktywnie łączącego słabości w łańcuch tak, jak zrobiłby to prawdziwy przeciwnik.</p>
      <p><strong>Typowe fazy:</strong></p>
      <ol>
        <li><strong>Rekonesans</strong> — zbieranie informacji o celu (użyte technologie, wystawione punkty końcowe, informacje o pracownikach/organizacji).</li>
        <li><strong>Skanowanie</strong> — identyfikacja aktywnych hostów, otwartych portów i usług, często z użyciem zautomatyzowanych narzędzi jako punktu wyjścia.</li>
        <li><strong>Eksploatacja</strong> — aktywne próby wykorzystania odkrytych słabości w celu uzyskania dostępu lub wydobycia danych.</li>
        <li><strong>Działania po eksploatacji</strong> — ocena, jak daleko mógłby zajść atakujący z tego wstępnego przyczółka (eskalacja uprawnień, ruch boczny).</li>
        <li><strong>Raportowanie</strong> — dokumentowanie ustaleń wraz z wagą, dowodami i wskazówkami naprawczymi — właściwy produkt, który czyni test penetracyjny wartościowym.</li>
      </ol>
      <p><strong>Rodzaje testów według poziomu wiedzy</strong> odzwierciedlają rozróżnienie czarnej/białej/szarej skrzynki z Modułu 1: testy penetracyjne typu <strong>black-box</strong> (brak wiedzy wewnętrznej, jak atakujący zewnętrzny), <strong>white-box</strong> (pełny dostęp do kodu/architektury, najgłębsze pokrycie) oraz <strong>grey-box</strong> (częściowa wiedza, np. ważne konto o niskich uprawnieniach — często najbardziej realistyczna symulacja zagrożenia wewnętrznego lub przejętego konta).</p>
      <p><strong>Zakres i autoryzacja mają ogromne znaczenie</strong> — test penetracyjny zawsze działa na podstawie podpisanej umowy definiującej dokładnie, co wchodzi w zakres, oraz jawnej pisemnej zgody; bez tego dokładnie te same działania są po prostu nielegalnym, nieautoryzowanym hakowaniem.</p>` },
    { h: "10.6 AppSec w SDLC: modelowanie zagrożeń i bezpieczny przegląd kodu", body: `
      <p><strong>Modelowanie zagrożeń (Threat Modeling)</strong> to ustrukturyzowane ćwiczenie, wykonywane podczas projektowania (przed napisaniem kodu), mające na celu zidentyfikowanie, co może pójść nie tak i jak się przed tym bronić. Popularnym frameworkiem jest <strong>STRIDE</strong>:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Litera</th><th>Kategoria zagrożenia</th></tr></thead>
        <tbody>
          <tr><td><strong>S</strong></td><td>Spoofing (Podszywanie się) — udawanie kogoś/czegoś innego</td></tr>
          <tr><td><strong>T</strong></td><td>Tampering (Manipulacja) — modyfikowanie danych lub kodu bez autoryzacji</td></tr>
          <tr><td><strong>R</strong></td><td>Repudiation (Zaprzeczenie) — wypieranie się wykonania działania, bez możliwości udowodnienia inaczej</td></tr>
          <tr><td><strong>I</strong></td><td>Information Disclosure (Ujawnienie informacji) — eksponowanie informacji osobom nieupoważnionym do ich zobaczenia</td></tr>
          <tr><td><strong>D</strong></td><td>Denial of Service (Odmowa usługi) — degradowanie lub blokowanie uprawnionego dostępu</td></tr>
          <tr><td><strong>E</strong></td><td>Elevation of Privilege (Eskalacja uprawnień) — uzyskiwanie możliwości bez odpowiedniej autoryzacji</td></tr>
        </tbody>
      </table></div>
      <p>Przejście przez STRIDE względem diagramu przepływu danych systemu — dla każdego komponentu i przepływu danych zadając pytanie „czy to mogłoby zostać podszyte/zmanipulowane/itd.” — wychwytuje luki bezpieczeństwa na poziomie projektu znacznie taniej niż znalezienie ich po uruchomieniu (to specyficzna dla bezpieczeństwa wersja zasady „Wczesne testowanie oszczędza czas i koszty”, Moduł 7).</p>
      <p><strong>Bezpieczny przegląd kodu (Secure Code Review)</strong> rozszerza zwykły przegląd kodu o soczewkę bezpieczeństwa: sprawdzanie zahardkodowanych sekretów, niesparametryzowanych zapytań, brakującej walidacji danych wejściowych i niebezpiecznej deserializacji niezaufanych danych. Najlepiej sprawdza się w połączeniu z narzędziami SAST (10.4) — automatyzacja wychwytuje wzorce mechaniczne, ludzki przegląd wychwytuje problemy na poziomie logiki i projektu, których automatyzacja strukturalnie nie potrafi ocenić.</p>
      <p>To właśnie oznacza w praktyce „bezpieczeństwo shift-left”: modelowanie zagrożeń na etapie projektowania i bezpieczny przegląd kodu na etapie implementacji, zamiast testowania bezpieczeństwa pojawiającego się dopiero tuż przed wydaniem.</p>` },
    { h: "10.7 Bezpieczeństwo w CI/CD i podstawy zgodności", body: `
      <p><strong>Bezpieczeństwo jako bramka pipeline'u:</strong> rozszerzenie bramek jakości z Modułu 9 o kontrole specyficzne dla bezpieczeństwa — skany SAST/SCA blokujące scalenie przy nowych krytycznych ustaleniach, skanowanie sekretów zapobiegające kiedykolwiek zacommitowaniu danych uwierzytelniających oraz skanowanie obrazów kontenerów przed wdrożeniem. Cel jest taki sam jak w każdej praktyce shift-left: wychwycić problem w ciągu minut podczas CI, a nie podczas rozmowy o reagowaniu na incydent po wydaniu.</p>
      <p><strong>Zero Trust</strong> to zasada architektoniczna istotna dla sposobu testowania systemów: nigdy nie zakładaj, że żądanie jest bezpieczne tylko dlatego, że pochodzi z wewnątrz obwodu sieci — każde żądanie jest uwierzytelniane i autoryzowane na podstawie własnych zasług, niezależnie od źródła. To zmienia, co musi sprawdzić testowanie „wewnętrzne”: usługa wewnętrzna wywołująca inną usługę wewnętrzną nadal musi udowodnić, kim jest.</p>
      <p><strong>Zagadnienia testowe pokrewne zgodności</strong> (nie zastępują prawdziwego audytu zgodności, ale są istotne dla tego, o co prosi się zespół QA):</p>
      <ul>
        <li><strong>SOC 2</strong> — zwykle wymaga dowodów kontroli dostępu, zarządzania zmianą i monitorowania; zespoły QA są często proszone o wykazanie, że procesy testowania/wdrażania mają odpowiednie zatwierdzenia i ślady audytowe.</li>
        <li><strong>Zagadnienia pokrewne RODO (GDPR)</strong> — testowanie, że usuwanie danych faktycznie działa od początku do końca (żądanie „usuń moje konto” powinno naprawdę usunąć dane, w tym kopie zapasowe/repliki zgodnie z ich harmonogramem retencji), oraz że dane osobowe (PII) są maskowane/anonimizowane w nieprodukcyjnych środowiskach testowych (nawiązując do Zarządzania danymi testowymi, Moduł 9).</li>
      </ul>
      <p>Nic z tego nie czyni zespołu QA odpowiedzialnym za pełną zgodność regulacyjną — ale świadomość istnienia tych zagadnień pozwala testerowi rozpoznać, kiedy ustalenie („dane testowe zawierają prawdziwe adresy e-mail klientów”) jest w rzeczywistości problemem zgodności, a nie tylko drobną uwagą o higienie danych.</p>` }
  ]
},
{
  id: "performance-ux-automation",
  num: 11,
  title: "Testowanie wydajności, UI/UX i automatyzacji w praktyce",
  summary: "Wykorzystanie zestawu narzędzi w praktyce: przeprowadzenie testu obciążeniowego, ocena użyteczności za pomocą prawdziwych heurystyk, napisanie pierwszego testu automatycznego oraz wiedza, które dodatkowe narzędzia wypełniają luki.",
  takeaway: "Wszystkie techniki i narzędzia omówione do tej pory łączą się tutaj: ten moduł dotyczy faktycznego przeprowadzenia testu obciążeniowego, faktycznej oceny interfejsu względem heurystyki użyteczności i faktycznego napisania testu automatycznego — a nie tylko rozpoznawania związanego z nimi słownictwa.",
  lessons: [
    { h: "11.1 Testowanie obciążeniowe i wydajnościowe w praktyce", body: `
      <p>Testowanie wydajności ma kilka odrębnych odmian, a wybranie niewłaściwej do swojego celu marnuje cykl testowy:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Typ</th><th>Co sprawdza</th><th>Jak jest przeprowadzany</th></tr></thead>
        <tbody>
          <tr><td><strong>Testowanie obciążeniowe (Load Testing)</strong></td><td>Zachowanie przy oczekiwanym, realistycznym obciążeniu</td><td>Zwiększanie obciążenia do oczekiwanej liczby jednoczesnych użytkowników i utrzymywanie go na stałym poziomie, przy pomiarze czasu odpowiedzi i wskaźnika błędów.</td></tr>
          <tr><td><strong>Testowanie warunków skrajnych (Stress Testing)</strong></td><td>Miejsce, w którym system faktycznie się załamuje</td><td>Dalsze zwiększanie obciążenia ponad oczekiwane poziomy aż do awarii, aby znaleźć sufit i sprawdzić, jak łagodnie (lub nie) system się degraduje.</td></tr>
          <tr><td><strong>Testowanie skoków obciążenia (Spike Testing)</strong></td><td>Nagłe, ekstremalne skoki ruchu</td><td>Gwałtowne, skokowe zwiększenie obciążenia (np. z 100 do 5000 użytkowników w kilka sekund) — symuluje kampanię marketingową lub moment wiralowej popularności.</td></tr>
          <tr><td><strong>Testowanie długotrwałe (Soak Testing)</strong></td><td>Zachowanie w długim, ciągłym okresie</td><td>Uruchomienie umiarkowanego obciążenia przez wiele godzin lub dni, przy obserwacji wycieków pamięci i powolnego wyczerpywania zasobów, których krótkie testy nigdy nie ujawniają.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Metryki, które mają znaczenie:</strong> średni czas odpowiedzi sam w sobie może wprowadzać w błąd — system o średniej 200 ms może wciąż pozostawiać 5% użytkowników czekających 4 sekundy. Dlatego wyniki wydajności zwykle raportuje się jako percentyle: <strong>p95</strong> (95% żądań było szybszych niż ta wartość) i <strong>p99</strong> (99% było) ujawniają doświadczenie „ogona” rozkładu, które sama średnia ukrywa. <strong>Throughput</strong> (liczba żądań obsłużonych na sekundę) oraz wskaźnik błędów pod obciążeniem dopełniają podstawowy zestaw metryk.</p>
      <p><strong>Podstawowy przepływ testu obciążeniowego:</strong> zdefiniuj realistyczne scenariusze użytkownika (nie tylko odpytywanie jednego punktu końcowego w pętli) → ustal docelowy profil obciążenia (wzorzec narastania, szczytowa liczba jednoczesnych użytkowników, czas trwania) → uruchom go w środowisku nieprodukcyjnym o wielkości zbliżonej do produkcji → zbierz czas odpowiedzi p95/p99, throughput i wskaźnik błędów → porównaj z uzgodnionym progiem (zob. lekcję o testowaniu niefunkcjonalnym w Module 3) → zaraportuj i przetestuj ponownie po każdej poprawce.</p>` },
    { h: "11.2 Metodyka testowania UI/UX", body: `
      <p>Testowanie UI sprawdza, czy interfejs renderuje się i zachowuje poprawnie (przyciski działają, układy się nie psują); <strong>testowanie UX idzie dalej i pyta, czy doświadczenie faktycznie dobrze służy użytkownikowi</strong> — to różne pytania wymagające różnych metod.</p>
      <p><strong>Ocena heurystyczna (Heuristic Evaluation)</strong> — ocena interfejsu względem znanego zestawu zasad użyteczności bez potrzeby angażowania prawdziwych użytkowników. 10 heurystyk użyteczności Jakoba Nielsena to najpowszechniej stosowany punkt wyjścia, obejmujący m.in.: widoczność stanu systemu, zgodność między systemem a rzeczywistością, kontrolę i swobodę użytkownika, spójność i standardy, zapobieganie błędom oraz rozpoznawanie zamiast przypominania sobie. Tester może samodzielnie przeprowadzić przegląd heurystyczny w jedno popołudnie i wychwycić znaczącą część problemów z użytecznością, zanim w ogóle zwerbuje użytkownika.</p>
      <p><strong>Testowanie użyteczności z prawdziwymi użytkownikami</strong> — sesje oparte na zadaniach („znajdź i kup niebieski t-shirt w rozmiarze M”), podczas których obserwujesz, a nie prowadzisz; <strong>protokół głośnego myślenia (think-aloud protocol)</strong> (proszenie uczestnika o werbalizowanie swoich myśli w trakcie zadania) ujawnia dezorientację, której samo ciche obserwowanie by nie wychwyciło. Nawet 5 użytkowników w sesji zwykle ujawnia większość głównych problemów użytecznościowych projektu — nie potrzeba ogromnej próby, by uzyskać prawdziwy sygnał.</p>
      <p><strong>Testowanie A/B</strong> — uruchomienie dwóch wariantów projektu z podziałem prawdziwego ruchu produkcyjnego między nie i porównanie metryki docelowej (wskaźnik konwersji, ukończenie zadania, czas spędzony na zadaniu). W przeciwieństwie do oceny heurystycznej czy moderowanych sesji użyteczności, testowanie A/B mierzy rzeczywiste zachowanie na dużą skalę, a nie zachowanie obserwowane lub deklarowane podczas sesji — te dwa podejścia się uzupełniają, a nie zastępują.</p>
      <p><strong>Testowanie regresji wizualnej (Visual Regression Testing)</strong> — automatyczne porównywanie zrzutów ekranu interfejsu przed i po zmianie, aby wychwycić niezamierzone uszkodzenia wizualne (zob. Applitools/Percy, Moduł 8) — to fragment testowania UI, który da się zautomatyzować; opisana wyżej praca oparta na osądzie — heurystyczna i z udziałem prawdziwych użytkowników — nie jest czymś, co automatyzacja zastępuje.</p>` },
    { h: "11.3 Praktyczna automatyzacja testów: pisanie pierwszego testu automatycznego", body: `
      <p>Przejście od teorii (architektura frameworków z Modułu 9) do praktyki — jak wygląda faktyczny automatyczny test UI oraz nawyki, które utrzymują jego niezawodność:</p>
      <p><strong>Minimalny test w Playwright</strong> (koncepcyjnie — składnia różni się w zależności od powiązania językowego):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Krok</th><th>Co robi</th></tr></thead>
        <tbody>
          <tr><td>1. Nawigacja</td><td>Otwórz docelowy URL w nowym kontekście przeglądarki.</td></tr>
          <tr><td>2. Zlokalizuj</td><td>Znajdź element, z którym chcesz wejść w interakcję — preferuj lokalizator oparty na roli lub test-id zamiast kruchego selektora CSS powiązanego ze stylowaniem.</td></tr>
          <tr><td>3. Działaj</td><td>Kliknij, wpisz tekst lub w inny sposób wejdź w interakcję ze zlokalizowanym elementem.</td></tr>
          <tr><td>4. Asercja</td><td>Sprawdź, czy wynikowy stan odpowiada oczekiwaniom (pojawił się tekst, zmienił się URL, element stał się widoczny).</td></tr>
        </tbody>
      </table></div>
      <p><strong>Co odróżnia niezawodny test automatyczny od niestabilnego:</strong></p>
      <ul>
        <li><strong>Preferuj automatyczne oczekiwanie zamiast stałych opóźnień</strong> — zahardkodowane <code>wait(2000)</code> jest albo za krótkie (test wciąż niestabilny), albo za długie (spowalnia cały zestaw testów); nowoczesne narzędzia (Playwright, Cypress) zamiast tego automatycznie czekają, aż element stanie się gotowy do interakcji.</li>
        <li><strong>Stabilność lokalizatora</strong> — lokalizator powiązany z dedykowanym atrybutem <code>data-testid</code> przetrwa redesign; ten powiązany z klasą CSS używaną do stylowania psuje się w chwili, gdy projektant zmieni tę klasę.</li>
        <li><strong>Niezależność testów</strong> — każdy test powinien ustawiać własny stan i nie zależeć od wcześniejszego uruchomienia innego testu (ani od konkretnej kolejności) — testy zależne od kolejności to częste i trudne do zdiagnozowania źródło zjawiska „działa samodzielnie, zawodzi w całym zestawie”.</li>
        <li><strong>Jeden jasny cel asercji na test</strong> — test sprawdzający pięć niepowiązanych rzeczy zawodzi w niejednoznaczny sposób; mniejsze, skoncentrowane testy zawodzą z jasnym, konkretnym sygnałem.</li>
      </ul>
      <p>Właśnie tu Page Object Model / Screenplay Pattern z Modułu 9.1 pokazuje swoją wartość: lokalizatory i akcje opisane powyżej znajdują się w jednym miejscu, więc redesign oznacza aktualizację jednego obiektu strony, a nie pięćdziesięciu pojedynczych testów.</p>` },
    { h: "11.4 Dodatkowe narzędzia warte poznania", body: `
      <p>Uzupełnienie zestawu narzędzi z Modułu 8 o narzędzia specyficzne dla wydajności, pokrycia wielu przeglądarek/urządzeń oraz automatyzacji low-code:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Kategoria</th><th>Narzędzia</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td><strong>Testowanie w chmurze na wielu przeglądarkach/urządzeniach</strong></td><td>BrowserStack, Sauce Labs, LambdaTest</td><td>Uruchamianie tego samego zestawu testów na prawdziwych kombinacjach przeglądarek/systemów/urządzeń w chmurze, bez utrzymywania fizycznego laboratorium urządzeń.</td></tr>
          <tr><td><strong>Automatyzacja low-code / nagrywanie i odtwarzanie</strong></td><td>Katalon Studio, TestCafe, Ghost Inspector</td><td>Obniżają próg wejścia dla zespołów bez dedykowanych inżynierów automatyzacji — kompromisem jest zwykle mniejsza elastyczność niż we frameworkach opartych na kodzie przy złożonej logice.</td></tr>
          <tr><td><strong>Porównywanie wizualne/percepcyjne</strong></td><td>Applitools Eyes, Percy, Chromatic</td><td>Omówione w Module 8 — warto wspomnieć ponownie obok innych narzędzi do testowania UI, ponieważ regresja wizualna jest częścią kompletnej strategii testowania UI.</td></tr>
          <tr><td><strong>Testowanie specyficzne dla urządzeń mobilnych</strong></td><td>Appium (Moduł 8), Firebase Test Lab, symulatory Xcode/Android Studio</td><td>Farmy prawdziwych urządzeń w chmurze (przez BrowserStack/Sauce Labs) wychwytują problemy z renderowaniem i wydajnością specyficzne dla urządzeń, które symulatory mogą przeoczyć.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Testowanie ciągłe (Continuous Testing)</strong> — praktyka uruchamiania testów automatycznych w sposób ciągły w całym pipeline (nie tylko przed wydaniem), dzięki czemu informacja zwrotna o każdej zmianie przychodzi w ciągu minut — łączy ten moduł bezpośrednio z architekturą pipeline'u z Modułu 9.3: żadne z tych narzędzi nie dostarcza wartości, jeśli stoją poza pipeline'em, który faktycznie uruchamia je przy każdej zmianie.</p>` }
  ]
}
  ],
  quizzes: {
    "manual-testing": [
      { q: "Według IBM System Sciences Institute, o ile mniej więcej droższa jest naprawa błędu znalezionego na etapie implementacji w porównaniu z etapem projektowania?", options: ["2x", "6x", "15x", "Koszt jest taki sam"], correct: 1, explain: "IBM System Sciences Institute wykazał, że defekt wykryty na etapie implementacji kosztuje naprawę około 6 razy więcej niż ten wykryty na etapie projektowania — to kluczowy argument za wczesnym testowaniem." },
      { q: "Jaki odsetek projektów wskazuje walidację UX jako główny powód testowania manualnego?", options: ["Ponad 70%", "Około 10%", "Dokładnie 50%", "Poniżej 5%"], correct: 0, explain: "Ponad 70% projektów wskazuje UX — rozmieszczenie, estetykę i informację zwrotną — jako główny powód, dla którego potrzebni są ludzcy testerzy." },
      { q: "Która klasyfikacja testowania manualnego opiera się na BRAKU wiedzy o wewnętrznym kodzie aplikacji?", options: ["Testowanie białej skrzynki", "Testowanie szarej skrzynki", "Testowanie czarnej skrzynki", "Testowanie jednostkowe"], correct: 2, explain: "Testowanie czarnej skrzynki weryfikuje funkcjonalność wyłącznie na podstawie wymagań i specyfikacji, bez znajomości wewnętrznego kodu." },
      { q: "Który z poniższych jest jednym z pięciu głównych celów testowania manualnego wymienionych w tym materiale?", options: ["Pokrycie automatyzacją", "Pewność regresji", "Równoważenie obciążenia", "Refaktoryzacja kodu"], correct: 1, explain: "Pięć głównych celów to: identyfikacja błędów, walidacja wymagań, zapewnienie doświadczenia użytkownika, pewność regresji i dostarczanie jakości." },
      { q: "Co jest wymienione jako wada testowania manualnego w przypadku dużych, złożonych aplikacji?", options: ["Zbyt szybkie wykrywanie błędów", "Brak skalowalności", "Wymaga zaawansowanych umiejętności programistycznych", "Nie może obejmować ludzkiego osądu"], correct: 1, explain: "Testowanie manualne jest czasochłonne i nie skaluje się dobrze w przypadku dużych lub złożonych aplikacji — dlatego obok niego istnieje automatyzacja." },
      { q: "W studium przypadku Systemu Zarządzania Szpitalem, co przede wszystkim waliduje tester manualny?", options: ["Czasy odpowiedzi serwera pod obciążeniem", "Czy aplikacja kompiluje się bez błędów", "Rzeczywiste sekwencje przepływu pracy obejmujące rejestrację, planowanie wizyt i rozliczenia", "Konwencje stylu kodu źródłowego"], correct: 2, explain: "Studium przypadku dotyczy walidacji, czy dane wprowadzone w jednym przepływie (np. rejestracji) poprawnie trafiają na kolejne ekrany (rozliczenia, widoki lekarza) — czyli rzeczywistej sekwencji użycia." },
      { q: "Które podejście testowe, według porównania testowania manualnego i automatycznego, wymaga umiejętności programistycznych oprócz wiedzy testowej?", options: ["Testowanie manualne", "Testowanie automatyczne", "Żadne", "Oba w równym stopniu, bez rozróżnienia"], correct: 1, explain: "Testowanie automatyczne wymaga programowania oraz wiedzy testowej, podczas gdy testowanie manualne wymaga wiedzy dziedzinowej i testowej, ale bez kodowania." },
      { q: "Jaka jest kluczowa różnica między wagą (Severity) a priorytetem (Priority) defektu?", options: ["Oznaczają dokładnie to samo", "Waga to wpływ techniczny; priorytet to pilność naprawy z perspektywy biznesowej", "Wagę ustala produkt, priorytet ustala tester", "Priorytet dotyczy tylko testów automatycznych"], correct: 1, explain: "Waga i priorytet to niezależne osie — błąd o wysokiej wadze w rzadko używanym obszarze może mieć niski priorytet, a błąd o niskiej wadze, ale wysoce widoczny, może mieć wysoki priorytet." },
      { q: "Jaki jest najczęstszy powód, dla którego raport o błędzie wraca do zgłaszającego zamiast zostać naprawionym?", options: ["Raport jest zbyt krótki", "Brak kroków reprodukcji", "Waga została ustawiona zbyt wysoko", "Znalazł go junior tester"], correct: 1, explain: "Bez jasnych, dokładnych kroków reprodukcji deweloper często nie może potwierdzić ani zdiagnozować problemu, więc raport wraca po więcej szczegółów, zanim będzie można go naprawić." }
    ],
    "test-techniques": [
      { q: "Dla poprawnego zakresu wejściowego 1–10, jakie wartości testowałaby Analiza Wartości Brzegowych?", options: ["1, 5, 10", "0, 1, 2, 9, 10, 11", "-10, 0, 10, 20", "Każdą liczbę całkowitą od 1 do 10"], correct: 1, explain: "BVA testuje wartości tuż wewnątrz, na granicy oraz tuż na zewnątrz każdej granicy: 0, 1, 2 (granica dolna) oraz 9, 10, 11 (granica górna)." },
      { q: "Która technika dzieli dane wejściowe na grupy poprawne i niepoprawne oraz testuje jedną reprezentatywną wartość z każdej z nich?", options: ["Analiza wartości brzegowych", "Testowanie tablicą decyzyjną", "Podział na klasy równoważności", "Testowanie przejść między stanami"], correct: 2, explain: "Podział na klasy równoważności (ECP) zakłada, że wszystkie wartości w danej klasie zachowują się podobnie, więc przetestowanie jednej reprezentatywnej wartości na klasę wystarcza." },
      { q: "Która zasada testowania stwierdza, że wielokrotne uruchamianie tych samych testów w końcu przestaje wykrywać nowe błędy?", options: ["Grupowanie defektów", "Paradoks pestycydu", "Błędne mniemanie o braku błędów", "Wyczerpujące testowanie jest niemożliwe"], correct: 1, explain: "Paradoks pestycydu: ponowne wykorzystywanie tych samych testów sprawia, że stają się na nie „odporne” na wykrywanie nowych defektów, więc testy muszą być przeglądane i aktualizowane." },
      { q: "Niewielka liczba modułów zawierająca większość defektów systemu jest opisywana przez którą zasadę?", options: ["Grupowanie defektów", "Wczesne testowanie oszczędza czas i koszty", "Testowanie zależy od kontekstu", "Paradoks pestycydu"], correct: 0, explain: "Grupowanie defektów obserwuje, że defekty mają tendencję do koncentrowania się w niewielkiej liczbie modułów." },
      { q: "Której techniki użyłbyś do przetestowania przycisku „Wyślij”, który aktywuje się tylko wtedy, gdy wszystkie pola formularza są wypełnione?", options: ["Zgadywanie błędów", "Analiza wartości brzegowych", "Testowanie tablicą decyzyjną", "Testowanie ścieżek"], correct: 2, explain: "Testowanie tablicą decyzyjną mapuje kombinacje warunków wejściowych (które pola są wypełnione) na oczekiwane wyniki (przycisk aktywny lub nie)." },
      { q: "W przykładzie logowania/PIN dotyczącym przejść między stanami, co dzieje się po 3 nieudanych próbach PIN z rzędu?", options: ["Dostęp przyznany", "Licznik resetuje się do 0", "Konto zablokowane", "Nic się nie zmienia"], correct: 2, explain: "Zgodnie z tabelą stanów, trzy kolejne nieudane próby przenoszą system w stan „Konto zablokowane”." },
      { q: "Która technika opiera się wyłącznie na intuicji testera i historycznych danych o defektach, bez formalnych kroków?", options: ["Zgadywanie błędów", "Podział na klasy równoważności", "Testowanie tablicą decyzyjną", "Analiza wartości brzegowych"], correct: 0, explain: "Zgadywanie błędów nie ma formalnych kroków — zależy całkowicie od doświadczenia testera i wiedzy o tym, gdzie zwykle pojawiają się błędy." },
      { q: "Jaka jest rekomendacja najlepszej praktyki przy wyborze techniki projektowania testów?", options: ["Zawsze używaj wyłącznie analizy wartości brzegowych", "Polegaj na jednej technice dla spójności", "Łącz wiele technik zamiast polegać na jednej", "Pomiń wybór techniki i testuj wszystko wyczerpująco"], correct: 2, explain: "Żadna pojedyncza technika nie gwarantuje pełnego wykrycia defektów, dlatego zaleca się łączenie wielu technik." },
      { q: "Dlaczego testowanie parami (pairwise) jest przydatne dla funkcji z wieloma niezależnymi parametrami wejściowymi?", options: ["Testuje każdą możliwą kombinację, gwarantując pełne pokrycie", "Pokrywa każdą parę wartości parametrów przy znacznie mniejszej liczbie przypadków testowych, ponieważ większość defektów pochodzi z interakcji dwóch parametrów", "Działa wyłącznie dla wartości brzegowych", "Całkowicie zastępuje potrzebę podziału na klasy równoważności"], correct: 1, explain: "Testowanie parami opiera się na obserwacji, że większość defektów interakcji dotyczy tylko dwóch parametrów, więc pokrycie każdej pary (a nie każdej pełnej kombinacji) wychwytuje większość problemów znacznie taniej." },
      { q: "Z czego testowanie przypadków użycia (Use Case Testing) wyprowadza przypadki testowe?", options: ["Z losowego generowania danych", "Z udokumentowanych interakcji krok po kroku między aktorem a systemem, obejmujących przebiegi alternatywne/wyjątkowe", "Z pokrycia gałęzi kodu źródłowego", "Z wartości brzegowych pojedynczego pola wejściowego"], correct: 1, explain: "Testowanie przypadków użycia buduje przypadki testowe bezpośrednio z głównego scenariusza sukcesu oraz alternatywnych/wyjątkowych przebiegów udokumentowanego przypadku użycia, walidując przepływ pracy od początku do końca z perspektywy użytkownika." }
    ],
    "testing-types": [
      { q: "Co definiuje „rodzaj” testowania oprogramowania, według tego modułu?", options: ["Tylko narzędzie użyte do jego uruchomienia", "Klasyfikację z własnym celem, strategią i produktami", "Język programowania testowanego systemu", "Czas trwania wykonania testu"], correct: 1, explain: "Rodzaj testowania to klasyfikacja — jak testowanie dostępności — z konkretnym celem, strategią i produktami." },
      { q: "Która kategoria grupuje rodzaje testowania takie jak testy jednostkowe, testy gałęzi i testy ścieżek?", options: ["Funkcjonalne", "Niefunkcjonalne", "Strukturalne (biała skrzynka)", "Związane ze zmianą"], correct: 2, explain: "Są to techniki białoskrzynkowe/strukturalne, które badają wewnętrzne ścieżki kodu systemu." },
      { q: "Testowanie regresyjne i testy dymne najlepiej pasują do której kategorii w taksonomii modułu?", options: ["Specjalistyczne", "Związane ze zmianą", "Strukturalne", "Niefunkcjonalne"], correct: 1, explain: "Oba są wywoływane przez zmianę (poprawkę, nowy build) i sprawdzają, czy zmiana niczego nie zepsuła — kategoria „związane ze zmianą”." },
      { q: "Który z poniższych jest częścią wyselekcjonowanej listy „Top 20 rodzajów testowania, które powinien znać każdy QA”?", options: ["Testowanie wstrzykiwaniem błędów (Fault Injection)", "Testowanie użyteczności", "Testowanie tablicami ortogonalnymi", "Testowanie sterowane modularnością"], correct: 1, explain: "Testowanie użyteczności jest jedną z 20 wysokowartościowych, rozpoznawalnych pozycji wyróżnionych przez moduł jako punkt startowy." },
      { q: "Do jakiej kategorii najlepiej zaklasyfikować testowanie dostępności?", options: ["Specjalistyczne", "Strukturalne", "Związane ze zmianą", "Funkcjonalne"], correct: 0, explain: "Testowanie dostępności odnosi się do ukierunkowanego, specjalistycznego zagadnienia — użyteczności dla osób z niepełnosprawnościami." },
      { q: "Gdzie w tej aplikacji znajduje się pełny katalog ponad 105 terminów rodzajów testowania?", options: ["Tylko w tekście tego modułu", "W Słowniku", "W Egzaminie Końcowym", "Nie jest zawarty"], correct: 1, explain: "Moduł odsyła do Słownika, który zawiera pełny, wyodrębniony katalog rodzajów testowania." },
      { q: "Dlaczego testowanie niefunkcjonalne wymaga jawnie zdefiniowanego progu przed rozpoczęciem testowania?", options: ["Nie wymaga — „wystarczająco dobre” jest zawsze oczywiste", "Bez niego „jak dobrze” nie ma linii zaliczenia/niezaliczenia, tylko opinie", "Progi są potrzebne tylko dla testowania funkcjonalnego", "Progi niepotrzebnie spowalniają proces testowania"], correct: 1, explain: "Stwierdzenie takie jak „strona ładuje się w mniej niż 2s przy 500 równoczesnych użytkownikach” daje jasną linię zaliczenia/niezaliczenia — bez uzgodnionego progu wyniki niefunkcjonalne to tylko subiektywne opinie." },
      { q: "Dlaczego pseudo-lokalizacja (sztucznie wydłużone/zaakcentowane ciągi znaków) jest przydatna, zanim powstaną prawdziwe tłumaczenia?", options: ["Całkowicie zastępuje potrzebę prawdziwego tłumaczenia", "Wcześnie wychwytuje uszkodzenia układu spowodowane rozszerzeniem tekstu", "Testuje wydajność serwera pod obciążeniem", "Sprawdza tylko formatowanie waluty"], correct: 1, explain: "Pseudo-lokalizacja ujawnia problemy z układem UI spowodowane dłuższym przetłumaczonym tekstem, zanim jeszcze powstaną prawdziwe tłumaczenia, wcześnie wychwytując całą klasę błędów." }
    ],
    "adhoc-testing": [
      { q: "Który z poniższych NIE jest uznawanym rodzajem testowania ad hoc w tym materiale?", options: ["Buddy Testing", "Pair Testing", "Monkey Testing", "Testowanie regresyjne"], correct: 3, explain: "Testowanie regresyjne to rodzaj testowania związany ze zmianą, a nie forma testowania ad hoc. Buddy, Pair i Monkey Testing to trzy omówione rodzaje." },
      { q: "Testowanie ad hoc najlepiej opisać jako jakie podejście?", options: ["Podejście białoskrzynkowe wymagające dostępu do kodu źródłowego", "Podejście czarnoskrzynkowe bez przygotowanych przypadków testowych", "Automatyczny zestaw testów regresyjnych", "Formalny, udokumentowany proces certyfikacyjny"], correct: 1, explain: "Testowanie ad hoc jest nieformalne, niepisane i czarnoskrzynkowe — żadne przypadki testowe nie są przygotowywane z wyprzedzeniem." },
      { q: "Który z poniższych jest wymienionym scenariuszem „kiedy je stosować” dla testowania ad hoc?", options: ["Tylko podczas wstępnego zbierania wymagań", "Gdy czasu jest mało", "Tylko po wydaniu produktu", "Nigdy podczas testów beta"], correct: 1, explain: "Bycie ograniczonym czasowo to jeden z kilku dobrych momentów na testowanie ad hoc, obok wczesnego etapu rozwoju, testowania przed/po formalnym testowaniu, dogłębnej eksploracji funkcji, sprawdzeń użyteczności i testów beta." },
      { q: "Jaka jest kluczowa wada testowania ad hoc?", options: ["Wymaga obszernej dokumentacji", "Trudno je odtworzyć lub powtórzyć", "Nie może znaleźć żadnych defektów przypadków brzegowych", "Zawsze jest wolniejsze niż testowanie skryptowe"], correct: 1, explain: "Ponieważ nie ma skryptu ani zapisu, sesje testowania ad hoc trudno dokładnie odtworzyć — to realna słabość identyfikowalności." },
      { q: "Jaka najlepsza praktyka jest zalecana dla testowania ad hoc?", options: ["Unikaj rejestrowania defektów, aby zaoszczędzić czas", "Testuj losowe moduły bez oceny ryzyka", "Skup się na kluczowych/wysoko ryzykownych modułach i rejestruj każdy znaleziony defekt", "Nigdy nie łącz się w parę z innym testerem"], correct: 2, explain: "Najlepsze praktyki obejmują dobrą znajomość biznesu, koncentrację na modułach wysokiego ryzyka, rejestrowanie każdego defektu i łączenie się w pary dla świeżej perspektywy." },
      { q: "W testowaniu Monkey Testing, co charakteryzuje dane wejściowe podawane aplikacji?", options: ["Starannie zaplanowane wartości brzegowe", "Losowe, nieustrukturyzowane dane wejściowe", "Tylko dane wejściowe z poprawnych klas równoważności", "Dane wejściowe wygenerowane z tablicy decyzyjnej"], correct: 1, explain: "Monkey Testing rzuca losowe, nieustrukturyzowane dane wejściowe na aplikację, aby sprawdzić, czy się zepsuje." },
      { q: "Czym jest „bug bash”, wykorzystywany do integrowania testowania ad hoc ze sprintami Agile?", options: ["Formalny, skryptowany zestaw testów regresyjnych", "Sesja ograniczona czasowo, podczas której cały zespół wspólnie testuje ad hoc build", "Spotkanie w celu priorytetyzacji backlogu", "Narzędzie do automatycznego generowania raportów o błędach"], correct: 1, explain: "Bug bash to sesja ograniczona czasowo (często 30–60 minut), podczas której cały zespół, nie tylko QA, wspólnie testuje build — rozpowszechniając wiedzę o produkcie i wychwytując błędy, na które nawyki pojedynczych osób mogłyby nie trafić." },
      { q: "Dlaczego nawet nieformalne sesje testowania ad hoc powinny być ograniczone czasowo?", options: ["Ograniczenie czasowe w rzeczywistości nie jest przydatne dla testowania ad hoc", "Utrzymuje sesję skupioną, zamiast błądzić, nawet bez formalnego skryptu", "Gwarantuje pełne pokrycie testami", "Zastępuje potrzebę rejestrowania defektów"], correct: 1, explain: "Ustalony limit czasu (np. 20 minut na nowym przepływie płatności) utrzymuje nieskryptowaną sesję skupioną, mimo że nie ma formalnego przypadku testowego do naśladowania." }
    ],
    "exploratory-testing": [
      { q: "W SBTM, co następuje bezpośrednio po zdefiniowaniu Karty Testowej (Test Charter)?", options: ["Debriefing", "Przegląd wyników", "Ograniczenie czasu sesji", "Utworzenie taksonomii błędów"], correct: 2, explain: "Kolejność SBTM to: taksonomia błędów → karta testowa → ograniczenie czasu sesji → przegląd wyników → debriefing." },
      { q: "Według tabeli porównania testowania skryptowego i eksploracyjnego, testowanie eksploracyjne najlepiej opisać jako...", options: ["Potwierdzające", "Badawcze", "Dotyczące kontrolowania testów", "Kierowane wyłącznie wymaganiami"], correct: 1, explain: "Tabela kontrastuje testowanie skryptowe (potwierdzające) z testowaniem eksploracyjnym (badawcze)." },
      { q: "W testowaniu eksploracyjnym projektowanie i wykonywanie testów odbywają się...", options: ["W ściśle oddzielnych fazach, najpierw projektowanie", "Jednocześnie", "Tylko po wydaniu produktu", "Tylko przez deweloperów, nigdy przez testerów"], correct: 1, explain: "Testowanie eksploracyjne definiuje się jako jednoczesne projektowanie i wykonywanie testów — czynność „myślową” badania i uczenia się." },
      { q: "Co jest wymienione jako wada testowania eksploracyjnego?", options: ["Wymaga obszernej dokumentacji przygotowawczej", "Trudno zmierzyć pokrycie", "Nie może dostosować się do zmieniających się wymagań", "Nigdy nie znajduje nowych błędów"], correct: 1, explain: "Ponieważ sesje nie są zaplanowane skryptowo, dokładne pomiary pokrycia oraz dokładne odtworzenie sesji są trudne." },
      { q: "Kiedy testowanie eksploracyjne jest szczególnie zalecane, według tego modułu?", options: ["Tylko dla w pełni udokumentowanych, stabilnych wymagań", "Gdy wymagania są niekompletne lub niejednoznaczne", "Tylko w ścisłych audytach regulacyjnych/zgodności", "Tylko dla testerów bez doświadczenia dziedzinowego"], correct: 1, explain: "Testowanie eksploracyjne sprawdza się szczególnie, gdy wymagania są niekompletne/niejednoznaczne, we wczesnych iteracjach, w krytycznych aplikacjach wymagających dogłębnego badania oraz przy doświadczonych testerach." },
      { q: "Które sformułowanie z tabeli porównawczej opisuje testowanie skryptowe?", options: ["Jak spontaniczna rozmowa", "Umysł testera ma kontrolę", "Jak odczytywanie przemówienia z kartki", "Dotyczy usprawniania projektu testów"], correct: 2, explain: "Testowanie skryptowe jest „jak odczytywanie przemówienia z kartki” — to skrypt ma kontrolę, w przeciwieństwie do spontanicznej rozmowy testowania eksploracyjnego." },
      { q: "W heurystyce SFDPOT, co oznacza litera „O”?", options: ["Objectives (Cele)", "Output (Wyjście)", "Operations (Operacje) — jak produkt jest faktycznie używany w prawdziwym świecie", "Optimization (Optymalizacja)"], correct: 2, explain: "„O” w SFDPOT to Operations (Operacje) — jak produkt jest faktycznie używany w prawdziwym świecie, w tym nietypowe użycie, a nie tylko jego udokumentowana funkcja." },
      { q: "W heurystyce wyroczni HICCUPPS, na jakie pytanie pomaga odpowiedzieć „Oczekiwania użytkownika” (User expectations)?", options: ["Czy kod kompiluje się bez błędów", "Czy zaobserwowane zachowanie jest błędem, sprawdzając, czy zgadza się z tym, czego oczekiwałby rozsądny użytkownik", "Jak szybko system odpowiada pod obciążeniem", "Na jakiej przeglądarce uruchomiono test"], correct: 1, explain: "HICCUPPS to zestaw heurystyk wyroczni pomagających ustalić, czy nieoczekiwane zachowanie liczy się jako błąd, gdy nie ma jawnej specyfikacji — „Oczekiwania użytkownika” pyta, czy zgadza się z tym, czego oczekiwałby rozsądny użytkownik." },
      { q: "Które stwierdzenie najlepiej odróżnia testowanie eksploracyjne od testowania ad hoc?", options: ["To to samo","Eksploracyjne dodaje do swobody testera misję, timebox, nacisk na ryzyko, notatki i dalsze działania; ad hoc nie ma z góry określonej struktury ani celu","Testowanie ad hoc zawsze używa pisemnej karty","Eksploracyjne wymaga w pełni skryptowych przypadków testowych"], correct: 1, explain: "Testowanie eksploracyjne = swoboda + cel + dochodzenie + dyscyplina. Testowanie ad hoc w stylu „poklikam i zobaczę” trudno zmierzyć, powtórzyć lub przekazać." },
      { q: "Która z tych kart testu jest NAJSŁABSZA?", options: ["Przetestuj logowanie.","Zbadaj proces logowania pod kątem błędów uwierzytelniania, nietypowych danych, obsługi sesji i komunikatów błędów.","Zbadaj logowanie z niepoprawnymi, brzegowymi i nietypowymi danymi, z naciskiem na blokadę i sesję.","Zbadaj walidację rejestracji, zduplikowane konta, dane brzegowe i obsługę błędów."], correct: 0, explain: "„Przetestuj logowanie” nie podaje celu, ryzyka ani skupienia. Dobra karta mówi, co zbadać i czego się dowiedzieć, bez skryptowania każdego kliknięcia." },
      { q: "Czym według ISTQB jest karta testu?", options: ["Szczegółowym skryptem krok po kroku z oczekiwanymi wynikami","Określeniem celów testu i ewentualnie pomysłów na to, jak testować","Umową podpisaną przez klienta","Listą zautomatyzowanych testów regresji"], correct: 1, explain: "Karta nadaje sesji kierunek i skupienie, nie narzucając każdej czynności." },
      { q: "Według sylabusa ISTQB Advanced Agile Tester, ile zwykle trwają sesje eksploracyjne?", options: ["5–10 minut","60–120 minut","Cały dzień roboczy","Nigdy nie mają limitu czasu"], correct: 1, explain: "Sesje trwają zwykle ok. 60–120 minut, są prowadzone według karty i dokumentowane notatkami, zrzutami ekranu, pokryciem i anomaliami." },
      { q: "Czym zgadywanie błędów różni się od testowania eksploracyjnego?", options: ["Zgadywanie błędów przewiduje prawdopodobne problemy na podstawie doświadczenia; testowanie eksploracyjne stale bada i dostosowuje się do tego, czego się dowiaduje","Zgadywanie błędów to technika białej skrzynki","Testowanie eksploracyjne nigdy nie korzysta z doświadczenia","Są identyczne"], correct: 0, explain: "Zgadywanie błędów = przewidywanie prawdopodobnych problemów. Testowanie eksploracyjne = ciągłe badanie i dostosowywanie się. Zgadywanie błędów często stosuje się w ramach sesji eksploracyjnej." },
      { q: "Które trzy techniki ISTQB CTFL zalicza do opartych na doświadczeniu?", options: ["Wartości brzegowe, klasy równoważności, tablice decyzyjne","Listy kontrolne, zgadywanie błędów, testowanie eksploracyjne","Testy jednostkowe, integracyjne, systemowe","Pokrycie instrukcji, gałęzi i ścieżek"], correct: 1, explain: "Listy kontrolne, zgadywanie błędów i testowanie eksploracyjne opierają się na doświadczeniu, wiedzy i intuicji testera." },
      { q: "W trakcie sesji UI pokazuje ogólny błąd przy zduplikowanej rejestracji, ale API zwraca HTTP 500. Jaki jest najlepszy następny krok?", options: ["Zignorować; UI to obsłużyło","Zatrzymać się, odtworzyć, wyizolować (np. wywołać API bezpośrednio), a potem zapisać dowody i zgłosić defekt","Zacząć sesję od nowa","Oznaczyć funkcję jako zaliczoną"], correct: 1, explain: "Gdy dzieje się coś nietypowego: zatrzymaj się → odtwórz → wyizoluj → rozszerz → porównaj, a potem zgłoś z dowodami. 5xx przy błędnych danych klienta to defekt." },
      { q: "Jaki wzór leży u podstaw priorytetyzacji opartej na ryzyku w testowaniu eksploracyjnym?", options: ["Ryzyko = Koszt + Czas","Ryzyko = Prawdopodobieństwo × Wpływ","Ryzyko = Błędy ÷ Testy","Ryzyko = Pokrycie × Szybkość"], correct: 1, explain: "Skup eksplorację tam, gdzie awaria jest prawdopodobna i szkodliwa: uwierzytelnianie, płatności, dane osobowe, izolacja najemców, usuwanie, współbieżność, integracje." },
      { q: "Zamówienie przechodzi Draft → Submitted → Approved → Completed. Który test eksploracji stanów jest przydatny?", options: ["Tylko raz przetestować szczęśliwą ścieżkę","Spróbować niedozwolonych przejść, np. Completed → Draft lub Approved → Submitted","Sprawdzić tylko kolory strony","Pominąć stany; nie mogą zawierać błędów"], correct: 1, explain: "Eksploracja stanów pyta, jakie stany może osiągnąć obiekt, a potem próbuje niedozwolonych przejść, które system powinien odrzucić." },
      { q: "Eksploracja pokazuje, że podwójne kliknięcie Zapisz tworzy dwa kontakty. Co powinno się stać po poprawce?", options: ["Nic; eksploracja nie zasila automatyzacji","Dodać test regresji (np. sprawdzenie w Playwright, że kontakt jest 1), aby defekt nie wrócił","Usunąć zgłoszenie błędu","Powtarzać tę samą sesję eksploracyjną bez końca"], correct: 1, explain: "Eksploracja odkrywa zachowania; automatyzacja chroni potem stabilne, ważne zachowanie, które znalazła." },
      { q: "Jaka jest najbardziej miarodajna miara wartości sesji eksploracyjnej?", options: ["Liczba kliknięć","Liczba zrzutów ekranu","Jakie ważne informacje dała sesja: defekty, ryzyka, pytania i pokrycie","Jak długo tester był zalogowany"], correct: 2, explain: "Liczenie aktywności nie mierzy jakości testów. Pytaj, jakie ważne informacje dała sesja i co pozostaje nieznane." },
      { q: "Co oznacza „Done” dla sesji eksploracyjnej?", options: ["Wszystko jest przetestowane","Karta została zrealizowana, a zespół potrafi wyjaśnić, czego się dowiedział i co pozostaje nieznane","Nie znaleziono defektów","Timebox minął, niezależnie od notatek"], correct: 1, explain: "Done oznacza, że misję zbadano, zapisano znaleziska, dowody i pytania oraz wskazano niepokryte obszary i dalsze kroki, a nie że wszystko przetestowano." },
      { q: "Gdzie zwykle mieści się testowanie eksploracyjne w potoku CI/CD?", options: ["Zastępuje testy jednostkowe","Po tym, jak automatyczne sprawdzenia wdrożą środowisko testowe, jako adaptacyjne badanie przez człowieka przed regresją i wydaniem","Dopiero po wydaniu na produkcję","Nie pasuje do CI/CD"], correct: 1, explain: "Automatyzacja CI/CD daje szybką, powtarzalną informację zwrotną; testowanie eksploracyjne dodaje adaptacyjne badanie wdrożonego buildu przez człowieka." },
      { q: "Który z nich jest typowym błędem w testowaniu eksploracyjnym?", options: ["Używanie karty testu","Ograniczenie sesji w czasie","Napisanie zbyt restrykcyjnej karty, która nie pozwala podążać za przydatnymi odkryciami","Zbieranie dowodów w trakcie sesji"], correct: 2, explain: "Karta powinna określać misję, a nie każde kliknięcie. Zbyt restrykcyjna uniemożliwia eksploracji dostosowanie się." },
      { q: "Podczas eksploracji zauważasz, że strona zwalnia przy każdym powtórzeniu akcji. Co powinno nastąpić?", options: ["Uznać testy wydajności za zakończone","Potraktować to jako sygnał i przeprowadzić kontrolowany test wydajności (np. JMeter lub k6)","Zignorować; eksploracja nie obejmuje wydajności","Zgłosić to wyłącznie jako defekt użyteczności"], correct: 1, explain: "Eksploracja nie zastępuje testów wydajności, ale może wychwycić podejrzane sygnały, które uzasadniają kontrolowany test odpowiednimi narzędziami." } // __EXPL_V2__
    ],
    "rest-api-testing": [
      { q: "Która metoda HTTP zarówno tworzy nową encję, JAK I może aktualizować istniejącą?", options: ["GET", "POST", "PUT", "DELETE"], correct: 2, explain: "PUT może utworzyć nową encję lub zaktualizować istniejącą, w zależności od tego, czy zasób już istnieje." },
      { q: "Która metoda HTTP nigdy nie powinna mieć efektów ubocznych na dane serwera?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0, explain: "GET służy wyłącznie do pobierania danych poprzez URI i nie powinno mieć efektów ubocznych na dane po stronie serwera." },
      { q: "Co oznacza skrót REST?", options: ["Reliable State Transfer", "Representational State Transfer", "Remote Endpoint Service Testing", "Redundant State Transmission"], correct: 1, explain: "REST oznacza Representational State Transfer — styl architektoniczny usług sieciowych." },
      { q: "Która metoda HTTP jest zazwyczaj używana do wysyłania formularzy i przesyłania plików tworzących nowe dane?", options: ["GET", "POST", "DELETE", "HEAD"], correct: 1, explain: "POST tworzy nową encję lub wysyła dane do serwera, na przykład wysyłanie formularzy lub przesyłanie plików." },
      { q: "Jakie narzędzia są wymienione w tym module jako popularne sposoby testowania REST API?", options: ["Selenium, JMeter, LoadRunner", "Advanced REST Client, Postman, cURL", "Excel, Word, PowerPoint", "Git, Docker, Kubernetes"], correct: 1, explain: "Moduł wymienia Advanced REST Client, Postman i cURL jako popularne narzędzia do testowania REST API." },
      { q: "Co należy zwalidować po wysłaniu żądania API, zgodnie z przebiegiem krok po kroku?", options: ["Tylko kod statusu HTTP", "Tylko to, czy serwer się nie zawiesił", "Kod statusu, treść/schemat odpowiedzi oraz nagłówki", "Nic — udane wysłanie wystarczy"], correct: 2, explain: "Przebieg wymaga zwalidowania kodu statusu, treści lub schematu odpowiedzi oraz nagłówków względem oczekiwanych wyników." },
      { q: "Który z poniższych jest wymieniony jako prawdziwe wyzwanie testowania API?", options: ["Zbyt dużo interfejsu do klikania", "Weryfikacja samego wyniku bez interfejsu użytkownika", "API nigdy nie wymagają sekwencjonowania wywołań", "Jest zbyt mało metod HTTP do wyboru"], correct: 1, explain: "Bez interfejsu użytkownika weryfikacja samej odpowiedzi wymaga innych umiejętności walidacji niż typowe testowanie UI." },
      { q: "Podczas testowania przepływu uwierzytelniania opartego na JWT, co należy zweryfikować w kwestii walidacji podpisu?", options: ["Podpisów nie trzeba sprawdzać, jeśli token wygląda na poprawnie sformatowany", "Zmanipulowany token musi zostać odrzucony — serwer nie może ufać roszczeniom bez weryfikacji podpisu", "Liczy się tylko wygaśnięcie tokenu, nie jego podpis", "JWT-ów nie da się testować pod kątem bezpieczeństwa"], correct: 1, explain: "Roszczenia JWT są wiarygodne tylko wtedy, gdy podpis jest zweryfikowany — serwer, który ufa roszczeniom bez sprawdzenia podpisu, może zostać oszukany zmanipulowanym tokenem." },
      { q: "Jakie zagadnienie testowe jest unikatowe dla GraphQL i nie dotyczy w ten sam sposób typowych punktów końcowych REST?", options: ["GraphQL nie może zwracać JSON", "Zapytania żądające nadmiernych lub głęboko zagnieżdżonych danych mogą stanowić ryzyko odmowy usługi", "GraphQL nie ma koncepcji uwierzytelniania", "GraphQL obsługuje tylko żądania GET"], correct: 1, explain: "Ponieważ klient GraphQL może zażądać głęboko zagnieżdżonych lub nadmiernych danych w jednym zapytaniu, testowanie musi sprawdzać, czy schemat chroni przed zapytaniami, które mogłyby przeciążyć serwer." },
      { q: "Jaka jest typowa różnica między PUT a PATCH?", options: ["PUT usuwa, PATCH tworzy","PUT zwykle zastępuje cały zasób; PATCH zwykle aktualizuje tylko niektóre pola","Są identyczne w każdym API","PATCH zwraca tylko nagłówki"], correct: 1, explain: "PUT zwykle zastępuje zasób, PATCH zwykle wykonuje częściową aktualizację, ale źródłem prawdy pozostaje kontrakt API." },
      { q: "Czym jest 123 w GET /api/users/123?include=orders&page=2?", options: ["Parametrem zapytania","Nagłówkiem","Parametrem ścieżki","Ciałem żądania"], correct: 2, explain: "123 jest częścią ścieżki URL, czyli parametrem ścieżki. include i page to parametry zapytania." },
      { q: "Jaki status najczęściej zwraca POST, który pomyślnie tworzy kontakt?", options: ["200 OK","201 Created","204 No Content","302 Found"], correct: 1, explain: "201 Created to typowa odpowiedź na udane utworzenie. Nie zakładaj, że każdy sukces to 200: oczekiwany kod zależy od operacji i kontraktu." },
      { q: "Który kod statusu sygnalizuje, że klient wysłał zbyt wiele żądań (limit żądań)?", options: ["409","415","429","503"], correct: 2, explain: "429 Too Many Requests oznacza przekroczenie limitu żądań. 409 to Conflict, 415 to Unsupported Media Type, 503 to Service Unavailable." },
      { q: "Nazwa użytkownika musi mieć 3–30 znaków. Które wartości brzegowe należy przetestować?", options: ["Tylko 3 i 30","1, 15, 50","2, 3, 4, 29, 30, 31","0 i 100"], correct: 2, explain: "Analiza wartości brzegowych testuje tuż poniżej, na i tuż powyżej każdej granicy: 2, 3, 4 oraz 29, 30, 31." },
      { q: "Dokumentacja mówi, że pole 'id' jest liczbą całkowitą, ale API zwraca je jako ciąg znaków. Jak to się nazywa?", options: ["Idempotentność","Dryf kontraktu (contract drift)","Limit żądań","Izolacja najemców"], correct: 1, explain: "Gdy implementacja przestaje zgadzać się z udokumentowanym kontraktem (OpenAPI/JSON Schema), jest to dryf kontraktu, który może zepsuć konsumentów API." },
      { q: "Jaka jest różnica między uwierzytelnianiem a autoryzacją?", options: ["Oznaczają to samo","Uwierzytelnianie pyta, kim jesteś; autoryzacja pyta, czy możesz wykonać operację","Autoryzacja następuje przed uwierzytelnianiem","Uwierzytelnianie dotyczy tylko administratorów"], correct: 1, explain: "Uwierzytelnianie weryfikuje tożsamość; autoryzacja weryfikuje uprawnienie do konkretnej akcji lub zasobu." },
      { q: "Użytkownik A wysyła GET /orders/555, zamówienie Użytkownika B, i otrzymuje dane. Jakie to ryzyko z OWASP API?", options: ["Broken Object Level Authorization (BOLA)","Server-Side Request Forgery","Improper Inventory Management","Unsafe Consumption of APIs"], correct: 0, explain: "Dostęp do obiektu innego użytkownika przez zmianę jego ID to Broken Object Level Authorization, nr 1 w OWASP API Security Top 10 (2023)." },
      { q: "Zwykły użytkownik wysyła {\"isAdmin\": true} w aktualizacji profilu, a API to akceptuje. Jakie ryzyko z OWASP API to pokazuje?", options: ["Broken Authentication","Broken Object Property Level Authorization","Unrestricted Resource Consumption","Security Misconfiguration"], correct: 1, explain: "Możliwość zmiany uprzywilejowanych właściwości, takich jak role, isAdmin, ownerId czy tenantId, to Broken Object Property Level Authorization." },
      { q: "Dlaczego przepływ CRUD zawiera READ po każdym kroku (CREATE → READ → UPDATE → READ → DELETE → READ)?", options: ["Aby spowolnić test","Aby potwierdzić, że każda operacja naprawdę zadziałała, w tym że usunięty zasób zniknął","Bo READ jest wymagany przed każdym zapisem","Aby przetestować limit żądań"], correct: 1, explain: "Każdy READ sprawdza, czy poprzedni zapis naprawdę zmienił stan; np. ostatni READ po DELETE powinien zwrócić 404." },
      { q: "Dwukrotne wysłanie tego samego DELETE lub PUT powinno zostawić zasób w tym samym zamierzonym stanie. Jaką właściwość się testuje?", options: ["Idempotentność","Paginację","Pseudolokalizację","Współbieżność"], correct: 0, explain: "Operacja idempotentna daje ten sam stan końcowy niezależnie od liczby powtórzeń. Powtarzane POST należy też sprawdzić pod kątem duplikatów." },
      { q: "Dwóch użytkowników aktualizuje ten sam rekord jednocześnie i jedna zmiana po cichu znika. Jaki to rodzaj defektu?", options: ["Dryf kontraktu","Utracona aktualizacja, czyli defekt współbieżności","Defekt wartości brzegowej","Defekt nagłówków pamięci podręcznej"], correct: 1, explain: "Testy współbieżności szukają utraconych aktualizacji i wyścigów; blokowanie optymistyczne powinno wykryć konflikt (np. 409) zamiast nadpisywać dane." },
      { q: "Po co w Postmanie zmienne takie jak {{baseUrl}} i {{token}}?", options: ["Przyspieszają żądania","Pozwalają uniknąć wartości zakodowanych na sztywno dla środowiska, więc kolekcje działają w różnych środowiskach","Postman wymaga, by każda wartość była zmienną","Szyfrują żądanie"], correct: 1, explain: "Zmienne środowiskowe pozwalają uruchomić tę samą kolekcję na dev, staging czy w CI bez edytowania każdego żądania." },
      { q: "Dlaczego nie każdy test API powinien bezpośrednio odpytywać bazę danych?", options: ["Baz danych nie da się testować","To nadmiernie wiąże zestaw testów, czyniąc go wolniejszym i bardziej kruchym","API nigdy nie zmienia stanu bazy","REST tego zabrania"], correct: 1, explain: "Walidacja bazy jest cenna tam, gdzie ma sens, ale uzależnienie od niej każdego testu spowalnia zestaw i czyni go kruchym." },
      { q: "Które pytanie odzwierciedla 'zaawansowany' sposób myślenia w QA API?", options: ["Czy zwraca 200?","Czy endpoint istnieje?","Co się stanie, gdy dwóch użytkowników wywoła go jednocześnie, token wygaśnie lub zasób należy do innego najemcy?","Czy URL jest poprawnie zapisany?"], correct: 2, explain: "Zaawansowane testowanie oparte na ryzyku pyta, co się dzieje przy współbieżności, wygasłym uwierzytelnieniu, zniekształconych danych, dostępie między najemcami, awariach zależności i powtarzanych żądaniach." } // __REST_V2__
    ],
    "istqb-ctfl": [
      { q: "Która z siedmiu zasad testowania stwierdza, że wielokrotne uruchamianie tych samych testów w końcu przestaje wykrywać nowe błędy?", options: ["Grupowanie defektów", "Testy się zużywają", "Paradoks pestycydu jest mitem", "Wyczerpujące testowanie jest niemożliwe"], correct: 1, explain: "„Testy się zużywają” — wielokrotne ponowne wykorzystywanie tych samych testów sprawia, że stają się stopniowo mniej skuteczne w wykrywaniu nowych defektów." },
      { q: "Ludzka pomyłka, która prowadzi do wady w produkcie pracy, nazywana jest defektem. Jak nazywa się sama pomyłka?", options: ["Usterka (Fault)", "Awaria", "Błąd", "Przyczyna źródłowa"], correct: 2, explain: "Błąd (ludzka pomyłka) wprowadza defekt (wadę); gdy zostanie wykonany, defekt może spowodować awarię (obserwowalne nieprawidłowe zachowanie). Podstawowy powód to przyczyna źródłowa." },
      { q: "Który rodzaj przeglądu jest najbardziej formalny, wykorzystujący zdefiniowane role, kryteria wejścia/wyjścia i listy kontrolne?", options: ["Przegląd nieformalny", "Walkthrough", "Przegląd techniczny", "Inspekcja"], correct: 3, explain: "Inspekcja jest najbardziej formalna z czterech rodzajów przeglądów, po niej w malejącej formalności następują przegląd techniczny, walkthrough i przegląd nieformalny." },
      { q: "Która technika białoskrzynkowa sprawdza, czy każda wykonywalna instrukcja została uruchomiona co najmniej raz?", options: ["Testowanie gałęzi", "Testowanie instrukcji", "Testowanie tablicą decyzyjną", "Testowanie przejść między stanami"], correct: 1, explain: "Testowanie/pokrycie instrukcji sprawdza, czy każda wykonywalna instrukcja w kodzie została wykonana co najmniej raz podczas testowania." },
      { q: "W testowaniu opartym na ryzyku, poziom ryzyka jest zazwyczaj obliczany na podstawie których dwóch czynników?", options: ["Kosztu i czasu trwania", "Prawdopodobieństwa i wpływu", "Wagi i priorytetu", "Pokrycia i złożoności"], correct: 1, explain: "Ryzyko = prawdopodobieństwo x wpływ. Obszary wyższego ryzyka — bardziej prawdopodobne do awarii i bardziej szkodliwe, gdy do niej dojdzie — są priorytetyzowane." },
      { q: "Który model preferuje wiele szybkich, niskopoziomowych testów automatycznych i mniej wolnych, wysokopoziomowych testów UI?", options: ["Kwadranty testowe", "Model V", "Piramida testów", "Cykl życia defektu"], correct: 2, explain: "Piramida testów zaleca szeroką podstawę szybkich, niskopoziomowych testów automatycznych (jednostkowych) i stopniowo mniej wolniejszych, wyższopoziomowych testów (integracyjnych, UI/end-to-end)." },
      { q: "Który z poniższych jest powszechnie wymienianym ryzykiem (nie korzyścią) automatyzacji testów?", options: ["Powtarzalność", "Obiektywne wyniki", "Koszt utrzymania / fałszywe poczucie bezpieczeństwa", "Szybkość"], correct: 2, explain: "Powtarzalność, obiektywne wyniki i szybkość to korzyści automatyzacji; koszt utrzymania i fałszywe poczucie bezpieczeństwa to powszechnie wymieniane ryzyka." },
      { q: "Która kategoria technik testowych opiera się na intuicji testera i historycznych danych o defektach, a nie na formalnej, udokumentowanej procedurze?", options: ["Czarnoskrzynkowa", "Białoskrzynkowa", "Oparta na doświadczeniu", "Oparta na strukturze"], correct: 2, explain: "Techniki oparte na doświadczeniu — zgadywanie błędów, testowanie eksploracyjne, testowanie oparte na listach kontrolnych — czerpią z intuicji i historii testera, a nie z formalnego wyprowadzenia z podstawy testowej." },
      { q: "Co odróżnia poziom testów od rodzaju testów, według sylabusa?", options: ["To dwie nazwy tej samej rzeczy", "Poziom testów opisuje, gdzie odbywa się testowanie (np. jednostkowy, systemowy); rodzaj testów opisuje, co jest testowane (np. funkcjonalne, niefunkcjonalne)", "Rodzaj testów dotyczy tylko projektów Agile", "Poziom testów dotyczy tylko testowania manualnego"], correct: 1, explain: "Poziomy testów (komponentowy, integracyjny, systemowy, akceptacyjny) i rodzaje testów (funkcjonalne, niefunkcjonalne, strukturalne, związane ze zmianą) to niezależne wymiary — dany rodzaj testu można zastosować na dowolnym poziomie." },
      { q: "Jaki jest cel kryteriów wyjścia w planowaniu testów?", options: ["Aby zdecydować, kto uczestniczy w spotkaniu inicjującym", "Aby zdefiniować warunki, które muszą zostać spełnione, żeby uznać czynność testową za zakończoną", "Aby przypisać wagę defektom", "Aby wybrać, którą metodę HTTP testować"], correct: 1, explain: "Kryteria wyjścia definiują, kiedy czynność testowa jest zakończona; kryteria wejścia definiują warunki potrzebne, zanim będzie mogła się rozpocząć." },
      { q: "Według lekcji o wskazówkach do nauki, jakie jest najbardziej efektywne wykorzystanie ograniczonego czasu przygotowań do egzaminu?", options: ["Poświęć równy czas każdemu poziomowi K", "Skup się na materiale K2/K3, ponieważ tam znajduje się większość pytań egzaminacyjnych", "Ucz się wyłącznie terminów K1 (zapamiętaj)", "Zapamiętaj dokładne tabele logistyki egzaminu z podręcznika"], correct: 1, explain: "Terminy K1 wymagają tylko rozpoznania, ale materiał K2/K3 wymaga zrozumienia i zastosowania — i tam skupia się większość pytań egzaminacyjnych." },
      { q: "Jaki rodzaj pułapki zwykle tworzy pytanie z dystraktorem typu „najlepsza odpowiedź”?", options: ["Podaje jedną oczywiście błędną odpowiedź i trzy identyczne poprawne", "Podaje cztery technicznie prawdziwe stwierdzenia, ale tylko jedno najlepiej pasuje do opisanego scenariusza", "Nigdy nie ma poprawnej odpowiedzi", "Pojawia się wyłącznie w quizie Modułu 7, nigdy na prawdziwym egzaminie"], correct: 1, explain: "Częsta pułapka w stylu ISTQB przedstawia kilka technicznie prawdziwych stwierdzeń, ale tylko jedno jest najlepszą odpowiedzią dla podanego scenariusza — uważne przeczytanie scenariusza liczy się bardziej niż samo znajomość faktów." }
    ],
    "qa-toolbox": [
      { q: "Które narzędzie jest opisane jako działające wewnątrz przeglądarki, z silnym, zorientowanym na deweloperów doświadczeniem debugowania dla testowania webowego JS/TS?", options: ["Selenium WebDriver", "Cypress", "Appium", "REST Assured"], correct: 1, explain: "Cypress działa wewnątrz samej przeglądarki, co daje mu wyróżniające się, wysoce interaktywne doświadczenie debugowania w porównaniu z narzędziami opartymi na WebDriver." },
      { q: "Które narzędzie rozszerza protokół WebDriver, aby automatyzować natywne i hybrydowe aplikacje mobilne?", options: ["Playwright", "Robot Framework", "Appium", "k6"], correct: 2, explain: "Appium rozszerza protokół WebDriver, dzięki czemu to samo podejście automatyzacji używane dla webu może sterować natywnymi i hybrydowymi aplikacjami mobilnymi na iOS i Androidzie." },
      { q: "Które narzędzie do testowania wydajności skryptuje testy obciążeniowe w JavaScript i jest przede wszystkim narzędziem CLI, zbudowanym pod łatwą integrację z CI/CD?", options: ["JMeter", "k6", "Gatling", "SoapUI"], correct: 1, explain: "Skrypty k6 są pisane w JavaScript, a narzędzie jest zaprojektowane przede wszystkim pod wiersz poleceń, co czyni je naturalnym wyborem dla pipeline'ów CI/CD." },
      { q: "Metryka śledząca defekty znalezione w produkcji w stosunku do defektów wykrytych przed wydaniem nazywana jest...", options: ["Gęstością defektów", "Pokryciem testami", "Wskaźnikiem ucieczki defektów", "Wskaźnikiem niestabilności"], correct: 2, explain: "Wskaźnik ucieczki defektów (Escape Rate) jest najostrzejszym sygnałem tego, czy strategia testowa faktycznie wychwytuje problemy, zanim zrobią to użytkownicy." },
      { q: "Dlaczego rosnący wskaźnik niestabilności w zestawie testów automatycznych jest poważnym problemem, poza samymi awariami?", options: ["Nie ma żadnego rzeczywistego wpływu na zespół", "Niszczy zaufanie do zestawu testów, więc prawdziwe awarie zaczynają być ignorowane", "Zawsze oznacza lukę bezpieczeństwa w aplikacji", "Dotyczy tylko testerów manualnych"], correct: 1, explain: "Gdy zestaw testów uznany jest za niestabilny, awarie są domyślnie odrzucane — w tym te prawdziwe — co po cichu niszczy wartość posiadania automatyzacji w ogóle." },
      { q: "Która para stanowi dwie z czterech metryk DORA wymienionych w tym module?", options: ["Gęstość defektów i wskaźnik ucieczki defektów", "Czas realizacji zmian i częstotliwość wdrożeń", "MTTD i pokrycie testami", "Wskaźnik sukcesu i wskaźnik niestabilności"], correct: 1, explain: "Czas realizacji zmian (Lead Time for Changes) i częstotliwość wdrożeń to dwie z czterech metryk DORA; czas cyklu QA jest często głównym czynnikiem wpływającym na lead time." },
      { q: "Na rozmowie kwalifikacyjnej, jaki jest najmocniejszy sposób odpowiedzi na pytanie „opisz błąd, który znalazłeś, a który inni pominęli”?", options: ["Udziel niejasnej, ogólnej odpowiedzi, aby nie brzmieć zbyt przechwałkowo", "Opisz konkretny, prawdziwy przykład: co cię do niego doprowadziło, kroki reprodukcji, wpływ i rozwiązanie", "Powiedz, że nie pamiętasz żadnych konkretnych błędów", "Wymień jak najwięcej rodzajów błędów bez szczegółów"], correct: 1, explain: "Osoby przeprowadzające rozmowę sprawdzają konkretność i prawdziwy proces dochodzeniowy, a nie dramatyczną historię — konkretny przykład z krokami reprodukcji i wpływem wyróżnia się." },
      { q: "Jaka jest kluczowa różnica między weryfikacją a walidacją?", options: ["Oznaczają dokładnie to samo", "Weryfikacja pyta, czy produkt spełnia specyfikację; walidacja pyta, czy spełnia rzeczywistą potrzebę użytkownika", "Weryfikacja jest manualna, walidacja jest zawsze automatyczna", "Walidacja dotyczy tylko testowania wydajności"], correct: 1, explain: "Weryfikacja sprawdza „czy budujemy produkt poprawnie?” względem specyfikacji; walidacja sprawdza „czy budujemy właściwy produkt?” względem rzeczywistej potrzeby użytkownika." },
      { q: "Który język jest opisany jako naturalny wybór do automatyzacji aplikacji webowej, gdy jej własny frontend jest w nim napisany, pozwalając testerom dzielić narzędzia z deweloperami?", options: ["Java", "SQL", "JavaScript / TypeScript", "Bash"], correct: 2, explain: "JavaScript/TypeScript jest naturalnym wyborem do testowania aplikacji webowych JS/TS — testerzy mogą czytać kod samej aplikacji i ponownie wykorzystywać te same narzędzia co zespół deweloperski." },
      { q: "Jakie jest główne ryzyko pisania automatyzacji testów w języku, którego nikt inny w zespole nie zna?", options: ["Działa wolniej niż w innych językach", "Staje się osieroconym, nieutrzymywanym zestawem testów w ciągu roku", "Nie może zostać zintegrowana z CI/CD", "Jest nielegalna w większości licencji open source"], correct: 1, explain: "Automatyzacja jest wartościowa tylko na tyle, na ile zespół potrafi ją utrzymać — kod, którego nikt nie potrafi przeczytać ani zaktualizować, zwykle się psuje i zostaje porzucony." },
      { q: "Jaki problem rozwiązuje samonaprawiająca się automatyzacja testów?", options: ["Pisze całe zestawy testów bez udziału człowieka", "Automatycznie dostosowuje lokatory UI, gdy zmienia się znacznik strony, zamiast psuć test", "Naprawia błędy w testowanej aplikacji", "Zastępuje potrzebę posiadania zespołu QA"], correct: 1, explain: "Samonaprawiająca się automatyzacja (np. Testim, Healenium) dostosowuje lokatory elementów, gdy zmienia się DOM, dzięki czemu drobne zmiany znaczników nie psują każdego testu dotykającego danego elementu." },
      { q: "Dlaczego asercje dokładnego dopasowania zwykle przestają działać podczas testowania funkcji opartej na LLM?", options: ["LLM-y nigdy nie produkują wyniku tekstowego", "Wynik LLM jest niedeterministyczny, więc to samo wejście może dać różne poprawne wyniki", "Asercje dokładnego dopasowania są zawsze zbyt wolne", "LLM-ów w ogóle nie można testować"], correct: 1, explain: "Ponieważ wynik LLM różni się między uruchomieniami nawet dla tego samego wejścia, testowanie przechodzi od asercji dokładnego dopasowania do oceny opartej na rubryce, czy wynik jest wystarczająco dobry, a nie identyczny z ustalonym ciągiem znaków." },
      { q: "Co powinien zrobić tester, zanim uzna test wygenerowany przez AI za gotowy?", options: ["Nic — jeśli się uruchamia i przechodzi, jest gotowy", "Potwierdzić, że człowiek zweryfikował, iż test faktycznie sprawdza właściwą rzecz, a nie tylko że się wykonuje", "Usunąć go i zawsze napisać go ręcznie", "Sprawdzić tylko, czy używa najnowszego modelu AI"], correct: 1, explain: "Testy wygenerowane przez AI są przydatnym pierwszym szkicem, ale tylko człowiek może ocenić, czy test faktycznie sprawdza zachowanie istotne dla biznesu." },
      { q: "Jaki odsetek problemów z dostępnością zazwyczaj wychwytują same automatyczne skanery (jak axe czy Lighthouse)?", options: ["100% — automatyczne skanowanie wystarcza samo w sobie", "Z grubsza 30–40% — nadal potrzebne jest testowanie manualne (nawigacja wyłącznie klawiaturą, czytniki ekranu)", "0% — narzędzia automatyczne w ogóle nie mogą sprawdzać dostępności", "Dokładnie 50%, według standardu WCAG"], correct: 1, explain: "Automatyczne skanery są doskonałe w obiektywnych sprawdzeniach, takich jak współczynniki kontrastu, ale wychwytują tylko około 30–40% problemów — manualne testowanie klawiaturą i czytnikiem ekranu jest nadal potrzebne dla pełnego pokrycia." },
      { q: "Co oznaczają litery POUR w standardzie WCAG?", options: ["Priority, Objective, Usability, Reliability", "Perceivable, Operable, Understandable, Robust (Postrzegalna, Funkcjonalna, Zrozumiała, Solidna)", "Performance, Operations, Usage, Reporting", "Public, Open, Universal, Reviewed"], correct: 1, explain: "WCAG organizuje wymagania dostępności wokół czterech zasad: treść musi być Postrzegalna, Funkcjonalna, Zrozumiała i Solidna (Perceivable, Operable, Understandable, Robust)." }
    ],
    "test-architecture": [
      { q: "Jaka jest kluczowa różnica między Page Object Model a wzorcem Screenplay?", options: ["To dokładnie to samo pod różnymi nazwami", "POM hermetyzuje lokatory/akcje każdej strony w klasie; Screenplay modeluje testy jako Aktora ze Zdolnościami, Zadaniami i Pytaniami przy użyciu kompozycji", "Screenplay działa tylko dla testowania API, nie UI", "POM jest nowszy i zawsze preferowany nad Screenplay"], correct: 1, explain: "POM organizuje automatyzację wokół klas stron; Screenplay wykorzystuje model skupiony na aktorze, oparty na kompozycji (Zdolności, Zadania, Pytania), który zwykle lepiej skaluje się dla dużych, złożonych zestawów." },
      { q: "W warstwowej ('hybrydowej') architekturze automatyzacji testów, jaki jest cel oddzielenia warstwy danych od warstwy logiki?", options: ["Nie ma to żadnej realnej korzyści, tylko dodatkowe pliki", "Aby zmiana lokatora lub danych testowych nie odbijała się na samych czytelnych przypadkach testowych", "Aby testy działały szybciej na tym samym sprzęcie", "Aby tylko deweloperzy mogli pisać testy"], correct: 1, explain: "Oddzielenie przypadków testowych, kodu akcji/logiki i danych sprawia, że zmiana lokatora lub danych nie psuje czytelnej warstwy testów, co utrzymuje duże zestawy w stanie łatwym do utrzymania." },
      { q: "Jaki problem rozwiązują efemeryczne środowiska testowe tworzone na żądanie?", options: ["Sprawiają, że testy działają bez żadnego kodu", "Unikają klasycznego problemu, w którym jedno współdzielone środowisko QA jest blokowane przez niedokończoną zmianę innego zespołu", "Całkowicie eliminują potrzebę danych testowych", "Zastępują potrzebę posiadania środowiska staging"], correct: 1, explain: "Uruchamianie świeżego środowiska dla każdego pull requesta lub przebiegu testów (przez kontenery/orkiestrację) unika rywalizacji i niestabilności powodowanych przez jedno współdzielone, mutowalne środowisko QA." },
      { q: "Co zapewnia wirtualizacja usług w środowisku testowym?", options: ["Prawdziwą, w pełni wdrożoną kopię każdej zależności", "Symulowany zamiennik prawdziwej zależności, który zwraca realistyczne, gotowe lub oparte na regułach odpowiedzi", "Sposób na całkowite pominięcie testowania integracji zewnętrznych", "Maszynę wirtualną do uruchomienia całego zestawu testów"], correct: 1, explain: "Narzędzia takie jak WireMock i Mountebank symulują odpowiedzi zależności, czyniąc testy szybszymi i bardziej niezawodnymi, gdy prawdziwa zależność jest kosztowna, ryzykowna lub jeszcze niezbudowana." },
      { q: "Dlaczego testy są układane w pipeline CI/CD od szybkich/tanich do wolnych/kosztownych (jednostkowe przed integracyjnymi przed E2E)?", options: ["To arbitralne i nie ma znaczenia", "Aby zepsuty build zawodził szybko, zanim spali czas na wolniejszych etapach", "Ponieważ wolne testy są zawsze bardziej niezawodne", "Ponieważ narzędzia CI/CD wymagają dokładnie takiej kolejności"], correct: 1, explain: "Umieszczenie tanich, szybkich kontroli na początku oznacza, że zepsuty build jest wykrywany w ciągu sekund lub minut, a nie po tym, jak wykonał się już znacznie dłuższy, kosztowniejszy etap." },
      { q: "Czym jest 'bramka jakości' (quality gate) w pipeline CI/CD?", options: ["Fizyczny punkt kontroli bezpieczeństwa w serwerowni", "Automatyczna kontrola, która blokuje scalenie lub wdrożenie, gdy warunek (np. wskaźnik zdawalności, pokrycie, ustalenia bezpieczeństwa) nie jest spełniony", "Synonim środowiska staging", "Ręczny krok zatwierdzenia wykonywany wyłącznie przez lidera QA"], correct: 1, explain: "Bramka jakości to zautomatyzowany warunek zdania/niezdania — jak minimalny wskaźnik zdawalności lub zero krytycznych podatności — który blokuje postęp w pipeline, gdy nie jest spełniony." },
      { q: "Czym jest testowanie 'shift-right', w odróżnieniu od shift-left?", options: ["Testowanie wyłącznie tuż przed terminem", "Świadome rozszerzenie testowania na produkcję poprzez wydania kanarkowe, flagi funkcji i monitoring syntetyczny", "Przeniesienie wszystkich testerów do innej strefy czasowej", "Technika wyrównywania raportów testowych do prawej"], correct: 1, explain: "Shift-right uzupełnia shift-left, rozszerzając testowanie na samą produkcję — wydania kanarkowe, flagi funkcji i monitoring syntetyczny walidują zachowanie na prawdziwym ruchu, bezpiecznie i stopniowo." },
      { q: "Dlaczego tradycyjne pełnostosowe testowanie end-to-end przestaje dobrze się skalować dla architektur mikroserwisowych?", options: ["Mikroserwisów w ogóle nie można testować", "Liczba kombinacji wersji usług rośnie kombinatorycznie, przez co pełnośrodowiskowe przebiegi E2E stają się wolne, niestabilne i kosztowne", "Testy E2E są nielegalne dla mikroserwisów", "Mikroserwisy nie mają API do testowania"], correct: 1, explain: "Wraz ze wzrostem liczby niezależnie wdrażanych usług testowanie każdej kombinacji end-to-end staje się kombinatorycznie kosztowne — dlatego istnieje testowanie kontraktowe jako alternatywa." },
      { q: "Jak testowanie kontraktowe sterowane przez konsumenta (np. Pact) pozwala uniknąć potrzeby pełnego środowiska integracyjnego?", options: ["Nie pozwala — nadal wymaga wdrożenia wszystkich usług razem", "Konsument definiuje oczekiwane interakcje, a dostawca weryfikuje niezależnie, czy spełnia ten kontrakt, bez potrzeby uruchamiania konsumenta", "Zastępuje wszystkie inne formy testowania", "Działa wyłącznie dla synchronicznych API REST, nigdy dla zdarzeń"], correct: 1, explain: "Każda strona kontraktu jest weryfikowana niezależnie względem uzgodnionych oczekiwań, co wychwytuje przełamujące zmiany bez uruchamiania całego łańcucha usług razem." },
      { q: "Co robi chaos engineering?", options: ["Losowo usuwa dane produkcyjne, aby przetestować kopie zapasowe", "Celowo wstrzykuje kontrolowane awarie (zabite instancje, opóźnienia sieciowe, wyczerpanie zasobów), aby zweryfikować, że system degraduje się łagodnie zamiast przechodzić w awarię kaskadową", "Generuje losowe dane testowe dla testów jednostkowych", "Celowo wprowadza błędy do kodu, aby szkolić nowych deweloperów"], correct: 1, explain: "Chaos engineering (spopularyzowane przez narzędzia takie jak Chaos Monkey i Gremlin) celowo wstrzykuje awarie w kontrolowanych warunkach, aby zweryfikować odporność, zamiast czekać na niekontrolowaną prawdziwą awarię, by znaleźć te same luki." },
      { q: "Co opisuje antywzorzec 'lody na rożku' (ice-cream cone)?", options: ["Idealnie zrównoważony zestaw testów", "Zestaw obciążony u góry wolnymi, kruchymi testami UI/E2E i mający zbyt mało szybkich testów jednostkowych — odwrotność zdrowej Piramidy testów", "Narzędzie do wizualizacji pokrycia testami", "Wzorzec organizowania terminów w słowniku"], correct: 1, explain: "Lody na rożku to odwrotność Piramidy testów (Module 7): dużo wolnych, niestabilnych testów UI wysokiego poziomu i mało szybkich, tanich testów jednostkowych, co czyni cały zestaw wolnym i trudnym w utrzymaniu." },
      { q: "Jaki jest cel narzędzia do raportowania testów, takiego jak Allure czy ReportPortal?", options: ["Automatyczne pisanie przypadków testowych", "Zamiana surowego wyniku test runnera w czytelne, historyczne dashboardy pokazujące trendy w czasie", "Zastąpienie potrzeby posiadania pipeline'u CI/CD", "Generowanie definicji słownikowych"], correct: 1, explain: "Narzędzia takie jak Allure i ReportPortal zamieniają surowy wynik zdawalności/niezdawalności w historyczne dashboardy z widocznym trendem — pokazując, czy wskaźnik zdawalności poprawia się czy pogarsza w wielu buildach, a nie tylko w ostatnim przebiegu." },
      { q: "Dlaczego wykrywanie niestabilnych testów ma znaczenie dla infrastruktury raportowania testów?", options: ["Nie ma żadnej realnej wartości", "Testy, które zawodzą sporadycznie bez zmiany kodu, podważają zaufanie do zestawu, jeśli nie zostaną oznaczone i rozwiązane", "Sprawia, że testy automatycznie działają szybciej", "Ma znaczenie tylko dla testowania manualnego, nie automatyzacji"], correct: 1, explain: "Sporadycznie zawodzący test, który nie jest oznaczony jako niestabilny, po cichu podważa zaufanie do całego zestawu, ponieważ ludzie przestają wierzyć, że awarie coś realnie oznaczają." }
    ],
    "security-testing": [
      { q: "Czym podstawowe pytanie testowania bezpieczeństwa różni się od typowego testowania funkcjonalnego?", options: ["Zadają dokładnie to samo pytanie", "Testowanie funkcjonalne pyta, czy ścieżka główna działa; testowanie bezpieczeństwa pyta, co się dzieje, gdy ktoś celowo próbuje złamać zasady", "Testowanie bezpieczeństwa dotyczy tylko aplikacji mobilnych", "Testowanie funkcjonalne jest zawsze ważniejsze niż testowanie bezpieczeństwa"], correct: 1, explain: "Testowanie funkcjonalne weryfikuje zamierzone zachowanie; testowanie bezpieczeństwa celowo pyta, co się dzieje, gdy użytkownik lub atakujący próbuje sprawić, by system zrobił coś, czego nigdy nie miał robić." },
      { q: "Co oznacza zasada „minimalnych uprawnień” (least privilege)?", options: ["Każdy użytkownik powinien mieć domyślnie pełny dostęp administratora", "Każdy użytkownik, usługa lub proces powinny mieć tylko minimalny dostęp potrzebny do wykonania swojego zadania", "Uprawnienia nigdy nie powinny być przeglądane po przyznaniu", "Tylko zespół bezpieczeństwa potrzebuje jakichkolwiek kontroli dostępu"], correct: 1, explain: "Minimalne uprawnienia oznaczają przyznawanie tylko niezbędnego minimalnego dostępu — niemal każde poważne naruszenie bezpieczeństwa wiąże się z czymś, co miało więcej dostępu, niż faktycznie potrzebowało." },
      { q: "Które ryzyko z OWASP Top 10 opisuje: użytkownicy mogą działać poza zamierzonymi uprawnieniami, np. przeglądając dane innego użytkownika przez zmianę ID w URL?", options: ["Cryptographic Failures", "Broken Access Control", "Security Misconfiguration", "Server-Side Request Forgery"], correct: 1, explain: "Broken Access Control obejmuje błędy w prawidłowym ograniczaniu tego, do czego uwierzytelniony użytkownik może uzyskać dostęp lub co może zrobić — klasyczny przykład to zmiana ID w URL, by zobaczyć dane kogoś innego." },
      { q: "Jaki jest klasyczny test SQL Injection w polu logowania?", options: ["Wpisanie bardzo długiego losowego ciągu znaków", "Wpisanie ładunku takiego jak ' OR '1'='1, by sprawdzić, czy zmienia logikę zapytania i omija uwierzytelnianie", "Dwukrotne szybkie wysłanie formularza", "Pozostawienie pola całkowicie pustego"], correct: 1, explain: "Ładunek taki jak ' OR '1'='1 sprawdza, czy niezaufane dane wejściowe są niebezpiecznie łączone z zapytaniem SQL, potencjalnie zmieniając jego logikę, by całkowicie ominąć kontrolę logowania." },
      { q: "Co odróżnia Stored XSS od Reflected XSS?", options: ["Nie ma między nimi żadnej realnej różnicy", "Stored XSS zapisuje złośliwy skrypt na stałe (np. w komentarzu) i serwuje go później innym użytkownikom; Reflected XSS odbija go natychmiast w odpowiedzi", "Reflected XSS występuje tylko w aplikacjach mobilnych", "Stored XSS nie da się testować"], correct: 1, explain: "Stored XSS zapisuje złośliwy skrypt w miejscu, gdzie zostanie później wyrenderowany innym użytkownikom (np. w polu komentarza); Reflected XSS natychmiast odbija ładunek w tej samej odpowiedzi, często poprzez spreparowany URL." },
      { q: "Co wykorzystuje CSRF (Cross-Site Request Forgery)?", options: ["Słabość w indeksowaniu bazy danych", "Nakłonienie przeglądarki zalogowanego użytkownika do wysłania niechcianego żądania do strony, na której jest uwierzytelniony", "Wadę w samym szyfrowaniu HTTPS", "Wolne czasy odpowiedzi serwera"], correct: 1, explain: "CSRF nakłania przeglądarkę ofiary — już uwierzytelnioną na docelowej stronie — do wysłania żądania, którego ofiara nigdy nie zamierzała wysłać, np. niewidocznego, automatycznie wysyłanego formularza." },
      { q: "Jaka jest kluczowa różnica między SAST a DAST?", options: ["To identyczne podejścia o różnych nazwach", "SAST skanuje kod źródłowy bez jego uruchamiania; DAST atakuje działającą aplikację z zewnątrz jak prawdziwy atakujący", "DAST działa tylko na bazach danych", "SAST można uruchomić tylko raz w roku"], correct: 1, explain: "SAST analizuje kod źródłowy statycznie (bez potrzeby wykonania, może działać przy każdym commicie); DAST testuje działającą, wdrożoną aplikację dynamicznie z zewnątrz, wychwytując inne klasy problemów." },
      { q: "Czego szuka SCA (Software Composition Analysis)?", options: ["Literówek w komentarzach kodu", "Znanych podatności (CVE) w bibliotekach i zależnościach firm trzecich", "Błędów stylizacji CSS", "Wydajności zapytań do bazy danych"], correct: 1, explain: "Narzędzia SCA takie jak Snyk i OWASP Dependency-Check skanują zależności firm trzecich pod kątem znanych, opublikowanych podatności — bezpośrednio odnosząc się do ryzyka OWASP „Podatne i przestarzałe komponenty”." },
      { q: "Co musi zawsze być na miejscu przed rozpoczęciem testów penetracyjnych?", options: ["Nic — każdy może testować penetracyjnie dowolny system w dowolnym momencie", "Podpisana umowa definiująca zakres oraz jawna pisemna autoryzacja", "W pełni zautomatyzowane narzędzie skanujące", "Publiczne ogłoszenie testu"], correct: 1, explain: "Bez podpisanej umowy i jawnej autoryzacji definiującej zakres, dokładnie te same działania użyte w teście penetracyjnym są po prostu nielegalnym, nieautoryzowanym hakowaniem." },
      { q: "W frameworku modelowania zagrożeń STRIDE, co oznacza litera „R”?", options: ["Reliability (Niezawodność)", "Repudiation (Zaprzeczenie) — wypieranie się wykonania działania, bez możliwości udowodnienia inaczej", "Redundancy (Nadmiarowość)", "Recovery (Odzyskiwanie)"], correct: 1, explain: "Repudiation w STRIDE odnosi się do zagrożenia, w którym aktor może zaprzeczyć wykonaniu działania, a system nie ma sposobu, by udowodnić inaczej (np. brakujące logi audytowe)." },
      { q: "Co oznacza „Zero Trust” jako zasada architektoniczna/testowa?", options: ["Żaden system nigdy nie powinien być testowany", "Nigdy nie zakładaj, że żądanie jest bezpieczne tylko dlatego, że pochodzi z wewnątrz obwodu sieci — każde żądanie jest uwierzytelniane i autoryzowane na podstawie własnych zasług", "Ufaj domyślnie każdej usłudze wewnętrznej", "Tylko API skierowane na zewnątrz potrzebują uwierzytelniania"], correct: 1, explain: "Zero Trust oznacza, że każde żądanie — nawet z wewnątrz sieci — musi udowodnić, kim jest i do czego jest upoważnione, zamiast być automatycznie zaufanym ze względu na swoje źródło." },
      { q: "Dlaczego weryfikacja, że żądanie „usuń moje konto” faktycznie usuwa dane (w tym kopie zapasowe/repliki), jest zagadnieniem testowym istotnym dla zgodności?", options: ["To wyłącznie zagadnienie testowania wydajności", "Dotyczy praw do usuwania danych w ramach regulacji takich jak RODO", "Ma znaczenie tylko dla wewnętrznych środowisk testowych", "Nie ma żadnego związku ze zgodnością"], correct: 1, explain: "Regulacje pokrewne RODO często wymagają, aby żądanie usunięcia danych użytkownika faktycznie usuwało jego dane w całym systemie, w tym kopie zapasowe zgodnie z ich harmonogramem retencji — testowanie tego od początku do końca to prawdziwe zagadnienie zgodności, a nie tylko drobna uwaga o higienie danych." }
    ],
    "performance-ux-automation": [
      { q: "Jaka jest kluczowa różnica między Load Testing a Stress Testing?", options: ["To identyczne techniki o różnych nazwach", "Load Testing sprawdza zachowanie przy oczekiwanym ruchu; Stress Testing stopniowo zwiększa obciążenie ponad oczekiwane poziomy, by znaleźć miejsce, w którym system się załamuje", "Stress Testing dotyczy tylko aplikacji mobilnych", "Load Testing jest zawsze uruchamiany na produkcji"], correct: 1, explain: "Load Testing sprawdza zachowanie przy oczekiwanym, realistycznym ruchu; Stress Testing celowo przekracza ten poziom, by znaleźć punkt załamania systemu i sposób, w jaki się degraduje." },
      { q: "Co konkretnie wykrywa Soak Testing, czego zwykle nie wychwytuje krótki test obciążeniowy?", options: ["Literówki w interfejsie", "Wycieki pamięci i powolne wyczerpywanie zasobów, które pojawiają się dopiero w długim, ciągłym okresie", "Niepoprawny kontrast kolorów", "Podatności typu SQL injection"], correct: 1, explain: "Soak Testing uruchamia umiarkowane obciążenie przez wiele godzin lub dni, ujawniając wycieki pamięci i stopniowe wyczerpywanie zasobów, których krótki test po prostu nie trwa wystarczająco długo, by je ujawnić." },
      { q: "Dlaczego średni czas odpowiedzi sam w sobie może wprowadzać w błąd jako metryka wydajności?", options: ["Średnie nigdy nie są przydatne w żadnym kontekście", "Niska średnia może wciąż ukrywać znaczący odsetek użytkowników doświadczających dużo wolniejszych odpowiedzi — dlatego raportuje się percentyle p95/p99", "Czasu odpowiedzi nie da się dokładnie zmierzyć", "Średnia ma znaczenie tylko dla testów warunków skrajnych, nie dla testów obciążeniowych"], correct: 1, explain: "System o średniej 200 ms może wciąż pozostawiać 5% użytkowników czekających kilka sekund — percentyle p95/p99 ujawniają to doświadczenie „ogona” rozkładu, które sama średnia ukrywa." },
      { q: "Czym jest „protokół głośnego myślenia” (think-aloud protocol) w testowaniu użyteczności?", options: ["Zasada zabraniająca testerom mówienia podczas sesji", "Poproszenie uczestnika o werbalizowanie swoich myśli podczas wykonywania zadania, co ujawnia dezorientację, której samo ciche obserwowanie by nie wychwyciło", "Scenariuszowa lista pytań odczytywana użytkownikowi dosłownie", "Zautomatyzowane narzędzie odczytujące tekst interfejsu na głos w ramach testowania dostępności"], correct: 1, explain: "Protokół głośnego myślenia polega na tym, że uczestnik werbalizuje swoje myśli w trakcie wykonywania zadania, ujawniając dezorientację lub wahanie, których samo obserwowanie jego działań by nie pokazało." },
      { q: "Czym testowanie A/B różni się od oceny heurystycznej jako metoda UX?", options: ["To to samo", "Testowanie A/B mierzy rzeczywiste zachowanie na dużą skalę, z podziałem prawdziwego ruchu produkcyjnego między warianty, zamiast opierać się na ocenie eksperckiej lub niewielkiej obserwowanej sesji", "Ocena heurystyczna wymaga więcej użytkowników niż testowanie A/B", "Testowanie A/B zastępuje potrzebę stosowania jakiejkolwiek innej metody UX"], correct: 1, explain: "Testowanie A/B porównuje rzeczywiste zachowanie użytkowników na dużą skalę między dwoma wariantami; ocena heurystyczna to ekspercki przegląd względem znanych zasad użyteczności — te dwie metody się uzupełniają, a nie zastępują." },
      { q: "Dlaczego zahardkodowane, stałe opóźnienie (np. wait(2000)) jest uważane za złą praktykę w automatyzacji testów?", options: ["Zawsze sprawia, że testy przechodzą niezależnie od stanu aplikacji", "Jest albo za krótkie (test nadal niestabilny), albo za długie (spowalnia zestaw testów) — nowoczesne narzędzia zamiast tego automatycznie czekają, aż element stanie się gotowy do interakcji", "Stałe opóźnienia są niedozwolone w większości frameworków automatyzacji", "Dotyczy to tylko testów wydajnościowych, nie funkcjonalnych"], correct: 1, explain: "Stałe opóźnienie to zgadywanie — za krótkie i test pozostaje niestabilny, za długie i niepotrzebnie spowalnia cały zestaw testów; automatyczne oczekiwanie (wbudowane w Playwright/Cypress) czeka dokładnie tyle, ile potrzeba." },
      { q: "Dlaczego lokalizator powiązany z atrybutem data-testid jest zwykle bardziej niezawodny niż ten powiązany z klasą stylującą CSS?", options: ["Atrybuty data-testid działają szybciej niż selektory CSS", "Klasa stylująca może się zmienić podczas redesignu i po cichu zepsuć test, podczas gdy dedykowany atrybut test-id pozostaje stabilny mimo zmian wizualnych", "Selektorów CSS nie można używać w żadnym frameworku automatyzacji", "Nie ma realnej różnicy między tymi dwoma podejściami"], correct: 1, explain: "Klasa CSS powiązana ze stylowaniem prawdopodobnie zmieni się, gdy projektant przestyluje stronę, co zepsuje test; dedykowany atrybut data-testid służy wyłącznie do testowania i pozostaje stabilny mimo redesignów wizualnych." },
      { q: "Dlaczego niezależność testów (brak zależności od wykonania lub kolejności innego testu) ma znaczenie w zautomatyzowanym zestawie testów?", options: ["Nie ma to znaczenia, dopóki wszystkie testy ostatecznie przechodzą", "Testy zależne od kolejności powodują częsty, trudny do zdiagnozowania wzorzec błędów „działa samodzielnie, zawodzi w zestawie”", "Niezależne testy zawsze działają wolniej niż zależne", "To problem dotyczący tylko testowania manualnego, nie automatyzacji"], correct: 1, explain: "Test, który po cichu zależy od pozostałości stanu innego testu, może przechodzić w izolacji, ale zawodzić, gdy jest uruchamiany jako część pełnego zestawu (lub w innej kolejności) — to notorycznie trudny do wyśledzenia błąd." },
      { q: "Jakiego rodzaju narzędzia zapewniają BrowserStack lub Sauce Labs?", options: ["Generowanie przypadków testowych oparte na AI", "Testowanie w chmurze na wielu przeglądarkach/urządzeniach — uruchamianie tego samego zestawu testów na prawdziwych kombinacjach przeglądarek/systemów/urządzeń bez utrzymywania fizycznego laboratorium urządzeń", "Statyczną analizę kodu pod kątem podatności bezpieczeństwa", "Śledzenie błędów i zarządzanie defektami"], correct: 1, explain: "BrowserStack, Sauce Labs i LambdaTest zapewniają dostęp w chmurze do prawdziwych kombinacji przeglądarek/systemów/urządzeń, unikając kosztu i utrzymania fizycznego laboratorium urządzeń." },
      { q: "Jaki kompromis zwykle wiąże się z narzędziami automatyzacji low-code / nagrywania i odtwarzania, takimi jak Katalon Studio?", options: ["Nie może z nich korzystać żaden zespół, nigdy", "Obniżają próg wejścia dla zespołów bez dedykowanych inżynierów automatyzacji, ale zwykle są mniej elastyczne niż frameworki oparte na kodzie przy złożonej logice", "Zawsze są droższe niż frameworki oparte na kodzie", "Działają wyłącznie w testowaniu API, nigdy w testowaniu UI"], correct: 1, explain: "Narzędzia low-code czynią automatyzację dostępną dla zespołów bez głębokich umiejętności programistycznych, ale ta dostępność zwykle wiąże się z kompromisem względem elastyczności, jaką framework oparty na kodzie oferuje przy złożonej logice testowej." },
      { q: "Co oznacza „testowanie ciągłe” (continuous testing) i jak łączy się z architekturą pipeline'u z Modułu 9?", options: ["Uruchamianie pełnego manualnego zestawu testów raz w roku", "Ciągłe uruchamianie testów automatycznych w całym pipeline, nie tylko przed wydaniem, dzięki czemu informacja zwrotna o zmianie przychodzi w ciągu minut", "Synonim testowania eksploracyjnego", "Testowanie, które nigdy nie ma zdefiniowanych kryteriów zaliczenia/niezaliczenia"], correct: 1, explain: "Testowanie ciągłe wbudowuje testy automatyczne w cały pipeline CI/CD, dzięki czemu każda zmiana otrzymuje szybką informację zwrotną — narzędzia z tego modułu dostarczają wartość tylko wtedy, gdy są faktycznie podłączone do pipeline'u, który uruchamia je w sposób ciągły." }
    ]
  },
  glossary: [
{term:"Testowanie akceptacyjne",cat:"Functional",def:"Formalne testowanie przeprowadzane w celu określenia, czy system spełnia swoje kryteria akceptacji, oraz umożliwienia klientowi decyzji, czy zaakceptować system. Zwykle wykonywane przez klienta."},
{term:"Testowanie dostępności",cat:"Specialized",def:"Rodzaj testowania, który określa użyteczność produktu dla osób z niepełnosprawnościami (głuchych, niewidomych, z niepełnosprawnością intelektualną itd.). Proces oceny prowadzą osoby z niepełnosprawnościami."},
{term:"Testowanie aktywne",cat:"General",def:"Rodzaj testowania polegający na wprowadzaniu danych testowych i analizie wyników wykonania. Zwykle prowadzony przez zespół testowy."},
{term:"Testowanie zwinne (Agile Testing)",cat:"General",def:"Praktyka testowania oprogramowania zgodna z zasadami manifestu Agile, kładąca nacisk na testowanie z perspektywy klientów, którzy będą korzystać z systemu. Zwykle wykonywane przez zespoły QA."},
{term:"Testowanie starzeniowe (Age Testing)",cat:"Specialized",def:"Rodzaj testowania oceniający zdolność systemu do działania w przyszłości. Proces oceny prowadzą zespoły testowe."},
{term:"Testowanie ad hoc",cat:"Functional",def:"Testowanie prowadzone bez planowania i dokumentacji — tester próbuje „złamać” system, losowo wypróbowując jego funkcjonalność. Wykonywane przez zespół testowy.",aliases:["Ad-hoc Testing"]},
{term:"Testowanie alfa",cat:"Functional",def:"Rodzaj testowania oprogramowania przeprowadzany w siedzibie dewelopera w celu identyfikacji błędów, problemów użyteczności i luk funkcjonalnych przed wydaniem produktu do testów beta. Angażuje wewnętrznych testerów, takich jak deweloperzy i zespoły QA, a czasem wybranych użytkowników końcowych w kontrolowanym środowisku."},
{term:"Testowanie asercji (Assertion Testing)",cat:"General",def:"Rodzaj testowania polegający na weryfikacji, czy warunki potwierdzają wymagania produktu. Wykonywane przez zespół testowy."},
{term:"Testowanie API",cat:"Functional",def:"Technika testowa podobna do testowania jednostkowego, ponieważ dotyczy poziomu kodu. Testowanie API różni się od testowania jednostkowego tym, że zwykle jest zadaniem QA, a nie dewelopera."},
{term:"Testowanie par (All-pairs Testing)",cat:"Specialized",def:"Kombinatoryczna metoda testowania, która testuje wszystkie możliwe dyskretne kombinacje parametrów wejściowych. Wykonywana przez zespoły testowe."},
{term:"Testowanie automatyczne (Automated Testing)",cat:"General",def:"Technika testowa wykorzystująca narzędzia automatyzujące do kontroli konfiguracji środowiska, wykonania testów i raportowania wyników. Wykonywana przez komputer i stosowana w zespołach testowych."},
{term:"Testowanie ścieżek bazowych (Basis Path Testing)",cat:"Structural",def:"Mechanizm testowy, który wyprowadza logiczną miarę złożoności projektu proceduralnego i wykorzystuje ją jako wskazówkę przy definiowaniu podstawowego zestawu ścieżek wykonania. Używany przez zespoły testowe przy definiowaniu przypadków testowych."},
{term:"Testowanie kompatybilności wstecznej (Backward Compatibility Testing)",cat:"Specialized",def:"Metoda testowa weryfikująca zachowanie wytworzonego oprogramowania ze starszymi wersjami środowiska testowego. Wykonywana przez zespół testowy."},
{term:"Testowanie beta",cat:"Functional",def:"Ostatnie testowanie przed wydaniem aplikacji w celach komercyjnych. Zwykle wykonywane przez użytkowników końcowych lub inne osoby."},
{term:"Testowanie porównawcze (Benchmark Testing)",cat:"Non-Functional",def:"Technika testowa wykorzystująca reprezentatywne zestawy programów i danych zaprojektowane do oceny wydajności sprzętu i oprogramowania komputerowego w danej konfiguracji. Wykonywana przez zespoły testowe."},
{term:"Testowanie integracji Big Bang",cat:"Functional",def:"Technika testowa integrująca poszczególne moduły programu dopiero, gdy wszystko jest gotowe. Wykonywana przez zespoły testowe."},
{term:"Testowanie przenośności binarnej (Binary Portability Testing)",cat:"Specialized",def:"Technika testująca aplikację wykonywalną pod kątem przenośności między platformami i środowiskami systemowymi, zwykle w celu potwierdzenia zgodności ze specyfikacją ABI. Wykonywana przez zespoły testowe."},
{term:"Testowanie wartości brzegowych (Boundary Value Testing)",cat:"Functional",def:"Technika testowania oprogramowania, w której testy są projektowane tak, aby obejmowały reprezentatywne wartości brzegowe. Wykonywana przez zespoły testowe QA. Przykład: dla poprawnego zakresu wejściowego 1–10, wartości testowe 0, 1, 2, 9, 10 i 11.",aliases:["Analiza wartości brzegowych","BVA"]},
{term:"Testowanie integracji oddolnej (Bottom Up Integration Testing)",cat:"Functional",def:"W testowaniu integracji oddolnej moduły na najniższym poziomie są opracowywane jako pierwsze, a inne moduły zmierzające do programu „głównego” są integrowane i testowane po kolei. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie gałęzi (Branch Testing)",cat:"Structural",def:"Technika testowa, w której wszystkie gałęzie w kodzie źródłowym programu są testowane co najmniej raz. Wykonywane przez dewelopera."},
{term:"Testowanie szerokościowe (Breadth Testing)",cat:"General",def:"Zestaw testów, który sprawdza pełną funkcjonalność produktu, ale nie testuje funkcji szczegółowo. Wykonywane przez zespoły testowe."},
{term:"Testowanie czarnej skrzynki (Black box Testing)",cat:"General",def:"Metoda testowania oprogramowania, która weryfikuje funkcjonalność aplikacji bez konkretnej znajomości jej kodu/struktury wewnętrznej. Testy opierają się na wymaganiach i funkcjonalności. Wykonywane przez zespoły QA."},
{term:"Testowanie sterowane kodem (Code-driven Testing)",cat:"Structural",def:"Technika testowa wykorzystująca frameworki testowe (takie jak xUnit), które umożliwiają wykonywanie testów jednostkowych w celu ustalenia, czy różne sekcje kodu działają zgodnie z oczekiwaniami w różnych okolicznościach. Wykonywana przez zespoły deweloperskie."},
{term:"Testowanie kompatybilności (Compatibility Testing)",cat:"Specialized",def:"Technika testowa, która weryfikuje, jak dobrze oprogramowanie działa w konkretnym środowisku sprzętowym/programowym/systemowym/sieciowym. Wykonywana przez zespoły testowe."},
{term:"Testowanie porównawcze (Comparison Testing)",cat:"General",def:"Technika testowa porównująca mocne i słabe strony produktu z poprzednimi wersjami lub innymi podobnymi produktami. Może być wykonywana przez testerów, deweloperów, kierowników produktu lub właścicieli produktu."},
{term:"Testowanie komponentowe (Component Testing)",cat:"Functional",def:"Technika testowa podobna do testowania jednostkowego, ale z wyższym poziomem integracji — testowanie odbywa się w kontekście aplikacji, a nie poprzez bezpośrednie testowanie konkretnej metody. Może być wykonywana przez zespoły testowe lub deweloperskie."},
{term:"Testowanie konfiguracji (Configuration Testing)",cat:"Non-Functional",def:"Technika testowa, która określa minimalną i optymalną konfigurację sprzętu i oprogramowania oraz efekt dodawania lub modyfikowania zasobów, takich jak pamięć, dyski i CPU. Zwykle wykonywana przez inżynierów testów wydajnościowych."},
{term:"Testowanie pokrycia warunków (Condition Coverage Testing)",cat:"Structural",def:"Rodzaj testowania oprogramowania, w którym każdy warunek jest wykonywany zarówno jako prawdziwy, jak i fałszywy, na każdy sposób, co najmniej raz. Zwykle wykonywane przez zespoły testowania automatycznego."},
{term:"Testowanie zgodności (Compliance Testing)",cat:"Specialized",def:"Rodzaj testowania sprawdzający, czy system został opracowany zgodnie ze standardami, procedurami i wytycznymi. Zwykle wykonywane przez firmy zewnętrzne oferujące markę „Certified Compliant”."},
{term:"Testowanie współbieżności (Concurrency Testing)",cat:"Non-Functional",def:"Testowanie wielu użytkowników mające na celu określenie skutków jednoczesnego dostępu do tego samego kodu aplikacji, modułu lub rekordów bazy danych. Zwykle wykonywane przez inżynierów wydajności."},
{term:"Testowanie zgodności ze specyfikacją (Conformance Testing)",cat:"Specialized",def:"Proces testowania sprawdzający, czy implementacja jest zgodna ze specyfikacją, na której się opiera. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie kontekstowe (Context Driven Testing)",cat:"General",def:"Technika testowania zwinnego, która promuje ciągłą i kreatywną ocenę możliwości testowych w świetle potencjalnych informacji, jakie mogą zostać ujawnione, oraz wartości tych informacji dla organizacji w danym momencie. Zwykle wykonywane przez zwinne zespoły testowe."},
{term:"Testowanie konwersji (Conversion Testing)",cat:"General",def:"Testowanie programów lub procedur używanych do konwersji danych z istniejących systemów w celu wykorzystania ich w systemach zastępujących. Zwykle wykonywane przez zespoły QA."},
{term:"Testowanie pokrycia decyzji (Decision Coverage Testing)",cat:"Structural",def:"Rodzaj testowania oprogramowania, w którym każdy warunek/decyzja jest wykonywana poprzez ustawienie go na prawda/fałsz. Zwykle wykonywane przez zespoły testowania automatycznego."},
{term:"Testowanie tablicą decyzyjną (Decision Table Testing)",cat:"General",def:"Ustrukturyzowana technika projektowania testów, która mapuje kombinacje danych wejściowych (przyczyn) na oczekiwane wyniki (skutki) w tabeli przyczynowo-skutkowej. Kroki: wypisz dane wejściowe w wierszach, wymień kombinacje reguł w kolumnach, uzupełnij kombinacje i zapisz oczekiwany wynik dla każdej kombinacji. Przykład: przycisk „Wyślij”, który aktywuje się tylko wtedy, gdy wszystkie pola formularza są wypełnione."},
{term:"Testowanie destrukcyjne (Destructive Testing)",cat:"Specialized",def:"Rodzaj testowania, w którym testy są prowadzone aż do awarii próbki, w celu zrozumienia wydajności strukturalnej próbki lub zachowania materiału pod różnymi obciążeniami. Zwykle wykonywane przez zespoły QA."},
{term:"Testowanie zależności (Dependency Testing)",cat:"General",def:"Rodzaj testowania, który bada wymagania aplikacji dotyczące istniejącego oprogramowania, stanów początkowych i konfiguracji w celu utrzymania właściwej funkcjonalności. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie dynamiczne (Dynamic Testing)",cat:"General",def:"Termin używany w inżynierii oprogramowania do opisania testowania dynamicznego zachowania kodu. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie dziedziny (Domain Testing)",cat:"Structural",def:"Technika testowania białoskrzynkowego, która sprawdza, czy program akceptuje tylko poprawne dane wejściowe. Zwykle wykonywana przez zespoły deweloperskie, a czasami przez zespoły testowania automatycznego."},
{term:"Testowanie obsługi błędów (Error-Handling Testing)",cat:"Functional",def:"Rodzaj testowania oprogramowania, który określa zdolność systemu do prawidłowego przetwarzania błędnych transakcji. Zwykle wykonywane przez zespoły testowe."},
{term:"Zgadywanie błędów (Error Guessing)",cat:"General",def:"Nieformalna technika projektowania testów, która opiera się na doświadczeniu testera, intuicji i historycznych danych o defektach, aby przewidzieć prawdopodobne obszary problemowe. Nie ma formalnych kroków i opiera się na wykwalifikowanych, doświadczonych testerach."},
{term:"Testowanie od początku do końca (End-to-end Testing)",cat:"Functional",def:"Podobne do testowania systemowego, obejmuje testowanie kompletnego środowiska aplikacji w sytuacji naśladującej rzeczywiste użycie, takiej jak interakcja z bazą danych, korzystanie z komunikacji sieciowej lub interakcja z innym sprzętem, aplikacjami lub systemami, jeśli to właściwe. Wykonywane przez zespoły QA."},
{term:"Testowanie wytrzymałościowe (Endurance Testing)",cat:"Non-Functional",def:"Rodzaj testowania, który sprawdza wycieki pamięci lub inne problemy mogące wystąpić przy długotrwałym wykonywaniu. Zwykle wykonywane przez inżynierów wydajności."},
{term:"Testowanie eksploracyjne (Exploratory Testing)",cat:"Functional",def:"Technika testowania czarnoskrzynkowego prowadzona bez planowania i dokumentacji, w której projektowanie i wykonywanie testów odbywają się jednocześnie. Zwykle wykonywane przez testerów manualnych."},
{term:"Podział na klasy równoważności (Equivalence Partitioning Testing)",cat:"Functional",def:"Technika testowania oprogramowania, która dzieli dane wejściowe jednostki oprogramowania na partycje danych, z których można wyprowadzić przypadki testowe. Przykład: poprawne zakresy 1–10 i 20–30 dają pięć klas (<1, 1–10, 11–19, 20–30, >30); przykładowe wartości testowe -2, 3, 15, 25, 45. Zwykle wykonywane przez zespoły QA.",aliases:["Podział na klasy równoważności","ECP"]},
{term:"Testowanie wstrzykiwaniem błędów (Fault injection Testing)",cat:"Specialized",def:"Element kompleksowej strategii testowej, który pozwala testerowi skupić się na sposobie, w jaki testowana aplikacja radzi sobie z wyjątkami. Wykonywane przez zespoły QA."},
{term:"Weryfikacja formalna (Formal verification Testing)",cat:"Structural",def:"Czynność udowadniania lub obalania poprawności zamierzonych algorytmów leżących u podstaw systemu względem określonej formalnej specyfikacji lub właściwości, przy użyciu formalnych metod matematycznych. Zwykle wykonywana przez zespoły QA."},
{term:"Testowanie funkcjonalne (Functional Testing)",cat:"Functional",def:"Rodzaj testowania czarnoskrzynkowego, które opiera swoje przypadki testowe na specyfikacjach testowanego komponentu oprogramowania. Wykonywane przez zespoły testowe."},
{term:"Testowanie losowe (Fuzz Testing)",cat:"Specialized",def:"Technika testowania oprogramowania, która dostarcza niepoprawne, nieoczekiwane lub losowe dane do wejść programu — specjalny obszar testowania mutacyjnego. Fuzz testing jest wykonywany przez zespoły testowe."},
{term:"Testowanie intensywne (Gorilla Testing)",cat:"General",def:"Technika testowania oprogramowania, która skupia się na intensywnym testowaniu jednego konkretnego modułu. Wykonywana przez zespoły zapewnienia jakości, zwykle podczas pełnego testowania."},
{term:"Testowanie szarej skrzynki (Gray Box Testing)",cat:"General",def:"Połączenie metodologii testowania czarnej i białej skrzynki: testowanie oprogramowania względem jego specyfikacji, ale z wykorzystaniem pewnej wiedzy o jego wewnętrznym działaniu. Może być wykonywane przez zespoły deweloperskie lub testowe."},
{term:"Testowanie szklanej skrzynki (Glass box Testing)",cat:"Structural",def:"Podobne do testowania białoskrzynkowego, oparte na znajomości wewnętrznej logiki kodu aplikacji. Wykonywane przez zespoły deweloperskie."},
{term:"Testowanie GUI (GUI software Testing)",cat:"Functional",def:"Proces testowania produktu wykorzystującego graficzny interfejs użytkownika, aby upewnić się, że spełnia swoje pisemne specyfikacje. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie globalizacji (Globalization Testing)",cat:"Specialized",def:"Metoda testowa sprawdzająca prawidłowe działanie produktu z dowolnymi ustawieniami kultury/lokalizacji, przy użyciu każdego możliwego rodzaju danych wejściowych międzynarodowych. Wykonywana przez zespół testowy."},
{term:"Testowanie integracji hybrydowej (Hybrid Integration Testing)",cat:"Functional",def:"Technika testowa łącząca techniki integracji odgórnej i oddolnej w celu wykorzystania zalet obu rodzajów testowania. Zwykle wykonywana przez zespoły testowe."},
{term:"Testowanie integracyjne (Integration Testing)",cat:"Functional",def:"Faza testowania oprogramowania, w której poszczególne moduły oprogramowania są łączone i testowane jako grupa. Zwykle prowadzona przez zespoły testowe."},
{term:"Testowanie interfejsu (Interface Testing)",cat:"Functional",def:"Testowanie przeprowadzane w celu oceny, czy systemy lub komponenty poprawnie przekazują sobie nawzajem dane i sterowanie. Zwykle wykonywane zarówno przez zespoły testowe, jak i deweloperskie."},
{term:"Testowanie instalacji/deinstalacji (Install/uninstall Testing)",cat:"Specialized",def:"Praca zapewnienia jakości skupiona na tym, co klienci będą musieli zrobić, aby pomyślnie zainstalować i skonfigurować nowe oprogramowanie. Może obejmować pełne, częściowe lub aktualizacyjne procesy instalacji/deinstalacji i zwykle jest wykonywana przez inżyniera testów oprogramowania we współpracy z menedżerem konfiguracji."},
{term:"Testowanie umiędzynarodowienia (Internationalization Testing)",cat:"Specialized",def:"Proces zapewniający, że funkcjonalność produktu nie jest zepsuta i wszystkie komunikaty są prawidłowo zewnętrzne przy użyciu w różnych językach i lokalizacjach. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie międzysystemowe (Inter-Systems Testing)",cat:"Functional",def:"Technika testowa skupiona na weryfikacji poprawnego działania połączeń między aplikacjami. Zwykle wykonywana przez zespoły testowe."},
{term:"Testowanie sterowane słowami kluczowymi (Keyword-driven Testing)",cat:"General",def:"Znane też jako testowanie sterowane tabelą lub testowanie sterowane słowami akcji — metodologia testowania oprogramowania dla automatyzacji, która dzieli proces tworzenia testów na dwa odrębne etapy: etap planowania i etap implementacji. Może być używana zarówno przez zespoły testowania manualnego, jak i automatycznego."},
{term:"Testowanie obciążeniowe (Load Testing)",cat:"Non-Functional",def:"Technika testowa, która obciąża system lub urządzenie i mierzy jego odpowiedź. Zwykle prowadzona przez inżynierów wydajności."},
{term:"Testowanie lokalizacji (Localization Testing)",cat:"Specialized",def:"Część procesu testowania oprogramowania skupiona na dostosowaniu zglobalizowanej aplikacji do konkretnej kultury/lokalizacji. Zwykle wykonywana przez zespoły testowe."},
{term:"Testowanie pętli (Loop Testing)",cat:"Structural",def:"Technika testowania białoskrzynkowego, która sprawdza pętle programu. Wykonywana przez zespoły deweloperskie."},
{term:"Testowanie manualne skryptowe (Manual Scripted Testing)",cat:"General",def:"Metoda testowa, w której przypadki testowe są projektowane i przeglądane przez zespół przed ich wykonaniem. Wykonywana przez zespoły testowania manualnego."},
{term:"Testowanie wsparcia manualnego (Manual-Support Testing)",cat:"General",def:"Technika testowa obejmująca testowanie wszystkich funkcji wykonywanych przez ludzi podczas przygotowywania danych i korzystania z tych danych w systemie zautomatyzowanym. Prowadzona przez zespoły testowe."},
{term:"Testowanie oparte na modelach (Model-Based Testing)",cat:"General",def:"Zastosowanie projektowania opartego na modelach do projektowania i wykonywania niezbędnych artefaktów potrzebnych do przeprowadzenia testowania oprogramowania. Zwykle wykonywane przez zespoły testowe."},
{term:"Testowanie mutacyjne (Mutation Testing)",cat:"Structural",def:"Metoda testowania oprogramowania polegająca na niewielkich modyfikacjach kodu źródłowego lub kodu bajtowego programu w celu przetestowania sekcji kodu, które rzadko lub nigdy nie są wykonywane podczas normalnego wykonania testów. Zwykle prowadzona przez testerów."},
{term:"Testowanie sterowane modularnością (Modularity-driven Testing)",cat:"General",def:"Technika testowania oprogramowania wymagająca tworzenia małych, niezależnych skryptów reprezentujących moduły, sekcje i funkcje testowanej aplikacji. Zwykle wykonywana przez zespół testowy."},
{term:"Testowanie niefunkcjonalne (Non-functional Testing)",cat:"Non-Functional",def:"Technika testowa skupiona na testowaniu aplikacji pod kątem jej wymagań niefunkcjonalnych. Może być prowadzona przez inżynierów wydajności lub zespoły testowania manualnego."},
{term:"Testowanie negatywne (Negative Testing)",cat:"General",def:"Znane też jako „test na niepowodzenie” — metoda testowa, której celem jest wykazanie, że komponent lub system nie działa. Wykonywana przez testerów manualnych lub automatycznych."},
{term:"Testowanie operacyjne (Operational Testing)",cat:"Non-Functional",def:"Technika testowa prowadzona w celu oceny systemu lub komponentu w jego środowisku operacyjnym. Zwykle wykonywana przez zespoły testowe."},
{term:"Testowanie tablicami ortogonalnymi (Orthogonal array Testing)",cat:"Specialized",def:"Systematyczny, statystyczny sposób testowania, który może być stosowany w testowaniu interfejsu użytkownika, testowaniu systemowym, testowaniu regresyjnym, testowaniu konfiguracji i testowaniu wydajności. Wykonywane przez zespół testowy."},
{term:"Pair Testing",cat:"Functional",def:"Technika tworzenia oprogramowania, w której dwóch członków zespołu pracuje razem przy jednej klawiaturze, aby przetestować aplikację. Jedna osoba testuje, druga analizuje lub przegląda testowanie. Może to odbywać się między testerem a deweloperem lub analitykiem biznesowym albo między dwoma testerami, na zmianę prowadzącymi klawiaturę."},
{term:"Testowanie pasywne (Passive Testing)",cat:"General",def:"Technika testowa polegająca na monitorowaniu wyników działającego systemu bez wprowadzania jakichkolwiek specjalnych danych testowych. Wykonywana przez zespół testowy."},
{term:"Testowanie równoległe (Parallel Testing)",cat:"Change-Related",def:"Technika testowa, której celem jest upewnienie się, że nowa aplikacja, która zastąpiła starszą wersję, została poprawnie zainstalowana i działa prawidłowo. Prowadzona przez zespół testowy."},
{term:"Testowanie ścieżek (Path Testing)",cat:"Structural",def:"Typowe testowanie białoskrzynkowe, którego celem jest spełnienie kryteriów pokrycia dla każdej logicznej ścieżki w programie. Zwykle wykonywane przez zespół deweloperski."},
{term:"Testowanie penetracyjne (Penetration Testing)",cat:"Specialized",def:"Metoda testowa oceniająca bezpieczeństwo systemu komputerowego lub sieci poprzez symulowanie ataku ze złośliwego źródła. Zwykle prowadzona przez wyspecjalizowane firmy zajmujące się testami penetracyjnymi."},
{term:"Testowanie wydajności (Performance Testing)",cat:"Non-Functional",def:"Testowanie funkcjonalne prowadzone w celu oceny zgodności systemu lub komponentu z określonymi wymaganiami wydajnościowymi. Zwykle prowadzone przez inżyniera wydajności."},
{term:"Testowanie kwalifikacyjne (Qualification Testing)",cat:"Change-Related",def:"Testowanie względem specyfikacji poprzedniej wersji, zwykle prowadzone przez dewelopera dla konsumenta, aby wykazać, że oprogramowanie spełnia swoje określone wymagania."},
{term:"Testowanie narastające (Ramp Testing)",cat:"Non-Functional",def:"Rodzaj testowania polegający na ciągłym zwiększaniu sygnału wejściowego aż do awarii systemu. Może być prowadzony przez zespół testowy lub inżyniera wydajności."},
{term:"Testowanie regresyjne (Regression Testing)",cat:"Change-Related",def:"Rodzaj testowania oprogramowania, którego celem jest wykrycie błędów oprogramowania po wprowadzeniu zmian w programie (np. poprawek błędów lub nowej funkcjonalności) poprzez ponowne przetestowanie programu. Wykonywane przez zespoły testowe."},
{term:"Testowanie odzyskiwania (Recovery Testing)",cat:"Non-Functional",def:"Technika testowa, która ocenia, jak dobrze system odzyskuje sprawność po awariach, usterkach sprzętowych lub innych katastrofalnych problemach. Wykonywana przez zespoły testowe."},
{term:"Testowanie wymagań (Requirements Testing)",cat:"Functional",def:"Technika testowa, która waliduje, że wymagania są poprawne, kompletne, jednoznaczne i logicznie spójne, oraz pozwala zaprojektować niezbędny i wystarczający zestaw przypadków testowych na podstawie tych wymagań. Wykonywana przez zespoły QA."},
{term:"Testowanie bezpieczeństwa (Security Testing)",cat:"Specialized",def:"Proces mający na celu ustalenie, czy system informatyczny chroni dane i zachowuje funkcjonalność zgodnie z zamierzeniem. Może być wykonywane przez zespoły testowe lub wyspecjalizowane firmy zajmujące się testami bezpieczeństwa."},
{term:"Testy Sanity (Sanity Testing)",cat:"Change-Related",def:"Technika testowa, która określa, czy nowa wersja oprogramowania działa wystarczająco dobrze, aby zaakceptować ją do dużego wysiłku testowego. Wykonywana przez zespoły testowe."},
{term:"Testowanie scenariuszowe (Scenario Testing)",cat:"Functional",def:"Czynność testowa wykorzystująca scenariusze oparte na hipotetycznej historii, aby pomóc danej osobie przemyśleć złożony problem lub system w środowisku testowym. Wykonywana przez zespoły testowe."},
{term:"Testowanie skalowalności (Scalability Testing)",cat:"Non-Functional",def:"Część zestawu testów niefunkcjonalnych, która testuje aplikację pod kątem zdolności do skalowania — czy to obciążenia użytkownikami, liczby transakcji, czy wolumenu danych. Prowadzona przez inżyniera wydajności."},
{term:"Testowanie instrukcji (Statement Testing)",cat:"Structural",def:"Testowanie białoskrzynkowe, które spełnia kryterium, że każda instrukcja w programie jest wykonywana co najmniej raz podczas testowania programu. Zwykle wykonywane przez zespół deweloperski."},
{term:"Testowanie statyczne (Static Testing)",cat:"General",def:"Forma testowania oprogramowania, w której oprogramowanie nie jest faktycznie uruchamiane. Sprawdza głównie poprawność kodu, algorytmu lub dokumentu. Wykorzystywane przez dewelopera, który napisał kod."},
{term:"Testowanie stabilności (Stability Testing)",cat:"Non-Functional",def:"Technika testowa, która próbuje ustalić, czy aplikacja ulegnie awarii. Zwykle prowadzona przez inżyniera wydajności."},
{term:"Testy dymne (Smoke Testing)",cat:"Change-Related",def:"Technika testowa, która sprawdza wszystkie podstawowe komponenty systemu oprogramowania, aby upewnić się, że działają prawidłowo. Zwykle testy dymne są prowadzone przez zespół testowy natychmiast po wykonaniu builda oprogramowania."},
{term:"Testowanie pamięci masowej (Storage Testing)",cat:"Non-Functional",def:"Rodzaj testowania, który weryfikuje, czy testowany program przechowuje pliki danych w odpowiednich katalogach oraz czy rezerwuje wystarczającą ilość miejsca, aby zapobiec nieoczekiwanemu zakończeniu działania z powodu braku miejsca. Zwykle wykonywane przez zespół testowy."},
{term:"Testowanie warunków skrajnych (Stress Testing)",cat:"Non-Functional",def:"Technika testowa, która ocenia system lub komponent w granicach lub poza granicami jego określonych wymagań. Zwykle prowadzona przez inżyniera wydajności."},
{term:"Testowanie strukturalne (Structural Testing)",cat:"Structural",def:"Technika testowania białoskrzynkowego, która uwzględnia wewnętrzną strukturę systemu lub komponentu i zapewnia, że każda instrukcja programu spełnia swoją zamierzoną funkcję. Zwykle wykonywana przez deweloperów oprogramowania."},
{term:"Testowanie systemowe (System Testing)",cat:"Functional",def:"Proces testowania zintegrowanego systemu sprzętowo-programowego w celu weryfikacji, czy system spełnia swoje określone wymagania. Prowadzone przez zespoły testowe zarówno w środowisku deweloperskim, jak i docelowym."},
{term:"Testowanie integracji systemów (System integration Testing)",cat:"Functional",def:"Proces testowy, który sprawdza współistnienie systemu oprogramowania z innymi. Zwykle wykonywany przez zespoły testowe."},
{term:"Testowanie integracji odgórnej (Top Down Integration Testing)",cat:"Functional",def:"Technika testowa polegająca na rozpoczęciu od góry hierarchii systemu, od interfejsu użytkownika, i użyciu zaślepek (stubs) do testowania od góry w dół, aż cały system zostanie zaimplementowany. Prowadzona przez zespoły testowe."},
{term:"Testowanie wątkowe (Thread Testing)",cat:"Functional",def:"Odmiana techniki testowania odgórnego, w której postępująca integracja komponentów podąża za implementacją podzbiorów wymagań. Zwykle wykonywana przez zespoły testowe."},
{term:"Testowanie aktualizacji (Upgrade Testing)",cat:"Change-Related",def:"Technika testowa, która weryfikuje, czy zasoby utworzone w starszych wersjach mogą być prawidłowo używane i że nauka użytkownika nie jest zaburzona. Wykonywana przez zespoły testowe."},
{term:"Testowanie jednostkowe (Unit Testing)",cat:"Structural",def:"Metoda weryfikacji i walidacji oprogramowania, w której programista sprawdza, czy poszczególne jednostki kodu źródłowego nadają się do użycia. Zwykle prowadzona przez zespół deweloperski."},
{term:"Testowanie interfejsu użytkownika (User Interface Testing)",cat:"Functional",def:"Rodzaj testowania wykonywany w celu sprawdzenia, jak przyjazna dla użytkownika jest aplikacja. Wykonywany przez zespoły testowe."},
{term:"Testowanie użyteczności (Usability Testing)",cat:"Non-Functional",def:"Technika testowa, która weryfikuje łatwość, z jaką użytkownik może nauczyć się obsługiwać system lub komponent, przygotowywać dla niego dane wejściowe i interpretować wyniki. Zwykle wykonywana przez użytkowników końcowych."},
{term:"Testowanie wolumenu (Volume Testing)",cat:"Non-Functional",def:"Testowanie, które potwierdza, że wszelkie wartości mogące z czasem znacznie wzrosnąć (np. skumulowane liczniki, logi i pliki danych) mogą zostać obsłużone przez program i nie spowodują zatrzymania jego działania ani pogorszenia jego funkcjonowania w żaden sposób. Zwykle prowadzone przez inżyniera wydajności."},
{term:"Testowanie podatności (Vulnerability Testing)",cat:"Specialized",def:"Rodzaj testowania dotyczący bezpieczeństwa aplikacji, którego celem jest zapobieganie problemom mogącym wpłynąć na integralność i stabilność aplikacji. Może być wykonywane przez wewnętrzne zespoły testowe lub zlecane wyspecjalizowanym firmom."},
{term:"Testowanie białej skrzynki (White box Testing)",cat:"Structural",def:"Technika testowa oparta na znajomości wewnętrznej logiki kodu aplikacji, obejmująca testy takie jak pokrycie instrukcji kodu, gałęzi, ścieżek i warunków. Wykonywana przez deweloperów oprogramowania."},
{term:"Testowanie przepływu pracy (Workflow Testing)",cat:"Functional",def:"Skryptowa technika testowania od początku do końca, która powiela konkretne przepływy pracy, jakich oczekuje się od użytkownika końcowego. Zwykle prowadzona przez zespoły testowe."},
{term:"Buddy Testing",cat:"General",def:"Dwóch testerów (często deweloper i tester) pracuje razem nad tym samym modułem, łącząc perspektywy. Rodzaj testowania ad hoc."},
{term:"Monkey Testing",cat:"General",def:"Losowe, nieustrukturyzowane dane wejściowe rzucane na aplikację, aby sprawdzić, czy się zepsuje — podejście „małpy przy klawiaturze”. Rodzaj testowania ad hoc."},
{term:"Testowanie przejść między stanami (State Transition Testing)",cat:"General",def:"Technika projektowania testów, która modeluje, jak sekwencje danych wejściowych przeprowadzają system między zdefiniowanymi stanami, dzięki czemu testerzy mogą weryfikować przejścia i wyniki w każdym stanie. Przykład: system logowania z kodem PIN — poprawny PIN przy dowolnej próbie daje dostęp; trzy błędne próby z rzędu blokują konto."},
{term:"REST",cat:"Specialized",def:"Representational State Transfer — styl architektoniczny projektowania sieciowych usług webowych, powszechnie stosowany w komunikacji usług chmurowych. Usługi RESTful API są testowane poprzez wysyłanie żądań HTTP (GET, POST, PUT, DELETE) i walidację odpowiedzi."},
{term:"SBTM",cat:"General",def:"Session-Based Test Management — ustrukturyzowany framework do prowadzenia i raportowania sesji testowania eksploracyjnego. Kroki: utworzenie taksonomii błędów, zdefiniowanie karty testowej, ograniczenie czasu sesji, przegląd wyników, debriefing."},
{term:"Poziom K (K1-K4)",cat:"Specialized",def:"Skala sylabusa ISTQB określająca, jak dogłębnie badany jest cel nauczania: K1 = zapamiętaj, K2 = zrozum, K3 = zastosuj, K4 = analizuj. Sylabus Foundation Level wykorzystuje głównie K1-K3.",aliases:["K-Level"]},
{term:"Podstawa testowa (Test Basis)",cat:"Specialized",def:"Zbiór wiedzy — wymagania, projekty, historyjki użytkownika itd. — używany jako źródło do wyprowadzania przypadków testowych."},
{term:"Wyrocznia testowa (Test Oracle)",cat:"Specialized",def:"Źródło używane do określenia oczekiwanego wyniku testu: specyfikacja, inny system, wiedza danej osoby lub coś podobnego."},
{term:"Testowanie potwierdzające (Confirmation Testing)",cat:"Change-Related",def:"Nazywane też retestowaniem — ponowne uruchomienie wcześniej nieudanego testu po poprawce, aby potwierdzić usunięcie defektu.",aliases:["Re-testing"]},
{term:"Kryteria wejścia (Entry Criteria)",cat:"Specialized",def:"Warunki, które muszą zostać spełnione, zanim czynność testowa będzie mogła się rozpocząć. W parze z kryteriami wyjścia, które definiują, kiedy czynność uznaje się za zakończoną."},
{term:"Kryteria wyjścia (Exit Criteria)",cat:"Specialized",def:"Warunki, które muszą zostać spełnione, aby uznać czynność testową za zakończoną. W parze z kryteriami wejścia, które definiują, kiedy może się ona rozpocząć."},
{term:"Piramida testów (Test Pyramid)",cat:"Specialized",def:"Model zalecający wiele niskopoziomowych, szybkich, automatycznych testów (jednostkowych) i stopniowo mniej wysokopoziomowych, wolniejszych testów (integracyjnych, UI/end-to-end)."},
{term:"Kwadranty testowe (Testing Quadrants)",cat:"Specialized",def:"Model mapujący rodzaje testów według dwóch osi: czy są zorientowane na biznes czy na technologię oraz czy wspierają zespół czy krytykują produkt."},
{term:"Ryzyko produktowe (Product Risk)",cat:"Specialized",def:"Możliwość, że produkt pracy może nie spełnić potrzeb interesariuszy. W przeciwieństwie do ryzyka projektowego, które zagraża zdolności projektu do realizacji jego celów (np. harmonogram, zasoby)."},
{term:"Ryzyko projektowe (Project Risk)",cat:"Specialized",def:"Ryzyko zagrażające zdolności projektu do realizacji jego celów — takie jak opóźnienie harmonogramu lub braki kadrowe. W przeciwieństwie do ryzyka produktowego, które zagraża temu, czy sam produkt pracy spełnia potrzeby interesariuszy."},
{term:"Gęstość defektów (Defect Density)",cat:"Specialized",def:"Metryka mierząca liczbę defektów znalezionych na jednostkę rozmiaru — np. na 1000 linii kodu lub na funkcję — używana do sygnalizowania nietypowo ryzykownych modułów."},
{term:"Wskaźnik ucieczki defektów (Escape Rate)",cat:"Specialized",def:"Odsetek defektów znalezionych w produkcji w stosunku do wykrytych przed wydaniem. Kluczowy sygnał tego, czy strategia testowa faktycznie działa.",aliases:["Escaped Defects"]},
{term:"Wskaźnik niestabilności (Flakiness Rate)",cat:"Specialized",def:"Odsetek testów automatycznych, które zawodzą sporadycznie bez leżącej u podstaw zmiany kodu. Rosnący wskaźnik niestabilności niszczy zaufanie do zestawu testów, ponieważ prawdziwe awarie zaczynają być domyślnie odrzucane."},
{term:"MTTD / MTTR",cat:"Specialized",def:"Mean Time To Detect i Mean Time To Resolve — jak szybko defekt lub incydent jest wykrywany, gdy już istnieje, i jak szybko jest następnie naprawiany."},
{term:"Metryki DORA (DORA Metrics)",cat:"Specialized",def:"Cztery metryki od grupy DevOps Research and Assessment używane do oceny wydajności dostarczania oprogramowania: częstotliwość wdrożeń, czas realizacji zmian, wskaźnik niepowodzeń zmian oraz czas przywrócenia usługi."},
{term:"Testowanie shift-left (Shift-Left Testing)",cat:"Specialized",def:"Praktyka przesuwania czynności testowych wcześniej w cyklu życia wytwarzania — np. angażowanie testerów już podczas wymagań i projektowania — zamiast dopiero po zakończeniu implementacji."},
{term:"Weryfikacja a walidacja (Verification vs. Validation)",cat:"Specialized",def:"Weryfikacja pyta, czy produkt został zbudowany zgodnie ze specyfikacją („czy budujemy produkt poprawnie?”); walidacja pyta, czy spełnia on rzeczywistą potrzebę użytkownika („czy budujemy właściwy produkt?”)."},
{term:"Samonaprawiająca się automatyzacja testów (Self-Healing Test Automation)",cat:"Specialized",def:"Automatyzacja wspomagana AI, która automatycznie dostosowuje lokatory elementów UI, gdy zmienia się znacznik strony, dzięki czemu testy nie psują się przy każdej drobnej zmianie DOM."},
{term:"Wizualne testowanie AI (Visual AI Testing)",cat:"Specialized",def:"Podejście testowe, które porównuje zrzuty ekranu za pomocą różnicowania percepcyjnego (opartego na AI) zamiast dokładnego dopasowania pikseli, dzięki czemu wykrywa prawdziwe regresje wizualne, ignorując nieszkodliwy szum renderowania. Przykładowe narzędzia: Applitools Eyes, Percy."},
{term:"Predykcyjny wybór testów (Predictive Test Selection)",cat:"Specialized",def:"Wykorzystanie historycznych danych o awariach testów do uruchamiania tylko tego podzbioru testów, który jest najbardziej prawdopodobny do wykrycia regresji dla danej zmiany kodu, skracając czas trwania CI."},
{term:"Halucynacja (AI)",cat:"Specialized",def:"Sytuacja, gdy system AI, szczególnie LLM, generuje wynik przedstawiony z przekonaniem, ale faktycznie fałszywy lub niepoparty dowodami — kluczowa rzecz do sprawdzenia podczas walidacji funkcji opartych na AI."},
{term:"Prompt Injection",cat:"Specialized",def:"Atak lub technika testowa, w której spreparowane dane wejściowe próbują nadpisać oryginalne instrukcje systemu AI, wykorzystywana do sprawdzenia, czy funkcją opartą na LLM można manipulować w kierunku niebezpiecznego lub niezamierzonego zachowania."},
{term:"Page Object Model (POM)",cat:"Specialized",def:"Wzorzec projektowy automatyzacji testów, w którym każda strona lub komponent UI otrzymuje klasę hermetyzującą jej lokatory i dostępne akcje, dzięki czemu testy wywołują metody na obiektach stron zamiast bezpośrednio dotykać lokatorów."},
{term:"Wzorzec Screenplay (Screenplay Pattern)",cat:"Specialized",def:"Wzorzec projektowy automatyzacji testów, który modeluje test jako Aktora ze Zdolnościami, wykonującego Zadania i zadającego Pytania — preferujący kompozycję nad dziedziczeniem i zwykle bardziej skalowalny niż Page Object Model dla dużych zestawów."},
{term:"Wirtualizacja usług (Service Virtualization)",cat:"Specialized",def:"Symulowanie prawdziwej zależności (API strony trzeciej, niedokończonej usługi downstream) za pomocą zamiennika zwracającego realistyczne, gotowe lub oparte na regułach odpowiedzi, co czyni testy szybszymi i bardziej niezawodnymi. Przykładowe narzędzia: WireMock, Mountebank."},
{term:"Testowanie kontraktowe (Contract Testing)",cat:"Specialized",def:"Testowanie kontraktu interfejsu pary usług w izolacji zamiast całego systemu end-to-end, dzięki czemu przełamujące zmiany API są wychwytywane bez pełnego środowiska integracyjnego.",aliases:["Consumer-Driven Contract Testing"]},
{term:"Service Mesh",cat:"Specialized",def:"Infrastruktura (np. Istio, Linkerd) zarządzająca warstwą sieciową między mikroserwisami — routingiem, ponawianiem prób, limitami czasu, wzajemnym TLS, kształtowaniem ruchu — często testowana poprzez weryfikację, czy jej konfiguracja routingu/polityk zachowuje się zgodnie z zamierzeniem."},
{term:"Chaos Engineering",cat:"Specialized",def:"Celowe wstrzykiwanie kontrolowanych awarii (zabite instancje, opóźnienia sieciowe, wyczerpanie zasobów) do systemu, często na produkcji, aby zweryfikować, że degraduje się on łagodnie zamiast przechodzić w awarię kaskadową. Spopularyzowane przez narzędzia takie jak Chaos Monkey i Gremlin."},
{term:"Testowanie shift-right (Shift-Right Testing)",cat:"Specialized",def:"Świadome rozszerzenie testowania na produkcję poprzez wydania kanarkowe, flagi funkcji i monitoring syntetyczny — uzupełnienie testowania shift-left, które przesuwa testowanie wcześniej w cyklu życia."},
{term:"Bramka jakości (Quality Gate)",cat:"Specialized",def:"Automatyczna kontrola w pipeline CI/CD, która blokuje scalenie lub wdrożenie, gdy warunek nie jest spełniony — taki jak minimalny wskaźnik zdawalności, próg pokrycia lub zero krytycznych ustaleń bezpieczeństwa."},
{term:"Efemeryczne środowisko testowe (Ephemeral Test Environment)",cat:"Specialized",def:"Środowisko testowe uruchamiane na żądanie (np. dla każdego pull requesta) i usuwane później, unikające rywalizacji i niestabilności powodowanych przez jedno współdzielone, mutowalne środowisko QA."},
{term:"Obserwowalność (trzy filary) (Observability)",cat:"Specialized",def:"Logi, metryki i ślady (traces) — trzy typy danych używane do ciągłego rozumienia zachowania systemu, także na produkcji, zamiast polegania wyłącznie na z góry zaskryptowanych scenariuszach testowych."},
{term:"Lody na rożku (antywzorzec) (Ice-Cream Cone)",cat:"Specialized",def:"Kształt zestawu testów będący odwrotnością zdrowej Piramidy testów: obciążony u góry wolnymi, kruchymi testami UI/end-to-end i mający zbyt mało szybkich, tanich testów jednostkowych, co czyni cały zestaw wolnym i trudnym w utrzymaniu."},
{term:"Wydanie kanarkowe (Canary Release)",cat:"Specialized",def:"Strategia wdrożenia, która najpierw wprowadza zmianę dla niewielkiego procenta ruchu produkcyjnego, dzięki czemu problemy są wychwytywane, zanim zmiana dotrze do wszystkich."},
{term:"Flaga funkcji (Feature Flag)",cat:"Specialized",def:"Przełącznik pozwalający wdrożyć kod, ale utrzymać go nieaktywnym ('wysłanym w ukryciu') i włączyć stopniowo lub selektywnie, używany do oddzielenia wdrożenia od wydania i wspierania praktyk testowania shift-right."},
{term:"OWASP Top 10",cat:"Specialized",def:"Najczęściej cytowana lista krytycznych ryzyk bezpieczeństwa aplikacji webowych, publikowana i okresowo aktualizowana przez Open Worldwide Application Security Project — standardowe słownictwo startowe dla testowania świadomego bezpieczeństwa."},
{term:"SQL Injection (SQLi)",cat:"Specialized",def:"Podatność, w której niezaufane dane wejściowe są łączone bezpośrednio z zapytaniem SQL zamiast być poprawnie sparametryzowane, co pozwala atakującemu zmienić logikę zapytania. Naprawiana zapytaniami parametryzowanymi/przygotowanymi instrukcjami.",aliases:["Wstrzykiwanie SQL"]},
{term:"Cross-Site Scripting (XSS)",cat:"Specialized",def:"Podatność, w której niezaufane dane wejściowe są renderowane jako wykonywalny skrypt w przeglądarce innego użytkownika. Stored XSS zapisuje ładunek na stałe; Reflected XSS odbija go natychmiast; DOM-based XSS zachodzi całkowicie po stronie klienta.",aliases:["Wstrzykiwanie skryptu międzywitrynowego"]},
{term:"Cross-Site Request Forgery (CSRF)",cat:"Specialized",def:"Atak, w którym złośliwa strona nakłania przeglądarkę zalogowanego użytkownika do wysłania niechcianego żądania do docelowej strony, na której jest uwierzytelniony. Obrona: tokeny CSRF i ciasteczka SameSite.",aliases:["Fałszowanie żądań międzywitrynowych"]},
{term:"Broken Access Control",cat:"Specialized",def:"Klasa podatności, w której system nie ogranicza prawidłowo tego, do czego uwierzytelniony użytkownik może uzyskać dostęp lub co może zrobić — najwyżej sklasyfikowane ryzyko OWASP, często wykorzystywane przez IDOR (zmianę ID w URL, by uzyskać dostęp do danych innego użytkownika).",aliases:["IDOR","Insecure Direct Object Reference","Zepsuta kontrola dostępu"]},
{term:"SAST",cat:"Specialized",def:"Static Application Security Testing — skanuje kod źródłowy bez jego uruchamiania, szukając znanych niebezpiecznych wzorców, takich jak niesparametryzowane zapytania czy zahardkodowane sekrety. Działa wcześnie, często przy każdym commicie.",aliases:["Static Application Security Testing"]},
{term:"DAST",cat:"Specialized",def:"Dynamic Application Security Testing — atakuje działającą aplikację z zewnątrz, tak jak prawdziwy atakujący, bez znajomości kodu źródłowego. Wychwytuje problemy z czasem wykonania/konfiguracją, których SAST nie widzi.",aliases:["Dynamic Application Security Testing"]},
{term:"IAST",cat:"Specialized",def:"Interactive Application Security Testing — łączy podejścia statyczne i dynamiczne za pomocą agenta zainstrumentowanego wewnątrz działającej aplikacji, by znaleźć podatności z większym kontekstem i mniejszą liczbą fałszywych trafień.",aliases:["Interactive Application Security Testing"]},
{term:"SCA (Software Composition Analysis)",cat:"Specialized",def:"Skanowanie bibliotek i zależności firm trzecich pod kątem znanych, opublikowanych podatności (CVE) — odnosi się do ryzyka OWASP „Podatne i przestarzałe komponenty”. Przykładowe narzędzia: Snyk, Dependabot.",aliases:["Software Composition Analysis","Skanowanie zależności"]},
{term:"Modelowanie zagrożeń (Threat Modeling)",cat:"Specialized",def:"Ustrukturyzowane ćwiczenie, wykonywane podczas projektowania przed napisaniem kodu, mające na celu zidentyfikowanie, co może pójść nie tak w systemie i jak się przed tym bronić — powszechnie z wykorzystaniem frameworku STRIDE.",aliases:["STRIDE"]},
{term:"Zero Trust",cat:"Specialized",def:"Zasada architektoniczna, która nigdy nie zakłada, że żądanie jest bezpieczne tylko dlatego, że pochodzi z wewnątrz obwodu sieci — każde żądanie jest uwierzytelniane i autoryzowane na podstawie własnych zasług, niezależnie od źródła."},
{term:"Zasada minimalnych uprawnień (Least Privilege)",cat:"Specialized",def:"Zasada, według której każdy użytkownik, usługa lub proces powinny mieć tylko minimalny dostęp potrzebny do wykonania swojego zadania — fundament, do naruszenia którego ostatecznie sprowadza się większość klas podatności bezpieczeństwa."},
{term:"JWT (JSON Web Token)",cat:"Specialized",def:"Samodzielny token zawierający roszczenia (claims), używany do uwierzytelniania/autoryzacji. Jego podpis musi być weryfikowany przy każdym żądaniu — ufanie roszczeniom bez sprawdzenia podpisu pozwala zaakceptować zmanipulowany token.",aliases:["JSON Web Token"]},
{term:"OAuth 2.0",cat:"Specialized",def:"Standardowy protokół delegowanego dostępu (np. „zaloguj się przez Google”), wykorzystujący tokeny z zakresem i wygasaniem — testowanie skupia się na wygaśnięciu tokenu, przepływach odświeżania oraz na tym, czy przyznane zakresy są faktycznie egzekwowane."},
{term:"Testowanie parami (Pairwise Testing)",cat:"Specialized",def:"Kombinatoryczna technika projektowania testów, która pokrywa każdą parę wartości parametrów przy znacznie mniejszej liczbie przypadków testowych niż testowanie wszystkich kombinacji, opierając się na obserwacji, że większość defektów interakcji dotyczy tylko dwóch parametrów.",aliases:["Testowanie kombinatoryczne","Pairwise"]},
{term:"Testowanie przypadków użycia (Use Case Testing)",cat:"General",def:"Technika projektowania testów, która wyprowadza przypadki testowe bezpośrednio z udokumentowanych przypadków użycia — interakcji krok po kroku między aktorem a systemem, obejmujących główny scenariusz oraz przebiegi alternatywne/wyjątkowe."},
{term:"WCAG",cat:"Specialized",def:"Web Content Accessibility Guidelines — standardowy punkt odniesienia dla dostępności, zorganizowany wokół czterech zasad (Postrzegalna, Funkcjonalna, Zrozumiała, Solidna) z poziomami zgodności A/AA/AAA.",aliases:["Web Content Accessibility Guidelines","POUR"]},
{term:"GraphQL",cat:"Specialized",def:"Styl API oparty na języku zapytań, wykorzystujący pojedynczy punkt końcowy, w którym klient określa dokładnie, jakich danych chce. Nacisk testowania obejmuje walidację schematu i ochronę przed nadmiernymi/zagnieżdżonymi zapytaniami (ryzyko DoS)."},
{term:"gRPC",cat:"Specialized",def:"Binarny protokół API typu contract-first (wykorzystujący Protocol Buffers), zbudowany pod szybką komunikację między usługami, zwykle testowany na podstawie jego definicji kontraktu .proto za pomocą narzędzi takich jak grpcurl."},
{term:"Testowanie skoków obciążenia (Spike Testing)",cat:"Non-Functional",def:"Rodzaj testowania wydajności, który gwałtownie, skokowo zwiększa obciążenie (np. z 100 do 5000 użytkowników w ciągu kilku sekund), aby symulować nagłe skoki ruchu, takie jak kampania marketingowa lub moment wiralowej popularności."},
{term:"Testowanie długotrwałe (Soak Testing)",cat:"Non-Functional",def:"Rodzaj testowania wydajności, który uruchamia umiarkowane obciążenie przez długi, nieprzerwany okres (wiele godzin lub dni), aby wychwycić wycieki pamięci i powolne wyczerpywanie zasobów, których krótkie testy nie są w stanie ujawnić.",aliases:["Endurance Testing","Testowanie wytrzymałościowe"]},
{term:"Percentyl czasu odpowiedzi (p95/p99)",cat:"Non-Functional",def:"Sposób raportowania wyników wydajności, który ujawnia doświadczenie „ogona” rozkładu ukrywane przez średnią — p95 oznacza, że 95% żądań było szybszych niż ta wartość, p99 oznacza, że było ich 99%.",aliases:["p95","p99"]},
{term:"Throughput (przepustowość)",cat:"Non-Functional",def:"Liczba żądań obsługiwanych przez system w jednostce czasu (np. żądań na sekundę) — podstawowa metryka obok czasu odpowiedzi i wskaźnika błędów w testowaniu wydajności."},
{term:"Ocena heurystyczna (Heuristic Evaluation)",cat:"Specialized",def:"Ocena interfejsu względem znanego zestawu zasad użyteczności (takich jak 10 heurystyk użyteczności Jakoba Nielsena) bez potrzeby angażowania prawdziwych użytkowników — szybki sposób na wychwycenie znaczącej części problemów z użytecznością."},
{term:"Protokół głośnego myślenia (Think-Aloud Protocol)",cat:"Specialized",def:"Technika testowania użyteczności, w której uczestnik werbalizuje swoje myśli podczas wykonywania zadania, ujawniając dezorientację, której samo ciche obserwowanie by nie wychwyciło."},
{term:"Testowanie A/B (A/B Testing)",cat:"Specialized",def:"Uruchamianie dwóch wariantów projektu z podziałem prawdziwego ruchu produkcyjnego między nie i porównywanie metryki docelowej (wskaźnik konwersji, ukończenie zadania) — mierzy rzeczywiste zachowanie na dużą skalę, uzupełniając mniejsze, moderowane sesje użyteczności."},
{term:"Testowanie regresji wizualnej (Visual Regression Testing)",cat:"Specialized",def:"Automatyczne porównywanie zrzutów ekranu interfejsu przed i po zmianie, aby wychwycić niezamierzone uszkodzenia wizualne. Przykładowe narzędzia: Applitools Eyes, Percy, Chromatic."},
{term:"Testowanie ciągłe (Continuous Testing)",cat:"Specialized",def:"Praktyka uruchamiania testów automatycznych w sposób ciągły w całym pipeline CI/CD, nie tylko przed wydaniem, dzięki czemu informacja zwrotna o każdej zmianie przychodzi w ciągu minut."}
]
};
