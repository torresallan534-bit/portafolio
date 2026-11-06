# WORKFLOW: Sincronización y Validación del Portafolio Comercial de Panda Haus

Este workflow audita y sincroniza los activos del portafolio comercial de Panda Haus:
1. Valida activos en `public/projects/`.
2. Actualiza `data/projects.json` bajo las 4 categorías oficiales:
   - `Todos`
   - `Flyers & Menús`
   - `Landing Pages`
   - `Branding`
3. Aplica la voz corporativa de Panda Haus sin menciones personales.
4. Valida tipografía (`Space_Grotesk` / `Inter`) y paleta menta/grafito/negro profundo (`#0D0D0D`, `#2B2F33`, `#F2F4F3`, `#FFFFFF`, `#3DDC97`).
5. Ejecuta `npm run build` para garantizar cero errores.
