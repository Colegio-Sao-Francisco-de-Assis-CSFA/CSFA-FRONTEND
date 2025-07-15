// components/site/Courses/CourseCard.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CourseCardProps } from './types'; // <--- ESTA IMPORTAÇÃO É CRUCIAL

const CourseCard: React.FC<CourseCardProps> = ({ course, cardVariants, iconVariants }) => {
  const IconComponent = course.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer h-full"
    >
      <div className={`${course.bgColor} mx-auto w-80 h-80 md:w-full md:h-full rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between
                    dark:border-border`}> {/* Ajusta a borda no dark mode */}

        {/* Icon */}
        <motion.div
          variants={iconVariants}
          // Ajusta o fundo e o texto do ícone para dark mode
          className={`inline-flex items-center justify-center p-2 w-14 h-14 rounded-xl bg-white/20 mb-4 sm:mb-6 shadow-lg backdrop-blur-sm relative z-20`}
        >
          <IconComponent className="w-7 h-7 text-white sm:w-8 sm:h-8"/>
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex-grow">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {course.title}
          </h3>

          <p className={`text-xs sm:text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide`}>
            {course.subtitle}
          </p>

          <div className={`hidden md:inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 mb-5`}>
            {course.ageRange}
          </div>

          <p className="text-sm sm:text-base text-white/60 mb-5 leading-relaxed">
            {course.description}
          </p>

          {/* Highlights */}
          <div className="hidden md:block space-y-1 mb-5 ">
            {course.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center text-xs sm:text-sm text-white/60">
                <div className={`w-1.5 h-1.5 rounded-full bg-white/70 mr-2`}></div>
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          whileHover={{ x: 5 }}
          className={`inline-flex items-center text-white font-semibold text-sm group-hover:underline relative z-20`}>
          Saiba mais
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;