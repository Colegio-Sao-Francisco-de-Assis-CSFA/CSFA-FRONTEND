// components/sections/CoursesSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Trophy, Baby } from 'lucide-react'; // Importado 'Baby' icon

// Importar os microcomponentes da pasta site/Courses
import { CoursesHeader, CourseCard, Course } from "@/components/site/Cursos";

const CoursesSection = () => {
  // Os dados dos cursos permanecem aqui para serem passados aos cards
  const courses: Course[] = [
    {
      id: 1,
      title: "Educação Infantil", // Novo curso "Infantil"
      subtitle: "Descoberta e Brincadeira",
      description: "Ambiente lúdico e seguro para os primeiros passos no aprendizado. Estímulo à criatividade, socialização e desenvolvimento integral dos pequenos.",
      ageRange: "1 a 5 anos",
      highlights: ["Desenvolvimento motor", "Estimulação cognitiva", "Brincadeiras educativas"],
      icon: Baby, // Ícone para o curso infantil
      color: "bg-pink-600", // Nova cor para o card infantil
      bgColor: "bg-gradient-to-r from-blue-600 via-700 to-blue-950",
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/educacao-infantil.webp" // Exemplo de imagem de fundo para infantil
    },
    {
      id: 2, // ID ajustado
      title: "Ensino Fundamental",
      subtitle: "Anos Iniciais",
      description: "Formação integral com foco no desenvolvimento cognitivo, social e emocional. Metodologia lúdica e interativa para despertar o amor pelo aprendizado.",
      ageRange: "6 a 10 anos",
      highlights: ["Alfabetização", "Desenvolvimento motor", "Valores éticos"],
      icon: BookOpen,
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-b from-blue-600 via-800 to-blue-900",
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/fundamental-iniciais.webp" // Exemplo de imagem de fundo
    },
    {
      id: 3, // ID ajustado
      title: "Ensino Fundamental",
      subtitle: "Anos Finais",
      description: "Preparação para desafios acadêmicos com metodologia inovadora. Desenvolvimento do pensamento crítico e autonomia intelectual.",
      ageRange: "11 a 14 anos",
      highlights: ["Pensamento crítico", "Projetos interdisciplinares", "Tecnologia educacional"],
      icon: Users,
      color: "bg-blue-900",
      bgColor: "bg-gradient-to-l from-blue-600 via-700 to-blue-950 ",
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/fundamental-finais.webp" // Exemplo de imagem de fundo
    },
    {
      id: 4, // ID ajustado
      title: "Ensino Médio",
      subtitle: "Preparação Universitária",
      description: "Excelência acadêmica com foco no ingresso ao ensino superior. Orientação vocacional e desenvolvimento de competências para o futuro.",
      ageRange: "15 a 17 anos",
      highlights: ["Preparação ENEM", "Orientação vocacional", "Liderança"],
      icon: GraduationCap,
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-t from-blue-600 via-800 to-blue-900",
      textColor: "text-white",
      backgroundImageSrc: "/images/courses/ensino-medio.webp" // Exemplo de imagem de fundo
    },
    // {
    //   id: 5, // ID ajustado
    //   title: "Atividades",
    //   subtitle: "Extracurriculares",
    //   description: "Desenvolvimento integral através de esportes, artes e projetos sociais. Formação de cidadãos conscientes e participativos.",
    //   ageRange: "Todas as idades",
    //   highlights: ["Esportes", "Arte e cultura", "Responsabilidade social"],
    //   icon: Trophy,
    //   color: "bg-blue-900",
    //   bgColor: "bg-blue-900",
    //   textColor: "text-white",
    //   backgroundImageSrc: "/images/courses/extracurricular.webp" // Exemplo de imagem de fundo
    // }
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleCTAClick = () => {
    console.log("Botão 'Agende uma Visita' clicado!");
    // Implementar a lógica para agendamento de visita
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-blue-100 relative overflow-hidden mb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.05),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <CoursesHeader
          title={
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Nossos Cursos
            </span>
          }
          description="Educação de excelência em todas as etapas da formação escolar, preparando nossos alunos para os desafios do futuro com metodologia inovadora."
        />

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" // Grid responsivo: 1 coluna no mobile, 2 no md, 4 no lg
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              cardVariants={cardVariants}
              iconVariants={iconVariants}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <CoursesCTA
          buttonText="Agende uma Visita"
          onClick={handleCTAClick}
        /> */}
      </div>
    </section>
  );
};

export default CoursesSection;