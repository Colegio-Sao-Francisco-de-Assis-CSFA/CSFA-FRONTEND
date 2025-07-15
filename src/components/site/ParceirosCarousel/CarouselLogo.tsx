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
      bg-white
      px-4
      rounded-2xl
      ${className}
    `}
  >
    {/* Adicionado um container com fundo para melhorar o contraste do logo */}
    <div className="flex items-center justify-center p-4 rounded-lg">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="object-contain w-full h-auto" // Remover o padding de md:p-6 daqui, pois já estamos adicionando padding no div pai
        loading="lazy"
        quality={100}
      />
    </div>
  </div>
);

export default CarouselLogo;