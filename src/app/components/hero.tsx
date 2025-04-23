"use client";

import { Heart, ArrowDown, Sparkles, Stars, Star } from "lucide-react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Hero() {
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show love message after a delay
    const timer = setTimeout(() => {
      setShowLoveMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const heartClicked = () => {
    toast({
      title: "Te amo ❤️",
      description: "Cada día más y más...",
      className: "bg-pink-50 border-pink-200 text-pink-600",
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-white px-4 py-20">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 -z-10 animate-gradient"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,192,203,0.3), rgba(255,255,255,0) 50%), radial-gradient(circle at 20% 20%, rgba(255,215,0,0.2), rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 80%, rgba(255,182,193,0.2), rgba(255,255,255,0) 40%)",
        }}
      ></div>
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-20 rotate-45 text-gold/20">
          <Heart size={100} />
        </div>
        <div className="absolute right-10 top-40 rotate-12 text-gold/20">
          <Heart size={80} />
        </div>

        {/* Animated stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Star
              className="text-gold"
              size={10 + Math.random() * 15}
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}

        {/* Floating hearts */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Heart
              className="text-pink-200"
              size={20 + Math.random() * 30}
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="mb-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-200 to-pink-100 px-3 py-1 shadow-sm">
              <Heart className="mr-1 h-4 w-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">
                Nuestro Rincón Especial
              </span>
            </div>
            <h1
              className={`${dancingScript.className} mb-6 bg-gradient-to-r from-pink-600 via-pink-500 to-rose-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl`}
            >
              Mi Amor Ana...
            </h1>
            <p className="mb-8 font-roboto text-lg text-gray-700">
              Cada momento contigo es un regalo, cada sonrisa un tesoro. Este es
              nuestro espacio especial, donde guardamos nuestros recuerdos más
              preciosos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/gallery"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-3 font-medium text-white transition duration-300 hover:shadow-lg hover:shadow-pink-200/50"
              >
                <span className="mr-2 relative z-10">Nuestra Galería</span>
                <Heart className="h-5 w-5 relative z-10 transition-transform group-hover:scale-125" />
                {/* Hover effect */}
                <span className="absolute h-full w-full bg-gradient-to-r from-pink-600 to-rose-500 left-0 top-0 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Link>
              <Link
                href="/timeline"
                className="group inline-flex items-center justify-center rounded-full border-2 border-pink-600 px-8 py-3 font-medium text-pink-600 transition-all hover:bg-pink-50 hover:shadow-lg"
              >
                <span className="mr-2">Nuestra Historia</span>
                <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </div>
            {/* Badges with shimmer effect */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-50 to-pink-100 px-3 py-1 text-xs font-medium text-pink-600 shadow-sm"
              >
                <Heart className="mr-1 h-3 w-3" fill="currentColor" /> Amor
                Eterno
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-3 py-1 text-xs font-medium text-purple-600 shadow-sm"
              >
                <Sparkles className="mr-1 h-3 w-3" /> Momentos Mágicos
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-50 to-amber-100 px-3 py-1 text-xs font-medium text-amber-600 shadow-sm"
              >
                <Stars className="mr-1 h-3 w-3" /> Recuerdos Especiales
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Decorative backgrounds */}
            <div className="absolute inset-0 rotate-3 rounded-lg bg-gradient-to-tr from-gold/30 to-gold/10 shadow-xl"></div>
            <div className="absolute inset-0 -rotate-3 translate-x-2 translate-y-2 rounded-lg bg-gradient-to-bl from-pink-200/40 to-pink-100/20 shadow-xl"></div>

            <div
              className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={heartClicked}
            >
              <Image
                src="https://i.imgur.com/sxvYsBq.jpeg"
                alt="Nuestra foto especial"
                width={500}
                height={500}
                className="relative rounded-lg object-cover shadow-lg"
                priority
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 transform -translate-x-full hover:translate-x-full"></div>

              {/* Love heart on click */}
              {showLoveMessage && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
                >
                  <Heart className="h-6 w-6 text-pink-500 fill-pink-500 animate-pulse" />
                </motion.div>
              )}
            </div>

            {/* Decorative corner hearts with glow */}
            <div className="absolute -left-4 -top-4 rotate-[-45deg] text-pink-400 drop-shadow-[0_0_5px_rgba(244,114,182,0.5)]">
              <Heart className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-45 text-pink-400 drop-shadow-[0_0_5px_rgba(244,114,182,0.5)]">
              <Heart className="h-8 w-8" />
            </div>
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -right-6 top-1/4"
            >
              <div className="rounded-full bg-white p-2 shadow-lg">
                <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -left-6 bottom-1/4"
            >
              <div className="rounded-full bg-white p-2 shadow-lg">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-pink-600" />
        </motion.div>
      </div>
    </section>
  );
}
