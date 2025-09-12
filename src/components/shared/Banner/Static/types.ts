export interface StaticBannerProps {
  image: string;
  mobileImage?: string;
  alt: string;
  title?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
    onClick?: () => void;
  };
  className?: string;
  contentPosition?: 'left' | 'center' | 'right';
  overlay?: boolean;
  overlayOpacity?: number;
}