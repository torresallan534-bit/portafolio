import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SOURCE_DIR = 'C:\\Users\\Usuario\\Documents\\portafolio';
const PUBLIC_PROJECTS_DIR = path.join(projectRoot, 'public', 'projects');
const DATA_DIR = path.join(projectRoot, 'data');
const PROJECTS_JSON = path.join(DATA_DIR, 'projects.json');
const STATS_JSON = path.join(DATA_DIR, 'stats.json');

// Opcional sharp
let sharp = null;
try {
  const m = await import('sharp');
  sharp = m.default || m;
} catch {
  // Sin sharp local
}

function calculateFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

// Configuración de Paletas por Cliente
const CLIENT_PALETTES = {
  'axis-pro': [
    { name: 'Azul Pro', hex: '#0284C7' },
    { name: 'Cian Eléctrico', hex: '#38BDF8' },
    { name: 'Grafito', hex: '#0F172A' },
    { name: 'Blanco Puro', hex: '#FFFFFF' },
  ],
  'allan-zoo': [
    { name: 'Ámbar Furia', hex: '#F59E0B' },
    { name: 'Rojo Alerta', hex: '#DC2626' },
    { name: 'Verde Selva', hex: '#15803D' },
    { name: 'Negro Profundo', hex: '#0A0A0B' },
  ],
  'barberia-the-king': [
    { name: 'Dorado Rey', hex: '#EAB308' },
    { name: 'Negro Obsidiana', hex: '#09090B' },
    { name: 'Plata Cromo', hex: '#E4E4E7' },
    { name: 'Gris Plomo', hex: '#52525B' },
  ],
  'arepa-secreta': [
    { name: 'Maíz Dorado', hex: '#F59E0B' },
    { name: 'Terracota Criollo', hex: '#DC2626' },
    { name: 'Carbón Bistro', hex: '#18181B' },
    { name: 'Blanco Crema', hex: '#FAFAF9' },
  ],
  'taqueria-df': [
    { name: 'Rojo Chile', hex: '#DC2626' },
    { name: 'Amarillo Maíz', hex: '#FBBF24' },
    { name: 'Verde Jalapeño', hex: '#16A34A' },
    { name: 'Negro Carbón', hex: '#18181B' },
  ],
  'nails-pastel': [
    { name: 'Rosa Pastel', hex: '#F472B6' },
    { name: 'Lavanda Suave', hex: '#C084FC' },
    { name: 'Blanco Nácar', hex: '#FDF4FF' },
    { name: 'Dorado Champagne', hex: '#FDE047' },
  ],
};

const CATEGORY_LABELS = {
  videos: 'Videos Comerciales & Demo',
  menus: 'Menús Gastronómicos',
  flyers: 'Flyers & Publicidad',
  carruseles: 'Carruseles para Redes',
  ebooks: 'Ebooks & Editorial',
  miniaturas: 'Miniaturas YouTube (Alto CTR)',
  branding: 'Branding & Identidad',
};

// Definición estricta de proyectos especializados
// Arepa Secreta ahora tiene: branding-1 (Fase 1), branding-2 (Fase 2), menus (Cartas gastronómicas) y flyers
const SPECIALIZED_PROJECT_DEFS = [
  // AXIS PRO
  {
    id: 'axis-pro-videos',
    clientId: 'axis-pro',
    clientName: 'Axis Pro',
    title: 'Axis Pro — Videos Demostrativos & Comerciales',
    category: 'videos',
    summary: 'Serie de 3 videos de demostración con edición dinámica, motion design y ritmo ágil para audiencias en Estados Unidos.',
    challenge: 'Explicar funcionalidades de forma clara y retener la atención en los primeros segundos de visualización.',
    solution: 'Edición con cortes acelerados, música rítmica y zooms estratégicos para maximizar el engagement en plataformas digitales.',
    scanDirs: ['axis pro/videos demo'],
    aspectRatio: '16:9',
  },
  {
    id: 'axis-pro-carruseles',
    clientId: 'axis-pro',
    clientName: 'Axis Pro',
    title: 'Axis Pro — Carruseles Educativos para Instagram',
    category: 'carruseles',
    summary: 'Secuencias informativas de diapositivas modulares con alto valor didáctico y diseño optimizado para guardados y compartidos.',
    challenge: 'Sintetizar información técnica densa en láminas visualmente digeribles para redes sociales.',
    solution: 'Diagramación paso a paso con jerarquía tipográfica, contrastes lumínicos e iconografía personalizada.',
    scanDirs: ['axis pro/carruseles instagram/carrusel 1', 'axis pro/carruseles instagram/carrusel 2', 'axis pro/carruseles instagram/carrusel 3'],
    aspectRatio: '1:1',
  },
  {
    id: 'axis-pro-ebooks',
    clientId: 'axis-pro',
    clientName: 'Axis Pro',
    title: 'Axis Pro — Diseño Editorial de Ebooks & Guías',
    category: 'ebooks',
    summary: 'Diseño y maquetación de guías digitales completas (Ebook 1 y Ebook 2) estructuradas página a página con acabado editorial prémium.',
    challenge: 'Crear un lead magnet de alto valor percibido que refleje autoridad tecnológica en el mercado anglosajón.',
    solution: 'Composición editorial limpia, balance de espacios en blanco y diagramación de más de 20 páginas especializadas.',
    scanDirs: ['axis pro/ebook/ebook 1', 'axis pro/ebook/ebook 2'],
    aspectRatio: '3:4',
  },
  {
    id: 'axis-pro-miniaturas',
    clientId: 'axis-pro',
    clientName: 'Axis Pro',
    title: 'Axis Pro — Miniaturas de Alto CTR para YouTube',
    category: 'miniaturas',
    summary: 'Portadas de alto impacto concebidas para maximizar la tasa de clics orgánicos en YouTube para el mercado estadounidense.',
    challenge: 'Competir contra miniaturas con alta saturación en el nicho tech de YouTube USA.',
    solution: 'Composiciones con contraste cromático cian/azul, expresiones faciales nítidas y textos de anclaje de máximo 3 palabras.',
    scanDirs: ['axis pro/miniaturas youtube'],
    aspectRatio: '16:9',
  },

  // ALLAN ZOO
  {
    id: 'allan-zoo-miniaturas',
    clientId: 'allan-zoo',
    clientName: 'Allan Zoo',
    title: 'Allan Zoo — Miniaturas Documentales de Animales Salvajes',
    category: 'miniaturas',
    summary: 'Miniaturas cinematográficas con fotomontajes dramáticos de felinos y animales imponentes para YouTube.',
    challenge: 'Atrapar tráfico en la página de inicio frente a canales globales de naturaleza y fauna.',
    solution: 'Corrección de color dramática, enfoque en miradas de felinos y tipografía bold de alta legibilidad en pantallas pequeñas.',
    scanDirs: ['allan zoo/miniaturas youtube'],
    aspectRatio: '16:9',
  },

  // BARBERIA THE KING
  {
    id: 'barberia-the-king-videos',
    clientId: 'barberia-the-king',
    clientName: 'Barbería The King',
    title: 'Barbería The King — Videos Promocionales Verticales (9:16)',
    category: 'videos',
    summary: 'Trilogía de videos comerciales verticales diseñados para TikTok e Instagram Reels, resaltando técnica y ambiente prémium.',
    challenge: 'Baja captación de nuevos clientes entre semana y promociones desapercibidas en redes.',
    solution: 'Producción audiovisual rítmica con tomas de detalle en corte, música envolvente y llamados directos a reservar cita.',
    scanDirs: ['barberia the king/videos promocion'],
    aspectRatio: '9:16',
  },
  {
    id: 'barberia-the-king-flyers',
    clientId: 'barberia-the-king',
    clientName: 'Barbería The King',
    title: 'Barbería The King — Cartelería Urbana & Cuponeras 2x1',
    category: 'flyers',
    summary: 'Afiches de alto contraste con estética streetwear y cupones de fidelización para clientes VIP.',
    challenge: 'Diferenciarse de barberías tradicionales con una identidad visual contundente y moderna.',
    solution: 'Tipografía contundente, paleta negro/oro y cuponera lista para volanteo físico y estados de WhatsApp.',
    scanDirs: ['barberia the king/flayers'],
    aspectRatio: '3:4',
  },

  // AREPA SECRETA - SEPARACIÓN QUIRÚRGICA:
  // 1. Branding 1 (Fase 1)
  {
    id: 'arepa-secreta-branding-1',
    clientId: 'arepa-secreta',
    clientName: 'Arepa Secreta',
    title: 'Arepa Secreta — Identidad Visual & Concepto (Fase 1)',
    category: 'branding',
    summary: 'Construcción del concepto gráfico primario, imagotipo artesanal del fogón y el maíz, y directrices de color cálido.',
    challenge: 'Diseñar desde cero una marca que transmita tradición culinaria venezolana con presentación contemporánea.',
    solution: 'Desarrollo del imagotipo central, texturas en papel kraft y primeros lineamientos de identidad visual.',
    scanDirs: ['Arepa Secreta/branding 1'], // El archivo raíz branding 1.png
    aspectRatio: '3:4',
  },
  // 2. Branding 2 (Fase 2)
  {
    id: 'arepa-secreta-branding-2',
    clientId: 'arepa-secreta',
    clientName: 'Arepa Secreta',
    title: 'Arepa Secreta — Sistema de Marca & Empaques (Fase 2)',
    category: 'branding',
    summary: 'Evolución de identidad, sistema de packaging para delivery (bolsas térmicas, papel antigrasa) y papelería comercial.',
    challenge: 'Extender la identidad gráfica al packaging de domicilio manteniendo la comida caliente y la marca reconocible.',
    solution: 'Diseño modular de empaques, bolsas con mensajes de marca y etiquetas adhesivas de seguridad.',
    scanDirs: ['Arepa Secreta/branding 2'], // El archivo raíz branding 2.png
    aspectRatio: '3:4',
  },
  // 3. Menús Gastronómicos (Recuperados de branding 1 y 2)
  {
    id: 'arepa-secreta-menus',
    clientId: 'arepa-secreta',
    clientName: 'Arepa Secreta',
    title: 'Arepa Secreta — Menús Gastronómicos & Cartas Físicas / QR',
    category: 'menus',
    summary: 'Diseño y diagramación de cartas completas (Menú 1 y Menú 2) estructurando rellenos tradicionales, bebidas y combos.',
    challenge: 'La carta original saturaba a los clientes y dificultaba la rotación rápida de mesas en horas pico.',
    solution: 'Diagramación en tres niveles de lectura, fotografía apetitosa y versión digital ultraligera para lectura por código QR.',
    scanDirs: [
      'Arepa Secreta/branding 1/menus/menu 1',
      'Arepa Secreta/branding 1/menus/menu 2',
      'Arepa Secreta/branding 2/menus/menu 1',
      'Arepa Secreta/branding 2/menus/menu 2',
    ],
    aspectRatio: '3:4',
  },
  // 4. Flyers Promocionales
  {
    id: 'arepa-secreta-flyers',
    clientId: 'arepa-secreta',
    clientName: 'Arepa Secreta',
    title: 'Arepa Secreta — Flyers Promocionales & Ofertas Semanales',
    category: 'flyers',
    summary: 'Piezas publicitarias concebidas para WhatsApp Status e Instagram Stories para promocionar combos familiares y nocturnos.',
    challenge: 'Comunicar promociones diarias sin depender de explicaciones largas en mensajes de texto.',
    solution: 'Composiciones con producto en primer plano, precios destacados y llamados directos a pedir por WhatsApp.',
    scanDirs: [
      'Arepa Secreta/branding 1/flayers',
      'Arepa Secreta/branding 2/flayers',
    ],
    aspectRatio: '3:4',
  },

  // TAQUERIA DF
  {
    id: 'taqueria-df-flyers',
    clientId: 'taqueria-df',
    clientName: 'Taquería DF — La Capital del Taco',
    title: 'Taquería DF — Campaña Publicitaria & Cartas de Promociones',
    category: 'flyers',
    summary: 'Serie de 6 afiches comerciales y cartas promocionales con las ofertas 2x1 y combos taqueros en Bogotá.',
    challenge: 'Competir en una zona gastronómica densa comunicando precios y ofertas de tacos al pastor de forma inmediata.',
    solution: 'Paleta viva de inspiración mexicana (rojo chile, amarillo maíz) con textos gancho que aceleraron las órdenes.',
    scanDirs: ['taqueria df la capital de taco/flayers 10-30'],
    aspectRatio: '3:4',
  },

  // NAILS PASTEL
  {
    id: 'nails-pastel-branding',
    clientId: 'nails-pastel',
    clientName: 'Nails Pastel',
    title: 'Nails Pastel — Identidad de Marca & Catálogo de Tarifas',
    category: 'branding',
    summary: 'Logotipo distintivo en tonos pasteles y catálogo comercial de servicios para manicura, pedicura y spa.',
    challenge: 'Negocio nuevo sin identidad diferenciada en un sector saturado de gráficas genéricas.',
    solution: 'Sistema visual suave y limpio con tarjetas de precios que facilitan el agendamiento rápido por redes sociales.',
    scanDirs: ['NAils Pastel/logo', 'NAils Pastel/flyers'],
    aspectRatio: '1:1',
  },
  {
    id: 'nails-pastel-video',
    clientId: 'nails-pastel',
    clientName: 'Nails Pastel',
    title: 'Nails Pastel — Video Promocional de Tratamientos (9:16)',
    category: 'videos',
    summary: 'Video comercial con tomas de detalle de acabados en uñas y ambiente relajante para captación de clientas.',
    challenge: 'Transmitir la calidad y el acabado minucioso de las sesiones estéticas a través de medios digitales.',
    solution: 'Edición en video vertical con música envolvente y primeros planos que generan deseo y reservas inmediatas.',
    scanDirs: ['NAils Pastel/videos promocional'],
    aspectRatio: '9:16',
  },
];

function getCleanAssetFileName(subDirRel, rawStem, ext, assetSeq, defScanDirsLength) {
  if (defScanDirsLength <= 1) {
    return `${rawStem || assetSeq}${ext}`;
  }

  const norm = subDirRel.toLowerCase().replace(/\\/g, '/');

  if (norm.includes('carrusel 1')) return `carrusel-1-${rawStem || assetSeq}${ext}`;
  if (norm.includes('carrusel 2')) return `carrusel-2-${rawStem || assetSeq}${ext}`;
  if (norm.includes('carrusel 3')) return `carrusel-3-${rawStem || assetSeq}${ext}`;

  if (norm.includes('ebook 1')) return `ebook-1-${rawStem || assetSeq}${ext}`;
  if (norm.includes('ebook 2')) return `ebook-2-${rawStem || assetSeq}${ext}`;

  if (norm.includes('branding 1/flayers')) return `flayers-fase-1-${rawStem || assetSeq}${ext}`;
  if (norm.includes('branding 2/flayers')) return `flayers-fase-2-${rawStem || assetSeq}${ext}`;

  if (norm.includes('branding 1/menus/menu 1')) return `menu-fase-1-carta-1-${rawStem || assetSeq}${ext}`;
  if (norm.includes('branding 1/menus/menu 2')) return `menu-fase-1-carta-2-${rawStem || assetSeq}${ext}`;
  if (norm.includes('branding 2/menus/menu 1')) return `menu-fase-2-carta-1-${rawStem || assetSeq}${ext}`;
  if (norm.includes('branding 2/menus/menu 2')) return `menu-fase-2-carta-2-${rawStem || assetSeq}${ext}`;

  if (norm.includes('nails pastel flyers')) return `flyers-${rawStem || assetSeq}${ext}`;
  if (norm.includes('nails pastel logo')) return `logo-${rawStem || assetSeq}${ext}`;

  const lastPart = slugify(path.basename(subDirRel));
  return `${lastPart}-${rawStem || assetSeq}${ext}`;
}

async function syncProjects() {
  console.log('\n======================================================');
  console.log('🚀 [sync-projects] Sincronización precisa y deduplicación...');
  console.log('   - Separación estricta de Branding 1, Branding 2 y Menús');
  console.log('   - Deduplicación estricta por hash SHA-256');
  console.log('======================================================\n');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Directorio fuente no encontrado: ${SOURCE_DIR}`);
    return;
  }

  fs.mkdirSync(PUBLIC_PROJECTS_DIR, { recursive: true });
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const finalProjects = [];
  const globalSeenHashes = new Map();
  let totalOptimized = 0;
  let totalCopied = 0;
  let totalIgnoredDuplicates = 0;
  const uniqueClients = new Set();
  let totalDeliverablesCount = 0;

  for (const def of SPECIALIZED_PROJECT_DEFS) {
    uniqueClients.add(def.clientId);
    const targetProjectDir = path.join(PUBLIC_PROJECTS_DIR, def.id);
    fs.rmSync(targetProjectDir, { recursive: true, force: true });
    fs.mkdirSync(targetProjectDir, { recursive: true });

    const assets = [];
    const usedNamesInProject = new Set();
    let assetSeq = 1;

    for (const subDirRel of def.scanDirs) {
      const fullSubDirPath = path.join(SOURCE_DIR, subDirRel);
      if (!fs.existsSync(fullSubDirPath)) continue;

      // Si es un directorio, leer archivos que están directamente en él (no recursivo en carpetas de nivel superior para evitar tomar subcarpetas de menús en branding)
      const entries = fs.readdirSync(fullSubDirPath, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const ext = path.extname(entry.name).toLowerCase();
        if (!['.png', '.jpg', '.jpeg', '.webp', '.mp4'].includes(ext)) continue;

        const sourceFilePath = path.join(fullSubDirPath, entry.name);
        const hash = calculateFileHash(sourceFilePath);

        // Deduplicación dentro de este proyecto específico
        if (globalSeenHashes.has(`${def.id}-${hash}`)) {
          totalIgnoredDuplicates++;
          continue;
        }
        globalSeenHashes.set(`${def.id}-${hash}`, true);

        const isVideo = ext === '.mp4';
        const rawStem = slugify(path.basename(entry.name, ext));

        let cleanFileName = getCleanAssetFileName(subDirRel, rawStem, ext, assetSeq, def.scanDirs.length);
        if (usedNamesInProject.has(cleanFileName)) {
          cleanFileName = `${path.basename(cleanFileName, ext)}-${assetSeq}${ext}`;
        }
        usedNamesInProject.add(cleanFileName);

        const targetPath = path.join(targetProjectDir, cleanFileName);

        let finalRelativePath = `/projects/${def.id}/${cleanFileName}`;
        if (!isVideo && sharp && ext !== '.webp') {
          const webpName = `${path.basename(cleanFileName, ext)}.webp`;
          const webpPath = path.join(targetProjectDir, webpName);
          if (!fs.existsSync(webpPath)) {
            try {
              await sharp(sourceFilePath).webp({ quality: 85 }).toFile(webpPath);
              totalOptimized++;
            } catch {
              fs.copyFileSync(sourceFilePath, targetPath);
              totalCopied++;
            }
          }
          finalRelativePath = `/projects/${def.id}/${webpName}`;
        } else {
          if (!fs.existsSync(targetPath)) {
            fs.copyFileSync(sourceFilePath, targetPath);
            totalCopied++;
          }
        }

        const isEbook = def.category === 'ebooks' || def.category === 'carruseles';
        const assetLabel = isVideo ? `Video ${assetSeq}` : isEbook ? `Página ${assetSeq}` : `Pieza ${assetSeq}`;

        assets.push({
          id: `${def.id}-asset-${assetSeq}`,
          title: `${def.title} — ${assetLabel}`,
          assetPath: finalRelativePath.replace(/\\/g, '/'),
          mediaType: isVideo ? 'video' : 'image',
          aspectRatio: def.aspectRatio,
        });

        assetSeq++;
      }
    }

    if (assets.length === 0) continue;

    totalDeliverablesCount += assets.length;

    // Portada
    const firstImage = assets.find((a) => a.mediaType === 'image');
    const firstVideo = assets.find((a) => a.mediaType === 'video');
    const coverAsset = firstImage ? firstImage.assetPath : firstVideo?.assetPath || '';

    finalProjects.push({
      id: def.id,
      clientId: def.clientId,
      clientName: def.clientName,
      title: def.title,
      category: def.category,
      categoryLabel: CATEGORY_LABELS[def.category] || def.category,
      summary: def.summary,
      challenge: def.challenge,
      solution: def.solution,
      coverAsset,
      coverMediaType: firstImage ? 'image' : 'video',
      previewVideoUrl: firstVideo ? firstVideo.assetPath : undefined,
      assets,
      colorPalette: CLIENT_PALETTES[def.clientId] || [
        { name: 'Primario', hex: '#E8A023' },
        { name: 'Secundario', hex: '#1C1C1F' },
        { name: 'Acento', hex: '#34D399' },
      ],
      year: 2025,
      featured: true,
    });
  }

  // Guardar data/projects.json
  fs.writeFileSync(PROJECTS_JSON, JSON.stringify(finalProjects, null, 2), 'utf-8');

  // Guardar data/stats.json
  const stats = {
    totalProjects: finalProjects.length,
    totalDeliverables: totalDeliverablesCount,
    totalClients: uniqueClients.size,
    lastUpdated: new Date().toISOString(),
  };
  fs.writeFileSync(STATS_JSON, JSON.stringify(stats, null, 2), 'utf-8');

  console.log('✅ [sync-projects] Sincronización finalizada con éxito:');
  console.log(`   - Tarjetas de Proyectos Especializados: ${finalProjects.length}`);
  console.log(`   - Entregables únicos procesados: ${totalDeliverablesCount}`);
  console.log(`   - Marcas / Clientes únicos: ${uniqueClients.size}`);
  console.log(`   - Duplicados ignorados por hash: ${totalIgnoredDuplicates}`);
  console.log(`   - Guardado en: ${PROJECTS_JSON}`);
  console.log(`   - Métricas en: ${STATS_JSON}\n`);
}

syncProjects().catch((err) => {
  console.error('❌ Error en syncProjects:', err);
  process.exit(1);
});
