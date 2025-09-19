// components/site/news/NewsGrid.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { NewsCard } from './NewsCard';
import { NewsGridProps } from './types';

export const NewsGrid: React.FC<NewsGridProps> = ({
  news,
  title = 'Fique Por Dentro no "Acontece CSFA"',
  ctaLink = '/noticias',
  ctaText = 'Ver Todas as Notícias',
}) => {
  return (
    <div className="py-12 px-4 max-w-screen-2xl mx-auto flex flex-col gap-12 mt-12 bg-background">
      <div>
        <motion.h2
          // O gradiente do título é fixo. Se quiser que mude no dark mode,
          // você precisaria de variáveis CSS personalizadas ou gradientes diferentes.
          className="text-4xl max-w-2xl mx-auto text-center md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.span
          className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full
                     dark:bg-primary"> {/* A linha decorativa muda para primary no dark mode */}
        </motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm
                     text-white bg-blue-600 hover:bg-blue-700
                     dark:bg-primary dark:text-background dark:hover:bg-primary/90
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-primary" // Ajustado para dark mode
        >
          {ctaText}
        </Link>
      </motion.div>
    </div>
  );
};