// src/components/layout/Header/index.tsx
import Link from 'next/link';
import { mainNavItems, restrictedAreaButton } from './constants';
import { NavLink } from './NavLink';
import { NavLinkDropdown } from './NavLinkDropdown';
import { ButtonDropdown } from './ButtonDropdown';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex h-20 items-center justify-between rounded-full bg-white border border-gray-400/40 shadow-xl px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 max-w-16" >
            <img src="/logo40anos.svg" alt="logo colégio 40 anos" className='w-full object-cover' />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {mainNavItems.map((item) => {
              switch (item.type) {
                case 'dropdown':
                  return <NavLinkDropdown key={item.label} label={item.label} items={item.items!} />;
                default:
                  return (
                    <NavLink key={item.label} href={item.href!}>
                      {item.label}
                    </NavLink>
                  );
              }
            })}
          </nav>

          {/* Botão Área Restrita (Desktop) */}
          <div className="hidden items-center gap-4 md:flex">
             <ButtonDropdown {...restrictedAreaButton} />
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}