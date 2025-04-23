"use client";
import { Dancing_Script } from "next/font/google";
import { Star, Clock } from "lucide-react";
import Image from "next/image";
import {
  watchedMoviesInicio as watchedMovies,
  watchlistInicio as watchlist,
} from "@/data/movies";
import { useState } from "react";
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function MoviesSection() {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

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
    <section className="bg-pink-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestras Películas y Series
        </motion.h2>

        {/* Watched Movies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-2xl font-semibold text-pink-600"
          >
            Momentos Cinematográficos
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {watchedMovies.map((movie, index) => (
              <motion.div
                key={index}
                variants={itemM}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-transform"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">{movie.title}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(movie.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{movie.date}</p>
                  <p className="mt-2 italic text-gray-700">{movie.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Watchlist */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-2xl font-semibold text-pink-600"
          >
            Para Ver Juntos
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {watchlist.map((item, index) => (
              <motion.div
                key={index}
                variants={itemM}
                onMouseEnter={() => setHoveredMovie(index)}
                onMouseLeave={() => setHoveredMovie(null)}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredMovie === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        hoveredMovie === index
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <Clock className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Add Movie Button
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-pink-200/50">
            <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Nueva Película
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
