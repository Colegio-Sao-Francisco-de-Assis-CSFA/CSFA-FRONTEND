"use client";

import { motion } from "motion/react";
import { Step } from "./types";

export default function MatriculasSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-card rounded-2xl shadow-lg p-6 text-center border border-border"
        >
          <div className="text-primary text-4xl mb-4 flex justify-center">
            {step.icon}
          </div>
          <h3 className="font-semibold text-lg text-card-foreground">{step.title}</h3>
          <p className="text-muted-foreground text-sm mt-2">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
