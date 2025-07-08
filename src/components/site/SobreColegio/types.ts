// components/site/SobreColegio/types.ts
import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  accentColor: string;
  borderGradient: string;
}

export interface SobreColegioHeroProps {
  mainTitle: React.ReactNode;
  shortDescription?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink: string;
}

export interface SobreColegioFeaturesCarouselProps {
  features: FeatureCardData[];
}