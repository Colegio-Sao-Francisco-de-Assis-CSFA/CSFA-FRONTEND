// components/shared/ReusableCarousel.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SwiperOptions } from 'swiper/types';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface ReusableCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSwiperInit?: (swiper: SwiperCore) => void;
  swiperOptions?: SwiperOptions;
  className?: string;
  swiperClassName?: string;
}

type ItemWithId = {
  id: string | number;
};

const ReusableCarousel = <T extends ItemWithId>({
  items,
  renderItem,
  onSwiperInit,
  swiperOptions,
  className = '',
  swiperClassName = '',
}: ReusableCarouselProps<T>) => {
  const defaultSwiperOptions: SwiperOptions = {
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    slidesPerView: 3,
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Swiper
        {...defaultSwiperOptions}
        {...swiperOptions}
        onSwiper={onSwiperInit}
        className={`w-full h-full p-2 ${swiperClassName}`}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}

      </Swiper>
      <div className='swiper-pagination flex flex-row gap-2' />

    </div>
  );
};

export default ReusableCarousel;