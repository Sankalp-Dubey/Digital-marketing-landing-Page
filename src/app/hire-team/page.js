import "../../styles/hire_resources.css";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import React from "react";
import HireProgrammers from "@/components/hire/HireProgrammers";
import Image from "next/image";

import EmpoweringBusiness from "@/components/hire/EmpoweringBusiness";
import HireHeroSection from "@/components/hire/HireHeroSection";
import ToolsTab from "@/components/home/ToolsTab";
import HireFaqs from "@/components/hire/HireFaqs";
import GlobalBrands from "@/components/hire/GlobalBrands";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";

export const metadata = {
  title: "Hire our dedicated development team services | SpireHubs",
  description:
    "Looking to Hire developers, Designers, and programmers in India? SpireHub Software provide onsite as well as offshore dedicated development team services.",
  alternates: {
    canonical: "https://www.spirehubs.com/hire-team",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hire our dedicated development team services | SpireHubs",
    description:
      "Looking to Hire developers, Designers, and programmers in India? SpireHub Software provide onsite as well as offshore dedicated development team services.",
    url: "https://www.spirehubs.com/hire-team",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

function HireResources() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HireHeroSection backgroundImage="/images/hire-resources-prg/hire-program-bg.jpg">
        <PageTitle className="text-center">
          Recruit Proficient{" "}
          <span className="text-[#f57E32] font-[800]">Coders</span> to Enhance
          Your Company
        </PageTitle>
        <p className="text-lg text-center my-5">
          Looking for top-tier programmers? Our team of expert coders delivers
          unparalleled solutions. Elevate your project with our programming
          prowess Contact us now for exceptional results!
        </p>
        <HireProgrammers btnTitle="Hire Programmers" />
        <div className="mt-10 w-full flex align-center justify-center gap-8 rate-boxes">
          <div className="rate-item">
            <Image
              src="/images/hire-resources-prg/clutch-rate.png"
              alt="Clutch"
              width={193}
              height={100}
              className="m-auto mb-4"
            />
            <p>We are rated 4.9 out of 5 on average across 120 reviews</p>
          </div>
          <div className="rate-item">
            <Image
              src="/images/hire-resources-prg/good-firm-rate.png"
              alt="Goodfirm"
              width={180}
              height={100}
              className="m-auto mb-4"
            />
            <p>We are rated 4.9 out of 5 on average across 169 reviews</p>
          </div>
        </div>
      </HireHeroSection>
      <section className="bg-slate-100 py-7">
        <GlobalBrands />
      </section>

      <section className="bg-slate-100 pb-8">
        <SectionContainer>
          <h2 className="text-center text-[28px] sm:text-[30px] md:text-[32px] text-dark-teal font-semibold pt-2 pb-10">
            Spirehubs Easy{" "}
            <span className="font-[800] text-[#f57E32]">Hiring</span> Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="px-3">
              <div className="img-sec">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="requirement"
                  width={80}
                  height={100}
                  className="m-auto mb-8"
                />
              </div>
              <h3 className="hp-btn py-3 px-4 text-lg font-bold">
                Share the job description
              </h3>
              <p className="desc pt-6">
                Provide us with the job description, including roles,
                responsibilities, required skills and experience, and your
                budget.
              </p>
            </div>
            <div className="px-3">
              <div className="img-sec">
                <Image
                  src="/images/hire-resources-prg/review-talent.png"
                  alt="talent"
                  width={80}
                  height={100}
                  className="m-auto mb-8"
                />
              </div>
              <h3 className="hp-btn py-3 px-4 text-lg font-bold">
                Matchmake and review
              </h3>
              <p className="desc pt-6">
                Within 48 business hours, we will match the best-fit profile/s
                and share them with you for review.
              </p>
            </div>
            <div className="px-3">
              <div className="img-sec">
                <Image
                  src="/images/hire-resources-prg/short-interview.png"
                  alt="interview"
                  width={80}
                  height={100}
                  className="m-auto mb-8"
                />
              </div>
              <h3 className="hp-btn py-3 px-4 text-lg font-bold">
                Shortlist & Interview
              </h3>
              <p className="desc pt-6">
                Once you have selected a suitable programmer, we will schedule
                interviews based on availability.
              </p>
            </div>
            <div className="px-3">
              <div className="img-sec">
                <Image
                  src="/images/hire-resources-prg/mang-onboarding.png"
                  alt="onboarding"
                  width={80}
                  height={100}
                  className="m-auto mb-8"
                />
              </div>
              <h3 className="hp-btn py-3 px-4 text-lg font-bold">
                Onboard & Manage
              </h3>
              <p className="desc pt-6">
                We will take care of all the legalities and assist you with
                smooth onboarding and talent management.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <HireProgrammers btnTitle="Hire Top Programmers" />
          </div>
        </SectionContainer>
      </section>

      <section className="py-12">
        <SectionContainer>
          <h2 className="text-center text-[28px] sm:text-[30px] md:text-[32px] text-dark-teal font-semibold pt-2 pb-4">
            Hire a Developer from Spirehubs to Enhance Your{" "}
            <span className="font-[800] text-[#f57E32]">
              Website&apos;s Productivity
            </span>{" "}
            & <span className="font-[800] text-[#f57E32]">Features</span>.
          </h2>
          <p className="text-center text-xl pb-10 m-auto max-w-5xl">
            Our developers assure flawless excellence, punctual delivery, and
            smooth communication for the solutions we provide, be it web design,
            software engineering, or mobile app creation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-auto max-w-5xl">
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="Goodfirm"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">Web Design & Development</h3>
                <p className="desc pt-3">
                  SpireHub Softwares excels in web design and development,
                  creating captivating websites that merge aesthetic appeal with
                  seamless functionality for an exceptional user experience.
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="Goodfirm"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">
                  Web Application Development
                </h3>
                <p className="desc pt-3">
                  SpireHub Softwares excels in web application development,
                  creating tailored solutions that combine functionality and
                  aesthetics to meet clients specific needs and deliver
                  exceptional user experiences.
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="Goodfirm"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">Mobile App Development</h3>
                <p className="desc pt-3">
                  SpireHub Softwares offers expert mobile app development
                  services, creating innovative and user-friendly apps tailored
                  to clients needs, ensuring seamless functionality and engaging
                  experiences.
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="Goodfirm"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">E-commerce Development</h3>
                <p className="desc pt-3">
                  SpireHub Softwares excels in E-commerce development, creating
                  seamless online shopping experiences that drive sales through
                  user-friendly interfaces, secure transactions, and optimized
                  functionality.
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="Goodfirm"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">
                  Digital Marketing Services
                </h3>
                <p className="desc pt-3">
                  SpireHub Softwares offers comprehensive digital marketing
                  services, including SEO, social media management, PPC
                  advertising, and content strategy, to enhance online
                  visibility and drive business growth.
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="webimg-sec mr-4">
                <Image
                  src="/images/hire-resources-prg/sharejob-requirement.png"
                  alt="sharejob"
                  width={100}
                  height={100}
                  className="..."
                />
              </div>
              <div className="web-desc">
                <h3 className="text-xl font-bold">
                  Software Maintenance Services
                </h3>
                <p className="desc pt-3">
                  SpireHub Softwares offers comprehensive web and software
                  maintenance services, ensuring smooth functionality, security
                  updates, and ongoing improvements to optimize the performance
                  and user experience.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <EmpoweringBusiness />

      <section className="py-8">
        <ToolsTab />
      </section>

      <section className="bg-slate-100 py-12 relative">
        <div className="vetting-sec w-[350px] absolute top-[22%] left-[50%] translate-x-[-50%] translate-y-[0%]">
          <Image
            src="/images/hire-resources-prg/vetting-image-spirehubs.png"
            alt="sharejob"
            width={334}
            height={100}
            className="..."
          />
        </div>
        <SectionContainer>
          <h2 className="text-center text-[28px] sm:text-[30px] md:text-[32px] text-dark-teal font-semibold pt-2 pb-4">
            Spirehubs <span className="font-[800] text-[#f57E32]">Vetting</span>{" "}
            Process
          </h2>
          <p className="text-center text-xl pb-10 m-auto max-w-5xl">
            Our thorough vetting process covers every aspect of a
            programmer&apos;s professional journey.
          </p>
          <div className="vetting-flow mt-[60px] m-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div id="step1" className="step-wrap">
                <div className="vetstep-info">
                  <div className="vetstep-heading">
                    <h3 className="vetsptep-text">
                      Profile Screening Shortlisting
                    </h3>
                  </div>
                  <div className="vetstep-desc">
                    <p>
                      We review all applications against our minimum criteria
                      and conduct a holistic background check to ensure the
                      candidate fits our team well.
                    </p>
                  </div>
                </div>
              </div>
              <div id="step2" className="step-wrap">
                <div className="vetstep-info">
                  <div className="vetstep-heading">
                    <h3 className="vetsptep-text">Language Proficiency</h3>
                  </div>
                  <div className="vetstep-desc">
                    <p>
                      We use AI-powered communication assessment tests to
                      evaluate a candidate&apos;s language proficiency,
                      including reading, writing, pronunciation, clarity,
                      fluency, and nuances of speech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <h2>grtrytyryrt</h2>
              <h2>rytyrtyrtrt</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <h2>grtrytyryrt</h2>
              <h2>rytyrtyrtrt</h2>
            </div>
          </div>
          <div className="centerBtn talent-factors section-cta mt-[600px]"></div>
        </SectionContainer>
      </section>

      <section className="py-12">
        <SectionContainer>
          <h2 className="text-center text-[28px] sm:text-[30px] md:text-[32px] text-dark-teal font-semibold pt-2 pb-6">
            Frequently Asked{" "}
            <span className="font-[800] text-[#f57E32]">Questions</span>
          </h2>
          <HireFaqs />
        </SectionContainer>
      </section>
      <CurveShape
        className=""
        firstColor="#f3f5fc"
        secondColor="#f3f5fc"
        thirdColor="#f3f5fc"
        fourthColor="#f3f5fc"
        curveD="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <section
        className="bg-lite-gray pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
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
                height={500}
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

export default HireResources;
