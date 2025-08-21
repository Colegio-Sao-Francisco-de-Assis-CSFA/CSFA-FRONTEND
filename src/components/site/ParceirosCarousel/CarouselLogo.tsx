// components/ParceirosCarousel/CarouselLogo.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { CarouselLogoProps } from './types'; // Importe os tipos

const CarouselLogo: React.FC<CarouselLogoProps> = ({ logo, className = '' }) => (
  <div
    className={`
      mx-6 flex items-center justify-center
      opacity-70 hover:opacity-100
      transition-opacity duration-300
      min-w-[80px] max-w-[120px]
      md:min-w-[120px] md:max-w-[200px]
      flex-shrink-0
      lg:px-6
      bg-white
      rounded-2xl
      ${className}
    `}
  >
    <div className="flex items-center justify-center rounded-lg">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        loading="lazy"
        quality={100}
      />
    </div>
  </div>
);

export default CarouselLogo;