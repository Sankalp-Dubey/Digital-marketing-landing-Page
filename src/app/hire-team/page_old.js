import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import OurValuableClients from "@/components/common/Solution";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import HiringForm from "@/sections/hireresources/HiringForm";
import PeopleSays from "@/components/common/PeopleSays";
import React from "react";
import ExpertResources from "@/sections/hireresources/ExpertResources";
import Image from "next/image";

export const metadata = {
  title: "Hire our dedicated development team services | SpireHubs",
  description:
    "Looking to Hire developers, Designers, and programmers in India? SpireHub Software provide onsite as well as offshore dedicated development team services ",
};

function HireResources() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/coding.jpg"
        secondaryImage="/images/manwithlaptop.png"
      >
        <PageTitle>
          Hire Dediacted
          <br />
          <span className="font-[800]"> Resources</span>
        </PageTitle>
        <p className="text-lg my-5">
          Hire dedicated developers, designers and programmers who work on
          hourly, full-time, or part-time basis of your specific project needs.
        </p>
        <OutlinedWhiteButton url="/contact-us" className="mt-8">
          Contact Us
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

      {/* FORM  */}
      <HiringForm />

      <CurveShape
        className="-mt-[10px]  testimonial-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#bb68kk"
        thirdColor="#ffffff"
        fourthColor="#f3f5fc"
      />
      <ExpertResources />
      {/* OUR VALUABLE CLIENTS */}
      <OurValuableClients className="pt-8 sm:pb-28 pb-20" />
      <CurveShape
        className="-my-[100px] md:-mt-[90px] sm:-mt-[70px] mb-[0px] arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#04d5d5"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />
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
        className="bg-lite-gray pb-[100px] lg:pb-12 lg:-mb-[120px] md:-mb-[80px] sm:-mb-[70px] -mb-[80px] pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px]"
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
                  Want to <span className="font-[800]">grow</span> your
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
                src="/images/spirehubservices.png"
                // width={"70%"}
                alt="our-services"
                height={490}
                width={426}
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}

export default HireResources;
