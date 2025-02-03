import { sections } from "@/data/sections";
import Extras from "./components/extras";
import Hero from "./components/hero";
import MoviesSection from "./components/movies-section";
import PhotoGallery from "./components/photo-gallery";
import SpotifySection from "./components/spotify-section";
import TikTokSection from "./components/tiktok-section";
import Timeline from "./components/timeline";
import { Dancing_Script } from "next/font/google";
import SectionNavigator from "./components/section-navigator";
import { Heart } from "lucide-react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-beige">
      <Hero />
      <Timeline />
      <TikTokSection />
      <SpotifySection />
      <MoviesSection />
      <PhotoGallery />
      <Extras />
      {/* Sección de navegación */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2
            className={`${dancingScript.className} mb-4 text-center text-4xl font-bold text-pink-600 md:text-5xl`}
          >
            Explora Nuestro Amor
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Cada sección guarda momentos únicos de nuestra historia juntos
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <SectionNavigator
                key={section.href}
                title={section.title}
                description={section.description}
                href={section.href}
                icon={section.icon}
                bgColor={section.bgColor}
              />
            ))}
          </div>

          {/* Mensaje final */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-pink-100 px-4 py-2">
              <Heart className="mr-2 h-5 w-5 text-pink-600" />
              <span className="text-pink-600">Nuestro amor crece cada día</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
