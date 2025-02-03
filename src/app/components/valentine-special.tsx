"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function ValentineSpecial() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFC0CB", "#FFD700", "#F5F5DC"],
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-100 to-white px-4 py-20">
      {/* Decorative hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-600/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 30 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <h2
            className={`${dancingScript.className} mb-8 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
          >
            ¿Quieres ser mi San Valentín?
          </h2>

          <div className="prose mx-auto max-w-2xl text-center">
            <p className="text-lg text-gray-700">
              Cada momento contigo es especial, cada sonrisa tuya ilumina mi
              día. En este San Valentín, quiero recordarte lo mucho que
              significas para mí y lo feliz que me haces.
            </p>

            {!accepted ? (
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={handleAccept}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-pink-700"
                >
                  <span className="mr-2">¡Sí, quiero!</span>
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-125" />
                </button>
                <button
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-600 px-8 py-3 font-medium text-pink-600 transition duration-300 hover:bg-pink-50"
                  onClick={() => {
                    const btn = document.querySelector("button:last-of-type");
                    if (btn) {
                      const x = Math.random() * (window.innerWidth - 100);
                      const y = Math.random() * (window.innerHeight - 100);
                      btn.style.position = "fixed";
                      btn.style.left = `${x}px`;
                      btn.style.top = `${y}px`;
                    }
                  }}
                >
                  No estoy segura...
                </button>
              </div>
            ) : (
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-pink-600">
                  ¡Me has hecho la persona más feliz! ❤️
                </p>
                <div className="mt-4 animate-bounce">
                  <Heart className="mx-auto h-12 w-12 fill-pink-600 text-pink-600" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
