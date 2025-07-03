// MobileTopBar.tsx
"use client";

import React, { RefObject } from "react";
import { Icon } from "@iconify/react";
import { MobileRestrictedDropdown } from "./MobileRestrictedDropdown";
import { RestrictedItem } from "./types";

interface MobileTopBarProps {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onOpenMenu: () => void;
  restrictedItems: RestrictedItem[];
  onRestrictedItemClick: () => void;
  dropdownRef: RefObject<HTMLDivElement>; // Recebe a ref do componente pai
}

export const MobileTopBar = ({
  isDropdownOpen,
  onToggleDropdown,
  onOpenMenu,
  restrictedItems,
  onRestrictedItemClick,
  dropdownRef,
}: MobileTopBarProps) => {
  return (
    <nav
      // Z-index da barra superior: deve estar acima dos backdrops de dropdown mas abaixo do menu lateral
      className="lg:hidden fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-32 z-[120] flex h-12 items-center justify-center bg-white border border-gray-300 mx-auto rounded-full shadow-sm gap-4 px-2"
    >
      {/* Dropdown de Área Restrita */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={onToggleDropdown}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 ${
            isDropdownOpen ? 'bg-gray-100 text-blue-600 scale-105' : ''
          }`}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Área Restrita</span>
          <Icon
            icon="mdi:lock"
            className={`text-xl transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-12' : ''
            }`}
          />
        </button>

        <MobileRestrictedDropdown
          isOpen={isDropdownOpen}
          items={restrictedItems}
          onItemClick={onRestrictedItemClick}
        />
      </div>

      {/* Botão do Menu Principal */}
      <div className="w-full flex items-center justify-center">
        <button
          title="Abrir Menu"
          onClick={onOpenMenu}
          className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
        >
          <Icon icon="mdi:menu" className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};