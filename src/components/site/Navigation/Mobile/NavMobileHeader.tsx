'use client';

import { useState } from 'react';
import NavMobileButton from './NavMobileButton';
import NavMobilePanel from './NavMobilePanel';

export default function NavMobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <NavMobileButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <NavMobilePanel isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
}