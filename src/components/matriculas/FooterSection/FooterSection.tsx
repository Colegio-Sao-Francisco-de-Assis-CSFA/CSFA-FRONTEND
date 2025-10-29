// src/components/matriculas/FooterSection/FooterSection.tsx
'use client';

import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-100">© 2025 Colégio Franciscano. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterSection;