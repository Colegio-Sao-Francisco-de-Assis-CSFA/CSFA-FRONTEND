'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { navLinks, matriculasLinks } from "../navigation.data";
import MobileNavItem from "./MobileNavItem";
import { NavItem } from "../types";

interface NavMobilePanelProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function NavMobilePanel({ isOpen, toggleMenu }: NavMobilePanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                toggleMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleMenu]);

    const handleLinkClick = () => {
        toggleMenu();
    };

    return (
        <>
            <div
                ref={panelRef}
                className={`fixed -top-3 -right-5 w-80 h-dvh bg-white z-40 transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } rounded-l-2xl shadow-2xl shadow-blue-600/20 overflow-hidden flex flex-col`}
            >
                <div className="flex items-center justify-between p-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-white flex-shrink-0">
                    <Link href="/" className="group" onClick={handleLinkClick}>
                        <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105">
                            <Image
                                src="/logo40anos.svg"
                                alt="Logo"
                                width={60}
                                height={60}
                                className="h-auto transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain">
                    <nav className="p-4 space-y-3">
                        {navLinks.map((link) => (
                            <MobileNavItem key={link.label} item={link} handleLinkClick={handleLinkClick} />
                        ))}

                        <div className="mt-6 space-y-3">
                            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                                <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    {matriculasLinks.label}
                                </h3>
                                <div className="space-y-2">
                                    {matriculasLinks.subLinks!.map((subLink) => (
                                        <Link
                                            key={subLink.href}
                                            href={subLink.href}
                                            onClick={handleLinkClick}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-sm">{subLink.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
