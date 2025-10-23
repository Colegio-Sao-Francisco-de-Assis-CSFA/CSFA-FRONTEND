// src/components/extracurriculares/AsymmetricSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface AsymmetricSectionProps {
  title: string;
  children: React.ReactNode;
  image: string;
  reverse?: boolean;
}

export const AsymmetricSection: React.FC<AsymmetricSectionProps> = ({ title, children, image, reverse = false }) => {
  return (
    <motion.section
      className="py-20 bg-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-wrap items-center ${reverse ? 'flex-row-reverse' : ''}`}>
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="text-gray-600 space-y-4">{children}</div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src={image} alt={title} className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
