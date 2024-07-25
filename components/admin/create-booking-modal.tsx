"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { cn, toReadableDate } from "@/lib/utils"
import { TimeField } from "../ui/time-field"
import { TimeValue } from "react-aria"

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
  image: z.string(),
  adultPrice: z.coerce.number(),
  childPrice: z.coerce.number(),
  location: z.string(),
})

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const bookingForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: new Date(),
      time: new Date(),
      image: "",
      adultPrice: 0,
      childPrice: 0,
      location: "",
    },
  })

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    console.log(formValues)
    // try {
    //   const { title, date, time, image, adultPrice, childPrice, location } =
    //     formValues

    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({}),
    //     }
    //   )
    //   const data = await response.json()
    //   if (data.success) {
    //     setIsSuccess(true)
    //     bookingForm.reset()
    //   }
    // } catch (error) {
    //   console.error(error)
    //   setIsSuccess(false)
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <Form {...bookingForm}>
      <form
        onSubmit={bookingForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={bookingForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre *</FormLabel>
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
        <FormField
          control={bookingForm.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col my-4">
              <FormLabel>Date de représentation</FormLabel>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
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
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          control={bookingForm.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heure *</FormLabel>
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
        <FormField
          control={bookingForm.control}
          name="adultPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix adulte *</FormLabel>
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
        <p className="text-sm text-center text-slate-500">
          * Champs obligatoires
        </p>
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
