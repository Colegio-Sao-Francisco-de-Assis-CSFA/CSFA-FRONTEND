"use client";

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Definindo a interface para os dados das notícias
interface NewsItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl: string;
}

interface NewsCardsProps {
  news: NewsItem[];
}

const NewsCards: FC<NewsCardsProps> = ({ news }) => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto flex flex-col gap-12 mt-12">
      <motion.h2
            className="text-3xl font-bold text-blue-600 text-center mb-6"
        >
            Fique Por Dentro no "Acontece CSFA"            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
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
                style={{ backgroundColor: item.categoryColor }}
              >
                {item.category}
              </span>
            </div>

            {/* News Content */}
            <div className="p-4 flex-grow">
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.excerpt}
              </p>
            </div>

            {/* Date and Read More */}
            <div className="p-4 pt-0 border-t border-gray-100">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <CalendarIcon size={16} className="mr-1" />
                {item.date}
              </div>
              <Link
                href={`/noticias/${item.slug}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
              >
                Ler mais <ChevronRightIcon size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/noticias"
          className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Ver Todas as Notícias
        </Link>
      </div>
    </div>
  );
};

// Componente de exemplo que usa o NewsCards
const NewsSection: FC = () => {
  // Dados de exemplo que correspondem ao design da imagem
  const newsData: NewsItem[] = [
    {
      id: '1',
      category: 'Conquistas',
      categoryColor: '#3465ed',
      title: 'Alunos conquistam medalhas na Olimpíada de Matemática',
      excerpt: 'Estudantes do Ensino Fundamental II e Médio alcançaram resultados expressivos na competição nacional.',
      date: '12 de maio de 2023',
      slug: 'alunos-conquistam-medalhas-matematica',
      imageUrl: '/api/placeholder/400/300' // Usando placeholder para exemplo
    },
    {
      id: '2',
      category: 'Parcerias',
      categoryColor: '#3465ed',
      title: 'Nova parceria com instituto de tecnologia beneficiará alunos do Ensino Médio',
      excerpt: 'Acordo permitirá aos estudantes acesso a laboratórios avançados e mentoria de profissionais.',
      date: '28 de abril de 2023',
      slug: 'parceria-instituto-tecnologia',
      imageUrl: '/api/placeholder/400/300' // Usando placeholder para exemplo
    },
    {
      id: '3',
      category: 'Eventos',
      categoryColor: '#3465ed',
      title: 'Feira de Ciências reúne projetos inovadores e surpreende visitantes',
      excerpt: 'Evento anual apresentou trabalhos desenvolvidos pelos alunos de todos os segmentos da escola.',
      date: '15 de abril de 2023',
      slug: 'feira-ciencias-projetos-inovadores',
      imageUrl: '/api/placeholder/400/300' // Usando placeholder para exemplo
    },
    {
      id: '4',
      category: 'Cultura',
      categoryColor: '#3465ed',
      title: 'Semana literária promove encontro com autores renomados',
      excerpt: 'Escritores conversaram com os alunos e compartilharam suas experiências no mundo da literatura.',
      date: '31 de março de 2023',
      slug: 'semana-literaria-autores',
      imageUrl: '/api/placeholder/400/300' // Usando placeholder para exemplo
    }
  ];

  return <NewsCards news={newsData} />;
};

export default NewsSection;