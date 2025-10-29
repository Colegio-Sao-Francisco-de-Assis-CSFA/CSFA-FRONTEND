"use client";

import { Carousel } from '@/components/shared/Banner/Carousel/Carousel';
import type { Slide } from '@/components/shared/Banner/Carousel/types';

const HeroCarouselSection = () => {

    const slides: Slide[] = [
        {
            id: 'slide-1',
            image: '/images/banner/volta-as-aulas-1920.png',
            mobileImage: '/images/banner/volta-as-aulas-500.png',
            alt: 'Volta às aulas',
        },
    ];

    return (
        <Carousel
            slides={slides}
            autoPlay={true}
            interval={5000}
            className="mx-auto"
        />
    );
};

export default HeroCarouselSection;