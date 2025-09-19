'use client'

import React from 'react'
import { Card, CardImage, CardContent, CardTitle, CardDescription } from './Card'
import type { CampusCardProps } from './types'

export const CampusCard: React.FC<CampusCardProps> = ({ feature, className }) => {
    return (
        <Card variant="campus" className={className}>
            <CardImage
                src={feature.imageSrc}
                alt={feature.imageAlt}
                className="h-56"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <CardContent className="p-6">
                <CardTitle className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-foreground mb-2">
                    {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                    {feature.description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default CampusCard
