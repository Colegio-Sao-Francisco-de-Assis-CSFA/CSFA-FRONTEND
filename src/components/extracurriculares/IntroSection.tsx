// src/components/extracurriculares/IntroSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  return (
    <motion.section 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.p 
          className="text-xl text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          No nosso colégio, a educação não se limita às disciplinas tradicionais. Incentivamos os alunos a explorarem novas habilidades, desenvolverem talentos e se destacarem em diferentes áreas através de atividades extracurriculares que unem prática, criatividade e espírito de equipe.
        </motion.p>
      </div>
    </motion.section>
  );
};
