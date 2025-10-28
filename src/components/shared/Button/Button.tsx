// Button.tsx

'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonProps } from './types'

// 1. Definimos as variantes de estilo em um objeto separado (como no Card)
const buttonVariantStyles = {
    default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
    destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
    outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
    secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
    link: 'text-primary underline-offset-4 hover:underline',
    csfa: 'bg-primary text-primary-foreground hover:bg-primary/90 border border-border shadow-sm',
    'csfa-outline': 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-sm',
    'csfa-ghost': 'text-primary hover:bg-primary/10',
};

const buttonSizeStyles = {
    default: 'h-9 px-4 py-2 has-[>svg]:px-3',
    sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
    lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
    xl: 'h-12 rounded-md px-8 text-base has-[>svg]:px-6',
    icon: 'size-9',
    'icon-sm': 'size-8',
    'icon-lg': 'size-10',
};

export const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    {
        variants: {
            variant: buttonVariantStyles,
            size: buttonSizeStyles,
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({
    className,
    variant,
    size,
    asChild = false,
    href,
    external = false,
    children,
    ...props
}, ref) => {
    const Comp = asChild ? Slot : 'button'

    if (href) {
        if (external) {
            return (
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant, size, className }))}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                </Link>
            )
        }
    }

    return (
        <Comp
            ref={ref}
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </Comp>
    )
})

Button.displayName = 'Button'

export default Button