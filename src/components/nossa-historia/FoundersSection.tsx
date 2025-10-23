// src/components/nossa-historia/FoundersSection.tsx
import React from 'react';
import Image from 'next/image';

const founders = [
  { name: 'Nome do Fundador 1', role: 'Fundador e Diretor Pedagógico', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/images/courses/iniciais.webp' },
  { name: 'Nome do Fundador 2', role: 'Fundadora e Diretora Administrativa', bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: '/images/courses/finais.webp' },
];

export const FoundersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Fundadores</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mr-6">
                <Image src={founder.image} alt={founder.name} layout="fill" objectFit="cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{founder.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{founder.role}</p>
                <p className="text-gray-600">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
