// components/site/SobreColegio/types.ts
import React from 'react';
import { LucideIcon } from 'lucide-react'; // Importar LucideIcon para tipagem correta de ícones

export interface FeatureCardData {
  icon: LucideIcon; // Usar LucideIcon para ícones do lucide-react
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  accentColor: string;
  borderGradient: string;
}

export interface SobreColegioHeroProps {
  mainTitle: React.ReactNode; // Pode ser string ou JSX
  shortDescription: string;
  ctaText: string;
  ctaLink: string;
}

export interface SobreColegioFeaturesCarouselProps {
  features: FeatureCardData[];
}