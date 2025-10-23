// src/components/pastoral/ActivitiesSection.tsx
import React from 'react';
import Image from 'next/image';

const activities = [
  { title: 'Missa Mensal', image: '/images/courses/iniciais.webp' },
  { title: 'Retiro Espiritual', image: '/images/courses/finais.webp' },
  { title: 'Campanha do Agasalho', image: '/images/courses/medio.webp' },
];

export const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Atividades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src={activity.image} alt={activity.title} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
