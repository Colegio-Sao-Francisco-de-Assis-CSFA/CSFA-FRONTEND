'use client'

import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const itemVariants = {
    hidden: {
        y: 50,
        opacity: 0,
        scale: 0.95
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
        },
    },
};


export default function QuoteComponent() {
    return (
        <>
            {/* Quote component */}
            <motion.div
                className="relative p-2 w-full md:p-10 max-w-2xl mx-auto mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl text-white shadow-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl p-3 shadow-lg">
                    <Quote size={24} />
                </div>

                <blockquote className="text-sm lg:text-lg font-semibold pl-2">
                    "Porque acreditamos que a verdadeira educação não apenas ensina <br />
                    - ela inspira, transforma e prepara para a vida."
                </blockquote>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full" />
            </motion.div>
        </>
    );
}