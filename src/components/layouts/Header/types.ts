
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