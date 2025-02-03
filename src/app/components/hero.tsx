import { Heart, ArrowDown } from "lucide-react";
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
        {/* Floating hearts */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
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
                href="/valentine"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-pink-700"
              >
                <span className="mr-2">Sorpresa de San Valentín</span>
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
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-lg bg-gold/20"></div>
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
