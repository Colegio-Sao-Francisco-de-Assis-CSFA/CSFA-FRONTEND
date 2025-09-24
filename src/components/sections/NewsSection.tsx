'use client';

// components/sections/NewsSection.tsx


import React from 'react';
import { motion } from 'motion/react';
import { NewsCard } from '@/components/index/News//NewsCard';
import { NewsItem } from '@/components/index/News/types';
import TitleHeaderComponent from '@/components/shared/TitleHeader';

const news: NewsItem[] = [
  {
    id: '1',
    category: 'Conquistas',
    categoryColor: '#3465ed',
    title: 'Alunos conquistam medalhas na Olimpíada de Matemática',
    excerpt: 'Estudantes do Ensino Fundamental II e Médio alcançaram resultados expressivos na competição nacional.',
    date: '12 de maio de 2023',
    slug: 'alunos-conquistam-medalhas-matematica',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '2',
    category: 'Parcerias',
    categoryColor: '#3465ed',
    title: 'Nova parceria com instituto de tecnologia beneficiará alunos do Ensino Médio',
    excerpt: 'Acordo permitirá aos estudantes acesso a laboratórios avançados e mentoria de profissionais.',
    date: '28 de abril de 2023',
    slug: 'parceria-instituto-tecnologia',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '3',
    category: 'Eventos',
    categoryColor: '#3465ed',
    title: 'Feira de Ciências reúne projetos inovadores e surpreende visitantes',
    excerpt: 'Evento anual apresentou trabalhos desenvolvidos pelos alunos de todos os segmentos da escola.',
    date: '15 de abril de 2023',
    slug: 'feira-ciencias-projetos-inovadores',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '4',
    category: 'Cultura',
    categoryColor: '#3465ed',
    title: 'Semana literária promove encontro com autores renomados',
    excerpt: 'Escritores conversaram com os alunos e compartilharam suas experiências no mundo da literatura.',
    date: '31 de março de 2023',
    slug: 'semana-literaria-autores',
    imageUrl: '/images/courses/finais.webp'
  }
];

export default function NewsSection() {

  const title = "Acontece CSA"
  const subtitle = 'Fique por dentro das notícias, atualidades, premiações e muito mais no blog "Acontece CSFA" do Colégio São Francisco De Assis.'


  return (
    <div className="py-12 px-4 max-w-screen-2xl mx-auto flex flex-col gap-12 mt-12 bg-background">

      <TitleHeaderComponent
        title={title}
        subtitle={subtitle}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </motion.div>

    </div>
  );
};