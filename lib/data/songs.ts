import { Song } from "../types/Song"

const songs: Song[] = [
  {
    id: 1,
    title: "Et c'est parti",
    artist: "Nadya",
    singers: ["Emerick", "Astrid", "Maryline"],
    duration: "3:45",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/ET%20C'EST%20PARTI....docx?alt=media&token=ac0d8a15-4383-4823-9071-89fc48666e31",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Du côté de chez Swann",
    artist: "Dave",
    singers: ["Martine R", "Martine B"],
    duration: "4:10",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/DU%20CO%CC%82TE%20DE%20CHEZ%20SWANN.docx?alt=media&token=7e92775a-c434-44c0-b65b-80b1fc763c80",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Le Dîner",
    artist: "Bénabar",
    singers: ["Aline", "Emmanuel"],
    duration: "3:30",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LE%20DI%CC%82NER.docx?alt=media&token=2c2ed5e5-2fa8-493f-acfa-070a22234939",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Clic Clic Pan Pan",
    artist: "Yanns",
    singers: ["Nathan", "Romain", "Linoa", "Jade"],
    duration: "3:15",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/CLIC%20CLIC%20PAN%20PAN.docx?alt=media&token=78fe5f29-dfbd-43a1-99d1-f7d360abb347",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Ma drôle de vie",
    artist: "V. Sanson",
    singers: ["Maryline", "Alexandra"],
    duration: "4:20",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/CHANSON%20SUR%20MA%20DROLE%20DE%20VIE.docx?alt=media&token=8bb556d9-5dab-443a-8a5f-4ec52d016846",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Moi si j'étais Breton",
    artist: "Aioli",
    singers: ["J. Michel", "Mathys", "Romain"],
    duration: "3:50",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MOI%20SI%20J'ETAIS%20BRETON.docx?alt=media&token=2921069f-0105-464b-887a-75baa75fc530",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 7,
    title: "Girl Just Want to Have Fun",
    artist: "C. Lauper",
    singers: ["Emerick", "Kylian"],
    duration: "3:55",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/GIRLS%20JUST%20WANT%20TO%20HAVE%20FUN.docx?alt=media&token=5c5b639e-cd4e-428e-8abc-c26611f2bb6f",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 8,
    title: "Animaux Fragiles",
    artist: "Ycare-Zaz",
    singers: ["Nora", "Murielle"],
    duration: "4:05",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/ANIMAUX%20FRAGILES.docx?alt=media&token=8dd35f88-d5bc-44d7-ba65-cfb4a62de696",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 9,
    title: "Jamais Content",
    artist: "A. Souchon",
    singers: ["Brigitte", "Aline"],
    duration: "3:25",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/JAMAIS%20CONTENT.docx?alt=media&token=d3118c6a-d9a3-48d7-8338-72cc67e3068f",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 10,
    title: "Parapluie",
    artist: "Jeck",
    singers: ["Mathys", "Liam"],
    duration: "3:40",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/PARAPLUIE.docx?alt=media&token=d94b3bb3-8554-4cc1-931e-af8f4cf115b7",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 11,
    title: "Ti Amo",
    artist: "Foë-U-Tozzi-K. Cheryl",
    singers: ["Aline", "Sophie"],
    duration: "4:15",
    part: 1,
    lyrics_url: "",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 12,
    title: "Mourir Demain",
    artist: "Obispo",
    singers: ["Emmanuel", "Astrid"],
    duration: "4:30",
    part: 1,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MOURIR%20DEMAIN.docx?alt=media&token=ba66a5ac-e2af-4eac-a2d0-3b340fb1eb49",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 13,
    title: "Proud Mary",
    artist: "T. Turner",
    singers: ["Astrid", "Maxime"],
    duration: "3:45",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/PROUD%20MARY%20(Duo).docx?alt=media&token=ffb0a7b1-8bf9-4f87-8cf3-75a65c59dc1f",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 14,
    title: "Beau",
    artist: "Joseph Kamel-J. Doré",
    singers: ["Emmanuel", "Maelle", "Elfy"],
    duration: "3:35",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/BEAU.docx?alt=media&token=5f2583a3-97cc-4565-9982-4819d0b03ecf",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 15,
    title: "Je suis fou",
    artist: "Soprano-Vianey-K. Girac",
    singers: ["Jade", "Ava", "Linoa", "Liam"],
    duration: "4:00",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/JE%20SUIS%20FOU.docx?alt=media&token=516f982e-51a0-4d59-af27-529d17ef68dc",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 16,
    title: "En cloque",
    artist: "Renaud",
    singers: ["Brigitte", "Murielle"],
    duration: "3:55",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/EN%20CLOQUE.docx?alt=media&token=737f10b8-09cb-40c4-bab8-957204c39d52",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 17,
    title: "1987",
    artist: "Calogero",
    singers: ["Emerick", "Kylian"],
    duration: "3:40",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/1987.docx?alt=media&token=0dff97d4-db60-4603-8ea2-a68502af5cc4",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 18,
    title: "Mamy Blue",
    artist: "Nicoletta",
    singers: ["Astrid", "Aline", "Nora", "Wylnie"],
    duration: "4:20",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MAMY%20BLUE.docx?alt=media&token=f725dbf1-9c67-4aeb-b6dc-9210c8cd8c3a",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 19,
    title: "Lily",
    artist: "P. Perret",
    singers: ["Caroline", "Anne", "Mathys"],
    duration: "4:10",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LILY.docx?alt=media&token=59714217-2437-4b0a-9d4e-1897fe205678",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 20,
    title: "Elisa",
    artist: "S. Gainsbourg",
    singers: ["Maxime", "Patricia", "Wilnie"],
    duration: "3:50",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/E%CC%81LISA.docx?alt=media&token=6a943ec7-7031-49f8-b49e-c6404a24c5e7",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 21,
    title: "Gimme Gimme",
    artist: "Abba",
    singers: ["Emmanuel", "Alexandra", "Maryline", "Sophie"],
    duration: "3:35",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/GIMME%20GIMME%20GIMME.docx?alt=media&token=c3e86140-8167-4ea0-8c9e-de0af93f1135",
    instrumental_url: "",
    isFavorite: false,
  },
  {
    id: 22,
    title: "YMCA",
    artist: "Village People",
    singers: ["Maxime", "J. Michel", "Nathan", "Romain"],
    duration: "3:45",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/YMCA.docx?alt=media&token=f34f3f9a-556c-425d-98ce-a51d7ce34e13",
    instrumental_url: "",
    isFavorite: true,
  },
  {
    id: 23,
    title: "La vie du bon côté",
    artist: "Keen'v",
    singers: ["Tous"],
    duration: "4:30",
    part: 2,
    lyrics_url:
      "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LA%20VIE%20DU%20BON%20CO%CC%82TE.docx?alt=media&token=e10a5767-e800-4c0e-8ccd-441b47dbbde7",
    instrumental_url: "",
    isFavorite: true,
  },
]

export { songs }