import Page from "@/components/page";
import Layout from "@/src/Layout";
import HeroSection from "@/src/sections/Home/HeroSection";
import HomeGallery from "@/src/sections/Home/HomeGallery";
import WhyChooseUs from "@/src/sections/Home/WhyChooseUs";
import { ReactNode } from "react";


export default function Home() {
  return (
    <Page title=''>
      <div>
        <HeroSection />
        <WhyChooseUs />
        <HomeGallery images={items.slice(0, 5)} />
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

const items = [
  { image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/link1' },
  { image: 'https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D', link: '/link2' },
  { image: 'https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/link3' },
  { image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D', link: '/link4' },
  { image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D', link: '/link5' }
];