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

const musicalFiles: DownloadFile[] = [
  {
    name: "Bonheur en famille - 1ère partie",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Bonheur%20en%20famille%20V5%20premiere%20partie.docx?alt=media&token=1fadc473-b02a-416c-bc69-637697fd8108",
  },
  {
    name: "1. Et c'est parti - Nadya",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/ET%20C'EST%20PARTI....docx?alt=media&token=ac0d8a15-4383-4823-9071-89fc48666e31",
  },
  {
    name: "2. Du côté de chez Swann - Dave",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/DU%20CO%CC%82TE%20DE%20CHEZ%20SWANN.docx?alt=media&token=7e92775a-c434-44c0-b65b-80b1fc763c80",
  },
  {
    name: "3. Le dîner - Bénabar",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LE%20DI%CC%82NER.docx?alt=media&token=2c2ed5e5-2fa8-493f-acfa-070a22234939",
  },
  {
    name: "4. Clic clic pan pan - Yanns",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/CLIC%20CLIC%20PAN%20PAN.docx?alt=media&token=78fe5f29-dfbd-43a1-99d1-f7d360abb347",
  },
  {
    name: "5. Ma drôle de vie - Véronique Sanson",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/CHANSON%20SUR%20MA%20DROLE%20DE%20VIE.docx?alt=media&token=8bb556d9-5dab-443a-8a5f-4ec52d016846",
  },
  {
    name: "6. Moi si j'étais breton - Aïoli",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MOI%20SI%20J'ETAIS%20BRETON.docx?alt=media&token=2921069f-0105-464b-887a-75baa75fc530",
  },
  {
    name: "7. Girls just want to have fun - Cyndi Lauper",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/GIRLS%20JUST%20WANT%20TO%20HAVE%20FUN.docx?alt=media&token=5c5b639e-cd4e-428e-8abc-c26611f2bb6f",
  },
  {
    name: "8. Animaux fragiles - Ycare, Zaz",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/ANIMAUX%20FRAGILES.docx?alt=media&token=8dd35f88-d5bc-44d7-ba65-cfb4a62de696",
  },
  {
    name: "9. Jamais content - Alain Souchon",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/JAMAIS%20CONTENT.docx?alt=media&token=d3118c6a-d9a3-48d7-8338-72cc67e3068f",
  },
  {
    name: "10. Parapluie - Jeck",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/PARAPLUIE.docx?alt=media&token=d94b3bb3-8554-4cc1-931e-af8f4cf115b7",
  },
  {
    name: "12. Mourir demain - Natasha St-Pier, Pascal Obispo",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MOURIR%20DEMAIN.docx?alt=media&token=ba66a5ac-e2af-4eac-a2d0-3b340fb1eb49",
  },
  {
    name: "13. Proud mary - Tina Turner",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/PROUD%20MARY%20(Duo).docx?alt=media&token=ffb0a7b1-8bf9-4f87-8cf3-75a65c59dc1f",
  },
  {
    name: "14. Beau - Joseph Kamel, Julien Doré",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/BEAU.docx?alt=media&token=5f2583a3-97cc-4565-9982-4819d0b03ecf",
  },
  {
    name: "15. Je suis fou - Soprano, Vianney, K. Girac",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/JE%20SUIS%20FOU.docx?alt=media&token=516f982e-51a0-4d59-af27-529d17ef68dc",
  },
  {
    name: "16. En cloque - Renaud",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/EN%20CLOQUE.docx?alt=media&token=737f10b8-09cb-40c4-bab8-957204c39d52",
  },
  {
    name: "17. 1987 - Calogero",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/1987.docx?alt=media&token=0dff97d4-db60-4603-8ea2-a68502af5cc4",
  },
  {
    name: "18. Mamy blue - Nicoletta",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/MAMY%20BLUE.docx?alt=media&token=f725dbf1-9c67-4aeb-b6dc-9210c8cd8c3a",
  },
  {
    name: "19. Lily - P. Perret",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LILY.docx?alt=media&token=59714217-2437-4b0a-9d4e-1897fe205678",
  },
  {
    name: "20. Elisa - S. Gainsbourg",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/E%CC%81LISA.docx?alt=media&token=6a943ec7-7031-49f8-b49e-c6404a24c5e7",
  },
  {
    name: "21. Gimme gimme - ABBA",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/GIMME%20GIMME%20GIMME.docx?alt=media&token=c3e86140-8167-4ea0-8c9e-de0af93f1135",
  },
  {
    name: "22. YMCA - Village People",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/YMCA.docx?alt=media&token=f34f3f9a-556c-425d-98ce-a51d7ce34e13",
  },
  {
    name: "23. La vie du bon côté - Keen'v",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/LA%20VIE%20DU%20BON%20CO%CC%82TE.docx?alt=media&token=e10a5767-e800-4c0e-8ccd-441b47dbbde7",
  },
]

export { musicalFiles, dateFiles, signInFiles }
