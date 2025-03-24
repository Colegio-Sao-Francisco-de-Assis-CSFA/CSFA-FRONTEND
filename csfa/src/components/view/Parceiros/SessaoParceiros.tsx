"use client";

import CarousselParceiros from "./CarousselParceiros";

export default function SessaoParceiros(){
    const partnerLogos = [
      { src: "/images/partners/google.png", alt: "Google for Education" },
      { src: "/images/partners/sas.png", alt: "SAS" },
      { src: "/images/partners/yazigi.png", alt: "Yazigi" },
      { src: "/images/partners/maker.png", alt: "maker" },
      { src: "/images/partners/kumon.png", alt: "Kumon" },
      { src: "/images/partners/notas-ouro.png", alt: "Notas de Ouro" },
      { src: "/images/partners/raia-livre.png", alt: "Raia Livre" }
    ];
  
    return (
      <div className="w-full mx-auto">
        <CarousselParceiros 
          logos={partnerLogos} 
        />
      </div>
    );
  };
  