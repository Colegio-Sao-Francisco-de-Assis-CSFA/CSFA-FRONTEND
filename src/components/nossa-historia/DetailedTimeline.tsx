// src/components/nossa-historia/DetailedTimeline.tsx
'use client';
import React, { useState } from 'react';

const events = [
  {
    year: '1980',
    title: 'A Semente da Educação',
    description: 'Em um pequeno prédio alugado, o Colégio São Francisco de Assis nasce com a missão de oferecer um ensino infantil de qualidade, pautado no amor e no respeito.',
    image: '/images/courses/infantil.webp',
  },
  {
    year: '1995',
    title: 'Crescendo com a Comunidade',
    description: 'Com a confiança dos pais e o crescimento do número de alunos, o colégio expande suas instalações e inaugura o Ensino Fundamental, um marco em nossa história.',
    image: '/images/courses/iniciais.webp',
  },
  {
    year: '2010',
    title: 'Abraçando a Inovação',
    description: 'Sempre atentos às novas demandas da educação, investimos em tecnologia, formação de professores e parcerias estratégicas, consolidando nossa proposta pedagógica.',
    image: '/images/courses/finais.webp',
  },
  {
    year: '2024',
    title: 'Um Legado para o Futuro',
    description: 'Com mais de 40 anos de história, celebramos nosso legado e reafirmamos nosso compromisso com uma educação que transforma vidas e prepara para o futuro.',
    image: '/images/courses/medio.webp',
  },
];

export const DetailedTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event.year}>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className={`w-full text-left p-4 rounded-lg ${selectedEvent.year === event.year ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                  >
                    <span className="font-bold text-lg">{event.year}</span>
                    <span className="block text-sm">{event.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
              <p className="text-gray-600">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
