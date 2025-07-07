// components/site/news/NewsGrid.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NewsCard } from './NewsCard';
import { NewsGridProps } from './types';

export const NewsGrid: React.FC<NewsGridProps> = ({
  news,
  title = 'Fique Por Dentro no "Acontece CSFA"', // Título padrão
  ctaLink = '/noticias', // Link padrão
  ctaText = 'Ver Todas as Notícias', // Texto padrão
}) => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto flex flex-col gap-12 mt-12">
      <div>
        <motion.h2
          className="text-4xl max-w-2xl mx-auto text-center md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.span
          className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        ></motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href={ctaLink}
          className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};