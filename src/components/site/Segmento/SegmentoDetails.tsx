import React from 'react';
import { Segmento } from './types';
import { CourseCard } from './SeCourseCard';
import { DiferenciaisSection } from './SegmentoDiferenciais';

interface SegmentoDetailsProps {
  segmento: Segmento;
}

export const SegmentoDetails: React.FC<SegmentoDetailsProps> = ({ segmento }) => {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-12 md:py-36 lg:py-42">

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
