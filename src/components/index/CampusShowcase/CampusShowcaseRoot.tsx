// components/site/CampusShowcase/CampusShowcaseRoot.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Remover AnimatePresence e motion pois a mensagem "clique e arraste" será removida
// import { motion, AnimatePresence } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { CampusShowcaseRootProps } from './types';
import CampusShowcaseCard from './CampusShowcaseCard';

interface CampusFeature {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

interface CampusShowcaseRootWithFeaturesProps extends CampusShowcaseRootProps {
  features: CampusFeature[];
  // A prop onSwiperInit será mais relevante agora para passar a instância para os botões de navegação
  onSwiperInit?: (swiper: any) => void;
}

const CampusShowcaseRoot: React.FC<CampusShowcaseRootWithFeaturesProps> = ({ features, onSwiperInit }) => {

  return (
    <div className="relative w-full h-full">
      <Swiper
        onSwiper={(swiper) => {
          if (onSwiperInit) {
            onSwiperInit(swiper);
          }
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full pb-12"
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.id} className="pb-4 pt-2">
            <CampusShowcaseCard feature={feature} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default CampusShowcaseRoot;