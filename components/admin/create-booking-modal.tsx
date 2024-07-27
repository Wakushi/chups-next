"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { CalendarIcon } from "lucide-react"
import { cn, toReadableDate } from "@/lib/utils"
import { TimeField } from "../ui/time-field"
import { TimeValue } from "react-aria"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Auditorium } from "@/lib/types/Auditorium"
import { Booking } from "@/lib/types/Booking"
import { generateImage } from "@/services/media.service"
import { Label } from "../ui/label"
import { FaImage } from "react-icons/fa"
import LoaderHive from "../ui/loader-hive/loader-hive"
import { useRouter } from "next/navigation"

export default function CreateBookingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ajouter une date</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter une nouvelle date</DialogTitle>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  )
}

const formSchema = z.object({
  title: z.string(),
  date: z.date(),
  time: z.custom<TimeValue>().nullable(),
  adultPrice: z.coerce.number(),
  childPrice: z.coerce.number(),
  auditoriumId: z.string(),
})

function BookingForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [auditoriums, setAuditoriums] = useState<Auditorium[]>([])
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [showCalendarPopover, setShowCalendarPopover] = useState<boolean>(false)

  const bookingForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: new Date(),
      time: new Date(),
      adultPrice: 0,
      childPrice: 0,
      auditoriumId: "",
    },
  })

  let selectedFile: File[] = []

  useEffect(() => {
    async function getAuditoriums() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/auditorium`
      )
      const data = await response.json()

      if (data?.length) {
        setAuditoriums(data)
      }
    }

    getAuditoriums()
  }, [])

  function onSelectMedia(event: any) {
    const file = event.target.files[0]
    if (file) {
      selectedFile = [file]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    const { title, date, time, childPrice, adultPrice, auditoriumId } =
      formValues

    const auditorium = auditoriums.find((a) => a.id === auditoriumId)

    if (!auditorium) return

    const formData = new FormData()
    formData.append("image", selectedFile[0])
    const imageUrl = await generateImage(selectedFile[0])

    const newBooking: Omit<Booking, "id"> = {
      title,
      date: { seconds: Date.now() / 1000, nanoseconds: 0 },
      time: `${time?.hour}h${time?.minute}`,
      image: imageUrl,
      childPrice,
      adultPrice,
      location: auditorium.name,
      city: auditorium.city,
      locationUrl: auditorium.locationUrl,
      auditorium: auditorium,
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBooking),
        }
      )
      const data = await response.json()
      if (data.success) {
        setIsSuccess(true)
        router.refresh()
        bookingForm.reset()
      }
    } catch (error) {
      console.error(error)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitting) {
    return (
      <div className="relative h-[300px]">
        <LoaderHive />
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-[300px]">
        <p className="text-3xl p-4 text-center">
          Date ajoutée avec succès ! 🎉
        </p>
      </div>
    )
  }

  return (
    <Form {...bookingForm}>
      <form
        onSubmit={bookingForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        {/* TITLE */}
        <FormField
          control={bookingForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                    borderBottom: "1px solid #fff",
                    borderRadius: "0",
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* AUDITORIUM */}
        <FormField
          control={bookingForm.control}
          name="auditoriumId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salle</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une salle de spectacle" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {auditoriums.map(({ id, name }) => {
                    return (
                      <SelectItem
                        className="cursor-pointer"
                        key={id}
                        value={id}
                      >
                        {name}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-4 my-2">
          {/* DATE */}
          <FormField
            control={bookingForm.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="mb-2">Date de représentation</FormLabel>
                <Popover modal={true} open={showCalendarPopover}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        onClick={() => setShowCalendarPopover(true)}
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          toReadableDate(field.value)
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      onDayClick={() => setShowCalendarPopover(false)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          {/* HOUR */}
          <FormField
            control={bookingForm.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="mb-2">Heure</FormLabel>
                <FormControl>
                  <TimeField
                    label="Time (controlled)"
                    hourCycle={24}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* ADULT PRICE */}
        <FormField
          control={bookingForm.control}
          name="adultPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix adulte</FormLabel>
              <FormControl>
                <Input
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                    borderBottom: "1px solid #fff",
                    borderRadius: "0",
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* CHILD PRICE */}
        <FormField
          control={bookingForm.control}
          name="childPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix enfant</FormLabel>
              <FormControl>
                <Input
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                    borderBottom: "1px solid #fff",
                    borderRadius: "0",
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col my-4 gap-4">
          <Label>Affiche</Label>
          <div
            className="flex justify-center items-center p-8 border rounded opacity-50 cursor-pointer hover:opacity-100"
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click()
              }
            }}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Selected File Preview"
                className="mt-4 max-w-xs"
              />
            ) : (
              <FaImage className="w-[40px] h-[40px] opacity-30" />
            )}
          </div>
          <Input
            className="hidden"
            ref={fileInputRef}
            id="picture"
            type="file"
            onChange={(e) => onSelectMedia(e)}
          />
        </div>
        <Button
          type="submit"
          className={clsx("mt-4", {
            "opacity-50": !bookingForm.formState.isValid,
          })}
          disabled={!bookingForm.formState.isValid}
        >
          Enregistrer
        </Button>
      </form>
    </Form>
  )
}
