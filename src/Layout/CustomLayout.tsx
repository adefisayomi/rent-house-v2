import { ReactNode } from "react";
import Layout from ".";
import BreadcrumbHeader from "@/components/Breadcrumbs";

export default function CustomLayout ({title, children, bgImage}: {title: string, children: ReactNode, bgImage: string}) {

    return (
        <Layout>
            <div className="dark:bg-background bg-[#fbfcfe]">
                <header 
                    className="w-full flex items-center justify-center h-72 flex-col gap-4 relative"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <h1 className="text-4xl capitalize font-semibold z-10 text-white">{title}</h1>
                    <div className="z-10"><BreadcrumbHeader className=" text-white" /></div>
                </header>

                <div>
                    {children}
                </div>
            </div>
        </Layout>
    )
}
