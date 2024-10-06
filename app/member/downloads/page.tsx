import React, { ReactElement } from "react"
import { IoMdDownload } from "react-icons/io"
import { IoCalendarSharp, IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineAppRegistration } from "react-icons/md"
import { FaTheaterMasks } from "react-icons/fa"

interface DownloadFile {
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
    name: "Planning des cours",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/2024-2025%20Planning%20cours.pdf?alt=media&token=169ef0b7-76f9-437d-8b6e-e5a79419a14b",
  },
]

const musicalFiles: DownloadFile[] = [
  {
    name: "Bonheur en famille - 1ère partie",
    url: "https://firebasestorage.googleapis.com/v0/b/chup-s.appspot.com/o/Bonheur%20en%20famille%20V5%20premiere%20partie.docx?alt=media&token=1fadc473-b02a-416c-bc69-637697fd8108",
  },
]

export default function MemberDownloadsPage() {
  return (
    <div className="pt-20 px-4 md:px-8 pb-8 flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Documents adhérant</h1>
        <p className="text-sm text-slate-300">
          Téléchargez ici tous vos documents adhérant.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <DownloadList
          title="Textes"
          icon={<FaTheaterMasks />}
          description="Textes théâtre et chants"
          files={musicalFiles}
        />
        <DownloadList
          title="Planning"
          icon={<IoCalendarSharp />}
          description="Documents liés à l'organisation et aux dates."
          files={dateFiles}
        />
        <DownloadList
          title="Inscription"
          icon={<MdOutlineAppRegistration />}
          description="Documents requis pour votre inscription."
          files={signInFiles}
        />
      </div>
    </div>
  )
}

function DownloadList({
  title,
  icon,
  description,
  files,
}: {
  title: string
  icon: ReactElement
  description: string
  files: DownloadFile[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl flex items-center gap-1">
          {icon}
          <span>{title}</span>
        </h2>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        {files.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            className="rounded-md border w-full min-w-[300px] max-w-[500px] p-2 flex justify-between items-center hover:border-white hover:opacity-80 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline className="text-xl" />
              <p className="text-sm">{name}</p>
            </div>
            <div className="border-2 border-white rounded-full h-[30px] w-[30px] flex items-center justify-center">
              <IoMdDownload />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
