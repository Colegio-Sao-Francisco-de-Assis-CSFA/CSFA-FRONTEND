// components/sections/SobreColegioSection.tsx
"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfoCardsGrid from "@/components/site/SobreColegio/InfoCardsGrid";

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

      <div ref={sectionRef} className="relative mb-12 w-full max-w-screen-2xl mx-auto min-h-screen overflow-hidden bg-white pt-4">

        <div className="min-h-screen flex flex-col gap-10 items-center">
          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl text-center lg:text-6xl font-black leading-tight p-0">
              <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
                Colégio São
                <br />Francisco de Assis:
              </span>
              <br />
              <span className="text-center bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Onde cada sonho encontra
                seu caminho.
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
                <span className="text-blue-800 font-bold">
                  Há mais de 40 anos transformando vidas!
                </span>
                {''} Fundado em 1985 pelo visionário Pe.Tony, nosso colégio é muito mais que uma instituição de ensino - é um lugar onde
                <span className="font-bold text-gray-700"> jovens descobrem seu potencial</span> e se preparam para
                <span className="font-bold text-gray-700"> liderar o amanhã</span>.
                Inspirados pelos ensinamentos de São Francisco de Assis, oferecemos uma educação completa que vai da
                <span className="font-bold text-gray-700"> Educação Infantil ao Ensino Médio</span>, incluindo Período Integral. Nossa missão é clara:
                {' '}
                <span className="font-bold text-blue-800 inline-block bg-blue-200/80 p-4 mt-2 rounded-2xl">
                  Formar não apenas estudantes brilhantes, mas também cidadãos conscientes e
                  transformadores, comprometidos com a construção de uma sociedade mais justa.
                  Queremos que cada um deles leve consigo, onde quer que esteja, os valores essenciais de dignidade,
                  compaixão e justiça, atuando com integridade, respeito ao próximo e responsabilidade social.
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

          </motion.div>

        </div>


      </div>
    </section>

  );
}