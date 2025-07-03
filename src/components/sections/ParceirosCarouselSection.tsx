// components/sections/ParceirosCarouselSection.tsx
"use client";

import React from 'react';
import { PartnerCarousel } from "@/components/site/ParceirosCarousel";
import { PartnerLogo, ScrollSpeed } from "@/components/site/ParceirosCarousel/types";

// Exemplo de dados de logos (você pode carregar isso de uma API ou de um arquivo de configuração)

const partnerLogos: PartnerLogo[] = [
    { src: "/images/partners/sas.png", alt: "Partner 1 Logo", width: 150, height: 50 },
    { src: "/images/partners/google.png", alt: "Partner 2 Logo", width: 150, height: 50 },
    { src: "/images/partners/notas-ouro.png", alt: "Partner 3 Logo", width: 150, height: 50 },
    { src: "/images/partners/yazigi.png", alt: "Partner 4 Logo", width: 150, height: 50 },
    { src: "/images/partners/maker.png", alt: "Partner 5 Logo", width: 150, height: 50 },
    { src: "/images/partners/kumon.png", alt: "Partner 6 Logo", width: 150, height: 50 },
    { src: "/images/partners/raia-livre.png", alt: "Partner 6 Logo", width: 200, height: 100 },

    // Adicione mais logos conforme necessário
];

const ParceirosCarouselSection: React.FC = () => {
    const scrollSpeed: ScrollSpeed = 'normal'; // 'normal, 'slow', 'fast'

    return (
        <section>
            <div className="relative mt-0 overflow-hidden max-w-screen-2xl mx-auto px-6 flex flex-col text-center items-center">
                <PartnerCarousel
                    logos={partnerLogos}
                    scrollSpeed={scrollSpeed}
                    logoClassName="p-4"
                />
            </div>
        </section>
    );
};

export default ParceirosCarouselSection;