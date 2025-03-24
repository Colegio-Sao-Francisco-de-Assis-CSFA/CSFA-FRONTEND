"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { GraduationCap, Globe, Play, Phone } from "lucide-react"

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

      <div className="w-full h-auto mx-auto flex flex-col-reverse gap-12 lg:flex-row items-center justify-center lg:h-full">
        
        {/* Container Left - Media Section */}
        <motion.div className="w-full h-full flex flex-col overflow-hidden md:flex-row lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >

          {/* InContainer Left - Video & Quote*/}
          <div className="w-full h-full p-4 gap-4 flex flex-col items-center justify-center md:w-1/2 ">

            {/* Video */}
            <motion.div className="relative w-full md:h-[550px]" variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full h-44 rounded-tl-[35px] rounded-tr-[35px] rounded-bl-[35px] overflow-hidden lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-bl-[50px] cursor-pointer group md:h-full " >
                    <Image
                      src="/images/courses/finais.webp"
                      alt="Students learning together"
                      width={200}   
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="bg-csfaPink rounded-full p-4 text-csfaWhite"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="text-blue-600 animate-bounce" size={100} />
                      </motion.div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-[1000px] p-0">
                  <video
                    ref={videoRef}
                    controls
                    muted
                    autoPlay
                    className="w-full aspect-video"
                    src="/diferenciais.mp4"
                    // poster="/video-cover.png"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Quote */}
            <motion.div className="w-full h-20 p-4 bg-blue-600 text-csfaNavy rounded-tr-[40px] rounded-tl-[40px] rounded-br-[40px] flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="bg-yellow-500 rounded-full p-3 flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>

              <div className="text-sm font-light text-white">
                <p><span className="font-bold text-2xl">+40 </span>anos de história</p>
                <p>Qualidade e compromisso</p>
              </div>
            </motion.div>
          </div>


          {/* InContainer Right - Photos */}
          <motion.div className="w-full h-full  p-4 gap-4 flex flex-col items-center justify-center md:w-1/2" 
           variants={containerVariants}>
            
            {/* Image */}
            <motion.div
              className="w-full h-96 rounded-tl-[35px] rounded-tr-[35px] rounded-br-[35px] overflow-hidden lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:rounded-br-[50px]"
              variants={itemVariants}
            >
              <Image
                src="/images/courses/finais.webp"
                alt="Circle image"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>


            {/*Image- invertida */}

            <motion.div
              className="w-full h-62 rounded-tr-[35px] rounded-br-[35px] rounded-bl-[35px] overflow-hidden lg:rounded-tr-[50px] lg:rounded-br-[50px] lg:rounded-bl-[50px]"
              variants={itemVariants}
            >
              <Image
                src="/images/courses/infantil.webp"
                alt="Students collaborating"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                
              />

            </motion.div>

          </motion.div>

        </motion.div>


        {/* Container Right - Text and Info */}
        <motion.div className="w-full h-auto lg:w-1/2 lg:h-full lg:p-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="space-y-4">
            <motion.h1 className="text-3xl md:text-2xl lg:text-5xl font-semibold" variants={itemVariants}>
                Colégio São Francisco de Assis:  <span className="text-blue-600">Formação de Qualidade, Educação que transforma</span>.
            </motion.h1>
            <motion.p className="text-slate-800 text-lg" variants={itemVariants}>
              O Colégio São Francisco de Assis tem como missão formar jovens transformadores da sociedade,
              oferecendo educação de qualidade para um futuro melhor. Fundado pelo Pe. Tony, teve início
              em 1985 e recebeu autorização do MEC em 1984. Inspirado na vida de São Francisco de Assis, o
              colégio oferece Educação Infantil, Ensino Fundamental (anos iniciais e finais) e Ensino Médio,
              além de Período Integral. <br />
              Como instituição particular de orientação católica, busca o aperfeiçoamento constante de sua
              proposta pedagógica, promovendo valores de dignidade, confiança e justiça. Seu currículo incentiva
              observação, reflexão e ação, integrando professores, alunos, famílias e 
              sociedade na responsabilidade pela educação.
            </motion.p>
          </div>

          {/* Service Cards */}
          <motion.div className="grid md:grid-cols-2 gap-6 mt-6" variants={containerVariants}>

            <motion.div variants={itemVariants}>

              <Card className="shadow-md hover:shadow-lg transition-shadow lg:border lg:border-blue-600">

                <CardContent className="p-6 flex gap-4  lg:rounded-2xl lg:h-48 lg:items-center font-medium">
                 
                 {/* Card Icon - Text */}
                  <div className="space-y-3">

                    <h3 className="font-bold text-xl text-blue-600 flex items-center gap-4">
                      
                      <div className="flex bg-blue-600 rounded-full p-3 h-12 w-12 items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      
                      Orientação Católica

                    </h3>

                    <p className="text-gray-700 text-sm lg:p-2">
                      Ocolégio promove uma educação baseada na solidariedade, respeito
                      e fraternidade, formando cidadãos comprometidos com um mundo mais justo.
                    </p>

                  </div>

                </CardContent>

              </Card>

            </motion.div>

            <motion.div variants={itemVariants}>

              <Card className="shadow-md hover:shadow-lg transition-shadow lg:border lg:border-blue-600">

                <CardContent className="p-6 flex gap-4 lg:rounded-2xl lg:h-48 lg:items-center font-medium">

                  {/* Card Icon - Text */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-blue-600 flex items-center gap-4"> 

                      <div className="flex bg-blue-600 rounded-full p-3 h-12 w-12 items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-white" />
                      </div>

                      Formando Jovens Transformadores

                    </h3>

                    <p className="text-gray-700 text-sm lg:p-2">
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

