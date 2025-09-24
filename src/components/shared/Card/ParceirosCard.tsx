'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import type { ParceirosCardProps } from './types';
import { Icon } from '@iconify/react';

export const ParceirosCard: React.FC<ParceirosCardProps> = ({
    icon,
    title,
    description,
    className
}) => {
    return (
        <div className={cn(
            "group relative bg-white/50 dark:bg-gray-950/50 p-8 rounded-2xl shadow-lg border border-blue-100/50 dark:border-gray-800 backdrop-blur-sm overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-3xl",
            className
        )}>

            {/* Conteúdo */}
            <div className="relative z-10">
                {/* Ícone */}
                <div className="w-16 h-16 bg-gradient-to-bl from-blue-500 via-blue-700 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-blue-500/25 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-2xl text-white" icon={icon}/>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                    {title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ParceirosCard
