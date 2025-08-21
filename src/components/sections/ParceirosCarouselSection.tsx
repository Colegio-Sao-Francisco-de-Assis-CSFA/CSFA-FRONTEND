// components/sections/ParceirosCarouselSection.tsx
"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PartnerCarousel } from "@/components/site/ParceirosCarousel";
import { PartnerLogo, ScrollSpeed } from "@/components/site/ParceirosCarousel/types";
import { ParceirosHeader, ParceiroBeneficioCard, ParceirosCTA } from "@/components/site/Parceiros";

// Ícones para os cards de benefício
import { CheckCircle, Users, Zap } from 'lucide-react';

// Exemplo de dados de logos (você pode carregar isso de uma API ou de um arquivo de configuração)
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
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const handleCTAClick = () => {
        console.log("Botão 'Seja Nosso Parceiro' clicado!");
        // Adicione aqui a lógica para o botão CTA (ex: redirecionar para formulário)
    };

    // Variantes para animação de entrada dos cards de benefício
    const cardGridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5 // Atraso para o grid começar a animar depois do cabeçalho
            }
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-background ">
            <div className="relative overflow-hidden max-w-screen-xl mx-auto px-6 flex flex-col items-center">

                {/* Cabeçalho da Seção */}
                <ParceirosHeader
                    badgeText=''
                    title="Construindo o Futuro, Juntos." // Novo título mais impactante
                />

                {/* Indicadores de Benefícios */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-12 w-full"
                    variants={cardGridVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <ParceiroBeneficioCard
                        icon={<CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />}
                        title="Qualidade Garantida"
                        description="Parceiros com comprovada excelência em suas áreas de atuação."
                    />
                    <ParceiroBeneficioCard
                        icon={<Users className="w-7 h-7 text-white" strokeWidth={2.5} />}
                        title="Confiança Mútua"
                        description="Relacionamentos duradouros baseados em transparência e resultados."
                    />
                    <ParceiroBeneficioCard
                        icon={<Zap className="w-7 h-7 text-white" strokeWidth={2.5} />}
                        title="Inovação Constante"
                        description="Sempre na vanguarda das melhores práticas educacionais."
                    />
                </motion.div>

                {/* Carousel de Parceiros */}
                <motion.div
                    className="w-full mt-8" // Adiciona margem superior
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }} // Atraso para aparecer depois dos cards
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