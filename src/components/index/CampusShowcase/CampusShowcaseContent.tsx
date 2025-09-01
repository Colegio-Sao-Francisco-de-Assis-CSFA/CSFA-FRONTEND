// components/site/CampusShowcase/CampusShowcaseContent.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CampusShowcaseContentProps } from './types';

const CampusShowcaseContent: React.FC<CampusShowcaseContentProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      {/* Título principal - O gradiente é fixo. Se quiser que mude no dark mode,
          você precisaria de variáveis CSS personalizadas ou gradientes diferentes. */}
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
        className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6
                   dark:text-muted-foreground"> {/* Subtítulo muda para muted-foreground no dark mode */}
        {subtitle}
      </motion.p>

      <motion.span
        className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full
                   dark:bg-primary"> {/* A linha decorativa muda para primary no dark mode */}
        </motion.span>
    </div>
  );
};

export default CampusShowcaseContent;