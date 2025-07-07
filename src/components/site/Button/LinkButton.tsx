// components/ButtonLink.tsx
'use client';

import Link from 'next/link';
import React from 'react';

// Importe a interface de tipos
import { ButtonLinkProps } from './types';

export default function ButtonLink({
    href,
    children,
    external = false,
    className = '',
}: ButtonLinkProps) {

    const baseClasses =
        "bg-gradient-to-b w-auto text-base md:text=-xl lg:text-2xl from-indigo-800 via-blue-700 to-blue-500 text-white hover:bg-gradient-to-b hover:from-white hover:via-white hover:to-white hover:text-blue-600 text-center max-w-76 font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full border border-blue-600 shadow-sm";

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`${baseClasses} ${className}`}>
            {children}
        </Link>
    );
}