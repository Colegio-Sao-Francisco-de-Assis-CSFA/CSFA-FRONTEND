interface TitleProps {
  title: string;
  subtitle: string;
  tagline?: string;
  variant?: 'centro' | 'esquerda' | 'missao' | 'hero' | 'hero-complete';
  color?: 'blue' | 'white';
  ctaText?: string;
  ctaLink?: string;
  taglineTypingEffect?: boolean;
}

export type { TitleProps };