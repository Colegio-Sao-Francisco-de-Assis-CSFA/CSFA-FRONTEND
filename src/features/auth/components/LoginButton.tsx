"use client";

import { Icon } from '@iconify/react';
import { useIsHovered, useIsLoggingIn } from "@/features/auth/hooks";
import { motion } from 'framer-motion';
import { signIn } from "next-auth/react";

export default function LoginButton() {
  const { isHovered, setIsHovered } = useIsHovered();
  const { isLoggingIn, setIsLoggingIn } = useIsLoggingIn();

  const handleLogin = async () => {
    setIsLoggingIn(true);

    try {
      await signIn("google");
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center w-full p-3 mb-4 text-gray-800 bg-white rounded-md border border-gray-300 hover:border-blue-600 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isLoggingIn}
      onClick={handleLogin} // << agora sim chamando a função correta
    >
      <Icon icon="logos:google-icon" className="mr-2" />
      <span className="ml-2">
        {isLoggingIn ? "Processando..." : "Entrar com Google"}
      </span>
    </motion.button>
  );
}
