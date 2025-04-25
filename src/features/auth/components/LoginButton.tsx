"use client";

import { Icon } from '@iconify/react/dist/iconify.js';
import { useIsHovered, useIsLoggingIn } from "@/features/auth/hooks";
import { motion } from 'framer-motion';

export default function LoginButton() {
    const { isHovered, setIsHovered } = useIsHovered();
    const { isLoggingIn, setIsLoggingIn } = useIsLoggingIn();

    const handleLogin = async () => {
      setIsLoggingIn(true);

      // Simula login
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center w-full p-3 mb-4 text-grey-800 bg-white rounded-md border border-gray-300 hover:border-blue-600 transition-colors"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleLogin}
        disabled={isLoggingIn}
      >
        <Icon icon="logos:google-icon" className="mr-2" />
        <span className="ml-2">
          {isLoggingIn ? "Processando..." : "Entrar com Google"}
        </span>
      </motion.button>
    );
  }
