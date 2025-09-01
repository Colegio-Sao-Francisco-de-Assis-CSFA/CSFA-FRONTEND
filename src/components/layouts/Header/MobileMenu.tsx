'use client';

// src/components/layout/Header/MobileMenu.tsx
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import { mainNavItems, restrictedAreaButton } from './constants';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const allNavItems = [...mainNavItems, restrictedAreaButton];

  // Adiciona/remove a classe de blur no body quando o menu abre/fecha
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  return (
    <>
      {/* CSS para o efeito de blur */}
      <style jsx global>{`
        .mobile-menu-open {
          overflow: hidden;
        }
      `}</style>

      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="relative overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Icon
              icon="mdi:menu"
              className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>

        {/* Menu deslizando da direita para esquerda */}
        <SheetContent
          side="right"
          className="w-80 p-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-l-2 border-blue-200/50 dark:border-slate-700"
        >
          {/* Header do menu */}
          <div className="px-6 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Menu</h2>
              <p className="text-blue-100 text-sm opacity-90">Navegue pelas opções</p>
            </div>
          </div>

          {/* Conteúdo do menu */}
          <div className="px-6 py-6 h-[calc(100vh-140px)] overflow-y-auto">
            <nav className="space-y-2">
              <Accordion type="multiple" className="w-full space-y-2">
                {allNavItems.map((navItem, index) =>
                  navItem.items && navItem.items.length > 0 ? (
                    <AccordionItem
                      key={navItem.label}
                      value={navItem.label}
                      className="border border-blue-200/50 dark:border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <AccordionTrigger className="px-4 py-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium hover:no-underline group">
                        <div className="flex items-center">
                          {navItem.icon && (
                            <Icon
                              icon={navItem.icon}
                              className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors"
                            />
                          )}
                          {navItem.label}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="space-y-3 pl-8 border-l-2 border-blue-200/30 dark:border-slate-600">
                          {navItem.items.map((subItem, subIndex) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-2 group py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.icon && (
                                <Icon
                                  icon={subItem.icon}
                                  className="mr-3 h-4 w-4 text-blue-400 group-hover:text-blue-600 transition-colors"
                                />
                              )}
                              <span className="relative">
                                {subItem.label}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div
                      key={navItem.label}
                      className="border border-blue-200/50 dark:border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link
                        href={navItem.href || '#'}
                        className="flex items-center px-4 py-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center w-full">
                          {navItem.icon && (
                            <Icon
                              icon={navItem.icon}
                              className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-all duration-200 group-hover:scale-110"
                            />
                          )}
                          <span className="relative">
                            {navItem.label}
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                          </span>
                          <Icon
                            icon="mdi:chevron-right"
                            className="ml-auto h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200"
                          />
                        </div>
                      </Link>
                    </div>
                  )
                )}
              </Accordion>
            </nav>
          </div>

          {/* Footer do menu */}
          <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-t border-blue-200/30 dark:border-slate-700">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:gesture-swipe-right" className="h-4 w-4" />
                <span>Deslize para fechar</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Keyframes para animações */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}