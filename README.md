# Personal Reference Site para GitHub Pages

Sitio estático basado en HTML/CSS/JavaScript para mostrar proyectos, boletines e historias.

## 📁 Estructura actual del proyecto

```
(raíz del repositorio)
├── global.js
├── index.html                    ← Página principal de inicio
├── style.css                     ← Estilos globales
├── script.js                     ← Interactividad (menú, animaciones, etc.)
├── README.md                     ← Documentación (este archivo)
└── projects/
    ├── boletines.html            ← Página de lista de boletines
    ├── novelas.html              ← Página de lista de novelas/historias
    ├── franciscoh.html           ← Página de proyecto específico
    ├── boletines/                ← Contenido de cada boletín
    │   ├── boletin-001.html
    │   ├── boletin-002.html
    │   ├── boletin-003.html
    │   ├── boletin-004.html
    │   ├── boletin-005.html
    │   ├── boletin-006.html
    │   ├── boletin-007.html
    │   ├── boletin-010.html
    │   ├── boletin-011.html
    │   ├── boletin-012.html
    │   ├── boletin-especial.html
    │   ├── colaboracion-boletin.html
    │   └── plantilla-boletin.html
    ├── cronica_huracan/
    │   ├── cronica.html
    │   ├── novela_1.html
    │   ├── novela_2.html
    │   └── sinopsis.html
    └── fran-cis-coh/
        ├── disenhos.html
        ├── reglamento.html
        └── disenhos/
            ├── disenho_companhero.html
            ├── disenho_complemento.html
            ├── disenho_fran_cumbre.html
            ├── disenho_fran.html
```

> Nota: los archivos existentes pueden variar con los lanzamientos. Usa esta lista como referencia básica.

---

## 🧪 Probar localmente

1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador (doble clic o arrastrar al navegador).
3. Prueba navegación, enlaces y carga de imágenes.
4. Verifica que `style.css` y `script.js` estén referenciados correctamente con rutas relativas, especialmente en subcarpetas (`projects/*`).

### Alternativa local (servidor simple)

- Con Python 3:

```bash
cd c:\webpage_git
python -m http.server 8000
```

Abrir: `http://localhost:8000`

- Con Node.js (serve):

```bash
npm install -g serve
serve .
```

---

## 🚀 Desplegar en GitHub Pages

### 1. Crear repositorio de GitHub

- Opción A (página de usuario/organización): nombre del repo `yourusername.github.io`
- Opción B (repo de proyecto): cualquier nombre, la URL será `https://yourusername.github.io/repo-name/`

### 2. Subir contenido

```bash
git add .
git commit -m "Deploy web personal"
git push origin main
```

### 3. Activar Pages en GitHub

- En repo → Settings → Pages
- Source: `main branch` (`/root`)
- Guardar y esperar 1-2 min

### 4. Verificar URL

- Usuario: `https://yourusername.github.io/`
- Proyecto: `https://yourusername.github.io/repo-name/`

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

## 🔄 Contenido Dinámico (Sin Editar HTML Después del Despliegue)

### ¿Qué Requeriría?

Para agregar contenido sin tocar HTML después del despliegue necesitarías una de estas opciones:

#### Opción 1: CMS Estático con Jekyll (Recomendado para GitHub Pages)

**Jekyll** está integrado nativamente en GitHub Pages:
- Escribe posts en Markdown
- Se convierte automáticamente a HTML
- Solo editas archivos `.md`

```
_posts/
├── 2026-03-09-primer-boletin.md
└── 2026-03-08-segunda-historia.md
```

**Ventajas**: Fácil, sin servidor, GitHub Pages lo procesa automáticamente  
**Requiere**: Aprender sintaxis YAML y Markdown (bastante sencillo)

---

#### Opción 2: Backend Dinámico

Necesitarías un servidor con:
- **Backend**: Node.js, Python, o similar  
- **Base de datos**: MongoDB, PostgreSQL
- **Hosting**: Heroku, Vercel, Railway (no GitHub Pages)

**Ejemplo conceptual**:
```javascript
// script.js cargaría contenido desde API
fetch('/api/articulos')
  .then(res => res.json())
  .then(data => {
    // Renderiza HTML dinámicamente
  });
```

**Ventajas**: Completo, sin límites  
**Requiere**: Conocimientos de backend y DevOps

---

#### Opción 3: Archivo JSON + JavaScript (Más Simple)

Crear `data.json` con contenido:
```json
{
  "articulos": [
    {
      "titulo": "Mi Artículo",
      "fecha": "2026-03-09",
      "contenido": "Lorem ipsum..."
    }
  ]
}
```

JavaScript carga y renderiza:
```javascript
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Genera HTML desde datos
  });
```

**Ventajas**: Simple, funciona en GitHub Pages  
**Requiere**: Básico JavaScript; editas solo `.json` para nuevo contenido

---

## 🚀 Próximos Pasos

1. **Crear carpeta** `projects/images/`
2. **Agregar tus imágenes** con nombres claros (sin espacios)
3. **Actualizar rutas** en HTML si es necesario
4. **Desplegar** a GitHub (arriba)

---

## 📞 Troubleshooting

### Imágenes no se ven

- ✓ Verifica que la ruta sea correcta (relativas desde `.html`)
- ✓ Usa `/` para rutas, no `\`
- ✓ Nombres sin espacios: `mi-imagen.png` no `mi imagen.png`
- ✓ Verifica la consola (F12) para errores

### Navegación no se oculta en móvil

- ✓ Verifica que `script.js` esté incluido: `<script src="../script.js"></script>`
- ✓ Abre consola (F12) y busca errores de JavaScript

### Fondo de imagen no se ve

- ✓ Ruta correcta en CSS
- ✓ La imagen existe en la carpeta raíz
- ✓ Verifica permisos en GitHub

---

**¡Tu sitio está listo para crecer!** 🌱