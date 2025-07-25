"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface NavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  active?: boolean; // Esta prop é importante para o NavLink
  href: string;
}

const variantClasses = {
  primary: "bg-gradient-to-b from-indigo-800 via-blue-700 to-blue-500 text-white cursor-pointer",
  ghost: "text-gray-600",
};

export const NavButton = React.forwardRef<HTMLAnchorElement, NavButtonProps>(
  (
    {
      className,
      variant = 'ghost',
      icon,
      iconPosition = "left",
      active = false, 
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex text-2xl items-center justify-center rounded-md font-medium transition-colors",
      variantClasses[variant],
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
          <Icon icon={icon} className="mr-2 text-xl" />
        )}
        {children}
        {icon && iconPosition === "right" && (
          <Icon icon={icon} className="ml-2 text-xl" />
        )}
      </Link>
    );
  }
);

NavButton.displayName = "NavButton";