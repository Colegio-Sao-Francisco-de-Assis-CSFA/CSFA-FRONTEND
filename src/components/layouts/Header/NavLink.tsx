// src/components/layout/Header/NavLink.tsx
import Link from 'next/link';

import { NavLinkProps } from './types';

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
    >
      {children}
    </Link>
  );
}