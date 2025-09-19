import * as React from 'react'
import { VariantProps } from 'class-variance-authority'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof import('./Button').buttonVariants> {
    asChild?: boolean
    href?: string
    external?: boolean
}

export type ButtonVariant =
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'csfa'
    | 'csfa-outline'
    | 'csfa-ghost'

export type ButtonSize =
    | 'default'
    | 'sm'
    | 'lg'
    | 'xl'
    | 'icon'
    | 'icon-sm'
    | 'icon-lg'

export interface SubmitButtonProps extends Omit<ButtonProps, 'type'> {
    children: React.ReactNode
}
