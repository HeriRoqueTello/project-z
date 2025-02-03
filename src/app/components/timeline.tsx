import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { Calendar, Heart } from "lucide-react";
import { memoriesInicio } from "@/data/memories";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Timeline() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Historia
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-pink-600/20 md:left-1/2"></div>

          {/* Timeline items */}
          {memoriesInicio.map((memory, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div
                  className={`relative rounded-lg bg-pink-100 p-6 shadow-lg ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white md:-left-4 md:top-1/2 md:-translate-y-1/2">
                    <Heart size={16} />
                  </div>
                  <div className="mb-4 flex items-center gap-2 text-pink-600">
                    <Calendar size={20} />
                    <span className="font-medium">{memory.date}</span>
                  </div>
                  <p className="mb-4 font-roboto text-gray-700">
                    {memory.description}
                  </p>
                  <Image
                    src={memory.image || "/placeholder.svg"}
                    alt={memory.date}
                    width={300}
                    height={300}
                    className="rounded-lg self-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
