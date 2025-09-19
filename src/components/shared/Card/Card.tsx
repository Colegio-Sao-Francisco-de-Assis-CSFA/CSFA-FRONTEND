'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'
import type { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
    variant = 'default',
    size = 'default',
    className,
    children,
    ...props
}) => {
    const baseClasses = 'rounded-lg shadow-sm transition-all duration-300 overflow-hidden bg-card border border-border'

    const variantClasses = {
        default: 'hover:shadow-md',
        news: 'hover:shadow-md hover:-translate-y-1',
        campus: 'hover:shadow-2xl hover:-translate-y-1',
        parceiros: 'hover:scale-105 hover:-translate-y-2 hover:shadow-2xl',
        minimal: 'hover:shadow-sm',
    }

    const sizeClasses = {
        default: 'p-4',
        sm: 'p-3',
        lg: 'p-6',
        xl: 'p-8',
    }

    return (
        <motion.div
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            whileHover={variant === 'news' ? { y: -5 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const CardImage: React.FC<{
    src: string
    alt: string
    className?: string
    priority?: boolean
    sizes?: string
}> = ({ src, alt, className, priority = false, sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" }) => (
    <div className={cn("relative w-full h-48 overflow-hidden", className)}>
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-center"
        />
    </div>
)

export const CardIcon: React.FC<{
    icon: React.ReactNode
    className?: string
    variant?: 'default' | 'gradient' | 'outline'
}> = ({ icon, className, variant = 'default' }) => {
    const iconVariants = {
        default: 'w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center',
        gradient: 'w-16 h-16 bg-gradient-to-bl from-blue-500 via-blue-700 to-blue-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25',
        outline: 'w-12 h-12 border-2 border-primary text-primary rounded-lg flex items-center justify-center',
    }

    return (
        <div className={cn(iconVariants[variant], className)}>
            <div className="text-2xl">{icon}</div>
        </div>
    )
}

export const CardHeader: React.FC<{
    children: React.ReactNode
    className?: string
}> = ({ children, className }) => (
    <div className={cn("p-4", className)}>
        {children}
    </div>
)

export const CardContent: React.FC<{
    children: React.ReactNode
    className?: string
}> = ({ children, className }) => (
    <div className={cn("p-4 flex-grow flex flex-col", className)}>
        {children}
    </div>
)

export const CardTitle: React.FC<{
    children: React.ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}> = ({ children, className, as: Component = 'h3' }) => (
    <Component className={cn("font-semibold text-lg mb-2 text-card-foreground", className)}>
        {children}
    </Component>
)

export const CardDescription: React.FC<{
    children: React.ReactNode
    className?: string
    maxLines?: number
}> = ({ children, className, maxLines = 3 }) => (
    <p className={cn(
        "text-muted-foreground text-sm flex-grow",
        maxLines && `line-clamp-${maxLines}`,
        className
    )}>
        {children}
    </p>
)

export const CardFooter: React.FC<{
    children: React.ReactNode
    className?: string
    showBorder?: boolean
}> = ({ children, className, showBorder = true }) => (
    <div className={cn(
        "p-4 pt-0 mt-auto",
        showBorder && "border-t border-border",
        className
    )}>
        {children}
    </div>
)

export const CardBadge: React.FC<{
    children: React.ReactNode
    className?: string
    color?: string
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}> = ({ children, className, color, position = 'top-left' }) => {
    const positionClasses = {
        'top-left': 'absolute top-3 left-3',
        'top-right': 'absolute top-3 right-3',
        'bottom-left': 'absolute bottom-3 left-3',
        'bottom-right': 'absolute bottom-3 right-3',
    }

    return (
        <span
            className={cn(
                "inline-block rounded-md text-xs font-medium text-white px-3 py-1 z-10",
                positionClasses[position],
                className
            )}
            style={color ? { backgroundColor: color } : undefined}
        >
            {children}
        </span>
    )
}

export const CardDate: React.FC<{
    date: string
    icon?: React.ReactNode
    className?: string
}> = ({ date, icon, className }) => (
    <div className={cn("flex items-center text-muted-foreground text-sm mb-2", className)}>
        {icon && <span className="mr-1">{icon}</span>}
        <span>{date}</span>
    </div>
)

export const CardAction: React.FC<{
    href?: string
    external?: boolean
    onClick?: () => void
    children: React.ReactNode
    variant?: 'link' | 'button'
    buttonVariant?: 'default' | 'outline' | 'ghost'
    buttonSize?: 'sm' | 'default' | 'lg'
    className?: string
}> = ({
    href,
    external = false,
    onClick,
    children,
    variant = 'link',
    buttonVariant = 'default',
    buttonSize = 'default',
    className
}) => {
        if (variant === 'button') {
            return (
                <Button
                    href={href}
                    external={external}
                    onClick={onClick}
                    variant={buttonVariant}
                    size={buttonSize}
                    className={className}
                >
                    {children}
                </Button>
            )
        }

        if (href) {
            if (external) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("inline-flex items-center text-primary hover:text-primary/90 text-sm font-medium", className)}
                    >
                        {children}
                    </a>
                )
            }

            return (
                <Link
                    href={href}
                    className={cn("inline-flex items-center text-primary hover:text-primary/90 text-sm font-medium", className)}
                >
                    {children}
                </Link>
            )
        }

        if (onClick) {
            return (
                <button
                    onClick={onClick}
                    className={cn("inline-flex items-center text-primary hover:text-primary/90 text-sm font-medium", className)}
                >
                    {children}
                </button>
            )
        }

        return null
    }

export default Card
