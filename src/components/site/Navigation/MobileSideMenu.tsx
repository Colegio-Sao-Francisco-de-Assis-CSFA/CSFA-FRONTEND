// MobileSideMenu.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavLink } from "./NavLink";
import { NavItem } from "./types";
import { NavDropdown } from "./NavDropdown"; // Certifique-se de que NavDropdown está importado

interface MobileSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
  };
  navItems: NavItem[];
}

export const MobileSideMenu = ({ isOpen, onClose, logo, navItems }: MobileSideMenuProps) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  // Detector de clique fora para o menu lateral
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Verifica se o clique não foi dentro do menu lateral
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
        onClose(); // Chama o handler onClose do componente pai
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay de fundo */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 animate-in fade-in-0" onClick={onClose}></div>
      )}

      {/* Menu lateral */}
      <div
        ref={sideMenuRef}
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-background shadow-lg z-50 transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Cabeçalho do menu */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-border">
            <Link href={logo.href} onClick={onClose}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto"
              />
            </Link>
            <button title="close" onClick={onClose} className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground">
              <Icon icon="mdi:close" className="h-7 w-7" />
            </button>
          </div>

          {/* Itens de navegação */}
          <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-2">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="transform transition-all duration-150 ease-out"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.isdropdown ? (
                  <NavDropdown
                    trigger={
                      <NavLink
                        href={item.href}
                        variant="ghost"
                        className="w-full justify-start text-lg"
                        icon="mdi:chevron-down"
                        iconPosition="right"
                        activeClassName="text-white bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg border-transparent"
                        inactiveClassName="text-gray-700 hover:text-blue-600"
                        exact={true}
                      >
                        <span className="relative z-10 font-medium tracking-wide">
                          {item.label}
                        </span>
                      </NavLink>
                    }
                    items={item.pages?.map(page => ({
                      label: page.label,
                      href: page.link,
                    })) || []}
                    align="start"

                  />
                ) : (
                  <NavLink
                    href={item.href}
                    variant="ghost"
                    className="w-full justify-start text-lg"
                    activeClassName="text-white bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg border-transparent"
                    inactiveClassName="text-gray-700 hover:text-blue-600"
                    exact={item.href === "/"}
                    onClick={onClose} // Mantido: Clicar em um link direto fecha o menu
                  >
                    <span className="relative z-10 font-medium tracking-wide">
                      {item.label}
                    </span>
                    {/* Decorative dot */}
                    <div className="absolute left-2 top-1/2 w-1 h-1 bg-current rounded-full opacity-60 transform -translate-y-1/2"></div>
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Footer decorativo */}
          <div className="mt-auto p-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mt-4 text-center">
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-indigo-800 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};