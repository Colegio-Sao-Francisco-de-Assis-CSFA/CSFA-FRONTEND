
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavMenu {
  type: 'link' | 'dropdown' | 'button_dropdown';
  label: string;
  href?: string;
  items?: NavItem[];
  icon?: string; //quero importar do iconify
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface NavLinkDropdownProps {
  label: string;
  items: NavItem[];
}

export interface ListItemProps {
  href: string;
  title: string;
}
