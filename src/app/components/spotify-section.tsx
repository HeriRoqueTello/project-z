import { Dancing_Script } from "next/font/google";
import { playlistsInicio } from "@/data/playlists";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function SpotifySection() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Música
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {playlistsInicio.map((playlist, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-pink-100 p-6 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                {playlist.icon}
                <h3 className="text-xl font-semibold text-pink-600">
                  {playlist.title}
                </h3>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src={playlist.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
