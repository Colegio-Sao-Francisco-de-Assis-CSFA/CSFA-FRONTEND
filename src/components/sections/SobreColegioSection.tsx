// components/sections/SobreColegioSection.tsx
'use client';

import React from 'react';
import { GraduationCap, Globe, BookOpen, Lightbulb } from "lucide-react";
import { FeatureCardData, SobreColegioFeaturesCarousel, SobreColegioHero } from '@/components/site/SobreColegio';

const defaultFeatures: FeatureCardData[] = [
  {
    icon: GraduationCap,
    title: "Orientação Católica",
    description: "O colégio promove uma educação baseada na solidariedade, respeito e fraternidade, formando cidadãos comprometidos com um mundo mais justo.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: Globe,
    title: "Jovens Transformadores",
    description: "Preparamos nossos alunos para serem agentes de mudança na sociedade, desenvolvendo senso crítico, liderança e responsabilidade social.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: BookOpen,
    title: "Inovação Pedagógica",
    description: "Conteúdo atualizado, metodologias ativas e tecnologia integrada para um aprendizado dinâmico e eficaz, preparando para o futuro.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento Integral",
    description: "Foco no crescimento acadêmico, social e emocional, promovendo autonomia, criatividade e valores essenciais para a vida.",
    bgColor: "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900",
    iconColor: "text-white",
    accentColor: "from-indigo-900 via-blue-800 to-blue-600",
    borderGradient: "from-blue-600/20 to-blue-800/20"
  },
];

export default function SobreColegioSection() {
  const mainTitle = 'Colégio São Francisco De Assis'
  const subtitle = 'Formando Jovens Transformadores da Sociedade'
  const shortDescription = 'Há mais de 40 anos, transformamos vidas. Nosso colégio é um lugar onde jovens descobrem seu potencial e se preparam para liderar o amanhã, com valores essenciais de dignidade, compaixão e justiça.';

  return (
    <section className="w-full">
      <SobreColegioHero
        mainTitle={mainTitle}
        subtitle={subtitle}
        shortDescription={shortDescription}
        ctaText="Saiba Mais Sobre Nós"
        ctaLink="/sobre"
      />
    </section>
  );
}