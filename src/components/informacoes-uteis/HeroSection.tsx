// src/components/informacoes-uteis/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Guia Rápido para a Família CSFA</h1>
        <p className="mt-4 text-lg">Tudo o que você precisa saber para o dia a dia no colégio.</p>
      </div>
    </div>
  );
};
