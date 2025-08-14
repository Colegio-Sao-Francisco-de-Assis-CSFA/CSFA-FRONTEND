import React from 'react';
import { Segmento } from './types';
import { SegmentoCard } from './SegmentoCard';

interface SegmentosListProps {
  segmentos: Segmento[];
}

export const SegmentosList: React.FC<SegmentosListProps> = ({ segmentos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
      {segmentos.map((segmento) => (
        <SegmentoCard key={segmento.url} segmento={segmento} />
      ))}
    </div>
  );
};
