import React from 'react';
import { Segmento } from '@/app/segmentos/types';
import { CourseCard } from './CourseCard';
import { DiferenciaisSection } from './DiferenciaisSection';

interface SegmentoDetailsProps {
  segmento: Segmento;
}

export const SegmentoDetails: React.FC<SegmentoDetailsProps> = ({ segmento }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{segmento.cursos.map(curso => curso.nome).join(' e ')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {segmento.cursos.map((curso) => (
            <CourseCard key={curso.nome} curso={curso} />
          ))}
        </div>
        <div>
          {segmento.diferenciais && <DiferenciaisSection diferenciais={segmento.diferenciais} />}
        </div>
      </div>
    </div>
  );
};
