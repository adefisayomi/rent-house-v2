import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import yup from 'yup'
import { Button } from "../../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { contactFormSchema } from "./formSchema"
import { Textarea } from "@/components/ui/textarea"



export default function ContactUsForm () {

    const form = useForm<yup.InferType<typeof contactFormSchema>>({
        resolver: yupResolver(contactFormSchema),
        defaultValues: {}
      })
    // ---
    async function onSubmit(data: yup.InferType<typeof contactFormSchema>) {
        const {email} = data
        await console.log(email)
      }

    return (
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4 w-full max-w-2xl h-[70vh] bg-white border rounded-2xl px-8 py-5 dark:bg-background">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="my@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 place-items-center gap-4 ">
                    <FormField
                        control={form.control}
                        name="desiredDate"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormLabel>Desired Date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="desiredTime"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormLabel>Desired Time</FormLabel>
                            <FormControl>
                                <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="message" {...field} rows={6} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />


                <Button className="h-11">Send</Button>

            </form>
        </Form>
    )
}