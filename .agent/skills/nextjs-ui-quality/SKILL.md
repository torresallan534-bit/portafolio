---
name: nextjs-ui-quality
description: Modifica componentes visuales en Next.js garantizando tipado estricto, simetría visual y cero errores de compilación.
---

1. **Lectura Previa:** Lee siempre el contenido completo del componente actual y de `types/projects.ts` antes de escribir código nuevo. No reescribas a ciegas.
2. **Consistencia Visual:**
   - Verifica que todas las tarjetas de una misma grilla tengan exactamente la misma estructura de elementos (badge superior, título, descripción, footer alineado con `mt-auto`).
   - En modales: respeta siempre la proporción del archivo (`aspect-video` para 16:9, `aspect-[9/16]` para reels/shorts verticales, paginador para carruseles/ebooks).
3. **Control de Hidratación y Directivas:** Si usas `useState`, `useEffect` o eventos `onClick`, verifica que `'use client'` esté en la línea 1 del archivo.
4. **Cierre Determinista:** Ejecuta `npm run build`. Si hay algún warning de imágenes o error de TypeScript, corrígelo inmediatamente antes de finalizar tu turno.
