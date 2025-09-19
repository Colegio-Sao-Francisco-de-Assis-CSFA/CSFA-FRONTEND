// Componentes principais
export { default as Card } from './Card'
export { default } from './Card'

// Subcomponentes
export { CardImage } from './Card'
export { CardIcon } from './Card'
export { CardHeader } from './Card'
export { CardContent } from './Card'
export { CardTitle } from './Card'
export { CardDescription } from './Card'
export { CardFooter } from './Card'
export { CardBadge } from './Card'
export { CardDate } from './Card'
export { CardAction } from './Card'

// Cards compostos
export { default as NewsCard } from './NewsCard'
export { default as CampusCard } from './CampusCard'
export { default as ParceirosCard } from './ParceirosCard'

// Tipos
export type {
    CardProps,
    CardImageProps,
    CardIconProps,
    CardHeaderProps,
    CardContentProps,
    CardTitleProps,
    CardDescriptionProps,
    CardFooterProps,
    CardBadgeProps,
    CardDateProps,
    CardActionProps,
    NewsCardData,
    CampusCardData,
    ParceirosCardData,
    NewsCardProps,
    CampusCardProps,
    ParceirosCardProps,
} from './types'
