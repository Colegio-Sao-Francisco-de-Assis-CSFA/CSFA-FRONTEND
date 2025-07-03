// MobileSideMenu.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavLink } from "./NavLink";
import { NavItem } from "./types";

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
      {/* Backdrop do Menu Principal (agora com z-index mais alto) */}
      {isOpen && (
        <div
          // Z-index para o backdrop do menu lateral: deve cobrir tudo abaixo do próprio menu
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[130] animate-in fade-in-0 duration-300"
          onClick={onClose} // Clicar no backdrop também fecha o menu
        />
      )}

      {/* Painel do Menu Lateral (agora com z-index mais alto) */}
      <div
        ref={sideMenuRef} // Aplica a ref aqui para o detector de clique fora
        className={`
          lg:hidden fixed top-0 right-0 w-3/4 max-w-80 bg-white z-[140] h-full
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          rounded-tl-2xl border-l-2 border-l-blue-600
          flex flex-col shadow-2xl
        `}
      >
        {/* Header do Menu */}
        <header className="bg-white flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
          <Link href={logo.href || "/"} onClick={onClose}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto ml-4"
            />
          </Link>
          <button
            title="Fechar Menu"
            onClick={onClose}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </header>

        {/* Lista de Navegação */}
        <div className="flex flex-col py-4 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className="transform transition-all duration-200 ease-out"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
              }}
            >
              <NavLink
                href={item.href}
                variant="ghost"
                size="lg"
                className="justify-start px-4 py-3 w-full rounded-lg"
                activeClassName="text-blue-600 bg-blue-50 font-bold border-l-4 border-blue-600"
                inactiveClassName="text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                exact={item.href === "/"}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};