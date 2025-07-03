export interface NavItem {
  label: string;
  href: string; // Required href
}

export interface RestrictedItem extends NavItem {
  icon?: string;
  variant?: "default" | "destructive";
}

export interface NavigationConfig {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
  };
  navItems: NavItem[];
  restrictedItems: RestrictedItem[];
}