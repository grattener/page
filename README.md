# Mi biblioteca de Derecho

Sitio estático y adaptable a móviles para guías de estudio, cuestionarios, tarjetas de memoria y búsqueda de conceptos. No necesita servidor ni instalación de dependencias.

## Probar en tu computadora
Abre `index.html` en un navegador. Para desarrollo local puedes usar la extensión Live Server de VS Code, pero no es necesaria para publicarlo.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css`, `app.js` y este README a la raíz del repositorio.
3. Entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige `main` y `/(root)` y pulsa **Save**.
6. Espera a que termine la publicación. La dirección aparecerá en la sección Pages.

## Personalizar el contenido
- Cambia textos, materias y apartados en `index.html`.
- Modifica las preguntas en el arreglo `quiz` de `app.js`.
- Modifica las tarjetas en el arreglo `cards` de `app.js`.
- Amplía los conceptos del buscador en el arreglo `searchable` de `app.js`.
- Los colores principales están al inicio de `styles.css` en las variables CSS.

## Importante
Esta plantilla contiene ejemplos orientativos, no asesoría jurídica. Verifica las definiciones y artículos con la legislación vigente, la jurisdicción correspondiente y los materiales de clase. El progreso se guarda en `localStorage` del navegador y no se sincroniza entre dispositivos. La imagen de portada se carga desde Unsplash, por lo que requiere conexión a internet; puedes cambiarla o quitarla en `styles.css`.
