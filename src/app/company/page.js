import React from "react";
import HeroSection from "@/components/common/HeroSection";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import {
  Heading,
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { SectionContainer } from "@/components/layout.component";
import CurveShape from "@/components/common/CurveShape";
import "../../styles/company.css";
import OurVision from "@/sections/company/OurVision";
import OurMission from "@/sections/company/OurMission";
import OurCoreValues from "@/sections/company/OurCoreValues";
import PeopleSays from "@/components/common/PeopleSays";
import FunctionAndEvents from "@/sections/company/FunctionAndEvents";
import CompanyDetail from "@/sections/company/CompanyDetail";
import Image from "next/image";

export const metadata = {
  title: "SpireHub Softwares | A Software Development Company",
  description:
    "SpireHub Softwares IT firm specializing in Business optimization solutions, Web Design & Development Services in India, and mobile app services. Contact Now!",
  alternates: {
    canonical: "https://www.spirehubs.com/company",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SpireHub Softwares | A Software Development Company",
    description:
      "SpireHub Softwares IT firm specializing in Business optimization solutions, Web Design & Development Services in India, and mobile app services. Contact Now!",
    url: "https://www.spirehubs.com/company",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

function Company() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/coding.jpg"
        secondaryImage="/images/company-bg-banner.png"
      >
        <PageTitle>
          Putting our clients at the
          <span className="font-[800] text-[#f57E32]"> center</span> of
          everything we do
        </PageTitle>
        <p className="text-lg my-5">
          Collaboration lies at the heart of our success. We value the diverse
          perspectives nad expertise of our team members, recognizing the
          together, we can accomplish more.
        </p>
        <OutlinedWhiteButton url="/company" className="mt-8">
          Let&apos;s Work Together
        </OutlinedWhiteButton>
      </HeroSection>

      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[110px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b387e3"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />
      {/* EMPOWERING INNOVATIONS */}
      <SectionContainer>
        <CompanyDetail />
      </SectionContainer>
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[140px] lg:-mt-[140px] "
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#5d99e4"
        thirdColor="#ffffff"
        fourthColor="#f4f5fc"
      />

      {/* OUR VISION */}
      <OurVision />
      <CurveShape
        className="-my-[100px] md: -mt-[90px] sm: -mt-[70px] arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#a97cde"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />

      {/* OUR MISSION */}
      <OurMission />

      <CurveShape
        className="-my-[100px] md: -mt-[90px] sm: -mt-[70px]  arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#04d5d5"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />

      {/* OUR CORE VALUES */}
      <OurCoreValues />
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[110px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b387e3"
        thirdColor="#ffffff"
        fourthColor="#f3f5fc"
      />

      {/* FUNCTIONS AND EVENTS */}
      <FunctionAndEvents />
      <CurveShape
        className="-my-[100px] md: -mt-[90px] sm: -mt-[70px] mb-[0px]  arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#04d5d5"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />

      {/* PEOPLE SAYS*/}
      <PeopleSays />
      <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <section
        className="bg-lite-gray grow-business-company pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
        style={customStyle}
      >
        <SectionContainer>
          <div className="business-grow-container flex justify-between">
            <div className="w-full flex flex-col gap-1 lg:gap-2 items-center justify-center text-center">
              <SectionSubTitle>
                <span className="uppercase text-left">
                  Let&apos;s get started
                </span>
              </SectionSubTitle>
              <SectionTitle>
                <span>
                  Want to{" "}
                  <span className="font-[800] text-[#f57E32]">grow</span> your
                  business?
                </span>
              </SectionTitle>
              <SectionSubTitle>
                <span className="normal-case">
                  Book a call to see how can I help your business grow.
                </span>
              </SectionSubTitle>
              <div className="btn-container flex gap-5 mt-5">
                <PrimaryButton className="">Schedule a meeting</PrimaryButton>
                <SecondaryButton className="">Book a call</SecondaryButton>
              </div>
            </div>
            <div className="w-full img-container hidden lg:block ">
              <Image
                src="/images/spirehubservices-stripe.png"
                alt="call-us"
                height={490}
                width={426}
                // style={{ width: "70%" }}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}

export default Company;
