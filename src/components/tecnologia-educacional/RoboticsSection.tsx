// src/components/tecnologia-educacional/RoboticsSection.tsx
import React from 'react';
import Image from 'next/image';

export const RoboticsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Robótica Educacional</h2>
            <p className="text-gray-600">
              Nossas aulas de robótica vão além da montagem de robôs. Os alunos aprendem a programar, a resolver problemas em equipe e a aplicar conceitos de matemática e física de forma prática e divertida. Participamos ativamente de competições e olimpíadas, incentivando nossos jovens inventores a irem cada vez mais longe.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image src="/images/courses/medio.webp" alt="Robótica Educacional" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
