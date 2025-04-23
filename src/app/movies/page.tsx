"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { Star, Heart, Clock, Calendar, MapPin } from "lucide-react";
import { watchedMovies, watchlist } from "@/data/movies";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function MoviesPage() {
  const [activeTab, setActiveTab] = useState("watched");

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestras Películas
        </h1>

        {/* Tabs */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("watched")}
            className={`flex items-center gap-2 rounded-full px-6 py-2 transition-colors ${
              activeTab === "watched"
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-600 hover:bg-pink-50"
            }`}
          >
            <Heart className="h-4 w-4" />
            Vistas Juntos
          </button>
          <button
            onClick={() => setActiveTab("watchlist")}
            className={`flex items-center gap-2 rounded-full px-6 py-2 transition-colors ${
              activeTab === "watchlist"
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-600 hover:bg-pink-50"
            }`}
          >
            <Clock className="h-4 w-4" />
            Por Ver
          </button>
        </div>

        {/* Watched Movies */}
        {activeTab === "watched" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {watchedMovies.map((movie, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-white/80">{movie.genre}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {movie.date}
                    </div>
                    <div className="flex">
                      {[...Array(movie.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mb-3 text-gray-600">{movie.note}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    {movie.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Watchlist */}
        {activeTab === "watchlist" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {watchlist.map((movie, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover brightness-75 transition-all duration-300 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-full bg-pink-600 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
                      Agregar a Vistos
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {movie.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">{movie.genre}</p>
                  <p className="text-gray-600">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Movie Button */}
        {/* <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Nueva Película
          </button>
        </div> */}
      </div>
    </main>
  );
}
