/**
 * IURISGUIDES - PLATAFORMA DE ESTUDIO JURÍDICO & ÍNDICE DE GUÍAS
 * Lógica de la aplicación: catálogo interactivo, creador de guías,
 * entorno de estudio (Resumen, Subtemas, Quiz, Flashcards 3D) y progreso.
 */

// =============================================================================
// 1. BASE DE DATOS INICIAL DE GUÍAS DIDÁCTICAS (PRECARGADAS)
// =============================================================================
const DEFAULT_GUIDES = [
  {
    id: "penal-patrimoniales",
    title: "Derecho Penal: Delitos Patrimoniales",
    materia: "Derecho Penal",
    category: "Penal",
    subtitle: "Estudio dogmático de Robo, Fraude, Abuso de Confianza y sus elementos típicos",
    tags: ["Robo", "Fraude", "Abuso de Confianza", "Bien Jurídico", "Patrimonio"],
    createdAt: 1700000000000,
    resumen: {
      lead: "Los delitos patrimoniales son conductas tipificadas que lesionan o ponen en peligro directo el patrimonio, la propiedad y los intereses económicos legítimos tutelados por el ordenamiento penal.",
      blocks: [
        {
          title: "Robo",
          desc: "Apoderamiento ilegítimo de una cosa mueble, ajena, sin derecho y sin el consentimiento de la persona facultada legalmente para disponer de ella. Puede concurrir con o sin violencia física o moral."
        },
        {
          title: "Fraude Genérico",
          desc: "Consiste en engañar a alguien o aprovecharse del error en que se halla, para alcanzar un lucro indebido en beneficio propio o de un tercero, provocando un detrimento correlativo en la víctima."
        },
        {
          title: "Abuso de Confianza",
          desc: "Se perfecciona cuando el sujeto activo dispone indebidamente para sí o para otro de una cosa mueble ajena, de la cual se le transmitió únicamente la tenencia precaria o posesión derivada, pero no el dominio."
        },
        {
          title: "Metodología de Análisis",
          desc: "Distingue siempre cómo entra el sujeto en contacto con el bien: si lo toma clandestinamente (robo), si se lo entregan con engaño (fraude) o si se lo entregan voluntariamente y luego no lo restituye (abuso)."
        }
      ],
      callout: "Verifica invariablemente los artículos específicos del Código Penal Federal y del Código Penal de tu entidad federativa, ya que las penas, agravantes y requisitos de procedibilidad (querella u oficio) pueden variar."
    },
    temas: [
      {
        title: "1. Conducta y Verbos Rectores",
        content: "El tipo penal describe con precisión la acción u omisión sancionada. En el robo el verbo rector fundamental es 'apoderarse'; en el fraude es 'engañar' o 'aprovecharse del error'; y en el abuso de confianza es 'disponer indebidamente' del bien recibido legalmente en custodia."
      },
      {
        title: "2. Objeto Material y Jurídico",
        content: "El bien jurídico tutelado es el patrimonio económico. El objeto material sobre el que recae físicamente la conducta debe ser, por regla general en el robo y abuso de confianza, un bien mueble corpóreo susceptible de apropiación."
      },
      {
        title: "3. Ausencia de Consentimiento vs. Engaño",
        content: "En el robo la víctima no consiente la desposesión. En el fraude, la víctima entrega el bien aparentemente de manera voluntaria, pero su consentimiento se encuentra viciado por el ardid, engaño o maquinación fraudulenta empleada."
      },
      {
        title: "4. Naturaleza de la Posesión Previa en el Abuso de Confianza",
        content: "Elemento sine qua non del abuso de confianza es la transmisión previa de la posesión derivada o precaria (como en el comodato, depósito o mandato). Si hubo transmisión de propiedad, no puede configurarse abuso de confianza."
      },
      {
        title: "5. Querella de Parte Ofendida y Perseguibilidad",
        content: "Gran parte de los delitos patrimoniales cometidos entre familiares o por cuantías menores admiten perdón del ofendido o exigen querella previa para el ejercicio de la acción penal, permitiendo salidas alternas y acuerdos reparatorios."
      }
    ],
    quiz: [
      {
        q: "¿Cuál es la diferencia medular en la entrega del bien entre el Robo y el Fraude?",
        note: "Analiza el estado de la voluntad de la víctima al momento de la entrega.",
        a: [
          "En el robo no hay consentimiento de entrega; en el fraude la víctima entrega voluntariamente pero con la voluntad viciada por engaño.",
          "En el robo el objeto siempre es inmueble y en el fraude mueble.",
          "El robo siempre exige violencia armada obligatoriamente.",
          "No existe diferencia dogmática, son figuras idénticas."
        ],
        correct: 0,
        why: "En el fraude existe un vicio en el consentimiento provocado por engaño o error inducido; en el robo hay un apoderamiento ilícito sin consentimiento alguno."
      },
      {
        q: "¿Qué elemento resulta indispensable para que se configure el Abuso de Confianza?",
        note: "Considera el título bajo el cual el sujeto activo recibió la cosa.",
        a: [
          "Que previamente se le haya transmitido la posesión precaria o tenencia de la cosa mueble, no el dominio.",
          "Que haya existido violencia física en la obtención inicial.",
          "Que el valor del bien sea estrictamente mayor a 1,000 UMAs.",
          "Que el imputado sea un servidor público en ejercicio de funciones."
        ],
        correct: 0,
        why: "El abuso de confianza requiere que el bien haya sido entregado válidamente en posesión precaria o depósito, disponiendo de él indebidamente con posterioridad."
      },
      {
        q: "Si una persona entra a una tienda y esconde mercancía en su abrigo saliendo sin pagar, ¿qué conducta se actualiza?",
        note: "No existió engaño verbal ni entrega previa por confianza.",
        a: [
          "Robo",
          "Fraude",
          "Abuso de confianza",
          "Despojo"
        ],
        correct: 0,
        why: "Se actualiza el delito de robo por apoderamiento de cosa mueble ajena sin consentimiento ni derecho."
      },
      {
        q: "¿Qué es un 'verbo rector' en la tipicidad penal?",
        note: "Término fundamental de la teoría del delito.",
        a: [
          "La acción u omisión medular descrita por la ley que configura la conducta sancionada.",
          "El argumento final expresado por el juez en la sentencia condenatoria.",
          "La palabra que define exclusivamente la cuantía de la sanción económica.",
          "La regla procesal para presentar la apelación."
        ],
        correct: 0,
        why: "El verbo rector es el núcleo de la conducta descrita en el tipo penal (ej. matar, apoderar, defraudar, privar)."
      },
      {
        q: "Si el sujeto activo vende un automóvil que se le entregó en comodato (préstamo de uso), ¿qué delito comete?",
        note: "Tenía la posesión legal para usarlo temporalmente, pero no el dominio para enajenarlo.",
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
      ["¿Qué es el Bien Jurídico Tutelado?", "El valor o interés fundamental protegido por la norma penal, en este caso el patrimonio."],
      ["¿En qué consiste el dolo penal?", "En conocer los elementos del tipo penal y querer o aceptar la realización de la conducta descrita."],
      ["¿Qué consecuencia tiene el perdón del ofendido en delitos por querella?", "Extingue la acción penal o los efectos de la sentencia, según la etapa procesal."]
    ]
  },

  {
    id: "constitucional-amparo",
    title: "Derecho Constitucional: Juicio de Amparo",
    materia: "Derecho Constitucional",
    category: "Constitucional",
    subtitle: "Garantías individuales, Amparo Directo e Indirecto, y Suspensión del Acto Reclamado",
    tags: ["Amparo", "Derechos Humanos", "Suspensión", "Definitividad", "Supremacía"],
    createdAt: 1700100000000,
    resumen: {
      lead: "El juicio de amparo es el principal medio de control constitucional y de tutela judicial efectiva que tienen los gobernados en México contra actos u omisiones de autoridades que violen sus derechos humanos reconocidos en la Constitución y tratados internacionales.",
      blocks: [
        {
          title: "Amparo Indirecto",
          desc: "Se promueve ante Juzgados de Distrito o Tribunales Colegiados de Apelación contra leyes autoaplicativas o heteroaplicativas, actos fuera de juicio o actos que dejen en indefensión irreparable."
        },
        {
          title: "Amparo Directo",
          desc: "Procede ante Tribunales Colegiados de Circuito contra sentencias definitivas, laudos y resoluciones que pongan fin al juicio, dictadas por tribunales judiciales, administrativos, agrarios o del trabajo."
        },
        {
          title: "Principio de Definitividad",
          desc: "Exige que el quejoso agote previamente todos los recursos ordinarios previstos en la ley secundaria antes de acudir al amparo, salvo excepciones constitucionales expresas."
        },
        {
          title: "La Suspensión del Acto",
          desc: "Medida cautelar que busca mantener viva la materia del amparo y evitar que se consumen de manera irreparable los daños al quejoso durante el trámite del juicio."
        }
      ],
      callout: "Fundamento: Artículos 103 y 107 de la Constitución Política de los Estados Unidos Mexicanos, complementados por la Ley de Amparo reglamentaria."
    },
    temas: [
      {
        title: "1. Partes en el Juicio de Amparo",
        content: "Las partes son: I. El quejoso (quien aduce ser titular de un derecho o interés legítimo); II. La autoridad responsable (quien emite, promulga, ejecuta o intenta ejecutar el acto reclamado); III. El tercero interesado; y IV. El Ministerio Público de la Federación."
      },
      {
        title: "2. Principios Fundamentales del Amparo",
        content: "Incluyen: Instancia de parte agraviada, Existencia de agravio personal y directo o interés legítimo, Principio de definitividad, y el Principio de estricto derecho (con excepción de la suplencia de la queja deficiente en materias vulnerables)."
      },
      {
        title: "3. Tipos de Suspensión: Provisional y Definitiva",
        content: "En el amparo indirecto, la suspensión puede ser de oficio o a petición de parte. Al admitirse la demanda, el juez decreta la suspensión provisional y en audiencia incidental resuelve sobre la suspensión definitiva."
      },
      {
        title: "4. Plazos Generales para la Demanda",
        content: "La regla general es de 15 días hábiles contados a partir del día siguiente a aquel en que surta efectos la notificación del acto o se tenga conocimiento de él, con excepciones especiales (ej. materia penal o privación de la libertad)."
      }
    ],
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
        why: "El Amparo Directo es competencia originaria de los Tribunales Colegiados de Circuito."
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
        why: "El amparo es un medio extraordinario; por regla general deben agotarse los medios ordinarios (apelación, revocación, juicio de nulidad) antes de acudir al juicio de garantías."
      },
      {
        q: "¿Cuál es el objetivo principal de la suspensión del acto reclamado?",
        note: "Función de tutela cautelar.",
        a: [
          "Conservar la materia del litigio e impedir que se consumen daños de imposible o difícil reparación.",
          "Condenar de inmediato a prisión a la autoridad responsable.",
          "Anular de manera automática todas las leyes del país.",
          "Declarar concluido el juicio en la primera semana sin desahogar pruebas."
        ],
        correct: 0,
        why: "La suspensión es una providencia cautelar para preservar la materia del amparo y evitar perjuicios irreparables al quejoso mientras se dicta sentencia definitiva."
      }
    ],
    cards: [
      ["¿Cuáles son los 2 grandes tipos de Amparo?", "Amparo Directo (contra sentencias definitivas) y Amparo Indirecto (contra actos u omisiones en general y leyes)."],
      ["¿Quién es la Autoridad Responsable?", "Aquélla que dicta, ordena, ejecuta o trata de ejecutar el acto que crea, modifica o extingue situaciones jurídicas de forma unilateral."],
      ["¿Qué es la Suplencia de la Queja Deficiente?", "La facultad u obligación del juzgador constitucional de subsanar los errores u omisiones en los conceptos de violación en favor del quejoso en materias protegidas."],
      ["¿Cuál es el plazo genérico para presentar la demanda de amparo?", "15 días hábiles a partir de la notificación o conocimiento del acto reclamado."]
    ]
  },

  {
    id: "civil-obligaciones",
    title: "Derecho Civil: Teoría de las Obligaciones",
    materia: "Derecho Civil",
    category: "Civil",
    subtitle: "Fuentes de las obligaciones, modalidades, vicios del consentimiento y cumplimiento",
    tags: ["Obligaciones", "Contratos", "Consentimiento", "Dolo", "Mora", "Pago"],
    createdAt: 1700200000000,
    resumen: {
      lead: "La obligación es el vínculo jurídico en virtud del cual una persona llamada acreedor puede exigir a otra llamada deudor una prestación que puede consistir en dar, hacer o no hacer alguna cosa.",
      blocks: [
        {
          title: "Fuentes de las Obligaciones",
          desc: "El contrato, la declaración unilateral de voluntad, el enriquecimiento ilegítimo, la gestión de negocios, los hechos ilícitos y el riesgo creado."
        },
        {
          title: "Vicios del Consentimiento",
          desc: "El consentimiento no es válido si ha sido dado por error, arrancado por violencia o sorprendido por dolo o mala fe."
        },
        {
          title: "Efectos del Incumplimiento",
          desc: "Origina la responsabilidad civil contractual: indemnización de daños y perjuicios moratorios o compensatorios, y pago de la cláusula penal pactada."
        },
        {
          title: "Modos de Extinción",
          desc: "El pago (cumplimiento exacto), la compensación, la confusión de derechos, la remisión de deuda, la novación y la prescripción liberatoria."
        }
      ],
      callout: "Reguladas primordialmente en el Libro Cuarto de los Códigos Civiles sustantivos de las entidades y el Código Civil Federal."
    },
    temas: [
      {
        title: "1. Elementos de Existencia vs. Requisitos de Validez",
        content: "Existencia: Consentimiento y Objeto que pueda ser materia del contrato (y solemnidad en casos excepcionales). Validez: Capacidad de las partes, ausencia de vicios del consentimiento, licitud en el objeto o motivo, y formalidad exigida por la ley."
      },
      {
        title: "2. Dolo y Mala Fe Civil",
        content: "El dolo es cualquier artificio, maquinación o sugestión que se emplee para inducir a error o mantener en él a uno de los contratantes. La mala fe es la disimulación del error de uno de los contratantes una vez conocido."
      },
      {
        title: "3. Modalidades: Condición, Plazo y Modo",
        content: "La condición es un acontecimiento futuro e incierto del que depende el nacimiento o extinción de la obligación. El plazo es un acontecimiento futuro y cierto de cuya llegada depende la exigibilidad o extinción."
      }
    ],
    quiz: [
      {
        q: "¿Cuáles son los dos elementos indispensables para la existencia de un contrato?",
        note: "Sin ellos el acto es jurídicamente inexistente.",
        a: [
          "Consentimiento y Objeto",
          "Capacidad y Formalidad ante Notario",
          "Plazo y Condición Resolutoria",
          "Firma autógrafa y dos testigos"
        ],
        correct: 0,
        why: "Sin consentimiento y objeto idóneo el contrato es inexistente de pleno derecho."
      },
      {
        q: "¿Qué diferencia al dolo de la mala fe en materia civil?",
        note: "Uno es una acción positiva de inducción y el otro una omisión disimulada.",
        a: [
          "El dolo implica maquinación activa para inducir al error; la mala fe es la disimulación pasiva del error ajeno.",
          "El dolo solo ocurre en materia penal y nunca en contratos civiles.",
          "La mala fe extingue la obligación sin indemnización.",
          "Son términos absolutamente sinónimos sin distinción alguna."
        ],
        correct: 0,
        why: "El Código Civil define el dolo como artificios activos para inducir al error, y mala fe como el mero callar o disimular el error ya padecido por la contraparte."
      }
    ],
    cards: [
      ["¿Qué es una obligación civil?", "Vínculo jurídico patrimonial donde un acreedor puede exigir a un deudor una prestación de dar, hacer o no hacer."],
      ["¿Qué es el Pago en sentido jurídico?", "El cumplimiento de la prestación debida, sea de dar, hacer o abstenerse."],
      ["¿Qué es el Caso Fortuito o Fuerza Mayor?", "Acontecimiento imprevisible o inevitable que imposibilita el cumplimiento de la obligación liberando al deudor de responsabilidad, salvo pacto en contrario."]
    ]
  }
];

// =============================================================================
// 2. GESTOR DE ESTADO Y ALMACENAMIENTO (LOCALSTORAGE)
// =============================================================================
class GuidesStateManager {
  constructor() {
    this.STORAGE_KEY_CUSTOM = 'iuris_custom_guides_v2';
    this.STORAGE_KEY_STATS = 'iuris_user_stats_v2';
    this.STORAGE_KEY_THEME = 'iuris_theme_pref';

    this.allGuides = [];
    this.activeGuide = null;
    this.activeTab = 'resumen';
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.sortMethod = 'recent';

    // Estado del Quiz
    this.quizIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;

    // Estado de Flashcards
    this.cardIndex = 0;
    this.cardFlipped = false;

    // Estadísticas
    this.stats = this.loadStats();
    this.loadGuides();
  }

  loadStats() {
    const defaultStats = {
      answered: 0,
      correct: 0,
      cardsFlipped: 0,
      cardsMastered: 0,
      guidesProgress: {} // id -> { completedQuiz: bool, score: n, totalQ: n, cardsReviewed: n }
    };
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY_STATS);
      return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    } catch (e) {
      console.warn("No se pudo leer estadísticas locales", e);
      return defaultStats;
    }
  }

  saveStats() {
    try {
      localStorage.setItem(this.STORAGE_KEY_STATS, JSON.stringify(this.stats));
    } catch (e) {
      console.error("Error guardando estadísticas", e);
    }
  }

  loadGuides() {
    try {
      const customGuidesJson = localStorage.getItem(this.STORAGE_KEY_CUSTOM);
      const customGuides = customGuidesJson ? JSON.parse(customGuidesJson) : [];
      // Combinar guías por defecto + guías personalizadas creadas/subidas por el usuario
      this.allGuides = [...DEFAULT_GUIDES, ...customGuides];
    } catch (e) {
      console.error("Error cargando guías personalizadas", e);
      this.allGuides = [...DEFAULT_GUIDES];
    }
  }

  saveCustomGuides(customGuides) {
    try {
      localStorage.setItem(this.STORAGE_KEY_CUSTOM, JSON.stringify(customGuides));
      this.loadGuides();
    } catch (e) {
      console.error("Error persistiendo guías personalizadas", e);
    }
  }

  addGuide(newGuide) {
    // Validar id único
    const id = newGuide.id || 'guia-' + Date.now();
    const preparedGuide = {
      ...newGuide,
      id,
      createdAt: newGuide.createdAt || Date.now(),
      isCustom: true
    };

    // Obtener las guías personalizadas existentes
    const customGuidesJson = localStorage.getItem(this.STORAGE_KEY_CUSTOM);
    const customGuides = customGuidesJson ? JSON.parse(customGuidesJson) : [];
    
    // Si ya existe con el mismo ID, actualizar, si no, agregar al inicio
    const existingIndex = customGuides.findIndex(g => g.id === id);
    if (existingIndex >= 0) {
      customGuides[existingIndex] = preparedGuide;
    } else {
      customGuides.unshift(preparedGuide);
    }

    this.saveCustomGuides(customGuides);
    return preparedGuide;
  }

  deleteGuide(guideId) {
    const customGuidesJson = localStorage.getItem(this.STORAGE_KEY_CUSTOM);
    let customGuides = customGuidesJson ? JSON.parse(customGuidesJson) : [];
    customGuides = customGuides.filter(g => g.id !== guideId);
    this.saveCustomGuides(customGuides);
  }

  getGuideById(id) {
    return this.allGuides.find(g => g.id === id) || null;
  }

  resetAllStats() {
    this.stats = {
      answered: 0,
      correct: 0,
      cardsFlipped: 0,
      cardsMastered: 0,
      guidesProgress: {}
    };
    this.saveStats();
  }
}

// =============================================================================
// 3. CONTROLADOR DE LA INTERFAZ DE USUARIO (UI CONTROLLER)
// =============================================================================
class IurisApp {
  constructor() {
    this.state = new GuidesStateManager();
    this.initDOMElements();
    this.initEventListeners();
    this.initTheme();
    this.renderCatalog();
    this.updateHeroStats();
  }

  initDOMElements() {
    // Vistas principales
    this.viewCatalogo = document.getElementById('viewCatalogo');
    this.viewGuiaDetail = document.getElementById('viewGuiaDetail');
    this.viewProgresoGlobal = document.getElementById('viewProgresoGlobal');

    // Navegación
    this.navLinks = document.querySelectorAll('.nav-link');
    this.themeToggle = document.getElementById('themeToggle');
    this.btnBackToCatalogo = document.getElementById('btnBackToCatalogo');
    this.btnBackFromProgress = document.getElementById('btnBackFromProgress');

    // Catálogo
    this.guidesGrid = document.getElementById('guidesGrid');
    this.catalogSearchInput = document.getElementById('catalogSearchInput');
    this.categoryPills = document.querySelectorAll('#categoryPillsContainer .pill');
    this.sortGuidesSelect = document.getElementById('sortGuidesSelect');
    this.visibleGuidesCount = document.getElementById('visibleGuidesCount');
    this.totalGuidesCount = document.getElementById('totalGuidesCount');
    this.emptyStateGuides = document.getElementById('emptyStateGuides');
    this.btnClearFilters = document.getElementById('btnClearFilters');

    // Hero stats
    this.totalCardsStudied = document.getElementById('totalCardsStudied');
    this.totalQuizAnswered = document.getElementById('totalQuizAnswered');
    this.overallAccuracy = document.getElementById('overallAccuracy');

    // Modal Subir Guía
    this.uploadModal = document.getElementById('uploadModal');
    this.btnOpenUploadModal = document.getElementById('btnOpenUploadModal');
    this.btnHeroUpload = document.getElementById('btnHeroUpload');
    this.btnCloseModal = document.getElementById('btnCloseModal');
    this.btnCancelForm = document.getElementById('btnCancelForm');
    this.tabBtnFormUpload = document.getElementById('tabBtnFormUpload');
    this.tabBtnJsonUpload = document.getElementById('tabBtnJsonUpload');
    this.createGuideForm = document.getElementById('createGuideForm');
    this.jsonUploadContainer = document.getElementById('jsonUploadContainer');

    // Dynamic Form Rows
    this.btnAddSubtemaRow = document.getElementById('btnAddSubtemaRow');
    this.subtemasInputsContainer = document.getElementById('subtemasInputsContainer');
    this.btnAddQuizRow = document.getElementById('btnAddQuizRow');
    this.quizInputsContainer = document.getElementById('quizInputsContainer');
    this.btnAddCardRow = document.getElementById('btnAddCardRow');
    this.cardsInputsContainer = document.getElementById('cardsInputsContainer');

    // JSON upload
    this.fileDropzone = document.getElementById('fileDropzone');
    this.jsonFileInput = document.getElementById('jsonFileInput');
    this.jsonTextInput = document.getElementById('jsonTextInput');
    this.btnProcessJsonUpload = document.getElementById('btnProcessJsonUpload');
    this.btnDownloadSampleJson = document.getElementById('btnDownloadSampleJson');
    this.btnExportAllGuides = document.getElementById('btnExportAllGuides');

    // Detalle de Guía
    this.crumbMateria = document.getElementById('crumbMateria');
    this.crumbTitulo = document.getElementById('crumbTitulo');
    this.detailMateriaBadge = document.getElementById('detailMateriaBadge');
    this.detailTitle = document.getElementById('detailTitle');
    this.detailSubtitle = document.getElementById('detailSubtitle');
    this.detailTags = document.getElementById('detailTags');
    this.studyTabs = document.querySelectorAll('.study-tab');
    this.btnShareGuide = document.getElementById('btnShareGuide');
    this.btnDeleteCustomGuide = document.getElementById('btnDeleteCustomGuide');

    // Tabs Contenidos
    this.tabContentResumen = document.getElementById('tabContentResumen');
    this.tabContentTemas = document.getElementById('tabContentTemas');
    this.tabContentQuiz = document.getElementById('tabContentQuiz');
    this.tabContentFlashcards = document.getElementById('tabContentFlashcards');
    this.resumenContentArea = document.getElementById('resumenContentArea');
    this.temasAccordionList = document.getElementById('temasAccordionList');
    this.btnExpandAllTemas = document.getElementById('btnExpandAllTemas');
    this.btnCollapseAllTemas = document.getElementById('btnCollapseAllTemas');

    // Quiz Elements
    this.quizCurrentBadge = document.getElementById('quizCurrentBadge');
    this.liveQuizScore = document.getElementById('liveQuizScore');
    this.quizProgressBar = document.getElementById('quizProgressBar');
    this.quizInteractiveBody = document.getElementById('quizInteractiveBody');
    this.quizExplanationBox = document.getElementById('quizExplanationBox');
    this.quizExpText = document.getElementById('quizExpText');
    this.btnNextQuiz = document.getElementById('btnNextQuiz');
    this.btnRestartQuiz = document.getElementById('btnRestartQuiz');

    // Flashcards Elements
    this.card3dObject = document.getElementById('card3dObject');
    this.cardFrontText = document.getElementById('cardFrontText');
    this.cardBackText = document.getElementById('cardBackText');
    this.flashcardCounter = document.getElementById('flashcardCounter');
    this.flashcardsDots = document.getElementById('flashcardsDots');
    this.btnPrevCard = document.getElementById('btnPrevCard');
    this.btnNextCard = document.getElementById('btnNextCard');
    this.btnCardNeedsWork = document.getElementById('btnCardNeedsWork');
    this.btnCardMastered = document.getElementById('btnCardMastered');

    // Progreso Global
    this.progTotalGuides = document.getElementById('progTotalGuides');
    this.progTotalAnswers = document.getElementById('progTotalAnswers');
    this.progTotalCards = document.getElementById('progTotalCards');
    this.progMasteredCards = document.getElementById('progMasteredCards');
    this.guideProgressTableList = document.getElementById('guideProgressTableList');
    this.btnResetAllProgress = document.getElementById('btnResetAllProgress');
  }

  initEventListeners() {
    // Manejo de Hash de navegación
    window.addEventListener('hashchange', () => this.handleHashRoute());

    // Switch de vistas de navegación superior
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.dataset.nav;
        if (target === 'catalogo') this.navigateTo('catalogo');
        if (target === 'progreso-global') this.navigateTo('progreso');
      });
    });

    this.btnBackToCatalogo.addEventListener('click', () => this.navigateTo('catalogo'));
    this.btnBackFromProgress.addEventListener('click', () => this.navigateTo('catalogo'));

    // Búsqueda y Filtros
    this.catalogSearchInput.addEventListener('input', (e) => {
      this.state.searchQuery = e.target.value.toLowerCase().trim();
      this.renderCatalog();
    });

    // Atajo de teclado Cmd/Ctrl+K para buscar
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.navigateTo('catalogo');
        this.catalogSearchInput.focus();
      }
    });

    // Filtros de categoría
    this.categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.state.currentCategory = pill.dataset.category;
        this.renderCatalog();
      });
    });

    // Ordenar guías
    this.sortGuidesSelect.addEventListener('change', (e) => {
      this.state.sortMethod = e.target.value;
      this.renderCatalog();
    });

    this.btnClearFilters.addEventListener('click', () => {
      this.catalogSearchInput.value = '';
      this.state.searchQuery = '';
      this.categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
      this.state.currentCategory = 'all';
      this.renderCatalog();
    });

    // Modal Subir Guía
    const openModal = () => {
      this.uploadModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
      this.uploadModal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    this.btnOpenUploadModal.addEventListener('click', openModal);
    this.btnHeroUpload.addEventListener('click', openModal);
    this.btnCloseModal.addEventListener('click', closeModal);
    this.btnCancelForm.addEventListener('click', closeModal);
    this.uploadModal.addEventListener('click', (e) => {
      if (e.target === this.uploadModal) closeModal();
    });

    // Pestañas del Modal
    this.tabBtnFormUpload.addEventListener('click', () => {
      this.tabBtnFormUpload.classList.add('active');
      this.tabBtnJsonUpload.classList.remove('active');
      this.createGuideForm.classList.remove('hidden');
      this.jsonUploadContainer.classList.add('hidden');
    });

    this.tabBtnJsonUpload.addEventListener('click', () => {
      this.tabBtnJsonUpload.classList.add('active');
      this.tabBtnFormUpload.classList.remove('active');
      this.createGuideForm.classList.add('hidden');
      this.jsonUploadContainer.classList.remove('hidden');
    });

    // Dynamic Form: Agregar filas
    this.btnAddSubtemaRow.addEventListener('click', () => this.addSubtemaRow());
    this.btnAddQuizRow.addEventListener('click', () => this.addQuizRow());
    this.btnAddCardRow.addEventListener('click', () => this.addCardRow());

    // Submit del formulario guiado
    this.createGuideForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
      closeModal();
    });

    // Importación por JSON / Archivo
    this.initJsonUploadEvents();

    // Exportar todas las guías
    this.btnExportAllGuides.addEventListener('click', () => this.exportAllGuidesJson());

    // Pestañas de estudio de la guía (Resumen, Subtemas, Quiz, Flashcards)
    this.studyTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.setStudyTab(tab.dataset.tab);
      });
    });

    // Controles de Acordeón
    this.btnExpandAllTemas.addEventListener('click', () => {
      this.temasAccordionList.querySelectorAll('.accordion-item').forEach(acc => acc.open = true);
    });
    this.btnCollapseAllTemas.addEventListener('click', () => {
      this.temasAccordionList.querySelectorAll('.accordion-item').forEach(acc => acc.open = false);
    });

    // Controles del Quiz
    this.btnNextQuiz.addEventListener('click', () => this.nextQuizQuestion());
    this.btnRestartQuiz.addEventListener('click', () => this.restartQuiz());

    // Controles de Flashcards
    this.card3dObject.addEventListener('click', () => this.flipFlashcard());
    this.btnPrevCard.addEventListener('click', (e) => { e.stopPropagation(); this.prevFlashcard(); });
    this.btnNextCard.addEventListener('click', (e) => { e.stopPropagation(); this.nextFlashcard(); });
    this.btnCardNeedsWork.addEventListener('click', (e) => { e.stopPropagation(); this.recordCardConfidence(false); });
    this.btnCardMastered.addEventListener('click', (e) => { e.stopPropagation(); this.recordCardConfidence(true); });

    // Navegación con teclado en flashcards
    window.addEventListener('keydown', (e) => {
      if (this.viewGuiaDetail.classList.contains('active') && this.state.activeTab === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          this.flipFlashcard();
        } else if (e.key === 'ArrowRight') {
          this.nextFlashcard();
        } else if (e.key === 'ArrowLeft') {
          this.prevFlashcard();
        }
      }
    });

    // Compartir / Exportar guía individual
    this.btnShareGuide.addEventListener('click', () => this.shareCurrentGuide());
    this.btnDeleteCustomGuide.addEventListener('click', () => this.deleteCurrentCustomGuide());

    // Reset de progreso global
    this.btnResetAllProgress.addEventListener('click', () => {
      if (confirm("¿Estás seguro de reiniciar todo el historial de estadísticas de estudio? Las guías no se eliminarán.")) {
        this.state.resetAllStats();
        this.updateHeroStats();
        this.renderGlobalProgressView();
        this.showToast("Estadísticas reiniciadas con éxito");
      }
    });

    // Toggle de tema
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  // ===========================================================================
  // 4. RUTEO Y NAVEGACIÓN
  // ===========================================================================
  navigateTo(viewName, guideId = null) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Actualizar nav links
    this.navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.nav === viewName);
    });

    this.viewCatalogo.classList.remove('active');
    this.viewGuiaDetail.classList.remove('active');
    this.viewProgresoGlobal.classList.remove('active');

    if (viewName === 'catalogo') {
      window.location.hash = '#catalogo';
      this.viewCatalogo.classList.add('active');
      this.renderCatalog();
      this.updateHeroStats();
    } else if (viewName === 'guia') {
      if (guideId) {
        window.location.hash = `#guia/${guideId}`;
        this.openGuide(guideId);
      }
      this.viewGuiaDetail.classList.add('active');
    } else if (viewName === 'progreso') {
      window.location.hash = '#progreso-global';
      this.viewProgresoGlobal.classList.add('active');
      this.renderGlobalProgressView();
    }
  }

  handleHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#guia/')) {
      const guideId = hash.replace('#guia/', '');
      this.navigateTo('guia', guideId);
    } else if (hash === '#progreso-global') {
      this.navigateTo('progreso');
    } else {
      this.navigateTo('catalogo');
    }
  }

  // ===========================================================================
  // 5. RENDERIZADO DEL CATÁLOGO DE GUÍAS (PÁGINA PRINCIPAL / INDEX)
  // ===========================================================================
  renderCatalog() {
    let guides = [...this.state.allGuides];

    // 1. Filtrar por búsqueda
    if (this.state.searchQuery) {
      const q = this.state.searchQuery;
      guides = guides.filter(g => {
        const titleMatch = (g.title || '').toLowerCase().includes(q);
        const subMatch = (g.subtitle || '').toLowerCase().includes(q);
        const matMatch = (g.materia || '').toLowerCase().includes(q);
        const tagsMatch = (g.tags || []).some(t => t.toLowerCase().includes(q));
        const resumenMatch = (g.resumen?.lead || '').toLowerCase().includes(q);
        return titleMatch || subMatch || matMatch || tagsMatch || resumenMatch;
      });
    }

    // 2. Filtrar por categoría
    if (this.state.currentCategory !== 'all') {
      guides = guides.filter(g => {
        const category = g.category || g.materia;
        return category.toLowerCase().includes(this.state.currentCategory.toLowerCase());
      });
    }

    // 3. Ordenar
    if (this.state.sortMethod === 'recent') {
      guides.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (this.state.sortMethod === 'title') {
      guides.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.state.sortMethod === 'cards') {
      guides.sort((a, b) => (b.cards?.length || 0) - (a.cards?.length || 0));
    } else if (this.state.sortMethod === 'questions') {
      guides.sort((a, b) => (b.quiz?.length || 0) - (a.quiz?.length || 0));
    }

    // Actualizar conteos
    this.visibleGuidesCount.textContent = guides.length;
    this.totalGuidesCount.textContent = this.state.allGuides.length;

    // Mostrar empty state si no hay coincidencias
    if (guides.length === 0) {
      this.guidesGrid.innerHTML = '';
      this.emptyStateGuides.classList.remove('hidden');
      return;
    } else {
      this.emptyStateGuides.classList.add('hidden');
    }

    // Renderizar Cards modernas
    this.guidesGrid.innerHTML = guides.map(guide => {
      const qCount = guide.quiz ? guide.quiz.length : 0;
      const cCount = guide.cards ? guide.cards.length : 0;
      const tCount = guide.temas ? guide.temas.length : 0;
      const isCustom = Boolean(guide.isCustom);

      // Distintivo de materia
      let badgeClass = 'badge-custom';
      const m = (guide.materia || '').toLowerCase();
      if (m.includes('penal')) badgeClass = 'badge-penal';
      else if (m.includes('civil')) badgeClass = 'badge-civil';
      else if (m.includes('const') || m.includes('amparo')) badgeClass = 'badge-const';

      const tagsHtml = (guide.tags || []).slice(0, 3).map(tag => 
        `<span class="guide-mini-pill">${tag}</span>`
      ).join('');

      return `
        <article class="guide-card" data-guide-id="${guide.id}">
          <div class="guide-card-top">
            <span class="badge ${badgeClass}">${guide.materia || 'Derecho'}</span>
            ${isCustom ? '<span class="badge badge-custom" title="Guía subida por ti">★ Tuya</span>' : ''}
          </div>
          <h3 class="guide-card-title">${guide.title}</h3>
          <p class="guide-card-desc">${guide.subtitle || 'Guía completa con conceptos, preguntas y flashcards.'}</p>
          
          <div class="guide-card-pills">
            ${tagsHtml}
          </div>

          <div class="guide-card-metrics">
            <div class="metric-item">
              <span class="metric-val">${tCount}</span>
              <span class="metric-lbl">Subtemas</span>
            </div>
            <div class="metric-item">
              <span class="metric-val">${qCount}</span>
              <span class="metric-lbl">Preguntas</span>
            </div>
            <div class="metric-item">
              <span class="metric-val">${cCount}</span>
              <span class="metric-lbl">Tarjetas</span>
            </div>
          </div>

          <div class="guide-card-footer">
            <button class="btn btn-primary btn-open-guide" data-guide-id="${guide.id}">
              <span>Estudiar Guía</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Eventos de apertura de guías
    this.guidesGrid.querySelectorAll('.btn-open-guide, .guide-card').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const guideId = elem.dataset.guideId || elem.closest('.guide-card').dataset.guideId;
        this.navigateTo('guia', guideId);
      });
    });
  }

  updateHeroStats() {
    this.totalCardsStudied.textContent = this.state.stats.cardsFlipped || 0;
    this.totalQuizAnswered.textContent = this.state.stats.answered || 0;

    const answered = this.state.stats.answered || 0;
    const correct = this.state.stats.correct || 0;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    this.overallAccuracy.textContent = `${accuracy}%`;
  }

  // ===========================================================================
  // 6. ENTORNO DE ESTUDIO DE GUÍA (DETALLE DE GUÍA)
  // ===========================================================================
  openGuide(guideId) {
    const guide = this.state.getGuideById(guideId);
    if (!guide) {
      this.showToast("Guía no encontrada", "error");
      this.navigateTo('catalogo');
      return;
    }

    this.state.activeGuide = guide;

    // Actualizar encabezados
    this.crumbMateria.textContent = guide.materia || 'Derecho';
    this.crumbTitulo.textContent = guide.title;
    this.detailMateriaBadge.textContent = guide.materia || 'Derecho';
    this.detailTitle.textContent = guide.title;
    this.detailSubtitle.textContent = guide.subtitle || '';

    // Tags
    this.detailTags.innerHTML = (guide.tags || []).map(t => 
      `<span class="guide-mini-pill">#${t}</span>`
    ).join('');

    // Conteos en los tabs
    document.getElementById('tabTemasCount').textContent = guide.temas ? guide.temas.length : 0;
    document.getElementById('tabQuizCount').textContent = guide.quiz ? guide.quiz.length : 0;
    document.getElementById('tabCardsCount').textContent = guide.cards ? guide.cards.length : 0;

    // Mostrar/ocultar botón de eliminar si es personalizada
    this.btnDeleteCustomGuide.style.display = guide.isCustom ? 'inline-flex' : 'none';

    // Renderizar contenidos
    this.renderResumenTab(guide);
    this.renderTemasTab(guide);
    this.initQuizForGuide(guide);
    this.initFlashcardsForGuide(guide);

    // Activar pestaña predeterminada
    this.setStudyTab('resumen');
  }

  setStudyTab(tabName) {
    this.state.activeTab = tabName;

    // Activar botón tab
    this.studyTabs.forEach(t => {
      const isActive = t.dataset.tab === tabName;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });

    // Activar panel
    this.tabContentResumen.classList.toggle('active', tabName === 'resumen');
    this.tabContentTemas.classList.toggle('active', tabName === 'temas');
    this.tabContentQuiz.classList.toggle('active', tabName === 'quiz');
    this.tabContentFlashcards.classList.toggle('active', tabName === 'flashcards');
  }

  renderResumenTab(guide) {
    const r = guide.resumen || {};
    const leadText = typeof r === 'string' ? r : (r.lead || 'Resumen de la guía.');
    const blocks = Array.isArray(r.blocks) ? r.blocks : [];
    const callout = r.callout || 'Recuerda confirmar con la jurisprudencia y fuentes doctrinales sugeridas por tu profesor.';

    let blocksHtml = '';
    if (blocks.length > 0) {
      blocksHtml = `
        <div class="cards-columns-grid">
          ${blocks.map(b => `
            <div class="resumen-info-box">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${b.title}</span>
              </h4>
              <p>${b.desc}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.resumenContentArea.innerHTML = `
      <div class="resumen-lead">${leadText}</div>
      ${blocksHtml}
      <div class="legal-callout-card">
        <span class="legal-callout-icon">⚖</span>
        <div class="legal-callout-text">
          <h4>Pauta Jurídica Importante</h4>
          <p>${callout}</p>
        </div>
      </div>
      <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="window.iurisApp.setStudyTab('temas')">
          <span>Ver Desarrollo de Subtemas</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button class="btn btn-secondary" onclick="window.iurisApp.setStudyTab('quiz')">
          <span>Cuestionario de Práctica</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg>
        </button>
      </div>
    `;
  }

  renderTemasTab(guide) {
    const temas = guide.temas || [];
    if (temas.length === 0) {
      this.temasAccordionList.innerHTML = '<p class="muted">No hay subtemas redactados para esta guía.</p>';
      return;
    }

    this.temasAccordionList.innerHTML = temas.map((t, idx) => `
      <details class="accordion-item" ${idx === 0 ? 'open' : ''}>
        <summary class="accordion-summary">
          <span>${t.title}</span>
          <span class="summary-chevron">▼</span>
        </summary>
        <div class="accordion-body">
          <p>${t.content}</p>
        </div>
      </details>
    `).join('');
  }

  // ===========================================================================
  // 7. CUESTIONARIO INTERACTIVO (QUIZ)
  // ===========================================================================
  initQuizForGuide(guide) {
    this.state.quizIndex = 0;
    this.state.quizScore = 0;
    this.state.quizAnswered = false;
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const guide = this.state.activeGuide;
    const questions = guide?.quiz || [];

    this.quizExplanationBox.classList.add('hidden');
    this.btnNextQuiz.disabled = true;
    this.btnNextQuiz.classList.remove('hidden');
    this.btnRestartQuiz.classList.add('hidden');

    if (questions.length === 0) {
      this.quizInteractiveBody.innerHTML = `
        <div class="quiz-completion-card">
          <p>Esta guía no tiene preguntas de cuestionario todavía.</p>
        </div>
      `;
      this.btnNextQuiz.classList.add('hidden');
      return;
    }

    // Si terminó todas las preguntas
    if (this.state.quizIndex >= questions.length) {
      const percentage = Math.round((this.state.quizScore / questions.length) * 100);
      let feedbackMsg = "¡Sigue repasando! Cada intento refuerza tu comprensión jurídica.";
      if (percentage >= 80) feedbackMsg = "¡Excelente dominio dogmático y legal! Estás muy bien preparado.";
      else if (percentage >= 60) feedbackMsg = "Buen avance. Refuerza los conceptos clave en la pestaña de Resumen.";

      this.quizInteractiveBody.innerHTML = `
        <div class="quiz-completion-card">
          <div class="completion-trophy">🏆</div>
          <h2>¡Cuestionario Completado!</h2>
          <div class="completion-score">${this.state.quizScore} de ${questions.length} correctas (${percentage}%)</div>
          <p style="max-width: 500px; margin: 0 auto 1.5rem;">${feedbackMsg}</p>
        </div>
      `;

      this.quizProgressBar.style.width = '100%';
      this.quizCurrentBadge.textContent = 'Cuestionario Concluido';
      this.liveQuizScore.textContent = `${this.state.quizScore}/${questions.length}`;
      this.btnNextQuiz.classList.add('hidden');
      this.btnRestartQuiz.classList.remove('hidden');

      // Guardar en estadísticas de progreso
      if (!this.state.stats.guidesProgress[guide.id]) {
        this.state.stats.guidesProgress[guide.id] = {};
      }
      this.state.stats.guidesProgress[guide.id].completedQuiz = true;
      this.state.stats.guidesProgress[guide.id].score = this.state.quizScore;
      this.state.stats.guidesProgress[guide.id].totalQuestions = questions.length;
      this.state.saveStats();
      this.updateHeroStats();
      return;
    }

    const currentQ = questions[this.state.quizIndex];
    const totalQ = questions.length;

    this.quizCurrentBadge.textContent = `Pregunta ${this.state.quizIndex + 1} de ${totalQ}`;
    this.liveQuizScore.textContent = this.state.quizScore;
    this.quizProgressBar.style.width = `${((this.state.quizIndex) / totalQ) * 100}%`;

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = currentQ.a.map((optText, i) => `
      <button class="quiz-opt-btn" data-opt-idx="${i}">
        <span class="opt-letter">${letters[i] || (i + 1)}</span>
        <span>${optText}</span>
      </button>
    `).join('');

    this.quizInteractiveBody.innerHTML = `
      <div class="quiz-question-text">${currentQ.q}</div>
      ${currentQ.note ? `<div class="quiz-question-hint">💡 ${currentQ.note}</div>` : ''}
      <div class="quiz-options-list">
        ${optionsHtml}
      </div>
    `;

    // Vincular clic a las opciones
    this.quizInteractiveBody.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleQuizAnswer(parseInt(btn.dataset.optIdx, 10));
      });
    });
  }

  handleQuizAnswer(selectedIdx) {
    if (this.state.quizAnswered) return;
    this.state.quizAnswered = true;

    const currentQ = this.state.activeGuide.quiz[this.state.quizIndex];
    const isCorrect = selectedIdx === currentQ.correct;

    // Actualizar estadísticas globales
    this.state.stats.answered++;
    if (isCorrect) {
      this.state.quizScore++;
      this.state.stats.correct++;
    }
    this.state.saveStats();
    this.updateHeroStats();

    // Actualizar estilos de los botones
    const buttons = this.quizInteractiveBody.querySelectorAll('.quiz-opt-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Mostrar explicación
    this.quizExpText.textContent = (isCorrect ? '✓ ¡Correcto! ' : '✕ Incorrecto. ') + (currentQ.why || '');
    this.quizExplanationBox.classList.remove('hidden');

    this.btnNextQuiz.disabled = false;
    this.btnNextQuiz.querySelector('span').textContent = 
      this.state.quizIndex === this.state.activeGuide.quiz.length - 1 ? 'Ver Resultado Final' : 'Siguiente Pregunta';
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
  // 8. FLASHCARDS (TARJETAS DE ESTUDIO 3D)
  // ===========================================================================
  initFlashcardsForGuide(guide) {
    this.state.cardIndex = 0;
    this.state.cardFlipped = false;
    this.renderFlashcard();
  }

  renderFlashcard() {
    const guide = this.state.activeGuide;
    const cards = guide?.cards || [];

    if (cards.length === 0) {
      this.cardFrontText.textContent = "No hay tarjetas disponibles en esta guía.";
      this.cardBackText.textContent = "Agrega tarjetas mediante el editor de guías.";
      this.flashcardCounter.textContent = "0 de 0";
      this.flashcardsDots.innerHTML = '';
      return;
    }

    // Restablecer flip
    this.state.cardFlipped = false;
    this.card3dObject.classList.remove('is-flipped');

    const card = cards[this.state.cardIndex];
    this.cardFrontText.textContent = card[0];
    this.cardBackText.textContent = card[1];
    this.flashcardCounter.textContent = `Tarjeta ${this.state.cardIndex + 1} de ${cards.length}`;

    // Renderizar dots
    this.flashcardsDots.innerHTML = cards.map((_, i) => 
      `<span class="dot ${i === this.state.cardIndex ? 'active' : ''}"></span>`
    ).join('');
  }

  flipFlashcard() {
    this.state.cardFlipped = !this.state.cardFlipped;
    this.card3dObject.classList.toggle('is-flipped', this.state.cardFlipped);

    if (this.state.cardFlipped) {
      this.state.stats.cardsFlipped++;
      this.state.saveStats();
      this.updateHeroStats();
    }
  }

  nextFlashcard() {
    const cards = this.state.activeGuide?.cards || [];
    if (cards.length <= 1) return;
    this.state.cardIndex = (this.state.cardIndex + 1) % cards.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    const cards = this.state.activeGuide?.cards || [];
    if (cards.length <= 1) return;
    this.state.cardIndex = (this.state.cardIndex - 1 + cards.length) % cards.length;
    this.renderFlashcard();
  }

  recordCardConfidence(mastered) {
    if (mastered) {
      this.state.stats.cardsMastered++;
      this.state.saveStats();
      this.showToast("¡Concepto marcado como dominado! 🎯");
    }
    this.nextFlashcard();
  }

  // ===========================================================================
  // 9. PROGRESO GLOBAL
  // ===========================================================================
  renderGlobalProgressView() {
    const stats = this.state.stats;
    this.progTotalGuides.textContent = this.state.allGuides.length;
    this.progTotalAnswers.textContent = stats.answered;
    this.progTotalCards.textContent = stats.cardsFlipped;
    this.progMasteredCards.textContent = stats.cardsMastered;

    const rowsHtml = this.state.allGuides.map(guide => {
      const qProg = stats.guidesProgress[guide.id] || {};
      const scoreText = qProg.completedQuiz ? `${qProg.score}/${qProg.totalQuestions} aciertos` : 'Sin realizar';
      const statusBadge = qProg.completedQuiz ? '<span class="badge badge-const">Completado</span>' : '<span class="badge" style="background:var(--bg-tertiary); color:var(--text-dim)">Pendiente</span>';

      return `
        <div class="progress-table-row">
          <div>
            <strong>${guide.title}</strong>
            <div style="font-size:0.75rem; color:var(--text-dim);">${guide.materia || 'Derecho'}</div>
          </div>
          <div>${guide.cards?.length || 0} tarjetas</div>
          <div>${scoreText}</div>
          <div>${statusBadge}</div>
        </div>
      `;
    }).join('');

    this.guideProgressTableList.innerHTML = `
      <div class="progress-table-row header-row">
        <div>Guía Jurídica</div>
        <div>Tarjetas</div>
        <div>Cuestionario</div>
        <div>Estado</div>
      </div>
      ${rowsHtml}
    `;
  }

  // ===========================================================================
  // 10. CREACIÓN Y SUBIDA DE NUEVAS GUÍAS (INDEXADOR)
  // ===========================================================================
  addSubtemaRow() {
    const item = document.createElement('div');
    item.className = 'dynamic-item-card';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-dim);">Nuevo Subtema</span>
        <button type="button" class="btn-icon-subtle" onclick="this.closest('.dynamic-item-card').remove()" title="Eliminar fila">✕</button>
      </div>
      <input type="text" class="subtema-titulo" placeholder="Título del subtema (Ej: Elementos típicos)" required>
      <textarea rows="2" class="subtema-contenido" placeholder="Explicación jurídica..." required></textarea>
    `;
    this.subtemasInputsContainer.appendChild(item);
  }

  addQuizRow() {
    const item = document.createElement('div');
    item.className = 'dynamic-item-card';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-dim);">Nueva Pregunta</span>
        <button type="button" class="btn-icon-subtle" onclick="this.closest('.dynamic-item-card').remove()" title="Eliminar fila">✕</button>
      </div>
      <input type="text" class="quiz-q" placeholder="Pregunta jurídica" required>
      <input type="text" class="quiz-note" placeholder="Pista orientativa (opcional)">
      <div class="quiz-answers-grid">
        <input type="text" class="quiz-opt-0" placeholder="Opción A (Respuesta Correcta)" required>
        <input type="text" class="quiz-opt-1" placeholder="Opción B" required>
        <input type="text" class="quiz-opt-2" placeholder="Opción C" required>
        <input type="text" class="quiz-opt-3" placeholder="Opción D" required>
      </div>
      <input type="text" class="quiz-why" placeholder="Justificación jurídica / ¿por qué es correcta?" required>
    `;
    this.quizInputsContainer.appendChild(item);
  }

  addCardRow() {
    const item = document.createElement('div');
    item.className = 'dynamic-item-card';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-dim);">Nueva Tarjeta de Memoria</span>
        <button type="button" class="btn-icon-subtle" onclick="this.closest('.dynamic-item-card').remove()" title="Eliminar fila">✕</button>
      </div>
      <input type="text" class="card-pregunta" placeholder="Frente: Concepto o Pregunta" required>
      <textarea rows="2" class="card-respuesta" placeholder="Reverso: Definición clave o fundamento" required></textarea>
    `;
    this.cardsInputsContainer.appendChild(item);
  }

  handleFormSubmit() {
    const title = document.getElementById('formTitle').value.trim();
    const materia = document.getElementById('formMateria').value.trim();
    const subtitle = document.getElementById('formSubtitle').value.trim();
    const tagsRaw = document.getElementById('formTags').value.trim();
    const resumen = document.getElementById('formResumen').value.trim();

    // Recoger subtemas
    const temas = [];
    this.subtemasInputsContainer.querySelectorAll('.dynamic-item-card').forEach(card => {
      const tTitle = card.querySelector('.subtema-titulo')?.value.trim();
      const tContent = card.querySelector('.subtema-contenido')?.value.trim();
      if (tTitle && tContent) {
        temas.push({ title: tTitle, content: tContent });
      }
    });

    // Recoger preguntas de quiz
    const quiz = [];
    this.quizInputsContainer.querySelectorAll('.dynamic-item-card').forEach(card => {
      const q = card.querySelector('.quiz-q')?.value.trim();
      const note = card.querySelector('.quiz-note')?.value.trim();
      const opt0 = card.querySelector('.quiz-opt-0')?.value.trim();
      const opt1 = card.querySelector('.quiz-opt-1')?.value.trim();
      const opt2 = card.querySelector('.quiz-opt-2')?.value.trim();
      const opt3 = card.querySelector('.quiz-opt-3')?.value.trim();
      const why = card.querySelector('.quiz-why')?.value.trim();

      if (q && opt0 && opt1) {
        quiz.push({
          q,
          note: note || '',
          a: [opt0, opt1, opt2 || 'Otra opción', opt3 || 'Ninguna de las anteriores'],
          correct: 0,
          why: why || 'Respuesta correcta de acuerdo a la legislación aplicable.'
        });
      }
    });

    // Recoger tarjetas
    const cards = [];
    this.cardsInputsContainer.querySelectorAll('.dynamic-item-card').forEach(card => {
      const q = card.querySelector('.card-pregunta')?.value.trim();
      const a = card.querySelector('.card-respuesta')?.value.trim();
      if (q && a) {
        cards.push([q, a]);
      }
    });

    const tags = tagsRaw ? tagsRaw.split(',').map(s => s.trim()).filter(Boolean) : [materia];

    // Construir objeto de guía
    const newGuide = {
      id: 'custom-' + Date.now(),
      title,
      materia,
      category: materia,
      subtitle,
      tags,
      resumen: {
        lead: resumen,
        blocks: [],
        callout: 'Guía personalizada creada por el usuario.'
      },
      temas,
      quiz,
      cards
    };

    const savedGuide = this.state.addGuide(newGuide);
    this.createGuideForm.reset();
    this.showToast(`¡Guía "${savedGuide.title}" indexada exitosamente! 🎉`);

    // Actualizar catálogo y abrirla directamente
    this.renderCatalog();
    this.navigateTo('guia', savedGuide.id);
  }

  // ===========================================================================
  // 11. IMPORTACIÓN / EXPORTACIÓN JSON
  // ===========================================================================
  initJsonUploadEvents() {
    this.fileDropzone.addEventListener('click', () => this.jsonFileInput.click());

    this.fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.fileDropzone.classList.add('dragover');
    });

    this.fileDropzone.addEventListener('dragleave', () => {
      this.fileDropzone.classList.remove('dragover');
    });

    this.fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      this.fileDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        this.readJsonFile(e.dataTransfer.files[0]);
      }
    });

    this.jsonFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        this.readJsonFile(e.target.files[0]);
      }
    });

    this.btnProcessJsonUpload.addEventListener('click', () => {
      const text = this.jsonTextInput.value.trim();
      if (!text) {
        this.showToast("Pega un JSON válido o sube un archivo", "error");
        return;
      }
      try {
        const parsed = JSON.parse(text);
        this.importParsedGuide(parsed);
      } catch (err) {
        this.showToast("Error de formato JSON: " + err.message, "error");
      }
    });

    this.btnDownloadSampleJson.addEventListener('click', () => {
      const sample = {
        title: "Derecho Mercantil: Títulos y Operaciones de Crédito",
        materia: "Derecho Mercantil",
        subtitle: "Letra de cambio, pagaré, cheque y endoso cambiario",
        tags: ["Pagaré", "Cheque", "Endoso", "Protesto"],
        resumen: {
          lead: "Los títulos de crédito son cosas mercantiles que incorporan un derecho literal y autónomo...",
          blocks: [
            { "title": "Literalidad", "desc": "El derecho se mide exactamente por el tenor literal del documento." },
            { "title": "Autonomía", "desc": "Cada poseedor de buena fe adquiere un derecho independiente de los anteriores." }
          ],
          callout: "Regulado en la Ley General de Títulos y Operaciones de Crédito."
        },
        temas: [
          { "title": "1. El Pagaré", "content": "Título de crédito que contiene la promesa incondicional de pagar una suma determinada..." },
          { "title": "2. El Endoso", "content": "Acto formal mediante el cual se transmite el título en propiedad, procuración o garantía." }
        ],
        quiz: [
          {
            q: "¿Cuál es el efecto del endoso en propiedad?",
            note: "Modalidad ordinaria de transmisión cambiaria.",
            a: [
              "Transfiere la propiedad del título y todos los derechos a él inherentes.",
              "Solo faculta al endosatario para cobrar judicialmente.",
              "Cancela la obligación mercantil.",
              "Exime de responsabilidad al obligado principal."
            ],
            correct: 0,
            why: "El endoso en propiedad transfiere plenamente el dominio del título y sus derechos incorporados."
          }
        ],
        cards: [
          ["¿Qué es la incorporación en un título de crédito?", "Consiste en que el derecho está consustanciado con el documento físico; sin título no hay ejercicio de derecho."],
          ["¿Cuáles son los tipos de endoso?", "En propiedad, en procuración (al cobro) y en garantía (en prenda)."]
        ]
      };

      const blob = new Blob([JSON.stringify(sample, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'plantilla-guia-iurisguides.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  readJsonFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        this.jsonTextInput.value = JSON.stringify(parsed, null, 2);
        this.showToast(`Archivo "${file.name}" cargado. Haz clic en Validar e Indexar.`);
      } catch (err) {
        this.showToast("El archivo seleccionado no contiene un JSON válido", "error");
      }
    };
    reader.readAsText(file);
  }

  importParsedGuide(data) {
    if (Array.isArray(data)) {
      // Importación múltiple
      data.forEach(g => this.state.addGuide(g));
      this.showToast(`¡Se indexaron ${data.length} guías con éxito!`);
    } else if (data && data.title) {
      const saved = this.state.addGuide(data);
      this.showToast(`¡Guía "${saved.title}" indexada con éxito!`);
      this.uploadModal.classList.add('hidden');
      document.body.style.overflow = '';
      this.renderCatalog();
      this.navigateTo('guia', saved.id);
      return;
    } else {
      this.showToast("El JSON debe contener al menos la propiedad 'title'", "error");
      return;
    }

    this.uploadModal.classList.add('hidden');
    document.body.style.overflow = '';
    this.renderCatalog();
    this.navigateTo('catalogo');
  }

  exportAllGuidesJson() {
    const data = JSON.stringify(this.state.allGuides, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respaldo-guias-derecho-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("Respaldo JSON descargado correctamente");
  }

  shareCurrentGuide() {
    const guide = this.state.activeGuide;
    if (!guide) return;
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      this.showToast("Enlace de la guía copiado al portapapeles 📋");
    }).catch(() => {
      this.showToast("Enlace: " + url);
    });
  }

  deleteCurrentCustomGuide() {
    const guide = this.state.activeGuide;
    if (!guide || !guide.isCustom) return;

    if (confirm(`¿Deseas eliminar permanentemente la guía "${guide.title}"?`)) {
      this.state.deleteGuide(guide.id);
      this.showToast("Guía eliminada");
      this.navigateTo('catalogo');
    }
  }

  // ===========================================================================
  // 12. TEMA OSCURO / CLARO
  // ===========================================================================
  initTheme() {
    const savedTheme = localStorage.getItem(this.state.STORAGE_KEY_THEME) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.state.STORAGE_KEY_THEME, next);
  }

  // ===========================================================================
  // 13. TOAST NOTIFICACIONES
  // ===========================================================================
  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : 'ℹ'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.iurisApp = new IurisApp();
});
