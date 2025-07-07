"use client";

import { Carousel } from '@/components/site/Caroussel/Carousel';
import type { Slide } from '@/components/site/Caroussel/types';

const HeroSectionCarousel = () => {

    const slides: Slide[] = [
        {
            id: 'slide-1',
            image: '/images/banner/volta-as-aulas-1920.png',
            mobileImage: '/images/banner/volta-as-aulas-500.png',
            alt: 'Volta às aulas',
            title: 'Volta às aulas',
            description: 'Volta às aulas é no Magazine são francisco, aprovite nossas ofertas.',
            cta: {
                text: 'Compre agora',
                link: '/'
            }
        },
    ];

    return (
        <Carousel
            slides={slides}
            autoPlay={true}
            interval={5000}
            className="mx-auto bg-blue-600"
        />
    );
};

export default HeroSectionCarousel;