// DesktopNav.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";
import { NavItem, RestrictedItem } from "./types";
import { NavButton } from './NavButton';
// Importe o ThemeToggleButton que você criou
import { ThemeToggleButton } from '@/components/theme-toggle-button';

interface DesktopNavProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
  };
  navItems: NavItem[];
  restrictedItems: RestrictedItem[];
}

export const DesktopNav = ({
  logo,
  navItems,
  restrictedItems,
}: DesktopNavProps) => {
  return (
    <nav className="hidden fixed top-2 left-1/2 w-full max-w-screen-2xl z-50 -translate-x-1/2 xl:flex h-20 items-center justify-center bg-white border border-gray-300 mx-auto rounded-full shadow-sm
                    dark:bg-background dark:border-border dark:text-foreground"> {/* Ajustado para dark mode */}

      <div className="w-full flex items-center justify-between mx-auto px-6">
        <Link
          href={logo.href}
          className="flex-shrink-0"
          passHref
        >
          {/* Você pode precisar de uma versão escura do seu logo ou ajustar sua cor */}
          {/* Se o logo for SVG, você pode aplicar `fill-current text-foreground` */}
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  variant="ghost"
                  // Ajuste as cores do NavLink para dark mode
                  inactiveClassName="text-gray-500 text-lg dark:text-muted-foreground hover:dark:text-foreground"
                  activeClassName="text-blue-600 text-lg font-bold dark:text-primary"
                  exact={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 flex items-center space-x-4"> {/* Adicionado para alinhar o botão de tema */}
          <NavDropdown
            trigger={
              <NavButton
                href="#"
                icon="mdi:lock"
                variant="primary"
                iconPosition="right"
              >
                Área Restrita
              </NavButton>
            }
            items={restrictedItems.map(item => ({
              ...item,
              href: item.href || "#"
            }))}
            align="end"
          />
          <ThemeToggleButton /> {/* Adicione o botão de tema aqui */}
        </div>
      </div>
    </nav>
  );
};