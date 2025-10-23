// src/components/tecnologia-educacional/TechCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
  logo: string;
  description: string;
}

export const TechCard: React.FC<TechCardProps> = ({ name, logo, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-24 mb-4">
        <Image src={logo} alt={name} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
