import React from 'react';
import { CarouselControls } from './types';

export const CarouselArrows: React.FC<CarouselControls> = ({
  prevSlide,
  nextSlide,
}) => {
  return (
    <>
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 text-xl text-white bg-black bg-opacity-50 p-2.5 rounded cursor-pointer transition-all duration-300 hover:bg-opacity-70"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 text-xl text-white bg-black bg-opacity-50 p-2.5 rounded cursor-pointer transition-all duration-300 hover:bg-opacity-70"
        aria-label="Next slide"
      >
        ❯
      </button>
    </>
  );
};