// components/site/Courses/CoursesHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { CoursesHeaderProps } from './types';

const CoursesHeader: React.FC<CoursesHeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900 mb-6 shadow-xl sm:w-16 sm:h-16"
      >
        <GraduationCap className="w-7 h-7 text-white sm:w-8 sm:h-8" /> {/* Ajustado w/h do ícone */}
      </motion.div>

      <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4"> {/* Reduzido text-4xl para text-3xl */}
        {title}
      </h2>

      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"> {/* Reduzido text-xl para text-lg e adicionado px-4 */}
        {description}
      </p>
    </motion.div>
  );
};

export default CoursesHeader;