// components/ParceirosCarousel/types.ts

import { ImageProps } from 'next/image';

export type PartnerLogo = {
  src: ImageProps['src'];
  alt: string;
  width?: number;
  height?: number;
};

export type ScrollSpeed = 'slow' | 'normal' | 'fast';

export interface PartnerCarouselProps {
  logos: PartnerLogo[];
  scrollSpeed?: ScrollSpeed;
  className?: string;
  logoClassName?: string; 
}

export interface CarouselLogoProps {
  logo: PartnerLogo;
  className?: string;
}