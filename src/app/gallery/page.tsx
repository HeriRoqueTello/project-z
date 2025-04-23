"use client";

import { Dancing_Script } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Filter,
  Calendar,
  Play,
  ZoomOut,
  ZoomIn,
  Download,
  Video,
} from "lucide-react";
import { photos } from "@/data/photos";
import { motion, AnimatePresence } from "framer-motion";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function GalleryPage() {
  const [currentMedia, setCurrentMedia] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", name: "Todos" },
    { id: "dates", name: "Citas" },
    { id: "trips", name: "Viajes" },
    { id: "special", name: "Momentos Especiales" },
  ];

  // Extraer meses únicos para el filtro
  const months = Array.from(
    new Set(
      photos
        .map((item) => {
          const date = item.dateObj;
          if (!date) return null;
          return `${date.getFullYear()}-${date.getMonth() + 1}`;
        })
        .filter(Boolean)
    )
  ).sort();

  // Aplicar filtros
  const filteredMedia = photos
    .filter(
      (item) => activeCategory === "all" || item.category === activeCategory
    )
    .filter((item) => {
      if (!dateFilter || !item.dateObj) return true;
      const [year, month] = dateFilter.split("-").map(Number);
      return (
        item.dateObj.getFullYear() === year &&
        item.dateObj.getMonth() + 1 === month
      );
    });

  const openLightbox = useCallback((index: number) => {
    setCurrentMedia(index);
    setIsPlaying(false);
    setZoomLevel(1);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentMedia(null);
    setIsPlaying(false);
    setZoomLevel(1);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentMedia === null) return;
    setCurrentMedia(
      (currentMedia - 1 + filteredMedia.length) % filteredMedia.length
    );
    setIsPlaying(false);
    setZoomLevel(1);
  }, [currentMedia, filteredMedia.length]);

  const goToNext = useCallback(() => {
    if (currentMedia === null) return;
    setCurrentMedia((currentMedia + 1) % filteredMedia.length);
    setIsPlaying(false);
    setZoomLevel(1);
  }, [currentMedia, filteredMedia.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentMedia === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=")
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      if (e.key === "-") setZoomLevel((prev) => Math.max(prev - 0.25, 1));
      if (e.key === "0") setZoomLevel(1);
    },
    [currentMedia, goToPrevious, goToNext, closeLightbox]
  );

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  const handleResetZoom = () => setZoomLevel(1);

  const handleDownload = () => {
    if (currentMedia === null) return;
    const item = filteredMedia[currentMedia];

    // Para imágenes, crear un enlace y simular clic
    if (item.type === "image") {
      const link = document.createElement("a");
      link.href = item.src;
      link.download = `${item.caption.replace(/\s+/g, "_")}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Para videos, abrir en nueva pestaña (la descarga directa puede ser complicada)
    else if (item.type === "video") {
      window.open(item.src, "_blank");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  // Formatear fecha para mostrar
  const formatMonth = (dateString: string) => {
    const [year, month] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("es", { month: "long", year: "numeric" });
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${dancingScript.className} mb-12 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
        >
          Nuestra Galería de Amor
        </motion.h1>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-600 shadow-sm transition-colors hover:bg-pink-50"
            >
              <Filter className="h-4 w-4" />
              Filtros
            </button>

            {/* Categorías siempre visibles */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    activeCategory === category.id
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-600 hover:bg-pink-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Filtros adicionales */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <h3 className="mb-3 font-medium text-gray-700">
                    Filtrar por fecha
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setDateFilter(null)}
                      className={`rounded-full px-3 py-1 text-xs ${
                        dateFilter === null
                          ? "bg-pink-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-pink-50"
                      }`}
                    >
                      Todas las fechas
                    </button>
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => setDateFilter(month)}
                        className={`rounded-full px-3 py-1 text-xs ${
                          dateFilter === month
                            ? "bg-pink-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-pink-50"
                        }`}
                      >
                        <Calendar className="mr-1 inline h-3 w-3" />
                        {formatMonth(month!)}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Grid de medios */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-md"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={
                      item.type === "video"
                        ? item.thumbnail || item.src
                        : item.src
                    }
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-4 transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-lg font-semibold">{item.caption}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-white/90">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                    <p className="text-sm text-white/80">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              No se encontraron medios con los filtros seleccionados.
            </div>
          )}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {currentMedia !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
            >
              <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between p-4">
                <div className="text-sm text-white/80">
                  {currentMedia + 1} / {filteredMedia.length}
                </div>
                <button
                  className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <button
                className="absolute left-4 z-10 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 z-10 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 space-x-2">
                <button
                  className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  onClick={handleZoomOut}
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  onClick={handleResetZoom}
                >
                  <span className="px-1 text-sm">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </button>
                <button
                  className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  onClick={handleZoomIn}
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  onClick={handleDownload}
                >
                  <Download className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[85vh] max-w-[90vw] overflow-hidden"
              >
                {filteredMedia[currentMedia].type === "video" ? (
                  <div className="relative rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      src={filteredMedia[currentMedia].src}
                      className="max-h-[85vh] w-auto rounded-lg"
                      controls
                      autoPlay={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  </div>
                ) : (
                  <div
                    className="relative overflow-hidden rounded-lg"
                    style={{
                      cursor: zoomLevel > 1 ? "move" : "default",
                      maxHeight: "85vh",
                      maxWidth: "90vw",
                    }}
                  >
                    <div
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transition: "transform 0.3s ease",
                        transformOrigin: "center",
                      }}
                    >
                      <Image
                        src={
                          filteredMedia[currentMedia].src || "/placeholder.svg"
                        }
                        alt={filteredMedia[currentMedia].caption}
                        width={1200}
                        height={800}
                        className="max-h-[85vh] w-auto rounded-lg"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                )}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-white"
                >
                  <div className="flex items-center justify-center gap-2">
                    {filteredMedia[currentMedia].type === "video" ? (
                      <Video className="h-5 w-5" />
                    ) : (
                      <Camera className="h-5 w-5" />
                    )}
                    <h3 className="text-lg font-semibold">
                      {filteredMedia[currentMedia].caption}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm">
                    {filteredMedia[currentMedia].date} •{" "}
                    {filteredMedia[currentMedia].location}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón para agregar medios */}
        {/* <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-pink-200/50"
          >
            <Camera className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
            Agregar Fotos y Videos
          </motion.button>
        </div> */}
      </div>
    </main>
  );
}
