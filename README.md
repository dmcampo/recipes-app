# Recetas Online - Portal Gastronómico

**Recetas Online** es una aplicación web responsiva inspirada en portales gastronómicos de alta gama. Construida con **React** y **Vite**, ofrece una experiencia de usuario fluida mediante una interfaz limpia, transiciones suaves, soporte automático para modo oscuro y persistencia de recetas favoritas.

La aplicación consume datos en tiempo real de la API de **TheMealDB** empleando la biblioteca **Axios**.

---

## 🚀 Características Principales

*   **Búsqueda en Tiempo Real:** Filtra recetas al instante mediante una barra de búsqueda optimizada con *Debounce* (400ms) para evitar solicitudes HTTP innecesarias.
*   **Filtro por Categorías:** Clasifica recetas por tipo de platillo (Búsqueda general, Postres, Mariscos, etc.).
*   **Detalle Completo de Recetas:** Ficha visual de ingredientes estructurados en dos columnas, instrucciones de preparación y videotutorial interactivo de YouTube.
*   **Sistema de Favoritos:** Guarda y remueve recetas de favoritos con un botón de corazón interactivo. Los datos se persisten en el navegador a través de `localStorage` y actualizan un contador en tiempo real en la barra de navegación.
*   **Cargas Optimizadas (UX):** Tarjetas simuladas de carga (*Skeleton Cards*) con animación animada *shimmer* para evitar el desplazamiento abrupto del diseño (Content Layout Shift).
*   **Diseño Premium y Responsivo:** Tipografías elegantes (*Playfair Display* e *Inter*), microanimaciones interactivas al pasar el cursor y adaptabilidad completa a móviles y ordenadores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

*   **Core:** React JS (v18)
*   **Entorno de Construcción (Build Tool):** Vite JS
*   **Enrutamiento SPA:** React Router DOM (v6)
*   **Cliente HTTP:** Axios
*   **Estilos:** CSS Puro (Vanilla CSS) con variables de diseño CSS y adaptabilidad a temas de sistema
*   **Persistencia:** LocalStorage (API de almacenamiento web)
*   **Fuente de Datos:** TheMealDB API

---

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema local:
*   [Node.js](https://nodejs.org/) (versión 18.0.0 o superior recomendada)
*   [NPM](https://www.npmjs.com/) (generalmente instalado junto a Node.js)

---

## ⚙️ Instalación y Configuración

Sigue estos sencillos pasos para tener la aplicación ejecutándose localmente:

1.  **Clona el repositorio o accede a la carpeta del proyecto:**
    ```bash
    cd recipes-app
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

---

## 💻 Comandos de Ejecución

Una vez completada la instalación, puedes hacer uso de los siguientes comandos mediante la consola:

### Ejecutar Servidor de Desarrollo
Para lanzar el servidor de desarrollo local con recarga rápida (HMR):
```bash
npm run dev
```
*   El servidor se iniciará típicamente en: `http://localhost:5173/`

### Compilar para Producción
Para generar los archivos listos para despliegue y producción optimizada (empaquetados en la carpeta `/dist`):
```bash
npm run build
```

### Previsualizar Compilación de Producción
Para testear localmente el compilado final de producción generado con el comando anterior:
```bash
npm run preview
```

---

## 📂 Estructura del Proyecto

```
recipes-app/
├── index.html           # Plantilla base del DOM y metadatos SEO
├── package.json         # Dependencias y scripts de NPM
├── vite.config.js       # Configuración básica de Vite
├── DOCUMENTACION_TECNICA.docx # Documentación detallada paso a paso
└── src/
    ├── main.jsx         # Punto de entrada de renderizado React
    ├── App.jsx          # Enrutador principal y layout
    ├── index.css        # Estilos globales y variables CSS de diseño
    ├── context/
    │   └── FavoritesContext.jsx # Proveedor global del estado de favoritos
    ├── hooks/
    │   └── useDebounce.js       # Hook de debounce para el buscador
    ├── services/
    │   └── mealApi.js           # Consultas HTTP con Axios a TheMealDB
    ├── components/      # Componentes reutilizables (Navbar, Cards, Skeletons, etc.)
    ├── pages/           # Vistas de nivel de página (Home, Detail, Favorites)
    └── styles/          # Hojas de estilo locales de las vistas
```

---

## 📄 Documentación Técnica Detallada
Para una comprensión exhaustiva de **para qué sirve cada archivo del código, su función paso a paso, qué implementa, cómo funciona y por qué se estructuró así**, consulta el documento formal generado en la raíz del proyecto:
*   [DOCUMENTACION_TECNICA.docx](./DOCUMENTACION_TECNICA.docx) (Documento de Microsoft Word)
