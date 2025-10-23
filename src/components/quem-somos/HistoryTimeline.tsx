// src/components/quem-somos/HistoryTimeline.tsx
import React from 'react';

const timelineEvents = [
  { year: '1980', title: 'Fundação', description: 'O Colégio São Francisco de Assis inicia suas atividades com o Ensino Infantil.' },
  { year: '1995', title: 'Expansão', description: 'Inauguração do Ensino Fundamental, ampliando nossa atuação na comunidade.' },
  { year: '2010', title: 'Inovação', description: 'Implementação de novas tecnologias em sala de aula e parcerias estratégicas.' },
  { year: '2024', title: 'Futuro', description: 'Mais de 40 anos de história, olhando para o futuro da educação.' },
];

export const HistoryTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Trajetória</h2>
        <div className="relative">
          <div className="border-l-2 border-blue-600 absolute h-full top-0 left-1/2 -ml-px"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className="w-1/2 order-1">
                <div className={`p-4 rounded-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="w-1/2 order-1">
                 <div className={`p-4 rounded-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="text-xl font-bold">{event.year}</p>
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
