"use client";

import { Dancing_Script } from "next/font/google";
import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { photosInicio as photos } from "@/data/photos";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function PhotoGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const swiperRef = useRef(null);

  const openLightbox = (index: number) => setCurrentImageIndex(index);
  const closeLightbox = () => setCurrentImageIndex(null);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  };

  return (
    <section className="relative bg-pink-50 px-4 py-20">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(rgba(244, 114, 182, 0.8) 2px, transparent 2px), radial-gradient(rgba(244, 114, 182, 0.8) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      ></div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`${dancingScript.className} mb-8 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
          >
            Nuestra Galería de Momentos
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Un vistazo a los momentos más especiales que hemos compartido
            juntos. Cada foto cuenta una historia de nuestro amor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="mySwiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide
                key={index}
                className="max-w-xs sm:max-w-sm relative"
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <p className="text-lg font-semibold">{photo.caption}</p>
                      <p className="text-sm">{photo.date}</p>
                    </div>

                    {/* Decorative heart corner */}
                    <div className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="h-4 w-4 text-pink-500" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-12 flex items-center justify-center">
          <Link
            href="/gallery"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-pink-600 shadow-lg transition-all duration-300 hover:bg-pink-600 hover:text-white"
          >
            <span>Ver Galería Completa</span>
            <Camera className="h-5 w-5 transition-transform group-hover:scale-110" />
          </Link>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {currentImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={(e) => e.target === e.currentTarget && closeLightbox()}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute right-4 top-4 text-white hover:text-pink-400"
                onClick={closeLightbox}
              >
                <X className="h-8 w-8" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute left-4 text-white hover:text-pink-400"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute right-4 text-white hover:text-pink-400"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
              >
                <Image
                  src={photos[currentImageIndex].src || "/placeholder.svg"}
                  alt={photos[currentImageIndex].caption}
                  width={1200}
                  height={800}
                  className="max-h-[90vh] w-auto rounded-lg"
                />
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-white"
                >
                  <p className="text-lg font-semibold">
                    {photos[currentImageIndex].caption}
                  </p>
                  <p className="mt-1 text-sm">
                    {photos[currentImageIndex].date}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
