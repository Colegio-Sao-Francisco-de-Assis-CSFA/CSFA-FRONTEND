// components/SobreColegio/InfoCardsGrid.tsx
"use client"

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { CardItem } from "./CardItem";

interface InfoCardsGridProps {
  containerVariants: any; // Tipar melhor se possível
  itemVariants: any; // Tipar melhor se possível
}

export default function InfoCardsGrid({ containerVariants, itemVariants }: InfoCardsGridProps) {
  const cards = [
    {
      icon: GraduationCap,
      title: "Orientação Católica",
      description: "O colégio promove uma educação baseada na solidariedade, respeito e fraternidade, formando cidadãos comprometidos com um mundo mais justo.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      iconColor: "text-white",
      accentColor: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-600/20 to-blue-800/20"
    },
    {
      icon: Globe,
      title: "Jovens Transformadores",
      description: "Preparamos nossos alunos para serem agentes de mudança na sociedade, desenvolvendo senso crítico, liderança e responsabilidade social.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      iconColor: "text-white",
      accentColor: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-600/20 to-blue-800/20"
    },
    {
      icon: BookOpen, // Novo ícone
      title: "Inovação Pedagógica",
      description: "Conteúdo atualizado, metodologias ativas e tecnologia integrada para um aprendizado dinâmico e eficaz, preparando para o futuro.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      iconColor: "text-white",
      accentColor: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-600/20 to-blue-800/20"
    },
    {
      icon: Lightbulb, // Novo ícone
      title: "Desenvolvimento",
      description: "Foco no crescimento acadêmico, social e emocional, promovendo autonomia, criatividade e valores essenciais para a vida.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      iconColor: "text-white",
      accentColor: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-600/20 to-blue-800/20"
    },
  ];

  return (
    <div className="relative mt-8 w-full"> {/* Adicione w-full aqui para garantir que o contêiner do grid ocupe todo o espaço disponível */}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" // Grid responsivo: 1 coluna em mobile, 2 em sm, 4 em lg
        variants={containerVariants}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group" // Removi o 'relative' daqui, já que o CardItem já é relative
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CardItem {...card} /> {/* Use o CardItem aqui */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}