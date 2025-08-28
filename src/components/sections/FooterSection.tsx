// components/sections/FooterSection.tsx
import { FC } from 'react';
import {
  FooterRoot,
  FooterInfoColumn,
  FooterLinkColumn,
  FooterContactColumn,
  FooterBottomBar,
  FooterLinkProps,
} from '@/components/layouts/Footer';

const FooterSection: FC = () => {
  const year = new Date().getFullYear();

  const quickLinks: FooterLinkProps[] = [
    { href: "/", text: "Início" },
    { href: "/segmentos", text: "Segmentos" }, // Ajustado para corresponder ao seu texto "Sobre nós"
    { href: "/sobre", text: "Sobre nós" },     // Ajustado
    { href: "/diferenciais", text: "Diferenciais" }, // Ajustado
    { href: "/contato", text: "Contato" },
    { href: "/acontece", text: "Acontece Csfa" }, // Ajustado
  ];

  const responsavelLinks: FooterLinkProps[] = [
    { href: "/lista-de-materiais", text: "Lista de materiais" },
    { href: "/calendario-escolar", text: "Calendário escolar" },
    { href: "/uniformes", text: "Uniformes" },
    { href: "/metodologia-de-ensino", text: "Metodologia de ensino" },
    { href: "/classapp", text: "ClassApp" },
    { href: "/sas-educacao", text: "SAS Educação" },
  ];

  const socialLinksData = [
    { href: "https://www.youtube.com/@seucanal", icon: "mdi:youtube" },
    { href: "https://www.facebook.com/suapagina", icon: "mdi:facebook" },
    { href: "https://www.instagram.com/seuinstagram", icon: "mdi:instagram" },
    { href: "https://wa.me/seunumerodetelefone", icon: "mdi:whatsapp" },
  ];

  return (
    <FooterRoot>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ">

        {/* Column 1 - School Info */}
        <FooterInfoColumn
          title="Colégio São Francisco de Assis"
          description="Formando cidadãos do futuro com excelência e dedicação desde 1985."
          socialLinks={socialLinksData}
        />

        {/* Column 2 - Quick Links */}
        <FooterLinkColumn
          title="Links Rápidos"
          links={quickLinks}
        />

        {/* Column 3 - Responsáveis */}
        <FooterLinkColumn
          title="Responsáveis"
          links={responsavelLinks}
        />

        {/* Column 4 - Contact */}
        <FooterContactColumn
          title="Contato"
          addressLines={["Av. Educação, 1000, Centro", "Cidade - Estado, CEP 00000-000"]}
          phone="(00) 1234-5678"
          emailHref="mailto:contato@colegioeducacional.com.br"
          emailText="contato@colegioeducacional.com.br"
        />
      </div>

      {/* Bottom Bar */}
      <FooterBottomBar
        year={year}
        copyrightText="Colégio São Francisco de Assis. Todos os direitos reservados."
        privacyPolicyHref="/politica-de-privacidade"
        privacyPolicyText="Política de Privacidade e Uso de Dados"
        developerHref="https://devneto.com.br"
        developerText="Design e desenvolvimento de Cloves Neto"
      />
    </FooterRoot>
  );
};

export default FooterSection;