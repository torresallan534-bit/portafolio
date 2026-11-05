# REGLAS ESTRICTAS DEL PROYECTO (ANTI-ALUCINACIÓN)

## 1. Verificación de Sistema de Archivos (Cero Suposiciones)
- PROHIBIDO inventar, adivinar o asumir rutas de imágenes, videos o componentes.
- Antes de referenciar cualquier archivo en `public/projects/` o en las carpetas de origen, DEBES ejecutar un comando de listado (`dir` / `ls` o script de Node) para confirmar el nombre exacto en disco.
- Atención a sistemas Windows: maneja rutas siempre con `path.join()` o `path.posix` al exportar URLs hacia JSON para evitar barras invertidas (`\`) rotas en la web.

## 2. Arquitectura Inmutable de Proyectos
- NUNCA agrupes todas las disciplinas de un cliente en una sola tarjeta o modal.
- Regla 1 a 1: Cada subcarpeta de disciplina dentro de un cliente (`videos`, `menus`, `flyers`, `carruseles`, `ebooks`, `miniaturas`, `branding`) es una unidad de proyecto independiente en `data/projects.json`.
- NUNCA generes datos dummy ("Lorem ipsum", "Proyecto Ejemplo", rutas `/placeholder.jpg`). Usa exclusivamente los clientes reales existentes en el directorio local (`allan zoo`, `axis pro`, `nails pastel`, `barberia the king`, `arepa secreta`, `taqueria df`).

## 3. Fuente Única de Verdad (Single Source of Truth)
- `data/projects.json` y `data/stats.json` NO se editan manualmente inventando estructuras: se generan y actualizan a través de `scripts/sync-projects.mjs`.
- Si necesitas cambiar la estructura de datos, primero actualiza `types/projects.ts`, luego el script `scripts/sync-projects.mjs`, ejecútalo en terminal y verifica el JSON resultante antes de tocar los componentes React.

## 4. Validación Obligatoria Post-Cambio
- Ninguna tarea se considera terminada hasta ejecutar `npm run build` (o `npx tsc --noEmit`) en la terminal y confirmar **0 errores**.
- Si un cambio falla al compilar, lee el stack trace real, corrige la causa raíz y vuelve a compilar antes de responder al usuario.
- No elimines funcionalidades existentes (como enlaces de WhatsApp configurados, paletas de colores HEX o metadatos SEO) a menos que se pida explícitamente.
