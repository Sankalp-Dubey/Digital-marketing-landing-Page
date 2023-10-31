import React from "react";
import { SectionContainer } from "../layout.component";
import { SectionSubTitle, SectionTitle } from "../typography.component";
import { PrimaryButton, SecondaryButton } from "../buttons.component";
import growbusiness from "../../../public/images/growbusiness.png";
import Image from "next/image";

function GrowBusiness() {
  const customStyle = {
    backgroundImage: `url(${growbusiness})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="grow-your-business lg:-mb-[90px] md:-mb-[100px] sm:-mb-[120px] -mb-[135px]"
      //   style={customStyle}
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
    </div>
  );
}

export default GrowBusiness;
