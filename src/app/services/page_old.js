import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import CompanyInformation from "@/sections/services/CompanyInformation";
import CompanyServices from "@/sections/services/CompanyServices";
import React from "react";
import "../../styles/services.css";
import Technologies from "@/sections/services/Technologies";
import IndustrialBusiness from "@/sections/services/IndustrialBusiness";
import DesignAndManagement from "@/sections/services/DesignAndManagement";
import PeopleSays from "@/components/common/PeopleSays";
import { SectionContainer } from "@/components/layout.component";
import OurWork from "@/sections/services/OurWork";
import Image from "next/image";

function Services() {
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
          Web Dessign & <br />
          <span className="font-[800]"> Development</span>
        </PageTitle>
        <p className="text-lg my-5">
          Spirehub Softwares offers robust and scalable web application
          development services across various platforms and industry verticals.
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
      ></CurveShape>
      <CompanyInformation />
      <CompanyServices />
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[110px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#f4f5fc"
        thirdColor="#f4f5fc"
        fourthColor="#f4f5fc"
      ></CurveShape>
      <Technologies />
      <CurveShape
        className="sm:-mt-[90px] -mt-[100px]  arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#f4f5fc"
        secondColor="#f4f5fc"
        thirdColor="#ffffff"
        fourthColor="transparent"
      />

      {/* OUR WORK */}
      <OurWork />
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[140px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b9d6f3"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />
      <IndustrialBusiness />
      <CurveShape
        className="-mt-[60px] sm:-mt-[80px] md:-mt-[140px] lg:-mt-[140px]"
        curveD="M0,64L120,85.3C240,107,480,149,720,154.7C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b9d6f3"
        thirdColor="#ffffff"
        fourthColor="#ffffff"
      />
      <DesignAndManagement />
      <CurveShape
        className="-my-[100px] md:-mt-[90px] sm:-mt-[70px] mb-[0px]  arc-curve"
        curveD="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        firstColor="#ffffff"
        secondColor="#b68ee5"
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
        className="bg-lite-gray pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] -mb-[110px]"
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
                src="/images/spirehubservices-stripe.png"
                alt="call-us"
                // style={{ width: "70%" }}
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

export default Services;
