"use client"
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
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nom trop court, 2 charactères minimum." }),
  email: z.string().email({ message: "Email invalide." }),
  subject: z.string(),
  message: z.string().min(1, { message: "Message trop court." }),
})

export default function ContactForm() {
  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact` ?? "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      )
      const data = await response.json()
      if (data.success) {
        alert("Message envoyé avec succès !")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={contactForm.control}
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
          control={contactForm.control}
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
          control={contactForm.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
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
          control={contactForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                    borderBottom: "1px solid #fff",
                    borderRadius: "0",
                    resize: "none",
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
        <Button type="submit" className="mt-4">
          Envoyer
        </Button>
      </form>
    </Form>
  )
}
