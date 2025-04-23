import { playlists } from "@/data/playlists";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function PlaylistsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestras Playlists
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${playlist.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`rounded-full bg-white/80 p-2 ${playlist.iconColor}`}
                >
                  {playlist.icon}
                </div>
                <h3 className={`text-xl font-semibold ${playlist.textColor}`}>
                  {playlist.title}
                </h3>
              </div>

              <p className="mb-6 text-gray-600">{playlist.description}</p>

              <div className="aspect-video w-full rounded-lg bg-black">
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${playlist.spotifyId}?utm_source=generator`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Overlay con efecto hover */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="transform rounded-full bg-white px-6 py-2 font-medium text-gray-900 transition-transform group-hover:scale-105">
                  Reproducir
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Botón para crear nueva playlist */}
        {/* <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Music2 className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Crear Nueva Playlist
          </button>
        </div> */}
      </div>
    </main>
  );
}
