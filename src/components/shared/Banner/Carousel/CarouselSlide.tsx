"use client";

import React from 'react';
import { Slide, CarouselSlideProps } from './types';

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slide,
  isActive,
  isMobile,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'
        } ${className}`}
    >
      {isMobile ? (
        <img
          src={slide.mobileImage || slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      ) : (
        <img
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
      )}
    </div>
  );
};