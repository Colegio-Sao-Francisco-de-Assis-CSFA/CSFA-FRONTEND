// components/site/news/NewsCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { NewsCardProps } from './types';

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <motion.div
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full
                 dark:border-border dark:bg-secondary dark:shadow-none dark:hover:shadow-lg" // Ajustado para dark mode
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Category Badge positioned on the image */}
        <span
          className={`absolute top-3 left-3 inline-block rounded-md text-xs font-medium text-white px-3 py-1 z-10`}
          style={{ backgroundColor: item.categoryColor }} // A cor da categoria é dinâmica e não é afetada pelo dark mode automaticamente
        >
          {item.category}
        </span>
      </div>

      {/* News Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2
                       dark:text-foreground"> {/* Título muda para foreground no dark mode */}
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3
                       dark:text-muted-foreground"> {/* Resumo muda para muted-foreground no dark mode */}
          {item.excerpt}
        </p>
      </div>

      {/* Date and Read More */}
      <div className="p-4 pt-0 border-t border-gray-100 mt-auto
                      dark:border-border"> {/* Borda superior muda para border no dark mode */}
        <div className="flex items-center text-gray-500 text-sm mb-2
                       dark:text-muted-foreground"> {/* Texto da data e ícone de calendário */}
          <CalendarIcon size={16} className="mr-1" />
          <span>{item.date}</span>
        </div>
        <Link href={item.slug} className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium
                                       dark:text-primary dark:hover:text-primary/90"> {/* Link "Leia Mais" e ícone */}
          Leia Mais
          <ChevronRightIcon size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};