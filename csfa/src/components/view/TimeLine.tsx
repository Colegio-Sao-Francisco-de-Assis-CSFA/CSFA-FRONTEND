'use client';

import { motion } from "framer-motion";
import React from "react";

// Você pode importar ícones específicos conforme necessário
import { Calendar, School, Monitor, Award, Trophy, Lightbulb } from "lucide-react";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<{ event: TimelineEvent; isEven: boolean }> = ({ event, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pb-16 md:pb-24"
    >
      {/* Conector vertical (visível apenas em dispositivos móveis) */}
      <div className="md:hidden absolute left-6 top-8 bottom-0 w-0.5 bg-blue-200"></div>

      {/* Marcador circular com ícone */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white z-10 shadow-lg">
        <div className="text-white">
          {event.icon}
        </div>
      </div>

      <div className={`ml-24 md:ml-0 md:w-5/12 ${isEven ? 'md:ml-auto md:pr-16' : 'md:mr-auto md:pl-16'}`}>
        <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 ${isEven ? 'md:text-right' : ''}`}>
          <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-white bg-blue-600 rounded-full">
            {event.year}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-700">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const timelineData: TimelineEvent[] = [
    {
      id: 1,
      year: '1985',
      title: 'Fundação',
      description: 'Inauguração do Colégio Educacional com apenas 3 salas de aula e 45 alunos.',
      icon: <School size={20} />,
    },
    {
      id: 2,
      year: '1992',
      title: 'Expansão',
      description: 'Ampliação do campus com novas instalações e laboratórios de ciências.',
      icon: <Calendar size={20} />,
    },
    {
      id: 3,
      year: '2001',
      title: 'Revolução Digital',
      description: 'Implementação de tecnologia em salas de aula e laboratório de informática.',
      icon: <Monitor size={20} />,
    },
    {
      id: 4,
      year: '2010',
      title: 'Centro Esportivo',
      description: 'Inauguração do complexo esportivo com quadras poliesportivas e piscina.',
      icon: <Trophy size={20} />,
    },
    {
      id: 5,
      year: '2018',
      title: 'Reconhecimento',
      description: 'Premiação como uma das melhores instituições de ensino da região.',
      icon: <Award size={20} />,
    },
    {
      id: 6,
      year: 'Hoje',
      title: 'Inovação Contínua',
      description: 'Constante aprimoramento pedagógico e estrutural para oferecer a melhor educação.',
      icon: <Lightbulb size={20} />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Nossa Trajetória</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Acompanhe a evolução e o crescimento da nossa instituição ao longo dos anos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha vertical central (apenas em desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {/* Itens da timeline */}
          <div>
            {timelineData.map((event, index) => (
              <TimelineItem key={event.id} event={event} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;