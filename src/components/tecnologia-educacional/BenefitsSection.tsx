// src/components/tecnologia-educacional/BenefitsSection.tsx
import React from 'react';
import { Zap, Users, Target } from 'lucide-react';

const benefits = [
  { icon: <Zap />, title: 'Aprendizado Dinâmico', description: 'Aulas mais interativas e engajadoras.' },
  { icon: <Users />, title: 'Desenvolvimento de Habilidades', description: 'Preparo para as competências do século XXI.' },
  { icon: <Target />, title: 'Foco no Aluno', description: 'Personalização do ensino de acordo com o ritmo de cada um.' },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefícios para o Aluno</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4">{React.cloneElement(benefit.icon, { size: 48 })}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
