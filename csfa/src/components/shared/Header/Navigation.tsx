'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Icon } from '@iconify/react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


// Interface para definir as propriedades do NavLink
interface NavLinkProps {
  href: string;                  // Rota de destino do link (obrigatório)
  children: ReactNode;           // Conteúdo do link (texto ou elementos)
  className?: string;            // Classes CSS adicionais (opcional)
  activeClassName?: string;      // Classes específicas para link ativo (opcional)
  inactiveClassName?: string;    // Classes específicas para link inativo (opcional)
  exact?: boolean;               // Se true, só considera ativo se rota for exatamente igual (opcional, padrão: true)
}

const LinkNav: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  activeClassName = 'text-blue-600 font-semibold', 
  inactiveClassName = 'text-slate-600 hover:text-blue-600',
  exact = true
}) => {
  const pathname = usePathname();
  
  // Lógica de verificação de rota ativa
  const isActive = exact 
    ? pathname === href 
    : pathname.startsWith(href);
  
  // Combina classes base com classes condicionais
  const linkClasses = `
    block py-2 
    transition-colors duration-200 
    ${isActive ? activeClassName : inactiveClassName} 
    ${className}
  `;

  return (
    <Link 
      href={href} 
      className={linkClasses}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default function Navigation() {
  // Estados para controlar a abertura do menu mobile e sua animação
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Controla o overflow do body quando o menu mobile está aberto
  // Evita rolagem da página quando o menu está ativo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function para garantir que o overflow volte ao normal quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Função para alternar entre abrir e fechar o menu mobile
  const toggleMenu = () => {
    setIsTransitioning(true);
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Array com links da área restrita e suas propriedades
  const navRestrict = [
    { name: 'Email Aluno', icon: 'mdi:email', href:'#', bg: 'bg-orange-500', hoverbg:'hover:bg-orange-700'},
    { name: 'Classroom', icon: 'mdi:google-classroom', href:'#', bg: 'bg-green-500', hoverbg:'hover:bg-green-700'},
    { name: 'SAS Educação', icon: 'mdi:book-education', href:'#', bg: 'bg-red-500', hoverbg:'hover:bg-red-700'},
    { name: 'Diário Eletrônico', icon: 'mdi:notebook', href:'#', bg: 'bg-purple-500', hoverbg:'hover:bg-purple-700'},
    { name: 'Email Coorporativo', icon: 'mdi:email-outline', href:'#', bg: 'bg-gray-600', hoverbg:'hover:bg-gray-800'},
    { name: 'Apadges', icon: 'mdi:account', href:'/sign-in', bg: 'bg-blue-500', hoverbg:'hover:bg-blue-700'},
  ];

  // Array com links do menu principal
  const navMenu = [
    { name: 'Inicio', href: '/'},
    { name: 'Segmentos', href: '/segmentos'},
    { name: 'Sobre nós', href: '/sobre'},
    { name: 'Diferenciais', href: '/diferenciais'},
    { name: 'Contato', href: '/contato'}
  ];
  
  


  return (
    <>
      {/* Barra de navegação principal - somente visível em desktop */}
      <nav className="hidden lg:flex h-20 items-center justify-center bg-white border border-slate-600/30 rounded-full shadow-md">
        <div className="w-full max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 ml-4 rtl:space-x-reverse">
            <img src="/logo-teste.png" className="w-16" alt="Logo" />
          </a>

          {/* Container para menu e área restrita */}
          <div className='flex-grow flex items-center justify-end relative pr-2 '>
            {/* Menu navegação principal - visível apenas em desktop */}
            <div className="absolute left-[50%] translate-x-[-60%] whitespace-nowrap">
              <ul className="flex font-medium space-x-8 rtl:space-x-reverse">
                {navMenu.map((item, index) => (
                  <li key={index}>
                    <LinkNav
                      href={item.href}
                      children={item.name}
                      activeClassName='text-blue-600 font-medium'
                      inactiveClassName='text-slate-600 font-normal'
                      key={index}
                    />
                    {/* <Link
                      href={item.href}
                      className="block py-2 text-slate-600 font-med ium hover:text-blue-600 transition-colors duration-200"
                      aria-current={item.href === '/' ? "page" : undefined}
                    >
                      {item.name}
                    </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown da área restrita usando Shadcn/ui - visível apenas em desktop */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='bg-blue-600 cursor-pointer min-w-36 rounded-md flex items-center justify-center gap-2 text-white p-2 font-medium transition-colors duration-200 hover:bg-blue-800'>
                    <Icon icon="mdi:lock" />
                    Área restrita
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 p-2 flex flex-col gap-2">
                  {navRestrict.map((btn, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={btn.href}
                        className={`p-2 flex items-center gap-4 cursor-pointer w-full text-white ${btn.bg} ${btn.hoverbg} transition-colors duration-200`}
                      >
                        {btn.icon && <Icon className='text-white' icon={btn.icon} />}
                        {btn.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Botão Hamburguer fixo - visível apenas em mobile */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <Icon
            icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
            className="text-2xl text-blue-600"
          />
        </button>
      </div>

      {/* Menu Mobile - Overlay e Painel Deslizante */}
      <div
        className={`fixed top-0 right-0 h-full w-full lg:hidden z-40 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={isMobileMenuOpen ? "false" : "true"}
      >
        {/* Overlay escuro que aparece atrás do menu */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        />

        {/* Painel deslizante do menu mobile */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Cabeçalho do menu mobile */}
            <div className="flex flex-col p-4 border-b">
              
              {/* Logo inserido entre o título e o botão de fechar */}
              <div className="flex justify-center mb-2">
                <img src="/logo-teste.png" className="w-20" alt="Logo" />
              </div>
            </div>

            {/* Itens do menu mobile */}
            <nav className="flex-1 p-4">
              {/* Links de navegação principal */}
              <ul className="space-y-4">
                {navMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block py-2 font-medium text-gray-600 p-2 rounded-sm hover:bg-blue-600 hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Área Restrita no Menu Mobile */}
              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Área Restrita</h3>
                <ul className="space-y-3">
                  {navRestrict.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 py-2 px-4 rounded-md text-white ${item.bg} hover:opacity-90 transition-opacity`}
                        onClick={toggleMenu}
                      >
                        {item.icon && <Icon icon={item.icon} />}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}