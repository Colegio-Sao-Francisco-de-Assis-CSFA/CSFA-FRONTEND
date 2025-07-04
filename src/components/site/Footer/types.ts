// components/site/Footer/types.ts
import React from 'react';

export interface FooterRootProps {
  children: React.ReactNode;
  backgroundColorClass?: string;
}

export interface FooterSectionHeaderProps {
  title: string;
}

export interface FooterInfoColumnProps extends FooterSectionHeaderProps {
  description: string;
  socialLinks: FooterSocialLinkProps[];
}

export interface FooterLinkProps {
  href: string;
  text: string;
}

export interface FooterLinkColumnProps extends FooterSectionHeaderProps {
  links: FooterLinkProps[];
}

export interface FooterContactColumnProps extends FooterSectionHeaderProps {
  addressLines: string[];
  phone: string;
  emailHref: string;
  emailText: string;
}

export interface FooterSocialLinkProps {
  href: string;
  icon: string; 
}

export interface FooterBottomBarProps {
  year: number;
  copyrightText: string;
  privacyPolicyHref: string;
  privacyPolicyText: string;
  developerHref: string;
  developerText: string;
}