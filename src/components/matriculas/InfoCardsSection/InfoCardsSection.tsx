// src/components/matriculas/InfoCardsSection/InfoCardsSection.tsx
'use client';

import React from 'react';
import { Book, Calendar, Award } from 'lucide-react';

interface InfoCardItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
  iconColor: string;
}

const InfoCardItem: React.FC<InfoCardItemProps> = ({ icon: Icon, title, content, iconColor }) => (
  <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex justify-center mb-6">
      <div className={`${iconColor} w-20 h-20 rounded-xl flex items-center justify-center shadow-md`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{content}</p>
  </div>
);

const infoCards = [
  {
    icon: Book,
    title: 'Documentos',
    content: 'RG, CPF, Comprovante de Residência e Histórico Escolar.',
    iconColor: 'bg-blue-500'
  },
  {
    icon: Calendar,
    title: 'Prazos 2026',
    content: 'Matrículas abertas de 1 de Agosto a 30 de Novembro de 2025.',
    iconColor: 'bg-purple-500'
  },
  {
    icon: Award,
    title: 'Bolsas de Estudo',
    content: 'Diversas modalidades disponíveis. Consulte nossa equipe.',
    iconColor: 'bg-yellow-500'
  },
];

const InfoCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((item, index) => (
            <InfoCardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
