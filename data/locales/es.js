// QA Learning Hub — Spanish (es) locale
window.QAHUB_LOCALES = window.QAHUB_LOCALES || {};
window.QAHUB_LOCALES.es = {
  ui: {
    brandTagline: "Curso de Pruebas de Software",
    menuButton: "Menú",
    footerText: "QA Learning Hub &middot; pruebas manuales, diseño de pruebas, pruebas ad hoc y exploratorias, pruebas de API REST, preparación para el examen ISTQB&reg; CTFL v4.0, una caja de herramientas de QA y referencia profesional en funcionamiento, arquitectura de pruebas/QA, pruebas de seguridad de aplicaciones, y pruebas prácticas de rendimiento, UI/UX y automatización.",
    navDashboard: "Panel",
    navTutorials: "Tutoriales",
    navPractice: "Práctica",
    navQuizzes: "Cuestionarios",
    navGlossary: "Glosario",
    langLabel: "Idioma",
    heroEyebrow: "Curso de Pruebas de Software",
    homeTitle: "QA Learning Hub",
    homeIntro: "Un recorrido estructurado por los fundamentos de las pruebas manuales, las técnicas de diseño de pruebas, el panorama completo de los tipos de pruebas, las pruebas ad hoc y exploratorias, las pruebas de API REST, y la preparación para el examen ISTQB® CTFL v4.0 — además de una caja de herramientas práctica y una referencia profesional, arquitectura de pruebas/QA, pruebas de seguridad de aplicaciones, y pruebas prácticas de rendimiento, UI/UX y automatización. Cada módulo va seguido de un cuestionario.",
    statModulesCompleted: "Módulos completados",
    statModulesInProgress: "Módulos en progreso",
    statQuizzesAttempted: "Cuestionarios intentados",
    statGlossaryTerms: "Términos del glosario",
    tutorialModulesHeading: "Módulos del tutorial",
    badgeNotStarted: "Sin iniciar",
    badgeInProgress: "En progreso",
    badgeCompleted: "Completado",
    bestScoreLabel: "mejor puntaje {pct}%",
    ctaFinalExam: "Hacer el examen final",
    ctaBrowseGlossary: "Explorar el glosario",
    moduleWord: "MÓDULO",
    crumbModule: "Módulo",
    calloutTakeaway: "Idea clave",
    markComplete: "Marcar módulo como completado",
    takeModuleQuiz: "Hacer el cuestionario del Módulo {num} →",
    allQuizzes: "Todos los cuestionarios →",
    quizzesTitle: "Cuestionarios",
    quizzesIntro: "Haz cualquier cuestionario de módulo por separado, o combina todo en el Examen Final. Cada cuestionario puede repetirse tantas veces como quieras — las preguntas y el orden de las respuestas se mezclan en cada intento.",
    finalExamCardNum: "EXAMEN FINAL",
    finalExamTitle: "Examen Final Combinado",
    finalExamDesc: "{n} preguntas seleccionadas al azar de los {m} módulos.",
    attempted: "Intentado",
    notAttempted: "Sin intentar",
    moduleQuizCardNum: "CUESTIONARIO DEL MÓDULO {num}",
    quizQuestionsCount: "{n} preguntas que cubren este módulo.",
    questionOf: "Pregunta {a} de {b}",
    questionLabel: "PREGUNTA",
    exitQuiz: "Salir del cuestionario",
    nextQuestion: "Siguiente pregunta →",
    seeResults: "Ver resultados →",
    correctPrefix: "Correcto. ",
    incorrectPrefix: "No exactamente. ",
    resultsSuffix: "Resultados",
    resultsCorrectLine: "{score} de {total} correctas · umbral de aprobación {pct}%",
    passed: "Aprobado",
    failed: "Todavía no — inténtalo de nuevo",
    retakeQuiz: "Repetir este cuestionario",
    backToQuizzes: "Volver a los cuestionarios",
    reviewHeading: "Revisión",
    yourAnswer: "Tu respuesta:",
    correctAnswer: "Respuesta correcta:",
    skipped: "Omitida",
    noQuestionsAvailable: "Todavía no hay preguntas disponibles para este cuestionario.",
    finalExamTitleLabel: "Examen Final",
    quizSuffix: "Cuestionario",
    glossaryTitle: "Glosario de Pruebas",
    glossaryIntro: "{n} términos y tipos de pruebas de software, con búsqueda y filtro por categoría.",
    searchPlaceholder: "Buscar términos o definiciones…",
    allCategories: "Todas las categorías",
    termsCount: "{n} términos",
    noTermsMatch: "Ningún término coincide con tu búsqueda.",
    alsoLabel: "también:"
  },
  catLabels: {
    "Functional": "Funcional",
    "Non-Functional": "No funcional",
    "Structural": "Estructural",
    "Change-Related": "Relacionada con cambios",
    "Specialized": "Especializada",
    "General": "General"
  },
  modules: [
{
  id: "manual-testing",
  num: 1,
  title: "Fundamentos de las Pruebas Manuales",
  summary: "Por qué los testers humanos siguen siendo importantes, y cómo llevar a cabo bien un esfuerzo de pruebas manuales.",
  takeaway: "Las pruebas manuales siguen siendo una parte vital del QA moderno — la flexibilidad y la intuición humana detectan errores complejos tempranamente, garantizando experiencias de usuario confiables. La automatización al 100% no es posible, lo que hace que las pruebas manuales sean imprescindibles.",
  lessons: [
    { h: "¿Qué son las Pruebas Manuales?", body: `
      <p>Las pruebas manuales son pruebas ejecutadas <strong>sin herramientas de automatización</strong>. Un tester realiza acciones manualmente — hacer clic, ingresar datos, navegar por pantallas — para verificar el comportamiento frente a los requisitos. No se requiere conocimiento de programación, lo que las convierte en el punto de entrada más accesible al QA.</p>` },
    { h: "Por qué son importantes", body: `
      <ul>
        <li><strong>Validación de UX</strong> — juicio humano sobre la disposición, la estética y la retroalimentación. Más del <strong>70% de los proyectos</strong> citan la UX como una razón principal para las pruebas manuales.</li>
        <li><strong>Detectar errores temprano es mucho más barato</strong> — un defecto encontrado en la implementación cuesta aproximadamente <strong>6 veces más</strong> corregirlo que uno detectado en la fase de diseño, según el IBM System Sciences Institute.</li>
        <li><strong>Rentables</strong> para proyectos de ciclo de vida corto o con interfaces que cambian con frecuencia, donde construir automatización superaría en duración a la propia funcionalidad.</li>
      </ul>` },
    { h: "Objetivos principales", body: `
      <ul>
        <li>Identificación de errores</li>
        <li>Validación de requisitos</li>
        <li>Garantía de la experiencia de usuario</li>
        <li>Confianza en la regresión</li>
        <li>Entrega de calidad</li>
      </ul>` },
    { h: "Características", body: `
      <ul>
        <li><strong>Centradas en el ser humano</strong> — dependen del juicio del tester, no de scripts.</li>
        <li><strong>Naturaleza exploratoria</strong> — los testers pueden desviarse e investigar.</li>
        <li><strong>Adaptabilidad</strong> — se ajustan rápidamente a requisitos cambiantes.</li>
        <li><strong>Requieren mucho tiempo</strong> — cada pasada es esfuerzo manual.</li>
        <li><strong>Propensas a errores pero perspicaces</strong> — los humanos pasan por alto cosas que los scripts no, pero también notan cosas que los scripts no pueden.</li>
      </ul>` },
    { h: "Tipos de Pruebas Manuales", body: `
      <p>Según el conocimiento del funcionamiento interno:</p>
      <ul>
        <li><strong>Pruebas de caja negra</strong> — sin conocimiento del código interno, basadas en requisitos.</li>
        <li><strong>Pruebas de caja blanca</strong> — conocimiento total de la lógica/código interno.</li>
        <li><strong>Pruebas de caja gris</strong> — conocimiento parcial del funcionamiento interno.</li>
      </ul>
      <p>Según el nivel de prueba:</p>
      <ul>
        <li><strong>Pruebas unitarias</strong> — componentes individuales.</li>
        <li><strong>Pruebas de integración</strong> — módulos combinados.</li>
        <li><strong>Pruebas de sistema</strong> — todo el sistema integrado.</li>
        <li><strong>Pruebas de aceptación</strong> — validación frente a las necesidades del negocio.</li>
      </ul>` },
    { h: "Cómo realizar Pruebas Manuales", body: `
      <p>Un flujo de trabajo típico de pruebas manuales:</p>
      <ol>
        <li><strong>Análisis de requisitos</strong> — entender qué hay que construir y probar.</li>
        <li><strong>Diseño de casos de prueba</strong> — escribir pasos, entradas y resultados esperados.</li>
        <li><strong>Ejecución</strong> — ejecutar los casos de prueba sobre la build.</li>
        <li><strong>Registro de defectos</strong> — anotar cualquier desviación del comportamiento esperado.</li>
        <li><strong>Reprueba / regresión</strong> — confirmar las correcciones y verificar que nada más se haya roto.</li>
      </ol>` },
    { h: "Casos de estudio", body: `
      <p><strong>Pruebas de interfaz de un videojuego:</strong> un tester recorre manualmente menús, elementos del HUD y asignaciones de controles en distintas resoluciones y dispositivos de entrada — el tipo de juicio subjetivo de "esto se siente bien" que es difícil de automatizar.</p>
      <p><strong>Pruebas de un sistema de gestión hospitalaria:</strong> un tester recorre de principio a fin los flujos de registro de pacientes, programación de citas y facturación, comprobando que los datos ingresados por un recepcionista lleguen correctamente a las pantallas del médico y de facturación — validando secuencias de uso del mundo real, no solo funciones aisladas.</p>` },
    { h: "Mitos vs. realidad", body: `
      <p><strong>Mito:</strong> las pruebas manuales son obsoletas ahora que existe la automatización. <strong>Realidad:</strong> la automatización no puede evaluar la UX subjetiva, no puede manejar cada caso límite de forma rentable, y probar exhaustivamente cada camino es imposible — los testers manuales cubren exactamente esa brecha.</p>
      <p><strong>Mito:</strong> las pruebas manuales son un trabajo de bajo nivel de "hacer clic por ahí". <strong>Realidad:</strong> requieren un análisis profundo de requisitos, un diseño de pruebas estructurado y agudas habilidades de investigación de defectos.</p>` },
    { h: "Desafíos", body: `
      <ul>
        <li>Consumen mucho tiempo</li>
        <li>Repetitividad</li>
        <li>Error humano</li>
        <li>Problemas de escalabilidad</li>
        <li>Gestión de datos de prueba</li>
        <li>Configuración del entorno</li>
        <li>Dependencia de recursos</li>
      </ul>` },
    { h: "Pruebas Manuales vs. Pruebas de Automatización", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Aspecto</th><th>Pruebas Manuales</th><th>Pruebas de Automatización</th></tr></thead>
        <tbody>
          <tr><td>Velocidad</td><td>Más lenta, al ritmo humano</td><td>Rápida, repetible a gran escala</td></tr>
          <tr><td>Costo de configuración</td><td>Bajo — no se necesita scripting</td><td>Mayor — los scripts deben construirse y mantenerse</td></tr>
          <tr><td>Ideal para</td><td>Exploración, UX, interfaces de corta duración</td><td>Regresión repetitiva, suites de prueba grandes</td></tr>
          <tr><td>Juicio humano</td><td>Sí</td><td>No</td></tr>
          <tr><td>Habilidad requerida</td><td>Conocimiento del dominio y de pruebas</td><td>Programación más conocimiento de pruebas</td></tr>
        </tbody>
      </table></div>` },
    { h: "Herramientas comunes (a modo de contexto)", body: `
      <p>Herramientas que se mencionan habitualmente en el trabajo de pruebas manuales y de automatización: <strong>Selenium</strong>, <strong>QTP/UFT</strong>, <strong>JMeter</strong>, <strong>LoadRunner</strong>, <strong>TestLink</strong>, <strong>Quality Center (ALM)</strong>. Este módulo trata sobre la disciplina manual, no sobre el manejo práctico de herramientas.</p>` },
    { h: "Ventajas", body: `
      <ul>
        <li>Perspectiva humana</li>
        <li>Flexibilidad</li>
        <li>No requiere programación</li>
        <li>Eficaces para proyectos pequeños</li>
        <li>Fomentan las pruebas exploratorias</li>
      </ul>` },
    { h: "Desventajas", body: `
      <ul>
        <li>Consumen mucho tiempo</li>
        <li>Propensas al error humano</li>
        <li>Cobertura limitada</li>
        <li>No escalables para aplicaciones grandes/complejas</li>
      </ul>` },
    { h: "Severidad y Prioridad de Defectos y Cómo Escribir un Gran Reporte de Errores", body: `
      <p><strong>Severidad vs. Prioridad</strong> son los dos ejes en los que se juzga a todo defecto, y confundirlos es un error común de principiante:</p>
      <ul>
        <li><strong>Severidad</strong> — el impacto técnico en el sistema (¿colapsa la app, corrompe datos, o solo desalinea un botón?). La establece el tester según el comportamiento observado.</li>
        <li><strong>Prioridad</strong> — con qué urgencia hay que corregirlo, desde una perspectiva de negocio (un error tipográfico de baja severidad en la página de inicio puede ser de alta prioridad justo antes de un gran lanzamiento). Normalmente se establece en colaboración con el equipo de producto.</li>
      </ul>
      <p>Son independientes: un fallo de alta severidad en un panel de administración poco usado podría tener baja prioridad; un error cosmético de baja severidad pero muy visible en la página de pago podría tener alta prioridad.</p>
      <p><strong>Un reporte de error que se corrige rápido incluye:</strong></p>
      <ul>
        <li><strong>Resumen claro</strong> — una línea que describe el problema, no la investigación.</li>
        <li><strong>Pasos para reproducir</strong> — numerados, exactos, mínimos (elimina todo lo que no sea necesario para provocar el error).</li>
        <li><strong>Resultado esperado vs. real</strong> — indicado explícitamente, no implícito.</li>
        <li><strong>Entorno</strong> — navegador/SO/dispositivo/versión de build/entorno (staging vs. producción).</li>
        <li><strong>Severidad y prioridad</strong> — tu evaluación, incluso si producto la ajusta después.</li>
        <li><strong>Evidencia</strong> — captura de pantalla, grabación de pantalla o fragmento de log; una imagen termina con la mayoría de los argumentos de "no puedo reproducirlo" antes de que empiecen.</li>
      </ul>
      <p>Un reporte sin pasos de reproducción es el motivo individual más común por el que un error se devuelve al reportero en lugar de corregirse.</p>` }
  ]
},
{
  id: "test-techniques",
  num: 2,
  title: "Técnicas de Pruebas de Software y Diseño de Casos de Prueba",
  summary: "Técnicas estructuradas — límites, particiones, tablas de decisión, estados — para lograr una alta cobertura con menos casos de prueba.",
  takeaway: "Dado que las pruebas exhaustivas son imposibles, las técnicas estructuradas permiten a los testers lograr una alta cobertura con el mínimo de casos de prueba, enfocándose en las áreas propensas a errores: límites, particiones, combinaciones y estados.",
  lessons: [
    { h: "Los 7 principios de las pruebas de software", body: `
      <ol>
        <li><strong>Las pruebas muestran la presencia de defectos</strong> — las pruebas pueden demostrar que existen defectos, nunca que no existe ninguno.</li>
        <li><strong>Las pruebas exhaustivas son imposibles</strong> — probar cada combinación de entradas/caminos no es factible salvo en casos triviales.</li>
        <li><strong>Probar temprano ahorra tiempo y dinero</strong> — cuanto antes se encuentra un defecto, más barato resulta corregirlo.</li>
        <li><strong>Agrupamiento de defectos</strong> — una pequeña cantidad de módulos suele contener la mayoría de los defectos.</li>
        <li><strong>Paradoja del pesticida</strong> — ejecutar las mismas pruebas repetidamente deja de encontrar errores nuevos; las pruebas deben evolucionar.</li>
        <li><strong>Las pruebas dependen del contexto</strong> — cómo se prueba una app bancaria difiere de cómo se prueba un juego.</li>
        <li><strong>Falacia de ausencia de errores</strong> — un producto sin errores que no satisface las necesidades del usuario sigue siendo un fracaso.</li>
      </ol>` },
    { h: "Análisis de Valores Límite (AVL)", body: `
      <p>Los defectos se agrupan en los bordes de los rangos de entrada, por lo que el AVL prueba valores en el mínimo, el máximo y justo dentro/fuera de cada límite.</p>
      <p class="worked-example"><strong>Ejemplo resuelto:</strong> para un rango de entrada válido de <strong>1–10</strong>, el AVL prueba los valores límite <strong>0, 1, 2, 9, 10, 11</strong>.</p>` },
    { h: "Partición en Clases de Equivalencia (PCE)", body: `
      <p>Divide las entradas en clases válidas e inválidas, y luego prueba solo un valor representativo por clase — porque si un valor de una clase falla o pasa, se asume que el resto de la clase se comporta de la misma manera.</p>
      <p class="worked-example"><strong>Ejemplo resuelto:</strong> los rangos válidos 1–10 y 20–30 producen cinco clases: <code>&lt;1</code> (inválida), <code>1–10</code> (válida), <code>11–19</code> (inválida), <code>20–30</code> (válida), <code>&gt;30</code> (inválida). Valores de prueba de ejemplo: <strong>-2, 3, 15, 25, 45</strong>.</p>` },
    { h: "Pruebas de Tabla de Decisión", body: `
      <p>Mapea combinaciones de entradas a salidas en una tabla de causa-efecto — útil cuando el comportamiento de un sistema depende de combinaciones de condiciones.</p>
      <p class="worked-example"><strong>Ejemplo resuelto:</strong> un botón "Enviar" se habilita solo cuando todos los campos del formulario están completos.</p>
      <p><strong>Pasos:</strong></p>
      <ol>
        <li>Listar las entradas (condiciones) en filas.</li>
        <li>Enumerar las combinaciones de reglas en columnas.</li>
        <li>Completar las combinaciones.</li>
        <li>Registrar el resultado esperado para cada combinación.</li>
      </ol>` },
    { h: "Pruebas de Transición de Estados", body: `
      <p>Modela cómo una secuencia de entradas mueve un sistema entre estados definidos, de modo que se puedan probar tanto las transiciones como los propios estados.</p>
      <p class="worked-example"><strong>Ejemplo resuelto:</strong> un sistema de inicio de sesión con PIN — un PIN correcto en cualquier intento otorga acceso; tres intentos incorrectos seguidos bloquean la cuenta.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Estado</th><th>PIN correcto</th><th>PIN incorrecto</th></tr></thead>
        <tbody>
          <tr><td>Inicio</td><td>Acceso concedido</td><td>1er intento</td></tr>
          <tr><td>1er intento</td><td>Acceso concedido</td><td>2do intento</td></tr>
          <tr><td>2do intento</td><td>Acceso concedido</td><td>3er intento</td></tr>
          <tr><td>3er intento</td><td>Acceso concedido</td><td>Cuenta bloqueada</td></tr>
          <tr><td>Acceso concedido</td><td>–</td><td>–</td></tr>
          <tr><td>Cuenta bloqueada</td><td>–</td><td>–</td></tr>
        </tbody>
      </table></div>` },
    { h: "Adivinación de Errores", body: `
      <p>Usa la experiencia, la intuición y los datos históricos de defectos de un tester para anticipar áreas problemáticas probables. No tiene pasos formales — se basa por completo en testers hábiles y experimentados que ya han visto dónde suelen surgir los problemas.</p>` },
    { h: "Ventajas y limitaciones", body: `
      <p><strong>Ventajas:</strong> mejor cobertura, apunta a las áreas de alto riesgo, reduce la redundancia, detecta problemas temprano, aumenta la confianza.</p>
      <p><strong>Limitaciones:</strong> ninguna técnica garantiza la detección total de defectos, los resultados dependen de la habilidad del tester, puede pasar por alto problemas de integración o usabilidad, y algunas técnicas tienen soporte de automatización limitado.</p>` },
    { h: "Cómo elegir la técnica adecuada", body: `
      <p>Alinea la técnica con los objetivos del proyecto, evalúa el riesgo y ajústala al modelo de desarrollo — por ejemplo, favoreciendo enfoques compatibles con ágil en sistemas iterativos. Equilibra las restricciones de tiempo, presupuesto y habilidades. La mejor práctica es <strong>combinar varias técnicas</strong> en lugar de depender de una sola.</p>` },
    { h: "Pruebas por Pares (Pairwise) y Pruebas de Casos de Uso", body: `
      <p>Las <strong>pruebas por pares (combinatorias)</strong> abordan un problema que la Partición en Clases de Equivalencia y el AVL no resuelven por sí solos: cuando una funcionalidad tiene muchos parámetros de entrada independientes, probar cada combinación crece rápidamente (5 parámetros con 4 valores cada uno = 1.024 combinaciones). Las pruebas por pares se basan en la observación de que la mayoría de los defectos del mundo real se disparan por una interacción entre solo <strong>dos</strong> parámetros, no cinco a la vez — así que un subconjunto bien elegido de casos de prueba que cubra cada <em>par</em> posible de valores de parámetros detecta la gran mayoría de los errores de interacción a una fracción del costo.</p>
      <p><em>Ejemplo resuelto:</em> un formulario con Navegador (Chrome/Firefox/Safari), SO (Windows/Mac/Linux) e Idioma (EN/ES) tiene 18 combinaciones completas posibles — las pruebas por pares reducen esto a alrededor de 9 casos de prueba, ejercitando igualmente cada par Navegador×SO, Navegador×Idioma y SO×Idioma al menos una vez. Las <strong>Pruebas de Matriz Ortogonal</strong> son el método estadístico subyacente que suele usarse para generar estos conjuntos reducidos.</p>
      <p>Las <strong>Pruebas de Casos de Uso</strong> derivan casos de prueba directamente de casos de uso documentados — las interacciones paso a paso entre un actor (usuario o sistema externo) y el sistema bajo prueba, incluyendo el escenario de éxito principal y sus flujos alternativos/de excepción. Es especialmente eficaz para validar que un flujo de trabajo se comporta correctamente de principio a fin desde la perspectiva del usuario, complementando técnicas más centradas en la entrada como la PCE y el AVL.</p>` }
  ]
},
{
  id: "testing-types",
  num: 3,
  title: "Tipos de Pruebas de Software — Catálogo de Referencia",
  summary: "El panorama de los tipos de pruebas, y un top 20 seleccionado para conocer primero.",
  takeaway: "Un “tipo” de prueba es una clasificación con su propio objetivo, estrategia y entregables — por ejemplo, las Pruebas de Accesibilidad validan que una app sea utilizable por personas con discapacidades. Entender el panorama ayuda a los profesionales de QA a elegir la combinación correcta para lograr una cobertura completa.",
  lessons: [
    { h: "¿Qué es un tipo de Prueba de Software?", body: `
      <p>Un tipo de prueba clasifica una actividad de prueba según lo que está verificando (funcionalidad, rendimiento, seguridad, usabilidad...) y quién la realiza normalmente. Conocer el catálogo te ayuda a reconocer la herramienta adecuada para un riesgo determinado, en lugar de recurrir siempre al mismo puñado de pruebas.</p>` },
    { h: "Los 20 tipos de pruebas principales que todo QA debería conocer", body: `
      <p>Una introducción ligera — el catálogo completo de más de 105 términos vive en el <a href="#/glossary">Glosario</a>.</p>
      <ul class="chip-list">
        <li>Pruebas de aceptación</li><li>Pruebas de accesibilidad</li><li>Pruebas ágiles</li><li>Pruebas alfa</li>
        <li>Pruebas beta</li><li>Pruebas de API</li><li>Pruebas de caja negra</li><li>Pruebas de caja blanca</li>
        <li>Pruebas de caja gris</li><li>Pruebas exploratorias</li><li>Pruebas funcionales</li><li>Pruebas no funcionales</li>
        <li>Pruebas de carga</li><li>Pruebas de rendimiento</li><li>Pruebas de regresión</li><li>Pruebas de cordura</li>
        <li>Pruebas de humo</li><li>Pruebas de seguridad</li><li>Pruebas de estrés</li><li>Pruebas de usabilidad</li>
      </ul>` },
    { h: "Categorías", body: `
      <p>El Glosario usa esta taxonomía para agrupar y filtrar los tipos de pruebas:</p>
      <ul>
        <li><strong>Funcional</strong> — verifica qué hace el sistema frente a los requisitos (Pruebas de aceptación, de sistema, de integración...).</li>
        <li><strong>No funcional</strong> — verifica qué tan bien lo hace (Pruebas de rendimiento, de carga, de usabilidad...).</li>
        <li><strong>Estructural (caja blanca)</strong> — verifica los caminos y la lógica internos del código (Pruebas unitarias, de ramas, de rutas...).</li>
        <li><strong>Relacionada con cambios</strong> — verifica que los cambios no hayan roto nada (Pruebas de regresión, de reprueba, de humo...).</li>
        <li><strong>Especializada</strong> — preocupaciones puntuales como seguridad, compatibilidad, localización (Pruebas de penetración, de compatibilidad...).</li>
        <li><strong>General</strong> — tipos orientados al proceso o a la metodología que no encajan claramente en otra categoría (Pruebas ágiles, pruebas estáticas...).</li>
      </ul>` },
    { h: "Las Pruebas No Funcionales en la Práctica", body: `
      <p>Las pruebas no funcionales preguntan "qué tan bien" se desempeña un sistema en lugar de "hace lo correcto" — y cada subtipo necesita su propio enfoque de planificación:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Tipo</th><th>Qué se mide</th><th>Enfoque típico</th></tr></thead>
        <tbody>
          <tr><td><strong>Rendimiento</strong></td><td>Tiempo de respuesta, rendimiento (throughput), uso de recursos bajo la carga esperada</td><td>Establecer una línea base primero, luego comparar contra SLAs/umbrales definidos — ver Pruebas de Carga/Estrés/Escalabilidad en el Glosario.</td></tr>
          <tr><td><strong>Usabilidad</strong></td><td>Facilidad de aprendizaje, eficiencia, tasa de error, satisfacción subjetiva</td><td>Sesiones basadas en tareas con usuarios reales o representativos; los protocolos de "pensar en voz alta" sacan a la luz confusión que las palabras por sí solas no revelan.</td></tr>
          <tr><td><strong>Compatibilidad</strong></td><td>Comportamiento correcto en distintos navegadores, dispositivos, versiones de SO, tamaños de pantalla</td><td>Priorizar según analítica real de usuarios (qué navegadores/dispositivos tienen tus usuarios reales) en lugar de probar todo por igual.</td></tr>
          <tr><td><strong>Localización</strong></td><td>Traducción correcta, formatos de fecha/moneda/número, que la expansión de texto no rompa el diseño</td><td>Probar con pseudo-localización desde el principio (cadenas artificialmente alargadas/acentuadas) para detectar roturas de diseño antes de que existan traducciones reales.</td></tr>
        </tbody>
      </table></div>
      <p>El hilo común: las pruebas no funcionales necesitan un umbral explícito y acordado antes de empezar ("la página carga en menos de 2s con 500 usuarios concurrentes") — sin uno, "qué tan bien" no tiene una línea de aprobado/reprobado, solo opiniones.</p>` }
  ]
},
{
  id: "adhoc-testing",
  num: 4,
  title: "Pruebas Ad Hoc",
  summary: "Pruebas no planificadas y no documentadas que intentan romper el sistema por intuición y creatividad.",
  takeaway: "Las pruebas ad hoc son pruebas no planificadas y no documentadas en las que el tester intenta “romper” el sistema usando intuición y creatividad — más valiosas cuando el tiempo es escaso o como complemento de las pruebas estructuradas.",
  lessons: [
    { h: "¿Qué son las Pruebas Ad Hoc?", body: `
      <p>Pruebas informales y sin guion, sin casos de prueba preparados de antemano. Es un enfoque de caja negra: el tester no tiene un conocimiento especial del código, solo el objetivo de encontrar qué se rompe.</p>` },
    { h: "Cuándo realizarlas", body: `
      <ul>
        <li>Al principio del desarrollo, antes de que existan casos de prueba formales.</li>
        <li>Antes de que comiencen las pruebas oficiales, como una comprobación rápida de lo básico.</li>
        <li>Después de las pruebas formales, para detectar lo que las pruebas estructuradas pasaron por alto.</li>
        <li>Cuando el tiempo es escaso.</li>
        <li>Para explorar una funcionalidad en profundidad.</li>
        <li>Para comprobaciones de usabilidad.</li>
        <li>Durante las pruebas beta.</li>
      </ul>` },
    { h: "Tipos de Pruebas Ad Hoc", body: `
      <ul>
        <li><strong>Buddy Testing (pruebas en pareja desarrollador-tester)</strong> — un desarrollador y un tester trabajan juntos en el mismo módulo.</li>
        <li><strong>Pair Testing (pruebas en pareja)</strong> — dos testers comparten una sesión, uno conduce y el otro observa.</li>
        <li><strong>Monkey Testing (pruebas de mono)</strong> — entradas aleatorias y no estructuradas lanzadas a la app para ver si se rompe.</li>
      </ul>` },
    { h: "Ventajas", body: `
      <ul>
        <li>Encuentra defectos en casos límite que las pruebas estructuradas pasan por alto.</li>
        <li>No requiere sobrecarga de documentación.</li>
        <li>Rápidas.</li>
        <li>Fomentan el pensamiento creativo.</li>
      </ul>` },
    { h: "Desventajas", body: `
      <ul>
        <li>Difíciles de reproducir o repetir.</li>
        <li>Dependen en gran medida de la habilidad del tester.</li>
        <li>Trazabilidad y métricas de cobertura deficientes.</li>
        <li>No son adecuadas como único método de prueba.</li>
      </ul>` },
    { h: "Mejores prácticas", body: `
      <ol>
        <li>Tener buen conocimiento del negocio.</li>
        <li>Apuntar a los módulos clave/de alto riesgo.</li>
        <li>Registrar cada defecto encontrado.</li>
        <li>Trabajar en pareja con otro tester para obtener una perspectiva fresca.</li>
      </ol>` },
    { h: "Integrar las Pruebas Ad Hoc en los Sprints Ágiles", body: `
      <p>Las pruebas ad hoc encajan de forma natural en el ritmo de un sprint sin necesitar su propia ceremonia dedicada:</p>
      <ul>
        <li><strong>Justo después de que una funcionalidad esté lista para desarrollo</strong> — antes incluso de que se escriban los casos de prueba formales, una pasada rápida sin guion suele sacar a la luz las roturas evidentes de la forma más rápida y barata, antes de que las pruebas más estructuradas inviertan tiempo en ello.</li>
        <li><strong>Durante la preparación de la revisión del sprint</strong> — una sesión ad hoc breve el día antes de la demo detecta problemas vergonzosos antes de que salgan a la luz en vivo frente a los interesados.</li>
        <li><strong>Como "bug bash"</strong> — una sesión acotada en el tiempo (30-60 minutos) donde todo el equipo, no solo QA, prueba ad hoc una build juntos; esto también difunde el conocimiento del producto y encuentra errores que los hábitos de ningún tester individual habrían detectado.</li>
        <li><strong>Acotadas en el tiempo, no abiertas</strong> — incluso las pruebas informales se benefician de un límite de tiempo declarado (por ejemplo, 20 minutos en el nuevo flujo de pago) para que se mantengan enfocadas en lugar de dispersarse.</li>
      </ul>
      <p>El ajuste principal para los equipos ágiles: registrar los hallazgos de inmediato en el tracker del sprint, aunque sea brevemente, en lugar de confiar en la memoria — las sesiones ad hoc avanzan rápido y los detalles se desvanecen pronto una vez que termina la sesión.</p>` }
  ]
},
{
  id: "exploratory-testing",
  num: 5,
  title: "Pruebas Exploratorias",
  summary: "Diseño y ejecución de pruebas simultáneos — pruebas ad hoc con un propósito.",
  takeaway: "Las pruebas exploratorias son el diseño y la ejecución simultáneos de pruebas — una actividad “de pensamiento” que enfatiza la investigación y el aprendizaje, ampliamente utilizada en Agile. Son pruebas ad hoc con un propósito: estructuradas y rigurosas, no aleatorias.",
  lessons: [
    { h: "¿Qué son las Pruebas Exploratorias?", body: `
      <p>Los testers diseñan y ejecutan pruebas sobre la marcha, anotando ideas antes de la ejecución. Enfatiza la libertad y la responsabilidad personal del tester individual para dirigir su propia investigación.</p>
      <p>ISTQB lo define como una técnica <strong>basada en la experiencia</strong> en la que las pruebas se diseñan, ejecutan y evalúan <em>al mismo tiempo</em> mientras el tester aprende sobre el objeto de prueba, usando lo que revela cada prueba para diseñar otras nuevas y mejores.</p>
      <p>Las pruebas guionizadas ejecutan análisis → diseño → implementación → ejecución → evaluación como pasos separados. Las pruebas exploratorias los comprimen en un bucle de retroalimentación continuo:</p>
      <pre><code>Aprender sobre el producto → elegir algo interesante/arriesgado
→ diseñar una prueba → ejecutarla → observar → interpretar
→ aprender algo nuevo → diseñar la siguiente prueba ↺</code></pre>
      <p>La propiedad clave es la <strong>adaptación</strong>: cuando un resultado es inesperado, el descubrimiento cambia inmediatamente la siguiente prueba, en lugar de seguir un guion fijo a ciegas.</p>` },
    { h: "Exploratorias vs. ad hoc, error guessing y listas de comprobación", body: `
      <p><strong>Exploratorio ≠ hacer clic al azar.</strong> Las pruebas ad hoc («voy a hacer clic por ahí a ver qué pasa») no tienen estructura ni objetivo, así que son difíciles de medir, repetir, explicar o traspasar. Las pruebas exploratorias mantienen la libertad pero añaden una misión, un alcance definido, un timebox, un foco en riesgos, notas, preguntas registradas y seguimiento planificado.</p>
      <p><strong>Pruebas exploratorias = libertad + propósito + investigación + disciplina.</strong></p>
      <p>El <strong>error guessing</strong> (adivinación de errores) <em>predice</em> problemas probables por experiencia («esta app ya falló con nombres largos, así que probaré nombres largos»). Las <strong>pruebas exploratorias</strong> <em>investigan y se adaptan</em>: introducir un nombre largo → notar que se trunca → comprobar si la base de datos guarda el valor completo → recargar → leer el registro por la API → probar otro campo → comparar UI y API. El error guessing suele ser una herramienta dentro de una sesión exploratoria.</p>
      <p>Las <strong>pruebas basadas en listas de comprobación</strong> parten de una lista predefinida. La exploración puede empezar con la misma lista pero ampliarla sobre la marcha:</p>
      <pre><code>[ ] Login inválido
     ↓ se encuentran mensajes de error distintos
     ↓ explorar la coherencia de los mensajes
     ↓ se encuentra posible enumeración de cuentas
     ↓ explorar el comportamiento según el estado del usuario</code></pre>
      <p>ISTQB CTFL clasifica las tres (listas de comprobación, error guessing y pruebas exploratorias) como técnicas <strong>basadas en la experiencia</strong>.</p>` },
    { h: "Pruebas con guion vs. Pruebas exploratorias", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Pruebas con guion</th><th>Pruebas exploratorias</th></tr></thead>
        <tbody>
          <tr><td>Dirigidas por los requisitos</td><td>Dirigidas por los requisitos y por la exploración durante las pruebas</td></tr>
          <tr><td>Los casos de prueba se determinan con mucha antelación</td><td>Los casos de prueba se determinan durante las pruebas</td></tr>
          <tr><td>Confirman las pruebas frente a los requisitos</td><td>Investigan el sistema/la aplicación</td></tr>
          <tr><td>Enfatizan la predicción y la toma de decisiones</td><td>Enfatizan la adaptabilidad y el aprendizaje</td></tr>
          <tr><td>Confirmatorias</td><td>Investigativas</td></tr>
          <tr><td>Se trata de controlar las pruebas</td><td>Se trata de mejorar el diseño de las pruebas</td></tr>
          <tr><td>Como leer un discurso de un borrador</td><td>Como tener una conversación espontánea</td></tr>
          <tr><td>El guion tiene el control</td><td>La mente del tester tiene el control</td></tr>
        <tr><td>Fortaleza principal: repetibilidad</td><td>Fortaleza principal: descubrimiento</td></tr>
          <tr><td>Ideal para requisitos conocidos y regresión</td><td>Ideal para riesgos desconocidos y comportamiento inesperado</td></tr>
          <tr><td>Se documenta como casos de prueba detallados</td><td>Se documenta como charters, notas e informes de sesión</td></tr>
          <tr><td>Muy adecuado para automatizar</td><td>El juicio humano es central; los hallazgos se automatizan después</td></tr>
        </tbody>
      </table></div>
      <p>Ninguno sustituye al otro. Una estrategia de QA madura combina <strong>pruebas guionizadas</strong> para el comportamiento conocido y repetible, <strong>regresión automatizada</strong> para comprobaciones estables y <strong>pruebas exploratorias</strong> para investigar y descubrir.</p>` },
    { h: "El proceso SBTM (Gestión de Pruebas Basada en Sesiones)", body: `
      <ol>
        <li><strong>Crear una taxonomía de errores</strong> — una clasificación de los tipos de errores que se espera encontrar.</li>
        <li><strong>Definir un chárter de prueba</strong> — una declaración de misión para la sesión.</li>
        <li><strong>Acotar la sesión en el tiempo</strong> — fijar una duración determinada y respetarla.</li>
        <li><strong>Revisar los resultados</strong> — repasar lo que se encontró.</li>
        <li><strong>Debriefing</strong> — comentar la sesión con el equipo.</li>
      </ol>
      <p>El programa ISTQB Advanced Agile Tester describe las sesiones como acotadas en el tiempo (normalmente <strong>60–120 minutos</strong>), guiadas por un charter y documentadas con notas, capturas, grabaciones, cobertura, observaciones y anomalías.</p>` },
    { h: "Cómo escribir un charter de prueba", body: `
      <p>Un <strong>charter de prueba</strong> es una declaración de objetivos de prueba y, posiblemente, de ideas sobre cómo probar, que guía una sesión. Da dirección sin prescribir cada clic. Un buen charter responde: qué probamos, por qué, qué área o riesgo, qué queremos aprender y qué restricciones hay.</p>
      <ul>
        <li><strong>Malo:</strong> «Probar el login».</li>
        <li><strong>Mejor:</strong> «Explorar el flujo de login en busca de fallos de autenticación, entradas inusuales, gestión de sesión y comportamiento de los mensajes de error».</li>
        <li><strong>Más enfocado:</strong> «Explorar el login con credenciales inválidas, límite e inusuales, prestando especial atención al bloqueo, la gestión de errores y la sesión».</li>
      </ul>
      <p>Un charter da <strong>foco</strong>, no un guion. Demasiado vago y acabas haciendo clic al azar; demasiado restrictivo y no puedes seguir los descubrimientos interesantes.</p>
      <pre><code>Charter:        Explorar [función/área] para descubrir [riesgo/comportamiento].
Misión:         Entender si [objetivo].
Foco:           [área 1] · [área 2] · [área 3]
Riesgos:        [riesgo 1] · [riesgo 2]
Ideas:          [idea] · [idea] · [idea]
Fuera de alcance: [área]
Entorno:        Navegador · SO · Build · Dispositivo
Timebox:        [XX minutos]
Tester / Fecha</code></pre>
      <p><strong>Biblioteca de charters de ejemplo:</strong></p>
      <ul>
        <li><strong>Registro:</strong> explorar validación, cuentas duplicadas, datos límite y gestión de errores.</li>
        <li><strong>API REST:</strong> explorar validación, autenticación, autorización, peticiones mal formadas, datos límite, peticiones duplicadas y gestión de errores.</li>
        <li><strong>Multiinquilino:</strong> explorar si los usuarios pueden acceder, buscar, modificar, exportar o inferir datos de otro inquilino.</li>
        <li><strong>Subida de archivos:</strong> explorar tipo, tamaño, nombre, duplicados, interrupción, cancelación y archivos corruptos.</li>
        <li><strong>Búsqueda:</strong> explorar consultas vacías, caracteres especiales, grandes resultados, paginación, filtros, ordenación y cambios concurrentes de datos.</li>
        <li><strong>Pago:</strong> explorar pago fallido, reintento, cancelación, envío duplicado, timeout y red interrumpida.</li>
      </ul>` },
    { h: "Cómo llevar una sesión: preparar, explorar, registrar, debriefing", body: `
      <p><strong>1. Preparar:</strong> entender la funcionalidad, leer los requisitos, identificar riesgos, revisar defectos anteriores, comprobar el build, preparar datos y entorno, y definir el charter y el timebox.</p>
      <p><strong>2. Explorar:</strong> observar, hacer preguntas, formular hipótesis, variar entradas, seguir caminos interesantes, comparar el comportamiento con lo esperado, aplicar heurísticas, registrar evidencias. Cuando algo raro ocurre: <strong>parar → reproducir → aislar → ampliar → comparar</strong>.</p>
      <p><strong>3. Debriefing:</strong> ¿Qué probamos y aprendimos? ¿Qué defectos encontramos? ¿Qué preguntas y riesgos quedan? ¿Qué <em>no</em> se probó? ¿Qué áreas necesitan otra sesión? ¿Qué hallazgos deberían convertirse en pruebas guionizadas o automatizadas?</p>
      <p>El <strong>timeboxing</strong> evita que la exploración crezca sin límite y facilita comunicar el esfuerzo: unos 30 min para una investigación rápida, 60 para explorar una funcionalidad, 90 para una inmersión normal, 120 para una investigación mayor.</p>
      <p><strong>Registra, no confíes en la memoria:</strong> acciones, datos de prueba, observaciones, hipótesis, preguntas, entorno y build, capturas, grabaciones, logs, peticiones/respuestas de API, errores de consola, fallos de red, defectos y áreas cubiertas <em>y no cubiertas</em>.</p>
      <pre><code>10:03 Registro de un usuario normal: correcto.
10:06 Repetido el registro con el mismo email.
10:07 La UI mostró un error genérico.
10:10 La API devolvió 500 en vez del 4xx esperado.
10:12 Hipótesis: el registro duplicado no se gestiona.
10:15 Reproducido en un segundo navegador.
10:18 Reproducido directamente por la API. Confirmado.
10:25 Informe de bug creado.
10:35 La UI acepta una contraseña de 256 caracteres; la API la rechaza.
10:40 Segundo defecto creado.</code></pre>
      <p>Es el bucle de aprendizaje en acción: <strong>observación → hipótesis → nueva prueba → nueva evidencia → nueva hipótesis</strong>.</p>
      <p><strong>Una sesión de 60 minutos, por ejemplo:</strong> 0–5 leer requisitos e identificar riesgos · 5–10 preparar cuenta, datos y charter · 10–20 flujo normal · 20–30 datos inválidos y límite · 30–40 interrupciones y transiciones de estado · 40–50 permisos, concurrencia o integraciones · 50–55 reproducir hallazgos · 55–60 documentar defectos, riesgos, preguntas y seguimiento.</p>` },
    { h: "Pros y contras", body: `
      <p><strong>Pros:</strong> encuentran más errores, fomentan la creatividad, requieren menos documentación previa, se adaptan rápidamente a requisitos cambiantes.</p>
      <p><strong>Contras:</strong> dependen en gran medida de la habilidad del tester, es difícil medir la cobertura, son difíciles de repetir o reproducir exactamente, son menos adecuadas para necesidades estrictas de cumplimiento/auditoría.</p>` },
    { h: "Cuándo usarlas", body: `
      <ul>
        <li>Los requisitos faltan o son ambiguos.</li>
        <li>Iteraciones tempranas de una funcionalidad.</li>
        <li>Aplicaciones críticas que necesitan una investigación profunda.</li>
        <li>Hay testers experimentados disponibles.</li>
      <li>La funcionalidad es nueva, los criterios de aceptación son mínimos o el producto cambia rápido.</li>
        <li>No hay tiempo para crear una suite guionizada completa.</li>
        <li>Estás investigando un defecto sospechado. Pregunta «¿qué más podría estar relacionado?», porque un defecto a menudo revela toda una clase de problemas.</li>
        <li>El comportamiento de integración es incierto, los flujos son complejos o hay casos límite probables.</li>
        </ul>
      <p><strong>Ejemplo de flujo complejo:</strong> en un checkout (<em>Producto → Carrito → Descuento → Dirección → Pago → Confirmación</em>), explora interrupciones y combinaciones: quitar un producto a mitad del proceso, cambiar la cantidad tras un descuento, dejar caducar la sesión, recargar la página de pago, pulsar Atrás, abrir dos pestañas, cambiar la dirección tras calcular el envío, reintentar el pago, cortar la red.</p>` },
    { h: "Pruebas exploratorias en Agile y CI/CD", body: `
      <p>Agile produce cambios frecuentes e información a menudo incompleta, algo que encaja bien con la exploración. El material Agile de ISTQB la sitúa durante la ejecución de la iteración, en revisiones y demos, tras cambios importantes y cuando los criterios de aceptación son vagos. Explora historias nuevas, funcionalidad modificada, puntos de integración, incrementos del sprint y áreas de alto riesgo.</p>
      <pre><code>Commit → Build → Unit tests → API tests → UI smoke tests
→ Deploy test environment → Exploratory testing
→ Defect investigation → Automated regression → Release</code></pre>
      <p>La automatización de CI/CD da <strong>feedback rápido y repetible</strong>; las pruebas exploratorias aportan <strong>investigación humana adaptativa</strong>. La exploración une desarrollo, requisitos, comprobaciones automatizadas y validación centrada en el usuario.</p>` },
    { h: "Heurísticas de Pruebas Exploratorias: SFDPOT e HICCUPPS", body: `
      <p>Las heurísticas dan estructura a las pruebas exploratorias sin convertirlas en un guion — son indicaciones sobre dónde mirar a continuación, no pasos a seguir en orden.</p>
      <p><strong>SFDPOT</strong> ("San Francisco Depot") es un mnemónico de mapeo de cobertura para decidir qué partes de un producto explorar:</p>
      <ul>
        <li><strong>S</strong>tructure (Estructura) — de qué está hecho el producto (código, archivos, dependencias).</li>
        <li><strong>F</strong>unction (Función) — qué hace (funcionalidades, comandos, operaciones).</li>
        <li><strong>D</strong>ata (Datos) — qué procesa (entradas, salidas, formatos, almacenamiento).</li>
        <li><strong>P</strong>latform (Plataforma) — de qué depende (SO, navegador, hardware, red).</li>
        <li><strong>O</strong>perations (Operaciones) — cómo se usa realmente en el mundo real (uso típico y atípico).</li>
        <li><strong>T</strong>ime (Tiempo) — cómo lo afecta el tiempo (timeouts, zonas horarias, concurrencia, secuenciación).</li>
      </ul>
      <p><strong>HICCUPPS</strong> es una heurística de oráculo — una forma de decidir si un comportamiento observado es realmente un error, cuando no hay una especificación explícita contra la cual comprobar:</p>
      <ul>
        <li><strong>H</strong>istory (Historia) — ¿se comporta de forma consistente con cómo se comportaba antes?</li>
        <li><strong>I</strong>mage (Imagen) — ¿coincide con la imagen/reputación que la empresa quiere proyectar?</li>
        <li><strong>C</strong>omparable products (Productos comparables) — ¿cómo manejan esto productos similares?</li>
        <li><strong>C</strong>laims (Afirmaciones) — ¿coincide con lo que afirman la documentación, el marketing o el texto de ayuda?</li>
        <li><strong>U</strong>ser expectations (Expectativas del usuario) — ¿coincide con lo que esperaría un usuario razonable?</li>
        <li><strong>P</strong>roduct (Producto) — ¿es internamente consistente con el resto del producto?</li>
        <li><strong>P</strong>urpose (Propósito) — ¿cumple con el propósito real de la funcionalidad?</li>
        <li><strong>S</strong>tatutes (Estatutos) — ¿cumple con leyes, normativas o estándares?</li>
      </ul>
      <p>Juntas convierten "explorar la app" de una instrucción vaga en un conjunto repetible de lentes que cualquier tester puede adoptar.</p>` },
    { h: "Heurísticas prácticas: ¿y si…?, datos, estado e interrupciones", body: `
      <p>Una heurística es una regla práctica que guía la investigación. Tenlas siempre a mano:</p>
      <ul>
        <li><strong>¿Y si…</strong> el valor está vacío, es enorme o diminuto? ¿El usuario pulsa Atrás, recarga o hace doble clic? ¿Se repite la petición, cae la red, dos usuarios actúan a la vez, caduca la sesión o cambian los datos en otra pestaña?</li>
        <li><strong>Cambia el contexto:</strong> navegadores, dispositivos, tamaños de pantalla, roles y permisos, configuraciones regionales, idiomas, zonas horarias, condiciones de red, estados de cuenta.</li>
        <li><strong>Cambia los datos:</strong> vacío, null, cero, negativo, mín., máx., máx. + 1, muy largo, muy corto, Unicode, espacios, caracteres especiales, duplicados, valores mal formados, tipos inesperados.</li>
        <li><strong>CRUD + permisos:</strong> para Create/Read/Update/Delete, ¿puede hacerlo este usuario y qué pasa sin permiso? Luego prueba combinaciones y transiciones inválidas.</li>
        <li><strong>Límites:</strong> mín. − 1, mín., mín. + 1, máx. − 1, máx., máx. + 1.</li>
        <li><strong>Estado:</strong> ¿qué estados puede alcanzar este objeto? Para <code>Draft → Submitted → Approved → Completed</code>, prueba movimientos inválidos como <code>Completed → Draft</code>, <code>Approved → Submitted</code> o actualizar un elemento borrado.</li>
        <li><strong>Concurrencia:</strong> dos usuarios en un registro, dos navegadores, dos pestañas, peticiones duplicadas, actualización/borrado simultáneos, login simultáneo, llamadas API concurrentes.</li>
        <li><strong>Interrupción:</strong> recargar, Atrás, Adelante, cerrar y reabrir la pestaña, desconectar y reconectar la red, timeouts, caducidad de sesión.</li>
        <li><strong>Coherencia:</strong> UI vs. API, navegador A vs. B, usuario A vs. B, versión actual vs. anterior.</li>
      </ul>
      <p>Mientras tanto, sigue haciéndote las preguntas de un investigador: <em>¿Qué ocurrió? ¿Qué esperaba? ¿La diferencia es relevante? ¿Por qué podría pasar? ¿Qué lo explicaría? ¿Qué prueba distinguiría entre explicaciones? ¿Qué más podría verse afectado?</em></p>` },
    { h: "Foco en riesgos y ejemplos resueltos", body: `
      <p>Prioriza con <strong>Riesgo = Probabilidad × Impacto</strong>. En lugar de recorrer UI de bajo riesgo, dedica la sesión a donde un fallo importa más: autenticación, autorización, pagos, datos personales, aislamiento de inquilinos, permisos, borrado de datos, concurrencia, integraciones y flujos de negocio críticos.</p>
      <p><strong>Login.</strong> <em>Charter: explorar la autenticación con entradas inválidas, límite, inesperadas y repetidas, con foco en seguridad, gestión de errores y sesión.</em> Ideas: credenciales válidas/inválidas/vacías; longitudes mín./máx./máx. + 1; espacios, Unicode, caracteres especiales; login y luego logout, recargar, Atrás, cerrar el navegador o una segunda pestaña; fallos repetidos y bloqueo; mensajes de error coherentes; sesión invalidada tras logout; páginas protegidas tras logout; la misma cuenta en dos navegadores.</p>
      <p><strong>API REST.</strong> La exploración no es solo UI. Prueba campos ausentes, extra o de tipo incorrecto, null, cadenas vacías, JSON mal formado, autenticación inválida o caducada, método o content type incorrecto, peticiones duplicadas y repetidas, payloads grandes o vacíos, IDs inválidos, inexistentes o borrados, peticiones concurrentes, límites de paginación y combinaciones de orden/filtro. Observa estado, cuerpo, cabeceras, esquema, estructura de error, tiempos, persistencia, autorización y efectos secundarios (ver Módulo 6).</p>
      <p><strong>Multiinquilino.</strong> <em>Charter: explorar el aislamiento entre inquilinos cuando usuarios de distintos inquilinos acceden, crean, actualizan, buscan y borran datos de proyectos a la vez.</em> Pon al usuario A en el inquilino A y al B en el B, crea proyectos similares en ambos y prueba buscar datos del otro, URLs directas, IDs cambiados, páginas en caché, cambios de logout/login, exportaciones, notificaciones, índices de búsqueda, adjuntos y tareas en segundo plano. Propiedad esperada: nadie ve ni cambia datos de otro inquilino salvo que el producto lo permita explícitamente.</p>` },
    { h: "Más allá de lo funcional: seguridad, usabilidad, compatibilidad y rendimiento", body: `
      <p><strong>Seguridad:</strong> la exploración puede descubrir problemas de seguridad, pero <em>no sustituye</em> a pruebas de seguridad dedicadas y autorizadas. Preguntas útiles: ¿Se puede saltar la autorización? ¿Puedo usar el ID de otro usuario? ¿Se accede directamente a funciones ocultas? ¿Qué pasa tras el logout o la caducidad de sesión? ¿Los errores revelan información sensible? ¿Se pueden reenviar peticiones? ¿Puedo manipular valores del lado cliente? ¿Un usuario normal llega a funciones de administración?</p>
      <p><strong>Usabilidad:</strong> busca navegación confusa, controles incoherentes, mensajes o terminología poco claros, mala recuperación de errores, funciones inaccesibles y acciones destructivas fáciles de disparar. Interpreta personas: usuario primerizo, experto, impaciente, propenso a errores, alguien con poco conocimiento del dominio.</p>
      <p><strong>Compatibilidad:</strong> Chrome, Edge, Firefox, Safari, navegadores móviles, versiones de SO, tamaños de pantalla, niveles de zoom, alta densidad (high-DPI). Vigila roturas de diseño, controles no admitidos, comportamiento específico del navegador, errores de JavaScript, diferencias de renderizado y tiempos, y problemas de subida de archivos y teclado.</p>
      <p><strong>Señales de rendimiento:</strong> la exploración no sustituye a las pruebas de rendimiento, pero puede detectar problemas: una página que de repente va lenta, latencia que crece al repetir, degradación de la UI con muchos datos, memoria en aumento, problemas de recursos con varias pestañas. Da seguimiento con una prueba controlada en JMeter o k6.</p>` },
    { h: "Del descubrimiento a la automatización", body: `
      <p>La exploración depende de la observación y el razonamiento humanos, pero alimenta constantemente la automatización:</p>
      <pre><code>Explorar → descubrir comportamiento importante → entender el
comportamiento esperado estable → crear prueba de regresión → automatizar si compensa</code></pre>
      <p><em>Ejemplo:</em> la exploración revela que hacer doble clic en <strong>Guardar</strong> crea dos contactos. Confírmalo manualmente → registra el defecto → el desarrollador lo corrige → añade una comprobación de regresión en Playwright como <code>expect(contactCount).toBe(1)</code>. Ahora la automatización protege el comportamiento que descubrió la exploración.</p>
      <p><strong>Una rutina con Playwright:</strong> desplegar el build → ejecutar smoke tests → elegir un charter → explorar manualmente con DevTools y logs de red → reproducir lo interesante → decidir si es un defecto → registrar el bug → automatizarlo si es importante y estable.</p>
      <p><strong>Herramientas de apoyo:</strong> gestión de pruebas (Jira, Azure DevOps, TestRail, Zephyr, Xray) · notas (Markdown, Notion, OneNote, Google Docs) · evidencias (capturas, grabaciones, DevTools, logs de red/consola) · exploración de API (Postman, Insomnia, curl) · automatización posterior (Playwright, Cypress, Selenium, REST Assured, Newman) · seguimiento de rendimiento (JMeter, k6). Las herramientas no hacen exploratoria una sesión; el enfoque sí.</p>` },
    { h: "Informes, cobertura, métricas y Definition of Done", body: `
      <p><strong>Un bug encontrado explorando debe seguir siendo reproducible.</strong> Título de ejemplo: <em>La API devuelve HTTP 500 al registrar un email ya existente.</em> Incluye precondiciones (existe un usuario con <code>test@example.com</code>), pasos (POST <code>/users</code> con ese email), esperado (una respuesta de error del cliente según el contrato de la API), real (HTTP 500), evidencias (petición, respuesta, marca de tiempo, entorno, logs) y su origen (<em>encontrado en la sesión «Registro: datos duplicados y límite»</em>).</p>
      <p><strong>La cobertura tiene varias dimensiones:</strong> funcionalidad, riesgo, datos, flujo, estado, rol, plataforma e integración. «He probado la pantalla» no es una declaración de cobertura. Deberías poder decir <strong>qué se exploró y qué sigue siendo desconocido</strong>.</p>
      <p><strong>Métricas, con cuidado:</strong> duración de la sesión, charter, áreas cubiertas, riesgos investigados, defectos y preguntas surgidas, sesiones de seguimiento, pruebas de regresión y candidatos a automatización creados, riesgos sin resolver. Evita números de vanidad («500 clics, así que las pruebas fueron buenas»). Pregunta en cambio: <em>¿qué información importante produjo la sesión?</em></p>
      <p><strong>Definition of Done de una sesión:</strong> se abordó el charter; se investigaron los riesgos clave; se registraron observaciones, evidencias y preguntas; se reportaron los defectos; se identificaron las áreas sin probar y el trabajo pendiente. Terminado no significa «todo está probado». Significa <em>que investigamos la misión y podemos explicar qué aprendimos y qué sigue siendo desconocido.</em></p>` },
    { h: "Errores comunes y referencia rápida", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Error</th><th>Mejor</th></tr></thead>
        <tbody>
          <tr><td>Hacer clic al azar sin objetivo</td><td>Escribir un charter</td></tr>
          <tr><td>Sin notas: los hallazgos no se pueden reproducir</td><td>Registrar acciones, observaciones y evidencias</td></tr>
          <tr><td>Probarlo todo por igual</td><td>Priorizar por riesgo</td></tr>
          <tr><td>Tratar la exploración como regresión</td><td>Usarla para investigar lo desconocido y los cambios</td></tr>
          <tr><td>No convertir nunca los hallazgos en pruebas de regresión</td><td>Automatizar o documentar comprobaciones estables y valiosas</td></tr>
          <tr><td>Sin timebox</td><td>Hacer sesiones enfocadas</td></tr>
          <tr><td>Informes de defectos vagos</td><td>Capturar evidencias mientras se explora</td></tr>
          <tr><td>Charter demasiado restrictivo</td><td>Definir la misión, no cada clic</td></tr>
        </tbody>
      </table></div>
      <p>Debilidades como cobertura inconsistente, mala reproducibilidad y dependencia de la habilidad se reducen con charters, timeboxes, notas, análisis de riesgos, debriefings, captura de evidencias, revisión entre pares, pruebas guionizadas de seguimiento y automatización.</p>
      <p><strong>Truco para el examen:</strong></p>
      <pre><code>SCRIPTED     Design → Execute → Evaluate
EXPLORATORY  Learn ↔ Design ↔ Execute ↔ Evaluate

Exploratory ≠ Random
Exploratory = Mission + Timebox + Investigation
            + Adaptation + Notes + Learning</code></pre>
      <p><strong>Definición en una frase:</strong> las pruebas exploratorias son un enfoque disciplinado y basado en la experiencia en el que el tester aprende sobre el producto, diseña pruebas, las ejecuta, evalúa los resultados y adapta la siguiente prueba según lo descubierto, todo a la vez.</p>
      <p><strong>Para saber más:</strong> <a href="https://istqb-glossary.page/" target="_blank" rel="noopener">ISTQB Glossary</a> · <a href="https://istqb.org/" target="_blank" rel="noopener">ISTQB</a> · <a href="https://martinfowler.com/bliki/ExploratoryTesting.html" target="_blank" rel="noopener">Martin Fowler: Exploratory Testing</a></p>` }
  ]
},
{
  id: "rest-api-testing",
  num: 6,
  title: "Pruebas de API REST",
  summary: "Validar servicios RESTful enviando solicitudes HTTP y comprobando las respuestas — sin necesidad de interfaz de usuario.",
  takeaway: "Las pruebas de API REST validan servicios web RESTful enviando solicitudes HTTP (GET, POST, PUT, DELETE) y comprobando las respuestas — sin necesidad de interfaz de usuario.",
  lessons: [
    { h: "¿Qué es REST?", body: `
      <p><strong>REST</strong> (Representational State Transfer, transferencia de estado representacional) es un estilo arquitectónico para construir servicios web, ampliamente utilizado para la comunicación entre servicios en la nube. Una <strong>API</strong> es un conjunto de instrucciones y comandos de programación que permiten a los programas comunicarse e intercambiar funcionalidad — por ejemplo, una "API de Google" que expone funciones de búsqueda, traducción o calendario.</p>` },
    { h: "Los 4 métodos HTTP principales", body: `
      <ul>
        <li><strong>GET</strong> — recupera datos del servidor a través de una URI; no debería tener efectos secundarios sobre los datos.</li>
        <li><strong>POST</strong> — crea una nueva entidad o envía datos al servidor (por ejemplo, envíos de formularios, subida de archivos).</li>
        <li><strong>PUT</strong> — crea una nueva entidad o actualiza una existente.</li>
        <li><strong>DELETE</strong> — elimina el/los recurso(s) identificado(s) por una URI.</li>
      </ul>
      <p>Además de los cuatro métodos principales, encontrarás con frecuencia:</p>
      <ul>
        <li><strong>PATCH</strong> — normalmente una actualización <em>parcial</em> (cambia solo los campos enviados), mientras que PUT normalmente reemplaza el recurso completo.</li>
        <li><strong>HEAD</strong> — devuelve solo las cabeceras, sin el cuerpo de respuesta normal.</li>
        <li><strong>OPTIONS</strong> — consulta qué operaciones/capacidades admite el endpoint (los navegadores también lo usan para el preflight de CORS).</li>
      </ul>
      <p>Un conjunto típico de recursos: <code>GET /api/contacts</code>, <code>GET /api/contacts/123</code>, <code>POST /api/contacts</code>, <code>PUT</code>/<code>PATCH</code>/<code>DELETE /api/contacts/123</code>. Trata siempre el <strong>contrato de la API como la fuente de verdad</strong>: las implementaciones reales no siempre siguen exactamente la semántica REST de manual.</p>` },
    { h: "Anatomía de la petición y la respuesta", body: `
      <p>Una petición recorre <strong>cliente QA → petición HTTP → API REST → lógica de negocio → base de datos/servicios → respuesta HTTP</strong>. Probar en esta capa es más rápido y enfocado que las pruebas de UI y expone defectos ocultos bajo la UI.</p>
      <p>Una petición puede contener: método, URL, <strong>parámetros de ruta</strong>, <strong>parámetros de consulta</strong>, cabeceras, autenticación y un cuerpo.</p>
      <pre><code>GET /api/users/123?include=orders&amp;page=2
Authorization: Bearer abc123
Accept: application/json</code></pre>
      <p>Aquí <code>123</code> es un parámetro de ruta; <code>include=orders</code> y <code>page=2</code> son parámetros de consulta. Una petición de creación y su respuesta:</p>
      <pre><code>POST /api/contacts
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{ "firstName": "John", "lastName": "Smith" }

HTTP/1.1 201 Created
Content-Type: application/json

{ "id": "12345", "firstName": "John", "lastName": "Smith" }</code></pre>
      <p><strong>Cabeceras que vale la pena probar:</strong> <code>Content-Type</code>, <code>Accept</code>, <code>Authorization</code>, <code>Cache-Control</code>, <code>Location</code>, <code>ETag</code>, <code>Set-Cookie</code> e IDs de petición/correlación. Prueba cabeceras ausentes, un <code>Content-Type</code> incorrecto, valores de <code>Accept</code> no admitidos y <code>Authorization</code> ausente o inválida.</p>` },
    { h: "Códigos de estado HTTP", body: `
      <div class="table-wrap"><table>
        <thead><tr><th>Clase</th><th>Códigos comunes</th></tr></thead>
        <tbody>
          <tr><td><strong>2xx</strong> Éxito</td><td>200 OK · 201 Created · 202 Accepted · 204 No Content</td></tr>
          <tr><td><strong>3xx</strong> Redirección</td><td>301 Moved Permanently · 302 Found · 304 Not Modified</td></tr>
          <tr><td><strong>4xx</strong> Error del cliente</td><td>400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 405 Method Not Allowed · 409 Conflict · 415 Unsupported Media Type · 422 Unprocessable Content · 429 Too Many Requests</td></tr>
          <tr><td><strong>5xx</strong> Error del servidor</td><td>500 Internal Server Error · 501 Not Implemented · 502 Bad Gateway · 503 Service Unavailable · 504 Gateway Timeout</td></tr>
        </tbody>
      </table></div>
      <p><strong>No esperes un 200 en cada petición exitosa.</strong> Una creación suele devolver 201, un borrado a menudo 204, un trabajo asíncrono 202: el estado esperado depende de la operación y del contrato. Y cualquier 5xx provocado por la entrada del cliente es un defecto: una entrada incorrecta debe recibir un 4xx.</p>` },
    { h: "Diseño de pruebas de entrada: parámetros, cuerpos y valores límite", body: `
      <p><strong>Parámetros de ruta</strong> (<code>GET /users/{id}</code>): IDs válidos, IDs inexistentes, cero, negativos, muy grandes, cadenas en lugar de números, valores tipo null, ausentes, mal formados, caracteres especiales.</p>
      <p><strong>Parámetros de consulta</strong> (<code>GET /users?page=2&amp;limit=20</code>): valores normales, cero, negativos, muy grandes, límites mín./máx., ausentes, vacíos, duplicados, tipos inválidos, caracteres especiales, codificación URL.</p>
      <p><strong>Cuerpos JSON:</strong> datos válidos, campos obligatorios ausentes, cadenas vacías, nulos, tipos incorrectos, formatos inválidos, campos inesperados, duplicados, valores sobredimensionados, JSON mal formado.</p>
      <pre><code>{"firstName":"John","lastName":"Smith","age":30}   válido
{"firstName":"John","age":30}                       falta un campo
{"firstName":"","lastName":"Smith"}                 valor vacío
{"firstName":123,"lastName":true}                   tipos incorrectos</code></pre>
      <p>Las <strong>pruebas positivas</strong> confirman que las peticiones válidas funcionan como se espera. Las <strong>pruebas negativas</strong> cubren autenticación inválida/caducada, IDs inválidos, duplicados, métodos no admitidos, <code>Content-Type</code> inválido, JSON mal formado, peticiones sobredimensionadas y parámetros inesperados: la API debe rechazar cada caso de forma segura con un 4xx claro.</p>
      <p>El <strong>análisis de valores límite</strong> (Módulo 2) se aplica a cadenas, enteros, arrays, paginación, tamaños de archivo, cantidades, fechas y dinero. Nombre de usuario de 3–30 caracteres → prueba <strong>2, 3, 4, 29, 30, 31</strong>. Edad 18–120 → prueba <strong>17, 18, 19, 119, 120, 121</strong>.</p>
      <p><strong>Pruebas dirigidas por datos:</strong> ejecuta la misma lógica de prueba sobre un conjunto de datos (válidos, límite, inválidos, duplicados, Unicode, variaciones de mayúsculas, caracteres especiales) en lugar de un único ejemplo fijo.</p>` },
    { h: "Validación de respuestas, esquemas y pruebas de contrato", body: `
      <p>Valida mucho más que el código de estado:</p>
      <ul>
        <li>código de estado, cabeceras de respuesta y <code>Content-Type</code></li>
        <li>estructura/esquema JSON, tipos de datos, campos obligatorios y valores reales</li>
        <li>reglas de negocio</li>
        <li>estado de la base de datos, cuando proceda</li>
        <li>tiempo de respuesta, cuando el rendimiento importa</li>
      </ul>
      <p><strong>OpenAPI/Swagger</strong> y <strong>JSON Schema</strong> definen el contrato de la API: métodos, parámetros, esquemas de petición/respuesta, requisitos de autenticación y respuestas de error. Las <strong>pruebas de contrato</strong> comprueban que la implementación sigue ajustándose a él. Defecto de ejemplo: la documentación dice que <code>id</code> es un entero, pero la API devuelve una cadena. Eso es <strong>deriva del contrato</strong> (contract drift) y puede romper a todos los consumidores de la API.</p>
      <p><strong>Validación de base de datos:</strong> donde aporte valor, confirma que una operación produjo el estado persistente esperado (registros, relaciones, marcas de tiempo, valores por defecto, estado). Pero no hagas que <em>cada</em> prueba de API dependa del acceso directo a la BD: ese acoplamiento hace las suites más lentas y frágiles.</p>` },
    { h: "Cómo probar una API REST", body: `
      <p>Se necesitan dos cosas: (1) una herramienta o framework de pruebas, y (2) solicitudes configuradas o código de prueba personalizado. Herramientas comunes: <strong>Advanced REST Client</strong>, <strong>Postman</strong>, <strong>cURL</strong>.</p>` },
    { h: "Flujo de trabajo de pruebas paso a paso", body: `
      <ol>
        <li>Abre tu cliente REST.</li>
        <li>Ingresa la URL de la API de destino.</li>
        <li>Selecciona el método HTTP.</li>
        <li>Configura los encabezados de la solicitud.</li>
        <li>Proporciona el cuerpo de la solicitud (para POST/PUT).</li>
        <li>Envía la solicitud.</li>
        <li>Valida la respuesta — código de estado, cuerpo/esquema de la respuesta y encabezados — frente a los resultados esperados.</li>
      </ol>` },
    { h: "Desafíos de las pruebas de API", body: `
      <ul>
        <li>Seleccionar las combinaciones de parámetros adecuadas para probar.</li>
        <li>Secuenciar las llamadas correctamente.</li>
        <li>Verificar solo la salida sin una interfaz de usuario que observar.</li>
        <li>Integrar las pruebas de API en una estrategia de automatización basada en GUI.</li>
      </ul>` },
    { h: "Autenticación, Autorización de API y Más Allá de REST", body: `
      <p><strong>Probar la autenticación y la autorización</strong> es una de las cosas de mayor valor que hacen las pruebas de API, ya que una comprobación de autenticación rota expone datos o acciones a personas que no deberían tenerlos:</p>
      <ul>
        <li><strong>Claves de API</strong> — el esquema más simple; comprueba que las solicitudes sin una clave válida se rechacen, y que una clave revocada deje de funcionar de inmediato.</li>
        <li><strong>OAuth 2.0</strong> — el estándar para el acceso delegado (por ejemplo, "iniciar sesión con Google"); comprueba el manejo de la expiración del token, los flujos de token de actualización, y que los alcances (scopes) realmente se apliquen (un token con alcance de "lectura" no debería poder escribir).</li>
        <li><strong>JWT (JSON Web Tokens)</strong> — tokens autocontenidos que llevan claims; comprueba la validación de la firma (un token manipulado debe rechazarse), la expiración (claim <code>exp</code>), y que el servidor no confíe ciegamente en los claims sin verificar la firma.</li>
      </ul>
      <p><strong>Las pruebas de autorización</strong> van más allá de "¿este usuario ha iniciado sesión?" hasta "¿puede este usuario específico hacer esta cosa específica?" — probando con varias cuentas de distintos roles/permisos para confirmar que un usuario no puede acceder ni modificar los datos de otro usuario (una categoría de error lo bastante grave como para tener su propio nombre en el Módulo 10: Control de Acceso Roto).</p>
      <p><strong>Más allá de REST:</strong> no toda API es REST, y cada estilo cambia lo que implican las pruebas:</p>
      <ul>
        <li><strong>GraphQL</strong> — un único endpoint donde el cliente especifica exactamente qué datos quiere en la consulta. El enfoque de pruebas se desplaza hacia validar el esquema, comprobar que las consultas no puedan solicitar datos excesivos/anidados (un riesgo de denegación de servicio propio de GraphQL), y probar las mutaciones (el equivalente de POST/PUT en GraphQL) con el mismo rigor de autorización que las escrituras REST.</li>
        <li><strong>gRPC</strong> — un protocolo binario y contract-first (usando Protocol Buffers) construido para una comunicación rápida entre servicios. Las pruebas normalmente parten directamente de la definición del contrato <code>.proto</code>, y herramientas como <code>grpcurl</code> o BloomRPC ocupan el lugar que Postman/cURL tienen para REST.</li>
      </ul>` },
    { h: "Aislamiento entre usuarios e inquilinos", body: `
      <p>La <strong>autenticación</strong> pregunta <em>¿quién eres?</em>; la <strong>autorización</strong> pregunta <em>¿tienes permiso para hacer esto?</em> Para la autenticación, cubre Basic Auth, tokens Bearer, claves de API, OAuth 2.0 y JWT con credenciales válidas, inválidas, ausentes, caducadas, mal formadas, erróneas y revocadas.</p>
      <p>Para la autorización, crea <strong>Usuario A, Usuario B y un Admin</strong>, y prueba cada uno contra los recursos de los demás y contra operaciones privilegiadas. La pregunta clave: ¿puede un usuario leer o modificar los objetos de otro?</p>
      <p>En sistemas <strong>multiinquilino</strong> (multi-tenant), verifica que un usuario del inquilino A no pueda leer, actualizar, borrar, buscar ni siquiera <em>inferir</em> recursos del inquilino B. Explora IDs, filtros, paginación, exportaciones, endpoints masivos y referencias indirectas, donde suelen esconderse las fugas.</p>` },
    { h: "Flujos de trabajo, estado y datos complicados", body: `
      <p><strong>Ciclo CRUD:</strong> <code>CREATE → READ → UPDATE → READ → DELETE → READ</code>. Cada READ demuestra que el paso anterior tuvo efecto realmente. Luego encadena flujos reales: <em>Registrarse → Iniciar sesión → Obtener token → Crear contacto → Obtener → Actualizar → Borrar → Verificar el borrado</em>.</p>
      <p><strong>Idempotencia y duplicados:</strong> repetir una operación que el contrato define como idempotente (PUT, DELETE, a menudo PATCH) debe dejar el recurso en el mismo estado previsto. Repite también los POST: ¿crean pedidos, contactos o pagos duplicados?</p>
      <p><strong>Paginación, ordenación, filtrado:</strong> primera/intermedia/última página, más allá de la última, página cero/negativa, límite mín./máx./enorme, registros duplicados o faltantes entre páginas; ascendente/descendente, campos de orden inválidos, varios campos, sensibilidad a mayúsculas; filtros válidos/inválidos/vacíos, varios filtros, filtros combinados con paginación.</p>
      <p><strong>Fechas y horas:</strong> UTC frente a hora local, conversiones de zona horaria, cambios de horario de verano, años/días bisiestos, medianoche/fin del día, fechas pasadas/futuras e inválidas, formatos admitidos. Define la semántica exacta de valores como <code>2026-09-23T10:00:00Z</code>.</p>
      <p><strong>Concurrencia:</strong> dos usuarios modificando el mismo recurso a la vez. Comprueba el bloqueo optimista (p. ej. <code>ETag</code>/<code>If-Match</code> → 409/412), condiciones de carrera, actualizaciones perdidas, operaciones duplicadas y el estado final.</p>` },
    { h: "OWASP API Security Top 10 (2023)", body: `
      <p>Usa la lista de OWASP como checklist de seguridad basada en riesgos, no como un añadido a las comprobaciones de códigos de estado:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th>Riesgo</th><th>Cómo lo prueba QA</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Broken Object Level Authorization (BOLA)</td><td>Solicitar el ID de objeto de otro usuario</td></tr>
          <tr><td>2</td><td>Broken Authentication</td><td>Tokens ausentes, inválidos, caducados, mal formados, revocados</td></tr>
          <tr><td>3</td><td>Broken Object Property Level Authorization</td><td>Intentar establecer campos privilegiados: <code>role</code>, <code>ownerId</code>, <code>tenantId</code>, <code>isAdmin</code></td></tr>
          <tr><td>4</td><td>Unrestricted Resource Consumption</td><td>Payloads/arrays enormes, paginación extrema, tasas de peticiones altas</td></tr>
          <tr><td>5</td><td>Broken Function Level Authorization</td><td>Llamar a endpoints de admin/privilegiados con cada rol</td></tr>
          <tr><td>6</td><td>Unrestricted Access to Sensitive Business Flows</td><td>Repetir restablecimientos de contraseña, votos, cupones, registros, pedidos</td></tr>
          <tr><td>7</td><td>Server-Side Request Forgery (SSRF)</td><td>Si la API obtiene URLs, verificar las restricciones en el servidor (solo en entorno de prueba autorizado)</td></tr>
          <tr><td>8</td><td>Security Misconfiguration</td><td>Información de depuración, trazas de pila, métodos innecesarios, credenciales por defecto, CORS/TLS</td></tr>
          <tr><td>9</td><td>Improper Inventory Management</td><td>Encontrar versiones de API obsoletas, no documentadas, de depuración o en desuso</td></tr>
          <tr><td>10</td><td>Unsafe Consumption of APIs</td><td>Inyectar respuestas de terceros mal formadas, parciales, lentas o sobredimensionadas</td></tr>
        </tbody>
      </table></div>
      <p>El Módulo 10 profundiza en las pruebas de seguridad de aplicaciones.</p>` },
    { h: "Herramientas, automatización y CI/CD", body: `
      <p><strong>Postman</strong> gestiona peticiones, colecciones, entornos, variables, scripts, aserciones, autenticación, encadenamiento de peticiones y ejecuciones en CI. Usa variables como <code>{{baseUrl}}</code>, <code>{{token}}</code>, <code>{{userId}}</code> en lugar de valores fijos específicos del entorno.</p>
      <pre><code>pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});</code></pre>
      <p><strong>Playwright</strong> (TypeScript) incluye una capa de peticiones de API:</p>
      <pre><code>const response = await request.post('/api/users', {
  data: { name: 'John', email: 'john@example.com' }
});
expect(response.status()).toBe(201);</code></pre>
      <p>Mantén reutilizables los clientes de API, la autenticación, los datos de prueba, los esquemas y las aserciones, en lugar de repetirlos en cada spec:</p>
      <pre><code>tests/
├── api/        auth/ · contacts/ · negative/
├── fixtures/   apiClient.ts · testData.ts
├── helpers/    auth.ts · assertions.ts
└── schemas/</code></pre>
      <p><strong>API + UI juntas:</strong> crea un usuario vía API y verifica el inicio de sesión en la UI, o crea un contacto en la UI y verifícalo vía API. Así se aísla si un defecto está en la UI, la API, la integración o la persistencia.</p>
      <p><strong>Rendimiento:</strong> mide tiempo de respuesta, latencia, throughput, peticiones/segundo, tasa de errores, CPU, memoria y comportamiento de la BD en escenarios de línea base, carga, estrés, picos y resistencia (soak), con herramientas como <strong>k6</strong> y <strong>JMeter</strong>.</p>
      <p><strong>CI/CD:</strong> push → GitHub Actions → instalar dependencias → arrancar la app → ejecutar pruebas de API (<code>npx playwright test tests/api</code>) → ejecutar pruebas de UI → informes → <strong>quality gate</strong>. Ejecútalas en pull requests y ramas clave, y conserva informes y artefactos de fallos.</p>` },
    { h: "Plantilla de caso de prueba, matriz de endpoints y checklist negativa", body: `
      <p><strong>Campos de un caso de prueba de API:</strong> ID, título, precondiciones, endpoint, método, cabeceras, autenticación, parámetros de ruta/consulta, cuerpo, datos de prueba, pasos, estado esperado, cabeceras esperadas, respuesta/esquema esperado, estado esperado de la BD, prioridad, severidad.</p>
      <p><em>Ejemplo: TC-API-001: Crear contacto con datos válidos. <code>POST /contacts</code> → esperar <code>201 Created</code>; verificar el ID generado y luego <code>GET /contacts/{id}</code> para confirmar que el recurso existe.</em></p>
      <p><strong>Para cada endpoint, pregunta:</strong> ¿Son correctos el método y la URL? ¿Quién puede acceder? ¿Qué cabeceras, parámetros y campos del cuerpo son obligatorios o válidos? ¿Son correctos los tipos de datos, códigos de estado, esquema y datos devueltos? ¿Son los errores seguros y útiles? ¿Se aplican los límites de autorización? ¿Son correctos los efectos secundarios? ¿Qué ocurre con concurrencia y carga?</p>
      <p><strong>Checklist negativa esencial:</strong> campo obligatorio ausente · cadena vacía · null · tipo incorrecto · formato inválido · demasiado corto / demasiado largo · límite −1 / límite / +1 · negativo · cero · número muy grande · ID desconocido · ID ausente · petición duplicada · JSON inválido · JSON vacío · <code>Content-Type</code> ausente/incorrecto · autenticación ausente/inválida · token caducado · permisos insuficientes · usuario equivocado · método no admitido · límite de tasa · payload grande · parámetros inesperados · caracteres especiales · Unicode · entrada tipo inyección · entrada tipo HTML/script.</p>` },
    { h: "Mentalidad QA, hoja de ruta y portafolio", body: `
      <ul>
        <li><strong>Principiante:</strong> ¿Devuelve la API un 200?</li>
        <li><strong>Más sólido:</strong> ¿Devuelve el estado, esquema, datos, cabeceras, permisos y efectos secundarios correctos?</li>
        <li><strong>Avanzado:</strong> ¿Qué pasa si dos usuarios la llaman a la vez, el token caduca, el payload está mal formado, el recurso pertenece a otro inquilino, la BD cae, un tercero devuelve basura o la petición se repite muchas veces?</li>
      </ul>
      <p>El objetivo son las <strong>pruebas de API basadas en riesgos</strong>, no solo enviar peticiones.</p>
      <p><strong>Hoja de ruta para QA junior:</strong></p>
      <ol>
        <li>HTTP/HTTPS, URLs, métodos, cabeceras, códigos de estado, JSON</li>
        <li>Postman: colecciones, entornos, variables, scripts, aserciones</li>
        <li>Positivas/negativas, valores límite, particiones de equivalencia, tablas de decisión, transiciones de estado, dirigidas por datos</li>
        <li>Basic Auth, Bearer, JWT, OAuth, claves de API</li>
        <li>CRUD, paginación, filtrado, ordenación, subida de archivos, idempotencia, concurrencia, webhooks, APIs asíncronas</li>
        <li>OpenAPI/Swagger, JSON Schema, pruebas de contrato, deriva de esquema</li>
        <li>OWASP API Top 10, autorización, limitación de tasa, exposición de datos</li>
        <li>Playwright API, TypeScript, scripts de Postman y CLI</li>
        <li>k6/JMeter: carga, estrés, picos, resistencia</li>
        <li>Git, GitHub Actions, Jenkins, informes, artefactos, quality gates</li>
      </ol>
      <p><strong>Plano de un proyecto de portafolio:</strong> estrategia de pruebas, plan de pruebas, inventario de endpoints, pruebas positivas/negativas/de límites, pruebas de autenticación y autorización, pruebas CRUD, pruebas de esquema/contrato, checklist de seguridad, colección de Postman, automatización de API con Playwright, gestión de datos de prueba, CI/CD, informes HTML/Allure, ejemplos de defectos y un README que explique el enfoque.</p>
      <p><strong>Recursos:</strong> <a href="https://learning.postman.com/docs/tests-and-scripts/tests-and-scripts/" target="_blank" rel="noopener">Postman: tests y scripts</a> · <a href="https://api-security.owasp.org/editions/2023/en/0x11-t10/" target="_blank" rel="noopener">OWASP API Security Top 10</a> · <a href="https://spec.openapis.org/oas/latest.html" target="_blank" rel="noopener">Especificación OpenAPI</a> · <a href="https://learning.postman.com/docs/tests-and-scripts/running-collections/running-collections-overview/" target="_blank" rel="noopener">Ejecutar colecciones de Postman en CI</a></p>` }
  ]
},
{
  id: "istqb-ctfl",
  num: 7,
  title: "Ruta de Certificación ISTQB® CTFL v4.0",
  summary: "Un resumen de apoyo al estudio del temario del ISTQB Foundation Level — la certificación de pruebas de nivel de entrada, neutral respecto al proveedor.",
  takeaway: "ISTQB® Foundation Level es la certificación de nivel de entrada, neutral respecto al proveedor, para testers de software en todo el mundo. Su temario organiza el conocimiento de pruebas en 6 capítulos, con cada objetivo de aprendizaje etiquetado con un \"nivel K\" (K1 = recordar, K2 = comprender, K3 = aplicar) que indica con qué profundidad se espera conocerlo en el examen.",
  callout: {
    label: "Lectura recomendada",
    body: "Stapp, L., Roman, A., &amp; Pilaeten, M. (2024). <em>ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0.</em> Springer. Este módulo es un resumen de apoyo al estudio — para mayor profundidad, ejercicios y exámenes de práctica oficiales, consulta el libro o el temario oficial de ISTQB."
  },
  lessons: [
    { h: "7.0 Cómo funciona la certificación", body: `
      <p>El Foundation Level (CTFL) es la certificación ISTQB® de nivel de entrada y el prerrequisito para las rutas Advanced Level y Expert Level. El examen típicamente consta de <strong>40 preguntas de opción múltiple</strong>, ponderadas por capítulo y nivel K, con una nota de aprobación definida de aproximadamente <strong>65%</strong>.</p>` },
    { h: "7.1 Fundamentos de las pruebas", body: `
      <p><span class="k-badge">K2</span> <strong>Qué son las pruebas y por qué son necesarias:</strong> las pruebas son distintas de la depuración, contribuyen directamente al éxito del proyecto, y apoyan — pero no son lo mismo que — el aseguramiento de la calidad.</p>
      <p><strong>Error, defecto, falla, causa raíz:</strong> un <strong>error</strong> humano (equivocación) puede introducir un <strong>defecto</strong> (falla) en un producto de trabajo; al ejecutarse, un defecto puede provocar una <strong>falla</strong> (comportamiento incorrecto observable); la razón subyacente por la que ocurrió el error es la <strong>causa raíz</strong>.</p>
      <p><span class="k-badge">K2</span> <strong>Los siete principios de las pruebas:</strong></p>
      <ol>
        <li>Las pruebas muestran la presencia, no la ausencia, de defectos.</li>
        <li>Las pruebas exhaustivas son imposibles.</li>
        <li>Probar temprano ahorra tiempo y dinero.</li>
        <li>Los defectos se agrupan.</li>
        <li>Las pruebas se desgastan — repetir las mismas pruebas deja de encontrar errores nuevos.</li>
        <li>Las pruebas dependen del contexto.</li>
        <li>La ausencia de defectos es una falacia — un producto sin errores que no satisface las necesidades del usuario puede seguir fallando.</li>
      </ol>
      <p><strong>Actividades principales de prueba:</strong> planificación, monitoreo y control, análisis, diseño, implementación, ejecución y finalización — produciendo testware como planes de prueba, casos de prueba, datos de prueba y registros de prueba.</p>
      <p>El <strong>enfoque de todo el equipo</strong> trata las pruebas como una responsabilidad compartida del equipo, mientras que la <strong>independencia del tester</strong> sigue aportando valor al aportar una perspectiva libre de los supuestos del autor.</p>` },
    { h: "7.2 Las pruebas a lo largo del ciclo de vida del desarrollo de software (SDLC)", body: `
      <p><span class="k-badge">K2</span> El modelo de ciclo de vida de desarrollo elegido — secuencial/Cascada, iterativo o Ágil — determina cómo y cuándo se realizan las pruebas. DevOps y la entrega continua impulsan las pruebas más temprano y con mayor frecuencia, una idea a menudo llamada <strong>"shift-left"</strong> (desplazamiento a la izquierda). Las retrospectivas sirven como mecanismo de mejora de procesos en todos los modelos.</p>
      <p>Los <strong>niveles de prueba</strong> (componente/unidad, integración, sistema, aceptación) describen <em>dónde</em> ocurren las pruebas; los <strong>tipos de prueba</strong> (funcional, no funcional, caja blanca/estructural, relacionado con cambios) describen <em>qué</em> se está probando — ambas son dimensiones independientes.</p>
      <p>Las <strong>pruebas de confirmación (reprueba)</strong> vuelven a ejecutar una prueba previamente fallida después de una corrección para confirmar que el defecto está resuelto; las <strong>pruebas de regresión</strong> vuelven a ejecutar pruebas existentes para confirmar que un cambio no ha roto funcionalidad que antes funcionaba. Las <strong>pruebas de mantenimiento</strong> se desencadenan por la modificación, migración o retiro de un sistema.</p>` },
    { h: "7.3 Pruebas estáticas", body: `
      <p><span class="k-badge">K2</span> Las pruebas estáticas examinan productos de trabajo — requisitos, diseños, código, casos de prueba — <strong>sin ejecutarlos</strong>, brindando retroalimentación temprana y frecuente incluso antes de que las pruebas dinámicas sean posibles.</p>
      <p>El <strong>proceso formal de revisión:</strong> planificación → inicio (kick-off) → revisión individual → comunicación/análisis de incidencias → corrección e informe. Roles típicos de los revisores: <strong>autor</strong>, <strong>moderador/facilitador</strong>, <strong>revisores</strong>, <strong>secretario (scribe)</strong> y <strong>gerente</strong>.</p>
      <p><strong>Cuatro tipos de revisión</strong>, de menos a más formal: <strong>Revisión informal</strong> &rarr; <strong>Walkthrough</strong> &rarr; <strong>Revisión técnica</strong> &rarr; <strong>Inspección</strong>.</p>
      <p>Las revisiones tienen éxito cuando cuentan con objetivos claros, los participantes adecuados y una cultura psicológicamente segura y libre de culpas.</p>` },
    { h: "7.4 Análisis y diseño de pruebas", body: `
      <p><span class="k-badge">K2</span> Tres familias de técnicas de prueba:</p>
      <ul>
        <li><strong>Caja negra</strong> (basada en el comportamiento) — sin conocimiento del funcionamiento interno. Se cubre con ejemplos resueltos en el <em>Módulo 2</em>: <span class="k-badge">K3</span> Partición de equivalencia, Análisis de valores límite, Pruebas de tabla de decisión y Pruebas de transición de estados.</li>
        <li><strong>Caja blanca</strong> (basada en la estructura) — usa conocimiento del código/la arquitectura. <span class="k-badge">K3</span> Las <strong>pruebas/cobertura de sentencias</strong> preguntan si cada sentencia ejecutable se ha ejecutado al menos una vez; las <strong>pruebas/cobertura de ramas</strong> preguntan si cada resultado de decisión (verdadero y falso) se ha ejercitado.</li>
        <li><strong>Basada en la experiencia</strong> — usa la intuición y la trayectoria del tester: <strong>adivinación de errores</strong>, <strong>pruebas exploratorias</strong> (ver <em>Módulos 4 y 5</em>) y <strong>pruebas basadas en listas de verificación</strong>.</li>
      </ul>
      <p><strong>Enfoques basados en la colaboración:</strong> escribir historias de usuario de forma colaborativa, definir criterios de aceptación y el <strong>Desarrollo Guiado por Pruebas de Aceptación (ATDD)</strong>.</p>` },
    { h: "7.5 Gestión de las actividades de prueba", body: `
      <p><span class="k-badge">K2</span> La <strong>planificación de pruebas</strong> define el propósito y el contenido de un plan de pruebas, establece los <strong>criterios de entrada</strong> (condiciones para comenzar) y los <strong>criterios de salida</strong> (condiciones para finalizar), y utiliza técnicas de estimación y priorización.</p>
      <p>La <strong>pirámide de pruebas</strong> recomienda muchas pruebas automatizadas rápidas de bajo nivel y menos pruebas de UI lentas de alto nivel. Los <strong>cuadrantes de pruebas</strong> ubican los tipos de prueba en dos ejes: orientadas al negocio vs. orientadas a la tecnología, y que apoyan al equipo vs. que critican el producto.</p>
      <p><span class="k-badge">K2</span> <strong>Gestión de riesgos:</strong> riesgo = probabilidad &times; impacto. Los <strong>riesgos del producto</strong> amenazan si el producto de trabajo satisface las necesidades de los interesados; los <strong>riesgos del proyecto</strong> amenazan la capacidad del proyecto para entregar (cronograma, recursos). Las pruebas basadas en riesgos priorizan las áreas de mayor riesgo.</p>
      <p>El <strong>monitoreo, control y finalización de las pruebas</strong> hacen seguimiento de métricas y comunican el estado mediante informes de prueba. La <strong>gestión de la configuración</strong> apoya la trazabilidad. Un <strong>informe de defecto</strong> normalmente incluye un resumen, pasos para reproducir, resultado esperado vs. real, severidad y prioridad.</p>` },
    { h: "7.6 Herramientas de prueba", body: `
      <p><span class="k-badge">K1</span> Categorías de herramientas que apoyan las pruebas: gestión de pruebas, análisis estático, diseño de pruebas, preparación de datos de prueba, ejecución/automatización, y rendimiento/monitoreo, entre otras.</p>
      <p><strong>Beneficios de la automatización de pruebas:</strong> repetibilidad, velocidad y resultados objetivos. <strong>Riesgos:</strong> expectativas poco realistas, costo continuo de mantenimiento, una falsa sensación de seguridad y dependencia de un proveedor (lock-in).</p>` },
    { h: "7.7 Consejos de estudio y trampas comunes del examen", body: `
      <p>Orientación de estudio original para este módulo — no extraída del examen oficial ni de las preguntas de práctica propias de la Self-Study Guide:</p>
      <ul>
        <li><strong>Estudia por nivel K, no solo por capítulo.</strong> Un término K1 solo necesita reconocimiento; una técnica K3 requiere que realmente la apliques a un escenario. Dedica tu tiempo limitado al material K2/K3, ya que ahí es donde viven la mayoría de las preguntas del examen.</li>
        <li><strong>Cuidado con los distractores de "la mejor" vs. "una".</strong> Una pregunta trampa habitual da cuatro afirmaciones técnicamente verdaderas pero solo una es la <em>mejor</em> respuesta para el escenario específico descrito — lee el escenario dos veces antes de elegir.</li>
        <li><strong>No confundas términos que suenan parecido.</strong> Error/Defecto/Falla/Causa raíz (7.1), Verificación/Validación, y los cuatro tipos de revisión (7.3) se examinan con frecuencia precisamente porque es fácil confundirlos bajo presión de tiempo.</li>
        <li><strong>Practica los ejemplos resueltos del Módulo 2</strong> (AVL, PCE, tablas de decisión, transición de estados) hasta que puedas producir los casos de prueba desde cero, no solo reconocer un ejemplo correcto — 7.4 se apoya directamente en esto.</li>
        <li><strong>Gestión del tiempo:</strong> con 40 preguntas en una ventana fija, no dejes que una pregunta difícil consuma tiempo desproporcionado — márcala, avanza, y vuelve si el tiempo lo permite.</li>
        <li><strong>La noche anterior:</strong> repasa el glosario (los términos del Módulo 7 están todos en el Glosario de esta app), no memorices material nuevo, y duerme bien — los exámenes centrados en el reconocimiento premian más una memoria descansada que una maratón de lectura de último momento.</li>
      </ul>` }
  ]
},
{
  id: "qa-toolbox",
  num: 8,
  title: "Caja de Herramientas de QA y Desarrollo Profesional",
  summary: "Una referencia práctica para el QA en activo: herramientas reales por categoría, las métricas que realmente se comentan en los standups, una hoja de repaso para entrevistas, y dónde seguir aprendiendo.",
  takeaway: "Conocer la teoría de las pruebas te abre la puerta — saber qué herramienta usar, qué métrica le importa realmente a un stakeholder, y cómo hablar de tu experiencia es lo que te mantiene avanzando. Este módulo es una referencia viva, no un curso para \"terminar\".",
  lessons: [
    { h: "8.1 Frameworks de automatización de pruebas", body: `
      <p>Ningún framework gana en todos los contextos — la elección correcta depende de la aplicación bajo prueba, el lenguaje del equipo y cuánto de la pila necesitas cubrir.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Herramienta</th><th>Ideal para</th><th>Lenguaje(s)</th><th>Notas</th></tr></thead>
        <tbody>
          <tr><td><strong>Selenium WebDriver</strong></td><td>Automatización de UI web multinavegador</td><td>Java, Python, C#, JS, Ruby</td><td>El estándar más antiguo; ecosistema amplio, más código repetitivo que las herramientas más nuevas.</td></tr>
          <tr><td><strong>Playwright</strong></td><td>Automatización de UI web moderna</td><td>JS/TS, Python, Java, C#</td><td>Espera automática, ejecutor de pruebas integrado, fuerte interceptación de red — opción por defecto de rápido crecimiento para proyectos nuevos.</td></tr>
          <tr><td><strong>Cypress</strong></td><td>Pruebas web rápidas y amigables para el desarrollador</td><td>JS/TS</td><td>Se ejecuta dentro del navegador; excelente experiencia de depuración, históricamente con limitaciones de origen único.</td></tr>
          <tr><td><strong>Appium</strong></td><td>Automatización de apps móviles (iOS/Android)</td><td>Java, Python, JS, etc.</td><td>Extiende el protocolo WebDriver a apps móviles nativas e híbridas.</td></tr>
          <tr><td><strong>Robot Framework</strong></td><td>Pruebas basadas en palabras clave para equipos mixtos técnicos/no técnicos</td><td>Basado en Python, sintaxis tabular</td><td>Buen ajuste cuando analistas de negocio coautoran los casos de prueba.</td></tr>
        </tbody>
      </table></div>` },
    { h: "8.2 Lenguajes de programación para la automatización de pruebas", body: `
      <p>Qué lenguaje aprender normalmente lo decide el equipo y la pila a la que te unes, no al revés — pero así es como se comparan en la práctica las opciones habituales.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Lenguaje</th><th>Dónde destaca en QA</th><th>Notas</th></tr></thead>
        <tbody>
          <tr><td><strong>Java</strong></td><td>Automatización de UI empresarial (Selenium), pruebas de API (REST Assured)</td><td>El lenguaje más común en equipos de automatización grandes y establecidos; detallado pero con herramientas muy maduras (JUnit, TestNG).</td></tr>
          <tr><td><strong>Python</strong></td><td>Pruebas de API, scripting general, herramientas de prueba con muchos datos, Robot Framework, Locust</td><td>Legible, rápido de escribir, enorme ecosistema de librerías (pytest, requests) — a menudo el punto de entrada más fácil para testers que vienen de un perfil no desarrollador.</td></tr>
          <tr><td><strong>JavaScript / TypeScript</strong></td><td>Automatización de UI web moderna (Playwright, Cypress), scripts de rendimiento con k6</td><td>Encaje natural cuando la app bajo prueba es en sí misma una app web JS/TS — los testers pueden leer el propio código de la app y compartir herramientas con los desarrolladores.</td></tr>
          <tr><td><strong>C#</strong></td><td>Automatización de UI y API en pila .NET (Selenium, Playwright, SpecFlow)</td><td>La opción por defecto en equipos que construyen con .NET; herramientas sólidas dentro de Visual Studio.</td></tr>
          <tr><td><strong>SQL</strong></td><td>No es un lenguaje de automatización, pero es esencial en todas partes</td><td>Se necesita constantemente para la validación de datos, la preparación de datos de prueba y la verificación de lo que realmente quedó en la base de datos tras una prueba.</td></tr>
          <tr><td><strong>Bash / scripting de shell</strong></td><td>Pegamento de CI/CD, configuración de entornos, inspección rápida de logs/archivos</td><td>No se usa para escribir lógica de prueba, pero aparece en casi todos los pipelines que un tester toca.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Consejo práctico:</strong> ajusta el lenguaje a la aplicación bajo prueba y a la pila existente del equipo — la automatización escrita en un lenguaje que nadie más en el equipo conoce se convierte en una suite huérfana y sin mantenimiento en menos de un año. Si no hay restricciones, Python y JavaScript/TypeScript son actualmente los caminos más rápidos de cero a una suite de automatización funcional.</p>` },
    { h: "8.3 Herramientas de pruebas de API y rendimiento", body: `
      <p><strong>Pruebas de API:</strong></p>
      <ul>
        <li><strong>Postman</strong> — el punto de partida más común para la exploración manual y semiautomatizada de APIs, colecciones y pruebas basadas en entornos.</li>
        <li><strong>REST Assured</strong> — un DSL de Java para escribir pruebas de API como código, se integra de forma natural en suites de prueba JVM y pipelines de CI.</li>
        <li><strong>SoapUI</strong> — orientado a SOAP y a servicios web empresariales heredados, junto con REST.</li>
        <li><strong>cURL / HTTPie</strong> — clientes de línea de comandos ligeros, útiles para comprobaciones rápidas y reportes de errores reproducibles.</li>
      </ul>
      <p><strong>Pruebas de rendimiento y carga:</strong></p>
      <ul>
        <li><strong>JMeter</strong> — maduro, orientado a GUI, con enorme soporte de protocolos; puede consumir muchos recursos con volúmenes de carga altos.</li>
        <li><strong>k6</strong> — escribe pruebas de carga en JavaScript, orientado a CLI, se lleva bien con CI/CD y la ejecución en la nube.</li>
        <li><strong>Gatling</strong> — basado en Scala, conocido por informes detallados y un uso eficiente de recursos bajo alta concurrencia.</li>
        <li><strong>Locust</strong> — basado en Python, define el comportamiento del usuario como código, escala mediante procesos worker.</li>
      </ul>` },
    { h: "8.4 Seguimiento de errores, CI/CD y herramientas de colaboración", body: `
      <p><strong>Gestión de defectos y pruebas:</strong> Jira (con Xray o Zephyr para la gestión de casos de prueba), Azure DevOps, TestRail, qTest — se usan para seguir los defectos a lo largo de su ciclo de vida y vincular los casos de prueba con los requisitos y las builds.</p>
      <p><strong>CI/CD (donde realmente se ejecutan las pruebas automatizadas):</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI — el trabajo de QA aquí suele ser conectar las suites de prueba a las etapas del pipeline, condicionar los merges al resultado pasa/falla, y mantener las ejecuciones lo bastante rápidas como para que la gente no empiece a saltárselas.</p>
      <p><strong>Control de versiones y revisión:</strong> flujos de trabajo basados en Git (GitHub/GitLab/Bitbucket) — los testers revisan cada vez más los pull requests, no solo las builds posteriores, como parte del movimiento de shift-left tratado en el Módulo 7.</p>` },
    { h: "8.5 IA en las pruebas de software", body: `
      <p>La IA ha pasado de ser una novedad a ser una parte normal de la caja de herramientas de QA en los últimos años — tanto como algo que los testers usan, como un nuevo tipo de cosa que los testers necesitan probar.</p>
      <p><strong>Dónde está apareciendo la IA como herramienta de prueba:</strong></p>
      <div class="table-wrap"><table>
        <thead><tr><th>Categoría</th><th>Qué hace</th><th>Ejemplos</th></tr></thead>
        <tbody>
          <tr><td><strong>Localizadores autorreparables</strong></td><td>Ajusta automáticamente los selectores de elementos de la UI cuando cambia el DOM, en lugar de que una prueba se rompa con cada ajuste de markup.</td><td>Testim, Healenium, algunos plugins de Playwright/Selenium.</td></tr>
          <tr><td><strong>Pruebas visuales con IA</strong></td><td>Compara capturas de pantalla usando diferenciación perceptual en lugar de coincidencia exacta de píxeles, por lo que señala regresiones visuales reales pero ignora el ruido de renderizado.</td><td>Applitools Eyes, Percy.</td></tr>
          <tr><td><strong>Generación de pruebas asistida por IA</strong></td><td>Redacta casos de prueba o scripts de automatización a partir de requisitos, historias de usuario o exploración existente de la app.</td><td>GitHub Copilot, Claude, ChatGPT, y herramientas específicas como Functionize y mabl.</td></tr>
          <tr><td><strong>Selección predictiva de pruebas</strong></td><td>Usa datos históricos de fallos para ejecutar solo el subconjunto de pruebas con más probabilidad de detectar una regresión para un cambio dado, reduciendo el tiempo de CI.</td><td>Común en plataformas de CI a gran escala; menos común en equipos pequeños.</td></tr>
          <tr><td><strong>Triaje de errores asistido por IA</strong></td><td>Agrupa reportes de defectos similares, sugiere severidad/prioridad, o señala posibles duplicados.</td><td>Cada vez más integrado en Jira y trackers de defectos similares.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Cómo usar bien las pruebas generadas por IA:</strong> trata la salida de la IA como un primer borrador, no como una prueba terminada — una prueba generada todavía necesita que un humano confirme que está verificando lo correcto, no solo que se ejecuta y pasa. La IA es buena produciendo código de prueba con apariencia plausible rápidamente; no es fiablemente buena sabiendo qué comportamiento realmente le importa al negocio, que es exactamente el juicio para el que existen las pruebas.</p>
      <p><strong>Probar las propias funcionalidades de IA</strong> es ahora una habilidad emergente de QA en sí misma — cuando el producto bajo prueba incluye una funcionalidad potenciada por un LLM (un chatbot, un asistente de búsqueda, un resumidor), las aserciones tradicionales de coincidencia exacta dejan de funcionar porque las salidas son no deterministas. Esto exige técnicas distintas: evaluar la salida frente a una rúbrica en lugar de una cadena exacta, comprobar si hay alucinaciones (información afirmada con seguridad pero falsa), probar la resistencia a la inyección de prompts y al jailbreak, y verificar que el sistema se degrada de forma segura ante entradas ambiguas o adversarias en lugar de producir algo dañino o sin sentido.</p>
      <p><strong>Riesgos que vale la pena señalar a un equipo:</strong> introducir código propietario o datos de clientes en una herramienta de IA de terceros sin revisar su política de manejo de datos; confiar en exceso en una marca verde en una prueba generada por IA que nunca ejercitó realmente el camino del error; y que la automatización redactada por IA se vuelva tan poco mantenible como la automatización redactada por humanos si nadie entiende lo que hace.</p>` },
    { h: "8.6 Métricas y KPIs de QA que importan", body: `
      <p>Las métricas solo son útiles cuando están vinculadas a una decisión. Estas son las que aparecen con más frecuencia en standups y retros reales:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Métrica</th><th>Qué te indica</th></tr></thead>
        <tbody>
          <tr><td><strong>Densidad de defectos</strong></td><td>Defectos encontrados por unidad de tamaño (por ejemplo, por cada 1.000 líneas de código o por funcionalidad) — señala módulos inusualmente riesgosos.</td></tr>
          <tr><td><strong>Tasa de fuga / Defectos escapados</strong></td><td>Defectos encontrados en producción frente a los detectados antes del lanzamiento — la señal más clara de si tu estrategia de pruebas realmente funciona.</td></tr>
          <tr><td><strong>Cobertura de pruebas</strong></td><td>Cuánto del código o de los requisitos es ejercitado por las pruebas. Una cobertura alta por sí sola no garantiza calidad — no dice nada sobre la solidez de las aserciones.</td></tr>
          <tr><td><strong>Tasa de flakiness (inestabilidad)</strong></td><td>Proporción de pruebas automatizadas que fallan de forma intermitente sin ningún cambio de código — una tasa creciente erosiona la confianza en toda la suite más rápido que casi cualquier otra cosa.</td></tr>
          <tr><td><strong>MTTD / MTTR</strong></td><td>Tiempo medio de detección / Tiempo medio de resolución de un defecto — qué tan rápido se encuentran y se corrigen los problemas una vez que existen.</td></tr>
          <tr><td><strong>Tiempo de entrega de cambios (Lead Time)</strong> y <strong>Frecuencia de despliegue</strong></td><td>Dos de las cuatro métricas DORA; el tiempo de ciclo de QA suele ser la mayor palanca sobre el tiempo de entrega.</td></tr>
          <tr><td><strong>Tendencia de la tasa de aprobación/fallo</strong></td><td>Seguida a lo largo de las builds, no como un número aislado — una tendencia lenta a la baja en la tasa de aprobación a menudo predice un riesgo de lanzamiento antes de que alguien lo diga en voz alta.</td></tr>
        </tbody>
      </table></div>
      <p>Una cultura sana de métricas las trata como disparadores de conversación para investigar, no como puntajes que manipular — optimizar una sola métrica de forma aislada (por ejemplo, perseguir el 100% de cobertura) produce de forma fiable incentivos perversos.</p>` },
    { h: "8.7 Preparación para entrevistas — Hoja de repaso rápida", body: `
      <p>Preguntas comunes, respondidas como lo haría un buen candidato en una o dos frases:</p>
      <ul>
        <li><strong>"Explícame tu proceso de pruebas para una nueva funcionalidad."</strong> Revisar los requisitos/criterios de aceptación &rarr; identificar áreas de riesgo &rarr; diseñar casos de prueba (combinando técnicas de caja negra con chárteres exploratorios) &rarr; ejecutar &rarr; registrar defectos con pasos de reproducción claros &rarr; reprobar las correcciones &rarr; regresionar.</li>
        <li><strong>"¿Cómo priorizas qué probar con tiempo limitado?"</strong> Priorización basada en riesgos — ponderar probabilidad x impacto, enfocarse en los caminos de mayor tráfico y en los cambios recientes, usar la intuición de Pareto/agrupamiento de defectos.</li>
        <li><strong>"Describe un error que encontraste y que otros pasaron por alto."</strong> Ten listo un ejemplo real con: qué te llevó a buscar ahí, los pasos de reproducción, el impacto y cómo se corrigió finalmente — los entrevistadores buscan especificidad, no drama.</li>
        <li><strong>"Manual vs. automatizado — ¿cómo decides?"</strong> Automatizar caminos de regresión estables, repetitivos y de alto valor; mantener manual el trabajo exploratorio/de UX/de requisitos ambiguos (ver Módulos 1 y 5).</li>
        <li><strong>"¿Qué hace bueno a un reporte de error?"</strong> Un resumen claro, pasos exactos para reproducir, resultado esperado vs. real, detalles del entorno, severidad/prioridad y evidencia de apoyo (logs, capturas de pantalla).</li>
        <li><strong>"¿Cómo manejas el desacuerdo con un desarrollador sobre si algo es un error?"</strong> Anclarse de nuevo al requisito/criterio de aceptación o a la especificación (la base de la prueba); si es genuinamente ambiguo, escalar para una decisión del producto en lugar de discutir desde la opinión.</li>
        <li><strong>"¿Cuál es la diferencia entre verificación y validación?"</strong> La verificación pregunta "¿estamos construyendo el producto correctamente?" (coincide con la especificación); la validación pregunta "¿estamos construyendo el producto correcto?" (satisface la necesidad real del usuario).</li>
        <li><strong>"¿Cómo probarías una funcionalidad potenciada por un LLM?"</strong> Cambiar las aserciones de coincidencia exacta por una evaluación basada en rúbricas de la calidad de la salida; probar específicamente la aparición de alucinaciones, comprobar el comportamiento ante entradas ambiguas/adversarias, y verificar que el sistema falla de forma segura en lugar de producir algo dañino o sin sentido.</li>
      </ul>` },
    { h: "8.8 Recursos profesionales — Certificaciones, comunidades y lecturas", body: `
      <p><strong>Certificaciones que vale la pena conocer</strong> (más allá del ISTQB CTFL cubierto en el Módulo 7):</p>
      <ul>
        <li><strong>ISTQB Advanced Level</strong> (Test Analyst, Test Manager, Technical Test Analyst) — el siguiente paso natural después de Foundation Level.</li>
        <li><strong>ISTQB Agile Tester</strong> — certificación de extensión centrada en las pruebas dentro de equipos Agile/Scrum.</li>
        <li><strong>Certified Software Tester (CSTE)</strong> — ofrecida por QAI, una alternativa a la ruta ISTQB con una amplitud similar.</li>
        <li>Credenciales específicas de herramientas (por ejemplo, certificados emitidos por proveedores de Selenium/Playwright/Postman) — útiles para demostrar profundidad práctica junto con una certificación de base.</li>
      </ul>
      <p><strong>Comunidades que vale la pena seguir:</strong> Ministry of Testing (cursos, artículos y una gran comunidad de profesionales), las comunidades r/QualityAssurance y r/softwaretesting, grupos de meetup locales/regionales, y charlas de conferencias de fuentes como TestBash y STAREAST (muchas se publican gratis después).</p>
      <p><strong>Libros que vale la pena leer más allá de un temario de certificación:</strong> <em>Lessons Learned in Software Testing</em> (Kaner, Bach, Pettichord) para el pensamiento dirigido por el contexto; <em>Explore It!</em> (Elisabeth Hendrickson) para una guía práctica de pruebas exploratorias; <em>Agile Testing</em> y <em>More Agile Testing</em> (Crispin &amp; Gregory) para las pruebas dentro de equipos Agile.</p>
      <p>El hábito de mayor impacto para mantenerte afilado: llevar un registro personal continuo de los errores interesantes que encuentras y cómo los encontraste — se convierte tanto en un recurso de preparación para entrevistas como en una herramienta de reconocimiento de patrones con el tiempo.</p>` },
    { h: "8.9 Herramientas y Prácticas de Pruebas de Accesibilidad", body: `
      <p>Las pruebas de accesibilidad verifican que un producto pueda ser usado por personas con discapacidades — visuales, auditivas, motoras y cognitivas — y en la mayoría de los mercados regulados también es un requisito legal, no solo un plus.</p>
      <p><strong>WCAG (Pautas de Accesibilidad para el Contenido Web)</strong> es la referencia estándar, organizada en torno a cuatro principios — el contenido debe ser <strong>Perceptible, Operable, Comprensible y Robusto</strong> (a menudo abreviado POUR) — con tres niveles de conformidad (A, AA, AAA); la mayoría de las organizaciones apuntan a <strong>AA</strong>.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Herramienta</th><th>Qué comprueba</th></tr></thead>
        <tbody>
          <tr><td><strong>axe DevTools</strong></td><td>Comprobación automatizada de reglas WCAG como extensión de navegador o librería integrada en CI; detecta texto alternativo faltante, mal contraste de color, etiquetas de formulario faltantes, etc.</td></tr>
          <tr><td><strong>Lighthouse</strong></td><td>Integrado en Chrome DevTools; da una puntuación de accesibilidad junto con rendimiento/SEO, bueno para una comprobación de referencia rápida.</td></tr>
          <tr><td><strong>Lectores de pantalla</strong> (NVDA, JAWS, VoiceOver)</td><td>Herramienta de prueba manual — navegar por la app usando solo un lector de pantalla saca a la luz problemas que los escáneres automatizados pasan por alto por completo, como un orden de lectura ilógico o elementos interactivos sin etiquetar.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Los escáneres automatizados detectan aproximadamente el 30-40% de los problemas de accesibilidad</strong> — son excelentes para comprobaciones objetivas (relaciones de contraste, atributos faltantes) pero no pueden juzgar si un texto alternativo realmente tiene sentido o si un usuario que solo usa el teclado puede completar un flujo de trabajo completo sin ratón. Una pasada de pruebas de accesibilidad real siempre incluye navegación manual solo con teclado y al menos una comprobación puntual con un lector de pantalla.</p>` }
  ]
},
{
  id: "test-architecture",
  num: 9,
  title: "QA y Arquitectura de Pruebas",
  summary: "Las decisiones de diseño detrás de una práctica de QA escalable: cómo se arquitectan realmente los frameworks de automatización, los entornos de prueba, los pipelines de CI/CD y las pruebas de sistemas distribuidos.",
  takeaway: "Probar bien a escala no es solo conocer técnicas — es arquitectónico: cómo se estructura un framework para que 200 pruebas no se conviertan en 200 lugares donde corregir el mismo localizador roto, cómo se gestionan los entornos y los datos para que las pruebas sean reproducibles, cómo se organiza un pipeline por etapas para que la retroalimentación llegue rápido, y cómo se adapta el testeo cuando un sistema deja de ser una sola unidad desplegable.",
  lessons: [
    { h: "9.1 Arquitectura de Frameworks de Automatización de Pruebas", body: `
      <p>Cómo está estructurada una suite de automatización determina si se mantiene manejable con 50 pruebas o colapsa bajo su propio peso con 500. Dos patrones dominan:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Patrón</th><th>Cómo funciona</th><th>Compensación</th></tr></thead>
        <tbody>
          <tr><td><strong>Page Object Model (POM)</strong></td><td>Cada página o componente de la UI obtiene una clase que encapsula sus localizadores y las acciones disponibles en ella; las pruebas llaman a métodos de los page objects en lugar de tocar los localizadores directamente.</td><td>Simple y ampliamente comprendido, pero puede volverse inmanejable en aplicaciones grandes con muchos page objects y componentes compartidos.</td></tr>
          <tr><td><strong>Screenplay Pattern</strong></td><td>Modela la prueba como un <strong>Actor</strong> que tiene <strong>Abilities</strong> (por ejemplo, navegar por la web), realiza <strong>Tasks</strong> (compuestas por interacciones más pequeñas), y hace <strong>Questions</strong> (aserciones sobre el estado) — composición en lugar de herencia.</td><td>Más escalable y reutilizable para suites grandes y complejas; curva de aprendizaje más pronunciada y más diseño previo que POM.</td></tr>
        </tbody>
      </table></div>
      <p><strong>La arquitectura en capas ("híbrida")</strong> separa una suite en capas distintas sin importar qué patrón de UI se use: una <strong>capa de pruebas</strong> (casos de prueba legibles, el "qué"), una <strong>capa de lógica/acciones</strong> (page objects o tareas de screenplay, el "cómo"), y una <strong>capa de datos</strong> (datos de prueba, fixtures, configuración) — mantenidas independientes para que un cambio de localizador no repercuta en la lógica de prueba, y la lógica de prueba no repercuta en las propias pruebas.</p>
      <p><strong>Diseño dirigido por datos vs. dirigido por palabras clave:</strong> las pruebas dirigidas por datos ejecutan la misma lógica de prueba contra muchos pares de entrada/salida esperada extraídos de una fuente externa (CSV, JSON, una hoja de cálculo); las pruebas dirigidas por palabras clave van más allá, expresando pasos de prueba completos como palabras clave (por ejemplo, "Login", "AddToCart") en una tabla para que personas no programadoras puedan componer nuevas pruebas a partir de bloques de construcción existentes (Robot Framework, cubierto en el Módulo 8, está construido en torno a esta idea).</p>` },
    { h: "9.2 Arquitectura de Entornos de Prueba y Gestión de Datos de Prueba", body: `
      <p><strong>El pipeline de entornos:</strong> la mayoría de las organizaciones promueven una build a través de una secuencia de entornos, cada uno con un propósito distinto:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Entorno</th><th>Propósito</th></tr></thead>
        <tbody>
          <tr><td><strong>Dev</strong></td><td>Los desarrolladores integran y verifican sus propios cambios; inestable por diseño.</td></tr>
          <tr><td><strong>QA / Test</strong></td><td>Dedicado a la ejecución estructurada de pruebas — manuales y automatizadas — contra una build relativamente estable.</td></tr>
          <tr><td><strong>Staging</strong></td><td>Refleja la configuración de producción lo más fielmente posible; la última comprobación antes del lanzamiento, a menudo usada para el visto bueno final y las pruebas de rendimiento.</td></tr>
          <tr><td><strong>Producción</strong></td><td>Tráfico real. Las prácticas de shift-right (ver 9.3) extienden las pruebas a este entorno de forma deliberada y segura.</td></tr>
        </tbody>
      </table></div>
      <p>Los <strong>entornos de prueba efímeros</strong> — creados bajo demanda por pull request o por ejecución de prueba y eliminados después — evitan el problema clásico de un único entorno de QA compartido donde el cambio a medio terminar de un equipo bloquea las pruebas de todos los demás. La contenedorización (Docker) y la orquestación (Kubernetes) son lo que hace esto práctico: una definición completa de entorno se convierte en un artefacto reproducible en lugar de una máquina configurada a mano que alguien tiene que cuidar.</p>
      <p>La <strong>virtualización de servicios</strong> sustituye a una dependencia real (una API de terceros, un servicio downstream aún no construido, un sistema costoso o arriesgado de invocar en una prueba) por una versión simulada que devuelve respuestas realistas predefinidas o basadas en reglas — herramientas como WireMock y Mountebank hacen esto. Es lo que hace posibles pruebas rápidas y fiables para un sistema con muchas dependencias externas.</p>
      <p><strong>Gestión de datos de prueba:</strong> la generación de datos sintéticos (fabricar datos con apariencia realista en lugar de usar registros reales), el enmascaramiento/anonimización de datos cuando deben usarse datos reales de producción (para proteger la PII), y las pruebas autolimpiables (cada prueba crea y elimina sus propios datos en lugar de depender de fixtures compartidos) son las tres estrategias más comunes para mantener los datos de prueba fiables y seguros.</p>` },
    { h: "9.3 Arquitectura de CI/CD y Pipelines para QA", body: `
      <p>Un pipeline típico organiza las pruebas por etapas de rápidas/baratas a lentas/costosas, de modo que una build rota falla rápido en lugar de consumir una hora antes de que alguien se entere:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Etapa</th><th>Qué se ejecuta</th><th>Duración típica</th></tr></thead>
        <tbody>
          <tr><td>1. Build</td><td>Compilar, lint, análisis estático</td><td>Segundos a un par de minutos</td></tr>
          <tr><td>2. Pruebas unitarias</td><td>Rápidas, aisladas, sin dependencias externas</td><td>Segundos a minutos</td></tr>
          <tr><td>3. Pruebas de integración / API</td><td>Dependencias de servicio reales o virtualizadas</td><td>Minutos</td></tr>
          <tr><td>4. Pruebas de UI / E2E</td><td>Pruebas full-stack de navegador o app (a menudo sobre un subconjunto de caminos críticos, no todo)</td><td>Minutos a decenas de minutos</td></tr>
          <tr><td>5. Escaneos de rendimiento / seguridad</td><td>Pruebas de carga, escaneos SAST/DAST — a menudo ejecutados con menos frecuencia que en cada commit</td><td>Minutos o más</td></tr>
          <tr><td>6. Deploy</td><td>Promoción a staging/producción, a menudo condicionada a que pasen todas las etapas previas</td><td>Minutos</td></tr>
        </tbody>
      </table></div>
      <p>La <strong>paralelización y el sharding de pruebas</strong> — dividir una suite de pruebas entre varios workers/máquinas para que se ejecute de forma concurrente en lugar de secuencial — suele ser la palanca individual más importante para mantener una suite en crecimiento lo bastante rápida como para que la gente no empiece a saltársela.</p>
      <p>Las <strong>quality gates</strong> son comprobaciones automatizadas que bloquean un merge o un despliegue cuando no se satisfacen: una tasa mínima de aprobación, un umbral de cobertura, cero hallazgos críticos de seguridad, o un presupuesto de rendimiento. La gate debe ser lo bastante estricta como para detectar regresiones reales, pero no tan estricta (o tan inestable) como para que la gente empiece a saltársela rutinariamente — una excepción que se vuelve rutinaria es una señal de que la propia gate necesita arreglarse.</p>
      <p><strong>Shift-left vs. shift-right:</strong> shift-left (cubierto en el Módulo 7) mueve las pruebas más temprano — al diseño y a la revisión de código. <strong>Shift-right</strong> es la idea complementaria: extender deliberadamente las pruebas a producción mediante canary releases (desplegar un cambio a un pequeño porcentaje del tráfico primero), feature flags (enviar código apagado y activarlo gradualmente), y monitoreo sintético (comprobaciones scripted que sondean continuamente producción como un usuario real). Las prácticas maduras de QA usan ambos extremos, no solo uno.</p>` },
    { h: "9.4 Pruebas de Sistemas Distribuidos y Microservicios", body: `
      <p>Una vez que un sistema se divide en muchos servicios desplegados de forma independiente, las pruebas tradicionales full-stack de extremo a extremo dejan de escalar — el número de combinaciones de versiones de servicio crece de forma combinatoria, y levantar "todo el sistema" para cada ejecución de prueba se vuelve lento, inestable y costoso.</p>
      <p>Las <strong>pruebas de contrato</strong> resuelven esto probando el contrato de cada par de servicios de forma aislada en lugar de toda la cadena junta. En las <strong>pruebas de contrato dirigidas por el consumidor</strong> (el modelo detrás del framework Pact), el consumidor de un servicio define las interacciones que espera; el proveedor verifica que satisface ese contrato de forma independiente, sin necesidad de levantar al consumidor en absoluto. Esto detecta cambios de API que rompen compatibilidad sin necesidad de un entorno de integración completo.</p>
      <p>Las <strong>pruebas de service mesh</strong> consideran la propia capa de red — enrutamiento, reintentos, timeouts, TLS mutuo, modelado del tráfico — que infraestructura como Istio o Linkerd gestiona entre servicios. Probar aquí suele significar verificar que la configuración de enrutamiento/políticas de la malla se comporta según lo previsto (por ejemplo, que una regla canary realmente envía el 5% del tráfico a la nueva versión), no solo probar la lógica de la aplicación.</p>
      <p>La <strong>ingeniería del caos</strong> inyecta deliberadamente fallos — matar una instancia, añadir latencia de red, agotar un recurso — en un sistema (a menudo producción, bajo condiciones controladas) para verificar que se degrada con elegancia en lugar de encadenarse en una interrupción total. Herramientas como Chaos Monkey (Netflix) y Gremlin popularizaron esto como disciplina en lugar de accidente.</p>
      <p>Las <strong>pruebas dirigidas por observabilidad</strong> usan los "tres pilares" — logs, métricas y trazas — para validar el comportamiento del sistema de forma continua, incluso en producción, donde no se puede preescribir cada escenario. En lugar de preguntar solo "¿pasó esta prueba?", pregunta "¿lo que observamos en el tráfico real coincide con lo que esperamos?" — cerrando el ciclo que abren las pruebas shift-right.</p>` },
    { h: "9.5 Elegir la Arquitectura Correcta para tu Contexto", body: `
      <p>Nada de lo anterior es una lista de verificación para adoptar por completo — es un menú del que elegir según el contexto. Una startup de cinco personas que lanza un monolito semanalmente no necesita casi nada de la maquinaria de pruebas de microservicios de 9.4; una organización de 200 ingenieros que ejecuta 40 servicios necesita la mayor parte.</p>
      <p><strong>Factores aproximados de decisión:</strong> el tamaño del equipo y el ritmo de lanzamientos (lanzamientos más rápidos empujan hacia más automatización y prácticas de shift-right), la complejidad del sistema y el número de servicios desplegados de forma independiente (impulsa la necesidad de pruebas de contrato y conciencia del service mesh), y las restricciones regulatorias/de cumplimiento (pueden empujar hacia quality gates más estrictas y una promoción de entornos más conservadora).</p>
      <p><strong>Antipatrones comunes que vale la pena nombrar:</strong></p>
      <ul>
        <li><strong>El "cono de helado"</strong> — el inverso de la Pirámide de Pruebas saludable (Módulo 7): una suite pesada en la parte superior con pruebas de UI/E2E lentas y frágiles y pocas pruebas unitarias rápidas, de modo que toda la suite es lenta, inestable y costosa de mantener.</li>
        <li><strong>Entornos de prueba compartidos y mutables</strong> — un entorno de QA en el que todos despliegan y mutan datos, lo que produce fallos inestables y difíciles de reproducir que no tienen nada que ver con el código bajo prueba.</li>
        <li><strong>Sin estrategia de datos de prueba</strong> — pruebas que dependen de datos de fixture mantenidos a mano y sin documentar que ya nadie comprende del todo, y que se rompen silenciosamente a medida que evoluciona el esquema.</li>
      </ul>
      <p>El hilo conductor de todo este módulo: las decisiones de arquitectura en QA son compensaciones entre velocidad, fiabilidad y costo de mantenimiento — no la búsqueda de una única configuración universalmente "correcta".</p>` },
    { h: "9.6 Arquitectura de Reportes de Pruebas y Observabilidad", body: `
      <p>Una suite de pruebas que se ejecuta pero produce reportes que nadie lee ni en los que nadie confía aporta poco valor — la infraestructura de reportes es tanto una decisión arquitectónica como las propias pruebas.</p>
      <p><strong>Herramientas de reportes de pruebas:</strong> Allure y ReportPortal son opciones comunes para convertir la salida cruda del ejecutor de pruebas en dashboards legibles e históricos — mostrando tendencias de aprobación/fallo a lo largo del tiempo, no solo la última ejecución, y permitiendo rastrear un fallo hasta un commit o entorno específico.</p>
      <p><strong>Qué ofrece una buena arquitectura de reportes de pruebas:</strong></p>
      <ul>
        <li><strong>Vista de tendencia histórica</strong> — si la tasa de aprobación tiende a la baja en las últimas 10 builds, no solo "si esta build pasó".</li>
        <li><strong>Detección de pruebas inestables (flaky)</strong> — señalar automáticamente las pruebas que fallan de forma intermitente sin cambio de código (ver Tasa de Flakiness, Módulo 8), para que puedan ponerse en cuarentena o corregirse en lugar de erosionar silenciosamente la confianza en la suite.</li>
        <li><strong>Triaje rápido de fallos</strong> — enlazar un fallo directamente con logs, capturas de pantalla o una grabación de video de esa ejecución específica, para que un desarrollador no tenga que reproducirlo localmente solo para ver qué pasó.</li>
        <li><strong>Propiedad y enrutamiento</strong> — los fallos notifican automáticamente al equipo dueño del área afectada, en lugar de caer en un canal que nadie monitorea.</li>
      </ul>
      <p>Esto cierra el ciclo con 9.3 y 9.4: un pipeline puede estar perfectamente organizado por etapas y un sistema perfectamente observable en producción, pero si los resultados de las pruebas en sí no se reportan de una forma sobre la que la gente realmente actúa, nada de esa arquitectura da fruto.</p>` }
  ]
},
{
  id: "security-testing",
  num: 10,
  title: "Pruebas de Seguridad y AppSec",
  summary: "Pensar como un atacante: el OWASP Top 10, las herramientas que encuentran vulnerabilidades antes que los atacantes, y cómo la seguridad se integra en el SDLC en lugar de añadirse al final.",
  takeaway: "Las pruebas de seguridad no son una disciplina separada añadida al QA al final — es la misma mentalidad de pruebas (encontrar dónde se rompe el sistema) aplicada a una pregunta distinta: no \"¿esto funciona como se pretende?\", sino \"¿se puede hacer que esto haga algo para lo que nunca estuvo pensado?\". Cuanto antes se haga esa pregunta, más barata resulta la respuesta.",
  lessons: [
    { h: "10.1 Fundamentos de las Pruebas de Seguridad y la Mentalidad del Atacante", body: `
      <p>Las pruebas funcionales preguntan "¿funciona el camino feliz, y se manejan los casos límite conocidos?" <strong>Las pruebas de seguridad hacen una pregunta fundamentalmente distinta: "¿qué pasa cuando alguien intenta deliberadamente romper las reglas?"</strong> Un formulario de inicio de sesión que rechaza correctamente una contraseña incorrecta es funcionalmente correcto — pero las pruebas de seguridad también preguntan: ¿qué pasa si el campo de contraseña recibe 50.000 caracteres, o un fragmento de SQL, o la solicitud evita el formulario por completo y llega directamente a la API?</p>
      <p><strong>Propiedades de seguridad fundamentales que los testers deben tener en cuenta (la "tríada CIA" más dos):</strong></p>
      <ul>
        <li><strong>Confidencialidad</strong> — solo las partes autorizadas pueden leer los datos.</li>
        <li><strong>Integridad</strong> — los datos no pueden ser modificados por partes no autorizadas, y la manipulación es detectable.</li>
        <li><strong>Disponibilidad</strong> — el sistema sigue siendo utilizable para los usuarios legítimos (resistiendo la denegación de servicio).</li>
        <li><strong>Autenticación</strong> — el sistema verifica correctamente quién dice ser alguien.</li>
        <li><strong>Autorización</strong> — el sistema restringe correctamente lo que un usuario autenticado puede hacer.</li>
      </ul>
      <p>El <strong>principio de mínimo privilegio</strong> — cada usuario, servicio y proceso debe tener solo el acceso mínimo que necesita para hacer su trabajo, nada más — es el principio único que subyace a la mayoría de las clases de vulnerabilidad de 10.2 y 10.3: casi toda brecha grave involucra algo con más acceso del que necesitaba.</p>` },
    { h: "10.2 Análisis Profundo del OWASP Top 10", body: `
      <p>El <strong>OWASP Top 10</strong> es la lista más ampliamente referenciada de riesgos críticos de seguridad en aplicaciones web, publicada por el Open Worldwide Application Security Project y actualizada periódicamente en base a datos del mundo real. Es el vocabulario de partida estándar para las pruebas conscientes de la seguridad:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Riesgo</th><th>Qué significa</th></tr></thead>
        <tbody>
          <tr><td><strong>Control de Acceso Roto</strong></td><td>Los usuarios pueden actuar fuera de sus permisos previstos — por ejemplo, cambiar un ID en una URL para ver los datos de otro usuario.</td></tr>
          <tr><td><strong>Fallos Criptográficos</strong></td><td>Datos sensibles expuestos debido a cifrado débil, ausente o mal configurado (en tránsito o en reposo).</td></tr>
          <tr><td><strong>Inyección</strong></td><td>Una entrada no confiable se interpreta como código/comandos por un intérprete — Inyección SQL, Inyección de Comandos, etc. (ver 10.3).</td></tr>
          <tr><td><strong>Diseño Inseguro</strong></td><td>Un defecto en el propio diseño, no solo en la implementación — ninguna cantidad de codificación segura corrige un diseño fundamentalmente inseguro.</td></tr>
          <tr><td><strong>Configuración de Seguridad Incorrecta</strong></td><td>Credenciales por defecto, funcionalidades innecesarias habilitadas, mensajes de error detallados que filtran internos, encabezados de seguridad faltantes.</td></tr>
          <tr><td><strong>Componentes Vulnerables y Desactualizados</strong></td><td>Usar librerías/frameworks con vulnerabilidades conocidas y sin parchear — ver el escaneo de dependencias en 10.4.</td></tr>
          <tr><td><strong>Fallos de Identificación y Autenticación</strong></td><td>Políticas de contraseñas débiles, fijación de sesión, autenticación multifactor faltante, tokens de sesión predecibles.</td></tr>
          <tr><td><strong>Fallos de Integridad de Software y Datos</strong></td><td>Confiar en código/datos (por ejemplo, actualizaciones automáticas, pipelines de CI/CD, plugins) sin verificar su integridad.</td></tr>
          <tr><td><strong>Fallos de Registro y Monitoreo de Seguridad</strong></td><td>Los ataques pasan desapercibidos porque nada se registra, o los logs no se monitorean/alertan.</td></tr>
          <tr><td><strong>Falsificación de Solicitud del Lado del Servidor (SSRF)</strong></td><td>Un atacante engaña al servidor para que haga solicitudes a destinos internos o externos no previstos.</td></tr>
        </tbody>
      </table></div>
      <p>Probar contra esta lista no significa hacer pruebas de penetración profundas para cada riesgo — incluso los testers manuales pueden comprobar de forma significativa configuraciones incorrectas, flujos de autenticación débiles y mensajes de error demasiado detallados sin herramientas de seguridad especializadas.</p>` },
    { h: "10.3 Clases Comunes de Vulnerabilidades", body: `
      <p>Una mirada más cercana a las clases de vulnerabilidades que los testers encuentran con más frecuencia en la práctica:</p>
      <p><strong>Inyección SQL (SQLi)</strong> — una entrada no confiable se concatena directamente en una consulta SQL en lugar de parametrizarse correctamente, permitiendo a un atacante alterar la lógica de la consulta. Prueba clásica: ingresar <code>' OR '1'='1</code> en un campo de inicio de sesión para ver si evita la autenticación. Solución: consultas parametrizadas/sentencias preparadas, nunca SQL concatenado con cadenas.</p>
      <p><strong>Cross-Site Scripting (XSS)</strong> — una entrada no confiable se renderiza como script ejecutable en el navegador de otro usuario. El <strong>XSS almacenado</strong> persiste el script malicioso (por ejemplo, en un campo de comentario, renderizado después a otros usuarios); el <strong>XSS reflejado</strong> lo rebota inmediatamente en una respuesta (por ejemplo, mediante una URL manipulada); el <strong>XSS basado en DOM</strong> ocurre enteramente del lado del cliente mediante manipulación insegura del DOM en JavaScript. Se prueba enviando un payload de script inofensivo (por ejemplo, <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>) en cada campo de entrada y comprobando si se ejecuta en lugar de mostrarse como texto.</p>
      <p><strong>Cross-Site Request Forgery (CSRF)</strong> — un sitio malicioso engaña al navegador de un usuario con sesión iniciada para que envíe una solicitud no deseada a un sitio de destino donde está autenticado (por ejemplo, un formulario invisible de autoenvío que cambia el correo de la víctima). Defensas: tokens CSRF, atributos de cookie SameSite.</p>
      <p><strong>Control de Acceso Roto / IDOR (Referencia Directa a Objeto Insegura)</strong> — el sistema no verifica que el usuario actual esté realmente autorizado a acceder al recurso específico que solicita, a menudo explotado simplemente cambiando un ID en una URL o llamada a la API (por ejemplo, <code>/api/orders/1001</code> → <code>/api/orders/1002</code>) y viendo si vuelven los datos de otro usuario.</p>
      <p><strong>Fallos de autenticación/autorización</strong> — flujos débiles de restablecimiento de contraseña, tokens de sesión que no expiran, ausencia de limitación de tasa en el inicio de sesión (permitiendo fuerza bruta), y escalamiento de privilegios (un usuario normal obteniendo acciones de nivel administrador) caen todos aquí — ver 10.6 para cómo el modelado de amenazas ayuda a detectar esto antes del lanzamiento.</p>` },
    { h: "10.4 Herramientas y Técnicas de Pruebas de Seguridad", body: `
      <p>Las herramientas de pruebas de seguridad suelen describirse por <strong>cuándo</strong> se ejecutan y <strong>qué</strong> pueden ver:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Enfoque</th><th>Cómo funciona</th><th>Herramientas de ejemplo</th></tr></thead>
        <tbody>
          <tr><td><strong>SAST</strong> (Pruebas de Seguridad de Aplicaciones Estáticas)</td><td>Escanea el código fuente sin ejecutarlo, buscando patrones conocidos como peligrosos (por ejemplo, SQL concatenado con cadenas, secretos hardcodeados). Se ejecuta temprano — puede formar parte de cada commit.</td><td>SonarQube, Semgrep, Checkmarx</td></tr>
          <tr><td><strong>DAST</strong> (Pruebas de Seguridad de Aplicaciones Dinámicas)</td><td>Ataca una aplicación en ejecución desde el exterior, como lo haría un atacante real, sin conocimiento del código fuente. Detecta problemas de tiempo de ejecución/configuración que SAST no puede ver.</td><td>OWASP ZAP, Burp Suite</td></tr>
          <tr><td><strong>IAST</strong> (Pruebas de Seguridad de Aplicaciones Interactivas)</td><td>Combina ambos enfoques — un agente instrumentado dentro de una aplicación en ejecución observa el tráfico/ejecución real para encontrar vulnerabilidades con más contexto y menos falsos positivos que DAST solo.</td><td>Contrast Security, Seeker</td></tr>
          <tr><td><strong>SCA</strong> (Análisis de Composición de Software / escaneo de dependencias)</td><td>Escanea librerías y dependencias de terceros en busca de CVEs conocidos (vulnerabilidades publicadas), abordando directamente el riesgo de "Componentes Vulnerables y Desactualizados".</td><td>Snyk, Dependabot, OWASP Dependency-Check</td></tr>
        </tbody>
      </table></div>
      <p>Una práctica de AppSec madura combina estos enfoques en capas en lugar de elegir uno solo: SAST y SCA se ejecutan en cada commit (rápido, barato, detecta patrones conocidos), mientras que DAST se ejecuta con menos frecuencia contra un entorno desplegado (más lento, pero detecta lo que el análisis estático estructuralmente no puede ver).</p>` },
    { h: "10.5 Fundamentos de las Pruebas de Penetración", body: `
      <p>Las <strong>pruebas de penetración</strong> ("pen testing") son un ataque autorizado y simulado a un sistema para encontrar vulnerabilidades explotables antes que los atacantes reales — se distinguen del escaneo automatizado de 10.4 en que involucran a un humano capacitado encadenando activamente debilidades de la forma en que lo haría un adversario real.</p>
      <p><strong>Fases típicas:</strong></p>
      <ol>
        <li><strong>Reconocimiento</strong> — recopilar información sobre el objetivo (tecnologías usadas, endpoints expuestos, información de empleados/organizacional).</li>
        <li><strong>Escaneo</strong> — identificar hosts activos, puertos abiertos y servicios, a menudo usando herramientas automatizadas como punto de partida.</li>
        <li><strong>Explotación</strong> — intentar activamente explotar las debilidades descubiertas para obtener acceso o extraer datos.</li>
        <li><strong>Post-explotación</strong> — evaluar hasta dónde podría llegar un atacante desde ese punto de apoyo inicial (escalamiento de privilegios, movimiento lateral).</li>
        <li><strong>Reporte</strong> — documentar los hallazgos con severidad, evidencia y guía de remediación — el entregable real que hace valioso a un pen test.</li>
      </ol>
      <p><strong>Los tipos de prueba por nivel de conocimiento</strong> reflejan la distinción de caja negra/blanca/gris del Módulo 1: pen testing de <strong>caja negra</strong> (sin conocimiento interno, como un atacante externo), <strong>caja blanca</strong> (acceso completo al código/arquitectura, la cobertura más profunda), y <strong>caja gris</strong> (conocimiento parcial, por ejemplo una cuenta válida de bajo privilegio — a menudo la simulación más realista de una amenaza interna o una cuenta comprometida).</p>
      <p><strong>El alcance y la autorización importan enormemente</strong> — un pen test siempre opera bajo un acuerdo firmado que define exactamente qué está dentro del alcance y un permiso explícito por escrito; sin eso, las mismas acciones exactas son simplemente hacking ilegal y no autorizado.</p>` },
    { h: "10.6 AppSec en el SDLC: Modelado de Amenazas y Revisión Segura de Código", body: `
      <p>El <strong>modelado de amenazas</strong> es un ejercicio estructurado, realizado durante el diseño (antes de escribir código), para identificar qué podría salir mal y cómo defenderse. Un framework común es <strong>STRIDE</strong>:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Letra</th><th>Categoría de amenaza</th></tr></thead>
        <tbody>
          <tr><td><strong>S</strong></td><td>Spoofing (Suplantación) — fingir ser otra persona/cosa</td></tr>
          <tr><td><strong>T</strong></td><td>Tampering (Manipulación) — modificar datos o código sin autorización</td></tr>
          <tr><td><strong>R</strong></td><td>Repudiation (Repudio) — negar haber realizado una acción, sin forma de demostrar lo contrario</td></tr>
          <tr><td><strong>I</strong></td><td>Information Disclosure (Divulgación de Información) — exponer información a quienes no están autorizados a verla</td></tr>
          <tr><td><strong>D</strong></td><td>Denial of Service (Denegación de Servicio) — degradar o denegar el acceso legítimo</td></tr>
          <tr><td><strong>E</strong></td><td>Elevation of Privilege (Elevación de Privilegios) — obtener capacidades sin la autorización adecuada</td></tr>
        </tbody>
      </table></div>
      <p>Recorrer STRIDE contra el diagrama de flujo de datos de un sistema — preguntando para cada componente y flujo de datos "¿podría esto ser suplantado / manipulado / etc.?" — detecta vacíos de seguridad a nivel de diseño de forma mucho más barata que encontrarlos después del lanzamiento (esta es la versión específica de seguridad de "Probar temprano ahorra tiempo y dinero", Módulo 7).</p>
      <p>La <strong>revisión segura de código</strong> extiende la revisión de código ordinaria con una lente de seguridad: comprobar secretos hardcodeados, consultas sin parametrizar, validación de entrada faltante y deserialización insegura de datos no confiables. Funciona mejor combinada con herramientas SAST (10.4) — la automatización detecta los patrones mecánicos, la revisión humana detecta los problemas de lógica y diseño que la automatización estructuralmente no puede razonar.</p>
      <p>Esto es lo que significa "seguridad shift-left" en concreto: modelado de amenazas en el momento del diseño y revisión segura de código en el momento de la implementación, en lugar de que las pruebas de seguridad solo aparezcan justo antes del lanzamiento.</p>` },
    { h: "10.7 Seguridad en CI/CD y Fundamentos de Cumplimiento", body: `
      <p><strong>La seguridad como puerta del pipeline:</strong> extender las quality gates del Módulo 9 con comprobaciones específicas de seguridad — escaneos SAST/SCA que bloquean un merge ante nuevos hallazgos críticos, escaneo de secretos que evita que las credenciales lleguen a comprometerse jamás, y escaneo de imágenes de contenedores antes de un despliegue. El objetivo es el mismo que el de cualquier práctica shift-left: detectarlo en minutos durante CI, no en una llamada de respuesta a incidentes después del lanzamiento.</p>
      <p><strong>Zero trust (confianza cero)</strong> es un principio arquitectónico relevante para cómo se prueban los sistemas: nunca asumir que una solicitud es segura solo porque proviene del interior del perímetro de red — cada solicitud se autentica y autoriza según sus propios méritos, sin importar su origen. Esto cambia lo que las pruebas "internas" necesitan comprobar: un servicio interno que llama a otro servicio interno todavía necesita demostrar quién es.</p>
      <p><strong>Preocupaciones de pruebas relacionadas con el cumplimiento</strong> (no un sustituto de una auditoría de cumplimiento real, pero relevantes para lo que se le pide verificar a un equipo de QA):</p>
      <ul>
        <li><strong>SOC 2</strong> — comúnmente requiere evidencia de controles de acceso, gestión de cambios y monitoreo; a menudo se pide a los equipos de QA que demuestren que los procesos de prueba/despliegue tienen aprobaciones y rastros de auditoría adecuados.</li>
        <li><strong>Preocupaciones relacionadas con el RGPD (GDPR)</strong> — probar que la eliminación de datos realmente funciona de principio a fin (una solicitud de "eliminar mi cuenta" debería realmente eliminar los datos, incluidas copias de seguridad/réplicas según su calendario de retención), y que la PII esté enmascarada/anonimizada en entornos de prueba que no son de producción (relacionado con la Gestión de Datos de Prueba, Módulo 9).</li>
      </ul>
      <p>Nada de esto hace a un equipo de QA responsable del cumplimiento regulatorio completo — pero conocer estas preocupaciones es lo que permite a un tester reconocer cuándo un hallazgo ("los datos de prueba contienen correos reales de clientes") es en realidad un problema de cumplimiento, no solo una falta de higiene de datos.</p>` }
  ]
},
{
  id: "performance-ux-automation",
  num: 11,
  title: "Pruebas de Rendimiento, UI/UX y Automatización en la Práctica",
  summary: "Poniendo la caja de herramientas a trabajar: ejecutar una prueba de carga, evaluar la usabilidad con heurísticas reales, escribir tu primera prueba automatizada, y conocer qué herramientas adicionales cubren los vacíos.",
  takeaway: "Cada técnica y herramienta cubierta hasta ahora se junta aquí: este módulo trata de realmente ejecutar una prueba de carga, realmente evaluar una UI contra una heurística de usabilidad, y realmente escribir una prueba automatizada — no solo reconocer el vocabulario para ellas.",
  lessons: [
    { h: "11.1 Pruebas de Carga y Rendimiento en la Práctica", body: `
      <p>Las pruebas de rendimiento tienen varias variantes distintas, y elegir la incorrecta para tu objetivo desperdicia un ciclo de pruebas:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Tipo</th><th>Qué comprueba</th><th>Cómo se ejecuta</th></tr></thead>
        <tbody>
          <tr><td><strong>Pruebas de Carga</strong></td><td>Comportamiento bajo carga esperada y realista</td><td>Aumentar gradualmente hasta el número de usuarios concurrentes esperado y mantenerlo estable, midiendo el tiempo de respuesta y la tasa de error.</td></tr>
          <tr><td><strong>Pruebas de Estrés</strong></td><td>Dónde realmente se rompe el sistema</td><td>Seguir aumentando la carga más allá de los niveles esperados hasta el fallo, para encontrar el límite y qué tan elegantemente (o no) se degrada.</td></tr>
          <tr><td><strong>Pruebas de Picos (Spike Testing)</strong></td><td>Ráfagas de tráfico repentinas y extremas</td><td>Aumentar la carga abruptamente (por ejemplo, de 100 a 5.000 usuarios en segundos) — simula una campaña de marketing o un momento viral.</td></tr>
          <tr><td><strong>Pruebas de Resistencia (Soak Testing)</strong></td><td>Comportamiento durante una duración larga y sostenida</td><td>Ejecutar carga moderada durante muchas horas o días, vigilando fugas de memoria y el agotamiento lento de recursos que las pruebas cortas nunca revelan.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Métricas que importan:</strong> el tiempo de respuesta promedio es engañoso por sí solo — un sistema que promedia 200ms todavía podría dejar al 5% de los usuarios esperando 4 segundos. Por eso los resultados de rendimiento se reportan normalmente como <strong>percentiles</strong>: <strong>p95</strong> (el 95% de las solicitudes fueron más rápidas que esto) y <strong>p99</strong> (el 99% lo fueron) revelan la experiencia del extremo de la cola que el promedio por sí solo oculta. El <strong>throughput</strong> (solicitudes atendidas por segundo) y la tasa de error bajo carga completan el conjunto principal de métricas.</p>
      <p><strong>Un flujo de trabajo básico de prueba de carga:</strong> definir escenarios de usuario realistas (no solo golpear un endpoint en un bucle) → establecer un perfil de carga objetivo (patrón de incremento, concurrencia máxima, duración) → ejecutarlo contra un entorno que no sea de producción pero dimensionado como producción → capturar el tiempo de respuesta p95/p99, el throughput y la tasa de error → comparar contra el umbral acordado (ver la lección de pruebas no funcionales del Módulo 3) → reportar y volver a probar después de cualquier corrección.</p>` },
    { h: "11.2 Metodología de Pruebas de UI/UX", body: `
      <p>Las pruebas de UI comprueban que la interfaz se renderiza y se comporta correctamente (los botones funcionan, los diseños no se rompen); <strong>las pruebas de UX van más allá y preguntan si la experiencia realmente sirve bien al usuario</strong> — son preguntas distintas que requieren métodos distintos.</p>
      <p><strong>Evaluación heurística</strong> — evaluar una UI contra un conjunto conocido de principios de usabilidad sin necesitar usuarios reales. Las 10 heurísticas de usabilidad de Jakob Nielsen son el punto de partida más utilizado, incluyendo: visibilidad del estado del sistema, correspondencia entre el sistema y el mundo real, control y libertad del usuario, consistencia y estándares, prevención de errores, y reconocimiento en lugar de recuerdo. Un tester puede realizar una pasada heurística solo en una tarde y detectar una parte significativa de los problemas de usabilidad antes de siquiera reclutar a un usuario.</p>
      <p><strong>Pruebas de usabilidad con usuarios reales</strong> — sesiones basadas en tareas ("encuentra y compra una camiseta azul talla mediana") donde observas, sin guiar; un <strong>protocolo de pensar en voz alta</strong> (pedir al participante que narre sus pensamientos mientras avanza) revela confusión que la observación silenciosa por sí sola pasa por alto. Incluso 5 usuarios en una sesión típicamente revelan la mayoría de los problemas de usabilidad importantes de un diseño — no se necesita una muestra enorme para obtener una señal real.</p>
      <p><strong>Pruebas A/B</strong> — ejecutar dos variantes de un diseño con tráfico real de producción dividido entre ellas y comparar una métrica objetivo (tasa de conversión, finalización de tareas, tiempo en tarea). A diferencia de la evaluación heurística o las sesiones de usabilidad moderadas, las pruebas A/B miden el comportamiento real a escala en lugar del comportamiento observado o autoreportado en una sesión — los dos enfoques son complementarios, no sustitutos entre sí.</p>
      <p><strong>Pruebas de regresión visual</strong> — comparar automáticamente capturas de pantalla de la UI antes y después de un cambio para detectar roturas visuales no intencionadas (ver Applitools/Percy, Módulo 8) — esta es la porción automatizable de las pruebas de UI; el trabajo basado en juicio de las heurísticas y los usuarios reales anteriores no es algo que la automatización reemplace.</p>` },
    { h: "11.3 Automatización de Pruebas en la Práctica: Escribiendo tu Primera Prueba Automatizada", body: `
      <p>Pasando de la teoría (la arquitectura de frameworks del Módulo 9) a la práctica — cómo luce realmente una prueba de UI automatizada y los hábitos que la mantienen fiable:</p>
      <p><strong>Una prueba mínima de Playwright</strong> (conceptualmente — la sintaxis varía según el enlace de lenguaje):</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Paso</th><th>Qué hace</th></tr></thead>
        <tbody>
          <tr><td>1. Navegar</td><td>Abrir la URL objetivo en un contexto de navegador nuevo.</td></tr>
          <tr><td>2. Localizar</td><td>Encontrar el elemento con el que interactuar — preferir un localizador de rol o test-id sobre un selector CSS frágil ligado al estilo.</td></tr>
          <tr><td>3. Actuar</td><td>Hacer clic, escribir o interactuar de otra forma con el elemento localizado.</td></tr>
          <tr><td>4. Afirmar</td><td>Comprobar que el estado resultante coincide con lo esperado (el texto apareció, la URL cambió, el elemento se volvió visible).</td></tr>
        </tbody>
      </table></div>
      <p><strong>Qué distingue a una prueba automatizada fiable de una inestable:</strong></p>
      <ul>
        <li><strong>Preferir la espera automática sobre las esperas fijas</strong> — un <code>wait(2000)</code> hardcodeado es demasiado corto (sigue siendo inestable) o demasiado largo (ralentiza toda la suite); las herramientas modernas (Playwright, Cypress) esperan automáticamente a que un elemento sea accionable.</li>
        <li><strong>Estabilidad del localizador</strong> — un localizador ligado a un atributo <code>data-testid</code> dedicado sobrevive a un rediseño; uno ligado a una clase CSS usada para el estilo se rompe en el momento en que un diseñador cambia esa clase.</li>
        <li><strong>Independencia de las pruebas</strong> — cada prueba debería establecer su propio estado y no depender de que otra prueba se haya ejecutado antes (o en un orden específico) — las pruebas dependientes del orden son una fuente común y difícil de diagnosticar del problema "funciona sola, falla en la suite".</li>
        <li><strong>Un enfoque de aserción claro por prueba</strong> — una prueba que comprueba cinco cosas no relacionadas falla de forma ambigua; las pruebas más pequeñas y enfocadas fallan con una señal clara y específica.</li>
      </ul>
      <p>Aquí es donde el Page Object Model / Screenplay Pattern del Módulo 9.1 demuestra su valor: los localizadores y acciones anteriores viven en un solo lugar, así que un rediseño significa actualizar un objeto de página, no cincuenta pruebas individuales.</p>` },
    { h: "11.4 Herramientas Adicionales que Vale la Pena Conocer", body: `
      <p>Completando la caja de herramientas del Módulo 8 con herramientas específicas para rendimiento, cobertura entre navegadores/dispositivos, y automatización low-code:</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Categoría</th><th>Herramientas</th><th>Notas</th></tr></thead>
        <tbody>
          <tr><td><strong>Pruebas en la nube entre navegadores/dispositivos</strong></td><td>BrowserStack, Sauce Labs, LambdaTest</td><td>Ejecutar la misma suite de pruebas contra combinaciones reales de navegador/SO/dispositivo en la nube, sin mantener un laboratorio físico de dispositivos.</td></tr>
          <tr><td><strong>Automatización low-code / grabar y reproducir</strong></td><td>Katalon Studio, TestCafe, Ghost Inspector</td><td>Bajan la barrera de entrada para equipos sin ingenieros de automatización dedicados — la contrapartida es típicamente menos flexibilidad que los frameworks basados en código para lógica compleja.</td></tr>
          <tr><td><strong>Comparación visual/perceptual</strong></td><td>Applitools Eyes, Percy, Chromatic</td><td>Cubierto en el Módulo 8 — vale la pena volver a mencionarlo aquí junto con las otras herramientas de pruebas de UI, ya que la regresión visual es parte de una estrategia completa de pruebas de UI.</td></tr>
          <tr><td><strong>Pruebas específicas de móvil</strong></td><td>Appium (Módulo 8), Firebase Test Lab, simuladores de Xcode/Android Studio</td><td>Las granjas de dispositivos reales en la nube (vía BrowserStack/Sauce Labs) detectan problemas de renderizado y rendimiento específicos del dispositivo que los simuladores pueden pasar por alto.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Pruebas continuas</strong> — la práctica de ejecutar pruebas automatizadas continuamente a lo largo del pipeline (no solo antes del lanzamiento) para que la retroalimentación sobre cada cambio llegue en minutos — conecta este módulo directamente de vuelta con la arquitectura de pipeline del Módulo 9.3: ninguna de estas herramientas aporta valor estando fuera de un pipeline que realmente las ejecute en cada cambio.</p>` }
  ]
}
  ],
  quizzes: {
    "manual-testing": [
      { q: "Según el IBM System Sciences Institute, ¿cuánto más cuesta aproximadamente corregir un error encontrado en la implementación frente a uno encontrado en la fase de diseño?", options: ["2 veces más", "6 veces más", "15 veces más", "Cuesta lo mismo"], correct: 1, explain: "El IBM System Sciences Institute descubrió que un defecto detectado en la implementación cuesta alrededor de 6 veces más corregirlo que uno detectado en el diseño — el argumento central para probar temprano." },
      { q: "¿Qué proporción de proyectos cita la validación de UX como una razón principal para las pruebas manuales?", options: ["Más del 70%", "Alrededor del 10%", "Exactamente el 50%", "Menos del 5%"], correct: 0, explain: "Más del 70% de los proyectos citan la UX — disposición, estética y retroalimentación — como una razón principal por la que se necesitan testers humanos." },
      { q: "¿Qué clasificación de las pruebas manuales se basa en NO tener conocimiento del código interno de la aplicación?", options: ["Pruebas de caja blanca", "Pruebas de caja gris", "Pruebas de caja negra", "Pruebas unitarias"], correct: 2, explain: "Las pruebas de caja negra verifican la funcionalidad usando solo requisitos y especificaciones, sin conocimiento del código interno." },
      { q: "¿Cuál de estos es uno de los cinco objetivos principales de las pruebas manuales enumerados en este tutorial?", options: ["Cobertura de automatización", "Confianza en la regresión", "Balanceo de carga", "Refactorización de código"], correct: 1, explain: "Los cinco objetivos principales son identificación de errores, validación de requisitos, garantía de la experiencia de usuario, confianza en la regresión y entrega de calidad." },
      { q: "¿Cuál de estas se enumera como una desventaja de las pruebas manuales para aplicaciones grandes y complejas?", options: ["Demasiado rápidas para detectar errores", "No son escalables", "Requieren fuertes habilidades de programación", "No pueden involucrar juicio humano"], correct: 1, explain: "Las pruebas manuales consumen mucho tiempo y no escalan bien para aplicaciones grandes o complejas — por eso la automatización existe junto a ellas." },
      { q: "En el caso de estudio del sistema de gestión hospitalaria, ¿qué está validando principalmente el tester manual?", options: ["Los tiempos de respuesta del servidor bajo carga", "Que la app compile sin errores", "Secuencias de flujos de trabajo del mundo real a través del registro, la programación y la facturación", "Las convenciones de estilo del código fuente"], correct: 2, explain: "El caso de estudio trata de validar que los datos ingresados en un flujo de trabajo (por ejemplo, el registro) lleguen correctamente a las pantallas posteriores (facturación, vistas del médico) — una secuencia de uso del mundo real." },
      { q: "Según la comparación entre Pruebas Manuales y de Automatización, ¿qué enfoque requiere habilidad de programación además de conocimiento de pruebas?", options: ["Pruebas manuales", "Pruebas de automatización", "Ninguno", "Ambos por igual, sin distinción"], correct: 1, explain: "Las pruebas de automatización requieren programación más conocimiento de pruebas, mientras que las pruebas manuales necesitan conocimiento del dominio y de pruebas, pero no de programación." },
      { q: "¿Cuál es la diferencia clave entre la Severidad y la Prioridad de un defecto?", options: ["Significan exactamente lo mismo", "La severidad es el impacto técnico; la prioridad es la urgencia con la que debe corregirse desde una perspectiva de negocio", "La severidad la establece el equipo de producto, la prioridad la establece el tester", "La prioridad solo aplica a las pruebas automatizadas"], correct: 1, explain: "La severidad y la prioridad son ejes independientes — un error de alta severidad en un área poco usada puede tener baja prioridad, mientras que un error de baja severidad pero muy visible puede tener alta prioridad." },
      { q: "¿Cuál es la razón más común por la que un reporte de error se devuelve al reportero en lugar de corregirse?", options: ["El reporte es demasiado corto", "Faltan los pasos para reproducir", "La severidad se estableció demasiado alta", "Lo encontró un tester junior"], correct: 1, explain: "Sin pasos de reproducción claros y exactos, un desarrollador a menudo no puede confirmar ni diagnosticar el problema, por lo que el reporte se devuelve para pedir más detalle antes de poder corregirlo." }
    ],
    "test-techniques": [
      { q: "Para un rango de entrada válido de 1–10, ¿qué valores probaría el Análisis de Valores Límite?", options: ["1, 5, 10", "0, 1, 2, 9, 10, 11", "-10, 0, 10, 20", "Cada número entero del 1 al 10"], correct: 1, explain: "El AVL prueba justo dentro, en y justo fuera de cada límite: 0, 1, 2 (límite inferior) y 9, 10, 11 (límite superior)." },
      { q: "¿Qué técnica divide las entradas en grupos válidos e inválidos y prueba un valor representativo de cada uno?", options: ["Análisis de valores límite", "Pruebas de tabla de decisión", "Partición en clases de equivalencia", "Pruebas de transición de estados"], correct: 2, explain: "La Partición en Clases de Equivalencia (PCE) asume que todos los valores de una clase se comportan igual, por lo que probar uno representativo por clase es suficiente." },
      { q: "¿Qué principio de pruebas establece que ejecutar las mismas pruebas repetidamente eventualmente deja de encontrar errores nuevos?", options: ["Agrupamiento de defectos", "Paradoja del pesticida", "Falacia de ausencia de errores", "Las pruebas exhaustivas son imposibles"], correct: 1, explain: "La Paradoja del pesticida: reutilizar las mismas pruebas las vuelve 'inmunes' a encontrar defectos nuevos, por lo que las pruebas deben revisarse y actualizarse." },
      { q: "¿Qué principio describe que una pequeña cantidad de módulos contiene la mayoría de los defectos de un sistema?", options: ["Agrupamiento de defectos", "Probar temprano ahorra tiempo y dinero", "Las pruebas dependen del contexto", "Paradoja del pesticida"], correct: 0, explain: "El Agrupamiento de defectos observa que los defectos tienden a concentrarse en una pequeña cantidad de módulos." },
      { q: "¿Qué técnica usarías para probar un botón 'Enviar' que solo se habilita cuando todos los campos del formulario están completos?", options: ["Adivinación de errores", "Análisis de valores límite", "Pruebas de tabla de decisión", "Pruebas de rutas"], correct: 2, explain: "Las Pruebas de tabla de decisión mapean combinaciones de condiciones de entrada (qué campos están completos) a las salidas esperadas (botón habilitado o no)." },
      { q: "En el ejemplo de Transición de Estados de inicio de sesión con PIN, ¿qué sucede después de 3 intentos de PIN incorrectos seguidos?", options: ["Acceso concedido", "El contador se reinicia a 0", "Cuenta bloqueada", "Nada cambia"], correct: 2, explain: "Según la tabla de estados, tres intentos incorrectos consecutivos mueven el sistema al estado 'Cuenta bloqueada'." },
      { q: "¿Qué técnica se basa puramente en la intuición del tester y en datos históricos de defectos, sin pasos formales?", options: ["Adivinación de errores", "Partición en clases de equivalencia", "Pruebas de tabla de decisión", "Análisis de valores límite"], correct: 0, explain: "La Adivinación de errores no tiene pasos formales — depende por completo de la experiencia del tester y de su conocimiento de dónde suelen aparecer los errores." },
      { q: "¿Cuál es la recomendación de mejor práctica para elegir una técnica de diseño de pruebas?", options: ["Usar siempre solo el Análisis de valores límite", "Depender de una sola técnica por consistencia", "Combinar varias técnicas en lugar de depender de una sola", "Saltarse la selección de técnica y probar todo exhaustivamente"], correct: 2, explain: "Ninguna técnica por sí sola garantiza la detección total de defectos, por lo que se recomienda combinar varias técnicas." },
      { q: "¿Por qué son útiles las pruebas por pares (pairwise) para una funcionalidad con muchos parámetros de entrada independientes?", options: ["Prueban todas las combinaciones posibles, garantizando cobertura total", "Cubren cada par de valores de parámetros con muchos menos casos de prueba, ya que la mayoría de los defectos provienen de interacciones entre dos parámetros", "Solo funcionan para valores límite", "Reemplazan por completo la necesidad de la partición de equivalencia"], correct: 1, explain: "Las pruebas por pares se basan en la observación de que la mayoría de los defectos de interacción involucran solo dos parámetros, por lo que cubrir cada par (no cada combinación completa) detecta la mayoría de los problemas de forma mucho más barata." },
      { q: "¿De qué derivan los casos de prueba las Pruebas de Casos de Uso?", options: ["Generación aleatoria de datos", "Interacciones documentadas paso a paso entre un actor y el sistema, incluyendo flujos alternativos/de excepción", "Cobertura de ramas del código fuente", "Valores límite de un único campo de entrada"], correct: 1, explain: "Las Pruebas de Casos de Uso construyen casos de prueba directamente a partir del escenario de éxito principal y de los flujos alternativos/de excepción de un caso de uso documentado, validando un flujo de trabajo de principio a fin desde la perspectiva del usuario." }
    ],
    "testing-types": [
      { q: "¿Qué define a un 'tipo' de prueba de software, según este módulo?", options: ["Solo la herramienta usada para ejecutarla", "Una clasificación con su propio objetivo, estrategia y entregables", "El lenguaje de programación del sistema bajo prueba", "Cuánto tiempo tarda en ejecutarse la prueba"], correct: 1, explain: "Un tipo de prueba es una clasificación — como las Pruebas de accesibilidad — con un objetivo, una estrategia y unos entregables específicos." },
      { q: "¿Qué categoría agrupa tipos de prueba como las Pruebas unitarias, de ramas y de rutas?", options: ["Funcional", "No funcional", "Estructural (caja blanca)", "Relacionada con cambios"], correct: 2, explain: "Todas estas son técnicas de caja blanca/estructurales que examinan los caminos internos del código de un sistema." },
      { q: "Las Pruebas de regresión y las Pruebas de humo pertenecen mejor a qué categoría en la taxonomía del módulo?", options: ["Especializada", "Relacionada con cambios", "Estructural", "No funcional"], correct: 1, explain: "Ambas se desencadenan por un cambio (una corrección, una nueva build) y comprueban que el cambio no haya roto nada — Relacionada con cambios." },
      { q: "¿Cuál de estos forma parte del 'Top 20 de tipos de pruebas que todo QA debería conocer' seleccionado en el módulo?", options: ["Pruebas de inyección de fallos", "Pruebas de usabilidad", "Pruebas de matriz ortogonal", "Pruebas dirigidas por modularidad"], correct: 1, explain: "Las Pruebas de usabilidad son una de las 20 entradas de alto valor y fácilmente reconocibles que el módulo destaca como punto de partida." },
      { q: "¿Las Pruebas de accesibilidad se clasifican mejor bajo qué categoría?", options: ["Especializada", "Estructural", "Relacionada con cambios", "Funcional"], correct: 0, explain: "Las Pruebas de accesibilidad abordan una preocupación puntual y especializada — la usabilidad para personas con discapacidades." },
      { q: "¿Dónde vive el catálogo completo de más de 105 términos de tipos de prueba en esta app?", options: ["Solo en el texto de este módulo", "El Glosario", "El Examen Final", "No está incluido"], correct: 1, explain: "El módulo enlaza al Glosario, que contiene el catálogo completo extraído de los tipos de pruebas." },
      { q: "¿Por qué las pruebas no funcionales necesitan un umbral explícito definido antes de empezar a probar?", options: ["No lo necesitan — 'lo suficientemente bueno' siempre es obvio", "Sin uno, 'qué tan bien' no tiene una línea de aprobado/reprobado, solo opiniones", "Los umbrales solo son necesarios para las pruebas funcionales", "Los umbrales ralentizan innecesariamente el proceso de pruebas"], correct: 1, explain: "Una afirmación como 'la página carga en menos de 2s con 500 usuarios concurrentes' da una línea clara de aprobado/reprobado — sin un umbral acordado, los resultados no funcionales son solo opiniones subjetivas." },
      { q: "¿Por qué es útil la pseudo-localización (cadenas artificialmente alargadas/acentuadas) antes de que existan traducciones reales?", options: ["Reemplaza por completo la necesidad de traducción real", "Detecta tempranamente las roturas de diseño causadas por la expansión de texto", "Prueba el rendimiento del servidor bajo carga", "Solo comprueba el formato de moneda"], correct: 1, explain: "La pseudo-localización saca a la luz problemas de diseño de la UI causados por texto traducido más largo incluso antes de que se escriban las traducciones reales, detectando toda una clase de errores tempranamente." }
    ],
    "adhoc-testing": [
      { q: "¿Cuál de estos NO es un tipo reconocido de Pruebas Ad Hoc en este tutorial?", options: ["Buddy Testing", "Pair Testing", "Monkey Testing", "Pruebas de regresión"], correct: 3, explain: "Las Pruebas de regresión son un tipo de prueba relacionado con cambios, no una forma de Pruebas Ad Hoc. Buddy, Pair y Monkey Testing son los tres tipos cubiertos." },
      { q: "¿Cómo se describe mejor a las Pruebas Ad Hoc?", options: ["Un enfoque de caja blanca que requiere acceso al código fuente", "Un enfoque de caja negra sin casos de prueba preparados", "Una suite de regresión automatizada", "Un proceso formal y documentado de certificación"], correct: 1, explain: "Las Pruebas Ad Hoc son informales, sin guion y de caja negra — no se preparan casos de prueba de antemano." },
      { q: "¿Cuál es un escenario listado de 'Cuándo realizarlas' para las Pruebas Ad Hoc?", options: ["Solo durante la recopilación inicial de requisitos", "Cuando el tiempo es escaso", "Solo después de que el producto se haya lanzado", "Nunca durante las pruebas beta"], correct: 1, explain: "Tener poco tiempo es uno de varios buenos momentos para las pruebas ad hoc, junto con el desarrollo temprano, antes/después de las pruebas formales, la exploración profunda de funcionalidades, las comprobaciones de usabilidad y las pruebas beta." },
      { q: "¿Cuál es una desventaja clave de las Pruebas Ad Hoc?", options: ["Requieren una documentación extensa", "Son difíciles de reproducir o repetir", "No pueden encontrar ningún defecto de caso límite", "Siempre son más lentas que las pruebas con guion"], correct: 1, explain: "Como no hay guion ni registro, las sesiones de pruebas ad hoc son difíciles de reproducir exactamente — una debilidad real de trazabilidad." },
      { q: "¿Qué mejor práctica se recomienda para las Pruebas Ad Hoc?", options: ["Evitar registrar defectos para ahorrar tiempo", "Probar módulos al azar sin evaluación de riesgo", "Apuntar a los módulos clave/de alto riesgo y registrar cada defecto encontrado", "Nunca trabajar en pareja con otro tester"], correct: 2, explain: "Las mejores prácticas incluyen tener buen conocimiento del negocio, apuntar a los módulos de alto riesgo, registrar cada defecto y trabajar en pareja para obtener una perspectiva fresca." },
      { q: "En el Monkey Testing, ¿qué caracteriza a las entradas que se le dan a la aplicación?", options: ["Valores límite cuidadosamente guionizados", "Entradas aleatorias y no estructuradas", "Solo entradas válidas de clase de equivalencia", "Entradas generadas a partir de una tabla de decisión"], correct: 1, explain: "El Monkey Testing lanza entradas aleatorias y no estructuradas a la aplicación para ver si se rompe." },
      { q: "¿Qué es un 'bug bash', tal como se usa para integrar las pruebas ad hoc en los sprints ágiles?", options: ["Una suite de regresión formal y guionizada", "Una sesión acotada en el tiempo donde todo el equipo prueba ad hoc una build juntos", "Una reunión para priorizar el backlog", "Una herramienta para generar reportes de errores automáticamente"], correct: 1, explain: "Un bug bash es una sesión acotada en el tiempo (a menudo de 30-60 minutos) donde todo el equipo, no solo QA, prueba una build junto — difundiendo el conocimiento del producto y detectando errores que los hábitos de un tester individual podrían pasar por alto." },
      { q: "¿Por qué incluso las sesiones informales de pruebas ad hoc deberían acotarse en el tiempo?", options: ["Acotar el tiempo no es realmente útil para las pruebas ad hoc", "Mantiene la sesión enfocada en lugar de dispersarse, incluso sin un guion formal", "Garantiza una cobertura de pruebas total", "Reemplaza la necesidad de registrar defectos"], correct: 1, explain: "Un límite de tiempo declarado (por ejemplo, 20 minutos en el nuevo flujo de pago) mantiene enfocada una sesión sin guion aunque no haya un caso de prueba formal que seguir." }
    ],
    "exploratory-testing": [
      { q: "En SBTM, ¿qué sigue inmediatamente después de definir el Chárter de Prueba?", options: ["Debriefing", "Revisar resultados", "Acotar la sesión en el tiempo", "Crear una taxonomía de errores"], correct: 2, explain: "El orden de SBTM es: taxonomía de errores → chárter de prueba → acotar la sesión en el tiempo → revisar resultados → debriefing." },
      { q: "Según la tabla comparativa de Pruebas con guion vs. Exploratorias, las pruebas exploratorias se describen mejor como...", options: ["Confirmatorias", "Investigativas", "Sobre controlar las pruebas", "Dirigidas solo por los requisitos"], correct: 1, explain: "La tabla contrasta las Pruebas con guion (confirmatorias) con las Pruebas exploratorias (investigativas)." },
      { q: "En las pruebas exploratorias, el diseño y la ejecución de pruebas ocurren...", options: ["En fases estrictamente separadas, primero el diseño", "Simultáneamente", "Solo después de que el producto se lance", "Solo por desarrolladores, nunca por testers"], correct: 1, explain: "Las pruebas exploratorias se definen por el diseño y la ejecución simultáneos de pruebas — una actividad 'de pensamiento' de investigación y aprendizaje." },
      { q: "¿Cuál se enumera como un contra de las Pruebas Exploratorias?", options: ["Requieren una documentación previa pesada", "Es difícil medir la cobertura", "No pueden adaptarse a requisitos cambiantes", "Nunca encuentran errores nuevos"], correct: 1, explain: "Como las sesiones no están pre-guionizadas, medir la cobertura exacta y reproducir las sesiones exactamente es difícil." },
      { q: "¿Cuándo se recomienda especialmente las Pruebas Exploratorias, según este módulo?", options: ["Solo para requisitos totalmente documentados y estables", "Cuando los requisitos faltan o son ambiguos", "Solo en auditorías regulatorias/de cumplimiento estrictas", "Solo para testers sin experiencia en el dominio"], correct: 1, explain: "Las pruebas exploratorias brillan cuando los requisitos faltan/son ambiguos, en iteraciones tempranas, en aplicaciones críticas que necesitan una investigación profunda, y con testers experimentados." },
      { q: "¿Qué frase de la tabla comparativa describe a las Pruebas con guion?", options: ["Como tener una conversación espontánea", "La mente del tester tiene el control", "Como leer un discurso de un borrador", "Sobre mejorar el diseño de las pruebas"], correct: 2, explain: "Las Pruebas con guion son 'como leer un discurso de un borrador' — el guion tiene el control, frente a la conversación espontánea de las pruebas exploratorias." },
      { q: "En la heurística SFDPOT, ¿qué representa la 'O'?", options: ["Objetivos", "Salida (Output)", "Operaciones — cómo se usa realmente el producto en el mundo real", "Optimización"], correct: 2, explain: "La O de SFDPOT es Operaciones — cómo se usa realmente el producto en el mundo real, incluyendo el uso atípico, no solo su función documentada." },
      { q: "En la heurística de oráculo HICCUPPS, ¿qué pregunta ayuda a responder 'Expectativas del usuario'?", options: ["Si el código compila sin errores", "Si un comportamiento observado es un error, comprobando si coincide con lo que esperaría un usuario razonable", "Qué tan rápido responde el sistema bajo carga", "En qué navegador se ejecutó la prueba"], correct: 1, explain: "HICCUPPS es un conjunto de heurísticas de oráculo para decidir si un comportamiento inesperado cuenta como un error cuando no hay una especificación explícita — 'Expectativas del usuario' pregunta si coincide con lo que esperaría un usuario razonable." },
      { q: "¿Qué afirmación distingue mejor las pruebas exploratorias de las pruebas ad hoc?", options: ["Son lo mismo","Las exploratorias añaden misión, timebox, foco en riesgos, notas y seguimiento a la libertad del tester; las ad hoc no tienen estructura ni objetivo predefinidos","Las pruebas ad hoc siempre usan un charter escrito","Las exploratorias requieren casos de prueba totalmente guionizados"], correct: 1, explain: "Pruebas exploratorias = libertad + propósito + investigación + disciplina. Las ad hoc tipo «hago clic y veo» son difíciles de medir, repetir o traspasar." },
      { q: "¿Cuál de estos charters es el MÁS DÉBIL?", options: ["Probar el login.","Explorar el flujo de login en busca de fallos de autenticación, entradas inusuales, gestión de sesión y mensajes de error.","Explorar el login con credenciales inválidas, límite e inusuales, con foco en bloqueo y sesión.","Explorar la validación del registro, cuentas duplicadas, datos límite y gestión de errores."], correct: 0, explain: "«Probar el login» no da objetivo, riesgo ni foco. Un buen charter dice qué explorar y qué aprender sin guionizar cada clic." },
      { q: "Según ISTQB, ¿qué es un charter de prueba?", options: ["Un guion detallado paso a paso con resultados esperados","Una declaración de objetivos de prueba y, posiblemente, ideas sobre cómo probar","Un contrato firmado por el cliente","Una lista de pruebas de regresión automatizadas"], correct: 1, explain: "Un charter da dirección y foco a una sesión sin prescribir cada acción." },
      { q: "Según el programa ISTQB Advanced Agile Tester, ¿cuánto suelen durar las sesiones exploratorias?", options: ["5–10 minutos","60–120 minutos","Una jornada laboral completa","Nunca tienen límite de tiempo"], correct: 1, explain: "Las sesiones suelen durar unos 60–120 minutos, guiadas por un charter y documentadas con notas, capturas, cobertura y anomalías." },
      { q: "¿En qué se diferencia el error guessing de las pruebas exploratorias?", options: ["El error guessing predice problemas probables por experiencia; las exploratorias investigan y se adaptan continuamente según lo aprendido","El error guessing es una técnica de caja blanca","Las exploratorias nunca usan la experiencia","Son idénticos"], correct: 0, explain: "Error guessing = predecir problemas probables. Pruebas exploratorias = investigar y adaptarse continuamente. El error guessing suele usarse dentro de una sesión exploratoria." },
      { q: "¿Qué tres técnicas agrupa ISTQB CTFL como basadas en la experiencia?", options: ["Valores límite, particiones de equivalencia, tablas de decisión","Listas de comprobación, error guessing, pruebas exploratorias","Pruebas unitarias, de integración, de sistema","Cobertura de sentencias, ramas y caminos"], correct: 1, explain: "Las listas de comprobación, el error guessing y las pruebas exploratorias se apoyan en la experiencia, el conocimiento y la intuición del tester." },
      { q: "En una sesión, la UI muestra un error genérico ante un registro duplicado, pero la API devuelve HTTP 500. ¿Cuál es el mejor siguiente paso?", options: ["Ignorarlo; la UI lo gestionó","Parar, reproducir, aislar (p. ej. llamar a la API directamente) y luego registrar evidencias y reportar el defecto","Reiniciar la sesión desde cero","Marcar la funcionalidad como aprobada"], correct: 1, explain: "Cuando pasa algo inusual: parar → reproducir → aislar → ampliar → comparar, y reportarlo con evidencias. Un 5xx ante una entrada errónea del cliente es un defecto." },
      { q: "¿Qué fórmula sustenta la priorización basada en riesgos en las pruebas exploratorias?", options: ["Riesgo = Coste + Tiempo","Riesgo = Probabilidad × Impacto","Riesgo = Bugs ÷ Pruebas","Riesgo = Cobertura × Velocidad"], correct: 1, explain: "Concentra la exploración donde el fallo es probable y dañino: autenticación, pagos, datos personales, aislamiento de inquilinos, borrado, concurrencia, integraciones." },
      { q: "Un pedido pasa por Draft → Submitted → Approved → Completed. ¿Qué prueba de exploración de estados es útil?", options: ["Probar solo el camino feliz una vez","Intentar transiciones inválidas como Completed → Draft o Approved → Submitted","Comprobar solo los colores de la página","Saltarse los estados; no pueden tener bugs"], correct: 1, explain: "La exploración de estados pregunta qué estados puede alcanzar un objeto y luego prueba transiciones inválidas que el sistema debería rechazar." },
      { q: "La exploración revela que hacer doble clic en Guardar crea dos contactos. Tras la corrección, ¿qué debería hacerse?", options: ["Nada; la exploración no alimenta la automatización","Añadir una prueba de regresión (p. ej. una comprobación en Playwright de que hay 1 contacto) para que el defecto no vuelva","Borrar el informe de bug","Repetir la misma sesión exploratoria para siempre"], correct: 1, explain: "La exploración descubre comportamientos; la automatización protege después el comportamiento estable e importante que encontró." },
      { q: "¿Cuál es la medida más significativa del valor de una sesión exploratoria?", options: ["Número de clics","Número de capturas","Qué información importante produjo la sesión: defectos, riesgos, preguntas y cobertura","Cuánto tiempo estuvo conectado el tester"], correct: 2, explain: "Contar actividad no mide la calidad de las pruebas. Pregunta qué información importante produjo la sesión y qué sigue siendo desconocido." },
      { q: "¿Qué significa «terminado» (Done) para una sesión exploratoria?", options: ["Todo está probado","Se abordó el charter y el equipo puede explicar qué aprendió y qué sigue siendo desconocido","No se encontraron defectos","Se agotó el timebox, haya notas o no"], correct: 1, explain: "Terminado significa que se investigó la misión, se registraron hallazgos, evidencias y preguntas, y se identificaron áreas sin cubrir y seguimiento, no que todo esté probado." },
      { q: "¿Dónde encajan normalmente las pruebas exploratorias en un pipeline de CI/CD?", options: ["Sustituyen a las pruebas unitarias","Después de que las comprobaciones automatizadas desplieguen un entorno de pruebas, como investigación humana adaptativa antes de la regresión y el release","Solo después del release a producción","No encajan en CI/CD"], correct: 1, explain: "La automatización de CI/CD da feedback rápido y repetible; las pruebas exploratorias añaden investigación humana adaptativa sobre el build desplegado." },
      { q: "¿Cuál es un error común en las pruebas exploratorias?", options: ["Usar un charter","Acotar la sesión en el tiempo","Escribir un charter demasiado restrictivo que impida seguir descubrimientos útiles","Registrar evidencias durante la sesión"], correct: 2, explain: "Un charter debe definir la misión, no cada clic. Si es demasiado restrictivo, la exploración no puede adaptarse." },
      { q: "Explorando, notas que una página se vuelve más lenta cada vez que repites una acción. ¿Qué debería seguir?", options: ["Dar por terminadas las pruebas de rendimiento","Tratarlo como una señal y hacer seguimiento con una prueba de rendimiento controlada (p. ej. JMeter o k6)","Ignorarlo; la exploración no cubre el rendimiento","Reportarlo solo como defecto de usabilidad"], correct: 1, explain: "La exploración no sustituye a las pruebas de rendimiento, pero puede detectar señales sospechosas que justifican una prueba controlada con las herramientas adecuadas." } // __EXPL_V2__
    ],
    "rest-api-testing": [
      { q: "¿Qué método HTTP puede tanto crear una nueva entidad COMO actualizar una existente?", options: ["GET", "POST", "PUT", "DELETE"], correct: 2, explain: "PUT puede crear una nueva entidad o actualizar una existente, según si el recurso ya existe." },
      { q: "¿Qué método HTTP nunca debería tener efectos secundarios sobre los datos del servidor?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0, explain: "GET está pensado únicamente para recuperar datos a través de una URI y no debería tener efectos secundarios sobre los datos del lado del servidor." },
      { q: "¿Qué significa REST?", options: ["Reliable State Transfer (transferencia de estado confiable)", "Representational State Transfer (transferencia de estado representacional)", "Remote Endpoint Service Testing (pruebas de servicio de endpoint remoto)", "Redundant State Transmission (transmisión de estado redundante)"], correct: 1, explain: "REST significa Representational State Transfer, un estilo arquitectónico para servicios web." },
      { q: "¿Qué método HTTP se usa típicamente para envíos de formularios y subidas de archivos que crean datos nuevos?", options: ["GET", "POST", "DELETE", "HEAD"], correct: 1, explain: "POST crea una nueva entidad o envía datos al servidor, como envíos de formularios o subidas de archivos." },
      { q: "¿Qué herramientas se nombran en este módulo como formas comunes de probar una API REST?", options: ["Selenium, JMeter, LoadRunner", "Advanced REST Client, Postman, cURL", "Excel, Word, PowerPoint", "Git, Docker, Kubernetes"], correct: 1, explain: "El módulo nombra a Advanced REST Client, Postman y cURL como herramientas comunes de pruebas de API REST." },
      { q: "¿Qué debes validar después de enviar una solicitud de API, según el flujo de trabajo paso a paso?", options: ["Solo el código de estado HTTP", "Solo si el servidor no se cayó", "El código de estado, el cuerpo/esquema de la respuesta y los encabezados", "Nada — un envío exitoso es suficiente"], correct: 2, explain: "El flujo de trabajo exige validar el código de estado, el cuerpo o esquema de la respuesta y los encabezados frente a los resultados esperados." },
      { q: "¿Cuál de estos se enumera como un desafío genuino de las pruebas de API?", options: ["Demasiada UI por la que navegar", "Verificar solo la salida sin una interfaz de usuario", "Las APIs nunca necesitan secuenciación de llamadas", "Hay muy pocos métodos HTTP entre los que elegir"], correct: 1, explain: "Sin una interfaz de usuario, verificar solo la respuesta de salida requiere habilidades de validación distintas a las de las pruebas de UI típicas." },
      { q: "Al probar un flujo de autenticación basado en JWT, ¿qué debe verificarse sobre la validación de la firma?", options: ["Las firmas no necesitan comprobarse si el token parece bien formado", "Un token manipulado debe rechazarse — el servidor no debe confiar en los claims sin verificar la firma", "Solo importa la expiración del token, no su firma", "Los JWT no se pueden probar para problemas de seguridad"], correct: 1, explain: "Los claims de un JWT solo son confiables si se verifica la firma — un servidor que confía en los claims sin comprobar la firma puede ser engañado por un token manipulado." },
      { q: "¿Cuál es una preocupación de pruebas exclusiva de GraphQL que no aplica de la misma forma a los endpoints REST típicos?", options: ["GraphQL no puede devolver JSON", "Las consultas que solicitan datos excesivos o profundamente anidados pueden suponer un riesgo de denegación de servicio", "GraphQL no tiene concepto de autenticación", "GraphQL solo admite solicitudes GET"], correct: 1, explain: "Como un cliente de GraphQL puede solicitar datos profundamente anidados o excesivos en una sola consulta, las pruebas deben comprobar que el esquema se proteja contra consultas que podrían sobrecargar el servidor." },
      { q: "¿Cuál es la diferencia habitual entre PUT y PATCH?", options: ["PUT borra, PATCH crea","PUT normalmente reemplaza todo el recurso; PATCH normalmente actualiza solo algunos campos","Son idénticos en todas las APIs","PATCH solo devuelve cabeceras"], correct: 1, explain: "PUT normalmente reemplaza un recurso y PATCH normalmente aplica una actualización parcial, pero el contrato de la API sigue siendo la fuente de verdad." },
      { q: "En GET /api/users/123?include=orders&page=2, ¿qué es 123?", options: ["Un parámetro de consulta","Una cabecera","Un parámetro de ruta","El cuerpo de la petición"], correct: 2, explain: "123 forma parte de la ruta de la URL: es un parámetro de ruta. include y page son parámetros de consulta." },
      { q: "¿Qué estado devuelve más típicamente un POST que crea un contacto con éxito?", options: ["200 OK","201 Created","204 No Content","302 Found"], correct: 1, explain: "201 Created es la respuesta habitual a una creación exitosa. No supongas que todo éxito es 200: el código esperado depende de la operación y del contrato." },
      { q: "¿Qué código de estado indica que el cliente ha enviado demasiadas peticiones (limitación de tasa)?", options: ["409","415","429","503"], correct: 2, explain: "429 Too Many Requests indica limitación de tasa. 409 es Conflict, 415 es Unsupported Media Type, 503 es Service Unavailable." },
      { q: "Un nombre de usuario debe tener 3–30 caracteres. ¿Qué valores límite deberías probar?", options: ["Solo 3 y 30","1, 15, 50","2, 3, 4, 29, 30, 31","0 y 100"], correct: 2, explain: "El análisis de valores límite prueba justo por debajo, en y justo por encima de cada límite: 2, 3, 4 y 29, 30, 31." },
      { q: "La documentación dice que el campo 'id' es un entero, pero la API lo devuelve como cadena. ¿Cómo se llama esto?", options: ["Idempotencia","Deriva del contrato (contract drift)","Limitación de tasa","Aislamiento de inquilinos"], correct: 1, explain: "Cuando la implementación deja de coincidir con el contrato documentado (OpenAPI/JSON Schema), es deriva del contrato, y puede romper a los consumidores de la API." },
      { q: "¿Cuál es la diferencia entre autenticación y autorización?", options: ["Significan lo mismo","La autenticación pregunta quién eres; la autorización pregunta si puedes realizar la operación","La autorización ocurre antes que la autenticación","La autenticación solo aplica a administradores"], correct: 1, explain: "La autenticación verifica la identidad; la autorización verifica el permiso para una acción o recurso concreto." },
      { q: "El usuario A solicita GET /orders/555, un pedido del usuario B, y recibe los datos. ¿Qué riesgo de OWASP API es este?", options: ["Broken Object Level Authorization (BOLA)","Server-Side Request Forgery","Improper Inventory Management","Unsafe Consumption of APIs"], correct: 0, explain: "Acceder al objeto de otro usuario cambiando su ID es Broken Object Level Authorization, el n.º 1 del OWASP API Security Top 10 (2023)." },
      { q: "Un usuario normal envía {\"isAdmin\": true} en una actualización de perfil y la API lo acepta. ¿Qué riesgo de OWASP API demuestra?", options: ["Broken Authentication","Broken Object Property Level Authorization","Unrestricted Resource Consumption","Security Misconfiguration"], correct: 1, explain: "Poder modificar propiedades privilegiadas como role, isAdmin, ownerId o tenantId es Broken Object Property Level Authorization." },
      { q: "¿Por qué el flujo CRUD incluye un READ tras cada paso (CREATE → READ → UPDATE → READ → DELETE → READ)?", options: ["Para ralentizar la prueba","Para confirmar que cada operación tuvo efecto realmente, incluido que el recurso borrado ya no existe","Porque READ es obligatorio antes de cualquier escritura","Para probar la limitación de tasa"], correct: 1, explain: "Cada READ verifica que la escritura anterior cambió realmente el estado; por ejemplo, el READ final debe devolver 404 tras el DELETE." },
      { q: "Enviar el mismo DELETE o PUT dos veces debe dejar el recurso en el mismo estado previsto. ¿Qué propiedad se está probando?", options: ["Idempotencia","Paginación","Pseudolocalización","Concurrencia"], correct: 0, explain: "Una operación idempotente produce el mismo estado final sin importar cuántas veces se repita. Los POST repetidos también deben comprobarse en busca de duplicados." },
      { q: "Dos usuarios actualizan el mismo registro a la vez y uno de los cambios desaparece sin aviso. ¿Qué tipo de defecto es?", options: ["Una deriva del contrato","Una actualización perdida: un defecto de concurrencia","Un defecto de valor límite","Un defecto de cabeceras de caché"], correct: 1, explain: "Las pruebas de concurrencia buscan actualizaciones perdidas y condiciones de carrera; el bloqueo optimista debería detectar el conflicto (p. ej. 409) en lugar de sobrescribir." },
      { q: "En Postman, ¿por qué usar variables como {{baseUrl}} y {{token}}?", options: ["Hacen que las peticiones sean más rápidas","Evitan valores fijos específicos del entorno, para que las colecciones funcionen en distintos entornos","Postman exige que todo valor sea una variable","Cifran la petición"], correct: 1, explain: "Las variables de entorno permiten ejecutar la misma colección contra dev, staging o CI sin editar cada petición." },
      { q: "¿Por qué no debería cada prueba de API consultar directamente la base de datos?", options: ["Las bases de datos no se pueden probar","Acopla en exceso la suite, haciéndola más lenta y frágil","Las APIs nunca cambian el estado de la BD","REST lo prohíbe"], correct: 1, explain: "La validación de BD es valiosa donde procede, pero hacer que cada prueba dependa de ella ralentiza la suite y la vuelve frágil." },
      { q: "¿Qué pregunta refleja la mentalidad 'avanzada' de QA de APIs?", options: ["¿Devuelve 200?","¿Existe el endpoint?","¿Qué pasa si dos usuarios la llaman a la vez, el token caduca o el recurso pertenece a otro inquilino?","¿Está bien escrita la URL?"], correct: 2, explain: "Las pruebas avanzadas basadas en riesgos preguntan qué ocurre con concurrencia, autenticación caducada, entradas mal formadas, acceso entre inquilinos, dependencias que fallan y peticiones repetidas." } // __REST_V2__
    ],
    "istqb-ctfl": [
      { q: "¿Cuál de los siete principios de las pruebas establece que ejecutar las mismas pruebas repetidamente eventualmente deja de encontrar errores nuevos?", options: ["Agrupamiento de defectos", "Las pruebas se desgastan", "La paradoja del pesticida es un mito", "Las pruebas exhaustivas son imposibles"], correct: 1, explain: "\"Las pruebas se desgastan\" — reutilizar las mismas pruebas repetidamente las hace progresivamente menos eficaces para encontrar defectos nuevos." },
      { q: "Una equivocación humana que lleva a una falla en un producto de trabajo se llama defecto. ¿Cómo se llama la equivocación en sí?", options: ["Falla (fault)", "Falla observable (failure)", "Error", "Causa raíz"], correct: 2, explain: "Un error (equivocación humana) introduce un defecto (falla); al ejecutarse, un defecto puede causar una falla (comportamiento incorrecto observable). La razón subyacente es la causa raíz." },
      { q: "¿Qué tipo de revisión es el más formal, usando roles definidos, criterios de entrada/salida y listas de verificación?", options: ["Revisión informal", "Walkthrough", "Revisión técnica", "Inspección"], correct: 3, explain: "La Inspección es el más formal de los cuatro tipos de revisión, seguida en orden decreciente de formalidad por la Revisión técnica, el Walkthrough y la Revisión informal." },
      { q: "¿Qué técnica de caja blanca comprueba si cada sentencia ejecutable se ha ejecutado al menos una vez?", options: ["Pruebas de ramas", "Pruebas de sentencias", "Pruebas de tabla de decisión", "Pruebas de transición de estados"], correct: 1, explain: "Las Pruebas/cobertura de sentencias preguntan si cada sentencia ejecutable del código se ha ejecutado al menos una vez durante las pruebas." },
      { q: "En las pruebas basadas en riesgos, ¿de qué dos factores se calcula típicamente el nivel de riesgo?", options: ["Costo y duración", "Probabilidad e impacto", "Severidad y prioridad", "Cobertura y complejidad"], correct: 1, explain: "Riesgo = probabilidad x impacto. Las áreas de mayor riesgo — más propensas a fallar y más dañinas si fallan — se priorizan." },
      { q: "¿Qué modelo favorece muchas pruebas automatizadas rápidas de bajo nivel y menos pruebas de UI lentas de alto nivel?", options: ["Los cuadrantes de pruebas", "El modelo en V", "La pirámide de pruebas", "El ciclo de vida del defecto"], correct: 2, explain: "La pirámide de pruebas recomienda una base amplia de pruebas automatizadas rápidas de bajo nivel (unitarias) y progresivamente menos pruebas más lentas de nivel más alto (integración, UI/E2E)." },
      { q: "¿Cuál de estos es un riesgo comúnmente citado (no un beneficio) de la automatización de pruebas?", options: ["Repetibilidad", "Resultados objetivos", "Costo de mantenimiento / falsa sensación de seguridad", "Velocidad"], correct: 2, explain: "La repetibilidad, los resultados objetivos y la velocidad son beneficios de la automatización; el costo de mantenimiento y una falsa sensación de seguridad son riesgos comúnmente citados." },
      { q: "¿Qué categoría de técnica de prueba se basa en la intuición del tester y en datos históricos de defectos en lugar de en un procedimiento formal y documentado?", options: ["Caja negra", "Caja blanca", "Basada en la experiencia", "Basada en la estructura"], correct: 2, explain: "Las técnicas basadas en la experiencia — adivinación de errores, pruebas exploratorias, pruebas basadas en listas de verificación — se apoyan en la intuición y la trayectoria del tester en lugar de en una derivación formal a partir de una base de prueba." },
      { q: "¿Qué distingue a un nivel de prueba de un tipo de prueba, según el temario?", options: ["Son dos nombres para lo mismo", "El nivel de prueba describe dónde ocurren las pruebas (por ejemplo, unidad, sistema); el tipo de prueba describe qué se prueba (por ejemplo, funcional, no funcional)", "El tipo de prueba solo aplica a proyectos Agile", "El nivel de prueba solo aplica a las pruebas manuales"], correct: 1, explain: "Los niveles de prueba (componente, integración, sistema, aceptación) y los tipos de prueba (funcional, no funcional, estructural, relacionado con cambios) son dimensiones independientes — un tipo de prueba puede aplicarse en cualquier nivel de prueba." },
      { q: "¿Cuál es el propósito de los criterios de salida en la planificación de pruebas?", options: ["Decidir quién asiste a la reunión de inicio", "Definir las condiciones que deben cumplirse para que una actividad de prueba se considere completa", "Asignar severidad a los defectos", "Seleccionar qué método HTTP probar"], correct: 1, explain: "Los criterios de salida definen cuándo una actividad de prueba está terminada; los criterios de entrada definen las condiciones necesarias antes de que pueda comenzar." },
      { q: "Según la lección de consejos de estudio, ¿cuál es el uso más eficaz del tiempo limitado de preparación del examen?", options: ["Dedicar el mismo tiempo a cada nivel K por igual", "Enfocarse en el material K2/K3, ya que ahí viven la mayoría de las preguntas del examen", "Estudiar solo los términos K1 (recordar)", "Memorizar las tablas exactas de logística del examen del libro"], correct: 1, explain: "Los términos K1 solo necesitan reconocimiento, pero el material K2/K3 requiere comprensión y aplicación — y ahí es donde se concentra la mayoría de las preguntas del examen." },
      { q: "¿Qué tipo de trampa suele plantear una pregunta con un distractor de 'mejor respuesta'?", options: ["Da una respuesta obviamente incorrecta y tres correctas idénticas", "Da cuatro afirmaciones técnicamente verdaderas pero solo una es la mejor opción para el escenario específico descrito", "Nunca tiene ninguna respuesta correcta", "Solo aparece en el cuestionario del Módulo 7, nunca en el examen real"], correct: 1, explain: "Una trampa común de estilo ISTQB presenta varias afirmaciones técnicamente verdaderas, pero solo una es la mejor respuesta para el escenario exacto dado — leer el escenario con cuidado importa más que solo conocer los hechos." }
    ],
    "qa-toolbox": [
      { q: "¿Qué herramienta se describe como que se ejecuta dentro del navegador, con una fuerte experiencia de depuración orientada al desarrollador para pruebas web JS/TS?", options: ["Selenium WebDriver", "Cypress", "Appium", "REST Assured"], correct: 1, explain: "Cypress se ejecuta dentro del propio navegador, lo que le da una experiencia de depuración distintiva y muy interactiva en comparación con las herramientas basadas en WebDriver." },
      { q: "¿Qué herramienta extiende el protocolo WebDriver para automatizar apps móviles nativas e híbridas?", options: ["Playwright", "Robot Framework", "Appium", "k6"], correct: 2, explain: "Appium extiende el protocolo WebDriver para que el mismo enfoque de automatización usado en web pueda controlar apps móviles nativas e híbridas en iOS y Android." },
      { q: "¿Qué herramienta de pruebas de rendimiento escribe pruebas de carga en JavaScript y está orientada a CLI, diseñada para una fácil integración con CI/CD?", options: ["JMeter", "k6", "Gatling", "SoapUI"], correct: 1, explain: "Los scripts de k6 se escriben en JavaScript y la herramienta está diseñada primero para CLI, lo que la hace un encaje natural para los pipelines de CI/CD." },
      { q: "¿Cómo se llama a una métrica que hace seguimiento de los defectos encontrados en producción frente a los defectos detectados antes del lanzamiento?", options: ["Densidad de defectos", "Cobertura de pruebas", "Tasa de fuga", "Tasa de flakiness"], correct: 2, explain: "La Tasa de fuga (defectos escapados) es la señal más clara de si una estrategia de pruebas realmente está detectando problemas antes que los usuarios." },
      { q: "¿Por qué una tasa creciente de flakiness en una suite de pruebas automatizadas es un problema serio, más allá de los propios fallos?", options: ["No tiene un impacto real en el equipo", "Erosiona la confianza en la suite, así que los fallos reales empiezan a ignorarse", "Siempre significa que la aplicación tiene una falla de seguridad", "Solo afecta a los testers manuales"], correct: 1, explain: "Una vez que se sabe que una suite es inestable, los fallos se descartan por defecto — incluidos los reales — lo que destruye silenciosamente el valor de tener automatización." },
      { q: "¿Qué par corresponde a dos de las cuatro métricas DORA mencionadas en este módulo?", options: ["Densidad de defectos y Tasa de fuga", "Tiempo de entrega de cambios y Frecuencia de despliegue", "MTTD y Cobertura de pruebas", "Tasa de aprobación y Tasa de flakiness"], correct: 1, explain: "El Tiempo de entrega de cambios y la Frecuencia de despliegue son dos de las cuatro métricas DORA; el tiempo de ciclo de QA suele ser un factor importante del tiempo de entrega." },
      { q: "En una entrevista, ¿cuál es la forma más sólida de responder a \"describe un error que encontraste y que otros pasaron por alto\"?", options: ["Dar una respuesta vaga y general para no sonar presumido", "Describir un ejemplo real y específico: qué te llevó ahí, los pasos de reproducción, el impacto y la resolución", "Decir que no recuerdas ningún error específico", "Enumerar tantos tipos de errores como sea posible sin detalle"], correct: 1, explain: "Los entrevistadores buscan especificidad y un proceso de investigación real, no una historia dramática — un ejemplo concreto con pasos de reproducción e impacto destaca." },
      { q: "¿Cuál es la diferencia clave entre verificación y validación?", options: ["Significan exactamente lo mismo", "La verificación pregunta si el producto cumple con la especificación; la validación pregunta si satisface la necesidad real del usuario", "La verificación es manual, la validación siempre es automatizada", "La validación solo aplica a las pruebas de rendimiento"], correct: 1, explain: "La verificación comprueba \"¿estamos construyendo el producto correctamente?\" frente a la especificación; la validación comprueba \"¿estamos construyendo el producto correcto?\" frente a la necesidad real del usuario." },
      { q: "¿Qué lenguaje se describe como un encaje natural para automatizar una app web cuando el propio frontend de esa app está escrito en él, permitiendo a los testers compartir herramientas con los desarrolladores?", options: ["Java", "SQL", "JavaScript / TypeScript", "Bash"], correct: 2, explain: "JavaScript/TypeScript es un encaje natural para probar apps web JS/TS — los testers pueden leer el propio código de la app y reutilizar las mismas herramientas que el equipo de desarrollo." },
      { q: "¿Cuál es el riesgo principal de escribir automatización de pruebas en un lenguaje que nadie más en el equipo conoce?", options: ["Se ejecuta más lento que otros lenguajes", "Se convierte en una suite huérfana y sin mantenimiento en menos de un año", "No se puede integrar en CI/CD", "Es ilegal bajo la mayoría de las licencias de código abierto"], correct: 1, explain: "La automatización solo tiene el valor que la capacidad del equipo para mantenerla le permite — el código que nadie puede leer o actualizar tiende a deteriorarse y ser abandonado." },
      { q: "¿Qué problema resuelve la automatización de pruebas autorreparable (self-healing)?", options: ["Escribe suites de prueba completas sin ninguna intervención humana", "Ajusta automáticamente los localizadores de la UI cuando cambia el markup de la página, en lugar de romper la prueba", "Corrige errores en la aplicación bajo prueba", "Reemplaza la necesidad de un equipo de QA"], correct: 1, explain: "La automatización autorreparable (por ejemplo, Testim, Healenium) ajusta los localizadores de elementos cuando cambia el DOM, de modo que los ajustes menores de markup no rompan cada prueba que toca ese elemento." },
      { q: "¿Por qué las aserciones de coincidencia exacta típicamente dejan de funcionar al probar una funcionalidad potenciada por un LLM?", options: ["Los LLM nunca producen salida de texto", "La salida del LLM es no determinista, por lo que la misma entrada puede producir salidas válidas distintas", "Las aserciones de coincidencia exacta siempre son demasiado lentas", "Los LLM no se pueden probar en absoluto"], correct: 1, explain: "Como la salida del LLM varía entre ejecuciones incluso para la misma entrada, las pruebas pasan de las aserciones de coincidencia exacta a una evaluación basada en rúbricas de si la salida es lo bastante buena, no idéntica a una cadena fija." },
      { q: "¿Qué debería hacer un tester antes de dar por terminada una prueba generada por IA?", options: ["Nada — si se ejecuta y pasa, está terminada", "Confirmar que un humano ha verificado que realmente comprueba lo correcto, no solo que se ejecuta", "Eliminarla y escribirla manualmente en su lugar, siempre", "Solo comprobar que usa el modelo de IA más nuevo"], correct: 1, explain: "Las pruebas generadas por IA son un primer borrador útil, pero solo un humano puede juzgar si la prueba realmente está comprobando el comportamiento que le importa al negocio." },
      { q: "¿Qué proporción de los problemas de accesibilidad detectan por sí solos los escáneres automatizados (como axe o Lighthouse)?", options: ["100% — el escaneo automatizado es suficiente por sí solo", "Aproximadamente el 30-40% — todavía se necesitan las pruebas manuales (navegación solo con teclado, lectores de pantalla)", "0% — las herramientas automatizadas no pueden comprobar la accesibilidad en absoluto", "Exactamente el 50%, según el estándar WCAG"], correct: 1, explain: "Los escáneres automatizados son excelentes para comprobaciones objetivas como las relaciones de contraste, pero detectan solo alrededor del 30-40% de los problemas — todavía se necesitan las pruebas manuales con teclado y lector de pantalla para una cobertura completa." },
      { q: "Bajo WCAG, ¿qué significan las letras POUR?", options: ["Prioridad, Objetivo, Usabilidad, Fiabilidad", "Perceptible, Operable, Comprensible, Robusto", "Rendimiento, Operaciones, Uso, Reportes", "Público, Abierto, Universal, Revisado"], correct: 1, explain: "WCAG organiza los requisitos de accesibilidad en torno a cuatro principios: el contenido debe ser Perceptible, Operable, Comprensible y Robusto." }
    ],
    "test-architecture": [
      { q: "¿Cuál es la diferencia clave entre el Page Object Model y el Screenplay Pattern?", options: ["Son exactamente lo mismo con nombres distintos", "POM encapsula los localizadores/acciones de cada página en una clase; Screenplay modela las pruebas como un Actor con Abilities, Tasks y Questions usando composición", "Screenplay solo funciona para pruebas de API, no de UI", "POM es más reciente y siempre se prefiere sobre Screenplay"], correct: 1, explain: "POM organiza la automatización en torno a clases de página; Screenplay usa un modelo centrado en el actor y basado en composición (Abilities, Tasks, Questions) que suele escalar mejor en suites grandes y complejas." },
      { q: "En una arquitectura de automatización de pruebas en capas ('híbrida'), ¿cuál es el propósito de separar la capa de datos de la capa de lógica?", options: ["No tiene ningún beneficio real, solo archivos extra", "Para que un cambio de localizador o de datos de prueba no repercuta en los propios casos de prueba legibles", "Para que las pruebas se ejecuten más rápido en el mismo hardware", "Para que solo los desarrolladores puedan escribir pruebas"], correct: 1, explain: "Separar los casos de prueba, el código de lógica/acciones y los datos evita que un cambio de localizador o de datos rompa la capa de pruebas legible, que es lo que mantiene manejables las suites grandes." },
      { q: "¿Qué problema resuelven los entornos de prueba efímeros y bajo demanda?", options: ["Hacen que las pruebas se ejecuten sin ningún código", "Evitan el problema clásico de un único entorno de QA compartido bloqueado por el cambio a medio terminar de otro equipo", "Eliminan por completo la necesidad de datos de prueba", "Reemplazan la necesidad de un entorno de staging"], correct: 1, explain: "Levantar un entorno nuevo por pull request o ejecución de prueba (mediante contenedores/orquestación) evita la contención y la inestabilidad causadas por un único entorno de QA compartido y mutable." },
      { q: "¿Qué proporciona la virtualización de servicios en un entorno de prueba?", options: ["Una copia real y completamente desplegada de cada dependencia", "Un sustituto simulado de una dependencia real que devuelve respuestas realistas predefinidas o basadas en reglas", "Una forma de omitir por completo las pruebas de integraciones externas", "Una máquina virtual donde ejecutar toda la suite de pruebas"], correct: 1, explain: "Herramientas como WireMock y Mountebank simulan las respuestas de una dependencia, haciendo las pruebas más rápidas y fiables cuando una dependencia real es costosa, arriesgada o aún no existe." },
      { q: "¿Por qué las pruebas se organizan por etapas de rápidas/baratas a lentas/costosas en un pipeline de CI/CD (unitarias antes que integración antes que E2E)?", options: ["Es arbitrario y no importa", "Para que una build rota falle rápido, antes de consumir tiempo en etapas más lentas", "Porque las pruebas lentas siempre son más fiables", "Porque las herramientas de CI/CD exigen este orden específico"], correct: 1, explain: "Organizar primero las comprobaciones baratas y rápidas significa que una build rota se detecta en segundos o minutos en lugar de después de que ya se ejecutó una etapa mucho más larga y costosa." },
      { q: "¿Qué es una 'quality gate' en un pipeline de CI/CD?", options: ["Un punto de control de seguridad físico para la sala de servidores", "Una comprobación automatizada que bloquea un merge o despliegue cuando no se cumple una condición (por ejemplo, tasa de aprobación, cobertura, hallazgos de seguridad)", "Un sinónimo de entorno de staging", "Un paso de aprobación manual realizado solo por el líder de QA"], correct: 1, explain: "Una quality gate es una condición automatizada de pasa/falla — como una tasa mínima de aprobación o cero vulnerabilidades críticas — que bloquea el avance por el pipeline cuando no se satisface." },
      { q: "¿Qué son las pruebas 'shift-right', a diferencia de shift-left?", options: ["Probar solo justo antes de una fecha límite", "Extender deliberadamente las pruebas a producción mediante canary releases, feature flags y monitoreo sintético", "Mover a todos los testers a una zona horaria distinta", "Una técnica para alinear a la derecha los informes de prueba"], correct: 1, explain: "Shift-right complementa a shift-left extendiendo las pruebas a la propia producción — los canary releases, los feature flags y el monitoreo sintético validan el comportamiento con tráfico real, de forma segura y gradual." },
      { q: "¿Por qué las pruebas tradicionales full-stack de extremo a extremo dejan de escalar bien en arquitecturas de microservicios?", options: ["Los microservicios no se pueden probar en absoluto", "El número de combinaciones de versiones de servicio crece de forma combinatoria, haciendo que las ejecuciones E2E de entorno completo sean lentas, inestables y costosas", "Las pruebas E2E son ilegales para microservicios", "Los microservicios no tienen APIs que probar"], correct: 1, explain: "A medida que se multiplican los servicios desplegados de forma independiente, probar cada combinación de extremo a extremo se vuelve combinatoriamente costoso — por eso existen las pruebas de contrato como alternativa." },
      { q: "¿Cómo evitan las pruebas de contrato dirigidas por el consumidor (por ejemplo, Pact) la necesidad de un entorno de integración completo?", options: ["No lo evitan — igual requieren desplegar todos los servicios juntos", "El consumidor define las interacciones que espera, y el proveedor verifica que satisface ese contrato de forma independiente, sin que el consumidor necesite ejecutarse", "Reemplazan todas las demás formas de prueba", "Solo funcionan para APIs REST síncronas, nunca para eventos"], correct: 1, explain: "Cada lado del contrato se verifica de forma independiente contra las expectativas acordadas, detectando cambios que rompen compatibilidad sin necesidad de levantar toda la cadena de servicios juntos." },
      { q: "¿Qué hace la ingeniería del caos?", options: ["Elimina datos de producción al azar para probar las copias de seguridad", "Inyecta deliberadamente fallos controlados (instancias eliminadas, latencia de red, agotamiento de recursos) para verificar que un sistema se degrada con elegancia en lugar de encadenarse en una interrupción", "Genera datos de prueba aleatorios para pruebas unitarias", "Introduce errores en el código a propósito para capacitar a nuevos desarrolladores"], correct: 1, explain: "La ingeniería del caos (popularizada por herramientas como Chaos Monkey y Gremlin) inyecta fallos deliberadamente bajo condiciones controladas para verificar la resiliencia, en lugar de esperar a una interrupción real no controlada para encontrar los mismos vacíos." },
      { q: "¿Qué describe el antipatrón del 'cono de helado'?", options: ["Una suite de pruebas perfectamente equilibrada", "Una suite pesada en la parte superior con pruebas de UI/E2E lentas y frágiles y muy pocas pruebas unitarias rápidas — el inverso de una Pirámide de Pruebas saludable", "Una herramienta para visualizar la cobertura de pruebas", "Un patrón para organizar los términos del glosario"], correct: 1, explain: "El cono de helado es el inverso de la Pirámide de Pruebas (Módulo 7): pesado en pruebas de UI lentas y de alto nivel y ligero en pruebas unitarias rápidas y baratas, lo que vuelve lenta y difícil de mantener a toda la suite." },
      { q: "¿Cuál es el propósito de una herramienta de reportes de pruebas como Allure o ReportPortal?", options: ["Escribir casos de prueba automáticamente", "Convertir la salida cruda del ejecutor de pruebas en dashboards legibles e históricos que muestran tendencias a lo largo del tiempo", "Reemplazar la necesidad de un pipeline de CI/CD", "Generar definiciones del glosario"], correct: 1, explain: "Herramientas como Allure y ReportPortal convierten la salida cruda de aprobado/fallo en dashboards históricos y con tendencias visibles — mostrando si la tasa de aprobación mejora o empeora a lo largo de muchas builds, no solo en la última ejecución." },
      { q: "¿Por qué importa la detección de pruebas inestables (flaky) para la infraestructura de reportes de pruebas?", options: ["No tiene ningún valor real", "Las pruebas que fallan de forma intermitente sin cambio de código erosionan la confianza en la suite si no se señalan y abordan", "Hace que las pruebas se ejecuten más rápido automáticamente", "Solo importa para las pruebas manuales, no para la automatización"], correct: 1, explain: "Una prueba que falla de forma intermitente y no se señala como inestable erosiona silenciosamente la confianza en toda la suite, ya que la gente deja de creer que los fallos significan algo real." }
    ],
    "security-testing": [
      { q: "¿En qué se diferencia la pregunta central de las pruebas de seguridad de las pruebas funcionales típicas?", options: ["Hacen exactamente la misma pregunta", "Las pruebas funcionales preguntan si el camino feliz funciona; las pruebas de seguridad preguntan qué pasa cuando alguien intenta deliberadamente romper las reglas", "Las pruebas de seguridad solo aplican a apps móviles", "Las pruebas funcionales siempre son más importantes que las de seguridad"], correct: 1, explain: "Las pruebas funcionales verifican el comportamiento previsto; las pruebas de seguridad preguntan deliberadamente qué pasa cuando un usuario o atacante intenta hacer que el sistema haga algo para lo que nunca estuvo pensado." },
      { q: "¿Qué significa el principio de 'mínimo privilegio'?", options: ["Todo usuario debería tener acceso de administrador completo por defecto", "Cada usuario, servicio o proceso debería tener solo el acceso mínimo que necesita para hacer su trabajo", "Los privilegios nunca deberían revisarse una vez otorgados", "Solo el equipo de seguridad necesita controles de acceso"], correct: 1, explain: "El mínimo privilegio significa otorgar solo el acceso mínimo necesario — casi toda brecha grave involucra algo con más acceso del que realmente necesitaba." },
      { q: "¿Qué riesgo del OWASP Top 10 se describe como: los usuarios pueden actuar fuera de sus permisos previstos, por ejemplo viendo los datos de otro usuario al cambiar un ID en una URL?", options: ["Fallos Criptográficos", "Control de Acceso Roto", "Configuración de Seguridad Incorrecta", "Falsificación de Solicitud del Lado del Servidor"], correct: 1, explain: "El Control de Acceso Roto cubre los fallos al restringir adecuadamente lo que un usuario autenticado puede acceder o hacer — el ejemplo clásico es cambiar un ID en una URL para ver los datos de otra persona." },
      { q: "¿Cuál es la prueba clásica para la Inyección SQL en un campo de inicio de sesión?", options: ["Ingresar una cadena aleatoria muy larga", "Ingresar un payload como ' OR '1'='1 para ver si altera la lógica de la consulta y evita la autenticación", "Enviar el formulario dos veces rápidamente", "Dejar el campo completamente vacío"], correct: 1, explain: "Un payload como ' OR '1'='1 comprueba si una entrada no confiable se concatena de forma insegura en una consulta SQL, potencialmente alterando su lógica para evitar por completo la comprobación de inicio de sesión." },
      { q: "¿Qué distingue al XSS Almacenado del XSS Reflejado?", options: ["No hay ninguna diferencia real entre ellos", "El XSS Almacenado persiste el script malicioso (por ejemplo, en un comentario) y lo sirve a otros usuarios después; el XSS Reflejado lo rebota inmediatamente en una respuesta", "El XSS Reflejado solo ocurre en apps móviles", "El XSS Almacenado no se puede probar"], correct: 1, explain: "El XSS Almacenado guarda el script malicioso en algún lugar donde se renderizará después a otros usuarios (como un campo de comentario); el XSS Reflejado refleja inmediatamente el payload en la misma respuesta, a menudo mediante una URL manipulada." },
      { q: "¿Qué explota el CSRF (Cross-Site Request Forgery)?", options: ["Una debilidad en la indexación de bases de datos", "El navegador de un usuario con sesión iniciada siendo engañado para enviar una solicitud no deseada a un sitio donde está autenticado", "Un fallo en el propio cifrado HTTPS", "Tiempos de respuesta lentos del servidor"], correct: 1, explain: "El CSRF engaña al navegador de una víctima — ya autenticada en un sitio de destino — para que envíe una solicitud que la víctima nunca pretendió, como un formulario invisible de autoenvío." },
      { q: "¿Cuál es la diferencia clave entre SAST y DAST?", options: ["Son enfoques idénticos con nombres distintos", "SAST escanea el código fuente sin ejecutarlo; DAST ataca una aplicación en ejecución desde el exterior como un atacante real", "DAST solo funciona en bases de datos", "SAST solo se puede ejecutar una vez al año"], correct: 1, explain: "SAST analiza el código fuente de forma estática (sin necesitar ejecución, puede correr en cada commit); DAST prueba una aplicación desplegada y en ejecución de forma dinámica desde el exterior, detectando distintas clases de problemas." },
      { q: "¿Qué escanea el SCA (Análisis de Composición de Software)?", options: ["Errores tipográficos en comentarios de código", "Vulnerabilidades conocidas (CVEs) en librerías y dependencias de terceros", "Errores de estilo CSS", "Rendimiento de consultas de base de datos"], correct: 1, explain: "Herramientas de SCA como Snyk y OWASP Dependency-Check escanean dependencias de terceros en busca de vulnerabilidades conocidas y publicadas — abordando directamente el riesgo OWASP de 'Componentes Vulnerables y Desactualizados'." },
      { q: "En las pruebas de penetración, ¿qué debe existir siempre antes de que comience la prueba?", options: ["Nada — cualquiera puede hacer pen testing a cualquier sistema en cualquier momento", "Un acuerdo firmado que defina el alcance y una autorización explícita por escrito", "Una herramienta de escaneo totalmente automatizada", "Un anuncio público de la prueba"], correct: 1, explain: "Sin un acuerdo firmado y una autorización explícita que definan qué está dentro del alcance, las mismas acciones exactas usadas en un pen test son simplemente hacking ilegal y no autorizado." },
      { q: "En el framework de modelado de amenazas STRIDE, ¿qué representa la 'R'?", options: ["Reliability (Fiabilidad)", "Repudiation (Repudio) — negar haber realizado una acción, sin forma de demostrar lo contrario", "Redundancy (Redundancia)", "Recovery (Recuperación)"], correct: 1, explain: "El Repudio en STRIDE se refiere a una amenaza en la que un actor puede negar haber realizado una acción y el sistema no tiene forma de demostrar lo contrario (por ejemplo, logs de auditoría faltantes)." },
      { q: "¿Qué significa 'zero trust' (confianza cero) como principio arquitectónico/de pruebas?", options: ["Ningún sistema debería probarse nunca", "Nunca asumir que una solicitud es segura solo porque proviene del interior del perímetro de red — cada solicitud se autentica y autoriza según sus propios méritos", "Confiar en cada servicio interno por defecto", "Solo las APIs de cara externa necesitan autenticación"], correct: 1, explain: "Zero trust significa que cada solicitud — incluso desde dentro de la red — debe demostrar quién es y para qué está autorizada, en lugar de confiarse automáticamente por su origen." },
      { q: "¿Por qué verificar que una solicitud de 'eliminar mi cuenta' realmente elimine los datos (incluidas copias de seguridad/réplicas) es una preocupación de pruebas relevante para el cumplimiento?", options: ["Es puramente una preocupación de pruebas de rendimiento", "Se relaciona con los derechos de eliminación de datos bajo normativas como el RGPD", "Solo importa para los entornos de prueba internos", "No tiene ninguna relación con el cumplimiento"], correct: 1, explain: "Las normativas relacionadas con el RGPD a menudo exigen que la solicitud de eliminación de datos de un usuario realmente elimine sus datos en todo el sistema, incluidas las copias de seguridad según su calendario de retención — probar esto de principio a fin es una preocupación de cumplimiento real, no solo una falta de higiene de datos." }
    ],
    "performance-ux-automation": [
      { q: "¿Cuál es la diferencia clave entre las Pruebas de Carga y las Pruebas de Estrés?", options: ["Son técnicas idénticas con nombres distintos", "Las Pruebas de Carga comprueban el comportamiento bajo tráfico esperado; las Pruebas de Estrés siguen aumentando la carga más allá de los niveles esperados para encontrar dónde se rompe el sistema", "Las Pruebas de Estrés solo aplican a apps móviles", "Las Pruebas de Carga siempre se ejecutan en producción"], correct: 1, explain: "Las Pruebas de Carga validan el comportamiento bajo tráfico esperado y realista; las Pruebas de Estrés deliberadamente empujan más allá de eso para encontrar el punto de ruptura del sistema y cómo se degrada." },
      { q: "¿Qué detectan específicamente las Pruebas de Resistencia (Soak Testing) que una prueba de carga corta típicamente pasa por alto?", options: ["Errores tipográficos en la UI", "Fugas de memoria y agotamiento lento de recursos que solo aparecen durante una duración larga y sostenida", "Contraste de color incorrecto", "Vulnerabilidades de inyección SQL"], correct: 1, explain: "Las Pruebas de Resistencia ejecutan carga moderada durante muchas horas o días, revelando fugas de memoria y agotamiento gradual de recursos que una prueba corta simplemente no se ejecuta el tiempo suficiente para revelar." },
      { q: "¿Por qué el tiempo de respuesta promedio puede ser engañoso como métrica de rendimiento por sí solo?", options: ["Los promedios nunca son útiles en ningún contexto", "Un promedio bajo todavía puede ocultar un porcentaje significativo de usuarios que experimentan respuestas mucho más lentas — por eso se reportan los percentiles p95/p99", "El tiempo de respuesta no se puede medir con precisión", "El promedio solo es relevante para las pruebas de estrés, no para las de carga"], correct: 1, explain: "Un sistema que promedia 200ms todavía podría dejar al 5% de los usuarios esperando varios segundos — los percentiles p95/p99 revelan esa experiencia del extremo de la cola que un promedio por sí solo oculta." },
      { q: "¿Qué es un 'protocolo de pensar en voz alta' en las pruebas de usabilidad?", options: ["Una regla que impide a los testers hablar durante una sesión", "Pedir a un participante que narre sus pensamientos mientras completa una tarea, revelando confusión que la observación silenciosa por sí sola pasaría por alto", "Una lista de preguntas guionizadas leídas textualmente al usuario", "Una herramienta automatizada que lee en voz alta el texto de la UI para pruebas de accesibilidad"], correct: 1, explain: "Un protocolo de pensar en voz alta hace que el participante verbalice su pensamiento mientras trabaja en una tarea, revelando confusión o vacilación que solo observar sus acciones no mostraría." },
      { q: "¿En qué se diferencian las pruebas A/B de la evaluación heurística como método de UX?", options: ["Son lo mismo", "Las pruebas A/B miden el comportamiento real a escala con tráfico real de producción dividido entre variantes, en lugar del juicio experto o una sesión pequeña observada", "La evaluación heurística requiere más usuarios que las pruebas A/B", "Las pruebas A/B reemplazan la necesidad de cualquier otro método de UX"], correct: 1, explain: "Las pruebas A/B comparan el comportamiento real de los usuarios a escala entre dos variantes; la evaluación heurística es una revisión experta contra principios de usabilidad conocidos — los dos enfoques son complementarios, no sustitutos." },
      { q: "¿Por qué una espera fija hardcodeada (por ejemplo, wait(2000)) se considera una mala práctica en la automatización de pruebas?", options: ["Siempre hace que las pruebas pasen sin importar el estado de la app", "Es demasiado corta (sigue siendo inestable) o demasiado larga (ralentiza la suite) — las herramientas modernas esperan automáticamente a que un elemento se vuelva accionable", "Las esperas fijas son ilegales en la mayoría de los frameworks de automatización", "Solo afecta a las pruebas de rendimiento, no a las funcionales"], correct: 1, explain: "Una espera fija es una suposición — demasiado corta y la prueba sigue siendo inestable, demasiado larga e innecesariamente ralentiza toda la suite; la espera automática (integrada en Playwright/Cypress) espera exactamente lo necesario." },
      { q: "¿Por qué un localizador ligado a un atributo data-testid es generalmente más fiable que uno ligado a una clase CSS de estilo?", options: ["Los atributos data-testid se ejecutan más rápido que los selectores CSS", "Una clase de estilo puede cambiar durante un rediseño y romper silenciosamente la prueba, mientras que un atributo de test-id dedicado es estable ante cambios visuales", "Los selectores CSS no se pueden usar en ningún framework de automatización", "No hay ninguna diferencia real entre los dos enfoques"], correct: 1, explain: "Una clase CSS ligada al estilo probablemente cambie cuando un diseñador reestiliza la página, rompiendo la prueba; un atributo data-testid dedicado está pensado solo para pruebas y se mantiene estable ante rediseños visuales." },
      { q: "¿Por qué importa la independencia de las pruebas (no depender de la ejecución u orden de otra prueba) en una suite automatizada?", options: ["No importa mientras todas las pruebas eventualmente pasen", "Las pruebas dependientes del orden producen un patrón de fallo común y difícil de diagnosticar de 'funciona sola, falla en la suite'", "Las pruebas independientes siempre se ejecutan más lento que las dependientes", "Solo es una preocupación para las pruebas manuales, no para la automatización"], correct: 1, explain: "Una prueba que depende silenciosamente del estado remanente de otra prueba puede pasar aislada pero fallar cuando se ejecuta como parte de la suite completa (o en un orden distinto) — un error notoriamente difícil de rastrear." },
      { q: "¿Qué tipo de herramientas proporcionan BrowserStack o Sauce Labs?", options: ["Generación de casos de prueba basada en IA", "Pruebas en la nube entre navegadores/dispositivos — ejecutando la misma suite contra combinaciones reales de navegador/SO/dispositivo sin mantener un laboratorio físico de dispositivos", "Análisis estático de código para vulnerabilidades de seguridad", "Seguimiento y gestión de defectos"], correct: 1, explain: "BrowserStack, Sauce Labs y LambdaTest proporcionan acceso en la nube a combinaciones reales de navegador/SO/dispositivo, evitando el costo y mantenimiento de un laboratorio físico de dispositivos." },
      { q: "¿Cuál es la contrapartida típicamente asociada a las herramientas de automatización low-code/grabar-y-reproducir como Katalon Studio?", options: ["No pueden ser usadas por ningún equipo, nunca", "Bajan la barrera de entrada para equipos sin ingenieros de automatización dedicados, pero son típicamente menos flexibles que los frameworks basados en código para lógica compleja", "Siempre son más caras que los frameworks basados en código", "Solo funcionan para pruebas de API, nunca de UI"], correct: 1, explain: "Las herramientas low-code hacen que la automatización sea accesible para equipos sin habilidades profundas de programación, pero esa accesibilidad usualmente se cambia por la flexibilidad que ofrece un framework basado en código para lógica de prueba compleja." },
      { q: "¿Qué significa 'pruebas continuas', y cómo se conecta con la arquitectura de pipeline del Módulo 9?", options: ["Ejecutar la suite de pruebas manuales completa una vez al año", "Ejecutar pruebas automatizadas continuamente a lo largo del pipeline, no solo antes del lanzamiento, para que la retroalimentación llegue en minutos tras un cambio", "Un sinónimo de pruebas exploratorias", "Pruebas que nunca tienen un criterio de aprobación/fallo definido"], correct: 1, explain: "Las pruebas continuas integran pruebas automatizadas a lo largo del pipeline de CI/CD para que cada cambio reciba retroalimentación rápida — las herramientas de este módulo solo aportan valor cuando realmente están conectadas a un pipeline que las ejecuta continuamente." }
    ]
  },
  glossary: [
{term:"Pruebas de Aceptación",cat:"Functional",def:"Pruebas formales realizadas para determinar si un sistema satisface o no sus criterios de aceptación, y para permitir que el cliente determine si aceptar o no el sistema. Normalmente las realiza el cliente."},
{term:"Pruebas de Accesibilidad",cat:"Specialized",def:"Tipo de prueba que determina la usabilidad de un producto para personas con discapacidades (sordas, ciegas, con discapacidad mental, etc.). El proceso de evaluación lo realizan personas con discapacidades."},
{term:"Pruebas Activas",cat:"General",def:"Tipo de prueba que consiste en introducir datos de prueba y analizar los resultados de la ejecución. Normalmente la realiza el equipo de pruebas."},
{term:"Pruebas Ágiles",cat:"General",def:"Práctica de pruebas de software que sigue los principios del manifiesto ágil, enfatizando las pruebas desde la perspectiva de los clientes que utilizarán el sistema. Normalmente la realizan los equipos de QA."},
{term:"Pruebas de Envejecimiento",cat:"Specialized",def:"Tipo de prueba que evalúa la capacidad de un sistema para funcionar en el futuro. El proceso de evaluación lo realizan los equipos de pruebas.",aliases:["Age Testing"]},
{term:"Pruebas Ad Hoc",cat:"Functional",def:"Pruebas realizadas sin planificación ni documentación — el tester intenta 'romper' el sistema probando aleatoriamente su funcionalidad. Las realiza el equipo de pruebas.",aliases:["Ad-hoc Testing"]},
{term:"Pruebas Alfa",cat:"Functional",def:"Un tipo de prueba de software realizada en el sitio del desarrollador para identificar errores, problemas de usabilidad y vacíos de funcionalidad antes de lanzar el producto a las pruebas beta. Involucra a testers internos, como desarrolladores y equipos de QA, y a veces a usuarios finales seleccionados en un entorno controlado."},
{term:"Pruebas de Aserción",cat:"General",def:"Tipo de prueba que consiste en verificar si las condiciones confirman los requisitos del producto. La realiza el equipo de pruebas."},
{term:"Pruebas de API",cat:"Functional",def:"Técnica de prueba similar a las pruebas unitarias en cuanto a que apunta al nivel del código. Las pruebas de API se diferencian de las pruebas unitarias en que normalmente son una tarea de QA y no del desarrollador."},
{term:"Pruebas de Todos los Pares",cat:"Specialized",def:"Método de pruebas combinatorias que prueba todas las combinaciones discretas posibles de parámetros de entrada. La realizan los equipos de pruebas.",aliases:["All-pairs Testing"]},
{term:"Pruebas Automatizadas",cat:"General",def:"Técnica de pruebas que utiliza herramientas de automatización de pruebas para controlar la configuración del entorno, la ejecución de pruebas y el reporte de resultados. La realiza un ordenador y se usa dentro de los equipos de pruebas."},
{term:"Pruebas de Ruta Base",cat:"Structural",def:"Mecanismo de prueba que deriva una medida de complejidad lógica de un diseño procedimental y la usa como guía para definir un conjunto básico de rutas de ejecución. Lo usan los equipos de pruebas al definir casos de prueba.",aliases:["Basis Path Testing"]},
{term:"Pruebas de Compatibilidad Retroactiva",cat:"Specialized",def:"Método de prueba que verifica el comportamiento del software desarrollado con versiones anteriores del entorno de prueba. La realiza el equipo de pruebas.",aliases:["Backward Compatibility Testing"]},
{term:"Pruebas Beta",cat:"Functional",def:"Última prueba antes de lanzar una aplicación con fines comerciales. Normalmente la realizan los usuarios finales u otros."},
{term:"Pruebas de Referencia (Benchmark)",cat:"Non-Functional",def:"Técnica de prueba que usa conjuntos representativos de programas y datos diseñados para evaluar el rendimiento del hardware y software de una computadora en una configuración dada. La realizan los equipos de pruebas.",aliases:["Benchmark Testing"]},
{term:"Pruebas de Integración Big Bang",cat:"Functional",def:"Técnica de prueba que integra los módulos individuales del programa solo cuando todo está listo. La realizan los equipos de pruebas."},
{term:"Pruebas de Portabilidad Binaria",cat:"Specialized",def:"Técnica que prueba una aplicación ejecutable para verificar su portabilidad entre plataformas y entornos de sistema, normalmente en conformidad con una especificación ABI. La realizan los equipos de pruebas.",aliases:["Binary Portability Testing"]},
{term:"Pruebas de Valores Límite",cat:"Functional",def:"Técnica de pruebas de software en la que las pruebas se diseñan para incluir representantes de los valores límite. La realizan los equipos de QA. Ejemplo: para un rango de entrada válido de 1–10, valores de prueba 0, 1, 2, 9, 10 y 11.",aliases:["Análisis de Valores Límite","AVL","Boundary Value Analysis","BVA"]},
{term:"Pruebas de Integración Ascendente",cat:"Functional",def:"En las pruebas de integración ascendente (bottom-up), primero se desarrollan los módulos de nivel más bajo y luego se integran y prueban uno a la vez los demás módulos hacia el programa 'principal'. Normalmente las realizan los equipos de pruebas.",aliases:["Bottom Up Integration Testing"]},
{term:"Pruebas de Ramas",cat:"Structural",def:"Técnica de prueba en la que todas las ramas del código fuente del programa se prueban al menos una vez. La realiza el desarrollador.",aliases:["Branch Testing"]},
{term:"Pruebas de Amplitud",cat:"General",def:"Una suite de pruebas que ejercita toda la funcionalidad de un producto pero no prueba las funcionalidades en detalle. La realizan los equipos de pruebas.",aliases:["Breadth Testing"]},
{term:"Pruebas de Caja Negra",cat:"General",def:"Un método de pruebas de software que verifica la funcionalidad de una aplicación sin tener conocimiento específico del código/estructura interna de la aplicación. Las pruebas se basan en los requisitos y la funcionalidad. La realizan los equipos de QA.",aliases:["Black box Testing"]},
{term:"Pruebas Dirigidas por Código",cat:"Structural",def:"Técnica de prueba que usa frameworks de pruebas (como xUnit) que permiten la ejecución de pruebas unitarias para determinar si varias secciones del código se comportan como se espera bajo distintas circunstancias. La realizan los equipos de desarrollo.",aliases:["Code-driven Testing"]},
{term:"Pruebas de Compatibilidad",cat:"Specialized",def:"Técnica de prueba que valida qué tan bien se desempeña un software en un entorno de hardware/software/sistema operativo/red particular. La realizan los equipos de pruebas."},
{term:"Pruebas de Comparación",cat:"General",def:"Técnica de prueba que compara las fortalezas y debilidades del producto con versiones anteriores u otros productos similares. Pueden realizarla testers, desarrolladores, gerentes de producto o dueños de producto."},
{term:"Pruebas de Componentes",cat:"Functional",def:"Técnica de prueba similar a las pruebas unitarias pero con un nivel de integración mayor — la prueba se realiza en el contexto de la aplicación en lugar de probar directamente solo un método específico. Pueden realizarla los equipos de pruebas o de desarrollo."},
{term:"Pruebas de Configuración",cat:"Non-Functional",def:"Técnica de prueba que determina la configuración mínima y óptima de hardware y software, y el efecto de agregar o modificar recursos como memoria, unidades de disco y CPU. Normalmente la realizan los ingenieros de pruebas de rendimiento."},
{term:"Pruebas de Cobertura de Condiciones",cat:"Structural",def:"Tipo de prueba de software en el que cada condición se ejecuta haciéndola verdadera y falsa, de cada manera, al menos una vez. Normalmente la realizan los equipos de pruebas de automatización.",aliases:["Condition Coverage Testing"]},
{term:"Pruebas de Cumplimiento",cat:"Specialized",def:"Tipo de prueba que comprueba si el sistema se desarrolló de acuerdo con estándares, procedimientos y directrices. Normalmente la realizan empresas externas que ofrecen una marca de 'Certificado Conforme'.",aliases:["Compliance Testing"]},
{term:"Pruebas de Concurrencia",cat:"Non-Functional",def:"Pruebas multiusuario orientadas a determinar los efectos de acceder al mismo código de aplicación, módulo o registros de base de datos. Normalmente las realizan los ingenieros de rendimiento."},
{term:"Pruebas de Conformidad",cat:"Specialized",def:"El proceso de probar que una implementación se ajusta a la especificación en la que se basa. Normalmente la realizan los equipos de pruebas."},
{term:"Pruebas Dirigidas por el Contexto",cat:"General",def:"Una técnica de Pruebas Ágiles que promueve la evaluación continua y creativa de las oportunidades de prueba a la luz de la información potencial revelada y del valor de esa información para la organización en un momento específico. Normalmente la realizan los equipos de pruebas ágiles.",aliases:["Context Driven Testing"]},
{term:"Pruebas de Conversión",cat:"General",def:"Prueba de programas o procedimientos usados para convertir datos de sistemas existentes para su uso en sistemas de reemplazo. Normalmente la realizan los equipos de QA."},
{term:"Pruebas de Cobertura de Decisiones",cat:"Structural",def:"Tipo de prueba de software en el que cada condición/decisión se ejecuta poniéndola en verdadero/falso. Normalmente la realizan los equipos de pruebas de automatización.",aliases:["Decision Coverage Testing"]},
{term:"Pruebas de Tabla de Decisión",cat:"General",def:"Una técnica estructurada de diseño de pruebas que mapea combinaciones de entradas (causas) a sus salidas esperadas (efectos) en una tabla de causa-efecto. Pasos: listar las entradas en filas, enumerar las combinaciones de reglas en columnas, completar las combinaciones y registrar el resultado esperado de cada combinación. Ejemplo: un botón 'Enviar' que se habilita solo cuando todos los campos del formulario están completos."},
{term:"Pruebas Destructivas",cat:"Specialized",def:"Tipo de prueba en la que se llevan las pruebas hasta el fallo de la muestra, con el fin de entender el rendimiento estructural o el comportamiento del material bajo distintas cargas. Normalmente la realizan los equipos de QA."},
{term:"Pruebas de Dependencia",cat:"General",def:"Tipo de prueba que examina los requisitos de una aplicación en cuanto a software preexistente, estados iniciales y configuración con el fin de mantener la funcionalidad adecuada. Normalmente la realizan los equipos de pruebas."},
{term:"Pruebas Dinámicas",cat:"General",def:"Término usado en la ingeniería de software para describir la prueba del comportamiento dinámico del código. Normalmente la realizan los equipos de pruebas."},
{term:"Pruebas de Dominio",cat:"Structural",def:"Técnica de prueba de caja blanca que comprueba que el programa acepta solo entradas válidas. Normalmente la realizan los equipos de desarrollo de software y ocasionalmente los equipos de pruebas de automatización."},
{term:"Pruebas de Manejo de Errores",cat:"Functional",def:"Tipo de prueba de software que determina la capacidad del sistema para procesar correctamente las transacciones erróneas. Normalmente la realizan los equipos de pruebas."},
{term:"Adivinación de Errores",cat:"General",def:"Una técnica informal de diseño de pruebas que se basa en la experiencia, la intuición y los datos históricos de defectos del tester para anticipar áreas problemáticas probables. No tiene pasos formales y depende de testers hábiles y experimentados."},
{term:"Pruebas de Extremo a Extremo",cat:"Functional",def:"Similares a las pruebas de sistema, implican probar un entorno de aplicación completo en una situación que imita el uso real, como interactuar con una base de datos, usar comunicaciones de red, o interactuar con otro hardware, aplicaciones o sistemas si corresponde. Las realizan los equipos de QA.",aliases:["End-to-end Testing"]},
{term:"Pruebas de Resistencia (Endurance)",cat:"Non-Functional",def:"Tipo de prueba que comprueba fugas de memoria u otros problemas que puedan ocurrir con una ejecución prolongada. Normalmente la realizan los ingenieros de rendimiento.",aliases:["Endurance Testing"]},
{term:"Pruebas Exploratorias",cat:"Functional",def:"Técnica de pruebas de caja negra realizada sin planificación ni documentación, donde el diseño y la ejecución de pruebas ocurren al mismo tiempo. Normalmente la realizan testers manuales."},
{term:"Pruebas de Partición de Equivalencia",cat:"Functional",def:"Técnica de pruebas de software que divide los datos de entrada de una unidad de software en particiones de datos a partir de las cuales se pueden derivar los casos de prueba. Ejemplo: los rangos válidos 1–10 y 20–30 dan cinco clases (<1, 1–10, 11–19, 20–30, >30); valores de prueba de ejemplo -2, 3, 15, 25, 45. Normalmente la realizan los equipos de QA.",aliases:["Partición en Clases de Equivalencia","PCE","Equivalence Class Partitioning","ECP"]},
{term:"Pruebas de Inyección de Fallos",cat:"Specialized",def:"Elemento de una estrategia de pruebas integral que permite al tester concentrarse en la manera en que la aplicación bajo prueba puede manejar excepciones. La realizan los equipos de QA.",aliases:["Fault injection Testing"]},
{term:"Pruebas de Verificación Formal",cat:"Structural",def:"El acto de demostrar o refutar la corrección de los algoritmos previstos que subyacen a un sistema respecto a una determinada especificación o propiedad formal, usando métodos formales de las matemáticas. Normalmente la realizan los equipos de QA.",aliases:["Formal verification Testing"]},
{term:"Pruebas Funcionales",cat:"Functional",def:"Tipo de prueba de caja negra que basa sus casos de prueba en las especificaciones del componente de software bajo prueba. La realizan los equipos de pruebas."},
{term:"Pruebas de Fuzzing",cat:"Specialized",def:"Técnica de pruebas de software que proporciona datos inválidos, inesperados o aleatorios a las entradas de un programa — un área especial de las pruebas de mutación. Las pruebas de fuzzing las realizan los equipos de pruebas.",aliases:["Fuzz Testing"]},
{term:"Pruebas Gorilla",cat:"General",def:"Técnica de pruebas de software que se enfoca en probar intensamente un módulo en particular. La realizan los equipos de aseguramiento de calidad, normalmente al ejecutar una prueba completa.",aliases:["Gorilla Testing"]},
{term:"Pruebas de Caja Gris",cat:"General",def:"Una combinación de las metodologías de pruebas de caja negra y caja blanca: probar una pieza de software frente a su especificación pero usando cierto conocimiento de su funcionamiento interno. Puede realizarla el equipo de desarrollo o el de pruebas.",aliases:["Gray Box Testing"]},
{term:"Pruebas de Caja de Cristal",cat:"Structural",def:"Similares a las pruebas de caja blanca, basadas en el conocimiento de la lógica interna del código de una aplicación. Las realizan los equipos de desarrollo.",aliases:["Glass box Testing"]},
{term:"Pruebas de Software de GUI",cat:"Functional",def:"El proceso de probar un producto que usa una interfaz gráfica de usuario, para asegurar que cumple con sus especificaciones escritas. Normalmente lo realizan los equipos de pruebas.",aliases:["GUI software Testing"]},
{term:"Pruebas de Globalización",cat:"Specialized",def:"Método de prueba que comprueba el correcto funcionamiento del producto con cualquiera de las configuraciones de cultura/idioma usando todo tipo de entrada internacional posible. La realiza el equipo de pruebas.",aliases:["Globalization Testing"]},
{term:"Pruebas de Integración Híbrida",cat:"Functional",def:"Técnica de prueba que combina las técnicas de integración descendente y ascendente para aprovechar los beneficios de ambos tipos de prueba. Normalmente la realizan los equipos de pruebas.",aliases:["Hybrid Integration Testing"]},
{term:"Pruebas de Integración",cat:"Functional",def:"La fase de las pruebas de software en la que se combinan y prueban en grupo los módulos de software individuales. Normalmente la realizan los equipos de pruebas."},
{term:"Pruebas de Interfaz",cat:"Functional",def:"Pruebas realizadas para evaluar si los sistemas o componentes se pasan datos y control correctamente entre sí. Normalmente las realizan tanto los equipos de pruebas como los de desarrollo."},
{term:"Pruebas de Instalación/Desinstalación",cat:"Specialized",def:"Trabajo de aseguramiento de calidad que se enfoca en lo que los clientes necesitarán hacer para instalar y configurar con éxito el nuevo software. Puede implicar procesos completos, parciales o de actualización de instalación/desinstalación, y normalmente lo realiza el ingeniero de pruebas de software junto con el gestor de configuración.",aliases:["Install/uninstall Testing"]},
{term:"Pruebas de Internacionalización",cat:"Specialized",def:"El proceso que asegura que la funcionalidad de un producto no se rompa y que todos los mensajes se externalicen correctamente cuando se usa en distintos idiomas y configuraciones regionales. Normalmente la realizan los equipos de pruebas.",aliases:["Internationalization Testing"]},
{term:"Pruebas Inter-Sistemas",cat:"Functional",def:"Una técnica de prueba enfocada en verificar que las interconexiones entre aplicaciones funcionen correctamente. Normalmente la realizan los equipos de pruebas.",aliases:["Inter-Systems Testing"]},
{term:"Pruebas Dirigidas por Palabras Clave",cat:"General",def:"También conocida como pruebas dirigidas por tabla o pruebas por palabra de acción, una metodología de pruebas de software para pruebas automatizadas que separa el proceso de creación de pruebas en dos etapas distintas: una etapa de planificación y una etapa de implementación. Puede usarla tanto el equipo de pruebas manuales como el de automatización.",aliases:["Keyword-driven Testing"]},
{term:"Pruebas de Carga",cat:"Non-Functional",def:"Técnica de prueba que somete a demanda a un sistema o dispositivo y mide su respuesta. Normalmente la realizan los ingenieros de rendimiento."},
{term:"Pruebas de Localización",cat:"Specialized",def:"Parte del proceso de pruebas de software enfocada en adaptar una aplicación globalizada a una cultura/región particular. Normalmente la realizan los equipos de pruebas."},
{term:"Pruebas de Bucles",cat:"Structural",def:"Una técnica de pruebas de caja blanca que ejercita los bucles del programa. La realizan los equipos de desarrollo.",aliases:["Loop Testing"]},
{term:"Pruebas Manuales Guionizadas",cat:"General",def:"Método de prueba en el que los casos de prueba son diseñados y revisados por el equipo antes de ejecutarlos. Lo realizan los equipos de pruebas manuales.",aliases:["Manual Scripted Testing"]},
{term:"Pruebas de Soporte Manual",cat:"General",def:"Técnica de prueba que implica probar todas las funciones realizadas por personas al preparar datos y usar esos datos desde un sistema automatizado. La realizan los equipos de pruebas.",aliases:["Manual-Support Testing"]},
{term:"Pruebas Basadas en Modelos",cat:"General",def:"La aplicación del diseño basado en modelos para diseñar y ejecutar los artefactos necesarios para realizar pruebas de software. Normalmente la realizan los equipos de pruebas.",aliases:["Model-Based Testing"]},
{term:"Pruebas de Mutación",cat:"Structural",def:"Método de pruebas de software que implica modificar el código fuente o el bytecode de un programa de pequeñas maneras para probar secciones del código que rara vez o nunca se acceden durante la ejecución normal de pruebas. Normalmente la realizan los testers."},
{term:"Pruebas Dirigidas por Modularidad",cat:"General",def:"Técnica de pruebas de software que requiere la creación de scripts pequeños e independientes que representan módulos, secciones y funciones de la aplicación bajo prueba. Normalmente la realiza el equipo de pruebas.",aliases:["Modularity-driven Testing"]},
{term:"Pruebas No Funcionales",cat:"Non-Functional",def:"Técnica de prueba que se enfoca en probar una aplicación de software en cuanto a sus requisitos no funcionales. Puede realizarla el equipo de ingenieros de rendimiento o el de pruebas manuales."},
{term:"Pruebas Negativas",cat:"General",def:"También conocida como 'prueba para fallar' — método de prueba en el que el objetivo de las pruebas es demostrar que un componente o sistema no funciona. La realizan testers manuales o de automatización.",aliases:["Negative Testing"]},
{term:"Pruebas Operacionales",cat:"Non-Functional",def:"Técnica de prueba realizada para evaluar un sistema o componente en su entorno operacional. Normalmente la realizan los equipos de pruebas.",aliases:["Operational Testing"]},
{term:"Pruebas de Matriz Ortogonal",cat:"Specialized",def:"Forma sistemática y estadística de probar que puede aplicarse en las pruebas de interfaz de usuario, pruebas de sistema, pruebas de regresión, pruebas de configuración y pruebas de rendimiento. La realiza el equipo de pruebas.",aliases:["Orthogonal array Testing"]},
{term:"Pair Testing (Pruebas en Pareja)",cat:"Functional",def:"Técnica de desarrollo de software en la que dos miembros del equipo trabajan juntos en un teclado para probar la aplicación de software. Uno realiza las pruebas y el otro analiza o revisa las pruebas. Puede hacerse entre un tester y un desarrollador o analista de negocio, o entre dos testers que se turnan para conducir el teclado."},
{term:"Pruebas Pasivas",cat:"General",def:"Técnica de prueba que consiste en monitorear los resultados de un sistema en ejecución sin introducir ningún dato de prueba especial. La realiza el equipo de pruebas.",aliases:["Passive Testing"]},
{term:"Pruebas en Paralelo",cat:"Change-Related",def:"Técnica de prueba cuyo propósito es asegurar que una nueva aplicación que ha reemplazado a su versión anterior se ha instalado y está funcionando correctamente. La realiza el equipo de pruebas.",aliases:["Parallel Testing"]},
{term:"Pruebas de Rutas",cat:"Structural",def:"Prueba de caja blanca típica cuyo objetivo es satisfacer los criterios de cobertura para cada ruta lógica del programa. Normalmente la realiza el equipo de desarrollo.",aliases:["Path Testing"]},
{term:"Pruebas de Penetración",cat:"Specialized",def:"Método de prueba que evalúa la seguridad de un sistema informático o red simulando un ataque de una fuente maliciosa. Normalmente la realizan empresas especializadas en pruebas de penetración.",aliases:["Penetration Testing"]},
{term:"Pruebas de Rendimiento",cat:"Non-Functional",def:"Pruebas funcionales realizadas para evaluar el cumplimiento de un sistema o componente con los requisitos de rendimiento especificados. Normalmente la realiza el ingeniero de rendimiento.",aliases:["Performance Testing"]},
{term:"Pruebas de Calificación",cat:"Change-Related",def:"Pruebas frente a las especificaciones del lanzamiento anterior, normalmente realizadas por el desarrollador para el consumidor, para demostrar que el software cumple con sus requisitos especificados.",aliases:["Qualification Testing"]},
{term:"Pruebas de Rampa",cat:"Non-Functional",def:"Tipo de prueba que consiste en aumentar continuamente una señal de entrada hasta que el sistema falla. Puede realizarla el equipo de pruebas o el ingeniero de rendimiento.",aliases:["Ramp Testing"]},
{term:"Pruebas de Regresión",cat:"Change-Related",def:"Tipo de pruebas de software que busca detectar errores de software después de que se han realizado cambios en el programa (por ejemplo, correcciones de errores o nueva funcionalidad), volviendo a probar el programa. La realizan los equipos de pruebas."},
{term:"Pruebas de Recuperación",cat:"Non-Functional",def:"Técnica de prueba que evalúa qué tan bien se recupera un sistema de fallos, fallas de hardware u otros problemas catastróficos. La realizan los equipos de pruebas.",aliases:["Recovery Testing"]},
{term:"Pruebas de Requisitos",cat:"Functional",def:"Técnica de prueba que valida que los requisitos sean correctos, completos, no ambiguos y lógicamente consistentes, y permite diseñar un conjunto necesario y suficiente de casos de prueba a partir de esos requisitos. La realizan los equipos de QA.",aliases:["Requirements Testing"]},
{term:"Pruebas de Seguridad",cat:"Specialized",def:"Un proceso para determinar que un sistema de información protege los datos y mantiene la funcionalidad según lo previsto. Puede realizarlo los equipos de pruebas o empresas especializadas en pruebas de seguridad."},
{term:"Pruebas de Cordura (Sanity)",cat:"Change-Related",def:"Técnica de prueba que determina si una nueva versión del software funciona lo suficientemente bien como para aceptarla para un esfuerzo de pruebas mayor. La realizan los equipos de pruebas.",aliases:["Sanity Testing"]},
{term:"Pruebas de Escenarios",cat:"Functional",def:"Actividad de prueba que usa escenarios basados en una historia hipotética para ayudar a una persona a pensar en un problema o sistema complejo dentro de un entorno de pruebas. La realizan los equipos de pruebas.",aliases:["Scenario Testing"]},
{term:"Pruebas de Escalabilidad",cat:"Non-Functional",def:"Parte de la batería de pruebas no funcionales que prueba una aplicación de software para medir su capacidad de escalar — ya sea la carga de usuarios soportada, el número de transacciones, el volumen de datos, etc. La realiza el ingeniero de rendimiento.",aliases:["Scalability Testing"]},
{term:"Pruebas de Sentencias",cat:"Structural",def:"Prueba de caja blanca que satisface el criterio de que cada sentencia de un programa se ejecute al menos una vez durante las pruebas del programa. Normalmente la realiza el equipo de desarrollo.",aliases:["Statement Testing"]},
{term:"Pruebas Estáticas",cat:"General",def:"Una forma de pruebas de software en la que el software no se usa realmente. Comprueba principalmente la sanidad del código, el algoritmo o el documento. La usa el desarrollador que escribió el código.",aliases:["Static Testing"]},
{term:"Pruebas de Estabilidad",cat:"Non-Functional",def:"Técnica de prueba que intenta determinar si una aplicación se bloqueará. Normalmente la realiza el ingeniero de rendimiento.",aliases:["Stability Testing"]},
{term:"Pruebas de Humo",cat:"Change-Related",def:"Técnica de prueba que examina todos los componentes básicos de un sistema de software para asegurar que funcionen correctamente. Normalmente, las pruebas de humo las realiza el equipo de pruebas inmediatamente después de que se genera una build del software.",aliases:["Smoke Testing"]},
{term:"Pruebas de Almacenamiento",cat:"Non-Functional",def:"Tipo de prueba que verifica que el programa bajo prueba almacene los archivos de datos en los directorios correctos y que reserve suficiente espacio para evitar una terminación inesperada por falta de espacio. Normalmente la realiza el equipo de pruebas.",aliases:["Storage Testing"]},
{term:"Pruebas de Estrés",cat:"Non-Functional",def:"Técnica de prueba que evalúa un sistema o componente en o más allá de los límites de sus requisitos especificados. Normalmente la realiza el ingeniero de rendimiento.",aliases:["Stress Testing"]},
{term:"Pruebas Estructurales",cat:"Structural",def:"Técnica de prueba de caja blanca que toma en cuenta la estructura interna de un sistema o componente y asegura que cada sentencia del programa cumpla su función prevista. Normalmente la realizan los desarrolladores de software.",aliases:["Structural Testing"]},
{term:"Pruebas de Sistema",cat:"Functional",def:"El proceso de probar un sistema integrado de hardware y software para verificar que el sistema cumple con sus requisitos especificados. La realizan los equipos de pruebas tanto en entornos de desarrollo como de destino."},
{term:"Pruebas de Integración de Sistemas",cat:"Functional",def:"Proceso de prueba que ejercita la coexistencia de un sistema de software con otros. Normalmente la realizan los equipos de pruebas.",aliases:["System integration Testing"]},
{term:"Pruebas de Integración Descendente",cat:"Functional",def:"Técnica de prueba que implica comenzar por la parte superior de una jerarquía de sistema en la interfaz de usuario y usar stubs para probar de arriba hacia abajo hasta que todo el sistema se haya implementado. La realizan los equipos de pruebas.",aliases:["Top Down Integration Testing"]},
{term:"Pruebas de Hilo (Thread)",cat:"Functional",def:"Una variación de la técnica de pruebas descendentes en la que la integración progresiva de componentes sigue la implementación de subconjuntos de los requisitos. Normalmente la realizan los equipos de pruebas.",aliases:["Thread Testing"]},
{term:"Pruebas de Actualización",cat:"Change-Related",def:"Técnica de prueba que verifica si los activos creados con versiones anteriores pueden usarse correctamente y que el aprendizaje del usuario no se ve afectado. La realizan los equipos de pruebas.",aliases:["Upgrade Testing"]},
{term:"Pruebas Unitarias",cat:"Structural",def:"Método de verificación y validación de software en el que un programador prueba si las unidades individuales del código fuente son aptas para su uso. Normalmente la realiza el equipo de desarrollo."},
{term:"Pruebas de Interfaz de Usuario",cat:"Functional",def:"Tipo de prueba que se realiza para comprobar qué tan amigable es la aplicación para el usuario. La realizan los equipos de pruebas."},
{term:"Pruebas de Usabilidad",cat:"Non-Functional",def:"Técnica de prueba que verifica la facilidad con la que un usuario puede aprender a operar, preparar entradas para, e interpretar las salidas de un sistema o componente. Normalmente la realizan los usuarios finales."},
{term:"Pruebas de Volumen",cat:"Non-Functional",def:"Pruebas que confirman que cualquier valor que pueda volverse grande con el tiempo (como recuentos acumulados, registros y archivos de datos) puede ser manejado por el programa y no hará que el programa deje de funcionar o degrade su operación de ninguna manera. Normalmente la realiza el ingeniero de rendimiento.",aliases:["Volume Testing"]},
{term:"Pruebas de Vulnerabilidad",cat:"Specialized",def:"Tipo de prueba relacionada con la seguridad de la aplicación y cuyo propósito es prevenir problemas que puedan afectar la integridad y estabilidad de la aplicación. Puede realizarla equipos de pruebas internos o subcontratarse a empresas especializadas.",aliases:["Vulnerability Testing"]},
{term:"Pruebas de Caja Blanca",cat:"Structural",def:"Técnica de prueba basada en el conocimiento de la lógica interna del código de una aplicación e incluye pruebas como cobertura de sentencias, ramas, rutas y condiciones del código. La realizan los desarrolladores de software.",aliases:["White box Testing"]},
{term:"Pruebas de Flujo de Trabajo",cat:"Functional",def:"Técnica de pruebas de extremo a extremo guionizada que duplica flujos de trabajo específicos que se espera que utilice el usuario final. Normalmente la realizan los equipos de pruebas.",aliases:["Workflow Testing"]},
{term:"Buddy Testing",cat:"General",def:"Dos testers (a menudo un desarrollador y un tester) trabajan juntos en el mismo módulo, combinando perspectivas. Un tipo de Pruebas Ad Hoc."},
{term:"Monkey Testing",cat:"General",def:"Entradas aleatorias y no estructuradas lanzadas a la aplicación para ver si se rompe — el enfoque del 'mono en el teclado'. Un tipo de Pruebas Ad Hoc."},
{term:"Pruebas de Transición de Estados",cat:"General",def:"Una técnica de diseño de pruebas que modela cómo las secuencias de entrada mueven un sistema entre estados definidos, de modo que los testers puedan verificar las transiciones y las salidas en cada estado. Ejemplo: un sistema de inicio de sesión con PIN — un PIN correcto en cualquier intento otorga acceso; tres intentos incorrectos seguidos bloquean la cuenta.",aliases:["State Transition Testing"]},
{term:"REST",cat:"Specialized",def:"Representational State Transfer (transferencia de estado representacional) — un estilo arquitectónico para diseñar servicios web en red, ampliamente utilizado para la comunicación entre servicios en la nube. Las APIs RESTful se prueban enviando solicitudes HTTP (GET, POST, PUT, DELETE) y validando las respuestas."},
{term:"SBTM",cat:"General",def:"Session-Based Test Management (Gestión de Pruebas Basada en Sesiones) — un marco estructurado para ejecutar y reportar sesiones de pruebas exploratorias. Pasos: crear una taxonomía de errores, definir un chárter de prueba, acotar la sesión en el tiempo, revisar resultados, hacer un debriefing."},
{term:"Nivel K (K1-K4)",cat:"Specialized",def:"La escala del temario de ISTQB para saber con qué profundidad se examina un objetivo de aprendizaje: K1 = Recordar, K2 = Comprender, K3 = Aplicar, K4 = Analizar. El temario de Foundation Level usa principalmente K1-K3.",aliases:["K-Level (K1-K4)","K-Level"]},
{term:"Base de la Prueba",cat:"Specialized",def:"El cuerpo de conocimiento — requisitos, diseños, historias de usuario, etc. — usado como fuente para derivar los casos de prueba.",aliases:["Test Basis"]},
{term:"Oráculo de Prueba",cat:"Specialized",def:"La fuente usada para determinar el resultado esperado de una prueba: una especificación, otro sistema, el conocimiento de una persona, o algo similar.",aliases:["Test Oracle"]},
{term:"Pruebas de Confirmación",cat:"Change-Related",def:"También llamadas reprueba — volver a ejecutar una prueba previamente fallida después de una corrección, para confirmar que el defecto está resuelto.",aliases:["Re-testing","Confirmation Testing"]},
{term:"Criterios de Entrada",cat:"Specialized",def:"Las condiciones que deben cumplirse antes de que pueda comenzar una actividad de prueba. Se emparejan con los Criterios de Salida, que definen cuándo se considera completa la actividad.",aliases:["Entry Criteria"]},
{term:"Criterios de Salida",cat:"Specialized",def:"Las condiciones que deben cumplirse para que una actividad de prueba se considere completa. Se emparejan con los Criterios de Entrada, que definen cuándo puede comenzar.",aliases:["Exit Criteria"]},
{term:"Pirámide de Pruebas",cat:"Specialized",def:"Un modelo que recomienda muchas pruebas automatizadas de bajo nivel y rápidas (unitarias) y progresivamente menos pruebas de nivel más alto y más lentas (integración, UI/extremo a extremo).",aliases:["Test Pyramid"]},
{term:"Cuadrantes de Pruebas",cat:"Specialized",def:"Un modelo que ubica los tipos de prueba según dos ejes: si están orientados al negocio o a la tecnología, y si apoyan al equipo o critican el producto.",aliases:["Testing Quadrants"]},
{term:"Riesgo del Producto",cat:"Specialized",def:"La posibilidad de que un producto de trabajo no logre satisfacer las necesidades de los interesados. Se contrasta con el Riesgo del Proyecto, que amenaza la capacidad del proyecto para cumplir sus objetivos (por ejemplo, cronograma, recursos).",aliases:["Product Risk"]},
{term:"Riesgo del Proyecto",cat:"Specialized",def:"Un riesgo que amenaza la capacidad de un proyecto para cumplir sus objetivos — como retrasos en el cronograma o vacíos de recursos. Se contrasta con el Riesgo del Producto, que amenaza si el propio producto de trabajo satisface las necesidades de los interesados.",aliases:["Project Risk"]},
{term:"Densidad de Defectos",cat:"Specialized",def:"Una métrica que mide los defectos encontrados por unidad de tamaño — por ejemplo, por cada 1.000 líneas de código o por funcionalidad — usada para señalar módulos inusualmente riesgosos.",aliases:["Defect Density"]},
{term:"Tasa de Fuga",cat:"Specialized",def:"La proporción de defectos encontrados en producción frente a los detectados antes del lanzamiento. Una señal clave de si una estrategia de pruebas realmente está funcionando.",aliases:["Escape Rate","Escaped Defects"]},
{term:"Tasa de Flakiness (Inestabilidad)",cat:"Specialized",def:"La proporción de pruebas automatizadas que fallan de forma intermitente sin ningún cambio de código subyacente. Una tasa de flakiness creciente erosiona la confianza en una suite de pruebas, ya que los fallos reales empiezan a descartarse por defecto.",aliases:["Flakiness Rate"]},
{term:"MTTD / MTTR",cat:"Specialized",def:"Tiempo Medio de Detección y Tiempo Medio de Resolución — qué tan rápido se encuentra un defecto o incidente una vez que existe, y qué tan rápido se corrige después de eso."},
{term:"Métricas DORA",cat:"Specialized",def:"Cuatro métricas del grupo DevOps Research and Assessment usadas para medir el rendimiento de la entrega de software: Frecuencia de Despliegue, Tiempo de Entrega de Cambios, Tasa de Fallo de Cambios y Tiempo de Restauración del Servicio.",aliases:["DORA Metrics"]},
{term:"Pruebas Shift-Left",cat:"Specialized",def:"La práctica de mover las actividades de prueba más temprano en el ciclo de vida del desarrollo — por ejemplo, involucrando a los testers durante los requisitos y el diseño — en lugar de hacerlo solo después de completada la implementación.",aliases:["Shift-Left Testing"]},
{term:"Verificación vs. Validación",cat:"Specialized",def:"La verificación pregunta si un producto se construyó de acuerdo con su especificación (\"¿estamos construyendo el producto correctamente?\"); la validación pregunta si satisface la necesidad real del usuario (\"¿estamos construyendo el producto correcto?\")."},
{term:"Automatización de Pruebas Autorreparable",cat:"Specialized",def:"Automatización asistida por IA que ajusta automáticamente los localizadores de elementos de la UI cuando cambia el markup subyacente de la página, para que las pruebas no se rompan con cada pequeño ajuste del DOM.",aliases:["Self-Healing Test Automation"]},
{term:"Pruebas Visuales con IA",cat:"Specialized",def:"Un enfoque de prueba que compara capturas de pantalla usando diferenciación perceptual (basada en IA) en lugar de coincidencia exacta de píxeles, de modo que señala regresiones visuales reales mientras ignora el ruido de renderizado inofensivo. Herramientas de ejemplo: Applitools Eyes, Percy.",aliases:["Visual AI Testing"]},
{term:"Selección Predictiva de Pruebas",cat:"Specialized",def:"Usar datos históricos de fallos de pruebas para ejecutar solo el subconjunto de pruebas con más probabilidad de detectar una regresión para un cambio de código dado, reduciendo el tiempo de ejecución de CI.",aliases:["Predictive Test Selection"]},
{term:"Alucinación (IA)",cat:"Specialized",def:"Cuando un sistema de IA, especialmente un LLM, produce una salida que se afirma con seguridad pero que es factualmente falsa o no fundamentada — algo clave a comprobar al validar funcionalidades potenciadas por IA.",aliases:["Hallucination (AI)"]},
{term:"Inyección de Prompts",cat:"Specialized",def:"Un ataque o técnica de prueba en la que una entrada diseñada intenta anular las instrucciones originales de un sistema de IA, usada para comprobar si una funcionalidad potenciada por un LLM puede ser manipulada hacia un comportamiento inseguro o no deseado.",aliases:["Prompt Injection"]},
{term:"Page Object Model (POM)",cat:"Specialized",def:"Un patrón de diseño de automatización de pruebas en el que cada página o componente de la UI obtiene una clase que encapsula sus localizadores y acciones disponibles, de modo que las pruebas llaman a métodos de los page objects en lugar de tocar los localizadores directamente."},
{term:"Screenplay Pattern",cat:"Specialized",def:"Un patrón de diseño de automatización de pruebas que modela una prueba como un Actor con Abilities, que realiza Tasks y hace Questions — favoreciendo la composición sobre la herencia, y generalmente más escalable que el Page Object Model para suites grandes."},
{term:"Virtualización de Servicios",cat:"Specialized",def:"Simular una dependencia real (una API de terceros, un servicio downstream sin terminar) con un sustituto que devuelve respuestas realistas predefinidas o basadas en reglas, haciendo las pruebas más rápidas y fiables. Herramientas de ejemplo: WireMock, Mountebank.",aliases:["Service Virtualization"]},
{term:"Pruebas de Contrato",cat:"Specialized",def:"Probar el contrato de interfaz de un par de servicios de forma aislada en lugar de todo el sistema de extremo a extremo, de modo que los cambios de API que rompen compatibilidad se detectan sin necesidad de un entorno de integración completo.",aliases:["Contract Testing","Pruebas de Contrato Dirigidas por el Consumidor","Consumer-Driven Contract Testing"]},
{term:"Service Mesh",cat:"Specialized",def:"Infraestructura (por ejemplo, Istio, Linkerd) que gestiona la capa de red entre microservicios — enrutamiento, reintentos, timeouts, TLS mutuo, modelado del tráfico — a menudo probada verificando que su configuración de enrutamiento/políticas se comporta según lo previsto."},
{term:"Ingeniería del Caos",cat:"Specialized",def:"Inyectar deliberadamente fallos controlados (instancias eliminadas, latencia de red, agotamiento de recursos) en un sistema, a menudo en producción, para verificar que se degrada con elegancia en lugar de encadenarse en una interrupción. Popularizada por herramientas como Chaos Monkey y Gremlin.",aliases:["Chaos Engineering"]},
{term:"Pruebas Shift-Right",cat:"Specialized",def:"Extender deliberadamente las pruebas a producción mediante canary releases, feature flags y monitoreo sintético — el complemento de las pruebas shift-left, que mueven las pruebas más temprano en el ciclo de vida.",aliases:["Shift-Right Testing"]},
{term:"Quality Gate",cat:"Specialized",def:"Una comprobación automatizada en un pipeline de CI/CD que bloquea un merge o despliegue cuando no se cumple una condición — como una tasa mínima de aprobación, un umbral de cobertura, o cero hallazgos críticos de seguridad."},
{term:"Entorno de Prueba Efímero",cat:"Specialized",def:"Un entorno de prueba creado bajo demanda (por ejemplo, por pull request) y eliminado después, evitando la contención y la inestabilidad causadas por un único entorno de QA compartido y mutable.",aliases:["Ephemeral Test Environment"]},
{term:"Observabilidad (Tres Pilares)",cat:"Specialized",def:"Logs, métricas y trazas — los tres tipos de datos usados para comprender el comportamiento del sistema de forma continua, incluso en producción, en lugar de depender solo de escenarios de prueba prescritos.",aliases:["Observability (Three Pillars)"]},
{term:"Cono de Helado (Antipatrón)",cat:"Specialized",def:"Una forma de suite de pruebas que es el inverso de una Pirámide de Pruebas saludable: pesada en pruebas de UI/extremo a extremo lentas y frágiles y con muy pocas pruebas unitarias rápidas y baratas, lo que vuelve lenta y difícil de mantener a toda la suite.",aliases:["Ice-Cream Cone (Anti-Pattern)"]},
{term:"Canary Release",cat:"Specialized",def:"Una estrategia de despliegue que lanza un cambio a un pequeño porcentaje del tráfico de producción primero, de modo que los problemas se detectan antes de que el cambio llegue a todos."},
{term:"Feature Flag",cat:"Specialized",def:"Un interruptor que permite desplegar código manteniéndolo inactivo ('enviado apagado') y activarlo de forma gradual o selectiva, usado para desacoplar el despliegue del lanzamiento y apoyar las prácticas de pruebas shift-right."},
{term:"OWASP Top 10",cat:"Specialized",def:"La lista más ampliamente referenciada de riesgos críticos de seguridad en aplicaciones web, publicada y actualizada periódicamente por el Open Worldwide Application Security Project — el vocabulario de partida estándar para las pruebas conscientes de la seguridad."},
{term:"Inyección SQL (SQLi)",cat:"Specialized",def:"Una vulnerabilidad en la que una entrada no confiable se concatena directamente en una consulta SQL en lugar de parametrizarse correctamente, permitiendo a un atacante alterar la lógica de la consulta. Se corrige con consultas parametrizadas/sentencias preparadas.",aliases:["SQL Injection","SQLi"]},
{term:"Cross-Site Scripting (XSS)",cat:"Specialized",def:"Una vulnerabilidad en la que una entrada no confiable se renderiza como script ejecutable en el navegador de otro usuario. El XSS Almacenado persiste el payload; el XSS Reflejado lo rebota inmediatamente; el XSS basado en DOM ocurre enteramente del lado del cliente."},
{term:"Cross-Site Request Forgery (CSRF)",cat:"Specialized",def:"Un ataque en el que un sitio malicioso engaña al navegador de un usuario con sesión iniciada para que envíe una solicitud no deseada a un sitio de destino donde está autenticado. Se defiende con tokens CSRF y cookies SameSite."},
{term:"Control de Acceso Roto",cat:"Specialized",def:"Una clase de vulnerabilidad en la que el sistema no restringe adecuadamente lo que un usuario autenticado puede acceder o hacer — el riesgo OWASP mejor clasificado, a menudo explotado mediante IDOR (cambiar un ID en una URL para acceder a los datos de otro usuario).",aliases:["Broken Access Control","IDOR","Insecure Direct Object Reference"]},
{term:"SAST",cat:"Specialized",def:"Pruebas de Seguridad de Aplicaciones Estáticas — escanea el código fuente sin ejecutarlo, buscando patrones conocidos como peligrosos como consultas sin parametrizar o secretos hardcodeados. Se ejecuta temprano, a menudo en cada commit.",aliases:["Static Application Security Testing"]},
{term:"DAST",cat:"Specialized",def:"Pruebas de Seguridad de Aplicaciones Dinámicas — ataca una aplicación en ejecución desde el exterior, como lo haría un atacante real, sin conocimiento del código fuente. Detecta problemas de tiempo de ejecución/configuración que SAST no puede ver.",aliases:["Dynamic Application Security Testing"]},
{term:"IAST",cat:"Specialized",def:"Pruebas de Seguridad de Aplicaciones Interactivas — combina enfoques estáticos y dinámicos usando un agente instrumentado dentro de una aplicación en ejecución para encontrar vulnerabilidades con más contexto y menos falsos positivos.",aliases:["Interactive Application Security Testing"]},
{term:"SCA (Análisis de Composición de Software)",cat:"Specialized",def:"Escaneo de librerías y dependencias de terceros en busca de vulnerabilidades conocidas y publicadas (CVEs) — aborda el riesgo OWASP de 'Componentes Vulnerables y Desactualizados'. Herramientas de ejemplo: Snyk, Dependabot.",aliases:["Software Composition Analysis","SCA","Escaneo de Dependencias","Dependency Scanning"]},
{term:"Modelado de Amenazas",cat:"Specialized",def:"Un ejercicio estructurado, realizado durante el diseño antes de escribir código, para identificar qué podría salir mal en un sistema y cómo defenderse — usando comúnmente el framework STRIDE.",aliases:["Threat Modeling","STRIDE"]},
{term:"Zero Trust (Confianza Cero)",cat:"Specialized",def:"Un principio arquitectónico que nunca asume que una solicitud es segura solo porque proviene del interior del perímetro de red — cada solicitud se autentica y autoriza según sus propios méritos, sin importar su origen.",aliases:["Zero Trust"]},
{term:"Mínimo Privilegio",cat:"Specialized",def:"El principio de que cada usuario, servicio o proceso debería tener solo el acceso mínimo que necesita para hacer su trabajo — el fundamento al que en última instancia se remontan la mayoría de las clases de vulnerabilidad de seguridad.",aliases:["Least Privilege"]},
{term:"JWT (JSON Web Token)",cat:"Specialized",def:"Un token autocontenido que lleva claims, usado para autenticación/autorización. Debe tener su firma verificada en cada solicitud — confiar en sus claims sin comprobar la firma permite que se acepte un token manipulado.",aliases:["JSON Web Token","JWT"]},
{term:"OAuth 2.0",cat:"Specialized",def:"El protocolo estándar para el acceso delegado (por ejemplo, 'iniciar sesión con Google'), usando tokens con alcance limitado y expiración — las pruebas se centran en la expiración del token, los flujos de actualización y que los alcances otorgados realmente se apliquen."},
{term:"Pruebas por Pares (Pairwise)",cat:"Specialized",def:"Una técnica de diseño de pruebas combinatorias que cubre cada par de valores de parámetros con muchos menos casos de prueba que probar todas las combinaciones, basada en la observación de que la mayoría de los defectos de interacción involucran solo dos parámetros.",aliases:["Pairwise Testing","Pruebas Combinatorias","Combinatorial Testing"]},
{term:"Pruebas de Casos de Uso",cat:"General",def:"Una técnica de diseño de pruebas que deriva casos de prueba directamente de casos de uso documentados — las interacciones paso a paso entre un actor y el sistema, incluyendo los flujos principal y alternativo/de excepción.",aliases:["Use Case Testing"]},
{term:"WCAG",cat:"Specialized",def:"Pautas de Accesibilidad para el Contenido Web — la referencia estándar para la accesibilidad, organizada en torno a cuatro principios (Perceptible, Operable, Comprensible, Robusto) con niveles de conformidad A/AA/AAA.",aliases:["Web Content Accessibility Guidelines","POUR"]},
{term:"GraphQL",cat:"Specialized",def:"Un estilo de API de lenguaje de consulta que usa un único endpoint donde el cliente especifica exactamente qué datos quiere. El enfoque de pruebas incluye la validación del esquema y la protección contra consultas excesivas/anidadas (un riesgo de DoS)."},
{term:"gRPC",cat:"Specialized",def:"Un protocolo de API binario y contract-first (usando Protocol Buffers) construido para una comunicación rápida entre servicios, típicamente probado a partir de su definición de contrato .proto usando herramientas como grpcurl."},
{term:"Pruebas de Picos (Spike Testing)",cat:"Non-Functional",def:"Un tipo de prueba de rendimiento que aumenta la carga abruptamente (por ejemplo, de 100 a 5.000 usuarios en segundos) para simular ráfagas de tráfico repentinas como una campaña de marketing o un momento viral.",aliases:["Spike Testing"]},
{term:"Pruebas de Resistencia (Soak Testing)",cat:"Non-Functional",def:"Un tipo de prueba de rendimiento que ejecuta carga moderada durante una duración larga y sostenida (muchas horas o días) para detectar fugas de memoria y agotamiento lento de recursos que las pruebas cortas no pueden revelar.",aliases:["Soak Testing","Endurance Testing"]},
{term:"Percentil de Tiempo de Respuesta (p95/p99)",cat:"Non-Functional",def:"Una forma de reportar resultados de rendimiento que revela la experiencia del usuario en el extremo de la cola que un promedio oculta — p95 significa que el 95% de las solicitudes fueron más rápidas que este valor, p99 significa que el 99% lo fueron.",aliases:["p95","p99","Response Time Percentile"]},
{term:"Throughput",cat:"Non-Functional",def:"El número de solicitudes que un sistema maneja por unidad de tiempo (por ejemplo, solicitudes por segundo) — una métrica central junto con el tiempo de respuesta y la tasa de error en las pruebas de rendimiento."},
{term:"Evaluación Heurística",cat:"Specialized",def:"Evaluar una UI contra un conjunto conocido de principios de usabilidad (como las 10 heurísticas de usabilidad de Jakob Nielsen) sin necesitar usuarios reales — una forma rápida de detectar una parte significativa de los problemas de usabilidad.",aliases:["Heuristic Evaluation"]},
{term:"Protocolo de Pensar en Voz Alta",cat:"Specialized",def:"Una técnica de pruebas de usabilidad donde el participante narra sus pensamientos mientras completa una tarea, revelando confusión que la observación silenciosa por sí sola pasaría por alto.",aliases:["Think-Aloud Protocol"]},
{term:"Pruebas A/B",cat:"Specialized",def:"Ejecutar dos variantes de un diseño con tráfico real de producción dividido entre ellas y comparar una métrica objetivo (tasa de conversión, finalización de tareas) — mide el comportamiento real a escala, complementando las sesiones de usabilidad moderadas más pequeñas.",aliases:["A/B Testing"]},
{term:"Pruebas de Regresión Visual",cat:"Specialized",def:"Comparar automáticamente capturas de pantalla de una UI antes y después de un cambio para detectar roturas visuales no intencionadas. Herramientas de ejemplo: Applitools Eyes, Percy, Chromatic.",aliases:["Visual Regression Testing"]},
{term:"Pruebas Continuas",cat:"Specialized",def:"La práctica de ejecutar pruebas automatizadas continuamente a lo largo del pipeline de CI/CD, no solo antes del lanzamiento, para que la retroalimentación sobre cada cambio llegue en minutos.",aliases:["Continuous Testing"]}
  ]
};
