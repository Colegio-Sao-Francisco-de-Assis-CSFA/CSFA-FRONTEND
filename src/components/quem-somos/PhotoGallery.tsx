// src/components/quem-somos/PhotoGallery.tsx
import React from 'react';
import Image from 'next/image';

const images = [
  '/images/courses/infantil.webp',
  '/images/courses/iniciais.webp',
  '/images/courses/finais.webp',
  '/images/courses/medio.webp',
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nosso Dia a Dia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src={src} alt={`Galeria de fotos ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
