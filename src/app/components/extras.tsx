"use client";

import { items } from "@/data/extras";
import { motion } from "framer-motion";
import { Calendar, Heart, Link, Sparkles } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Extras() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemM = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-beige px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Detalles Especiales
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemM}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform"
            >
              <div className="absolute -right-4 -top-4 rotate-12 text-pink-100">
                <Heart className="h-20 w-20" />
              </div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="rounded-full bg-pink-100 p-2 text-pink-600"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-pink-600">
                    {item.title}
                  </h3>
                </div>

                <div className="relative mb-4 overflow-hidden rounded-lg bg-pink-50 p-4">
                  <p className="italic text-gray-700">{item.content}</p>
                </div>

                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </motion.div>
          ))}
          {/* San Valentín como recuerdo especial */}
          <motion.div
            variants={itemM}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform"
          >
            <div className="absolute -right-4 -top-4 rotate-12 text-pink-100">
              <Heart className="h-20 w-20" />
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="rounded-full bg-pink-100 p-2 text-pink-600"
                >
                  <Calendar className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-pink-600">
                  San Valentín 2025
                </h3>
              </div>

              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="San Valentín 2025"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-gray-700">
                Un día especial donde nuestro amor se celebró con todo el
                corazón...
              </p>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500">14/02/2024</p>
                <Link
                  href="/valentine"
                  className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700"
                >
                  Ver recuerdo
                  <Heart className="ml-1 h-3 w-3" fill="currentColor" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Add Memory Button */}
        {/* <div className="mt-12 text-center">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-pink-700">
            <span className="mr-2">Agregar un Recuerdo</span>
            <Heart className="h-5 w-5 transition-transform group-hover:scale-125" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
