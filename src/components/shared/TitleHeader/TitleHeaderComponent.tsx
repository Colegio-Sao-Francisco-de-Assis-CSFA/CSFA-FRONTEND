'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TitleProps {
    title: string;
    subtitle: string;
    variant?: 'centro' | 'esquerda';
}

const TitleHeaderComponent: React.FC<TitleProps> = ({
    title,
    subtitle,
    variant = 'centro'
}) => {
    const alignmentClasses = {
        centro: {
            container: 'text-center',
            subtitle: 'mx-auto',
            divider: 'mx-auto'
        },
        esquerda: {
            container: 'text-left',
            subtitle: 'mr-auto',
            divider: 'mr-auto'
        }
    };

    const currentAlignment = alignmentClasses[variant];

    return (
        <div className={`mb-12 ${currentAlignment.container}`}>
            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight mb-4"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                {title}
            </motion.h2>

            <motion.p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6 ${currentAlignment.subtitle}`}
            >
                {subtitle}
            </motion.p>

            <motion.span
                className={`block w-24 h-1 bg-primary mt-6 rounded-full ${currentAlignment.divider}`}
            >
            </motion.span>
        </div>
    );
};

export default TitleHeaderComponent;