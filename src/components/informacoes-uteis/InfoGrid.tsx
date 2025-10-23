// src/components/informacoes-uteis/InfoGrid.tsx
import React from 'react';
import { InfoCard } from './InfoCard';
import { Clock, Calendar, Shirt, BookOpen, Utensils } from 'lucide-react';

const infoItems = [
  {
    icon: <Clock size={40} />,
    title: 'Horários',
    description: 'Confira os horários de entrada, saída e da secretaria.',
    href: '#horarios',
  },
  {
    icon: <Calendar size={40} />,
    title: 'Calendário Acadêmico',
    description: 'Fique por dentro das datas importantes do ano letivo.',
    href: '#calendario',
  },
  {
    icon: <Shirt size={40} />,
    title: 'Uniformes',
    description: 'Veja as diretrizes e modelos do uniforme escolar.',
    href: '#uniformes',
  },
  {
    icon: <BookOpen size={40} />,
    title: 'Material Escolar',
    description: 'Acesse a lista de materiais para cada série.',
    href: '#material',
  },
  {
    icon: <Utensils size={40} />,
    title: 'Cardápio',
    description: 'Consulte o cardápio semanal do nosso refeitório.',
    href: '#cardapio',
  },
];

export const InfoGrid: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
