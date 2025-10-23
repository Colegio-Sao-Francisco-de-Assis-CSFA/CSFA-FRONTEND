// src/components/extracurriculares/InteractiveHero.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const InteractiveHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner/static/franciscano-1920.png')" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Explore Nossos Talentos</h1>
          <p className="mt-4 text-lg md:text-xl">Aprendizado que vai além da sala de aula</p>
        </motion.div>
      </div>
    </section>
  );
};
