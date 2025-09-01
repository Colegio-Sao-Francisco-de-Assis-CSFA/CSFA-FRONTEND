"use client";

import { motion } from "framer-motion";
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
          className="bg-white rounded-2xl shadow-lg p-6 text-center"
        >
          <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
            {step.icon}
          </div>
          <h3 className="font-semibold text-lg">{step.title}</h3>
          <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
