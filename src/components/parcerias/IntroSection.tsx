// src/components/parcerias/IntroSection.tsx
import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Colaborações que Transformam</h2>
        <p className="text-lg text-gray-600">
          Acreditamos que a educação é um esforço coletivo. Por isso, buscamos parcerias com instituições que compartilham nossos valores e que agregam conhecimento, inovação e oportunidades para nossos alunos.
        </p>
      </div>
    </section>
  );
};
