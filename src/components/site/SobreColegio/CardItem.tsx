// components/ui/card-item.tsx
"use client"

import { motion } from "framer-motion";

interface CardItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string; // Ex: "bg-gradient-to-br from-blue-600 to-blue-800"
  iconColor: string; // Ex: "text-white"
  accentColor: string; // Ex: "from-blue-600 to-blue-800" para linha decorativa
  borderGradient: string; // Ex: "from-blue-600/20 to-blue-800/20" para bordas decorativas
}

export function CardItem({ icon: Icon, title, description, bgColor, iconColor, accentColor }: CardItemProps) {
  return (
    <div
      className="group relative h-full" // Use h-full para que o card preencha a altura do grid item
    // Remover whileHover e transition daqui, pois eles serão aplicados na motion.div pai no grid
    >
      {/* Card principal */}
      <div className="relative sm:w-90 sm:h-86 mx-auto md:w-full md:h-full max-w-md max-h-md overflow-hidden rounded-2xl bg-white border border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
        {/* Header com gradiente */}
        <div className={`${bgColor} p-6 relative overflow-hidden flex-shrink-0`}> {/* flex-shrink-0 para que o header não encolha */}
          {/* Padrão geométrico sutil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white/20 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white/20 rounded-full transform-translate-x-12 translate-y-12"></div>
          </div>

          {/* Ícone com efeito especial */}
          <div className="relative z-10 flex items-center justify-between">
            <motion.div
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </motion.div>

            {/* Accent dots */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Título */}
          <h3 className="text-2xl font-bold text-white mt-4 mb-2 relative z-10">
            {title}
          </h3>
        </div>

        {/* Conteúdo */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white relative flex-grow"> {/* flex-grow para que o conteúdo preencha o espaço restante */}
          {/* Linha decorativa */}
          <div className={`h-1 w-16 bg-gradient-to-r ${accentColor} rounded-full mb-4`}></div>

          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>

          {/* Elemento decorativo inferior */}
          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
            <Icon className="w-full h-full text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}