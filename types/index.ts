export type ProjectCategory = "all" | "menus" | "branding" | "flyers";

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  challenge?: string;
  solution?: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  aspectRatioClass: string;
  tags: string[];
  palette?: ColorSwatch[];
  deliverables: string[];
  year: string;
  clientLocation?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: "MenuBook" | "Palette" | "FileSpreadsheet" | "Megaphone";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  brand: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  verified?: boolean;
}
