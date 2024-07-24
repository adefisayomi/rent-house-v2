import { ReactNode } from "react";
import Header from "./headers";
import Footer from "./footer";
import PageTransition from "@/components/PageTransition";



export default function Layout ({children}: {children: ReactNode}) {

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className="grow">
                <PageTransition>
                    {children}
                </PageTransition>
            </div>
            <Footer />
        </div>
    )
}