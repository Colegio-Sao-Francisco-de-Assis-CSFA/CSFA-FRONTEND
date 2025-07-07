// NavDropdown.tsx
"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavButton } from "./NavButton";
import { NavLink } from "./NavLink"; // Certifique-se que NavLink está importado

interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
  variant?: "default" | "destructive"; // Embora só ghost seja usado aqui para itens
}

interface NavDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "start" | "center" | "end";
}

export const NavDropdown = ({
  trigger,
  items,
  align = "end",
}: NavDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || (
          <NavButton
            href="#"
            icon="mdi:chevron-down"
            iconPosition="right"
          >
            Menu
          </NavButton>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="min-w-[200px] p-1 shadow-lg"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <NavLink
              href={item.href}
              variant="ghost"
              className="w-full justify-start"
              icon={item.icon}
              inactiveClassName="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              activeClassName="text-blue-700 bg-blue-100 font-bold"
            >
              {item.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};