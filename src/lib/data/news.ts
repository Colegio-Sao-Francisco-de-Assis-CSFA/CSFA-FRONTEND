// src/lib/data/news.ts

import { NewsItem } from '@/components/index/News/types';

export const news: NewsItem[] = [
  {
    id: '1',
    category: 'Conquistas',
    categoryColor: 'blue-500',
    title: 'Alunos conquistam medalhas na Olimpíada de Matemática',
    excerpt: 'Estudantes do Ensino Fundamental II e Médio alcançaram resultados expressivos na competição nacional.',
    date: '12 de maio de 2023',
    slug: 'alunos-conquistam-medalhas-matematica',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '2',
    category: 'Parcerias',
    categoryColor: 'cyan-500',
    title: 'Nova parceria com instituto de tecnologia beneficiará alunos do Ensino Médio',
    excerpt: 'Acordo permitirá aos estudantes acesso a laboratórios avançados e mentoria de profissionais.',
    date: '28 de abril de 2023',
    slug: 'parceria-instituto-tecnologia',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '3',
    category: 'Eventos',
    categoryColor: 'pink-500',
    title: 'Feira de Ciências reúne projetos inovadores e surpreende visitantes',
    excerpt: 'Evento anual apresentou trabalhos desenvolvidos pelos alunos de todos os segmentos da escola.',
    date: '15 de abril de 2023',
    slug: 'feira-ciencias-projetos-inovadores',
    imageUrl: '/images/courses/finais.webp'
  },
  {
    id: '4',
    category: 'Cultura',
    categoryColor: 'yellow-500',
    title: 'Semana literária promove encontro com autores renomados',
    excerpt: 'Escritores conversaram com os alunos e compartilharam suas experiências no mundo da literatura.',
    date: '31 de março de 2023',
    slug: 'semana-literaria-autores',
    imageUrl: '/images/courses/finais.webp'
  }
];