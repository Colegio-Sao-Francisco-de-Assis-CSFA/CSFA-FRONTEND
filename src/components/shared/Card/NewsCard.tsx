'use client'

import React from 'react'
import { CalendarIcon, ChevronRightIcon } from 'lucide-react'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, CardBadge, CardDate, CardAction } from './Card'
import type { NewsCardProps } from './types'

export const NewsCard: React.FC<NewsCardProps> = ({ item, className }) => {
    return (
        <Card variant="news" className={className}>
            <div className="relative">
                <CardImage
                    src={item.imageUrl}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <CardBadge color={item.categoryColor}>
                    {item.category}
                </CardBadge>
            </div>

            {/* Content */}
            <CardContent>
                <CardTitle className="line-clamp-2">
                    {item.title}
                </CardTitle>
                <CardDescription maxLines={3}>
                    {item.excerpt}
                </CardDescription>
            </CardContent>

            {/* Footer */}
            <CardFooter className='pt-4 flex flex-row justify-between items-center'>
                <CardDate className='pt-2' date={item.date} icon={<CalendarIcon size={16} />} />
                <CardAction href={item.slug}>
                    Leia Mais
                    <ChevronRightIcon size={16} className="ml-1" />
                </CardAction>
            </CardFooter>
        </Card>
    )
}

export default NewsCard
