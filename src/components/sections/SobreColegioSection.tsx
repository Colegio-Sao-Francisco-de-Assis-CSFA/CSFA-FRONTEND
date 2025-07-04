// components/sections/SobreColegioSection.tsx
"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfoCardsGrid from "@/components/site/SobreColegio/InfoCardsGrid";
import { Sparkles, Quote } from "lucide-react";

export default function SobreColegioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      },
    },
  };

  return (
    <section className="w-screen">

      <div ref={sectionRef} className="relative w-full max-w-screen-2xl mx-auto min-h-screen overflow-hidden bg-white pt-4">

        <div className="min-h-screen flex flex-col gap-10 items-center">
          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl text-center lg:text-6xl font-black leading-tight p-0">
              <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
                Colégio São Francisco de Assis:
              </span>
              <br />
              <span className="text-center bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Onde cada sonho encontra
                <br /> seu caminho.
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="w-full flex flex-col gap-6 lg:gap-6 order-2 lg:order-1 px-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >

            {/* Description */}
            <motion.div
              className="space-y-6 text-slate-700 text-lg lg:text-xl leading-relaxed lg:px-6"
              variants={itemVariants}
            >
              <p>
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-900 text-white text-bold px-3 py-1 rounded-full text-base font-semibold mr-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Há mais de 40 anos transformando vidas!
                </motion.span>
                Fundado em 1985 pelo visionário Pe.Tony, nosso colégio é muito mais que uma instituição de ensino - é um lugar onde
                <span className="font-semibold text-blue-700"> jovens descobrem seu potencial</span> e se preparam para
                <span className="font-semibold text-blue-700"> liderar o amanhã</span>.
                Inspirados pelos ensinamentos de São Francisco de Assis, oferecemos uma educação completa que vai da
                <span className="font-semibold text-slate-800"> Educação Infantil ao Ensino Médio</span>, incluindo Período Integral. Nossa missão é clara:
                &nbsp;
                <span className="font-semibold text-blue-800">
                  formar não apenas estudantes brilhantes, mas cidadãos transformadores que carregam valores de dignidade, compaixão e justiça para onde quer que vão.
                </span>
              </p>
            </motion.div>

            {/* Service Cards */}
            <motion.div className="lg:px-6" variants={itemVariants}>
              <InfoCardsGrid
                containerVariants={containerVariants}
                itemVariants={itemVariants}
              />
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="relative px-8 max-w-2xl mx-auto mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl p-3 shadow-lg">
                <Quote size={24} />
              </div>

              <blockquote className="text-lg lg:text-xl italic font-medium pl-4">
                "Porque acreditamos que a verdadeira educação não apenas ensina - ela inspira, transforma e prepara para a vida."
              </blockquote>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full" />
            </motion.div>

          </motion.div>

        </div>


      </div>
    </section>

  );
}