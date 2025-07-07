// DesktopNav.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";
import { NavItem, RestrictedItem } from "./types";
import { NavButton } from './NavButton'

interface DesktopNavProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string; // Added href for logo
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
    <nav className="hidden fixed top-2 left-1/2 w-full max-w-screen-2xl z-50 -translate-x-1/2 lg:flex h-20 items-center justify-center bg-white border border-gray-300 mx-auto rounded-full shadow-sm">

      <div className="w-full flex items-center justify-between mx-auto px-6">
        <Link
          href={logo.href}
          className="flex-shrink-0"
          passHref
        >
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
                  inactiveClassName ="text-gray-500 text-lg"
                  activeClassName="text-blue-600 text-lg font-bold"
                  exact={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0">
          <NavDropdown
            trigger={
              <NavButton
                href="#"
                icon="mdi:lock"
                variant="primary"
                iconPosition="right" // Adicionado para exibir a seta
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
        </div>
      </div>
    </nav>
  );
};