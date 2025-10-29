'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardImage, CardContent, CardTitle, CardDescription } from './Card'
import type { CampusCardProps } from './types'

export const CampusCard: React.FC<CampusCardProps> = ({ feature, className }) => {
    return (
        <motion.div
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <Card size='sm' variant="campus" className={`h-full ${className}`}>
                <CardImage
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="h-60 rounded-t-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardContent className="py-6 px-4 flex flex-col gap-2 flex-grow">
                    <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-foreground mb-2">
                        {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-muted-foreground leading-relaxed flex-grow">
                        {feature.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default CampusCard