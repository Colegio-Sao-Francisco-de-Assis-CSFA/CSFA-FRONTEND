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
import { Icon } from "@iconify/react";
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
            <NavLink // Usando NavLink para que os estilos ativos/inativos funcionem
              href={item.href}
              variant="ghost" // Isso define o estilo base do NavButton, mas as classes customizadas sobrescrevem
              className="w-full justify-start"
              icon={item.icon}
              // ESTILOS PARA OS ITENS DO DROPDOWN "ÁREA RESTRITA":
              inactiveClassName="text-blue-600 hover:text-blue-700 hover:bg-blue-50" // Azul para links inativos do dropdown
              activeClassName="text-blue-700 bg-blue-100 font-bold" // Azul mais escuro e fundo mais intenso quando ativo, adicionado font-bold
              onClick={(e) => { // Adicionado onClick para fechar o dropdown, se necessário
                // e.preventDefault(); // Comente ou remova se o link deve navegar
                // handleCloseDropdown(); // Função para fechar o dropdown, se NavDropdown gerenciar seu próprio estado
              }}
            >
              {item.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};