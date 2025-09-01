"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MatriculasHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-600"
      >
        Matrículas Abertas
      </motion.h2>
      <p className="text-lg text-gray-600 mt-4">
        Garanta já a vaga do seu filho e faça parte da nossa comunidade de
        educação transformadora.
      </p>
      <Button className="mt-6 px-6 py-3 rounded-2xl shadow-lg">
        Inscreva-se Agora
      </Button>
    </div>
  );
}
