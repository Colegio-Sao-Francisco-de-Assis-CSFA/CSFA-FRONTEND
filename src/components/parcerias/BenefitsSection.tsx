// src/components/parcerias/BenefitsSection.tsx
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Acesso a plataformas educacionais de ponta.',
  'Descontos em cursos de idiomas e atividades esportivas.',
  'Participação em programas e competições exclusivas.',
  'Contato com novas tecnologias e metodologias de ensino.',
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Vantagens para Nossos Alunos</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
