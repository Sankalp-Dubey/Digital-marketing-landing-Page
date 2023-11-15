"use client";

import "../styles/home.css";
import { motion } from 'framer-motion';


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
          src="https://t3.ftcdn.net/jpg/04/42/44/98/240_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg"
          alt="img"
        />
        <div className="absolute top-0 md:top-1/4 md:px-5 w-1/2 transform container   z-10">
          <h1 style={{letterSpacing:"0.5px"}} className="text-white font-semibold md:font-bold font-sans  md:text-2xl lg:text-4xl md:p-4 p-2">Your Dedicated Web Development Expert Just a Click Away! </h1>
          <div className="md:py-7 md:px-4 px-2">
          <PrimaryButton className="  mt-5" url="/portfolios">
                Book Free Demo 
                </PrimaryButton>
        </div>
        </div>
        
      </div>
      </div>

      <SoftwareDetail />
      <Feature />
      <Contact />
      <Solution />
      <Service />
      <OurProject />
      <Faq />
    </main>
  );
}
