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
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Booking } from "@/lib/types/Booking"
import clsx from "clsx"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nom trop court, 2 caractères minimum." }),
  email: z.string().email({ message: "Email invalide." }),
  adultTickets: z.coerce.number(),
  childTickets: z.coerce.number(),
})

interface BookingFormProps {
  booking: Booking
  setIsSuccess: (value: boolean) => void
  setIsSubmitting: (value: boolean) => void
}

export default function BookingForm({
  booking,
  setIsSuccess,
  setIsSubmitting,
}: BookingFormProps) {
  const bookingForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      adultTickets: 1,
      childTickets: 0,
    },
  })

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { name, email, adultTickets, childTickets } = formValues
      const payload = {
        name,
        email,
        adultTickets,
        childTickets,
        show: booking,
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking` ?? "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
      const data = await response.json()
      if (data.success) {
        setIsSuccess(true)
        bookingForm.reset()
      }
    } catch (error) {
      console.error(error)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...bookingForm}>
      <form
        onSubmit={bookingForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={bookingForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom *</FormLabel>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
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
          name="adultTickets"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Places adultes *</FormLabel>
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
        {!!booking.childPrice && (
          <FormField
            control={bookingForm.control}
            name="childTickets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Places enfant</FormLabel>
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
        )}
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
          Réserver
        </Button>
      </form>
    </Form>
  )
}
