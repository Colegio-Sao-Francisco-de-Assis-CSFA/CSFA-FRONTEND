// src/components/layout/Header/NavLinkDropdown.tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { NavItem, NavLinkDropdownProps, ListItemProps } from './types';

export function NavLinkDropdown({ label, items }: NavLinkDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='m-0 p-0'>

          <NavigationMenuTrigger className="text-lg p-0 m-0 font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">
              {label}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
              {items.map(
                (item) => (
                  <ListItem key={item.label} href={item.href} title={item.label} />
                )
              )
              }
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ href, title }: ListItemProps) => (
  <NavigationMenuLink className='p-0 m-0 w-44 rounded-none' asChild>
    <Link
      href={href}
      className="block m-0 rounded-none p-4 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-l-2 hover:border-blue-600 transition-colors duration-200 relative after:absolute"
    >
      {title}
    </Link>
  </NavigationMenuLink>
);