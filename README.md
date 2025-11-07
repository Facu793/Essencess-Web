# WebEscences - Tienda de Velas Aromáticas

Una página web moderna para vender velas aromáticas artesanales, construida con React + Vite.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🕯️ Sistema de navegación por pestañas (Inicio, Velas, Aromatizadores, Contacto)
- 🕯️ Galería de productos con fotos y descripciones
- 🎨 Filtros por categoría de productos
- 📱 Totalmente responsive para móviles y tablets
- 🎯 Interfaz intuitiva y fácil de usar
- 📱 Enlaces a Instagram y WhatsApp en la sección de contacto

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 📁 Estructura del Proyecto

```
WebEscences/
├── src/
│   ├── components/           # Componentes React
│   │   ├── Header.jsx        # Navegación con pestañas
│   │   ├── Inicio.jsx        # Página de inicio con descripción
│   │   ├── Velas.jsx         # Catálogo de velas
│   │   ├── Aromatizadores.jsx # Catálogo de aromatizadores
│   │   ├── Contacto.jsx      # Sección de contacto con redes sociales
│   │   └── ProductCard.jsx   # Tarjeta de producto reutilizable
│   ├── data/
│   │   ├── velas.js          # Datos de las velas
│   │   └── aromatizadores.js # Datos de los aromatizadores
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personalización

Puedes editar los datos de los productos en:
- `src/data/velas.js` - Para las velas
- `src/data/aromatizadores.js` - Para los aromatizadores

Cada producto incluye:
- Nombre
- Descripción
- Precio
- Imagen (URL)
- Categoría

### Personalizar Contacto

Para actualizar los enlaces de redes sociales, edita `src/components/Contacto.jsx`:
- Instagram: Cambia la URL en el atributo `href` del enlace de Instagram
- WhatsApp: Cambia el número de teléfono en el enlace de WhatsApp (formato: `https://wa.me/NUMERO`)

## 📝 Notas

- Las imágenes actualmente usan URLs de Unsplash como placeholders. Puedes reemplazarlas con tus propias imágenes.
- El botón "Agregar al carrito" está preparado para futuras funcionalidades de carrito de compras.

