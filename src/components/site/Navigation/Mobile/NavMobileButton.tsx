import { Button } from "@/components/ui/button";

interface NavMobileButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function NavMobileButton({ isOpen, toggleMenu }: NavMobileButtonProps) {
    return (
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="relative z-50 h-12 w-12 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-600/20"
        >
            <div className="flex flex-col items-center justify-center h-6 w-6">
                <span
                    className={`block absolute h-0.5 w-6 bg-blue-600 transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}>
                </span>
                <span
                    className={`block absolute h-0.5 w-6 bg-blue-600 transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : ""}`}>
                </span>
                <span
                    className={`block absolute h-0.5 w-6 bg-blue-600 transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}>
                </span>
            </div>
        </Button>
    );
}
