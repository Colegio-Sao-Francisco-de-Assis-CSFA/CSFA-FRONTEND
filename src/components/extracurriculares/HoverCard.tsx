// src/components/extracurriculares/HoverCard.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  title: string;
  image: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({ title, image }) => {
  return (
    <motion.div
      className="relative h-80 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex items-end p-6">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
};
