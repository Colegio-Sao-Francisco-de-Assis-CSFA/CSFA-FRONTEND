// src/components/matriculas/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner/static/franciscano-1920.png')" }}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Faça Parte da Nossa Família</h1>
          <p className="mt-4 text-lg md:text-xl">Matrículas Abertas para 2026</p>
        </div>
      </div>
    </section>
  );
};
