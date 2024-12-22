export type DownloadFile = {
  name: string
  url: string
}

const signInFiles: DownloadFile[] = [
  {
    name: "Fiche d'inscription",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Fiche%20d'inscription%202024-2025.doc?alt=media&token=93d6706f-64b8-4e5a-a2bd-9ebd30bc906f",
  },
  {
    name: "Formulaire de droit à l'image",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Formulaire%20droit%20a%20l'image%202024-2025.doc?alt=media&token=1a2d7abf-d43b-4847-a320-c177256f6313",
  },
  {
    name: "Modalités de règlement",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Modalite%CC%81s%20de%20Re%CC%80glement%202024-2025.docx?alt=media&token=0953a5a8-51bb-472c-9832-1f7c022203c8",
  },
  {
    name: "Conditions d'inscription",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Conditions%20inscription%20%202024-2025.doc?alt=media&token=338ccead-f9da-49c7-b22f-1ec343786307",
  },
  {
    name: "RIB de l'association",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/21%20RIB%20CREDIT%20MUTUEL.pdf?alt=media&token=ccc2548e-2785-4f88-9dd1-7106735dc41b",
  },
]

const dateFiles: DownloadFile[] = [
  {
    name: "Planning des répétitions / cours",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/2024-2025%20Planning%20cours.pdf?alt=media&token=169ef0b7-76f9-437d-8b6e-e5a79419a14b",
  },
]

const theaterFiles: DownloadFile[] = [
  {
    name: "Bonheur en famille - 1ère partie",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Bonheur%20en%20famille%20V5%20premiere%20partie.docx?alt=media&token=1fadc473-b02a-416c-bc69-637697fd8108",
  },
  {
    name: "Bonheur en famille - 2ème partie",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Bonheur%20en%20famille%20V5%202DE%20partie.docx?alt=media&token=d3b76615-9a4d-4522-8b16-6c7f12a04f6a",
  },
]

export { theaterFiles, dateFiles, signInFiles }
