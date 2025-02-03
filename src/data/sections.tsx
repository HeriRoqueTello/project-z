import { Calendar, Camera, Clock, Film, Gift, Music } from "lucide-react";

export const sections = [
  {
    title: "Nuestra Historia",
    description:
      "Explora el timeline de nuestros momentos más especiales juntos.",
    href: "/timeline",
    icon: <Clock className="h-6 w-6" />,
    bgColor: "bg-rose-50",
  },
  {
    title: "Nuestras Playlists",
    description: "Todas las canciones que marcan nuestra historia de amor.",
    href: "/playlists",
    icon: <Music className="h-6 w-6" />,
    bgColor: "bg-amber-50",
  },
  {
    title: "TikToks Favoritos",
    description: "Los videos que capturan nuestra felicidad juntos.",
    href: "/tiktoks",
    icon: <Film className="h-6 w-6" />,
    bgColor: "bg-pink-50",
  },
  {
    title: "Películas y Series",
    description: "Nuestras historias favoritas para ver abrazados.",
    href: "/movies",
    icon: <Film className="h-6 w-6" />,
    bgColor: "bg-red-50",
  },
  {
    title: "Galería de Fotos",
    description: "Una colección de nuestros momentos más hermosos.",
    href: "/gallery",
    icon: <Camera className="h-6 w-6" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Detalles Especiales",
    description: "Cartas, momentos y otros tesoros de nuestro amor.",
    href: "/extras",
    icon: <Gift className="h-6 w-6" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "San Valentín",
    description: "Una sorpresa especial para este día de amor.",
    href: "/valentine",
    icon: <Calendar className="h-6 w-6" />,
    bgColor: "bg-red-50",
  },
];
