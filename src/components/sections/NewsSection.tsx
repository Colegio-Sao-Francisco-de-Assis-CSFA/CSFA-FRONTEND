// components/sections/NewsSection.tsx
'use client';

import React from 'react';
import { NewsGrid, NewsItem } from '@/components/index/News';
export default function NewsSection() {

  const newsData: NewsItem[] = [
    {
      id: '1',
      category: 'Conquistas',
      categoryColor: '#3465ed',
      title: 'Alunos conquistam medalhas na Olimpíada de Matemática',
      excerpt: 'Estudantes do Ensino Fundamental II e Médio alcançaram resultados expressivos na competição nacional.',
      date: '12 de maio de 2023',
      slug: 'alunos-conquistam-medalhas-matematica',
      imageUrl: '/images/news/news-math-olympiad.jpg' // Use um caminho de imagem real aqui
    },
    {
      id: '2',
      category: 'Parcerias',
      categoryColor: '#3465ed',
      title: 'Nova parceria com instituto de tecnologia beneficiará alunos do Ensino Médio',
      excerpt: 'Acordo permitirá aos estudantes acesso a laboratórios avançados e mentoria de profissionais.',
      date: '28 de abril de 2023',
      slug: 'parceria-instituto-tecnologia',
      imageUrl: '/images/news/news-tech-partnership.jpg' // Use um caminho de imagem real aqui
    },
    {
      id: '3',
      category: 'Eventos',
      categoryColor: '#3465ed',
      title: 'Feira de Ciências reúne projetos inovadores e surpreende visitantes',
      excerpt: 'Evento anual apresentou trabalhos desenvolvidos pelos alunos de todos os segmentos da escola.',
      date: '15 de abril de 2023',
      slug: 'feira-ciencias-projetos-inovadores',
      imageUrl: '/images/news/news-science-fair.jpg' // Use um caminho de imagem real aqui
    },
    {
      id: '4',
      category: 'Cultura',
      categoryColor: '#3465ed',
      title: 'Semana literária promove encontro com autores renomados',
      excerpt: 'Escritores conversaram com os alunos e compartilharam suas experiências no mundo da literatura.',
      date: '31 de março de 2023',
      slug: 'semana-literaria-autores',
      imageUrl: '/images/news/news-literary-week.jpg' // Use um caminho de imagem real aqui
    }
  ];

  return <NewsGrid news={newsData} />;
}