// src/components/quem-somos/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner/static/franciscano-1920.png')" }}>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Nossa Essência</h1>
          <p className="mt-4 text-lg md:text-xl">Conheça o Colégio São Francisco de Assis</p>
        </div>
      </div>
    </section>
  );
};
