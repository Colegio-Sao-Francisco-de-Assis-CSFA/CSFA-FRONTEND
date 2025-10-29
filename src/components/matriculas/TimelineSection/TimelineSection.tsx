// src/components/matriculas/TimelineSection/TimelineSection.tsx
'use client';

import React from 'react';
import { FileText, School, Users, Check } from 'lucide-react';

interface StepItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  index: number;
  isLast: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ icon: Icon, title, description, color, index, isLast }) => (
  <div className="flex items-start mb-12 last:mb-0 relative">
    <div className="flex-shrink-0">
      <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>
        <Icon className="w-8 h-8" />
      </div>
    </div>

    <div className="ml-8 flex-grow">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
        <div className="flex items-center mb-3">
          <span className="text-blue-600 font-black text-sm uppercase tracking-wider">
            Etapa {index + 1}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>

    {!isLast && (
      <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-200"></div>
    )}
  </div>
);

const steps = [
  {
    icon: FileText,
    title: 'Inscrição Online',
    description: 'Preencha o formulário de interesse em poucos minutos.',
    color: 'bg-blue-500'
  },
  {
    icon: School,
    title: 'Visita à Escola',
    description: 'Conheça nosso campus e toda infraestrutura.',
    color: 'bg-purple-500'
  },
  {
    icon: Users,
    title: 'Entrevista',
    description: 'Conversamos com família e aluno sobre expectativas.',
    color: 'bg-cyan-500'
  },
  {
    icon: Check,
    title: 'Matrícula',
    description: 'Finalize e garanta sua vaga para 2026.',
    color: 'bg-pink-500'
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-600">
            Processo de Matrícula
          </h2>
          <p className="text-gray-600 text-lg">Simples, rápido e transparente</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
