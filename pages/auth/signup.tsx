import Page from "@/components/page"
import Routes from "@/src/Routes"
import AuthLayout from "@/src/sections/auth/AuthLayout"
import AuthSignup from "@/src/sections/auth/AuthSignup"
import Link from "next/link"
import { ReactNode } from "react"


export default function Signup () {


    return (
        <Page title="Create an account">
            <>
            <div className="w-full max-w-lg mx-auto p-3 md:p-10 py-10 border dark:border-muted rounded-xl flex flex-col justify-between bg-white dark:bg-background items-center gap-6">
                <div className="w-full flex flex-col items-center gap-2">
                    <h2 className="tracking-normal text-2xl capitalize text-primary font-semibold ">
                    create account
                    </h2>
                    <p className="text-xs">Do not have an account?</p>
                </div>

                <AuthSignup />

                <p className="text-xs">Already have an account? <Link href={Routes.login} className="text-primary font-semibold">Login</Link></p>
            </div>

            <div className="w-full flex items-center justify-center">
            <p className="text-[11px] text-center max-w-xs mt-5">By continuing, you have read and agree to our <br /> <Link href='#' className="text-primary font-semibold">Terms and Conditions.</Link> </p>
            </div>
            </>
        </Page>
    )
}
Signup.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>