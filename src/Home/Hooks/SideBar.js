import {
  faHome,
  faChartLine,
  faMusic,
  faBasketballBall,
  faFilm,
  faNewspaper,
  faCog,
  faFlag,
  faQuestionCircle,
  faCommentAlt,
  faHistory,
  faFloppyDisk,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export const mainMenus = [
  { text: "Home", icon: faHome },
  { text: "Populares", icon: faChartLine },
];

export const usersMenu = [
  { text: "Historial", icon: faHistory },
  { text: "Guardados", icon: faFloppyDisk },
  { text: "Like", icon: faThumbsUp },
];

export const comunidadesMenu = [
  { text: "Musica", icon: faMusic },
  { text: "Deporte", icon: faBasketballBall },
  { text: "Noticias", icon: faNewspaper },
  { text: "Peliculas", icon: faFilm },
];

export const moreMenus = [
  { text: "Configuracion", icon: faCog },
  { text: "Reportar error", icon: faFlag },
  { text: "Ayuda", icon: faQuestionCircle },
  { text: "Comentarios", icon: faCommentAlt },
];
