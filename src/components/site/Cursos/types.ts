// components/site/Courses/types.ts
import { LucideIcon } from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  highlights: string[];
  icon: LucideIcon; // Tipo LucideIcon para ícones do lucide-react
  color: string; // Cor principal para o card
  bgColor: string; // Cor de fundo do card
  textColor: string; // Cor do texto do card
  backgroundImageSrc?: string; // Caminho para a imagem de fundo opcional
}

export interface CoursesHeaderProps {
  title: React.ReactNode; // Permite passar um JSX (ex: span com gradiente)
  description: string;
}

export interface CourseCardProps {
  course: Course;
  cardVariants: any; // Variants de Framer Motion para o card
  iconVariants: any; // Variants de Framer Motion para o ícone
}

export interface CoursesCTAProps {
  buttonText: string;
  onClick: () => void;
}