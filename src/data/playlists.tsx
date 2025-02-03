import { Heart, Coffee, Sun, Moon, Music2, Sparkles } from "lucide-react";

export const playlistsInicio = [
  {
    title: "Terraformando Nuestro Amor",
    icon: <Heart className="h-6 w-6" />,
    embedUrl:
      "https://open.spotify.com/embed/track/4ZDdMGTlSgm7ATgbx4pZlP?utm_source=generator",
  },
  {
    title: "Para pensar en ti con un café",
    icon: <Coffee className="h-6 w-6" />,
    embedUrl:
      "https://open.spotify.com/embed/track/0GNWo2IgoBKdk10gdnaSVk?utm_source=generator",
  },
  {
    title: "Para escuchar en el día",
    icon: <Sun className="h-6 w-6" />,
    embedUrl:
      "https://open.spotify.com/embed/track/4YJ6jFmL7pELUfNqa7WEnF?utm_source=generator",
  },
  {
    title: "Para cuando te extraño",
    icon: <Moon className="h-6 w-6" />,
    embedUrl:
      "https://open.spotify.com/embed/track/04aBuWoZeHYJeDDTWYSgso?utm_source=generator",
  },
];

export const playlists = [
  {
    title: "Nuestras Románticas",
    description: "Las canciones que nos hacen soñar juntos",
    icon: <Heart className="h-6 w-6" />,
    color: "bg-red-100",
    textColor: "text-red-600",
    iconColor: "text-red-500",
    spotifyId: "playlist_id_1",
  },
  {
    title: "Mañanas Contigo",
    description: "Para empezar el día pensando en ti",
    icon: <Coffee className="h-6 w-6" />,
    color: "bg-amber-100",
    textColor: "text-amber-600",
    iconColor: "text-amber-500",
    spotifyId: "playlist_id_2",
  },
  {
    title: "Tardes de Amor",
    description: "Melodías que acompañan nuestros momentos",
    icon: <Sun className="h-6 w-6" />,
    color: "bg-orange-100",
    textColor: "text-orange-600",
    iconColor: "text-orange-500",
    spotifyId: "playlist_id_3",
  },
  {
    title: "Noches de Luna",
    description: "Para soñar contigo bajo las estrellas",
    icon: <Moon className="h-6 w-6" />,
    color: "bg-purple-100",
    textColor: "text-purple-600",
    iconColor: "text-purple-500",
    spotifyId: "playlist_id_4",
  },
  {
    title: "Nuestras Favoritas",
    description: "Nuestro primer viernes 13 juntos",
    icon: <Music2 className="h-6 w-6" />,
    color: "bg-pink-100",
    textColor: "text-pink-600",
    iconColor: "text-pink-500",
    spotifyId: "4bC3n3zY9pcUONWnDp9XMF",
  },
  {
    title: "Momentos Especiales",
    description: "Canciones que marcan nuestra historia",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-blue-100",
    textColor: "text-blue-600",
    iconColor: "text-blue-500",
    spotifyId: "playlist_id_6",
  },
];
