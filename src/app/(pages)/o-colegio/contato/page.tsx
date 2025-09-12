"use client";


import TitleHeaderComponent from '@/components/shared/TitleHeader';
import { Static as BannerStatic } from '@/components/shared/Banner/Static/Static';
import type { Slide } from '@/components/shared/Banner/Carousel/types';

const Contato = () => {

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
        <section className='w-full'>

            <BannerStatic
                image='/images/banner/static/franciscano-1920.png'
                mobileImage='/images/banner/volta-as-aulas-500.png'
                alt='Banner página contato'
                className="mx-auto bg-blue-600"
            />

            <section className="min-h-screen bg-white text-gray-800 pt-32">
                {/* Header */}
                <TitleHeaderComponent
                    title='Entre em contato'
                    subtitle='Tire sua dúvidas ou agende sua visita.'
                />
            </section>

        </section>
    );


};

export default Contato;


