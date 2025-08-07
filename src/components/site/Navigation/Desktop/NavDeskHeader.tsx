import Image from "next/image";
import Link from "next/link";
import { navLinks, matriculasLinks } from "../navigation.data";
import DesktopNavItem from "./DesktopNavItem";
import NavMobileHeader from "../Mobile/NavMobileHeader";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function NavDeskHeader() {
    return (
        <header className="w-screen h-24 z-50 p-3 fixed top-0 left-0">
            <div className="bg-transparent border-0 flex items-center justify-end md:justify-between w-full max-w-7xl rounded-full h-full mx-auto md:bg-white/95 backdrop-blur-md md:border md:border-blue-100 shadow-2xl shadow-blue-600/10 px-8">

                <div className="hidden md:flex items-center">
                    <Link href="/" className="group">
                        <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-105">
                            <Image
                                src="/logo40anos.svg"
                                alt="Logo"
                                width={90}
                                height={90}
                                className="h-auto transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <DesktopNavItem key={link.label} item={link} />
                    ))}
                </nav>
                <div className="hidden md:flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30 active:scale-95">
                                <span className="flex items-center gap-2">
                                    {matriculasLinks.label}
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl shadow-blue-600/10 rounded-xl mt-2">
                            {matriculasLinks.subLinks!.map((subLink) => (
                                <DropdownMenuItem key={subLink.href} className="rounded-lg p-3 hover:bg-blue-50 transition-colors duration-200">
                                    <Link href={subLink.href} className="flex items-center gap-3 w-full text-blue-700 hover:text-blue-800">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">{subLink.label}</span>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <NavMobileHeader />
            </div>
        </header>
    );
}
