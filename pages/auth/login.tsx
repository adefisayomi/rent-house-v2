import Page from "@/components/page"
import Routes from "@/src/Routes"
import AuthLayout from "@/src/sections/auth/AuthLayout"
import AuthLogin from "@/src/sections/auth/AuthLogin"
import Link from "next/link"
import { ReactNode } from "react"


export default function Login () {


    return (
        <Page title="Login">
            <>
            <div className="w-full max-w-lg mx-auto p-6 md:p-10 py-10 border dark:border-muted rounded-xl flex flex-col justify-between bg-white dark:bg-background items-center gap-6">
                <div className="w-full flex flex-col items-center gap-2">
                    <h2 className="tracking-normal text-2xl capitalize text-primary font-bold">
                    sign in
                    </h2>
                    <p className="text-xs">Good to have you back.</p>
                </div>

                <AuthLogin />
                <p className="text-xs">Don't have an account? <Link href={Routes.signup} className="text-primary font-semibold">Create an account</Link></p>
            </div>
            </>
        </Page>
    )
}
Login.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>