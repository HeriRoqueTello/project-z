import { Dancing_Script } from "next/font/google";
import { Heart, Share2, MessageCircle } from "lucide-react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function TikToksPage() {
  const tiktoks = [
    {
      id: "1",
      title: "Momentos Divertidos",
      description: "",
      likes: 2345,
      comments: 156,
      shares: 78,
      embedUrl: "https://www.tiktok.com/embed/v2/",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestros TikToks Favoritos
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {tiktoks.map((tiktok) => (
            <div
              key={tiktok.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {tiktok.title}
                </h3>
                <p className="mb-4 text-gray-600">{tiktok.description}</p>
              </div>

              <div className="relative aspect-[9/16] w-full bg-gray-100">
                <iframe
                  src={tiktok.embedUrl}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex items-center justify-between border-t p-4">
                <button className="flex items-center gap-2 text-pink-600 transition-colors hover:text-pink-700">
                  <Heart className="h-5 w-5" />
                  <span>{tiktok.likes.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-700">
                  <MessageCircle className="h-5 w-5" />
                  <span>{tiktok.comments.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-700">
                  <Share2 className="h-5 w-5" />
                  <span>{tiktok.shares.toLocaleString()}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para agregar nuevo TikTok */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Nuevo TikTok
          </button>
        </div>
      </div>
    </main>
  );
}
