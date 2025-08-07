import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavItem } from "../types";

interface MobileNavItemProps {
    item: NavItem;
    handleLinkClick: () => void;
}

export default function MobileNavItem({ item, handleLinkClick }: MobileNavItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    };

    if (item.subLinks) {
        return (
            <div className="space-y-2">
                <button
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-300 border border-blue-100"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span className="font-semibold text-blue-700">{item.label}</span>
                    </div>
                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                    )}
                </button>

                {isExpanded && (
                    <div className="space-y-2 ml-4 animate-in slide-in-from-top-2 duration-300">
                        {item.subLinks.map((subLink) => (
                            <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={handleLinkClick}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100 hover:border-blue-600 hover:scale-[1.02] group"
                            >
                                <div className="w-6 h-6 bg-blue-100 group-hover:bg-white/20 rounded-md flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                    <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <span className="font-medium text-blue-700 group-hover:text-white transition-colors duration-300 text-sm leading-tight">
                                    {subLink.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href!}
            onClick={handleLinkClick}
            className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100 hover:border-blue-600 hover:scale-[1.02] group"
        >
            <div className="w-8 h-8 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0">
                {/* You can add icons here based on the link type if you want */}
            </div>
            <span className="font-semibold text-blue-700 group-hover:text-white transition-colors duration-300">
                {item.label}
            </span>
            <div className="ml-auto flex-shrink-0">
                <svg className="w-4 h-4 text-blue-400 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}
