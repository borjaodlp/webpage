# Personal Reference Site para GitHub Pages

Este repositorio es un sitio estático de referencia en HTML/CSS/JS para proyectos personales, boletines e historias. Ideal para desplegar en GitHub Pages sin backend.

## 📁 Estructura principal

- archivos raíz:
  - `index.html` (inicio)
  - `style.css` (estilos globales)
  - `script.js` (interactividad y navegación responsiva)
  - `global.js` (funciones adicionales opcionales)
- `projects/`: páginas de sección y contenido de proyectos
  - `boletines.html`, `novelas.html`, `franciscoh.html`
  - subcarpetas con páginas de contenido (`boletines/`, `cronica_huracan/`, `fran-cis-coh/`, etc.)

> Mantén las rutas relativas correctas (`../`) al usar archivos desde subdirectorios.

## 🧪 Prueba local rápida

1. Abre `index.html` en un navegador o usa servidor local.
2. Verifica navegación, enlaces y carga de recursos.
3. En subcarpetas, comprueba que `script.js` y `style.css` se carguen con rutas relativas.

Servidor local opcional:
- Python 3: `python -m http.server 8000`
- Node.js: `serve .`

## 🚀 Despliegue en GitHub Pages

1. Subir al repo (`git add .`, `git commit`, `git push`).
2. En GitHub: Settings → Pages → Source: main / root.
3. Esperar actualización y verificar URL.

- Sitio de usuario: `https://yourusername.github.io/`
- Sitio de proyecto: `https://yourusername.github.io/repo-name/`

## 🔍 Buenas prácticas

- Rutas de recursos deben revisarse en cada página y subcarpeta.
- Evita referencias a archivos inexistentes.
- Usa un solo punto de entrada (`index.html`) para pruebas iniciales.

## ℹ️ Nota

Este README está diseñado para ser breve y práctico: estructura general + pruebas básicas + despliegue. El contenido detallado de cada página se gestiona directamente en los archivos HTML dentro de `projects/` y subcarpetas.
---

## 🔍 Cambios frecuentes que revisar antes de deploy

- Rutas de recursos en archivos dentro de carpetas (usa `../` según ubicación).
- Existencia de todos los activos referenciados (`images/`, JS, CSS).
- El sitemap/indice si lo usas manualmente.
- Quitar comentarios personales o scripts de depuración temporales.

---

## ℹ️ Nota de pruebas automatizadas

Este proyecto es un sitio estático simple sin tests automatizados configurados. Para añadir pruebas, puedes usar:

- Cypress / Playwright para pruebas E2E de UI
- ESLint / Stylelint para validación de calidad de código
- GitHub Actions para automatizar build/test/despliegue

---

## ✅ Checklist rápido (Test + Deploy)

- [ ] `index.html` abre sin 404
- [ ] `style.css` aplica estilos
- [ ] `script.js` carga sin errores en consola
- [ ] Enlace `projects/boletines.html` funciona
- [ ] En GitHub Pages, `index.html` responde en URL final
- [ ] Fundamentos responsive están en mobile/desktop

### 2. Previsualización con Texto (para Historias)

```html
<div class="card">
    <div class="card-header">
        <h3>Título de la Historia</h3>
        <span class="card-date">22 Mar 2026</span>
    </div>
    <div class="card-preview-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </div>
    <p>Descripción breve...</p>
    <a href="enlace.html">Leer Completo</a>
</div>
```

El texto es **automáticamente scrolleable** si excede 120px de altura.

---

## 🎨 Configurar Imagen de Fondo

### En HTML

Agrega la clase `has-bg-image` al `<body>`:

```html
<body class="has-bg-image">
```

### En CSS

En `style.css`, la sección `body.has-bg-image` ya está lista. Solo coloca tu imagen en la raíz:

```css
body.has-bg-image {
    background: linear-gradient(rgba(245, 249, 247, 0.85), rgba(232, 243, 240, 0.85)), 
                url('background.png');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
```

**Reemplaza** `background.png` con tu imagen. El degradado (0.85 = 85% opacidad) oscurece la imagen para mejorar legibilidad.

---

## ☰ Navegación Collapsible

La navegación se oculta automáticamente en pantallas menores de 768px y muestra un botón con símbolo **☰**.

### Cómo Funciona

1. **`script.js`** detecta clics en el botón **☰**
2. Abre/cierra la navegación con animación suave
3. Se cierra automáticamente al hacer clic en un enlace

**No requiere configuración adicional** — funciona automáticamente en todas las páginas que incluyan `<script src="../script.js"></script>`.

---

## 💾 Desplegar en GitHub Pages

### 1. Crear o Configurar Repositorio

**Opción A: Sitio de usuario**
```bash
# Nombra el repo: yourusername.github.io
# El sitio estará disponible en: https://yourusername.github.io/
```

**Opción B: Repositorio normal**
```bash
# En Settings → Pages → Source: main branch /root
# El sitio estará disponible en: https://yourusername.github.io/repo-name/
```

### 2. Subir Archivos

```bash
git add .
git commit -m "Inicial: sitio de referencia personal"
git push origin main
```

### 3. Esperar

GitHub Pages actualiza en 1-2 minutos. Visita tu URL y ¡listo!

---

