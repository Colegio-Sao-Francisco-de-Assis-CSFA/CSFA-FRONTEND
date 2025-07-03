// components/ParceirosCarousel/PartnerCarousel.tsx
"use client";

import React, { useMemo } from 'react';
import { PartnerCarouselProps, ScrollSpeed } from './types'; // Importe os tipos
import CarouselLogo from './CarouselLogo'; // Importe o sub-componente

const SCROLL_SPEED_MAP: Record<ScrollSpeed, string> = {
  slow: 'animate-scroll-slow',
  normal: 'animate-scroll',
  fast: 'animate-scroll-fast',
};

const LOGO_DUPLICATION_FACTOR = 5; // For seamless infinite scroll

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({
  logos,
  scrollSpeed = 'fast',
  className = '',
  logoClassName = '',
}) => {
  const carouselLogos = useMemo(
    () => Array.from({ length: LOGO_DUPLICATION_FACTOR }).flatMap(() => logos),
    [logos]
  );

  const animationClass = SCROLL_SPEED_MAP[scrollSpeed];

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Gradient fade effect - using before/after pseudo-elements would be better but need client-side JS */}
      <div
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className={`flex ${animationClass}`}>
        {carouselLogos.map((logo, index) => (
          <CarouselLogo
            key={`${logo.alt}-${index}`}
            logo={logo}
            className={logoClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;