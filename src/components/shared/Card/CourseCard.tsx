// ./components/shared/Card/CourseCard.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardBadge, CardIcon } from './Card'
import type { Course } from '@/components/index/Cursos'

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const IconComponent = course.icon;

    return (
        <motion.div variants={cardVariants}>
            <Card
                variant="default"
                className="relative h-full flex flex-col justify-between text-white overflow-hidden p-0"
            >
                {/* 1. Imagem de Fundo Opcional */}
                {course.backgroundImageSrc && (
                    <>
                        <CardImage
                            src={course.backgroundImageSrc}
                            alt={`Imagem do curso ${course.title}`}
                            className="absolute inset-0 w-full h-full z-0"
                        />
                        {/* Overlay para melhorar a legibilidade do texto */}
                        <div className="absolute inset-0 bg-blue-800/80 z-10"></div>
                    </>
                )}

                {/* Container para todo o conteúdo, para ficar acima da imagem */}
                <div className="relative z-20 flex flex-col flex-grow h-full p-6">
                    {/* 2. Badge no topo esquerdo */}
                    <CardBadge color={course.color} position="top-left" className="ml-0 mt-0">
                        {course.ageRange}
                    </CardBadge>

                    {/* 3. Ícone Opcional */}
                    {IconComponent && (
                        <div className="flex justify-center my-8">
                            <CardIcon
                                variant="gradient"
                                icon={<IconComponent size={32} />}
                            />
                        </div>
                    )}

                    <CardContent className="flex-grow p-0 text-center">
                        {/* 4. Título */}
                        <CardTitle as="h3" className="text-2xl font-bold text-white mb-2">
                            {course.title}
                        </CardTitle>
                        <p className="font-semibold text-blue-300 mb-4">{course.subtitle}</p>

                        {/* 5. Descrição */}
                        <CardDescription className="text-gray-200">
                            {course.description}
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    )
}

export default CourseCard