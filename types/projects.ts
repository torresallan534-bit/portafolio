export type ProjectCategory =
  | 'videos'
  | 'menus'
  | 'flyers'
  | 'carruseles'
  | 'ebooks'
  | 'miniaturas'
  | 'branding';

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface ProjectAsset {
  id: string;
  title: string;
  assetPath: string; // /projects/...
  mediaType: 'image' | 'video';
  aspectRatio?: '9:16' | '16:9' | '1:1' | '3:4';
  group?: string; // ej. 'carrusel-1', 'ebook-1'
}

export interface ProjectBlock {
  id: string; // ej. 'axis-pro-videos'
  clientId: string; // ej. 'axis-pro'
  clientName: string; // ej. 'Axis Pro'
  title: string; // ej. 'Videos Demostrativos & Comerciales'
  category: ProjectCategory;
  categoryLabel: string; // ej. 'Videos Comerciales'
  summary: string;
  challenge?: string;
  solution?: string;
  coverAsset: string;
  coverMediaType: 'image' | 'video';
  previewVideoUrl?: string; // Para hover preview en tarjetas de video
  assets: ProjectAsset[];
  colorPalette: ColorSwatch[];
  year: number;
  featured?: boolean;
}

export interface PortfolioStats {
  totalProjects: number;
  totalDeliverables: number;
  totalClients: number;
  lastUpdated: string;
}
