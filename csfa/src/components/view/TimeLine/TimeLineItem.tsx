import { motion } from "framer-motion"; 
import clsx from "clsx";
import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={clsx("relative py-4", {
        "md:text-right md:pr-12": isLeft,
        "md:pl-12": !isLeft,
      })}
    >
      <div
        className={clsx(
          "md:absolute top-1/2 transform md:-translate-y-1/2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-3 md:mb-0 inline-block",
          {
            "md:right-0": isLeft,
            "md:left-0": !isLeft,
          }
        )}
      >
        {year}
      </div>
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full"></div>
      <div
        className={clsx(
          "md:w-5/12 bg-white p-5 rounded-lg shadow-md",
          isLeft ? "md:mr-auto" : "md:ml-auto"
        )}
      >
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p> {/* corrigido: grey → gray */}
      </div>
    </motion.div>
  );
}
