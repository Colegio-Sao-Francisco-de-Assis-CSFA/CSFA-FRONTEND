"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import BtnSignOut from "./BtnSignOut";

export default function Sidebar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "60px" }}
      className="h-screen bg-gray-900 text-white flex flex-col p-4 fixed left-0 top-0 shadow-lg"
    >
      {/* Botão de menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
      >
        <Icon icon="mdi:menu" className="text-xl" />
        <span className="hidden">botão</span>
      </button>

      {/* Perfil do usuário */}
      <div className="flex items-center space-x-3 mb-6 overflow-hidden">
        <Image
          src={session?.user?.image || "/default-avatar.webp"}
          width={40}
          height={40}
          alt="User Avatar"
          className="rounded-full"
        />
        {isOpen && (
          <div>
            <p className="text-sm font-medium">{session?.user?.name}</p>
            <p className="text-xs text-gray-400">{session?.user?.email}</p>
          </div>
        )}
      </div>

      {/* Links de navegação */}
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard">
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <Icon icon="mdi:view-dashboard" className="text-xl" />
            {isOpen && <span>Dashboard</span>}
          </div>
        </Link>
        <Link href="/settings">
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <Icon icon="mdi:cog" className="text-xl" />
            {isOpen && <span>Configurações</span>}
          </div>
        </Link>
      </nav>

      {/* Botão de Logout */}
      <button
        onClick={() => signOut()}
        className="mt-auto flex items-center space-x-3 p-2 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer"
      >
        <Icon icon="mdi:logout" className="text-xl" />
        {isOpen && <BtnSignOut />}
      </button>
    </motion.div>
  );
}
