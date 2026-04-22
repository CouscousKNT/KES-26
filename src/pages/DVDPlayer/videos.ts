import imgLaBonneExpression from "./assets/img/la_bonne_expression.webp";

export interface Video {
  numFilm: string;
  titleFilm: string;
  dateFilm: string;
  descriptionFilm: string;
  imageFilm: string | null;
}

const videos: Video[] = [
  {
    numFilm: "01",
    titleFilm: "La bonne expression",
    dateFilm: "1/1/2000",
    descriptionFilm:
      "Film sélectionné parmis les 10 lauréats du concours 'Filme ton quartier'. ",
    imageFilm: imgLaBonneExpression,
  },
  {
    numFilm: "02",
    titleFilm: "IN2",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "03",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
  },
  {
    numFilm: "04",
    titleFilm: "IN1",
    dateFilm: "1/ 1/2000",
    descriptionFilm: "12:00AM",
    imageFilm: null,
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
  },
  {
    numFilm: "10",
    titleFilm: "IN2",
    dateFilm: "3/ 5/2000",
    descriptionFilm: "09:00PM",
    imageFilm: null,
  },
  {
    numFilm: "11",
    titleFilm: "IN1",
    dateFilm: "4/20/2000",
    descriptionFilm: "03:15PM",
    imageFilm: null,
  },
  {
    numFilm: "12",
    titleFilm: "IN2",
    dateFilm: "5/ 1/2000",
    descriptionFilm: "07:45PM",
    imageFilm: null,
  },
];

export default videos;
