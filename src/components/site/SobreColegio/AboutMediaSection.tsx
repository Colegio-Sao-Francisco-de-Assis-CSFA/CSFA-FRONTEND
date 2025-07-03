// components/SobreColegio/AboutMediaSection.tsx
"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Play, Sparkles, Heart } from "lucide-react";


export default function AboutMediaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Animações personalizadas
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const modernContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const modernItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div ref={sectionRef} className="relative w-full bg-gradient-to-br md:w-1/2 from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">/
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-2xl"
          animate={pulseAnimation}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 py-16 lg:py-24"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={modernContainerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={modernItemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            Nossa História
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Tradição e Inovação
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubra nossa jornada de excelência educacional
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column - Hero Image & Stats */}
          <motion.div className="space-y-8" variants={modernItemVariants}>

            {/* Hero Image */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/courses/finais.webp"
                  alt="Estudantes em atividade"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg"
                  animate={floatingAnimation}
                >
                  <div className="flex items-center gap-2">
                    <Heart className="text-red-500" size={16} />
                    <span className="text-sm font-semibold text-slate-800">Excelência</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-6">
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap size={32} />
                  </motion.div>
                  <div>
                    <motion.div
                      className="text-4xl font-black mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      +40
                    </motion.div>
                    <p className="text-lg font-semibold opacity-90">
                      Anos de história<br />
                      e compromisso
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video & Gallery */}
          <motion.div className="space-y-8" variants={modernItemVariants}>

            {/* Video Player */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500" />

              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
                    <Image
                      src="/images/courses/finais.webp"
                      alt="Vídeo institucional"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30 rounded-full blur-xl"
                          animate={pulseAnimation}
                        />
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl">
                          <Play size={28} className="text-slate-800 ml-1" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Video Label */}
                    <motion.div
                      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-sm font-semibold text-slate-800">
                        Conheça nossa escola
                      </span>
                    </motion.div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-5xl p-0 border-none bg-transparent">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <video
                      ref={videoRef}
                      controls
                      muted
                      autoPlay
                      className="w-full aspect-video rounded-3xl"
                      src="/diferenciais.mp4"
                      onEnded={() => videoRef.current?.load()}
                    />
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-green-400/20 to-blue-400/20 rounded-3xl blur-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/courses/infantil.webp"
                  alt="Educação infantil"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Category Badge */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-sm font-semibold text-slate-800">
                    Educação Infantil
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          variants={modernItemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Faça parte da nossa história
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}