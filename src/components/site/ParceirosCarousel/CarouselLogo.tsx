// components/ParceirosCarousel/CarouselLogo.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { CarouselLogoProps } from './types'; // Importe os tipos

const CarouselLogo: React.FC<CarouselLogoProps> = ({ logo, className = '' }) => (
  <div
    className={`
      mx-3 md:mx-6 flex items-center justify-center
      opacity-70 hover:opacity-100
      transition-opacity duration-300
      min-w-[80px] max-w-[120px]
      md:min-w-[120px] md:max-w-[200px]
      flex-shrink-0
      ${className}
    `}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width || 120}
      height={logo.height || 40}
      className="object-contain w-full h-auto"
      loading="lazy"
      quality={85}
    />
  </div>
);

export default CarouselLogo;