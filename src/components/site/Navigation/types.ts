export interface SubLink {
    href: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface NavItem {
    href?: string;
    label: string;
    subLinks?: SubLink[];
    icon?: React.ComponentType<{ className?: string }>;
}
