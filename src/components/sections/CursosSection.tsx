"use client";

import React from 'react';
import { BookOpen, Users, GraduationCap, Baby } from 'lucide-react';

import TitleHeaderComponent from '../shared/TitleHeader';
import { CourseCard } from '../shared/Card/CourseCard';



const CoursesSection = () => {

  const colorPalette = [
    "blue-500",
    "cyan-500",
    "pink-500",
    "yellow-500",
    "purple-500",
  ];

  const courses = [
    {
      id: 1,
      title: "Educação Infantil",
      subtitle: "Descoberta e Brincadeira",
      description: "Ambiente lúdico e seguro para os primeiros passos no aprendizado. Estímulo à criatividade, socialização e desenvolvimento integral dos pequenos.",
      ageRange: "1 a 5 anos",
      highlights: ["Desenvolvimento motor", "Estimulação cognitiva", "Brincadeiras educativas"],
      icon: Baby,
      color: colorPalette[0],
      bgColor: `bg-${colorPalette[0]}`,
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/infantil.webp"
    },
    {
      id: 2,
      title: "Ensino Fundamental",
      subtitle: "Anos Iniciais",
      description: "Formação integral com foco no desenvolvimento cognitivo, social e emocional. Metodologia lúdica e interativa para despertar o amor pelo aprendizado.",
      ageRange: "6 a 10 anos",
      highlights: ["Alfabetização", "Desenvolvimento motor", "Valores éticos"],
      icon: BookOpen,
      color: colorPalette[1],
      bgColor: `bg-${colorPalette[1]}`,
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/iniciais.webp"
    },
    {
      id: 3, // ID ajustado
      title: "Ensino Fundamental",
      subtitle: "Anos Finais",
      description: "Preparação para desafios acadêmicos com metodologia inovadora. Desenvolvimento do pensamento crítico e autonomia intelectual.",
      ageRange: "11 a 14 anos",
      highlights: ["Pensamento crítico", "Projetos interdisciplinares", "Tecnologia educacional"],
      icon: Users,
      color: colorPalette[2],
      bgColor: `bg-${colorPalette[2]}`,
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/finais.webp"
    },
    {
      id: 4, // ID ajustado
      title: "Ensino Médio",
      subtitle: "Preparação Universitária",
      description: "Excelência acadêmica com foco no ingresso ao ensino superior. Orientação vocacional e desenvolvimento de competências para o futuro.",
      ageRange: "15 a 17 anos",
      highlights: ["Preparação ENEM", "Orientação vocacional", "Liderança"],
      icon: GraduationCap,
      color: colorPalette[3],
      bgColor: `bg-${colorPalette[3]}`,
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/medio.webp"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden mb-12">
      <div className="max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <TitleHeaderComponent
          title='Nossos Cursos'
          subtitle='Educação de excelência em todas as etapas da formação escolar...'
          color='blue'
          variant='centro'
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
