import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";



export default function GlobalProperties () {

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <div></div>

                <div className="w-full flex flex-col items-startjustify-center gap-1 ">
                    <h3 className="text-xs font-medium uppercase text-primary">global properties</h3>
                    <h1 className="text-3xl capitalize font-bold ">Welcome to Our Properties <br /> with all the Convenience</h1>
                    <p className="text-xs text-muted-foreground pt-4">Arcu ac tortor dignissim convallis aenean et tortor at.Ac turpis egestas sed tempus urna et. Quisque eu pellentesque erat, eget bibendum ipsum. Cras euismod massa sed lacus lacinia, quis porta libero consectetur. In pulvinar lobortis eros vitae dapibus. Vestibu</p>

                    <div className="flex w-full items-center gap-4 border-t py-10 mt-5">
                        <Statcard label='10k' details='satisfied customers' />
                        <Statcard label='8+' details='years of experience' />
                        <Statcard label='200k' details='established housing' />
                    </div>

                    <div className="flex items-center gap-4 w-full">
                        <Button className="h-9 w-full max-w-[250px]">Explore Properties</Button>

                        <Link
                            href="tel:+234-812-345-6789"
                            className="flex items-center gap-3"
                            >
                            <span className="w-8 h-8 flex items-center justify-center border rounded-full border-primary">
                                <Phone className="w-4 h-4"/>
                            </span>
                            <span className="flex flex-col items-start gap-1">
                                <h2 className="text-xs font-semibold capitalize">call us anytime</h2>
                                <h3 className="text-[11px] lowercase text-muted-foreground">+234-812-345-6789</h3>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Statcard = ({label, details}: {label: string, details: string}) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-default w-full max-w-fit p-3 h-[100px] gap-1 rounded-2xl bg-muted">
            <h1 className="text-3xl font-bold uppercase">{label}</h1>
            <p className="text-xs capitalize text-muted-foreground text-center">{details}</p>
        </div>
    )
}