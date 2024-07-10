import Logo from "@/components/Logo";
import {Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail} from 'lucide-react'
import Link from "next/link";
import { ReactNode } from "react";

type FooterProps = {
  disableNewsletter?: boolean;
};

type Menu = {
  header: string;
  list: { label: string; url: string }[];
};

const footerListMenu: Menu[] = [
  {
    header: "company",
    list: [
      { label: "about", url: "/about-us" },
      { label: "blog", url: "/blog" },
      { label: "location map", url: "/map" },
      { label: "faq", url: "/faq" },
      { label: "contact us", url: "/contact-us" },
    ],
  },
  {
    header: "services",
    list: [
      { label: "meet our agents", url: "/agents" },
      { label: "properties", url: "/listings" },
      { label: "houses", url: "/listings" },
      { label: "office space", url: "/office-space" },
      { label: "legal assistance", url: "/legal" },
    ],
  },
  {
    header: "popular search",
    list: [
      { label: "apartment low to high", url: "/agents" },
      { label: "property for rent", url: "/listings" },
      { label: "featured properties", url: "/listings" },
      { label: "office", url: "/office-space" },
      { label: "new properties", url: "/legal" },
    ],
  },
];

const ContactInfo = () => (
  <div className="flex flex-col items-start gap-4 max-w-xs w-full">
    <div className="flex flex-col gap-2">
        <Logo isDark />
        <p className="text-[10px]">We are the leading real estate marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home.</p>
    </div>
    

    <div className="space-y-2 text-sm">
      <ContactLink
        href="tel:+234-816-920-8730"
        ariaLabel="Our phone"
        title="Our phone"
        icon={<Phone className="w-4 h-4 text-primary" />}
        text="+234 234 567 823"
      />
      <ContactLink
        href="mailto:info@renthouse.com"
        ariaLabel="Our email"
        title="Our email"
        icon={<Mail className="w-4 h-4 text-primary" />}
        text="info@renthouse.com"
      />
      <ContactLink
        href="https://www.google.com/maps"
        // rel="noopener noreferrer"
        ariaLabel="Our address"
        title="Our address"
        icon={<MapPin className="w-4 h-4 text-primary" />}
        text="House 2, Clarence Avenue TX. USA"
      />
      <div className="flex items-center gap-4 pt-1">
        <span className="p-1 border-2 rounded-full border-primary w-7 h-7 flex items-center justify-center"><Facebook className="text-primary" /></span>
        <span className="p-1 border-2 rounded-full border-primary w-7 h-7 flex items-center justify-center"><Twitter className="text-primary" /></span>
        <span className="p-1 border-2 rounded-full border-primary w-7 h-7 flex items-center justify-center"><Instagram className="text-primary" /></span>
        <span className="p-1 border-2 rounded-full border-primary w-7 h-7 flex items-center justify-center"><Linkedin className="text-primary" /></span>
      </div>
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
    className="flex items-center gap-1 font-normal text-[11px]"
  >
    {icon}
    {text}
  </Link>
);

const MenuComponent = ({ menu }: { menu: Menu }) => (
  <div className="w-full">
    <h4 className="scroll-m-20 text-sm text-blue-600 capitalize font-semibold mb-4 tracking-tight">
      {menu.header}
    </h4>
    <ul className="flex flex-col items-start gap-3 text-[11px] capitalize">
      {menu.list.map((item, index) => (
        <li key={index} className="border-b w-full pb-1">
          <Link href={item.url}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = ({ disableNewsletter }: FooterProps) => (
  <div id="dark-mode" className="w-full p-2 flex flex-col items-center border-t">
    <div className="flex items-start md:flex-row flex-col justify-between gap-4 max-w-7xl w-full mt-10 pb-16">
      <ContactInfo />

      <div className="grid grid-cols-3 w-full gap-10 max-w-2xl">
        {footerListMenu.map((menu, index) => (
            <MenuComponent key={index} menu={menu} />
        ))}
      </div>

    </div>

    <div className="w-full border-t ">
      <div className="w-full  max-w-7xl mx-auto flex justify-between items-center h-11">
        <p className="text-[10px] ">RentHouse &copy; 2024 All Right Reserved.</p>

        <ul className="flex items-center gap-2 text-[10px] capitalize">
        <li><Link href='#'>terms of use</Link></li>
        <li className="w-1 h-1 rounded-full bg-blue-500" />
        <li><Link href='#'>disclaimer</Link></li>
        <li className="w-1 h-1 rounded-full bg-blue-500" />
        <li><Link href='#'>privacy policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
