'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardBadge, CardIcon } from './Card'
import type { CursoItem } from '@/types/segmento.type';



export const CourseCard: React.FC<{ course: CursoItem }> = ({ course }) => {
    const IconComponent = course.icon;

    return (
        <motion.div>
            <Card
                variant="default"
                className="relative h-full flex flex-col justify-between text-white overflow-hidden p-0"
            >
                {course.backgroundImageSrc && (
                    <>
                        <CardImage
                            src={course.backgroundImageSrc}
                            alt={`Imagem do curso ${course.title}`}
                            className="absolute inset-0 w-full h-full z-0"
                        />
                        <div className="absolute inset-0 bg-white/90 z-10"></div>
                    </>
                )}

                <div className="relative z-20 flex flex-col flex-grow h-full p-6">
                    {course.ageRange && (
                        <CardBadge color={course.color} position="top-left" className="ml-0 mt-0">
                            {course.ageRange}
                        </CardBadge>
                    )}

                    {IconComponent && (
                        <div className="flex justify-center my-8">
                            <CardIcon
                                variant="gradient"
                                icon={course.icon}
                            />
                        </div>
                    )}

                    <CardContent className="flex-grow p-0 text-center">
                        <CardTitle as="h3" className="text-2xl font-bold text-foreground mb-2">
                            {course.title}
                        </CardTitle>

                        {course.subtitle && (
                            <p className="font-semibold text-blue-600 mb-4">{course.subtitle}</p>
                        )}

                        <CardDescription className="text-foreground">
                            {course.description}
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    )
}

export default CourseCard;