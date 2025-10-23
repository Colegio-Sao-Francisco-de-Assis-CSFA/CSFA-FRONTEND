// src/components/quem-somos/MissionVisionValues.tsx
import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';

const items = [
  { icon: <Target />, title: 'Missão', description: 'Formar cidadãos críticos, criativos e conscientes, capazes de transformar a sociedade.' },
  { icon: <Eye />, title: 'Visão', description: 'Ser referência em educação inovadora, que inspira a excelência e o desenvolvimento humano.' },
  { icon: <Gem />, title: 'Valores', description: 'Ética, Respeito, Solidariedade, Inovação e Compromisso com a aprendizagem.' },
];

export const MissionVisionValues: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                {React.cloneElement(item.icon, { className: 'w-10 h-10 text-blue-600' })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
