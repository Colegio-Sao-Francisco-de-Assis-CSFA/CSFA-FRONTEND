"use client";

import React from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { NavigationConfig } from "./types";

const navigationConfig: NavigationConfig = {
  logo: {
    src: "/logo40anos.svg",
    alt: "Colégio São Francisco de Assis",
    width: 160,
    height: 40,
    href: "/",
  },
  navItems: [
    {
      label: "Início",
      href: "/"
    },
    {
      label: "Segmentos",
      href: "/segmentos",
    },
    {
      label: "Sobre Nós",
      href: "/sobre",
      isdropdown: 'true',
      pages: [
        { label: 'o colégio', link: '/sobre/o-colegio' },
        { label: 'o fundador', link: '/sobre/o-fundador' }
      ]
    },
    {
      label: "Diferenciais",
      href: "/diferenciais"
    },
    {
      label: "Contato",
      href: "/contato"
    },
  ],

  restrictedItems: [
    {
      label: "E-mail Aluno",
      href: "https://mail.google.com",
      icon: "mdi:google",
    },
    {
      label: "Classroom",
      href: "https://classroom.google.com",
      icon: "mdi:google-classroom",
    },
    {
      label: "SAS Educação",
      href: "https://saseducacao.com.br",
      icon: "mdi:book-education",
    },
    {
      label: "Diário Eletrônico",
      href: "https://diario.escola.com.br",
      icon: "mdi:notebook",
    },
    {
      label: "Cantina",
      href: "https://cantina.escola.com.br",
      icon: "ion:fast-food",
    },
    {
      label: "E-mail Corporativo",
      href: "https://mail.corporativo.com.br",
      icon: "mdi:email",
    },
    // ... other items
  ],
};

export const Navigation = () => {
  return (
    <>
      <DesktopNav {...navigationConfig} />
      <MobileNav {...navigationConfig} />
    </>
  );
};