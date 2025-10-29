// src/components/matriculas/ValuesSection/ValuesSection.tsx
'use client';

import React from 'react';
import { Sparkles, Heart, Lightbulb, Target } from 'lucide-react';

interface ValueItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon: Icon, title, description, color }) => (
  <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
    <Icon className={`w-12 h-12 ${color} mb-4`} />
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const values = [
  {
    icon: Heart,
    title: 'Acolhimento',
    description: 'Cada aluno é único e especial',
    color: 'text-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Metodologias modernas de ensino',
    color: 'text-yellow-500'
  },
  {
    icon: Target,
    title: 'Excelência',
    description: 'Compromisso com resultados',
    color: 'text-cyan-500'
  },
  {
    icon: Sparkles,
    title: 'Transformação',
    description: 'Formamos cidadãos completos',
    color: 'text-purple-500'
  }
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-600">
            Nossos Valores
          </h2>
          <p className="text-gray-600 text-lg">O que nos torna especiais</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueItem key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
