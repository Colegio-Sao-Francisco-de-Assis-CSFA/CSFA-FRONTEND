// src/components/matriculas/CtaSection/CtaSection.tsx
'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Pronto para Começar?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Garanta a vaga do seu filho em uma escola que transforma sonhos em realidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-lg text-lg font-bold hover:bg-yellow-500 transform transition shadow-xl">
            Inscreva-se Agora
          </button>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 transform transition shadow-xl">
            Agendar Visita
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
