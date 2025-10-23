// src/components/extracurriculares/ActivitiesGrid.tsx
import React from 'react';
import { HoverCard } from './HoverCard';

const activities = [
  { title: 'Esportes', image: '/images/courses/finais.webp' },
  { title: 'Tecnologia', image: '/images/courses/medio.webp' },
  { title: 'Artes', image: '/images/courses/iniciais.webp' },
];

export const ActivitiesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <HoverCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};
