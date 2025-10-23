// src/components/metodologia-de-ensino/ProjectsSection.tsx
import React from 'react';
import Image from 'next/image';

const projects = [
  { title: 'Feira de Ciências', image: '/images/courses/finais.webp' },
  { title: 'Olimpíadas de Matemática', image: '/images/courses/medio.webp' },
  { title: 'Mostra Cultural', image: '/images/courses/iniciais.webp' },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos que Fazem a Diferença</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
