"use client";

import { motion } from "framer-motion";
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
      <div className="w-full mx-auto flex flex-col items-center justify-center gap-6">

        <div className="w-full flex flex-col items-center justify-center">
          <motion.h2
              className="text-3xl font-bold text-blue-600 text-center"
          >
              Nossos Parceiros
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
          </motion.h2>

          <p className="text-base text-gray-700 font-normal md:text-lg mt-4 text-center">
            Parcerias são essenciais para oferecer as melhores
            oportunidades aos nossos alunos.
          </p>
        </div>
        <CarousselParceiros
          logos={partnerLogos}
        />
      </div>
    );
  };
