# DIRECTRICES INMUTABLES Y REGLAS DEL PROYECTO — PANDA HAUS

## 1. Voz e Identidad Corporativa (Anti-Personal / Pro-Estudio)
- PROHIBIDO usar primera persona singular ("soy", "mi portafolio", "yo diseñé", "Allan Torres").
- Toda la comunicación debe ser institucional, de agencia y estudio de diseño visual y desarrollo web: **"Panda Haus"**, **"ayudamos"**, **"diseñamos"**, **"nuestros servicios"**, **"escríbenos"**.
- Cero menciones a nombres personales en la interfaz pública, metadatos SEO o textos comerciales.

## 2. Sistema de Diseño Inmutable y Paleta Cromática
- **Paleta Oficial Única (Cero Ámbar / Cero Dorado):**
  * **Negro Profundo (`#0D0D0D`):** Fondo principal y textos de contraste sobre verde menta.
  * **Grafito (`#2B2F33`):** Superficies de tarjetas, marcos de dispositivos y bordes estructurales.
  * **Gris Humo (`#F2F4F3`):** Textos secundarios suaves, microcopy y bloques de alto contraste.
  * **Blanco Puro (`#FFFFFF`):** Titulares principales (H1, H2, H3), precios destacados y elementos primarios.
  * **Verde Menta (`#3DDC97` - Acento Primario):** CTAs principales, badges activos, iconos de valor, indicadores de pulso y bordes destacados.
- **Tipografía Oficial (next/font/google):**
  * `Space_Grotesk` (pesos 500, 600, 700): H1, H2, H3, precios, botones destacados y navbar.
  * `Inter` (pesos 400, 500, 600): párrafos, descripciones comerciales, listas de beneficios y microcopy.

## 3. Enfoque Comercial en Portafolio y Servicios
- PROHIBIDO mencionar tecnologías internas como "Next.js", "MongoDB", "Payload", "React" o jerga técnica de desarrollo en las tarjetas visibles al cliente.
- Todo texto debe expresar **beneficios comerciales tangibles**: incremento en ventas, captación de comensales, agilidad en pedidos por WhatsApp, cartas QR instantáneas y velocidad de carga.

## 4. Categorías Oficiales de Filtro en Portafolio
- `Todos`
- `Flyers & Menús` (agrupa flyers promocionales, menús gastronómicos, cartas digitales, carruseles y piezas de restaurantes/negocios locales)
- `Landing Pages` (páginas web comerciales de conversión y ventas)
- `Branding` (identidad de marca, logotipos, empaques y manuales visuales)

## 5. Verificación de Sistema de Archivos y Cero Suposiciones
- PROHIBIDO inventar rutas falsas. Todo archivo referenciado debe validarse en disco.
- El logotipo oficial de la marca reside en `public/brand/panda-haus-logo.svg`.
- Toda compilación debe finalizar con `npm run build` con **0 errores** de TypeScript y ESLint.
