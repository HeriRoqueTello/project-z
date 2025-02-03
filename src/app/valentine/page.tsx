"use client";

import { Dancing_Script } from "next/font/google";
import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, Flower2, FlowerIcon as Rose } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const generateInitialPositions = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 100) / count}%`,
    top: `${(i * 100) / count}%`,
    delay: `${i * 0.3}s`,
    rotate: `${i * 24}deg`,
  }));
};

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const maxAttempts = 5;
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    scale: 1,
    rotate: 0,
    isMoving: false,
  });
  const [attempts, setAttempts] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [decorativeElements] = useState(() => ({
    roses: generateInitialPositions(15),
    flowers: generateInitialPositions(15),
  }));

  const disclaimers = [
    "* Al aceptar, te comprometes a amarme por siempre ❤️",
    "* No hay devoluciones ni reembolsos de amor",
    "* Incluye abrazos y besos ilimitados",
    "* Garantía de amor eterno",
    "* Se requieren mínimo 3 besos diarios ya sea en persona o por videollamada, chat o audio",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    const disclaimerTimer = setTimeout(() => setShowDisclaimer(true), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(disclaimerTimer);
    };
  }, []);

  useEffect(() => {
    if (noButtonRef.current) {
      const rect = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition((prev) => ({
        ...prev,
        x: rect.left,
        y: rect.top,
        initialX: rect.left,
        initialY: rect.top,
      }));
    }
  }, []);

  const handleAccept = useCallback(() => {
    setAccepted(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#ff6b6b", "#FFD700", "#ff8787", "#FFC0CB"];

    const frame = () => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  const handleNoClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts <= maxAttempts) {
        // Limitar el movimiento a un radio de 50px desde la posición inicial
        const radius = 50;
        const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio en radianes
        const distance = Math.random() * radius; // Distancia aleatoria dentro del radio

        // Calcular el desplazamiento usando coordenadas polares
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        // Calcular nueva posición relativa a la posición inicial
        const newX = Math.max(
          0,
          Math.min(window.innerWidth - 200, noButtonPosition.initialX + offsetX)
        );
        const newY = Math.max(
          64,
          Math.min(window.innerHeight - 60, noButtonPosition.initialY + offsetY)
        );

        // Rotación y escala más sutiles
        const rotate = Math.floor(Math.random() * 10 - 5); // -5° a 5°
        const scale = Math.max(0.98, Math.min(1.02, 1 + Math.random() * 0.04)); // 0.98 a 1.02

        setNoButtonPosition((prev) => ({
          ...prev,
          x: newX,
          y: newY,
          rotate,
          scale,
          isMoving: true,
        }));
      }

      if (newAttempts > maxAttempts) {
        setShowModal(true);
      }
    },
    [
      attempts,
      maxAttempts,
      noButtonPosition.initialX,
      noButtonPosition.initialY,
    ]
  );

  const messages = [
    "¿Sabes? Este botón es solo decorativo... 😏",
    "Sigue intentando, pero ya sabes la respuesta... 💕",
    "¿No crees que sería más fácil darle al Sí? 😊",
    "Yo sé que quieres presionar el otro botón... 💝",
    "¡Vamos! El botón rosa se ve más bonito 🌹",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {decorativeElements.roses.map((rose) => (
          <div
            key={`rose-${rose.id}`}
            className="absolute animate-float"
            style={{
              left: rose.left,
              top: rose.top,
              animationDelay: rose.delay,
              transform: `rotate(${rose.rotate})`,
            }}
          >
            <Rose className="h-8 w-8 text-pink-300" />
          </div>
        ))}

        {decorativeElements.flowers.map((flower) => (
          <div
            key={`flower-${flower.id}`}
            className="absolute animate-float-reverse"
            style={{
              left: flower.left,
              top: flower.top,
              animationDelay: flower.delay,
              transform: `rotate(${flower.rotate})`,
            }}
          >
            <Flower2 className="h-6 w-6 text-pink-400" />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative mx-auto max-w-4xl px-4 py-12">
        <div className="relative mt-12 overflow-visible rounded-3xl bg-white/80 backdrop-blur-sm">
          <div className="absolute inset-0 border-8 border-double border-pink-200"></div>

          <div className="relative p-8 md:p-12">
            <div className="mx-auto mb-8 w-40">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738540861/82ad803d-a3c2-45d7-a7c3-f210ce244d2a_f238qn.jpg"
                  width={150}
                  height={150}
                  alt="Decorative roses"
                  className="rounded-full border-4 border-pink-200 object-cover shadow-lg"
                />
                <div className="absolute -right-4 -top-4 animate-pulse">
                  <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 ${
                showMessage
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1
                className={`${dancingScript.className} mb-8 text-center text-5xl font-bold text-pink-600 md:text-6xl`}
              >
                Mi Amor Anitaa...
              </h1>

              <div className="prose mx-auto max-w-2xl text-center">
                <p className="mb-6 text-xl text-gray-700">
                  En este día tan especial, quiero preguntarte algo que llevo
                  guardando en mi corazón...
                </p>

                <h2
                  className={`${dancingScript.className} mb-8 text-center text-4xl font-bold text-pink-600`}
                >
                  ¿Quieres ser mi primer San Valentín?
                </h2>

                {!accepted ? (
                  <div className="relative mt-12 flex flex-col items-center gap-6">
                    <button
                      onClick={handleAccept}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-12 py-4 text-xl font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="mr-2">¡Sí, mi amor!</span>
                      <Heart className="h-6 w-6 animate-pulse" />
                    </button>

                    {/* Botón "No" */}
                    {attempts <= maxAttempts && (
                      <div
                        className={`relative ${
                          noButtonPosition.isMoving
                            ? "fixed left-0 top-0 z-50"
                            : ""
                        }`}
                      >
                        <button
                          ref={noButtonRef}
                          onClick={handleNoClick}
                          className="inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-400 bg-white px-8 py-3 text-lg font-medium text-pink-600 transition-all duration-300 hover:bg-pink-50"
                          style={
                            noButtonPosition.isMoving
                              ? {
                                  position: "fixed",
                                  left: noButtonPosition.x,
                                  top: noButtonPosition.y,
                                  transform: `rotate(${noButtonPosition.rotate}deg) scale(${noButtonPosition.scale})`,
                                  transition: "all 0.3s ease",
                                }
                              : undefined
                          }
                        >
                          Déjame pensarlo...
                        </button>
                      </div>
                    )}

                    {showDisclaimer && (
                      <div className="mt-8 space-y-2 text-center">
                        {disclaimers.map((disclaimer, index) => (
                          <p
                            key={index}
                            className="text-sm text-gray-500"
                            style={{
                              animation: `fadeIn 0.5s ease-out ${
                                index * 0.5
                              }s forwards`,
                              opacity: 0,
                            }}
                          >
                            {disclaimer}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-8 animate-fadeIn text-center">
                    <p className="text-3xl font-bold text-pink-600">
                      ¡Me haces la persona más feliz del mundo! ❤️
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                      {[...Array(3)].map((_, i) => (
                        <Heart
                          key={i}
                          className={`h-12 w-12 animate-bounce fill-pink-600 text-pink-600`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <p className="mt-8 text-gray-600">
                      Ahora este momento quedará guardado para siempre en
                      nuestra historia de amor...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="relative h-24 w-24 animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="absolute inset-0 animate-spin-slow">
                <Rose className="h-full w-full text-pink-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-gray-500 hover:text-pink-600"
          >
            ✨ Hay algo más que quiero decirte... ✨
          </button>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <div className="p-4 text-center">
            <h3
              className={`${dancingScript.className} mb-4 text-2xl text-pink-600`}
            >
              {attempts > maxAttempts
                ? messages[
                    Math.min(attempts - (maxAttempts + 1), messages.length - 1)
                  ]
                : "Un Mensaje Especial"}
            </h3>
            <p className="text-gray-600">
              {attempts > maxAttempts
                ? "Solo queda una opción... ¡La correcta! 💝"
                : "No se si puedo ir a verte ese día, pero quiero que sepas que te amo mucho y que siempre estaré contigo en cada momento de nuestras vidas. Pero podemos hacer planes de estar toda la noche juntos maratoneando películas y series, y disfrutando de nuestra compañía. Te amo mucho mi amor, gracias por ser parte de mi vida. 💕"}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full bg-pink-100 px-4 py-2 text-pink-600 hover:bg-pink-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
