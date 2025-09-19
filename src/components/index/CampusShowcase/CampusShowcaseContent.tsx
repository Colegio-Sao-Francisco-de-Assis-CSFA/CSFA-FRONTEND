// components/site/CampusShowcase/CampusShowcaseContent.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CampusShowcaseContentProps } from './types';

const CampusShowcaseContent: React.FC<CampusShowcaseContentProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      {/* Título principal - O gradiente é fixo. Se quiser que mude no dark mode,
          você precisaria de variáveis CSS personalizadas ou gradientes diferentes. */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight mb-4"
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Subtítulo/Parágrafo introdutório principal */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
        {subtitle}
      </motion.p>

      <motion.span
        className="block w-24 h-1 bg-primary mx-auto mt-6 rounded-full">
        </motion.span>
    </div>
  );
};

export default CampusShowcaseContent;