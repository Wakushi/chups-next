"use client"
import { ReactElement, useState } from "react"
import { IoMdDownload } from "react-icons/io"
import { IoCalendarSharp, IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineAppRegistration } from "react-icons/md"
import { FaTheaterMasks, FaSearch } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  dateFiles,
  DownloadFile,
  theaterFiles,
  signInFiles,
} from "@/lib/data/documents"

export default function MemberDownloadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Documents adhérant
          </h1>
          <p className="text-slate-300 mt-2">
            Téléchargez ici tous vos documents adhérant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DownloadList
            title="Planning"
            icon={<IoCalendarSharp className="text-blue-400" />}
            description="Documents liés à l'organisation et aux dates."
            files={dateFiles}
          />
          <DownloadList
            title="Textes"
            icon={<FaTheaterMasks className="text-purple-400" />}
            description="Textes théâtre"
            files={theaterFiles}
          />
          <DownloadList
            title="Inscription"
            icon={<MdOutlineAppRegistration className="text-green-400" />}
            description="Documents requis pour votre inscription."
            files={signInFiles}
          />
        </div>
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
  const [searchTerm, setSearchTerm] = useState("")

  function handleFileFilter(keyword: string) {
    setSearchTerm(keyword)
    setFilteredFiles(
      files.filter((file) =>
        file.name.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="relative">
          <FaSearch className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" />
          <Input
            className="pl-10 bg-slate-900/50 border-slate-700 focus:border-slate-500 transition-colors"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => handleFileFilter(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
          {filteredFiles.length === 0 ? (
            <p className="text-center text-slate-400 py-4">
              Aucun document trouvé
            </p>
          ) : (
            filteredFiles.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                className="group relative bg-slate-900/30 rounded-lg p-3 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700 hover:border-slate-600"
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    <IoDocumentTextOutline className="text-xl" />
                  </div>
                  <p className="text-sm flex-1 pr-10">{name}</p>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-700 group-hover:bg-blue-500 p-2 rounded-full transition-all duration-300">
                    <IoMdDownload className="text-sm" />
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-700">
          <span>
            {filteredFiles.length} document
            {filteredFiles.length !== 1 ? "s" : ""}
          </span>
          {searchTerm && (
            <Badge
              variant="secondary"
              className="bg-slate-700 hover:bg-slate-600 cursor-pointer"
              onClick={() => handleFileFilter("")}
            >
              Réinitialiser
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
