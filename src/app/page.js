import "../styles/home.css";

import {
  OutlinedWhiteButton,
  PrimaryButton,
} from "@/components/buttons.component";
import HomePageHeroSection from "@/components/common/HomePageHeroSection";
import { PageTitle } from "@/components/typography.component";
import Services from "@/sections/home/Services";
import Feature from "@/sections/home/Feature";
import Faq from "@/sections/home/Faq";
import Contact from "@/components/home/Contact";
import OurProject from "@/components/common/OurProject";
import Service from "@/sections/home/Service";
import Solution from "@/components/common/Solution";
import BusinessGoal from "@/sections/home/BusinessGoal";
import ProjectDone from "@/sections/home/ProjectDone";
import FooterCTA from "@/sections/home/FooterCTA";
import SoftwareDetail from "@/sections/home/SoftwareDetail";
import OurValuableClientsDynamic from "@/components/common/OurValuableClientsDynamic";

export const metadata = {
  title: "Web & Mobile App Development Company in India | SpireHub",
  description:
    "SpireHubs offers end-to-end web mobile application development services such as business needs & requirements analysis & custom design architecture. ",
  alternates: {
    canonical: "https://www.spirehubs.com",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web & Mobile App Development Company in India | SpireHub",
    description:
      "SpireHubs offers end-to-end web mobile application development services such as business needs & requirements analysis & custom design architecture. ",
    url: "https://www.spirehubs.com",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className=" mt-1 w-full">
      {/* HERO SECTION  */}
      <div className=" ">
      <div className="relative ">
        <img
          className="w-full"
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-creative-cloud-technology-hand-poster-background-image_205864.jpg"
          alt="img"
        />
        <div className="absolute top-0 md:top-1/4 md:px-5 w-1/2 transform container   z-10">
          <h1 className="text-white font-semibold md:font-bold  md:text-2xl lg:text-5xl p-4">Your Dedicated Web Development ExpertJust a Click Away! </h1>
        </div>
      </div>
      </div>

      <SoftwareDetail />
      <Feature />
      <Contact />
      <Solution />
      <Service />
      <OurProject />
      {/* <Faq /> */}
    </main>
  );
}
