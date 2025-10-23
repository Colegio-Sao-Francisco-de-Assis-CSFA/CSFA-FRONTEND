// src/components/nossa-historia/HistoricalGallery.tsx
import React from 'react';
import Image from 'next/image';

const images = [
  '/images/courses/infantil.webp',
  '/images/courses/iniciais.webp',
  '/images/courses/finais.webp',
  '/images/courses/medio.webp',
  '/images/courses/infantil.webp',
  '/images/courses/iniciais.webp',
];

export const HistoricalGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Galeria Histórica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src={src} alt={`Galeria histórica ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
