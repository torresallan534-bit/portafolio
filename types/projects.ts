export type ProjectCategory = 'flyers-menus' | 'landing-pages' | 'branding';

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
  group?: string;
}

export interface ProjectBlock {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  businessBenefit?: string; // Beneficio comercial tangible
  challenge?: string;
  solution?: string;
  coverAsset: string;
  coverMediaType: 'image' | 'video';
  previewVideoUrl?: string;
  deviceType?: 'smartphone' | 'browser'; // Para componente DeviceMockup
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
