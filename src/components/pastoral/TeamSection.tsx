// src/components/pastoral/TeamSection.tsx
import React from 'react';
import Image from 'next/image';

const team = [
  { name: 'Nome do Coordenador', role: 'Coordenador da Pastoral', image: '/images/founders/placeholder-1.jpg' },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
        <div className="flex justify-center">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
