import { NavItem } from "./types";

export const navLinks: NavItem[] = [
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

export const matriculasLinks: NavItem = {
    label: "Matrículas",
    subLinks: [
        { href: "/matriculas/novos-alunos", label: "Alunos novatos" },
        { href: "/matriculas/veteranos", label: "Alunos veteranos" },
    ]
};