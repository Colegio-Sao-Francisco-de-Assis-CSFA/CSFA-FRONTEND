import React from 'react';
import { CarouselControls } from './types';

export const CarouselDots: React.FC<CarouselControls> = ({
  goToSlide,
  currentSlide,
  slidesCount,
}) => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex gap-2.5">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? 'bg-white scale-120'
              : 'bg-white bg-opacity-50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};