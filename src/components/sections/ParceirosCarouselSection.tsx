// components/sections/ParceirosCarouselSection.tsx
"use client";

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { PartnerCarousel, PartnerLogo, ScrollSpeed } from "@/components/index/ParceirosCarousel";
import TitleHeaderComponent from '../shared/TitleHeader';
import { Icon } from '@iconify/react';
import { ParceirosCard } from '@/components/shared/Card/ParceirosCard';

const partnerLogos: PartnerLogo[] = [
    { src: "/images/partners/sas.png", alt: "Partner 1 Logo", width: 300, height: 200 },
    { src: "/images/partners/google.png", alt: "Partner 2 Logo", width: 200, height: 100 },
    { src: "/images/partners/notas-ouro.png", alt: "Partner 3 Logo", width: 200, height: 100 },
    { src: "/images/partners/yazigi.png", alt: "Partner 4 Logo", width: 200, height: 100 },
    { src: "/images/partners/maker.png", alt: "Partner 5 Logo", width: 200, height: 100 },
    { src: "/images/partners/kumon.png", alt: "Partner 6 Logo", width: 200, height: 100 },
    { src: "/images/partners/raia-livre.png", alt: "Partner 6 Logo", width: 250, height: 150 },
];

const ParceirosCarouselSection: React.FC = () => {
    const scrollSpeed: ScrollSpeed = 'fast'; // 'normal, 'slow', 'fast'
    const sectionRef = useRef<HTMLDivElement>(null);
    const beneficiosParceiros = [
        {
            id: 1,
            icon: 'fluent:checkbox-checked-16-filled',
            title: "Qualidade Garantida",
            description: "Parceiros com comprovada excelência em suas áreas de atuação."
        },
        {
            id: 2,
            icon: 'mdi:users-group',
            title: "Confiança Mútua",
            description: "Relacionamentos duradouros baseados em transparência e resultados."
        },
        {
            id: 3,
            icon: 'icon-park-solid:creative',
            title: "Inovação Constante",
            description: "Sempre na vanguarda das melhores práticas educacionais."
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-background ">
            <div className="relative overflow-hidden max-w-screen-xl mx-auto px-6 flex flex-col items-center">

                <TitleHeaderComponent
                    title='Construindo o Futuro, Juntos.'
                    subtitle='parcerias de valor e que transformam'
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-12 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {beneficiosParceiros.map((beneficio) => (
                        <ParceirosCard
                            key={beneficio.id}
                            icon={beneficio.icon}
                            title={beneficio.title}
                            description={beneficio.description}
                        />
                    ))}
                </motion.div>

                {/* Carousel de Parceiros */}
                <motion.div
                    className="w-full mt-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <PartnerCarousel
                        logos={partnerLogos}
                        scrollSpeed={scrollSpeed}
                        logoClassName="w-full"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default ParceirosCarouselSection;