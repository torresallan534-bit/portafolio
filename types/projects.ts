export type DisciplineCategory = 'branding' | 'menus' | 'flyers' | 'videos';

export interface ProjectDeliverable {
  id: string;
  category: DisciplineCategory;
  title: string;
  assetPath: string; // ruta pública accesible en /projects/...
  mediaType: 'image' | 'video';
}

export interface ClientCaseStudy {
  id: string; // slug del cliente (ej. 'arepa-secreta')
  clientName: string; // ej. 'Arepa Secreta'
  year: number;
  summary: string;
  challenge?: string;
  solution?: string;
  colorPalette: { name: string; hex: string }[];
  categories: DisciplineCategory[];
  coverAsset: string;
  deliverables: ProjectDeliverable[];
}

export interface PortfolioStats {
  totalClients: number;
  totalDeliverables: number;
  lastUpdated: string;
}
