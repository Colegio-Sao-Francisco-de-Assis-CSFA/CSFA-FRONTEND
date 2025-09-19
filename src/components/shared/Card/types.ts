import * as React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'news' | 'campus' | 'parceiros' | 'minimal'
    size?: 'sm' | 'default' | 'lg' | 'xl'
}

export interface CardImageProps {
    src: string
    alt: string
    className?: string
    priority?: boolean
    sizes?: string
}

export interface CardIconProps {
    icon: React.ReactNode
    className?: string
    variant?: 'default' | 'gradient' | 'outline'
}

export interface CardHeaderProps {
    children: React.ReactNode
    className?: string
}

export interface CardContentProps {
    children: React.ReactNode
    className?: string
}

export interface CardTitleProps {
    children: React.ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface CardDescriptionProps {
    children: React.ReactNode
    className?: string
    maxLines?: number
}

export interface CardFooterProps {
    children: React.ReactNode
    className?: string
    showBorder?: boolean
}

export interface CardBadgeProps {
    children: React.ReactNode
    className?: string
    color?: string
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export interface CardDateProps {
    date: string
    icon?: React.ReactNode
    className?: string
}

export interface CardActionProps {
    href?: string
    external?: boolean
    onClick?: () => void
    children: React.ReactNode
    variant?: 'link' | 'button'
    buttonVariant?: 'default' | 'outline' | 'ghost' | 'csfa' | 'csfa-outline' | 'csfa-ghost'
    buttonSize?: 'sm' | 'default' | 'lg' | 'xl'
    className?: string
}

// Tipos para composições específicas
export interface NewsCardData {
    id: string
    title: string
    excerpt: string
    imageUrl: string
    date: string
    category: string
    categoryColor: string
    slug: string
}

export interface CampusCardData {
    id: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
}

export interface ParceirosCardData {
    id: string
    title: string
    description: string
    icon: React.ReactNode
}

// Props para cards compostos
export interface NewsCardProps {
    item: NewsCardData
    className?: string
}

export interface CampusCardProps {
    feature: CampusCardData
    className?: string
}

export interface ParceirosCardProps {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
}
