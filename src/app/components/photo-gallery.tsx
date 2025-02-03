"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photosInicio } from "@/data/photos";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function PhotoGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => setCurrentImageIndex(index);
  const closeLightbox = () => setCurrentImageIndex(null);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev !== null
        ? (prev - 1 + photosInicio.length) % photosInicio.length
        : null
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev !== null ? (prev + 1) % photosInicio.length : null
    );
  };

  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Galería de Momentos
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photosInicio.map((photo, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg font-semibold">{photo.caption}</p>
                  <p className="mt-2 text-sm">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {currentImageIndex !== null && (
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
                src={photosInicio[currentImageIndex].src || "/placeholder.svg"}
                alt={photosInicio[currentImageIndex].caption}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto"
              />
              <div className="absolute bottom-0 w-full bg-black/60 p-4 text-center text-white">
                <p className="text-lg font-semibold">
                  {photosInicio[currentImageIndex].caption}
                </p>
                <p className="mt-1 text-sm">
                  {photosInicio[currentImageIndex].date}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
