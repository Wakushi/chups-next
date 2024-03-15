// React Hook Forms
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
import { Booking } from "@/lib/definitions"

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nom trop court, 2 charactères minimum." }),
  email: z.string().email({ message: "Email invalide." }),
  adultTickets: z
    .number()
    .int()
    .min(1, { message: "Au moins un ticket est requis pour réserver." }),
  childTickets: z.number().int().min(0, { message: "Nombre invalide." }),
})

export default function BookingForm({ booking }: { booking: Booking }) {
  const bookingForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      adultTickets: 1,
      childTickets: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const { name, email, adultTickets, childTickets } = values
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
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!!booking.childprice && (
          <FormField
            control={bookingForm.control}
            name="childTickets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Places enfant</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <p className="text-sm text-center text-slate-500">
          * Champs obligatoires
        </p>
        <Button type="submit" className="mt-4">
          Réserver
        </Button>
      </form>
    </Form>
  )
}
