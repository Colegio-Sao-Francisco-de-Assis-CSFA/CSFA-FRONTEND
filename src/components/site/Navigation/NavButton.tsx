"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface NavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  active?: boolean; // Esta prop é importante para o NavLink
  href: string;
}

const variantClasses = {
  primary: "bg-gradient-to-b from-indigo-800 via-blue-700 to-blue-500 text-white cursor-pointer",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "text-gray-600 hover:text-blue-600 hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const NavButton = React.forwardRef<HTMLAnchorElement, NavButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      icon,
      iconPosition = "left",
      active = false, // Padrão para false, mas NavLink irá sobrescrever
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    return (
      <Link
        ref={ref}
        href={href}
        className={baseClasses}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <Icon icon={icon} className="mr-2 text-lg" />
        )}
        {children}
        {icon && iconPosition === "right" && (
          <Icon icon={icon} className="ml-2 text-lg" />
        )}
      </Link>
    );
  }
);

NavButton.displayName = "NavButton";