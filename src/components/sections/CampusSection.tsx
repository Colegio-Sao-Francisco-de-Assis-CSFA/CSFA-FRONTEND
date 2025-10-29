// components/sections/CampusShowcaseSection.tsx
'use client';

import React, { useState } from 'react';
import { CampusShowcaseRoot } from '@/components/index/CampusShowcase';
import { MousePointerClick, Pointer } from 'lucide-react';
import TitleHeaderComponent from '../shared/TitleHeader';
import { campusFeatures } from '@/lib/data/campus-features';

const CampusShowcaseSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto bg-background ">

      <TitleHeaderComponent
        title="Explore Nosso Campus"
        subtitle="Conheça de perto as instalações modernas e os ambientes projetados para o desenvolvimento integral dos nossos alunos."
      />

      <div
        className="relative"
      >

        <CampusShowcaseRoot
          children
          features={campusFeatures}
          onSwiperInit={(swiper) => setSwiperInstance(swiper)}
        />

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
