'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button as LinkButton } from '@/components/shared/Button/Button';
import TypingEffect from '@/components/shared/TypingEffect';
import { TitleProps } from './types.ts';

const TitleHeaderComponent: React.FC<TitleProps> = ({
    title,
    subtitle,
    tagline,
    variant = 'centro',
    color = 'blue',
    ctaText,
    ctaLink,
    taglineTypingEffect = false,
}) => {
    const alignmentClasses = {
        centro: {
            container: 'text-center',
            subtitle: 'mx-auto',
            tagline: 'mx-auto',
            divider: 'mx-auto'
        },
        esquerda: {
            container: 'text-left',
            subtitle: 'mr-auto',
            tagline: 'mx-auto',
            divider: 'mr-auto'
        },
        missao: {
            container: 'text-center',
            subtitle: 'mx-auto',
            tagline: 'mx-auto',
            divider: 'mx-auto'
        },
        hero: {
            container: 'text-center',
            subtitle: 'mr-auto',
            tagline: 'mx-auto',
            ctaLink: 'mr-auto',
            divider: ''
        },
        'hero-complete': {
            container: 'text-center',
            subtitle: 'mx-auto',
            tagline: 'mx-auto',
            ctaLink: 'mr-auto',
            divider: ''
        },

    };

    const colorClasses = {
        blue: {
            title: 'text-blue-600',
            tagline: 'text-gray-500',
            subtitle: 'text-muted-foreground'
        },
        white: {
            title: 'text-white',
            tagline: 'text-white',
            subtitle: 'text-gray-200'

        }
    };

    const currentAlignment = alignmentClasses[variant];
    const currentColor = colorClasses[color];

    if (variant === 'hero-complete') {
        return (
            <motion.div
                className={`${currentAlignment.container}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg ${currentColor.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {title}
                </motion.h1>
                {tagline && (
                    <motion.h2
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.title}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {taglineTypingEffect ? (
                            <TypingEffect
                                wrap="h2"
                                sequence={[1000, tagline]}
                                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.tagline}`}
                            />
                        ) : (
                            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.tagline}`}>
                                {tagline}
                            </h2>
                        )}
                    </motion.h2>
                )}
                <motion.p
                    className={`text-base sm:text-lg md:text-xl max-w-4xl opacity-95 leading-relaxed ${currentAlignment.subtitle} ${currentColor.subtitle}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {subtitle}
                </motion.p>
                {ctaText && ctaLink && (
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <LinkButton href={ctaLink} size="lg">{ctaText}</LinkButton>
                    </motion.div>
                )}
            </motion.div>
        );
    }

    if (variant === 'hero') {
        return (

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`${currentAlignment.container}`}
            >
                <motion.h1 className={`text-5xl md:text-7xl font-extrabold drop-shadow-md ${currentColor.title}`}>
                    {title}
                </motion.h1>
                {tagline && (
                    <motion.h2 className={`text-2xl md:text-3xl font-bold mt-2 drop-shadow-md ${currentColor.title}`}>
                        {taglineTypingEffect ? (
                            <TypingEffect
                                wrap="h2"
                                sequence={[1000, tagline]}
                                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.tagline}`}
                            />
                        ) : (
                            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.tagline}`}>
                                {tagline}
                            </h2>
                        )}
                    </motion.h2>
                )}
                <motion.p className={`text-lg md:text-xl leading-relaxed max-w-3xl mt-6 ${currentColor.subtitle} ${currentAlignment.subtitle}`}>
                    {subtitle}
                </motion.p>
            </motion.div>
        );
    }

    if (variant === 'missao') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`mb-12 px-6 ${currentAlignment.container}`}
            >
                <motion.h2
                    className={`text-2xl sm:text-4xl lg:text-5xl xl:text-7xl p font-extrabold mb-6 md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto ${currentColor.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className={`text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-3xl mb-8 ${currentAlignment.subtitle} ${currentColor.tagline}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>

                <motion.span
                    className={`block w-24 h-1 bg-primary mt-6 rounded-full ${currentAlignment.divider}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                </motion.span>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mb-12 ${currentAlignment.container}`}
        >
            <motion.h2
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${currentColor.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {title}
            </motion.h2>

            <motion.p
                className={`text-lg md:text-xl leading-relaxed max-w-3xl mb-6 ${currentAlignment.subtitle} ${currentColor.subtitle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {subtitle}
            </motion.p>

            {tagline && (
                <motion.h2
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {taglineTypingEffect ? (
                        <TypingEffect
                            wrap="h2"
                            sequence={[1000, tagline]}
                            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.title}`}
                        />
                    ) : (
                        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 opacity-90 drop-shadow-md ${currentColor.title}`}>
                            {tagline}
                        </h2>
                    )}
                </motion.h2>
            )}

            <motion.span
                className={`block w-24 h-1 bg-primary mt-6 rounded-full ${currentAlignment.divider}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ transformOrigin: variant === 'esquerda' ? 'left' : 'center' }}
            >
            </motion.span>
        </motion.div>
    );
};

export default TitleHeaderComponent;