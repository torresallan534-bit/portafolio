# Skills Operativas del Proyecto — Panda Haus

Guía de habilidades y protocolos de ejecución técnica para el desarrollo y mantenimiento de la Landing Page Comercial de Panda Haus.

---

## 1. Skill: Sincronización y Auditoría Comercial (`sync-projects-audit`)

> **Descripción:** Audita y actualiza `data/projects.json` bajo las 4 categorías comerciales oficiales (`Todos`, `Flyers & Menús`, `Landing Pages`, `Branding`) validando rutas reales en disco y enfoque de conversión.

### Protocolo de Ejecución:
1. **Inspección Real:** Valida siempre en disco que los archivos existan en `public/projects/`.
2. **Categorización Oficial:** Todo proyecto debe pertenecer a `flyers-menus`, `landing-pages` o `branding`.
3. **Copy Orientado a Negocio:** Prohibido mencionar tecnologías internas ("Next.js", "MongoDB", "Payload", "React"). Expresar retorno comercial tangible.
4. **Prueba de Compilación:** Ejecuta `npx tsc --noEmit` para asegurar que el JSON cumple al 100% con las interfaces de `types/projects.ts`.

---

## 2. Skill: Calidad Visual y Arquitectura UI en Next.js (`nextjs-ui-quality`)

> **Descripción:** Modifica componentes visuales en Next.js garantizando la paleta oficial de Panda Haus (`#0D0D0D`, `#2B2F33`, `#F2F4F3`, `#FFFFFF`, `#3DDC97`), tipografías `Space_Grotesk` e `Inter`, simetría en tarjetas y cero errores de compilación.

### Protocolo de Ejecución:
1. **Paleta Inmutable:** Prohibido usar ámbar/dorado. Acento primario en verde menta `#3DDC97`.
2. **Mockups de Dispositivos:** Usar `<DeviceMockup>` (smartphone para menús/flyers verticales; browser para landing pages).
3. **Cierre Determinista:** Ejecutar `npm run build` y confirmar **0 errores** antes de entregar.
