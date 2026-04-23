import imgLaBonneExpression from "./assets/img/la_bonne_expression.webp";
import imgCinquantePourcent from "./assets/img/cinquante_pourcent.webp"
import imgCDH from "./assets/img/cdh.webp"
import imgLaGrandeEchapee from "./assets/img/la_grande_echapee.webp"

export interface Video {
  numFilm: string;
  titleFilm: string;
  dateFilm: string;
  descriptionFilm: string;
  imageFilm: string | null;
  urlFilm?: string;
}

const videos: Video[] = [
  {
    numFilm: "01",
    titleFilm: "LA BONNE EXPRESSION",
    dateFilm: "1/1/2000",
    descriptionFilm:
      "Film sélectionné parmis les 10 lauréats du concours 'Filme ton quartier'. ",
    imageFilm: imgLaBonneExpression,
    urlFilm: import.meta.env.VITE_VIDEO_01
  },
  {
    numFilm: "02",
    titleFilm: "50%",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "Deuxième participation au concours 'Filme ton quartier'.",
    imageFilm: imgCinquantePourcent,
    urlFilm: import.meta.env.VITE_VIDEO_02,
  },
  {
    numFilm: "03",
    titleFilm: "LA GRANDE ECHAPEE",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "Cadrage et Post-Production pour Moluki",
    imageFilm: imgLaGrandeEchapee,
    urlFilm: import.meta.env.VITE_VIDEO_03
  },
  {
    numFilm: "04",
    titleFilm: "CDH 2025",
    dateFilm: "",
    descriptionFilm: "Congrès d'Hiver 2025 avec Miage PLUS, au Domaine de Peyreguillot.",
    imageFilm: imgCDH,
    urlFilm: import.meta.env.VITE_VIDEO_04
  },
  {
    numFilm: "05",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "06",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "07",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "08",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "09",
    titleFilm: "IN1",
    dateFilm: "2/14/2000",
    descriptionFilm: "08:30AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "10",
    titleFilm: "IN2",
    dateFilm: "3/ 5/2000",
    descriptionFilm: "09:00PM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
];

export default videos;
