export * from './projects';

export interface ServiceItem {
  id: string;
  iconName: "MenuBook" | "Palette" | "FileSpreadsheet" | "Megaphone" | "Video";
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
