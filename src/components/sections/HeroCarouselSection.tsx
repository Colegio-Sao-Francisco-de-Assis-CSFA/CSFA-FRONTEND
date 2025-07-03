"use client";

import { Carousel } from '@/components/site/Caroussel/Carousel';
import type { Slide } from '@/components/site/Caroussel/types';

const HeroSectionCarousel = () => {

    const slides: Slide[] = [
        {
            id: 'slide-1',
            image: '/images/banner-desktop-1.jpg',
            mobileImage: '/images/banner-mobile-1.jpg',
            alt: 'Promoção de Verão',
            title: 'Promoção de Verão',
            description: 'Até 50% de desconto em itens selecionados',
            cta: {
                text: 'Compre agora',
                link: '/promo'
            }
        },
        {
            id: 'slide-2',
            image: '/images/banner-desktop-2.jpg',
            mobileImage: '/images/banner-mobile-2.jpg',
            alt: 'Novos Produtos',
            title: 'Coleção 2023',
            description: 'Conheça nossos lançamentos',
            cta: {
                text: 'Ver coleção',
                link: '/new'
            }
        }
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