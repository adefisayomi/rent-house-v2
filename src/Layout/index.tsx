import { ReactNode } from "react";
import Header from "./headers";
import Footer from "./footer";



export default function Layout ({children}: {children: ReactNode}) {

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className="grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}