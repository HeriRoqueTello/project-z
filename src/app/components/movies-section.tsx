import { Dancing_Script } from "next/font/google";
import { Star, Clock } from "lucide-react";
import Image from "next/image";
import {
  watchedMoviesInicio as watchedMovies,
  watchlistInicio as watchlist,
} from "@/data/movies";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function MoviesSection() {
  return (
    <section className="bg-pink-100 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestras Películas y Series
        </h2>

        {/* Watched Movies */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-pink-600">
            Momentos Cinematográficos
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {watchedMovies.map((movie, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">{movie.title}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(movie.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{movie.date}</p>
                  <p className="mt-2 italic text-gray-700">{movie.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Watchlist */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-pink-600">
            Para Ver Juntos
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {watchlist.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Clock className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
