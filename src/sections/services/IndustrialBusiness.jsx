import { PrimaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import { SectionTitle } from "@/components/typography.component";
import Image from "next/image";
import React from "react";

function IndustrialBusiness() {
  return (
    <div className="industries mt-[-20px] md:mt-0">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10">
          <div className="industries-content md: mb-0 mb-8">
            <SectionTitle className="text-transform: capitalize ">
              We <span className="text-[#f57E32] font-[800]">Transform</span>{" "}
              All <br /> Industries And Business Process.
            </SectionTitle>
            <p className="mb-2 mt-3">
              Spirehub Softwares offers robust and scalable web application
              development services across various platform and industry
              verticals. We provide complete end-to-end website development
              services for mission-critical web applications demanding superior
              performance.
            </p>
            <PrimaryButton className="md: mt-10 mt-5">
              Schedule a Meeting
            </PrimaryButton>
          </div>
          <div className="industries-img md:mt-0 mt-5">
            <Image
              alt="industries"
              src="/images/spiredeveloper.png"
              height={700}
              width={500}
              className="w-full"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default IndustrialBusiness;
