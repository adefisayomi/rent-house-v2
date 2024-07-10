import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./formSchemas"
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
import SocialAuth from "./SocialAuth"
import { Input } from "@/components/ui/input"
import { LabelSeparator } from "@/components/ui/separator"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import useAuthStore from "@/src/contexts/useAuthStore"



export default function AuthLogin () {

    const form = useForm<yup.InferType<typeof loginFormSchema>>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {email: '', password: ''}
      })
    const [viewPass, setViewPass] = useState(false)
    const {loginWithEmail} = useAuthStore()

    // ---
    async function onSubmit(data: yup.InferType<typeof loginFormSchema>) {
        const {email, password} = data
        await loginWithEmail(email, password)
      }

    return (
        <div className="w-full">
            <Form {...form}>
                <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type='email' placeholder="my@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative " >
                                <Input type= {viewPass ? 'text' : 'password'} placeholder="Password" {...field} />
                                <div className="absolute top-1/2 right-1 -translate-y-1/2" onClick={() => setViewPass(!viewPass)}>
                                   {viewPass ? <Eye className="w-4 h-4 cursor-pointer" /> : <EyeOff className="w-4 h-4 cursor-pointer" />} 
                                </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button loading={form.formState.isSubmitting} className="text-xs h-11 mt-4 rounded-lg">
                        Sign In
                    </Button>
                </form>
            </Form>

            <LabelSeparator label='or' className='text-xs my-5' />
            <SocialAuth />
        </div>
    )
}