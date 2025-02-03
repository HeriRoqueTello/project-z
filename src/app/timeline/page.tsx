import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { Calendar, Heart } from "lucide-react";
import { memories } from "@/data/memories";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Historia de Amor
        </h1>

        <div className="relative">
          {/* Línea del tiempo vertical */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-pink-200 md:left-1/2"></div>

          {memories.map((memory, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div
                  className={`relative rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  {/* Punto en la línea del tiempo */}
                  <div className="absolute -left-16 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white md:-left-4 md:top-1/2 md:-translate-y-1/2">
                    <Heart className="h-4 w-4" />
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-pink-600">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">{memory.date}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {memory.title}
                  </h3>

                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={memory.image || "/placeholder.svg"}
                      alt={memory.title}
                      fill
                      className="object-cover transition-transform hover:scale-110"
                    />
                  </div>

                  <p className="mb-2 text-gray-600">{memory.description}</p>

                  <div className="mt-4 rounded-lg bg-pink-50 p-4">
                    <p className="text-sm text-gray-700">{memory.details}</p>
                    <p className="mt-2 text-sm font-medium text-pink-600">
                      📍 {memory.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para agregar nuevo recuerdo */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Nuevo Recuerdo
          </button>
        </div>
      </div>
    </main>
  );
}
