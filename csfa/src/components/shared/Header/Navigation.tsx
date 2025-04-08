'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Icon } from '@iconify/react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
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

  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href);

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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {

      document.body.style.overflow = 'hidden';

    } else {

      document.body.style.overflow = 'unset';

    }

    return () => {

      document.body.style.overflow = 'unset';

    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {

    setIsTransitioning(true);

    setIsMobileMenuOpen((prev) => !prev);

  };

  const navRestrict = [
    { name: 'E-mail Aluno', icon: 'mdi:google', href:'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hd=aluno.colsaofrancisco.com.br&ifkv=AXH0vVtuzXZaLJf3keWAaYRQtfaa361Sdrc5myDLc5keVeCRVTCRLrstItkPRHGmdSqFzm1Nuy9XWw&ltmpl=default&osid=1&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1926296839%3A1742924668599914', bg: 'bg-amber-600', hoverbg:'hover:bg-amber-700'},
    { name: 'Classroom', icon: 'mdi:google-classroom', href:'https://edu.google.com/intl/ALL_br/workspace-for-education/products/classroom/', bg: 'bg-emerald-600', hoverbg:'hover:bg-emerald-700'},
    { name: 'SAS Educação', icon: 'mdi:book-education', href:'https://app.portalsaseducacao.com.br/entrar/', bg: 'bg-blue-800', hoverbg:'hover:bg-blue-950'},
    { name: 'Diário Eletrônico', icon: 'mdi:notebook', href:'https://siga03.activesoft.com.br/login/?instituicao=FRANCISCODEASSIS', bg: 'bg-purple-600', hoverbg:'hover:bg-purple-700'},
    { name: 'Cantina', icon: 'ion:fast-food', href:'https://siga03.activesoft.com.br/login/?instituicao=FRANCISCODEASSIS', bg: 'bg-sky-600', hoverbg:'hover:bg-sky-700'},
    { name: 'E-mail Coorporativo', icon: 'mdi:email', href:'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hd=colsaofrancisco.com.br&ifkv=AXH0vVvX8vAYtRE_pCpchKTt3qfwzXgYkGyDAYj4O6A5xoRirc0g3L5e8IqMJC6tPSvDDKYEc9b0qQ&ltmpl=default&osid=1&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1357479426%3A1742924714844676', bg: 'bg-slate-700', hoverbg:'hover:bg-slate-800'},
    { name: 'Apadges', icon: 'tdesign:system-sum', href:'/sign-in', bg: 'bg-rose-600', hoverbg:'hover:bg-rose-700'},
  ];

  const navMenu = [
    { name: 'Inicio', href: '/'},
    { name: 'Segmentos', href: '/segmentos'},
    { name: 'Sobre nós', href: '/sobre'},
    { name: 'Diferenciais', href: '/diferenciais'},
    { name: 'Contato', href: '/contato'},
    { name: 'Acontece CSFA', href: '/acontece-csfa'}
  ];




  return (
    <>

      <nav className="hidden lg:flex h-20 items-center justify-center bg-white border border-slate-600/30 rounded-full shadow-md">
        <div className="w-full max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">

          <a href="/" className="flex items-center space-x-3 ml-4 rtl:space-x-reverse">
            <Image src="/logo40anos.svg" alt="Logo" width={20} height={20} className="w-16" />
          </a>


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
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='bg-blue-600 cursor-pointer min-w-36 rounded-md flex items-center justify-center gap-2 text-white p-2 font-medium transition-colors duration-200 hover:bg-blue-800'>
                    <Icon icon="mdi:lock" />
                    Área restrita
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52 p-2.5 flex flex-col gap-3">

                  {navRestrict.map((btn, index) => (

                    <DropdownMenuItem key={index} asChild>


                        <a href={btn.href} className={`p-2 flex gap-4 items-center cursor-pointer w-full text-white ${btn.bg} ${btn.hoverbg}`}>
                          {<Icon className='text-white' icon={btn.icon} />}
                          {btn.name}
                        </a>

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
          <span className='hidden'>button</span>
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
                <Image src="/logo40anos.svg" alt="Logo" width={20} height={20} className="w-24" />
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
                        className={`flex items-center gap-2 py-2 px-4 rounded-md text-white ${item.bg} hover: transition-colors duration-200`}
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