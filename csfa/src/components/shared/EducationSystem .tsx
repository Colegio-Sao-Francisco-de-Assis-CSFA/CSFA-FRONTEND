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

      <div className="w-full h-full mx-auto px-12 flex gap-4">
        {/* Left Content - Video and Quote */}
        <motion.div
          className="w-1/2 h-full flex flex-row overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >

          <div className="w-1/2 h-full flex flex-col gap-4 items-center justify-center">

            {/* Video Section */}
            <motion.div className="relative w-7/8 h-[70%]" variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full bg-csfaBlue h-full overflow-hidden rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] cursor-pointer group">
                    <Image
                      src="/images/courses/finais.webp"
                      alt="Students learning together"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-csfaNavy/30 flex items-center justify-center group-hover:bg-csfaNavy/40 transition-all">
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
                <DialogContent className="max-w-[800px] p-0">
                  <video
                    ref={videoRef}
                    controls
                    className="w-full h-auto"
                    src="/diferenciais.mp4"
                    poster="/video-cover.png"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="bg-blue-600 text-csfaNavy p-4 rounded-tr-[40px] rounded-tl-[40px] rounded-br-[40px] flex items-center gap-4"
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

          <motion.div className="w-1/2 h-full flex flex-col gap-4 items-center justify-center" variants={containerVariants}>
            
            {/* Circle and Image */}
            <motion.div
              className="w-full h-56 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] overflow-hidden"
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


            {/*Image rounded - invertida */}

            <motion.div
              className="w-full h-72 overflow-hidden rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]"
              variants={itemVariants}
            >
              <Image
                src="/images/courses/infantil.webp"
                alt="Students collaborating"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                
              />scale
            </motion.div>

          </motion.div>

        </motion.div>

        {/* Right Content - Text and Info */}
        <motion.div
          className="w-1/2 h-full bg-orange-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="space-y-4">
            <motion.span
              className="text-csfaBlue uppercase tracking-wider text-sm font-semibold"
              variants={itemVariants}
            >
              About Us
            </motion.span>
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-csfaNavy" variants={itemVariants}>
              Our Edukation System <span className="text-csfaPink">Inspires</span> You More.
            </motion.h1>
            <motion.p className="text-csfaNavy/80 max-w-2xl" variants={itemVariants}>
              There are many variations of passages available but the majority have suffered alteration in some form by
              injected humour or random words which don't even look believable. If you are going to use passage.
            </motion.p>
          </div>

          {/* Service Cards */}
          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-csfaPink rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-csfaWhite" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-csfaNavy">Edukation Services</h3>
                    <p className="text-csfaNavy/70 text-sm">
                      It is a long established fact that a reader will be distracted.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-csfaCyan rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-csfaWhite" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-csfaNavy">International Hubs</h3>
                    <p className="text-csfaNavy/70 text-sm">
                      It is a long established fact that a reader will be distracted.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact and Testimonial */}
          <motion.div className="flex flex-col md:flex-row gap-6 items-center" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Button className="bg-csfaBlue hover:bg-csfaDarkBlue text-csfaWhite rounded-full px-6">
                Contact Us Now
              </Button>
            </motion.div>

            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <div className="bg-csfaCyan rounded-full p-2">
                <Phone className="h-4 w-4 text-csfaWhite" />
              </div>
              <div className="text-sm font-medium">
                <p className="text-csfaNavy">+1 123 456 7899</p>
              </div>
            </motion.div>

            <motion.div className="ml-auto text-right hidden md:block" variants={itemVariants}>
              <span className="text-5xl font-bold text-csfaPink">99</span>
              <p className="text-sm text-csfaNavy/70">Satisfied Students</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

  )
}

