// import CurveShape from "@/components/common/CurveShape";

import "../styles/home.css";

import {
  OutlinedWhiteButton,
  PrimaryButton,
} from "@/components/buttons.component";
import HomePageHeroSection from "@/components/common/HomePageHeroSection";
import { PageTitle } from "@/components/typography.component";
import Services from "@/sections/home/Services";
import ToolsTechnologies from "@/sections/home/Feature";
import WorkProcess from "@/sections/home/WorkProcess";
import Testimonial from "@/components/home/Contact";
import PeopleSays from "@/components/common/PeopleSays";
import OurPortfolio from "@/sections/home/OurPortfolio";
import OurValuableClients from "@/components/common/Solution";
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
    <main className=" mt-1">
      {/* HERO SECTION  */}
      <HomePageHeroSection secondaryImage="/images/imac.webp">
        <PageTitle className="w-[70%] ">
          <span className="font-[800] text-[#f57E32]"> Ready Made</span>{" "}
          Solutions We Deliver
        </PageTitle>
        <p className="text-lg my-5   w-[70%]">
          We have the widest range of reday-made solutions, customizable per
          your business requirments.
        </p>
        <PrimaryButton url="#" className="mt-8">
          Book Free Demo
        </PrimaryButton>
      </HomePageHeroSection>
      {/* <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[140px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#0000ff"
        thirdColor="#ffffff"
        fourthColor="#ede8f7"
      /> */}
      {/* <ProjectDone /> */}
      {/* <CurveShape
        className="-my-[100px] lg:-my-[130px] arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#bb68kk"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      /> */}

      {/* HOW WE CAN HELP */}
      {/* <section className="py-2 md:py-10"><Services /></section> */}
      {/* <CurveShape
        className=""
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#0000ff"
        thirdColor="#ffffff"
        fourthColor="#f3f5fc"
      /> */}
      <SoftwareDetail />
      {/* <CurveShape
        className="md:-mt-[195px] arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#11b7bc"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      /> */}

      <ToolsTechnologies />
      
      {/* <CurveShape firstColor="#ffffff" secondColor="#046005" /> */}

      {/* OUR PORTFOLIO  */}
     
      {/* <CurveShape
        className="-mt-[100px] testimonial-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#bb68kk"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      /> */}
    
      

      {/* OUR VALUABLE CLIENTS  */}
      <OurValuableClients />
    <Testimonial /> 
    <OurPortfolio />
   

      {/* FOR DYNAMIC THE VALUABLE CLIENTS */}
      {/* <OurValuableClientsDynamic /> */}
      {/* peoplesays */}
      <PeopleSays />
      <WorkProcess />
      {/* <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      /> */}
      {/* <FooterCTA /> */}
    </main>
  );
}
