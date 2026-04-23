import imgLaBonneExpression from "./assets/img/la_bonne_expression.webp";

export interface Video {
  numFilm: string;
  titleFilm: string;
  dateFilm: string;
  descriptionFilm: string;
  imageFilm: string | null;
  urlFilm: string;
}

const videos: Video[] = [
  {
    numFilm: "01",
    titleFilm: "La bonne expression",
    dateFilm: "1/1/2000",
    descriptionFilm:
      "Film sélectionné parmis les 10 lauréats du concours 'Filme ton quartier'. ",
    imageFilm: imgLaBonneExpression,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "02",
    titleFilm: "IN2",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "03",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "04",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "05",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "06",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "07",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "08",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
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
  {
    numFilm: "11",
    titleFilm: "IN1",
    dateFilm: "4/20/2000",
    descriptionFilm: "03:15PM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
  {
    numFilm: "12",
    titleFilm: "IN2",
    dateFilm: "5/ 1/2000",
    descriptionFilm: "07:45PM",
    imageFilm: null,
    urlFilm: "https://vz-94180d5e-480.b-cdn.net/9e1f336b-ee8b-445a-ba92-12aa1c605a40/playlist.m3u8"
  },
];

export default videos;
