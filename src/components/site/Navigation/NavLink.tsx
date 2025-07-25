// NavLink.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NavButton, NavButtonProps } from "./NavButton";

export const NavLink = ({
  href,
  exact = false,
  activeClassName,
  inactiveClassName,
  ...props
}: NavButtonProps & {
  exact?: boolean;
  activeClassName?: string;
  inactiveClassName?: string;
}) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href.toString() : pathname.startsWith(href.toString());

  return (
    <NavButton
      href={href}
      className={isActive ? activeClassName : inactiveClassName}
      active={isActive}
      {...props}
    />
  );
};