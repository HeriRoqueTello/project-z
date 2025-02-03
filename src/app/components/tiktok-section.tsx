import { tiktoks } from "@/data/tiktoks";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function TikTokSection() {
  return (
    <section className="bg-pink-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Tiktoks para ti
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {tiktoks.map((tiktok, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            >
              <div className="relative aspect-[9/16] w-full">
                <iframe
                  src={tiktok.embedUrl}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-center font-roboto text-gray-700">
                {tiktok.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
