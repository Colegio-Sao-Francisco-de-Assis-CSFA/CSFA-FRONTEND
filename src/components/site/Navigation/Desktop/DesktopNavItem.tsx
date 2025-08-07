import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavItem } from "../types";

interface DesktopNavItemProps {
    item: NavItem;
}

export default function DesktopNavItem({ item }: DesktopNavItemProps) {
    return item.subLinks ? (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative px-4 py-2 text-blue-600 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 active:scale-95 group flex items-center gap-1">
                <span className="relative z-10">{item.label}</span>
                <ChevronDown className="h-4 w-4 relative z-10 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-100 group-data-[state=open]:opacity-100"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl shadow-blue-600/10 rounded-xl mt-2">
                {item.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} className="rounded-lg p-3 hover:bg-blue-50 transition-colors duration-200">
                        <Link href={subLink.href} className="flex items-center gap-3 w-full text-blue-700 hover:text-blue-800">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="font-medium">{subLink.label}</span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <Link
            href={item.href!}
            className="relative px-4 py-2 text-blue-600 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105 active:scale-95 group"
        >
            <span className="relative z-10">{item.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-100"></div>
        </Link>
    );
}
