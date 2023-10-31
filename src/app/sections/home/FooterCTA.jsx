"use client";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";
import { SectionContainer } from "@/components/layout.component";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import Image from "next/image";

export default function FooterCTA() {
  const customStyle = {
    backgroundImage: `url(/images/growbusiness.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <section
      className="bg-lite-gray pb-[100px] lg:pb-12 pt-5 lg:pt-20 -mt-5 sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px]"
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
                Want to <span className="font-[800] text-[#f57E32]">grow</span>{" "}
                your business?
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
  );
}
