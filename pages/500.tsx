import Page from "@/components/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";




export default function Error500 () {

    return (
        <Page title="Server error" >
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
            <Image src="/error500.svg" alt="error-404" width={600} height={600} className="w-[400px]" draggable={false}/>

            <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl capitalize font-semibold">internal server error!</h1>
            </div>

            <Link href='/'>
            <Button className="h-11">Back to home</Button>
            </Link>
            
        </div>
        </Page>
    )
}