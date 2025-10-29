"use client";

import React from 'react';
import { CarouselSlideProps } from './types';
import Button from '@/components/shared/Button';

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
      {/* Image with overlay */}
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4 max-w-4xl">
          {slide.title && (
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {slide.title}
            </h2>
          )}
          {slide.description && (
            <p className="text-lg md:text-xl mb-6">
              {slide.description}
            </p>
          )}
          {slide.cta && (
            <Button href={slide.cta.link} variant="csfa" size="lg">
              {slide.cta.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
