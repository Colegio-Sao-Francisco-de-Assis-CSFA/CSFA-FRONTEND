export interface Slide {
  id: string;
  image: string;
  mobileImage?: string;
  alt: string;
  title?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export interface CarouselControls {
  goToSlide: (index: number) => void;
  prevSlide: () => void;
  nextSlide: () => void;
  currentSlide: number;
  slidesCount: number;
}