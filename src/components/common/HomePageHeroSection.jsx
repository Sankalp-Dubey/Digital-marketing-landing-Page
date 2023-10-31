"use client";
import React from "react";
import { SectionContainer } from "../layout.component";
import Image from "next/image";

const HomePageHeroSection = ({
  backgroundImage,
  secondaryImage,
  children,
  ...others
}) => {
  const customStyle = {
    // backgroundImage: `linear-gradient(to right,
    //   rgba(39,61,80, 0.9), rgba(39,61,80, 0.9)), url(${backgroundImage})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
  };

  return (
    <div
      className="py-10 md:py-10 lg:py-10 text-black  flex items-center"
      style={customStyle}
      {...others}
    >
      <div className="w-full">
        <SectionContainer className="">
          <div className="flex items-center">
            <div className="w-full">{children}</div>
            <Image
              className="w-[30%] h-auto hidden lg:block"
              src={secondaryImage}
              alt="hero-secondary-image"
              width={600}
              height={600}
            />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default HomePageHeroSection;
