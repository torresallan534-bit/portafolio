# Skills Operativas del Proyecto

Guía de habilidades y protocolos de ejecución técnica para el desarrollo y mantenimiento del portafolio.

---

## 1. Skill: Sincronización y Auditoría de Proyectos (`sync-projects-audit`)

> **Descripción:** Escanea carpetas locales de clientes, elimina duplicados por hash y actualiza JSON y estadísticas sin alucinar rutas.

### Protocolo de Ejecución:
1. **Inspección Real:** Lista las carpetas dentro del directorio fuente de clientes para verificar qué archivos existen realmente en disco.
2. **Ejecución del Script:** Corre `npm run sync-projects` en la terminal integrada.
3. **Auditoría de Duplicados y Rutas:**
   - Abre el archivo `data/projects.json` generado.
   - Verifica que todas las rutas `assetPath` comiencen con `/projects/...` (usando `/` y no `\`) y que no existan prefijos repetidos como `branding-branding-`.
   - Comprueba que cada archivo listado en el JSON exista físicamente dentro de `public/projects/`.
4. **Verificación de Estadísticas:** Revisa `data/stats.json` y confirma que `totalClients`, `totalProjects` y `totalDeliverables` coincidan matemáticamente con la longitud de los arreglos en `data/projects.json`.
5. **Prueba de Compilación:** Ejecuta `npx tsc --noEmit` para asegurar que el JSON cumple al 100% con las interfaces de `types/projects.ts`.

---

## 2. Skill: Calidad Visual y Arquitectura UI en Next.js (`nextjs-ui-quality`)

> **Descripción:** Modifica componentes visuales en Next.js garantizando tipado estricto, simetría visual y cero errores de compilación.

### Protocolo de Ejecución:
1. **Lectura Previa:** Lee siempre el contenido completo del componente actual y de `types/projects.ts` antes de escribir código nuevo. No reescribas a ciegas.
2. **Consistencia Visual:**
   - Verifica que todas las tarjetas de una misma grilla tengan exactamente la misma estructura de elementos (badge superior, título, descripción, footer alineado con `mt-auto`).
   - En modales: respeta siempre la proporción del archivo (`aspect-video` para 16:9, `aspect-[9/16]` para reels/shorts verticales, paginador para carruseles/ebooks).
3. **Control de Hidratación y Directivas:** Si usas `useState`, `useEffect` o eventos `onClick`, verifica que `'use client'` esté en la línea 1 del archivo.
4. **Cierre Determinista:** Ejecuta `npm run build`. Si hay algún warning de imágenes o error de TypeScript, corrígelo inmediatamente antes de finalizar tu turno.
