"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Baby } from 'lucide-react';

import TitleHeaderComponent from '../shared/TitleHeader';
import { CourseCard } from '../shared/Card/CourseCard';



const CoursesSection = () => {

  const courses = [
    {
      id: 1,
      title: "Educação Infantil",
      subtitle: "Descoberta e Brincadeira",
      description: "Ambiente lúdico e seguro para os primeiros passos no aprendizado. Estímulo à criatividade, socialização e desenvolvimento integral dos pequenos.",
      ageRange: "1 a 5 anos",
      highlights: ["Desenvolvimento motor", "Estimulação cognitiva", "Brincadeiras educativas"],
      icon: 'lucide:baby',
      color: "bg-pink-600",
      bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950 transition-colors duration-600 hover:from-indigo-800 hover:via-blue-800 hover:to-blue-600",
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
      icon: 'lucide:book-open-text',
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950 transition-colors duration-600 hover:from-indigo-800 hover:via-blue-800 hover:to-blue-600",
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
      icon: 'lucide:users-round',
      color: "bg-blue-900",
      bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950 transition-colors duration-600 hover:from-indigo-800 hover:via-blue-800 hover:to-blue-600",
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
      icon: 'lucide:graduation-cap',
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-t from-blue-600 via-blue-800 to-indigo-950 transition-colors duration-600 hover:from-indigo-800 hover:via-blue-800 hover:to-blue-600",
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;