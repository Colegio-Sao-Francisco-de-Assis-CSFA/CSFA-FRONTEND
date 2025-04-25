"use client";

import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import LoginButton from './LoginButton';


export default function FormLogin() {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-lg"
        >
            <form className="flex flex-col items-center justify-center">
                {/* Logo placeholder */}
                <div className="w-20 h-20 mb-6 overflow-hidden bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <User size={40} />
                </div>

                <h1 className="mb-6 text-2xl font-semibold text-gray-800">Acesso ao Sistema</h1>

                <LoginButton/>

                <small className="mb-8 text-gray-500 text-center">
                    Utilize suas credenciais corporativas para acessar o sistema
                </small>

                <div className="w-full h-px bg-gray-200 mb-6" />

                {/* Informação adicional do formulario */}
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
            </form>
        </motion.div>
    )
}