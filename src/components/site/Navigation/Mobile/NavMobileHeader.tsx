'use client';

import { useState } from 'react';
import NavMobileButton from './NavMobileButton';
import NavMobilePanel from './NavMobilePanel';

const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    {
        label: "Segmentos",
        subLinks: [
            { href: "/segmentos/educacao-infantil", label: "Educação Infantil" },
            { href: "/segmentos/anos-iniciais", label: "EF.I Ano Inicias" },
            { href: "/segmentos/anos-finais", label: "EF.II Anos Finais" },
            { href: "/segmentos/ensino-medio", label: "Ensino Médio" },
        ]
    },
    { href: "/contato", label: "Contato" },
];

export default function NavMobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <NavMobileButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <NavMobilePanel isOpen={isOpen} toggleMenu={toggleMenu} links={links} />
        </div>
    );
}
