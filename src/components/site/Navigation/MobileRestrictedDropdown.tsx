// MobileRestrictedDropdown.tsx
"use client";

import React from "react";
import { NavLink } from "./NavLink";
import { RestrictedItem } from "./types";

interface MobileRestrictedDropdownProps {
  isOpen: boolean;
  items: RestrictedItem[];
  onItemClick: () => void;
}

export const MobileRestrictedDropdown = ({ isOpen, items, onItemClick }: MobileRestrictedDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute -left-16 top-full mt-2 w-56 z-[110] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
      <div className="rounded-lg bg-white shadow-xl border border-gray-200">
        <div className="py-2" role="menu" aria-orientation="vertical">
          {items.map((item, index) => (
            <div
              key={item.href}
              className="transform transition-all duration-150 ease-out"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <NavLink
                href={item.href}
                variant="ghost"
                size="lg" // Mantido 'lg' para padding e altura, mas o text-size é controlado pelo className abaixo
                className="flex w-full items-center justify-start px-4 py-3 text-base transition-colors duration-150 rounded-none" // ALTERADO: de text-sm para text-base
                inactiveClassName="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                activeClassName="bg-blue-50 text-blue-700 font-medium"
                icon={item.icon}
                iconPosition="left"
                onClick={onItemClick}
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};