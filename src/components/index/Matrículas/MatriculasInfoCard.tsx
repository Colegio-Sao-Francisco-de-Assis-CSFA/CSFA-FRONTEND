"use client";

import { motion } from "motion/react";
import { InfoCard } from "./types";

export default function MatriculasInfoCard({ title, desc }: InfoCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl shadow-lg p-6 border border-border"
    >
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-muted-foreground text-sm mt-2">{desc}</p>
    </motion.div>
  );
}
