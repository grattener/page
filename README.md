# IurisGuides · Biblioteca Principal de Guías de Derecho

Plataforma interactiva de estudio jurídico con diseño moderno, indexador de guías dinámico, cuestionarios didácticos y flashcards 3D. No requiere servidor backend: todo funciona directamente en el navegador con persistencia en `localStorage`.

## ✨ Características Principales

1. **Hub Principal de Guías (Catálogo e Índice)**:
   - Vista principal con todas tus guías organizadas en un catálogo moderno y responsivo.
   - Filtros instantáneos por materia (*Derecho Penal*, *Derecho Civil*, *Constitucional y Amparo*, etc.).
   - Buscador rápido con atajo de teclado (`⌘K` o `Ctrl+K`) que busca en títulos, conceptos, artículos y etiquetas.
   - Métricas en tiempo real: número de subtemas, preguntas y tarjetas por guía.

2. **Indexador y Creador de Guías ("Subir Guía")**:
   - **Editor Visual Guiado**: Crea nuevas guías paso a paso definiendo materia, resumen, subtemas en acordeón, preguntas de cuestionario con justificación jurídica y tarjetas de memoria.
   - **Importador de Archivos / JSON**: Carga archivos `.json` o pega la estructura directamente para importar una o varias guías en un solo clic.
   - **Indexación Inmediata**: Al guardar, la guía se indexa en la pantalla principal y se almacena en el navegador (`localStorage`).
   - **Exportación / Respaldo**: Descarga tus guías en formato JSON para respaldarlas o compartirlas.

3. **Entorno de Estudio Completo por Guía**:
   - 📖 **Resumen General**: Panorama ejecutivo, figuras dogmáticas comparadas y notas de advertencia legal.
   - 📑 **Desarrollo por Subtemas**: Acordeones legibles y organizados con botones de expandir/colapsar todos.
   - 🎯 **Cuestionario Interactivo**: Preguntas de opción múltiple con barra de avance, evaluación inmediata, fundamento explicativo y pantalla de resultados con medalla.
   - 🗂 **Tarjetas 3D (Flashcards)**: Animación realista de volteo 3D (clic o barra espaciadora), navegación con flechas y marcadores de "Aún repasando" / "¡Lo domino!".

4. **Diseño y Estética Premium**:
   - Paleta de diseño Slate/Indigo/Emerald con soporte para **Modo Oscuro** y **Modo Claro** con guardado de preferencia.
   - Tipografía moderna (*Outfit* y *Plus Jakarta Sans*).
   - Glassmorphism, animaciones sutiles y tarjetas adaptables a pantallas móviles, tabletas y computadoras.

## 🚀 Cómo abrirlo

1. Abre [index.html](file:///Users/meza/Documents/PROYECTOS/page/page/index.html) en cualquier navegador (Chrome, Safari, Firefox, Edge).
2. También puedes usar extensiones como *Live Server* en VS Code o cualquier servidor local (`python3 -m http.server 8080`).

## 🌐 Publicación en GitHub Pages

1. Sube los archivos `index.html`, `styles.css`, `app.js` y `guias/` a tu repositorio en GitHub.
2. Ve a **Settings → Pages** en tu repositorio.
3. En **Build and deployment**, selecciona **Deploy from a branch**, elige la rama `main` y la carpeta `/(root)`.
4. ¡Listo! Tu biblioteca estará disponible públicamente.
