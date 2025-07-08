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
      {/* Backdrop do Menu Principal com animação moderna */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-lg z-[130] animate-in fade-in-0 duration-500"
          onClick={onClose}
        />
      )}

      {/* CSS para animações personalizadas */}
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInStagger {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .menu-item {
          animation: slideInStagger 0.4s ease-out forwards;
        }

        .logo-pulse:hover {
          animation: pulse 0.6s ease-in-out;
        }

        .glassmorphism {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-border {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2px;
          border-radius: 16px;
        }

        .gradient-border-content {
          background: white;
          border-radius: 14px;
          height: 100%;
          width: 100%;
        }
      `}</style>

      {/* Painel do Menu Lateral com design moderno */}
      <div
        ref={sideMenuRef}
        className={`
          xl:hidden fixed top-0 right-0 w-3/4 max-w-80 z-[140] h-full
          transform transition-all duration-500 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col shadow-2xl
        `}
      >
        {/* Container com glassmorphism */}
        <div className="h-full glassmorphism rounded-tl-3xl overflow-hidden">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-600"></div>

          {/* Header do Menu com design moderno */}
          <header className="relative bg-gradient-to-r from-blue-50 to-purple-50 flex justify-between items-center p-6 border-b border-gray-200/50 flex-shrink-0">
            {/* Background pattern */}
            <Link href={logo.href || "/"} onClick={onClose} className="relative z-10">
              <div className="logo-pulse transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto ml-4 drop-shadow-lg"
                />
              </div>
            </Link>

            <button
              title="Fechar Menu"
              onClick={onClose}
              className="relative z-10 p-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-800 transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-xl"
            >
              <Icon icon="mdi:close" className="text-xl" />
            </button>
          </header>

          {/* Lista de Navegação com animações staggered */}
          <div className="flex flex-col py-6 px-6 space-y-3 overflow-y-auto">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="menu-item opacity-0"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: isOpen ? `slideInStagger 0.5s ease-out ${index * 80}ms forwards` : 'none'
                }}
              >
                <div className="group relative">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 border-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  <NavLink
                    href={item.href}
                    variant="ghost"
                    size="lg"
                    className="relative justify-start px-6 py-4 w-full rounded-xl bg-white/0 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white/20 hover:border-white/40"
                    activeClassName="text-white bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg border-transparent"
                    inactiveClassName="text-gray-700 hover:text-blue-600"
                    exact={item.href === "/"}
                    onClick={onClose}
                  >
                    <span className="relative z-10 font-medium tracking-wide">
                      {item.label}
                    </span>

                    {/* Decorative dot */}
                    <div className="absolute left-2 top-1/2 w-1 h-1 bg-current rounded-full opacity-60 transform -translate-y-1/2"></div>
                  </NavLink>
                </div>
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