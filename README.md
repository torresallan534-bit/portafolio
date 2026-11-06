# Panda Haus — Landing Page Comercial de Conversión

Landing page comercial de alta conversión de **Panda Haus**, estudio de diseño visual y desarrollo de páginas web comerciales para restaurantes, marcas y negocios locales.

## Stack Tecnológico
- **Framework:** Next.js (App Router)
- **Tipografía Oficial:** `Space_Grotesk` (titulares, precios, navbar) e `Inter` (cuerpo, microcopy)
- **Estilos:** Tailwind CSS con la paleta oficial única:
  - Negro Profundo (`#0D0D0D`)
  - Grafito (`#2B2F33`)
  - Gris Humo (`#F2F4F3`)
  - Blanco Puro (`#FFFFFF`)
  - Verde Menta / Acento Primario (`#3DDC97`)
- **Iconografía:** `lucide-react`
- **Optimización de Medios:** Next/Image y WebP

## Arquitectura de Secciones
- `Navbar` con logotipo oficial de Panda Haus (`/brand/panda-haus-logo.svg`) y 4 enlaces exactos: Servicios, Portafolio, Precios, Contacto.
- `Hero` con titular comercial y badges de garantías de entrega (24-48h, 100% optimizado móvil/QR, revisiones incluidas).
- `Servicios` en grid simétrico de 4 tarjetas comerciales.
- `Portafolio` con mockups CSS de dispositivos (`<DeviceMockup>` para smartphone y navegador) y filtros SSR: `Todos`, `Flyers & Menús`, `Landing Pages`, `Branding`.
- `Precios` con 3 paquetes comparativos en pesos colombianos (`Pack Arranque Visual`, `Pack Menú Pro`, `Pack Web Comercial`).
- `Contacto` con brief directo hacia WhatsApp.
- `Botón Flotante de WhatsApp` fijo en `bottom-6 right-6`.
- `Footer` corporativo con copyright exacto 2026, redes sociales (Instagram, TikTok) y acceso discreto a `/admin`.
