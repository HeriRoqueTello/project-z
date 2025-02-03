import { Dancing_Script } from "next/font/google";
import { Mail, Quote, Music, Gift } from "lucide-react";
import Image from "next/image";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function ExtrasPage() {
  const sections = [
    {
      title: "Cartas de Amor",
      icon: <Mail className="h-6 w-6" />,
      items: [
        {
          title: "Mi Primera Carta para Ti",
          date: "14/02/2024",
          content: "Querida mía, desde el primer momento que te vi...",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "En Nuestro Aniversario",
          date: "01/03/2024",
          content: "Un mes más junto a ti, y cada día te amo más...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    {
      title: "Poemas",
      icon: <Quote className="h-6 w-6" />,
      items: [
        {
          title: "Tu Sonrisa",
          date: "20/02/2024",
          content:
            "En tus ojos encuentro mi destino,\nEn tu sonrisa, mi felicidad...",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Nuestro Amor",
          date: "05/03/2024",
          content:
            "Como el sol que brilla cada mañana,\nAsí iluminas mi vida...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    {
      title: "Canciones Dedicadas",
      icon: <Music className="h-6 w-6" />,
      items: [
        {
          title: "Perfect - Ed Sheeran",
          date: "25/02/2024",
          content: "Porque bailar contigo es como vivir un sueño...",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "All of Me - John Legend",
          date: "10/03/2024",
          content: "Porque amas todas mis curvas y todos mis bordes...",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Detalles Especiales
        </h1>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="rounded-full bg-pink-100 p-3 text-pink-600">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>

                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <p className="whitespace-pre-line text-gray-600">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Botón para agregar nuevo item en cada sección */}
            <div className="mt-6 text-center">
              <button className="inline-flex items-center justify-center rounded-full border-2 border-pink-600 px-6 py-2 text-sm font-medium text-pink-600 transition-colors hover:bg-pink-50">
                Agregar {section.title.slice(0, -1)}
              </button>
            </div>
          </div>
        ))}

        {/* Botón para agregar nueva sección */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Gift className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Crear Nueva Sección
          </button>
        </div>
      </div>
    </main>
  );
}
