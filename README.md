# Portafolio Personal — Allan Torres (Diseñador Gráfico & Brand Identity)

Portafolio web moderno, minimalista y ultra visual diseñado y desarrollado para **Allan Torres**, enfocado en la captación de clientes para diseño de identidad de marca, cartas de menú gastronómicas (especialidad en areperas y restobares), flyers publicitarios para barberías y campañas de impacto social.

---

## 🚀 Tecnologías Utilizadas

- **Next.js 15 (App Router)**: Renderizado optimizado, modularidad y rendimiento superior.
- **Tailwind CSS 3**: Paleta visual refinada (obsidiana, grafito, toques de ámbar cálido y acentos esmeralda), cuadrícula mampostería (*masonry*), y microinteracciones de alta gama.
- **TypeScript**: Tipado estricto para proyectos, servicios, paletas cromáticas y entregables.
- **Lucide React**: Iconografía minimalista y moderna.
- **Next/Image**: Optimización responsiva de imágenes.

---

## 📁 Estructura del Proyecto

```text
allan-torres-portfolio/
├── app/
│   ├── globals.css         # Directivas Tailwind, estilos de masonry y animaciones
│   ├── layout.tsx          # Metadata SEO, OpenGraph y configuración base
│   └── page.tsx            # Ensamblado principal de secciones
├── components/
│   ├── Navbar.tsx          # Barra de navegación flotante con blur y CTA rápido
│   ├── Hero.tsx            # Sección Inicio: Allan Torres & propuesta de valor
│   ├── ProjectGallery.tsx  # Cuadrícula Masonry con filtros interactivos
│   ├── ProjectModal.tsx    # Lightbox interactivo con paleta copiable y entregables
│   ├── Services.tsx        # Sección de Servicios con entregables y alcances
│   ├── Contact.tsx         # Botones directos a WhatsApp & Telegram + brief rápido
│   └── Footer.tsx          # Pie de página y estado de disponibilidad
├── data/
│   └── portfolio-data.ts   # Datos de proyectos, servicios y configuración del diseñador
├── types/
│   └── index.ts            # Interfaces TypeScript
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Instalación y Puesta en Marcha

1. **Abrir la carpeta en tu terminal o editor preferido**:
   ```bash
   cd C:\Users\Usuario\.gemini\antigravity\scratch\allan-torres-portfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # o con pnpm / yarn / bun
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

---

## 📞 Canales de Contacto Integrados

Toda la información del diseñador está centralizada y configurada en `data/portfolio-data.ts`:

- **WhatsApp Directo**: `+57 324 800 0501` (`https://wa.me/573248000501`) con mensaje de apertura personalizado.
- **Telegram Directo**: `+57 324 800 0501` (`https://t.me/+573248000501`).
- **Correo Electrónico**: `torresaallan534@gmail.com`.
- **Proyectos**: Agrega o edita los objetos en `PORTFOLIO_PROJECTS`. Cada proyecto cuenta con soporte para:
  - Nombre del cliente y ubicación.
  - Categoría (`menus`, `flyers`, `branding`, `campanas`).
  - Proporción de aspecto (`aspect-[3/4]`, `aspect-[4/5]`, `aspect-[16/10]`) para generar el ritmo natural de la cuadrícula *masonry*.
  - Paleta cromática interactiva con copia de códigos HEX al hacer clic.
  - Lista de entregables y descripción completa.
