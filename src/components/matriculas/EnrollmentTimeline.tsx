// src/components/matriculas/EnrollmentTimeline.tsx
import React from 'react';
import { FileText, School, Users, Check } from 'lucide-react';

const steps = [
  { icon: <FileText />, title: 'Inscrição Online', description: 'Preencha o formulário de interesse.' },
  { icon: <School />, title: 'Visita à Escola', description: 'Agende uma visita para conhecer nosso campus.' },
  { icon: <Users />, title: 'Entrevista', description: 'Uma conversa com nossa equipe pedagógica.' },
  { icon: <Check />, title: 'Matrícula', description: 'Finalize a matrícula e garanta sua vaga.' },
];

export const EnrollmentTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nosso Processo de Matrícula</h2>
        <div className="relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-300"></div>
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 flex justify-center">
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
