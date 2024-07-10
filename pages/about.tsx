import Page from "@/components/page";
import CustomLayout from "@/src/Layout/CustomLayout";
import HomeGallery from "@/src/sections/Home/HomeGallery";
import TestimonialSlider from "@/src/sections/about-us/TestimonialSlider";
import { ReactNode } from "react";

export default function AboutUs() {
  return (
    <Page title="About Us">
      <div className="w-full">
        <HomeGallery images={items} />

        <div className="w-full h-[90vh] flex items-center justify-center bg-slate-100 dark:bg-background">
          <div className="w-full h-full relative flex items-center">
            <div className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-slate-100 via-slate-100/0 to-transparent dark:from-background dark:via-background/0 z-10" />
            <TestimonialSlider />
            <div className="absolute right-0 top-0 h-full w-[50%] bg-gradient-to-l from-slate-100 via-slate-100/0 to-transparent dark:from-background dark:via-background/0 z-10" />
          </div>
        </div>
      </div>
    </Page>
  );
}

AboutUs.getLayout = (page: ReactNode) => (
  <CustomLayout
    title="About us"
    bgImage="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  >
    {page}
  </CustomLayout>
);

const items = [
  { image: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/link1" },
  { image: "https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D", link: "/link2" },
  { image: "https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/link3" },
  { image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D", link: "/link4" },
  { image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D", link: "/link5" }
];
