"use client"
import { ReactElement, useState } from "react"
import { IoMdDownload } from "react-icons/io"
import { IoCalendarSharp, IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineAppRegistration } from "react-icons/md"
import { FaTheaterMasks, FaSearch } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import {
  dateFiles,
  DownloadFile,
  musicalFiles,
  signInFiles,
} from "@/lib/data/documents"

export default function MemberDownloadsPage() {
  return (
    <div className="pt-20 px-4 md:px-8 pb-8 flex flex-col gap-6 md:gap-8">
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
  const [filteredFiles, setFilteredFiles] = useState<DownloadFile[]>(files)

  function handleFileFilter(keyword: string) {
    setFilteredFiles(() => {
      return files.filter((file) =>
        file.name.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }

  return (
    <section className="flex flex-col gap-4 lg:w-[400px]">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl flex items-center gap-1">
          {icon}
          <span>{title}</span>
        </h2>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="relative">
        <FaSearch className="absolute text-slate-400 left-2 top-1/2 -translate-y-1/2" />
        <Input
          className="border-transparent border-b-white pl-8"
          placeholder="Rechercher..."
          onChange={(e) => handleFileFilter(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 max-h-[300px] lg:max-h-[500px] overflow-y-auto">
        {filteredFiles.map(({ name, url }) => (
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
