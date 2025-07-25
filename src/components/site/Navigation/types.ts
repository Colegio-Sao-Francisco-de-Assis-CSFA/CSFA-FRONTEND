export interface NavItem {
  label: string;
  href: string;
  isdropdown?: string; // Change to boolean for clarity
  pages?: { label: string; link: string; }[]; // Define nested pages
}

export interface RestrictedItem {
  label: string;
  href: string;
  icon?: string;
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