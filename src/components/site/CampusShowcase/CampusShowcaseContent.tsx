// components/site/CampusShowcase/CampusShowcaseContent.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CampusShowcaseContentProps } from './types';

const CampusShowcaseContent: React.FC<CampusShowcaseContentProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      {/* Título principal */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Subtítulo/Parágrafo introdutório principal */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6"
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        {subtitle}
      </motion.p>

      <motion.span
        className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.span>
    </div>
  );
};

export default CampusShowcaseContent;