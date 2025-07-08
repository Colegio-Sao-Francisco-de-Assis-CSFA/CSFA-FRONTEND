// components/site/CampusShowcase/CampusShowcaseCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { CampusShowcaseCardProps } from './types';

const CampusShowcaseCard: React.FC<CampusShowcaseCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 w-full"> {/* A altura do card */}
        <Image
          src={feature.imageSrc}
          alt={feature.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default CampusShowcaseCard;