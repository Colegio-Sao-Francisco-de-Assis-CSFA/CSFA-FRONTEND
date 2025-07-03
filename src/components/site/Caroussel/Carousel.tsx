"use client";

import React from 'react';
import { CarouselSlide } from './CarouselSlide';
import { CarouselDots } from './CarouselDots';
import { CarouselArrows } from './CarouselArrows';
import { CarouselProps } from './types';
import useCarousel from '@/hooks/useCarousel';
import useAspectRatio from '@/hooks/useAspectRatio';

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  className = '',
}) => {
  const { isMobile, aspectRatio } = useAspectRatio();
  const { currentSlide, goToSlide, nextSlide, prevSlide, setAutoPlayActive } =
    useCarousel({
      slidesCount: slides.length,
      autoPlay,
      interval,
      isMobile
    });

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchEnd = (e: React.TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    };
    document.addEventListener('touchend', handleTouchEnd as any, { once: true });
  };

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden ${className}`}
      onMouseEnter={() => setAutoPlayActive(false)}
      onMouseLeave={() => setAutoPlayActive(autoPlay)}
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-full max-w-screen-xl h-full">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            isMobile={isMobile}
          />
        ))}
      </div>

      {showDots && <CarouselDots {...{ goToSlide, prevSlide, nextSlide, currentSlide, slidesCount: slides.length }} />}
      {showArrows && <CarouselArrows {...{ goToSlide, prevSlide, nextSlide, currentSlide, slidesCount: slides.length }} />}
    </div>
  );
};