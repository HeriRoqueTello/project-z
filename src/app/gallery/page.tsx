"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { photos } from "@/data/photos";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "dates", name: "Citas" },
    { id: "trips", name: "Viajes" },
    { id: "special", name: "Momentos Especiales" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index: number) => setCurrentImage(index);
  const closeLightbox = () => setCurrentImage(null);

  const goToPrevious = () => {
    if (currentImage === null) return;
    setCurrentImage(
      (currentImage - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const goToNext = () => {
    if (currentImage === null) return;
    setCurrentImage((currentImage + 1) % filteredPhotos.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Galería de Amor
        </h1>

        {/* Categorías */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-colors ${
                activeCategory === category.id
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-600 hover:bg-pink-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">{photo.caption}</h3>
                  <p className="text-sm text-white/80">{photo.date}</p>
                  <p className="text-sm text-white/80">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {currentImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button
              className="absolute right-4 top-4 text-white hover:text-pink-400"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 text-white hover:text-pink-400"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-4 text-white hover:text-pink-400"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={filteredPhotos[currentImage].src || "/placeholder.svg"}
                alt={filteredPhotos[currentImage].caption}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto"
              />
              <div className="absolute bottom-0 w-full bg-black/60 p-4 text-center text-white">
                <h3 className="text-lg font-semibold">
                  {filteredPhotos[currentImage].caption}
                </h3>
                <p className="mt-1 text-sm">
                  {filteredPhotos[currentImage].date} •{" "}
                  {filteredPhotos[currentImage].location}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Botón para agregar fotos */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-pink-700">
            <Camera className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Nuevas Fotos
          </button>
        </div>
      </div>
    </main>
  );
}
