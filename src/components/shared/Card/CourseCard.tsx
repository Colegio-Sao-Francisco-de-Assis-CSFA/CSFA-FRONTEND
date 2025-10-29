'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription, CardBadge, CardIcon } from './Card'
import type { CursoItem } from '@/types/segmento.type';

export const CourseCard: React.FC<{ course: CursoItem }> = ({ course }) => {
    const IconComponent = course.icon;

    return (
        <motion.div
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.2 }}
        >
            <Card
                variant="default"
                className={`relative h-full flex flex-col justify-between overflow-hidden p-0 bg-${course.color}`}
            >
                <div className="relative z-20 flex flex-col flex-grow h-full p-6">
                    {course.ageRange && (
                        <CardBadge color={`bg-${course.color}`} position="top-left" className="ml-0 mt-0">
                            {course.ageRange}
                        </CardBadge>
                    )}

                    {IconComponent && (
                        <div className="flex justify-center my-8">
                            <CardIcon
                                variant="gradient"
                                icon={IconComponent}
                                className={`text-white bg-${course.color}`}
                            />
                        </div>
                    )}

                    <CardContent className="flex-grow p-0 text-center">
                        <CardTitle as="h3" className="text-2xl font-bold text-white mb-2">
                            {course.title}
                        </CardTitle>

                        {course.subtitle && (
                            <p className="font-semibold text-white/80 mb-4">{course.subtitle}</p>
                        )}

                        <CardDescription className="text-white/70">
                            {course.description}
                        </CardDescription>
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    )
}

export default CourseCard;