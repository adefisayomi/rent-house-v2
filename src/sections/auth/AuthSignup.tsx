import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signupAgentFormSchema, signupRenterFormSchema } from "./formSchemas"
import yup from 'yup'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LabelSeparator } from "@/components/ui/separator"
import SocialAuth from "./SocialAuth"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import useAuthStore from "@/src/contexts/useAuthStore"



export default function AuthSignup () {

    return (
        <Tabs defaultValue="renter" className="w-full ">
            <TabsList className="grid w-full grid-cols-2 mb-10" >
                <TabsTrigger value="renter">
                    renter
                </TabsTrigger>
                <TabsTrigger value="agent">
                    agent
                </TabsTrigger>
            </TabsList>

            <TabsContent value="agent">
                <AgentSignupForm />
            </TabsContent>

            <TabsContent value="renter">
                <RenterSignupForm />
            </TabsContent>
        </Tabs>
    )
}


// Define the form data type
type SignupAgentFormData = yup.InferType<typeof signupAgentFormSchema>;

export function AgentSignupForm() {
  const form = useForm<SignupAgentFormData>({
    resolver: yupResolver(signupAgentFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { registerWithEmail } = useAuthStore();

  const onSubmit = async (data: SignupAgentFormData) => {
    const { password, email, firstName, lastName } = data;
    await registerWithEmail({ password, email, firstName, lastName, accountType: 'agent' });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Last name" {...field} />
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

          
            {/* <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                    <Input type="text" placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            /> */}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirm password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="lg" loading={form.formState.isSubmitting} className="text-xs" type="submit">
            Register
          </Button>
        </form>
      </Form>

      <LabelSeparator label="or" className="text-xs my-5" />
      <SocialAuth accountType="agent" />
    </div>
  );
}



// Define the form data type
type SignupRenterFormData = yup.InferType<typeof signupRenterFormSchema>;

export function RenterSignupForm () {

    const form = useForm<SignupRenterFormData>({
      resolver: yupResolver(signupRenterFormSchema),
      defaultValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    });
  
    const { registerWithEmail } = useAuthStore();
  
    const onSubmit = async (data: SignupRenterFormData) => {
      const { password, email, name } = data;
      await registerWithEmail({ password, email, firstName: name, accountType: 'renter' });
    };

    return (
        <div>
            <Form {...form}>
                <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="First & Last name" {...field} />
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
                              <Input type= 'password' placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Confirm password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button loading={form.formState.isSubmitting} className="text-xs h-11 mt-4 rounded-lg">
                        Register
                    </Button>
                </form>
            </Form>

            <LabelSeparator label='or' className='text-xs my-5' />
            <SocialAuth accountType="renter" />
        </div>
    )
}