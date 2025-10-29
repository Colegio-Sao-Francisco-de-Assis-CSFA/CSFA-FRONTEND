// components/sections/ParceirosCarouselSection.tsx
"use client";

import React, { useRef } from 'react';
import { PartnerCarousel, ScrollSpeed } from "@/components/index/ParceirosCarousel";
import TitleHeaderComponent from '../shared/TitleHeader';
import { Icon } from '@iconify/react';
import { ParceirosCard } from '@/components/shared/Card/ParceirosCard';
import { partnerLogos } from '@/lib/data/partner-logos';
import { beneficiosParceiros } from '@/lib/data/beneficios-parceiros';

const ParceirosCarouselSection: React.FC = () => {
    const scrollSpeed: ScrollSpeed = 'fast'; // 'normal, 'slow', 'fast'
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="py-20 bg-background ">
            <div className="relative overflow-hidden max-w-screen-xl mx-auto px-6 flex flex-col items-center">

                <TitleHeaderComponent
                    title='Construindo o Futuro, Juntos.'
                    subtitle='parcerias de valor e que transformam'
                />

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-12 w-full"
                >
                    {beneficiosParceiros.map((beneficio) => (
                        <ParceirosCard
                            key={beneficio.id}
                            icon={beneficio.icon}
                            title={beneficio.title}
                            description={beneficio.description}
                        />
                    ))}
                </div>

                {/* Carousel de Parceiros */}
                <div
                    className="w-full mt-8"
                >
                    <PartnerCarousel
                        logos={partnerLogos}
                        scrollSpeed={scrollSpeed}
                        logoClassName="w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default ParceirosCarouselSection;
