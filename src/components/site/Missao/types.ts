import { MotionProps } from 'framer-motion';
import type { ReactNode, FC } from 'react';

/**
 * @interface MissionContentProps
 * @description Define as propriedades para o componente MissionContent.
 * @property {string} title - O título principal a ser exibido.
 * @property {string} subtitle - O subtítulo ou texto de apoio.
 * @property {string} buttonText - O texto para o botão de ação.
 */
export interface MissionContentProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

/**
 * @interface AnimatedSectionProps
 * @description Define as propriedades para o componente AnimatedSection, estendendo as MotionProps do Framer Motion.
 * @property {ReactNode} children - Os elementos filhos que serão renderizados dentro da seção animada.
 * @property {string} [className] - Classes CSS adicionais para estilização.
 */
export interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
}