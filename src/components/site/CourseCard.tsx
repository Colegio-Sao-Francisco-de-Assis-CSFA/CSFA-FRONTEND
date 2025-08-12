import React from 'react';
import Image from 'next/image';
import { Course } from '@/app/segmentos/types';

interface CourseCardProps {
  curso: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ curso }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{curso.nome}</h2>
      <p className="text-gray-700 mb-4">{curso.descricao}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {curso.path.map((path, index) => (
          <div key={index} className="relative h-64">
            <Image src={path.img1} alt={curso.nome} fill className="object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};
