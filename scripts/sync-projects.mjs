import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Rutas clave
const SOURCE_PORTFOLIO_DIR = 'C:\\Users\\Usuario\\Documents\\portafolio';
const PUBLIC_PROJECTS_DIR = path.join(projectRoot, 'public', 'projects');
const DATA_DIR = path.join(projectRoot, 'data');
const PROJECTS_JSON_PATH = path.join(DATA_DIR, 'projects.json');
const STATS_JSON_PATH = path.join(DATA_DIR, 'stats.json');

// Opcionalmente cargamos sharp si está disponible en node_modules
let sharp = null;
try {
  const sharpModule = await import('sharp');
  sharp = sharpModule.default || sharpModule;
} catch {
  // Sharp no disponible en entorno local sin npm install
}

// Normalización de slugs
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

// Mapeo inteligente de disciplinas
function detectCategory(folderOrFileName) {
  const norm = slugify(folderOrFileName);
  if (norm.includes('menu') || norm.includes('carta')) return 'menus';
  if (norm.includes('branding') || norm.includes('identidad') || norm.includes('logo')) return 'branding';
  if (norm.includes('video') || norm.includes('demo') || norm.includes('promocion')) return 'videos';
  if (norm.includes('flyer') || norm.includes('flayer') || norm.includes('poster') || norm.includes('volante')) return 'flyers';
  if (norm.includes('miniatura') || norm.includes('youtube') || norm.includes('carrusel') || norm.includes('ebook')) return 'flyers';
  return 'branding';
}

// Paletas por defecto
const DEFAULT_PALETTES = {
  'arepa-secreta': [
    { name: 'Maíz Dorado', hex: '#F59E0B' },
    { name: 'Terracota Criollo', hex: '#DC2626' },
    { name: 'Carbón Bistro', hex: '#18181B' },
    { name: 'Blanco Crema', hex: '#FAFAF9' },
  ],
  'barberia-the-king': [
    { name: 'Dorado Rey', hex: '#EAB308' },
    { name: 'Negro Obsidiana', hex: '#09090B' },
    { name: 'Plata Cromo', hex: '#E4E4E7' },
    { name: 'Gris Plomo', hex: '#52525B' },
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
  'axis-pro': [
    { name: 'Azul Pro', hex: '#0284C7' },
    { name: 'Cian Eléctrico', hex: '#38BDF8' },
    { name: 'Grafito Oscuro', hex: '#0F172A' },
    { name: 'Blanco Puro', hex: '#FFFFFF' },
  ],
  'allan-zoo': [
    { name: 'Ámbar Furia', hex: '#F59E0B' },
    { name: 'Rojo Alerta', hex: '#DC2626' },
    { name: 'Verde Selva', hex: '#15803D' },
    { name: 'Negro Profundo', hex: '#0A0A0B' },
  ],
};

const DEFAULT_METADATA = {
  'arepa-secreta': {
    clientName: 'Arepa Secreta',
    year: 2024,
    summary: 'Construcción integral de identidad visual, menús gastronómicos físicos y QR, empaques y campañas de flyers promocionales.',
    challenge: 'La carta original saturaba a los comensales y el negocio carecía de identidad unificada para delivery.',
    solution: 'Diagramación en 3 niveles de lectura, sistema gráfico en papel kraft y versión QR optimizada para móvil.',
  },
  'barberia-the-king': {
    clientName: 'Barbería The King',
    year: 2024,
    summary: 'Producción de videos comerciales dinámicos y cartelería publicitaria urbana de alto contraste para captación de clientes.',
    challenge: 'Días de inicio de semana con baja afluencia y promociones desapercibidas en redes.',
    solution: 'Campaña audiovisual con ritmo urbano para Reels/TikTok y afiches streetwear con cuponera 2x1.',
  },
  'taqueria-df': {
    clientName: 'Taquería DF — La Capital del Taco',
    year: 2024,
    summary: 'Campaña publicitaria visualmente apetitosa de 6 afiches y cartas promocionales para salón y domicilio en Bogotá.',
    challenge: 'Competencia agresiva en la zona gastronómica y necesidad de rotar mesas rápidamente.',
    solution: 'Paleta viva y textos de gancho directo que aceleraron los pedidos de tacos y combos 2x1.',
  },
  'nails-pastel': {
    clientName: 'Nails Pastel',
    year: 2024,
    summary: 'Identidad visual delicada, video promocional de sesiones y catálogo de servicios y citas para spa de uñas.',
    challenge: 'Emprendimiento nuevo que buscaba posicionarse como opción prémium frente a salones convencionales.',
    solution: 'Video promocional con tomas de detalle, logo elegante y catálogo ordenado de tarifas en tonos pasteles.',
  },
  'axis-pro': {
    clientName: 'Axis Pro',
    year: 2024,
    summary: 'Producción de videos demostrativos, miniaturas de YouTube con alto CTR y carruseles informativos para el mercado de USA.',
    challenge: 'Comunicar funcionalidad tecnológica y capturar tráfico calificado en Estados Unidos con alto estándar visual.',
    solution: 'Videos demo de ritmo ágil, miniaturas con enfoque en clics y carruseles educativos modulares.',
  },
  'allan-zoo': {
    clientName: 'Allan Zoo',
    year: 2024,
    summary: 'Diseño y dirección visual de miniaturas documentales sobre felinos y fauna salvaje con alto contraste para YouTube.',
    challenge: 'Competir contra canales globales de millones de suscriptores en la página principal de YouTube.',
    solution: 'Fotomontajes dramáticos con corrección de color y tipografía bold para disparar el CTR.',
  },
};

// Exploración recursiva de archivos válidos
function getMediaFiles(dirPath) {
  const validExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.mp4'];
  const results = [];

  function traverse(currentDir) {
    if (!fs.existsSync(currentDir)) return;
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (validExtensions.includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  }

  traverse(dirPath);
  return results;
}

async function syncProjects() {
  console.log('\n🚀 [sync-projects] Iniciando escaneo y sincronización automatizada...');

  if (!fs.existsSync(SOURCE_PORTFOLIO_DIR)) {
    console.error(`❌ Directorio fuente no encontrado: ${SOURCE_PORTFOLIO_DIR}`);
    return;
  }

  // Asegurar directorios de destino
  fs.mkdirSync(PUBLIC_PROJECTS_DIR, { recursive: true });
  fs.mkdirSync(DATA_DIR, { recursive: true });

  // Cargar projects.json previo para no sobrescribir datos editados
  let existingProjects = [];
  if (fs.existsSync(PROJECTS_JSON_PATH)) {
    try {
      existingProjects = JSON.parse(fs.readFileSync(PROJECTS_JSON_PATH, 'utf-8'));
    } catch {
      existingProjects = [];
    }
  }

  const existingMap = new Map(existingProjects.map((p) => [p.id, p]));

  // Leer carpetas de clientes en SOURCE_PORTFOLIO_DIR
  const clientEntries = fs
    .readdirSync(SOURCE_PORTFOLIO_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name.toLowerCase() !== 'n8n'); // n8n son flujos json

  const updatedProjects = [];
  let totalOptimizedCount = 0;
  let totalCopiedCount = 0;

  for (const clientEntry of clientEntries) {
    const rawClientName = clientEntry.name;
    const clientPath = path.join(SOURCE_PORTFOLIO_DIR, rawClientName);

    // Mapeo estándar de slugs
    let clientSlug = slugify(rawClientName);
    if (clientSlug.includes('taqueria')) clientSlug = 'taqueria-df';
    if (clientSlug.includes('barberia')) clientSlug = 'barberia-the-king';
    if (clientSlug.includes('arepa')) clientSlug = 'arepa-secreta';
    if (clientSlug.includes('nails')) clientSlug = 'nails-pastel';
    if (clientSlug.includes('axis')) clientSlug = 'axis-pro';
    if (clientSlug.includes('allan-zoo') || clientSlug.includes('allanzoo')) clientSlug = 'allan-zoo';

    const clientPublicDir = path.join(PUBLIC_PROJECTS_DIR, clientSlug);
    fs.mkdirSync(clientPublicDir, { recursive: true });

    // Buscar todos los archivos multimedia del cliente
    const rawMediaFiles = getMediaFiles(clientPath);
    const deliverables = [];
    const categoriesSet = new Set();

    let assetIndex = 1;
    for (const sourceFile of rawMediaFiles) {
      const ext = path.extname(sourceFile).toLowerCase();
      const isVideo = ext === '.mp4';
      const parentDirName = path.basename(path.dirname(sourceFile));
      const grandParentDirName = path.basename(path.dirname(path.dirname(sourceFile)));

      // Determinar categoría
      const category = detectCategory(`${parentDirName} ${grandParentDirName} ${path.basename(sourceFile)}`);
      categoriesSet.add(category);

      // Nombre normalizado para el activo
      const baseStem = slugify(path.basename(sourceFile, ext));
      let targetFileName = `${category}-${baseStem || assetIndex}${ext}`;
      let targetPublicPath = path.join(clientPublicDir, targetFileName);

      // Si tenemos sharp y es imagen, convertir a .webp (salvo que ya sea webp)
      if (!isVideo && sharp && ext !== '.webp') {
        const webpFileName = `${category}-${baseStem || assetIndex}.webp`;
        const webpTargetPath = path.join(clientPublicDir, webpFileName);

        if (!fs.existsSync(webpTargetPath)) {
          try {
            await sharp(sourceFile)
              .webp({ quality: 85 })
              .toFile(webpTargetPath);
            totalOptimizedCount++;
          } catch {
            // fallback copia directa
            fs.copyFileSync(sourceFile, targetPublicPath);
            totalCopiedCount++;
          }
        }
        targetFileName = webpFileName;
      } else {
        // Video o imagen directa
        if (!fs.existsSync(targetPublicPath)) {
          fs.copyFileSync(sourceFile, targetPublicPath);
          totalCopiedCount++;
        }
      }

      const relativeAssetPath = `/projects/${clientSlug}/${targetFileName}`.replace(/\\/g, '/');

      deliverables.push({
        id: `${clientSlug}-${category}-${assetIndex}`,
        category,
        title: `${category.toUpperCase()} — ${path.basename(sourceFile, ext)}`,
        assetPath: relativeAssetPath,
        mediaType: isVideo ? 'video' : 'image',
      });

      assetIndex++;
    }

    // Si ya existían datos personalizados en projects.json, conservarlos
    const existing = existingMap.get(clientSlug) || {};
    const defaultMeta = DEFAULT_METADATA[clientSlug] || {
      clientName: rawClientName,
      year: 2024,
      summary: `Proyectos y activos de contenido visual para ${rawClientName}.`,
    };

    const colorPalette = existing.colorPalette || DEFAULT_PALETTES[clientSlug] || [
      { name: 'Primario', hex: '#E8A023' },
      { name: 'Secundario', hex: '#1C1C1F' },
      { name: 'Acento', hex: '#34D399' },
    ];

    // Selección de portada (prioridad a imagen)
    const firstImage = deliverables.find((d) => d.mediaType === 'image');
    const coverAsset = existing.coverAsset || (firstImage ? firstImage.assetPath : deliverables[0]?.assetPath || '');

    const caseStudy = {
      id: clientSlug,
      clientName: existing.clientName || defaultMeta.clientName,
      year: existing.year || defaultMeta.year,
      summary: existing.summary || defaultMeta.summary,
      challenge: existing.challenge || defaultMeta.challenge,
      solution: existing.solution || defaultMeta.solution,
      colorPalette,
      categories: Array.from(categoriesSet),
      coverAsset,
      deliverables: deliverables.length > 0 ? deliverables : (existing.deliverables || []),
    };

    updatedProjects.push(caseStudy);
  }

  // Guardar data/projects.json
  fs.writeFileSync(PROJECTS_JSON_PATH, JSON.stringify(updatedProjects, null, 2), 'utf-8');

  // Calcular métricas
  const totalClients = updatedProjects.length;
  const totalDeliverables = updatedProjects.reduce((acc, p) => acc + (p.deliverables?.length || 0), 0);
  const stats = {
    totalClients,
    totalDeliverables,
    lastUpdated: new Date().toISOString(),
  };

  fs.writeFileSync(STATS_JSON_PATH, JSON.stringify(stats, null, 2), 'utf-8');

  console.log('✅ [sync-projects] Sincronización exitosa:');
  console.log(`   - Marcas / Clientes procesados: ${totalClients}`);
  console.log(`   - Total de entregables registrados: ${totalDeliverables}`);
  console.log(`   - Archivos optimizados con Sharp: ${totalOptimizedCount}`);
  console.log(`   - Archivos y videos copiados: ${totalCopiedCount}`);
  console.log(`   - Metadata guardada en: ${PROJECTS_JSON_PATH}`);
  console.log(`   - Estadísticas guardadas en: ${STATS_JSON_PATH}\n`);
}

syncProjects().catch((err) => {
  console.error('❌ Error en syncProjects:', err);
  process.exit(1);
});
