"use client";
import {
  OutlinedWhiteButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import HeroSection from "@/components/common/HeroSection";
import { SectionContainer } from "@/components/layout.component";
import {
  Heading,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { PageTitle } from "@/components/typography.component";
import React, { useState } from "react";
import "../../styles/careers.css";
import Iconify from "@/components/iconify";
import Image from "next/image";
import ApplyNow from "@/components/careers/ApplyNow";
const carrerData = [
  {
    title: "BUSINESS DEVELOPMENT EXECUTIVE",
    desc: "Identify sales leads, good pitching skills to maintain relationships with new and old clients.",
    heading1: "TECHNICAL SKILLS:",
    requirment: [
      {
        reqList:
          "New Business Development (mainly international sales) for web design, SEO, Websites, Social Media, etc.",
      },
      {
        reqList: "Following up on existing leads.",
      },
      {
        reqList: "Communicating with prospects over calls/emails.",
      },
      {
        reqList: "Explaining to them our services and work plan..",
      },
      {
        reqList:
          "Schedule a call with a Sr. manager to close and eventually learn to close on deals yourself..",
      },
      {
        reqList:
          "These would mainly include sales for Online marketing plans, Websites, and other related services",
      },
      {
        reqList:
          "Identifies and proposes potential business deals by contacting potential partners, discovering and exploring new opportunities.",
      },
      {
        reqList:
          "Develop a growth strategy focused both on financial gain and customer satisfaction.",
      },
    ],

    heading2: "OTHER REQUIREMENTS:",
    ability: [
      {
        abilityList:
          "Ability to lead the team and handle pressure and demands.",
      },
      {
        abilityList: "Sound knowledge on IT concepts and latest trends.",
      },
      {
        abilityList:
          "Ability to work independently and multi task in a fast paced environment.",
      },
      {
        abilityList:
          "Strong verbal and written communication and inter personal skills.",
      },
      {
        abilityList: "An effective team player with good leading capabilities.",
      },
      {
        abilityList: "Highly organized and detail-oriented.",
      },
      {
        abilityList:
          "Promote the company&apos;s products/services addressing or predicting clients’ objectives",
      },
    ],
    heading3: "SKILLS:",
    technical:
      "Technical Knowledge of Website designing, developemnt and digital marketing services",
    position: "02",
    experince: "1+year",
  },
  {
    title: "NODE JS",
    desc: "Identify sales leads, good pitching skills to maintain relationships with new and old clients.",
    heading1: "TECHNICAL SKILLS:",
    requirment: [
      {
        reqList:
          "New Business Development (mainly international sales) for web design, SEO, Websites, Social Media, etc.",
      },
      {
        reqList: "Following up on existing leads.",
      },
      {
        reqList: "Communicating with prospects over calls/emails.",
      },
      {
        reqList: "Explaining to them our services and work plan..",
      },
      {
        reqList:
          "Schedule a call with a Sr. manager to close and eventually learn to close on deals yourself..",
      },
      {
        reqList:
          "These would mainly include sales for Online marketing plans, Websites, and other related services",
      },
      {
        reqList:
          "Identifies and proposes potential business deals by contacting potential partners, discovering and exploring new opportunities.",
      },
      {
        reqList:
          "Develop a growth strategy focused both on financial gain and customer satisfaction.",
      },
    ],
    heading2: "OTHER REQUIREMENTS:",
    ability: [
      {
        abilityList:
          "Ability to lead the team and handle pressure and demands.",
      },
      {
        abilityList: "Sound knowledge on IT concepts and latest trends.",
      },
      {
        abilityList:
          "Ability to work independently and multi task in a fast paced environment.",
      },
      {
        abilityList:
          "Strong verbal and written communication and inter personal skills.",
      },
      {
        abilityList: "An effective team player with good leading capabilities.",
      },
      {
        abilityList: "Highly organized and detail-oriented.",
      },
      {
        abilityList:
          "Promote the company&apos;s products/services addressing or predicting clients' objectives",
      },
    ],
    heading3: "SKILLS:",
    technical:
      "Technical Knowledge of Website designing, developemnt and digital marketing services",
    position: "02",
    experince: "1+year",
  },
  {
    title: "FLUTTER",
    desc: "Identify sales leads, good pitching skills to maintain relationships with new and old clients.",
    heading1: "TECHNICAL SKILLS:",
    requirment: [
      {
        reqList:
          "New Business Development (mainly international sales) for web design, SEO, Websites, Social Media, etc.",
      },
      {
        reqList: "Following up on existing leads.",
      },
      {
        reqList: "Communicating with prospects over calls/emails.",
      },
      {
        reqList: "Explaining to them our services and work plan..",
      },
      {
        reqList:
          "Schedule a call with a Sr. manager to close and eventually learn to close on deals yourself..",
      },
      {
        reqList:
          "These would mainly include sales for Online marketing plans, Websites, and other related services",
      },
      {
        reqList:
          "Identifies and proposes potential business deals by contacting potential partners, discovering and exploring new opportunities.",
      },
      {
        reqList:
          "Develop a growth strategy focused both on financial gain and customer satisfaction.",
      },
    ],
    heading2: "OTHER REQUIREMENTS:",
    ability: [
      {
        abilityList:
          "Ability to lead the team and handle pressure and demands.",
      },
      {
        abilityList: "Sound knowledge on IT concepts and latest trends.",
      },
      {
        abilityList:
          "Ability to work independently and multi task in a fast paced environment.",
      },
      {
        abilityList:
          "Strong verbal and written communication and inter personal skills.",
      },
      {
        abilityList: "An effective team player with good leading capabilities.",
      },
      {
        abilityList: "Highly organized and detail-oriented.",
      },
      {
        abilityList:
          "Promote the company&apos;s products/services addressing or predicting clients’ objectives",
      },
    ],
    heading3: "SKILLS:",
    technical:
      "Technical Knowledge of Website designing, developemnt and digital marketing services",
    position: "02",
    experince: "1+year",
  },
];

const customStyle = {
  backgroundImage: `url(/images/growbusiness.webp)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

function Careers() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const handleOpenModel = () => {
    setIsOpenModel(true);
  };
  const handleCloseModel = () => {
    setIsOpenModel(false);
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <HeroSection
        backgroundImage="/images/coding.jpg"
        secondaryImage="/images/company-bg-banner.png"
      >
        <PageTitle className="sm:pt-0 pt-12">
          Looking for a great
          <span className="font-[800] text-[#f57E32]"> Career</span>{" "}
          opportunity?
        </PageTitle>
        <p className="text-lg my-5">
          We have some excellent opening for aspiring professionals who believe
          they have the skills and potential to confrontthe ongoing revolution
          in the IT industry and across the digital marketing industry.
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
      <SectionContainer>
        {carrerData.map((card, key) => (
          <div key={key} className="careers-roll card rounded-xl">
            <div className="TechnicalSkills">
              <Heading className="w-full careers-title">{card?.title}</Heading>
            </div>
            <div className="wrap">
              <div className="business-opp">
                <h4 className="text-[#664bc4] uppercase font-bold">
                  {card?.heading1}
                </h4>
                <p>{card?.desc}</p>
                <ul>
                  {card?.requirment.map((req, key) => (
                    <li className="flex item-center gap-2" key={key}>
                      <Iconify
                        icon="mdi:arrow-right-thin"
                        fontSize={25}
                        className="text-primary"
                      />

                      {req?.reqList}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="opp-lower">
                <h4 className="text-[#664bc4] uppercase font-bold">
                  {card?.heading2}
                </h4>
                <ul>
                  {card?.ability.map((req, key) => (
                    <li className="flex item-center gap-2" key={key}>
                      <Iconify
                        icon="mdi:arrow-right-thin"
                        fontSize={25}
                        className="text-primary"
                      />

                      <p>{req.abilityList}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tech-know">
                <h4 className="text-[#664bc4] uppercase font-bold">
                  {card?.heading3}
                </h4>
                <ul>
                  <li className="flex item-center gap-2">
                    <Iconify
                      icon="mdi:arrow-right-thin"
                      fontSize={25}
                      className="text-primary"
                    />
                    {card?.technical}
                  </li>
                </ul>
              </div>
              <div className="experince">
                <p>
                  <strong>
                    Positions: {card?.position} | Experience: {card?.experince}
                  </strong>
                </p>
              </div>
              <div className="div mt-4">
                {/* <PrimaryButton handleClick={handleOpenModel}>
                  Apply Now
                </PrimaryButton> */}
                <ApplyNow btnTitle="Apply Now" />
                {/* <PrimaryButton>APPLY NOW</PrimaryButton> */}
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>
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
      <ApplyNow
        isOpenModel={isOpenModel}
        handleOpenModal={handleOpenModel}
        handleCloseModal={handleCloseModel}
      />
    </div>
  );
}

export default Careers;
