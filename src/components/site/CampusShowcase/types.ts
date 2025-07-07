// components/site/CampusShowcase/types.ts

export interface CampusFeature {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export interface CampusShowcaseCardProps {
  feature: CampusFeature;
}

export interface CampusShowcaseRootProps {
  children: React.ReactNode;
}

export interface CampusShowcaseContentProps {
  title: string;
  subtitle?: string;
}

