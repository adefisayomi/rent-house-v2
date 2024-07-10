import { ReactNode } from "react"



export default function WhyChooseUs () {

    return (
        <div id="dark-mode" className="w-full h-[70vh] border-y">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
                <div className="flex flex-col items-center gap-1 max-w-lg">
                    <h4 className="uppercase text-xs ">customer satisfaction</h4>
                    <h1 className="capitalize font-semibold text-[33px] text-primary">why choose us?</h1>
                    <p className="text-[11px] text-center">Welcome to RentHouse, your ultimate destination for hassle-free renting in Lagos. With our comprehensive range of services and commitment to customer satisfaction, choosing us means choosing convenience, reliability, and peace of mind.</p>
                </div>

                <div className="flex items-start justify-between gap-3 mt-10">
                    {
                        _services.map((service, index) => (
                            <ServiceComponent title={service.title} details={service.details} icon={service.icon} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const ServiceComponent = ({details, icon, title} : {title: string, icon: any, details: string}) => {
    return (
        <div className=" flex items-center flex-col gap-4 w-full max-w-[250px] hover:border-primary border-2 border-transparent cursor-default duration-300 hover:scale-105 rounded-lg p-4 aspect-square">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary">
                {icon}
            </div>
            <h4 className="capitalize font-semibold text-primary text-xs ">{title}</h4>
            <p className="text-xs text-center">{details}</p>
        </div>
    )
}

const _services = [
    {title: 'Seamless Experience', icon: <img src="/icon3.svg" alt="icon" className="w-6 h-6" /> , details: 'Ensuring a smooth and hassle-free renting process from start to finish.'},
    {title: 'Client-Focused Approach', icon: <img src="/icon2.svg" alt="icon" className="w-6 h-6"/>, details: 'Putting tenants needs and interests at the forefront of our services.'},
    {title: ' Tenant Advocacy', icon: <img src="/icon1.svg" alt="icon" className="w-6 h-6"/>, details: 'Acting as advocates for tenants rights and interests in all rental matters.'},
    {title: 'Personalised Support', icon: <img src="/icon4.svg" alt="icon" className="w-6 h-6"/>, details: 'Tailored assistance to meet individual tenant needs and preferences.'},
]