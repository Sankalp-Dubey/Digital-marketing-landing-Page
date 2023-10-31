import { PrimaryButton } from "@/components/buttons.component";
import Iconify from "@/components/iconify";
import { SectionContainer } from "@/components/layout.component";
import { Heading } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function OurMission() {
  return (
    <div className="our-mission md:mt-0">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10">
          <div className="our-mission-img md:mt-0 mt-5">
            <Image
              alt="our-mission"
              src="/images/man-with-laptop.png"
              height={700}
              width={500}
              className="w-full"
            />
          </div>

          <div className="our-mission-content md: mb-0 mb-8">
            <Heading className="text-transform: capitalize ">
              Our <span className="text-[#f57E32] font-[800]">Mission</span>
            </Heading>
            <p className="lg:mt-8 md:mt-5 mt-3 mb-1">
              At SpireHub Softwares, our mission is to empower businesses with
              transformative digital solutions that drive growth and success. We
              are committed to harnessing the power of technology to create
              innovative web and app developments that enhance user experiences,
              streamline operations, and maximize efficiency.
            </p>
            <p className="mb-1">
              Our dedicated team of skilled professionals works tirelessly to
              understand our clients&apos; unique goals and challenges, ensuring
              that each solution we deliver is tailored to their specific needs.
            </p>
            <p>
              Through a combination of cutting-edge technology, creative design,
              and strategic thinking, we aim to be a trusted partner in our
              clients&apos; digital journey. Our mission is to pave the way for
              businesses to thrive in the ever-evolving digital landscape by
              providing them with the tools they need to succeed.
            </p>
            <PrimaryButton className="md: mt-10 mt-5">
              Schedule a Meeting
            </PrimaryButton>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default OurMission;
