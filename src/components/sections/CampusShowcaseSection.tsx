// components/sections/CampusShowcaseSection.tsx
'use client';

import React, { useState } from 'react';
import { CampusShowcaseRoot, CampusShowcaseContent, CampusShowcaseNavigation, CampusFeature } from '../site/CampusShowcase';
import { MousePointerClick, Pointer } from 'lucide-react';

const campusFeatures: CampusFeature[] = [
  {
    id: 'facade',
    title: 'Fachada Principal',
    description: 'Nossa entrada moderna e acolhedora, projetada para inspirar desde o primeiro olhar. Um ambiente convidativo que reflete a inovação e tradição do nosso colégio.',
    imageAlt: 'Fachada Principal do Colégio',
    imageSrc: '/images/fachada.jpg',
  },
  {
    id: 'classrooms',
    title: 'Salas de Aula',
    description: 'Ambientes de aprendizado otimizados, equipados com tecnologia de ponta para aulas interativas e dinâmicas, promovendo a participação ativa dos alunos.',
    imageAlt: 'Salas de Aula Modernas',
    imageSrc: '/images/salas.jpg',
  },
  {
    id: 'library',
    title: 'Biblioteca Colaborativa',
    description: 'Um vasto acervo com mais de 10.000 títulos e espaços aconchegantes para estudo individual ou em grupo, ideal para pesquisa e fomento à leitura.',
    imageAlt: 'Biblioteca do Colégio',
    imageSrc: '/images/biblioteca.jpg',
  },
  {
    id: 'labs',
    title: 'Laboratórios de Inovação',
    description: 'Espaços modernos e seguros para experimentação científica e tecnológica, incentivando a criatividade e a descoberta em diversas áreas do conhecimento.',
    imageAlt: 'Laboratórios de Ciência e Tecnologia',
    imageSrc: '/images/laboratorios.jpg',
  },
  {
    id: 'sports',
    title: 'Complexo Esportivo',
    description: 'Quadras poliesportivas, piscina e áreas ao ar livre para a prática de diversas modalidades, promovendo a saúde, o bem-estar e o espírito de equipe.',
    imageAlt: 'Área Esportiva do Colégio',
    imageSrc: '/images/esportes.jpg',
  },
  {
    id: 'cafeteria',
    title: 'Refeitório e Convivência',
    description: 'Um ambiente acolhedor e espaçoso onde os alunos desfrutam de refeições balanceadas e nutritivas, além de ser um ponto de encontro e socialização.',
    imageAlt: 'Refeitório do Colégio',
    imageSrc: '/images/refeitorio.jpg',
  },
];

const CampusShowcaseSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto bg-background ">
      <CampusShowcaseContent
        title="Explore Nosso Campus"
        subtitle="Conheça de perto as instalações modernas e os ambientes projetados para o desenvolvimento integral dos nossos alunos."
      />

      <div className="relative">
        <CampusShowcaseRoot
          children
          features={campusFeatures}
          onSwiperInit={(swiper) => setSwiperInstance(swiper)}
        />

        {swiperInstance && (
          <CampusShowcaseNavigation />
        )}

        <div className='absolute text-xl w-62 right-1/2 translate-x-1/2 lg:translate-x-0 -bottom-20 text-gray-600/90 bg-background font-medium flex items-center cursor-default justify-center gap-2 lg:-bottom-10 lg:right-0 z-20 lg:w-80  h-12 rounded-full'>
          <span className='hidden lg:flex gap-2'>
            <MousePointerClick className=' w-6 h-6 animate-pulse' />
            Clique e arraste para passar
          </span>
          <span className='flex gap-2 lg:hidden'>
            <Pointer className='w-6 h-6 animate-pulse' />
            Arraste para passar
          </span>
        </div>
      </div>
    </section>
  );
};

export default CampusShowcaseSection;