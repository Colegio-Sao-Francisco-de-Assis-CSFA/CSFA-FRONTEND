// src/components/layout/Header/MobileMenu.tsx
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
// 1. Trocar a importação do Lucide pelo Iconify
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { mainNavItems, restrictedAreaButton } from './constants';

export function MobileMenu() {
  const allNavItems = [...mainNavItems, restrictedAreaButton];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          {/* 2. Substituir o componente do Lucide pelo do Iconify */}
          <Icon icon="mdi:menu" className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium mt-8">
          <Accordion type="multiple" className="w-full">
            {allNavItems.map((navItem) =>
              navItem.items && navItem.items.length > 0 ? (
                <AccordionItem key={navItem.label} value={navItem.label}>
                  <AccordionTrigger>{navItem.label}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      {navItem.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          // 3. Adicionar classes para alinhar o ícone e o texto
                          className="flex items-center text-muted-foreground hover:text-foreground"
                        >
                          {/* 4. Adicionar o ícone do Iconify antes do texto */}
                          {subItem.icon && <Icon icon={subItem.icon} className="mr-2 h-5 w-5" />}
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={navItem.label}
                  href={navItem.href || '#'}
                  className="py-4 font-medium flex items-center"
                >
                  {navItem.icon && <Icon icon={navItem.icon} className="mr-2 h-5 w-5" />}
                  {navItem.label}
                </Link>
              )
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
}