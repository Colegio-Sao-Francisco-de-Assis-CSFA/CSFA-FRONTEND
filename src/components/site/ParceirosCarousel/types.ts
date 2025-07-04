// components/ParceirosCarousel/types.ts

import { ImageProps } from 'next/image';

export type PartnerLogo = {
  src: ImageProps['src'];
  alt: string;
  width?: number;
  height?: number;
  // Adicione outras propriedades se os logos tiverem links, etc.
};

export type ScrollSpeed = 'slow' | 'normal' | 'fast';

export interface PartnerCarouselProps {
  logos: PartnerLogo[];
  scrollSpeed?: ScrollSpeed;
  className?: string; // Classes para o contêiner do carrossel
  logoClassName?: string; // Classes para cada item de logo
}

export interface CarouselLogoProps {
  logo: PartnerLogo;
  className?: string;
}