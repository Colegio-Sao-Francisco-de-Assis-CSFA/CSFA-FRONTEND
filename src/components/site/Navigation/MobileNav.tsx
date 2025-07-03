// MobileNav.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { MobileTopBar } from "./MobileTopBar";
import { MobileSideMenu } from "./MobileSideMenu";
import { RestrictedItem, NavItem } from "./types";

interface MobileNavProps {
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

export const MobileNav = ({ logo, navItems, restrictedItems }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen || isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isDropdownOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleRestrictedItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <MobileTopBar
        isDropdownOpen={isDropdownOpen}
        onToggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
        onOpenMenu={() => setIsMenuOpen(true)}
        restrictedItems={restrictedItems}
        onRestrictedItemClick={handleRestrictedItemClick}
        dropdownRef={dropdownRef as React.RefObject<HTMLDivElement>}
      />

      {isDropdownOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] animate-in fade-in-0 duration-200"
          onClick={closeDropdown}
        />
      )}

      <MobileSideMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        logo={logo}
        navItems={navItems}
      />
    </>
  );
};