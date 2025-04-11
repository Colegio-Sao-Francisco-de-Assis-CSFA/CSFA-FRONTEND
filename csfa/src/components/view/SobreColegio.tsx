"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Globe, Play, Phone } from "lucide-react";

export default function AboutSection() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="w-full h-auto md:p-12 lg:p-0 flex flex-col-reverse gap-6 items-center justify-between py-12 px-6 lg:flex-row-reverse">

        {/* Container Desktop-Left & Mobile-Bottom - Media Section */}
        <motion.div className="w-full h-full flex flex-col items-center justify-center gap-3 md:h-96 md:p-4 lg:p-2 md:flex md:flex-row lg:w-2/5 lg:h-130"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >

          {/* InContainer Left - Video & Quote*/}
          <div className="w-full h-full items-center flex flex-col md:items-end lg:w-1/2 gap-3">

            {/* Video */}
            <motion.div className="relative w-60 h-3/5 md:h-4/5" variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full h-full rounded-tl-[35px] rounded-tr-[35px] rounded-bl-[35px] lg:rounded-tl-[55px] lg:rounded-tr-[55px] lg:rounded-bl-[55px] overflow-hidden cursor-pointer group">
                    <Image
                      src="/images/courses/finais.webp"
                      alt="Students learning together"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="bg-blue-600 rounded-full p-2 text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={32} />
                      </motion.div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl p-0">
                  <video
                    ref={videoRef}
                    controls
                    muted
                    autoPlay
                    className="w-full aspect-video"
                    src="/diferenciais.mp4"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Quote */}
            <motion.div className="w-60 h-20 lg:p-2 lg:w-full bg-blue-600 text-white rounded-tr-[40px] rounded-tl-[40px] rounded-br-[40px] flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <div className="bg-blue-200 rounded-full flex-shrink-0 ">
                <GraduationCap className="h-10 w-10 p-2 text-blue-600 md:p-1 md:w-10 md:h-10 " />
              </div>

              <div>
                <p className="font-bold text-xs text-start"><span className="text-xl">+40 </span>anos de <br/> história e compromisso</p>
                {/* <p className="font-bold text-xs">Qualidade e compromisso</p> */}
              </div>
            </motion.div>

          </div>

          {/* InContainer Right - Photos */}
          <motion.div className="w-full h-full flex flex-col items-center md:items-start lg:w-1/2 gap-3"
           variants={containerVariants}>
            {/* Image Top */}
            <motion.div className="w-52 lg:w-full lg:h-2/4 rounded-full overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src="/images/courses/finais.webp"
                alt="Circle image"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/*Image Bottom */}
            <motion.div className="w-60 h-44 md:w-52 md:h-2/5 lg:w-full lg:h-2/4 rounded-tr-4xl rounded-br-4xl rounded-bl-4xl overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src="/images/courses/infantil.webp"
                alt="Students collaborating"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Container Desktop-Right & Mobile-Top - Text and Info */}
        <motion.div className="w-full lg:w-3/5 flex flex-col gap-4 p-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="space-y-3">
            <motion.h1 className="text-3xl lg:text-6xl font-bold" variants={itemVariants}>
              Colégio São Francisco de Assis: <span className="text-blue-600">Formação de Qualidade, Educação que transforma.</span>
            </motion.h1>
            {/* <motion.p className="text-slate-800 text-base" variants={itemVariants}>
              O Colégio São Francisco de Assis tem como missão formar jovens transformadores da sociedade,
              oferecendo educação de qualidade para um futuro melhor. Fundado pelo Pe. Tony, teve início
              em 1985 e recebeu autorização do MEC em 1984. Inspirado na vida de São Francisco de Assis, o
              colégio oferece Educação Infantil, Ensino Fundamental (anos iniciais e finais) e Ensino Médio,
              além de Período Integral. <br />
              Como instituição particular de orientação católica, busca o aperfeiçoamento constante de sua
              proposta pedagógica, promovendo valores de dignidade, confiança e justiça.
            </motion.p> */}
          </div>

          {/* Service Cards */}
          <motion.div className="grid md:grid-cols-2 gap-4 mt-4" variants={containerVariants}>

            <motion.div variants={itemVariants}>
              <Card className="h-44 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-blue-500">
                <CardContent className="px-4 flex items-center justify-center gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl text-blue-600 flex items-center gap-3">
                      <div className="flex bg-blue-600 rounded-full p-2 h-8 w-8 items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </div>
                      Orientação Católica
                    </h3>
                    <p className="text-gray-700 text-base md:text-sm">
                      O colégio promove uma educação baseada na solidariedade, respeito
                      e fraternidade, formando cidadãos comprometidos com um mundo mais justo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-44 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-blue-500">
                <CardContent className="px-4 flex items-center justify-center gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl text-blue-600 flex items-center gap-3">
                      <div className="flex bg-blue-600 rounded-full p-2 h-8 w-8 items-center justify-center flex-shrink-0">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      Jovens Transformadores
                    </h3>
                    <p className="text-gray-700 text-base md:text-sm">
                      Preparamos nossos alunos para serem agentes de mudança na sociedade,
                      desenvolvendo senso crítico, liderança e responsabilidade social.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
    </div>
  )
}