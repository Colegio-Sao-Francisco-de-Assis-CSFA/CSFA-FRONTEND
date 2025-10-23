// src/components/tecnologia-educacional/TechGrid.tsx
import React from 'react';
import { TechCard } from './TechCard';

const technologies = [
  { name: 'SAS Educação', logo: '/images/partners/sas.png', description: 'Recursos de estudo, avaliações e plataforma de aprendizado.' },
  { name: 'Educacross', logo: '/images/partners/placeholder.png', description: 'Plataforma de jogos educativos para um aprendizado divertido.' },
  { name: 'Eureca', logo: '/images/partners/placeholder.png', description: 'Sistema gamificado que estimula o engajamento e a colaboração.' },
  { name: 'Google Classroom', logo: '/images/partners/google.png', description: 'Ambiente virtual para entrega de trabalhos e comunicação.' },
  { name: 'Canva Educação', logo: '/images/partners/placeholder.png', description: 'Ferramenta de design para projetos criativos.' },
  { name: 'Robótica Educacional', logo: '/images/partners/maker.png', description: 'Aulas práticas que desenvolvem o raciocínio lógico e a criatividade.' },
];

export const TechGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
