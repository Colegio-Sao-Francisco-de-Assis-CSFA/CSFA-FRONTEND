"use client";

import { motion } from "framer-motion";
import { InfoCard } from "./types";

export default function MatriculasInfoCard({ title, desc }: InfoCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}
