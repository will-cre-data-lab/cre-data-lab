export interface Tool {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  pricing: string;
  icon: string;
  comingSoon: boolean;
  features: string[];
  screenshots?: string[];
}