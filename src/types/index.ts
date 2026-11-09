export interface NavItem {
  name: string;
  href: string;
}

export interface FeatureItem {
  name: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  price: string;
  type: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
}

export interface ProductItem {
  id: number | string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color?: string;
}

export interface ComponentMetadata {
  id: string;
  title: string;
  category: "marketing" | "ecommerce" | "pitch" | "starter" | "templates";
  description: string;
  filePath: string;
  dependencies: string[];
}
