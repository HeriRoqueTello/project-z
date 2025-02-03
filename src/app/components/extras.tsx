import { items } from "@/data/extras";
import { Heart } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Extras() {
  return (
    <section className="bg-beige px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Detalles Especiales
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <div className="absolute -right-4 -top-4 rotate-12 text-pink-100">
                <Heart className="h-20 w-20" />
              </div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-pink-100 p-2 text-pink-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-pink-600">
                    {item.title}
                  </h3>
                </div>

                <div className="relative mb-4 overflow-hidden rounded-lg bg-pink-50 p-4">
                  <p className="italic text-gray-700">{item.content}</p>
                </div>

                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Memory Button */}
        <div className="mt-12 text-center">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-pink-700">
            <span className="mr-2">Agregar un Recuerdo</span>
            <Heart className="h-5 w-5 transition-transform group-hover:scale-125" />
          </button>
        </div>
      </div>
    </section>
  );
}
