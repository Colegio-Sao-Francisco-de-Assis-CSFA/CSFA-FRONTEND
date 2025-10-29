// src/components/matriculas/HeroSection/HeroSection.tsx
'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-blue-600">
      <div className="absolute inset-0 bg-blue-600"></div>

      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="inline-block mb-6">
            <span className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              Matrículas 2026 Abertas
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Faça Parte da Nossa Família Franciscana
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Educação que transforma vidas e constrói futuros
          </p>
          <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-lg text-lg font-bold hover:bg-yellow-500 transform transition shadow-xl">
            Inscreva-se Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
