"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import type React from "react"; // Added import for React
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

interface SectionNavigatorProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  bgColor?: string;
}

export default function SectionNavigator({
  title,
  description,
  href,
  icon,
  bgColor = "bg-pink-50",
}: SectionNavigatorProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-2xl ${bgColor} p-6 transition-all duration-300`}
      >
        <div className="absolute -right-8 -top-8 rotate-12 text-pink-200/50">
          <Heart className="h-32 w-32" />
        </div>
        <div className="relative">
          <div className="mb-4 flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="rounded-full bg-white/80 p-3 text-pink-600"
            >
              {icon}
            </motion.div>
            <h3
              className={`${dancingScript.className} text-2xl font-bold text-pink-600`}
            >
              {title}
            </h3>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 inline-flex items-center text-pink-600">
            <span className="mr-2 font-medium">Explorar</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
