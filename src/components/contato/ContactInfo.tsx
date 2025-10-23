// src/components/contato/ContactInfo.tsx
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const contactInfo = {
  phone: '(79) 3246-1273',
  email: 'contato@csfa.com.br',
  address: 'R. Dr. Celso Oliva, 421 - 13 de Julho, Aracaju - SE, 49020-090',
};

const socialLinks = [
  { icon: <Instagram />, href: 'https://www.instagram.com/colegiosaofranciscooficial/' },
  { icon: <Facebook />, href: 'https://www.facebook.com/colegiosaofranciscooficial' },
  { icon: <Youtube />, href: 'https://www.youtube.com/@colegiosaofrancassis-ar5060' },
];

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-blue-600" />
            <span>{contactInfo.phone}</span>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-blue-600" />
            <span>{contactInfo.email}</span>
          </li>
          <li className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
            <span>{contactInfo.address}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Nossas Redes Sociais</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
