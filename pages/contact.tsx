
import Page from "@/components/page"
import CustomLayout from "@/src/Layout/CustomLayout"
import ContactUsForm from "@/src/sections/contact-us/contactForm"
import { Mail, MapPin, Phone, Timer } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ReactNode } from "react"
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });



export default function Contact () {

    return (
        <Page title="Contact Us">
            <div className="w-full ">
                <div className="w-full max-w-7xl min-h-[80vh] py-20 mx-auto flex items-center justify-evenly gap-5">
                    <ContactInfo />
                    <ContactUsForm />
                </div>

                <div>
                    <LeafletMap />
                </div>
            </div>
        </Page>
    )
}

Contact.getLayout = (page: ReactNode) => (
    <CustomLayout 
        title="contact us"
        bgImage='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    >
        {page}
    </CustomLayout>
)


const ContactInfo = () => (
    <div className="flex flex-col items-start gap-4 max-w-[350px] w-full border rounded-2xl px-8 py-16 h-[70vh] bg-white dark:bg-background">
      <div className="flex flex-col gap-1 items-start border-b pb-5 w-full">
          <h4 className="text-xs uppercase text-primary">to know more about our properties</h4>
          <h1 className="text-2xl capitalize font-semibold">react out to us</h1>
      </div>
      
  
      <div className="space-y-2 text-sm w-full">
        <ContactLink
          href="tel:+234-816-920-8730"
          ariaLabel="Our phone"
          title="phone"
          icon={<Phone className="w-4 h-4 text-primary" />}
          text="+234 234 567 823"
        />
        <ContactLink
          href="mailto:info@renthouse.com"
          ariaLabel="Our email"
          title="email"
          icon={<Mail className="w-4 h-4 text-primary" />}
          text="info@renthouse.com"
        />
        <ContactLink
          href="https://www.google.com/maps"
          ariaLabel="Our address"
          title="address"
          icon={<MapPin className="w-4 h-4 text-primary" />}
          text="House 2, Clarence Avenue TX. USA"
        />
        <ContactLink
          href="https://www.google.com/maps"
          ariaLabel="working hour"
          title="working hour"
          icon={<Timer className="w-4 h-4 text-primary" />}
          text="24 hours / all day"
        />
      </div>
    </div>
  );
  
  const ContactLink = ({
    href,
    ariaLabel,
    title,
    icon,
    text,
  }: {
    href: string;
    ariaLabel: string;
    title: string;
    icon: ReactNode;
    text: string;
  }) => (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={title}
      className="flex items-center gap-2 font-normal text-xs w-full py-3 border-b"
    >
      <span className="w-8 h-8 flex items-center justify-center border rounded-full border-primary">{icon}</span>
      <span className="flex flex-col items-start gap-1">
        <h2 className="text-xs font-semibold capitalize">{title}</h2>
        <h3 className="text-[11px] lowercase text-muted-foreground">{text}</h3>
      </span>
    </Link>
  );