// src/components/tecnologia-educacional/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner/static/franciscano-1920.png')" }}>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Tecnologia que Transforma a Educação</h1>
        </div>
      </div>
    </section>
  );
};
