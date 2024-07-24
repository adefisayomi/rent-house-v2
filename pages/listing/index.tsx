import Layout from "@/src/Layout"
import { ReactNode } from "react"



export default function Listing () {

    return (
        <div>
            Listing Page
        </div>
    )
}

Listing.getLayout = (page: ReactNode) => <Layout>{page}</Layout>