type MediaItem = {
  src: string
  caption: string
  date: string
  category: string
  location: string
  type: "image" | "video"
  thumbnail?: string // Optional thumbnail for videos
}


export const photosInicio = [
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738538016/2024-07-09_16.04.30_acnnlc.png",
    caption: "Nuestro primera aventura en el minecraft",
    date: "2024",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738538019/2024-11-13_18.57.12_m4jekx.png",
    caption: "En nuestro cuarto de travesuras en el minecraft",
    date: "2024",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738538184/ec1f24ab-5fea-4463-9375-185486d1f81d_g1ktva.jpg",
    caption: "Segunda salida al cine",
    date: "2024",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738537958/473701316_2038709746638822_242151646268700133_n_uudad6.jpg",
    caption: "Salida al parque",
    date: "2025",
  },
];

export const photos = [
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738540675/4cf58b22-bc37-4cbc-8190-6ff2478cc389_qsw2tq.jpg",
    caption: "Fuimos a ver Moana 2",
    date: "15/12/2024",
    category: "dates",
    location: "Cine",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738538190/56814f7e-be37-4030-9654-18f13e35fd78_yjmofb.jpg",
    caption: "Fuimos a ver Robot Salvaje",
    date: "2024",
    category: "dates",
    location: "Cine",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/video/upload/v1738540803/WhatsApp_Video_2025-02-02_at_18.33.32_ebt5li.mp4",
    caption: "Nuestro 5 Aniversario",
    date: "15/01/2025",
    category: "special",
    location: "Tu casa",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738540671/6c54fd67-d1aa-4c1a-8803-2d03832ad059_llxhxz.jpg",
    caption: "Fui por primera vez a tu casa",
    date: "05/03/2024",
    category: "trips",
    location: "Tu casa",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738540856/6c618f1f-5fa7-49c1-b0f5-cd46f28937bc_zq7ctp.jpg",
    caption: "Momentos memorables que hablamos a diario",
    date: "Siempre",
    category: "special",
    location: "Donde sea",
  },
  {
    src: "https://res.cloudinary.com/dlsqr4a8l/image/upload/v1738540861/82ad803d-a3c2-45d7-a7c3-f210ce244d2a_f238qn.jpg",
    caption: "La ultima visita a mi casa",
    date: "30/01/2025",
    category: "special",
    location: "Condominios",
  },
];

export const mediaItems: MediaItem[] = [
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Nuestra Primera Cita",
    date: "14/02/2024",
    category: "dates",
    location: "Café del Centro",
    type: "image",
  },
  {
    src: "/video-placeholder.mp4", // Reemplazar con URL real del video
    thumbnail: "/placeholder.svg?height=800&width=600",
    caption: "Bailando Juntos",
    date: "20/02/2024",
    category: "special",
    location: "La Fiesta",
    type: "video",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Aniversario",
    date: "01/03/2024",
    category: "special",
    location: "Restaurante Romántico",
    type: "image",
  },
  {
    src: "/video-placeholder.mp4", // Reemplazar con URL real del video
    thumbnail: "/placeholder.svg?height=800&width=600",
    caption: "Momentos Divertidos",
    date: "05/03/2024",
    category: "dates",
    location: "Parque Central",
    type: "video",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Aventura en la Montaña",
    date: "10/03/2024",
    category: "trips",
    location: "Sierra Nevada",
    type: "image",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    caption: "Cena Especial",
    date: "15/03/2024",
    category: "special",
    location: "Casa",
    type: "image",
  },
]