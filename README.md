# WebEscences - Tienda de Velas Aromáticas

E-commerce moderno y responsive para venta de velas aromáticas artesanales, difusores, piezas de yeso y souvenirs.

## 🚀 Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados
- **GitHub Pages** - Hosting y despliegue

## 📋 Descripción

Aplicación web de una sola página (SPA) que permite navegar entre diferentes secciones de productos mediante un sistema de pestañas. Incluye carrito de compras funcional con integración a WhatsApp para finalizar compras.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx     # Navegación con menú hamburguesa (mobile)
│   ├── Inicio.jsx     # Página de bienvenida
│   ├── Velas.jsx      # Catálogo de velas
│   ├── Aromatizadores.jsx
│   ├── PiezasYeso.jsx
│   ├── Souvenirs.jsx
│   ├── Contacto.jsx
│   ├── ProductCard.jsx  # Tarjeta de producto reutilizable
│   └── Carrito.jsx      # Carrito de compras
├── context/
│   └── CartContext.jsx  # Context API para gestión del carrito
├── data/               # Datos de productos
│   ├── velas.js
│   ├── aromatizadores.js
│   ├── piezasYeso.js
│   └── souvenirs.js
└── image/              # Imágenes de productos
```

## 🌐 Estado del Proyecto

✅ **Desplegado y en funcionamiento**

La aplicación está desplegada en GitHub Pages y disponible en producción.

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run deploy` - Despliegue a GitHub Pages
