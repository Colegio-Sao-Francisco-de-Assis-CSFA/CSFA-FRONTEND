// src/components/pastoral/PillarsSection.tsx
import React from 'react';
import { Heart, Users, Handshake, Sparkles } from 'lucide-react';

const pillars = [
  { icon: <Heart />, title: 'Acolhida', description: 'Um ambiente de escuta e diálogo, onde todos se sentem bem-vindos e amparados.' },
  { icon: <Handshake />, title: 'Solidariedade', description: 'Incentivamos a participação em campanhas e projetos sociais, despertando a consciência para o próximo.' },
  { icon: <Sparkles />, title: 'Espiritualidade', description: 'Momentos de oração, missas e retiros que fortalecem a fé e a conexão com o sagrado.' },
  { icon: <Users />, title: 'Protagonismo Juvenil', description: 'Os jovens são convidados a liderar ações e a serem agentes de transformação na comunidade.' },
];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4">{React.cloneElement(pillar.icon, { size: 48 })}</div>
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
