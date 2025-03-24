"use client";

import React from 'react';

interface PartnerLogoProps {
  src: string;
  alt: string;
}

interface PartnerCarouselProps {
  logos: PartnerLogoProps[];
}

const CarousselParceiros: React.FC<PartnerCarouselProps> = ({ logos }) => {
  // Duplicate logos for seamless infinite scroll
  const carouselLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-4 md:py-6">
      <div 
        className="partners-carousel"
      >
        {carouselLogos.map((logo, index) => (
          <div 
            key={index} 
            className="
              mx-3 md:mx-6 flex items-center justify-center 
              opacity-70 hover:opacity-100 
              transition-opacity duration-300 
              min-w-[80px] max-w-[120px] 
              md:min-w-[120px] md:max-w-[200px]
            "
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="
                max-h-10 md:max-h-16 
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarousselParceiros;