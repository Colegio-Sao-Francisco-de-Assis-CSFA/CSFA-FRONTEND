// components/site/CampusShowcase/CampusShowcaseRoot.tsx
'use client';

import React, { useRef } from 'react'; // Importar useRef
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Remover Navigation se você for personalizar

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // Remova este se você for personalizar os botões

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
    onSwiperInit?: (swiper: any) => void; // Para passar a instância do swiper para o pai
}

const CampusShowcaseRoot: React.FC<CampusShowcaseRootWithFeaturesProps> = ({ features, onSwiperInit }) => {
  return (
    <div className="relative">
      <Swiper
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
          el: '.swiper-custom-pagination', // Aponta para um elemento customizado se você quiser renderizar fora do Swiper
        }}
        // navigation={true} // Removido para controle externo
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]} // Removido Navigation
        className="mySwiper p-4"
        onSwiper={(swiper) => onSwiperInit && onSwiperInit(swiper)} // Captura a instância do Swiper
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.id} className="pb-12 pt-4 px-2">
            <CampusShowcaseCard feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Se quiser um elemento de paginação customizado dentro do root, mas fora do carrossel: */}
      {/* <div className="swiper-custom-pagination flex justify-center mt-4"></div> */}
    </div>
  );
};

export default CampusShowcaseRoot;