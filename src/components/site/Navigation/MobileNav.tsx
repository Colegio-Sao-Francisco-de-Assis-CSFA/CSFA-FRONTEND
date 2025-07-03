// MobileNav.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavLink } from "./NavLink";
import { NavItem, RestrictedItem } from "./types";
import { NavDropdown } from "./NavDropdown"; // Adicionado para uso futuro, se necessário
import { NavButton } from "./NavButton"; // Adicionado para o trigger do dropdown, se necessário

interface MobileNavProps {
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

export const MobileNav = ({ logo, navItems, restrictedItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barra de Navegação Superior (Fixa e Arredondada) */}
      <nav
        className="lg:hidden fixed top-2 left-1/2 w-full max-w-screen-2xl z-50 -translate-x-1/2 flex h-16 items-center justify-center bg-white border border-gray-300 mx-auto rounded-full shadow-sm px-4"
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href={logo.href || "/"} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto"
            />
          </Link>

          {/* Ícone do Menu Hambúrguer (o botão "Área Restrita" não fica aqui) */}
          <div className="flex items-center">
            <button
              title="Abrir Menu"
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <Icon icon="mdi:menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay de Fundo Escuro para quando o menu estiver aberto */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu Hambúrguer (Overlay em Tela Cheia Deslizando da Direita) */}
      <div
        className={`
          lg:hidden fixed top-0 right-0 h-full w-1/2 rounded-tl-2xl border-l-2 border-l-blue-600 bg-white z-[51]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          pt-4 pb-8 px-4 overflow-y-auto
          /* REMOVIDO: rounded-tl-3xl, border-l-2, border-l-gray-500 */
        `}
      >
        {/* Botão de Fechar no Canto Superior Direito */}
        <div className="flex justify-end p-2">
          <button
            title="Fechar Menu"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </div>

        {/* Conteúdo do Menu (Links de navegação + Seção Área Restrita) */}
        <div className="flex flex-col space-y-4 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              variant="ghost"
              size="lg"
              className="justify-start px-4 py-3"
              activeClassName="text-blue-600 bg-blue-50 font-bold" // Adicionado font-bold
              inactiveClassName="text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              exact={item.href === "/"} // 'Início' deve ser exato
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Seção "Área Restrita" no menu mobile */}
          <div className="pt-4 border-t mt-4">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Área Restrita
            </h3>
            <div className="space-y-2 mt-2">
              {restrictedItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  variant="ghost" // Mantém ghost do NavButton
                  size="lg"
                  className="justify-start px-4 py-3"
                  inactiveClassName="text-blue-600 hover:text-blue-700 hover:bg-blue-50" // Azul para links inativos do dropdown
                  activeClassName="text-blue-700 bg-blue-100 font-bold" // Azul mais escuro e fundo mais intenso quando ativo, adicionado font-bold
                  icon={item.icon}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};