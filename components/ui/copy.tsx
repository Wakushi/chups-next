"use client"
import { useToast } from "@/components/ui/use-toast"
import TooltipWrapper from "./custom-tooltip"
import { IoCopyOutline } from "react-icons/io5"

interface CopyProps {
  contentToCopy: string
  tooltipPosition?: "top" | "bottom" | "left" | "right"
}

export default function Copy({ contentToCopy, tooltipPosition }: CopyProps) {
  const { toast } = useToast()

  function copyToClipboard(e: any) {
    e.stopPropagation()
    navigator.clipboard.writeText(contentToCopy)
    toast({
      title: "Copié dans le presse-papier",
    })
  }

  return (
    <TooltipWrapper side={tooltipPosition} message="Copier">
      <IoCopyOutline onClick={(e) => copyToClipboard(e)} />
    </TooltipWrapper>
  )
}
