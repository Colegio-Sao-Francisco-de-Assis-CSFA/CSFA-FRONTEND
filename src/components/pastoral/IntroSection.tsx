// src/components/pastoral/IntroSection.tsx
import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Formação Humana e Cristã</h2>
        <p className="text-lg text-gray-600">
          A Pastoral do Colégio São Francisco de Assis é um espaço de acolhida, reflexão e vivência da espiritualidade. Acreditamos que a formação de valores e o cuidado com o próximo são fundamentais para o desenvolvimento integral dos nossos alunos.
        </p>
      </div>
    </section>
  );
};
