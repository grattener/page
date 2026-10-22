/**
 * ARCHIVO DE ESTUDIO / VISOR Y CARPETA DE GUÍAS DE ESTUDIO
 * Implementación fiel al sistema de diseño "The Digital Archivist" (Stitch)
 */

// =============================================================================
// 1. GUÍAS PRECARGADAS EN FORMATO EDITORIAL MARKDOWN
// =============================================================================
const DEFAULT_DOCUMENTS = [
  {
    id: "01_derecho_penal",
    filename: "01_Derecho_Penal_Patrimoniales.md",
    materia: "Derecho Penal",
    title: "Fundamentos de Derecho Penal y Delitos Patrimoniales",
    subtitle: "Estudio dogmático de Robo, Fraude, Abuso de Confianza y la estructura de tipicidad según el ordenamiento penal.",
    date: "Hoy, 10:24",
    status: "Leyendo",
    statusClass: "text-primary bg-primary-container",
    content: `
# Fundamentos de Derecho Penal y Delitos Patrimoniales

*Estudio dogmático de Robo, Fraude, Abuso de Confianza y la estructura de tipicidad según el ordenamiento penal.*

> **ANOTACIÓN DE ESTUDIO**  
> "La distinción sustantiva entre los delitos patrimoniales no reside en el valor económico del objeto material sustraído, sino en la naturaleza de la relación jurídica previa y en el vicio o ausencia absoluta del consentimiento del ofendido."

---

## 1. Cuadro Comparativo de Figuras Típicas

Para analizar un caso penal con precisión dogmática, es indispensable contrastar el verbo rector, la posesión previa y el vicio en la voluntad de la víctima:

| Delito Patrimonial | Verbo Rector Central | Posesión Previa del Bien | Estado del Consentimiento |
| :--- | :--- | :--- | :--- |
| **Robo** | *Apoderarse* | Clandestina o sin título alguno | **Inexistente**: No hay voluntad de entrega |
| **Fraude** | *Engañar / Aprovechar error* | Se entrega por engaño | **Viciado**: Entrega voluntaria pero engañada |
| **Abuso de Confianza** | *Disponer indebidamente* | Transmisión de tenencia precaria | **Concedido previamente**: Transmisión sin dominio |
| **Despojo** | *Ocupar / Desposeer inmueble* | Vía de hecho sobre bien raíz | **Inexistente**: Realizado con violencia o furtividad |

---

## 2. Formalización del Tipo Penal en Esquema Lógico

Consideremos la adecuación de la conducta típica al tipo de Robo Simple:

\`\`\`
// 1. Premisa Mayor: Tipo Penal Objetivo (Art. 367 CP)
Premisa 1: [Apoderamiento] ∧ [Cosa Mueble Ajena] ∧ [Sin Derecho] ∧ [Sin Consentimiento] → Tipicidad de Robo

// 2. Premisa Menor: Hechos Probados en la Carpeta de Investigación
Premisa 2: El imputado sustrajo el vehículo del estacionamiento privado sin conocimiento del propietario.

// ---------------------------------------------------------------------------------
Conclusión: ∴ Se actualiza el encuadramiento formal y la tipicidad de la conducta.
\`\`\`

---

## 3. Elementos Esenciales a Distinguir en Clase

- **El Objeto Material:** Recae exclusivamente sobre bienes muebles corpóreos susceptibles de apreciación pecuniaria.
- **La Posesión Originaria vs. Derivada:** En el abuso de confianza, quien recibe la cosa en virtud de un comodato o depósito tiene posesión derivada; disponer de ella con ánimo de dueño consuma el ilícito.
- **El Perjuicio Patrimonial Correlativo:** En el fraude debe existir un vínculo causal directo entre el ardid desplegado y el detrimento patrimonial resentido.

---

## 4. Lista de Comprobación para Análisis de Casos

Antes de formular la teoría del caso o resolver la guía, verifica cada elemento:

- [x] Identificar el verbo rector y confrontarlo con el texto de la norma penal aplicable.
- [x] Comprobar si existió transmisión previa de la custodia o si fue sustracción inmediata.
- [ ] Descartar causas de justificación (estado de necesidad justificante o consentimiento presunto).
- [ ] Verificar el requisito de procedibilidad: ¿se persigue de oficio o mediante querella de parte ofendida?
    `,
    quiz: [
      {
        q: "¿Cuál es la diferencia medular en la entrega del bien entre el Robo y el Fraude?",
        note: "Analiza el estado de la voluntad de la víctima al momento de la entrega.",
        a: [
          "En el robo no hay consentimiento de entrega; en el fraude la víctima entrega voluntariamente pero con la voluntad viciada por engaño.",
          "En el robo el objeto siempre es inmueble y en el fraude mueble.",
          "El robo siempre exige violencia física obligatoriamente.",
          "No existe diferencia dogmática, son figuras idénticas."
        ],
        correct: 0,
        why: "En el fraude existe un vicio en el consentimiento provocado por engaño o error; en el robo hay un apoderamiento ilícito sin consentimiento alguno."
      },
      {
        q: "¿Qué elemento resulta indispensable para que se configure el Abuso de Confianza?",
        note: "Considera el título bajo el cual el sujeto activo recibió la cosa.",
        a: [
          "Que previamente se le haya transmitido la posesión precaria o custodia de la cosa mueble, no el dominio.",
          "Que haya existido violencia física en la obtención inicial.",
          "Que el valor del bien sea estrictamente mayor a 1,000 UMAs.",
          "Que el imputado sea obligatoriamente un servidor público."
        ],
        correct: 0,
        why: "El abuso de confianza requiere que el bien haya sido entregado válidamente en posesión precaria o depósito, disponiendo de él indebidamente con posterioridad."
      },
      {
        q: "Si una persona vende un automóvil que se le dio en comodato (préstamo de uso), ¿qué delito comete?",
        note: "Tenía la tenencia para usarlo temporalmente, pero no el dominio para enajenarlo.",
        a: [
          "Abuso de confianza",
          "Robo calificado",
          "Fraude procesal",
          "Daño en propiedad ajena"
        ],
        correct: 0,
        why: "Dispuso indebidamente para sí del valor de una cosa que solo le fue entregada para su tenencia y uso temporal."
      }
    ],
    cards: [
      ["¿Qué es el verbo rector del Robo?", "El apoderamiento ilegítimo de una cosa mueble ajena sin derecho ni consentimiento."],
      ["¿Qué distingue al Fraude?", "El empleo de engaño o el aprovechamiento de un error para hacerse ilícitamente de un lucro."],
      ["¿Qué condición previa exige el Abuso de Confianza?", "La entrega previa de la posesión derivada o precaria del bien mueble ajeno."],
      ["¿Qué es el Bien Jurídico Tutelado?", "El valor o interés fundamental protegido por la norma penal, en este caso el patrimonio económico."]
    ]
  },

  {
    id: "02_juicio_amparo",
    filename: "02_Constitucional_Juicio_Amparo.md",
    materia: "Derecho Constitucional",
    title: "El Juicio de Amparo y la Tutela Constitucional",
    subtitle: "Control de regularidad, amparo directo e indirecto, principio de definitividad y suspensión del acto reclamado.",
    date: "Ayer",
    status: "Completada",
    statusClass: "text-secondary",
    content: `
# El Juicio de Amparo y la Tutela Constitucional

*Control de regularidad, amparo directo e indirecto, principio de definitividad y suspensión del acto reclamado.*

> **ANOTACIÓN DE ESTUDIO**  
> "El juicio de amparo no es una tercera instancia de apelación, sino un proceso jurisdiccional autónomo extraordinario de defensa del orden constitucional y los derechos fundamentales."

---

## 1. Competencia Jurisdiccional en Amparo

| Modalidad de Amparo | Órgano Competente | Actos Reclamados Impugnables | Plazo Genérico |
| :--- | :--- | :--- | :--- |
| **Amparo Indirecto** | Juzgados de Distrito / Colegiados Apelación | Leyes heteroaplicativas, actos fuera de juicio o ejecución irreparable | 15 días hábiles |
| **Amparo Directo** | Tribunales Colegiados de Circuito | Sentencias definitivas, laudos y resoluciones que ponen fin al juicio | 15 días hábiles |

---

## 2. Principios Rectores del Juicio de Garantías

1. **Instancia de Parte Agraviada:** El amparo nunca procede de oficio por el juez; requiere siempre la presentación de la demanda.
2. **Existencia de Interés Legítimo o Jurídico:** El quejoso debe aducir ser titular de un derecho subjetivo o de una situación cualificada y diferenciada.
3. **Principio de Definitividad:** Obligación de agotar previamente todos los recursos ordinarios (apelación, revocación, etc.) antes de acudir al tribunal federal.
4. **Relatividad de las Sentencias (Fórmula Otero):** La sentencia solo ampara y protege a la parte quejosa que promovió el juicio, con los matices de la declaratoria general de inconstitucionalidad.

---

## 3. Lista de Comprobación para Análisis de Amparo

- [x] Verificar que el acto provenga de una autoridad o particular actuando con funciones equivalentes.
- [x] Comprobar si se actualiza alguna causal de improcedencia del Art. 61 de la Ley de Amparo.
- [ ] Constatar si se agotó el principio de definitividad o si opera una excepción de tutela urgente.
- [ ] Solicitar oportunamente la medida cautelar de suspensión provisional y definitiva.
    `,
    quiz: [
      {
        q: "¿Ante qué órgano jurisdiccional se promueve de manera general el Amparo Directo?",
        note: "Procede contra sentencias definitivas o resoluciones que ponen fin al juicio.",
        a: [
          "Tribunales Colegiados de Circuito",
          "Juzgados de Distrito",
          "Suprema Corte de Justicia en todos los casos automáticamente",
          "Juzgados de Paz y Primera Instancia Local"
        ],
        correct: 0,
        why: "El Amparo Directo es competencia originaria de los Tribunales Colegiados de Circuito según la Ley de Amparo."
      },
      {
        q: "¿En qué consiste el principio de definitividad en el juicio de amparo?",
        note: "Relacionado con los recursos previos.",
        a: [
          "En la obligación de agotar todos los recursos ordinarios de defensa antes de acudir al amparo.",
          "En que la sentencia del amparo nunca puede ser impugnada por ningún medio.",
          "En que el quejoso debe pagar una garantía económica definitiva para ser escuchado.",
          "En que la demanda solo puede tener 10 fojas de extensión máxima."
        ],
        correct: 0,
        why: "El amparo es un medio extraordinario; deben agotarse previamente los recursos ordinarios previstos en la ley secundaria."
      }
    ],
    cards: [
      ["¿Cuáles son los 2 grandes tipos de Amparo?", "Amparo Directo (contra sentencias definitivas) y Amparo Indirecto (contra actos fuera de juicio o leyes)."],
      ["¿Qué es el Principio de Definitividad?", "La regla que exige agotar todos los recursos ordinarios antes de acudir al amparo."],
      ["¿Cuál es la función de la suspensión del acto reclamado?", "Preservar viva la materia del juicio e impedir que se consumen daños de imposible reparación."]
    ]
  },

  {
    id: "03_civil_obligaciones",
    filename: "03_Civil_Teoria_Obligaciones.md",
    materia: "Derecho Civil",
    title: "Teoría General de las Obligaciones y Contratos",
    subtitle: "Fuentes de las obligaciones, requisitos de validez, vicios del consentimiento y cumplimiento contractual.",
    date: "12 May",
    status: "Sin empezar",
    statusClass: "text-secondary",
    content: `
# Teoría General de las Obligaciones y Contratos

*Fuentes de las obligaciones, requisitos de validez, vicios del consentimiento y cumplimiento contractual.*

> **ANOTACIÓN DE ESTUDIO**  
> "La obligación civil constituye un vínculo jurídico patrimonial en virtud del cual el deudor queda constreñido a dar, hacer o no hacer alguna cosa en favor del acreedor, respondiendo de su cumplimiento con su patrimonio presente y futuro."

---

## 1. Elementos de Existencia vs. Requisitos de Validez

| Categoría | Elementos Indispensables | Consecuencia Legal de la Omisión |
| :--- | :--- | :--- |
| **Existencia** | Consentimiento y Objeto materia del acto | **Inexistencia**: El acto no produce ningún efecto jurídico |
| **Validez** | Capacidad, Ausencia de Vicios, Licitud y Forma | **Nulidad**: Relativa o absoluta según el caso |

---

## 2. Vicios del Consentimiento

1. **Error:** Falsa apreciación de la realidad que recae sobre el motivo determinante de la voluntad.
2. **Dolo:** Cualquier sugestión, artificio o maquinación activa empleada para inducir a error a la contraparte.
3. **Mala Fe:** La disimulación pasiva del error ajeno una vez conocido.
4. **Violencia:** El empleo de fuerza física o amenazas de pérdida patrimonial o personal grave que anula la libertad de contratación.

---

## 3. Lista de Comprobación para Análisis Contractual

- [x] Comprobar capacidad jurídica y legitimación para obligarse de las partes.
- [ ] Verificar que el objeto sea física y jurídicamente posible en el comercio.
- [ ] Revisar la cláusula de mora, penalizaciones y resolución contractual por incumplimiento.
    `,
    quiz: [
      {
        q: "¿Cuáles son los dos elementos indispensables para la existencia de un contrato?",
        note: "Sin ellos el acto es jurídicamente inexistente.",
        a: [
          "Consentimiento y Objeto",
          "Capacidad y Formalidad ante Notario",
          "Plazo y Condición Resolutoria",
          "Firma autógrafa de dos testigos"
        ],
        correct: 0,
        why: "Sin consentimiento y objeto idóneo el contrato es inexistente de pleno derecho."
      }
    ],
    cards: [
      ["¿Qué es el Pago en sentido civil?", "El cumplimiento exacto de la prestación debida, sea de dar, hacer o abstenerse."],
      ["¿Qué diferencia al dolo de la mala fe?", "El dolo es la inducción activa al error; la mala fe es callar y disimular el error ya padecido por la contraparte."]
    ]
  },

  {
    id: "04_logica_proposicional",
    filename: "04_Logica_Proposicional.md",
    materia: "Filosofía del Derecho",
    title: "Fundamentos de la Lógica Proposicional y Pensamiento Crítico",
    subtitle: "Un manual conciso para estructurar argumentos rigurosos, reconocer premisas implícitas y formalizar razonamientos sin caer en sofismas.",
    date: "8 May",
    status: "Borrador",
    statusClass: "text-secondary",
    content: `
# Fundamentos de la Lógica Proposicional y Pensamiento Crítico

*Un manual conciso para estructurar argumentos rigurosos, reconocer premisas implícitas y formalizar razonamientos sin caer en sofismas.*

> **ANOTACIÓN DE ESTUDIO**  
> "La validez de un argumento deductivo no depende de la verdad fáctica de sus proposiciones materiales, sino de la necesidad formal con la que la conclusión se deriva de sus premisas."

---

## 1. Proposiciones y Conectores Fundamentales

En lógica clásica, una proposición es cualquier enunciado declarativo del cual tenga sentido afirmar que es **verdadero (V)** o **falso (F)**, excluyendo de plano las órdenes, interrogantes o valoraciones puramente emotivas. Toda proposición simple puede operar mediante operadores veritativo-funcionales:

| Conector | Símbolo Formal | Lectura Natural | Condición de Verdad |
| :--- | :--- | :--- | :--- |
| **Negación** | ¬p | *"no es el caso que p"* | Invierte el valor de verdad |
| **Conjunción** | p ∧ q | *"p y q"* | Verdadera solo si ambos son verdaderos |
| **Disyunción Débil** | p ∨ q | *"p o q (o ambos)"* | Falsa solo si ambos son falsos |
| **Condicional Material** | p → q | *"si p, entonces q"* | Falsa únicamente cuando p es V y q es F |

---

## 2. Ejemplo de Formalización en Código Lógico

Consideremos el esquema de inferencia deductiva más universal: el *Modus Ponens*.

\`\`\`
// Premisa 1: Condicional formal
Premisa 1: p → q  (Si el testigo es fidedigno, el documento es auténtico)
Premisa 2: p      (El testigo es fidedigno)
-------------------------------------------------------------
Conclusión: ∴ q    (Por lo tanto, el documento es auténtico)
\`\`\`

---

## 3. Lista de Comprobación para Análisis de Guías

Antes de dar por concluida la sesión de lectura sobre este tema, asegúrate de verificar los siguientes puntos clave:

- [x] Diferenciar con claridad entre verdad fáctica empírica y validez estructural de la fórmula.
- [x] Identificar las tres falacias formales más frecuentes (afirmación del consecuente, negación del antecedente).
- [ ] Elaborar la tabla de verdad para el bicondicional p ↔ q y el dilema constructivo.
    `,
    quiz: [
      {
        q: "¿De qué depende la validez formal de un razonamiento deductivo?",
        note: "Distingue forma de contenido material.",
        a: [
          "De la estructura lógica que garantiza que si las premisas son verdaderas, la conclusión necesariamente lo es.",
          "De que el autor sea una autoridad jurídica reconocida.",
          "De la cantidad de palabras del documento.",
          "De la opinión de la mayoría."
        ],
        correct: 0,
        why: "La validez es una propiedad estrictamente formal de la relación de necesidad entre premisas y conclusión."
      }
    ],
    cards: [
      ["¿Qué es el Modus Ponens?", "Regla de inferencia: Si p implica q, y se afirma p, se concluye necesariamente q."],
      ["¿Qué es una falacia formal?", "Un error en la estructura del razonamiento que lo invalida deductivamente."]
    ]
  }
];

// =============================================================================
// 2. GESTOR DE ESTADO Y ALMACENAMIENTO LOCAL
// =============================================================================
class ArchivistStateManager {
  constructor() {
    this.STORAGE_KEY = 'archivist_guides_library_v1';
    this.guides = [];
    this.activeGuideId = null;
    this.activeMode = 'reader'; // 'reader' | 'quiz' | 'flashcards'
    this.fontSizeStep = 1; // 0: sm, 1: base, 2: lg, 3: xl
    this.filterQuery = '';

    // Estado del Quiz
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;

    // Estado de Flashcards
    this.cardIndex = 0;
    this.cardFlipped = false;

    this.loadLibrary();
  }

  loadLibrary() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.guides = JSON.parse(stored);
      } else {
        this.guides = [...DEFAULT_DOCUMENTS];
        this.persist();
      }
    } catch (e) {
      console.warn("Error leyendo localStorage, usando valores por defecto", e);
      this.guides = [...DEFAULT_DOCUMENTS];
    }

    if (this.guides.length > 0) {
      this.activeGuideId = this.guides[0].id;
    }
  }

  persist() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.guides));
    } catch (e) {
      console.error("Error persistiendo guías", e);
    }
  }

  getActiveGuide() {
    return this.guides.find(g => g.id === this.activeGuideId) || this.guides[0] || null;
  }

  addGuide(guideObj) {
    const newId = guideObj.id || 'guide_' + Date.now();
    const prepared = {
      ...guideObj,
      id: newId,
      date: guideObj.date || 'Modificado hoy',
      status: guideObj.status || 'Leyendo',
      statusClass: guideObj.statusClass || 'text-primary bg-primary-container',
      quiz: guideObj.quiz || [],
      cards: guideObj.cards || []
    };

    // Agregar al inicio del índice
    this.guides.unshift(prepared);
    this.activeGuideId = prepared.id;
    this.persist();
    return prepared;
  }
}

// =============================================================================
// 3. RENDERIZADOR Y CONTROLADOR DE INTERFAZ
// =============================================================================
class ArchivistApp {
  constructor() {
    this.state = new ArchivistStateManager();
    this.fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];

    this.initDOMElements();
    this.initEventListeners();
    this.renderGuidesList();
    this.renderCurrentGuide();
  }

  initDOMElements() {
    // Sidebar & Dropzone
    this.fileListContainer = document.getElementById('file-list');
    this.guidesBadgeCount = document.getElementById('guidesBadgeCount');
    this.dropzoneBox = document.getElementById('dropzone-box');
    this.fileUploader = document.getElementById('file-uploader');
    this.filterGuidesInput = document.getElementById('filter-guides-input');
    this.btnOpenCreateModal = document.getElementById('btn-open-create-modal');

    // Header Toolbar
    this.docFilenameBadge = document.getElementById('doc-filename-badge');
    this.docModifiedDate = document.getElementById('doc-modified-date');
    this.docMateriaBadge = document.getElementById('doc-materia-badge');
    this.docMetaStats = document.getElementById('doc-meta-stats');

    // Controles de tamaño de fuente
    this.btnDecFont = document.getElementById('btn-dec-font');
    this.btnIncFont = document.getElementById('btn-inc-font');

    // Modos de Estudio
    this.tabModeReader = document.getElementById('tab-mode-reader');
    this.tabModeQuiz = document.getElementById('tab-mode-quiz');
    this.tabModeFlashcards = document.getElementById('tab-mode-flashcards');

    // Visores
    this.markdownViewer = document.getElementById('markdown-viewer');
    this.quizViewer = document.getElementById('quiz-viewer');
    this.flashcardsViewer = document.getElementById('flashcards-viewer');

    // Quiz Elements
    this.quizQuestionBadge = document.getElementById('quiz-question-badge');
    this.quizScoreBadge = document.getElementById('quiz-score-badge');
    this.quizProgressBar = document.getElementById('quiz-progress-bar');
    this.quizQuestionCard = document.getElementById('quiz-question-card');
    this.quizExplanationBox = document.getElementById('quiz-explanation-box');
    this.quizExplanationText = document.getElementById('quiz-explanation-text');
    this.btnNextQuiz = document.getElementById('btn-next-quiz');
    this.btnRestartQuiz = document.getElementById('btn-restart-quiz');

    // Flashcards Elements
    this.flashcardBadgeNum = document.getElementById('flashcard-badge-num');
    this.flashcardContainer = document.getElementById('flashcard-container');
    this.flashcardInner = document.getElementById('flashcard-inner');
    this.cardFrontText = document.getElementById('card-front-text');
    this.cardBackText = document.getElementById('card-back-text');
    this.btnPrevCard = document.getElementById('btn-prev-card');
    this.btnNextCard = document.getElementById('btn-next-card');
    this.btnCardReview = document.getElementById('btn-card-review');
    this.btnCardMaster = document.getElementById('btn-card-master');
    this.flashcardDots = document.getElementById('flashcard-dots');

    // Acciones Copiar / Imprimir
    this.btnCopy = document.getElementById('btn-copy');

    // Modal Crear
    this.createModal = document.getElementById('create-modal');
    this.createModalBackdrop = document.getElementById('create-modal-backdrop');
    this.btnCloseCreateModal = document.getElementById('btn-close-create-modal');
    this.btnCancelCreate = document.getElementById('btn-cancel-create');
    this.newGuideForm = document.getElementById('new-guide-form');

    // Toast
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toast-message');
  }

  initEventListeners() {
    // Dropzone y subida de archivos .md
    this.fileUploader.addEventListener('change', (e) => this.handleFileUpload(e.target.files));

    this.dropzoneBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.dropzoneBox.classList.add('dragover');
    });

    this.dropzoneBox.addEventListener('dragleave', () => {
      this.dropzoneBox.classList.remove('dragover');
    });

    this.dropzoneBox.addEventListener('drop', (e) => {
      e.preventDefault();
      this.dropzoneBox.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.handleFileUpload(e.dataTransfer.files);
      }
    });

    // Filtro buscador lateral
    this.filterGuidesInput.addEventListener('input', (e) => {
      this.state.filterQuery = e.target.value.toLowerCase().trim();
      this.renderGuidesList();
    });

    // Control de tamaño de fuente
    this.btnDecFont.addEventListener('click', () => {
      if (this.state.fontSizeStep > 0) {
        this.markdownViewer.classList.remove(this.fontSizes[this.state.fontSizeStep]);
        this.state.fontSizeStep--;
        this.markdownViewer.classList.add(this.fontSizes[this.state.fontSizeStep]);
      }
    });

    this.btnIncFont.addEventListener('click', () => {
      if (this.state.fontSizeStep < this.fontSizes.length - 1) {
        this.markdownViewer.classList.remove(this.fontSizes[this.state.fontSizeStep]);
        this.state.fontSizeStep++;
        this.markdownViewer.classList.add(this.fontSizes[this.state.fontSizeStep]);
      }
    });

    // Selector de Modo (Lectura, Quiz, Tarjetas)
    this.tabModeReader.addEventListener('click', () => this.switchStudyMode('reader'));
    this.tabModeQuiz.addEventListener('click', () => this.switchStudyMode('quiz'));
    this.tabModeFlashcards.addEventListener('click', () => this.switchStudyMode('flashcards'));

    // Copiar contenido
    this.btnCopy.addEventListener('click', () => {
      const activeGuide = this.state.getActiveGuide();
      if (!activeGuide) return;
      navigator.clipboard.writeText(activeGuide.content).then(() => {
        this.showToast("Contenido copiado al portapapeles");
      });
    });

    // Modal Crear
    const openCreate = () => this.createModal.classList.remove('hidden');
    const closeCreate = () => this.createModal.classList.add('hidden');

    this.btnOpenCreateModal.addEventListener('click', openCreate);
    this.btnCloseCreateModal.addEventListener('click', closeCreate);
    this.btnCancelCreate.addEventListener('click', closeCreate);
    this.createModalBackdrop.addEventListener('click', closeCreate);

    this.newGuideForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleCreateSubmit();
      closeCreate();
    });

    // Quiz Controls
    this.btnNextQuiz.addEventListener('click', () => this.nextQuizQuestion());
    this.btnRestartQuiz.addEventListener('click', () => this.restartQuiz());

    // Flashcard Controls
    this.flashcardContainer.addEventListener('click', () => this.flipFlashcard());
    this.btnPrevCard.addEventListener('click', () => this.prevCard());
    this.btnNextCard.addEventListener('click', () => this.nextCard());
    this.btnCardReview.addEventListener('click', () => this.nextCard());
    this.btnCardMaster.addEventListener('click', () => {
      this.showToast("¡Concepto dominado! 🎯");
      this.nextCard();
    });
  }

  // ===========================================================================
  // 4. LISTADO DE GUÍAS DE ESTUDIO (SIDEBAR)
  // ===========================================================================
  renderGuidesList() {
    let list = this.state.guides;
    if (this.state.filterQuery) {
      list = list.filter(g => 
        g.filename.toLowerCase().includes(this.state.filterQuery) ||
        g.title.toLowerCase().includes(this.state.filterQuery) ||
        g.materia.toLowerCase().includes(this.state.filterQuery)
      );
    }

    const badgeElem = document.getElementById('guides-badge-count');
    if (badgeElem) badgeElem.textContent = `${this.state.guides.length} archivos`;

    if (list.length === 0) {
      this.fileListContainer.innerHTML = `
        <div class="p-4 text-center text-xs text-outline">
          No hay guías que coincidan con la búsqueda.
        </div>
      `;
      return;
    }

    this.fileListContainer.innerHTML = list.map(guide => {
      const isActive = guide.id === this.state.activeGuideId;
      const readingTime = this.estimateReadingTime(guide.content);

      if (isActive) {
        return `
          <button class="w-full text-left p-3 rounded-lg bg-surface-container text-on-surface transition-all flex flex-col gap-1 group relative overflow-hidden" data-id="${guide.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
            <div class="flex items-center justify-between text-xs">
              <span class="font-mono font-medium text-primary truncate max-w-[200px]">${guide.filename}</span>
              <span class="material-symbols-outlined text-primary text-[16px]">article</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] text-secondary">
              <span>${guide.date || 'Hoy'}</span>
              <span>•</span>
              <span>${readingTime} min lectura</span>
              <span>•</span>
              <span class="${guide.statusClass || 'text-primary font-medium'}">${guide.status || 'Leyendo'}</span>
            </div>
          </button>
        `;
      } else {
        return `
          <button class="w-full text-left p-3 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all flex flex-col gap-1 group" data-id="${guide.id}">
            <div class="flex items-center justify-between text-xs">
              <span class="font-mono font-medium text-on-surface truncate max-w-[200px]">${guide.filename}</span>
              <span class="material-symbols-outlined text-outline text-[16px] group-hover:text-on-surface">description</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] text-secondary">
              <span>${guide.date || 'Ayer'}</span>
              <span>•</span>
              <span>${readingTime} min lectura</span>
              <span>•</span>
              <span>${guide.status || 'Completada'}</span>
            </div>
          </button>
        `;
      }
    }).join('');

    // Eventos de selección de guía
    this.fileListContainer.querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectGuide(btn.dataset.id);
      });
    });
  }

  selectGuide(id) {
    this.state.activeGuideId = id;
    this.renderGuidesList();
    this.renderCurrentGuide();
  }

  // ===========================================================================
  // 5. VISOR EDITORIAL DE GUÍA ACTUAL
  // ===========================================================================
  renderCurrentGuide() {
    const guide = this.state.getActiveGuide();
    if (!guide) return;

    // Actualizar metadatos del encabezado
    this.docFilenameBadge.textContent = guide.filename;
    this.docModifiedDate.textContent = guide.date || 'Modificado hoy';
    this.docMateriaBadge.textContent = guide.materia || 'Derecho';

    const wordCount = guide.content.trim().split(/\s+/).length;
    const readingTime = this.estimateReadingTime(guide.content);
    this.docMetaStats.textContent = `${readingTime} min de lectura estimada • ${wordCount.toLocaleString()} palabras`;

    // Renderizar según el modo activo
    this.renderMarkdownContent(guide.content);
    this.initQuiz(guide.quiz || []);
    this.initFlashcards(guide.cards || []);

    // Asegurar que el modo visualizado coincida con la pestaña activa
    this.switchStudyMode(this.state.activeMode);
  }

  switchStudyMode(mode) {
    this.state.activeMode = mode;

    // Actualizar botones de tabs
    const tabs = [this.tabModeReader, this.tabModeQuiz, this.tabModeFlashcards];
    tabs.forEach(t => {
      const active = t.dataset.mode === mode;
      t.className = active
        ? "px-3 py-1 text-xs rounded-md font-medium transition-colors bg-surface-container-lowest text-primary shadow-xs"
        : "px-3 py-1 text-xs text-on-surface-variant hover:text-on-surface rounded-md font-medium transition-colors";
    });

    // Alternar visores
    this.markdownViewer.classList.toggle('hidden', mode !== 'reader');
    this.quizViewer.classList.toggle('hidden', mode !== 'quiz');
    this.flashcardsViewer.classList.toggle('hidden', mode !== 'flashcards');
  }

  // Convertidor simple y elegante de Markdown a HTML editorial
  renderMarkdownContent(rawMarkdown) {
    let html = rawMarkdown;

    // Blockquote ANOTACIÓN DE ESTUDIO
    html = html.replace(/^>\s*\*\*ANOTACIÓN DE ESTUDIO\*\*\s*\n>\s*"(.*?)"/gim, `
      <div class="callout-anotacion">
        <p class="title">Anotación de Estudio</p>
        <p class="quote">"$1"</p>
      </div>
    `);

    // Bloques de código formal ``` ... ```
    html = html.replace(/```([\s\S]*?)```/gim, (match, code) => {
      return `<div class="code-block-formal">${code.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
    });

    // Tablas Markdown
    html = html.replace(/(\|.+?\|\n\|[-:\s|]+?\n(?:\|.+?\|\n?)+)/g, (tableMatch) => {
      const lines = tableMatch.trim().split('\n');
      if (lines.length < 3) return tableMatch;

      const headers = lines[0].split('|').slice(1, -1).map(h => `<th class="py-2.5 px-3 font-semibold text-on-surface">${h.trim()}</th>`).join('');
      const rows = lines.slice(2).map(r => {
        const cells = r.split('|').slice(1, -1).map(c => `<td class="py-2.5 px-3">${c.trim()}</td>`).join('');
        return `<tr class="hover:bg-surface-container-low/30 border-b border-surface-container">${cells}</tr>`;
      }).join('');

      return `
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead class="border-b border-surface-container bg-surface-container-low/50">
              <tr>${headers}</tr>
            </thead>
            <tbody class="divide-y divide-surface-container">
              ${rows}
            </tbody>
          </table>
        </div>
      `;
    });

    // Encabezados
    html = html.replace(/^# (.*$)/gim, '<h1 class="font-headline text-3xl sm:text-4xl text-on-surface font-normal tracking-tight mb-4 leading-tight">$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="font-headline text-2xl text-on-surface font-medium mt-10 mb-4 tracking-tight pb-2 border-b border-surface-container">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="font-headline text-xl text-on-surface font-medium mt-6 mb-3">$1</h3>');

    // Listas de comprobación
    html = html.replace(/^- \[x\] (.*$)/gim, `
      <div class="checklist-item">
        <span class="material-symbols-outlined text-primary text-[18px]">check_box</span>
        <span class="text-on-surface font-body text-sm">$1</span>
      </div>
    `);
    html = html.replace(/^- \[ \] (.*$)/gim, `
      <div class="checklist-item">
        <span class="material-symbols-outlined text-outline text-[18px]">check_box_outline_blank</span>
        <span class="text-on-surface font-body text-sm">$1</span>
      </div>
    `);

    // Listas no ordenadas estándar
    html = html.replace(/^- (.*$)/gim, '<li class="text-on-surface text-sm mb-1.5 list-disc ml-4 leading-relaxed">$1</li>');

    // Formato cursiva y negrita
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-on-surface">$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic font-headline">$1</em>');

    // Párrafos
    html = html.split('\n\n').map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<div') || trimmed.startsWith('<table') || trimmed.startsWith('<li')) {
        return trimmed;
      }
      return `<p class="text-on-surface/90 mb-4 leading-relaxed text-sm sm:text-base">${trimmed}</p>`;
    }).join('\n');

    this.markdownViewer.innerHTML = html;
  }

  // ===========================================================================
  // 6. CUESTIONARIO INTEGRADO (QUIZ)
  // ===========================================================================
  initQuiz(questions) {
    this.currentQuestions = questions;
    this.state.quizIndex = 0;
    this.state.quizScore = 0;
    this.state.quizAnswered = false;
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const list = this.currentQuestions || [];

    if (list.length === 0) {
      this.quizQuestionCard.innerHTML = `
        <div class="p-8 text-center bg-surface-container-low rounded-xl">
          <span class="material-symbols-outlined text-outline text-3xl mb-2">quiz</span>
          <p class="font-headline text-lg text-on-surface">No hay preguntas formuladas para esta guía.</p>
          <p class="text-xs text-secondary mt-1">Puedes agregar preguntas editando o subiendo una guía con cuestionario.</p>
        </div>
      `;
      this.btnNextQuiz.classList.add('hidden');
      this.btnRestartQuiz.classList.add('hidden');
      this.quizProgressBar.style.width = '0%';
      this.quizQuestionBadge.textContent = 'Sin cuestionario';
      this.quizScoreBadge.textContent = '';
      return;
    }

    // Fin del Cuestionario
    if (this.state.quizIndex >= list.length) {
      const percentage = Math.round((this.state.quizScore / list.length) * 100);
      this.quizQuestionCard.innerHTML = `
        <div class="p-8 text-center bg-surface-container-low rounded-xl space-y-3">
          <span class="material-symbols-outlined text-primary text-4xl">verified</span>
          <h3 class="font-headline text-2xl text-on-surface font-semibold">Cuestionario Concluido</h3>
          <p class="text-sm font-headline italic text-on-surface">Tu resultado final fue de <strong>${this.state.quizScore} de ${list.length}</strong> respuestas correctas (${percentage}%).</p>
        </div>
      `;
      this.quizProgressBar.style.width = '100%';
      this.quizQuestionBadge.textContent = 'Completado';
      this.quizScoreBadge.textContent = `Aciertos: ${this.state.quizScore}/${list.length}`;
      this.quizExplanationBox.classList.add('hidden');
      this.btnNextQuiz.classList.add('hidden');
      this.btnRestartQuiz.classList.remove('hidden');
      return;
    }

    const item = list[this.state.quizIndex];
    this.quizQuestionBadge.textContent = `Pregunta ${this.state.quizIndex + 1} de ${list.length}`;
    this.quizScoreBadge.textContent = `Aciertos: ${this.state.quizScore}`;
    this.quizProgressBar.style.width = `${((this.state.quizIndex) / list.length) * 100}%`;

    this.quizExplanationBox.classList.add('hidden');
    this.btnNextQuiz.disabled = true;
    this.btnNextQuiz.classList.remove('hidden');
    this.btnRestartQuiz.classList.add('hidden');

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = item.a.map((opt, i) => `
      <button class="w-full text-left p-3.5 rounded-xl border border-surface-container hover:bg-surface-container-low text-on-surface font-body text-xs sm:text-sm transition-all flex items-start gap-3 quiz-option-btn" data-index="${i}">
        <span class="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center font-mono font-bold text-[10px] text-secondary shrink-0 mt-0.5">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    this.quizQuestionCard.innerHTML = `
      <h3 class="font-headline text-lg sm:text-xl font-medium text-on-surface leading-snug">${item.q}</h3>
      ${item.note ? `<p class="text-xs text-secondary italic font-headline">Nota: ${item.note}</p>` : ''}
      <div class="space-y-2.5 pt-2">
        ${optionsHtml}
      </div>
    `;

    this.quizQuestionCard.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleQuizSelection(parseInt(btn.dataset.index, 10));
      });
    });
  }

  handleQuizSelection(idx) {
    if (this.state.quizAnswered) return;
    this.state.quizAnswered = true;

    const item = this.currentQuestions[this.state.quizIndex];
    const isCorrect = idx === item.correct;

    if (isCorrect) {
      this.state.quizScore++;
      this.quizScoreBadge.textContent = `Aciertos: ${this.state.quizScore}`;
    }

    const buttons = this.quizQuestionCard.querySelectorAll('.quiz-option-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === item.correct) {
        btn.classList.add('bg-tertiary-container', 'border-primary', 'text-primary', 'font-medium');
      } else if (i === idx && !isCorrect) {
        btn.classList.add('bg-error-container/20', 'border-error', 'text-error');
      }
    });

    this.quizExplanationText.textContent = (isCorrect ? '✓ Respuesta Correcta. ' : '✕ Respuesta Incorrecta. ') + (item.why || '');
    this.quizExplanationBox.classList.remove('hidden');

    this.btnNextQuiz.disabled = false;
    this.btnNextQuiz.textContent = (this.state.quizIndex === this.currentQuestions.length - 1) ? 'Ver Resultado' : 'Siguiente pregunta ›';
  }

  nextQuizQuestion() {
    this.state.quizIndex++;
    this.state.quizAnswered = false;
    this.renderQuizQuestion();
  }

  restartQuiz() {
    this.state.quizIndex = 0;
    this.state.quizScore = 0;
    this.state.quizAnswered = false;
    this.renderQuizQuestion();
  }

  // ===========================================================================
  // 7. FLASHCARDS 3D EDITORIALES
  // ===========================================================================
  initFlashcards(cards) {
    this.currentCards = cards;
    this.state.cardIndex = 0;
    this.state.cardFlipped = false;
    this.renderFlashcard();
  }

  renderFlashcard() {
    const list = this.currentCards || [];
    this.state.cardFlipped = false;
    this.flashcardInner.classList.remove('rotate-y-180');

    if (list.length === 0) {
      this.cardFrontText.textContent = "No hay tarjetas de memoria para esta guía.";
      this.cardBackText.textContent = "";
      this.flashcardBadgeNum.textContent = "0 de 0";
      this.flashcardDots.innerHTML = '';
      return;
    }

    const card = list[this.state.cardIndex];
    this.cardFrontText.textContent = card[0];
    this.cardBackText.textContent = card[1];
    this.flashcardBadgeNum.textContent = `Tarjeta ${this.state.cardIndex + 1} de ${list.length}`;

    // Renderizar dots indicadores
    this.flashcardDots.innerHTML = list.map((_, i) => `
      <span class="w-1.5 h-1.5 rounded-full transition-all ${i === this.state.cardIndex ? 'bg-primary w-4' : 'bg-surface-container-highest'}"></span>
    `).join('');
  }

  flipFlashcard() {
    this.state.cardFlipped = !this.state.cardFlipped;
    this.flashcardInner.classList.toggle('rotate-y-180', this.state.cardFlipped);
  }

  nextCard() {
    const list = this.currentCards || [];
    if (list.length <= 1) return;
    this.state.cardIndex = (this.state.cardIndex + 1) % list.length;
    this.renderFlashcard();
  }

  prevCard() {
    const list = this.currentCards || [];
    if (list.length <= 1) return;
    this.state.cardIndex = (this.state.cardIndex - 1 + list.length) % list.length;
    this.renderFlashcard();
  }

  // ===========================================================================
  // 8. SUBIDA Y CREACIÓN DE NUEVAS GUÍAS (INDEXADOR)
  // ===========================================================================
  handleFileUpload(files) {
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        
        // Si es JSON
        if (file.name.endsWith('.json')) {
          try {
            const parsed = JSON.parse(text);
            const added = this.state.addGuide({
              filename: file.name.replace('.json', '.md'),
              title: parsed.title || file.name,
              materia: parsed.materia || 'Derecho',
              content: parsed.content || `# ${parsed.title}\n\n${parsed.resumen || ''}`,
              quiz: parsed.quiz || [],
              cards: parsed.cards || []
            });
            this.showToast(`Guía "${added.filename}" indexada.`);
          } catch (err) {
            this.showToast("Error al leer archivo JSON.");
          }
        } else {
          // Es .md o .txt
          const lines = text.trim().split('\n');
          let detectedTitle = file.name.replace(/\.(md|markdown|txt)$/i, '');
          for (let line of lines) {
            if (line.startsWith('# ')) {
              detectedTitle = line.replace('# ', '').trim();
              break;
            }
          }

          const added = this.state.addGuide({
            filename: file.name,
            title: detectedTitle,
            materia: "Guía Importada",
            content: text,
            quiz: [],
            cards: []
          });
          this.showToast(`Archivo "${added.filename}" indexado en Mis Guías.`);
        }

        this.renderGuidesList();
        this.renderCurrentGuide();
      };
      reader.readAsText(file);
    });
  }

  handleCreateSubmit() {
    let filename = document.getElementById('new-guide-filename').value.trim();
    if (!filename.endsWith('.md')) filename += '.md';

    const title = document.getElementById('new-guide-title').value.trim();
    const subtitle = document.getElementById('new-guide-subtitle').value.trim();
    const rawContent = document.getElementById('new-guide-content').value.trim();

    const formattedContent = `
# ${title}

*${subtitle}*

> **ANOTACIÓN DE ESTUDIO**  
> "Guía de estudio personalizada registrada en el Archivo."

---

${rawContent}
    `;

    const added = this.state.addGuide({
      filename,
      title,
      subtitle,
      materia: "Derecho",
      content: formattedContent,
      quiz: [],
      cards: []
    });

    this.newGuideForm.reset();
    this.showToast(`¡Guía "${added.filename}" creada e indexada!`);
    this.renderGuidesList();
    this.renderCurrentGuide();
  }

  // ===========================================================================
  // 9. UTILIDADES Y TOAST
  // ===========================================================================
  estimateReadingTime(text) {
    const words = (text || '').trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 180));
  }

  showToast(msg) {
    this.toastMessage.textContent = msg;
    this.toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    setTimeout(() => {
      this.toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 2800);
  }
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', () => {
  window.archivistApp = new ArchivistApp();
});
