import { Heart, ArrowDown, Sparkles, Stars } from "lucide-react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-100 to-white px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-20 rotate-45 text-gold/20">
          <Heart size={100} />
        </div>
        <div className="absolute right-10 top-40 rotate-12 text-gold/20">
          <Heart size={80} />
        </div>

        {/* Animated stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles
              className="text-gold"
              size={10 + Math.random() * 15}
              style={{ transform: `rotate(${Math.random() * 360}deg)` }}
            />
          </div>
        ))}

        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
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
          <div className="text-center md:text-left">
            <div className="mb-2 inline-flex items-center justify-center rounded-full bg-pink-100 px-3 py-1">
              <Heart className="mr-1 h-4 w-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600">
                Nuestro Rincón Especial
              </span>
            </div>
            <h1
              className={`${dancingScript.className} mb-6 text-4xl font-bold text-pink-600 md:text-6xl`}
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
                <span className="mr-2">Nuestra Galeria</span>
                <Heart className="h-5 w-5 transition-transform group-hover:scale-125" />
              </Link>
              <Link
                href="/timeline"
                className="inline-flex items-center justify-center rounded-full border-2 border-pink-600 px-8 py-3 font-medium text-pink-600 transition-colors hover:bg-pink-50"
              >
                <span className="mr-2">Nuestra Historia</span>
                <ArrowDown className="h-5 w-5" />
              </Link>
            </div>
            {/* Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                <Heart className="mr-1 h-3 w-3" fill="currentColor" /> Amor
                Eterno
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                <Sparkles className="mr-1 h-3 w-3" /> Momentos Mágicos
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                <Stars className="mr-1 h-3 w-3" /> Recuerdos Especiales
              </span>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-lg bg-gold/20"></div>
            <div className="absolute inset-0 -rotate-3 translate-x-2 translate-y-2 rounded-lg bg-pink-200/30"></div>
            <Image
              src="https://i.imgur.com/sxvYsBq.jpeg"
              alt="Nuestra foto especial"
              width={500}
              height={500}
              className="relative rounded-lg object-cover shadow-lg"
              priority
            />
            {/* Decorative corner hearts */}
            <div className="absolute -left-4 -top-4 rotate-[-45deg] text-pink-400">
              <Heart className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-45 text-pink-400">
              <Heart className="h-8 w-8" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -right-6 top-1/4 animate-float">
              <div className="rounded-full bg-white p-2 shadow-lg">
                <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
              </div>
            </div>
            <div className="absolute -left-6 bottom-1/4 animate-float-reverse">
              <div className="rounded-full bg-white p-2 shadow-lg">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-pink-600" />
        </div>
      </div>
    </section>
  );
}
