// components/site/CampusShowcase/CampusShowcaseRoot.tsx
'use client';

import React from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { SwiperOptions } from 'swiper/types';
import ReusableCarousel from '@/components/shared/Carrossel/Carrossel';
import CampusShowcaseCard from './CampusShowcaseCard';
import {CampusFeature, CampusShowcaseRootProps} from './types';



interface CampusShowcaseRootWithFeaturesProps extends CampusShowcaseRootProps {
  features: CampusFeature[];
  onSwiperInit?: (swiper: SwiperCore) => void;
}

const CampusShowcaseRoot: React.FC<CampusShowcaseRootWithFeaturesProps> = ({ features, onSwiperInit }) => {
  const showcaseSwiperOptions: SwiperOptions = {

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  return (
    <ReusableCarousel
      items={features}
      onSwiperInit={onSwiperInit}
      swiperOptions={showcaseSwiperOptions}
      swiperClassName="pb-12"
      renderItem={(feature) => (
        <div className='w-full h-full p-2'>
          <CampusShowcaseCard feature={feature} />
        </div>
      )}
    />
  );
};

export default CampusShowcaseRoot;