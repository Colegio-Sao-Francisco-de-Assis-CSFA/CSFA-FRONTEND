// components/ParceirosCarousel/PartnerCarousel.tsx
"use client";

import React, { useMemo, useEffect, useRef } from 'react';
import { PartnerCarouselProps, ScrollSpeed } from './types';
import CarouselLogo from './CarouselLogo';

const SCROLL_SPEED_MAP: Record<ScrollSpeed, number> = {
  slow: 60,
  normal: 30,
  fast: 20,
};

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({
  logos,
  scrollSpeed = 'normal',
  className = '',
  logoClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duration = SCROLL_SPEED_MAP[scrollSpeed];

  // Duplicar logos apenas uma vez para scroll infinito
  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;

    if (!firstChild) return;

    // Calcular a largura real do primeiro conjunto de logos
    const scrollWidth = firstChild.scrollWidth;

    // Criar animação CSS dinâmica baseada na largura real
    const styleId = 'carousel-animation';
    let existingStyle = document.getElementById(styleId);

    if (existingStyle) {
      existingStyle.remove();
    }

    const styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.textContent = `
      @keyframes smoothScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .smooth-carousel {
        animation: smoothScroll ${duration}s linear infinite;
      }

      .smooth-carousel:hover {
        animation-play-state: paused;
      }
    `;

    document.head.appendChild(styleSheet);

    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, [duration, logos]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Gradiente esquerdo */}
      <div
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradiente direito */}
      <div
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Container do carousel */}
      <div
        ref={containerRef}
        className="flex smooth-carousel"
        style={{
          width: '280%', // Exactly double width for seamless loop
        }}
      >
        {/* Primeiro conjunto */}
        <div className="flex" style={{ width: '50%' }}>
          {logos.map((logo, index) => (
            <CarouselLogo
              key={`first-${logo.alt}-${index}`}
              logo={logo}
              className={logoClassName}
            />
          ))}
        </div>

        {/* Segundo conjunto (duplicado) */}
        <div className="flex" style={{ width: '50%' }}>
          {logos.map((logo, index) => (
            <CarouselLogo
              key={`second-${logo.alt}-${index}`}
              logo={logo}
              className={logoClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;