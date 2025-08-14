// src/components/layout/Header/ButtonDropdown.tsx
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { NavMenu } from './types';
import { Icon } from '@iconify/react';

// 1. Corrigida a desestruturação das props. 'icon: string' foi trocado por 'icon'.
export function ButtonDropdown({ label, icon, items }: NavMenu) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-42 h-full p-2 text-lg bg-blue-600 hover:bg-blue-800 cursor-pointer text-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 rounded-lg">
          {/* 2. Renderiza o ícone do botão principal (se existir) e corrige a sintaxe */}
          {icon && <Icon icon={icon} className="h-8 w-8" />}
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-46 bg-white gap-2 flex flex-col border border-gray-400/40 shadow-lg rounded-lg p-2 mt-4"
      >
        {items?.map((item) => (
          <DropdownMenuItem key={item.label} asChild className="rounded-xs group font-semibold bg-gray-200 hover:bg-blue-600 hover:text-white">
            <Link
              href={item.href}
              className="text-sm cursor-pointer flex items-center"
            >
              {/* 3. Lógica SIMPLIFICADA. Removemos a verificação de tipo, pois será sempre uma string. */}
              {item.icon && <Icon icon={item.icon} className="mr-2 h-4 w-4" />}
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}