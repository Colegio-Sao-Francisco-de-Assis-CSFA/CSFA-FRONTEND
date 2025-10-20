// components/site/CampusShowcase/types.ts
import { Swiper as SwiperCore } from 'swiper/types';

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

export interface CampusFeature {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export interface CampusShowcaseRootWithFeaturesProps extends CampusShowcaseRootProps {
  features: CampusFeature[];
  onSwiperInit?: (swiper: SwiperCore) => void;
}