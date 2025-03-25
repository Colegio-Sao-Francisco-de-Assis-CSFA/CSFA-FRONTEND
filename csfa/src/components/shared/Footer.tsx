import React from 'react';
import Image from 'next/image';
import { Icon }  from '@iconify/react';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:flex flex-row items-center justify-between">
        
        <div className="w-54">
          <Image className="w-24 mb-4" src="/logo40anos.svg" width={50} height={50} alt="Logo" />
          <p className="text-sm text-white">
          Escola comprometida com educação de qualidade, formando jovens transformadores da sociedade para um futuro melhor.
          </p>
        </div>

        <div className='flex flex-row gap-20'>

        <div>
          <h4 className="font-semibold mb-4 border-b border-white">Link rápido</h4>
          <nav className="space-y-2">
            <Link href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              Inicio
            </Link>
            <Link href="/segmentos" className="block hover:text-blue-300 text-white transition-colors">
              Segmentos
            </Link >
            <Link href="/project-protection" className="block hover:text-blue-300 text-white transition-colors">
              
            </Link >
            <Link href="/sobre" className="block hover:text-blue-300 text-white transition-colors">
              Sobre nós
            </Link >
          </nav>
        </div>

        
        <div>
          <nav className="space-y-2">
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Diferenciais
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Politica de privacidade
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Acontece CSFA
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Projeto acadêmico
            </Link >
          </nav>
        </div>

        <div>
          <nav className="space-y-2">
            <Link href="/contato" className="block hover:text-blue-300 text-white transition-colors">
              Contato
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Calendário
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Lista de materiais
            </Link >
            <Link href="/" className="block hover:text-blue-300 text-white transition-colors">
              Acontece CSFA
            </Link >
          </nav>
        </div>
        </div>

        <div className='flex flex-row gap-4'>

          <Link href="http://instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon icon={"streamline:instagram-solid"} className="text-white hover:text-blue-300 transition-colors text-2xl" />
          </Link>

          <Link href="http://instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon icon={"ix:linkedin-logo"} className="text-white hover:text-blue-300 transition-colors text-2xl" />
          </Link>

          <Link href="http://instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon icon={"raphael:facebook"} className="text-white hover:text-blue-300 transition-colors text-2xl" />
          </Link>
          
        
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-4 space-y-4 border-t border-blue-100 text-center">
        <p className="text-sm text-white">
          © Copyrigth - CSFA, Colégio São Francisco de Assis | 1984 - {new Date().getFullYear()}. Todos os direitos reservados. <br/>
        </p>
        <small className=''>Design e desenvolvimento de <Link className='underline font-bold' href="https://devneto.com.br">Cloves Neto</Link > </small>

      </div>
    </footer>
  );
};

