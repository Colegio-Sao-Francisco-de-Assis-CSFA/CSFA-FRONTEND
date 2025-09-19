'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './Button'
import type { SubmitButtonProps } from './types'

export const SubmitButton: React.FC<SubmitButtonProps> = ({
    children,
    variant = 'csfa',
    size = 'lg',
    className,
    ...props
}) => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            variant={variant}
            size={size}
            className={className}
            disabled={pending}
            {...props}
        >
            {pending ? 'Enviando...' : children}
        </Button>
    )
}

export default SubmitButton
