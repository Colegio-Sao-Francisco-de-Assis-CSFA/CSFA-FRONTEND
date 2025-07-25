// NavDropdown.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavButton } from "./NavButton";
import { NavLink } from "./NavLink";

interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
}

interface NavDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "start" | "center" | "end";
  onClose?: () => void;
}

export const NavDropdown = ({
  trigger,
  items,
  align = "end",
  onClose,
}: NavDropdownProps) => {
  const pathname = usePathname();

  const isAnyChildActive = items.some(item =>
    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <NavButton
            href="#"
            icon="mdi:chevron-down"
            iconPosition="right"
            className={isAnyChildActive ?
              "text-blue-600 font-bold dark:text-primary" :
              "text-gray-500 hover:text-blue-600 dark:text-muted-foreground hover:dark:text-foreground"
            }
          >
            Menu
          </NavButton>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="min-w-[150px] p-2 shadow-lg bg-white dark:bg-background border border-gray-200 dark:border-border"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <NavLink
              href={item.href}
              variant="ghost"
              className="w-full justify-start text-lg p-2 hover:text-white hover:bg-blue-600"
              icon={item.icon}
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};