import { PrimaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

const WeHelp = () => {
  return (
    <section className="bg-[#ede8f7]">
      <SectionContainer className="w-full flex justify-between items-center">
        <div className="business-goal-container flex flex-col md:flex-row justify-between items-center">
          <div className="goal-content-container flex flex-col gap-10 flex-1 mb-10">
            <SectionTitle>
              <span>
                We Help Our Clients To{" "}
                <span className="font-[800]">Achieve </span> Their Business Goal
              </span>
            </SectionTitle>
            <p className="text-lg">
              Spirehub Softwares is an established offshore software devel-
              opment company based in India that offers software development
              services, mobile app development, technology consulting, and IT
              outsourcing to clients worldwide. By accelerating digital
              innovation, we help enterprises transform their businesses,
              allowing agile busi- ness platforms and shortening time-to-market
              through our distrib- uted project management capabilities
            </p>
            <PrimaryButton>Schedule a Meeting</PrimaryButton>
          </div>
          <div className="goal-img-container flex-1 hidden md:flex justify-center mb-10">
            <Image
              src="/images/man-with-laptop.png"
              className="w-auto h-full"
              alt=""
              height={600}
              width={600}
            ></Image>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default WeHelp;
