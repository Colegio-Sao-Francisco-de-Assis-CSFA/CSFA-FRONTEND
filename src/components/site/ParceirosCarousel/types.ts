 // components/site/Courses/types.ts

// Define a estrutura de um objeto de curso
import { LucideIcon } from 'lucide-react'; // Importe LucideIcon se ainda não o fez

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  highlights: string[];
  icon: LucideIcon; // O tipo para os ícones do Lucide
  color: string; // Ex: bg-blue-600 (para a cor primária do card)
  bgColor: string; // Ex: bg-blue-600 (para o background do card)
  textColor: string; // Ex: text-white
  backgroundImageSrc?: string; // Opcional, para imagem de fundo
}

// Define as propriedades que CourseCard aceita
export interface CourseCardProps {
  course: Course;
  cardVariants: any; // Variants de Framer Motion para o card
  iconVariants: any; // Variants de Framer Motion para o ícone
}

// Define as propriedades para o cabeçalho da seção de cursos
export interface CoursesHeaderProps {
  title: React.ReactNode; // Permite passar JSX, como um <span> para cor
  description: string;
}

// Define as propriedades para o CTA da seção de cursos
export interface CoursesCTAProps {
  buttonText: string;
  onClick: () => void;
}