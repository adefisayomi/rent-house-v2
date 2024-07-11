import { Icon } from "@iconify/react/dist/iconify.js"



export default function SignatureFeature () {

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8">
            <div className="w-full flex flex-col items-center justify-center gap-1 ">
                <h3 className="text-xs font-medium uppercase text-primary">signature features</h3>
                <h1 className="text-2xl capitalize font-semibold ">Masterful Design: A Showcase <br /> of Quality and Craftsmanship</h1>
            </div>

            <div className="grid grid-cols-2 gap-10 w-full">
                {_signatureData.map((props, index) => <Signatures key={index} props={props} />)}
            </div>
        </div>
    )
}


const Signatures = ({props}: {props: {title: string, details: string, icon: any}}) => {

    const {details, icon, title} = props

    return (
        <div className="w-full hover:bg-primary border border-blue-300 dark:border-border p-4 rounded-3xl group bg-white dark:bg-background cursor-pointer flex items-center gap-3">
            <span className="w-full max-w-20 h-20 border dark:border-border border-blue-300 rounded-2xl bg-white dark: flex items-center justify-center">
                {icon}
            </span>

            <span className="flex flex-col items-start justify-between gap-2">
                <h1 className="text-md capitalize font-semibold group-hover:text-white">{title}</h1>
                <h1 className="text-xs capitalize text-muted-foreground group-hover:text-white">{details}</h1>
            </span>
        </div>
    )
}

const _signatureData= [
    {title: 'easy to rent', icon: <Icon icon="ic:baseline-house" className="w-10 h-10 text-primary" />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
    {title: 'carefully crafted', icon: <Icon icon="hugeicons:web-design-01" className="w-10 h-10 text-primary"  />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
    {title: 'in-built wardrobe', icon: <Icon icon="hugeicons:wardrobe-01" className="w-10 h-10 text-primary" />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
    {title: 'lavish greenary', icon: <Icon icon="hugeicons:flower-pot" className="w-10 h-10 text-primary" />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
    {title: 'spacious outdoors', icon: <Icon icon="ic:round-camera-outdoor" className="w-10 h-10 text-primary" />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
    {title: 'planned construction', icon: <Icon icon="mdi:construction-outline" className="w-10 h-10 text-primary" />, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque ab quo reiciendis nihil explicr.'},
]