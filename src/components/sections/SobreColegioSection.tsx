'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/shared/Button/Button';
import TitleHeaderComponent from '@/components/shared/TitleHeader';


const SobreColegioHero = ({

}) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className="relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden flex items-center justify-start px-4 sm:px-6 lg:px-8 py-16 bg-blue-600"
        >
            <div
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/background-site.png"
                    alt="Alunos no campus do colégio"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover object-center opacity-30"
                />
            </div>

            <div className="relative z-10 text-white max-w-screen-xl mx-auto w-full">
                <TitleHeaderComponent
                    variant="hero-complete"
                    color="white"
                    title="Colégio São Francisco De Assis"
                    tagline="Formando Jovens Transformadores da Sociedade"
                    subtitle="Há mais de 40 anos, transformamos vidas..."
                    ctaText="Saiba Mais Sobre Nós"
                    ctaLink="/sobre"
                    taglineTypingEffect={true}
                />

            </div>
        </div>
    );
};

export default SobreColegioHero;
