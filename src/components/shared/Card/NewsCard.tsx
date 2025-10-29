'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ChevronRightIcon } from 'lucide-react'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, CardBadge, CardDate, CardAction } from './Card'
import type { NewsCardProps } from './types'

export const NewsCard: React.FC<NewsCardProps> = ({ item, className }) => {
    return (
        <motion.div
            whileHover={{ translateY: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <Card variant="news" className={`h-full ${className}`}>
                <div className="relative">
                    <CardImage
                        src={item.imageUrl}
                        alt={item.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="rounded-t-lg"
                    />
                    <CardBadge color={`bg-${item.categoryColor}`}>
                        {item.category}
                    </CardBadge>
                </div>

                {/* Content */}
                <CardContent className="flex-grow">
                    <CardTitle className="line-clamp-2 text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {item.title}
                    </CardTitle>
                    <CardDescription maxLines={3} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.excerpt}
                    </CardDescription>
                </CardContent>

                {/* Footer */}
                <CardFooter className='pt-4 flex flex-row justify-between items-center'>
                    <CardDate className='pt-2 text-gray-500 dark:text-gray-400' date={item.date} icon={<CalendarIcon size={16} />} />
                    <CardAction href={item.slug} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Leia Mais
                        <ChevronRightIcon size={16} className="ml-1" />
                    </CardAction>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default NewsCard