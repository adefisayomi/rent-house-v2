import Page from "@/components/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";




export default function Error404 () {

    return (
        <Page title="Page Not Found" >
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
            <Image src="/error404.svg" alt="error-404" width={500} height={500} className="w-[300px]" draggable={false}/>

            <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl lowercase font-semibold">opps!!!</h1>
                <p className="text-xs text-center">The page you are looking for could not be found.</p>
            </div>

            <Link href='/'>
            <Button className="h-11">Back to home</Button>
            </Link>
            
        </div>
        </Page>
    )
}