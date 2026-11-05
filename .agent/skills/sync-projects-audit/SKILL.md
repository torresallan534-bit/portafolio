---
name: sync-projects-audit
description: Escanea carpetas locales de clientes, elimina duplicados por hash y actualiza JSON y estadísticas sin alucinar rutas.
---

Sigue estrictamente esta secuencia de pasos sin saltarte ninguno:

1. **Inspección Real:** Lista las carpetas dentro del directorio fuente de clientes para verificar qué archivos existen realmente en disco.
2. **Ejecución del Script:** Corre `npm run sync-projects` en la terminal integrada.
3. **Auditoría de Duplicados y Rutas:**
   - Abre el archivo `data/projects.json` generado.
   - Verifica que todas las rutas `assetPath` comiencen con `/projects/...` (usando `/` y no `\`) y que no existan prefijos repetidos como `branding-branding-`.
   - Comprueba que cada archivo listado en el JSON exista físicamente dentro de `public/projects/`.
4. **Verificación de Estadísticas:** Revisa `data/stats.json` y confirma que `totalClients`, `totalProjects` y `totalDeliverables` coincidan matemáticamente con la longitud de los arreglos en `data/projects.json`.
5. **Prueba de Compilación:** Ejecuta `npx tsc --noEmit` para asegurar que el JSON cumple al 100% con las interfaces de `types/projects.ts`.
