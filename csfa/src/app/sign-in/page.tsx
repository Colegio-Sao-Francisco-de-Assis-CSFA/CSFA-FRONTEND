"use client";

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { User, LogIn } from 'lucide-react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function LoginPage() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Simula um processo de login antes de redirecionar
    setTimeout(() => {
      // Redirecionamento usando o objeto window para compatibilidade universal
      window.location.href = '/dashboard';

      // Alternativa: também podemos usar isso para uma demonstração local
      // setIsLoggingIn(false);
      // console.log('Redirecionado para /dashboard');
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Logo placeholder */}
          <div className="w-20 h-20 mb-6 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center text-white">
            <User size={40} />
          </div>

          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Acesso ao Sistema</h1>

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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-full p-3 mb-6 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            <LogIn size={20} />
            <span className="ml-2">
              {isLoggingIn ? "Processando..." : "Entrar com usuário e senha"}
            </span>
          </motion.button>

          <small className="mb-8 text-gray-500 text-center">
            Utilize suas credenciais corporativas para acessar o sistema
          </small>

          <div className="w-full h-px bg-gray-200 mb-6" />

          <div className="flex flex-col items-center space-y-2">
            <small
              className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              Voltar para início
            </small>
            <small
              className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              onClick={() => window.location.href = '/admin-contact'}
            >
              Contatar o administrador
            </small>
          </div>
        </div>
      </motion.div>
    </div>
  );
}